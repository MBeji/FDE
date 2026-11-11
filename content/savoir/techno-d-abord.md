---
id: techno-d-abord
titre: "La techno d'abord"
resume: "Une solution choisie avant le problème : « il nous faut des agents », « déployez un chatbot ». La mission optimise un outil au lieu d'un résultat métier, et la valeur reste introuvable."
type: anti-pattern
phases: [cadrer, cibler]
tags: [cadrage, probleme, valeur]
secteur: ""
date: ""
---

## Symptômes

- La demande est formulée en nom de technologie : « déployer un chatbot pour le SAV » (demande initiale de Voxalis), « mettre des agents partout », « faire un POC multi-agents ».
- Personne ne sait dire quel indicateur métier doit bouger, de combien, ni à quelle échéance.
- Le premier atelier porte sur la plateforme, le choix de modèle ou l'architecture, avant toute observation du travail réel.
- Les cas d'usage sont recherchés pour « montrer ce que sait faire l'outil » : on part de la capacité et on remonte vers un problème plausible.
- Le sponsor demande une date de démo, pas une date de mesure.

## Pourquoi ça arrive

- **La pression externe.** Concurrents, conseil d'administration, annonces du marché : la direction veut pouvoir dire « nous l'avons fait ».
- **Le budget est fléché sur une technologie**, pas sur un problème. Pour le consommer, il faut un usage.
- **Le diagnostic coûte et ne se montre pas.** Une démo se montre en deux semaines ; une décomposition du délai de résolution demande des entretiens, de l'observation et douze mois de tickets.
- **Le FDE se laisse porter.** Livrer ce qui est demandé est plus confortable que reformuler la demande au risque de déplaire au commanditaire.

## Conséquences

La solution traite un symptôme visible, pas la cause. Chez Voxalis, un chatbot aurait agi sur la porte d'entrée du SAV alors que 41 % du délai de résolution venait de l'attente entre N1 et N2 et 23 % de la collecte manuelle dans six outils : il aurait ajouté un canal sans toucher aux files internes. Le système produit des métriques d'usage (conversations, taux de réponse) que personne ne sait convertir en euros. Au premier arbitrage budgétaire, il est coupé.

## Comment en sortir

1. **Reformuler la demande en problème métier chiffré**, en une phrase : « comment diviser par deux le délai de résolution des incidents PME tout en réduisant le coût par ticket d'un tiers ? ». Utiliser l'[arbre problème et hypothèses](/frameworks/probleme-hypotheses).
2. **Mesurer avant de construire** : où part le temps, où part l'argent. Une décomposition suffit souvent à disqualifier la solution initiale.
3. **Présenter au sponsor les deux versions côte à côte** : ce que la techno demandée change sur l'indicateur, et ce que change la réponse au vrai problème. Laisser les chiffres arbitrer.
4. **Repasser les cas d'usage existants dans la [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite)** et l'[outil Agent ou pas](/outils/agent-ou-pas). Garder la technologie si elle est le barreau le plus bas qui suffit, pas parce qu'elle a été demandée.

## Comment l'éviter

- Ne signer aucune [charte de mission](/templates/charte-de-mission) dont l'objectif est une technologie. L'objectif est un indicateur métier avec une valeur de départ et une cible.
- Poser une hypothèse de réponse dès le jour 3, sur le problème, jamais sur l'outil.
- Commencer par le [domaine](/frameworks/approche-par-domaine), pas par la liste des capacités du marché.
- Appliquer la règle de l'[échelle des solutions](/frameworks/faut-il-un-agent) : règle, appel unique, workflow, agent, multi-agents. Justifier chaque barreau franchi.

Voir aussi : [la plateforme avant les usages](/savoir/plateforme-avant-usages), [l'agent partout](/savoir/agent-partout), [premiers jours](/guides/premiers-jours).
