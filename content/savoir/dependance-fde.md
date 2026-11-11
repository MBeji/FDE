---
id: dependance-fde
titre: "La dépendance au FDE"
resume: "Un système en production que seule l'équipe FDE sait opérer, évaluer et faire évoluer. La mission ne peut pas se terminer sans que la valeur se dégrade."
type: anti-pattern
phases: [industrialiser, perenniser]
tags: [transfert, agentops, autonomie-client]
secteur: ""
date: ""
---

## Symptômes

- Toute modification d'un prompt, d'un outil ou d'un seuil passe par un FDE.
- Les incidents sont diagnostiqués par l'équipe FDE ; l'équipe client ouvre un ticket et attend.
- Le golden set et les évaluations tournent sur un poste ou un pipeline que le client ne maîtrise pas.
- La documentation existe mais personne côté client ne l'a utilisée pour faire une vraie modification.
- La mission est prolongée « le temps de stabiliser », pour la deuxième fois.
- Le client n'a recruté ni nommé aucune équipe d'exploitation des agents.

## Pourquoi ça arrive

- **Le transfert est planifié en fin de mission**, quand l'équipe est sous pression de mise en production.
- **Les FDE vont plus vite seuls.** Faire faire au client ralentit chaque sprint ; on reporte.
- **Le modèle économique de la mission pousse à la prolongation**, et le client y trouve un confort.
- **Les compétences n'existent pas chez le client** et personne n'a budgété leur création.
- **Le système est trop singulier** : choix techniques propres à l'équipe, sans conventions documentées.

## Conséquences

Après le départ des FDE, les évaluations cessent de tourner, la base de connaissances se dégrade, les dérives ne sont plus détectées. La valeur mesurée baisse en quelques mois. Le client, faute de savoir faire évoluer le système, le gèle ou le remplace. La mission a échoué même si la production a réussi.

## Comment en sortir

1. **Nommer maintenant les responsables côté client** : propriétaire produit, exploitation, évaluations.
2. **Inverser les rôles** : le client fait, le FDE relit. Chaque modification, chaque incident, chaque revue d'évaluation.
3. **Mesurer l'autonomie** avec des épreuves concrètes : modifier un outil, ajouter un motif au catalogue, traiter un incident de bout en bout sans aide.
4. **Fixer une date de sortie** et la tenir, avec un [plan de transfert](/templates/plan-transfert).

## Comment l'éviter

- Inscrire dans la [charte de mission](/templates/charte-de-mission) que le critère de fin est l'autonomie du client, pas la mise en production.
- Composer une équipe mixte dès le départ. Chez Voxalis : experts N2, architecte SI, data engineer, product owner et référent sécurité détachés.
- Budgéter l'équipe d'exploitation dans le business case : 3 ETP AgentOps, 0,35 M€ par an chez Voxalis, en place dès l'industrialisation.
- Démarrer le transfert avant la fin : à partir de S36, achevé en S39.
- Outiller l'exploitation avec un [runbook](/templates/runbook-agent), un [registre des agents](/templates/registre-agents) et les pratiques [AgentOps](/frameworks/agentops).

Voir aussi : [posture du FDE](/guides/posture-fde), [capitaliser](/guides/capitaliser), [modèle opérationnel cible](/frameworks/modele-operationnel-cible).
