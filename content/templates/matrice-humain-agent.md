---
id: matrice-humain-agent
titre: "Matrice de répartition humain-agent"
resume: "Pour chaque activité du processus cible : qui réalise, quel humain nommé répond du résultat, à quel niveau d'autonomie, quand l'agent escalade et comment son travail est contrôlé. Le document qui rend la délégation aux agents explicite et opposable."
phase: reinventer
type: canevas
format: tableau
effort: "Une demi-journée de préparation, un atelier de 2 h, une mise à jour à chaque changement d'autonomie"
tags: [responsabilite, autonomie, supervision, escalade]
frameworks: [raci-augmente, niveaux-autonomie, collaboration-humain-agent]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La matrice répond, activité par activité, à la question que posent le métier, la DRH et le RSSI : quand un agent agit, qui en répond ? Elle sépare celui qui réalise de celui qui répond du résultat, et ce dernier est toujours une personne nommée. Elle sert de base aux fiches agent, au dimensionnement de la supervision et aux fiches de rôle.

## Quand l'utiliser

En phase [Réinventer](/methode/reinventer), une fois les voies du [processus cible](/templates/processus-cible-ai-native) définies. Elle se met à jour après la conception, puis à chaque élargissement ou repli d'autonomie. Les principes sont ceux du [RACI augmenté](/frameworks/raci-augmente) et des [niveaux d'autonomie](/frameworks/niveaux-autonomie).

## Comment le remplir

1. Lister les activités du processus cible, en isolant toute situation où le risque change : même outil, autre niveau.
2. Pour chaque ligne, nommer qui réalise, puis la personne qui répond du résultat. Un agent, une équipe ou un comité ne répondent de rien.
3. Fixer le niveau d'autonomie par activité et par situation.
4. Écrire des conditions d'escalade testables, avec le destinataire.
5. Choisir le mode de contrôle et chiffrer la charge humaine qu'il crée.

## Critères de qualité

- [ ] Chaque ligne nomme une personne, avec son prénom et son nom, qui répond du résultat.
- [ ] Aucune activité qui écrit ou engage le client n'est sans règle d'approbation ou de contrôle.
- [ ] Les conditions d'escalade sont vérifiables par un test, pas par un jugement.
- [ ] Chaque escalade a un destinataire et un délai.
- [ ] La charge de supervision est chiffrée et tient dans les effectifs.
- [ ] Les conditions d'élargissement et de repli sont écrites.

<!-- section: template -->
# Matrice de répartition humain-agent — {{client}} — {{domaine}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Sponsor** | {{sponsor}} |
| **Propriétaire du processus** | _[Nom, fonction]_ |
| **Version** | _[0.1]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Périmètre** | _[Processus, population, site]_ |

## 1. Conventions

**Niveaux d'autonomie**

| Niveau | L'agent | L'humain |
| --- | --- | --- |
| L0 | N'intervient pas | Fait tout |
| L1 | Informe et suggère | Décide et exécute |
| L2 | Prépare l'action complète | Approuve chaque action avant exécution |
| L3 | Agit seul dans un périmètre défini, escalade les exceptions | Supervise, peut reprendre la main |
| L4 | Agit seul sur tout le périmètre | Contrôle a posteriori par échantillonnage et sur alerte |
| L5 | Planifie et gère ses exceptions | Fixe les objectifs et audite |

**Rôles**

| Rôle | Tenu par | Ce qu'il fait dans le processus |
| --- | --- | --- |
| _[Rôle humain ou agent]_ | _[Nom ou population]_ | |

**Règle** : la colonne « Répond du résultat » ne contient que des personnes nommées. Celui qui réalise peut être un agent ; celui qui répond ne l'est jamais.

## 2. Matrice

| N° | Activité | Réalise | Répond du résultat | Niveau d'autonomie | Conditions d'escalade | Mode de contrôle |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | _[Verbe + objet. Une ligne par situation de risque.]_ | _[Agent ou rôle humain]_ | _[Prénom Nom]_ | _[L0 à L5]_ | _[Condition testable : vers qui, sous quel délai]_ | _[Approbation préalable / Supervision en temps réel / Échantillonnage de x % / Contrôle automatique / Revue périodique]_ |

## 3. Charge de supervision

| Geste humain | Volume attendu | Temps unitaire | Charge | Tenu par |
| --- | --- | --- | --- | --- |
| _[Approbation, décision, revue d'échantillon, reprise d'exception]_ | _[Par jour ou par semaine]_ | | | |

**Vérification** : _[La charge totale tient-elle dans les effectifs ? Un taux d'approbation proche de 100 % avec quelques secondes de décision signalerait un contrôle fictif.]_

## 4. Trajectoire d'autonomie

| Activité | Niveau actuel | Niveau visé | Preuve exigée | Qui décide | Condition de repli |
| --- | --- | --- | --- | --- | --- |
| | | | _[Volume, seuil, durée d'observation]_ | | _[Seuil ou événement qui fait redescendre]_ |

**Activités qui ne monteront pas** : _[Les écrire, pour ne pas rouvrir le débat]_

## 5. Validation

| Validé par | Fonction | Date |
| --- | --- | --- |
| | _[Propriétaire du processus, DRH, RSSI]_ | |

<!-- section: exemple -->
# Matrice de répartition humain-agent — Voxalis — Assistance & SAV Entreprises

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Propriétaire du processus** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Version** | 2.0 du 5 mai 2026. La version 1.0, validée au COPIL du 9 avril, décrivait des fonctions d'agent ; la version 2.0 les remplace par les six agents du système SAV Augmenté, arrêtés en phase Concevoir |
| **Rédacteur** | Hugo et Léo, FDE |
| **Périmètre** | Incidents techniques PME ; pilote du plateau de Nantes, 18 conseillers |

## 1. Conventions

**Niveaux d'autonomie** : échelle L0 à L5 de la méthode, inchangée.

**Rôles**

| Rôle | Tenu par | Ce qu'il fait dans le processus |
| --- | --- | --- |
| Superviseur de cas | Les 18 conseillers du plateau de Nantes | Décide en voie assistée, approuve les actions à risque moyen, contrôle la voie autonome par échantillonnage, reprend les exceptions |
| Expert N2 | Experts N2, dont les deux détachés | Mène la voie experte, approuve les actions à risque élevé, revoit les diagnostics échantillonnés, valide les articles |
| Responsable de plateau | Nadia Cherif | Répond des décisions prises sur son plateau ; reçoit les approbations restées sans réponse ; peut arrêter une voie |
| Propriétaire du processus | Sophie Lambert | Répond des règles confiées aux agents et de leurs résultats sur le domaine |
| Exploitation des agents | Équipe mixte FDE et Voxalis pendant le pilote, équipe AgentOps ensuite | Surveille, corrige, déploie ; peut arrêter un agent |
| Orchestrateur de cas | Agent | Tient l'état du cas, choisit la voie, déclenche les escalades |
| Agent Qualification | Agent | Classe le ticket, extrait les informations, enrichit depuis le CRM |
| Agent Diagnostic | Agent | Interroge supervision, test de ligne et inventaire, corrèle avec les incidents connus |
| Agent Résolution | Agent | Exécute les actions du catalogue de remédiation |
| Agent Communication | Agent | Informe le client à chaque étape |
| Agent Qualité | Agent | Contrôle chaque cas clos, alimente les évaluations et la base de connaissances |

**Règle** : la colonne « Répond du résultat » ne contient que des personnes nommées.

## 2. Matrice

| N° | Activité | Réalise | Répond du résultat | Niveau d'autonomie | Conditions d'escalade | Mode de contrôle |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Qualifier le ticket : classer, extraire, enrichir | Agent Qualification | Sophie Lambert | L4 | Motif non reconnu, client grand compte ou confiance insuffisante : le superviseur de cas qualifie | Échantillon hebdomadaire de 3 % revu par les superviseurs ; exactitude d'au moins 95 % sur le golden set rejoué chaque nuit |
| 2 | Choisir la voie, tenir l'état du cas | Orchestrateur de cas | Sophie Lambert | L3 | Cas sans progrès depuis 2 h, récidive, réclamation ouverte : superviseur de cas | Revue hebdomadaire des bascules de voie |
| 3 | Établir le diagnostic technique | Agent Diagnostic | Sophie Lambert | L3, lecture seule | Confiance faible, plus de 8 appels d'outils sans conclusion, outil indisponible plus de 60 secondes, suspicion d'incident de sécurité : expert N2 | 5 % des diagnostics revus chaque semaine par les experts N2 ; alerte si la justesse hebdomadaire passe sous 88 % |
| 4 | Lancer un test de ligne pendant les heures ouvrées du client | Agent Diagnostic, après approbation | Nadia Cherif | L2 | Toujours soumis au superviseur de cas | Approbation tracée ; délai d'approbation suivi |
| 5 | Exécuter une remédiation à risque faible sur un motif ouvert à la voie autonome | Agent Résolution | Sophie Lambert | L3 | Service non rétabli, diagnostic à confiance moyenne ou faible, deuxième action sur le service en 24 h, trois actions sur le ticket : superviseur de cas | Vérification automatique du rétablissement ; chaque cas clos contrôlé par l'Agent Qualité ; 5 % revus par les superviseurs |
| 6 | Exécuter une remédiation à risque moyen | Agent Résolution, après approbation du superviseur de cas | Nadia Cherif | L2 | Sans réponse en 15 minutes : responsable de plateau. Jamais d'approbation par défaut | Approbation préalable ; taux de refus et temps de décision suivis |
| 7 | Exécuter une remédiation à risque élevé | Agent Résolution, après approbation d'un expert N2 | Sophie Lambert | L2 | Équipement partagé entre plusieurs clients : hors catalogue, réservé à la Direction Réseau | Approbation préalable, tracée avec sa justification |
| 8 | Décider en voie assistée | Superviseur de cas, sur proposition des agents | Nadia Cherif | L2 | Cas complexe, client multi-sites : bascule en voie experte avec le dossier | Part des propositions acceptées sans correction, cible d'au moins 85 % ; cas témoins dont l'erreur est connue, injectés chaque semaine |
| 9 | Mener un cas de la voie experte | Expert N2 ; les agents exécutent à sa demande | Sophie Lambert | L1 | Intervention sur site : back-office. Incident collectif : Direction Réseau | Revue mensuelle de cas entre experts |
| 10 | Informer le client du statut de son incident | Agent Communication | Nadia Cherif | L3 | Réclamation ouverte, message hors gabarit, client qui demande une personne : superviseur de cas | Conformité des messages d'au moins 98 %, contrôlée par l'Agent Qualité |
| 11 | Accorder un geste commercial | Superviseur de cas ; l'Agent Communication prépare le message | Nadia Cherif | L2 | Au-delà de la délégation du superviseur : responsable de plateau | Décision humaine systématique ; revue mensuelle des gestes accordés |
| 12 | Contrôler chaque cas clos | Agent Qualité | Thomas Nguyen | L3 | Action hors règle ou message non conforme : exploitation des agents et responsable de plateau, le jour même | Calibrage mensuel sur 50 cas notés par les experts N2 |
| 13 | Publier ou corriger un article de la base de connaissances | Expert N2, sur proposition de l'Agent Qualité | Sophie Lambert | L2 | Toujours validé avant publication | Aucun article servi aux agents sans validation de moins de 12 mois |
| 14 | Ouvrir un motif à la voie autonome, élargir ou réduire une autonomie | Revue hebdomadaire du pilote, puis comité de gouvernance IA | Sophie Lambert et Karim Haddad | L0 | Incident : repli immédiat, sans attendre l'instance | Dossier de preuves ; décision portée au registre des agents |
| 15 | Arrêter un agent ou une voie | Responsable de plateau ou exploitation des agents | Karim Haddad | L0 | Incident de sécurité : Marc Dubois informé dans l'heure | Arrêt et mode dégradé testés avant le pilote |

Lecture : sur quinze activités, neuf sont réalisées par un agent seul ou après approbation, et aucune n'a un agent pour responsable. Les lignes 3 et 4, comme 5, 6 et 7, portent sur le même outil : c'est la situation qui change le niveau, pas l'agent.

## 3. Charge de supervision

Estimée pour le pilote, à la répartition cible des voies : 9 400 tickets attendus en 8 semaines, soit environ 235 par jour ouvré.

| Geste humain | Volume attendu | Temps unitaire | Charge | Tenu par |
| --- | --- | --- | --- | --- |
| Décision en voie assistée (45 % des tickets) | 105 par jour | 30 min, échange avec le client compris | 53 h par jour | 18 superviseurs de cas |
| Accueil et information des clients des voies autonome et experte | 130 contacts par jour | 7 min | 15 h par jour | Superviseurs de cas |
| Reprise des exceptions de la voie autonome | 10 par jour | 30 min | 5 h par jour | Superviseurs de cas |
| Approbation d'actions à risque moyen et de tests de ligne | 25 par jour | 2 min | 1 h par jour | Superviseurs de cas |
| Contrôle par échantillonnage de la voie autonome (5 %) | 4 par jour | 10 min | 1 h par jour | Superviseurs de cas, à tour de rôle |
| Cas de la voie experte (20 % des tickets) | 47 par jour | Variable | Charge actuelle du N2, sans reconstitution de dossier | Experts N2 |
| Revue des diagnostics échantillonnés (5 %) | 59 par semaine | 10 min | 10 h par semaine | Les deux experts N2 détachés |

**Vérification** : la charge des superviseurs est d'environ 75 h par jour, pour 126 h disponibles à 18 personnes. La capacité libérée, de l'ordre de 40 %, est cohérente avec le gain d'efficacité du business case ; son usage est fixé dans le modèle opérationnel cible. Le volume d'approbations, 25 par jour pour le plateau, reste loin de l'approbation à la chaîne. Seuil d'alerte : un taux d'approbation supérieur à 98 % avec un temps de décision inférieur à 10 secondes déclenche une revue de la règle.

## 4. Trajectoire d'autonomie

| Activité | Niveau actuel | Niveau visé | Preuve exigée | Qui décide | Condition de repli |
| --- | --- | --- | --- | --- | --- |
| 3. Diagnostic | L3 | L4 sur un motif donné | 500 diagnostics consécutifs avec une justesse d'au moins 95 % sur ce motif | Comité de gouvernance IA | Justesse hebdomadaire sous 88 % : retour à L3 et revue complète |
| 5. Remédiation à risque faible | Mode fantôme, puis L2, puis L3 sur un catalogue restreint | L3 sur les motifs récurrents | Par motif : aucune action inappropriée, réouvertures sous la référence de 14 % | Sophie Lambert sur proposition de la revue du pilote, puis comité de gouvernance IA | Une action inappropriée : motif retiré de la voie autonome le jour même |
| 6. Remédiation à risque moyen | L2 | L3 pour une action donnée | L'action a fait ses preuves sous approbation : taux de refus mesuré, aucun incident | Comité de gouvernance IA, avec la Direction Réseau | Un incident : retour à L2 |
| 10. Messages de statut | L3 | L3 | Sans objet | — | Conformité sous 98 % sur une semaine : relecture humaine avant envoi |

**Activités qui ne monteront pas** : le geste commercial (ligne 11) et les remédiations à risque élevé (ligne 7) restent soumis à une décision humaine. Le test de ligne en heures ouvrées (ligne 4) reste en L2 tant qu'il peut couper le service du client.

## 5. Validation

| Validé par | Fonction | Date |
| --- | --- | --- |
| Sophie Lambert | Propriétaire du processus | 5 mai 2026 |
| Isabelle Moreau | DRH, pour les rôles de superviseur de cas et d'expert | 5 mai 2026 |
| Marc Dubois | RSSI, pour les droits et les approbations | 6 mai 2026 |
| Karim Haddad | DSI, pour l'arrêt et le mode dégradé | 6 mai 2026 |
