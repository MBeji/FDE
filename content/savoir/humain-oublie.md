---
id: humain-oublie
titre: "L'humain oublié"
resume: "Un système techniquement réussi, évalué, intégré, que les équipes n'utilisent pas ou contournent. Le travail des personnes a changé sans qu'elles aient été associées."
type: anti-pattern
phases: [reinventer, construire, industrialiser]
tags: [adoption, changement, organisation]
secteur: ""
date: ""
---

## Symptômes

- Les évaluations passent, la mise en production a eu lieu, mais le taux d'usage quotidien plafonne ou baisse après le lancement.
- Les conseillers refont à la main ce que l'agent a préparé, ou ouvrent leurs anciens outils en parallèle.
- Les managers de proximité découvrent le système à la formation, une semaine avant le déploiement.
- Les questions des équipes portent sur l'emploi, pas sur l'outil, et ne reçoivent pas de réponse claire.
- Les fiches de poste, les objectifs individuels et les indicateurs de performance des équipes n'ont pas changé.
- Les représentants du personnel ont été informés en fin de projet.

## Pourquoi ça arrive

- **L'équipe projet est technique.** Elle mesure ce qu'elle maîtrise : exactitude, latence, coût d'inférence. L'adoption n'a pas d'indicateur.
- **Le processus a été conçu sans les personnes qui le vivent.** Les ateliers ont réuni les directeurs, pas les conseillers.
- **La règle 10-20-70 est connue mais pas budgétée** : le changement et la formation sont la ligne qu'on coupe en premier.
- **La question de l'emploi est évitée.** Sans réponse, chacun suppose le pire et protège son poste en n'utilisant pas l'outil.
- **Le nouveau rôle n'est pas défini.** On a retiré des tâches sans dire ce que devient le métier.

## Conséquences

La valeur du business case suppose l'usage ; sans usage, elle n'existe pas. Le contournement dégrade les données qui alimentent les évaluations. Le métier conclut que « l'IA ne marche pas », alors que c'est l'organisation qui n'a pas changé.

## Comment en sortir

1. **Aller sur le plateau** : observer une journée, interroger les utilisateurs qui contournent. Leurs raisons sont souvent précises (trop de clics, manque de confiance dans un type de proposition, crainte d'être jugé sur l'erreur de l'agent).
2. **Corriger vite ce qui est corrigeable** et le faire savoir.
3. **Répondre à la question de l'emploi** avec la DRH, par écrit.
4. **Piloter l'adoption avec des indicateurs** (usage quotidien, taux d'acceptation des propositions, contournements) dans les comités, au même rang que les indicateurs techniques ([pilotage de l'adoption](/frameworks/pilotage-adoption)).

## Comment l'éviter

- Associer les personnes dont le travail change dès le diagnostic. Chez Voxalis : trois jours d'observation sur le plateau de Nantes, deux experts N2 détachés, un expert conduite du changement dans l'équipe.
- Définir le nouveau rôle avant de construire : le conseiller devient « superviseur de cas » ([matrice humain-agent](/templates/matrice-humain-agent)).
- Prendre un engagement explicite sur l'emploi. Voxalis : aucune suppression de poste, gains captés par le non-remplacement des départs et la baisse de la sous-traitance.
- Mesurer l'usage dès le pilote : à S29, 16 conseillers sur 18 utilisaient le poste de supervision chaque jour. Un chiffre plus bas aurait bloqué la généralisation.
- Outiller avec [ADKAR](/frameworks/adkar) et le [plan de conduite du changement](/templates/plan-conduite-changement).

Voir aussi : [règle 10-20-70](/frameworks/regle-10-20-70), [gérer les résistances](/guides/gerer-resistances), [binôme métier-FDE](/savoir/binome-metier-fde).
