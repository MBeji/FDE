---
id: demo-trompeuse
titre: "La démo qui trompe"
resume: "Une démonstration sur un parcours idéal, préparé et rejoué, qui convainc le comité et masque le comportement réel du système sur le flux de production."
type: anti-pattern
phases: [construire]
tags: [demo, evaluation, delivery]
secteur: ""
date: ""
---

## Symptômes

- La démo suit toujours le même scénario, choisi parce qu'il marche. Les cas qui échouent ne sont jamais montrés.
- Les données de démonstration sont propres, complètes et récentes ; le flux réel contient des tickets mal remplis, des clients multi-sites, des informations contradictoires.
- Les outils sont simulés ou les réponses des systèmes amont sont figées.
- Personne ne peut dire le taux de réussite sur un échantillon représentatif, seulement que « ça marche ».
- Le comité réagit à la fluidité de la conversation, pas aux chiffres.
- Une démo a été « répétée » plusieurs fois parce qu'elle échouait de temps en temps.

## Pourquoi ça arrive

- **Un système à base de modèle réussit presque toujours le cas nominal.** La difficulté est dans la queue de distribution : cas rares, données incomplètes, entrées adverses.
- **La démo est le seul livrable visible** d'une phase de construction. L'équipe est jugée dessus.
- **Il n'y a pas de jeu d'évaluation**, donc pas d'autre preuve à montrer.
- **Le non-déterminisme est sous-estimé.** Un parcours réussi une fois ne dit rien de la variance.

## Conséquences

Le sponsor engage un calendrier de déploiement sur une impression. Le premier contact avec le flux réel fait chuter la qualité, et la confiance avec. L'équipe passe le pilote à corriger en urgence au lieu d'apprendre. Pire : une décision d'autonomie (agir seul, écrire dans le SI, parler au client) est prise sur une démonstration.

## Comment en sortir

1. **Remplacer la démo par un rapport d'évaluation** sur un échantillon représentatif : taux de réussite par catégorie, erreurs typiques, cas d'escalade ([rapport d'évaluation](/templates/rapport-evaluation)).
2. **Montrer des échecs en comité**, choisis et expliqués, avec ce qui est fait pour chacun.
3. **Rejouer sur données réelles** en [mode fantôme](/savoir/mode-fantome) : le système traite le vrai flux sans agir, ses propositions sont comparées aux décisions humaines.
4. **Revoir les engagements de calendrier** pris sur la base de la démo.

## Comment l'éviter

- Construire le [golden set dès le jour 1](/savoir/golden-set-jour-1). Chez Voxalis : 600 cas historiques annotés par les experts N2 et 120 cas adverses, prêts avant la première ligne de prompt.
- Présenter chaque démonstration avec ses chiffres : « 3,8 % d'erreur de qualification sur 9 400 tickets » vaut plus qu'un parcours fluide.
- Faire choisir le cas de démonstration au hasard par le métier, sur le flux du jour.
- Fixer des seuils de passage avant de construire (exactitude de qualification ≥ 95 %, zéro action inappropriée sur le jeu adverse) dans le [plan d'évaluation](/templates/plan-evaluation).
- Ne jamais élargir l'autonomie sur une démo : l'[autonomie se gagne sur preuves](/savoir/autonomie-progressive).

Voir aussi : [livrer sans evals](/savoir/livrer-sans-evals), [évaluation des agents](/frameworks/evaluation-agents), [construire les evals](/guides/construire-les-evals).
