/**
 * Parcours d'intégration des FDE : étapes, exercices, plan 30/60/90, mentorat et profils d'origine.
 * Les durées, rituels et points de validation constituent un cadre proposé,
 * à ajuster par la direction du pool.
 */

export interface Ressource {
  libelle: string;
  href: string;
}

export interface ActionOnboarding {
  id: string;
  libelle: string;
  ressource?: Ressource;
}

export interface Exercice {
  id: string;
  titre: string;
  enonce: string;
  duree: string;
  livrable: string;
  criteres: string[];
  ressources: Ressource[];
}

export interface EtapeOnboarding {
  id: string;
  numero: number;
  nom: string;
  periode: string;
  objectif: string;
  duree: string;
  critereValidation: string;
  actions: ActionOnboarding[];
  exercices?: Exercice[];
}

export type ProfilId = "logiciel" | "donnees" | "ia" | "cloud" | "business";

export interface ProfilOrigine {
  id: ProfilId;
  nom: string;
  acquis: string[];
  aAcquerir: string[];
  ressources: [Ressource, Ressource, Ressource];
  /** Identifiants d'actions et d'exercices à traiter en priorité. */
  priorites: string[];
}

export interface JalonPlan {
  id: string;
  horizon: string;
  titre: string;
  objectifs: string[];
  livrables: string[];
  validation: string;
}

export interface Rituel {
  nom: string;
  frequence: string;
  contenu: string;
}

/* ------------------------------------------------------------------ */
/* Checklist d'arrivée                                                 */
/* ------------------------------------------------------------------ */

export const CHECKLIST_ARRIVEE: ActionOnboarding[] = [
  { id: "arr-mentor", libelle: "Rencontrer son mentor et fixer le créneau du point hebdomadaire pour les 13 semaines" },
  { id: "arr-direction", libelle: "Échanger avec la direction du pool : attentes, missions en cours, calendrier du parcours" },
  { id: "arr-acces", libelle: "Obtenir les accès aux espaces de travail du pool et vérifier qu'ils fonctionnent" },
  {
    id: "arr-charte",
    libelle: "Lire la charte du FDE et les règles du pool, en particulier la confidentialité des données client",
    ressource: { libelle: "Le métier FDE", href: "/metier" },
  },
  {
    id: "arr-profil",
    libelle: "Choisir son profil d'origine ci-dessus et lire ses priorités d'apprentissage",
  },
  {
    id: "arr-autoeval",
    libelle: "Faire son auto-évaluation initiale sur le référentiel de compétences",
    ressource: { libelle: "Compétences", href: "/competences" },
  },
  {
    id: "arr-mission",
    libelle: "Créer une mission d'entraînement « Voxalis » dans l'espace mission pour y ranger ses exercices",
    ressource: { libelle: "Missions", href: "/missions" },
  },
  {
    id: "arr-copilote",
    libelle: "Découvrir le copilote sur une question de méthode, et en connaître les limites",
    ressource: { libelle: "Copilote", href: "/copilote" },
  },
  {
    id: "arr-plan",
    libelle: "Valider avec le mentor son plan 30 / 60 / 90 jours et l'ordre des exercices",
  },
];

/* ------------------------------------------------------------------ */
/* Exercices pratiques (étape 3)                                       */
/* ------------------------------------------------------------------ */

export const EXERCICES: Exercice[] = [
  {
    id: "ex-diagnostic",
    titre: "Étude de cas de diagnostic : où passent les 31 heures ?",
    enonce:
      "Vous êtes Hugo, fin S6 chez Voxalis. À partir des indicateurs de référence (420 000 tickets, MTTR de 31 h, FCR de 54 %, réouverture de 14 %, coût de 41 € par ticket) et des constats du diagnostic (décomposition du MTTR, 12 motifs qui concentrent 58 % des incidents, base de connaissances obsolète à 35 %, 6 applications dont 4 avec API), rédigez la page de synthèse présentée au COPIL. Elle doit dire ce qui explique le délai, ce qui ne l'explique pas, et ce que cela implique pour la suite. Signalez au moins deux affirmations que les données disponibles ne permettent pas encore d'étayer.",
    duree: "3 h",
    livrable: "Une page de synthèse au format SCQA, plus une annexe listant les sources de chaque chiffre et les données manquantes.",
    criteres: [
      "La conclusion figure en tête et répond au problème posé dans la charte (diviser le MTTR par deux).",
      "Chaque constat est chiffré et rattaché à sa source ; aucun chiffre n'est extrapolé sans le dire.",
      "Les causes sont distinguées des symptômes : l'attente entre niveaux pèse plus que le temps de traitement.",
      "Les limites de l'analyse et les vérifications restantes sont explicites.",
    ],
    ressources: [
      { libelle: "Framework : analyse des causes racines", href: "/frameworks/analyse-causes-racines" },
      { libelle: "Framework : pyramide et SCQA", href: "/frameworks/pyramide-scqa" },
      { libelle: "Template : fiche processus existant", href: "/templates/fiche-processus-existant" },
      { libelle: "Cas fil rouge", href: "/guides/cas-fil-rouge" },
    ],
  },
  {
    id: "ex-hypotheses",
    titre: "Construire l'arbre d'hypothèses de la mission",
    enonce:
      "Partez de la question reformulée en S1 : « comment diviser par deux le délai de résolution des incidents PME tout en réduisant le coût par ticket d'un tiers ? ». Construisez un arbre d'hypothèses sur trois niveaux, sans regarder le diagnostic de la phase 1. Pour chaque hypothèse feuille, indiquez l'analyse qui la confirmerait ou la réfuterait, la donnée nécessaire et qui la détient chez Voxalis. Comparez ensuite votre arbre au diagnostic réel : quelles branches étaient justes, lesquelles étaient inutiles ?",
    duree: "2 h 30",
    livrable: "Un arbre d'hypothèses (schéma ou tableau) et une demi-page de comparaison avec le diagnostic réel.",
    criteres: [
      "Les branches de chaque niveau sont mutuellement exclusives et collectivement exhaustives.",
      "Chaque hypothèse est formulée de façon réfutable, avec un seuil ou un ordre de grandeur.",
      "Chaque feuille est associée à une analyse, une donnée et un détenteur identifié.",
      "Les trois hypothèses à vérifier en premier sont choisies selon leur poids probable (logique 80/20).",
    ],
    ressources: [
      { libelle: "Framework : problème et hypothèses", href: "/frameworks/probleme-hypotheses" },
      { libelle: "Framework : MECE", href: "/frameworks/mece" },
      { libelle: "Template : arbre d'hypothèses", href: "/templates/arbre-hypotheses" },
      { libelle: "Framework : analyse 80/20", href: "/frameworks/analyse-80-20" },
    ],
  },
  {
    id: "ex-sponsor",
    titre: "Simulation : premier rendez-vous avec la sponsor",
    enonce:
      "Le mentor joue Claire Besson, DGA Marché Entreprises. Elle ouvre ainsi : « Je veux un chatbot pour le SAV PME, en production dans trois mois. Vous pouvez le faire ? » Vous avez 30 minutes pour comprendre le problème réel, reformuler une ambition mesurable, obtenir son accord sur les prochaines étapes (accès aux données de tickets, entretiens, interlocuteurs) et poser au moins un critère d'arrêt. Le mentor introduit deux objections : la pression du calendrier et un POC précédent qui « n'a rien donné ».",
    duree: "1 h de préparation, 30 min de simulation, 30 min de débriefing",
    livrable: "Le compte rendu d'une page envoyé à la sponsor après l'entretien, et un premier jet de charte de mission.",
    criteres: [
      "Les questions sur le problème et ses effets précèdent toute discussion de solution.",
      "L'ambition est reformulée en résultat métier chiffré, validé à voix haute par la sponsor.",
      "Les objections sont traitées sans refus sec ni promesse intenable.",
      "L'entretien se conclut sur des engagements concrets : accès, noms, date du prochain point.",
      "Le compte rendu tient en une page, conclusion d'abord, et part dans les 24 heures.",
    ],
    ressources: [
      { libelle: "Guide : dialoguer avec les dirigeants", href: "/guides/dialoguer-avec-les-dirigeants" },
      { libelle: "Template : charte de mission", href: "/templates/charte-de-mission" },
      { libelle: "Anti-pattern : la techno d'abord", href: "/savoir/techno-d-abord" },
      { libelle: "Guide : posture du FDE", href: "/guides/posture-fde" },
    ],
  },
  {
    id: "ex-chiffrage",
    titre: "Chiffrer un cas d'usage et éprouver le business case",
    enonce:
      "Reconstruisez le business case de Voxalis dans l'atelier dédié (valeur annuelle de 5,4 M€, investissement de 3,1 M€, coût récurrent de 1,2 M€, ROI à 3 ans de 85 %). Puis faites deux tests de sensibilité : un taux de capture des gains d'efficacité de 40 % au lieu de 60 %, et une rétention qui n'apporte que la moitié du gain prévu. Déterminez le taux de capture en dessous duquel le gain net à 3 ans devient négatif. Concluez en trois phrases destinées à Julien Faure, directeur financier.",
    duree: "3 h",
    livrable: "Le business case recalculé, un tableau de sensibilité et une note de trois phrases pour le directeur financier.",
    criteres: [
      "Chaque hypothèse est explicitée, sourcée et distinguée des faits mesurés.",
      "Les calculs sont justes et reproductibles par un tiers.",
      "Le point mort est calculé et interprété, pas seulement affiché.",
      "La note financière dit ce qui est solide, ce qui est fragile et ce qu'il faut mesurer en pilote.",
    ],
    ressources: [
      { libelle: "Atelier : business case", href: "/outils/business-case" },
      { libelle: "Guide : chiffrer la valeur", href: "/guides/chiffrer-la-valeur" },
      { libelle: "Framework : business case et TCO", href: "/frameworks/business-case-tco" },
      { libelle: "Framework : arbre de valeur", href: "/frameworks/arbre-de-valeur" },
    ],
  },
  {
    id: "ex-redesign",
    titre: "Redesign d'un processus : les demandes de modification",
    enonce:
      "Les demandes de modification représentent 23 % des tickets de Voxalis et sont restées hors du périmètre du pilote. Concevez leur processus cible AI-Native en partant du résultat attendu par le client PME, pas du processus actuel. Indiquez les étapes supprimées, la répartition du travail entre humains et agents, le niveau d'autonomie de chaque étape et sa justification par le risque, et l'effet sur les rôles des conseillers N1 et du back-office.",
    duree: "4 h",
    livrable: "Un processus cible (schéma et tableau), une matrice humain-agent et une demi-page sur les impacts métier et les indicateurs.",
    criteres: [
      "La conception part du résultat attendu ; elle ne transpose pas les étapes existantes.",
      "Le nombre d'étapes et de passages de relais baisse, et la baisse est chiffrée.",
      "Chaque niveau d'autonomie est justifié par la réversibilité et le risque de l'action.",
      "Les impacts sur les personnes sont explicites et cohérents avec l'engagement social pris par Voxalis.",
      "Deux à quatre indicateurs mesurent le succès, avec leur référence.",
    ],
    ressources: [
      { libelle: "Atelier : redesign de processus", href: "/outils/redesign-processus" },
      { libelle: "Framework : réinvention zero-base", href: "/frameworks/reinvention-zero-base" },
      { libelle: "Template : matrice humain-agent", href: "/templates/matrice-humain-agent" },
      { libelle: "Guide : repenser un processus", href: "/guides/repenser-un-processus" },
    ],
  },
  {
    id: "ex-agent",
    titre: "Concevoir un agent avec l'atelier Agent Designer",
    enonce:
      "Concevez l'Agent Communication du SAV Augmenté : il informe le client à chaque étape, en L3 pour les messages de statut et en L2 pour tout geste commercial. Spécifiez sa mission, ses entrées, les outils qu'il peut appeler (au minimum crm.lire_ticket et client.envoyer_message), ses garde-fous, ses règles d'escalade et ses critères d'évaluation. Traitez explicitement deux risques : un message envoyé en double et une instruction malveillante glissée dans le texte d'un ticket.",
    duree: "3 h",
    livrable: "La fiche agent exportée de l'atelier, complétée de la spécification de l'outil client.envoyer_message.",
    criteres: [
      "L'autonomie est fixée par outil et par situation, pas globalement.",
      "Chaque outil a des entrées, des sorties, des effets et des droits précis ; l'écriture est limitée au strict nécessaire.",
      "Les garde-fous couvrent l'idempotence des envois, l'injection de prompt et l'agentivité excessive.",
      "Les critères d'évaluation sont mesurables et reliés au seuil de conformité des messages (98 %).",
    ],
    ressources: [
      { libelle: "Atelier : Agent Designer", href: "/outils/agent-designer" },
      { libelle: "Template : fiche agent", href: "/templates/fiche-agent" },
      { libelle: "Template : spécification d'outil", href: "/templates/specification-outil" },
      { libelle: "Framework : garde-fous", href: "/frameworks/garde-fous" },
    ],
  },
  {
    id: "ex-golden-set",
    titre: "Construire un golden set",
    enonce:
      "Construisez un golden set réduit de 40 cas pour l'Agent Qualification (seuil d'exactitude : 95 %). Rédigez des tickets réalistes en respectant la répartition de Voxalis (62 % d'incidents techniques, 23 % de demandes de modification, 15 % de réclamations et facturation), incluez au moins 6 cas limites et 6 cas adverses. Pour chaque cas, donnez la sortie attendue. Faites annoter 10 cas par un pair sans lui montrer vos réponses, mesurez l'accord, et corrigez les cas ambigus.",
    duree: "4 h",
    livrable: "Le golden set (tableau), la note de méthode : répartition, règles d'annotation, mesure d'accord, version.",
    criteres: [
      "La répartition reflète le flux réel et couvre les 12 motifs récurrents représentés.",
      "Cas limites et cas adverses sont présents et documentés.",
      "Les sorties attendues sont non ambiguës ; les désaccords d'annotation ont été tranchés et tracés.",
      "La métrique, le seuil de passage et la règle de versionnement sont écrits avant tout test.",
    ],
    ressources: [
      { libelle: "Guide : construire les évaluations", href: "/guides/construire-les-evals" },
      { libelle: "Pattern : golden set dès le jour 1", href: "/savoir/golden-set-jour-1" },
      { libelle: "Template : plan d'évaluation", href: "/templates/plan-evaluation" },
      { libelle: "Framework : évaluation des agents", href: "/frameworks/evaluation-agents" },
    ],
  },
  {
    id: "ex-incident",
    titre: "Analyser un incident de production",
    enonce:
      "En S24 du pilote, des messages ont été envoyés en double à des clients. Rédigez l'analyse post-incident : chronologie plausible, cause racine (pas seulement le symptôme), correction, garde-fou ajouté, cas de non-régression versé au golden set, et décision sur le niveau d'autonomie de l'Agent Communication pendant la correction. Rédigez aussi les quatre lignes adressées à Nadia Cherif, responsable du plateau.",
    duree: "2 h",
    livrable: "Une analyse post-incident d'une page et le message au plateau.",
    criteres: [
      "L'analyse est factuelle et sans recherche de coupable.",
      "La cause racine est distinguée du déclencheur, avec au moins deux « pourquoi » successifs.",
      "La correction s'accompagne d'un test automatisé et d'une mise à jour du runbook.",
      "La décision sur l'autonomie est proportionnée et assortie d'une condition de retour.",
    ],
    ressources: [
      { libelle: "Framework : AgentOps", href: "/frameworks/agentops" },
      { libelle: "Template : runbook agent", href: "/templates/runbook-agent" },
      { libelle: "Framework : analyse des causes racines", href: "/frameworks/analyse-causes-racines" },
      { libelle: "Pattern : autonomie progressive", href: "/savoir/autonomie-progressive" },
    ],
  },
  {
    id: "ex-executif",
    titre: "Présentation exécutive : décider la généralisation",
    enonce:
      "Préparez le passage en COPIL de fin de pilote (S29). Résultats sur Nantes : MTTR de 31 h à 14,5 h, FCR de 54 % à 71 %, 31 % de tickets résolus sans intervention humaine, réouverture de 14 % à 8 %, CSAT de 3,6 à 4,3, deux incidents mineurs corrigés. Décision demandée : généraliser en trois vagues régionales. Cinq diapositives au plus. Présentez en 10 minutes devant le mentor, qui joue Claire Besson, et un pair qui joue Julien Faure et conteste la représentativité du pilote.",
    duree: "3 h de préparation, 10 min de présentation, 20 min de questions et débriefing",
    livrable: "Le support de cinq diapositives au plus et la liste des questions reçues avec la réponse donnée.",
    criteres: [
      "La décision demandée figure dès la première diapositive.",
      "Chaque résultat est comparé à la référence, avec ses limites (un plateau, une région, 9 400 tickets).",
      "Risques, conditions de la généralisation et critères d'arrêt sont présentés.",
      "Les objections financières reçoivent une réponse chiffrée ou un engagement de mesure.",
      "Le temps est tenu.",
    ],
    ressources: [
      { libelle: "Framework : communication exécutive", href: "/frameworks/communication-executive" },
      { libelle: "Template : support de COPIL", href: "/templates/support-copil" },
      { libelle: "Guide : piloter un COPIL", href: "/guides/piloter-copil" },
      { libelle: "Template : bilan du pilote", href: "/templates/bilan-pilote" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Les cinq étapes                                                     */
/* ------------------------------------------------------------------ */

export const ETAPES_ONBOARDING: EtapeOnboarding[] = [
  {
    id: "comprendre",
    numero: 1,
    nom: "Comprendre",
    periode: "Semaine 1",
    duree: "1 semaine",
    objectif:
      "Comprendre ce qu'est le métier de FDE, ce que le pool promet à ses clients et la logique de la méthode, avant d'en apprendre les outils.",
    critereValidation:
      "Vous expliquez en cinq minutes à votre mentor la méthode en 8 phases, ses trois fils transverses et ses huit convictions, en racontant la mission Voxalis de la demande « chatbot » jusqu'à la mesure de la valeur.",
    actions: [
      { id: "c-metier", libelle: "Lire la page Métier : rôle, charte, règles du pool, situations délicates", ressource: { libelle: "Le métier FDE", href: "/metier" } },
      { id: "c-methode", libelle: "Lire la vue d'ensemble de la méthode, les jalons et les huit convictions", ressource: { libelle: "Méthode", href: "/methode" } },
      { id: "c-voxalis", libelle: "Lire le cas Voxalis en entier, puis le relire phase par phase", ressource: { libelle: "Cas fil rouge", href: "/guides/cas-fil-rouge" } },
      { id: "c-posture", libelle: "Lire le guide sur la posture du FDE", ressource: { libelle: "Posture du FDE", href: "/guides/posture-fde" } },
      { id: "c-rex", libelle: "Lire le retour d'expérience Voxalis et noter trois décisions que vous n'auriez pas prises", ressource: { libelle: "REX Voxalis", href: "/savoir/rex-voxalis-sav-augmente" } },
      { id: "c-antipatterns", libelle: "Lire trois anti-patterns : POC purgatoire, agent partout, automatiser l'existant", ressource: { libelle: "POC purgatoire", href: "/savoir/poc-purgatoire" } },
      { id: "c-standards", libelle: "Parcourir les standards d'ingénierie du pool", ressource: { libelle: "Standards", href: "/standards" } },
      { id: "c-glossaire", libelle: "Parcourir le glossaire et noter les termes à clarifier avec le mentor", ressource: { libelle: "Glossaire", href: "/glossaire" } },
    ],
  },
  {
    id: "apprendre",
    numero: 2,
    nom: "Apprendre",
    periode: "Semaines 2 à 4",
    duree: "3 semaines, en parallèle des premiers exercices",
    objectif:
      "Acquérir les fondamentaux qui servent dans toute mission : structurer un problème, choisir le bon niveau de solution, concevoir et évaluer un agent, chiffrer la valeur, traiter la confiance.",
    critereValidation:
      "Sur trois besoins tirés au sort par le mentor, vous choisissez le barreau de l'échelle des solutions et le niveau d'autonomie, et vous justifiez chaque choix par le risque, la valeur et la vérifiabilité.",
    actions: [
      { id: "a-probleme", libelle: "Problème et hypothèses, puis pyramide et SCQA", ressource: { libelle: "Problème et hypothèses", href: "/frameworks/probleme-hypotheses" } },
      { id: "a-domaine", libelle: "Approche par domaine et matrice valeur-faisabilité", ressource: { libelle: "Approche par domaine", href: "/frameworks/approche-par-domaine" } },
      { id: "a-reinvention", libelle: "Réinvention zero-base et niveaux d'autonomie L0 à L5", ressource: { libelle: "Réinvention zero-base", href: "/frameworks/reinvention-zero-base" } },
      { id: "a-echelle", libelle: "L'échelle des solutions, puis l'atelier « Agent ou pas » sur trois besoins Voxalis", ressource: { libelle: "Atelier Agent ou pas", href: "/outils/agent-ou-pas" } },
      { id: "a-anatomie", libelle: "Anatomie d'un agent, patterns agentiques et context engineering", ressource: { libelle: "Anatomie d'un agent", href: "/frameworks/anatomie-agent" } },
      { id: "a-evals", libelle: "Évaluation des agents et eval-driven development", ressource: { libelle: "Évaluation des agents", href: "/frameworks/evaluation-agents" } },
      { id: "a-valeur", libelle: "Arbre de valeur, registre de valeur et business case", ressource: { libelle: "Arbre de valeur", href: "/frameworks/arbre-de-valeur" } },
      { id: "a-confiance", libelle: "Garde-fous, sécurité des agents et IA responsable", ressource: { libelle: "Sécurité des agents", href: "/frameworks/securite-agents" } },
      { id: "a-adoption", libelle: "Règle 10-20-70 et pilotage de l'adoption", ressource: { libelle: "Règle 10-20-70", href: "/frameworks/regle-10-20-70" } },
    ],
  },
  {
    id: "pratiquer",
    numero: 3,
    nom: "Pratiquer",
    periode: "Semaines 3 à 6",
    duree: "4 semaines",
    objectif:
      "Appliquer les fondamentaux sur des cas réalistes, produire des livrables au standard du pool et recevoir un retour structuré avant de toucher une mission réelle.",
    critereValidation:
      "Au moins six exercices validés par le mentor avec la grille, dont obligatoirement le diagnostic, le chiffrage et le golden set ; chaque livrable est rangé dans la mission d'entraînement.",
    actions: [
      { id: "p-planifier", libelle: "Choisir avec le mentor l'ordre des exercices selon son profil d'origine" },
      { id: "p-maturite", libelle: "Refaire le diagnostic de maturité de Voxalis et comparer au score de 2,1", ressource: { libelle: "Atelier maturité", href: "/outils/maturite" } },
      { id: "p-priorisation", libelle: "Reprioriser les 14 cas d'usage de Voxalis dans l'atelier de priorisation", ressource: { libelle: "Atelier priorisation", href: "/outils/priorisation" } },
      { id: "p-templates", libelle: "Parcourir les templates des phases 0 à 4 et repérer les exemples Voxalis", ressource: { libelle: "Templates", href: "/templates" } },
      { id: "p-cas-usage", libelle: "Parcourir les cas d'usage d'un secteur que vous ne connaissez pas", ressource: { libelle: "Cas d'usage", href: "/cas-usage" } },
      { id: "p-retours", libelle: "Faire relire chaque livrable par le mentor avec la grille et noter les écarts récurrents" },
      { id: "p-autoeval", libelle: "Mettre à jour son auto-évaluation après les exercices", ressource: { libelle: "Compétences", href: "/competences" } },
    ],
    exercices: EXERCICES,
  },
  {
    id: "observer",
    numero: 4,
    nom: "Observer et collaborer",
    periode: "Semaines 5 à 9",
    duree: "4 à 5 semaines, en immersion sur une mission",
    objectif:
      "Voir la méthode vivre chez un vrai client aux côtés d'un FDE confirmé, contribuer à des livrables réels sous supervision et apprendre les codes de la relation client.",
    critereValidation:
      "Le lead de la mission atteste que vous avez produit au moins deux livrables réels acceptés sans reprise majeure et mené au moins deux entretiens en binôme.",
    actions: [
      { id: "o-dossier", libelle: "Lire le dossier de préparation de la mission d'accueil avant le premier jour", ressource: { libelle: "Dossier de préparation", href: "/templates/dossier-preparation-mission" } },
      { id: "o-premiers-jours", libelle: "Lire le guide des premiers jours chez le client", ressource: { libelle: "Premiers jours", href: "/guides/premiers-jours" } },
      { id: "o-entretiens", libelle: "Observer trois entretiens, puis en mener deux en binôme", ressource: { libelle: "Mener des entretiens", href: "/guides/mener-entretiens" } },
      { id: "o-terrain", libelle: "Passer une demi-journée en observation sur le poste d'un opérationnel", ressource: { libelle: "Observation terrain", href: "/frameworks/observation-terrain" } },
      { id: "o-hebdo", libelle: "Rédiger deux points hebdomadaires de la mission", ressource: { libelle: "Point hebdo", href: "/templates/point-hebdo" } },
      { id: "o-raid", libelle: "Tenir le registre RAID pendant deux semaines", ressource: { libelle: "Registre RAID", href: "/templates/registre-raid" } },
      { id: "o-copil", libelle: "Assister à un COPIL et en rédiger le relevé de décisions", ressource: { libelle: "Piloter un COPIL", href: "/guides/piloter-copil" } },
      { id: "o-binome", libelle: "Travailler une journée en binôme avec un expert métier du client", ressource: { libelle: "Binôme métier-FDE", href: "/savoir/binome-metier-fde" } },
    ],
  },
  {
    id: "autonomie",
    numero: 5,
    nom: "Se déployer et devenir autonome",
    periode: "Semaines 9 à 13",
    duree: "4 à 5 semaines",
    objectif:
      "Tenir seul un périmètre défini (un chantier, un agent ou une phase) sur une mission réelle, avec une supervision allégée, et atteindre le niveau de readiness client.",
    critereValidation:
      "Le verdict de readiness est « prêt » ou « prêt avec binôme » sur le référentiel de compétences, confirmé en revue par le mentor et le lead de mission ; vous avez présenté au moins une fois devant le client.",
    actions: [
      { id: "d-situations", libelle: "Préparer sa prise de périmètre avec l'entrée par situation", ressource: { libelle: "Situations", href: "/situations" } },
      { id: "d-livrable", libelle: "Prendre en charge un livrable de bout en bout, du cadrage à la validation client", ressource: { libelle: "Méthode", href: "/methode" } },
      { id: "d-atelier", libelle: "Animer un atelier client, avec le mentor en observateur", ressource: { libelle: "Animer un atelier d'idéation", href: "/guides/animer-atelier-ideation" } },
      { id: "d-copil", libelle: "Présenter un point au COPIL ou au comité de pilotage", ressource: { libelle: "Support de COPIL", href: "/templates/support-copil" } },
      { id: "d-resistances", libelle: "Traiter une résistance réelle et en débriefer avec le mentor", ressource: { libelle: "Gérer les résistances", href: "/guides/gerer-resistances" } },
      { id: "d-readiness", libelle: "Refaire l'auto-évaluation et préparer la revue de readiness", ressource: { libelle: "Compétences", href: "/competences" } },
      { id: "d-capitaliser", libelle: "Rédiger une contribution au savoir terrain à partir de son immersion", ressource: { libelle: "Contribuer", href: "/savoir/contribuer" } },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Plan 30 / 60 / 90 jours                                             */
/* ------------------------------------------------------------------ */

export const PLAN_30_60_90: JalonPlan[] = [
  {
    id: "j30",
    horizon: "30 jours",
    titre: "Comprendre et s'exercer",
    objectifs: [
      "Maîtriser la méthode, ses jalons et le cas Voxalis.",
      "Acquérir les fondamentaux de l'étape 2.",
      "Avoir réalisé et fait valider au moins trois exercices.",
    ],
    livrables: [
      "Auto-évaluation initiale sur le référentiel de compétences.",
      "Trois livrables d'exercice relus avec la grille.",
      "Une liste personnelle de cinq points de progression.",
    ],
    validation:
      "Revue d'une heure avec le mentor : restitution orale de la méthode, revue des exercices, confirmation de la mission d'accueil pour l'étape 4.",
  },
  {
    id: "j60",
    horizon: "60 jours",
    titre: "Contribuer en mission",
    objectifs: [
      "Achever la série d'exercices (six au minimum).",
      "S'intégrer dans une équipe de mission et contribuer à ses livrables.",
      "Pratiquer entretiens, observation terrain et rituels de pilotage.",
    ],
    livrables: [
      "Deux livrables réels acceptés par le lead de mission.",
      "Comptes rendus des entretiens menés en binôme.",
      "Auto-évaluation mise à jour.",
    ],
    validation:
      "Revue tripartite avec le mentor et le lead de mission : retours du client si disponibles, écarts restants, périmètre confié pour les 30 jours suivants.",
  },
  {
    id: "j90",
    horizon: "90 jours",
    titre: "Tenir un périmètre",
    objectifs: [
      "Tenir seul un périmètre défini sur une mission réelle.",
      "Atteindre le niveau minimal de readiness sur toutes les compétences critiques.",
      "Rendre sa première contribution au savoir du pool.",
    ],
    livrables: [
      "Le livrable porté de bout en bout et sa validation client.",
      "Auto-évaluation finale et plan de progression pour le semestre.",
      "Une contribution au savoir terrain.",
    ],
    validation:
      "Revue de readiness avec le mentor, le lead de mission et un représentant de la direction du pool. Trois issues possibles : autonome ; autonome avec binôme sur les écarts restants ; prolongation de quatre semaines avec un plan ciblé.",
  },
];

/* ------------------------------------------------------------------ */
/* Mentorat                                                            */
/* ------------------------------------------------------------------ */

export interface DispositifMentorat {
  roleMentor: string[];
  roleArrivant: string[];
  rituels: Rituel[];
  validations: string[];
}

export const MENTORAT: DispositifMentorat = {
  roleMentor: [
    "Construit avec l'arrivant son plan 30 / 60 / 90 et adapte l'ordre des exercices à son profil.",
    "Relit chaque livrable d'exercice avec la grille et dit précisément ce qui manque pour atteindre le standard.",
    "Joue les rôles client dans les simulations et rend un retour sans complaisance.",
    "Trouve la mission d'accueil de l'étape 4 et cadre la contribution attendue avec son lead.",
    "Confronte l'auto-évaluation à des preuves observées, sans la noter à la place de l'arrivant.",
    "Alerte la direction du pool dès qu'un écart bloquant risque de ne pas être levé à 90 jours.",
  ],
  roleArrivant: [
    "Pilote son propre parcours : tient sa progression à jour et prépare chaque point.",
    "Apporte des preuves à son auto-évaluation : livrables, retours, situations vécues.",
    "Demande du retour tôt, sur des brouillons, plutôt qu'une validation tardive.",
    "Signale sans attendre un blocage, un doute éthique ou une difficulté avec un client.",
    "Respecte la confidentialité des données clients, y compris dans les exercices.",
    "Partage ce qu'il apprend : questions utiles, erreurs, propositions d'amélioration du portail.",
  ],
  rituels: [
    { nom: "Point hebdomadaire", frequence: "45 min par semaine", contenu: "Avancement du parcours, revue d'un livrable, difficulté de la semaine, objectif de la suivante." },
    { nom: "Revue d'exercice", frequence: "après chaque exercice", contenu: "Notation avec la grille, deux points forts, deux écarts, une ressource à rouvrir." },
    { nom: "Simulation", frequence: "trois fois sur le parcours", contenu: "Rendez-vous sponsor, présentation exécutive, gestion d'une objection ; débriefing immédiat." },
    { nom: "Observation croisée", frequence: "une fois par mois à partir de l'étape 4", contenu: "Le mentor observe l'arrivant en situation client, ou l'inverse, puis débriefe à chaud." },
    { nom: "Revue 30 / 60 / 90", frequence: "aux jours 30, 60 et 90", contenu: "Point de validation formel du plan, avec le lead de mission à partir de J60." },
  ],
  validations: [
    "Le critère de validation observable de chacune des cinq étapes.",
    "Chaque exercice, critère par critère, avec la grille.",
    "Le niveau retenu pour chaque compétence critique, preuves à l'appui.",
    "Le verdict de readiness proposé en revue de 90 jours.",
  ],
};

/* ------------------------------------------------------------------ */
/* Profils d'origine                                                   */
/* ------------------------------------------------------------------ */

export const PROFILS: ProfilOrigine[] = [
  {
    id: "logiciel",
    nom: "Ingénieur logiciel",
    acquis: [
      "Concevoir, tester et livrer du code de production.",
      "Intégrer des API et des systèmes existants.",
      "Travailler en revue de code, intégration et déploiement continus.",
    ],
    aAcquerir: [
      "Partir du problème métier et de la valeur avant la solution.",
      "Évaluer des systèmes non déterministes : golden set, seuils, cas adverses.",
      "Tenir une conversation de dirigeant : synthèse, chiffres, décision.",
    ],
    ressources: [
      { libelle: "Guide : posture du FDE", href: "/guides/posture-fde" },
      { libelle: "Framework : problème et hypothèses", href: "/frameworks/probleme-hypotheses" },
      { libelle: "Guide : construire les évaluations", href: "/guides/construire-les-evals" },
    ],
    priorites: ["c-posture", "a-probleme", "a-evals", "a-valeur", "ex-diagnostic", "ex-sponsor", "ex-golden-set", "ex-executif"],
  },
  {
    id: "donnees",
    nom: "Ingénieur données",
    acquis: [
      "Construire des chaînes de données fiables et en mesurer la qualité.",
      "Modéliser et documenter des données métier.",
      "Comprendre les contraintes de gouvernance et de protection des données.",
    ],
    aAcquerir: [
      "Concevoir un agent : outils, contexte, mémoire, autonomie.",
      "Mener des entretiens et lire un processus du point de vue du métier.",
      "Relier une amélioration technique à un gain chiffré.",
    ],
    ressources: [
      { libelle: "Framework : anatomie d'un agent", href: "/frameworks/anatomie-agent" },
      { libelle: "Framework : mémoire et connaissance", href: "/frameworks/memoire-connaissance" },
      { libelle: "Guide : mener des entretiens", href: "/guides/mener-entretiens" },
    ],
    priorites: ["a-anatomie", "a-reinvention", "a-valeur", "ex-agent", "ex-redesign", "ex-sponsor", "ex-chiffrage"],
  },
  {
    id: "ia",
    nom: "Ingénieur IA",
    acquis: [
      "Concevoir des prompts, des chaînes de recherche documentaire et des agents.",
      "Mesurer la qualité d'un modèle et en connaître les limites.",
      "Suivre l'état de l'art et ses compromis coût, latence, qualité.",
    ],
    aAcquerir: [
      "Choisir la solution la plus simple qui suffit, y compris sans modèle.",
      "Chiffrer la valeur et défendre un business case devant la finance.",
      "Industrialiser : exploitation, coûts, adoption par les équipes.",
    ],
    ressources: [
      { libelle: "Framework : faut-il un agent ?", href: "/frameworks/faut-il-un-agent" },
      { libelle: "Guide : chiffrer la valeur", href: "/guides/chiffrer-la-valeur" },
      { libelle: "Framework : AgentOps", href: "/frameworks/agentops" },
    ],
    priorites: ["a-echelle", "a-valeur", "a-adoption", "c-antipatterns", "ex-chiffrage", "ex-redesign", "ex-executif", "ex-incident"],
  },
  {
    id: "cloud",
    nom: "Architecte cloud",
    acquis: [
      "Concevoir des architectures sûres, observables et maîtrisées en coût.",
      "Gérer identités, droits d'accès et réseau.",
      "Dialoguer avec une DSI et un RSSI.",
    ],
    aAcquerir: [
      "Spécifier ce que fait un agent et les outils qu'il appelle, pas seulement où il tourne.",
      "Construire les évaluations qui conditionnent la mise en production.",
      "Comprendre le processus métier que l'architecture sert.",
    ],
    ressources: [
      { libelle: "Framework : anatomie d'un agent", href: "/frameworks/anatomie-agent" },
      { libelle: "Framework : conception des outils", href: "/frameworks/conception-outils" },
      { libelle: "Guide : construire les évaluations", href: "/guides/construire-les-evals" },
    ],
    priorites: ["a-anatomie", "a-evals", "a-reinvention", "ex-agent", "ex-golden-set", "ex-diagnostic", "ex-redesign"],
  },
  {
    id: "business",
    nom: "Profil business ou produit",
    acquis: [
      "Structurer un problème et conduire une analyse.",
      "Animer des ateliers et dialoguer avec des dirigeants.",
      "Prioriser un portefeuille et raisonner en valeur.",
    ],
    aAcquerir: [
      "Comprendre ce qu'un agent peut et ne peut pas faire, et pourquoi.",
      "Lire et discuter une spécification d'agent, d'outil et d'évaluation.",
      "Gagner une crédibilité technique face aux équipes d'ingénierie du client.",
    ],
    ressources: [
      { libelle: "Framework : faut-il un agent ?", href: "/frameworks/faut-il-un-agent" },
      { libelle: "Framework : anatomie d'un agent", href: "/frameworks/anatomie-agent" },
      { libelle: "Framework : évaluation des agents", href: "/frameworks/evaluation-agents" },
    ],
    priorites: ["a-echelle", "a-anatomie", "a-evals", "a-confiance", "c-standards", "ex-agent", "ex-golden-set", "ex-incident"],
  },
];
