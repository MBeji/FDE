/**
 * Types des données structurées du portail (hors contenu Markdown).
 * Le contenu long (frameworks, templates, guides, savoir) est décrit dans src/lib/content.ts.
 */

export type PhaseId =
  | "cadrer"
  | "diagnostiquer"
  | "cibler"
  | "reinventer"
  | "concevoir"
  | "construire"
  | "industrialiser"
  | "perenniser";

export type FilId = "valeur" | "confiance" | "adoption";

/* ------------------------------------------------------------------ */
/* Méthode                                                             */
/* ------------------------------------------------------------------ */

export interface Activite {
  id: string;
  titre: string;
  /** Ce qu'il faut faire, concrètement (2 à 4 phrases). */
  description: string;
  /** Résultat tangible de l'activité. */
  resultat: string;
  frameworks?: string[];
  templates?: string[];
  guides?: string[];
  outils?: string[];
}

export interface Livrable {
  /** Identifiant du template associé, quand il existe. */
  template?: string;
  titre: string;
  description: string;
  /** Livrable exigé pour franchir le jalon. */
  obligatoire: boolean;
}

export interface Jalon {
  code: string;
  nom: string;
  /** La question à laquelle le comité doit répondre. */
  question: string;
  criteres: string[];
  /** Signaux qui doivent conduire à arrêter ou réorienter. */
  arret: string[];
}

export interface Phase {
  id: PhaseId;
  numero: number;
  nom: string;
  /** Verbe-titre court, par exemple « Poser le bon problème ». */
  promesse: string;
  temps: "Stratégie" | "Conception" | "Réalisation" | "Valeur";
  duree: string;
  resume: string;
  objectifs: string[];
  questions: string[];
  activites: Activite[];
  livrables: Livrable[];
  jalon: Jalon;
  /** Ce que chaque fil transverse exige dans cette phase. */
  fils: Record<FilId, string>;
  roles: { role: string; contribution: string }[];
  pieges: { titre: string; parade: string }[];
  conseils: string[];
  savoir?: string[];
}

/* ------------------------------------------------------------------ */
/* Bibliothèque de cas d'usage                                         */
/* ------------------------------------------------------------------ */

export type SecteurId =
  | "telecoms"
  | "banque"
  | "assurance"
  | "distribution"
  | "industrie"
  | "energie"
  | "secteur-public"
  | "sante"
  | "transverse";

export type FonctionId =
  | "service-client"
  | "ventes-marketing"
  | "operations"
  | "finance"
  | "rh"
  | "it"
  | "juridique-conformite"
  | "achats-supply"
  | "produit-rd";

/** Barreau de l'échelle des solutions (voir /frameworks/faut-il-un-agent). */
export type SolutionType = "assistant" | "workflow" | "agent" | "multi-agents";

export type LevierValeur =
  | "cout"
  | "revenu"
  | "qualite"
  | "delai"
  | "risque"
  | "experience";

export interface CasUsage {
  id: string;
  titre: string;
  secteur: SecteurId;
  fonction: FonctionId;
  /** La douleur métier, en une phrase. */
  probleme: string;
  /** Ce que fait la solution, en deux ou trois phrases. */
  description: string;
  solution: SolutionType;
  /** Niveau d'autonomie recommandé au démarrage (L1 à L4). */
  autonomie: 1 | 2 | 3 | 4;
  leviers: LevierValeur[];
  /** Deux à quatre indicateurs de résultat. */
  kpis: string[];
  /** Deux à quatre prérequis : données, SI, organisation. */
  prerequis: string[];
  /** Un à trois points de vigilance. */
  risques: string[];
  /** Ordres de grandeur typiques, à recalibrer chez le client (1 à 5). */
  valeur: 1 | 2 | 3 | 4 | 5;
  faisabilite: 1 | 2 | 3 | 4 | 5;
  horizon: "gain-rapide" | "coeur" | "pari";
}

/* ------------------------------------------------------------------ */
/* Glossaire                                                           */
/* ------------------------------------------------------------------ */

export type CategorieGlossaire =
  | "ia"
  | "agents"
  | "methode"
  | "conseil"
  | "delivery"
  | "gouvernance";

export interface TermeGlossaire {
  /** Identifiant d'ancre, en minuscules et tirets. */
  id: string;
  terme: string;
  /** Équivalent anglais ou développé de l'acronyme, si utile. */
  alias?: string;
  /** Définition en une à trois phrases, orientée usage en mission. */
  definition: string;
  categorie: CategorieGlossaire;
  /** Liens internes pour approfondir, par exemple "/frameworks/garde-fous". */
  voir?: string[];
}

/* ------------------------------------------------------------------ */
/* Bibliothèque de prompts                                             */
/* ------------------------------------------------------------------ */

export type ModeCopilote = "guide" | "redacteur" | "challenger" | "coach";

export interface PromptModele {
  id: string;
  titre: string;
  phase: PhaseId | "transverse";
  mode: ModeCopilote;
  /** Ce que le prompt permet d'obtenir, en une phrase. */
  objectif: string;
  variables: { nom: string; description: string; exemple?: string }[];
  /** Le prompt complet. Les variables s'écrivent {{nom}}. */
  prompt: string;
  /** Conseils d'usage : quoi fournir, comment itérer, quoi vérifier. */
  conseils?: string[];
}
