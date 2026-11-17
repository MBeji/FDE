---
id: plan-de-controle-processus
titre: "Plan de contrôle du processus"
resume: "Le document du propriétaire de processus une fois le système en production : indicateurs lus en trois étages, seuils d'alerte et réactions, règles de changement, rythme des revues et backlog d'amélioration. Ce qui empêche le résultat du pilote de s'éroder."
phase: industrialiser
type: livrable
format: tableau
effort: "2 jours de mise en place avec le propriétaire du processus, puis une heure par revue"
tags: [bpm, gouvernance, indicateurs, amelioration-continue, controle]
frameworks: [gouvernance-processus, regle-10-20-70, process-mining-dmaic, mesure-impact]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le plan de contrôle dit comment le processus est tenu une fois les agents en production : qui en répond, quels indicateurs sont lus, à quel seuil on réagit et qui a le droit de changer quoi. C'est l'étape Contrôler du Lean Six Sigma, appliquée à un processus où des agents travaillent.

Il ne remplace ni le [tableau de bord de valeur](/templates/tableau-de-bord-valeur), qui rapproche les résultats du business case, ni le [runbook](/templates/runbook-agent), qui sert à exploiter un agent. Il appartient au propriétaire du processus.

## Quand l'utiliser

En phase Industrialiser, avant la dernière vague de déploiement. Il est exigé au jalon G6 et sa tenue par le client seul est vérifiée au jalon G7. Inutile pour un prototype ou un pilote court : le [plan de pilote](/templates/plan-pilote) suffit.

## Comment le remplir

1. Écrire le mandat du propriétaire avec le sponsor.
2. Choisir peu d'indicateurs, rangés en trois étages : processus et personnes, technologie et données, modèles et agents.
3. Pour chacun : une source automatique, un seuil d'alerte, une réaction, un nom.
4. Fixer qui décide de chaque type de changement.
5. Caler les revues sur les instances existantes.
6. Ouvrir le journal des écarts et le backlog d'amélioration dès la première revue.

## Critères de qualité

- [ ] Le propriétaire est une personne du métier, avec un mandat écrit.
- [ ] Les indicateurs de l'étage du haut sont ceux du business case.
- [ ] Chaque seuil d'alerte a une réaction écrite et une personne qui la déclenche.
- [ ] Aucun indicateur ne dépend d'un relevé manuel.
- [ ] Chaque type de changement a un décideur et une preuve exigée.
- [ ] Une revue périodique rejoue l'analyse des parcours réels.
- [ ] Le client a animé au moins une revue sans l'équipe FDE.

<!-- section: template -->
# Plan de contrôle du processus — {{client}} — {{domaine}}

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Processus** | _[Déclencheur et résultat]_ |
| **Propriétaire du processus** | _[Nom, fonction]_ |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Références versionnées** | _[Modèle du processus, registre des règles, matrice humain-agent : numéros de version]_ |
| **Instance de revue** | _[Nom, fréquence, présidence]_ |

## 1. Mandat du propriétaire

_[Ce dont il répond, ce qu'il arbitre, le budget d'amélioration dont il dispose, qui le remplace.]_

## 2. Indicateurs et seuils

### Processus et personnes

| Indicateur | Définition | Source | Fréquence | Référence | Cible | Seuil d'alerte | Réaction | Qui déclenche |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _[Temps de cycle]_ | | | | | | | | |
| _[Coût par transaction]_ | | | | | | | | |
| _[Taux de reprise]_ | | | | | | | | |
| _[Taux d'intervention humaine]_ | | | | | | | | |
| _[Adoption]_ | | | | | | | | |

### Technologie et données

| Indicateur | Définition | Source | Fréquence | Cible | Seuil d'alerte | Réaction | Qui déclenche |
| --- | --- | --- | --- | --- | --- | --- | --- |
| _[Disponibilité des outils, fraîcheur des connaissances, coût d'inférence]_ | | | | | | | |

### Modèles et agents

| Indicateur | Définition | Source | Fréquence | Cible | Seuil d'alerte | Réaction | Qui déclenche |
| --- | --- | --- | --- | --- | --- | --- | --- |
| _[Scores d'évaluation, dérive, escalades, actions inappropriées]_ | | | | | | | |

## 3. Conformité au modèle

| Parcours prévu | Part attendue | Part constatée | Écart à examiner |
| --- | --- | --- | --- |
| | | | |

_[Règle de traitement d'un parcours nouveau : à partir de quelle part du volume il est examiné, et par qui.]_

## 4. Règles de changement

| Type de changement | Qui demande | Qui décide | Preuve exigée | Trace |
| --- | --- | --- | --- | --- |
| _[Règle métier, critère d'entrée d'une voie]_ | | | | |
| _[Niveau d'autonomie]_ | | | | |
| _[Prompt, outil, modèle]_ | | | | |
| _[Arrêt d'une voie ou d'un agent]_ | | | | |

## 5. Rythme des revues

| Revue | Fréquence | Participants | Ordre du jour | Sortie |
| --- | --- | --- | --- | --- |
| | | | | |

## 6. Journal des écarts et des décisions

| Date | Écart ou demande | Cause établie | Décision | Responsable | Échéance |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

## 7. Backlog d'amélioration

| Sujet | Origine | Gain attendu | Verdict | Priorité |
| --- | --- | --- | --- | --- |
| | _[Revue des parcours, incident, terrain]_ | | _[Supprimer / Réingénierer / Automatiser / Agentifier]_ | |

## 8. Validation

| Rôle | Nom | Date |
| --- | --- | --- |
| Propriétaire du processus | | |
| Sponsor | | |
| DSI ou exploitation | | |

<!-- section: exemple -->
# Plan de contrôle du processus — Voxalis — Assistance & SAV Entreprises

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Processus** | Traitement d'un incident technique PME, du signalement au rétablissement confirmé |
| **Propriétaire du processus** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Version** | 1.0 du 1er octobre 2026, validée à la troisième séance du comité ; 1.1 du 22 janvier 2027, après la mesure à +3 mois |
| **Rédacteur** | Hugo, FDE, avec le product owner de SAV Augmenté et le responsable AgentOps |
| **Références versionnées** | Modèle du processus en trois voies ; registre des règles ; matrice humain-agent, version 2.0 et suivantes |
| **Instance de revue** | Comité de gouvernance IA, mensuel, coprésidé par Sophie Lambert et Karim Haddad |

## 1. Mandat du propriétaire

Sophie Lambert répond du délai, du coût et de la qualité du traitement des incidents PME, toutes voies confondues. Elle arbitre entre les plateaux, l'équipe AgentOps et la Direction Réseau. Elle décide des règles métier et des critères d'entrée des voies. Elle propose au comité les changements d'autonomie. Nadia Cherif la supplée pour les décisions d'arrêt sur son plateau.

## 2. Indicateurs et seuils

### Processus et personnes

| Indicateur | Définition | Source | Fréquence | Référence | Cible | Seuil d'alerte | Réaction | Qui déclenche |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Délai moyen de résolution | De l'ouverture à la clôture, en heures d'horloge ; lu aussi par voie | Traces du système | Hebdomadaire | 31 h | 12 h à 18 mois ; 13,2 h à +3 mois | Plus de 16 h deux semaines de suite | Lecture par voie, puis par motif | Sophie Lambert |
| Coût par ticket | Coût complet du domaine rapporté aux tickets | Contrôle de gestion | Trimestrielle | 41 € | 26 € ; 29 € à +3 mois | Écart de plus de 10 % à la trajectoire du business case | Revue avec Julien Faure | Product owner |
| Taux de réouverture | Tickets rouverts après clôture | Traces du système | Hebdomadaire | 14 % | 7 % ; 8 % à +3 mois | Plus de 10 % | Relecture de 30 tickets rouverts, analyse des causes | Responsable de plateau |
| Résolution sans intervention humaine | Cas clos sans action ni approbation d'une personne | Journal des décisions | Hebdomadaire | 0 % | 35 % ; 33 % à +3 mois | Moins de 28 %, ou chute de 5 points en une semaine | Recherche du motif ou de l'outil en cause | Responsable AgentOps |
| Propositions acceptées sans correction, voie assistée | Part des propositions approuvées telles quelles | Poste de supervision | Hebdomadaire | Sans objet | Au moins 85 % | Moins de 80 % ; ou cas témoins non détectés | Revue de cas avec les superviseurs | Responsable de plateau |
| Usage quotidien du poste de supervision | Conseillers actifs chaque jour | Poste de supervision | Hebdomadaire | Sans objet | Au moins 90 % ; 16 conseillers sur 18 à la fin du pilote | Moins de 80 % sur un plateau | Entretiens, observation d'une demi-journée | Responsable de plateau |

### Technologie et données

| Indicateur | Définition | Source | Fréquence | Cible | Seuil d'alerte | Réaction | Qui déclenche |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Disponibilité des outils exposés aux agents | Appels aboutis sur appels tentés, par outil | Observabilité | Continue | À fixer avec la DSI, par outil | Outil indisponible plus de 60 secondes | Diagnostic à confiance faible ; cas vers l'expert N2 | Automatique, puis AgentOps |
| Fraîcheur des connaissances | Articles servis aux agents validés depuis moins de 12 mois | Base de connaissances | Mensuelle | 100 % | Un article servi hors délai | Retrait de l'article ; validation par un expert N2 | Agent Qualité, puis expert N2 |
| Coût d'inférence par ticket | Dépense d'inférence rapportée aux tickets traités | Suivi FinOps | Hebdomadaire | 0,38 € mesuré au pilote | Plafond de 0,50 € | Analyse par agent et par voie | Responsable AgentOps |

### Modèles et agents

| Indicateur | Définition | Source | Fréquence | Cible | Seuil d'alerte | Réaction | Qui déclenche |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exactitude de la qualification | Sur le golden set rejoué | Chaîne d'évaluation | Chaque nuit | Au moins 95 % | Sous le seuil | Blocage du déploiement en cours | Automatique |
| Justesse du diagnostic | Golden set, et 5 % des diagnostics revus par les experts N2 | Chaîne d'évaluation, échantillons | Chaque nuit ; chaque semaine | Au moins 90 % | Moins de 88 % en moyenne hebdomadaire | Analyse d'erreurs avant toute retouche | Responsable AgentOps |
| Conformité des messages | Contrôle de chaque cas clos | Agent Qualité | Continue | Au moins 98 % | Sous le seuil | Revue des gabarits | Responsable de plateau |
| Actions inappropriées | Action hors règle exécutée | Contrôle des cas clos | Continue | 0 | Une seule | Arrêt de la voie ; revue le jour même | Responsable de plateau ou AgentOps |

## 3. Conformité au modèle

| Parcours prévu | Part attendue | Part constatée | Écart à examiner |
| --- | --- | --- | --- |
| Voie autonome | 35 % | 33 % de résolution sans intervention humaine à +3 mois | Motifs encore fermés à la voie |
| Voie assistée | 45 % | Suivie chaque semaine | Bascules depuis la voie autonome |
| Voie experte | 20 % | Suivie chaque semaine | Récidives |

Un parcours qui ne correspond à aucune voie est examiné en revue trimestrielle dès qu'il se répète. Les bascules de voie sont relues chaque semaine.

## 4. Règles de changement

| Type de changement | Qui demande | Qui décide | Preuve exigée | Trace |
| --- | --- | --- | --- | --- |
| Règle métier, critère d'entrée d'une voie | Responsable de plateau, experts N2 | Sophie Lambert | Cas réels à l'appui ; évaluation rejouée | Registre des règles |
| Ouverture d'un motif à la voie autonome, niveau d'autonomie | Sophie Lambert | Comité de gouvernance IA | Dossier de preuves | Registre des agents |
| Prompt, outil, modèle | Équipe AgentOps | Propriétaire de l'agent | Non-régression sur le golden set | Journal des versions |
| Arrêt d'une voie ou d'un agent | Toute personne du plateau | Responsable de plateau ou AgentOps, sans attendre | Aucune ; revue après coup | Journal des écarts |

## 5. Rythme des revues

| Revue | Fréquence | Participants | Ordre du jour | Sortie |
| --- | --- | --- | --- | --- |
| Point d'exploitation | Hebdomadaire | AgentOps, responsables de plateau | Alertes, bascules de voie, incidents | Actions de la semaine |
| Revue de performance du processus | Mensuelle, en première partie du comité de gouvernance IA | Sophie Lambert, Karim Haddad, product owner, AgentOps | Les trois étages, dans l'ordre ; demandes de changement | Décisions tracées |
| Revue d'amélioration | Trimestrielle | Les mêmes, avec deux superviseurs de cas et un expert N2 | Parcours réels rejoués ; gaspillages apparus ; verdicts à réexaminer | Backlog mis à jour |

## 6. Journal des écarts et des décisions

| Date | Écart ou demande | Cause établie | Décision | Responsable | Échéance |
| --- | --- | --- | --- | --- | --- |
| 22 janvier 2027 | Réouverture à 8 % pour une cible de 7 % | En cours d'analyse sur les tickets rouverts | Aucune retouche des agents avant le résultat | Responsable de plateau de Nantes | Revue de février |
| 22 janvier 2027 | Résolution sans intervention humaine à 33 % pour une cible de 35 % | Motifs encore fermés à la voie autonome | Dossier de preuves à préparer pour le motif suivant | Sophie Lambert | Comité de mars |

## 7. Backlog d'amélioration

| Sujet | Origine | Gain attendu | Verdict | Priorité |
| --- | --- | --- | --- | --- |
| Relier les rappels des clients aux tickets | Limite relevée au diagnostic | Mesurer une attente aujourd'hui invisible | Automatiser | Haute |
| Rattacher les tickets à un incident collectif dès sa déclaration | Exception du processus cible | Moins de diagnostics inutiles | Automatiser | Haute |
| Étendre le dispositif aux demandes de modification | Portefeuille | 23 % des tickets du domaine | À instruire avec la grille | À arbitrer |

## 8. Validation

| Rôle | Nom | Date |
| --- | --- | --- |
| Propriétaire du processus | Sophie Lambert | 1er octobre 2026 |
| Sponsor | Claire Besson | 8 octobre 2026 |
| DSI ou exploitation | Karim Haddad | 1er octobre 2026 |
