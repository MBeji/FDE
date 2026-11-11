---
id: decomposition-taches
titre: "Décomposition des tâches"
resume: "Découper un métier ou un processus en tâches élémentaires, décider pour chacune de l'éliminer, de l'automatiser, de la déléguer à un agent, d'augmenter l'humain ou de la lui garder, puis chiffrer le potentiel."
categorie: opportunites
phases: [diagnostiquer, reinventer]
origine: "Maison"
niveau: fondamental
tags: [processus, taches, potentiel]
templates: [fiche-processus-existant, matrice-humain-agent, processus-cible-ai-native]
lies: [cartographie-processus, reinvention-zero-base, faut-il-un-agent, collaboration-humain-agent]
---

## En bref

On n'automatise pas un métier, on redistribue ses tâches. La décomposition descend du processus à la tâche élémentaire (une action, un résultat, un acteur), puis classe chaque tâche dans l'une de cinq destinations : **éliminer**, **automatiser par règle**, **déléguer à un agent**, **augmenter l'humain**, **garder humain**.

Pour un FDE, c'est le pont entre le diagnostic et le processus cible : le potentiel se calcule sur des tâches observées, pas sur une impression, et la discussion avec le métier porte sur des tâches concrètes plutôt que sur « l'IA va-t-elle remplacer mon équipe ».

## Quand l'utiliser

- En [Diagnostiquer](/methode/diagnostiquer), pour chiffrer le potentiel d'un domaine à partir de l'observation.
- En [Réinventer](/methode/reinventer), comme matière première du processus cible et de la répartition humain-agent.

Ne pas l'utiliser seule pour dessiner la cible : décomposer l'existant enferme dans l'existant. La décomposition dit quoi déplacer ; la [réinvention à partir de zéro](/frameworks/reinvention-zero-base) dit quoi construire.

## Comment l'appliquer

### 1. Lister les tâches observées

Partir de la cartographie du processus et de l'observation du poste. Formuler chaque tâche par un verbe et un objet (« rechercher l'historique du site client »). Viser 10 à 25 tâches par rôle. Mesurer ou estimer la part du temps de chaque tâche, en précisant la source.

### 2. Caractériser chaque tâche sur cinq critères

| Critère | Question | Effet sur le classement |
| --- | --- | --- |
| Fréquence | Combien de fois par jour, par ticket ? | Fréquent : candidat à l'automatisation |
| Variabilité | Le chemin change-t-il d'un cas à l'autre ? | Faible : règle ; forte : agent ou humain |
| Jugement | Faut-il arbitrer, interpréter, négocier ? | Fort : augmenter ou garder humain |
| Risque | Que coûte une erreur ? Est-elle réversible ? | Élevé : approbation humaine ou garder humain |
| Données | L'information nécessaire est-elle accessible par outil ? | Non : rien n'est délégable tant que ce n'est pas traité |

### 3. Classer dans l'une des cinq destinations

1. **Éliminer** : la tâche n'existe que parce que le processus est mal conçu (ressaisie, relance, passage de relais).
2. **Automatiser par règle** : faible variabilité, logique spécifiable.
3. **Déléguer à un agent** : variabilité forte, jugement limité, risque maîtrisable, données accessibles.
4. **Augmenter l'humain** : jugement ou risque élevé, mais l'agent prépare, cherche, synthétise.
5. **Garder humain** : relation, responsabilité, arbitrage sensible.

Toujours se demander d'abord si la tâche peut être éliminée.

### 4. Calculer le potentiel

Potentiel = somme, pour chaque tâche, de sa part de temps × un taux d'absorption propre à sa destination. Les taux sont des hypothèses de mission, à valider en pilote ; ordres de grandeur utilisés par défaut : éliminer 100 %, règle 90 %, agent 50 % (la supervision consomme du temps), augmenter 25 %, humain 0 %.

### 5. Valider avec les titulaires du poste

Restituer la décomposition aux personnes qui font le travail. Elles corrigent les durées et signalent les tâches invisibles.

L'[outil de redesign de processus](/outils/redesign-processus) automatise le classement et le calcul.

## Exemple

Chez Voxalis, relevé indicatif de l'effort sur un incident technique, issu des trois jours d'observation à Nantes.

| Tâche | Part du temps | Destination | Absorbé |
| --- | --- | --- | --- |
| Lire le ticket et identifier le client | 10 % | Agent (Qualification) | 5,0 |
| Ressaisir les informations dans le CRM | 8 % | Éliminer | 8,0 |
| Consulter les 6 outils pour diagnostiquer | 22 % | Agent (Diagnostic) | 11,0 |
| Rechercher dans la base de connaissances | 10 % | Augmenter | 2,5 |
| Rédiger la note d'escalade vers le N2 | 7 % | Éliminer | 7,0 |
| Exécuter une remédiation standard | 12 % | Agent (Résolution, catalogue) | 6,0 |
| Mener un diagnostic complexe (N2) | 13 % | Augmenter | 3,25 |
| Informer le client du statut | 9 % | Agent (Communication) | 4,5 |
| Traiter un geste commercial | 4 % | Garder humain | 0 |
| Clôturer et documenter | 5 % | Règle | 4,5 |
| **Total** | **100 %** | | **≈ 52 %** |

Le potentiel brut sur l'effort lié aux incidents est d'environ 52 %. Le business case retient un objectif plus prudent sur l'ensemble des tickets, de 41 € à 26 € par ticket, et ne compte que 60 % du gain potentiel comme capté. Les tâches éliminées (15 %) expliquent à elles seules une bonne part de la baisse de l'attente entre N1 et N2.

## Pièges à éviter

- **Décomposer à la maille du rôle.** « Le conseiller traite les tickets » ne se classe pas. Parade : un verbe, un objet, un résultat par tâche.
- **Oublier l'élimination.** On délègue à un agent une ressaisie qui ne devrait plus exister. Parade : poser la question « pourquoi cette tâche existe-t-elle ? » avant toute autre.
- **Compter le potentiel comme un gain.** Le temps libéré n'est de la valeur que s'il est capté. Parade : passer par le [business case](/frameworks/business-case-tco).
- **Ignorer le temps de supervision.** Parade : un taux d'absorption inférieur à 100 % pour toute tâche déléguée.

## Pour aller plus loin

- Outil : [redesign de processus](/outils/redesign-processus)
- Frameworks : [cartographie des processus](/frameworks/cartographie-processus), [réinvention à partir de zéro](/frameworks/reinvention-zero-base), [faut-il un agent ?](/frameworks/faut-il-un-agent)
- Templates : [fiche processus existant](/templates/fiche-processus-existant), [matrice humain-agent](/templates/matrice-humain-agent)
- Guide : [repenser un processus](/guides/repenser-un-processus)
