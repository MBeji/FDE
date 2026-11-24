import "server-only";
import brut from "@/generated/content.json";
import type { PhaseId } from "@/data/types";

/**
 * Accès au contenu compilé depuis content/ par scripts/build-content.mjs.
 * Réservé au serveur : les corps Markdown ne doivent pas partir dans le bundle client.
 */

export interface Titre {
  niveau: number;
  texte: string;
  id: string;
}

export interface Framework {
  id: string;
  titre: string;
  resume: string;
  categorie: string;
  phases: PhaseId[];
  origine: string;
  niveau: string;
  tags: string[];
  templates: string[];
  lies: string[];
  corps: string;
  titres: Titre[];
  mots: number;
}

export interface Template {
  id: string;
  titre: string;
  resume: string;
  phase: PhaseId | "transverse";
  type: string;
  format: string;
  effort: string;
  tags: string[];
  frameworks: string[];
  modeEmploi: string;
  template: string;
  exemple: string;
  mots: number;
}

export interface Guide {
  id: string;
  titre: string;
  resume: string;
  phases: PhaseId[];
  duree: string;
  niveau: string;
  tags: string[];
  frameworks: string[];
  templates: string[];
  corps: string;
  titres: Titre[];
  mots: number;
}

export interface FicheSavoir {
  id: string;
  titre: string;
  resume: string;
  type: "pattern" | "anti-pattern" | "rex";
  phases: PhaseId[];
  tags: string[];
  secteur: string;
  date: string;
  corps: string;
  titres: Titre[];
  mots: number;
}

/* ------------------------------------------------------------------ */
/* Bibliothèque de skills (skills/, voir skills/README.md)             */
/* ------------------------------------------------------------------ */

export type RoleSkill = "design" | "build" | "binome";
export type StatutSkill = "brouillon" | "en-revue" | "publie" | "deprecie";

export interface VersionSkill {
  version: string;
  date: string;
  notes: string[];
}

export interface Skill {
  /** Le `name` du skill : identifiant, nom de dossier et segment d'URL. */
  id: string;
  titre: string;
  description: string;
  version: string;
  statut: StatutSkill;
  etape: string;
  sousProcessus: string;
  role: RoleSkill;
  domaine: string;
  phases: PhaseId[];
  technologies: string[];
  casUsage: string[];
  tags: string[];
  proprietaire: string;
  diffusion: string;
  entrees: string[];
  sorties: string[];
  prerequis: string[];
  remplacePar: string;
  /** Front matter YAML tel qu'il est écrit dans le fichier, sans les délimiteurs. */
  enTete: string;
  corps: string;
  titres: Titre[];
  mots: number;
  historique: VersionSkill[];
  /** Date de la dernière version (AAAA-MM-JJ). */
  reviseLe: string;
  /** Vrai si la dernière révision dépasse l'échéance de la taxonomie, à la date du build. */
  aReviser: boolean;
  /** Chemin du fichier dans le dépôt. */
  fichier: string;
  /** Ressources du portail citées dans le corps, par section. */
  ressources: {
    templates: string[];
    frameworks: string[];
    guides: string[];
    savoir: string[];
    outils: string[];
    standards: string[];
    skills: string[];
  };
}

export interface EtapeWorkflow {
  skill: string;
  intention: string;
  /** Décision humaine qui conditionne la suite, s'il y en a une. */
  controle: string;
}

export interface Workflow {
  id: string;
  titre: string;
  resume: string;
  declencheur: string;
  resultat: string;
  version: string;
  statut: StatutSkill;
  proprietaire: string;
  etapes: EtapeWorkflow[];
  corps: string;
  titres: Titre[];
  fichier: string;
}

export interface EntreeTaxonomie {
  id: string;
  nom: string;
  resume?: string;
}

export interface EtapeCycle extends EntreeTaxonomie {
  dossier: string;
  resume: string;
  sousProcessus: EntreeTaxonomie[];
}

export interface TaxonomieSkills {
  revisionMois: number;
  etapes: EtapeCycle[];
  roles: EntreeTaxonomie[];
  domaines: EntreeTaxonomie[];
  technologies: EntreeTaxonomie[];
  casUsage: EntreeTaxonomie[];
  statuts: EntreeTaxonomie[];
  proprietaires: EntreeTaxonomie[];
  diffusions: EntreeTaxonomie[];
}

const contenu = brut as unknown as {
  frameworks: Framework[];
  templates: Template[];
  guides: Guide[];
  savoir: FicheSavoir[];
  skills: Skill[];
  workflows: Workflow[];
  taxonomieSkills: TaxonomieSkills;
};

export const frameworks = contenu.frameworks;
export const templates = contenu.templates;
export const guides = contenu.guides;
export const savoir = contenu.savoir;
export const skills = contenu.skills;
export const workflows = contenu.workflows;
export const taxonomieSkills = contenu.taxonomieSkills;

const index = <T extends { id: string }>(liste: T[]) => new Map(liste.map((x) => [x.id, x]));

const frameworksParId = index(frameworks);
const templatesParId = index(templates);
const guidesParId = index(guides);
const savoirParId = index(savoir);
const skillsParId = index(skills);
const workflowsParId = index(workflows);

export const getFramework = (id: string) => frameworksParId.get(id);
export const getTemplate = (id: string) => templatesParId.get(id);
export const getGuide = (id: string) => guidesParId.get(id);
export const getFicheSavoir = (id: string) => savoirParId.get(id);
export const getSkill = (id: string) => skillsParId.get(id);
export const getWorkflow = (id: string) => workflowsParId.get(id);

/** Résout une liste d'identifiants en ignorant ceux qui n'existent pas. */
export function resoudre<T>(ids: string[] | undefined, getter: (id: string) => T | undefined): T[] {
  return (ids ?? []).map(getter).filter((x): x is T => Boolean(x));
}

export function minutesDeLecture(mots: number): number {
  return Math.max(1, Math.round(mots / 220));
}

export const statistiques = {
  frameworks: frameworks.length,
  templates: templates.length,
  guides: guides.length,
  savoir: savoir.length,
  skills: skills.length,
  workflows: workflows.length,
};
