---
id: multi-agents-premature
titre: "Le multi-agents prématuré"
resume: "Découper un système en plusieurs agents avant d'avoir prouvé qu'un seul agent, ou un workflow, ne suffit pas. On paie la complexité de coordination sans en tirer le bénéfice."
type: anti-pattern
phases: [concevoir]
tags: [architecture, multi-agents, simplicite]
secteur: ""
date: ""
---

## Symptômes

- Le schéma d'architecture montre six agents avant que le premier cas ait été traité de bout en bout.
- Les agents sont découpés selon l'organigramme (un agent par service) ou par analogie humaine (« un agent planificateur, un agent critique, un agent rédacteur »), pas par contrainte technique.
- Plusieurs agents partagent les mêmes outils et le même contexte ; leurs frontières sont floues.
- Une part importante des échanges entre agents sert à se transmettre de l'information.
- Une erreur ne peut pas être attribuée : personne ne sait quel agent a mal compris quoi.
- Le coût et la latence par cas sont un multiple de ce qu'un seul appel coûterait.

## Pourquoi ça arrive

- **Le multi-agents est perçu comme le niveau supérieur**, donc comme la cible par défaut d'une mission AI-Native.
- **Le découpage rassure** : chaque agent semble simple et testable isolément. La complexité est déplacée dans la coordination, où elle est moins visible.
- **On n'a pas essayé plus simple.** Pas de version à un seul agent, pas de workflow piloté par le code, donc pas de point de comparaison.
- **Le vocabulaire des démonstrations publiques** pousse vers des architectures spectaculaires.

## Conséquences

Chaque passage de relais entre agents perd du contexte et ajoute un point de défaillance. Les évaluations deviennent difficiles : il faut évaluer chaque agent et le système. Le débogage, l'observabilité et la sécurité se compliquent (plus d'outils, plus de droits, plus de surface d'injection). Le projet prend du retard sur un problème qu'il s'est créé.

## Comment en sortir

1. **Construire une version à un seul agent** (ou un workflow) sur le même golden set et comparer : qualité, coût, latence.
2. **Fusionner les agents qui partagent outils et contexte.**
3. **Ne garder une séparation que si elle est justifiée** par une contrainte nommée : droits différents, niveaux d'autonomie différents, contexte trop volumineux pour un seul agent, parallélisation utile.
4. **Consigner chaque séparation conservée dans un [ADR](/templates/adr).**

## Comment l'éviter

- Monter l'[échelle des solutions](/frameworks/faut-il-un-agent) barreau par barreau : règle, appel unique, workflow, agent, multi-agents. Le barreau 5 se justifie.
- Commencer par une [tranche verticale](/savoir/tranche-verticale) à un seul agent. Chez Voxalis, le prototype a porté sur un seul motif de bout en bout avant la conception complète.
- Fonder chaque frontière d'agent sur une différence de droits ou d'autonomie. Dans SAV Augmenté, l'agent Diagnostic est en lecture seule, l'agent Résolution n'exécute que le catalogue de remédiation, l'agent Communication passe en L2 pour tout geste commercial : le découpage suit des niveaux de risque, pas l'organigramme.
- Choisir la topologie avec les [topologies multi-agents](/frameworks/topologies-multi-agents) et la documenter dans le [dossier d'architecture](/templates/dossier-architecture-multi-agents).

Voir aussi : [patterns agentiques](/frameworks/patterns-agentiques), [l'agent partout](/savoir/agent-partout), [concevoir un agent](/guides/concevoir-un-agent).
