---
id: plateforme-avant-usages
titre: "La plateforme avant les usages"
resume: "Dix-huit mois à construire un socle technique générique, sans un seul utilisateur en production. Quand le premier cas d'usage arrive, la plateforme ne correspond pas à ses besoins."
type: anti-pattern
phases: [concevoir, industrialiser]
tags: [plateforme, architecture, delivery]
secteur: ""
date: ""
---

## Symptômes

- Le programme IA est piloté par l'avancement d'une plateforme : catalogue de modèles, orchestrateur, base vectorielle, portail développeurs. Aucun indicateur métier dans le suivi.
- La feuille de route parle de « briques » et de « services socles », pas de processus.
- Les équipes métier attendent « que la plateforme soit prête » pour démarrer.
- L'architecture couvre des besoins hypothétiques : multi-cloud, dix types d'agents, protocoles que personne n'utilise encore.
- Les premiers cas d'usage qui l'essaient découvrent qu'il manque ce dont ils ont besoin (accès en écriture au CRM, traçabilité des actions, évaluations) et que ce qui existe ne sert pas.

## Pourquoi ça arrive

- **C'est plus confortable pour la DSI.** Construire un socle ne demande ni d'arbitrer entre métiers ni de changer un processus.
- **La peur de la dette.** « On ne va pas refaire l'intégration pour chaque cas d'usage » : argument juste, appliqué trop tôt.
- **Les besoins sont devinés, pas observés.** Sans cas d'usage réel, l'architecture répond à une liste de capacités du marché.
- **Le budget d'infrastructure se défend plus facilement** qu'un budget de transformation, qui engage le métier.

## Conséquences

Le coût est engagé sans valeur en face ; au bout de dix-huit mois, la direction financière demande ce qu'elle a acheté. La plateforme est figée avant d'avoir appris ce qu'un agent en production exige vraiment : outils bien conçus, garde-fous, observabilité, évaluations continues. Les premiers projets la contournent, et deux socles coexistent.

## Comment en sortir

1. **Choisir un cas d'usage phare** dans un domaine à fort enjeu, avec un propriétaire métier ([un phare d'abord](/savoir/lighthouse-d-abord)).
2. **Le livrer en [tranche verticale](/savoir/tranche-verticale)** sur la plateforme existante, en n'utilisant que ce qui sert, et en notant chaque manque.
3. **Geler les développements socles** qui ne sont tirés par aucun usage. Réorienter l'équipe plateforme sur les manques constatés.
4. **Mesurer la plateforme à ses usagers** : nombre d'agents en production, délai de mise en production d'un nouvel agent.

## Comment l'éviter

- Faire extraire la plateforme des usages : le deuxième et le troisième cas d'usage justifient la mutualisation, pas le premier.
- Chez Voxalis, la plateforme et l'intégration représentent 0,7 M€ sur 3,1 M€ d'investissement initial, et la passerelle MCP n'expose que les neuf outils dont les agents ont besoin. Le socle a suivi le domaine, pas l'inverse.
- Documenter chaque choix structurant dans un [ADR](/templates/adr) qui cite le besoin qui le motive.
- Utiliser l'[architecture de référence](/frameworks/architecture-reference) comme cible, et l'[usine à agents](/frameworks/usine-agents) comme étape après les premiers succès, pas avant.

Voir aussi : [la techno d'abord](/savoir/techno-d-abord), [Rewired](/frameworks/rewired-six-capacites), [POC, pilote, production](/frameworks/poc-pilote-production).
