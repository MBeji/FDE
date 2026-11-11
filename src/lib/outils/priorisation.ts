import { creerStock, nouvelId } from "@/lib/stockage";

/** Modèle de l'atelier de priorisation (voir /frameworks/matrice-valeur-faisabilite). */

export const CRITERES_VALEUR = [
  { id: "financier", nom: "Impact financier", aide: "Économies captées, revenu, marge." },
  { id: "strategique", nom: "Impact stratégique", aide: "Contribution à l'ambition, différenciation." },
  { id: "portee", nom: "Portée", aide: "Volume, récurrence, populations concernées." },
] as const;

export const CRITERES_FAISABILITE = [
  { id: "donnees", nom: "Données", aide: "Disponibilité, qualité, accès." },
  { id: "technique", nom: "Complexité technique", aide: "5 = simple, 1 = très complexe." },
  { id: "integration", nom: "Intégration au SI", aide: "API et outils exposables." },
  { id: "risque", nom: "Risque et conformité", aide: "5 = risque faible, 1 = risque élevé." },
  { id: "adoption", nom: "Adoption", aide: "Acceptabilité, effort de changement." },
] as const;

export type CritereValeur = (typeof CRITERES_VALEUR)[number]["id"];
export type CritereFaisabilite = (typeof CRITERES_FAISABILITE)[number]["id"];
export type Decision = "" | "retenu" | "differe" | "ecarte";

export const DECISIONS: Record<Exclude<Decision, "">, string> = {
  retenu: "Retenu",
  differe: "Différé",
  ecarte: "Écarté",
};

export interface CasPriorise {
  id: string;
  titre: string;
  valeur: Record<CritereValeur, number>;
  faisabilite: Record<CritereFaisabilite, number>;
  decision: Decision;
  note: string;
}

export interface EtatPriorisation {
  cas: CasPriorise[];
  poidsValeur: Record<CritereValeur, number>;
  poidsFaisabilite: Record<CritereFaisabilite, number>;
}

export const ETAT_PRIORISATION_INITIAL: EtatPriorisation = {
  cas: [],
  poidsValeur: { financier: 50, strategique: 30, portee: 20 },
  poidsFaisabilite: { donnees: 25, technique: 20, integration: 20, risque: 20, adoption: 15 },
};

export const stockPriorisation = creerStock<EtatPriorisation>(
  "fde-atlas:outil:priorisation:v1",
  ETAT_PRIORISATION_INITIAL,
);

export function nouveauCas(titre: string, valeur = 3, faisabilite = 3): CasPriorise {
  return {
    id: nouvelId(),
    titre,
    valeur: { financier: valeur, strategique: valeur, portee: valeur },
    faisabilite: {
      donnees: faisabilite,
      technique: faisabilite,
      integration: faisabilite,
      risque: faisabilite,
      adoption: faisabilite,
    },
    decision: "",
    note: "",
  };
}

function moyennePonderee<K extends string>(notes: Record<K, number>, poids: Record<K, number>): number {
  let somme = 0;
  let total = 0;
  for (const k of Object.keys(poids) as K[]) {
    somme += (notes[k] ?? 0) * poids[k];
    total += poids[k];
  }
  return total ? somme / total : 0;
}

export function scores(cas: CasPriorise, etat: EtatPriorisation) {
  return {
    valeur: moyennePonderee(cas.valeur, etat.poidsValeur),
    faisabilite: moyennePonderee(cas.faisabilite, etat.poidsFaisabilite),
  };
}

export type Quadrant = "gain-rapide" | "coeur" | "incuber" | "ecarter";

export const QUADRANTS: Record<Quadrant, { nom: string; conseil: string }> = {
  "gain-rapide": {
    nom: "Gain rapide",
    conseil: "À lancer dans la première vague : il finance la patience pour le reste.",
  },
  coeur: {
    nom: "Pari structurant",
    conseil: "Le cœur du portefeuille : forte valeur, faisabilité à sécuriser par un prototype.",
  },
  incuber: {
    nom: "À incuber",
    conseil: "Lever d'abord le verrou de faisabilité (données, intégration) avant d'engager.",
  },
  ecarter: {
    nom: "À écarter",
    conseil: "Valeur insuffisante : l'écrire explicitement et passer à autre chose.",
  },
};

/** Classe un cas d'usage selon ses deux scores (seuils fixes sur une échelle de 1 à 5). */
export function quadrant(valeur: number, faisabilite: number): Quadrant {
  if (valeur < 3) return "ecarter";
  if (faisabilite >= 3.75) return "gain-rapide";
  if (faisabilite >= 2.5) return "coeur";
  return "incuber";
}
