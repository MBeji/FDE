/**
 * Entrée par situation : ce qu'un FDE doit ouvrir, et dans quel ordre,
 * selon ce qu'il est en train de vivre. Données seules, sans dépendance à React.
 * Tous les liens pointent vers des pages du portail.
 */

export type TypeRessource =
  | "phase"
  | "guide"
  | "framework"
  | "template"
  | "atelier"
  | "section";

export const TYPES_RESSOURCE: Record<
  TypeRessource,
  { nom: string; ordre: number }
> = {
  phase: { nom: "Phases de la méthode", ordre: 0 },
  guide: { nom: "Guides pratiques", ordre: 1 },
  framework: { nom: "Frameworks", ordre: 2 },
  template: { nom: "Templates", ordre: 3 },
  atelier: { nom: "Ateliers interactifs", ordre: 4 },
  section: { nom: "Pages du portail", ordre: 5 },
};

export interface RessourceSituation {
  type: TypeRessource;
  href: string;
  titre: string;
  /** Pourquoi l'ouvrir dans cette situation, en une phrase. */
  usage: string;
}

export interface EtapeSituation {
  /** Formulée comme une consigne ordonnée : « D'abord… », « Ensuite… ». */
  titre: string;
  detail: string;
  href: string;
  /** Libellé du lien vers la ressource. */
  lien: string;
}

export interface Situation {
  id: string;
  /** « Je prépare une mission » */
  intitule: string;
  /** Une phrase : par où commencer. */
  commencer: string;
  etapes: EtapeSituation[];
  ressources: RessourceSituation[];
}

export const SITUATIONS: Situation[] = [
  /* ---------------------------------------------------------------- */
  {
    id: "rejoindre-le-pool",
    intitule: "Je rejoins le pool",
    commencer:
      "Suivez le parcours d'intégration dans l'ordre, puis lisez le cas Voxalis en entier : tout le portail s'appuie dessus.",
    etapes: [
      {
        titre: "D'abord, suivre le parcours d'intégration",
        detail:
          "Il ordonne vos premières semaines : ce qu'il faut lire, pratiquer et valider avant votre première mission.",
        href: "/onboarding",
        lien: "Parcours d'intégration",
      },
      {
        titre: "Ensuite, comprendre le métier et les règles du pool",
        detail:
          "Le rôle du FDE, la charte, ce que l'on attend de vous chez le client et la conduite à tenir dans les situations délicates.",
        href: "/metier",
        lien: "Le métier FDE",
      },
      {
        titre: "Puis lire le cas fil rouge de bout en bout",
        detail:
          "Une mission complète, du cadrage à la mesure de la valeur. Tous les exemples de livrables du portail en reprennent les chiffres.",
        href: "/guides/cas-fil-rouge",
        lien: "Cas fil rouge : Voxalis",
      },
      {
        titre: "Parcourir la méthode en 8 phases",
        detail:
          "Retenez pour chaque phase sa promesse, ses livrables obligatoires et son jalon de sortie : c'est la grille de lecture de toute mission.",
        href: "/methode",
        lien: "Le Parcours AI-Native",
      },
      {
        titre: "Enfin, vous situer sur le référentiel de compétences",
        detail:
          "L'auto-évaluation fait apparaître les deux ou trois compétences à travailler en priorité ; partagez-la avec votre référent.",
        href: "/competences",
        lien: "Référentiel de compétences",
      },
    ],
    ressources: [
      {
        type: "guide",
        href: "/guides/posture-fde",
        titre: "La posture du FDE",
        usage:
          "Ce qui distingue un FDE d'un développeur détaché ou d'un consultant classique.",
      },
      {
        type: "framework",
        href: "/frameworks/faut-il-un-agent",
        titre: "Faut-il un agent ?",
        usage:
          "Le premier réflexe à acquérir : le barreau le plus bas de l'échelle des solutions qui suffit.",
      },
      {
        type: "framework",
        href: "/frameworks/regle-10-20-70",
        titre: "Règle 10-20-70",
        usage:
          "Pourquoi l'essentiel de la valeur se joue sur les personnes et les processus.",
      },
      {
        type: "section",
        href: "/standards",
        titre: "Standards d'ingénierie",
        usage:
          "Le niveau d'exigence attendu sur le code, les évaluations et l'exploitation.",
      },
      {
        type: "section",
        href: "/savoir",
        titre: "Savoir terrain",
        usage:
          "Patterns, anti-patterns et retours d'expérience : les erreurs que d'autres ont déjà faites.",
      },
      {
        type: "section",
        href: "/glossaire",
        titre: "Glossaire",
        usage:
          "Le vocabulaire commun du pool, à utiliser tel quel chez le client.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "preparer-une-mission",
    intitule: "Je prépare une mission",
    commencer:
      "Ouvrez le dossier de préparation dès la signature : comprendre le client et demander les accès avant le premier jour ; le questionnaire de découverte part à la signature de la charte.",
    etapes: [
      {
        titre: "D'abord, constituer le dossier de préparation",
        detail:
          "Activité, enjeux, initiatives IA passées, contraintes de sécurité, accès et environnements à obtenir. Les demandes d'accès partent cette semaine : c'est le premier facteur de retard.",
        href: "/templates/dossier-preparation-mission",
        lien: "Dossier de préparation de mission",
      },
      {
        titre: "Ensuite, préparer le questionnaire de découverte",
        detail:
          "Volumes, indicateurs suivis, systèmes, interlocuteurs : ce que le client peut renseigner par écrit n'a pas à occuper vos entretiens de diagnostic. Il part au propriétaire du processus à la signature de la charte, avec une semaine de délai.",
        href: "/templates/questionnaire-decouverte",
        lien: "Questionnaire de découverte",
      },
      {
        titre: "Puis poser une première hypothèse de problème",
        detail:
          "Reformulez la demande reçue en problème métier mesurable, même provisoire. Chez Voxalis, « déployer un chatbot » est devenu « diviser par deux le délai de résolution ».",
        href: "/frameworks/probleme-hypotheses",
        lien: "Problème et hypothèses",
      },
      {
        titre: "Enfin, préparer la carte des parties prenantes",
        detail:
          "Sponsor, propriétaire du processus, DSI, sécurité, RH : qui décide, qui peut bloquer, qui vivra avec le résultat. Planifiez les premiers rendez-vous.",
        href: "/templates/carte-parties-prenantes",
        lien: "Carte des parties prenantes",
      },
    ],
    ressources: [
      {
        type: "phase",
        href: "/methode/cadrer",
        titre: "Phase 0 — Cadrer",
        usage:
          "Les activités, livrables et critères du jalon G0 que vous préparez.",
      },
      {
        type: "guide",
        href: "/guides/premiers-jours",
        titre: "Réussir les premiers jours",
        usage:
          "Ce que vous devez avoir obtenu à la fin de la première semaine.",
      },
      {
        type: "guide",
        href: "/guides/dialoguer-avec-les-dirigeants",
        titre: "Dialoguer avec les dirigeants",
        usage: "Préparer le premier échange avec le sponsor.",
      },
      {
        type: "framework",
        href: "/frameworks/cartographie-parties-prenantes",
        titre: "Cartographie des parties prenantes",
        usage: "La méthode derrière la carte : pouvoir, intérêt, position.",
      },
      {
        type: "template",
        href: "/templates/plan-de-mission",
        titre: "Plan de mission",
        usage:
          "Phases, jalons, charges et prérequis client à faire valider au lancement.",
      },
      {
        type: "section",
        href: "/savoir/sponsor-fantome",
        titre: "Anti-pattern : le sponsor fantôme",
        usage:
          "Les signaux à repérer dès la préparation, avant qu'ils ne coûtent la mission.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "demarrer-une-mission",
    intitule: "Je démarre une mission",
    commencer:
      "Faites valider mot pour mot, dès la première semaine, un énoncé du problème chiffré par le sponsor : tout le reste en découle.",
    etapes: [
      {
        titre: "D'abord, réussir les premiers jours",
        detail:
          "Rencontrer le sponsor et le propriétaire du processus, obtenir les accès, aller sur le terrain. Ce qui n'est pas obtenu en semaine 1 coûte double en semaine 4.",
        href: "/guides/premiers-jours",
        lien: "Réussir les premiers jours",
      },
      {
        titre: "Ensuite, poser l'hypothèse de réponse initiale",
        detail:
          "Formulez la réponse la plus probable avec ce que vous savez, et l'analyse qui la tranchera. Chez Voxalis, elle était posée au jour 3.",
        href: "/templates/arbre-hypotheses",
        lien: "Arbre d'hypothèses",
      },
      {
        titre: "Puis rédiger et faire signer la charte de mission",
        detail:
          "Problème, ambition chiffrée, périmètre, gouvernance et deux ou trois critères d'arrêt. Une charte non signée n'est pas un mandat.",
        href: "/templates/charte-de-mission",
        lien: "Charte de mission",
      },
      {
        titre: "Installer les rituels et le suivi des risques",
        detail:
          "COPIL, point hebdomadaire, rituel quotidien ; ouvrez le registre des risques, actions, issues et décisions le premier jour.",
        href: "/templates/registre-raid",
        lien: "Registre RAID",
      },
      {
        titre: "Enfin, créer la mission dans l'espace de travail",
        detail:
          "Suivi des activités, journal de décisions et registre de valeur ; les templates se pré-remplissent ensuite avec le nom du client et du sponsor.",
        href: "/missions",
        lien: "Mes missions",
      },
    ],
    ressources: [
      {
        type: "phase",
        href: "/methode/cadrer",
        titre: "Phase 0 — Cadrer",
        usage:
          "Les critères du jalon G0 « Mandat clair » et les conditions d'arrêt.",
      },
      {
        type: "framework",
        href: "/frameworks/probleme-hypotheses",
        titre: "Problème et hypothèses",
        usage: "Passer d'une demande de solution à un problème mesurable.",
      },
      {
        type: "framework",
        href: "/frameworks/mece",
        titre: "MECE",
        usage: "Construire un arbre de questions sans trou ni recouvrement.",
      },
      {
        type: "framework",
        href: "/frameworks/registre-de-valeur",
        titre: "Registre de valeur",
        usage:
          "Ouvrir la première ligne de valeur dès le cadrage, même imprécise.",
      },
      {
        type: "template",
        href: "/templates/point-hebdo",
        titre: "Point hebdomadaire",
        usage: "Le format du rendez-vous qui évite les surprises en COPIL.",
      },
      {
        type: "guide",
        href: "/guides/piloter-copil",
        titre: "Piloter un COPIL",
        usage: "Préparer le premier comité et en sortir avec des décisions.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "realiser-un-diagnostic",
    intitule: "Je réalise un diagnostic",
    commencer:
      "Lancez en parallèle l'extraction de données, l'observation terrain et les entretiens : les faits mesurés tranchent les hypothèses, les entretiens les expliquent.",
    etapes: [
      {
        titre: "D'abord, préparer et mener les entretiens",
        detail:
          "Une grille par interlocuteur, des questions qui font émerger des faits (« montrez-moi le dernier cas »), une synthèse le jour même.",
        href: "/guides/mener-entretiens",
        lien: "Mener des entretiens de diagnostic",
      },
      {
        titre: "Ensuite, observer le travail réel",
        detail:
          "Deux à trois jours sur le terrain, chronomètre en main : attentes, ressaisies, contournements. Chez Voxalis, l'observation a montré jusqu'à six applications ouvertes pour un même cas et des fiches de résolution personnelles ; les horodatages ont ensuite chiffré à 41 % la part de l'attente entre niveaux.",
        href: "/frameworks/observation-terrain",
        lien: "Observation terrain",
      },
      {
        titre: "Puis décrire et mesurer le processus existant",
        detail:
          "Étapes, acteurs, outils, passages de relais, volumes et temps. Décomposez l'indicateur clé en ses composantes avant de conclure.",
        href: "/templates/fiche-processus-existant",
        lien: "Fiche processus existant",
      },
      {
        titre: "Remonter aux causes racines",
        detail:
          "Distinguer symptômes et causes avant toute proposition : une cause mal identifiée produit un cas d'usage qui ne déplace pas l'indicateur.",
        href: "/frameworks/analyse-causes-racines",
        lien: "Analyse des causes racines",
      },
      {
        titre: "Enfin, mesurer la maturité AI-Native",
        detail:
          "Sept dimensions notées avec des preuves, pas des impressions. Le score oriente le niveau d'ambition et les prérequis à traiter.",
        href: "/outils/maturite",
        lien: "Atelier diagnostic de maturité",
      },
    ],
    ressources: [
      {
        type: "phase",
        href: "/methode/diagnostiquer",
        titre: "Phase 1 — Diagnostiquer",
        usage: "Les livrables attendus au jalon G1 « Diagnostic partagé ».",
      },
      {
        type: "template",
        href: "/templates/guide-entretien",
        titre: "Guide d'entretien",
        usage: "La trame à adapter par interlocuteur.",
      },
      {
        type: "template",
        href: "/templates/revue-donnees-si",
        titre: "Revue données et SI",
        usage: "Systèmes, API, qualité et accessibilité des données.",
      },
      {
        type: "framework",
        href: "/frameworks/approche-par-domaine",
        titre: "Approche par domaine",
        usage:
          "Diagnostiquer un domaine entier plutôt qu'une liste de cas d'usage.",
      },
      {
        type: "framework",
        href: "/frameworks/cartographie-processus",
        titre: "Cartographie de processus",
        usage: "Représenter le flux réel et ses points d'attente.",
      },
      {
        type: "framework",
        href: "/frameworks/analyse-80-20",
        titre: "Analyse 80/20",
        usage:
          "Repérer la concentration : chez Voxalis, 12 motifs pour 58 % des incidents.",
      },
      {
        type: "framework",
        href: "/frameworks/decomposition-taches",
        titre: "Décomposition en tâches",
        usage: "Préparer la notation des opportunités tâche par tâche.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "concevoir-une-solution",
    intitule: "Je conçois une solution AI-Native",
    commencer:
      "Reconstruisez le processus à partir du résultat attendu avant de dessiner le moindre agent, puis choisissez pour chaque tâche le barreau le plus bas qui suffit.",
    etapes: [
      {
        titre: "D'abord, repenser le processus à partir du résultat",
        detail:
          "Partir de « un client rétabli et informé », pas des 9 étapes existantes. Les trois voies de Voxalis n'existaient pas dans l'organisation de départ.",
        href: "/guides/repenser-un-processus",
        lien: "Repenser un processus",
      },
      {
        titre: "Ensuite, répartir le travail entre humains et agents",
        detail:
          "Pour chaque tâche : qui fait, qui décide, qui contrôle, à quel niveau d'autonomie. L'autonomie se fixe par outil et par situation.",
        href: "/templates/matrice-humain-agent",
        lien: "Matrice humain-agent",
      },
      {
        titre: "Puis vérifier qu'un agent est nécessaire",
        detail:
          "Une règle, un appel de modèle ou un workflow suffisent souvent. L'atelier tranche en quelques questions et garde la trace du raisonnement.",
        href: "/outils/agent-ou-pas",
        lien: "Atelier agent ou pas",
      },
      {
        titre: "Spécifier chaque agent",
        detail:
          "Mission, outils, droits en lecture et en écriture, niveau d'autonomie, escalades, garde-fous, critères d'évaluation.",
        href: "/outils/agent-designer",
        lien: "Atelier de conception d'agent",
      },
      {
        titre: "Enfin, écrire le plan d'évaluation avant le code",
        detail:
          "Golden set annoté par les experts métier, cas adverses, seuils de passage chiffrés. Chez Voxalis : 600 cas historiques et 120 cas adverses.",
        href: "/templates/plan-evaluation",
        lien: "Plan d'évaluation",
      },
    ],
    ressources: [
      {
        type: "phase",
        href: "/methode/reinventer",
        titre: "Phase 3 — Réinventer",
        usage:
          "Le jalon G3 : une cible validée par le métier, pas par l'équipe projet.",
      },
      {
        type: "phase",
        href: "/methode/concevoir",
        titre: "Phase 4 — Concevoir",
        usage: "Les livrables de conception attendus au jalon G4.",
      },
      {
        type: "framework",
        href: "/frameworks/reinvention-zero-base",
        titre: "Réinvention base zéro",
        usage: "Reconstruire au lieu d'automatiser l'existant.",
      },
      {
        type: "framework",
        href: "/frameworks/niveaux-autonomie",
        titre: "Niveaux d'autonomie L0 à L5",
        usage: "Fixer et justifier le niveau de chaque action.",
      },
      {
        type: "framework",
        href: "/frameworks/topologies-multi-agents",
        titre: "Topologies multi-agents",
        usage:
          "Choisir une topologie seulement si plusieurs agents sont justifiés.",
      },
      {
        type: "template",
        href: "/templates/dossier-architecture-multi-agents",
        titre: "Dossier d'architecture multi-agents",
        usage: "Le document que la DSI et la sécurité approuvent.",
      },
      {
        type: "template",
        href: "/templates/checklist-securite-conformite",
        titre: "Checklist sécurité et conformité",
        usage:
          "Les exigences à intégrer dès la conception, pas en fin de projet.",
      },
      {
        type: "guide",
        href: "/guides/concevoir-un-agent",
        titre: "Concevoir un agent",
        usage: "La démarche complète, de la mission aux outils.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "developper-et-industrialiser",
    intitule: "Je développe et j'industrialise",
    commencer:
      "Construisez le golden set et une tranche verticale de bout en bout avant d'élargir : aucune modification de prompt sans évaluation qui dise si elle est meilleure.",
    etapes: [
      {
        titre: "D'abord, construire les évaluations",
        detail:
          "Golden set, cas adverses, évaluations automatisées rejouées à chaque modification. Elles sont la spécification exécutable de l'agent.",
        href: "/guides/construire-les-evals",
        lien: "Construire les evals",
      },
      {
        titre: "Ensuite, planifier les sprints sur une tranche verticale",
        detail:
          "Un motif traité de bout en bout avant d'en ajouter un second. Chez Voxalis : « perte de synchronisation de l'accès », en 4 semaines.",
        href: "/templates/plan-de-sprint",
        lien: "Plan de sprint",
      },
      {
        titre: "Puis mener le pilote en conditions réelles",
        detail:
          "Mode fantôme d'abord, puis actions réelles sur un catalogue restreint. Mesurer contre la référence signée, pas contre une impression.",
        href: "/guides/reussir-le-pilote",
        lien: "Réussir le pilote",
      },
      {
        titre: "Passer la checklist de mise en production",
        detail:
          "Supervision, journalisation, gestion des incidents, droits, plan de retour arrière. Chaque point a un responsable nommé côté client.",
        href: "/templates/checklist-mise-en-production",
        lien: "Checklist de mise en production",
      },
      {
        titre: "Enfin, écrire le runbook d'exploitation",
        detail:
          "Ce que fait l'équipe d'exploitation quand la qualité se dégrade, quand un outil tombe, quand un client se plaint d'une action d'agent.",
        href: "/templates/runbook-agent",
        lien: "Runbook d'agent",
      },
    ],
    ressources: [
      {
        type: "phase",
        href: "/methode/construire",
        titre: "Phase 5 — Construire",
        usage: "Le jalon G5 « Preuve de valeur » et ses critères.",
      },
      {
        type: "phase",
        href: "/methode/industrialiser",
        titre: "Phase 6 — Industrialiser",
        usage: "Le jalon G6 « Prêt pour l'échelle ».",
      },
      {
        type: "framework",
        href: "/frameworks/eval-driven-development",
        titre: "Eval-driven development",
        usage:
          "Développer contre des évaluations, comme on développe contre des tests.",
      },
      {
        type: "framework",
        href: "/frameworks/agentops",
        titre: "AgentOps",
        usage:
          "Exploiter des agents en production : supervision, incidents, évolutions.",
      },
      {
        type: "template",
        href: "/templates/checklist-llmops",
        titre: "Checklist LLMOps",
        usage: "Versions, évaluations continues, coûts, observabilité.",
      },
      {
        type: "guide",
        href: "/guides/passer-en-production",
        titre: "Passer en production",
        usage: "Les étapes et les signatures nécessaires.",
      },
      {
        type: "section",
        href: "/standards",
        titre: "Standards d'ingénierie",
        usage:
          "Le niveau attendu sur le code, les évaluations et l'exploitation.",
      },
      {
        type: "section",
        href: "/savoir/mode-fantome",
        titre: "Pattern : le mode fantôme",
        usage:
          "Comparer l'agent aux humains sur le flux réel avant la première action.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "preparer-une-restitution",
    intitule: "Je prépare une restitution",
    commencer:
      "Écrivez d'abord la conclusion en une phrase et la décision attendue du comité : chaque page du support doit servir à les justifier.",
    etapes: [
      {
        titre: "D'abord, structurer le message",
        detail:
          "Conclusion d'abord, arguments groupés et sans recouvrement, puis les faits. Situation, complication, question, réponse.",
        href: "/frameworks/pyramide-scqa",
        lien: "Pyramide et SCQA",
      },
      {
        titre: "Ensuite, l'adapter à l'auditoire",
        detail:
          "Ce que le dirigeant doit décider, ce qu'il craint, le chiffre qu'il retiendra. Testez le message avec le propriétaire du processus avant le comité.",
        href: "/guides/dialoguer-avec-les-dirigeants",
        lien: "Dialoguer avec les dirigeants",
      },
      {
        titre: "Puis construire le support",
        detail:
          "Une page de décision en tête, l'avancement contre le plan, la valeur contre la référence, les risques et les arbitrages demandés.",
        href: "/templates/support-copil",
        lien: "Support de COPIL",
      },
      {
        titre: "Enfin, préparer la séance elle-même",
        detail:
          "Pré-entretiens avec les membres clés, ordre du jour orienté décisions, relevé de décisions envoyé le jour même.",
        href: "/guides/piloter-copil",
        lien: "Piloter un COPIL",
      },
    ],
    ressources: [
      {
        type: "framework",
        href: "/frameworks/communication-executive",
        titre: "Communication exécutive",
        usage:
          "Dire l'essentiel en deux minutes et tenir la question suivante.",
      },
      {
        type: "framework",
        href: "/frameworks/mece",
        titre: "MECE",
        usage:
          "Vérifier que les arguments ne se recouvrent pas et ne laissent pas de trou.",
      },
      {
        type: "framework",
        href: "/frameworks/mesure-impact",
        titre: "Mesure d'impact",
        usage: "Présenter un résultat que la finance peut confirmer.",
      },
      {
        type: "template",
        href: "/templates/tableau-de-bord-valeur",
        titre: "Tableau de bord de valeur",
        usage: "Référence, cible et réalisé, avec leur méthode de mesure.",
      },
      {
        type: "section",
        href: "/savoir/demo-trompeuse",
        titre: "Anti-pattern : la démo trompeuse",
        usage:
          "Ne pas montrer en séance ce que le système ne tient pas en production.",
      },
      {
        type: "section",
        href: "/savoir/valeur-declarative",
        titre: "Anti-pattern : la valeur déclarative",
        usage:
          "Pourquoi un gain annoncé sans référence affaiblit toute la restitution.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "transferer-la-solution",
    intitule: "Je transfère la solution au client",
    commencer:
      "Ouvrez le plan de transfert dès l'industrialisation : nommez qui, côté client, opère, évalue et fait évoluer chaque agent, et faites-le pratiquer avant votre départ.",
    etapes: [
      {
        titre: "D'abord, établir le plan de transfert",
        detail:
          "Pour chaque compétence (exploiter, évaluer, modifier un prompt, ajouter un outil) : un responsable client, une date, une preuve de maîtrise.",
        href: "/templates/plan-transfert",
        lien: "Plan de transfert",
      },
      {
        titre: "Ensuite, remettre le registre des agents à jour",
        detail:
          "Chaque agent avec son propriétaire, son niveau d'autonomie, ses outils, ses évaluations et sa date de dernière revue.",
        href: "/templates/registre-agents",
        lien: "Registre des agents",
      },
      {
        titre: "Puis installer la gouvernance IA",
        detail:
          "Un comité qui décide des élargissements d'autonomie et des nouveaux agents. Chez Voxalis, coprésidé par le métier et la DSI, chaque mois.",
        href: "/frameworks/gouvernance-ia",
        lien: "Gouvernance de l'IA",
      },
      {
        titre: "Mesurer la valeur réalisée",
        detail:
          "Le réalisé contre la référence signée, avec la méthode de mesure ; planifier les mesures à +3 et +6 mois.",
        href: "/templates/tableau-de-bord-valeur",
        lien: "Tableau de bord de valeur",
      },
      {
        titre: "Enfin, clore la mission et capitaliser",
        detail:
          "Critères de sortie atteints, engagements restants, retour d'expérience partagé avec le pool.",
        href: "/templates/cloture-mission",
        lien: "Clôture de mission",
      },
    ],
    ressources: [
      {
        type: "phase",
        href: "/methode/perenniser",
        titre: "Phase 7 — Pérenniser",
        usage:
          "Le jalon G7 « Client autonome » : le vrai critère de fin de mission.",
      },
      {
        type: "framework",
        href: "/frameworks/agentops",
        titre: "AgentOps",
        usage: "Ce que l'équipe client doit savoir faire seule.",
      },
      {
        type: "framework",
        href: "/frameworks/pilotage-adoption",
        titre: "Pilotage de l'adoption",
        usage: "Les indicateurs d'usage à transmettre avec la solution.",
      },
      {
        type: "template",
        href: "/templates/runbook-agent",
        titre: "Runbook d'agent",
        usage: "Les procédures d'exploitation remises à l'équipe client.",
      },
      {
        type: "template",
        href: "/templates/rex-mission",
        titre: "Retour d'expérience de mission",
        usage: "Le bilan interne à produire avant de quitter le client.",
      },
      {
        type: "guide",
        href: "/guides/capitaliser",
        titre: "Capitaliser",
        usage: "Transformer la mission en savoir réutilisable par le pool.",
      },
      {
        type: "section",
        href: "/savoir/dependance-fde",
        titre: "Anti-pattern : la dépendance au FDE",
        usage: "Les signes qu'un client ne pourra pas se passer de vous.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "chercher-un-template",
    intitule: "Je cherche un template",
    commencer:
      "Partez de la phase où vous êtes : chaque page de phase liste ses livrables, obligatoires ou non, avec leur template. Lisez l'exemple rempli avant de copier le vierge.",
    etapes: [
      {
        titre: "D'abord, repérer votre phase",
        detail:
          "La vue d'ensemble de la méthode renvoie vers chaque phase, ses livrables et ses templates.",
        href: "/methode",
        lien: "Le Parcours AI-Native",
      },
      {
        titre: "Ensuite, chercher dans la bibliothèque",
        detail:
          "Filtrez par phase, type ou format. Les templates transverses (COPIL, point hebdomadaire, RAID) servent à toutes les phases.",
        href: "/templates",
        lien: "Bibliothèque de templates",
      },
      {
        titre: "Puis lire l'exemple Voxalis avant de remplir",
        detail:
          "Chaque template contient un exemple entièrement rempli : il montre le niveau d'exigence attendu. La fiche agent est la page de référence.",
        href: "/templates/fiche-agent",
        lien: "Fiche agent (exemple de référence)",
      },
      {
        titre: "Enfin, activer votre mission",
        detail:
          "Avec une mission active, les templates se pré-remplissent (client, sponsor, domaine, date) et les résultats d'ateliers s'y enregistrent.",
        href: "/missions",
        lien: "Mes missions",
      },
    ],
    ressources: [
      {
        type: "template",
        href: "/templates/charte-de-mission",
        titre: "Charte de mission",
        usage: "Le premier livrable obligatoire de toute mission.",
      },
      {
        type: "template",
        href: "/templates/business-case",
        titre: "Business case",
        usage: "Le chiffrage que la finance valide au jalon G2.",
      },
      {
        type: "template",
        href: "/templates/support-copil",
        titre: "Support de COPIL",
        usage: "Transverse : chaque comité de pilotage.",
      },
      {
        type: "template",
        href: "/templates/point-hebdo",
        titre: "Point hebdomadaire",
        usage: "Transverse : le suivi de chaque semaine.",
      },
      {
        type: "template",
        href: "/templates/registre-raid",
        titre: "Registre RAID",
        usage: "Transverse : risques, actions, issues, décisions.",
      },
      {
        type: "section",
        href: "/outils",
        titre: "Ateliers interactifs",
        usage:
          "Quand un livrable se construit mieux en atelier qu'à partir d'une page vierge.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "rencontrer-une-difficulte",
    intitule: "Je rencontre une difficulté",
    commencer:
      "Nommez le symptôme par écrit et comparez-le aux anti-patterns : la plupart des missions en difficulté répètent un échec connu, qui a une sortie connue.",
    etapes: [
      {
        titre: "D'abord, établir le diagnostic de la mission",
        detail:
          "Valeur, sponsor, adoption, technique : où est le décrochage ? Le guide propose un ordre de traitement et des formulations pour en parler au client.",
        href: "/guides/redresser-mission",
        lien: "Redresser une mission",
      },
      {
        titre: "Ensuite, chercher l'anti-pattern correspondant",
        detail:
          "Chaque fiche décrit les symptômes, les causes et la façon d'en sortir. Si votre cas n'y figure pas, il mérite une fiche.",
        href: "/savoir",
        lien: "Savoir terrain",
      },
      {
        titre: "Puis traiter les résistances si elles sont en cause",
        detail:
          "Distinguer l'inquiétude légitime de l'opposition, et répondre à chacune différemment.",
        href: "/guides/gerer-resistances",
        lien: "Gérer les résistances",
      },
      {
        titre: "Consulter les situations délicates du métier",
        detail:
          "Demande hors périmètre, conflit avec le client, pression sur un chiffre, sujet éthique : la conduite à tenir et quand alerter.",
        href: "/metier",
        lien: "Le métier FDE",
      },
      {
        titre: "Enfin, tracer et escalader",
        detail:
          "Inscrire le risque avec un propriétaire et une échéance ; s'il menace un critère d'arrêt, le porter au sponsor avant le prochain COPIL.",
        href: "/templates/registre-raid",
        lien: "Registre RAID",
      },
    ],
    ressources: [
      {
        type: "guide",
        href: "/guides/posture-fde",
        titre: "La posture du FDE",
        usage: "Dire les choses au client sans perdre sa confiance.",
      },
      {
        type: "guide",
        href: "/guides/piloter-copil",
        titre: "Piloter un COPIL",
        usage: "Mettre un arbitrage difficile à l'ordre du jour.",
      },
      {
        type: "framework",
        href: "/frameworks/analyse-causes-racines",
        titre: "Analyse des causes racines",
        usage: "Ne pas traiter le symptôme à la place de la cause.",
      },
      {
        type: "framework",
        href: "/frameworks/modele-influence",
        titre: "Modèle d'influence",
        usage: "Quatre leviers pour faire évoluer un comportement.",
      },
      {
        type: "section",
        href: "/savoir/sponsor-fantome",
        titre: "Anti-pattern : le sponsor fantôme",
        usage: "Le sponsor ne vient plus et ne tranche plus.",
      },
      {
        type: "section",
        href: "/savoir/poc-purgatoire",
        titre: "Anti-pattern : le purgatoire des POC",
        usage: "Le prototype marche mais n'avance pas vers la production.",
      },
      {
        type: "section",
        href: "/savoir/humain-oublie",
        titre: "Anti-pattern : l'humain oublié",
        usage: "La solution fonctionne et personne ne l'utilise.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "partager-un-retour-d-experience",
    intitule: "Je partage un retour d'expérience",
    commencer:
      "Ouvrez l'assistant de contribution : il impose la structure, la liste de contrôle d'anonymisation et produit le fichier prêt pour la pull request.",
    etapes: [
      {
        titre: "D'abord, choisir ce qui vaut d'être partagé",
        detail:
          "Une décision qui a changé le cours de la mission, une erreur évitable, une pratique qui a marché deux fois : pas un récit complet.",
        href: "/guides/capitaliser",
        lien: "Capitaliser",
      },
      {
        titre: "Ensuite, rédiger la fiche avec l'assistant",
        detail:
          "Retour d'expérience, pattern ou anti-pattern : chaque section a sa consigne. Le journal de la mission active peut pré-remplir un retour d'expérience.",
        href: "/savoir/contribuer",
        lien: "Assistant de contribution",
      },
      {
        titre: "Puis comparer avec un retour d'expérience publié",
        detail:
          "Niveau de détail et ton : le REX Voxalis ; anonymisation : le REX assurance, rédigé sans nom ni chiffre identifiant.",
        href: "/savoir/rex-voxalis-sav-augmente",
        lien: "REX : le SAV augmenté",
      },
      {
        titre: "Enfin, proposer la fiche par pull request",
        detail:
          "Déposer le fichier dans content/savoir, valider avec npm run content, ouvrir la pull request et demander la relecture d'un pair.",
        href: "/savoir/contribuer",
        lien: "Marche à suivre",
      },
    ],
    ressources: [
      {
        type: "section",
        href: "/savoir/rex-exemple-assurance-sinistres",
        titre: "REX : gestion de sinistres chez un assureur",
        usage: "Le modèle d'anonymisation : un retour d'expérience rédigé sans nom ni chiffre identifiant, sur une mission réorientée.",
      },
      {
        type: "phase",
        href: "/methode/perenniser",
        titre: "Phase 7 — Pérenniser",
        usage:
          "Capitaliser fait partie du jalon G7, pas d'un après-mission facultatif.",
      },
      {
        type: "template",
        href: "/templates/rex-mission",
        titre: "Retour d'expérience de mission",
        usage:
          "Le bilan complet, interne, dont la fiche de savoir est un extrait anonymisé.",
      },
      {
        type: "template",
        href: "/templates/cloture-mission",
        titre: "Clôture de mission",
        usage: "Le moment naturel pour rédiger la fiche.",
      },
      {
        type: "section",
        href: "/savoir",
        titre: "Savoir terrain",
        usage:
          "Vérifier qu'une fiche proche n'existe pas déjà, et la compléter plutôt.",
      },
      {
        type: "section",
        href: "/missions",
        titre: "Mes missions",
        usage:
          "Le journal de décisions et d'apprentissages, matière première du retour d'expérience.",
      },
    ],
  },
];
