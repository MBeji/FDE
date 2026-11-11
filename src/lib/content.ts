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

const contenu = brut as unknown as {
  frameworks: Framework[];
  templates: Template[];
  guides: Guide[];
  savoir: FicheSavoir[];
};

export const frameworks = contenu.frameworks;
export const templates = contenu.templates;
export const guides = contenu.guides;
export const savoir = contenu.savoir;

const index = <T extends { id: string }>(liste: T[]) => new Map(liste.map((x) => [x.id, x]));

const frameworksParId = index(frameworks);
const templatesParId = index(templates);
const guidesParId = index(guides);
const savoirParId = index(savoir);

export const getFramework = (id: string) => frameworksParId.get(id);
export const getTemplate = (id: string) => templatesParId.get(id);
export const getGuide = (id: string) => guidesParId.get(id);
export const getFicheSavoir = (id: string) => savoirParId.get(id);

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
};
