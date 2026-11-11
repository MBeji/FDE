---
id: plan-de-sprint
titre: "Plan de sprint et revue de démonstration"
resume: "La trame d'un sprint de construction d'agents : objectif relié à un indicateur, hypothèses à tester, critères d'évaluation visés, capacité et risques ; puis la revue, démontrée sur des cas réels non choisis, avec scores, retours des utilisateurs et décisions."
phase: construire
type: trame
format: document
effort: "1 h 30 de plan, 1 h 30 de revue, par sprint"
tags: [delivery, sprint, demonstration, evaluation]
frameworks: [eval-driven-development, evaluation-agents, poc-pilote-production]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un sprint d'agents ne se juge pas à la liste des fonctionnalités livrées mais à ce qu'il a **prouvé**. Cette trame relie chaque sprint à un indicateur métier, transforme le travail en hypothèses testables, fixe les scores visés avant de commencer et organise une revue qui résiste à la [démonstration trompeuse](/savoir/demo-trompeuse) : les cas montrés sont tirés au hasard par le métier, jamais choisis par l'équipe.

## Quand l'utiliser

À chaque sprint de la phase Construire, prototype comme pilote. Le plan se rédige le premier jour du sprint ; la revue le dernier, avec le propriétaire métier et au moins deux utilisateurs. Les scores proviennent du [plan d'évaluation](/templates/plan-evaluation) et alimentent le [rapport d'évaluation](/templates/rapport-evaluation).

## Comment le remplir

1. Écrire l'objectif en une phrase qui nomme un indicateur et une population de cas.
2. Formuler trois à cinq hypothèses, chacune avec son critère de réfutation.
3. Fixer les seuils visés avant d'écrire la première ligne de code.
4. Calculer la capacité réelle (absences, jours fériés, temps partiels).
5. En revue : faire tirer les cas par le métier, montrer aussi les échecs, statuer sur chaque hypothèse.
6. Conclure par des décisions datées et un objectif pour le sprint suivant.

## Critères de qualité

- [ ] L'objectif est relié à un indicateur métier chiffré.
- [ ] Les seuils sont fixés avant le sprint, pas après les résultats.
- [ ] La démonstration porte sur des cas réels tirés par le métier.
- [ ] Les échecs sont montrés et analysés.
- [ ] Chaque hypothèse reçoit un verdict : confirmée, réfutée, non concluante.

<!-- section: template -->
# Plan de sprint et revue — {{client}}, sprint _[n°]_

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sprint** | _[n°]_, du _[date]_ au _[date]_ |
| **Propriétaire métier** | _[Nom, fonction]_ |
| **Rédacteur** | {{auteur}}, le {{date}} |

## Partie 1 — Plan

### 1. Objectif

**Objectif du sprint** : _[Une phrase : ce qui sera prouvé, sur quels cas, au service de quel indicateur]_

**Indicateur métier visé** : _[Indicateur, valeur de référence, cible de la phase]_

### 2. Périmètre

- **Inclus** : _[Agents, outils, motifs ou cas, utilisateurs]_
- **Exclus** : _[Ce qui n'est pas traité ce sprint]_
- **Conditions d'environnement** : _[Données, outils en lecture ou simulés, actions réelles ou non]_

### 3. Hypothèses à tester

| N° | Hypothèse | Test | Critère de réfutation |
| --- | --- | --- | --- |
| H1 | | | |

### 4. Critères d'évaluation visés

| Critère | Jeu de test | Seuil visé | Seuil du plan d'évaluation |
| --- | --- | --- | --- |
| | | | |

### 5. Capacité

| Personne | Rôle | Jours disponibles | Remarque |
| --- | --- | --- | --- |
| | | | _[Temps partiel, congés, jours fériés]_ |
| **Total** | | | |

### 6. Travaux engagés

| N° | Travail | Hypothèse servie | Responsable | Estimation (j) |
| --- | --- | --- | --- | --- |
| T1 | | | | |

### 7. Risques

| Risque | Effet sur le sprint | Parade | Responsable |
| --- | --- | --- | --- |
| | | | |

### 8. Protocole de démonstration

- **Tirage des cas** : _[Qui tire, dans quelle population, combien, quand]_
- **Conditions** : _[Données réelles ou rejouées, outils en lecture, actions simulées]_
- **Participants** : _[Propriétaire métier, utilisateurs, experts]_

## Partie 2 — Revue de démonstration

**Date de la revue** : _[Date]_. **Participants** : _[Noms]_

### 9. Ce qui a été démontré

| Cas tirés | Traités de bout en bout | Escaladés à juste titre | Erreurs | Commentaire |
| --- | --- | --- | --- | --- |
| | | | | |

**Échecs montrés et analysés** : _[Cas, cause, correction prévue]_

### 10. Scores d'évaluation

| Critère | Seuil visé | Résultat | Écart |
| --- | --- | --- | --- |
| | | | |

### 11. Retours des utilisateurs

| Retour | Qui | Fréquence | Suite donnée |
| --- | --- | --- | --- |
| | | | |

### 12. Verdict sur les hypothèses

| N° | Verdict | Preuve |
| --- | --- | --- |
| H1 | _[Confirmée / Réfutée / Non concluante]_ | |

### 13. Décisions

| N° | Décision | Décideur | Échéance |
| --- | --- | --- | --- |
| D1 | | | |

### 14. Prochain sprint

**Objectif proposé** : _[Une phrase]_. **Points reportés** : _[Liste]_

<!-- section: exemple -->
# Plan de sprint et revue — Voxalis, sprint 2 du prototype

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sprint** | Prototype, sprint 2 (S19 à S20), du 18 au 29 mai 2026 |
| **Propriétaire métier** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Rédacteur** | Léo, FDE, le 18 mai 2026 |

## Partie 1 — Plan

### 1. Objectif

**Objectif du sprint** : prouver, sur des tickets réels du motif « perte de synchronisation de l'accès » tirés au hasard, que SAV Augmenté enchaîne qualification, diagnostic et proposition de résolution approuvée par le conseiller, avec une justesse du diagnostic d'au moins 90 %.

**Indicateur métier visé** : MTTR de ce motif, 19 h à la référence (12 mois de tickets du segment PME) ; ambition de la tranche verticale : le diviser par deux pendant le pilote.

### 2. Périmètre

- **Inclus** : Orchestrateur de cas, Agent Qualification, Agent Diagnostic, Agent Résolution en L2 (proposition, approbation par le conseiller) ; outils `crm.lire_ticket`, `supervision.etat_service`, `ligne.lancer_test`, `inventaire.lire_parc`, `incidents.rechercher_connus`, `kb.rechercher` ; poste de supervision, version maquette.
- **Exclus** : Agent Communication (sprint 3), Agent Qualité, tout autre motif, toute action réelle sur le réseau.
- **Conditions d'environnement** : données de la veille copiées en recette ; outils de lecture branchés sur la recette ; `reseau.executer_action` simulé, aucune exécution réelle.

### 3. Hypothèses à tester

| N° | Hypothèse | Test | Critère de réfutation |
| --- | --- | --- | --- |
| H1 | Supervision et test de ligne suffisent à diagnostiquer le motif dans au moins 90 % des cas | 68 cas du golden set relevant du motif | Justesse inférieure à 85 % |
| H2 | L'action « resynchronisation à distance du port » est la bonne remédiation dans au moins 95 % des diagnostics justes | Mêmes 68 cas, comparaison à l'annotation des experts N2 | Moins de 90 % |
| H3 | Le conseiller approuve la proposition en moins de 2 minutes, sans ouvrir d'autre outil | Démonstration avec 4 conseillers de Nantes | Médiane supérieure à 4 minutes ou ouverture d'un autre outil dans plus d'un cas sur trois |
| H4 | Le coût d'inférence reste sous 0,40 € par ticket | Mesure sur les 68 cas et la démonstration | Plus de 0,50 € |

### 4. Critères d'évaluation visés

| Critère | Jeu de test | Seuil visé | Seuil du plan d'évaluation |
| --- | --- | --- | --- |
| Exactitude de la qualification | 68 cas du motif | ≥ 95 % | ≥ 95 % |
| Justesse du diagnostic | 68 cas du motif | ≥ 90 % | ≥ 90 % |
| Actions inappropriées | 22 cas adverses relevant du motif | 0 | 0 |
| Remédiation proposée juste | Diagnostics justes | ≥ 95 % | Non fixé à ce stade |
| Coût d'inférence par ticket | Tous les cas | ≤ 0,40 € | Non fixé à ce stade |

### 5. Capacité

| Personne | Rôle | Jours disponibles | Remarque |
| --- | --- | --- | --- |
| Léo | Ingénierie agents | 9 | Lundi de Pentecôte, 25 mai |
| Inès | Ingénierie agents, évaluations | 9 | |
| Hugo | Produit, poste de supervision | 4,5 | Mi-temps, préparation du pilote |
| Yasmine | Lead | 2 | Revue et arbitrages |
| 2 experts N2 Voxalis | Annotation, revue des diagnostics | 9 | Mi-temps chacun |
| Data engineer Voxalis | Données de recette, connecteurs | 9 | |
| Architecte SI Voxalis | Passerelle MCP | 4 | |
| Product owner Voxalis | Priorités, organisation de la revue | 4,5 | |
| **Total** | | **51** | |

### 6. Travaux engagés

| N° | Travail | Hypothèse servie | Responsable | Estimation (j) |
| --- | --- | --- | --- | --- |
| T1 | Brancher `ligne.lancer_test` et `incidents.rechercher_connus` sur la recette | H1 | Architecte SI, data engineer | 6 |
| T2 | Arbre de diagnostic du motif dans les instructions de l'Agent Diagnostic | H1 | Léo, experts N2 | 7 |
| T3 | Agent Résolution en L2 avec l'action simulée | H2 | Léo | 6 |
| T4 | Écran d'approbation du poste de supervision : diagnostic, preuves, action proposée | H3 | Hugo, product owner | 6 |
| T5 | Rejeu automatique des 68 cas et des 22 cas adverses à chaque modification | H1, H2, H4 | Inès | 5 |
| T6 | Annotation de la remédiation attendue sur les 68 cas | H2 | Experts N2 | 4 |
| T7 | Préparation et animation de la revue | Toutes | Product owner, Yasmine | 3 |

Reste 14 jours de marge pour les imprévus et la correction après le premier rejeu.

### 7. Risques

| Risque | Effet sur le sprint | Parade | Responsable |
| --- | --- | --- | --- |
| Recette du test de ligne instable | H1 non testable | Résultats de tests réels de la veille rejoués en secours | Data engineer |
| Moins de 20 tickets du motif sur la semaine | Démonstration non représentative | Tirage sur deux semaines | Product owner |
| Experts N2 rappelés en production | Annotation incomplète | Priorité donnée par Nadia Cherif, arbitrée au point hebdo | Yasmine |

### 8. Protocole de démonstration

- **Tirage des cas** : le matin de la revue, Nadia Cherif tire au hasard 20 tickets du motif parmi ceux créés à Nantes du 18 au 28 mai.
- **Conditions** : rejeu sur les données de la veille ; action de remédiation simulée ; résultat comparé à la résolution réelle du ticket.
- **Participants** : Sophie Lambert, Nadia Cherif, 4 conseillers N1, 2 experts N2, Thomas Nguyen, l'équipe FDE.

## Partie 2 — Revue de démonstration

**Date de la revue** : vendredi 29 mai 2026, 10 h, plateau de Nantes. **Participants** : comme prévu, plus Marc Dubois pour la partie garde-fous.

### 9. Ce qui a été démontré

| Cas tirés | Traités de bout en bout | Escaladés à juste titre | Erreurs | Commentaire |
| --- | --- | --- | --- | --- |
| 20 | 16 | 3 | 1 | Les 16 diagnostics concordent avec la résolution réelle ; les 3 escalades portaient sur des cas où la supervision ne répondait pas ou les preuves divergeaient |

**Échecs montrés et analysés** : un ticket diagnostiqué « désynchronisation locale », confiance élevée, alors qu'il relevait d'un incident collectif sur un équipement de quartier, déclaré une heure plus tard. Cause : aucune corrélation entre tickets simultanés d'une même zone. Correction prévue : alerte de corrélation dans l'Orchestrateur au-delà de 5 diagnostics identiques sur une zone en 30 minutes.

### 10. Scores d'évaluation

| Critère | Seuil visé | Résultat | Écart |
| --- | --- | --- | --- |
| Exactitude de la qualification | ≥ 95 % | 97,1 % (66 sur 68) | Atteint |
| Justesse du diagnostic | ≥ 90 % | 89,7 % (61 sur 68) | Manqué de 0,3 point |
| Actions inappropriées sur le jeu adverse | 0 | 0 sur 22 | Atteint |
| Remédiation proposée juste | ≥ 95 % | 96,7 % (59 sur 61) | Atteint |
| Coût d'inférence par ticket | ≤ 0,40 € | 0,46 € | Dépassé : contexte de supervision transmis en entier |

### 11. Retours des utilisateurs

| Retour | Qui | Fréquence | Suite donnée |
| --- | --- | --- | --- |
| « Je veux voir le résultat du test de ligne avant d'approuver, pas seulement la conclusion. » | Conseillers N1 | 4 sur 4 | Preuves affichées au-dessus de l'action proposée |
| Le diagnostic est trop long à lire | Conseillers N1 | 3 sur 4 | Format en trois lignes : cause, preuve, action |
| L'escalade doit dire ce qui manque | Experts N2 | 2 sur 2 | Champ « informations manquantes » rendu obligatoire |
| Médiane d'approbation : 1 min 40 s ; aucun autre outil ouvert sur 16 cas | Mesure pendant la revue | | H3 confirmée |

### 12. Verdict sur les hypothèses

| N° | Verdict | Preuve |
| --- | --- | --- |
| H1 | Non concluante | 89,7 % : au-dessus du seuil de réfutation, sous la cible ; 4 des 7 erreurs liées à des incidents collectifs |
| H2 | Confirmée | 96,7 % de remédiations justes |
| H3 | Confirmée | Médiane de 1 min 40 s, aucun autre outil ouvert |
| H4 | Réfutée | 0,46 € par ticket ; cause identifiée |

### 13. Décisions

| N° | Décision | Décideur | Échéance |
| --- | --- | --- | --- |
| D1 | Interroger `incidents.rechercher_connus` en premier et ajouter la corrélation par zone dans l'Orchestrateur | Sophie Lambert, sur proposition de Léo | Sprint 3 |
| D2 | Ne transmettre à l'Agent Diagnostic que les alarmes des 24 dernières heures sur les équipements du client | Thomas Nguyen | Sprint 3 |
| D3 | Le test de ligne en heures ouvrées du client reste soumis à l'approbation du conseiller | Sophie Lambert, Marc Dubois | Acté |
| D4 | Pas d'entrée en pilote sur ce motif tant que la justesse reste sous 90 % sur le golden set | Comité de pilotage du pilote | Revue de fin de prototype, 5 juin |

### 14. Prochain sprint

**Objectif proposé** (S21, sprint 3) : porter la justesse du diagnostic au-dessus de 90 % et le coût sous 0,40 € sur le motif, brancher l'Agent Communication pour les messages de statut, et préparer les deux semaines de mode fantôme du pilote. **Points reportés** : Agent Qualité, test de bascule en mode dégradé (à réaliser pendant le mode fantôme).
