---
id: poc-pilote-production
titre: "Du POC à la production"
resume: "Quatre stades, de la preuve de concept à la production à l'échelle : ce que chacun doit prouver, ses critères d'entrée et de sortie, et comment éviter le purgatoire des POC."
categorie: industrialisation
phases: [construire, industrialiser]
origine: "Maison"
niveau: fondamental
tags: [delivery, pilote, passage-echelle]
templates: [plan-pilote, bilan-pilote, checklist-mise-en-production]
lies: [eval-driven-development, agentops, niveaux-autonomie, mesure-impact]
---

## En bref

Entre une idée et un système en production, il y a quatre stades, et chacun lève un risque différent. La preuve de concept (POC) répond à « est-ce faisable ? », le prototype à « est-ce que cela fonctionne de bout en bout ? », le pilote à « est-ce que cela crée de la valeur avec de vrais utilisateurs ? », la production à « est-ce que cela tient à l'échelle, opéré par le client ? ». Le purgatoire des POC naît de la confusion entre ces questions : on demande à une démonstration de prouver une valeur, ou on généralise ce qui n'était qu'un essai technique.

La discipline du FDE : n'entrer dans un stade qu'avec ses critères de sortie écrits, une date et un décideur.

## Quand l'utiliser

- En fin de phase [Concevoir](/methode/concevoir), pour bâtir le plan de la phase [Construire](/methode/construire).
- Aux jalons G5 et G6, pour instruire la décision de poursuivre.
- Face à un client qui accumule les essais sans mise en production.

Tous les stades ne sont pas obligatoires. Sauter le POC quand la faisabilité ne fait pas débat. Ne jamais sauter le pilote dès qu'un agent écrit dans le SI ou s'adresse à un client.

## Comment l'appliquer

### 1. Nommer le stade où l'on est

| Stade | Ce qu'il prouve | Critères d'entrée | Critères de sortie | Durée type |
| --- | --- | --- | --- | --- |
| **POC** | La faisabilité d'un point technique précis | Un doute nommé : qualité des données, capacité du modèle sur la tâche | Réponse par oui ou non, sur données réelles, hors SI | Quelques jours à 2 semaines |
| **Prototype en tranche verticale** | Le fonctionnement de bout en bout sur un périmètre étroit, avec les vrais outils | Conception approuvée (G4), golden set prêt, accès aux API | Seuils d'évaluation tenus sur la tranche | 3 à 4 semaines |
| **Pilote en conditions réelles** | La valeur et l'adoption, avec de vrais utilisateurs et de vrais cas | Prototype aux seuils, référence mesurée, équipe volontaire, plan de retour arrière | Indicateurs métier contre la référence, usage, incidents, coût unitaire (G5) | 6 à 8 semaines |
| **Production à l'échelle** | La tenue en charge et l'exploitation par le client | Preuve de valeur, budget, équipe d'exploitation nommée | Checklist de mise en production tenue, transfert réalisé (G6) | 8 à 12 semaines, par vagues |

Test rapide : si les cas sont choisis à la main ou les outils simulés, c'est un POC, quel que soit le nom qu'on lui donne.

### 2. Écrire les critères de sortie avant d'entrer

Pour chaque stade : indicateurs, seuils, date de fin, décideur, et les trois issues possibles (poursuivre, réorienter, arrêter). Les consigner dans le [plan de pilote](/templates/plan-pilote).

### 3. Dimensionner chaque stade au risque qu'il lève

Un POC est jetable et sans intégration. Un prototype est étroit mais complet : voir [tranche verticale](/savoir/tranche-verticale). Un pilote commence en [mode fantôme](/savoir/mode-fantome) et élargit l'autonomie sur preuves.

### 4. Préparer le stade suivant pendant le stade courant

La revue de sécurité démarre pendant le prototype. Le budget de généralisation se vote avant la fin du pilote. L'équipe d'exploitation est nommée pendant le pilote, pas après.

### 5. Décider au jalon, par écrit

Le [bilan de pilote](/templates/bilan-pilote) compare les résultats aux critères fixés et propose une décision.

### Les causes du purgatoire

| Cause | Parade |
| --- | --- |
| Ni propriétaire métier ni référence mesurée | Pas de pilote sans sponsor et sans référence signée |
| Démonstration sur données choisies, hors SI | Tranche verticale avec les vrais outils |
| Critères de succès fixés après coup | Critères écrits avant le démarrage |
| Budget d'industrialisation absent | Business case couvrant la production et l'exploitation |
| Sécurité, conformité et exploitation découvertes à la fin | Fil Confiance dès la conception |

## Exemple

Voxalis sortait de 7 POC en deux ans, dont un seul en production et aucun mesuré. La mission n'en ajoute pas un huitième.

| Stade | Semaines | Périmètre | Preuve obtenue |
| --- | --- | --- | --- |
| POC | Aucun | Faisabilité acquise : 4 applications sur 6 exposent des API, 58 % des incidents relèvent de 12 motifs documentés | Sans objet |
| Prototype | S18 à S21 | Un motif, « perte de synchronisation de l'accès », de bout en bout | Seuils du plan d'évaluation tenus sur le motif |
| Pilote | S22 à S29 | Plateau de Nantes, 18 conseillers, 9 400 tickets, deux semaines en mode fantôme | MTTR de 31 h à 14,5 h, FCR de 54 % à 71 %, 31 % de tickets résolus sans intervention humaine, aucune action inappropriée, 0,38 € d'inférence par ticket, 16 conseillers sur 18 en usage quotidien |
| Production | S30 à S39 | Trois vagues : Ouest, Nord et Est, Île-de-France et Sud ; 190 conseillers formés | Transfert achevé en S39 ; à +3 mois, MTTR de 13,2 h et coût par ticket de 29 € |

Le budget de la généralisation figurait dans le business case arbitré en S9 : la décision du jalon G5 n'a pas attendu un nouveau cycle budgétaire.

## Pièges à éviter

- **Appeler « pilote » une démonstration.** Parade : un pilote a de vrais utilisateurs, de vrais cas et de vraies conséquences ; sinon, le nommer POC et ne rien en conclure sur la valeur.
- **Piloter sans référence.** Sans mesure de départ, le gain est invérifiable. Parade : référence signée par la finance avant le premier ticket.
- **Choisir un terrain trop favorable.** La meilleure équipe et les cas simples donnent des résultats intransposables. Parade : périmètre représentatif, biais documentés dans le bilan.
- **Prolonger le pilote faute de décision.** Parade : date de fin et décideur inscrits au plan. Un pilote qui dure est un POC qui ne dit pas son nom.
- **Généraliser d'un seul coup.** Parade : des vagues, avec un point d'arrêt entre chacune.

## Pour aller plus loin

- Savoir terrain : [le purgatoire des POC](/savoir/poc-purgatoire), [la démo trompeuse](/savoir/demo-trompeuse), [tranche verticale](/savoir/tranche-verticale), [mode fantôme](/savoir/mode-fantome)
- Guides : [réussir le pilote](/guides/reussir-le-pilote), [passer en production](/guides/passer-en-production)
- Templates : [plan de pilote](/templates/plan-pilote), [bilan de pilote](/templates/bilan-pilote), [checklist de mise en production](/templates/checklist-mise-en-production)
- Frameworks : [développement piloté par les évaluations](/frameworks/eval-driven-development), [AgentOps](/frameworks/agentops)
