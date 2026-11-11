/**
 * Référentiel de compétences des FDE et grille de « readiness client ».
 * Les niveaux minimaux et les compétences critiques constituent un cadre proposé,
 * à ajuster par la direction du pool.
 */

import type { Ressource } from "@/data/onboarding";

export type Niveau = 1 | 2 | 3 | 4;

export const NIVEAUX: { niveau: Niveau; nom: string; definition: string }[] = [
  { niveau: 1, nom: "Découverte", definition: "Connaît les notions et sait où trouver la méthode ; ne les a pas encore appliquées seul." },
  { niveau: 2, nom: "Pratique encadrée", definition: "Applique la méthode sur un cas réel avec relecture ; le livrable demande encore des reprises." },
  { niveau: 3, nom: "Autonome", definition: "Produit seul un résultat au standard du pool, sait quand demander de l'aide." },
  { niveau: 4, nom: "Référent", definition: "Traite les cas difficiles, forme les autres et fait évoluer la méthode." },
];

export type FamilleId = "conseil" | "agents" | "ingenierie" | "posture";

export const FAMILLES: { id: FamilleId; nom: string; description: string }[] = [
  { id: "conseil", nom: "Conseil et business", description: "Poser le bon problème, diagnostiquer, cibler la valeur et la défendre." },
  { id: "agents", nom: "Ingénierie des agents et de l'IA", description: "Choisir le bon niveau de solution, concevoir, évaluer et sécuriser les agents." },
  { id: "ingenierie", nom: "Ingénierie logicielle, données et plateforme", description: "Construire, intégrer et exploiter des systèmes fiables en production." },
  { id: "posture", nom: "Posture et relation client", description: "Gagner la confiance, faire adhérer, faire évoluer les pratiques et rendre le client autonome." },
];

export interface Competence {
  id: string;
  famille: FamilleId;
  nom: string;
  description: string;
  /** Comportements observables, du niveau 1 au niveau 4. */
  niveaux: [string, string, string, string];
  /** Niveau minimal exigé avant d'intervenir seul chez un client. */
  minimum: Niveau;
  /** Une insuffisance sur une compétence critique bloque l'intervention en autonomie. */
  critique: boolean;
  ressources: Ressource[];
}

export const COMPETENCES: Competence[] = [
  /* -------------------------- Conseil et business -------------------------- */
  {
    id: "cadrage",
    famille: "conseil",
    nom: "Cadrage et structuration de problème",
    description: "Transformer une demande en problème métier mesurable, structuré en hypothèses vérifiables.",
    niveaux: [
      "Sait distinguer une demande de solution d'un problème métier et connaît l'arbre d'hypothèses.",
      "Reformule une demande en problème chiffré et construit un arbre d'hypothèses MECE, avec relecture.",
      "Pose seul une hypothèse de réponse dans la première semaine et la fait valider par le sponsor ; rédige une charte avec critères d'arrêt.",
      "Recadre une mission engagée sur un mauvais problème et forme les autres à la structuration.",
    ],
    minimum: 3,
    critique: true,
    ressources: [
      { libelle: "Problème et hypothèses", href: "/frameworks/probleme-hypotheses" },
      { libelle: "MECE", href: "/frameworks/mece" },
      { libelle: "Charte de mission", href: "/templates/charte-de-mission" },
    ],
  },
  {
    id: "diagnostic",
    famille: "conseil",
    nom: "Diagnostic métier et analyse de processus",
    description: "Comprendre comment le travail se fait réellement et mesurer le point de départ.",
    niveaux: [
      "Connaît les outils du diagnostic : entretiens, observation, cartographie, analyse de données.",
      "Cartographie un processus existant et en extrait des constats chiffrés, avec relecture.",
      "Mène seul un diagnostic complet et distingue causes et symptômes, comme la décomposition du MTTR chez Voxalis.",
      "Diagnostique des domaines complexes ou politiquement sensibles et conçoit de nouvelles grilles d'analyse.",
    ],
    minimum: 3,
    critique: false,
    ressources: [
      { libelle: "Cartographie des processus", href: "/frameworks/cartographie-processus" },
      { libelle: "Analyse des causes racines", href: "/frameworks/analyse-causes-racines" },
      { libelle: "Atelier maturité", href: "/outils/maturite" },
    ],
  },
  {
    id: "valeur",
    famille: "conseil",
    nom: "Chiffrage et pilotage de la valeur",
    description: "Chiffrer une hypothèse de valeur, la faire signer par la finance et mesurer le réalisé.",
    niveaux: [
      "Connaît l'arbre de valeur et la différence entre valeur déclarée et valeur mesurée.",
      "Construit un business case à partir d'hypothèses explicites, avec relecture.",
      "Établit seul une référence signée par la finance, teste la sensibilité et tient le registre de valeur.",
      "Défend un business case contesté devant un comité financier et conçoit des mécanismes de mesure nouveaux.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Chiffrer la valeur", href: "/guides/chiffrer-la-valeur" },
      { libelle: "Registre de valeur", href: "/frameworks/registre-de-valeur" },
      { libelle: "Atelier business case", href: "/outils/business-case" },
    ],
  },
  {
    id: "reinvention",
    famille: "conseil",
    nom: "Réinvention de processus et modèle opérationnel",
    description: "Reconstruire un processus et l'organisation autour des agents plutôt qu'automatiser l'existant.",
    niveaux: [
      "Connaît la réinvention zero-base et les niveaux d'autonomie.",
      "Conçoit un processus cible et une matrice humain-agent, avec relecture.",
      "Conçoit seul un processus cible en voies différenciées par le risque et en mesure les impacts sur les rôles.",
      "Conçoit un modèle opérationnel cible à l'échelle d'une direction et en négocie les impacts sociaux.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Réinvention zero-base", href: "/frameworks/reinvention-zero-base" },
      { libelle: "Atelier redesign", href: "/outils/redesign-processus" },
      { libelle: "Modèle opérationnel cible", href: "/frameworks/modele-operationnel-cible" },
    ],
  },
  {
    id: "communication",
    famille: "conseil",
    nom: "Communication exécutive",
    description: "Faire décider un dirigeant : conclusion d'abord, preuves groupées, décision explicite.",
    niveaux: [
      "Connaît la pyramide et le SCQA.",
      "Rédige une note ou un support structuré, à reprendre sur la synthèse.",
      "Prépare et tient seul un passage en COPIL avec une décision obtenue et des objections traitées.",
      "Conduit des échanges de direction générale sur des arbitrages difficiles et forme les autres.",
    ],
    minimum: 3,
    critique: true,
    ressources: [
      { libelle: "Communication exécutive", href: "/frameworks/communication-executive" },
      { libelle: "Dialoguer avec les dirigeants", href: "/guides/dialoguer-avec-les-dirigeants" },
      { libelle: "Support de COPIL", href: "/templates/support-copil" },
    ],
  },

  /* ------------------------ Ingénierie des agents ------------------------- */
  {
    id: "niveau-solution",
    famille: "agents",
    nom: "Choix du niveau de solution",
    description: "Retenir le barreau le plus bas qui suffit : règle, appel unique, workflow, agent, multi-agents.",
    niveaux: [
      "Connaît l'échelle des solutions et la distinction entre workflow et agent.",
      "Applique l'échelle sur un besoin donné et justifie son choix, avec relecture.",
      "Tranche seul, y compris contre la demande du client, et documente la décision dans un ADR.",
      "Arbitre des architectures multi-agents et démonte les sur-ingénieries avec des preuves.",
    ],
    minimum: 3,
    critique: true,
    ressources: [
      { libelle: "Faut-il un agent ?", href: "/frameworks/faut-il-un-agent" },
      { libelle: "Atelier Agent ou pas", href: "/outils/agent-ou-pas" },
      { libelle: "Multi-agents prématuré", href: "/savoir/multi-agents-premature" },
    ],
  },
  {
    id: "conception-agents",
    famille: "agents",
    nom: "Conception d'agents et context engineering",
    description: "Spécifier mission, contexte, mémoire, autonomie et escalade d'un agent.",
    niveaux: [
      "Connaît l'anatomie d'un agent et les patterns agentiques.",
      "Rédige une fiche agent et un prompt système complets, avec relecture.",
      "Conçoit seul un agent dont l'autonomie est fixée par outil et par situation, et maîtrise le contexte fourni.",
      "Conçoit des systèmes multi-agents et améliore les gabarits de conception du pool.",
    ],
    minimum: 3,
    critique: false,
    ressources: [
      { libelle: "Concevoir un agent", href: "/guides/concevoir-un-agent" },
      { libelle: "Context engineering", href: "/frameworks/context-engineering" },
      { libelle: "Atelier Agent Designer", href: "/outils/agent-designer" },
    ],
  },
  {
    id: "outils-integration",
    famille: "agents",
    nom: "Conception d'outils et protocoles",
    description: "Concevoir l'interface agent-outil et l'accès au SI par des standards ouverts comme MCP et A2A.",
    niveaux: [
      "Sait ce qu'est un outil d'agent et le rôle de MCP et d'A2A.",
      "Spécifie un outil (entrées, sorties, effets, erreurs), avec relecture.",
      "Conçoit seul un jeu d'outils minimal, sépare lecture et écriture et en fixe les droits.",
      "Conçoit une passerelle d'outils réutilisable pour plusieurs agents et plusieurs clients.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Conception des outils", href: "/frameworks/conception-outils" },
      { libelle: "Protocoles MCP et A2A", href: "/frameworks/protocoles-mcp-a2a" },
      { libelle: "Spécification d'outil", href: "/templates/specification-outil" },
    ],
  },
  {
    id: "evaluation",
    famille: "agents",
    nom: "Évaluation des agents",
    description: "Construire les évaluations avant les agents et décider sur preuves.",
    niveaux: [
      "Sait ce qu'est un golden set, un seuil de passage et un cas adverse.",
      "Construit un golden set et un plan d'évaluation, avec relecture.",
      "Pilote seul le développement par les évaluations et refuse une mise en production non prouvée.",
      "Conçoit des méthodes d'évaluation nouvelles (multi-agents, juges automatiques calibrés) et les transmet.",
    ],
    minimum: 3,
    critique: true,
    ressources: [
      { libelle: "Construire les évaluations", href: "/guides/construire-les-evals" },
      { libelle: "Eval-driven development", href: "/frameworks/eval-driven-development" },
      { libelle: "Plan d'évaluation", href: "/templates/plan-evaluation" },
    ],
  },
  {
    id: "confiance",
    famille: "agents",
    nom: "Garde-fous, sécurité et IA responsable",
    description: "Traiter risques, sécurité et conformité à chaque phase, pas en fin de projet.",
    niveaux: [
      "Connaît les principaux risques des applications LLM et l'approche par niveaux de risque de l'EU AI Act.",
      "Conduit une analyse de risques d'agent et propose des garde-fous, avec relecture.",
      "Pose seul les garde-fous (droits, limites, validation humaine) et les défend devant un RSSI et un DPO.",
      "Conçoit la gouvernance IA d'un client et forme les équipes aux risques agentiques.",
    ],
    minimum: 3,
    critique: true,
    ressources: [
      { libelle: "Sécurité des agents", href: "/frameworks/securite-agents" },
      { libelle: "Garde-fous", href: "/frameworks/garde-fous" },
      { libelle: "Checklist sécurité et conformité", href: "/templates/checklist-securite-conformite" },
    ],
  },

  /* ------------------ Ingénierie logicielle et plateforme ------------------ */
  {
    id: "code",
    famille: "ingenierie",
    nom: "Ingénierie logicielle de production",
    description: "Écrire, tester et livrer du code maintenable selon les standards du pool.",
    niveaux: [
      "Lit et modifie du code existant avec aide.",
      "Livre des fonctionnalités testées, avec revue de code systématique.",
      "Livre seul du code de production testé, observable et documenté, conforme aux standards.",
      "Fixe les standards d'une équipe mixte et forme les ingénieurs du client.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Standards d'ingénierie", href: "/standards" },
      { libelle: "Tranche verticale", href: "/savoir/tranche-verticale" },
      { libelle: "ADR", href: "/templates/adr" },
    ],
  },
  {
    id: "donnees",
    famille: "ingenierie",
    nom: "Données et connaissances",
    description: "Évaluer, préparer et gouverner les données et la base de connaissances dont dépendent les agents.",
    niveaux: [
      "Connaît les enjeux de qualité, de fraîcheur et de droits sur les données.",
      "Réalise une revue des données et du SI, avec relecture.",
      "Qualifie seul les sources, identifie les connaissances obsolètes et conçoit l'accès des agents.",
      "Conçoit une stratégie de connaissance d'entreprise au service des agents.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Mémoire et connaissance", href: "/frameworks/memoire-connaissance" },
      { libelle: "Revue données et SI", href: "/templates/revue-donnees-si" },
    ],
  },
  {
    id: "architecture",
    famille: "ingenierie",
    nom: "Architecture et intégration SI",
    description: "Concevoir une architecture d'agents intégrée au SI existant, sûre et évolutive.",
    niveaux: [
      "Connaît l'architecture de référence du pool.",
      "Rédige un dossier d'architecture sur un périmètre limité, avec relecture.",
      "Conçoit seul l'architecture d'un système d'agents et la fait approuver par la DSI.",
      "Conçoit des plateformes d'agents à l'échelle de l'entreprise.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Architecture de référence", href: "/frameworks/architecture-reference" },
      { libelle: "Dossier d'architecture", href: "/templates/dossier-architecture-multi-agents" },
    ],
  },
  {
    id: "industrialisation",
    famille: "ingenierie",
    nom: "Industrialisation, AgentOps et FinOps",
    description: "Faire passer un pilote en production et l'exploiter : supervision, incidents, coûts.",
    niveaux: [
      "Connaît les étapes du POC à la production et les notions d'AgentOps.",
      "Prépare une mise en production avec la checklist, avec relecture.",
      "Met en production et exploite seul un agent : runbook, supervision, suivi des coûts, gestion d'incident.",
      "Conçoit une usine d'agents et le modèle d'exploitation d'un client.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Passer en production", href: "/guides/passer-en-production" },
      { libelle: "AgentOps", href: "/frameworks/agentops" },
      { libelle: "Checklist LLMOps", href: "/templates/checklist-llmops" },
    ],
  },

  /* ------------------------ Posture et relation client ---------------------- */
  {
    id: "posture",
    famille: "posture",
    nom: "Posture de conseil et éthique",
    description: "Agir en conseil de confiance : indépendance, confidentialité, franchise, sens du résultat.",
    niveaux: [
      "Connaît la charte du FDE et les règles du pool.",
      "Applique la charte en mission, avec un mentor pour les situations délicates.",
      "Dit non à un client quand c'est nécessaire, protège ses données et signale seul un risque éthique.",
      "Est sollicité par ses pairs sur les situations délicates et fait évoluer la charte.",
    ],
    minimum: 3,
    critique: true,
    ressources: [
      { libelle: "Le métier FDE", href: "/metier" },
      { libelle: "Posture du FDE", href: "/guides/posture-fde" },
      { libelle: "IA responsable", href: "/frameworks/ia-responsable" },
    ],
  },
  {
    id: "animation",
    famille: "posture",
    nom: "Entretiens et animation d'ateliers",
    description: "Faire parler le terrain et faire produire un groupe.",
    niveaux: [
      "Connaît les techniques d'entretien et les formats d'atelier.",
      "Mène des entretiens et co-anime des ateliers en binôme.",
      "Mène seul entretiens et ateliers, et en tire des livrables exploitables.",
      "Anime des ateliers à fort enjeu avec des dirigeants et forme les animateurs.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Mener des entretiens", href: "/guides/mener-entretiens" },
      { libelle: "Animer un atelier d'idéation", href: "/guides/animer-atelier-ideation" },
      { libelle: "Observation terrain", href: "/frameworks/observation-terrain" },
    ],
  },
  {
    id: "changement",
    famille: "posture",
    nom: "Conduite du changement et adoption",
    description: "Associer les personnes dont le travail change et piloter l'adoption avec des indicateurs.",
    niveaux: [
      "Connaît la règle 10-20-70, ADKAR et les leviers d'influence.",
      "Contribue à un plan de conduite du changement et en suit les indicateurs.",
      "Pilote seul l'adoption sur un périmètre et traite les résistances.",
      "Conçoit la transformation des rôles à l'échelle d'une direction avec les partenaires sociaux.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Pilotage de l'adoption", href: "/frameworks/pilotage-adoption" },
      { libelle: "Gérer les résistances", href: "/guides/gerer-resistances" },
      { libelle: "Plan de conduite du changement", href: "/templates/plan-conduite-changement" },
    ],
  },
  {
    id: "pilotage",
    famille: "posture",
    nom: "Pilotage de mission et transfert",
    description: "Tenir les rituels, les risques et le calendrier, et rendre le client autonome.",
    niveaux: [
      "Connaît les rituels de pilotage et le principe du transfert.",
      "Tient le point hebdomadaire et le registre RAID, avec relecture.",
      "Pilote seul un chantier, anticipe les risques et organise le transfert de ce qu'il construit.",
      "Redresse une mission en difficulté et conçoit des plans de transfert complets.",
    ],
    minimum: 2,
    critique: false,
    ressources: [
      { libelle: "Registre RAID", href: "/templates/registre-raid" },
      { libelle: "Plan de transfert", href: "/templates/plan-transfert" },
      { libelle: "Redresser une mission", href: "/guides/redresser-mission" },
    ],
  },
];

/** Au-delà de ce nombre d'écarts non bloquants, l'intervention seule n'est pas recommandée. */
export const SEUIL_ECARTS_NON_BLOQUANTS = 3;
