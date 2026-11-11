---
id: adr
titre: "Relevé de décision d'architecture (ADR)"
resume: "Une page par décision structurante : le contexte, les options comparées, la décision, ses conséquences et le signal qui la ferait rouvrir. La mémoire technique de la mission, lisible par ceux qui n'étaient pas dans la salle."
phase: concevoir
type: canevas
format: document
effort: "1 h par décision, hors mesures"
tags: [architecture, decision, tracabilite]
frameworks: [faut-il-un-agent, topologies-multi-agents, patterns-agentiques]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un ADR (Architecture Decision Record) consigne une décision d'architecture au moment où elle est prise : ce qu'on savait, ce qu'on a comparé, ce qu'on a choisi et ce qu'on a accepté de perdre. Six mois plus tard, l'équipe du client doit comprendre pourquoi le système est ainsi fait, et savoir quand rouvrir le sujet.

## Quand l'utiliser

Pour toute décision coûteuse à défaire : barreau de [l'échelle des solutions](/frameworks/faut-il-un-agent), [topologie](/frameworks/topologies-multi-agents), découpage en agents, autonomie d'un outil d'écriture, gestion de l'état. Pas pour un choix réversible en une heure. Les ADR sont indexés dans le [dossier d'architecture](/templates/dossier-architecture-multi-agents).

## Comment le remplir

1. Écrire le contexte sans nommer la solution : contraintes, forces en présence, mesure qui déclenche la décision.
2. Comparer au moins deux options réelles, dont la plus simple, sur les mêmes critères, mesurées sur le golden set quand c'est possible.
3. Formuler la décision en une phrase affirmative.
4. Écrire les conséquences négatives aussi honnêtement que les positives.
5. Fixer un signal de révision observable, avec un propriétaire.
6. Ne jamais réécrire un ADR accepté : en créer un nouveau qui le remplace.

## Critères de qualité

- [ ] Le contexte se comprend sans avoir assisté aux réunions.
- [ ] L'option la plus simple figure parmi les options, avec la raison de son rejet.
- [ ] La décision repose sur une mesure ou une contrainte vérifiable, pas sur une préférence.
- [ ] Chaque conséquence négative a un traitement.
- [ ] Le signal de révision est un seuil mesurable, pas « à revoir plus tard ».

<!-- section: template -->
# ADR-_[numéro]_ — _[La décision en quelques mots, à l'infinitif]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Système** | _[Nom du système concerné]_ |
| **Statut** | _[Proposé / Accepté / Remplacé par ADR-xxx / Abandonné]_ |
| **Date de décision** | {{date}} |
| **Décideurs** | _[Noms et fonctions de ceux qui engagent la décision]_ |
| **Consultés** | _[Métier, sécurité, exploitation, experts]_ |
| **Rédacteur** | {{auteur}} |
| **Décisions liées** | _[ADR dont celui-ci dépend, qu'il remplace ou qu'il contraint]_ |

## 1. Contexte

_[Cinq à dix lignes. La situation, la contrainte ou la mesure qui oblige à décider maintenant. Ne pas mentionner la solution retenue. Citer les chiffres et leur source : jeu de test, version, date.]_

**Question à trancher** : _[Une seule question, formulée de façon neutre.]_

## 2. Critères de décision

_[Trois à six critères, classés par ordre d'importance, avec le seuil à respecter quand il existe. Les fixer avant de comparer les options.]_

| Critère | Seuil ou attente | Pourquoi il compte |
| --- | --- | --- |
| _[Qualité]_ | | |
| _[Sécurité et droits d'accès]_ | | |
| _[Coût, délai]_ | | |
| _[Exploitabilité par l'équipe du client]_ | | |

## 3. Options envisagées

| Critère | Option A — _[la plus simple]_ | Option B — _[…]_ | Option C — _[…]_ |
| --- | --- | --- | --- |
| _[Critère 1]_ | _[Mesure]_ | | |
| _[Critère 2]_ | | | |
| _[Critère 3]_ | | | |

**Option A** : _[Description en deux lignes. Ce qui plaide pour, ce qui plaide contre.]_

**Option B** : _[Idem.]_

**Option C** : _[Idem.]_

_[Signaler toute option écartée sans mesure, et pourquoi.]_

## 4. Décision

_[Une phrase affirmative : « Nous retenons… ». Puis deux ou trois lignes sur la raison décisive, reliée aux critères de la section 2.]_

## 5. Conséquences

**Ce que nous gagnons** : _[Liste courte, chiffrée si possible.]_

**Ce que nous acceptons de perdre**

| Conséquence négative | Traitement |
| --- | --- |
| _[Coût, complexité, risque nouveau]_ | _[Parade, ou acceptation explicite]_ |

**Ce qui change pour les équipes** : _[Livrables à créer ou à modifier, compétences, exploitation.]_

## 6. Signal de révision

| Signal | Seuil | Source de la mesure | Propriétaire |
| --- | --- | --- | --- |
| _[Fait observable qui rendrait la décision caduque]_ | _[Valeur]_ | _[Évaluation, tableau de bord, revue]_ | _[Nom]_ |

## 7. Mise en œuvre

| Action | Responsable | Échéance |
| --- | --- | --- |
| | | |

<!-- section: exemple -->
# ADR-004 — Séparer l'Agent Diagnostic de l'Agent Résolution

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Système** | SAV Augmenté |
| **Statut** | Accepté. Proposé le 29 avril 2026 en phase Concevoir, sous réserve de mesure |
| **Date de décision** | 18 mai 2026 (revue d'architecture, S19) |
| **Décideurs** | Thomas Nguyen, Responsable Data & IA ; Karim Haddad, DSI |
| **Consultés** | Marc Dubois (RSSI), Sophie Lambert (propriétaire du processus), les deux experts N2 détachés, l'architecte SI détaché |
| **Rédacteur** | Léo, FDE |
| **Décisions liées** | Dépend de ADR-001 (passerelle MCP unique) et ADR-002 (qualification par appel de modèle unique). Contraint ADR-005 (orchestration et état du cas). |

## 1. Contexte

Le processus cible traite un incident en quatre temps : qualifier, diagnostiquer, résoudre, informer. Le dossier d'architecture approuvé au jalon G4 (S17) prévoit deux agents distincts pour le diagnostic et la résolution, sous une réserve posée en revue : prouver par la mesure qu'un agent unique ne suffit pas, selon le principe de la solution la plus simple qui suffit.

Le prototype a donc démarré en S18 avec un agent unique. Limité au diagnostic, avec cinq outils de lecture, il atteint 91 % de justesse sur le golden set (546 cas sur 600, version 1.0 du jeu, qualification de référence fournie en entrée). Quand on lui confie aussi la résolution, c'est-à-dire les neuf outils de la passerelle MCP et les règles du catalogue de remédiation, la justesse du diagnostic tombe à 84 % (504 sur 600), sous le seuil de 90 % du plan d'évaluation.

Léo et un expert N2 ont lu 60 des 96 traces en échec. Première cause, dans 26 cas : un outil mal choisi ou appelé dans le mauvais ordre. Deux mécanismes l'expliquent.

- **Conclusion prématurée.** L'agent unique passe à la remédiation après 3,2 vérifications en moyenne, contre 5,1 quand il est limité au diagnostic. Disposer de l'outil d'action l'incite à agir.
- **Contamination par les règles de remédiation.** Dans 9 % des 600 cas, il consulte une procédure de remédiation avant d'avoir établi la cause, puis retient la cause que cette procédure suppose.

Les autres causes relevées (article obsolète, incident collectif non vérifié en premier, annotation contestable) sont traitées à part et ne dépendent pas de cette décision.

S'y ajoute une exigence posée par Marc Dubois lors de l'atelier de risques du 23 avril : l'identité qui lit la description du ticket, rédigée par le client et donc non fiable, ne doit pas détenir de droit d'écriture sur le réseau.

**Question à trancher** : le diagnostic et la résolution doivent-ils être portés par un seul agent ou par deux ?

## 2. Critères de décision

| Critère | Seuil ou attente | Pourquoi il compte |
| --- | --- | --- |
| Justesse du diagnostic | ≥ 90 % sur le golden set | Seuil de passage du plan d'évaluation ; un diagnostic faux déclenche une action inutile ou une réouverture |
| Actions inappropriées sur le jeu adverse | 0 | Condition d'entrée en pilote |
| Séparation des droits | Aucun droit d'écriture réseau pour l'identité exposée au texte du client | Exigence du RSSI |
| Coût d'inférence par cas | Compatible avec le plafond de 0,50 € par ticket pour l'ensemble du système | Hypothèse du business case |
| Exploitabilité | Opérable par l'équipe Voxalis après transfert | Critère de fin de mission |

## 3. Options envisagées

| Critère | Option A — Agent unique, 9 outils | Option B — Agent unique en deux phases | Option C — Deux agents coordonnés | Option D — Diagnostic par workflow codé |
| --- | --- | --- | --- | --- |
| Justesse du diagnostic (600 cas) | 84 % | 87 % | 91 % | Non mesurée |
| Actions inappropriées (120 cas adverses) | 5 | 3 | 0 | Non mesurée |
| Séparation des droits | Non : lecture et écriture dans la même identité | Non | Oui, par construction | Oui |
| Coût d'inférence estimé par cas | 0,31 € | 0,27 € | 0,26 € (0,18 € + 0,08 €) | Plus faible |
| Délai médian | 110 s | 115 s | 130 s | Plus court |
| Charge d'exploitation | 1 prompt, 1 fiche agent | 1 prompt à deux phases, logique de bascule à maintenir | 2 prompts, 2 fiches, 1 contrat d'interface | 1 arbre de décision par motif à maintenir |

**Option A** : l'état du prototype en S18. Simple à opérer, mais sous le seuil de qualité et incompatible avec l'exigence de séparation des droits.

**Option B** : un seul agent, dont les outils d'écriture et les règles de remédiation ne sont présentés qu'une fois le diagnostic conclu. Corrige une partie de la conclusion prématurée (87 %, 522 cas sur 600), reste sous le seuil, et laisse lecture et écriture dans la même identité.

**Option C** : un Agent Diagnostic en lecture seule (5 outils) produit un diagnostic structuré ; un Agent Résolution (4 outils, dont `reseau.executer_action`) agit à partir de ce diagnostic ; l'Orchestrateur de cas assure le passage de relais.

**Option D** : écartée sans mesure. Un arbre codé ne couvrirait que les 12 motifs récurrents, soit 58 % des incidents, et les traces montrent que l'ordre des vérifications dépend de ce qu'elles révèlent. Elle reste une piste pour les motifs les plus stables (voir le signal de révision).

## 4. Décision

Nous séparons le traitement technique en deux agents : l'Agent Diagnostic, en lecture seule, établit la cause ; l'Agent Résolution, seul détenteur de `reseau.executer_action`, exécute la remédiation à partir du diagnostic structuré.

La raison décisive est double : l'option C est la seule à franchir le seuil de 90 %, et la seule à garantir la séparation des droits par construction plutôt que par consigne.

## 5. Conséquences

**Ce que nous gagnons**

- Justesse du diagnostic de 91 % contre 84 %, à modèle identique.
- Moindre privilège : l'Agent Diagnostic ne peut rien modifier ; l'Agent Résolution ne reçoit jamais le texte libre du client, seulement un diagnostic validé par schéma.
- Autonomie réglable séparément : L3 en lecture seule pour le diagnostic, L3 ou L2 selon l'action pour la résolution.
- Évaluation séparée : une régression se localise sur un agent.

**Ce que nous acceptons de perdre**

| Conséquence négative | Traitement |
| --- | --- |
| Un passage de relais de plus, environ 20 secondes | Accepté : négligeable face au MTTR visé de 12 h |
| Perte d'information possible entre diagnostic et résolution | Contrat d'interface versionné (`diagnostic.v1`), validé par schéma ; test de cohérence ajouté au plan d'évaluation |
| Un diagnostic faux à confiance élevée est exécuté tel quel | L'Agent Résolution vérifie l'état du service avant d'agir ; la passerelle exige un diagnostic récent rattaché au ticket |
| Deux prompts, deux fiches agents, deux jeux de critères à maintenir | Accepté ; charge estimée à une demi-journée par mois pour l'équipe AgentOps |
| Risque de sur-découpage par imitation | Aucun autre découpage sans mesure équivalente sur un agent unique |

**Ce qui change pour les équipes** : une fiche agent par agent, une identité technique par agent dans la passerelle, une trace unique par cas couvrant les deux agents pour le débogage.

## 6. Signal de révision

| Signal | Seuil | Source de la mesure | Propriétaire |
| --- | --- | --- | --- |
| Un agent unique franchit le seuil avec les neuf outils | Justesse ≥ 90 % sur le golden set, testée à chaque changement de version du modèle, et séparation des droits assurée autrement | Campagne d'évaluation dédiée | Thomas Nguyen |
| Le passage de relais dégrade la résolution | Remédiation exécutée différente de la remédiation recommandée, sans justification, dans plus de 2 % des cas | Agent Qualité | Thomas Nguyen |
| Le relais coûte trop de temps | Plus de 30 secondes en médiane | Traces | Équipe AgentOps |
| Un motif devient entièrement prévisible | Chemin de diagnostic identique dans plus de 95 % de 500 cas consécutifs d'un même motif | Traces | Sophie Lambert |

Le dernier signal rouvrirait l'option D pour le motif concerné, pas pour l'ensemble.

## 7. Mise en œuvre

| Action | Responsable | Échéance |
| --- | --- | --- |
| Mettre à jour les fiches agents Diagnostic et Résolution | Léo | 20 mai 2026 |
| Figer le schéma `diagnostic.v1` et ajouter le test de cohérence du relais au plan d'évaluation | Inès | 20 mai 2026 |
| Activer les deux identités techniques et la matrice de droits dans la passerelle | Référent sécurité Voxalis | 22 mai 2026 |
| Publier la version 1.1 du dossier d'architecture (sections 3, 4 et 8) | Léo et Inès | 22 mai 2026 |
