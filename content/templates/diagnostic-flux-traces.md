---
id: diagnostic-flux-traces
titre: "Diagnostic de flux par les traces"
resume: "Le flux réel reconstitué à partir des journaux d'événements : parcours, attentes, boucles de reprise, tri de la valeur de chaque étape, puis un verdict par segment. Le document qui remplace le compte rendu d'atelier et sert de cadrage au build."
phase: diagnostiquer
type: livrable
format: document
effort: "4 à 6 jours après l'extraction des données, puis 1 jour pour les verdicts"
tags: [process-mining, vsm, diagnostic, traces, verdict]
frameworks: [process-mining-dmaic, value-stream-mapping, eliminer-automatiser-agentifier, architecture-processus]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Ce diagnostic établit, à partir des traces laissées dans les applications, comment le processus se déroule réellement : quels parcours, quelles attentes, quelles reprises. Il classe ensuite chaque étape selon sa valeur pour le client et rend un verdict par segment : supprimer, réingénierer, automatiser, agentifier. Il complète la [fiche processus existant](/templates/fiche-processus-existant), qui décrit le processus ; lui le mesure et tranche.

## Quand l'utiliser

En phase Diagnostiquer, dès qu'une application horodate les changements d'état des dossiers. Les sections 1 à 6 se présentent au jalon G1. Les sections 7 et 8 se complètent en phase Cibler, pour le jalon G2. Sans traces exploitables, s'en tenir à la fiche processus et à l'observation, et l'écrire.

## Comment le remplir

1. Écrire la question de décision avant d'extraire quoi que ce soit.
2. Faire extraire le journal par le FDE Build ou le data engineer du client, personnes pseudonymisées.
3. Documenter les défauts du journal : un lecteur doit savoir ce que les chiffres ne disent pas.
4. Reconstituer les parcours, puis les attentes et les boucles. Segmenter avant de conclure.
5. Classer chaque étape avec deux personnes du terrain.
6. Rendre un verdict par segment, fait mesuré à l'appui.
7. Écrire ce que le build doit en retenir.

## Critères de qualité

- [ ] La question de décision tient en une phrase.
- [ ] Le cas, le début et la fin du compteur sont définis.
- [ ] Les défauts du journal et leurs parades sont écrits.
- [ ] Chaque parcours a une part du volume et un délai.
- [ ] Chaque étape est classée, et chaque gaspillage est nommé.
- [ ] Chaque verdict s'appuie sur un fait mesuré.
- [ ] La valeur des suppressions est distinguée de celle des agents.
- [ ] Aucun résultat ne porte sur une personne.

<!-- section: template -->
# Diagnostic de flux par les traces — {{client}}

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Domaine** | {{domaine}} |
| **Processus étudié** | _[Niveaux L1 à L3 de l'architecture de processus ; déclencheur et résultat]_ |
| **Propriétaire du processus** | _[Nom, fonction]_ |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Sources** | _[Applications, période, volume ; observation et entretiens utilisés pour recouper]_ |
| **Validation** | _[Qui a relu, qui signe la référence, à quel jalon]_ |

## En bref

_[Trois constats, chacun avec son chiffre. Le premier répond à la question de décision.]_

## 1. Question et périmètre

**Question de décision** : _[Ce que le diagnostic doit permettre de trancher]_

| Définition | Contenu |
| --- | --- |
| Un cas | _[L'unité suivie : un ticket, une commande, un dossier]_ |
| Début du compteur | _[Événement]_ |
| Fin du compteur | _[Événement]_ |
| Période et volume | _[Du… au… ; nombre de cas complets]_ |
| Hors périmètre | _[Cas exclus et raison]_ |

## 2. Journal d'événements

| Champ | Source | Remarque |
| --- | --- | --- |
| Identifiant du cas | | |
| Activité | | _[Statuts ou étapes retenus]_ |
| Horodatage | | |
| Équipe ou rôle | | _[Jamais de nom de personne]_ |
| Attributs de segmentation | | _[Motif, segment, canal]_ |

**Qualité du journal**

| Défaut | Effet sur l'analyse | Parade retenue |
| --- | --- | --- |
| | | |

## 3. Parcours réels

| Parcours | Part des cas | Délai moyen | Lecture |
| --- | --- | --- | --- |
| | | | |

_[Nombre de parcours nécessaires pour couvrir 80 % du volume. Ce que contient la longue traîne.]_

## 4. Attentes et goulots

| Transition | Part des cas concernés | Attente moyenne sur l'ensemble des cas | Attente par cas concerné | Cause établie ou supposée |
| --- | --- | --- | --- | --- |
| | | | | |

## 5. Boucles de reprise et écarts de conformité

| Constat | Mesure | Source | Lecture |
| --- | --- | --- | --- |
| _[Boucle, étape sautée, contournement]_ | | _[Traces, relecture de dossiers, observation]_ | |

## 6. Tri de la valeur

| N° | Étape ou attente | Durée | Catégorie | Type de gaspillage | Justification |
| --- | --- | --- | --- | --- | --- |
| | | | _[Valeur ajoutée / Nécessaire sans valeur ajoutée / Gaspillage]_ | | |
| **Total** | | | | | |

**Efficience de flux** : _[Temps à valeur ajoutée ÷ délai de bout en bout]_

## 7. Verdicts par segment

| Segment | Fait mesuré | Verdict | Valeur en jeu | Suite |
| --- | --- | --- | --- | --- |
| | | _[Supprimer / Réingénierer / Automatiser / Agentifier / Garder à l'humain]_ | | |

**Valeur acquise sans IA** : _[Suppressions et réingénierie]_
**Valeur attendue des automatisations et des agents** : _[À chiffrer dans le business case]_

## 8. Ce que le diagnostic transmet au build

| Élément | Contenu |
| --- | --- |
| Segmentation des cas | _[Familles de cas et leurs parts : base des voies du processus cible]_ |
| Tirage des cas d'évaluation | _[Strates, exceptions à sur-représenter, où trouver les cas]_ |
| Référence | _[Indicateurs, valeurs, période ; qui signe]_ |
| Applications et interfaces | _[Ce que chaque étape consulte ou modifie ; interfaces manquantes]_ |
| Ce qu'on ne construit pas | _[Étapes supprimées, demandes écartées]_ |

## 9. Limites et suites

_[Ce que les traces ne montrent pas, ce qui reste à confirmer, par qui et pour quand.]_

<!-- section: exemple -->
# Diagnostic de flux par les traces — Voxalis

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Processus étudié** | Gérer le service client ; Assistance & SAV Entreprises ; traitement d'un incident technique PME, du signalement au rétablissement confirmé |
| **Propriétaire du processus** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Version** | 1.0 du 18 février 2026 (sections 1 à 6, jalon G1) ; 2.0 du 10 mars 2026 (sections 7 et 8, jalon G2) |
| **Rédacteur** | Hugo et Léo, FDE, avec le data engineer détaché |
| **Sources** | 12 mois de tickets : 260 000 incidents techniques, changements de statut horodatés. Recoupé avec 3 jours d'observation à Nantes, 22 entretiens et la relecture de 50 tickets transférés |
| **Validation** | Référence signée par Sophie Lambert et Julien Faure au jalon G1 du 19 février. Verdicts présentés au COPIL du 12 mars |

## En bref

1. **Les 31 h de délai moyen se jouent sur moins de la moitié des incidents.** Les 46 % d'incidents transférés au N2 mettent 66 h en moyenne ; les autres sont clos en moins d'une heure.
2. **Deux tiers du délai sont du gaspillage.** Files entre niveaux, attente du client, vérifications refaites : 20,8 h sur 31.
3. **Les agents ne sont pas la première réponse.** Sur onze segments, quatre relèvent de la suppression ou de la réingénierie, deux d'une règle simple.

## 1. Question et périmètre

**Question de décision** : où passent les 31 h de délai moyen, et qu'est-ce qui les retire ?

| Définition | Contenu |
| --- | --- |
| Un cas | Un incident technique signalé par un client PME |
| Début du compteur | Ouverture du ticket |
| Fin du compteur | Clôture après confirmation du rétablissement |
| Période et volume | 12 mois, environ 260 000 incidents, soit 62 % des 420 000 tickets du domaine |
| Hors périmètre | Demandes de modification, réclamations et facturation ; grands comptes ; réalisation des interventions sur site |

## 2. Journal d'événements

| Champ | Source | Remarque |
| --- | --- | --- |
| Identifiant du cas | Numéro de ticket, CRM et ticketing | Les réouvertures gardent le numéro d'origine |
| Activité | Statuts du ticket, ramenés aux 9 étapes de la fiche processus | Correspondance validée avec les deux experts N2 détachés |
| Horodatage | Changement de statut | En heures d'horloge, nuits et week-ends compris |
| Équipe ou rôle | File d'affectation : N1, N2, back-office | Aucun identifiant de personne n'est extrait |
| Attributs de segmentation | Motif, service touché, région | Motif corrigé sur échantillon, voir ci-dessous |

**Qualité du journal**

| Défaut | Effet sur l'analyse | Parade retenue |
| --- | --- | --- |
| Le statut « en cours » ne mesure pas le travail : un acteur mène plusieurs dossiers de front | Le temps de traitement est surestimé | Recalage par le chronométrage des 3 au 5 février ; la charge de travail est mesurée à part |
| 9 % d'erreurs de qualification | Les parts par motif sont faussées | Motifs corrigés sur un échantillon relu par les experts N2 |
| Tickets en double pour un même incident | Volume légèrement surestimé | Non corrigé, non mesuré : signalé |
| Les rappels des clients ne sont pas reliés aux tickets | Une partie de l'attente du client reste invisible | Hors analyse ; point à instrumenter dans la cible |
| Cas ouverts avant la période ou non clos à la fin | Délais tronqués | Exclus |

## 3. Parcours réels

| Parcours | Part des cas | Délai moyen | Lecture |
| --- | --- | --- | --- |
| Résolu au premier contact : étapes 1, 2, 3, 4 et 9 | 54 % | Moins d'une heure | Le processus fonctionne quand il n'y a pas de relais |
| Transféré au N2, sans retour vers le client | 23 % | Environ 47 h | Deux files d'attente, une collecte refaite |
| Transféré au N2, avec demande de complément au client | 23 % | Environ 84 h | Quatre relais, deux attentes du client |

Trois parcours décrivent l'essentiel du volume. Les incidents transférés mettent 66 h en moyenne. La longue traîne tient aux interventions sur site et aux incidents collectifs, non isolés dans les données.

## 4. Attentes et goulots

| Transition | Part des cas concernés | Attente moyenne sur l'ensemble des cas | Attente par cas concerné | Cause établie ou supposée |
| --- | --- | --- | --- | --- |
| N1 vers N2, premier transfert | 46 % | 6,9 h | 15 h | File unique du N2, sans priorité selon le motif |
| N2 vers N1, demande de complément | 23 % | 1,5 h | 6,5 h | Retour en file du N1 |
| Attente de la réponse du client | 23 % | 3,8 h | 16,5 h | Le conseiller rappelle sans savoir ce que cherche l'expert |
| N1 vers N2, retour du complément | 23 % | 3,1 h | 13,5 h | Le ticket repart au rang d'un nouveau ticket |
| N2 vers N1, avant clôture | 46 % | 1,2 h | 2,6 h | Changement de statut sans alerte |
| Attente de la confirmation du client | 46 %, les cas transférés pour l'essentiel | 1,8 h | Environ 3,9 h | Le client n'a reçu aucune nouvelle depuis le transfert |

Les files entre N1 et N2 totalisent 12,7 h, soit 41 % du délai. L'attente du client en représente 5,6 h, soit 18 %.

## 5. Boucles de reprise et écarts de conformité

| Constat | Mesure | Source | Lecture |
| --- | --- | --- | --- |
| Boucle de complément auprès du client | 23 % des incidents ; 8,5 h sur les 31 h | Traces | L'information manquait dès le signalement |
| Réouverture après clôture | 14 % des tickets clos | Traces | Rétablissement non vérifié, ou cause de fond non traitée |
| Vérifications du N1 refaites au N2 | 41 des 50 tickets transférés relus | Relecture de dossiers | Le transfert par commentaire libre perd les résultats |
| Ticket revenu du client traité comme un nouveau ticket | 13,5 h par ticket concerné | Traces | La file ignore l'ancienneté |
| Incident collectif non reconnu par le ticketing | Non mesuré | Observation | La supervision le voit, le conseiller non |

## 6. Tri de la valeur

| N° | Étape ou attente | Durée | Catégorie | Type de gaspillage | Justification |
| --- | --- | --- | --- | --- | --- |
| 1 | Ouverture du ticket | 0,1 h | Nécessaire sans valeur ajoutée | — | Il faut un dossier, le client n'y gagne rien |
| 2 | Qualification | 0,2 h | Nécessaire sans valeur ajoutée | — | Sert à orienter le cas |
| 3 | Collecte et premier diagnostic | 0,6 h | Nécessaire sans valeur ajoutée | — | Imposée par la dispersion de l'information dans 6 outils |
| 4 | Résolution au premier contact, ou rédaction du transfert | 0,2 h | Valeur ajoutée | — | Comptée entière : les deux parts ne sont pas isolées |
| 5 | Reprise et nouvelle collecte au N2 | 2,4 h | Gaspillage | Reprise | Vérifications déjà faites au N1 |
| 6 | Diagnostic approfondi | 3,9 h | Valeur ajoutée | — | Fait avancer le rétablissement |
| 7 | Complément auprès du client | 0,1 h | Gaspillage | Reprise | Information non réunie au départ |
| 8 | Remédiation | 4,7 h | Valeur ajoutée | — | Le résultat attendu par le client |
| 9 | Vérification, information du client, clôture | 0,5 h | Valeur ajoutée | — | Le client sait que le service est rétabli |
| — | Files entre N1 et N2 | 12,7 h | Gaspillage | Attente | Aucun travail pendant ce temps |
| — | Attente du client | 5,6 h | Gaspillage | Attente | Réductible par une information complète et proactive |
| **Total** | | **31,0 h** | | | |

**Efficience de flux** : 9,3 h de valeur ajoutée sur 31 h, soit 30 % au plus. La part nécessaire sans valeur ajoutée pèse 0,9 h, le gaspillage 20,8 h.

## 7. Verdicts par segment

| Segment | Fait mesuré | Verdict | Valeur en jeu | Suite |
| --- | --- | --- | --- | --- |
| Files entre N1 et N2 | 12,7 h, 41 % du délai | Réingénierer | Premier poste de délai | Processus cible en voies, phase Réinventer |
| Nouvelle collecte au N2 | 2,4 h ; 41 tickets sur 50 | Supprimer | Temps d'expert libéré | Dossier complet transmis d'emblée |
| Rédaction du transfert | N'existe que par les niveaux | Supprimer | Faible en délai, forte en qualité | Disparaît avec les niveaux |
| Complément auprès du client | 23 % des cas, 8,5 h | Réingénierer | Plus du quart du délai | Informations réunies dès le signalement |
| Qualification | 9 % d'erreurs, texte libre | Agentifier | Moins de tickets mal orientés | Cas d'usage « qualification et routage » |
| Choix du circuit de traitement | Critères écrits | Automatiser | Délai d'orientation nul | Règles d'entrée, phase Réinventer |
| Collecte et diagnostic, hors reprise | 4,5 h dans 6 outils | Agentifier | Cœur du délai utile | Cas d'usage « diagnostic technique » |
| Remédiation des motifs récurrents | 12 motifs, 58 % des incidents | Agentifier, sous catalogue d'actions | Résolution sans attente | Cas d'usage « résolution autonome » |
| Vérification du rétablissement | Un contrôle, un résultat attendu | Automatiser | Réouvertures évitées | Règle de clôture |
| Geste commercial | Engage l'entreprise | Garder à l'humain | — | Décision du conseiller |
| Chatbot d'accueil | L'ouverture pèse 0,1 h | Écarté | Aucune | Réponse à la demande initiale, argumentée au COPIL |

**Valeur acquise sans IA** : la disparition des files entre niveaux et de la boucle de complément vise les deux premiers postes de délai. Elle dépend du processus cible, pas d'un agent.
**Valeur attendue des automatisations et des agents** : chiffrée dans le [business case](/templates/business-case) présenté le 12 mars.

## 8. Ce que le diagnostic transmet au build

| Élément | Contenu |
| --- | --- |
| Segmentation des cas | 12 motifs récurrents à la résolution documentée : 58 % des incidents. Le reste se partage entre motifs rares et cas complexes. Base des voies du processus cible |
| Tirage des cas d'évaluation | Trois strates proposées : les 12 motifs récurrents, la longue traîne, les cas difficiles désignés par les experts. Incidents collectifs et récidives à sur-représenter. Tous tirés des 12 mois analysés |
| Référence | Délai moyen 31 h, résolution au premier contact 54 %, réouverture 14 %, erreur de qualification 9 %, coût par ticket 41 € |
| Applications et interfaces | 6 applications, 4 avec API. Trois interfaces manquent : lancer un test de ligne par programme, rechercher dans une base de connaissances fiable, exécuter une action à distance dans un cadre contrôlé |
| Ce qu'on ne construit pas | Le chatbot d'accueil ; tout outil d'aide à la rédaction du transfert ; une file de priorité pour le N2 |

## 9. Limites et suites

- Les horodatages donnent les attentes. La part de travail réel dans chaque étape repose sur trois jours de chronométrage sur un seul plateau.
- Le constat des vérifications refaites vient de 50 tickets du plateau de Nantes. À confirmer sur un second plateau avant la conception.
- Les incidents collectifs et les interventions sur site ne sont pas isolés dans les données : leur poids dans la longue traîne reste inconnu.
- Aucun résultat n'est produit par conseiller ni par expert. Le cadre de l'analyse a été validé par Élise Martin.
- Le système cible devra émettre un événement par changement d'état, avec la voie suivie, pour que ce diagnostic se rejoue en production.
