/**
 * Section « Le métier FDE » : rôle, comparaison avec les autres métiers, charte,
 * règles de fonctionnement du pool et fiches réflexes pour les situations délicates.
 *
 * Les règles du pool sont un cadre proposé : rituels, durées et seuils sont à
 * valider et à adapter par la direction du pool. Les exemples viennent du cas Voxalis.
 */

export interface LienRessource {
  libelle: string;
  href: string;
}

/* ------------------------------------------------------------------ */
/* 1. Le rôle                                                          */
/* ------------------------------------------------------------------ */

export const MISSION_FDE =
  "Transformer un problème métier du client en résultat mesuré en production, puis rendre le client capable de le faire vivre et de le reproduire sans nous.";

export interface Responsabilite {
  titre: string;
  /** Le résultat dont le FDE répond, formulé comme un état constatable. */
  resultat: string;
  /** Comment on constate que la responsabilité est tenue. */
  preuve: string;
}

export const RESPONSABILITES: Responsabilite[] = [
  {
    titre: "Un problème qui vaut d'être résolu",
    resultat:
      "Le sponsor a validé un problème formulé en termes métier, un indicateur cible, une référence de départ et des critères d'arrêt.",
    preuve: "Charte de mission signée au jalon G0. Chez Voxalis : « diviser par deux le MTTR des incidents PME », pas « déployer un chatbot ».",
  },
  {
    titre: "Une valeur chiffrée et défendable",
    resultat:
      "L'hypothèse de valeur est chiffrée dès le cadrage, la référence est signée par la finance et le registre de valeur est tenu jusqu'à la mesure du réalisé.",
    preuve: "Business case validé par le directeur financier ; registre de valeur à jour à chaque COPIL.",
  },
  {
    titre: "Des décisions prises à temps",
    resultat:
      "Chaque arbitrage dont dépend la mission est préparé (options, recommandation, conséquences) et obtenu dans la semaine où il se pose.",
    preuve: "Aucune décision en attente depuis plus de deux semaines dans le registre RAID ; aucun membre du COPIL ne découvre un sujet en séance.",
  },
  {
    titre: "Un système qui tient sur les cas réels",
    resultat:
      "Les agents passent des seuils d'évaluation définis avant leur construction, sur un golden set tiré des données du client.",
    preuve: "Rapport d'évaluation à jour. Chez Voxalis : 600 cas annotés et 120 cas adverses, zéro action inappropriée exigée sur le jeu adverse.",
  },
  {
    titre: "Une production sûre et exploitable",
    resultat:
      "Ce qui part en production est observé, borné par des garde-fous, documenté dans un runbook et validé par la sécurité et la protection des données.",
    preuve: "Checklist de mise en production passée ; revue RSSI et DPO tracée ; procédure d'incident testée.",
  },
  {
    titre: "Une adoption réelle",
    resultat:
      "Les personnes dont le travail change utilisent le système au quotidien et ont contribué à sa conception.",
    preuve: "Indicateurs d'usage suivis chaque semaine. Chez Voxalis : 16 conseillers sur 18 utilisent le poste de supervision chaque jour à S29.",
  },
  {
    titre: "Un client autonome",
    resultat:
      "L'équipe du client opère, évalue et fait évoluer le système seule ; la mission s'arrête sur ce constat, pas sur la consommation du budget.",
    preuve: "Plan de transfert soldé et jalon G7 constaté par le client. Chez Voxalis : transfert achevé en S39.",
  },
  {
    titre: "Un savoir qui sert à la mission suivante",
    resultat:
      "Ce qui a été appris, construit ou raté est restitué au pool sous une forme réutilisable.",
    preuve: "REX de mission publié, patterns ou anti-patterns proposés, composants et templates améliorés versés au pool.",
  },
];

export interface MoitieCompetence {
  nom: string;
  question: string;
  apporte: string[];
  quandElleManque: string;
  signal: string;
}

export const DOUBLE_COMPETENCE: {
  business: MoitieCompetence;
  ingenierie: MoitieCompetence;
  synthese: string;
} = {
  business: {
    nom: "La moitié business",
    question: "Quel problème vaut d'être résolu, pour qui, et qui décide ?",
    apporte: [
      "Reformuler une demande de solution en problème mesurable.",
      "Chiffrer la valeur et la défendre devant la finance.",
      "Lire les jeux d'acteurs et préparer des décisions plutôt que des constats.",
      "Comprendre le travail réel des opérateurs, pas seulement le processus documenté.",
    ],
    quandElleManque:
      "Un système techniquement juste qui résout le mauvais problème, ou que personne ne finance au-delà du pilote.",
    signal: "On discute d'architecture alors que l'indicateur cible et la référence ne sont pas écrits.",
  },
  ingenierie: {
    nom: "La moitié ingénierie",
    question: "Qu'est-ce qui fonctionne sur des cas réels, à quel coût et avec quel risque ?",
    apporte: [
      "Savoir ce qui est faisable, et choisir le barreau le plus bas de l'échelle des solutions qui suffit.",
      "Prouver par l'évaluation plutôt que par la démonstration.",
      "Intégrer au SI réel du client : API, droits, données, sécurité.",
      "Exploiter en production : observabilité, incidents, coûts d'inférence.",
    ],
    quandElleManque:
      "Des recommandations et des démonstrations qui ne passent pas la production ; le client découvre la complexité après le départ.",
    signal: "Des promesses de performance qui ne s'appuient sur aucune évaluation, ou un tiers indispensable pour le moindre prototype.",
  },
  synthese:
    "Le FDE n'est pas expert de tout. Il est assez profond dans les deux moitiés pour ne dépendre de personne pour savoir si une idée vaut la peine et si elle tient. Une équipe répartit les dominantes (chez Voxalis, Hugo porte la stratégie et le produit, Léo et Inès l'ingénierie des agents), mais chacun tient les deux conversations.",
};

/* ------------------------------------------------------------------ */
/* 2. Le FDE face aux autres rôles                                     */
/* ------------------------------------------------------------------ */

export type RoleId = "fde" | "developpeur" | "consultant" | "architecte" | "chefProjet";

export interface RoleCompare {
  id: RoleId;
  nom: string;
  /** Comment le FDE travaille avec ce rôle (vide pour le FDE). */
  complementarite: string;
}

export const ROLES: RoleCompare[] = [
  { id: "fde", nom: "FDE", complementarite: "" },
  {
    id: "developpeur",
    nom: "Développeur",
    complementarite:
      "Le FDE prototype et prouve la valeur ; l'équipe de développement du client industrialise et maintient, d'abord avec lui, puis sans lui. Il s'aligne sur ses standards de code plutôt que d'imposer les siens.",
  },
  {
    id: "consultant",
    nom: "Consultant",
    complementarite:
      "Le consultant éclaire la stratégie d'ensemble et la feuille de route ; le FDE traduit un domaine de cette feuille de route en système mesuré en production, et nourrit la stratégie de ce qu'il apprend sur le terrain.",
  },
  {
    id: "architecte",
    nom: "Architecte",
    complementarite:
      "Le FDE inscrit ses agents dans les principes de l'architecte et lui soumet ses décisions sous forme d'ADR ; il ne crée pas de SI parallèle. L'architecte garantit que ce qui marche dans un domaine pourra servir aux suivants.",
  },
  {
    id: "chefProjet",
    nom: "Chef de projet",
    complementarite:
      "Le chef de projet tient le plan, les engagements et la coordination ; le FDE porte le contenu, la preuve de valeur et les arbitrages de conception. Sur une mission importante, les deux rôles coexistent et se répartissent explicitement le pilotage.",
  },
];

export interface DimensionComparaison {
  id: string;
  nom: string;
  valeurs: Record<RoleId, string>;
}

export const COMPARATIF: DimensionComparaison[] = [
  {
    id: "repond",
    nom: "Ce dont il répond",
    valeurs: {
      fde: "Un indicateur métier amélioré en production, et un client capable de continuer seul.",
      developpeur: "La qualité, la fiabilité et la maintenabilité du logiciel qu'il construit.",
      consultant: "La justesse d'un diagnostic et d'une recommandation, et leur appropriation par la direction.",
      architecte: "La cohérence, la sécurité et la pérennité du système d'information dans son ensemble.",
      chefProjet: "Le respect du périmètre, du délai et du budget engagés, et la coordination des parties.",
    },
  },
  {
    id: "ou",
    nom: "Où il travaille",
    valeurs: {
      fde: "Chez le client, au contact des équipes qui font le travail et de l'IT.",
      developpeur: "Au sein d'une équipe produit ou projet, avec un accès au métier souvent indirect.",
      consultant: "Auprès de la direction et des équipes, en entretiens, ateliers et comités.",
      architecte: "De façon transverse, entre les projets, la DSI et la sécurité.",
      chefProjet: "À l'interface entre le commanditaire, les équipes de réalisation et les fournisseurs.",
    },
  },
  {
    id: "livre",
    nom: "Ce qu'il livre",
    valeurs: {
      fde: "Un problème reformulé, un système évalué en production, la mesure de la valeur, une équipe client formée.",
      developpeur: "Du code testé et documenté, des fonctionnalités en production.",
      consultant: "Un diagnostic, une recommandation, une feuille de route, un business case.",
      architecte: "Des principes, des architectures de référence, des décisions et des revues.",
      chefProjet: "Un plan, un suivi des risques et des engagements, une recette organisée, une clôture.",
    },
  },
  {
    id: "horizon",
    nom: "Son horizon de temps",
    valeurs: {
      fde: "La mission, de quelques mois à un an, jusqu'à la mesure du réalisé et au transfert.",
      developpeur: "Le sprint et la version, puis la vie du produit.",
      consultant: "L'étude, de quelques semaines à quelques mois.",
      architecte: "La trajectoire du SI, sur plusieurs années.",
      chefProjet: "Le projet, du lancement à la recette et à la clôture.",
    },
  },
  {
    id: "interlocuteurs",
    nom: "Ses interlocuteurs",
    valeurs: {
      fde: "Sponsor, propriétaire du processus, opérateurs, DSI, RSSI, DPO, finance : tous dans la même semaine.",
      developpeur: "Product owner, pairs, équipes d'exploitation.",
      consultant: "Comité de direction, directions métiers.",
      architecte: "DSI, équipes projets, sécurité, fournisseurs de solutions.",
      chefProjet: "Commanditaire, maîtrise d'ouvrage, équipes de réalisation, fournisseurs.",
    },
  },
  {
    id: "reussite",
    nom: "Comment on mesure sa réussite",
    valeurs: {
      fde: "L'écart mesuré à la référence sur l'indicateur métier, l'adoption et l'autonomie du client au départ.",
      developpeur: "La qualité du code, le rythme de livraison, le niveau d'incidents.",
      consultant: "La qualité de la recommandation et sa reprise dans les décisions de la direction.",
      architecte: "La cohérence du SI, la dette maîtrisée, la sécurité, la réutilisation.",
      chefProjet: "La tenue des engagements de périmètre, de délai et de budget.",
    },
  },
  {
    id: "nefaitpas",
    nom: "Ce qu'il n'a pas vocation à porter",
    valeurs: {
      fde: "Le rôle permanent d'une équipe du client : il ne remplace ni sa DSI, ni son équipe produit, ni sa direction de projet.",
      developpeur: "Le choix du problème métier à résoudre et la mesure de la valeur créée.",
      consultant: "La construction, la mise en production et l'exploitation du système.",
      architecte: "La livraison d'un cas d'usage de bout en bout dans un domaine.",
      chefProjet: "Les choix de conception et le contenu de la solution.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* 3. La charte FDE                                                    */
/* ------------------------------------------------------------------ */

export interface Engagement {
  numero: number;
  titre: string;
  principe: string;
  comportements: string[];
  jamais: string[];
  ressources: LienRessource[];
}

export const CHARTE: Engagement[] = [
  {
    numero: 1,
    titre: "Je réponds d'un résultat, pas d'une activité",
    principe: "Mon travail se juge à un indicateur métier mesuré contre une référence, pas au nombre de livrables ou d'heures.",
    comportements: [
      "Je sais énoncer en une phrase le problème du client, l'indicateur visé et sa référence.",
      "Chaque semaine, je relie ce que j'ai fait à l'indicateur ou au registre de valeur.",
      "Je propose d'arrêter ou de réorienter un chantier quand il ne sert plus le résultat.",
    ],
    jamais: [
      "Présenter une mise en production comme un succès sans mesure de son effet.",
      "Déclarer une valeur que la finance n'a pas validée.",
    ],
    ressources: [
      { libelle: "Registre de valeur", href: "/frameworks/registre-de-valeur" },
      { libelle: "Valeur déclarative", href: "/savoir/valeur-declarative" },
    ],
  },
  {
    numero: 2,
    titre: "Le problème avant la technologie",
    principe: "Je remonte au problème avant de proposer une solution, et je choisis la solution la plus simple qui suffit.",
    comportements: [
      "Face à « il nous faut un agent », je demande l'indicateur à faire bouger et le coût de l'inaction.",
      "Je situe chaque besoin sur l'échelle des solutions et je justifie le barreau retenu.",
      "J'écris une hypothèse de réponse dès les premiers jours, pour la tester et la réviser.",
    ],
    jamais: [
      "Dessiner une architecture avant d'avoir écrit le problème.",
      "Proposer un système multi-agents là où un workflow suffit.",
    ],
    ressources: [
      { libelle: "Problème et hypothèses", href: "/frameworks/probleme-hypotheses" },
      { libelle: "Faut-il un agent ?", href: "/outils/agent-ou-pas" },
    ],
  },
  {
    numero: 3,
    titre: "Je dois la vérité au sponsor",
    principe: "Le sponsor compte sur moi pour entendre ce que son organisation ne lui dit pas, à temps pour agir.",
    comportements: [
      "J'annonce une mauvaise nouvelle sous 24 heures, au sponsor d'abord, avec une option.",
      "Je montre une évaluation décevante le jour même, analyse d'erreurs à l'appui.",
      "Je dis non à une demande qui ne sert pas le problème, et j'explique pourquoi.",
    ],
    jamais: [
      "Laisser un membre du COPIL découvrir un problème en séance.",
      "Arranger un résultat pour une démonstration.",
    ],
    ressources: [
      { libelle: "Dialoguer avec les dirigeants", href: "/guides/dialoguer-avec-les-dirigeants" },
      { libelle: "Préparer et piloter un COPIL", href: "/guides/piloter-copil" },
    ],
  },
  {
    numero: 4,
    titre: "Je travaille au plus près du métier et de l'IT",
    principe: "Je comprends le travail tel qu'il se fait et le SI tel qu'il est, pas tel qu'ils sont décrits.",
    comportements: [
      "Je passe au moins une demi-journée par semaine sur le terrain, auprès des utilisateurs.",
      "J'ai un binôme nommé côté métier et un interlocuteur nommé à la DSI.",
      "Je soumets mes choix d'architecture aux équipes du client avant de les appliquer.",
    ],
    jamais: [
      "Concevoir un processus cible sans avoir observé le processus actuel.",
      "Créer un SI parallèle hors des principes de la DSI.",
    ],
    ressources: [
      { libelle: "Binôme métier-FDE", href: "/savoir/binome-metier-fde" },
      { libelle: "Mener des entretiens", href: "/guides/mener-entretiens" },
    ],
  },
  {
    numero: 5,
    titre: "Je livre du réel, tôt",
    principe: "Réel veut dire : les données du client, ses cas, ses utilisateurs. Jamais plus de deux semaines sans montrer quelque chose qui tourne ou qui se mesure.",
    comportements: [
      "Je commence par une tranche verticale traitée de bout en bout plutôt que par une plateforme.",
      "Je présente les résultats sur un échantillon représentatif, pas sur des cas choisis.",
      "Je passe par le mode fantôme avant toute action réelle d'un agent.",
    ],
    jamais: [
      "Présenter une maquette sur données fictives comme une preuve.",
      "Construire la plateforme avant le premier usage.",
    ],
    ressources: [
      { libelle: "Tranche verticale", href: "/savoir/tranche-verticale" },
      { libelle: "Démo trompeuse", href: "/savoir/demo-trompeuse" },
    ],
  },
  {
    numero: 6,
    titre: "Je protège les données et les systèmes du client",
    principe: "La confiance du client se perd en un seul incident de confidentialité. Les règles de sécurité du client s'appliquent à moi sans exception.",
    comportements: [
      "Je demande le minimum d'accès nécessaire : lecture seule, données pseudonymisées, environnement isolé.",
      "Je fais valider chaque outil en écriture et chaque flux de données par le RSSI et le DPO.",
      "Je restitue ou supprime les données et fais révoquer mes accès à la fin de la mission.",
    ],
    jamais: [
      "Copier des données du client sur un poste ou un service non autorisé.",
      "Contourner un contrôle d'accès, même pour débloquer une démonstration.",
    ],
    ressources: [
      { libelle: "Sécurité des agents", href: "/frameworks/securite-agents" },
      { libelle: "Checklist sécurité et conformité", href: "/templates/checklist-securite-conformite" },
    ],
  },
  {
    numero: 7,
    titre: "Je tiens une rigueur d'ingénierie",
    principe: "Les évaluations avant les agents ; l'autonomie se gagne sur preuves.",
    comportements: [
      "Je constitue le golden set avant d'écrire le premier prompt.",
      "Je versionne prompts, outils et jeux d'évaluation ; je trace mes décisions dans des ADR.",
      "Je n'élargis le niveau d'autonomie d'un agent que sur des résultats mesurés.",
    ],
    jamais: [
      "Mettre en production un agent sans évaluation ni procédure d'incident.",
      "Corriger un incident en silence, sans ajouter le cas aux évaluations.",
    ],
    ressources: [
      { libelle: "Construire les evals", href: "/guides/construire-les-evals" },
      { libelle: "Standards d'ingénierie", href: "/standards" },
    ],
  },
  {
    numero: 8,
    titre: "Je suis honnête sur ce que l'IA ne sait pas faire",
    principe: "Je décris les limites, les taux d'erreur et les risques aussi clairement que les capacités.",
    comportements: [
      "Je présente toujours un résultat avec son taux d'erreur et les catégories d'échec.",
      "Je dis quand une règle déterministe ou un humain fait mieux qu'un modèle.",
      "Je distingue potentiel, hypothèse et réalisé dans tout chiffre que je donne.",
    ],
    jamais: [
      "Promettre un gain qu'aucune mesure n'a montré.",
      "Laisser croire qu'un agent est infaillible ou qu'il peut agir sans supervision adaptée.",
    ],
    ressources: [
      { libelle: "Évaluation des agents", href: "/frameworks/evaluation-agents" },
      { libelle: "IA responsable", href: "/frameworks/ia-responsable" },
    ],
  },
  {
    numero: 9,
    titre: "Je respecte les personnes dont le travail change",
    principe: "La valeur se joue surtout dans les personnes et les processus. Celles et ceux qui feront vivre le système sont associés dès le diagnostic.",
    comportements: [
      "J'écoute les irritants du terrain et j'en traite un de façon visible dans les premières semaines.",
      "J'associe les experts à l'annotation des évaluations et aux choix de conception.",
      "Je vérifie que les engagements de la direction sur l'emploi et les métiers sont écrits avant de répondre aux inquiétudes.",
    ],
    jamais: [
      "Juger le travail d'un opérateur devant sa hiérarchie.",
      "Promettre à titre personnel ce qui relève d'un engagement de la direction.",
    ],
    ressources: [
      { libelle: "Gérer les résistances", href: "/guides/gerer-resistances" },
      { libelle: "L'humain oublié", href: "/savoir/humain-oublie" },
    ],
  },
  {
    numero: 10,
    titre: "Je rends le client autonome",
    principe: "Réussir, c'est rendre le client autonome. L'autonomie se construit dès le premier jour, pas pendant le dernier mois.",
    comportements: [
      "Mon binôme client tient le clavier une fois sur deux.",
      "Chaque semaine, je me demande ce qui s'arrêterait si nous partions vendredi, et j'inscris la réponse au plan de transfert.",
      "J'écris les décisions, les procédures et les raisons des choix au fil de l'eau.",
    ],
    jamais: [
      "Être le seul à savoir faire tourner un composant.",
      "Accepter une prolongation sans objectif ni critère de fin.",
    ],
    ressources: [
      { libelle: "Plan de transfert", href: "/templates/plan-transfert" },
      { libelle: "Dépendance au FDE", href: "/savoir/dependance-fde" },
    ],
  },
  {
    numero: 11,
    titre: "Je capitalise et je réutilise",
    principe: "Un apprentissage resté dans la tête d'un FDE est perdu à la mission suivante. Je pars de ce que le pool sait déjà.",
    comportements: [
      "Avant de construire, je cherche dans le portail le template, le pattern ou le REX qui existe.",
      "Je note au fil de l'eau ce qui marche, ce qui échoue et ce qui manque à la méthode.",
      "Je rédige le REX de mission et propose au moins un pattern ou un anti-pattern.",
    ],
    jamais: [
      "Réutiliser chez un client un élément qui contient les données ou les secrets d'un autre.",
      "Clore une mission sans restitution au pool.",
    ],
    ressources: [
      { libelle: "Capitaliser", href: "/guides/capitaliser" },
      { libelle: "Contribuer au savoir", href: "/savoir/contribuer" },
    ],
  },
  {
    numero: 12,
    titre: "Je m'appuie sur le pool et je l'aide",
    principe: "Aucun FDE ne couvre seul toutes les compétences. Demander de l'aide tôt est un signe de rigueur, pas de faiblesse.",
    comportements: [
      "Je soumets mes choix structurants à la relecture d'un pair avant de les présenter au client.",
      "Je signale une mission en difficulté au pool dès les premiers signaux, sans attendre le COPIL.",
      "Je réponds aux sollicitations des autres FDE et je donne de mon temps à l'intégration des nouveaux.",
    ],
    jamais: [
      "Cacher une difficulté pour préserver une image de mission réussie.",
      "Critiquer le travail d'un autre FDE devant un client.",
    ],
    ressources: [
      { libelle: "Redresser une mission", href: "/guides/redresser-mission" },
      { libelle: "Onboarding", href: "/onboarding" },
    ],
  },
];

/** La charte au format Markdown, pour la copier dans un document ou un wiki. */
export function charteEnMarkdown(): string {
  const lignes: string[] = [
    "# La charte FDE",
    "",
    `> ${MISSION_FDE}`,
    "",
    "Douze engagements que chaque membre du pool prend envers ses clients et envers le pool.",
    "",
  ];
  for (const e of CHARTE) {
    lignes.push(`## ${e.numero}. ${e.titre}`, "", e.principe, "", "**Concrètement**", "");
    e.comportements.forEach((c) => lignes.push(`- ${c}`));
    lignes.push("", "**Jamais**", "");
    e.jamais.forEach((j) => lignes.push(`- ${j}`));
    lignes.push("");
  }
  return lignes.join("\n");
}

/* ------------------------------------------------------------------ */
/* 4. Règles de fonctionnement du pool                                 */
/* ------------------------------------------------------------------ */

export interface Rituel {
  nom: string;
  frequence: string;
  contenu: string;
}

export interface TempsPool {
  id: "avant" | "pendant" | "apres";
  titre: string;
  objectif: string;
  standards: string[];
  rituels: Rituel[];
  livrables: LienRessource[];
  remontees: string[];
}

export const REGLES_POOL: TempsPool[] = [
  {
    id: "avant",
    titre: "Avant la mission",
    objectif: "Arriver chez le client avec une hypothèse et des questions, pas une page blanche.",
    standards: [
      "Le dossier de préparation est complété : contexte, enjeux, parties prenantes connues, ce qui a été promis pendant la vente.",
      "Une hypothèse de réponse initiale et des critères d'arrêt sont écrits avant le premier rendez-vous.",
      "Les conditions d'accès aux données et les clauses de confidentialité sont connues avant l'arrivée.",
      "Un pair du pool qui n'est pas sur la mission a relu la préparation.",
    ],
    rituels: [
      {
        nom: "Passation commerciale",
        frequence: "Une fois, avant le démarrage",
        contenu: "Ce qui a été promis, ce qui ne l'a pas été, les sensibilités connues du sponsor.",
      },
      {
        nom: "Revue de préparation",
        frequence: "Une fois, environ une heure",
        contenu: "Un FDE expérimenté challenge l'hypothèse, la carte des acteurs et le plan des deux premières semaines.",
      },
    ],
    livrables: [
      { libelle: "Dossier de préparation de mission", href: "/templates/dossier-preparation-mission" },
      { libelle: "Charte de mission (projet)", href: "/templates/charte-de-mission" },
      { libelle: "Carte des parties prenantes", href: "/templates/carte-parties-prenantes" },
      { libelle: "Plan de mission", href: "/templates/plan-de-mission" },
    ],
    remontees: [
      "Les promesses de vente qui paraissent intenables, avant le démarrage.",
      "Les compétences dont l'équipe aura besoin et qu'elle n'a pas.",
    ],
  },
  {
    id: "pendant",
    titre: "Pendant la mission",
    objectif: "Rendre la mission lisible pour le sponsor et pour le pool, chaque semaine.",
    standards: [
      "Un point hebdomadaire écrit est envoyé au sponsor : avancement, valeur, décisions attendues, risques.",
      "Le registre RAID et le registre de valeur sont à jour avant chaque COPIL.",
      "Aucune mise en production sans évaluation passée, checklist et procédure d'incident.",
      "Chaque FDE a un binôme côté client et passe au moins une demi-journée par semaine sur le terrain.",
    ],
    rituels: [
      {
        nom: "Point hebdomadaire avec le sponsor",
        frequence: "Chaque semaine, 30 minutes",
        contenu: "Trois décisions au plus, préparées avec options et recommandation.",
      },
      {
        nom: "COPIL",
        frequence: "Mensuel, selon la charte",
        contenu: "Valeur mesurée, jalons, arbitrages ; aucun sujet découvert en séance.",
      },
      {
        nom: "Revue de pairs",
        frequence: "Toutes les deux semaines, 45 minutes",
        contenu: "Chaque mission présente une décision prise et une difficulté ; le pool challenge et propose.",
      },
      {
        nom: "Alerte au pool",
        frequence: "Sous 48 heures après le signal",
        contenu: "Jalon décalé de plus de deux semaines, sponsor indisponible, données bloquées, incident en production.",
      },
    ],
    livrables: [
      { libelle: "Point hebdomadaire", href: "/templates/point-hebdo" },
      { libelle: "Support de COPIL", href: "/templates/support-copil" },
      { libelle: "Registre RAID", href: "/templates/registre-raid" },
      { libelle: "Rapport d'évaluation", href: "/templates/rapport-evaluation" },
    ],
    remontees: [
      "Les alertes de mission, sans attendre qu'elles deviennent des crises.",
      "Les composants et prompts candidats à la réutilisation, débarrassés de toute donnée client.",
      "Les manques de la méthode et des templates constatés sur le terrain.",
    ],
  },
  {
    id: "apres",
    titre: "Après la mission",
    objectif: "Partir en laissant un client autonome et un pool plus fort.",
    standards: [
      "Le transfert est constaté par le client, pas déclaré par l'équipe.",
      "Les accès sont révoqués et les données restituées ou supprimées conformément au contrat.",
      "Le REX est écrit dans les deux semaines qui suivent la clôture.",
      "Les mesures de valeur à +3 et +6 mois sont programmées avec le client.",
    ],
    rituels: [
      {
        nom: "Revue de clôture avec le sponsor",
        frequence: "Une fois, à la fin",
        contenu: "Valeur mesurée contre la référence, état du transfert, suites possibles.",
      },
      {
        nom: "Atelier REX avec le pool",
        frequence: "Une fois, environ une heure",
        contenu: "Ce qui a marché, ce que nous ferions autrement, ce qui devient pattern ou anti-pattern.",
      },
      {
        nom: "Points de mesure",
        frequence: "À +3 et +6 mois",
        contenu: "Relevé des indicateurs avec le client, mise à jour du tableau de bord de valeur.",
      },
    ],
    livrables: [
      { libelle: "Plan de transfert", href: "/templates/plan-transfert" },
      { libelle: "Clôture de mission", href: "/templates/cloture-mission" },
      { libelle: "REX de mission", href: "/templates/rex-mission" },
      { libelle: "Tableau de bord de valeur", href: "/templates/tableau-de-bord-valeur" },
    ],
    remontees: [
      "Le REX anonymisé et les patterns ou anti-patterns proposés.",
      "Les templates améliorés et les actifs réutilisables.",
      "Les besoins de formation révélés par la mission.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5. Situations délicates                                             */
/* ------------------------------------------------------------------ */

export interface SituationDelicate {
  id: string;
  titre: string;
  enjeu: string;
  actions48h: string[];
  formulation: string;
  eviter: string[];
  ressources: LienRessource[];
  /** Termes supplémentaires pour la recherche. */
  motsCles: string;
}

export const SITUATIONS: SituationDelicate[] = [
  {
    id: "agent-sans-probleme",
    titre: "Le sponsor veut « un agent » sans problème défini",
    enjeu:
      "La mission risque de commencer par la solution. Un agent sans indicateur devient un POC de plus : chez Voxalis, sept POC en deux ans, un seul en production, aucun mesuré.",
    actions48h: [
      "Obtenir 45 minutes avec le sponsor pour remonter au problème : quel indicateur, de combien, et le coût de l'inaction.",
      "Proposer deux ou trois reformulations en problème métier, chacune avec son indicateur.",
      "Écrire une hypothèse de réponse et la situer sur l'échelle des solutions.",
      "Inscrire la reformulation retenue dans le projet de charte de mission.",
    ],
    formulation:
      "« Je peux construire un agent. Avant, aidez-moi à choisir ce qu'il doit changer : quel indicateur voulez-vous voir bouger dans six mois, et de combien ? Si nous le savons, je vous dirai s'il faut un agent, un workflow ou une simple règle. »",
    eviter: [
      "Dessiner une architecture dès la première réunion.",
      "Répondre « vous n'avez pas besoin d'un agent » sans proposer autre chose.",
    ],
    ressources: [
      { libelle: "Problème et hypothèses", href: "/frameworks/probleme-hypotheses" },
      { libelle: "Faut-il un agent ?", href: "/outils/agent-ou-pas" },
      { libelle: "La techno d'abord", href: "/savoir/techno-d-abord" },
      { libelle: "Charte de mission", href: "/templates/charte-de-mission" },
    ],
    motsCles: "chatbot solution cadrage demande",
  },
  {
    id: "perimetre-glisse",
    titre: "Le périmètre glisse",
    enjeu:
      "Chaque ajout dilue la preuve de valeur et décale le jalon. Le sponsor finit par croire que tout est possible en même temps, et juge la mission sur des promesses qu'elle n'a pas faites.",
    actions48h: [
      "Tracer chaque demande nouvelle dans le registre RAID avec son impact sur le délai et sur la valeur.",
      "Revenir à la charte : ce qui est dans le périmètre, ce qui n'y est pas.",
      "Présenter l'arbitrage au sponsor : ajouter, c'est retirer ou décaler.",
      "Obtenir la décision par écrit et l'annoncer à l'équipe.",
    ],
    formulation:
      "« C'est une bonne idée et je la note. Si nous l'ajoutons maintenant, le pilote glisse d'environ trois semaines. Je vous propose de la mettre en tête de la vague suivante ; si elle est prioritaire, dites-moi ce que nous retirons. »",
    eviter: [
      "Dire oui en réunion pour faire plaisir.",
      "Absorber l'ajout en silence, en heures supplémentaires.",
    ],
    ressources: [
      { libelle: "Registre RAID", href: "/templates/registre-raid" },
      { libelle: "Préparer et piloter un COPIL", href: "/guides/piloter-copil" },
      { libelle: "L'agent partout", href: "/savoir/agent-partout" },
      { libelle: "Redresser une mission", href: "/guides/redresser-mission" },
    ],
    motsCles: "scope perimetre derive ajout demande",
  },
  {
    id: "donnees-absentes",
    titre: "Les données promises n'arrivent pas",
    enjeu:
      "Sans données réelles, le golden set ne peut pas exister et l'équipe est tentée de construire sur du fictif. Chaque semaine perdue se retrouve sur le jalon de preuve de valeur.",
    actions48h: [
      "Nommer précisément ce qui manque (source, période, champs, volume) et qui le détient.",
      "Prévenir le sponsor avec l'impact daté sur le planning et une demande précise.",
      "Proposer un plan de repli : extraction ponctuelle pseudonymisée, échantillon annoté à la main, analyse préalable des tickets.",
      "Inscrire le blocage au registre RAID avec un responsable et une échéance.",
    ],
    formulation:
      "« Il nous manque l'extraction de douze mois de tickets prévue pour le 15. Sans elle, le golden set ne démarre pas et le pilote glisse d'autant. J'ai besoin que vous débloquiez la bonne personne cette semaine ; en attendant, nous annotons cent cas à la main avec deux experts. »",
    eviter: [
      "Construire sur des données synthétiques sans le dire.",
      "Attendre en silence en espérant que la situation se débloque.",
    ],
    ressources: [
      { libelle: "Revue données et SI", href: "/templates/revue-donnees-si" },
      { libelle: "Golden set dès le jour 1", href: "/savoir/golden-set-jour-1" },
      { libelle: "Démo trompeuse", href: "/savoir/demo-trompeuse" },
      { libelle: "Redresser une mission", href: "/guides/redresser-mission" },
    ],
    motsCles: "data acces extraction retard blocage",
  },
  {
    id: "metier-mefiant",
    titre: "Le métier se méfie",
    enjeu:
      "Les personnes dont le travail change craignent pour leur poste ou pour la reconnaissance de leur expertise. Sans elles, pas de golden set fiable, pas d'adoption, et des contournements dès la mise en service.",
    actions48h: [
      "Passer une demi-journée sur le plateau à observer et à écouter, sans rien vendre.",
      "Recueillir les irritants et choisir celui que l'on peut traiter visiblement en quelques semaines.",
      "Proposer aux experts reconnus d'annoter les cas d'évaluation et de juger les résultats.",
      "Vérifier avec le sponsor et la DRH ce qui est engagé sur l'emploi avant de répondre aux inquiétudes.",
    ],
    formulation:
      "« Je ne viens pas vous dire comment faire votre métier. Je viens comprendre où vous perdez du temps et ce qui vous agace. Vous jugerez l'outil sur vos propres cas, et rien ne passera en production sans l'avis de votre équipe. »",
    eviter: [
      "Promettre « aucun impact sur l'emploi » sans engagement écrit de la direction.",
      "Demander au manager un rappel à l'ordre.",
    ],
    ressources: [
      { libelle: "Gérer les résistances", href: "/guides/gerer-resistances" },
      { libelle: "Binôme métier-FDE", href: "/savoir/binome-metier-fde" },
      { libelle: "L'humain oublié", href: "/savoir/humain-oublie" },
      { libelle: "ADKAR", href: "/frameworks/adkar" },
    ],
    motsCles: "resistance adoption terrain confiance syndicat",
  },
  {
    id: "demo-realite",
    titre: "La démonstration a mieux marché que la réalité",
    enjeu:
      "Le sponsor a ancré son attente sur quelques cas favorables. Plus l'écart est découvert tard, plus il détruit la confiance, y compris dans les résultats justes.",
    actions48h: [
      "Mesurer l'écart sur le golden set complet, pas sur de nouveaux cas choisis.",
      "Classer les erreurs par catégorie et estimer ce que chacune coûte à corriger.",
      "Prévenir le sponsor avant tout comité, chiffres et plan de correction à l'appui.",
      "Recaler le niveau d'autonomie et le calendrier sur ce que montrent les évaluations.",
    ],
    formulation:
      "« La démonstration portait sur cinq cas choisis. Sur les 600 cas du golden set, la justesse du diagnostic est de [x] % pour un seuil fixé à 90 %. Voici les trois catégories d'erreurs et ce que nous faisons pour chacune. Je propose de rester deux semaines de plus en mode fantôme. »",
    eviter: [
      "Choisir à nouveau des cas favorables pour la prochaine présentation.",
      "Minimiser l'écart ou l'attribuer aux données sans l'avoir vérifié.",
    ],
    ressources: [
      { libelle: "Démo trompeuse", href: "/savoir/demo-trompeuse" },
      { libelle: "Construire les evals", href: "/guides/construire-les-evals" },
      { libelle: "Rapport d'évaluation", href: "/templates/rapport-evaluation" },
      { libelle: "Mode fantôme", href: "/savoir/mode-fantome" },
    ],
    motsCles: "demo evaluation ecart attentes performance",
  },
  {
    id: "chiffres-contestes",
    titre: "Un dirigeant conteste les chiffres",
    enjeu:
      "Si la référence n'est pas partagée, toute mesure de valeur devient une opinion. La contestation est souvent légitime sur un point précis : périmètre, période, méthode ou attribution.",
    actions48h: [
      "Identifier exactement ce qui est contesté : la référence, le périmètre, la méthode ou l'attribution.",
      "Revenir à la référence signée par la finance et à la méthode de calcul écrite.",
      "Rencontrer le dirigeant en bilatéral, avec le contrôle de gestion si possible.",
      "Corriger publiquement si l'objection est fondée, et mettre à jour le registre de valeur.",
    ],
    formulation:
      "« Vous avez peut-être raison, et je veux le vérifier avec vous. Le MTTR de 13,2 h est mesuré sur l'ensemble des incidents PME, contre une référence de 31 h validée par la direction financière. Qu'est-ce qui vous paraît faux : la référence, le périmètre ou la méthode ? »",
    eviter: [
      "Défendre le chiffre frontalement en séance.",
      "Arrondir dans le sens favorable ou changer de périmètre pour améliorer le résultat.",
    ],
    ressources: [
      { libelle: "Registre de valeur", href: "/frameworks/registre-de-valeur" },
      { libelle: "Mesure d'impact", href: "/frameworks/mesure-impact" },
      { libelle: "Chiffrer la valeur", href: "/guides/chiffrer-la-valeur" },
      { libelle: "Dialoguer avec les dirigeants", href: "/guides/dialoguer-avec-les-dirigeants" },
    ],
    motsCles: "valeur mesure baseline reference finance contestation",
  },
  {
    id: "it-bloque",
    titre: "L'IT bloque les accès",
    enjeu:
      "La DSI et le RSSI ont souvent de bonnes raisons : sécurité, conformité, charge. Les contourner ruine la confiance et fait courir un risque réel ; les subir sans réagir bloque la mission.",
    actions48h: [
      "Rencontrer la DSI ou le RSSI pour comprendre la raison exacte du refus.",
      "Présenter le besoin minimal : lecture seule, données pseudonymisées, environnement isolé, liste des outils.",
      "Proposer l'analyse de risques et la revue sécurité comme chemin vers l'accord.",
      "Si le blocage persiste, demander un arbitrage du sponsor en présence de la DSI.",
    ],
    formulation:
      "« Je comprends la réserve. Voici exactement ce dont nous avons besoin : un accès en lecture seule à deux API, sur un environnement de test, avec des données pseudonymisées. Quelles conditions faudrait-il réunir pour que vous puissiez dire oui ? »",
    eviter: [
      "Contourner : comptes personnels, copies de données sur un poste, services non autorisés.",
      "Escalader au sponsor avant d'avoir parlé à la DSI.",
    ],
    ressources: [
      { libelle: "Checklist sécurité et conformité", href: "/templates/checklist-securite-conformite" },
      { libelle: "Analyse de risques d'un agent", href: "/templates/analyse-risques-agent" },
      { libelle: "Sécurité des agents", href: "/frameworks/securite-agents" },
      { libelle: "Spécification d'outil", href: "/templates/specification-outil" },
    ],
    motsCles: "dsi rssi securite acces droits blocage",
  },
  {
    id: "promettre-gain",
    titre: "On me demande de promettre un gain",
    enjeu:
      "Un chiffre promis avant toute mesure devient l'objectif contre lequel la mission sera jugée. Refuser tout chiffre est aussi une erreur : le sponsor doit décider et défendre un budget.",
    actions48h: [
      "Distinguer trois chiffres : le potentiel, l'hypothèse retenue et le réalisé à mesurer.",
      "Donner une fourchette avec ses hypothèses explicites, validées par la finance.",
      "Proposer la méthode et le calendrier de mesure du réalisé.",
    ],
    formulation:
      "« Je ne peux pas vous promettre un chiffre que nous n'avons pas mesuré. Le potentiel est de 6,3 M€ par an ; avec des hypothèses prudentes validées par la finance, nous retenons 3,8 M€. Vous aurez la mesure du réalisé à la fin du pilote, contre la référence que nous aurons signée ensemble. »",
    eviter: [
      "Citer un pourcentage de gain générique entendu ailleurs.",
      "S'engager sur un chiffre sans la direction financière.",
    ],
    ressources: [
      { libelle: "Business case", href: "/templates/business-case" },
      { libelle: "Atelier business case", href: "/outils/business-case" },
      { libelle: "Business case et TCO", href: "/frameworks/business-case-tco" },
      { libelle: "Valeur déclarative", href: "/savoir/valeur-declarative" },
    ],
    motsCles: "roi engagement promesse gain business case",
  },
  {
    id: "incident-production",
    titre: "Un incident survient en production",
    enjeu:
      "La façon dont l'incident est traité pèse plus sur la confiance que l'incident lui-même. Chez Voxalis, deux incidents mineurs (messages envoyés en double) ont été corrigés en S24 sans remettre en cause le pilote.",
    actions48h: [
      "Contenir d'abord, selon le runbook : suspendre l'outil en écriture ou ramener l'agent à un niveau d'autonomie inférieur.",
      "Informer dans l'heure le propriétaire du processus et le sponsor, avec les faits connus et les mesures prises.",
      "Analyser la cause dans les traces, ajouter le cas aux évaluations avant de réactiver.",
      "Tenir un post-mortem sans recherche de coupable et partager les actions.",
    ],
    formulation:
      "« Depuis ce matin, l'agent Communication a envoyé des messages en double à une partie des clients. Nous avons suspendu l'envoi automatique : les messages repassent par validation humaine. La cause probable est identifiée ; le correctif et le cas de test seront en place demain, et le post-mortem a lieu jeudi. »",
    eviter: [
      "Corriger en silence et espérer que personne ne l'ait vu.",
      "Réactiver l'autonomie avant que le cas soit couvert par les évaluations.",
    ],
    ressources: [
      { libelle: "Runbook d'agent", href: "/templates/runbook-agent" },
      { libelle: "AgentOps", href: "/frameworks/agentops" },
      { libelle: "Garde-fous", href: "/frameworks/garde-fous" },
      { libelle: "Autonomie progressive", href: "/savoir/autonomie-progressive" },
    ],
    motsCles: "incident production erreur crise postmortem",
  },
  {
    id: "garder-indefiniment",
    titre: "Le client veut me garder indéfiniment",
    enjeu:
      "C'est flatteur, et c'est le signe que l'autonomie du client n'est pas construite. Une prolongation sans objet crée une dépendance coûteuse pour le client et immobilise le FDE.",
    actions48h: [
      "Faire le test : si nous partons vendredi, qu'est-ce qui s'arrête ?",
      "Transformer chaque réponse en action datée du plan de transfert, avec un responsable côté client.",
      "Proposer une sortie progressive avec une date et des critères de fin.",
      "En parler à la direction du pool : une nouvelle mission sur un autre périmètre vaut mieux qu'une prolongation sans objectif.",
    ],
    formulation:
      "« Je le prends comme une marque de confiance. Mais mon travail sera réussi quand votre équipe n'aura plus besoin de moi. Je vous propose une sortie en six semaines : voici, étape par étape, ce que votre équipe saura faire seule. »",
    eviter: [
      "Accepter une prolongation sans objectif ni critère de fin.",
      "Rester le seul à savoir faire tourner un composant.",
    ],
    ressources: [
      { libelle: "Dépendance au FDE", href: "/savoir/dependance-fde" },
      { libelle: "Plan de transfert", href: "/templates/plan-transfert" },
      { libelle: "Clôture de mission", href: "/templates/cloture-mission" },
      { libelle: "Capitaliser", href: "/guides/capitaliser" },
    ],
    motsCles: "transfert prolongation dependance autonomie sortie",
  },
];

/** Une fiche réflexe au format Markdown. */
export function situationEnMarkdown(s: SituationDelicate): string {
  return [
    `## ${s.titre}`,
    "",
    `**Ce qui se joue.** ${s.enjeu}`,
    "",
    "**Dans les 48 heures**",
    "",
    ...s.actions48h.map((a, i) => `${i + 1}. ${a}`),
    "",
    "**À dire**",
    "",
    `> ${s.formulation}`,
    "",
    "**À éviter**",
    "",
    ...s.eviter.map((e) => `- ${e}`),
    "",
    "**Ressources**",
    "",
    ...s.ressources.map((r) => `- [${r.libelle}](${r.href})`),
    "",
  ].join("\n");
}
