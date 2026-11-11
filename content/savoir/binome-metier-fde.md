---
id: binome-metier-fde
titre: "Le binôme métier-FDE"
resume: "Un expert métier détaché travaille au quotidien avec chaque FDE. Il ne valide pas en fin de course : il co-construit, annote, lit les traces et porte le système auprès de ses pairs."
type: pattern
phases: [diagnostiquer, reinventer, concevoir, construire]
tags: [equipe, metier, transfert]
secteur: ""
date: ""
---

## Contexte

L'équipe FDE travaille dans sa salle, recueille le besoin en atelier et revient trois semaines plus tard avec un résultat qui passe à côté du travail réel. Les experts « disponibles sur demande » répondent en 48 heures, entre deux urgences. Chaque question coûte deux jours, donc on cesse de les poser.

## Le pattern

Associer à chaque FDE un expert métier détaché, à mi-temps au minimum, assis à côté de lui. L'expert n'est pas un valideur : il annote les cas, relit les traces, écrit les règles métier, conteste les sorties. Chez Voxalis, deux experts N2 à mi-temps ont travaillé en binôme avec les deux ingénieurs agents pendant la conception et la construction.

## Pourquoi ça marche

- **Le processus réel n'est pas dans les procédures.** Chez Voxalis, 35 % des 2 300 articles de la base de connaissances étaient obsolètes. L'expert sait quels signaux comptent vraiment, et lesquels tout le monde ignore.
- **La boucle de retour passe de jours à minutes.** Un diagnostic faux est expliqué sur-le-champ et devient un cas du golden set.
- **La légitimité vient des pairs.** Un conseiller écoute un expert N2 qu'il respecte, pas un consultant. L'adoption commence là.
- **Le transfert se fait en marchant.** L'expert qui sait lire une trace et écrire un cas d'évaluation est le noyau de la future équipe d'exploitation.

## Mise en œuvre

1. **Négocier le détachement au cadrage** et l'inscrire dans la [charte de mission](/templates/charte-de-mission) : personnes nommées, quotité, durée, et remplacement de leur charge opérationnelle. Sans ce dernier point, leur manager les reprend au premier pic d'activité.
2. **Choisir le bon profil** : respecté par ses pairs, curieux, critique. Pas celui dont le manager peut se passer. Un sceptique constructif vaut mieux qu'un enthousiaste.
3. **Installer un rituel quotidien** : trente minutes de revue de traces à deux, sur des cas du jour.
4. **Confier à l'expert des livrables en propre** : guide d'annotation, catalogue de remédiation, règles d'escalade. Il en est l'auteur, pas le relecteur.
5. **Élargir le cercle** : faire contre-annoter par d'autres experts et retourner observer le plateau, pour vérifier que le binôme reste représentatif.
6. **Faire reconnaître le rôle** par la DRH : c'est une étape de carrière, pas une parenthèse.

## Limites

- **En dessous d'un mi-temps, c'est une consultation**, pas un binôme.
- **Un expert, c'est un point de vue.** Après six mois de projet, il raisonne comme l'équipe et n'est plus un utilisateur ordinaire.
- **Risque d'isolement.** L'expert vu comme « passé de l'autre côté » perd sa légitimité. Le garder en production une partie de son temps.
- **Le binôme instruit, il n'arbitre pas.** Les décisions de périmètre et d'organisation restent au propriétaire du processus ; voir le [RACI augmenté](/frameworks/raci-augmente).

Voir aussi : [posture du FDE](/guides/posture-fde), [plan de transfert](/templates/plan-transfert), [la dépendance au FDE](/savoir/dependance-fde), [l'humain oublié](/savoir/humain-oublie).
