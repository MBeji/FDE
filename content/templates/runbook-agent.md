---
id: runbook-agent
titre: "Runbook d'exploitation"
resume: "Le manuel de conduite d'un agent en production : ce qu'on surveille, que faire quand une alerte sonne, comment dégrader, arrêter, revenir en arrière et tirer les leçons d'un incident."
phase: industrialiser
type: livrable
format: document
effort: "1 à 2 jours par agent, puis une mise à jour après chaque incident"
tags: [exploitation, incident, agentops, astreinte]
frameworks: [agentops, garde-fous, securite-agents, finops-ia]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Permettre à quelqu'un qui n'a pas construit l'agent de l'exploiter, y compris un jour d'incident. Le runbook répond à quatre questions : comment savoir que quelque chose ne va pas, que faire dans les dix premières minutes, qui prévenir, comment revenir à un état sûr.

## Quand l'utiliser

Un runbook par agent qui écrit ou s'adresse au client ; un runbook commun peut couvrir les autres. Le rédiger pendant le pilote, le finaliser avant la [revue de préparation](/templates/checklist-mise-en-production), le corriger après chaque incident. Cadre d'ensemble : [AgentOps](/frameworks/agentops).

## Comment le remplir

1. Partir des modes de défaillance de la [fiche agent](/templates/fiche-agent) : chacun donne une alerte et une procédure.
2. Chiffrer chaque seuil. Une alerte sans action associée se supprime.
3. Écrire les procédures à l'impératif, en étapes numérotées : mettre en sécurité d'abord, comprendre ensuite.
4. Décrire le mode dégradé du point de vue des humains qui reprennent le travail.
5. Faire dérouler chaque procédure par l'astreinte, sans le FDE, et corriger ce qui a fait hésiter.

## Critères de qualité

- [ ] Chaque alerte a un seuil chiffré, un destinataire et une procédure.
- [ ] Chaque procédure commence par une mise en sécurité faisable en dix minutes.
- [ ] L'arrêt et le retour arrière ont été testés ; le délai constaté est écrit.
- [ ] Le métier peut arrêter l'agent sans demander d'autorisation.
- [ ] Les contacts sont des rôles joignables, pas seulement des noms.
- [ ] Une personne qui n'a pas construit l'agent a déroulé le runbook seule.

<!-- section: template -->
# Runbook d'exploitation — _[Nom de l'agent]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Système** | _[Nom du système auquel l'agent appartient]_ |
| **Version** | _[1.0]_ du {{date}} |
| **Propriétaire métier** | _[Nom, fonction : décide de la reprise après un arrêt]_ |
| **Responsable d'exploitation** | _[Nom, fonction, équipe]_ |
| **Rédacteur** | {{auteur}} |
| **Dernière mise à l'épreuve** | _[Date du dernier exercice ou du dernier incident réel traité avec ce runbook]_ |

## 1. Fiche d'identité

| | |
| --- | --- |
| **Mission** | _[Une phrase, reprise de la fiche agent]_ |
| **Déclencheur** | _[Événement, appel d'un autre agent, demande d'un utilisateur]_ |
| **Niveau d'autonomie** | _[Par outil et par situation]_ |
| **Outils** | _[Écriture d'abord, puis lecture]_ |
| **Dépendances** | _[Amont, aval, applications, services externes]_ |
| **Volume et plages** | _[Cas par semaine, pics, heures de fonctionnement, heures de présence humaine]_ |
| **Si l'agent s'arrête** | _[Effet sur l'activité, délai avant que cela se voie]_ |
| **Si l'agent se trompe** | _[Pire effet réaliste, sur qui, réversible ou non]_ |
| **Limites dures** | _[Étapes, budget, débit, délai : appliquées par le code]_ |
| **Version en production** | _[Prompt, configuration, modèle figé, outils]_ |
| **Où regarder** | _[Console, tableau de bord, traces, fiche agent, spécifications d'outils, ligne du registre]_ |

## 2. Tableau de bord et alertes

**Indicateurs suivis**

| Indicateur | Définition | Cible | Seuil d'avertissement | Seuil critique |
| --- | --- | --- | --- | --- |
| _[Qualité]_ | | | | |
| _[Sécurité]_ | | | | |
| _[Service : délai, erreurs d'outils]_ | | | | |
| _[Coût par cas]_ | | | | |

**Alertes**

| N° | Alerte | Gravité | Destinataire | Procédure |
| --- | --- | --- | --- | --- |
| A1 | | | | _[P1 à P4]_ |

**Niveaux de gravité**

| Gravité | Définition | Prise en charge | Personnes prévenues |
| --- | --- | --- | --- |
| SEV1 — Majeure | _[Action inappropriée exécutée, donnée exposée, client lésé]_ | | |
| SEV2 — Sérieuse | | | |
| SEV3 — Mineure | | | |

**Contrôles de routine** : _[Ce qui se regarde chaque jour, chaque semaine, chaque mois, et par qui.]_

## 3. Procédures

_[Même plan pour chaque procédure. Les étapes de mise en sécurité ne demandent aucune analyse.]_

### P1 — Dégradation de la qualité

- **Symptômes** : _[Alertes, signaux du terrain]_
- **Mise en sécurité (10 minutes au plus)** : _[Étapes numérotées]_
- **Diagnostic** : _[Où chercher, dans quel ordre : ce qui a changé, l'amont, les traces]_
- **Résolution** : _[Selon la cause]_
- **Retour à la normale** : _[Critère chiffré et personne qui décide]_
- **Communication** : _[Qui informe qui]_

### P2 — Indisponibilité d'un outil

- **Symptômes** :
- **Mise en sécurité (10 minutes au plus)** :
- **Diagnostic** :
- **Résolution** :
- **Retour à la normale** : _[Préciser ce qu'on fait des cas restés en attente]_
- **Communication** :

### P3 — Incident de sécurité

- **Déclencheurs** :
- **Mise en sécurité (5 minutes au plus)** : _[Arrêter d'abord]_
- **Préserver** : _[Traces, journaux, versions : ne rien corriger ni purger]_
- **Mesurer l'impact** : _[Actions exécutées, clients touchés, données exposées]_
- **Obligations** : _[Notification, information des personnes : qui décide, sous quel délai]_
- **Reprise** : _[Qui décide, à quelles conditions]_

### P4 — Dérive des coûts

- **Symptômes** :
- **Mise en sécurité** : _[Plafonds existants, ce qui se passe quand ils sont atteints]_
- **Diagnostic** : _[Volume, étapes par cas, taille du contexte, prix]_
- **Résolution** :
- **Retour à la normale** :
- **Communication** :

## 4. Arrêt et mode dégradé

| Niveau | Quand | Qui décide | Comment | Ce que font les humains | Délai constaté |
| --- | --- | --- | --- | --- | --- |
| 1 — _[Restriction]_ | | | | | |
| 2 — _[Arrêt de l'agent]_ | | | | | |
| 3 — _[Arrêt du système]_ | | | | | |

**Règles** : _[Qui peut arrêter sans autorisation ; ordre de reprise ; ce qui n'est jamais reproché.]_

## 5. Retour arrière

- **Ce qui est versionné ensemble** : _[Prompt, outils, configuration, modèle]_
- **Procédure** : _[Étapes numérotées, jusqu'à la vérification]_
- **Délai constaté** : _[Durée et date du dernier test]_
- **Ce que le retour arrière ne répare pas** : _[Actions déjà exécutées, messages déjà envoyés, et comment les traiter]_

## 6. Escalade et contacts

| Niveau | Rôle | Joignable | Quand l'appeler |
| --- | --- | --- | --- |
| 1 | | _[Plages, numéro d'astreinte]_ | |
| 2 | | | |
| Métier | | | |
| Sécurité | | | |
| Données personnelles | | | |
| Fournisseur | | | |

## 7. Post-mortem

- **Quand il est obligatoire** : _[Gravités, arrêts, actions inappropriées]_
- **Délai et rédacteur** :
- **Trame** : résumé en trois lignes ; chronologie horodatée ; impact ; cause immédiate, cause profonde, raison de la détection tardive ; ce qui a bien fonctionné ; actions avec porteur et date.
- **Sorties obligatoires** : _[Cas de test ajouté, runbook corrigé, ligne au journal]_

**Journal des incidents et des exercices**

| Date | Gravité | Événement | Cause | Suites |
| --- | --- | --- | --- | --- |
| | | | | |

<!-- section: exemple -->
# Runbook d'exploitation — Agent Résolution

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Système** | SAV Augmenté |
| **Version** | 1.3 du 2 octobre 2026 |
| **Propriétaire métier** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Responsable d'exploitation** | Thomas Nguyen, Responsable Data & IA ; équipe AgentOps (3 ETP) |
| **Rédacteur** | Inès, FDE, pour les versions 1.0 à 1.2 ; équipe AgentOps pour la version 1.3 |
| **Dernière mise à l'épreuve** | Incident réel du 29 septembre 2026, traité par l'équipe AgentOps seule |

## 1. Fiche d'identité

| | |
| --- | --- |
| **Mission** | Rétablir le service d'un client PME en exécutant l'action du catalogue de remédiation que le diagnostic recommande, puis vérifier le rétablissement |
| **Déclencheur** | Appel par l'Orchestrateur de cas, sur un diagnostic structuré de moins de 30 minutes. L'agent ne lit jamais le texte libre du client |
| **Niveau d'autonomie** | L3 pour les 6 actions à risque faible, sur les 12 motifs ouverts à la voie autonome, avec un diagnostic à confiance élevée. L2 dans tous les autres cas : approbation du superviseur de cas, ou d'un expert N2 pour les 2 actions à risque élevé |
| **Outils** | Écriture : `reseau.executer_action` (10 actions). Lecture : `supervision.etat_service`, `kb.rechercher`, `inventaire.lire_parc` |
| **Dépendances** | Amont : Agent Diagnostic, Orchestrateur de cas. Aval : Agent Communication, Agent Qualité. Passerelle MCP, supervision réseau (Direction Réseau), service d'inférence |
| **Volume et plages** | Environ 3 300 cas par semaine au périmètre national, dont 2 600 sans approbation ; pic le lundi matin. Voie autonome ouverte en continu ; approbations pendant l'ouverture des plateaux, de 8 h à 20 h du lundi au samedi |
| **Si l'agent s'arrête** | Les cas passent en voie assistée : le service reste rendu, le délai de résolution remonte dès la première heure |
| **Si l'agent se trompe** | Une coupure de quelques minutes chez un client, sans effet durable pour les actions à risque faible. Les actions à effet durable passent toujours par un humain |
| **Limites dures** | Appliquées par la passerelle : 3 actions par ticket ; 1 action sans approbation par service et par 24 h ; 5 actions identiques par zone en 30 minutes, puis disjoncteur ; 300 actions par heure au global ; 90 secondes par appel. Budget d'inférence : 0,30 € par cas |
| **Version en production** | 1.5 (prompt et configuration), version du modèle figée |
| **Où regarder** | Console d'exploitation ; traces par identifiant de ticket ; journal d'audit de la passerelle ; fiche agent ; spécification de `reseau.executer_action` ; registre des agents, ligne SAV-04 |

## 2. Tableau de bord et alertes

**Indicateurs suivis**

| Indicateur | Définition | Cible | Seuil d'avertissement | Seuil critique |
| --- | --- | --- | --- | --- |
| Rétablissement vérifié | Part des actions exécutées après lesquelles la vérification confirme le service rétabli | ≥ 92 % | < 90 % sur 24 h glissantes | < 85 % sur 4 h |
| Actions inappropriées | Action exécutée hors règle : mauvais service, action non recommandée par le diagnostic, approbation contournée | 0 | Sans objet | 1 |
| Réouvertures | Tickets clos après une action de l'agent et rouverts sous 7 jours | ≤ 8 % | > 10 % sur une semaine | > 14 % sur une semaine |
| Rejeu nocturne | 80 scénarios de choix d'action tirés du golden set, et les cas adverses | ≥ 95 % de choix corrects, 0 action inappropriée | < 95 % | Toute action inappropriée |
| Erreurs de l'outil | Part des appels à `reseau.executer_action` sans issue connue ou sans réponse de l'équipement, sur 15 minutes | < 2 % | > 5 % | > 15 %, ou outil indisponible 5 minutes |
| Approbations en attente | Délai médian de décision ; part des demandes réaffectées au responsable de plateau après 15 minutes | ≤ 4 min | > 8 min | > 10 % de demandes réaffectées sur une heure |
| Coût d'inférence par cas | Moyenne quotidienne | ≤ 0,08 € | > 0,10 € | > 0,15 €, ou dépense du jour supérieure de moitié à la moyenne des 7 derniers jours |

**Alertes**

| N° | Alerte | Gravité | Destinataire | Procédure |
| --- | --- | --- | --- | --- |
| A1 | Rétablissement vérifié ou réouvertures au-delà d'un seuil | SEV3 à l'avertissement, SEV2 au seuil critique | AgentOps de permanence | P1 |
| A2 | Régression au rejeu nocturne | SEV2, déploiement bloqué | AgentOps de permanence | P1 |
| A3 | `reseau.executer_action` en erreur ou indisponible | SEV2 | AgentOps, astreinte de la Direction Réseau | P2 |
| A4 | Disjoncteur de zone ouvert | SEV3 | AgentOps, Direction Réseau | P2, cas C |
| A5 | Action inappropriée, ou refus « service hors périmètre » répétés sur un même cas | SEV1 | AgentOps, référent sécurité, Marc Dubois | P3 |
| A6 | Coût par cas ou dépense du jour au-delà d'un seuil | SEV3 | AgentOps de permanence | P4 |
| A7 | Approbations en attente | SEV3 | Responsable de plateau | Section 4, renfort d'approbateurs |

**Niveaux de gravité**

| Gravité | Définition | Prise en charge | Personnes prévenues |
| --- | --- | --- | --- |
| SEV1 — Majeure | Action inappropriée exécutée, donnée exposée, client lésé | Immédiate, 15 minutes au plus | Sophie Lambert, Marc Dubois et Thomas Nguyen dans l'heure ; Claire Besson informée le jour même |
| SEV2 — Sérieuse | Qualité sous le seuil critique, outil indisponible, agent arrêté | 30 minutes pendant l'ouverture des plateaux | Responsable AgentOps, responsables de plateau |
| SEV3 — Mineure | Avertissement sans effet pour le client | Jour ouvré suivant | AgentOps de permanence |

**Contrôles de routine**

- Chaque matin, 15 minutes : résultat du rejeu nocturne, indicateurs des dernières 24 heures, cas signalés par l'Agent Qualité et par les superviseurs de cas (réponse sous 24 heures).
- Chaque semaine : revue, avec un expert N2, de 5 % des cas traités et de tous les échecs de rétablissement ; revue du coût par cas.
- Chaque mois : point au comité de gouvernance IA, mise à jour du registre des agents.
- Chaque trimestre : test de l'arrêt d'urgence et du retour arrière, par une personne différente à chaque fois.

## 3. Procédures

### P1 — Dégradation de la qualité

- **Symptômes** : alerte A1 ou A2 ; signalements de superviseurs (« l'action ne rétablit rien ») ; hausse des réouvertures.
- **Mise en sécurité (10 minutes au plus)**
  1. Si le défaut porte sur un seul motif : le retirer de la liste des motifs ouverts à la voie autonome, dans la console. Ses actions passent sous approbation.
  2. Sinon : vider la liste. La passerelle soumet alors toute action au superviseur de cas.
  3. Prévenir les responsables de plateau : la charge d'approbation augmente tout de suite.
  4. Au seuil critique, ou plateaux fermés : arrêt d'urgence (section 4, niveau 2).
- **Diagnostic**
  1. Segmenter les échecs par action, motif, zone et version.
  2. Lister ce qui a changé depuis 48 heures : prompt, catalogue, outil, base de connaissances, supervision réseau. Vérifier que la version du modèle est restée figée.
  3. Regarder l'amont : un diagnostic faux donne une action inutile. Comparer avec la justesse de l'Agent Diagnostic sur la même période.
  4. Lire 20 traces en échec avec un expert N2 et classer les causes.
- **Résolution** : retour arrière si le défaut suit un déploiement (section 5) ; sinon correction, puis rejeu complet avant tout redéploiement. Les cas en échec rejoignent le golden set.
- **Retour à la normale** : rétablissement vérifié d'au moins 92 % sur 200 actions consécutives sous approbation. Sophie Lambert, ou le responsable de plateau qu'elle a désigné, autorise la réouverture ; le comité de gouvernance IA en est informé à sa séance suivante.
- **Communication** : message aux superviseurs par le réseau des champions à l'entrée et à la sortie du mode dégradé.

### P2 — Indisponibilité d'un outil

- **Symptômes** : alerte A3 ou A4 ; réponses « issue inconnue » en série ; cas qui s'accumulent en attente.
- **Règle d'or** : ne jamais relancer en masse des actions restées en attente. Un diagnostic de plus de 30 minutes ne justifie plus rien, et la passerelle le refuse.
- **Cas A — `reseau.executer_action` ne répond plus ou rend une issue inconnue**
  1. Au-delà de 15 % d'erreurs sur 15 minutes : arrêt d'urgence global. Les cas passent en voie assistée.
  2. Pour chaque action à l'issue inconnue, listée dans la console : faire lire l'état du service avant toute nouvelle tentative, même manuelle.
  3. Ouvrir un incident auprès de l'astreinte de la Direction Réseau et obtenir une heure de rétablissement.
  4. Prévenir les responsables de plateau. L'Agent Communication continue d'informer les clients du délai.
- **Cas B — `supervision.etat_service` indisponible** : l'agent ne peut vérifier l'état du service ni avant ni après l'action, il rend donc la main. Même traitement que le cas A.
- **Cas C — disjoncteur de zone ouvert** : cinq actions identiques en 30 minutes sur une zone signalent presque toujours un incident collectif non encore déclaré. Ne pas refermer le disjoncteur. Faire confirmer par la Direction Réseau ; une fois l'incident déclaré, la passerelle refuse d'elle-même les actions individuelles sur la zone.
- **Cas D — service d'inférence indisponible ou lent** : il n'existe pas de modèle de secours pour cet agent. Le rejeu du 24 septembre sur un second modèle tient les seuils pour la qualification et les messages, pas pour le diagnostic ni le choix de l'action. Arrêt d'urgence, incident ouvert chez le fournisseur.
- **Retour à la normale** : 10 actions réussies sous approbation, puis levée de l'arrêt d'urgence. L'Orchestrateur redemande un diagnostic pour chaque cas resté en attente.
- **Communication** : responsables de plateau à l'entrée et à la sortie ; Direction Réseau pour toute cause située chez elle.

### P3 — Incident de sécurité

- **Déclencheurs** : alerte A5 ; action exécutée sur un service qui n'est pas celui du ticket ; approbation contournée ; usage de l'identité technique de l'agent hors du système ; consigne issue d'un texte client retrouvée dans la justification d'une action.
- **Mise en sécurité (5 minutes au plus), avant toute analyse**
  1. Arrêt d'urgence global. Toute personne habilitée le déclenche sans demander d'autorisation.
  2. Si l'identité de l'agent est en cause : faire révoquer son jeton par le référent sécurité ou par l'astreinte sécurité.
  3. Appeler Marc Dubois et Sophie Lambert : gravité SEV1.
- **Préserver**
  4. Exporter et geler les traces et le journal d'audit de la période. Ne rien corriger, ne rien purger. Noter l'heure, la version et les tickets concernés.
- **Mesurer l'impact**
  5. Lister toutes les actions exécutées par l'agent depuis le début supposé de l'anomalie ; identifier les services et les clients touchés.
  6. Annuler ce qui peut l'être, selon la colonne « comment annuler » de la spécification de l'outil. Pour le reste, un expert N2 rétablit le service.
- **Obligations**
  7. Si des données personnelles ont pu être exposées : Élise Martin qualifie l'événement. Une violation avérée se notifie à l'autorité de contrôle sous 72 heures ; la décision lui appartient.
  8. Les clients touchés sont informés par un message validé par Sophie Lambert, jamais par l'Agent Communication en autonomie.
- **Reprise** : décision conjointe de Marc Dubois et Sophie Lambert, à quatre conditions : cause corrigée, cas ajouté au jeu adverse, rejeu complet sans action inappropriée, première semaine sous approbation systématique.

### P4 — Dérive des coûts

- **Symptômes** : alerte A6 ; hausse du nombre d'appels d'outils par cas ; cas qui atteignent le budget de 0,30 €.
- **Mise en sécurité** : les plafonds protègent déjà. Vérifier si le plafond quotidien sera atteint avant la fermeture des plateaux : s'il l'est, l'agent s'arrête et les cas passent en voie assistée. Prévenir les responsables de plateau avant, pas après.
- **Diagnostic**
  1. Décomposer la dépense : nombre de cas, appels par cas, taille du contexte par appel, prix unitaire. Un seul facteur a bougé : le trouver.
  2. Causes à vérifier en premier : réponse d'outil devenue volumineuse après une évolution de la supervision ; article de la base de connaissances transmis en entier ; nouveaux essais en chaîne sur un équipement injoignable ; afflux de cas dû à un incident collectif.
- **Résolution** : correction par l'équipe AgentOps, rejouée sur le golden set comme tout changement. Un afflux lié à un incident collectif se traite avec la Direction Réseau, pas dans l'agent.
- **Retour à la normale** : coût par cas revenu à 0,08 € au plus, trois jours de suite.
- **Communication** : revue hebdomadaire des coûts ; Thomas Nguyen alerté si la projection du mois dépasse le budget de 10 %.

## 4. Arrêt et mode dégradé

| Niveau | Quand | Qui décide | Comment | Ce que font les humains | Délai constaté |
| --- | --- | --- | --- | --- | --- |
| 1 — Retrait ciblé | Défaut concentré sur un motif ou une zone | AgentOps de permanence | Retirer le motif de la liste des motifs ouverts, ou ouvrir le disjoncteur de la zone | Les superviseurs de cas approuvent les actions du motif | Immédiat |
| 1 bis — Approbation systématique | Qualité en baisse sans cause isolée | AgentOps, responsable de plateau | Vider la liste des motifs ouverts | Toute action est approuvée par un superviseur ; chaque responsable de plateau affecte deux approbateurs dédiés | Immédiat ; tenu 3 h lors de l'exercice du 16 septembre |
| 2 — Arrêt d'urgence | Seuil critique, outil indisponible, tout soupçon de sécurité | AgentOps, responsable de plateau, astreinte de la DSI | Commande d'arrêt d'urgence de la console, globale ou par zone ; la passerelle refuse alors tout appel | Voie assistée : le conseiller ou l'expert N2 exécute l'action dans l'interface de la supervision réseau, à partir du diagnostic fourni | 4 min le 23 juillet, 3 min le 12 août, 9 min détection comprise le 29 septembre |
| 3 — Arrêt de SAV Augmenté | Défaillance de plusieurs agents, incident de sécurité étendu | Sophie Lambert ou Karim Haddad | Bascule du routage vers les files N1 et N2 d'origine | Processus d'origine, fiche réflexe sur chaque plateau ; au-delà de 4 heures, Sophie Lambert décide d'activer la sous-traitance de débordement | 15 min lors de l'exercice du 16 septembre |

**Règles**

- Les niveaux 1 à 2 se déclenchent sans autorisation préalable. Un arrêt décidé de bonne foi n'est jamais reproché.
- On dégrade d'abord, on analyse ensuite.
- La reprise repasse par le niveau inférieur : de l'arrêt d'urgence à l'approbation systématique, puis au fonctionnement normal.
- Plateaux fermés, l'astreinte de la DSI applique cette section et ne corrige rien : l'analyse attend l'équipe AgentOps.

## 5. Retour arrière

- **Ce qui est versionné ensemble** : prompt système, descriptions d'outils, catalogue et liste des motifs ouverts, garde-fous, version du modèle. Un lot porte un numéro de version, inscrit au registre des agents.
- **Procédure**
  1. Identifier la dernière version saine dans l'historique des déploiements.
  2. Lancer la commande de retour arrière depuis la console.
  3. Rejouer le jeu de vérification : 30 cas, 5 minutes.
  4. Rouvrir sous approbation systématique pendant 50 actions, puis normalement.
  5. Consigner le retour arrière au registre et au journal ci-dessous.
- **Délai constaté** : 6 minutes le 21 juillet, 5 minutes le 16 septembre.
- **Ce que le retour arrière ne répare pas** : les actions déjà exécutées (annulation selon la spécification de l'outil, ou reprise par un expert N2) ; les messages déjà envoyés aux clients (correctif validé par un humain) ; les tickets clos à tort (liste produite par l'Agent Qualité, réouverture par les superviseurs de cas).

## 6. Escalade et contacts

| Niveau | Rôle | Joignable | Quand l'appeler |
| --- | --- | --- | --- |
| 1 | AgentOps de permanence (rotation hebdomadaire des trois membres) | De 8 h à 20 h du lundi au samedi, numéro d'astreinte AgentOps | Toute alerte |
| 1, plateaux fermés | Astreinte de la DSI | En continu | Alertes SEV1 et SEV2 ; applique la section 4 seulement |
| 2 | Responsable AgentOps, puis Thomas Nguyen | Heures ouvrées ; rappel possible pour une SEV1 | SEV1 ou SEV2 non maîtrisée en 30 minutes ; toute décision de retour arrière |
| Métier | Responsable de plateau de permanence, puis Sophie Lambert | Ouverture des plateaux ; Sophie Lambert rappelable pour une SEV1 | Mode dégradé de plus de 30 minutes ; toute reprise après un arrêt |
| Réseau | Astreinte de la Direction Réseau | En continu | Outil indisponible, disjoncteur de zone, incident collectif probable |
| Sécurité | Référent sécurité, puis Marc Dubois ; astreinte sécurité | En continu | Tout soupçon, même faible |
| Données personnelles | Élise Martin, DPO | Heures ouvrées ; par l'astreinte sécurité sinon | Donnée personnelle possiblement exposée |
| Fournisseur | Support du service d'inférence | Selon le contrat | Indisponibilité de plus de 15 minutes |

L'équipe FDE est sortie de la chaîne d'escalade le 14 septembre 2026. Elle n'y revient pas.

## 7. Post-mortem

- **Quand il est obligatoire** : toute SEV1 ; toute SEV2 de plus d'une heure ; tout arrêt de niveau 2 ou 3 ; toute action inappropriée, même sans effet.
- **Délai et rédacteur** : 5 jours ouvrés ; rédigé par la personne qui a conduit l'incident, relu par un pair, présenté au comité de gouvernance IA.
- **Trame** : résumé en trois lignes ; chronologie horodatée ; impact (clients, tickets, durée) ; cause immédiate, cause profonde, raison pour laquelle on ne l'a pas vu plus tôt ; ce qui a bien fonctionné ; actions avec porteur et date. Aucune recherche de coupable.
- **Sorties obligatoires** : au moins un cas de test ajouté au golden set ou au jeu adverse ; le runbook corrigé si une étape a manqué ; une ligne au journal.

**Journal des incidents et des exercices**

| Date | Gravité | Événement | Cause | Suites |
| --- | --- | --- | --- | --- |
| 22 et 23 juin 2026 | SEV3, sur l'Agent Communication | Deux messages client envoyés en double | Nouvel essai après délai dépassé sur un outil d'écriture sans clé d'idempotence | Clé ajoutée sur `client.envoyer_message` en S24 ; la protection équivalente de `reseau.executer_action` vérifiée par test |
| 12 août 2026 | Exercice | Incident de sécurité simulé : action sur un service hors du parc du client | Sans objet | Arrêt d'urgence déclenché par l'astreinte en 3 minutes, sans l'équipe FDE. Numéro de l'astreinte sécurité absent de la fiche réflexe : ajouté en version 1.1 |
| 20 août 2026 | Changement | Limite globale portée de 120 à 300 actions par heure | Limite dimensionnée pour le pilote, insuffisante au pic national | Test de charge au volume national réussi, accord de la Direction Réseau ; version 1.2 |
| 16 septembre 2026 | Exercice | Procédures P1, P2 et P4 et arrêt de niveau 3 joués par l'équipe AgentOps, Inès en observation | Sans objet | Deux étapes reformulées ; délais constatés reportés en sections 4 et 5 |
| 29 septembre 2026 | SEV2 | `reseau.executer_action` rend une issue inconnue pendant 47 minutes | Maintenance de la supervision réseau non annoncée à l'équipe AgentOps | Arrêt d'urgence en 9 minutes ; 212 cas traités en voie assistée ; aucune action rejouée ; calendrier des maintenances désormais transmis chaque semaine ; cas B précisé en version 1.3 |
