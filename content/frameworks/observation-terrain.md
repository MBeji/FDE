---
id: observation-terrain
titre: "Observation terrain (Gemba)"
resume: "Aller voir le travail réel là où il se fait : préparer, observer sans juger, demander « montrez-moi », relever les écarts entre la procédure et la pratique, et restituer au terrain d'abord."
categorie: processus
phases: [diagnostiquer]
origine: "Lean"
niveau: fondamental
tags: [diagnostic, terrain, processus]
templates: [fiche-processus-existant, guide-entretien]
lies: [cartographie-processus, analyse-causes-racines, decomposition-taches]
---

## En bref

Le Gemba, dans la tradition lean, est le lieu où la valeur se crée : l'atelier, le plateau, le guichet. L'observation terrain consiste à y voir le travail tel qu'il se fait, non tel que les procédures le décrivent. Les écarts entre les deux sont la matière la plus précieuse du diagnostic : contournements, outils parallèles, savoirs tacites.

Pour un FDE, c'est une nécessité technique : un agent conçu sur la procédure officielle échoue sur la pratique réelle, et les règles implicites des opérateurs deviennent ses instructions et ses cas de test.

## Quand l'utiliser

- En [Diagnostiquer](/methode/diagnostiquer), systématiquement, après les premiers entretiens et avant de cartographier le processus.
- Quand les entretiens et les données racontent des histoires différentes.
- Avant de concevoir un agent qui reprend une tâche humaine, pour capter les cas limites.

Ne pas la remplacer par une démonstration organisée par le management, qui montre le processus idéal. Ne jamais l'utiliser pour évaluer des personnes.

## Comment l'appliquer

1. **Préparer.** Fixer deux ou trois questions issues de l'arbre d'hypothèses. Obtenir l'accord du responsable de site, informer les équipes et leurs représentants, vérifier avec le DPO les conditions d'accès aux appels et aux écrans contenant des données clients.
2. **Observer sans juger.** S'asseoir à côté d'un opérateur, suivre des cas réels de bout en bout. Noter les faits : durée, outils ouverts, copier-coller, attentes, interruptions.
3. **Questionner par l'action.** Les questions qui fonctionnent : « Montrez-moi comment vous traitez celui-ci. », « Que faites-vous quand l'information manque ? », « Qu'est-ce qui vous a fait perdre du temps aujourd'hui ? », « Qui appelez-vous quand vous êtes bloqué ? ».
4. **Relever les écarts** entre procédure et pratique dans une grille unique.

| Étape | Procédure | Pratique observée | Raison donnée | Conséquence pour la conception |
| --- | --- | --- | --- | --- |
| _[étape]_ | _[ce qui est écrit]_ | _[ce qui est fait]_ | _[pourquoi]_ | _[règle, outil ou cas de test]_ |

5. **Quantifier ce qui peut l'être** : temps par étape, nombre de changements d'outils par cas, part des cas avec contournement, sur au moins vingt cas.
6. **Restituer au terrain d'abord.** Présenter les constats à l'équipe observée et à son responsable avant tout comité : ils corrigent les erreurs d'interprétation et ne découvrent pas en COPIL ce qu'on a dit de leur travail.

## Exemple

Chez Voxalis, trois jours d'observation sur le plateau de Nantes en S5, avec l'accord de Nadia Cherif, pour tester l'hypothèse « la collecte d'informations pèse plus que le traitement ».

| Jour | Observé | Constat principal |
| --- | --- | --- |
| 1 | Conseillers N1, prise d'appels et tickets écrits | Jusqu'à six applications ouvertes pour un même cas, ressaisie des références client du CRM vers l'inventaire du parc |
| 2 | Experts N2 et back-office | Une part notable des dossiers reçus sont incomplets ; l'expert relance le N1 ou le client avant de commencer |
| 3 | Suivi de cas complets, restitution à chaud | Les conseillers expérimentés tiennent leurs propres fiches de résolution, parce que la base officielle n'est pas à jour |

Trois écarts ont changé la conception. Les fiches personnelles, collectées avec l'accord de leurs auteurs, ont servi à reconstruire la documentation des 12 motifs récurrents, dans une base où 35 % des articles étaient obsolètes. Les appels informels à un expert N2 connu, pour contourner la file, ont montré la valeur d'un diagnostic partagé. La ressaisie entre outils a confirmé le poids de la collecte : 23 % du MTTR contre 18 % pour le traitement. Nadia Cherif et son équipe ont validé la restitution avant le COPIL.

## Pièges à éviter

- **Observer les meilleurs seulement.** Parade : demander un panel varié en ancienneté et en résultats.
- **Corriger en direct.** Proposer une astuce change le comportement observé. Parade : noter, et rendre en fin de journée.
- **Trahir la confiance.** Un contournement restitué nominativement au management ferme le terrain pour la suite. Parade : restituer des pratiques, jamais des personnes.
- **Une demi-journée pour cocher la case.** Parade : au moins vingt cas, plusieurs profils.

## Pour aller plus loin

- Templates : [fiche processus existant](/templates/fiche-processus-existant), [guide d'entretien](/templates/guide-entretien)
- Frameworks : [cartographie des processus](/frameworks/cartographie-processus), [analyse des causes racines](/frameworks/analyse-causes-racines), [décomposition en tâches](/frameworks/decomposition-taches)
- Guides : [mener des entretiens de diagnostic](/guides/mener-entretiens), [premiers jours](/guides/premiers-jours)
- Référence : la pratique du Gemba dans le système de production Toyota et le lean management.
