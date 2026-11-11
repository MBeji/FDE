---
id: evaluation-agents
titre: "Évaluer un agent"
resume: "Quoi évaluer (résultat, trajectoire, composants), avec quels jeux, quelles méthodes de notation et quels seuils, et comment dimensionner l'échantillon pour que le verdict tienne."
categorie: agents
phases: [concevoir, construire, industrialiser]
origine: "Maison"
niveau: fondamental
tags: [evaluation, qualite, golden-set]
templates: [plan-evaluation, rapport-evaluation]
lies: [eval-driven-development, garde-fous, anatomie-agent, agentops]
---

## En bref

Sans évaluation, un agent n'est qu'une démonstration. L'évaluation dit si l'agent est assez bon pour l'autonomie demandée, si une modification l'améliore ou le dégrade, et s'il dérive en production. Elle se construit **avant** l'agent : le golden set fixe ce que « bien » veut dire, et c'est lui qui arbitre les choix de conception.

Pour un FDE, c'est aussi la pièce qui convainc : un comité accorde de l'autonomie sur des seuils atteints, pas sur une démonstration réussie.

## Quand l'utiliser

- En phase [Concevoir](/methode/concevoir), pour écrire le [plan d'évaluation](/templates/plan-evaluation) et constituer les jeux.
- En phase [Construire](/methode/construire), à chaque modification de prompt, d'outil, de contexte ou de modèle.
- En phase [Industrialiser](/methode/industrialiser), pour la non-régression nocturne et le suivi en production.

## Comment l'appliquer

### 1. Évaluer trois niveaux

| Niveau | Question | Exemples de mesures |
| --- | --- | --- |
| **Résultat** | Le résultat final est-il juste et utile ? | Exactitude, conformité, acceptation par l'utilisateur |
| **Trajectoire** | Le chemin est-il sûr et efficace ? | Outils appelés, appels interdits, nombre d'étapes, coût, durée |
| **Composants** | Chaque brique fait-elle son travail ? | Rappel de la récupération, exactitude d'une classification, taux d'appels d'outils erronés |

Un bon résultat atteint par une trajectoire dangereuse (un test intrusif inutile, dix appels de trop) est un échec.

### 2. Constituer quatre jeux

- **Golden set** : cas réels représentatifs, annotés par les experts métier, avec la réponse attendue.
- **Cas adverses** : injections, demandes hors périmètre, outils en panne, données contradictoires.
- **Non-régression** : chaque incident et chaque erreur de production y entrent, définitivement.
- **Production** : échantillon de cas réels revus par des experts, en continu.

### 3. Choisir la méthode de notation

| Méthode | Pour quoi | Condition |
| --- | --- | --- |
| **Code** | Tout ce qui est vérifiable : classe, schéma, outil interdit, citation présente | À préférer partout où c'est possible |
| **Modèle juge** | Qualité rédactionnelle, pertinence des preuves, ton | Grille explicite, **calibré** sur des cas notés par les experts, accord mesuré avant usage |
| **Expert** | Vérité de terrain, calibration du juge, cas ambigus | Coûteux : réservé à l'annotation et à l'échantillonnage |

### 4. Fixer les seuils avant de mesurer

Un seuil par critère, décidé avec le métier avant les premiers résultats, et relié au niveau d'autonomie visé. Les critères de sécurité ont un seuil absolu.

### 5. Dimensionner l'échantillon

L'incertitude d'un taux mesuré sur n cas vaut environ ± 2 × √(p × (1 − p) / n). Sur 600 cas à 90 %, elle est d'environ ± 2,4 points : un écart de 1 point entre deux versions n'est pas significatif. Pour comparer deux versions, rejouer les mêmes cas et compter les cas qui changent de verdict. Sur un jeu adverse, zéro échec sur n cas borne le taux d'échec réel à environ 3/n avec 95 % de confiance (règle de trois) : 0 sur 120 laisse jusqu'à 2,5 %. Les modèles n'étant pas déterministes, rejouer les cas sensibles plusieurs fois.

### 6. Relier hors ligne et production

Hors ligne, on décide de déployer ; en production, on vérifie que le monde réel ressemble au golden set. Un écart entre les deux scores signale un golden set qui a vieilli.

## Exemple

Le plan d'évaluation de SAV Augmenté a été prêt avant la première ligne de prompt : 600 cas historiques annotés par les experts N2, 120 cas adverses.

| Critère | Jeu | Notation | Seuil |
| --- | --- | --- | --- |
| Exactitude de la qualification | 600 cas | Code | ≥ 95 % |
| Justesse du diagnostic | 600 cas | Code, comparaison à l'annotation | ≥ 90 % |
| Qualité des preuves du diagnostic | 150 cas | Modèle juge calibré sur 50 cas experts | ≥ 4 sur 5 |
| Actions inappropriées | 120 cas adverses | Code sur la trajectoire | 0 |
| Conformité des messages client | Messages générés | Modèle juge et règles | ≥ 98 % |

En production, 5 % des diagnostics sont revus chaque semaine par les experts N2, avec une alerte sous 88 % de justesse. Le golden set est rejoué chaque nuit et bloque tout déploiement en baisse. Les deux incidents de messages en double du pilote ont rejoint le jeu de non-régression. Le passage d'un motif en L4 exige 500 diagnostics consécutifs à au moins 95 % de justesse sur ce motif.

## Pièges à éviter

- **Évaluer sur des cas inventés par l'équipe.** Parade : cas historiques réels, tirés selon la répartition des motifs.
- **Juge non calibré.** Parade : mesurer son accord avec les experts avant de s'y fier, et le recalibrer à chaque changement de grille.
- **Ne regarder que le résultat final.** Parade : critères de trajectoire, au moins pour les appels interdits et le budget.
- **Conclure sur un écart dans la marge d'erreur.** Parade : calculer l'incertitude et comparer sur les mêmes cas.
- **Golden set figé.** Parade : l'enrichir chaque mois des cas de production et des incidents.

## Pour aller plus loin

- Frameworks : [eval-driven development](/frameworks/eval-driven-development), [AgentOps](/frameworks/agentops), [garde-fous](/frameworks/garde-fous)
- Templates : [plan d'évaluation](/templates/plan-evaluation), [rapport d'évaluation](/templates/rapport-evaluation)
- Guide : [construire les evals](/guides/construire-les-evals)
- Savoir terrain : [golden set dès le jour 1](/savoir/golden-set-jour-1), [livrer sans evals](/savoir/livrer-sans-evals)
