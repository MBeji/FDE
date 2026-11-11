---
id: golden-set-jour-1
titre: "Le golden set dès le premier jour"
resume: "Constituer le jeu d'évaluation avec les experts métier avant d'écrire le premier prompt. Le golden set est la spécification exécutable de l'agent et le juge de paix de chaque décision."
type: pattern
phases: [concevoir, construire]
tags: [evals, golden-set, qualite]
secteur: ""
date: ""
---

## Contexte

L'équipe commence par les prompts, juge sur quelques exemples, et six semaines plus tard personne ne sait dire si la version 14 est meilleure que la version 9. Les discussions avec le métier sur ce qu'est une « bonne » réponse restent des échanges d'opinions.

## Le pattern

Avant la première ligne de prompt, constituer avec les experts métier un jeu de cas réels annotés du résultat attendu, puis fixer les critères et les seuils de passage. Chez Voxalis, le [plan d'évaluation](/templates/plan-evaluation) a été approuvé en phase Concevoir (S14 à S17), avant le prototype : 600 cas historiques annotés par les experts N2, 120 cas adverses, quatre seuils.

## Pourquoi ça marche

- **Annoter force à spécifier.** Deux experts qui annotent différemment le même cas révèlent une règle métier implicite ou contestée. L'agent ne fera pas mieux que le consensus de ses juges : autant le découvrir avant de construire.
- **Chaque changement se mesure en minutes.** Prompt, outil, modèle : la régression se voit avant l'utilisateur.
- **Des seuils signés avant les résultats ne se renégocient pas.** Le passage du jalon devient un constat, pas un débat.
- **C'est l'actif qui survit.** Modèles et prompts changeront ; le jeu de cas reste, et il se transfère au client.

## Mise en œuvre

1. **Échantillonner des cas réels, stratifiés** par motif et par difficulté, cas rares mais graves compris. Ne pas se limiter au parcours nominal.
2. **Commencer petit** : 50 à 100 cas suffisent pour démarrer, puis étendre en continu. Attendre le jeu complet est une erreur.
3. **Faire annoter un sous-ensemble commun par deux experts**, mesurer leur accord, trancher les désaccords en séance, écrire le guide d'annotation.
4. **Choisir la méthode de notation par critère** : code quand le résultat est exact (une classification), modèle juge calibré sur des cas notés par les experts, expert pour le reste.
5. **Faire fixer les seuils par le propriétaire du processus**, avant toute mesure. Voxalis : qualification ≥ 95 %, diagnostic ≥ 90 %, zéro action inappropriée sur le jeu adverse, conformité des messages ≥ 98 %.
6. **Construire le jeu adverse** avec le référent sécurité : instructions cachées dans le texte du client, demandes hors périmètre.
7. **Réserver une part de cas que l'équipe ne consulte pas** pendant le développement, et verser au jeu chaque échec constaté en production.

Budgéter le temps d'expert dès la [charte de mission](/templates/charte-de-mission) : c'est le premier coût du golden set, et le premier sacrifié s'il n'a pas été négocié.

## Limites

- **Un golden set vieillit.** Nouvelles offres, nouveaux motifs : prévoir une revue périodique et un propriétaire côté client.
- **L'historique reflète l'ancien processus.** Si le processus est réinventé, annoter le comportement cible, pas ce qui a été fait à l'époque.
- **Un bon score hors ligne ne prouve pas la production.** La distribution réelle se vérifie en [mode fantôme](/savoir/mode-fantome), puis par échantillonnage.
- **À force d'itérer sur le jeu, on l'apprend par cœur.** D'où la part réservée.

Voir aussi : [eval-driven development](/frameworks/eval-driven-development), [évaluation des agents](/frameworks/evaluation-agents), [construire les evals](/guides/construire-les-evals), [livrer sans évaluations](/savoir/livrer-sans-evals).
