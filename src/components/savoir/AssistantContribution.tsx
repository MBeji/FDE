"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileText,
  History,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import {
  Bouton,
  CLASSES_SAISIE,
  Carte,
  Champ,
  Pastille,
} from "@/components/ui";
import { PHASE_IDS, PHASES_RESUME, SECTEURS } from "@/data/referentiels";
import type { PhaseId } from "@/data/types";
import { cn } from "@/lib/cn";
import {
  FORMATS_MISSION,
  STATUTS_VALEUR,
  useMissions,
  type Mission,
} from "@/lib/missions";
import {
  creerStock,
  telecharger,
  useEstClient,
  useStock,
} from "@/lib/stockage";

/* ------------------------------------------------------------------ */
/* Définition des types de fiche                                       */
/* ------------------------------------------------------------------ */

type TypeFiche = "rex" | "pattern" | "anti-pattern";

interface DefinitionSection {
  id: string;
  titre: string;
  consigne: string;
  exemple: string;
}

interface DefinitionType {
  nom: string;
  quand: string;
  mots: [number, number];
  sections: DefinitionSection[];
}

const TYPES: Record<TypeFiche, DefinitionType> = {
  rex: {
    nom: "Retour d'expérience",
    quand:
      "Une mission précise, racontée avec ses décisions, ses résultats mesurés et ce que vous feriez autrement. Choisissez-le en fin de phase ou de mission.",
    mots: [400, 800],
    sections: [
      {
        id: "contexte",
        titre: "Contexte",
        consigne:
          "Secteur, domaine, problème posé et situation de départ, en ordres de grandeur. Aucun nom, aucun chiffre qui permette de reconnaître le client.",
        exemple:
          "Opérateur télécom européen de plusieurs millions de clients. Support technique aux PME : plus d'une journée pour résoudre un incident, un incident sur deux seulement réglé au premier contact.",
      },
      {
        id: "fait",
        titre: "Ce que nous avons fait",
        consigne:
          "Les décisions structurantes, dans l'ordre, et pourquoi chacune a été prise. Pas un journal exhaustif.",
        exemple:
          "La demande de chatbot a été reformulée en problème de délai. Le processus a été reconstruit en trois voies (autonome, assistée, experte). Le golden set a été constitué avant le premier prompt, puis deux semaines de mode fantôme avant toute action réelle.",
      },
      {
        id: "resultats",
        titre: "Résultats",
        consigne:
          "Ce qui a été mesuré, contre quelle référence et par qui. Préférez les ratios et les évolutions aux valeurs absolues.",
        exemple:
          "Sur le pilote, délai de résolution divisé par plus de deux et près d'un tiers des tickets résolus sans intervention humaine. Mesure faite contre une référence validée par la finance.",
      },
      {
        id: "marche",
        titre: "Ce qui a marché",
        consigne:
          "Deux à quatre pratiques transposables, chacune avec la raison de son effet.",
        exemple:
          "Le binôme expert métier et FDE pour annoter le golden set : les critères de justesse étaient ceux du métier, et le métier a fait confiance aux résultats.",
      },
      {
        id: "autrement",
        titre: "Ce que nous ferions autrement",
        consigne:
          "Les erreurs et ce qu'elles ont coûté, sans chercher de coupable.",
        exemple:
          "Nous aurions lancé le nettoyage de la base de connaissances dès le diagnostic : un tiers des articles étaient obsolètes et l'agent les citait.",
      },
      {
        id: "retenir",
        titre: "À retenir",
        consigne:
          "Trois à cinq enseignements d'une phrase, utilisables par un FDE qui ne connaît pas la mission.",
        exemple:
          "- La valeur était dans les files d'attente internes, pas dans l'interface client.",
      },
    ],
  },
  pattern: {
    nom: "Pattern",
    quand:
      "Une pratique qui a marché au moins deux fois, dans des contextes différents, et que vous recommanderiez à tout le pool.",
    mots: [300, 500],
    sections: [
      {
        id: "contexte",
        titre: "Contexte",
        consigne:
          "La situation de mission où le problème se pose, et pourquoi la réponse habituelle ne suffit pas.",
        exemple:
          "Au passage du prototype au pilote, il faut autoriser un agent à agir sur le flux réel sans aucune preuve de son comportement en production.",
      },
      {
        id: "pattern",
        titre: "Le pattern",
        consigne:
          "La pratique énoncée en une phrase à l'impératif, puis décrite en quelques lignes.",
        exemple:
          "Faire tourner l'agent sur le flux réel, sans aucun effet, et comparer chacune de ses décisions à celle de l'humain avant d'autoriser la première action.",
      },
      {
        id: "pourquoi",
        titre: "Pourquoi ça marche",
        consigne:
          "Le mécanisme : ce que la pratique change, pour qui, et quel risque elle supprime.",
        exemple:
          "Les écarts apparaissent sur des cas réels sans conséquence pour le client ; le métier juge sur pièces et l'autonomie s'accorde sur preuves.",
      },
      {
        id: "mise-en-oeuvre",
        titre: "Mise en œuvre",
        consigne: "Étapes numérotées, durée, rôles et critère de passage.",
        exemple:
          "1. Brancher l'agent en lecture seule.\n2. Journaliser la décision humaine et celle de l'agent.\n3. Revoir les divergences chaque semaine avec un expert métier.",
      },
      {
        id: "limites",
        titre: "Limites",
        consigne:
          "Quand ne pas l'appliquer, ce que cela coûte, ce que cela ne règle pas.",
        exemple:
          "Inapplicable si la décision humaine n'est pas tracée dans un système. Double la charge de revue pendant la période.",
      },
    ],
  },
  "anti-pattern": {
    nom: "Anti-pattern",
    quand:
      "Un échec récurrent, observé sur plusieurs missions, que l'on reconnaît à des symptômes et dont on sait sortir.",
    mots: [300, 500],
    sections: [
      {
        id: "symptomes",
        titre: "Symptômes",
        consigne: "Les signes observables, tels qu'on les constate en mission.",
        exemple:
          "Trois prototypes réussis en démonstration, aucun en production ; chaque COPIL demande une démonstration de plus.",
      },
      {
        id: "causes",
        titre: "Pourquoi ça arrive",
        consigne:
          "Les causes, y compris les incitations qui rendent l'erreur tentante.",
        exemple:
          "Le prototype est financé comme une expérience, sans propriétaire métier ni budget d'exploitation ; personne n'a défini ce qui le ferait passer à l'étape suivante.",
      },
      {
        id: "consequences",
        titre: "Conséquences",
        consigne: "Ce que cela coûte : valeur, confiance, délais.",
        exemple:
          "Le sponsor se lasse, les équipes concluent que « l'IA ne marche pas chez nous », le budget suivant devient difficile à obtenir.",
      },
      {
        id: "sortir",
        titre: "Comment en sortir",
        consigne:
          "Les actions à mener, dans l'ordre, quand on est déjà dedans.",
        exemple:
          "Choisir un seul prototype, lui nommer un propriétaire métier, fixer les critères de passage en pilote et une date de décision en COPIL.",
      },
      {
        id: "eviter",
        titre: "Comment l'éviter",
        consigne: "Ce qu'il faut faire dès le cadrage pour ne pas y tomber.",
        exemple:
          "Écrire dès la charte les critères de passage de chaque étape et le budget d'exploitation visé.",
      },
    ],
  },
};

const CONTROLES_ANONYMISATION: { id: string; libelle: string }[] = [
  {
    id: "client",
    libelle:
      "Aucun nom de client, de filiale, de marque, de produit ou de projet interne au client.",
  },
  {
    id: "personnes",
    libelle:
      "Aucun nom de personne, ni côté client ni côté équipe : uniquement des rôles.",
  },
  {
    id: "chiffres",
    libelle:
      "Aucun chiffre qui permette d'identifier le client (chiffre d'affaires, effectifs, nombre de clients, volumes exacts) : ordres de grandeur et ratios seulement.",
  },
  {
    id: "contexte",
    libelle:
      "Aucun lieu, site, date précise ou événement public qui permette de reconnaître le client.",
  },
  {
    id: "engagements",
    libelle:
      "Les engagements de confidentialité de la mission autorisent ce partage interne ; en cas de doute, vérifier avant de proposer la fiche.",
  },
];

/* ------------------------------------------------------------------ */
/* Brouillon                                                           */
/* ------------------------------------------------------------------ */

interface Brouillon {
  type: TypeFiche;
  titre: string;
  resume: string;
  phases: PhaseId[];
  motsCles: string;
  secteur: string;
  mois: string;
  /** Contenu par section, clé « type:section » pour conserver la saisie si l'on change de type. */
  sections: Record<string, string>;
  anonymisation: Record<string, boolean>;
}

const INITIAL: Brouillon = {
  type: "rex",
  titre: "",
  resume: "",
  phases: [],
  motsCles: "",
  secteur: "",
  mois: "",
  sections: {},
  anonymisation: {},
};

const stock = creerStock<Brouillon>(
  "fde-atlas:savoir-contribution:v1",
  INITIAL,
);

const cleSection = (type: TypeFiche, section: string) => `${type}:${section}`;

/* ------------------------------------------------------------------ */
/* Génération du fichier                                               */
/* ------------------------------------------------------------------ */

function versIdentifiant(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70)
    .replace(/-+$/g, "");
}

function identifiantFiche(b: Brouillon): string {
  const base = versIdentifiant(b.titre);
  if (!base) return "";
  return b.type === "rex" && !base.startsWith("rex-") ? `rex-${base}` : base;
}

/** Valeur YAML entre guillemets doubles, sans guillemet double ni retour à la ligne à l'intérieur. */
function chaineYaml(valeur: string): string {
  const propre = valeur
    .replace(/\s+/g, " ")
    .trim()
    .replace(/"([^"]*)"/g, "« $1 »")
    .replace(/"/g, "'")
    .replace(/\\/g, "\\\\");
  return `"${propre}"`;
}

function listeMotsCles(texte: string): string[] {
  return [...new Set(texte.split(/[,;]/).map(versIdentifiant).filter(Boolean))];
}

function genererMarkdown(b: Brouillon, id: string): string {
  const def = TYPES[b.type];
  const phases = PHASE_IDS.filter((p) => b.phases.includes(p));
  const estRex = b.type === "rex";
  const entete = [
    "---",
    `id: ${id || "a-renseigner"}`,
    `titre: ${chaineYaml(b.titre)}`,
    `resume: ${chaineYaml(b.resume)}`,
    `type: ${b.type}`,
    `phases: [${phases.join(", ")}]`,
    `tags: [${listeMotsCles(b.motsCles).join(", ")}]`,
    `secteur: ${chaineYaml(estRex ? b.secteur : "")}`,
    `date: ${chaineYaml(estRex ? b.mois : "")}`,
    "---",
  ];
  const corps = def.sections.map((s) => {
    const texte = (b.sections[cleSection(b.type, s.id)] ?? "").trim();
    return `## ${s.titre}\n\n${texte}`;
  });
  return `${entete.join("\n")}\n\n${corps.join("\n\n")}\n`;
}

function compterMots(texte: string): number {
  return texte.split(/\s+/).filter((m) => /[\p{L}\p{N}]/u.test(m)).length;
}

const sansAccents = (t: string) =>
  t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Noms connus de la mission active qui ne doivent pas apparaître dans la fiche. */
function termesSensibles(m: Mission | null): string[] {
  if (!m) return [];
  const termes = [
    m.client,
    m.nom,
    m.sponsor,
    m.auteur,
    ...m.sponsor.split(/\s+/),
    ...m.auteur.split(/\s+/),
  ];
  return [...new Set(termes.map((t) => t.trim()).filter((t) => t.length >= 4))];
}

/* ------------------------------------------------------------------ */
/* Pré-remplissage depuis le journal de la mission                     */
/* ------------------------------------------------------------------ */

const nombre = (n: number | null) =>
  n === null ? "non mesuré" : n.toLocaleString("fr-FR");

function preRemplissage(m: Mission): Record<string, string> {
  const parDate = [...m.journal].sort((a, b) => a.date.localeCompare(b.date));
  const decisions = parDate.filter((e) => e.type === "decision");
  const apprentissages = parDate.filter((e) => e.type === "apprentissage");
  const ligne = (titre: string, detail: string) =>
    `- ${titre}${detail.trim() ? ` : ${detail.trim()}` : ""}`;

  const contexte = [
    "_[Décrire le client en ordres de grandeur (secteur, taille, marché) sans le nommer.]_",
    "",
    `Format de mission : ${FORMATS_MISSION[m.format].nom}, phases ${m.phases.map((p) => PHASES_RESUME[p].nom.toLowerCase()).join(", ")}.`,
  ];
  if (m.domaine.trim()) contexte.push(`Domaine : ${m.domaine.trim()}.`);
  if (m.probleme.trim()) contexte.push(`Problème posé : ${m.probleme.trim()}`);
  if (m.ambition.trim()) contexte.push(`Ambition : ${m.ambition.trim()}`);

  const fait = decisions.length
    ? [
        "_[Garder les trois à cinq décisions structurantes et dire pourquoi chacune a été prise.]_",
        "",
        ...decisions.map((d) => ligne(d.titre, d.detail)),
      ]
    : [
        "_[Aucune décision dans le journal : décrire les décisions structurantes, dans l'ordre.]_",
      ];

  const resultats = m.valeur.length
    ? [
        "_[Remplacer les valeurs absolues identifiantes par des ratios ou des évolutions.]_",
        "",
        ...m.valeur.map(
          (v) =>
            `- ${v.indicateur} : référence ${nombre(v.reference)}${v.unite ? ` ${v.unite}` : ""}, cible ${nombre(v.cible)}, réalisé ${nombre(v.realise)} (${STATUTS_VALEUR[v.statut].nom.toLowerCase()}${v.methode.trim() ? `, ${v.methode.trim()}` : ""})`,
        ),
      ]
    : [
        "_[Registre de valeur vide : indiquer ce qui a été mesuré, contre quelle référence et par qui.]_",
      ];

  const marche = apprentissages.length
    ? [
        "_[Répartir ces apprentissages entre « Ce qui a marché » et « Ce que nous ferions autrement ».]_",
        "",
        ...apprentissages.map((a) => ligne(a.titre, a.detail)),
      ]
    : [
        "_[Aucun apprentissage dans le journal : décrire deux à quatre pratiques transposables.]_",
      ];

  return {
    [cleSection("rex", "contexte")]: contexte.join("\n"),
    [cleSection("rex", "fait")]: fait.join("\n"),
    [cleSection("rex", "resultats")]: resultats.join("\n"),
    [cleSection("rex", "marche")]: marche.join("\n"),
  };
}

/* ------------------------------------------------------------------ */
/* Composant                                                           */
/* ------------------------------------------------------------------ */

export function AssistantContribution() {
  const [b, setB] = useStock(stock);
  const estClient = useEstClient();
  const { active } = useMissions();
  const mission = estClient ? active : null;
  const [copie, setCopie] = useState(false);

  const def = TYPES[b.type];
  const estRex = b.type === "rex";
  const id = identifiantFiche(b);
  const markdown = genererMarkdown(b, id);
  const corps = def.sections
    .map((s) => b.sections[cleSection(b.type, s.id)] ?? "")
    .join(" ");
  const mots = compterMots(corps);
  const [min, max] = def.mots;

  const maj = (champs: Partial<Brouillon>) =>
    setB((p) => ({ ...p, ...champs }));
  const majSection = (section: string, texte: string) =>
    setB((p) => ({
      ...p,
      sections: { ...p.sections, [cleSection(p.type, section)]: texte },
    }));

  /* Contrôles bloquants avant export */
  const manques: string[] = [];
  if (!id)
    manques.push(
      "Donner un titre à la fiche (il fournit l'identifiant du fichier).",
    );
  if (!b.resume.trim()) manques.push("Rédiger le résumé.");
  if (b.phases.length === 0)
    manques.push("Indiquer au moins une phase concernée.");
  const sectionsVides = def.sections.filter(
    (s) => !(b.sections[cleSection(b.type, s.id)] ?? "").trim(),
  );
  if (sectionsVides.length)
    manques.push(
      `Compléter les sections : ${sectionsVides.map((s) => s.titre).join(", ")}.`,
    );
  if (/_\[/.test(corps))
    manques.push(
      "Retirer les indications entre crochets laissées par le pré-remplissage.",
    );
  if (estRex && !b.secteur) manques.push("Choisir le secteur.");
  if (estRex && !/^\d{4}-\d{2}$/.test(b.mois))
    manques.push("Indiquer le mois de la mission.");
  const nonCoches = estRex
    ? CONTROLES_ANONYMISATION.filter((c) => !b.anonymisation[c.id])
    : [];
  if (nonCoches.length)
    manques.push(
      "Valider chaque point de la liste de contrôle d'anonymisation.",
    );
  const texteComplet = sansAccents(
    `${b.titre} ${b.resume} ${b.motsCles} ${corps}`,
  );
  const nomsTrouves = termesSensibles(mission).filter((t) =>
    texteComplet.includes(sansAccents(t)),
  );
  if (nomsTrouves.length)
    manques.push(
      `Retirer de la fiche les noms de la mission active : ${nomsTrouves.map((t) => `« ${t} »`).join(", ")}.`,
    );
  const pret = manques.length === 0;

  function preRemplir() {
    if (!mission) return;
    const valeurs = preRemplissage(mission);
    const occupees = Object.keys(valeurs).filter((k) =>
      (b.sections[k] ?? "").trim(),
    );
    if (
      occupees.length &&
      !window.confirm(
        "Certaines sections du retour d'expérience sont déjà rédigées. Les remplacer par le contenu du journal ?",
      )
    )
      return;
    setB((p) => ({
      ...p,
      phases: p.phases.length ? p.phases : [...mission.phases],
      secteur: p.secteur || (mission.secteur ? SECTEURS[mission.secteur] : ""),
      sections: { ...p.sections, ...valeurs },
    }));
  }

  async function copier() {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopie(true);
      setTimeout(() => setCopie(false), 1800);
    } catch {
      // Presse-papiers indisponible (contexte non sécurisé) : le téléchargement reste possible.
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      {/* ---------------------------------------------------------- Saisie */}
      <div className="space-y-6">
        <Carte className="p-5">
          <h2 className="text-[1rem] font-semibold text-ink">
            1. Type de fiche
          </h2>
          <div
            role="radiogroup"
            aria-label="Type de fiche"
            className="mt-3 grid gap-2 sm:grid-cols-3"
          >
            {(Object.keys(TYPES) as TypeFiche[]).map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={b.type === t}
                onClick={() => maj({ type: t })}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-left transition-[border-color,background-color]",
                  b.type === t
                    ? "border-accent-line bg-accent-soft"
                    : "border-line bg-surface hover:border-line-strong",
                )}
              >
                <span className="block text-[0.9rem] font-semibold text-ink">
                  {TYPES[t].nom}
                </span>
                <span className="mt-0.5 block text-[0.78rem] leading-snug text-ink-2">
                  {TYPES[t].quand}
                </span>
              </button>
            ))}
          </div>
        </Carte>

        <Carte className="space-y-4 p-5">
          <h2 className="text-[1rem] font-semibold text-ink">
            2. En-tête de la fiche
          </h2>
          <Champ
            libelle="Titre"
            aide={
              id
                ? `Identifiant et nom du fichier : ${id}.md`
                : "L'identifiant du fichier est dérivé du titre."
            }
          >
            <input
              className={CLASSES_SAISIE}
              value={b.titre}
              onChange={(e) => maj({ titre: e.target.value })}
              placeholder={
                estRex
                  ? "REX — Support technique augmenté chez un opérateur télécom"
                  : "Le mode fantôme"
              }
            />
          </Champ>
          <Champ
            libelle="Résumé"
            aide="Une ou deux phrases : ce que le lecteur apprend, pas ce que la fiche contient."
          >
            <textarea
              rows={2}
              className={CLASSES_SAISIE}
              value={b.resume}
              onChange={(e) => maj({ resume: e.target.value })}
            />
          </Champ>
          <fieldset>
            <legend className="text-[0.8rem] font-medium text-ink">
              Phases concernées
            </legend>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {PHASE_IDS.map((p) => {
                const actif = b.phases.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={actif}
                    onClick={() =>
                      maj({
                        phases: actif
                          ? b.phases.filter((x) => x !== p)
                          : [...b.phases, p],
                      })
                    }
                    className={cn(
                      "rounded-md border px-2 py-1 text-[0.8rem]",
                      actif
                        ? "border-ink bg-ink text-bg"
                        : "border-line bg-surface text-ink-2 hover:border-line-strong",
                    )}
                  >
                    {PHASES_RESUME[p].numero}. {PHASES_RESUME[p].nom}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <Champ
            libelle="Mots-clés"
            aide="Séparés par des virgules. Ils sont convertis en minuscules et tirets."
          >
            <input
              className={CLASSES_SAISIE}
              value={b.motsCles}
              onChange={(e) => maj({ motsCles: e.target.value })}
              placeholder="pilote, validation, risque"
            />
          </Champ>
          {estRex && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Champ
                libelle="Secteur"
                aide="Le secteur seul, jamais le client."
              >
                <select
                  className={CLASSES_SAISIE}
                  value={b.secteur}
                  onChange={(e) => maj({ secteur: e.target.value })}
                >
                  <option value="">Choisir…</option>
                  {Object.values(SECTEURS).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Champ>
              <Champ
                libelle="Mois"
                aide="Mois de fin de la mission ou de la phase racontée."
              >
                <input
                  type="month"
                  className={CLASSES_SAISIE}
                  value={b.mois}
                  onChange={(e) => maj({ mois: e.target.value })}
                />
              </Champ>
            </div>
          )}
        </Carte>

        <Carte className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-[1rem] font-semibold text-ink">3. Contenu</h2>
              <p className="mt-0.5 text-[0.85rem] text-ink-2">
                Sections imposées pour un {def.nom.toLowerCase()} : {min} à{" "}
                {max} mots au total.
              </p>
            </div>
            <Pastille
              ton={
                mots === 0
                  ? "neutre"
                  : mots < min || mots > max
                    ? "alerte"
                    : "bon"
              }
            >
              {mots} mots
              {mots > 0 &&
                (mots < min
                  ? " · trop court"
                  : mots > max
                    ? " · trop long"
                    : " · dans la cible")}
            </Pastille>
          </div>

          {estRex && (
            <div className="mt-4 rounded-lg border border-line bg-surface-2 px-3.5 py-3 text-[0.85rem] text-ink-2">
              {mission ? (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="min-w-0 flex-1">
                    <History
                      className="mr-1.5 inline size-4 align-[-3px] text-ink-3"
                      aria-hidden
                    />
                    Mission active :{" "}
                    <span className="font-medium text-ink">{mission.nom}</span>.
                    Pré-remplir le contexte, les décisions, les résultats et les
                    apprentissages depuis son journal et son registre de valeur,
                    puis anonymiser.
                  </p>
                  <Bouton taille="sm" onClick={preRemplir}>
                    Pré-remplir depuis la mission
                  </Bouton>
                </div>
              ) : (
                <p>
                  Avec une{" "}
                  <Link
                    href="/missions"
                    className="font-medium text-accent hover:underline"
                  >
                    mission active
                  </Link>
                  , vous pouvez pré-remplir ce retour d&apos;expérience depuis
                  son journal de décisions et d&apos;apprentissages et son
                  registre de valeur.
                </p>
              )}
            </div>
          )}

          <div className="mt-5 space-y-5">
            {def.sections.map((s) => {
              const champId = `section-${b.type}-${s.id}`;
              return (
                <div key={champId}>
                  <label
                    htmlFor={champId}
                    className="text-[0.9rem] font-semibold text-ink"
                  >
                    {s.titre}
                  </label>
                  <p
                    id={`${champId}-consigne`}
                    className="mt-0.5 text-[0.82rem] leading-snug text-ink-2"
                  >
                    {s.consigne}
                  </p>
                  <textarea
                    id={champId}
                    aria-describedby={`${champId}-consigne`}
                    rows={5}
                    className={cn(CLASSES_SAISIE, "mt-2 leading-relaxed")}
                    value={b.sections[cleSection(b.type, s.id)] ?? ""}
                    onChange={(e) => majSection(s.id, e.target.value)}
                  />
                  <details className="mt-1.5 text-[0.8rem] text-ink-3">
                    <summary className="cursor-pointer hover:text-ink">
                      Voir un exemple
                    </summary>
                    <p className="mt-1.5 rounded-md border-l-2 border-line-strong bg-surface-2 px-3 py-2 whitespace-pre-line text-ink-2">
                      {s.exemple}
                    </p>
                  </details>
                </div>
              );
            })}
          </div>
        </Carte>

        {estRex && (
          <Carte className="p-5">
            <h2 className="flex items-center gap-2 text-[1rem] font-semibold text-ink">
              <ShieldCheck className="size-4 text-accent" aria-hidden />
              4. Anonymisation (obligatoire)
            </h2>
            <p className="mt-0.5 text-[0.85rem] text-ink-2">
              Relisez la fiche entière pour chaque point. L&apos;export reste
              bloqué tant que tous ne sont pas validés.
            </p>
            <ul className="mt-3 space-y-2">
              {CONTROLES_ANONYMISATION.map((c) => (
                <li key={c.id}>
                  <label className="flex cursor-pointer items-start gap-2.5 text-[0.875rem] leading-snug text-ink">
                    <input
                      type="checkbox"
                      className="mt-0.5 size-4 flex-none accent-[var(--accent)]"
                      checked={Boolean(b.anonymisation[c.id])}
                      onChange={(e) =>
                        maj({
                          anonymisation: {
                            ...b.anonymisation,
                            [c.id]: e.target.checked,
                          },
                        })
                      }
                    />
                    {c.libelle}
                  </label>
                </li>
              ))}
            </ul>
          </Carte>
        )}
      </div>

      {/* ---------------------------------------------------------- Aperçu et export */}
      <div className="space-y-6">
        <Carte className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-[1rem] font-semibold text-ink">
              <FileText className="size-4 text-ink-3" aria-hidden />
              {id ? `${id}.md` : "Aperçu du fichier"}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              <Bouton taille="sm" disabled={!pret} onClick={copier}>
                {copie ? (
                  <Check className="size-3.5 text-good-ink" aria-hidden />
                ) : (
                  <Copy className="size-3.5" aria-hidden />
                )}
                {copie ? "Copié" : "Copier"}
              </Bouton>
              <Bouton
                variante="primaire"
                taille="sm"
                disabled={!pret}
                onClick={() => telecharger(`${id}.md`, markdown)}
              >
                <Download className="size-3.5" aria-hidden />
                Télécharger
              </Bouton>
            </div>
          </div>

          {pret ? (
            <p className="mt-3 flex items-center gap-1.5 rounded-md bg-good-soft px-3 py-2 text-[0.85rem] text-good-ink">
              <CheckCircle2 className="size-4 flex-none" aria-hidden />
              Fiche complète : prête à être proposée.
            </p>
          ) : (
            <div className="mt-3 rounded-md bg-warning-soft px-3 py-2 text-[0.85rem] text-warning-ink">
              <p className="flex items-center gap-1.5 font-medium">
                <AlertTriangle className="size-4 flex-none" aria-hidden />À
                corriger avant l&apos;export
              </p>
              <ul className="mt-1 list-disc space-y-0.5 pl-6">
                {manques.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          <pre
            aria-label="Aperçu du fichier Markdown"
            tabIndex={0}
            className="defilement-fin mt-3 max-h-[28rem] overflow-auto rounded-lg border border-line bg-surface-2 p-3 text-[0.78rem] leading-relaxed whitespace-pre-wrap text-ink"
          >
            {markdown}
          </pre>
          <div className="mt-3 flex justify-end">
            <Bouton
              variante="discret"
              taille="sm"
              onClick={() => {
                if (window.confirm("Effacer le brouillon de cette fiche ?"))
                  setB(INITIAL);
              }}
            >
              <RotateCcw className="size-3.5" aria-hidden />
              Effacer le brouillon
            </Bouton>
          </div>
          <p className="text-right text-[0.75rem] text-ink-3">
            Le brouillon est conservé dans ce navigateur uniquement.
          </p>
        </Carte>

        <Carte className="p-5">
          <h2 className="text-[1rem] font-semibold text-ink">
            Proposer la contribution
          </h2>
          <ol className="mt-3 space-y-2.5 text-[0.875rem] leading-relaxed text-ink-2">
            <li>
              <span className="font-semibold text-ink">
                1. Déposer le fichier
              </span>{" "}
              téléchargé dans{" "}
              <code className="rounded bg-surface-2 px-1 text-[0.8rem]">
                content/savoir/
              </code>
              , sous le nom{" "}
              <code className="rounded bg-surface-2 px-1 text-[0.8rem]">
                {id || "<id>"}.md
              </code>
              . Vérifier qu&apos;aucune fiche proche n&apos;existe déjà : mieux
              vaut compléter une fiche que la dupliquer.
            </li>
            <li>
              <span className="font-semibold text-ink">2. Lancer</span>{" "}
              <code className="rounded bg-surface-2 px-1 text-[0.8rem]">
                npm run content
              </code>{" "}
              : la validation contrôle le front matter, les valeurs autorisées
              et les liens internes. Corriger jusqu&apos;à zéro erreur.
            </li>
            <li>
              <span className="font-semibold text-ink">
                3. Ouvrir une pull request
              </span>{" "}
              sur une branche dédiée, avec une description qui dit ce que le
              pool apprend, sans nommer le client.
            </li>
            <li>
              <span className="font-semibold text-ink">
                4. Obtenir la relecture d&apos;un pair
              </span>{" "}
              qui n&apos;a pas participé à la mission : il vérifie
              l&apos;anonymisation, la structure et le caractère transposable.
              La fiche est publiée au déploiement suivant la fusion.
            </li>
          </ol>
          <Link
            href="/guides/capitaliser"
            className="mt-4 inline-flex items-center gap-1 text-[0.85rem] font-medium text-accent hover:underline"
          >
            Guide : capitaliser après une mission
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Carte>
      </div>
    </div>
  );
}
