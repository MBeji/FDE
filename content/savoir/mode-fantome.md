---
id: mode-fantome
titre: "Le mode fantôme"
resume: "Faire tourner l'agent sur le flux réel, en parallèle du processus existant et sans aucun effet, puis comparer ses décisions à celles des humains avant d'autoriser la première action."
type: pattern
phases: [construire, industrialiser]
tags: [pilote, validation, risque]
secteur: ""
date: ""
---

## Contexte

Les évaluations hors ligne passent. Mais la production n'est pas le golden set : distribution réelle des cas, latence des systèmes, données incomplètes, situations que personne n'a pensé à annoter. Le découvrir par un incident client coûte la confiance de tout un plateau.

## Le pattern

Brancher l'agent sur le flux réel, en temps réel, avec ses vrais outils de lecture. Les actions d'écriture sont interceptées et journalisées au lieu d'être exécutées. On compare ensuite, cas par cas, ce que l'agent aurait fait et ce que les humains ont fait. Chez Voxalis, deux semaines de mode fantôme ont précédé toute action réelle sur le plateau de Nantes.

## Pourquoi ça marche

- **On teste sur la vraie distribution**, cas absents du golden set compris.
- **On produit la preuve qui fonde la première décision d'autonomie** : un taux d'accord mesuré sur le flux réel, pas une impression.
- **Les désaccords instruisent dans les deux sens.** L'humain n'est pas la vérité : la qualification manuelle de Voxalis comptait 9 % d'erreurs.
- **La plomberie est éprouvée** : charge, latence, coût par cas, comportement quand un outil ne répond pas.

## Mise en œuvre

1. **Intercepter les écritures dans la couche d'outils.** La passerelle remplace l'exécution par l'enregistrement de l'action prévue. Ne jamais s'en remettre à une consigne « n'agis pas ». Chez Voxalis, trois outils sur neuf écrivent : `crm.mettre_a_jour_ticket`, `reseau.executer_action`, `client.envoyer_message`.
2. **Traquer les lectures à effet de bord.** `ligne.lancer_test` lit, mais peut provoquer une micro-coupure : décider explicitement s'il tourne en fantôme.
3. **Définir la comparaison** étape par étape : qualification, diagnostic, action prévue, message. Classer chaque désaccord : agent en tort, humain en tort, deux réponses acceptables, indécidable.
4. **Revoir les désaccords chaque jour** avec l'expert métier, et verser les cas instructifs au golden set.
5. **Fixer les critères de sortie à l'avance** dans le [plan de pilote](/templates/plan-pilote) : durée, volume minimal, taux d'accord par étape, zéro action inappropriée prévue, signataire.
6. **Dire aux équipes ce qui tourne**, et que rien ne change pour le client. Un agent fantôme découvert par hasard devient une rumeur.

## Limites

- **L'agent ne voit jamais l'effet de ses actions.** Si le redémarrage prévu aurait échoué, la suite du raisonnement n'est pas testée. Compléter par un environnement de test, puis démarrer en L2.
- **Ni l'interaction humain-agent ni l'adoption ne sont testées.** C'est l'objet du pilote.
- **Un dialogue ne se rejoue pas en fantôme** : les réponses du client dépendent des messages réellement envoyés.
- **Le fantôme coûte l'inférence complète sans produire de valeur.** Deux à quatre semaines suffisent en général. Au-delà, on diffère une décision.

Voir aussi : [l'autonomie progressive](/savoir/autonomie-progressive), [POC, pilote, production](/frameworks/poc-pilote-production), [réussir le pilote](/guides/reussir-le-pilote), [AgentOps](/frameworks/agentops).
