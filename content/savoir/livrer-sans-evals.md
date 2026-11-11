---
id: livrer-sans-evals
titre: "Livrer sans évaluations"
resume: "Juger la qualité « à l'œil » sur quelques exemples. Sans mesure, chaque correction casse autre chose, chaque débat tourne à l'anecdote et personne ne peut décider d'élargir l'autonomie."
type: anti-pattern
phases: [concevoir, construire, industrialiser]
tags: [evals, qualite, regression]
secteur: ""
date: ""
---

## Symptômes

- Le critère de recette est « ça a l'air bien », sur cinq à dix exemples, toujours les mêmes, choisis par l'équipe.
- Personne ne sait répondre à deux questions : quel est le taux d'erreur ? Cette version est-elle meilleure que la précédente ?
- Chaque correction de prompt casse un autre cas, et ce sont les utilisateurs qui le découvrent.
- Le changement de version du modèle est redouté, donc repoussé.
- En comité, la qualité se débat à coups d'anecdotes : un mauvais exemple contre un bon.
- Aucun seuil ne conditionne la mise en production.

## Pourquoi ça arrive

- **Les premières sorties impressionnent.** Elles donnent un sentiment de sécurité que rien ne fonde.
- **Le temps d'expert n'a pas été négocié.** Sans annotateurs, pas de jeu de cas.
- **Personne ne sait définir « bon ».** C'est le vrai problème : la spécification manque, et l'absence d'évaluation le cache.
- **Sous la pression du calendrier**, les évaluations passent pour un coût. Elles sont la moitié du produit.

## Conséquences

Des régressions en production. Une confiance perdue au premier incident visible, faute de savoir dire s'il est isolé. Une autonomie bloquée : aucune preuve à présenter pour l'élargir. Un transfert impossible : le client ne peut pas faire évoluer un système qu'il ne sait pas mesurer. Et une version de modèle figée, par peur de ce qu'on ne verrait pas.

## Comment en sortir

1. **Geler les évolutions fonctionnelles** une à deux semaines. Sans cela, le rattrapage n'aura jamais lieu.
2. **Extraire 50 à 100 cas réels des journaux**, échecs connus compris, et les faire annoter par deux experts.
3. **Fixer trois à cinq critères et leurs seuils** avec le propriétaire du processus.
4. **Automatiser l'exécution et mesurer la version en service.** C'est la référence. S'attendre à une mauvaise surprise, et la présenter comme telle dans un [rapport d'évaluation](/templates/rapport-evaluation).
5. **Poser deux règles** : aucune modification n'est livrée sans rejouer le jeu ; tout incident de production devient un cas du jeu.

## Comment l'éviter

- Constituer [le golden set dès le premier jour](/savoir/golden-set-jour-1), avant le premier prompt.
- Faire approuver le [plan d'évaluation](/templates/plan-evaluation) et ses seuils au jalon G4.
- Inscrire le temps d'annotation des experts dans la charte de mission.
- Rejouer le jeu automatiquement. Chez Voxalis, le golden set tourne chaque nuit, et une baisse de score bloque le déploiement.
- Prolonger la mesure en production. Chaque semaine, les experts N2 de Voxalis revoient 5 % des diagnostics ; une alerte part sous 88 % de justesse.

Voir aussi : [eval-driven development](/frameworks/eval-driven-development), [évaluation des agents](/frameworks/evaluation-agents), [construire les evals](/guides/construire-les-evals), [la démo qui trompe](/savoir/demo-trompeuse).
