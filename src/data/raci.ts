/**
 * Le binôme FDE Design · FDE Build : rôles, matrice RACI, passages de relais,
 * rituels, conditions du travail à distance et règles d'arbitrage.
 *
 * La matrice est rattachée à la méthode par identifiants : activités (`cadrer-1`…),
 * livrables (identifiant du template) et jalons (`G0`…). `controlerRaci()` vérifie
 * qu'elle couvre exactement la méthode et qu'elle porte un seul A par ligne ; le
 * module lève une erreur au chargement sinon, ce qui fait échouer le build.
 *
 * Comme les règles du pool, c'est un cadre proposé : la répartition se rediscute
 * mission par mission, et s'écrit alors dans la charte de mission.
 */

import { phases } from "./phases";
import type { PhaseId } from "./types";

/* ------------------------------------------------------------------ */
/* 1. Les deux rôles                                                   */
/* ------------------------------------------------------------------ */

export type RoleBinome = "design" | "build";

export interface DefinitionRole {
  id: RoleBinome;
  nom: string;
  accroche: string;
  mission: string;
  responsabilites: string[];
  presence: { mode: string; detail: string };
  competences: string[];
  /** La moitié de la double compétence qu'il porte en dominante. */
  dominante: string;
}

export const ROLES_BINOME: Record<RoleBinome, DefinitionRole> = {
  design: {
    id: "design",
    nom: "FDE Design",
    accroche: "Le problème, la cible, la valeur, l'adoption",
    mission:
      "Faire en sorte que le binôme résolve le bon problème, que le processus cible soit celui du métier et que la valeur soit mesurée et adoptée.",
    responsabilites: [
      "Tenir la relation avec le sponsor, le propriétaire du processus et le terrain.",
      "Conduire la découverte : entretiens, observation, référence chiffrée.",
      "Reconstruire le processus et la répartition humain-agent avec le métier.",
      "Chiffrer, suivre et défendre la valeur jusqu'à la mesure du réalisé.",
      "Préparer les décisions du client : options, recommandation, conséquences.",
      "Porter le pilote, le déploiement et la conduite du changement.",
    ],
    presence: {
      mode: "Sur site, chez le client",
      detail: "Présent plusieurs jours par semaine auprès du sponsor et des équipes ; il est les yeux et les oreilles du binôme sur le terrain.",
    },
    competences: [
      "Reformulation de problème et structuration (arbre d'hypothèses, MECE)",
      "Entretiens, observation et cartographie de processus",
      "Chiffrage de la valeur et business case",
      "Animation d'ateliers et dialogue avec les dirigeants",
      "Conduite du changement et adoption",
      "Lecture suffisante de l'ingénierie pour challenger la faisabilité",
    ],
    dominante: "La moitié business",
  },
  build: {
    id: "build",
    nom: "FDE Build",
    accroche: "L'architecture, les agents, la preuve, la production",
    mission:
      "Faire en sorte que ce que le binôme promet fonctionne sur les cas réels, s'intègre au SI du client, se mesure par l'évaluation et tienne en production.",
    responsabilites: [
      "Qualifier la faisabilité et le niveau de solution le plus bas qui suffit.",
      "Arrêter l'architecture, spécifier les agents et leurs outils.",
      "Construire les intégrations au SI et les garde-fous.",
      "Tenir les évaluations : golden set outillé, seuils, analyse d'erreurs.",
      "Mettre en place le LLMOps : observabilité, coûts, gestion des versions.",
      "Industrialiser et transférer l'exploitation à l'équipe du client.",
    ],
    presence: {
      mode: "À distance, depuis le back-office nearshore",
      detail: "Travaille dans l'environnement du client à distance ; s'immerge chaque semaine dans le terrain par écran interposé et vient sur site aux moments clés.",
    },
    competences: [
      "Architecture d'agents et de systèmes multi-agents",
      "Intégration au SI : API, droits, données, sécurité",
      "Évaluation : golden set, LLM juge, analyse d'erreurs",
      "LLMOps : observabilité, coûts d'inférence, déploiement progressif",
      "Ingénierie logicielle et DevSecOps",
      "Lecture suffisante du métier pour challenger la valeur et la cible",
    ],
    dominante: "La moitié ingénierie",
  },
};

/** Le principe du binôme, affiché en tête de page. */
export const PRINCIPE_BINOME =
  "Le binôme est la double compétence du FDE répartie sur deux personnes. Le Design et le Build portent ensemble le même résultat : un problème métier résolu, mesuré en production, et un client autonome. Ce n'est pas une sous-traitance : le Build n'exécute pas une commande du Design, et le Design ne vend pas ce que le Build n'a pas qualifié.";

export const ENGAGEMENTS_COMMUNS: string[] = [
  "Un seul objectif, un seul indicateur cible, un seul registre de valeur pour les deux.",
  "Chacun tient les deux conversations : le Design sait dire ce qui est faisable, le Build sait dire pourquoi c'est utile.",
  "Aucun des deux ne présente au client une décision que l'autre découvre.",
  "Un échec est celui du binôme : on ne le rejette pas sur l'autre moitié, ni devant le client ni devant le pool.",
];

/* ------------------------------------------------------------------ */
/* 2. Matrice RACI                                                     */
/* ------------------------------------------------------------------ */

/** « AR » : responsable et redevable à la fois. */
export type CodeRaci = "A" | "R" | "AR" | "C" | "I";
export type ColonneRaci = RoleBinome | "client";
export type TypeLigne = "activite" | "livrable" | "jalon";

export interface LigneRaci {
  type: TypeLigne;
  /** Identifiant d'activité, identifiant de template du livrable, ou code du jalon. */
  ref: string;
  design: CodeRaci;
  build: CodeRaci;
  client: CodeRaci;
  /** Ce que fait chaque membre du binôme, quand ce n'est pas évident. Obligatoire pour les jalons. */
  precision?: { design?: string; build?: string };
}

export const LEGENDE_RACI: Record<Exclude<CodeRaci, "AR">, { nom: string; definition: string }> = {
  R: { nom: "Réalise", definition: "Fait le travail. Plusieurs R sont possibles." },
  A: {
    nom: "Répond du résultat",
    definition: "Un seul par ligne. Garantit que c'est fait, et bien fait ; tranche en cas de désaccord dans le binôme.",
  },
  C: { nom: "Consulté", definition: "Donne son avis avant : échange dans les deux sens." },
  I: { nom: "Informé", definition: "Tenu au courant après : échange dans un sens." },
};

export const LIBELLES_COLONNES: Record<ColonneRaci, string> = {
  design: "FDE Design",
  build: "FDE Build",
  client: "Client",
};

function act(ref: string, design: CodeRaci, build: CodeRaci, client: CodeRaci, precision?: LigneRaci["precision"]): LigneRaci {
  return { type: "activite", ref, design, build, client, precision };
}
function liv(ref: string, design: CodeRaci, build: CodeRaci, client: CodeRaci = "C", precision?: LigneRaci["precision"]): LigneRaci {
  return { type: "livrable", ref, design, build, client, precision };
}
/** Le jalon est une décision du client : il en est le seul A. */
function jal(ref: string, design: CodeRaci, build: CodeRaci, precision: { design: string; build: string }): LigneRaci {
  return { type: "jalon", ref, design, build, client: "A", precision };
}

export const MATRICE_RACI: LigneRaci[] = [
  /* Phase 0 — Cadrer */
  act("cadrer-0", "AR", "R", "I", {
    build: "Lance dès la préparation les demandes d'accès à distance et identifie les contraintes de conformité.",
  }),
  act("cadrer-1", "AR", "C", "C"),
  act("cadrer-2", "AR", "C", "C", { build: "Vérifie que l'hypothèse ne promet pas un niveau de solution irréaliste." }),
  act("cadrer-3", "AR", "I", "C"),
  act("cadrer-4", "AR", "C", "C"),
  act("cadrer-5", "AR", "C", "C", { build: "Propose les critères d'arrêt techniques : données indisponibles, seuils de qualité." }),
  act("cadrer-6", "AR", "R", "C", { build: "Installe le backlog, le journal de décisions et les rituels du binôme." }),
  liv("charte-de-mission", "AR", "C"),
  liv("arbre-hypotheses", "AR", "C"),
  liv("carte-parties-prenantes", "AR", "I"),
  liv("plan-de-mission", "A", "R", "C", { build: "Écrit le volet construction : jalons techniques, environnements, dépendances." }),
  liv("dossier-preparation-mission", "AR", "C", "I"),
  jal("G0", "R", "C", {
    design: "Prépare et présente la charte : problème, ambition, périmètre, critères d'arrêt.",
    build: "Prépare la page des conditions de réalisation : accès, données, conformité ; répond aux questions de faisabilité.",
  }),

  /* Phase 1 — Diagnostiquer */
  act("diagnostiquer-1", "AR", "C", "C", {
    build: "Assiste à distance à une partie des entretiens, ou en écoute les enregistrements avec consentement.",
  }),
  act("diagnostiquer-2", "AR", "C", "C"),
  act("diagnostiquer-3", "C", "AR", "C", { design: "Formule les questions métier auxquelles les données doivent répondre." }),
  act("diagnostiquer-4", "AR", "C", "C", { build: "Évalue les dimensions données, SI et sécurité de la maturité." }),
  act("diagnostiquer-5", "C", "AR", "C"),
  act("diagnostiquer-6", "AR", "C", "C"),
  liv("diagnostic-maturite", "AR", "C"),
  liv("fiche-processus-existant", "AR", "C"),
  liv("revue-donnees-si", "C", "AR"),
  liv("guide-entretien", "AR", "I"),
  jal("G1", "R", "R", {
    design: "Présente le diagnostic, la référence chiffrée et les irritants prioritaires.",
    build: "Présente l'état réel des données et du SI, et ce qu'il rend possible ou non.",
  }),

  /* Phase 2 — Cibler */
  act("cibler-1", "AR", "C", "C"),
  act("cibler-2", "C", "AR", "C"),
  act("cibler-3", "AR", "C", "C", { build: "Fournit les coûts de construction et d'inférence." }),
  act("cibler-4", "A", "R", "C", { build: "Note la faisabilité de chaque opportunité, données ouvertes." }),
  act("cibler-5", "C", "AR", "C", { design: "Fait le lien avec le DPO et la conformité sur site." }),
  act("cibler-6", "AR", "C", "C"),
  liv("portefeuille-priorise", "AR", "C"),
  liv("business-case", "AR", "C"),
  liv("canevas-cas-usage", "A", "R", "C", { build: "Rédige la faisabilité, le niveau de solution et les prérequis données." }),
  liv("atelier-ideation", "AR", "I"),
  jal("G2", "R", "R", {
    design: "Présente le portefeuille priorisé et le business case.",
    build: "Présente la faisabilité, les coûts et les prérequis de chaque pari retenu.",
  }),

  /* Phase 3 — Réinventer */
  act("reinventer-1", "AR", "C", "C"),
  act("reinventer-2", "AR", "C", "C"),
  act("reinventer-3", "A", "R", "C", { build: "Propose les niveaux d'autonomie au regard de ce que les évaluations pourront prouver." }),
  act("reinventer-4", "AR", "C", "C"),
  act("reinventer-5", "AR", "C", "C", { design: "Garde la main sur les prototypes montrés au terrain." }),
  act("reinventer-6", "AR", "I", "C"),
  liv("processus-cible-ai-native", "AR", "C"),
  liv("matrice-humain-agent", "A", "R"),
  liv("modele-operationnel-cible", "AR", "I"),
  jal("G3", "R", "C", {
    design: "Présente la cible avec le propriétaire du processus, qui la porte devant le comité.",
    build: "Confirme que la cible est constructible et signale les points qui en dépendent.",
  }),

  /* Phase 4 — Concevoir */
  act("concevoir-1", "AR", "R", "R", {
    design: "Définit le succès avec le métier et organise l'annotation par les experts.",
    build: "Outille le golden set : format, échantillonnage, cas adverses, versionnement.",
  }),
  act("concevoir-2", "R", "AR", "C", { design: "Rédige mission, périmètre et règles métier de chaque fiche agent." }),
  act("concevoir-3", "I", "AR", "C"),
  act("concevoir-4", "I", "AR", "C"),
  act("concevoir-5", "C", "AR", "C"),
  act("concevoir-6", "C", "AR", "I"),
  liv("fiche-agent", "R", "AR"),
  liv("dossier-architecture-multi-agents", "I", "AR"),
  liv("plan-evaluation", "C", "AR"),
  liv("analyse-risques-agent", "C", "AR"),
  liv("specification-outil", "I", "AR"),
  liv("adr", "I", "AR", "C"),
  jal("G4", "R", "R", {
    design: "Rappelle le succès attendu et le relie à la cible métier validée en G3.",
    build: "Présente l'architecture, le plan d'évaluation et l'analyse de risques. Vient sur site si possible.",
  }),

  /* Phase 5 — Construire */
  act("construire-1", "C", "AR", "I"),
  act("construire-2", "C", "AR", "C", { design: "Organise les revues d'échantillons avec les experts métier." }),
  act("construire-3", "AR", "R", "C", { build: "Prépare l'environnement, l'instrumentation et le mode dégradé." }),
  act("construire-4", "C", "AR", "I"),
  act("construire-5", "A", "R", "R", {
    design: "Anime le pilote auprès des équipes et collecte les retours.",
    build: "Assure le support et les corrections, présent sur site au démarrage.",
  }),
  act("construire-6", "AR", "R", "C", { build: "Fournit les mesures issues de l'observabilité et du groupe témoin." }),
  liv("rapport-evaluation", "C", "AR", "I"),
  liv("plan-pilote", "AR", "R"),
  liv("bilan-pilote", "AR", "R"),
  liv("system-prompt-agent", "I", "AR", "I"),
  jal("G5", "R", "R", {
    design: "Présente la valeur mesurée contre la référence et la recommandation.",
    build: "Présente le rapport d'évaluation et la tenue technique en conditions réelles.",
  }),

  /* Phase 6 — Industrialiser */
  act("industrialiser-1", "C", "AR", "C"),
  act("industrialiser-2", "I", "AR", "R"),
  act("industrialiser-3", "AR", "C", "R"),
  act("industrialiser-4", "A", "R", "R", {
    design: "Planifie les vagues avec les managers et suit l'adoption.",
    build: "Met en service chaque vague et surveille les indicateurs techniques.",
  }),
  act("industrialiser-5", "C", "AR", "C"),
  act("industrialiser-6", "A", "R", "C", { build: "Apporte les preuves d'évaluation qui justifient plus d'autonomie." }),
  liv("checklist-mise-en-production", "I", "AR"),
  liv("runbook-agent", "I", "AR"),
  liv("registre-agents", "C", "AR"),
  liv("plan-conduite-changement", "AR", "C"),
  jal("G6", "R", "R", {
    design: "Présente le plan de déploiement, l'adoption et la gouvernance.",
    build: "Présente la revue de préparation, l'exploitation et les coûts. Sur site pour la mise en service.",
  }),

  /* Phase 7 — Pérenniser */
  act("perenniser-1", "AR", "C", "C"),
  act("perenniser-2", "A", "R", "R", {
    design: "Transfère le pilotage de la valeur et de la gouvernance.",
    build: "Forme l'équipe d'exploitation jusqu'à ce qu'elle opère et fasse évoluer seule.",
  }),
  act("perenniser-3", "C", "AR", "R"),
  act("perenniser-4", "AR", "C", "C"),
  act("perenniser-5", "A", "R", "I", { build: "Verse au pool les composants, prompts et évaluations réutilisables." }),
  liv("tableau-de-bord-valeur", "AR", "C"),
  liv("plan-transfert", "A", "R"),
  liv("rex-mission", "A", "R", "I"),
  liv("cloture-mission", "AR", "C"),
  jal("G7", "R", "R", {
    design: "Présente la valeur réalisée et la clôture.",
    build: "Présente l'autonomie technique constatée : transfert soldé, exploitation tenue par le client.",
  }),
];

/* Résolution des références ---------------------------------------- */

export interface LigneResolue extends LigneRaci {
  phase: PhaseId;
  /** Ancre stable de la ligne dans la page /raci. */
  ancre: string;
  intitule: string;
  /** Livrables : identifiant du template. */
  template?: string;
}

function resoudre(l: LigneRaci): LigneResolue | null {
  for (const p of phases) {
    if (l.type === "activite") {
      const a = p.activites.find((x) => x.id === l.ref);
      if (a) return { ...l, phase: p.id, ancre: `raci-${l.ref}`, intitule: a.titre };
    } else if (l.type === "livrable") {
      const v = p.livrables.find((x) => x.template === l.ref);
      if (v) return { ...l, phase: p.id, ancre: `raci-livrable-${l.ref}`, intitule: v.titre, template: l.ref };
    } else if (p.jalon.code === l.ref) {
      return { ...l, phase: p.id, ancre: `raci-${l.ref.toLowerCase()}`, intitule: `Jalon ${p.jalon.code} · ${p.jalon.nom}` };
    }
  }
  return null;
}

export function contientA(c: CodeRaci): boolean {
  return c === "A" || c === "AR";
}
export function contientR(c: CodeRaci): boolean {
  return c === "R" || c === "AR";
}

/** Écarts entre la matrice et la méthode. Vide si tout est cohérent. */
export function controlerRaci(): string[] {
  const erreurs: string[] = [];
  const vues = new Map<string, number>();
  for (const l of MATRICE_RACI) {
    const cle = `${l.type}:${l.ref}`;
    vues.set(cle, (vues.get(cle) ?? 0) + 1);
    if (!resoudre(l)) erreurs.push(`${cle} ne correspond à rien dans phases.ts`);
    const nbA = [l.design, l.build, l.client].filter(contientA).length;
    if (nbA !== 1) erreurs.push(`${cle} : ${nbA} A au lieu d'un seul`);
    if (![l.design, l.build, l.client].some(contientR)) erreurs.push(`${cle} : aucun R`);
    if (l.type === "jalon" && (!l.precision?.design || !l.precision?.build))
      erreurs.push(`${cle} : un jalon doit dire ce que prépare chaque membre du binôme`);
  }
  for (const [cle, n] of vues) if (n > 1) erreurs.push(`${cle} : ${n} lignes au lieu d'une`);
  for (const p of phases) {
    for (const a of p.activites) if (!vues.has(`activite:${a.id}`)) erreurs.push(`activité ${a.id} sans ligne RACI`);
    for (const v of p.livrables) {
      if (!v.template) erreurs.push(`livrable « ${v.titre} » (${p.id}) sans identifiant de template : impossible à rattacher`);
      else if (!vues.has(`livrable:${v.template}`)) erreurs.push(`livrable ${v.template} sans ligne RACI`);
    }
    if (!vues.has(`jalon:${p.jalon.code}`)) erreurs.push(`jalon ${p.jalon.code} sans ligne RACI`);
  }
  return erreurs;
}

const ERREURS_RACI = controlerRaci();
if (ERREURS_RACI.length) {
  throw new Error(`Matrice RACI incohérente avec la méthode (src/data/raci.ts) :\n- ${ERREURS_RACI.join("\n- ")}`);
}

const ORDRE_TYPE: Record<TypeLigne, number> = { activite: 0, livrable: 1, jalon: 2 };

/** Lignes résolues, dans l'ordre de la méthode : activités, livrables, puis jalon. */
export const LIGNES_RACI: LigneResolue[] = phases.flatMap((p) =>
  MATRICE_RACI.map(resoudre)
    .filter((l): l is LigneResolue => l !== null && l.phase === p.id)
    .sort((a, b) => ORDRE_TYPE[a.type] - ORDRE_TYPE[b.type]),
);

/** Ancre de la matrice d'une phase dans /raci. */
export function ancrePhaseRaci(phase: PhaseId): string {
  return `raci-phase-${phase}`;
}

/* ------------------------------------------------------------------ */
/* 3. Passages de relais                                               */
/* ------------------------------------------------------------------ */

export interface Artefact {
  libelle: string;
  /** Identifiant du template existant, s'il y en a un. */
  template?: string;
}

export interface Relais {
  phase: PhaseId;
  /** Ce que le Design transmet au Build. */
  versBuild: Artefact[];
  /** Ce que le Build transmet au Design. */
  versDesign: Artefact[];
  /** Le moment où le relais doit être fait, au plus tard. */
  quand: string;
}

export const RELAIS: Relais[] = [
  {
    phase: "cadrer",
    versBuild: [
      { libelle: "Projet de charte de mission : problème, indicateur cible, périmètre", template: "charte-de-mission" },
      { libelle: "Carte des parties prenantes, dont les interlocuteurs DSI et sécurité", template: "carte-parties-prenantes" },
    ],
    versDesign: [
      { libelle: "Liste des accès, données et validations de conformité à obtenir, avec délais" },
      { libelle: "Critères d'arrêt techniques à inscrire dans la charte" },
    ],
    quand: "Avant la séance G0.",
  },
  {
    phase: "diagnostiquer",
    versBuild: [
      { libelle: "Synthèses d'entretiens et enregistrements autorisés", template: "guide-entretien" },
      { libelle: "Fiches des processus existants, avec volumes et exceptions", template: "fiche-processus-existant" },
    ],
    versDesign: [
      { libelle: "Revue de préparation des données et du SI", template: "revue-donnees-si" },
      { libelle: "Analyses de données qui confirment ou infirment les irritants" },
    ],
    quand: "Au fil des entretiens, et une semaine avant la restitution.",
  },
  {
    phase: "cibler",
    versBuild: [
      { libelle: "Liste courte d'opportunités à qualifier", template: "canevas-cas-usage" },
      { libelle: "Hypothèses de valeur à confronter aux coûts", template: "business-case" },
    ],
    versDesign: [
      { libelle: "Niveau de solution et note de faisabilité de chaque opportunité" },
      { libelle: "Coûts de construction et d'inférence, prérequis données" },
    ],
    quand: "Avant l'atelier de priorisation.",
  },
  {
    phase: "reinventer",
    versBuild: [
      { libelle: "Processus cible AI-Native", template: "processus-cible-ai-native" },
      { libelle: "Projet de matrice humain-agent", template: "matrice-humain-agent" },
    ],
    versDesign: [
      { libelle: "Niveaux d'autonomie atteignables et ce qu'il faudra prouver pour chacun" },
      { libelle: "Prototypes jetables pour éprouver la cible avec le terrain" },
    ],
    quand: "Avant chaque séance avec le terrain.",
  },
  {
    phase: "concevoir",
    versBuild: [
      { libelle: "Définition du succès et cas annotés par les experts métier" },
      { libelle: "Mission, périmètre et règles métier de chaque agent", template: "fiche-agent" },
    ],
    versDesign: [
      { libelle: "Plan d'évaluation et golden set outillé", template: "plan-evaluation" },
      { libelle: "Dossier d'architecture et décisions structurantes", template: "dossier-architecture-multi-agents" },
      { libelle: "Analyse de risques et garde-fous, à relire avec le métier", template: "analyse-risques-agent" },
    ],
    quand: "Avant la revue de conception G4.",
  },
  {
    phase: "construire",
    versBuild: [
      { libelle: "Backlog priorisé de sprint, avec critères d'acceptation métier", template: "plan-de-sprint" },
      { libelle: "Retours des experts sur les échantillons revus" },
      { libelle: "Plan de pilote : site, groupe témoin, calendrier", template: "plan-pilote" },
    ],
    versDesign: [
      { libelle: "Rapport d'évaluation de chaque version", template: "rapport-evaluation" },
      { libelle: "Démo de la semaine, préparée pour le client" },
      { libelle: "Mesures du pilote issues de l'observabilité" },
    ],
    quand: "Chaque semaine, avant la démo au client.",
  },
  {
    phase: "industrialiser",
    versBuild: [
      { libelle: "Plan de conduite du changement et calendrier des vagues", template: "plan-conduite-changement" },
      { libelle: "Décisions du comité de gouvernance" },
    ],
    versDesign: [
      { libelle: "Revue de préparation à la mise en production", template: "checklist-mise-en-production" },
      { libelle: "Runbooks et registre des agents", template: "runbook-agent" },
      { libelle: "Suivi des coûts d'inférence", template: "checklist-llmops" },
    ],
    quand: "Avant chaque vague.",
  },
  {
    phase: "perenniser",
    versBuild: [
      { libelle: "Tableau de bord de la valeur réalisée", template: "tableau-de-bord-valeur" },
      { libelle: "Retours des propriétaires d'agents sur les évolutions attendues" },
    ],
    versDesign: [
      { libelle: "État du transfert technique, compétence par compétence", template: "plan-transfert" },
      { libelle: "Composants et évaluations versés au pool, pour le REX", template: "rex-mission" },
    ],
    quand: "Avant le constat G7.",
  },
];

/** Quand un sujet passe du Design au Build. */
export const DEFINITION_PRET: string[] = [
  "Le problème métier et l'indicateur qu'il fait bouger sont écrits, avec la référence.",
  "Des exemples réels sont fournis : au moins dix cas, dont des cas difficiles et des contre-exemples.",
  "Les critères d'acceptation sont formulés par le métier et testables.",
  "Les règles métier et les exceptions connues sont listées, avec leur source.",
  "Les accès et les données nécessaires sont obtenus, ou leur date d'obtention est connue.",
  "Le Build a pu poser ses questions et a reçu une réponse écrite.",
];

/** Quand un sujet revient du Build au Design. */
export const DEFINITION_TERMINE: string[] = [
  "Les seuils d'évaluation convenus sont atteints, et le rapport le montre, échecs compris.",
  "Le Design a pu l'essayer lui-même sur des cas réels, sans l'aide du Build.",
  "Le comportement en cas d'échec ou de doute est prévu : escalade vers l'humain, mode dégradé.",
  "C'est observable : traces, coûts et indicateurs visibles dans le tableau de bord.",
  "La documentation utile au client est à jour : fiche agent, runbook, décisions.",
  "La démo au client est prête, sur des cas qu'il reconnaîtra.",
];

/* ------------------------------------------------------------------ */
/* 4. Rituels du binôme                                                */
/* ------------------------------------------------------------------ */

export interface RituelBinome {
  nom: string;
  frequence: string;
  qui: string;
  contenu: string;
}

export const RITUELS_BINOME: RituelBinome[] = [
  {
    nom: "Synchronisation quotidienne",
    frequence: "Chaque jour, 15 minutes, caméra allumée",
    qui: "Design et Build",
    contenu: "Ce que le terrain a dit hier, ce qui bloque, la décision du jour. On n'y fait pas le compte rendu de ce qui est déjà écrit.",
  },
  {
    nom: "L'écrit asynchrone par défaut",
    frequence: "En continu",
    qui: "Design et Build",
    contenu: "Questions, décisions et retours passent par écrit dans un canal unique, réponse sous une demi-journée. Un échange oral important se résume par écrit le jour même.",
  },
  {
    nom: "Démo hebdomadaire au client",
    frequence: "Chaque semaine, 30 minutes",
    qui: "Le Build présente, le Design anime",
    contenu: "Ce qui marche, sur des cas réels, avec les échecs. Le Build présente lui-même : le client voit qui construit, et le Build entend directement les réactions.",
  },
  {
    nom: "Backlog partagé",
    frequence: "Revu chaque semaine, avant la démo",
    qui: "Design priorise, Build estime",
    contenu: "Un seul backlog pour le binôme, chaque élément relié au problème ou à l'indicateur qu'il sert. Le plan de sprint en est l'extrait de la semaine.",
  },
  {
    nom: "Journal de décisions partagé",
    frequence: "À chaque décision",
    qui: "Celui qui a pris ou obtenu la décision",
    contenu: "Date, décision, options écartées, qui a décidé. Les décisions d'architecture y renvoient vers leur ADR ; les décisions client vers le registre RAID.",
  },
  {
    nom: "Rétrospective du binôme",
    frequence: "Toutes les deux semaines, 30 minutes",
    qui: "Design et Build, seuls",
    contenu: "Ce qui s'est perdu entre les deux, ce que chacun attend de l'autre. On corrige la répartition ici, pas devant le client.",
  },
];

/* ------------------------------------------------------------------ */
/* 5. Éviter le téléphone arabe                                        */
/* ------------------------------------------------------------------ */

export interface Pratique {
  titre: string;
  texte: string;
}

export const CONTRE_TELEPHONE_ARABE: Pratique[] = [
  {
    titre: "Le Build écoute le terrain lui-même",
    texte: "Il assiste à distance à une partie des entretiens de découverte et des observations, ou en écoute les enregistrements quand les personnes y ont consenti. Il ne travaille jamais seulement sur la synthèse du Design.",
  },
  {
    titre: "Le Build vient sur site aux moments clés",
    texte: "Au lancement de la mission, à la première mise en production et au go-live, au minimum. Il rencontre le sponsor, le propriétaire du processus, la DSI et les utilisateurs du pilote.",
  },
  {
    titre: "L'immersion hebdomadaire à distance",
    texte: "Chaque semaine, le Build passe un temps auprès des utilisateurs par écran interposé : observation d'un poste, revue d'échantillons avec un expert, écoute d'appels autorisés.",
  },
  {
    titre: "Le Design garde la main sur des prototypes",
    texte: "Il sait lancer, modifier et montrer un prototype sans attendre le Build : prompt, jeu de cas, version de démonstration. Il vérifie lui-même avant de promettre.",
  },
  {
    titre: "Un seul jeu d'évaluation, partagé",
    texte: "Le golden set est la définition commune de « ça marche ». Le Design en apporte les cas et les annotations métier, le Build l'outille ; aucun des deux n'en a une version privée.",
  },
  {
    titre: "Des exemples plutôt que des descriptions",
    texte: "Un besoin se transmet avec des cas réels, des captures et des contre-exemples, pas avec une reformulation. En cas de doute, on appelle l'expert métier ensemble.",
  },
];

/* ------------------------------------------------------------------ */
/* 6. Contraintes du nearshore                                         */
/* ------------------------------------------------------------------ */

export interface Contrainte {
  titre: string;
  regle: string;
  controle: string;
}

export const CONTRAINTES_NEARSHORE: Contrainte[] = [
  {
    titre: "Les données du client restent chez le client",
    regle: "Le Build travaille dans l'environnement du client, par un poste virtuel (VDI) ou un bastion fourni et journalisé par la DSI. Aucune donnée de production sur un poste ou un espace de stockage du pool.",
    controle: "Mode d'accès écrit dans la charte de mission et validé par le RSSI avant le premier jour.",
  },
  {
    titre: "Des jeux de test anonymisés ou synthétiques",
    regle: "Hors de l'environnement du client, on ne manipule que des données anonymisées de façon irréversible ou synthétiques. Une pseudonymisation n'est pas une anonymisation : la donnée reste personnelle.",
    controle: "Procédé d'anonymisation décrit et validé par le DPO ; jeux synthétiques générés à partir de règles, pas de copies maquillées.",
  },
  {
    titre: "Des droits d'accès nominatifs et minimaux",
    regle: "Comptes nominatifs, droits limités au besoin de la phase, revus à chaque jalon et retirés à la fin de la mission. Pas de compte partagé dans le binôme.",
    controle: "Liste des accès tenue dans le registre RAID ; revue à chaque jalon ; retrait constaté à la clôture.",
  },
  {
    titre: "Les transferts hors de l'Union européenne, le cas échéant",
    regle: "Si le Build accède depuis un pays hors de l'Union européenne à des données personnelles, même à distance et sans copie, c'est un transfert au sens du RGPD. Il faut une décision d'adéquation de la Commission européenne pour ce pays ou, à défaut, des clauses contractuelles types accompagnées d'une analyse d'impact du transfert.",
    controle: "Base juridique du transfert identifiée avec le DPO du client et le juriste du pool avant tout accès ; mentionnée au registre des traitements du client.",
  },
  {
    titre: "Les contraintes propres au client",
    regle: "Certains clients interdisent tout accès depuis l'étranger, ou exigent une habilitation pour certaines données. On le sait au cadrage, pas au premier sprint.",
    controle: "Question posée en préparation de mission ; si l'accès à distance est impossible, la répartition du binôme est revue avant G0.",
  },
];

/* ------------------------------------------------------------------ */
/* 7. Escalade et arbitrages                                           */
/* ------------------------------------------------------------------ */

export interface RegleArbitrage {
  sujet: string;
  tranche: string;
  comment: string;
}

export const ARBITRAGES: RegleArbitrage[] = [
  {
    sujet: "Le problème, le périmètre, la priorité dans le backlog",
    tranche: "Le Design",
    comment: "Après avoir entendu le Build sur le coût et le risque de chaque option.",
  },
  {
    sujet: "La faisabilité, l'architecture, la qualité technique",
    tranche: "Le Build",
    comment: "Après avoir entendu le Design sur ce que le métier perd ou gagne.",
  },
  {
    sujet: "Une mise en production qui ne passe pas les seuils d'évaluation",
    tranche: "Le Build a un droit de veto",
    comment: "Aucune pression de calendrier ne le lève ; seul le client peut accepter un risque, par écrit, au jalon.",
  },
  {
    sujet: "Une promesse au client qui n'a pas été qualifiée",
    tranche: "Le Design ne la fait pas",
    comment: "Il dit « on revient vers vous » et qualifie avec le Build sous 48 heures.",
  },
  {
    sujet: "Un conflit entre périmètre et faisabilité",
    tranche: "Le client, sur options préparées par le binôme",
    comment: "Voir l'escalade ci-dessous : le binôme ne laisse jamais le client arbitrer entre deux versions concurrentes de ses consultants.",
  },
];

export interface NiveauEscalade {
  niveau: string;
  delai: string;
  qui: string;
  comment: string;
}

export const ESCALADE: NiveauEscalade[] = [
  {
    niveau: "1. Dans le binôme",
    delai: "Sous 24 heures",
    qui: "Design et Build",
    comment: "Chacun écrit son option en cinq lignes : ce qu'elle coûte, ce qu'elle rapporte, ce qu'elle risque. Celui qui porte le A de la ligne concernée tranche, et la décision va au journal.",
  },
  {
    niveau: "2. Avec le lead de mission ou un pair du pool",
    delai: "Sous 48 heures",
    qui: "Lead FDE de la mission, à défaut un pair expérimenté",
    comment: "Quand le désaccord persiste ou touche les deux colonnes à la fois. Il entend les deux, tranche ou reformule les options pour le client.",
  },
  {
    niveau: "3. Devant le client",
    delai: "Au point hebdomadaire suivant, ou au COPIL",
    qui: "Sponsor ou propriétaire du processus",
    comment: "Quand l'arbitrage change le périmètre, la valeur, le délai ou le risque accepté. Le binôme présente des options communes et une recommandation unique.",
  },
];

/* ------------------------------------------------------------------ */
/* Export Markdown                                                     */
/* ------------------------------------------------------------------ */

function cellule(c: CodeRaci): string {
  return c === "AR" ? "A/R" : c;
}

/** Toute la page au format Markdown, pour un wiki ou une annexe de charte de mission. */
export function raciEnMarkdown(): string {
  const l: string[] = ["# RACI du binôme FDE Design · FDE Build", "", `> ${PRINCIPE_BINOME}`, ""];

  l.push("## Les deux rôles", "");
  for (const r of Object.values(ROLES_BINOME)) {
    l.push(`### ${r.nom} — ${r.accroche}`, "", r.mission, "", `**Présence** : ${r.presence.mode}. ${r.presence.detail}`, "", "**Responsabilités**", "");
    r.responsabilites.forEach((x) => l.push(`- ${x}`));
    l.push("", `**Compétences dominantes** (${r.dominante.toLowerCase()})`, "");
    r.competences.forEach((x) => l.push(`- ${x}`));
    l.push("");
  }
  l.push("**Engagements communs**", "");
  ENGAGEMENTS_COMMUNS.forEach((x) => l.push(`- ${x}`));
  l.push("");

  l.push("## Matrice RACI", "");
  (Object.keys(LEGENDE_RACI) as (keyof typeof LEGENDE_RACI)[]).forEach((k) =>
    l.push(`- **${k}** — ${LEGENDE_RACI[k].nom} : ${LEGENDE_RACI[k].definition}`),
  );
  l.push("- **A/R** — répond du résultat et le réalise.", "");
  for (const p of phases) {
    l.push(`### Phase ${p.numero} — ${p.nom}`, "", "| Élément | Design | Build | Client | Précisions |", "| --- | :-: | :-: | :-: | --- |");
    for (const x of LIGNES_RACI.filter((y) => y.phase === p.id)) {
      const type = x.type === "livrable" ? "Livrable : " : "";
      const precisions = [
        x.precision?.design && `Design : ${x.precision.design}`,
        x.precision?.build && `Build : ${x.precision.build}`,
      ]
        .filter(Boolean)
        .join(" ")
        .replace(/\|/g, "\\|");
      l.push(`| ${type}${x.intitule} | ${cellule(x.design)} | ${cellule(x.build)} | ${cellule(x.client)} | ${precisions} |`);
    }
    l.push("");
  }

  l.push("## Passages de relais", "");
  for (const r of RELAIS) {
    const p = phases.find((x) => x.id === r.phase)!;
    l.push(`### Phase ${p.numero} — ${p.nom} (${r.quand})`, "", "**Du Design vers le Build**", "");
    r.versBuild.forEach((a) => l.push(`- ${a.libelle}`));
    l.push("", "**Du Build vers le Design**", "");
    r.versDesign.forEach((a) => l.push(`- ${a.libelle}`));
    l.push("");
  }
  l.push("### Définition de « prêt » (du Design vers le Build)", "");
  DEFINITION_PRET.forEach((x) => l.push(`- [ ] ${x}`));
  l.push("", "### Définition de « terminé » (du Build vers le Design)", "");
  DEFINITION_TERMINE.forEach((x) => l.push(`- [ ] ${x}`));
  l.push("");

  l.push("## Rituels du binôme", "", "| Rituel | Fréquence | Qui | Contenu |", "| --- | --- | --- | --- |");
  RITUELS_BINOME.forEach((r) => l.push(`| ${r.nom} | ${r.frequence} | ${r.qui} | ${r.contenu} |`));
  l.push("");

  l.push("## Éviter le téléphone arabe", "");
  CONTRE_TELEPHONE_ARABE.forEach((x) => l.push(`- **${x.titre}.** ${x.texte}`));
  l.push("");

  l.push("## Contraintes du nearshore : données et conformité", "");
  CONTRAINTES_NEARSHORE.forEach((x) => l.push(`- **${x.titre}.** ${x.regle} *Contrôle : ${x.controle}*`));
  l.push("");

  l.push("## Escalade et arbitrages", "", "| Sujet | Qui tranche | Comment |", "| --- | --- | --- |");
  ARBITRAGES.forEach((a) => l.push(`| ${a.sujet} | ${a.tranche} | ${a.comment} |`));
  l.push("");
  ESCALADE.forEach((e) => l.push(`- **${e.niveau}** (${e.delai}, ${e.qui}) : ${e.comment}`));
  l.push("");
  return l.join("\n");
}
