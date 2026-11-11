---
id: registre-agents
titre: "Registre des agents"
resume: "L'inventaire tenu à jour des agents en service : qui en répond, ce qu'ils ont le droit de faire, à quel niveau de risque, dans quelle version et avec quels résultats."
phase: industrialiser
type: grille
format: tableau
effort: "30 min par agent à la création, puis 1 h par mois"
tags: [gouvernance, registre, autonomie, risque]
frameworks: [gouvernance-ia, niveaux-autonomie, agentops, nist-ai-rmf]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Répondre en une minute aux trois questions que posent un dirigeant, un auditeur ou l'astreinte : quels agents tournent, qui en répond, que peuvent-ils modifier. Sans registre, les agents se multiplient sans propriétaire et l'autonomie s'élargit sans décision.

## Quand l'utiliser

À créer avant la première mise en production : c'est un point de la [revue de préparation](/templates/checklist-mise-en-production). Ensuite, à chaque déploiement et à chaque séance de l'instance de [gouvernance](/frameworks/gouvernance-ia).

## Comment le remplir

1. Une ligne par agent, tirée de sa [fiche agent](/templates/fiche-agent). Le registre résume, il ne remplace pas.
2. Nommer un propriétaire métier : une personne, pas une équipe ni la DSI.
3. Écrire l'[autonomie](/frameworks/niveaux-autonomie) par outil et par situation, et lister tout outil d'écriture.
4. Coter le risque avec la grille : il fixe la fréquence de revue.
5. Dater chaque revue et consigner chaque changement : qui a décidé, sur quelle preuve.

## Critères de qualité

- [ ] Chaque agent en service a une ligne, un propriétaire métier et un responsable d'exploitation nommés.
- [ ] Tout outil d'écriture figure au registre.
- [ ] L'autonomie inscrite est celle configurée en production.
- [ ] Aucune revue n'est en retard sur la fréquence que fixe le niveau de risque.
- [ ] Chaque changement d'autonomie renvoie à une décision datée et à sa preuve.
- [ ] Les agents retirés restent au registre, avec leur date de retrait.

<!-- section: template -->
# Registre des agents — {{client}}

| | |
| --- | --- |
| **Périmètre** | _[Domaine ou entreprise : {{domaine}}]_ |
| **Tenu par** | _[Rôle et équipe qui mettent le registre à jour]_ |
| **Instance de revue** | _[Comité, présidence, rythme]_ |
| **Mise à jour** | {{date}} par {{auteur}} |
| **Prochaine revue** | _[Date de la prochaine séance]_ |

## 1. Vue d'ensemble

| Réf. | Agent | Mission | Propriétaire métier | Niveau d'autonomie | Outils en écriture | Risque | Statut | Version | Dernière revue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _[XX-01]_ | | _[Une phrase : un résultat, pas une activité]_ | _[Nom, fonction]_ | _[L1 à L5, par outil et par situation]_ | _[Nom des outils, ou « Aucun »]_ | _[Faible / Moyen / Élevé / Critique]_ | _[Voir les statuts, section 5]_ | | _[Date]_ |

## 2. Indicateurs clés

_[Deux ou trois indicateurs par agent, ceux de la fiche agent. Toujours un indicateur de qualité ; un indicateur de sécurité pour tout agent qui écrit.]_

| Réf. | Indicateur | Cible | Dernier relevé | Tendance | Alerte ou incident en cours |
| --- | --- | --- | --- | --- | --- |
| | | | _[Valeur et période]_ | _[En hausse / Stable / En baisse]_ | |

## 3. Exploitation et conformité

| Réf. | Responsable d'exploitation | Référent opérationnel | Documents de référence | Données personnelles | Prochaine revue |
| --- | --- | --- | --- | --- | --- |
| | | _[Personne du métier qui connaît l'agent au quotidien]_ | _[Fiche agent, runbook, spécifications d'outils]_ | _[Catégories traitées, masquage]_ | |

## 4. Journal des changements

_[Toute mise en service, tout changement de version majeure, d'autonomie, d'outil ou de propriétaire, toute suspension. Les refus d'élargissement s'inscrivent aussi.]_

| Date | Réf. | Changement | Décidé par | Preuve |
| --- | --- | --- | --- | --- |
| | | | | _[Mesure, dossier, compte rendu]_ |

## 5. Règles de tenue du registre

- **Entrée** : _[Condition pour qu'un agent soit mis en service : ligne au registre, propriétaire, qualification réglementaire.]_
- **Mise à jour** : _[Événements qui imposent une mise à jour, délai, responsable.]_
- **Changement d'autonomie** : _[Contenu du dossier d'élargissement, instance qui décide ; règle de repli.]_
- **Contrôle de cohérence** : _[Comment on vérifie que le registre reflète la production.]_
- **Sortie** : _[Un agent retiré reste au registre, avec sa date et son motif.]_
- **Accès** : _[Qui lit, qui écrit.]_

**Grille de risque et fréquence de revue**

| Niveau | Critères | Fréquence de revue | Exigences minimales |
| --- | --- | --- | --- |
| Faible | Lecture seule ; aucune sortie vers un client ; erreur détectée avant tout effet | Semestrielle | Fiche agent, évaluations |
| Moyen | Écrit dans une application interne de façon réversible, ou oriente le travail d'autres agents et des humains | Trimestrielle | Les précédentes, contrôle par échantillonnage, runbook |
| Élevé | Agit sur le service d'un client, lui écrit, ou engage financièrement | Mensuelle | Les précédentes, règle d'approbation exécutée par le code, runbook dédié, arrêt d'urgence testé |
| Critique | Effet irréversible, données sensibles, décision portant sur des personnes | À chaque séance | Les précédentes, approbation humaine systématique, accord explicite de l'instance |

**Statuts** : en conception ; en mode fantôme ; en pilote ; en service ; suspendu ; retiré.

<!-- section: exemple -->
# Registre des agents — Voxalis

| | |
| --- | --- |
| **Périmètre** | Assistance & SAV Entreprises : système SAV Augmenté, six agents |
| **Tenu par** | Équipe AgentOps (responsable AgentOps), sous l'autorité de Thomas Nguyen, Responsable Data & IA |
| **Instance de revue** | Comité de gouvernance IA, mensuel, coprésidé par Sophie Lambert et Karim Haddad |
| **Mise à jour** | 1er octobre 2026, par le responsable AgentOps, à l'issue de la troisième séance du comité |
| **Prochaine revue** | 5 novembre 2026 |

## 1. Vue d'ensemble

| Réf. | Agent | Mission | Propriétaire métier | Niveau d'autonomie | Outils en écriture | Risque | Statut | Version | Dernière revue |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SAV-01 | Orchestrateur de cas | Tenir l'état du cas, choisir la voie, déclencher les escalades | Sophie Lambert | L3 | `crm.mettre_a_jour_ticket` | Moyen | En service | 1.6 | 3 septembre 2026 |
| SAV-02 | Agent Qualification | Classer le ticket, extraire les informations, l'enrichir depuis le CRM | Sophie Lambert | L4, contrôle par échantillonnage | Aucun : la qualification est inscrite au ticket par l'Orchestrateur | Moyen | En service | 2.1 | 3 septembre 2026 |
| SAV-03 | Agent Diagnostic | Établir le diagnostic technique d'un incident, preuves à l'appui | Sophie Lambert | L3, lecture seule ; test de ligne sous approbation pendant les heures ouvrées du client | Aucun | Moyen | En service | 1.8 | 1er octobre 2026 |
| SAV-04 | Agent Résolution | Exécuter les actions du catalogue de remédiation et vérifier le rétablissement | Sophie Lambert | L3 sur les 6 actions à risque faible et les 12 motifs ouverts à la voie autonome ; L2 au-delà | `reseau.executer_action` | Élevé | En service | 1.5 | 1er octobre 2026 |
| SAV-05 | Agent Communication | Informer le client à chaque étape | Sophie Lambert | L3 pour les messages de statut ; L2 pour tout geste commercial | `client.envoyer_message` | Élevé | En service | 1.7 | 1er octobre 2026 |
| SAV-06 | Agent Qualité | Contrôler chaque cas clos, alimenter les évaluations et la base de connaissances | Sophie Lambert | L3 | Aucun : ses propositions de cas de test et d'articles sont validées par les experts N2 | Faible | En service | 1.2 | 6 août 2026 |

Les six agents sont en service dans les régions Ouest, Nord et Est. L'Île-de-France et le Sud les reçoivent pendant la vague 3, jusqu'au 9 octobre.

## 2. Indicateurs clés

Dernier relevé : semaine du 21 au 27 septembre 2026, régions déployées.

| Réf. | Indicateur | Cible | Dernier relevé | Tendance | Alerte ou incident en cours |
| --- | --- | --- | --- | --- | --- |
| SAV-01 | Cas orientés vers la bonne voie, selon l'Agent Qualité et l'échantillon expert | ≥ 95 % | 96 % | Stable | Aucun |
| SAV-01 | Tickets résolus sans intervention humaine | 35 % | 32 % | En hausse | Aucun |
| SAV-02 | Exactitude de la qualification | ≥ 95 % | 96,3 % | Stable | Aucun |
| SAV-03 | Justesse du diagnostic sur l'échantillon hebdomadaire de 5 % | ≥ 90 %, alerte sous 88 % | 91,4 % | Stable | Aucun |
| SAV-03 | Diagnostics acceptés sans correction par le conseiller | ≥ 85 % | 88 % | Stable | Aucun |
| SAV-04 | Rétablissement vérifié après action | ≥ 92 % | 93,1 % | Stable | Incident du 29 septembre : outil indisponible 47 minutes, post-mortem attendu le 6 octobre au plus tard |
| SAV-04 | Actions inappropriées | 0 | 0 depuis la mise en service | Stable | Aucun |
| SAV-05 | Conformité des messages client | ≥ 98 % | 98,6 % | Stable | Aucun |
| SAV-05 | Messages envoyés en double | 0 | 0 depuis le 25 juin | Stable | Aucun |
| SAV-06 | Accord avec la revue des experts N2 sur l'échantillon | ≥ 90 % | 92 % | En hausse | Aucun |

## 3. Exploitation et conformité

| Réf. | Responsable d'exploitation | Référent opérationnel | Documents de référence | Données personnelles | Prochaine revue |
| --- | --- | --- | --- | --- | --- |
| SAV-01 | Équipe AgentOps | Product owner | Fiche agent, runbook commun | Identité du contact client, masquée dans les journaux | 3 décembre 2026 |
| SAV-02 | Équipe AgentOps | Nadia Cherif | Fiche agent, runbook commun | Texte libre du client, masqué dans les journaux | 3 décembre 2026 |
| SAV-03 | Équipe AgentOps | Expert N2 référent | Fiche agent, runbook commun | Identité du contact et adresse du site, masquées | 5 novembre 2026, réexamen de la demande de passage en L4 |
| SAV-04 | Équipe AgentOps | Expert N2 référent | Fiche agent, runbook dédié en version 1.3, spécification de `reseau.executer_action` | Identité du contact, masquée au journal d'audit | 5 novembre 2026 |
| SAV-05 | Équipe AgentOps | Nadia Cherif | Fiche agent, runbook dédié, spécification de `client.envoyer_message` | Coordonnées du contact, utilisées pour l'envoi et masquées dans les journaux | 5 novembre 2026 |
| SAV-06 | Équipe AgentOps | Analyste évaluation de l'équipe AgentOps | Fiche agent, runbook commun | Traces déjà masquées | 4 février 2027 |

**Usage exclu, tous agents** : aucune exploitation des données du poste de supervision pour évaluer la performance individuelle des conseillers. Décision du COPIL à la suite de l'[analyse AI Act](/frameworks/eu-ai-act) de S8 ; toute demande contraire rouvre la qualification.

## 4. Journal des changements

| Date | Réf. | Changement | Décidé par | Preuve |
| --- | --- | --- | --- | --- |
| 22 juin 2026 | SAV-04, SAV-05 | Fin du mode fantôme : premières actions et premiers messages réels ; voie autonome ouverte sur 4 motifs | Sophie Lambert, sur avis de Marc Dubois | Deux semaines de mode fantôme : seuils tenus sur le flux réel, aucune action inappropriée proposée, arrêt testé |
| 25 juin 2026 | SAV-05 | Version 1.3 : clé d'idempotence sur `client.envoyer_message`, après deux envois en double | Thomas Nguyen | Analyse des deux incidents ; cas ajoutés au jeu de test |
| 13 juillet 2026 | SAV-04 | Voie autonome étendue de 4 à 9 motifs | Sophie Lambert et Karim Haddad | Pour chaque motif : 200 actions sous approbation, 95 % approuvées sans modification, rétablissement vérifié d'au moins 92 %, aucune action inappropriée |
| 31 juillet 2026 | Tous | Mise en production de la vague 1 autorisée sous cinq réserves | Sophie Lambert et Karim Haddad, décision entérinée par Claire Besson | Revue de préparation du 31 juillet |
| 6 août 2026 | Tous | Registre adopté ; grille de risque et fréquences de revue fixées | Comité de gouvernance IA | Compte rendu de la première séance |
| 20 août 2026 | SAV-04 | Limite globale de `reseau.executer_action` portée de 120 à 300 actions par heure | Karim Haddad, avec l'accord de la Direction Réseau | Test de charge au volume national |
| 3 septembre 2026 | SAV-04 | Voie autonome étendue de 9 à 12 motifs | Comité de gouvernance IA | Dossier d'élargissement instruit par l'équipe AgentOps, mêmes critères que le 13 juillet |
| 1er octobre 2026 | SAV-03 | Passage en L4 sur le motif « perte de synchronisation de l'accès » : refusé | Comité de gouvernance IA | Sur les 500 derniers diagnostics du motif, 471 justes, soit 94,2 % pour un seuil de 95 % ; réexamen le 5 novembre |

## 5. Règles de tenue du registre

- **Entrée** : aucun agent n'est mis en service sans ligne au registre, propriétaire métier nommé et avis du juridique sur sa qualification réglementaire. La passerelle MCP ne délivre une identité technique qu'aux agents inscrits.
- **Mise à jour** : sous deux jours ouvrés après tout déploiement, tout changement d'autonomie ou de liste de motifs, tout incident de gravité SEV1 ou SEV2 (voir le [runbook](/templates/runbook-agent)), tout changement de propriétaire. Responsable : le responsable AgentOps.
- **Changement d'autonomie** : un élargissement se demande par un dossier (périmètre, preuves, risque résiduel, surveillance prévue, condition de repli) et se décide en comité. Un repli s'applique immédiatement, sans attendre le comité, et lui est rapporté à la séance suivante.
- **Contrôle de cohérence** : chaque mois, avant le comité, rapprochement entre le registre, les identités techniques de la passerelle et la configuration en production. Tout écart est traité comme un incident.
- **Sortie** : un agent retiré reste au registre avec sa date et son motif de retrait ; son identité technique est révoquée le jour même.
- **Accès** : lecture ouverte à tous les collaborateurs du domaine ; écriture réservée à l'équipe AgentOps.

**Grille de risque et fréquence de revue**, adoptée le 6 août 2026

| Niveau | Critères | Fréquence de revue | Agents concernés |
| --- | --- | --- | --- |
| Faible | Lecture seule ; aucune sortie vers un client ; erreur détectée avant tout effet | Semestrielle | Agent Qualité |
| Moyen | Écrit dans une application interne de façon réversible, ou oriente le travail d'autres agents et des conseillers | Trimestrielle | Orchestrateur de cas, Agent Qualification, Agent Diagnostic |
| Élevé | Agit sur le service d'un client ou lui écrit | Mensuelle | Agent Résolution, Agent Communication |
| Critique | Effet irréversible ou engagement financier sans approbation | Sans objet | Aucun : les actions à effet durable et les gestes commerciaux restent en L2 |

**Statuts** : en conception ; en mode fantôme ; en pilote ; en service ; suspendu ; retiré.
