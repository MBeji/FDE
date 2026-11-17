---
id: fiche-conception-processus-agentique
titre: "Fiche de conception de processus agentique"
resume: "L'Agentic Process Design Card : pour un segment du processus cible, le résultat attendu, les critères d'acceptation, le flux, les règles classées entre code et agent, les droits de décision et les données. Le contrat que le FDE Design remet au FDE Build avant toute construction."
phase: reinventer
type: livrable
format: document
effort: "1 à 2 jours par segment, dont une séance commune Design et Build"
tags: [bpmn, regles-metier, criteres-acceptation, passage-de-relais, conception]
frameworks: [bpmn-agentique, eliminer-automatiser-agentifier, fil-numerique, raci-augmente, evaluation-agents]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La fiche de conception de processus agentique, ou Agentic Process Design Card, décrit un segment du processus cible assez précisément pour qu'on puisse le construire sans réinterpréter le besoin. Elle dit ce qui déclenche le segment, ce qu'il doit produire, quelles règles le bornent, qui décide, comment on jugera le résultat et de quelles données il dépend.

Elle se place entre deux livrables. Le [processus cible](/templates/processus-cible-ai-native) décrit tout le flux et se valide avec le métier. La [fiche agent](/templates/fiche-agent) décrit un agent et s'écrit en phase Concevoir. La fiche de conception fait le pont : c'est d'elle que sortent les garde-fous, les règles d'approbation et les cas d'évaluation.

## Quand l'utiliser

À la fin de la phase Réinventer, pour chaque voie ou segment dont le verdict est « automatiser » ou « agentifier ». Elle est signée avant le jalon G3 et mise à jour à chaque changement de règle ou d'autonomie.

## Comment le remplir

1. Reprendre le verdict et les faits du [diagnostic](/templates/diagnostic-flux-traces).
2. Écrire le résultat et les indicateurs avant de dessiner le flux.
3. Décrire le chemin nominal, puis marquer chaque passerelle : déterministe ou probabiliste.
4. Classer chaque règle : garde-fou, jugement confié à un agent, ou décision humaine.
5. Traduire chaque indicateur en critère d'acceptation, avec le FDE Build.
6. Lister les applications, les interfaces manquantes et les champs du journal des décisions.
7. Passer ensemble la liste « prêt pour le build », puis faire signer.

## Critères de qualité

- [ ] Le résultat est écrit du point de vue du client du processus.
- [ ] Chaque indicateur a un critère d'acceptation mesurable, et un moyen de le mesurer.
- [ ] Chaque passerelle probabiliste a un seuil, une branche par défaut vers un humain et un critère d'évaluation.
- [ ] Aucune règle dont la violation est inacceptable n'est confiée au seul agent.
- [ ] Chaque action qui écrit a une règle d'approbation et un repli.
- [ ] Les interfaces manquantes sont nommées, avec leur propriétaire.
- [ ] Le FDE Build a signé : il sait évaluer ce qu'on lui demande de construire.

<!-- section: template -->
# Fiche de conception de processus agentique — _[Voie ou segment]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Processus** | _[Niveaux L1 à L3 ; voie ou segment concerné]_ |
| **Verdict de la grille** | _[Automatiser / Agentifier ; fait mesuré qui le fonde]_ |
| **Propriétaire du processus** | _[Nom, fonction]_ |
| **FDE Design / FDE Build** | _[Noms]_ |
| **Version** | _[0.1]_ du {{date}} |
| **Statut** | _[Projet / Prêt pour le build / En production]_ |

## 1. Résultat attendu

**Résultat, du point de vue du client** : _[Une phrase]_

**Cas couverts** : _[Critères d'entrée du segment]_
**Cas exclus** : _[Ce qui part vers une autre voie ou un autre processus]_
**Volume et valeur en jeu** : _[Cas par an ; délai, coût ou revenu concerné]_

## 2. Indicateurs et critères d'acceptation

| Indicateur du processus | Référence | Cible | Critère d'acceptation | Mesuré par |
| --- | --- | --- | --- | --- |
| _[Délai, coût, qualité]_ | | | _[Ce que le système doit atteindre pour être accepté]_ | _[Évaluation sur cas annotés / Mesure en production]_ |

**Indicateurs garde-fous** : _[Ce qui ne doit pas se dégrader pendant qu'on améliore le reste]_

## 3. Flux

**Déclencheur** : _[Événement daté]_
**Modèle de référence** : _[Lien et version]_

| N° | Étape | Type | Exécutant | Niveau d'autonomie | Ce qui sort |
| --- | --- | --- | --- | --- | --- |
| 1 | | _[Service / Règle / Agent / Utilisateur]_ | | _[L0 à L5]_ | |

| Passerelle | Question | Nature | Seuil | Branche par défaut |
| --- | --- | --- | --- | --- |
| | | _[Déterministe / Probabiliste]_ | | _[Toujours un humain pour une passerelle probabiliste]_ |

## 4. Registre des règles

| N° | Règle | Qui l'impose | Classe | Où elle vit | Comment on la vérifie |
| --- | --- | --- | --- | --- | --- |
| R1 | | _[Texte, contrat, direction]_ | _[Garde-fou / Jugement / Décision humaine]_ | _[Code, outil, agent, poste]_ | _[Test, évaluation, contrôle]_ |

## 5. Droits de décision et approbations

| Décision ou action | Qui réalise | Qui en répond | Approbation | Délai et escalade |
| --- | --- | --- | --- | --- |
| | | _[Une personne nommée]_ | | |

_[Extrait de la matrice humain-agent pour ce segment ; la matrice complète fait foi.]_

## 6. Délais et exceptions

**Délai cible du segment** : _[Valeur]_

| Situation | Détection | Repli |
| --- | --- | --- |
| | | |

**Mode dégradé** : _[Ce qui se passe si le système est arrêté]_

## 7. Données et fil numérique

**Objet pivot et identifiant** : _[Ce qui suit le cas d'un système à l'autre]_

| Application | Usage | Lecture ou écriture | Interface | Propriétaire |
| --- | --- | --- | --- | --- |
| | | | _[Existe / À construire]_ | |

**Journal des décisions** : _[Champs enregistrés ; données personnelles masquées]_

## 8. Prêt pour le build

- [ ] Le problème et l'indicateur qu'il fait bouger sont écrits, avec la référence.
- [ ] Au moins dix cas réels sont fournis, dont des cas difficiles et des contre-exemples.
- [ ] Les critères d'acceptation sont testables.
- [ ] Les règles et les exceptions connues sont listées, avec leur source.
- [ ] Les accès et les données sont obtenus, ou leur date est connue.
- [ ] Le FDE Build a posé ses questions et reçu une réponse écrite.

| Rôle | Nom | Date |
| --- | --- | --- |
| Propriétaire du processus | | |
| FDE Design | | |
| FDE Build | | |

<!-- section: exemple -->
# Fiche de conception de processus agentique — Voie autonome, motif « perte de synchronisation de l'accès »

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Processus** | Gérer le service client ; Assistance & SAV Entreprises ; traitement d'un incident technique PME. Voie autonome, premier motif ouvert |
| **Verdict de la grille** | Agentifier la collecte, le diagnostic et la remédiation ; automatiser le choix de la voie et la vérification du rétablissement |
| **Propriétaire du processus** | Sophie Lambert, Directrice Relation Client Entreprises |
| **FDE Design / FDE Build** | Hugo / Léo |
| **Version** | 1.0 du 8 avril 2026 |
| **Statut** | Prêt pour le build ; présentée au COPIL du 9 avril (jalon G3) |

## 1. Résultat attendu

**Résultat, du point de vue du client** : l'accès est rétabli et le client le sait, sans qu'il ait eu à rappeler.

**Cas couverts** : incident technique d'un client PME, motif « perte de synchronisation de l'accès », cause établie avec une confiance élevée, remédiation au catalogue à risque faible, aucun incident collectif sur la zone, aucune réclamation ouverte.
**Cas exclus** : tout cas qui ne tient pas l'un de ces critères, y compris en cours de route : voie assistée. Récidive, client multi-sites, intervention sur site : voie experte.
**Volume et valeur en jeu** : l'un des 12 motifs récurrents, qui pèsent ensemble 58 % des 260 000 incidents. Motif fréquent et entièrement documenté. La voie autonome vise 35 % des incidents en régime de croisière, pour un délai cible de 1,5 h contre 31 h en moyenne aujourd'hui.

## 2. Indicateurs et critères d'acceptation

| Indicateur du processus | Référence | Cible | Critère d'acceptation | Mesuré par |
| --- | --- | --- | --- | --- |
| Délai de résolution | 31 h en moyenne, tous incidents | 1,5 h sur la voie | Aucune attente d'un humain sur le chemin nominal | Mesure en production, par voie |
| Erreur de qualification | 9 % | Moins de 5 % | Exactitude de la qualification d'au moins 95 % | Évaluation sur le golden set |
| Résolution au premier contact | 54 % | 75 % | Justesse du diagnostic d'au moins 90 % | Évaluation sur le golden set |
| Sécurité des actions | Sans objet | Aucune action inappropriée | Zéro action inappropriée sur le jeu adverse | Évaluation sur les cas adverses |
| Information du client | Aucune nouvelle pendant le traitement | Un message à chaque changement d'état | Conformité des messages d'au moins 98 % | Évaluation, puis contrôle des cas clos |

**Indicateurs garde-fous** : le taux de réouverture, 14 % aujourd'hui, ne doit pas monter ; cible de 7 %. La satisfaction après clôture, 3,6 sur 5, ne doit pas baisser.

## 3. Flux

**Déclencheur** : ouverture d'un ticket par le client, par message ou par téléphone.
**Modèle de référence** : modèle de la voie autonome, version 1.0, annexé au processus cible.

| N° | Étape | Type | Exécutant | Niveau d'autonomie | Ce qui sort |
| --- | --- | --- | --- | --- | --- |
| 1 | Qualifier le ticket | Agent | Agent de qualification | L4 | Motif, service, urgence, client identifié |
| 2 | Établir le diagnostic : alarmes et date de dernière synchronisation, puis test de ligne | Agent | Agent de diagnostic | L3, lecture seule | Cause probable, preuves, niveau de confiance, remédiation recommandée |
| 3 | Choisir la voie | Règle | Orchestration du cas | L3 | Voie affectée |
| 4 | Exécuter la remédiation | Agent, sur catalogue | Agent de résolution | L3 | Action exécutée et tracée |
| 5 | Vérifier le rétablissement | Service | Orchestration du cas, par la supervision réseau | — | Service « rétabli » ou « non rétabli » |
| 6 | Informer le client et clore | Agent, sur gabarits | Agent de communication | L3 | Message de statut ; ticket clos |
| 7 | Contrôler le cas clos | Agent | Agent de contrôle qualité | L3 | Écart signalé, ou cas conforme |

| Passerelle | Question | Nature | Seuil | Branche par défaut |
| --- | --- | --- | --- | --- |
| P1 | Le ticket relève-t-il de ce motif ? | Probabiliste | Confiance élevée | Le superviseur de cas qualifie |
| P2 | La cause est-elle établie ? | Probabiliste | Confiance élevée, calibrée sur le golden set | Voie assistée |
| D1 | L'action recommandée est-elle au catalogue à risque faible ? | Déterministe | — | Voie assistée, approbation |
| D2 | Un incident collectif est-il déclaré sur la zone ? Une réclamation est-elle ouverte ? | Déterministe | — | Aucune action individuelle ; superviseur de cas |
| D3 | La supervision voit-elle le service rétabli ? | Déterministe | — | Voie assistée, avec le dossier |

## 4. Registre des règles

| N° | Règle | Qui l'impose | Classe | Où elle vit | Comment on la vérifie |
| --- | --- | --- | --- | --- | --- |
| R1 | Aucune action individuelle pendant un incident collectif sur la zone | Direction Réseau | Garde-fou | Contrôle codé avant toute action à distance | Test automatisé ; cas adverses |
| R2 | Seules les actions du catalogue à risque faible s'exécutent sans approbation | Sophie Lambert | Garde-fou | Liste fermée dans l'outil d'action à distance | Test automatisé ; revue du catalogue |
| R3 | Un test de ligne pendant les heures ouvrées du client attend une approbation | Processus cible | Garde-fou | Règle d'approbation de l'outil de test | Test automatisé |
| R4 | Deuxième action sur le service en 24 h, ou trois actions sur le ticket : escalade | Sophie Lambert | Garde-fou | Compteur tenu par l'orchestration | Test automatisé |
| R5 | Toute action sur un équipement partagé entre plusieurs clients est réservée à la Direction Réseau | Direction Réseau | Garde-fou | Hors catalogue : l'outil ne l'expose pas | Revue du catalogue |
| R6 | Reconnaître le motif à partir du signalement | — | Jugement | Agent de qualification | Exactitude d'au moins 95 % |
| R7 | Établir la cause à partir des alarmes et du test | — | Jugement | Agent de diagnostic | Justesse d'au moins 90 % |
| R8 | Repérer un client mécontent au ton de son message | Processus cible | Jugement, réglé vers la prudence | Agent de communication ; au doute, superviseur de cas | Cas dédiés du golden set |
| R9 | Accorder un geste commercial | Contrainte conservée | Décision humaine | Poste de supervision | Revue mensuelle des gestes |

## 5. Droits de décision et approbations

| Décision ou action | Qui réalise | Qui en répond | Approbation | Délai et escalade |
| --- | --- | --- | --- | --- |
| Remédiation à risque faible | Agent de résolution | Sophie Lambert | Aucune ; contrôle a posteriori | Service non rétabli : superviseur de cas |
| Test de ligne en heures ouvrées | Agent de diagnostic | Nadia Cherif, sur son plateau | Superviseur de cas | Toujours soumis |
| Remédiation à risque moyen | Agent de résolution | Nadia Cherif | Superviseur de cas | Sans réponse en 15 minutes : responsable de plateau. Jamais d'accord par défaut |
| Ouvrir ce motif à la voie autonome | Revue du pilote | Sophie Lambert et Karim Haddad | Dossier de preuves | Incident : repli immédiat |

## 6. Délais et exceptions

**Délai cible du segment** : 1,5 h.

| Situation | Détection | Repli |
| --- | --- | --- |
| Incident collectif sur la zone | Déclaration de la Direction Réseau, ou diagnostics identiques sur une zone | Aucune action ; ticket rattaché ; client informé |
| Application source indisponible | Erreur ou délai dépassé | Diagnostic à confiance faible ; voie assistée |
| Service non rétabli après l'action | Vérification automatique par la supervision | Voie assistée, avec le dossier complet |
| Client qui demande une personne | Demande explicite, à tout moment | Superviseur de cas, immédiatement |
| Suspicion d'incident de sécurité | Signes relevés au diagnostic | Arrêt du traitement automatique ; expert N2 ; équipe de Marc Dubois alertée |

**Mode dégradé** : agents arrêtés, le ticket est traité par le superviseur de cas dans le poste de supervision. L'arrêt est testé avant le pilote.

## 7. Données et fil numérique

**Objet pivot et identifiant** : le ticket, par son numéro, repris dans chaque trace.

| Application | Usage | Lecture ou écriture | Interface | Propriétaire |
| --- | --- | --- | --- | --- |
| CRM et ticketing | Lire et mettre à jour le ticket ; envoyer un message | Lecture et écriture | Existe | DSI |
| Supervision réseau | État du service, alarmes, incidents collectifs | Lecture | Existe ; tenue en charge à vérifier | Direction Réseau |
| Supervision réseau | Action à distance du catalogue | Écriture | À construire, dans un cadre contrôlé | Direction Réseau |
| Test de ligne | Test de synchronisation | Écriture : micro-coupure | À construire | Direction Réseau |
| Inventaire du parc | Équipements et offres du client | Lecture | Existe | DSI |
| Base de connaissances | Procédure du motif | Lecture | À construire, après remise à niveau des articles | Relation Client |

**Journal des décisions** : pour chaque étape, le numéro du ticket, l'étape, l'exécutant, les données consultées par référence, la décision, la règle ou la version qui la fonde, le niveau de confiance, l'approbation éventuelle, l'horodatage. Identité du contact masquée, selon la règle fixée avec Élise Martin.

## 8. Prêt pour le build

- [x] Le problème et l'indicateur qu'il fait bouger sont écrits, avec la référence.
- [x] Au moins dix cas réels sont fournis : 30 tickets du motif, dont des cas où la cause était ailleurs.
- [x] Les critères d'acceptation sont testables : quatre seuils, repris dans le plan d'évaluation.
- [x] Les règles et les exceptions connues sont listées, avec leur source.
- [ ] Les accès et les données sont obtenus : trois interfaces à construire, calendrier arrêté avec la DSI et la Direction Réseau.
- [x] Le FDE Build a posé ses questions et reçu une réponse écrite.

| Rôle | Nom | Date |
| --- | --- | --- |
| Propriétaire du processus | Sophie Lambert | 8 avril 2026 |
| FDE Design | Hugo | 8 avril 2026 |
| FDE Build | Léo | 8 avril 2026 |

Réserve du FDE Build, portée au registre RAID : le seuil de « confiance élevée » des passerelles P1 et P2 ne pourra être fixé qu'une fois le golden set annoté. Il est donc renvoyé à la phase Concevoir.
