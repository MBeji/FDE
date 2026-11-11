/**
 * Modèle de maturité AI-Native : 7 dimensions, 4 questions par dimension,
 * 5 niveaux décrits par question. Sert au diagnostic interactif (/outils/maturite).
 */

export interface QuestionMaturite {
  id: string;
  intitule: string;
  /** Cinq descripteurs, du niveau 1 au niveau 5. */
  niveaux: [string, string, string, string, string];
}

export interface DimensionMaturite {
  id: string;
  nom: string;
  description: string;
  questions: QuestionMaturite[];
  /** Recommandations selon le score de la dimension. */
  recommandations: { faible: string; moyen: string; fort: string };
  liens: { href: string; libelle: string }[];
}

export interface NiveauMaturite {
  niveau: number;
  nom: string;
  seuil: number;
  description: string;
  implication: string;
}

export const NIVEAUX_MATURITE: NiveauMaturite[] = [
  {
    niveau: 1,
    nom: "Initial",
    seuil: 0,
    description: "Des initiatives individuelles, sans cadre ni mesure.",
    implication:
      "Commencer petit : un domaine, un sponsor, un gain rapide. Ne pas promettre d'agents autonomes avant d'avoir posé les fondations.",
  },
  {
    niveau: 2,
    nom: "Expérimentateur",
    seuil: 1.5,
    description: "Des preuves de concept, peu de mises en production, une valeur déclarée.",
    implication:
      "Sortir du purgatoire des POC : concentrer l'effort sur un domaine phare, mesurer contre une référence, mettre un premier système en production.",
  },
  {
    niveau: 3,
    nom: "Praticien",
    seuil: 2.5,
    description: "Des cas d'usage en production et mesurés, sur quelques domaines.",
    implication:
      "Passer de l'assistant à l'agent : reconcevoir un processus de bout en bout, installer évaluations et exploitation, structurer la gouvernance.",
  },
  {
    niveau: 4,
    nom: "Industriel",
    seuil: 3.5,
    description: "Une capacité répétable à concevoir, déployer et exploiter des agents.",
    implication:
      "Passer à l'échelle : usine à agents, élargissement de l'autonomie sur preuves, extension domaine par domaine.",
  },
  {
    niveau: 5,
    nom: "AI-Native",
    seuil: 4.5,
    description: "L'organisation est conçue autour de la collaboration entre humains et agents.",
    implication:
      "Inventer : nouveaux produits, nouveaux modèles d'affaires, écosystèmes d'agents ouverts aux partenaires.",
  },
];

export function niveauPourScore(score: number): NiveauMaturite {
  let courant = NIVEAUX_MATURITE[0];
  for (const n of NIVEAUX_MATURITE) if (score >= n.seuil) courant = n;
  return courant;
}

export const DIMENSIONS_MATURITE: DimensionMaturite[] = [
  {
    id: "vision",
    nom: "Vision & stratégie",
    description: "L'ambition, son portage par la direction et son financement.",
    questions: [
      {
        id: "vision-ambition",
        intitule: "Ambition",
        niveaux: [
          "Aucune ambition IA n'est formulée.",
          "Des intentions générales, sans objectif chiffré.",
          "Une ambition chiffrée sur un ou deux domaines.",
          "Une ambition chiffrée, déclinée par domaine et inscrite au budget.",
          "L'IA redéfinit la stratégie et le modèle d'affaires.",
        ],
      },
      {
        id: "vision-sponsor",
        intitule: "Portage par la direction",
        niveaux: [
          "Le sujet est porté par l'IT ou l'innovation seule.",
          "Un dirigeant s'y intéresse, sans mandat.",
          "Un sponsor siège au comité de direction pour un domaine.",
          "Le comité de direction pilote la transformation avec des objectifs.",
          "Chaque dirigeant répond de la transformation de son domaine.",
        ],
      },
      {
        id: "vision-feuille-de-route",
        intitule: "Feuille de route",
        niveaux: [
          "Aucune feuille de route.",
          "Une liste d'initiatives, sans priorisation.",
          "Une feuille de route priorisée par la valeur sur un domaine.",
          "Une feuille de route pluriannuelle par domaines, financée.",
          "Une feuille de route révisée en continu selon la valeur mesurée.",
        ],
      },
      {
        id: "vision-financement",
        intitule: "Financement",
        niveaux: [
          "Des budgets ponctuels d'innovation.",
          "Un budget annuel dédié aux expérimentations.",
          "Un financement projet par projet, sur dossier.",
          "Un financement pluriannuel par domaine, avec jalons.",
          "Une réallocation continue selon la valeur réalisée.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Obtenir un sponsor au comité de direction et une ambition chiffrée sur un domaine avant tout investissement technique. Sans cela, la mission restera une expérimentation.",
      moyen:
        "Étendre l'ambition du domaine phare à une feuille de route par domaines, avec un financement pluriannuel conditionné à des jalons de valeur.",
      fort: "Relier la feuille de route à la valeur mesurée et réallouer : arrêter ce qui ne délivre pas, accélérer ce qui délivre.",
    },
    liens: [
      { href: "/frameworks/rewired-six-capacites", libelle: "Les six capacités" },
      { href: "/frameworks/deploy-reshape-invent", libelle: "Déployer, Remodeler, Inventer" },
      { href: "/templates/charte-de-mission", libelle: "Charte de mission" },
    ],
  },
  {
    id: "valeur",
    nom: "Cas d'usage & valeur",
    description: "Le portefeuille, sa mise en production et la mesure de ce qu'il rapporte.",
    questions: [
      {
        id: "valeur-portefeuille",
        intitule: "Portefeuille",
        niveaux: [
          "Aucun cas d'usage identifié.",
          "Des idées dispersées, portées par des individus.",
          "Un portefeuille noté et priorisé.",
          "Un portefeuille par domaine, revu chaque trimestre.",
          "Des domaines entiers reconçus de bout en bout.",
        ],
      },
      {
        id: "valeur-production",
        intitule: "Mise en production",
        niveaux: [
          "Aucun cas en production.",
          "Des preuves de concept, rarement mises en production.",
          "Quelques cas en production.",
          "Des mises en production régulières, en quelques mois.",
          "Des mises en production routinières, en quelques semaines.",
        ],
      },
      {
        id: "valeur-mesure",
        intitule: "Mesure de la valeur",
        niveaux: [
          "Aucune mesure.",
          "Des gains estimés, déclaratifs.",
          "Des indicateurs mesurés pour certains cas.",
          "Référence et réalisé mesurés systématiquement.",
          "Une valeur auditée par la finance et intégrée au budget.",
        ],
      },
      {
        id: "valeur-arbitrage",
        intitule: "Arbitrage",
        niveaux: [
          "Aucun processus d'arbitrage.",
          "Un arbitrage au cas par cas, selon le porteur.",
          "Des critères de valeur et de faisabilité explicites.",
          "Une instance d'arbitrage régulière, qui sait arrêter un cas.",
          "Un portefeuille géré comme un investissement, avec critères d'arrêt.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Choisir un domaine, y construire un portefeuille noté, et installer dès maintenant un registre de valeur avec une référence mesurée.",
      moyen:
        "Systématiser la mesure contre référence et faire valider les gains par la finance. Instaurer une revue de portefeuille qui arrête ce qui ne délivre pas.",
      fort: "Passer du cas d'usage au domaine reconçu de bout en bout, et intégrer la valeur réalisée au cycle budgétaire.",
    },
    liens: [
      { href: "/frameworks/approche-par-domaine", libelle: "L'approche par domaine" },
      { href: "/frameworks/registre-de-valeur", libelle: "Registre de valeur" },
      { href: "/outils/priorisation", libelle: "Outil de priorisation" },
    ],
  },
  {
    id: "donnees",
    nom: "Données & connaissances",
    description: "Ce que les agents pourront lire : données opérationnelles et savoir documentaire.",
    questions: [
      {
        id: "donnees-acces",
        intitule: "Accessibilité",
        niveaux: [
          "Des données en silos, accessibles au cas par cas.",
          "Des extractions manuelles possibles.",
          "Des API ou un entrepôt pour les données principales.",
          "Des données exposées comme des produits, documentées.",
          "Un accès en temps réel et gouverné, pour les humains comme pour les agents.",
        ],
      },
      {
        id: "donnees-qualite",
        intitule: "Qualité",
        niveaux: [
          "Une qualité inconnue.",
          "Des problèmes connus, non traités.",
          "Une qualité mesurée sur les données critiques.",
          "Une qualité suivie, avec propriétaires et corrections.",
          "Une qualité garantie par contrat de données.",
        ],
      },
      {
        id: "donnees-connaissance",
        intitule: "Connaissance documentaire",
        niveaux: [
          "Le savoir est dans les têtes et les messageries.",
          "Des bases documentaires, largement obsolètes.",
          "Une base tenue à jour sur les processus principaux.",
          "Une connaissance structurée, versionnée, avec propriétaires.",
          "Une connaissance enrichie en continu par les agents et les experts.",
        ],
      },
      {
        id: "donnees-gouvernance",
        intitule: "Gouvernance des données",
        niveaux: [
          "Aucune gouvernance.",
          "Des règles informelles.",
          "Des propriétaires et une classification définis.",
          "Une gouvernance outillée : catalogue, droits, traçabilité.",
          "Des droits appliqués automatiquement aux agents comme aux humains.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Ne pas attendre un programme de données complet : rendre accessibles et fiables les seules données du domaine phare, et assainir la base de connaissances que les agents consulteront.",
      moyen:
        "Nommer des propriétaires de données et de connaissances, mesurer la qualité, et exposer les données du domaine par des interfaces stables.",
      fort: "Appliquer aux agents les mêmes droits qu'aux humains, de façon automatique, et faire de la mise à jour de la connaissance une boucle continue.",
    },
    liens: [
      { href: "/frameworks/memoire-connaissance", libelle: "Mémoire et connaissance" },
      { href: "/templates/revue-donnees-si", libelle: "Revue des données et du SI" },
    ],
  },
  {
    id: "techno",
    nom: "Technologie & plateforme",
    description: "L'accès aux modèles, l'intégration au SI, l'outillage et la sécurité.",
    questions: [
      {
        id: "techno-modeles",
        intitule: "Accès aux modèles",
        niveaux: [
          "Aucun accès encadré.",
          "Un usage individuel d'outils grand public.",
          "Un accès d'entreprise à un ou plusieurs modèles.",
          "Une passerelle de modèles : routage, quotas, suivi des coûts.",
          "Un choix du modèle par tâche, piloté par les évaluations.",
        ],
      },
      {
        id: "techno-integration",
        intitule: "Intégration au SI",
        niveaux: [
          "Des applications fermées.",
          "Quelques API, des intégrations au cas par cas.",
          "Des API sur les applications principales.",
          "Des API et des événements, un catalogue d'outils pour les agents.",
          "Toute capacité métier est exposable à un agent, de façon gouvernée.",
        ],
      },
      {
        id: "techno-outillage",
        intitule: "Outillage d'ingénierie",
        niveaux: [
          "Aucun outillage.",
          "Des scripts et des carnets individuels.",
          "Une chaîne de déploiement pour les applications d'IA.",
          "Traçage, évaluations automatisées, gestion des versions.",
          "Une plateforme interne avec chemins balisés et composants réutilisables.",
        ],
      },
      {
        id: "techno-securite",
        intitule: "Sécurité",
        niveaux: [
          "La sécurité de l'IA n'est pas traitée.",
          "Des règles générales, sans dispositif spécifique.",
          "Une revue de sécurité par projet.",
          "Des garde-fous standard, une identité par agent, des tests adverses.",
          "Une sécurité intégrée à la plateforme et contrôlée en continu.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Obtenir un accès d'entreprise aux modèles et exposer par API les deux ou trois applications du domaine phare. Ne pas lancer de chantier de plateforme.",
      moyen:
        "Installer traçage et évaluations automatisées dès le premier agent, et faire valider par la sécurité un socle de garde-fous réutilisable.",
      fort: "Extraire des agents en production les composants communs et les proposer comme chemins balisés : c'est le début de l'usine à agents.",
    },
    liens: [
      { href: "/frameworks/architecture-reference", libelle: "Architecture de référence" },
      { href: "/frameworks/agentops", libelle: "AgentOps" },
      { href: "/frameworks/securite-agents", libelle: "Sécurité des agents" },
    ],
  },
  {
    id: "talents",
    nom: "Talents & culture",
    description: "Les compétences, l'acculturation des métiers et le rapport à l'expérimentation.",
    questions: [
      {
        id: "talents-techniques",
        intitule: "Compétences techniques",
        niveaux: [
          "Aucune compétence interne.",
          "Quelques profils isolés.",
          "Une équipe capable de livrer un cas d'usage.",
          "Plusieurs équipes autonomes, dont l'ingénierie d'agents.",
          "Des compétences diffusées dans toutes les équipes produit.",
        ],
      },
      {
        id: "talents-metiers",
        intitule: "Acculturation des métiers",
        niveaux: [
          "Méconnaissance ou défiance.",
          "De la curiosité, des usages individuels.",
          "Une formation des équipes concernées par les projets.",
          "Un programme de formation généralisé, par métier.",
          "Les métiers conçoivent eux-mêmes leurs usages.",
        ],
      },
      {
        id: "talents-managers",
        intitule: "Managers",
        niveaux: [
          "Les managers ne sont pas concernés.",
          "Les managers sont informés.",
          "Les managers sont formés et associés aux projets.",
          "Les managers ont des objectifs liés à l'adoption.",
          "Les managers dirigent des équipes mixtes d'humains et d'agents.",
        ],
      },
      {
        id: "talents-culture",
        intitule: "Culture",
        niveaux: [
          "L'erreur est sanctionnée.",
          "Les expérimentations sont tolérées en marge.",
          "Les expérimentations sont encouragées et cadrées.",
          "Les décisions se fondent sur la mesure ; l'arrêt d'un échec est assumé.",
          "Amélioration continue, apprentissages partagés entre équipes.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Constituer une équipe mixte avec des experts métier détachés et prévoir le transfert de compétences dès la charte. Former d'abord les managers de proximité.",
      moyen:
        "Former par métier, sur des cas réels, et donner aux managers des objectifs d'adoption. Créer un réseau de relais dans les équipes.",
      fort: "Faire des métiers les concepteurs de leurs propres usages, avec l'appui d'une équipe plateforme.",
    },
    liens: [
      { href: "/frameworks/adkar", libelle: "ADKAR" },
      { href: "/frameworks/modele-influence", libelle: "Modèle d'influence" },
      { href: "/templates/plan-transfert", libelle: "Plan de transfert" },
    ],
  },
  {
    id: "organisation",
    nom: "Modèle opérationnel & gouvernance",
    description: "L'organisation, les responsabilités, la maîtrise des risques et le changement.",
    questions: [
      {
        id: "organisation-structure",
        intitule: "Organisation",
        niveaux: [
          "Des initiatives individuelles.",
          "Une équipe centrale d'innovation ou de science des données.",
          "Des équipes projet mixtes, métier et IT.",
          "Des équipes produit par domaine, appuyées par une plateforme.",
          "Une organisation conçue autour de la collaboration humain-agent.",
        ],
      },
      {
        id: "organisation-responsabilite",
        intitule: "Responsabilité",
        niveaux: [
          "Personne ne répond des systèmes d'IA.",
          "L'IT en répond.",
          "Un responsable métier par projet.",
          "Un propriétaire métier nommé pour chaque agent.",
          "Des responsabilités inscrites dans les fiches de poste et les objectifs.",
        ],
      },
      {
        id: "organisation-risques",
        intitule: "Gouvernance des risques",
        niveaux: [
          "Aucune gouvernance.",
          "Une charte ou des principes, sans application.",
          "Une revue des risques par projet.",
          "Un comité, un registre des systèmes, des revues proportionnées au risque.",
          "Une gouvernance outillée, auditée, conforme aux référentiels.",
        ],
      },
      {
        id: "organisation-changement",
        intitule: "Conduite du changement",
        niveaux: [
          "Non traitée.",
          "Une communication en fin de projet.",
          "Formation et accompagnement projet par projet.",
          "Une démarche structurée, une adoption mesurée.",
          "Une capacité permanente de transformation des métiers.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Nommer un propriétaire métier pour chaque système, installer une revue des risques simple, et traiter le changement dès la conception du processus cible.",
      moyen:
        "Installer un comité de gouvernance et un registre des agents, avec des revues proportionnées au risque. Mesurer l'adoption.",
      fort: "Faire évoluer les fiches de poste et l'organisation pour refléter le travail avec les agents, et faire auditer la gouvernance.",
    },
    liens: [
      { href: "/frameworks/modele-operationnel-cible", libelle: "Modèle opérationnel AI-Native" },
      { href: "/frameworks/gouvernance-ia", libelle: "Gouvernance de l'IA" },
      { href: "/templates/registre-agents", libelle: "Registre des agents" },
    ],
  },
  {
    id: "agentique",
    nom: "Maturité agentique",
    description: "Le niveau de solution atteint, l'autonomie accordée, l'évaluation et l'exploitation.",
    questions: [
      {
        id: "agentique-solution",
        intitule: "Niveau de solution",
        niveaux: [
          "Aucun usage.",
          "Des assistants conversationnels individuels.",
          "Des assistants intégrés aux outils métier, des workflows.",
          "Des agents en production, avec des outils en écriture.",
          "Des systèmes multi-agents qui portent des processus entiers.",
        ],
      },
      {
        id: "agentique-autonomie",
        intitule: "Autonomie accordée",
        niveaux: [
          "Sans objet.",
          "L'IA suggère, l'humain fait tout.",
          "L'IA prépare, l'humain valide chaque action.",
          "Une autonomie encadrée sur des périmètres définis.",
          "Une autonomie élargie sur preuves, contrôlée par échantillonnage.",
        ],
      },
      {
        id: "agentique-evaluation",
        intitule: "Évaluation",
        niveaux: [
          "Aucune évaluation.",
          "Des tests manuels sur quelques exemples.",
          "Un jeu de test par cas d'usage.",
          "Golden sets, seuils de passage, non-régression automatisée.",
          "Une évaluation continue en production, reliée aux indicateurs métier.",
        ],
      },
      {
        id: "agentique-exploitation",
        intitule: "Exploitation",
        niveaux: [
          "Sans objet.",
          "Un suivi artisanal par les développeurs.",
          "Journalisation et suivi des coûts.",
          "Traçage, alertes, procédures d'incident, équipe dédiée.",
          "Une exploitation industrialisée, registre et cycle de vie des agents.",
        ],
      },
    ],
    recommandations: {
      faible:
        "Viser un premier agent à périmètre étroit, sous approbation humaine, avec un golden set dès le départ. Ne pas commencer par un système multi-agents.",
      moyen:
        "Installer évaluations automatisées et exploitation, puis élargir l'autonomie outil par outil selon des conditions écrites à l'avance.",
      fort: "Standardiser ce qui marche et étendre à d'autres domaines : topologies éprouvées, registre des agents, cycle de vie gouverné.",
    },
    liens: [
      { href: "/frameworks/faut-il-un-agent", libelle: "Faut-il un agent ?" },
      { href: "/frameworks/niveaux-autonomie", libelle: "Niveaux d'autonomie" },
      { href: "/frameworks/evaluation-agents", libelle: "Évaluer un agent" },
    ],
  },
];

/** Réponses reproduisant le profil du cas fil rouge (voir /guides/cas-fil-rouge). */
export const EXEMPLE_VOXALIS: Record<string, number> = {
  "vision-ambition": 3,
  "vision-sponsor": 3,
  "vision-feuille-de-route": 2,
  "vision-financement": 2,
  "valeur-portefeuille": 2,
  "valeur-production": 2,
  "valeur-mesure": 2,
  "valeur-arbitrage": 2,
  "donnees-acces": 3,
  "donnees-qualite": 2,
  "donnees-connaissance": 2,
  "donnees-gouvernance": 3,
  "techno-modeles": 3,
  "techno-integration": 3,
  "techno-outillage": 3,
  "techno-securite": 3,
  "talents-techniques": 2,
  "talents-metiers": 2,
  "talents-managers": 2,
  "talents-culture": 2,
  "organisation-structure": 2,
  "organisation-responsabilite": 1,
  "organisation-risques": 2,
  "organisation-changement": 1,
  "agentique-solution": 2,
  "agentique-autonomie": 2,
  "agentique-evaluation": 1,
  "agentique-exploitation": 1,
};
