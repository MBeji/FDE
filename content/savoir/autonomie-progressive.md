---
id: autonomie-progressive
titre: "L'autonomie progressive"
resume: "Démarrer bas, puis élargir l'autonomie outil par outil, sur preuves, selon des conditions écrites à l'avance. La confiance se construit sur un historique, pas sur une démonstration."
type: pattern
phases: [concevoir, construire, industrialiser]
tags: [autonomie, confiance, gouvernance]
secteur: ""
date: ""
---

## Contexte

Deux erreurs symétriques. Lancer l'agent en autonomie « parce que la démo a marché » : le premier incident visible détruit une confiance qu'il faudra des mois à reconstruire. Ou le laisser indéfiniment sous approbation « par prudence » : la valeur n'est jamais captée, et les humains valident sans lire.

## Le pattern

Fixer le [niveau d'autonomie](/frameworks/niveaux-autonomie) **par outil et par situation**, démarrer au niveau que les preuves disponibles justifient, et écrire à l'avance ce qui déclenche l'élargissement, comme le retour en arrière. Chez Voxalis : deux semaines de mode fantôme, puis l'Agent Résolution en L3 sur le seul catalogue de remédiation à risque faible et en L2 au-delà ; l'Agent Communication en L3 pour les messages de statut, en L2 pour tout geste commercial.

## Pourquoi ça marche

- **Le rayon d'impact reste borné** pendant qu'on découvre les modes de défaillance réels.
- **Des conditions écrites dépassionnent l'arbitrage.** Ni le sponsor pressé ni le RSSI inquiet ne décident à l'intuition : le seuil est atteint, ou il ne l'est pas.
- **La granularité capte la valeur tôt.** Les lectures et les messages de statut n'attendent pas que les actions réseau aient fait leurs preuves.
- **L'approbation humaine fabrique la preuve.** Chaque validation, correction ou refus en L2 est une donnée d'évaluation.

## Mise en œuvre

1. **Classer chaque outil par risque** : lecture, écriture réversible, écriture irréversible ou à impact client ou financier.
2. **Fixer le niveau de départ** par couple outil et situation, dans la [fiche agent](/templates/fiche-agent) et la [matrice humain-agent](/templates/matrice-humain-agent).
3. **Écrire les conditions d'élargissement** : volume observé, seuil de qualité, absence d'incident grave, instance qui décide. Chez Voxalis, l'Agent Diagnostic passe à L4 sur un motif après 500 diagnostics consécutifs justes à 95 % au moins sur ce motif, sur validation du comité de gouvernance IA.
4. **Écrire les conditions de repli** : sous quel seuil l'agent redescend d'un niveau, sans attendre une réunion.
5. **Instrumenter le L2** : taux d'approbation sans modification, taux de correction, temps de décision.
6. **Faire appliquer l'approbation par la couche d'outils**, pas par une consigne du prompt.
7. **Tracer chaque changement de niveau** dans le [registre des agents](/templates/registre-agents).

## Limites

- **Le L2 à fort volume fabrique de la validation réflexe.** Un taux d'approbation proche de 100 % avec quelques secondes de décision signale un contrôle fictif : prouver et monter, ou réduire le flux soumis.
- **Certaines actions ne monteront jamais** (geste commercial, action irréversible). L'écrire, pour ne pas rouvrir le débat chaque trimestre.
- **Une condition inatteignable vaut un refus.** Cinq cents cas sur un motif rare prennent des années : calibrer le volume sur le flux réel.
- **Les preuves périment.** Après un changement de modèle, de prompt ou d'outil, rejouer les évaluations avant de maintenir le niveau acquis.

Voir aussi : [garde-fous](/frameworks/garde-fous), [gouvernance de l'IA](/frameworks/gouvernance-ia), [le mode fantôme](/savoir/mode-fantome).
