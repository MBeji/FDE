---
id: garde-fous
titre: "Garde-fous : la défense en profondeur"
resume: "Les six couches de protection d'un agent (entrée, sortie, outils, budgets, isolation, supervision humaine) et une classification du risque des actions pour décider où exiger une approbation."
categorie: agents
phases: [concevoir, construire]
origine: "Maison"
niveau: fondamental
tags: [securite, risque, autonomie]
templates: [analyse-risques-agent]
lies: [securite-agents, niveaux-autonomie, conception-outils, evaluation-agents]
---

## En bref

Un modèle peut être trompé, se tromper ou dériver. Aucune barrière unique ne suffit : on empile des couches indépendantes, chacune capable d'arrêter ce que la précédente a laissé passer. Le principe central : **un garde-fou s'exécute hors du modèle**. Une interdiction écrite dans le prompt aide, mais ne protège pas ; une permission refusée par la passerelle protège.

Pour un FDE, les garde-fous sont la condition pour obtenir l'autonomie : le RSSI et le métier accordent un niveau d'autonomie quand ils voient ce qui arrête l'agent.

## Quand l'utiliser

- En phase [Concevoir](/methode/concevoir), pour remplir la section garde-fous de chaque [fiche agent](/templates/fiche-agent) et l'[analyse de risques](/templates/analyse-risques-agent).
- En phase [Construire](/methode/construire), pour tester chaque couche sur le jeu adverse avant toute action réelle.
- À chaque élargissement d'autonomie ou ajout d'outil d'écriture.

## Comment l'appliquer

### 1. Classer chaque action par réversibilité et impact

| | Impact faible | Impact fort |
| --- | --- | --- |
| **Réversible** | Autonomie (L3 ou L4), contrôle par échantillonnage | Autonomie encadrée (L3), seuils et supervision en temps réel |
| **Irréversible** | Autonomie encadrée, contrôle de sortie systématique | Approbation humaine (L2) ou interdiction |

L'impact s'apprécie en argent, en client touché, en conformité et en réputation. La classification se fait **par outil et par situation** : la même action peut être à faible risque hors heures ouvrées et à risque fort pendant.

### 2. Empiler les six couches

| Couche | Ce qu'elle arrête | Mécanismes |
| --- | --- | --- |
| **Entrée** | Injection de prompt, demandes hors périmètre, données sensibles non nécessaires | Contenus tiers délimités et marqués comme données, détection d'injection, masquage |
| **Sortie** | Réponse hors format, affirmation sans preuve, contenu non conforme | Validation par schéma, vérification des citations, contrôle de conformité |
| **Outils** | Action hors périmètre, action à risque sans accord | Moindre privilège, filtrage par cas, approbation, idempotence |
| **Budgets** | Boucles, dérive de coût, cas interminables | Plafonds d'étapes, de coût et de durée, puis escalade |
| **Isolation** | Propagation d'une compromission | Comptes de service par agent, jetons à portée réduite, aucun secret dans le contexte, exécution cloisonnée |
| **Supervision humaine** | Ce que les couches automatiques ne voient pas | Poste de supervision, échantillonnage, alertes, arrêt d'urgence avec mode dégradé |

### 3. Tester chaque couche isolément

Pour chaque couche, un cas adverse qui doit être arrêté par elle seule, les autres désactivées. Une couche jamais déclenchée en test est une couche dont on ignore si elle marche.

### 4. Tracer chaque déclenchement

Un garde-fou qui se déclenche est un signal : il alimente le jeu de non-régression et la revue hebdomadaire.

## Exemple

Classification des outils d'écriture de SAV Augmenté.

| Action | Réversibilité | Impact | Règle retenue |
| --- | --- | --- | --- |
| `crm.mettre_a_jour_ticket` | Réversible | Faible | Autonome, journalisé |
| `client.envoyer_message`, message de statut | Irréversible | Faible | L3, contrôle de conformité systématique avant envoi |
| `client.envoyer_message`, geste commercial | Irréversible | Fort | L2, approbation du superviseur de cas |
| `reseau.executer_action`, catalogue à risque faible | Réversible | Moyen | L3, vérification post-action |
| `reseau.executer_action`, hors catalogue | Variable | Fort | L2, approbation humaine |
| `ligne.lancer_test` en heures ouvrées du client | Réversible | Moyen (micro-coupure) | Approbation humaine |

Autres couches : texte client transmis comme donnée et éprouvé sur 120 cas adverses ; chaque cause de diagnostic citant un résultat d'outil, vérifié par code ; plafonds de 12 appels d'outils, 0,50 € et 5 minutes par cas pour l'Agent Diagnostic ; filtrage de tous les outils sur l'identifiant client du ticket ; arrêt possible par l'équipe AgentOps ou Nadia Cherif, avec bascule des tickets en voie assistée.

Les deux incidents du pilote (messages envoyés en double) ont révélé une couche manquante : aucune déduplication sur `client.envoyer_message`. La clé d'idempotence ajoutée en S24 est depuis testée dans le jeu de non-régression. Résultat sur le pilote : aucune action inappropriée en production.

## Pièges à éviter

- **Le prompt comme garde-fou.** Parade : pour chaque risque, nommer le mécanisme de code qui l'arrête.
- **Tout soumettre à approbation.** Les superviseurs approuvent sans lire et l'approbation ne protège plus. Parade : réserver l'approbation aux actions irréversibles à fort impact.
- **Des budgets jamais atteints en test.** Parade : un cas adverse construit pour les dépasser.
- **Un arrêt d'urgence sans mode dégradé.** Personne n'ose l'utiliser. Parade : procédure d'arrêt écrite et répétée, avec bascule vers le traitement humain.
- **Classer le risque une fois pour toutes.** Parade : revue à chaque nouvel outil, nouvelle situation ou élargissement d'autonomie.

## Pour aller plus loin

- Frameworks : [sécurité des agents](/frameworks/securite-agents), [niveaux d'autonomie](/frameworks/niveaux-autonomie), [concevoir les outils](/frameworks/conception-outils), [évaluer un agent](/frameworks/evaluation-agents)
- Template : [analyse de risques d'un agent](/templates/analyse-risques-agent)
- Savoir terrain : [autonomie progressive](/savoir/autonomie-progressive)
- Références : OWASP Top 10 pour les applications LLM (injection de prompt, agentivité excessive, consommation non maîtrisée) ; NIST AI RMF.
