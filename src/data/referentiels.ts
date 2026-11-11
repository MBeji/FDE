import type {
  CategorieGlossaire,
  FilId,
  FonctionId,
  LevierValeur,
  ModeCopilote,
  PhaseId,
  SecteurId,
  SolutionType,
} from "./types";

export const PHASE_IDS: PhaseId[] = [
  "cadrer",
  "diagnostiquer",
  "cibler",
  "reinventer",
  "concevoir",
  "construire",
  "industrialiser",
  "perenniser",
];

/** Version courte des phases, utilisable côté client sans charger tout le détail. */
export const PHASES_RESUME: Record<
  PhaseId,
  { numero: number; nom: string; promesse: string; temps: string; jalon: string; duree: string }
> = {
  cadrer: {
    numero: 0,
    nom: "Cadrer",
    promesse: "Poser le bon problème",
    temps: "Stratégie",
    jalon: "G0 — Mandat clair",
    duree: "1 à 2 sem.",
  },
  diagnostiquer: {
    numero: 1,
    nom: "Diagnostiquer",
    promesse: "Comprendre le métier et mesurer le point de départ",
    temps: "Stratégie",
    jalon: "G1 — Diagnostic partagé",
    duree: "3 à 4 sem.",
  },
  cibler: {
    numero: 2,
    nom: "Cibler",
    promesse: "Choisir où créer de la valeur",
    temps: "Stratégie",
    jalon: "G2 — Paris arbitrés",
    duree: "2 à 3 sem.",
  },
  reinventer: {
    numero: 3,
    nom: "Réinventer",
    promesse: "Reconstruire le processus et l'organisation autour des agents",
    temps: "Conception",
    jalon: "G3 — Cible validée par le métier",
    duree: "3 à 4 sem.",
  },
  concevoir: {
    numero: 4,
    nom: "Concevoir",
    promesse: "Spécifier les agents et le système",
    temps: "Conception",
    jalon: "G4 — Conception approuvée",
    duree: "3 à 4 sem.",
  },
  construire: {
    numero: 5,
    nom: "Construire",
    promesse: "Prouver en conditions réelles",
    temps: "Réalisation",
    jalon: "G5 — Preuve de valeur",
    duree: "8 à 12 sem.",
  },
  industrialiser: {
    numero: 6,
    nom: "Industrialiser",
    promesse: "Passer à l'échelle en confiance",
    temps: "Réalisation",
    jalon: "G6 — Prêt pour l'échelle",
    duree: "8 à 12 sem.",
  },
  perenniser: {
    numero: 7,
    nom: "Pérenniser",
    promesse: "Mesurer, transmettre, capitaliser",
    temps: "Valeur",
    jalon: "G7 — Client autonome",
    duree: "Continu",
  },
};

export const TEMPS = ["Stratégie", "Conception", "Réalisation", "Valeur"] as const;

export const FILS: Record<FilId, { nom: string; principe: string }> = {
  valeur: {
    nom: "Valeur",
    principe:
      "Une hypothèse de valeur chiffrée dès le cadrage, une référence signée par la finance, un registre tenu à jour jusqu'à la mesure du réalisé.",
  },
  confiance: {
    nom: "Confiance",
    principe:
      "Risques, sécurité, conformité et gouvernance sont traités à chaque phase, pas à la veille de la mise en production.",
  },
  adoption: {
    nom: "Adoption",
    principe:
      "Les personnes dont le travail change sont associées dès le diagnostic, et l'adoption se pilote avec des indicateurs.",
  },
};

export const CONVICTIONS: { titre: string; texte: string }[] = [
  {
    titre: "Le problème avant la solution",
    texte:
      "Une demande client arrive presque toujours sous la forme d'une solution. Notre premier livrable est sa reformulation en problème métier chiffré.",
  },
  {
    titre: "Le domaine avant le cas d'usage",
    texte:
      "Cinq cas d'usage qui se renforcent sur un même flux valent plus que quinze dispersés. On transforme un domaine de bout en bout.",
  },
  {
    titre: "Réinventer, pas automatiser",
    texte:
      "Plaquer des agents sur un processus conçu pour des humains en fige les défauts. On repart du résultat attendu.",
  },
  {
    titre: "La solution la plus simple qui suffit",
    texte:
      "Une règle avant un modèle, un workflow avant un agent, un agent avant plusieurs. On monte d'un barreau sur preuve.",
  },
  {
    titre: "Les évaluations avant les agents",
    texte:
      "On ne construit pas ce qu'on ne sait pas juger. Le jeu d'évaluation existe avant la première ligne de prompt.",
  },
  {
    titre: "L'autonomie se gagne sur preuves",
    texte:
      "Un agent démarre sous supervision et élargit son périmètre outil par outil, selon des conditions écrites à l'avance.",
  },
  {
    titre: "La valeur se mesure, elle ne se déclare pas",
    texte:
      "Chaque gain annoncé a une référence, une méthode de mesure et un propriétaire. La finance signe.",
  },
  {
    titre: "Réussir, c'est rendre le client autonome",
    texte:
      "Le critère de fin de mission n'est pas la mise en production, c'est une équipe client qui opère et fait évoluer le système seule.",
  },
];

export const CATEGORIES_FRAMEWORK: Record<string, { nom: string; description: string }> = {
  strategie: {
    nom: "Stratégie & résolution de problèmes",
    description: "Poser le problème, structurer la pensée, fixer l'ambition.",
  },
  opportunites: {
    nom: "Opportunités",
    description: "Trouver où l'IA crée de la valeur et choisir ses paris.",
  },
  processus: {
    nom: "Processus & organisation",
    description: "Reconstruire le travail autour de la collaboration humain-agent.",
  },
  agents: {
    nom: "Agents & systèmes multi-agents",
    description: "Concevoir des agents fiables et les faire travailler ensemble.",
  },
  industrialisation: {
    nom: "Delivery & industrialisation",
    description: "Passer du prototype à l'exploitation à l'échelle.",
  },
  confiance: {
    nom: "Confiance & gouvernance",
    description: "Maîtriser les risques, la sécurité et la conformité.",
  },
  adoption: {
    nom: "Adoption & changement",
    description: "Faire en sorte que le système soit réellement utilisé.",
  },
  valeur: {
    nom: "Mesure de la valeur",
    description: "Chiffrer, suivre et prouver la valeur créée.",
  },
};

export const TYPES_TEMPLATE: Record<string, string> = {
  livrable: "Livrable",
  canevas: "Canevas",
  grille: "Grille",
  checklist: "Checklist",
  trame: "Trame",
};

export const FORMATS_TEMPLATE: Record<string, string> = {
  document: "Document",
  tableau: "Tableau",
  atelier: "Atelier",
  presentation: "Présentation",
};

export const TYPES_SAVOIR: Record<string, { nom: string; pluriel: string; description: string }> = {
  pattern: {
    nom: "Pattern",
    pluriel: "Patterns",
    description: "Ce qui marche, mission après mission.",
  },
  "anti-pattern": {
    nom: "Anti-pattern",
    pluriel: "Anti-patterns",
    description: "Les pièges dans lesquels on retombe.",
  },
  rex: {
    nom: "Retour d'expérience",
    pluriel: "Retours d'expérience",
    description: "Ce que le terrain nous a appris.",
  },
};

export const NIVEAUX: Record<string, string> = {
  fondamental: "Fondamental",
  avance: "Avancé",
};

export const SECTEURS: Record<SecteurId, string> = {
  telecoms: "Télécoms",
  banque: "Banque",
  assurance: "Assurance",
  distribution: "Distribution & e-commerce",
  industrie: "Industrie",
  energie: "Énergie & utilities",
  "secteur-public": "Secteur public",
  sante: "Santé",
  transverse: "Fonctions transverses",
};

export const FONCTIONS: Record<FonctionId, string> = {
  "service-client": "Service client",
  "ventes-marketing": "Ventes & marketing",
  operations: "Opérations",
  finance: "Finance",
  rh: "Ressources humaines",
  it: "IT",
  "juridique-conformite": "Juridique & conformité",
  "achats-supply": "Achats & supply chain",
  "produit-rd": "Produit & R&D",
};

export const SOLUTIONS: Record<SolutionType, { nom: string; barreau: string }> = {
  assistant: { nom: "Assistant", barreau: "Barreau 2 — appel de modèle" },
  workflow: { nom: "Workflow", barreau: "Barreau 3 — workflow" },
  agent: { nom: "Agent", barreau: "Barreau 4 — agent" },
  "multi-agents": { nom: "Multi-agents", barreau: "Barreau 5 — système multi-agents" },
};

export const LEVIERS: Record<LevierValeur, string> = {
  cout: "Coût",
  revenu: "Revenu",
  qualite: "Qualité",
  delai: "Délai",
  risque: "Risque",
  experience: "Expérience",
};

export const HORIZONS: Record<string, string> = {
  "gain-rapide": "Gain rapide",
  coeur: "Cœur",
  pari: "Pari",
};

export const AUTONOMIE: { niveau: number; code: string; nom: string; agent: string; humain: string }[] = [
  { niveau: 0, code: "L0", nom: "Manuel", agent: "N'intervient pas", humain: "Fait tout" },
  {
    niveau: 1,
    code: "L1",
    nom: "Assistance",
    agent: "Informe et suggère",
    humain: "Décide et exécute",
  },
  {
    niveau: 2,
    code: "L2",
    nom: "Proposition",
    agent: "Prépare l'action complète",
    humain: "Approuve chaque action avant exécution",
  },
  {
    niveau: 3,
    code: "L3",
    nom: "Autonomie encadrée",
    agent: "Agit seul dans un périmètre défini, escalade les exceptions",
    humain: "Supervise en temps réel, peut reprendre la main",
  },
  {
    niveau: 4,
    code: "L4",
    nom: "Autonomie contrôlée",
    agent: "Agit seul sur tout le périmètre",
    humain: "Contrôle a posteriori par échantillonnage et sur alerte",
  },
  {
    niveau: 5,
    code: "L5",
    nom: "Autonomie complète",
    agent: "Planifie et gère ses exceptions",
    humain: "Fixe les objectifs et audite",
  },
];

export const CATEGORIES_GLOSSAIRE: Record<CategorieGlossaire, string> = {
  ia: "IA générative",
  agents: "Agents",
  methode: "Méthode",
  conseil: "Conseil",
  delivery: "Delivery",
  gouvernance: "Gouvernance",
};

export const MODES_COPILOTE: Record<ModeCopilote, { nom: string; description: string }> = {
  guide: { nom: "Guide", description: "Me dire quoi faire, dans quel ordre, avec quoi." },
  redacteur: { nom: "Rédacteur", description: "Produire un premier jet de livrable." },
  challenger: {
    nom: "Challenger",
    description: "Critiquer mon travail comme un associé exigeant.",
  },
  coach: { nom: "Coach", description: "Me préparer à une réunion ou une conversation difficile." },
};

export const OUTILS: {
  id: string;
  nom: string;
  resume: string;
  phases: PhaseId[];
  duree: string;
}[] = [
  {
    id: "maturite",
    nom: "Diagnostic de maturité",
    resume:
      "Évaluer le client sur sept dimensions, obtenir son profil AI-Native et les priorités qui en découlent.",
    phases: ["diagnostiquer"],
    duree: "20 min",
  },
  {
    id: "agent-ou-pas",
    nom: "Agent ou pas ?",
    resume:
      "Six questions pour placer un besoin sur l'échelle des solutions et éviter de construire trop compliqué.",
    phases: ["cibler", "concevoir"],
    duree: "5 min",
  },
  {
    id: "priorisation",
    nom: "Priorisation des cas d'usage",
    resume:
      "Noter les cas d'usage en valeur et en faisabilité, visualiser la matrice et sortir un portefeuille arbitré.",
    phases: ["cibler"],
    duree: "30 min",
  },
  {
    id: "business-case",
    nom: "Business case",
    resume:
      "Chiffrer bénéfices et coûts sur trois ans, avec taux de captation, montée en charge et scénarios.",
    phases: ["cibler", "perenniser"],
    duree: "30 min",
  },
  {
    id: "redesign-processus",
    nom: "Redesign de processus",
    resume:
      "Décomposer un processus en étapes, décider du sort de chacune et mesurer le gain du processus cible.",
    phases: ["diagnostiquer", "reinventer"],
    duree: "40 min",
  },
  {
    id: "agent-designer",
    nom: "Agent Designer",
    resume:
      "Spécifier un agent pas à pas et générer sa fiche agent et l'ossature de son system prompt.",
    phases: ["concevoir"],
    duree: "30 min",
  },
];
