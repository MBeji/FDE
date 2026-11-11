---
id: tranche-verticale
titre: "La tranche verticale"
resume: "Traiter un seul cas de bout en bout, en conditions réelles, plutôt que construire toutes les briques à moitié. Étroit et complet vaut mieux que large et creux."
type: pattern
phases: [concevoir, construire]
tags: [prototype, integration, delivery]
secteur: ""
date: ""
---

## Contexte

Au début de la phase Construire, le réflexe est d'avancer couche par couche : tous les connecteurs, puis tous les agents, puis le poste de travail. Huit semaines plus tard, six briques sont « à 60 % », rien ne fonctionne de bout en bout et aucun utilisateur n'a rien vu. Les problèmes d'intégration, eux, attendent la fin.

## Le pattern

Prendre **un seul cas** — un motif, un segment — et lui faire traverser toutes les couches : entrée réelle, outils réels, garde-fous, évaluation, traçage, utilisateur final. Chez Voxalis, le prototype (S18 à S21) n'a traité qu'un motif récurrent sur douze, « perte de synchronisation de l'accès », mais de l'arrivée du ticket au message qui confirme le rétablissement au client.

## Pourquoi ça marche

- **Les risques d'intégration sortent en semaine 2, pas en semaine 10** : droits d'accès, latence des API, qualité des données, validation de sécurité.
- **Chaque couche est forcée de décider** : schéma de sortie, conditions d'escalade, journalisation, procédure d'arrêt.
- **Les décisions d'architecture se prennent sur mesure.** C'est sur la tranche, démarrée avec un agent unique, que Voxalis a constaté la baisse de justesse du diagnostic de 91 % à 84 % quand le même agent portait les neuf outils et les règles de remédiation. La séparation Diagnostic et Résolution vient de là.
- **Le métier juge un résultat** : un incident résolu, pas un schéma.
- **Le squelette est posé.** Les motifs suivants s'ajoutent par extension, en repassant la même porte d'évaluation.

## Mise en œuvre

1. **Choisir la tranche** : cas fréquent (assez de volume pour évaluer), résolution documentée, risque faible, et **au moins une action d'écriture**. Une tranche en lecture seule évite la partie difficile.
2. **Définir « terminé » avant de commencer** : le cas est traité sur des entrées réelles, mesuré sur son sous-ensemble du golden set, tracé, avec une voie d'escalade et un arrêt d'urgence.
3. **Borner à trois ou quatre semaines.** En cas de retard, réduire le périmètre du cas, jamais le nombre de couches traversées.
4. **Bouchonner ce qui est hors du chemin**, rien de ce qui est dessus.
5. **Montrer chaque semaine** des cas tirés au hasard par le métier, pas choisis par l'équipe.
6. **Élargir ensuite motif par motif**, et consigner dans un [ADR](/templates/adr) ce qui est jetable et ce qui devient l'architecture.

## Limites

- **La tranche n'est pas le pilote.** Un motif prouve la faisabilité et la chaîne technique, pas la valeur du domaine : il a fallu les 9 400 tickets du pilote de Nantes pour cela. Voir [POC, pilote, production](/frameworks/poc-pilote-production).
- **Une tranche trop facile masque les problèmes de structure.** Si elle ne touche ni système d'écriture ni cas d'escalade, en choisir une autre.
- **Certains socles ne se découpent pas** : identité, gestion des secrets, traçabilité. Les faire au minimum, mais proprement, dès la tranche.
- **Le code de la tranche devient la production sans revue.** Prévoir une semaine de consolidation avant le pilote.

Voir aussi : [réussir le pilote](/guides/reussir-le-pilote), [plan de pilote](/templates/plan-pilote), [le mode fantôme](/savoir/mode-fantome), [la plateforme avant les usages](/savoir/plateforme-avant-usages).
