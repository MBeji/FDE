import "server-only";
import {
  skills,
  taxonomieSkills,
  workflows,
  type EntreeTaxonomie,
  type Skill,
  type Workflow,
} from "@/lib/content";

/**
 * Bibliothèque de skills : libellés, composition, catalogue servi aux agents et recherche.
 * Les pages du portail montrent tous les skills ; les agents ne reçoivent que les skills publiés.
 */

/** Sections d'un SKILL.md, dans l'ordre imposé. Doit rester identique à scripts/skills.mjs. */
export const SECTIONS_SKILL = [
  "Mission",
  "Quand l'utiliser",
  "Entrées",
  "Procédure",
  "Livrable",
  "Critères de qualité",
  "Garde-fous",
  "Enchaînements",
];

const nomDe = (liste: EntreeTaxonomie[]) => {
  const noms = new Map(liste.map((x) => [x.id, x.nom]));
  return (id: string) => noms.get(id) ?? id;
};

export const nomEtape = nomDe(taxonomieSkills.etapes);
export const nomRole = nomDe(taxonomieSkills.roles);
export const nomDomaine = nomDe(taxonomieSkills.domaines);
export const nomTechnologie = nomDe(taxonomieSkills.technologies);
export const nomCasUsage = nomDe(taxonomieSkills.casUsage);
export const nomStatut = nomDe(taxonomieSkills.statuts);
export const nomProprietaire = nomDe(taxonomieSkills.proprietaires);
export const nomDiffusion = nomDe(taxonomieSkills.diffusions);

export function nomSousProcessus(etape: string, sousProcessus: string): string {
  const e = taxonomieSkills.etapes.find((x) => x.id === etape);
  return e?.sousProcessus.find((s) => s.id === sousProcessus)?.nom ?? sousProcessus;
}

/** Rang de l'étape dans le cycle de vie (1 à n). */
export function rangEtape(etape: string): number {
  return taxonomieSkills.etapes.findIndex((e) => e.id === etape) + 1;
}

export const skillsPublies = skills.filter((s) => s.statut === "publie");
export const workflowsPublies = workflows.filter((w) => w.statut === "publie");

/** Skills qui déclarent celui-ci comme prérequis. */
export function skillsAval(id: string): Skill[] {
  return skills.filter((s) => s.prerequis.includes(id));
}

export function workflowsDuSkill(id: string): Workflow[] {
  return workflows.filter((w) => w.etapes.some((e) => e.skill === id));
}

/** Le fichier SKILL.md tel qu'un agent le charge : front matter puis corps. */
export function skillBrut(s: Skill): string {
  return `---\n${s.enTete}\n---\n\n${s.corps}\n`;
}

/* ------------------------------------------------------------------ */
/* Catalogue servi aux agents                                          */
/* ------------------------------------------------------------------ */

export interface EntreeCatalogue {
  name: string;
  titre: string;
  description: string;
  version: string;
  etape: string;
  sousProcessus: string;
  role: string;
  domaine: string;
  phases: string[];
  technologies: string[];
  casUsage: string[];
  tags: string[];
  diffusion: string;
  entrees: string[];
  sorties: string[];
  prerequis: string[];
  /** Skills habituellement exécutés ensuite. */
  suivants: string[];
  workflows: string[];
  reviseLe: string;
  /** Chemin du SKILL.md brut, relatif à l'origine du portail. */
  url: string;
  /** Page du skill dans le portail. */
  page: string;
}

export function entreeCatalogue(s: Skill): EntreeCatalogue {
  return {
    name: s.id,
    titre: s.titre,
    description: s.description,
    version: s.version,
    etape: s.etape,
    sousProcessus: s.sousProcessus,
    role: s.role,
    domaine: s.domaine,
    phases: s.phases,
    technologies: s.technologies,
    casUsage: s.casUsage,
    tags: s.tags,
    diffusion: s.diffusion,
    entrees: s.entrees,
    sorties: s.sorties,
    prerequis: s.prerequis,
    suivants: skillsAval(s.id)
      .filter((x) => x.statut === "publie")
      .map((x) => x.id),
    workflows: workflowsDuSkill(s.id)
      .filter((w) => w.statut === "publie")
      .map((w) => w.id),
    reviseLe: s.reviseLe,
    url: `/skills/${s.id}/SKILL.md`,
    page: `/skills/${s.id}`,
  };
}

export function entreeWorkflow(w: Workflow) {
  return {
    id: w.id,
    titre: w.titre,
    resume: w.resume,
    declencheur: w.declencheur,
    resultat: w.resultat,
    version: w.version,
    etapes: w.etapes.map((e, i) => ({
      rang: i + 1,
      skill: e.skill,
      intention: e.intention,
      ...(e.controle ? { controleHumain: e.controle } : {}),
    })),
    page: `/skills/workflows/${w.id}`,
  };
}

/** Le catalogue complet des assets publiés, lisible par une machine. */
export function catalogue() {
  return {
    bibliotheque: "FDE Atlas — bibliothèque de skills IA",
    format: "Agent Skills (SKILL.md) ; classification et gouvernance sous « metadata »",
    usage:
      "Choisir un skill d'après sa description, charger son SKILL.md par « url », suivre sa procédure et respecter ses garde-fous. Les chemins sont relatifs à l'origine du portail.",
    taxonomie: {
      etapes: taxonomieSkills.etapes.map((e) => ({
        id: e.id,
        nom: e.nom,
        resume: e.resume,
        sousProcessus: e.sousProcessus,
      })),
      roles: taxonomieSkills.roles,
      domaines: taxonomieSkills.domaines,
      technologies: taxonomieSkills.technologies,
      casUsage: taxonomieSkills.casUsage,
      diffusions: taxonomieSkills.diffusions,
    },
    skills: skillsPublies.map(entreeCatalogue),
    workflows: workflowsPublies.map(entreeWorkflow),
  };
}

/* ------------------------------------------------------------------ */
/* Recherche                                                           */
/* ------------------------------------------------------------------ */

const MOTS_VIDES = new Set(
  "a au aux avec ce ces cette comment dans de des du elle en est et il je la le les leur ma mes mon ne nos notre nous on ou par pas pour que quel quelle quels quelles qui quoi sa se ses si son sur un une vos votre vous y faire fais fait dois doit peux peut faut moi aide".split(
    " ",
  ),
);

function normaliser(t: string): string {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function termes(texte: string): string[] {
  return [
    ...new Set(
      normaliser(texte)
        .split(/[^a-z0-9]+/)
        .filter((m) => m.length > 2 && !MOTS_VIDES.has(m)),
    ),
  ];
}

export interface FiltresSkills {
  etape?: string;
  role?: string;
  domaine?: string;
  technologie?: string;
  casUsage?: string;
}

function correspond(s: Skill, f: FiltresSkills): boolean {
  if (f.etape && s.etape !== f.etape) return false;
  // Un skill du binôme concerne les deux rôles.
  if (f.role && s.role !== f.role && s.role !== "binome") return false;
  if (f.domaine && s.domaine !== f.domaine) return false;
  if (f.technologie && !s.technologies.includes(f.technologie)) return false;
  if (f.casUsage && !s.casUsage.includes(f.casUsage) && !s.casUsage.includes("tout-projet")) return false;
  return true;
}

/**
 * Skills publiés qui répondent à une tâche décrite en langage naturel, du plus pertinent au moins pertinent.
 * Sans tâche, renvoie les skills qui passent les filtres, dans l'ordre du cycle de vie.
 */
export function rechercherSkills(tache: string, filtres: FiltresSkills = {}, maximum = 8): Skill[] {
  const candidats = skillsPublies.filter((s) => correspond(s, filtres));
  const mots = termes(tache);
  if (!mots.length) return candidats.slice(0, maximum);
  return candidats
    .map((s) => {
      const titre = normaliser(`${s.titre} ${s.id}`);
      const cles = normaliser(`${s.description} ${s.tags.join(" ")} ${s.entrees.join(" ")} ${s.sorties.join(" ")}`);
      const corps = normaliser(s.corps);
      let score = 0;
      for (const m of mots) {
        if (titre.includes(m)) score += 6;
        if (cles.includes(m)) score += 3;
        score += Math.min(corps.split(m).length - 1, 4);
      }
      return { s, score };
    })
    .filter((x) => x.score >= 4)
    .sort((a, b) => b.score - a.score)
    .slice(0, maximum)
    .map((x) => x.s);
}
