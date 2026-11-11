/**
 * Modèle de mission : types, référentiels et calculs purs.
 * Sans état ni hook, donc importable côté serveur comme côté client.
 */
import { PHASE_IDS, PHASES_RESUME } from "@/data/referentiels";
import type { PhaseId, SecteurId } from "@/data/types";

/* ------------------------------------------------------------------ */
/* Modèle                                                              */
/* ------------------------------------------------------------------ */

export type FormatMissionId =
  | "diagnostic-flash"
  | "strategie"
  | "domaine-phare"
  | "industrialisation"
  | "transformation";

export const FORMATS_MISSION: Record<
  FormatMissionId,
  { nom: string; duree: string; description: string; phases: PhaseId[] }
> = {
  "diagnostic-flash": {
    nom: "Diagnostic flash",
    duree: "3 à 5 semaines",
    description:
      "Poser le problème, mesurer le point de départ et repartir avec un portefeuille d'opportunités arbitré.",
    phases: ["cadrer", "diagnostiquer", "cibler"],
  },
  strategie: {
    nom: "Stratégie & feuille de route",
    duree: "8 à 12 semaines",
    description:
      "Du cadrage au processus cible : un business case validé et une cible reconçue, prête à être construite.",
    phases: ["cadrer", "diagnostiquer", "cibler", "reinventer"],
  },
  "domaine-phare": {
    nom: "Domaine phare",
    duree: "5 à 7 mois",
    description:
      "Transformer un domaine de bout en bout jusqu'à la preuve de valeur en conditions réelles.",
    phases: ["cadrer", "diagnostiquer", "cibler", "reinventer", "concevoir", "construire"],
  },
  industrialisation: {
    nom: "Du pilote à l'échelle",
    duree: "4 à 6 mois",
    description:
      "Reprendre un prototype ou un pilote existant, le fiabiliser, le déployer et rendre le client autonome.",
    phases: ["concevoir", "construire", "industrialiser", "perenniser"],
  },
  transformation: {
    nom: "Transformation complète",
    duree: "9 à 12 mois",
    description: "Le parcours entier, du mandat à l'autonomie du client et à la mesure de la valeur.",
    phases: [...PHASE_IDS],
  },
};

export type StatutLivrable = "a-faire" | "en-cours" | "valide";

export const STATUTS_LIVRABLE: Record<StatutLivrable, string> = {
  "a-faire": "À faire",
  "en-cours": "En cours",
  valide: "Validé",
};

export type StatutValeur = "hypothese" | "validee" | "engagee" | "realisee" | "auditee";

export const STATUTS_VALEUR: Record<StatutValeur, { nom: string; aide: string }> = {
  hypothese: { nom: "Hypothèse", aide: "Ordre de grandeur posé, non vérifié." },
  validee: { nom: "Validée", aide: "Référence mesurée et validée par la finance." },
  engagee: { nom: "Engagée", aide: "Cible inscrite au business case, propriétaire nommé." },
  realisee: { nom: "Réalisée", aide: "Résultat mesuré en conditions réelles." },
  auditee: { nom: "Auditée", aide: "Résultat confirmé par la finance." },
};

export interface LigneValeur {
  id: string;
  indicateur: string;
  unite: string;
  reference: number | null;
  cible: number | null;
  realise: number | null;
  /** Vrai si une baisse de l'indicateur est une amélioration (délai, coût, taux d'erreur). */
  baisseFavorable: boolean;
  methode: string;
  proprietaire: string;
  statut: StatutValeur;
}

export type TypeEntree = "decision" | "risque" | "apprentissage" | "note";

export const TYPES_ENTREE: Record<TypeEntree, { nom: string; pluriel: string }> = {
  decision: { nom: "Décision", pluriel: "Décisions" },
  risque: { nom: "Risque", pluriel: "Risques" },
  apprentissage: { nom: "Apprentissage", pluriel: "Apprentissages" },
  note: { nom: "Note", pluriel: "Notes" },
};

export interface EntreeJournal {
  id: string;
  type: TypeEntree;
  date: string;
  phase: PhaseId;
  titre: string;
  detail: string;
  /** Pour un risque : traité ou non. */
  clos?: boolean;
}

export type OutilId =
  | "maturite"
  | "agent-ou-pas"
  | "priorisation"
  | "business-case"
  | "redesign-processus"
  | "agent-designer";

export interface Artefact {
  id: string;
  outil: OutilId;
  titre: string;
  date: string;
  /** Résumé lisible, affiché dans la mission. */
  resume: string;
  /** Rendu Markdown complet, exportable. */
  markdown: string;
  /** État de l'outil, pour pouvoir le rouvrir. */
  donnees: unknown;
}

export interface Mission {
  id: string;
  version: 1;
  nom: string;
  client: string;
  secteur: SecteurId | "";
  domaine: string;
  sponsor: string;
  auteur: string;
  format: FormatMissionId;
  phases: PhaseId[];
  debut: string;
  probleme: string;
  ambition: string;
  phaseCourante: PhaseId;
  activites: Record<string, boolean>;
  livrables: Record<string, StatutLivrable>;
  criteres: Record<string, boolean>;
  jalons: Partial<Record<PhaseId, { franchi: boolean; date?: string; note?: string }>>;
  valeur: LigneValeur[];
  journal: EntreeJournal[];
  artefacts: Artefact[];
  creeLe: string;
  majLe: string;
}

export function aujourdhui(): string {
  return new Date().toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------ */
/* Calculs                                                             */
/* ------------------------------------------------------------------ */

export interface DefinitionPhase {
  id: PhaseId;
  activites: { id: string }[];
  livrables: { titre: string; template?: string; obligatoire: boolean }[];
  jalon: { criteres: string[] };
}

export const cleLivrable = (phase: PhaseId, l: { titre: string; template?: string }) =>
  `${phase}:${l.template ?? l.titre}`;

export const cleCritere = (phase: PhaseId, index: number) => `${phase}:${index}`;

export function avancementPhase(mission: Mission, phase: DefinitionPhase) {
  const activites = phase.activites.filter((a) => mission.activites[a.id]).length;
  const livrables = phase.livrables.filter(
    (l) => mission.livrables[cleLivrable(phase.id, l)] === "valide",
  ).length;
  const criteres = phase.jalon.criteres.filter((_, i) => mission.criteres[cleCritere(phase.id, i)]).length;
  const total = phase.activites.length + phase.livrables.length + phase.jalon.criteres.length;
  const fait = activites + livrables + criteres;
  return {
    activites,
    livrables,
    criteres,
    taux: total ? fait / total : 0,
    franchi: Boolean(mission.jalons[phase.id]?.franchi),
    pretPourJalon:
      criteres === phase.jalon.criteres.length &&
      phase.livrables
        .filter((l) => l.obligatoire)
        .every((l) => mission.livrables[cleLivrable(phase.id, l)] === "valide"),
  };
}

export function avancementMission(mission: Mission, definitions: DefinitionPhase[]) {
  const concernees = definitions.filter((d) => mission.phases.includes(d.id));
  if (!concernees.length) return 0;
  const somme = concernees.reduce((s, d) => s + avancementPhase(mission, d).taux, 0);
  return somme / concernees.length;
}

/** Progression d'un indicateur entre sa référence et sa cible, bornée entre 0 et 1. */
export function progressionValeur(l: LigneValeur): number | null {
  if (l.reference === null || l.cible === null || l.realise === null) return null;
  const ecart = l.cible - l.reference;
  if (ecart === 0) return null;
  return Math.max(0, Math.min(1, (l.realise - l.reference) / ecart));
}

/** Variables pré-remplies dans les templates à partir de la mission active. */
export function variablesMission(m: Mission | null): Record<string, string> {
  if (!m) return {};
  return {
    client: m.client,
    mission: m.nom,
    sponsor: m.sponsor,
    domaine: m.domaine,
    auteur: m.auteur,
    date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
  };
}

export function remplirVariables(markdown: string, variables: Record<string, string>): string {
  return markdown.replace(/\{\{\s*([a-z_]+)\s*\}\}/g, (tout, nom: string) => variables[nom] || tout);
}

/** Résumé compact de la mission, transmis au copilote si l'utilisateur l'autorise. */
export function contexteMission(m: Mission): string {
  const lignes = [
    `Mission : ${m.nom}`,
    `Client : ${m.client}${m.secteur ? ` (secteur : ${m.secteur})` : ""}`,
    m.domaine && `Domaine : ${m.domaine}`,
    m.sponsor && `Sponsor : ${m.sponsor}`,
    `Format : ${FORMATS_MISSION[m.format].nom}`,
    `Phase en cours : ${PHASES_RESUME[m.phaseCourante].numero}. ${PHASES_RESUME[m.phaseCourante].nom}`,
    m.probleme && `Problème : ${m.probleme}`,
    m.ambition && `Ambition : ${m.ambition}`,
  ].filter(Boolean) as string[];

  if (m.valeur.length) {
    lignes.push("Registre de valeur :");
    for (const v of m.valeur) {
      lignes.push(
        `- ${v.indicateur} : référence ${v.reference ?? "?"} ${v.unite}, cible ${v.cible ?? "?"}, réalisé ${v.realise ?? "non mesuré"} (${STATUTS_VALEUR[v.statut].nom})`,
      );
    }
  }
  const risques = m.journal.filter((e) => e.type === "risque" && !e.clos).slice(0, 8);
  if (risques.length) {
    lignes.push("Risques ouverts :");
    for (const r of risques) lignes.push(`- ${r.titre}`);
  }
  const decisions = m.journal.filter((e) => e.type === "decision").slice(0, 8);
  if (decisions.length) {
    lignes.push("Décisions récentes :");
    for (const d of decisions) lignes.push(`- ${d.date} : ${d.titre}`);
  }
  if (m.artefacts.length) {
    lignes.push("Travaux enregistrés :");
    for (const a of m.artefacts.slice(0, 8)) lignes.push(`- ${a.titre} — ${a.resume}`);
  }
  return lignes.join("\n");
}
