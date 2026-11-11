import type { PhaseId } from "./types";

/**
 * Questions à poser au client, phase par phase et par interlocuteur.
 * Elles sont formulées telles qu'on les pose, pour faire émerger des faits
 * (un cas, un chiffre, un nom, une date) plutôt que des opinions.
 * Données seules : l'affichage est fait dans les pages de phase.
 */

export type GroupeQuestions = {
  interlocuteur: string;
  /** Ce que l'on cherche à apprendre auprès de cet interlocuteur. */
  objectif: string;
  questions: string[];
};

export const QUESTIONS_CLIENT: Record<PhaseId, GroupeQuestions[]> = {
  /* ---------------------------------------------------------------- */
  cadrer: [
    {
      interlocuteur: "Sponsor",
      objectif:
        "Le résultat métier attendu, son ampleur, son échéance, et ce que le sponsor est prêt à arbitrer lui-même.",
      questions: [
        "Quel chiffre voulez-vous voir bouger dans un an, et qui le mesure aujourd'hui ?",
        "Si nous ne faisons rien, que se passe-t-il dans dix-huit mois, et qui en paie le prix ?",
        "Qu'est-ce qui a déjà été tenté sur ce sujet, et pourquoi cela n'a-t-il pas suffi ?",
        "Quelles décisions pouvez-vous prendre seul, et lesquelles remontent au comité de direction ?",
        "Dans quelles conditions préféreriez-vous que nous arrêtions la mission ?",
      ],
    },
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "Son engagement réel (temps, personnes détachées, accès au terrain) et sa propre lecture du problème.",
      questions: [
        "Qui, dans votre équipe, peut travailler avec nous deux jours par semaine dès le mois prochain ?",
        "Où le travail se bloque-t-il le plus souvent, et comment le savez-vous ?",
        "Qu'est-ce qui, dans votre organisation actuelle, ne doit en aucun cas changer ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "Les délais d'accès réalistes et les contraintes techniques qui conditionnent le calendrier.",
      questions: [
        "Combien de temps faut-il, chez vous, pour obtenir un accès en lecture à une base de production, et qui le signe ?",
        "Quels environnements de test et quelles données anonymisées pouvons-nous utiliser dès la semaine prochaine ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif:
        "Les lignes rouges connues avant d'engager la moindre conception.",
      questions: [
        "Quelles règles internes encadrent déjà l'usage de l'IA, et qui les a validées ?",
        "Quelles données ne doivent jamais sortir de votre périmètre, quel que soit le projet ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  diagnostiquer: [
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "Le processus tel qu'il est réellement opéré, ses volumes, ses motifs dominants et la fiabilité des indicateurs existants.",
      questions: [
        "Montrez-moi le dernier cas que vous avez traité, du début à la fin.",
        "Combien de cas par mois, et quelle part se règle sans escalade ? D'où vient ce chiffre ?",
        "Quels sont les trois motifs qui reviennent le plus, et combien de temps prend chacun ?",
        "Quels indicateurs regardez-vous chaque semaine, et lesquels ne regardez-vous plus ?",
      ],
    },
    {
      interlocuteur: "Terrain",
      objectif:
        "Le travail réel : les attentes entre étapes, les ressaisies et les contournements que personne ne documente.",
      questions: [
        "Qu'avez-vous fait hier matin entre 9 h et 11 h ? Montrez-moi les écrans.",
        "Quand vous attendez quelqu'un pour avancer, de qui s'agit-il, et combien de temps attendez-vous ?",
        "Quel fichier ou quelle astuce personnelle utilisez-vous que l'outil officiel ne permet pas ?",
        "Quel type de cas vous fait perdre le plus de temps, et pourquoi ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "Où se trouve l'information, ce qui est accessible par API, et ce que valent réellement les données.",
      questions: [
        "Dans quels systèmes se trouve l'information nécessaire pour traiter un cas, et lesquels exposent une API ?",
        "Pouvons-nous extraire douze mois d'historique ? Qui doit le valider, et en combien de temps ?",
        "Quelle part de la base de connaissances est à jour, et qui en est responsable ?",
      ],
    },
    {
      interlocuteur: "Finance",
      objectif:
        "La base de coût et la référence que la finance acceptera de signer comme point de départ.",
      questions: [
        "Comment calculez-vous aujourd'hui le coût complet d'un cas traité, et qu'y a-t-il dedans ?",
        "Quelle référence accepteriez-vous de signer comme point de départ de la mesure, et sur quelle période ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  cibler: [
    {
      interlocuteur: "Sponsor",
      objectif:
        "Les critères d'arbitrage, l'horizon de temps et l'appétit pour le risque.",
      questions: [
        "Entre un résultat visible en six mois et une valeur deux fois plus grande en dix-huit mois, que choisissez-vous ?",
        "Quel niveau d'erreur d'un agent seriez-vous prêt à défendre devant vos clients ?",
        "Que doit montrer le COPIL dans trois mois pour que le comité de direction continue à soutenir le projet ?",
      ],
    },
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "La valeur réelle de chaque opportunité et la capacité de l'organisation à absorber le changement.",
      questions: [
        "Si ce cas d'usage fonctionnait demain, quel indicateur bougerait, et de combien selon vous ?",
        "Combien de changements simultanés votre équipe peut-elle absorber sans dégrader le service ?",
        "Lequel de ces cas d'usage vos équipes attendent-elles vraiment, et lequel redoutent-elles ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "La faisabilité réelle de chaque opportunité : données, intégrations, équipes à mobiliser.",
      questions: [
        "Pour ce cas d'usage, les données existent-elles, sont-elles fiables, et à quelle fréquence sont-elles mises à jour ?",
        "Quelles intégrations faut-il construire, et quelles équipes faut-il mobiliser pour cela ?",
      ],
    },
    {
      interlocuteur: "Finance",
      objectif:
        "Les hypothèses du business case que la finance acceptera, et la façon dont les gains seront captés.",
      questions: [
        "Quelle part du gain d'efficacité considérez-vous comme réellement captable, et par quel mécanisme : non-remplacement, sous-traitance, réaffectation ?",
        "Quel délai de retour sur investissement votre comité d'investissement exige-t-il ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif: "Les opportunités à écarter ou à encadrer d'emblée.",
      questions: [
        "Parmi ces cas d'usage, lesquels touchent des données personnelles ou une décision qui a un effet sur un client ?",
        "Lequel vous inquiète le plus, et pourquoi ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  reinventer: [
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "Le résultat attendu du processus et ce qui peut être remis en cause sans tabou.",
      questions: [
        "Si vous repartiez d'une feuille blanche, quel résultat le client doit-il obtenir, et en combien de temps ?",
        "Quelle étape de ce processus n'existe que parce qu'un outil ou une organisation l'impose ?",
        "Quelles décisions doivent rester humaines, quoi qu'il arrive, et pourquoi ?",
      ],
    },
    {
      interlocuteur: "Terrain",
      objectif:
        "Ce que les personnes veulent garder, déléguer et contrôler, et ce dont elles ont besoin pour faire confiance.",
      questions: [
        "Quelle partie de votre travail aimeriez-vous ne plus jamais faire ?",
        "Quelle partie ne voudriez-vous confier à personne d'autre, et pourquoi ?",
        "Pour accepter la proposition d'un agent, que vous faudrait-il voir à l'écran ?",
      ],
    },
    {
      interlocuteur: "RH",
      objectif:
        "Les engagements sociaux, l'évolution des métiers et les instances à associer.",
      questions: [
        "Quels engagements sur l'emploi la direction est-elle prête à prendre, et par écrit ?",
        "Quelles instances représentatives faut-il informer ou consulter, et dans quel délai ?",
        "Quelles compétences les futurs superviseurs devront-ils acquérir, et comment les reconnaîtrez-vous ?",
      ],
    },
    {
      interlocuteur: "Sponsor",
      objectif:
        "La validation de la cible et de ce qu'elle implique pour l'organisation.",
      questions: [
        "Qui sera responsable du résultat quand un agent aura agi seul ?",
        "Êtes-vous prêt à modifier l'organisation et les rôles, et pas seulement les outils ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif:
        "Les conditions de contrôle acceptables pour les voies traitées sans intervention humaine.",
      questions: [
        "Pour les cas traités sans intervention humaine, quel contrôle a posteriori vous paraîtrait suffisant ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  concevoir: [
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "Les règles métier, les exceptions et les critères de justesse qui alimenteront le golden set.",
      questions: [
        "Comment un expert sait-il qu'un diagnostic est juste ? Montrez-moi trois cas où il ne l'était pas.",
        "Quelles exceptions un débutant rate-t-il systématiquement ?",
        "Qui annotera les cas de référence, combien d'heures peut-il y consacrer, et qui tranche un désaccord ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "Les outils exposables aux agents, les droits associés et les contraintes d'architecture et d'exploitation.",
      questions: [
        "Pour chaque système, quelle action en écriture accepteriez-vous d'exposer à un agent, et avec quelle limite ?",
        "Quels standards d'hébergement, d'architecture et de journalisation s'imposent à un nouveau composant ?",
        "Qui interviendra à 3 h du matin si le système dysfonctionne ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif:
        "Les exigences de sécurité, de protection des données et de traçabilité à intégrer dès la conception.",
      questions: [
        "Quelles données personnelles l'agent verra-t-il, et sur quelle base légale ?",
        "Quelle trace d'une décision d'agent vous faut-il pour un audit, et pendant combien de temps ?",
        "Quel scénario d'abus vous inquiète le plus : injection de prompt, fuite de données, action non autorisée ?",
        "Votre juridique a-t-il qualifié cette solution au regard des niveaux de risque de l'EU AI Act ?",
      ],
    },
    {
      interlocuteur: "Sponsor",
      objectif:
        "Les seuils d'acceptation et la règle d'élargissement de l'autonomie.",
      questions: [
        "Quel taux d'erreur, sur quel type de cas, rendrait la solution inacceptable ?",
        "Qui signera le passage de l'approbation humaine à l'autonomie encadrée pour chaque action, et sur quelles preuves ?",
      ],
    },
    {
      interlocuteur: "Finance",
      objectif:
        "Le plafond de coût d'exploitation à respecter dans la conception.",
      questions: [
        "Au-delà de quel coût par cas traité la solution cesse-t-elle d'être rentable ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  construire: [
    {
      interlocuteur: "Terrain",
      objectif:
        "L'usage réel, les frictions et le niveau de confiance accordé aux agents pendant le pilote.",
      questions: [
        "Montrez-moi le dernier cas où vous avez corrigé l'agent. Qu'aurait-il dû faire ?",
        "À quel moment avez-vous refait le travail vous-même au lieu de vérifier la proposition ?",
        "Combien de temps vous prend la vérification d'une proposition ?",
        "Qu'est-ce qui vous ferait arrêter d'utiliser l'outil demain ?",
      ],
    },
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "Les écarts entre résultats mesurés et attendus, et les conditions de l'élargissement.",
      questions: [
        "Sur les cas du mode fantôme, où l'agent et vos équipes divergent-ils, et qui avait raison ?",
        "Quel résultat du pilote vous suffirait pour généraliser ?",
        "Qu'est-ce qui a changé dans l'organisation du plateau depuis le début du pilote ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "La robustesse technique en conditions réelles et la capacité des équipes à reprendre le système.",
      questions: [
        "Quels incidents ou lenteurs avez-vous observés sur les intégrations cette semaine ?",
        "Que faudrait-il pour que vos équipes puissent reprendre le code et les évaluations sans nous ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif: "Le respect des garde-fous observé en conditions réelles.",
      questions: [
        "Avez-vous relu les traces des actions de l'agent ? Qu'est-ce qui vous a surpris ?",
      ],
    },
    {
      interlocuteur: "Finance",
      objectif:
        "La comparabilité de la mesure du pilote avec la référence signée.",
      questions: [
        "La mesure du pilote suit-elle exactement la méthode de la référence que vous avez signée ? Sinon, en quoi diffère-t-elle ?",
      ],
    },
    {
      interlocuteur: "Sponsor",
      objectif: "La lecture que le sponsor fait de la preuve de valeur.",
      questions: [
        "Quel chiffre du pilote présenteriez-vous au comité de direction, et lequel vous inquiète ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  industrialiser: [
    {
      interlocuteur: "Sponsor",
      objectif:
        "Le rythme de généralisation et les conditions d'arrêt d'une vague.",
      questions: [
        "Qu'est-ce qui doit être vrai avant de lancer la vague suivante ?",
        "Qui peut arrêter un déploiement, et sur quel signal ?",
      ],
    },
    {
      interlocuteur: "Propriétaire du processus et managers",
      objectif:
        "La capacité des équipes à absorber le changement, et les relais locaux sur lesquels s'appuyer.",
      questions: [
        "Quels managers de proximité porteront le changement, et lesquels le freinent ?",
        "À partir de quand les nouveaux arrivants seront-ils formés directement au nouveau mode de travail ?",
        "Quels indicateurs d'adoption regarderez-vous chaque semaine, et qui les relève ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "L'exploitabilité : supervision, gestion des incidents, circuit des modifications.",
      questions: [
        "Qui reçoit l'alerte quand la qualité d'un agent se dégrade, et que fait-il dans la première heure ?",
        "Comment une modification de prompt ou d'outil passe-t-elle en production chez vous, et qui la valide ?",
        "Que se passe-t-il si le modèle utilisé change de version ou devient indisponible ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif:
        "Les conditions de mise en production et le contrôle continu des agents.",
      questions: [
        "Quels contrôles devez-vous voir avant de signer la mise en production ?",
        "À quelle fréquence voulez-vous revoir les droits et les actions des agents ?",
      ],
    },
    {
      interlocuteur: "Finance",
      objectif: "La maîtrise des coûts récurrents.",
      questions: [
        "Quel budget mensuel d'exploitation, et quel seuil de dérive doit déclencher une alerte ?",
      ],
    },
    {
      interlocuteur: "RH",
      objectif: "L'ancrage des nouveaux rôles dans l'organisation.",
      questions: [
        "Les fiches de poste, les objectifs et les parcours de formation reflètent-ils déjà les nouveaux rôles ?",
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  perenniser: [
    {
      interlocuteur: "Sponsor",
      objectif:
        "La valeur réalisée, telle que le sponsor la défendra, et l'étape suivante.",
      questions: [
        "Le chiffre que vous vouliez voir bouger a-t-il bougé, et qui l'a mesuré ?",
        "Quel domaine transformeriez-vous ensuite, et avec quelle équipe interne ?",
      ],
    },
    {
      interlocuteur: "Propriétaire du processus et métier",
      objectif:
        "L'autonomie réelle de l'équipe client, prouvée par des faits récents.",
      questions: [
        "Qui, dans votre équipe, a modifié seul un agent ce mois-ci ? Montrez-moi la dernière modification.",
        "Sur quel sujet nous appelleriez-vous encore, et que faudrait-il pour ne plus avoir à le faire ?",
        "Quelles évolutions attendez-vous dans six mois, et qui les priorisera ?",
      ],
    },
    {
      interlocuteur: "IT et données",
      objectif:
        "La maîtrise des évaluations, des incidents et des évolutions par l'équipe d'exploitation.",
      questions: [
        "Quand avez-vous rejoué les évaluations pour la dernière fois, et qu'ont-elles montré ?",
        "Comment le golden set est-il enrichi avec les nouveaux cas rencontrés ?",
      ],
    },
    {
      interlocuteur: "Finance",
      objectif:
        "La confirmation du réalisé contre la référence et la captation effective des gains.",
      questions: [
        "Êtes-vous prêt à confirmer le réalisé contre la référence signée, et à quelle date ?",
        "Où les gains apparaissent-ils dans le budget de l'année prochaine ?",
      ],
    },
    {
      interlocuteur: "Terrain",
      objectif:
        "Le travail réel après la transformation, y compris ce qui s'est dégradé.",
      questions: [
        "Qu'est-ce qui a changé dans votre journée depuis six mois, et qu'est-ce qui est moins bien ?",
        "Quel type de cas renvoyez-vous encore systématiquement à un collègue ?",
      ],
    },
    {
      interlocuteur: "Sécurité et conformité",
      objectif:
        "La gouvernance IA en fonctionnement, et pas seulement sur le papier.",
      questions: [
        "Le comité de gouvernance IA s'est-il réuni ce trimestre, et qu'a-t-il décidé ?",
      ],
    },
  ],
};
