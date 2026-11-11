---
id: analyse-causes-racines
titre: "Analyse des causes racines"
resume: "Remonter d'un symptôme à la cause sur laquelle agir, avec les 5 pourquoi et le diagramme en arêtes de poisson, et vérifier cette cause par les données. Vaut pour un processus, un agent ou un incident."
categorie: strategie
phases: [diagnostiquer, construire]
origine: "Lean et qualité industrielle"
niveau: fondamental
tags: [diagnostic, qualite, post-mortem]
templates: [fiche-processus-existant, rapport-evaluation]
lies: [analyse-80-20, observation-terrain, evaluation-agents]
---

## En bref

Un symptôme se constate, une cause s'explique, une cause racine se corrige une fois pour toutes. L'analyse des causes racines distingue les trois niveaux pour éviter de traiter le symptôme. Deux outils suffisent dans la plupart des cas : les **5 pourquoi**, qui creusent une chaîne causale, et le **diagramme en arêtes de poisson** (Ishikawa), qui balaie les familles de causes possibles.

Pour un FDE, elle empêche de mettre un agent sur un dysfonctionnement d'organisation, et structure l'analyse des erreurs d'agent et les post-mortem.

## Quand l'utiliser

- En [Diagnostiquer](/methode/diagnostiquer), sur chaque perte majeure révélée par la décomposition d'un indicateur.
- En [Construire](/methode/construire), pour analyser les échecs d'un agent sur le golden set et les incidents du pilote.
- Après tout incident de production, dans un post-mortem sans recherche de coupable.

Ne pas l'utiliser quand la cause est déjà connue : agir. Ne pas mener les 5 pourquoi seul à son bureau.

## Comment l'appliquer

1. **Énoncer le symptôme avec un chiffre.** « Les tickets attendent 12,7 h entre N1 et N2 », pas « le N2 est lent ».
2. **Balayer les familles de causes** avec le diagramme en arêtes de poisson. Familles adaptées au travail de service : méthode et processus, outils et SI, connaissance et données, personnes et compétences, organisation et pilotage, client. Pour un agent : instructions, contexte, outils, données, modèle, évaluation.
3. **Creuser avec les 5 pourquoi** sur les deux ou trois causes les plus plausibles. S'arrêter quand la réponse désigne quelque chose qu'on peut changer ; cinq est un ordre de grandeur.
4. **Classer chaque réponse** : symptôme (ce qu'on voit), cause (ce qui le produit), cause racine (ce qui, corrigé, empêche la récidive).
5. **Vérifier par les données** : comparer les cas où la cause est présente et absente. Sans écart, revenir à l'étape 2.
6. **Associer une action et un propriétaire** à chaque cause racine.

## Exemple

**Processus.** L'attente entre N1 et N2 représente 41 % du MTTR de 31 h, soit 12,7 h.

| Pourquoi ? | Réponse | Niveau |
| --- | --- | --- |
| 1. Pourquoi le ticket attend-il ? | Il reste dans la file N2 sans être pris | Symptôme |
| 2. Pourquoi n'est-il pas pris ? | Les experts N2 traitent d'abord les dossiers complets et renvoient les autres au N1 | Cause |
| 3. Pourquoi le dossier est-il incomplet ? | Le N1 n'a ni le test de ligne ni la supervision réseau, réservés au N2 | Cause |
| 4. Pourquoi ces accès sont-ils réservés ? | Le processus fait du N2 le seul point de diagnostic, et la base de connaissances (35 % d'articles obsolètes) ne permet pas au N1 de diagnostiquer seul | Cause racine |

Vérification : sur 12 mois de tickets horodatés, comparer l'attente des tickets escaladés une fois et de ceux renvoyés au N1. L'écart a confirmé la cause. La réponse n'a pas été « plus d'experts N2 » mais un diagnostic préparé avant toute escalade, porté par l'Agent Diagnostic.

**Post-mortem d'agent.** En S24, juste après la sortie du mode fantôme, des messages de statut sont envoyés en double à des clients du pilote. Symptôme : deux messages identiques. Cause : l'Agent Communication relance `client.envoyer_message` après un délai d'attente dépassé. Cause racine : l'outil n'est pas idempotent, rien ne permet de savoir qu'un premier envoi a réussi. Correction dans la semaine : clé d'idempotence sur l'outil et cas de test ajouté au golden set.

## Pièges à éviter

- **S'arrêter au premier pourquoi.** « Le N2 est débordé » mène à recruter. Parade : continuer jusqu'à une cause qu'on peut corriger.
- **Arriver à une personne.** « Le conseiller s'est trompé » n'est jamais une cause racine. Parade : chercher ce qui a rendu l'erreur possible.
- **Une cause racine non vérifiée.** Parade : une mesure qui la confirme, ou elle reste une hypothèse.
- **Corriger le prompt à chaque erreur d'agent.** Parade : classer les erreurs par famille, outil et contexte compris, avant de corriger.

## Pour aller plus loin

- Templates : [fiche processus existant](/templates/fiche-processus-existant), [rapport d'évaluation](/templates/rapport-evaluation), [runbook agent](/templates/runbook-agent) pour les post-mortem
- Frameworks : [analyse 80/20](/frameworks/analyse-80-20) pour choisir les symptômes à traiter, [observation terrain](/frameworks/observation-terrain), [évaluation des agents](/frameworks/evaluation-agents)
- Références : Taiichi Ohno et le système de production Toyota pour les 5 pourquoi ; Kaoru Ishikawa pour le diagramme en arêtes de poisson.
