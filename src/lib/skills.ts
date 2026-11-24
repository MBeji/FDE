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

function mots(texte: string): string[] {
  return normaliser(texte)
    .split(/[^a-z0-9]+/)
    .filter((m) => m.length > 2 && !MOTS_VIDES.has(m));
}

/** Racine grossière d'un mot : assez pour rapprocher « exigences » d'« exigence », « tester » de « tests ». */
function racine(mot: string): string {
  return mot.slice(0, Math.max(4, Math.floor(mot.length * 0.75)));
}

interface IndexSkill {
  skill: Skill;
  titre: string[];
  cles: string[];
  corps: string[];
}

/** Mots de chaque skill publié, par champ : calculés une fois. */
const INDEX: IndexSkill[] = skillsPublies.map((s) => ({
  skill: s,
  titre: mots(`${s.titre} ${s.id}`),
  cles: mots(`${s.description} ${s.tags.join(" ")} ${s.entrees.join(" ")} ${s.sorties.join(" ")}`),
  corps: mots(s.corps),
}));

const compter = (liste: string[], r: string) => liste.reduce((n, m) => (m.startsWith(r) ? n + 1 : n), 0);

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
 *
 * Recherche lexicale : chaque mot de la tâche compte davantage s'il est rare dans la bibliothèque
 * (« soutenance » pèse plus qu'« agent »), et davantage dans le titre que dans la description ou le corps.
 */
export function rechercherSkills(tache: string, filtres: FiltresSkills = {}, maximum = 8): Skill[] {
  const candidats = INDEX.filter((x) => correspond(x.skill, filtres));
  const racines = [...new Set(mots(tache).map(racine))];
  if (!racines.length) return candidats.slice(0, maximum).map((x) => x.skill);

  // Poids d'un mot : d'autant plus fort qu'il apparaît dans peu de skills.
  const poids = new Map(
    racines.map((r) => {
      const presents = INDEX.filter((x) => compter(x.titre, r) + compter(x.cles, r) + compter(x.corps, r) > 0).length;
      return [r, presents ? Math.log(1 + INDEX.length / presents) : 0];
    }),
  );

  const notes = candidats
    .map((x) => {
      let score = 0;
      for (const r of racines) {
        const p = poids.get(r) ?? 0;
        if (!p) continue;
        score += p * ((compter(x.titre, r) ? 6 : 0) + (compter(x.cles, r) ? 3 : 0) + Math.min(compter(x.corps, r), 4));
      }
      return { skill: x.skill, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  // On écarte la traîne : ce qui pèse moins du quart du meilleur résultat.
  const seuil = (notes[0]?.score ?? 0) / 4;
  return notes
    .filter((x) => x.score >= seuil)
    .slice(0, maximum)
    .map((x) => x.skill);
}
