import { getSkill, getWorkflow, taxonomieSkills } from "@/lib/content";
import { documentDeLaPage } from "@/lib/copilote/connaissances";
import {
  entreeCatalogue,
  entreeWorkflow,
  rechercherSkills,
  skillBrut,
  skillsPublies,
  workflowsPublies,
} from "@/lib/skills";

/**
 * Serveur MCP de la bibliothèque de skills (transport HTTP, sans état).
 *
 * Un agent y découvre les skills publiés par la tâche qu'on lui confie, charge celui qui convient,
 * puis les ressources du portail que le skill cite. Lecture seule : aucun outil ne modifie quoi que ce soit.
 *
 * Chaque requête POST porte un message JSON-RPC et reçoit sa réponse en JSON ; le serveur n'ouvre
 * pas de flux et ne garde aucune session. L'accès est celui du portail (voir src/proxy.ts).
 */

const VERSIONS_PROTOCOLE = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];
const TAILLE_MAX = 100_000;

const INSTRUCTIONS = `Bibliothèque de skills IA du pool FDE : le savoir-faire de l'entreprise sur tout le cycle de vie d'un projet (avant-vente, réponse aux appels d'offres, cadrage, conception, développement, tests, déploiement, livraison, exploitation, pilotage).

Avant de traiter une tâche de ce cycle de vie, cherche le skill qui la couvre avec rechercher_skills, charge-le avec lire_skill, puis suis sa procédure et respecte ses garde-fous : n'invente pas la méthode. Un skill cite des ressources du portail (templates, frameworks, guides) par leur chemin : charge celles dont tu as besoin avec lire_ressource. Pour une situation de bout en bout, lister_workflows donne les enchaînements de skills et leurs points de contrôle humains. Tout est en lecture seule.`;

const ids = (liste: { id: string }[]) => liste.map((x) => x.id);

const OUTILS = [
  {
    name: "rechercher_skills",
    title: "Rechercher des skills",
    description:
      "Trouve les skills publiés qui répondent à une tâche décrite en langage naturel, du plus pertinent au moins pertinent. À appeler en premier, avant d'exécuter une activité du cycle de vie d'un projet. Sans « tache », liste les skills qui passent les filtres, dans l'ordre du cycle de vie. Renvoie pour chaque skill son nom, sa description, ses entrées, ses sorties, ses prérequis et ses suites : charger ensuite le skill retenu avec lire_skill.",
    inputSchema: {
      type: "object",
      properties: {
        tache: {
          type: "string",
          description: "La tâche à accomplir, en français. Exemple : « analyser un cahier des charges et lister les exigences ».",
        },
        etape: { type: "string", enum: ids(taxonomieSkills.etapes), description: "Étape du cycle de vie." },
        role: {
          type: "string",
          enum: ["design", "build"],
          description: "Rôle du binôme FDE. Les skills portés par le binôme sont renvoyés pour les deux rôles.",
        },
        domaine: { type: "string", enum: ids(taxonomieSkills.domaines), description: "Domaine métier." },
        technologie: { type: "string", enum: ids(taxonomieSkills.technologies), description: "Technologie concernée." },
        cas_usage: {
          type: "string",
          enum: ids(taxonomieSkills.casUsage).filter((c) => c !== "tout-projet"),
          description: "Type de solution. Les skills valables pour tout projet sont toujours renvoyés.",
        },
        limite: { type: "integer", minimum: 1, maximum: 60, description: "Nombre maximal de skills renvoyés (8 par défaut)." },
      },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "lire_skill",
    title: "Lire un skill",
    description:
      "Charge le SKILL.md complet d'un skill publié : classification, mission, déclencheurs, entrées, procédure, livrable, critères de qualité, garde-fous et enchaînements. À appeler dès qu'un skill est retenu, avant d'exécuter la tâche.",
    inputSchema: {
      type: "object",
      properties: { nom: { type: "string", description: "Le nom du skill, tel que renvoyé par rechercher_skills. Exemple : « qualifier-opportunite »." } },
      required: ["nom"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "lister_workflows",
    title: "Lister les workflows",
    description:
      "Liste les workflows publiés : des enchaînements de skills qui traitent une situation de bout en bout (répondre à un appel d'offres, mettre en production, traiter un incident…), avec le déclencheur, le résultat et la suite ordonnée des skills.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "lire_workflow",
    title: "Lire un workflow",
    description:
      "Charge un workflow : ses étapes dans l'ordre, l'intention de chacune, les points de contrôle où une personne doit décider, et ses règles d'orchestration. À appeler avant d'orchestrer plusieurs skills.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", description: "L'identifiant du workflow, tel que renvoyé par lister_workflows." } },
      required: ["id"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "lire_ressource",
    title: "Lire une ressource du portail",
    description:
      "Charge en Markdown une ressource du portail citée par un skill : un template de livrable (/templates/<id>), un framework (/frameworks/<id>), un guide (/guides/<id>) ou une fiche de savoir terrain (/savoir/<id>).",
    inputSchema: {
      type: "object",
      properties: { chemin: { type: "string", description: "Le chemin tel qu'il figure dans le skill. Exemple : « /templates/fiche-agent »." } },
      required: ["chemin"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

/* ------------------------------------------------------------------ */
/* Outils                                                              */
/* ------------------------------------------------------------------ */

type Arguments = Record<string, unknown>;

class ErreurOutil extends Error {}

const texte = (args: Arguments, cle: string): string => (typeof args[cle] === "string" ? (args[cle] as string).trim() : "");

function exigerParmi(args: Arguments, cle: string, valeurs: string[]): string | undefined {
  const v = texte(args, cle);
  if (!v) return undefined;
  if (!valeurs.includes(v)) throw new ErreurOutil(`« ${cle} » = « ${v} » : valeur inconnue. Valeurs possibles : ${valeurs.join(", ")}.`);
  return v;
}

function executer(nom: string, args: Arguments): string {
  if (nom === "rechercher_skills") {
    const limite = Number.isInteger(args.limite) ? Math.max(1, Math.min(60, args.limite as number)) : 8;
    const tache = texte(args, "tache");
    const filtres = {
      etape: exigerParmi(args, "etape", ids(taxonomieSkills.etapes)),
      role: exigerParmi(args, "role", ["design", "build"]),
      domaine: exigerParmi(args, "domaine", ids(taxonomieSkills.domaines)),
      technologie: exigerParmi(args, "technologie", ids(taxonomieSkills.technologies)),
      casUsage: exigerParmi(args, "cas_usage", ids(taxonomieSkills.casUsage)),
    };
    const trouves = rechercherSkills(tache, filtres, limite);
    if (!trouves.length) {
      return JSON.stringify(
        {
          skills: [],
          conseil:
            "Aucun skill publié ne correspond. Reformuler la tâche avec d'autres mots, retirer un filtre, ou appeler rechercher_skills sans « tache » pour parcourir une étape. S'il n'existe vraiment aucun skill, le signaler : c'est un skill à créer (skill « creer-skill »).",
        },
        null,
        2,
      );
    }
    return JSON.stringify(
      {
        skills: trouves.map((s) => {
          const e = entreeCatalogue(s);
          return {
            nom: e.name,
            titre: e.titre,
            description: e.description,
            version: e.version,
            etape: e.etape,
            role: e.role,
            entrees: e.entrees,
            sorties: e.sorties,
            prerequis: e.prerequis,
            suivants: e.suivants,
            workflows: e.workflows,
          };
        }),
        suite: "Charger le skill retenu avec lire_skill avant d'exécuter la tâche.",
      },
      null,
      2,
    );
  }

  if (nom === "lire_skill") {
    const id = texte(args, "nom");
    const s = getSkill(id);
    if (!s || s.statut !== "publie") {
      const proches = rechercherSkills(id.replace(/-/g, " "), {}, 5).map((x) => x.id);
      throw new ErreurOutil(
        `Aucun skill publié ne s'appelle « ${id} ».${proches.length ? ` Skills proches : ${proches.join(", ")}.` : ""} Utiliser rechercher_skills pour trouver le bon nom.`,
      );
    }
    return skillBrut(s);
  }

  if (nom === "lister_workflows") {
    return JSON.stringify({ workflows: workflowsPublies.map(entreeWorkflow) }, null, 2);
  }

  if (nom === "lire_workflow") {
    const id = texte(args, "id");
    const w = getWorkflow(id);
    if (!w || w.statut !== "publie") {
      throw new ErreurOutil(`Aucun workflow publié ne porte l'identifiant « ${id} ». Workflows disponibles : ${workflowsPublies.map((x) => x.id).join(", ")}.`);
    }
    return [
      `# ${w.titre}`,
      "",
      `Workflow \`${w.id}\`, version ${w.version}.`,
      "",
      w.resume,
      "",
      `- **Déclencheur** : ${w.declencheur}`,
      `- **Résultat** : ${w.resultat}`,
      "",
      "## Étapes",
      "",
      ...w.etapes.map((e, i) => {
        const s = getSkill(e.skill);
        const controle = e.controle ? ` **Contrôle humain avant de poursuivre** : ${e.controle}` : "";
        return `${i + 1}. \`${e.skill}\` — ${s?.titre ?? e.skill}. ${e.intention}${controle}`;
      }),
      "",
      "Charger le skill de chaque étape avec lire_skill au moment de l'exécuter. S'arrêter à chaque contrôle humain et attendre la décision.",
      "",
      w.corps,
    ].join("\n");
  }

  if (nom === "lire_ressource") {
    const chemin = texte(args, "chemin").split(/[#?]/)[0].replace(/\/$/, "");
    const doc = documentDeLaPage(chemin);
    if (!doc) {
      throw new ErreurOutil(
        `Ressource introuvable : « ${chemin} ». Chemins lisibles : /templates/<id>, /frameworks/<id>, /guides/<id>, /savoir/<id>, /skills/<nom>, /skills/workflows/<id>.`,
      );
    }
    return `# ${doc.titre}\n\n${doc.texte}`;
  }

  throw new ErreurOutil(`Outil inconnu : « ${nom} ». Outils disponibles : ${OUTILS.map((o) => o.name).join(", ")}.`);
}

/* ------------------------------------------------------------------ */
/* JSON-RPC                                                            */
/* ------------------------------------------------------------------ */

type Id = string | number | null;

interface Message {
  jsonrpc?: unknown;
  id?: unknown;
  method?: unknown;
  params?: unknown;
}

const reponse = (id: Id, result: unknown) => ({ jsonrpc: "2.0" as const, id, result });
const echec = (id: Id, code: number, message: string) => ({ jsonrpc: "2.0" as const, id, error: { code, message } });

/** Traite un message. Renvoie null pour une notification, qui n'attend pas de réponse. */
function traiter(message: Message) {
  const aUnId = typeof message.id === "string" || typeof message.id === "number";
  const id: Id = aUnId ? (message.id as string | number) : null;
  if (message.jsonrpc !== "2.0" || typeof message.method !== "string") {
    // Une réponse du client (sans méthode) n'appelle rien en retour.
    if (message.jsonrpc === "2.0" && message.method === undefined) return null;
    return echec(id, -32600, "Requête JSON-RPC invalide.");
  }
  if (!aUnId) return null;

  const params = (message.params && typeof message.params === "object" ? message.params : {}) as Record<string, unknown>;

  switch (message.method) {
    case "initialize": {
      const demandee = typeof params.protocolVersion === "string" ? params.protocolVersion : "";
      return reponse(id, {
        protocolVersion: VERSIONS_PROTOCOLE.includes(demandee) ? demandee : VERSIONS_PROTOCOLE[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: "fde-atlas-skills", title: "FDE Atlas — bibliothèque de skills IA", version: "1.0.0" },
        instructions: `${INSTRUCTIONS}\n\n${skillsPublies.length} skills et ${workflowsPublies.length} workflows publiés.`,
      });
    }
    case "ping":
      return reponse(id, {});
    case "tools/list":
      return reponse(id, { tools: OUTILS });
    case "tools/call": {
      const nom = typeof params.name === "string" ? params.name : "";
      const args = (params.arguments && typeof params.arguments === "object" ? params.arguments : {}) as Arguments;
      if (!OUTILS.some((o) => o.name === nom)) return echec(id, -32602, `Outil inconnu : ${nom}`);
      try {
        return reponse(id, { content: [{ type: "text", text: executer(nom, args) }], isError: false });
      } catch (e) {
        // Une erreur d'usage est rendue à l'agent comme résultat, pour qu'il puisse se corriger.
        const texteErreur = e instanceof ErreurOutil ? e.message : "Erreur interne pendant l'exécution de l'outil.";
        return reponse(id, { content: [{ type: "text", text: texteErreur }], isError: true });
      }
    }
    default:
      return echec(id, -32601, `Méthode non prise en charge : ${message.method}`);
  }
}

const json = (corps: unknown, status = 200) =>
  new Response(JSON.stringify(corps), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export async function POST(request: Request) {
  // Un navigateur ne doit pas pouvoir appeler le serveur depuis un autre site.
  const origine = request.headers.get("origin");
  if (origine) {
    let memeHote = false;
    try {
      memeHote = new URL(origine).host === (request.headers.get("x-forwarded-host") ?? request.headers.get("host"));
    } catch {
      // Origine illisible : refusée.
    }
    if (!memeHote) return json(echec(null, -32600, "Origine refusée."), 403);
  }

  let corps: unknown;
  try {
    const brut = await request.text();
    if (brut.length > TAILLE_MAX) return json(echec(null, -32600, "Requête trop volumineuse."), 413);
    corps = JSON.parse(brut);
  } catch {
    return json(echec(null, -32700, "JSON illisible."), 400);
  }

  if (Array.isArray(corps)) {
    if (!corps.length) return json(echec(null, -32600, "Lot vide."), 400);
    const reponses = corps.map((m) => traiter((m ?? {}) as Message)).filter((r) => r !== null);
    return reponses.length ? json(reponses) : new Response(null, { status: 202 });
  }
  if (!corps || typeof corps !== "object") return json(echec(null, -32600, "Requête JSON-RPC invalide."), 400);

  const resultat = traiter(corps as Message);
  return resultat ? json(resultat) : new Response(null, { status: 202 });
}

/** Le serveur n'ouvre pas de flux d'événements et ne tient pas de session. */
const nonPermis = () => new Response(null, { status: 405, headers: { Allow: "POST" } });
export const GET = nonPermis;
export const DELETE = nonPermis;
