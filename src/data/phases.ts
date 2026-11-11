import type { Phase, PhaseId } from "./types";

/**
 * Le Parcours AI-Native : la colonne vertébrale du portail.
 * Chaque phase dit quoi faire, avec quoi, ce qu'il faut produire,
 * et à quelles conditions on passe à la suite ou on s'arrête.
 */
export const phases: Phase[] = [
  /* ---------------------------------------------------------------- */
  {
    id: "cadrer",
    numero: 0,
    nom: "Cadrer",
    promesse: "Poser le bon problème",
    temps: "Stratégie",
    duree: "1 à 2 semaines",
    resume:
      "La demande arrive sous forme de solution : un chatbot, un agent, une plateforme. Le cadrage la transforme en problème métier chiffré, avec un sponsor qui arbitre, un périmètre tenable et une première hypothèse de réponse à tester.",
    objectifs: [
      "Reformuler la demande en un problème métier dont la résolution se mesure.",
      "Obtenir un sponsor qui décide, un propriétaire de processus qui s'engage et les accès nécessaires.",
      "Poser une hypothèse de réponse initiale et le plan d'analyse qui la confirmera ou l'infirmera.",
      "Fixer l'ambition, le périmètre, la gouvernance et les critères d'arrêt.",
    ],
    questions: [
      "Quel résultat métier le sponsor veut-il voir changer, de combien et pour quand ?",
      "Que se passe-t-il si l'on ne fait rien ? Qui en souffre et combien cela coûte-t-il ?",
      "Qui décide réellement, qui peut bloquer, qui vivra avec le résultat ?",
      "Qu'est-ce qui a déjà été tenté, et pourquoi cela n'a-t-il pas suffi ?",
      "À quelles conditions faudrait-il arrêter la mission ?",
    ],
    activites: [
      {
        id: "cadrer-0",
        titre: "Préparer la mission avant le premier jour",
        description:
          "Avant d'arriver chez le client : comprendre son activité, ses enjeux et ses initiatives IA passées ; obtenir les accès, les environnements et les données de test autorisées ; connaître les contraintes de sécurité et de conformité ; préparer le questionnaire de découverte, envoyé au propriétaire du processus à la signature de la charte. Un FDE qui attend ses accès pendant deux semaines a entamé la confiance du sponsor avant d'avoir commencé.",
        resultat: "Un dossier de préparation complet et des accès opérationnels au premier jour.",
        templates: ["dossier-preparation-mission"],
        guides: ["premiers-jours"],
      },
      {
        id: "cadrer-1",
        titre: "Reformuler la demande en problème",
        description:
          "Interroger le sponsor sur le résultat attendu, pas sur la solution demandée. Rédiger un énoncé du problème en une phrase : un indicateur, une ampleur, une échéance, des contraintes. Le faire valider mot pour mot.",
        resultat: "Un énoncé du problème signé par le sponsor.",
        frameworks: ["probleme-hypotheses", "mece"],
        guides: ["premiers-jours", "posture-fde"],
      },
      {
        id: "cadrer-2",
        titre: "Poser l'hypothèse de réponse initiale",
        description:
          "Construire l'arbre de questions et formuler, dès la première semaine, la réponse la plus probable avec ce que l'on sait. Lister pour chaque hypothèse l'analyse qui la tranchera. Une hypothèse fausse posée tôt fait gagner plus de temps qu'une absence d'hypothèse.",
        resultat: "Un arbre d'hypothèses et un plan d'analyse.",
        frameworks: ["probleme-hypotheses"],
        templates: ["arbre-hypotheses"],
      },
      {
        id: "cadrer-3",
        titre: "Cartographier les parties prenantes",
        description:
          "Identifier sponsor, propriétaire du processus, DSI, sécurité, juridique, RH, managers de proximité et représentants du personnel. Pour chacun : ce qu'il gagne, ce qu'il craint, son pouvoir de blocage. Planifier les premiers échanges.",
        resultat: "Une carte des parties prenantes et un plan d'engagement.",
        frameworks: ["cartographie-parties-prenantes"],
        templates: ["carte-parties-prenantes"],
      },
      {
        id: "cadrer-4",
        titre: "Fixer l'ambition et l'hypothèse de valeur",
        description:
          "Chiffrer un ordre de grandeur de la valeur visée à partir des volumes et des coûts connus. Ouvrir le registre de valeur avec cette première ligne, même imprécise : elle sera affinée, jamais remplacée par une déclaration.",
        resultat: "Une ambition chiffrée et la première ligne du registre de valeur.",
        frameworks: ["arbre-de-valeur", "registre-de-valeur", "regle-10-20-70"],
      },
      {
        id: "cadrer-5",
        titre: "Délimiter le périmètre et les critères d'arrêt",
        description:
          "Écrire ce qui est dans la mission et ce qui n'y est pas. Convenir avec le sponsor de deux ou trois signaux qui conduiraient à arrêter ou à réorienter : absence de données exploitables, valeur inférieure à un seuil, indisponibilité du métier.",
        resultat: "Un périmètre et des critères d'arrêt écrits.",
        templates: ["charte-de-mission"],
      },
      {
        id: "cadrer-6",
        titre: "Installer la gouvernance et les rituels",
        description:
          "Constituer l'équipe mixte, obtenir les détachements côté client, fixer le COPIL, le point hebdomadaire et le rituel quotidien. Demander dès maintenant les accès aux données, aux outils et au terrain : c'est le premier facteur de retard.",
        resultat: "Une charte de mission signée et un plan de mission partagé.",
        templates: ["charte-de-mission", "plan-de-mission", "registre-raid", "questionnaire-decouverte"],
        guides: ["piloter-copil"],
      },
    ],
    livrables: [
      {
        template: "charte-de-mission",
        titre: "Charte de mission",
        description: "Problème, ambition, périmètre, gouvernance, critères d'arrêt.",
        obligatoire: true,
      },
      {
        template: "arbre-hypotheses",
        titre: "Arbre d'hypothèses et plan d'analyse",
        description: "L'hypothèse de réponse initiale et ce qui la tranchera.",
        obligatoire: true,
      },
      {
        template: "carte-parties-prenantes",
        titre: "Cartographie des parties prenantes",
        description: "Positions, attentes, craintes et stratégie d'engagement.",
        obligatoire: true,
      },
      {
        template: "plan-de-mission",
        titre: "Plan de mission",
        description: "Phases, jalons, charges, rituels et prérequis client.",
        obligatoire: false,
      },
      {
        template: "dossier-preparation-mission",
        titre: "Dossier de préparation de mission",
        description: "Contexte, accès, environnements, contraintes de sécurité avant le premier jour.",
        obligatoire: false,
      },
    ],
    jalon: {
      code: "G0",
      nom: "Mandat clair",
      question: "Savons-nous quel problème nous résolvons, pour qui, et à quoi ressemble le succès ?",
      criteres: [
        "L'énoncé du problème est validé par le sponsor et mesurable.",
        "Un sponsor et un propriétaire de processus sont nommés et disponibles.",
        "L'hypothèse de valeur est chiffrée en ordre de grandeur.",
        "Le périmètre et les critères d'arrêt sont écrits.",
        "Les accès aux données, aux outils et au terrain sont obtenus ou datés.",
      ],
      arret: [
        "Le sponsor ne peut pas nommer l'indicateur qu'il veut voir bouger.",
        "Personne côté métier n'est détaché pour travailler avec l'équipe.",
        "La mission est une commande de démonstration sans intention de mise en production.",
      ],
    },
    fils: {
      valeur: "Ouvrir le registre de valeur avec une première hypothèse chiffrée et son propriétaire.",
      confiance:
        "Identifier les interlocuteurs sécurité, juridique et protection des données, et les contraintes connues.",
      adoption:
        "Repérer les populations dont le travail va changer et les relais (managers, représentants du personnel).",
    },
    roles: [
      { role: "Lead FDE", contribution: "Mène la reformulation avec le sponsor, tient la charte." },
      { role: "Sponsor", contribution: "Valide le problème, l'ambition et les critères d'arrêt." },
      {
        role: "Propriétaire du processus",
        contribution: "Ouvre le terrain, détache les experts métier.",
      },
      { role: "DSI et sécurité", contribution: "Donnent les accès et posent les contraintes." },
    ],
    pieges: [
      {
        titre: "Accepter la solution comme point de départ",
        parade:
          "Demander « pour obtenir quoi ? » jusqu'à atteindre un indicateur métier. Reformuler par écrit.",
      },
      {
        titre: "Un périmètre trop large pour prouver quoi que ce soit",
        parade: "Choisir un domaine, un segment, un flux. On élargira sur preuve.",
      },
      {
        titre: "Un sponsor qui signe mais n'arbitre pas",
        parade:
          "Tester sa disponibilité dès la première semaine avec une décision réelle à prendre.",
      },
      {
        titre: "Reporter la question des accès",
        parade: "Lister les accès nécessaires au jour 2 et les suivre comme un risque majeur.",
      },
    ],
    conseils: [
      "Passer au moins une demi-journée sur le terrain avant de signer la charte.",
      "Présenter l'hypothèse de réponse initiale comme une hypothèse, avec ce qui la ferait tomber.",
      "Écrire les critères d'arrêt quand tout le monde est encore de bonne humeur.",
    ],
    savoir: ["sponsor-fantome", "techno-d-abord", "binome-metier-fde"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "diagnostiquer",
    numero: 1,
    nom: "Diagnostiquer",
    promesse: "Comprendre le métier et mesurer le point de départ",
    temps: "Stratégie",
    duree: "3 à 4 semaines",
    resume:
      "Avant de proposer quoi que ce soit, comprendre comment le travail se fait réellement, où se perdent le temps et la qualité, et ce dont le client dispose pour changer : données, systèmes, compétences, gouvernance. Le diagnostic produit la référence chiffrée contre laquelle toute la valeur sera mesurée.",
    objectifs: [
      "Comprendre la stratégie, l'économie et les irritants du domaine.",
      "Mesurer le processus réel : volumes, délais, coûts, qualité, variantes.",
      "Évaluer la maturité AI-Native du client et la préparation de ses données et de son SI.",
      "Établir la référence chiffrée et confirmer ou infirmer les hypothèses de cadrage.",
    ],
    questions: [
      "Où le temps passe-t-il réellement : en traitement, en attente, en reprise ?",
      "Quelle part des cas est répétitive et documentée, quelle part exige du jugement ?",
      "Les données nécessaires existent-elles, sont-elles fiables et accessibles ?",
      "Qu'ont donné les initiatives IA précédentes, et pourquoi ?",
      "Qui, sur le terrain, connaît le mieux le travail réel ?",
    ],
    activites: [
      {
        id: "diagnostiquer-1",
        titre: "Mener les entretiens",
        description:
          "Quinze à vingt-cinq entretiens : direction, métier, terrain, IT, données, sécurité, RH. Chercher des faits et des exemples, pas des opinions. Synthétiser chaque entretien dans l'heure et tenir un journal des constats.",
        resultat: "Des constats étayés et triangulés.",
        templates: ["guide-entretien"],
        guides: ["mener-entretiens"],
      },
      {
        id: "diagnostiquer-2",
        titre: "Observer et cartographier le processus réel",
        description:
          "Passer du temps à côté de ceux qui font le travail. Cartographier les étapes, les passages de relais, les outils, les exceptions. Séparer le temps de traitement du temps d'attente : c'est presque toujours là que se trouve la valeur.",
        resultat: "Une fiche par processus, avec volumes et délais mesurés.",
        frameworks: ["observation-terrain", "cartographie-processus", "decomposition-taches"],
        templates: ["fiche-processus-existant"],
        outils: ["redesign-processus"],
      },
      {
        id: "diagnostiquer-3",
        titre: "Analyser les données opérationnelles",
        description:
          "Exploiter douze mois d'historique : distribution des motifs, des délais, des réouvertures, concentration des volumes. Vérifier les chiffres annoncés en entretien. Identifier la part répétitive et documentée du flux.",
        resultat: "La décomposition chiffrée des délais et des coûts.",
        frameworks: ["analyse-80-20", "analyse-causes-racines", "arbre-de-valeur"],
      },
      {
        id: "diagnostiquer-4",
        titre: "Évaluer la maturité AI-Native",
        description:
          "Noter le client sur sept dimensions, preuves à l'appui. Le profil compte plus que la moyenne : la dimension la plus faible fixe le rythme de la transformation.",
        resultat: "Un profil de maturité et les écarts à l'ambition.",
        frameworks: ["maturite-ai-native", "rewired-six-capacites"],
        templates: ["diagnostic-maturite"],
        outils: ["maturite"],
      },
      {
        id: "diagnostiquer-5",
        titre: "Passer en revue les données et le SI",
        description:
          "Inventorier les sources, leur qualité, leur fraîcheur, leurs droits d'accès. Cartographier les applications et leurs interfaces. Rendre un verdict par besoin : prêt, à préparer, bloquant.",
        resultat: "Une revue de préparation et un plan de remédiation.",
        frameworks: ["memoire-connaissance", "architecture-reference"],
        templates: ["revue-donnees-si"],
      },
      {
        id: "diagnostiquer-6",
        titre: "Établir la référence et restituer",
        description:
          "Fixer la valeur de départ de chaque indicateur, sa source et sa méthode de calcul, et la faire valider par la finance. Restituer le diagnostic en disant ce qui confirme et ce qui contredit les hypothèses de cadrage.",
        resultat: "Une référence signée et un diagnostic partagé en COPIL.",
        frameworks: ["mesure-impact", "pyramide-scqa"],
        templates: ["support-copil"],
      },
    ],
    livrables: [
      {
        template: "diagnostic-maturite",
        titre: "Synthèse du diagnostic de maturité",
        description: "Profil sur sept dimensions, preuves et recommandations.",
        obligatoire: true,
      },
      {
        template: "fiche-processus-existant",
        titre: "Fiches des processus existants",
        description: "Étapes, délais, volumes, irritants et exceptions mesurés.",
        obligatoire: true,
      },
      {
        template: "revue-donnees-si",
        titre: "Revue de préparation des données et du SI",
        description: "Sources, interfaces, contraintes et verdict par besoin.",
        obligatoire: true,
      },
      {
        template: "guide-entretien",
        titre: "Synthèses d'entretiens",
        description: "Constats, verbatims et faits par interlocuteur.",
        obligatoire: false,
      },
    ],
    jalon: {
      code: "G1",
      nom: "Diagnostic partagé",
      question: "Le client reconnaît-il son point de départ, chiffres à l'appui ?",
      criteres: [
        "La référence de chaque indicateur clé est mesurée et validée par la finance.",
        "Les causes des écarts sont identifiées et quantifiées.",
        "Le profil de maturité est partagé et non contesté.",
        "Les points bloquants sur les données et le SI sont connus et chiffrés.",
        "Les hypothèses de cadrage sont confirmées, amendées ou abandonnées.",
      ],
      arret: [
        "Les données nécessaires n'existent pas ou ne seront pas accessibles dans le délai de la mission.",
        "La valeur potentielle mesurée est très inférieure à l'ambition du cadrage.",
        "Le terrain n'est pas accessible et le travail réel reste inconnu.",
      ],
    },
    fils: {
      valeur: "Mesurer la référence de chaque indicateur et la faire signer par la finance.",
      confiance:
        "Recenser les données sensibles, les obligations réglementaires et les règles de sécurité applicables.",
      adoption:
        "Écouter le terrain : irritants, craintes, idées. Repérer les futurs relais du changement.",
    },
    roles: [
      { role: "FDE stratégie", contribution: "Conduit les entretiens et l'analyse de la valeur." },
      { role: "FDE ingénierie", contribution: "Analyse les données, le SI et les interfaces." },
      {
        role: "Experts métier détachés",
        contribution: "Expliquent le travail réel et valident les constats.",
      },
      { role: "Contrôle de gestion", contribution: "Valide les chiffres de référence." },
    ],
    pieges: [
      {
        titre: "Croire la procédure plutôt que la pratique",
        parade: "Observer le travail. Demander « montrez-moi le dernier cas que vous avez traité ».",
      },
      {
        titre: "Un diagnostic exhaustif et sans hiérarchie",
        parade: "Trois messages au plus, chacun chiffré, reliés au problème du cadrage.",
      },
      {
        titre: "Une référence floue",
        parade:
          "Pour chaque indicateur : valeur, période, source, formule. Faire signer avant de poursuivre.",
      },
      {
        titre: "Sous-estimer l'état des données",
        parade: "Ouvrir les données soi-même dès la deuxième semaine. Ne pas se fier aux schémas.",
      },
    ],
    conseils: [
      "Synthétiser chaque entretien dans l'heure : le lendemain, la moitié est perdue.",
      "Chercher la décomposition du délai avant toute autre analyse.",
      "Montrer les premiers constats au terrain avant de les montrer au COPIL.",
    ],
    savoir: ["valeur-declarative", "golden-set-jour-1"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "cibler",
    numero: 2,
    nom: "Cibler",
    promesse: "Choisir où créer de la valeur",
    temps: "Stratégie",
    duree: "2 à 3 semaines",
    resume:
      "Faire émerger les opportunités, puis en éliminer la plupart. Le résultat n'est pas une longue liste de cas d'usage mais un petit nombre de paris cohérents sur un domaine, chacun avec sa valeur, sa faisabilité, son niveau de solution et son business case.",
    objectifs: [
      "Identifier les opportunités à partir des irritants et des décisions du métier.",
      "Les noter en valeur et en faisabilité avec des critères explicites.",
      "Constituer un portefeuille équilibré et une feuille de route par vagues.",
      "Faire arbitrer le business case par le sponsor et la finance.",
    ],
    questions: [
      "Quelles opportunités se renforcent mutuellement sur un même flux ?",
      "Pour chacune, quel est le barreau le plus bas de l'échelle des solutions qui suffit ?",
      "Quelle part du gain potentiel sera réellement captée, et comment ?",
      "Que faut-il prouver en premier pour que le reste devienne crédible ?",
      "Qu'accepte-t-on explicitement de ne pas faire ?",
    ],
    activites: [
      {
        id: "cibler-1",
        titre: "Faire émerger les opportunités",
        description:
          "Animer un ou deux ateliers avec le métier, à partir des irritants mesurés au diagnostic et de la bibliothèque de cas d'usage du secteur. Viser la quantité, puis regrouper par flux.",
        resultat: "Une liste longue de cas d'usage décrits en une page.",
        frameworks: ["approche-par-domaine", "chaine-de-valeur", "deploy-reshape-invent"],
        templates: ["atelier-ideation", "carte-opportunites", "canevas-cas-usage"],
        guides: ["animer-atelier-ideation"],
      },
      {
        id: "cibler-2",
        titre: "Qualifier le niveau de solution",
        description:
          "Pour chaque cas d'usage, déterminer s'il relève d'une règle, d'un appel de modèle, d'un workflow, d'un agent ou d'un système multi-agents. Cette décision conditionne le coût, le délai et le risque.",
        resultat: "Un barreau de solution justifié par cas d'usage.",
        frameworks: ["faut-il-un-agent", "patterns-agentiques"],
        outils: ["agent-ou-pas"],
      },
      {
        id: "cibler-3",
        titre: "Chiffrer la valeur",
        description:
          "Volume, gain unitaire, taux de captation : chiffrer chaque cas d'usage en fourchette, avec la référence du diagnostic. Distinguer le gain potentiel du gain capté et dire par quel mécanisme il le sera.",
        resultat: "Une valeur chiffrée et sourcée par cas d'usage.",
        frameworks: ["arbre-de-valeur", "business-case-tco"],
        guides: ["chiffrer-la-valeur"],
        outils: ["business-case"],
      },
      {
        id: "cibler-4",
        titre: "Noter et prioriser",
        description:
          "Noter valeur et faisabilité sur des critères pondérés, en séance avec le métier et l'IT. Placer les cas sur la matrice, arbitrer, et écrire la raison de chaque cas écarté ou différé.",
        resultat: "Un portefeuille priorisé et argumenté.",
        frameworks: ["matrice-valeur-faisabilite", "portefeuille-horizons"],
        templates: ["portefeuille-priorise"],
        outils: ["priorisation"],
      },
      {
        id: "cibler-5",
        titre: "Qualifier les risques et la conformité",
        description:
          "Pour les cas retenus, qualifier le niveau de risque réglementaire, les données personnelles en jeu et l'impact social. Un cas d'usage à haut risque n'est pas exclu, mais son coût et son délai changent.",
        resultat: "Une qualification de risque par cas retenu.",
        frameworks: ["eu-ai-act", "ia-responsable"],
      },
      {
        id: "cibler-6",
        titre: "Construire la feuille de route et le business case",
        description:
          "Séquencer par vagues selon les dépendances et la capacité. Consolider bénéfices et coûts sur trois ans, avec trois scénarios. Faire valider les hypothèses par la finance avant le COPIL.",
        resultat: "Une feuille de route et un business case arbitrés.",
        frameworks: ["business-case-tco", "portefeuille-horizons", "communication-executive"],
        templates: ["business-case", "portefeuille-priorise", "support-copil"],
        guides: ["piloter-copil"],
      },
    ],
    livrables: [
      {
        template: "portefeuille-priorise",
        titre: "Portefeuille priorisé et feuille de route",
        description: "Cas notés, arbitrages motivés, vagues et dépendances.",
        obligatoire: true,
      },
      {
        template: "business-case",
        titre: "Business case",
        description: "Bénéfices, coûts, scénarios et modalités de mesure.",
        obligatoire: true,
      },
      {
        template: "canevas-cas-usage",
        titre: "Fiches des cas d'usage retenus",
        description: "Une page par cas : problème, solution, valeur, risques.",
        obligatoire: true,
      },
      {
        template: "atelier-ideation",
        titre: "Compte rendu des ateliers d'idéation",
        description: "Production des ateliers et liste longue.",
        obligatoire: false,
      },
    ],
    jalon: {
      code: "G2",
      nom: "Paris arbitrés",
      question: "Le sponsor engage-t-il des moyens sur un petit nombre de paris clairs ?",
      criteres: [
        "Le portefeuille tient sur un domaine et compte moins de sept cas d'usage retenus.",
        "Chaque cas retenu a une valeur chiffrée, une référence et un propriétaire métier.",
        "Le niveau de solution de chaque cas est justifié.",
        "Le business case est validé par la finance, scénario prudent compris.",
        "Les cas écartés le sont explicitement, avec leur raison.",
      ],
      arret: [
        "Aucun cas d'usage ne dépasse le seuil de valeur convenu au cadrage.",
        "Les cas à forte valeur dépendent tous de données indisponibles.",
        "Le sponsor refuse d'arbitrer et veut tout lancer.",
      ],
    },
    fils: {
      valeur:
        "Chaque cas retenu entre au registre de valeur avec référence, cible, méthode de mesure et propriétaire.",
      confiance: "Qualifier le risque réglementaire et les données personnelles de chaque cas retenu.",
      adoption:
        "Associer le métier à la notation : un portefeuille noté sans lui ne sera pas porté par lui.",
    },
    roles: [
      { role: "FDE stratégie", contribution: "Anime les ateliers, chiffre, construit le business case." },
      { role: "FDE ingénierie", contribution: "Évalue la faisabilité et le niveau de solution." },
      { role: "Propriétaire du processus", contribution: "Note la valeur, porte les cas retenus." },
      { role: "Direction financière", contribution: "Valide les hypothèses et le taux de captation." },
    ],
    pieges: [
      {
        titre: "L'éparpillement",
        parade: "Imposer un domaine. Refuser les cas d'usage orphelins, même séduisants.",
      },
      {
        titre: "Des gains de temps comptés comme des économies",
        parade: "Appliquer un taux de captation et nommer le mécanisme : départs non remplacés, sous-traitance, volume absorbé.",
      },
      {
        titre: "Noter la faisabilité sans avoir ouvert les données",
        parade: "La note de faisabilité s'appuie sur la revue des données et du SI, pas sur une intuition.",
      },
      {
        titre: "Choisir l'agent pour l'effet de démonstration",
        parade: "Exiger la justification du barreau, et le résultat attendu du barreau inférieur.",
      },
    ],
    conseils: [
      "Mettre un gain rapide dans la première vague : il finance la patience pour le reste.",
      "Présenter les cas écartés avec autant de soin que les cas retenus.",
      "Faire valider le business case par la finance avant le COPIL, jamais pendant.",
    ],
    savoir: ["lighthouse-d-abord", "agent-partout", "valeur-declarative"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "reinventer",
    numero: 3,
    nom: "Réinventer",
    promesse: "Reconstruire le processus et l'organisation autour des agents",
    temps: "Conception",
    duree: "3 à 4 semaines",
    resume:
      "C'est la phase qui distingue une transformation AI-Native d'un projet d'automatisation. On ne demande pas quelles étapes confier à un agent : on repart du résultat attendu et on reconstruit le flux, la répartition entre humains et agents, les métiers et la gouvernance.",
    objectifs: [
      "Concevoir le processus cible à partir du résultat, sans hériter des contraintes de l'existant.",
      "Répartir le travail entre humains et agents, avec un niveau d'autonomie par activité.",
      "Définir le modèle opérationnel cible : rôles, compétences, gouvernance.",
      "Faire valider la cible par ceux qui la feront vivre.",
    ],
    questions: [
      "Quel est le résultat attendu par le client final, et que faut-il strictement pour le produire ?",
      "Quelles étapes n'existent que parce qu'un humain devait transmettre, vérifier ou attendre ?",
      "Où le jugement humain est-il irremplaçable, et où est-il simplement habituel ?",
      "Qui répond du résultat quand un agent a réalisé le travail ?",
      "Que deviennent les personnes dont l'activité change ?",
    ],
    activites: [
      {
        id: "reinventer-1",
        titre: "Repartir du résultat",
        description:
          "Formuler le résultat du processus du point de vue de son bénéficiaire. Lister ce qui est strictement nécessaire pour le produire. Tout le reste est candidat à la suppression.",
        resultat: "Un résultat visé et des principes de conception.",
        frameworks: ["reinvention-zero-base"],
        guides: ["repenser-un-processus"],
      },
      {
        id: "reinventer-2",
        titre: "Reconstruire le flux",
        description:
          "Dessiner le flux cible : déclenché par événement, traitements en parallèle, voies différenciées selon le risque et la complexité, humain positionné sur la décision et l'exception. Comparer étape par étape avec l'existant.",
        resultat: "Un processus cible avec ses voies et ses indicateurs.",
        frameworks: ["reinvention-zero-base", "design-sprint", "decomposition-taches"],
        templates: ["processus-cible-ai-native"],
        outils: ["redesign-processus"],
      },
      {
        id: "reinventer-3",
        titre: "Répartir humains et agents",
        description:
          "Pour chaque activité du flux cible : qui réalise, qui répond du résultat, quel niveau d'autonomie, quelles conditions d'escalade, quel contrôle. La responsabilité reste toujours à un humain nommé.",
        resultat: "Une matrice de répartition humain-agent.",
        frameworks: ["niveaux-autonomie", "raci-augmente", "collaboration-humain-agent"],
        templates: ["matrice-humain-agent"],
      },
      {
        id: "reinventer-4",
        titre: "Concevoir le modèle opérationnel cible",
        description:
          "Définir les nouveaux rôles (superviseur, propriétaire d'agent, exploitation des agents), les compétences, les effectifs et leur trajectoire, la gouvernance. Traiter explicitement la question de l'emploi avec les RH.",
        resultat: "Un modèle opérationnel cible et sa trajectoire.",
        frameworks: ["modele-operationnel-cible", "gouvernance-ia"],
        templates: ["modele-operationnel-cible"],
      },
      {
        id: "reinventer-5",
        titre: "Éprouver la cible avec le terrain",
        description:
          "Dérouler le flux cible sur vingt à trente cas réels avec ceux qui les ont traités. Chercher les cas où la cible échoue. Corriger avant de concevoir quoi que ce soit.",
        resultat: "Une cible amendée et des exceptions documentées.",
        guides: ["gerer-resistances"],
      },
      {
        id: "reinventer-6",
        titre: "Préparer l'engagement des équipes",
        description:
          "Analyser l'impact par population, identifier les résistances probables, poser les engagements sociaux avec la direction et les représentants du personnel. Lancer le réseau de relais.",
        resultat: "Une analyse d'impact et les premiers engagements.",
        frameworks: ["adkar", "kotter-8-etapes", "modele-influence"],
        templates: ["plan-conduite-changement"],
      },
    ],
    livrables: [
      {
        template: "processus-cible-ai-native",
        titre: "Processus cible AI-Native",
        description: "Flux, voies, étapes, comparaison avant et après, indicateurs.",
        obligatoire: true,
      },
      {
        template: "matrice-humain-agent",
        titre: "Matrice de répartition humain-agent",
        description: "Réalisation, responsabilité, autonomie et escalade par activité.",
        obligatoire: true,
      },
      {
        template: "modele-operationnel-cible",
        titre: "Modèle opérationnel cible",
        description: "Rôles, compétences, gouvernance et trajectoire.",
        obligatoire: true,
      },
    ],
    jalon: {
      code: "G3",
      nom: "Cible validée par le métier",
      question: "Ceux qui feront vivre le processus cible le reconnaissent-ils comme le leur ?",
      criteres: [
        "Le processus cible a été déroulé sur des cas réels avec le terrain.",
        "Chaque activité a un réalisateur, un responsable humain et un niveau d'autonomie.",
        "Les indicateurs cibles sont reliés au business case.",
        "Les engagements sociaux sont posés avec les RH et la direction.",
        "Le propriétaire du processus porte la cible devant le COPIL.",
      ],
      arret: [
        "La cible n'est qu'une version automatisée de l'existant : mêmes étapes, mêmes relais.",
        "Le métier refuse la répartition proposée et aucun compromis ne préserve la valeur.",
        "L'impact social n'a pas de réponse acceptable.",
      ],
    },
    fils: {
      valeur: "Vérifier que les indicateurs du processus cible reconstituent le business case.",
      confiance:
        "Fixer le niveau d'autonomie par activité selon la réversibilité et le coût d'une erreur.",
      adoption:
        "Co-concevoir avec le terrain, définir les nouveaux métiers, poser les engagements sociaux.",
    },
    roles: [
      { role: "FDE stratégie", contribution: "Conduit la reconstruction du processus." },
      { role: "Propriétaire du processus", contribution: "Arbitre et porte la cible." },
      { role: "Experts métier et terrain", contribution: "Éprouvent la cible sur des cas réels." },
      { role: "RH", contribution: "Définit les rôles, la trajectoire et les engagements." },
    ],
    pieges: [
      {
        titre: "Automatiser l'existant",
        parade: "Compter les passages de relais avant et après. S'ils n'ont pas diminué, recommencer.",
      },
      {
        titre: "Concevoir en salle, sans le terrain",
        parade: "Dérouler la cible sur des cas réels avec ceux qui les ont traités.",
      },
      {
        titre: "Laisser la question de l'emploi sans réponse",
        parade: "La traiter tôt avec les RH. Le silence est toujours interprété au pire.",
      },
      {
        titre: "Une autonomie fixée globalement",
        parade: "La fixer activité par activité, selon le risque, avec des conditions d'élargissement.",
      },
    ],
    conseils: [
      "Commencer par la voie la plus simple et la plus volumineuse.",
      "Nommer le nouveau métier : un nom donne une perspective.",
      "Garder une voie entièrement humaine pour ce que l'on ne sait pas encore traiter.",
    ],
    savoir: ["automatiser-l-existant", "humain-oublie", "autonomie-progressive"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "concevoir",
    numero: 4,
    nom: "Concevoir",
    promesse: "Spécifier les agents et le système",
    temps: "Conception",
    duree: "3 à 4 semaines",
    resume:
      "Traduire le processus cible en un système que l'on sait construire, évaluer, sécuriser et exploiter. On conçoit les outils et les évaluations avant les prompts, et l'on ne découpe en plusieurs agents que lorsqu'un seul ne suffit pas.",
    objectifs: [
      "Spécifier chaque agent : mission, périmètre, outils, autonomie, garde-fous.",
      "Arrêter l'architecture du système et ses décisions structurantes.",
      "Construire le plan d'évaluation et le golden set avec les experts métier.",
      "Analyser les risques et faire valider les droits par la sécurité.",
    ],
    questions: [
      "Un seul agent suffit-il ? Qu'est-ce qui prouverait le contraire ?",
      "De quels outils l'agent a-t-il besoin, et lesquels écrivent ?",
      "Comment saura-t-on, objectivement, que l'agent fait bien son travail ?",
      "Que se passe-t-il quand un outil est indisponible, qu'une entrée est malveillante, que l'agent se trompe ?",
      "Qui pourra arrêter l'agent, et que se passe-t-il alors ?",
    ],
    activites: [
      {
        id: "concevoir-1",
        titre: "Définir le succès et constituer le golden set",
        description:
          "Avec les experts métier, définir ce qu'est un bon résultat pour chaque agent. Constituer un jeu de cas réels annotés, stratifié par type de situation, et un jeu de cas adverses. Ce travail précède tout développement.",
        resultat: "Un plan d'évaluation et un golden set annoté.",
        frameworks: ["evaluation-agents", "eval-driven-development"],
        templates: ["plan-evaluation"],
        guides: ["construire-les-evals"],
      },
      {
        id: "concevoir-2",
        titre: "Spécifier les agents",
        description:
          "Une fiche par agent : mission en une phrase, ce qu'il ne fait pas, entrées et sorties, outils, autonomie par situation, conditions d'escalade, modes de défaillance. Faire valider la mission et les limites par le propriétaire métier.",
        resultat: "Une fiche agent validée par agent.",
        frameworks: ["anatomie-agent", "niveaux-autonomie", "faut-il-un-agent"],
        templates: ["fiche-agent"],
        guides: ["concevoir-un-agent"],
        outils: ["agent-designer"],
      },
      {
        id: "concevoir-3",
        titre: "Concevoir les outils",
        description:
          "Concevoir les outils du point de vue de l'agent : orientés tâche, nommés sans ambiguïté, avec des réponses concises et des erreurs exploitables. Séparer lecture et écriture, appliquer le moindre privilège, fixer la règle d'approbation de chaque outil qui écrit.",
        resultat: "Une spécification par outil, validée par son propriétaire.",
        frameworks: ["conception-outils", "protocoles-mcp-a2a"],
        templates: ["specification-outil"],
      },
      {
        id: "concevoir-4",
        titre: "Arrêter l'architecture",
        description:
          "Choisir la topologie, la gestion de l'état, la stratégie de contexte et de mémoire, les couches transverses (passerelles, observabilité). Consigner chaque décision structurante avec les options écartées et le signal qui la ferait réviser.",
        resultat: "Un dossier d'architecture et ses relevés de décision.",
        frameworks: [
          "topologies-multi-agents",
          "patterns-agentiques",
          "architecture-reference",
          "context-engineering",
          "memoire-connaissance",
        ],
        templates: ["dossier-architecture-multi-agents", "adr"],
      },
      {
        id: "concevoir-5",
        titre: "Analyser les risques et poser les garde-fous",
        description:
          "Établir le modèle de menace : entrées, outils, mémoire, sorties. Pour chaque scénario, le garde-fou et le risque résiduel. Faire valider les droits d'accès par la sécurité et la qualification réglementaire par le juridique.",
        resultat: "Une analyse de risques et des garde-fous validés.",
        frameworks: ["garde-fous", "securite-agents", "nist-ai-rmf", "eu-ai-act"],
        templates: ["analyse-risques-agent", "checklist-securite-conformite"],
      },
      {
        id: "concevoir-6",
        titre: "Rédiger les premiers prompts",
        description:
          "Seulement maintenant : rédiger le system prompt à partir de la fiche agent. Donner le contexte et le pourquoi des règles, décrire les cas d'escalade, fixer le format de sortie. Le prompt sera itéré contre le golden set.",
        resultat: "Une première version des system prompts.",
        frameworks: ["context-engineering"],
        templates: ["system-prompt-agent"],
        guides: ["ecrire-system-prompt"],
      },
    ],
    livrables: [
      {
        template: "fiche-agent",
        titre: "Fiches agents",
        description: "La spécification complète de chaque agent.",
        obligatoire: true,
      },
      {
        template: "dossier-architecture-multi-agents",
        titre: "Dossier d'architecture",
        description: "Topologie, orchestration, outils, sécurité, exploitation.",
        obligatoire: true,
      },
      {
        template: "plan-evaluation",
        titre: "Plan d'évaluation",
        description: "Dimensions, jeux de test, méthodes de notation, seuils.",
        obligatoire: true,
      },
      {
        template: "analyse-risques-agent",
        titre: "Analyse de risques et garde-fous",
        description: "Modèle de menace, registre des risques, qualification.",
        obligatoire: true,
      },
      {
        template: "specification-outil",
        titre: "Spécifications d'outils",
        description: "Le contrat de chaque outil exposé aux agents.",
        obligatoire: false,
      },
      {
        template: "adr",
        titre: "Relevés de décision d'architecture",
        description: "Les décisions structurantes et leurs raisons.",
        obligatoire: false,
      },
    ],
    jalon: {
      code: "G4",
      nom: "Conception approuvée",
      question: "Savons-nous construire ce système, juger sa qualité et maîtriser ses risques ?",
      criteres: [
        "Chaque agent a une fiche validée par son propriétaire métier.",
        "Le golden set est constitué et annoté, les seuils de passage sont fixés.",
        "Chaque outil qui écrit a une règle d'approbation et un propriétaire.",
        "La sécurité a validé les droits d'accès et le modèle de menace.",
        "La qualification réglementaire est validée par le juridique.",
        "Le coût cible par cas est compatible avec le business case.",
      ],
      arret: [
        "On ne sait pas définir objectivement un bon résultat pour l'agent.",
        "Les outils nécessaires ne peuvent pas être exposés dans des conditions de sécurité acceptables.",
        "Le coût par cas estimé annule la valeur.",
      ],
    },
    fils: {
      valeur: "Vérifier que le coût cible par cas reste compatible avec le business case.",
      confiance:
        "Modèle de menace, garde-fous, droits d'accès validés par la sécurité, qualification validée par le juridique.",
      adoption:
        "Concevoir le poste de travail de supervision avec ses futurs utilisateurs.",
    },
    roles: [
      { role: "FDE ingénierie", contribution: "Conçoit agents, outils et architecture." },
      { role: "Experts métier", contribution: "Définissent le succès, annotent le golden set." },
      { role: "Architecte SI", contribution: "Valide l'intégration et l'exposition des outils." },
      { role: "RSSI et DPO", contribution: "Valident droits, garde-fous et traitement des données." },
    ],
    pieges: [
      {
        titre: "Écrire le prompt avant tout le reste",
        parade: "Dans l'ordre : succès, golden set, outils, fiche agent, puis prompt.",
      },
      {
        titre: "Découper en agents trop tôt",
        parade: "Partir d'un agent unique. Découper sur un constat mesuré.",
      },
      {
        titre: "Exposer l'API existante telle quelle",
        parade: "Concevoir des outils orientés tâche, avec des réponses pensées pour l'agent.",
      },
      {
        titre: "Associer la sécurité à la fin",
        parade: "L'impliquer dès la conception des outils, pas à la revue de mise en production.",
      },
    ],
    conseils: [
      "Faire annoter le golden set par deux experts et mesurer leur accord : c'est le plafond de qualité atteignable.",
      "Écrire la section « ce que l'agent ne fait pas » avant la section « ce qu'il fait ».",
      "Fixer une limite dure d'étapes, de coût et de durée par cas.",
    ],
    savoir: ["outils-avant-prompts", "golden-set-jour-1", "multi-agents-premature", "livrer-sans-evals"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "construire",
    numero: 5,
    nom: "Construire",
    promesse: "Prouver en conditions réelles",
    temps: "Réalisation",
    duree: "8 à 12 semaines",
    resume:
      "Construire une tranche verticale qui fonctionne de bout en bout, l'itérer contre les évaluations, puis la confronter à de vrais cas, de vrais utilisateurs et de vraies contraintes. Le pilote ne sert pas à montrer que cela marche : il sert à mesurer si la valeur est là.",
    objectifs: [
      "Livrer une tranche verticale fonctionnelle en quelques semaines.",
      "Atteindre les seuils d'évaluation avant toute exposition réelle.",
      "Mesurer la valeur en conditions réelles contre la référence.",
      "Décider sur preuves : généraliser, ajuster ou arrêter.",
    ],
    questions: [
      "Quel est le plus petit périmètre qui traverse tout le système de bout en bout ?",
      "Que nous apprennent les erreurs du golden set, catégorie par catégorie ?",
      "Le pilote mesure-t-il la valeur, ou seulement le bon fonctionnement ?",
      "Les utilisateurs s'en servent-ils quand personne ne les regarde ?",
      "Qu'est-ce qui nous ferait arrêter ?",
    ],
    activites: [
      {
        id: "construire-1",
        titre: "Construire la tranche verticale",
        description:
          "Choisir un cas, un motif, un segment, et le traiter de bout en bout : entrée réelle, outils réels, sortie réelle. Mieux vaut un flux étroit qui fonctionne entièrement que toutes les briques à moitié.",
        resultat: "Un prototype fonctionnel sur un périmètre étroit.",
        frameworks: ["poc-pilote-production", "anatomie-agent"],
        templates: ["plan-de-sprint"],
      },
      {
        id: "construire-2",
        titre: "Itérer contre les évaluations",
        description:
          "Mesurer, lire les traces des échecs, les catégoriser, corriger une chose à la fois, mesurer à nouveau. Automatiser la non-régression. Ajouter au golden set chaque cas qui surprend.",
        resultat: "Des scores au-dessus des seuils et un rapport d'évaluation.",
        frameworks: ["eval-driven-development", "evaluation-agents"],
        templates: ["rapport-evaluation"],
        guides: ["construire-les-evals", "ecrire-system-prompt"],
      },
      {
        id: "construire-3",
        titre: "Préparer le pilote",
        description:
          "Choisir le site, la population, le volume et la durée. Fixer les indicateurs, la méthode de mesure, le groupe témoin, les critères de succès et d'arrêt. Former les utilisateurs et leurs managers.",
        resultat: "Un plan de pilote validé.",
        frameworks: ["mesure-impact", "poc-pilote-production"],
        templates: ["plan-pilote"],
        guides: ["reussir-le-pilote"],
      },
      {
        id: "construire-4",
        titre: "Faire tourner en mode fantôme",
        description:
          "Faire fonctionner le système en parallèle du processus réel, sans effet. Comparer ses décisions à celles des humains, cas par cas. N'ouvrir les actions réelles qu'une fois les écarts expliqués.",
        resultat: "Une comparaison agent contre humain sur des cas réels.",
        frameworks: ["niveaux-autonomie", "garde-fous"],
      },
      {
        id: "construire-5",
        titre: "Piloter en conditions réelles",
        description:
          "Ouvrir progressivement : d'abord les actions à risque faible, sous supervision. Point quotidien avec le terrain, revue hebdomadaire des indicateurs et des incidents. Traiter chaque incident comme une source de cas de test.",
        resultat: "Des indicateurs mesurés chaque semaine et un journal des incidents.",
        frameworks: ["pilotage-adoption", "agentops"],
        templates: ["point-hebdo"],
        guides: ["reussir-le-pilote", "gerer-resistances"],
      },
      {
        id: "construire-6",
        titre: "Mesurer et décider",
        description:
          "Comparer les résultats à la référence et au groupe témoin. Mettre à jour le registre de valeur avec du mesuré. Recommander : généraliser, ajuster ou arrêter, et à quelles conditions.",
        resultat: "Un bilan de pilote et une décision du COPIL.",
        frameworks: ["mesure-impact", "registre-de-valeur"],
        templates: ["bilan-pilote", "support-copil"],
      },
    ],
    livrables: [
      {
        template: "rapport-evaluation",
        titre: "Rapport d'évaluation",
        description: "Résultats par dimension, analyse d'erreurs, verdict.",
        obligatoire: true,
      },
      {
        template: "plan-pilote",
        titre: "Plan de pilote",
        description: "Périmètre, dispositif, mesure, critères de succès et d'arrêt.",
        obligatoire: true,
      },
      {
        template: "bilan-pilote",
        titre: "Bilan de pilote",
        description: "Résultats mesurés, enseignements et recommandation.",
        obligatoire: true,
      },
      {
        template: "system-prompt-agent",
        titre: "System prompts versionnés",
        description: "Les prompts tels qu'évalués et déployés.",
        obligatoire: false,
      },
    ],
    jalon: {
      code: "G5",
      nom: "Preuve de valeur",
      question: "La valeur est-elle mesurée, en conditions réelles, contre la référence ?",
      criteres: [
        "Les seuils d'évaluation sont atteints et tenus pendant le pilote.",
        "Les indicateurs métier sont mesurés contre la référence et un groupe témoin.",
        "Aucun incident grave ; les incidents mineurs sont compris et corrigés.",
        "Les utilisateurs du pilote utilisent le système au quotidien.",
        "Le coût par cas constaté est compatible avec le business case.",
        "Le registre de valeur contient des résultats mesurés.",
      ],
      arret: [
        "Les seuils d'évaluation ne sont pas atteints malgré plusieurs itérations.",
        "La valeur mesurée est très inférieure au scénario prudent du business case.",
        "Les utilisateurs contournent le système.",
      ],
    },
    fils: {
      valeur: "Remplacer les hypothèses du registre de valeur par des mesures, groupe témoin à l'appui.",
      confiance:
        "Mode fantôme, ouverture progressive des actions, tests adverses rejoués à chaque version.",
      adoption:
        "Suivre l'usage réel au quotidien, écouter le terrain, former les managers de proximité.",
    },
    roles: [
      { role: "FDE ingénierie", contribution: "Construit, évalue, corrige." },
      { role: "Experts métier", contribution: "Revoient les échantillons, enrichissent le golden set." },
      { role: "Responsable du site pilote", contribution: "Porte le pilote auprès des équipes." },
      { role: "Contrôle de gestion", contribution: "Valide la mesure de la valeur." },
    ],
    pieges: [
      {
        titre: "Une démonstration réussie prise pour une preuve",
        parade: "Exiger le résultat sur le golden set complet et sur des cas réels non choisis.",
      },
      {
        titre: "Un pilote sans groupe témoin",
        parade: "Comparer à une population équivalente sur la même période, pas seulement à l'historique.",
      },
      {
        titre: "Corriger plusieurs choses à la fois",
        parade: "Un changement, une mesure. Sinon on ne sait plus ce qui a amélioré ou dégradé.",
      },
      {
        titre: "Un pilote qui ne finit jamais",
        parade: "Durée et critères de décision fixés avant le démarrage.",
      },
    ],
    conseils: [
      "Lire soi-même cinquante traces par semaine : aucun tableau de bord ne remplace cela.",
      "Être physiquement présent sur le site pilote les deux premières semaines.",
      "Publier les incidents et leur correction : la transparence construit la confiance.",
    ],
    savoir: ["tranche-verticale", "mode-fantome", "demo-trompeuse", "poc-purgatoire"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "industrialiser",
    numero: 6,
    nom: "Industrialiser",
    promesse: "Passer à l'échelle en confiance",
    temps: "Réalisation",
    duree: "8 à 12 semaines",
    resume:
      "Un pilote réussi sur dix-huit personnes n'est pas un système en production pour deux cents. L'industrialisation ajoute ce qui manque : exploitation, sécurité, gouvernance, maîtrise des coûts, formation, et un déploiement par vagues qui laisse le temps d'apprendre.",
    objectifs: [
      "Rendre le système exploitable : observabilité, astreinte, retour arrière.",
      "Déployer par vagues, avec formation et accompagnement des équipes.",
      "Mettre en place la gouvernance : propriétaires, registre, comité.",
      "Tenir les coûts et élargir l'autonomie sur preuves.",
    ],
    questions: [
      "Qui est réveillé quand l'agent se dégrade à trois heures du matin, et que fait-il ?",
      "Comment détecte-t-on une dérive de qualité avant les clients ?",
      "Que se passe-t-il quand le fournisseur met à jour son modèle ?",
      "Les équipes des vagues suivantes sont-elles prêtes ?",
      "Le coût par cas tient-il à l'échelle ?",
    ],
    activites: [
      {
        id: "industrialiser-1",
        titre: "Passer la revue de préparation",
        description:
          "Vérifier point par point : qualité, sécurité, conformité, exploitation, performance et coûts, adoption, gouvernance, réversibilité. Chaque point a une preuve. Les réserves ont un propriétaire et une date.",
        resultat: "Une revue de préparation signée.",
        frameworks: ["poc-pilote-production", "securite-agents"],
        templates: ["checklist-mise-en-production"],
        guides: ["passer-en-production"],
      },
      {
        id: "industrialiser-2",
        titre: "Mettre en place l'exploitation",
        description:
          "Traçage de bout en bout, tableaux de bord de qualité, de coût et de latence, alertes, gestion des versions des prompts, des outils et des modèles, procédures d'incident et de retour arrière. Constituer et former l'équipe d'exploitation côté client.",
        resultat: "Une équipe d'exploitation opérationnelle et ses runbooks.",
        frameworks: ["agentops", "architecture-reference"],
        templates: ["runbook-agent", "checklist-llmops"],
      },
      {
        id: "industrialiser-3",
        titre: "Installer la gouvernance",
        description:
          "Nommer un propriétaire métier par agent, ouvrir le registre des agents, installer le comité qui décide des mises en service, des élargissements d'autonomie et des retraits. Proportionner le niveau de revue au risque.",
        resultat: "Un registre des agents et un comité de gouvernance en fonctionnement.",
        frameworks: ["gouvernance-ia", "nist-ai-rmf", "ia-responsable"],
        templates: ["registre-agents"],
      },
      {
        id: "industrialiser-4",
        titre: "Déployer par vagues",
        description:
          "Séquencer par site ou par segment. Former avant chaque vague, renforcer le support pendant, mesurer après. Ne lancer la vague suivante que si la précédente tient ses indicateurs.",
        resultat: "Un déploiement achevé, vague par vague.",
        frameworks: ["kotter-8-etapes", "adkar", "pilotage-adoption"],
        templates: ["plan-conduite-changement"],
        guides: ["gerer-resistances", "passer-en-production"],
      },
      {
        id: "industrialiser-5",
        titre: "Maîtriser les coûts",
        description:
          "Suivre le coût par cas traité, pas la facture globale. Actionner les leviers dans l'ordre : cache, réduction du contexte, routage vers le modèle adapté, traitement par lots. Mesurer l'effet de chaque levier sur la qualité.",
        resultat: "Un coût par cas suivi et tenu.",
        frameworks: ["finops-ia"],
      },
      {
        id: "industrialiser-6",
        titre: "Élargir l'autonomie et préparer la suite",
        description:
          "Appliquer les conditions d'élargissement écrites en conception : passer un outil ou un motif au niveau supérieur quand les preuves sont réunies. Repérer ce qui est réutilisable pour les prochains agents.",
        resultat: "Une autonomie élargie sur preuves et des composants réutilisables identifiés.",
        frameworks: ["niveaux-autonomie", "usine-agents"],
      },
    ],
    livrables: [
      {
        template: "checklist-mise-en-production",
        titre: "Revue de préparation à la mise en production",
        description: "Points de contrôle, preuves, réserves et décision.",
        obligatoire: true,
      },
      {
        template: "runbook-agent",
        titre: "Runbooks d'exploitation",
        description: "Alertes, procédures d'incident, arrêt et retour arrière.",
        obligatoire: true,
      },
      {
        template: "registre-agents",
        titre: "Registre des agents",
        description: "L'inventaire gouverné des agents en service.",
        obligatoire: true,
      },
      {
        template: "plan-conduite-changement",
        titre: "Plan de conduite du changement",
        description: "Impacts, communication, formation, indicateurs d'adoption.",
        obligatoire: true,
      },
    ],
    jalon: {
      code: "G6",
      nom: "Prêt pour l'échelle",
      question: "Le système tient-il à l'échelle, et le client sait-il le tenir ?",
      criteres: [
        "Toutes les vagues sont déployées et tiennent leurs indicateurs.",
        "L'équipe d'exploitation du client traite les incidents sans l'équipe FDE.",
        "Chaque agent a un propriétaire et figure au registre.",
        "Les évaluations de non-régression tournent automatiquement.",
        "Le coût par cas est suivi et conforme au business case.",
        "Les utilisateurs de toutes les vagues sont formés et actifs.",
      ],
      arret: [
        "Une vague dégrade les indicateurs et la cause n'est pas comprise.",
        "Un incident grave révèle un défaut de conception des garde-fous.",
        "Le client ne constitue pas l'équipe d'exploitation.",
      ],
    },
    fils: {
      valeur: "Suivre la montée de la valeur vague après vague et le coût par cas.",
      confiance:
        "Revue de préparation, registre des agents, comité de gouvernance, tests adverses en continu.",
      adoption:
        "Former avant chaque vague, suivre l'entonnoir d'adoption, traiter les contournements.",
    },
    roles: [
      { role: "FDE ingénierie", contribution: "Durcit le système, forme l'exploitation." },
      { role: "Équipe d'exploitation du client", contribution: "Prend la main sur le run." },
      { role: "Managers de proximité", contribution: "Portent le déploiement dans leurs équipes." },
      { role: "Comité de gouvernance", contribution: "Décide des mises en service et de l'autonomie." },
    ],
    pieges: [
      {
        titre: "Généraliser d'un seul coup",
        parade: "Des vagues, avec un critère de passage entre chacune.",
      },
      {
        titre: "Une exploitation assurée par l'équipe FDE",
        parade: "L'équipe du client est d'astreinte dès la première vague, l'équipe FDE en soutien.",
      },
      {
        titre: "Construire la plateforme avant d'avoir trois agents",
        parade: "Extraire les composants communs de ce qui tourne déjà, pas d'une vision.",
      },
      {
        titre: "Subir les mises à jour de modèle",
        parade: "Figer les versions, rejouer le golden set avant tout changement.",
      },
    ],
    conseils: [
      "Répéter un incident à blanc avant la première vague.",
      "Donner aux superviseurs un moyen simple de signaler une mauvaise décision de l'agent.",
      "Publier chaque mois les indicateurs de qualité et les incidents au comité.",
    ],
    savoir: ["plateforme-avant-usages", "dependance-fde", "humain-oublie", "autonomie-progressive"],
  },

  /* ---------------------------------------------------------------- */
  {
    id: "perenniser",
    numero: 7,
    nom: "Pérenniser",
    promesse: "Mesurer, transmettre, capitaliser",
    temps: "Valeur",
    duree: "Continu",
    resume:
      "La mission ne se termine pas à la mise en production. Elle se termine quand la valeur est mesurée contre la référence, que le client opère et fait évoluer le système sans nous, et que ce que nous avons appris profite aux missions suivantes.",
    objectifs: [
      "Mesurer la valeur réalisée et la faire auditer par la finance.",
      "Transférer les compétences jusqu'à l'autonomie complète du client.",
      "Installer la boucle d'amélioration continue.",
      "Capitaliser : retour d'expérience, patterns, templates améliorés.",
    ],
    questions: [
      "La valeur mesurée correspond-elle au business case ? Sinon, pourquoi ?",
      "Le client sait-il modifier un prompt, ajouter un cas de test, élargir une autonomie sans nous ?",
      "Quel est le prochain domaine, et que réutilise-t-on ?",
      "Qu'avons-nous appris qui devrait changer notre façon de faire ?",
    ],
    activites: [
      {
        id: "perenniser-1",
        titre: "Mesurer la valeur réalisée",
        description:
          "À +3, +6 et +12 mois, mesurer chaque indicateur du registre contre sa référence, avec la méthode convenue. Expliquer les écarts. Faire auditer le résultat par la finance et le présenter au sponsor.",
        resultat: "Un tableau de bord de valeur audité.",
        frameworks: ["registre-de-valeur", "mesure-impact"],
        templates: ["tableau-de-bord-valeur"],
        outils: ["business-case"],
      },
      {
        id: "perenniser-2",
        titre: "Transférer jusqu'à l'autonomie",
        description:
          "Trois temps : le client fait avec nous, le client fait et nous observons, le client fait seul. Vérifier l'autonomie sur des actes réels : corriger un prompt, ajouter des cas au golden set, traiter un incident, instruire un élargissement d'autonomie.",
        resultat: "Une équipe client autonome, critères de transfert atteints.",
        templates: ["plan-transfert"],
      },
      {
        id: "perenniser-3",
        titre: "Installer l'amélioration continue",
        description:
          "Revue régulière des échantillons, des incidents et des retours utilisateurs ; enrichissement du golden set ; arbitrage des évolutions par le propriétaire de l'agent. La qualité d'un agent se dégrade si personne ne s'en occupe.",
        resultat: "Des rituels d'amélioration tenus par le client.",
        frameworks: ["agentops", "eval-driven-development", "gouvernance-ia"],
      },
      {
        id: "perenniser-4",
        titre: "Préparer le domaine suivant",
        description:
          "Avec le sponsor, choisir le prochain domaine à partir du portefeuille. Identifier ce qui se réutilise : outils, garde-fous, gabarits d'évaluation, équipe d'exploitation. C'est là que l'investissement initial commence à se rentabiliser.",
        resultat: "Une proposition de feuille de route pour la suite.",
        frameworks: ["usine-agents", "portefeuille-horizons", "approche-par-domaine"],
      },
      {
        id: "perenniser-5",
        titre: "Capitaliser",
        description:
          "Rédiger le retour d'expérience de la mission, anonymisé. En extraire les patterns et anti-patterns, améliorer les templates utilisés, et proposer le tout au portail par pull request. Le savoir non écrit repart avec ceux qui l'ont appris.",
        resultat: "Un REX publié et des contributions au portail.",
        templates: ["rex-mission"],
        guides: ["capitaliser"],
      },
    ],
    livrables: [
      {
        template: "tableau-de-bord-valeur",
        titre: "Tableau de bord de valeur",
        description: "Référence, cible et réalisé par indicateur, audités.",
        obligatoire: true,
      },
      {
        template: "plan-transfert",
        titre: "Plan de transfert de compétences",
        description: "Compétences, modalités, jalons d'autonomie.",
        obligatoire: true,
      },
      {
        template: "rex-mission",
        titre: "Retour d'expérience de mission",
        description: "Ce qui a marché, ce que l'on ferait autrement.",
        obligatoire: true,
      },
      {
        template: "cloture-mission",
        titre: "Clôture de mission",
        description: "Bilan, engagements restants, checklist de sortie.",
        obligatoire: false,
      },
    ],
    jalon: {
      code: "G7",
      nom: "Client autonome",
      question: "Le client peut-il continuer sans nous, et la valeur est-elle prouvée ?",
      criteres: [
        "La valeur réalisée est mesurée contre la référence et auditée par la finance.",
        "L'équipe client a corrigé, évalué et redéployé un agent sans assistance.",
        "Les rituels d'amélioration continue sont tenus par le client.",
        "Le prochain domaine est identifié.",
        "Le retour d'expérience est publié sur le portail.",
      ],
      arret: [
        "La valeur mesurée est durablement inférieure au coût récurrent : il faut le dire et décider.",
      ],
    },
    fils: {
      valeur: "Mesure du réalisé à +3, +6 et +12 mois, auditée par la finance.",
      confiance: "La gouvernance et les revues périodiques fonctionnent sans l'équipe FDE.",
      adoption: "L'usage est installé ; les nouveaux arrivants sont formés par le client.",
    },
    roles: [
      { role: "Lead FDE", contribution: "Conduit la mesure, le transfert et le retour d'expérience." },
      { role: "Propriétaires d'agents", contribution: "Arbitrent les évolutions." },
      { role: "Équipe d'exploitation du client", contribution: "Opère et améliore." },
      { role: "Direction financière", contribution: "Audite la valeur réalisée." },
    ],
    pieges: [
      {
        titre: "Partir à la mise en production",
        parade: "Le critère de fin est l'autonomie du client, écrite dans la charte.",
      },
      {
        titre: "Une valeur annoncée et jamais mesurée",
        parade: "Dates de mesure fixées dès le business case, propriétaire nommé.",
      },
      {
        titre: "Un transfert par documentation",
        parade: "Transférer par la pratique : le client fait, nous observons.",
      },
      {
        titre: "Un retour d'expérience remis à plus tard",
        parade: "Le rédiger dans les deux semaines qui suivent la fin, à partir du journal de mission.",
      },
    ],
    conseils: [
      "Tenir un journal d'apprentissages tout au long de la mission : le REX s'écrit alors en deux heures.",
      "Dire aussi ce qui n'a pas marché. C'est la partie la plus utile aux suivants.",
      "Revenir voir le client à +6 mois, même sans contrat.",
    ],
    savoir: ["dependance-fde", "revue-de-valeur-hebdo", "rex-voxalis-sav-augmente"],
  },
];

export const phasesParId = Object.fromEntries(phases.map((p) => [p.id, p])) as Record<PhaseId, Phase>;

export function getPhase(id: string): Phase | undefined {
  return phases.find((p) => p.id === id);
}
