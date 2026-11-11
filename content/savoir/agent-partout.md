---
id: agent-partout
titre: "L'agent partout"
resume: "Un agent là où une règle, un appel de modèle ou un workflow suffit. Plus lent, plus cher, moins prévisible et plus lourd à opérer, pour le même résultat."
type: anti-pattern
phases: [cibler, concevoir]
tags: [architecture, sobriete, cout]
secteur: ""
date: ""
---

## Symptômes

- Tous les cas d'usage du portefeuille sont étiquetés « agent ».
- Les traces montrent toujours la même séquence d'appels d'outils, dans le même ordre : c'est un workflow dont on a confié le plan au modèle.
- Un agent applique une règle : router sur un code produit, comparer un montant à un seuil.
- Quarante secondes et plusieurs dizaines de centimes pour ce qu'un script fait en millisecondes.
- La même entrée ne donne pas deux fois la même sortie, là où le métier attend du déterminisme.
- Personne n'a testé le barreau inférieur.

## Pourquoi ça arrive

- **« Agent » est le mot du budget.** Le comité de direction a financé des agents, on lui livre des agents.
- **Prototyper un agent va plus vite que spécifier des règles.** Le coût apparaît en production, pas en démonstration.
- **On confond « utilise un modèle » et « est un agent ».** Classer un ticket demande un appel de modèle, pas une boucle ni des outils.
- **Les six questions n'ont pas été posées** ; voir [faut-il un agent ?](/frameworks/faut-il-un-agent)

## Conséquences

Une latence et un coût d'inférence injustifiés. Un comportement imprévisible sur des cas qui n'en demandaient pas. Une surface d'attaque élargie : l'agentivité excessive figure au Top 10 OWASP pour les applications LLM. De l'évaluation, du traçage et de l'astreinte à assumer pour chaque agent. Et une crédibilité entamée le jour où un audit montre qu'une règle faisait l'affaire.

## Comment en sortir

1. **Lire cinquante traces.** Si le chemin est identique dans la grande majorité des cas, l'écrire en code : c'est un workflow. Garder le modèle pour les étapes de langage (classer, extraire, rédiger).
2. **Rejouer le golden set avec le barreau inférieur**, puis comparer qualité, coût et latence. Trancher sur les mesures.
3. **Réserver l'agent aux étapes dont le chemin varie réellement**, et traiter les cas simples en amont par une règle.
4. **Consigner la décision** dans un [ADR](/templates/adr), avec le signal qui justifierait de remonter d'un barreau.

Voxalis : un seul système, trois barreaux. La qualification des tickets est un appel de modèle unique, la communication proactive un workflow. Seuls le diagnostic et la résolution sont des agents, parce que l'ordre des vérifications dépend de ce qu'elles révèlent.

## Comment l'éviter

- Situer chaque cas d'usage sur l'échelle des solutions dès la phase Cibler, dans le [canevas de cas d'usage](/templates/canevas-cas-usage). L'outil [Agent ou pas ?](/outils/agent-ou-pas) pose les six questions.
- Exiger le résultat du barreau inférieur sur le golden set avant d'arbitrer en faveur d'un agent.
- Chiffrer le coût récurrent de chaque barreau ; voir [FinOps de l'IA](/frameworks/finops-ia).
- Se garder de l'excès inverse : quarante branches empilées dans un workflow pour éviter un agent produisent un système plus fragile que l'agent.

Voir aussi : [patterns agentiques](/frameworks/patterns-agentiques), [le multi-agents prématuré](/savoir/multi-agents-premature).
