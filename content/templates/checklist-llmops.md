---
id: checklist-llmops
titre: "Checklist LLMOps et AgentOps"
resume: "La liste de contrôle de l'exploitation d'agents en production : versions, évaluations de non-régression, traçage, alertes, déploiement progressif, mises à jour de modèle, coûts, incidents, boucle vers le golden set, rôles et astreinte. Statut et preuve par ligne."
phase: industrialiser
type: checklist
format: tableau
effort: "1 jour de collecte des preuves, 2 h de revue"
tags: [llmops, agentops, exploitation, production]
frameworks: [agentops, eval-driven-development, finops-ia]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un agent en production change sans que personne ne touche au code : le modèle évolue, les données dérivent, les usages se déplacent. Cette checklist vérifie que l'équipe sait **voir** (traces, tableaux de bord, alertes), **prévenir** (versions, évaluations de non-régression, déploiement progressif), **réagir** (retour arrière, incidents, astreinte) et **apprendre** (boucle vers le golden set). Elle applique les pratiques [AgentOps](/frameworks/agentops), le [développement guidé par les évaluations](/frameworks/eval-driven-development) et le [pilotage des coûts](/frameworks/finops-ia).

## Quand l'utiliser

Avant chaque passage à l'échelle (première vague, vague suivante, nouveau périmètre), puis chaque trimestre. Elle complète la [checklist de mise en production](/templates/checklist-mise-en-production), centrée sur le lancement, et le [runbook](/templates/runbook-agent), qui décrit les gestes d'exploitation.

## Comment le remplir

1. Pour chaque ligne, joindre une preuve consultable : tableau de bord, configuration, compte rendu, résultat de test.
2. Statuer : conforme, partiel, non conforme. « Prévu » vaut non conforme.
3. Classer chaque écart : bloquant pour l'échelle, ou réserve avec échéance.
4. Faire valider la synthèse par le futur responsable de l'exploitation côté client, pas par l'équipe qui a construit.

## Critères de qualité

- [ ] Chaque ligne a une preuve consultable, pas une déclaration.
- [ ] Un retour arrière a été réellement exécuté, chronométré.
- [ ] Les seuils d'alerte sont chiffrés et reliés aux seuils d'évaluation.
- [ ] Le coût par cas est mesuré et comparé au business case.
- [ ] Chaque rôle d'exploitation est tenu par une personne du client nommée.

<!-- section: template -->
# Checklist LLMOps et AgentOps — {{client}}, _[Nom du système]_

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Revue** | _[Avant vague n° / Trimestrielle]_ du {{date}} |
| **Préparée par** | {{auteur}} |
| **Validée par** | _[Responsable de l'exploitation côté client]_ |

**Statuts** : Conforme / Partiel / Non conforme. **Écart** : B (bloquant pour l'échelle) ou R (réserve avec échéance).

## 1. Versions

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| V1 | Prompts et instructions versionnés, chaque version liée à un résultat d'évaluation | | | |
| V2 | Définitions des outils versionnées, compatibilité vérifiée | | | |
| V3 | Version du modèle figée et explicite pour chaque agent | | | |
| V4 | Configuration (seuils, plafonds, catalogue d'actions) versionnée | | | |

## 2. Évaluations automatisées et non-régression

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| E1 | Golden set et jeu adverse rejoués automatiquement à chaque changement | | | |
| E2 | Blocage automatique du déploiement sous les seuils | | | |
| E3 | Rejeu périodique en production (nocturne ou hebdomadaire) | | | |
| E4 | Modèles juges calibrés sur des notations humaines | | | |

## 3. Traçage et tableaux de bord

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| T1 | Trace de bout en bout par cas, avec décisions humaines | | | |
| T2 | Tableau de bord qualité : scores, escalades, corrections humaines | | | |
| T3 | Tableau de bord opérationnel : volumes, délais, erreurs d'outils | | | |
| T4 | Tableau de bord métier relié aux indicateurs de valeur | | | |

## 4. Alertes

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| A1 | Seuils d'alerte chiffrés sur la qualité, la latence, les erreurs et le coût | | | |
| A2 | Destinataire et délai de prise en compte par alerte | | | |
| A3 | Alertes testées par injection de défaut | | | |

## 5. Déploiement progressif et retour arrière

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| D1 | Activation par périmètre (site, motif, part du trafic) | | | |
| D2 | Critères de passage d'une étape à la suivante | | | |
| D3 | Retour arrière en une commande, exécuté et chronométré | | | |
| D4 | Mode dégradé sans agents, testé | | | |

## 6. Mises à jour de modèle

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| M1 | Veille sur les dépréciations annoncées par le fournisseur | | | |
| M2 | Procédure de qualification d'un nouveau modèle sur le golden set | | | |
| M3 | Bascule progressive et réversible | | | |

## 7. Coûts par cas et budgets

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| C1 | Coût par cas mesuré, par agent et par voie | | | |
| C2 | Comparaison au coût retenu dans le business case | | | |
| C3 | Plafond dur par cas et budget mensuel, avec alerte | | | |

## 8. Incidents et post-mortem

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| I1 | Définition et niveaux de gravité d'un incident d'agent | | | |
| I2 | Procédure de gestion, reliée au dispositif d'incidents du client | | | |
| I3 | Post-mortem sans recherche de coupable pour chaque incident, actions suivies | | | |

## 9. Boucle de retour vers le golden set

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| G1 | Les erreurs constatées en production deviennent des cas d'évaluation | | | |
| G2 | Annotation par des experts du métier, rythme défini | | | |
| G3 | Gouvernance du golden set : propriétaire, versions, représentativité | | | |

## 10. Rôles et astreinte

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| R1 | Responsable de l'exploitation des agents nommé côté client | | | |
| R2 | Équipe d'exploitation formée, effectif cible atteint | | | |
| R3 | Astreinte définie, horaires et escalade | | | |
| R4 | Comité de gouvernance qui décide des évolutions d'autonomie | | | |

## Synthèse

| Domaine | Conforme | Partiel | Non conforme | Bloquants |
| --- | --- | --- | --- | --- |
| | | | | |

**Décision** : _[Passage à l'échelle autorisé / autorisé avec réserves / refusé]_

**Réserves** : _[Liste, échéance, responsable]_

<!-- section: exemple -->
# Checklist LLMOps et AgentOps — Voxalis, SAV Augmenté

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Revue** | Avant la vague 1 (Ouest, S30), revue du 29 juillet 2026 |
| **Préparée par** | Inès, FDE, avec le responsable AgentOps de Voxalis |
| **Validée par** | Thomas Nguyen, Responsable Data & IA |

**Statuts** : Conforme / Partiel / Non conforme. **Écart** : B (bloquant pour l'échelle) ou R (réserve avec échéance).

## 1. Versions

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| V1 | Prompts versionnés | Conforme | Dépôt unique ; 23 versions publiées pendant le pilote, chacune liée à son rapport d'évaluation | |
| V2 | Outils versionnés | Conforme | Les 9 outils de la passerelle MCP en version 1.3 ; tests de contrat exécutés à chaque publication | |
| V3 | Modèle figé | Conforme | Version de modèle épinglée par agent dans la configuration ; aucune version flottante | |
| V4 | Configuration versionnée | Conforme | Seuils d'escalade, plafonds et catalogue d'actions dans le dépôt, revus en comité | |

## 2. Évaluations automatisées et non-régression

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| E1 | Rejeu à chaque changement | Conforme | 600 cas du golden set, 142 cas issus du pilote et 120 cas adverses rejoués en 40 minutes à chaque publication | |
| E2 | Blocage sous les seuils | Conforme | Publication refusée si qualification < 95 %, diagnostic < 90 %, conformité des messages < 98 % ou une seule action inappropriée ; 2 blocages effectifs pendant le pilote | |
| E3 | Rejeu en production | Conforme | Rejeu nocturne sur le golden set ; tableau de tendance sur 30 jours | |
| E4 | Modèles juges calibrés | Partiel | Juge de la conformité des messages calibré sur 80 cas notés (concordance 94 %) ; juge de la qualité des preuves calibré sur 50 cas seulement | R : 150 cas notés avant la vague 2, Inès et experts N2 |

## 3. Traçage et tableaux de bord

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| T1 | Trace de bout en bout | Conforme | Traces OpenTelemetry reliées au ticket, approbations du conseiller comprises ; conservation 13 mois | |
| T2 | Tableau de bord qualité | Conforme | Scores hebdomadaires sur l'échantillon de 5 % revu par les experts N2, taux d'escalade, taux de correction | |
| T3 | Tableau de bord opérationnel | Conforme | Volumes par voie, latence au 95e centile, erreurs par outil | |
| T4 | Tableau de bord métier | Partiel | MTTR, FCR, réouverture et résolution sans intervention humaine suivis ; coût par ticket complet pas encore calculé automatiquement par la finance | R : flux vers le tableau de bord de valeur avant la vague 2, Hugo et contrôle de gestion |

## 4. Alertes

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| A1 | Seuils chiffrés | Conforme | Justesse hebdomadaire du diagnostic < 88 % ; taux d'escalade > 1,5 fois la moyenne sur 2 h ; erreurs d'un outil > 5 % sur 15 min ; coût horaire > 150 % du prévisionnel ; plus de 5 diagnostics identiques sur une zone en 30 min | |
| A2 | Destinataires et délais | Conforme | Astreinte AgentOps sous 15 minutes ; Direction Réseau pour les corrélations de zone | |
| A3 | Alertes testées | Conforme | Injection d'une panne simulée de la supervision et d'un dépassement de coût le 22 juillet : alertes reçues en 3 et 6 minutes | |

## 5. Déploiement progressif et retour arrière

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| D1 | Activation par périmètre | Conforme | Activation par plateau, par motif et par part du trafic ; plan de la vague Ouest : 25 % des tickets la première semaine, 100 % en S32 si les critères sont tenus | |
| D2 | Critères de passage | Conforme | Pas d'élargissement si la réouverture dépasse 10 % ou en cas d'action inappropriée sur la semaine | |
| D3 | Retour arrière | Conforme | Exécuté le 15 juillet en recette puis en production hors heures : retour à la version précédente en 4 minutes | |
| D4 | Mode dégradé | Conforme | Bascule en voie assistée sans agents testée pendant le mode fantôme du pilote (S23), refaite le 22 juillet | |

## 6. Mises à jour de modèle

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| M1 | Veille sur les dépréciations | Partiel | Suivie par l'équipe FDE ; pas encore inscrite dans les rôles AgentOps de Voxalis | R : fiche de poste AgentOps mise à jour en S31, Thomas Nguyen |
| M2 | Qualification d'un nouveau modèle | Conforme | Procédure écrite : rejeu complet, comparaison agent par agent, revue de 50 traces par les experts N2, décision en comité de gouvernance IA | |
| M3 | Bascule progressive | Conforme | Même mécanisme que D1, par agent | |

## 7. Coûts par cas et budgets

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| C1 | Coût par cas mesuré | Conforme | 0,38 € d'inférence par ticket en moyenne sur le pilote, détaillé par agent et par voie | |
| C2 | Comparaison au business case | Conforme | Projection sur 420 000 tickets compatible avec l'enveloppe « inférence et plateforme » de 0,55 M€ par an ; note de Julien Faure du 24 juillet | |
| C3 | Plafonds et budget | Conforme | Plafond dur de 1,20 € par cas tous agents confondus, arrêt et escalade au-delà ; budget mensuel par plateau avec alerte à 80 % | |

## 8. Incidents et post-mortem

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| I1 | Gravité définie | Conforme | Trois niveaux : action inappropriée ou fuite de données (grave), message client erroné (majeur), dégradation de qualité (mineur) | |
| I2 | Procédure reliée au dispositif client | Conforme | Incidents d'agents enregistrés dans l'outil de gestion des incidents de la DSI, catégorie dédiée | |
| I3 | Post-mortem | Conforme | Post-mortem des deux incidents mineurs de S24 (messages envoyés en double) : cause, relance d'un appel d'outil sans clé d'idempotence ; correction et test de non-régression ajoutés | |

## 9. Boucle de retour vers le golden set

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| G1 | Erreurs vers évaluations | Conforme | L'Agent Qualité signale les cas corrigés ou rouverts ; 142 cas ajoutés pendant le pilote | |
| G2 | Annotation | Conforme | Deux experts N2, 4 h par semaine, file d'annotation hebdomadaire | |
| G3 | Gouvernance du golden set | Partiel | Propriétaire nommé (Sophie Lambert) ; représentativité non vérifiée pour les plateaux hors Ouest | B pour la vague 2 : échantillon de 100 cas Nord et Est annotés avant S33, experts N2 |

## 10. Rôles et astreinte

| N° | Contrôle | Statut | Preuve | Écart |
| --- | --- | --- | --- | --- |
| R1 | Responsable nommé | Conforme | Responsable AgentOps Voxalis nommé le 1er juillet, rattaché à Thomas Nguyen | |
| R2 | Équipe formée | Partiel | 2 ETP sur les 3 prévus en poste et formés ; le troisième arrive en S33 | R : binôme FDE en renfort jusqu'à son arrivée, Léo |
| R3 | Astreinte | Conforme | Du lundi au samedi, 8 h à 20 h, alignée sur les horaires des plateaux ; hors de ces horaires, les actions réseau autonomes sont suspendues et les tickets attendent la voie assistée | |
| R4 | Comité de gouvernance | Conforme | Comité de gouvernance IA mensuel coprésidé par Sophie Lambert et Karim Haddad : mandat signé le 22 juillet (décisions d'autonomie, revue trimestrielle des droits), première séance le 6 août | |

## Synthèse

| Domaine | Conforme | Partiel | Non conforme | Bloquants |
| --- | --- | --- | --- | --- |
| Versions et évaluations | 7 | 1 | 0 | 0 |
| Observabilité et alertes | 6 | 1 | 0 | 0 |
| Déploiement et modèles | 6 | 1 | 0 | 0 |
| Coûts et incidents | 6 | 0 | 0 | 0 |
| Golden set et rôles | 5 | 2 | 0 | 1 pour la vague 2 |

**Décision** : passage à la vague 1 (Ouest) autorisé avec réserves, le 29 juillet 2026, par Thomas Nguyen et Sophie Lambert. La vague 2 (Nord et Est, S33) est conditionnée à la levée de G3.

**Réserves**

| Réserve | Échéance | Responsable |
| --- | --- | --- |
| E4 : calibration du juge de la qualité des preuves sur 150 cas | Avant S33 | Inès, experts N2 |
| T4 : coût par ticket complet dans le tableau de bord de valeur | Avant S33 | Hugo, contrôle de gestion |
| M1 : veille sur les modèles inscrite dans les rôles AgentOps | S31 | Thomas Nguyen |
| R2 : renfort jusqu'à l'arrivée du troisième ETP AgentOps | S33 | Léo |
| G3 : 100 cas Nord et Est annotés (bloquant pour la vague 2) | Avant S33 | Experts N2 |
