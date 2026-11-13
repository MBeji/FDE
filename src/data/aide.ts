import { OUTILS, PHASE_IDS, PHASES_RESUME } from "./referentiels";

/**
 * Textes de la page Aide.
 *
 * Le catalogue est construit à partir du menu (NAVIGATION, src/lib/navigation.ts) : chaque entrée
 * du menu y apparaît, avec le texte ci-dessous s'il existe pour son href, et sinon avec son seul nom
 * et son lien. Ajouter une page au menu suffit donc à la faire figurer dans l'aide ; écrire son texte
 * ici la rend plus utile.
 */

export interface SousLienAide {
  href: string;
  nom: string;
}

export interface TexteAide {
  /** À quoi sert la page, en une phrase. */
  resume: string;
  /** « À utiliser quand… » */
  quand: string;
  /** Accès directs vers les sous-pages utiles. */
  sousLiens?: SousLienAide[];
}

export const AIDE_PAGES: Record<string, TexteAide> = {
  "/": {
    resume:
      "La page d'accueil : la mission active, les situations les plus fréquentes, le Parcours AI-Native, les ateliers et l'accès aux bibliothèques.",
    quand: "vous ouvrez le portail et voulez reprendre là où vous en étiez.",
  },
  "/situations": {
    resume:
      "Les situations du quotidien (rejoindre le pool, préparer une mission, réaliser un diagnostic…), chacune avec un point de départ, des étapes ordonnées et les ressources à ouvrir.",
    quand: "vous savez ce que vous devez faire, mais pas par quelle page commencer.",
    sousLiens: [
      { href: "/situations#rejoindre-le-pool", nom: "Je rejoins le pool" },
      { href: "/situations#preparer-une-mission", nom: "Je prépare une mission" },
      { href: "/situations#realiser-un-diagnostic", nom: "Je réalise un diagnostic" },
      { href: "/situations#rencontrer-une-difficulte", nom: "Je rencontre une difficulté" },
    ],
  },
  "/missions": {
    resume:
      "Le portefeuille de vos missions : création, mission d'exemple, import et export JSON. Chaque mission suit le Parcours AI-Native avec ses activités, livrables, jalons, registre de valeur et journal.",
    quand: "vous démarrez une mission, ou voulez suivre son avancement et produire un point d'avancement.",
    sousLiens: [{ href: "/missions/active", nom: "Mission active" }],
  },
  "/copilote": {
    resume:
      "Un assistant qui connaît le contenu du portail, la page consultée et, si vous l'autorisez, votre mission active ; avec une bibliothèque de prompts prêts à l'emploi.",
    quand: "vous voulez un premier jet de livrable, un regard critique sur votre travail ou une préparation de réunion.",
  },
  "/metier": {
    resume:
      "Le rôle du FDE, sa place face aux autres métiers, la charte du pool, les règles de fonctionnement et des fiches réflexes pour les situations délicates.",
    quand: "vous voulez savoir ce qu'on attend d'un FDE, ou réagir à une situation qui se tend chez le client.",
  },
  "/onboarding": {
    resume:
      "Le parcours d'intégration en cinq étapes, avec exercices sur le cas Voxalis, plan 30 / 60 / 90 jours et mentorat. Votre progression est conservée sur ce poste.",
    quand: "vous venez de rejoindre le pool, ou accompagnez quelqu'un qui arrive.",
  },
  "/competences": {
    resume:
      "Le référentiel de compétences sur quatre niveaux, l'auto-évaluation, la grille de préparation à l'intervention chez un client et le plan de progression.",
    quand: "vous faites le point sur votre niveau ou préparez un entretien de progression.",
  },
  "/methode": {
    resume:
      "La méthode en huit phases : pour chacune, objectifs, activités, questions à poser au client, livrables, jalon avec critères de passage et signaux d'arrêt, pièges et parades.",
    quand: "vous devez savoir quoi faire à l'étape où se trouve la mission, et à quelles conditions passer à la suivante.",
    sousLiens: PHASE_IDS.map((id) => ({
      href: `/methode/${id}`,
      nom: `${PHASES_RESUME[id].numero}. ${PHASES_RESUME[id].nom}`,
    })),
  },
  "/guides/cas-fil-rouge": {
    resume:
      "Une mission complète chez Voxalis, client fictif dont sont tirés les exemples des templates, des frameworks et des exercices.",
    quand: "vous voulez voir à quoi ressemble la méthode appliquée de bout en bout, avant votre première mission.",
  },
  "/outils": {
    resume:
      "Des ateliers interactifs qui produisent chacun un résultat exportable en Markdown et enregistrable dans la mission active.",
    quand: "vous devez produire un diagnostic, une priorisation, un business case ou une fiche d'agent pendant la mission.",
    sousLiens: OUTILS.map((o) => ({ href: `/outils/${o.id}`, nom: o.nom })),
  },
  "/frameworks": {
    resume:
      "Les cadres de pensée mobilisés en mission, du conseil en stratégie à l'ingénierie des agents : quand les utiliser, comment les appliquer, pièges à éviter.",
    quand: "vous devez structurer un problème, une analyse ou une décision.",
    sousLiens: [{ href: "/frameworks/faut-il-un-agent", nom: "Faut-il un agent ?" }],
  },
  "/templates": {
    resume:
      "Les livrables de la méthode : document vierge, exemple rempli sur le cas fil rouge et mode d'emploi. Avec une mission active, le document est pré-rempli à son nom.",
    quand: "vous devez rédiger un livrable et voulez partir d'une trame éprouvée.",
    sousLiens: [{ href: "/templates/fiche-agent", nom: "Fiche agent" }],
  },
  "/guides": {
    resume:
      "Les gestes du métier pas à pas : entretiens, ateliers, chiffrage de la valeur, conception d'agents, évaluations, pilote, COPIL.",
    quand: "vous avez une réunion, un atelier ou une étape délicate à préparer.",
    sousLiens: [
      { href: "/guides/posture-fde", nom: "La posture du FDE" },
      { href: "/guides/premiers-jours", nom: "Réussir les dix premiers jours" },
      { href: "/guides/redresser-mission", nom: "Redresser une mission" },
    ],
  },
  "/standards": {
    resume:
      "Les standards d'ingénierie sur dix domaines, classés obligatoire, recommandé ou contextuel, avec un mode revue de conformité exportable.",
    quand: "vous concevez un système, ou devez vérifier sa conformité avant un jalon technique.",
  },
  "/cas-usage": {
    resume:
      "Des cas d'usage par secteur et par fonction, avec des ordres de grandeur de valeur et de faisabilité, à envoyer vers l'atelier de priorisation.",
    quand: "vous préparez un atelier d'idéation ou cherchez des exemples dans le secteur du client.",
  },
  "/savoir": {
    resume: "Les patterns, anti-patterns et retours d'expérience issus des missions.",
    quand: "vous voulez savoir ce qui a marché, ou raté, dans une situation proche de la vôtre.",
  },
  "/savoir/contribuer": {
    resume:
      "Un assistant qui vous aide à rédiger un retour d'expérience, un pattern ou un anti-pattern conforme et anonymisé, prêt à être proposé par pull request.",
    quand: "une mission vous a appris quelque chose qui servira aux autres.",
  },
  "/glossaire": {
    resume:
      "Le vocabulaire commun du pool : IA générative, agents, méthode, conseil, delivery et gouvernance, avec pour chaque terme ce qu'il veut dire en mission.",
    quand: "un terme vous échappe, ou vous voulez employer le même mot que le reste du pool.",
  },
};

/** Points d'entrée de la section « Par où commencer ». */
export const POINTS_ENTREE: {
  titre: string;
  texte: string;
  principal: SousLienAide;
  autres: SousLienAide[];
}[] = [
  {
    titre: "Je rejoins le pool",
    texte: "Comprenez le métier, suivez le parcours d'intégration et voyez la méthode appliquée sur un cas complet.",
    principal: { href: "/onboarding", nom: "Commencer l'onboarding" },
    autres: [
      { href: "/metier", nom: "Rôle & charte FDE" },
      { href: "/guides/cas-fil-rouge", nom: "Cas fil rouge" },
    ],
  },
  {
    titre: "Je prépare une mission",
    texte: "Créez la mission dans le portail, puis préparez le cadrage : questions au client, livrables, jalon G0.",
    principal: { href: "/situations#preparer-une-mission", nom: "Préparer une mission" },
    autres: [
      { href: "/missions", nom: "Mes missions" },
      { href: "/methode/cadrer", nom: "Phase 0 · Cadrer" },
    ],
  },
  {
    titre: "Je suis en mission",
    texte: "Suivez l'avancement de la mission active, produisez vos livrables avec les ateliers et les templates, demandez un regard critique au copilote.",
    principal: { href: "/missions/active", nom: "Ouvrir la mission active" },
    autres: [
      { href: "/outils", nom: "Ateliers" },
      { href: "/templates", nom: "Templates" },
      { href: "/copilote", nom: "Copilote" },
    ],
  },
  {
    titre: "Je capitalise",
    texte: "Transformez ce que la mission vous a appris en fiche de savoir, relue puis publiée pour tout le pool.",
    principal: { href: "/savoir/contribuer", nom: "Rédiger une fiche" },
    autres: [
      { href: "/situations#partager-un-retour-d-experience", nom: "Partager un REX" },
      { href: "/savoir", nom: "Savoir terrain" },
    ],
  },
];
