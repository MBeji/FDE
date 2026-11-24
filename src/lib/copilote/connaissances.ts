import "server-only";
import { phases } from "@/data/phases";
import { CHARTE } from "@/data/metier";
import { ARBITRAGES, LIGNES_RACI, PRINCIPE_BINOME, ROLES_BINOME, contientA } from "@/data/raci";
import { AUTONOMIE, CONVICTIONS, FILS, OUTILS } from "@/data/referentiels";
import { DOMAINES_STANDARDS } from "@/data/standards";
import {
  frameworks,
  getFramework,
  getGuide,
  getFicheSavoir,
  getSkill,
  getTemplate,
  getWorkflow,
  guides,
  savoir,
  templates,
  type Skill,
  type Workflow,
} from "@/lib/content";
import { nomEtape, nomRole, skillsPublies, workflowsPublies } from "@/lib/skills";

/**
 * Base de connaissances du copilote, construite à partir du contenu du portail.
 * Le sommaire est déterministe (aucune date, aucun identifiant de requête) :
 * il forme le préfixe stable de l'invite, mis en cache côté API.
 */

function sommaire(): string {
  const blocs: string[] = [];

  blocs.push(
    "# Le Parcours AI-Native",
    ...phases.map((p) =>
      [
        `## Phase ${p.numero} — ${p.nom} : ${p.promesse} (/methode/${p.id})`,
        p.resume,
        `Durée type : ${p.duree}.`,
        "Activités :",
        ...p.activites.map((a) => `- ${a.titre} → ${a.resultat}`),
        `Livrables : ${p.livrables.map((l) => `${l.titre}${l.obligatoire ? " (exigé)" : ""}`).join(" ; ")}.`,
        `Jalon ${p.jalon.code} « ${p.jalon.nom} » — ${p.jalon.question}`,
        `Critères de passage : ${p.jalon.criteres.join(" ")}`,
        `Signaux d'arrêt : ${p.jalon.arret.join(" ")}`,
        `Pièges : ${p.pieges.map((x) => `${x.titre} (parade : ${x.parade})`).join(" ")}`,
      ].join("\n"),
    ),
  );

  blocs.push(
    "# Fils transverses",
    ...Object.values(FILS).map((f) => `- ${f.nom} : ${f.principe}`),
    "# Les huit convictions",
    ...CONVICTIONS.map((c, i) => `${i + 1}. ${c.titre}. ${c.texte}`),
    "# Niveaux d'autonomie",
    ...AUTONOMIE.map((a) => `- ${a.code} ${a.nom} : l'agent ${a.agent.toLowerCase()} ; l'humain ${a.humain.toLowerCase()}.`),
    "# Échelle des solutions",
    "1 règle ou automatisation déterministe ; 2 appel de modèle unique ; 3 workflow piloté par le code ; 4 agent ; 5 système multi-agents. Toujours le barreau le plus bas qui suffit.",
  );

  blocs.push(
    "# Catalogue du portail",
    "## Frameworks",
    ...frameworks.map((f) => `- [${f.titre}](/frameworks/${f.id}) — ${f.resume}`),
    "## Templates de livrables",
    ...templates.map((t) => `- [${t.titre}](/templates/${t.id}) — ${t.resume}`),
    "## Guides pratiques",
    ...guides.map((g) => `- [${g.titre}](/guides/${g.id}) — ${g.resume}`),
    "## Savoir terrain",
    ...savoir.map((s) => `- [${s.titre}](/savoir/${s.id}) (${s.type}) — ${s.resume}`),
    "## Ateliers interactifs",
    ...OUTILS.map((o) => `- [${o.nom}](/outils/${o.id}) — ${o.resume}`),
    "## Skills IA (/skills) — procédures exécutables, une par activité du cycle de vie d'un projet",
    "Quand la demande correspond à l'un de ces skills, son contenu complet t'est fourni dans le contexte : suis sa procédure et ses garde-fous.",
    ...skillsPublies.map(
      (s) => `- [${s.titre}](/skills/${s.id}) (${nomEtape(s.etape)}, ${nomRole(s.role)}) — ${s.description}`,
    ),
    "## Workflows agentiques (/skills/workflows) — enchaînements de skills",
    ...workflowsPublies.map(
      (w) => `- [${w.titre}](/skills/workflows/${w.id}) — ${w.resume} Skills : ${w.etapes.map((e) => e.skill).join(" → ")}.`,
    ),
    "## Autres pages",
    "- [Gouvernance de la bibliothèque de skills : format, statuts, versions, droits, accès des agents](/skills/gouvernance)",
    "- [Cas d'usage par secteur](/cas-usage) ; [Glossaire](/glossaire) ; [Mes missions](/missions)",
    "- [Le métier FDE : rôle, charte, règles du pool, situations délicates](/metier) ; [Parcours d'onboarding](/onboarding) ; [Référentiel de compétences et auto-évaluation](/competences)",
    "- [Standards d'ingénierie et revue de conformité](/standards) ; [Entrée par situation](/situations) ; [Assistant de contribution au savoir terrain](/savoir/contribuer)",
    "- [RACI du binôme FDE Design · FDE Build : rôles, matrice, relais, rituels, travail à distance, arbitrages](/raci)",
    "# Charte FDE (/metier)",
    ...CHARTE.map((e) => `${e.numero}. ${e.titre} — ${e.principe}`),
    "# RACI du binôme FDE Design · FDE Build (/raci)",
    PRINCIPE_BINOME,
    ...Object.values(ROLES_BINOME).map((r) => `- ${r.nom} (${r.presence.mode.toLowerCase()}) : ${r.mission}`),
    ...phases.map((p) => {
      const lignes = LIGNES_RACI.filter((l) => l.phase === p.id);
      const de = (role: "design" | "build") =>
        lignes
          .filter((l) => l.type !== "jalon" && contientA(l[role]))
          .map((l) => l.intitule)
          .join(", ");
      const jalon = lignes.find((l) => l.type === "jalon");
      return `- ${p.nom} — le Design répond de : ${de("design") || "rien"} ; le Build répond de : ${de("build") || "rien"}. Jalon ${p.jalon.code} (décision du client) : Design — ${jalon?.precision?.design} Build — ${jalon?.precision?.build}`;
    }),
    `Arbitrages : ${ARBITRAGES.map((a) => `${a.sujet} → ${a.tranche}`).join(" ; ")}.`,
    "# Standards d'ingénierie obligatoires (/standards)",
    ...DOMAINES_STANDARDS.map(
      (d) =>
        `- ${d.nom} : ${d.standards
          .filter((s) => s.niveau === "obligatoire")
          .map((s) => `[${s.id}] ${s.enonce}`)
          .join(" ")}`,
    ),
  );

  return blocs.join("\n");
}

let cache: string | null = null;
export function sommaireDuPortail(): string {
  cache ??= sommaire();
  return cache;
}

interface Document {
  href: string;
  titre: string;
  texte: string;
  motsCles: string;
}

const texteSkill = (s: Skill) =>
  [
    `Skill \`${s.id}\`, version ${s.version}. Étape : ${nomEtape(s.etape)}. Rôle : ${nomRole(s.role)}.`,
    `Entrées : ${s.entrees.join(" ; ")}.`,
    `Sorties : ${s.sorties.join(" ; ")}.`,
    "",
    s.corps,
  ].join("\n");

const texteWorkflow = (w: Workflow) =>
  [
    w.resume,
    `Déclencheur : ${w.declencheur}`,
    `Résultat : ${w.resultat}`,
    "",
    "## Étapes",
    "",
    ...w.etapes.map(
      (e, i) =>
        `${i + 1}. [${getSkill(e.skill)?.titre ?? e.skill}](/skills/${e.skill}) — ${e.intention}${e.controle ? ` Contrôle humain : ${e.controle}` : ""}`,
    ),
    "",
    w.corps,
  ].join("\n");

function tousLesDocuments(): Document[] {
  return [
    ...skillsPublies.map((s) => ({
      href: `/skills/${s.id}`,
      titre: `Skill : ${s.titre}`,
      texte: texteSkill(s),
      motsCles: `${s.description} ${s.tags.join(" ")} skill`,
    })),
    ...workflowsPublies.map((w) => ({
      href: `/skills/workflows/${w.id}`,
      titre: `Workflow : ${w.titre}`,
      texte: texteWorkflow(w),
      motsCles: `${w.resume} workflow enchaînement`,
    })),
    ...frameworks.map((f) => ({
      href: `/frameworks/${f.id}`,
      titre: f.titre,
      texte: f.corps,
      motsCles: `${f.resume} ${f.tags.join(" ")}`,
    })),
    ...guides.map((g) => ({
      href: `/guides/${g.id}`,
      titre: g.titre,
      texte: g.corps,
      motsCles: `${g.resume} ${g.tags.join(" ")}`,
    })),
    ...savoir.map((s) => ({
      href: `/savoir/${s.id}`,
      titre: s.titre,
      texte: s.corps,
      motsCles: `${s.resume} ${s.tags.join(" ")}`,
    })),
    ...templates.map((t) => ({
      href: `/templates/${t.id}`,
      titre: t.titre,
      texte: `## Mode d'emploi\n\n${t.modeEmploi}\n\n## Template\n\n${t.template}`,
      motsCles: `${t.resume} ${t.tags.join(" ")} template livrable`,
    })),
  ];
}

const MOTS_VIDES = new Set(
  "a au aux avec ce ces cette comment dans de des du elle en est et il je la le les leur ma mes mon ne nos notre nous on ou par pas pour que quel quelle quels quelles qui quoi sa se ses si son sur un une vos votre vous y faire fais fait dois doit peux peut faut moi aide".split(" "),
);

function normaliser(t: string): string {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function termes(question: string): string[] {
  return [...new Set(normaliser(question).split(/[^a-z0-9]+/).filter((m) => m.length > 2 && !MOTS_VIDES.has(m)))];
}

/** Document du portail affiché sur la page d'où vient la question, s'il y en a un. */
export function documentDeLaPage(chemin: string): Document | null {
  const [, section, id, sousId] = chemin.split("/");
  if (!id) return null;
  if (section === "skills") {
    if (id === "workflows") {
      const w = sousId ? getWorkflow(sousId) : undefined;
      return w ? { href: chemin, titre: `Workflow : ${w.titre}`, texte: texteWorkflow(w), motsCles: "" } : null;
    }
    const s = getSkill(id);
    return s && !sousId ? { href: chemin, titre: `Skill : ${s.titre}`, texte: texteSkill(s), motsCles: "" } : null;
  }
  if (section === "frameworks") {
    const f = getFramework(id);
    return f ? { href: chemin, titre: f.titre, texte: f.corps, motsCles: "" } : null;
  }
  if (section === "guides") {
    const g = getGuide(id);
    return g ? { href: chemin, titre: g.titre, texte: g.corps, motsCles: "" } : null;
  }
  if (section === "savoir") {
    const s = getFicheSavoir(id);
    return s ? { href: chemin, titre: s.titre, texte: s.corps, motsCles: "" } : null;
  }
  if (section === "templates") {
    const t = getTemplate(id);
    return t
      ? {
          href: chemin,
          titre: t.titre,
          texte: `## Mode d'emploi\n\n${t.modeEmploi}\n\n## Template\n\n${t.template}\n\n## Exemple rempli\n\n${t.exemple}`,
          motsCles: "",
        }
      : null;
  }
  return null;
}

/** Recherche lexicale simple : suffisante pour quelques centaines de pages, sans index externe. */
export function documentsPertinents(question: string, exclure: string[], maximum = 3): Document[] {
  const mots = termes(question);
  if (!mots.length) return [];
  const notes = tousLesDocuments()
    .filter((d) => !exclure.includes(d.href))
    .map((d) => {
      const titre = normaliser(d.titre);
      const cles = normaliser(d.motsCles);
      const corps = normaliser(d.texte);
      let score = 0;
      for (const m of mots) {
        if (titre.includes(m)) score += 6;
        if (cles.includes(m)) score += 3;
        const occurrences = corps.split(m).length - 1;
        score += Math.min(occurrences, 5);
      }
      return { d, score };
    })
    .filter((x) => x.score >= 8)
    .sort((a, b) => b.score - a.score);
  return notes.slice(0, maximum).map((x) => x.d);
}
