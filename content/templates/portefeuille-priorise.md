---
id: portefeuille-priorise
titre: "Portefeuille priorisé et feuille de route"
resume: "Le livrable d'arbitrage de la phase Cibler : tous les cas d'usage notés sur une grille pondérée, ceux qu'on retient, diffère ou écarte avec la raison, puis la feuille de route par vagues confrontée aux dépendances et à la capacité."
phase: cibler
type: livrable
format: tableau
effort: "2 à 3 jours, après instruction des cas"
tags: [priorisation, portefeuille, feuille-de-route, arbitrage]
frameworks: [matrice-valeur-faisabilite, approche-par-domaine, portefeuille-horizons, faut-il-un-agent]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Ce document transforme une liste de cas d'usage en décision : ce que l'on fait, dans quel ordre, avec quels moyens, et ce que l'on ne fait pas. Il protège ensuite la mission : toute demande de rouvrir un cas écarté renvoie à une notation arbitrée, pas à une opinion.

## Quand l'utiliser

En fin de phase [Cibler](/methode/cibler), pour le jalon G2. Les entrées sont les [fiches cas d'usage](/templates/canevas-cas-usage) et le [business case](/templates/business-case) du domaine. L'outil [Priorisation](/outils/priorisation) calcule les notes et trace la matrice.

## Comment le remplir

1. Fixer la grille (critères, poids, ancres) avec le propriétaire du processus et la finance avant de noter.
2. Noter tous les cas, y compris ceux que l'on pressent hors jeu : un cas écarté sans note reviendra.
3. Placer les cas dans la [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite), puis arbitrer. La matrice propose ; les dépendances et la capacité disposent.
4. Écrire pour chaque cas différé la condition qui rouvrira le dossier.
5. Construire les vagues par périmètre et par autonomie, pas par cas isolé.

## Critères de qualité

- [ ] Chaque critère a un poids et des ancres ; les notes sont reproductibles.
- [ ] Tous les cas identifiés figurent au tableau, écartés compris.
- [ ] Chaque arbitrage tient en une raison factuelle.
- [ ] Les cas retenus se renforcent sur un même flux.
- [ ] Chaque vague a un périmètre, une preuve attendue et une date.
- [ ] La charge est confrontée à la capacité réelle, goulot nommé.

<!-- section: template -->
# Portefeuille priorisé et feuille de route — {{client}} — {{domaine}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[0.1]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Instance d'arbitrage** | _[Comité, date]_ |

## 1. Synthèse

_[Trois à cinq phrases : combien de cas identifiés, combien retenus, la logique qui les relie, ce que cela engage, ce qui est demandé au comité.]_

## 2. Grille de notation

Chaque critère est noté de 1 à 5. La note de valeur et la note de faisabilité sont des moyennes pondérées.

| Axe | Critère | Poids | Note 1 | Note 5 |
| --- | --- | --- | --- | --- |
| Valeur | _[Critère lié à l'objectif n° 1 du sponsor]_ | _[%]_ | | |
| Valeur | _[Critère lié à l'objectif n° 2]_ | | | |
| Valeur | _[Effet pour le client final]_ | | | |
| Valeur | _[Effet d'entraînement sur les autres cas]_ | | | |
| Faisabilité | _[Données et connaissances]_ | | | |
| Faisabilité | _[Intégration au SI]_ | | | |
| Faisabilité | _[Maîtrise du risque]_ | | | |
| Faisabilité | _[Acceptabilité et effort de changement]_ | | | |

**Seuils de lecture** : _[Forte à partir de… ; moyenne de… à… ; faible en dessous de…]_

| Quadrant | Définition | Traitement par défaut |
| --- | --- | --- |
| Gain rapide | Valeur moyenne à forte, faisabilité forte | Lancer tôt |
| Cœur ou pari structurant | Valeur forte, faisabilité moyenne | Lancer en sécurisant les prérequis |
| À incuber | Valeur forte, faisabilité faible | Lever l'obstacle avant d'investir |
| À écarter | Valeur faible | Ne pas lancer |

_[Valeur moyenne sans faisabilité forte : différer si un obstacle identifié peut être levé, écarter sinon.]_

## 3. Cas d'usage notés

| N° | Cas d'usage | Barreau | _[V1]_ | _[V2]_ | _[V3]_ | _[V4]_ | Valeur | _[F1]_ | _[F2]_ | _[F3]_ | _[F4]_ | Faisabilité | Quadrant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | _[1 à 5]_ | | | | | | | | | | | |

## 4. Matrice

| | Faisabilité faible | Faisabilité moyenne | Faisabilité forte |
| --- | --- | --- | --- |
| **Valeur forte** | _[N° des cas]_ | | |
| **Valeur moyenne** | | | |
| **Valeur faible** | | | |

## 5. Arbitrages

**Retenus**

| N° | Cas d'usage | Rôle dans le portefeuille | Raison |
| --- | --- | --- | --- |
| | | _[Gain rapide / Cœur / Pari structurant]_ | |

**Différés**

| N° | Cas d'usage | Raison | Condition de réexamen | Échéance |
| --- | --- | --- | --- | --- |
| | | | _[Fait observable qui rouvre le dossier]_ | |

**Écartés**

| N° | Cas d'usage | Raison |
| --- | --- | --- |
| | | |

## 6. Feuille de route par vagues

| Cas d'usage | Vague 1 — _[Nom, dates]_ | Vague 2 — _[Nom, dates]_ | Vague 3 — _[Nom, dates]_ |
| --- | --- | --- | --- |
| | _[Périmètre et niveau d'autonomie]_ | | |
| **Preuve attendue en fin de vague** | | | |

## 7. Dépendances

| Élément | Dépend de | Responsable | Échéance | Si la dépendance n'est pas levée |
| --- | --- | --- | --- | --- |
| | | | | |

## 8. Capacité

| Ressource | Capacité disponible | Charge estimée | Taux de charge | Commentaire |
| --- | --- | --- | --- | --- |
| | _[Semaines-ETP sur la période]_ | | | |

**Goulot** : _[La ressource qui limite, et la parade]_

## 9. Décisions demandées et suites

| Décision demandée | Recommandation | Sans décision |
| --- | --- | --- |
| | | |

<!-- section: exemple -->
# Portefeuille priorisé et feuille de route — Voxalis — Assistance & SAV Entreprises

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Version** | 1.0 du 10 mars 2026 |
| **Rédacteur** | Hugo, FDE |
| **Instance d'arbitrage** | COPIL du 12 mars 2026 (jalon G2) |

## 1. Synthèse

Quatorze cas d'usage ont été identifiés dans le domaine lors de l'atelier du 25 février, puis instruits et notés en S8. Nous recommandons d'en retenir cinq. Ils portent sur le même flux, du ticket entrant au client rétabli, et se renforcent : la qualification alimente le diagnostic, qui conditionne la résolution. Quatre cas sont différés avec une condition de réexamen, cinq sont écartés. Le portefeuille retenu correspond au business case validé par Julien Faure : 3,1 M€ d'investissement initial pour 5,4 M€ de valeur annuelle en régime de croisière. La capacité de l'équipe couvre ces cinq cas, pas un sixième.

## 2. Grille de notation

Grille fixée le 20 février avec Sophie Lambert et le contrôle de gestion, avant l'atelier.

| Axe | Critère | Poids | Note 1 | Note 5 |
| --- | --- | --- | --- | --- |
| Valeur | V1. Délai de résolution | 30 % | Aucun effet sur le MTTR | Agit sur plus d'un tiers du délai de 31 h |
| Valeur | V2. Coût par ticket | 30 % | Aucun effet sur les 41 € | Supprime du travail sur la majorité des 420 000 tickets |
| Valeur | V3. Expérience client et rétention | 20 % | Invisible pour le client | Change ce que vit le client pendant l'incident |
| Valeur | V4. Effet d'entraînement | 20 % | Cas isolé | Prérequis d'au moins deux autres cas |
| Faisabilité | F1. Données et connaissances | 30 % | Données absentes ou inexploitables | Données disponibles, étiquetées, à jour |
| Faisabilité | F2. Intégration au SI | 30 % | Application sans accès programmable, hors du domaine | API existante dans une application du domaine |
| Faisabilité | F3. Maîtrise du risque | 20 % | Erreur coûteuse et irréversible | Erreur détectable et réversible sans dommage |
| Faisabilité | F4. Acceptabilité et effort de changement | 20 % | Rejet probable des clients ou des équipes | Demandé par ceux qui l'utiliseront |

**Seuils de lecture** : forte à partir de 4,0 ; moyenne de 3,0 à 3,9 ; faible en dessous de 3,0.

| Quadrant | Définition | Traitement par défaut |
| --- | --- | --- |
| Gain rapide | Valeur moyenne à forte, faisabilité forte | Lancer tôt |
| Cœur ou pari structurant | Valeur forte, faisabilité moyenne | Lancer en sécurisant les prérequis |
| À incuber | Valeur forte, faisabilité faible | Lever l'obstacle avant d'investir |
| À écarter | Valeur faible | Ne pas lancer |

Valeur moyenne sans faisabilité forte : différer si un obstacle identifié peut être levé, écarter sinon.

## 3. Cas d'usage notés

| N° | Cas d'usage | Barreau | V1 | V2 | V3 | V4 | Valeur | F1 | F2 | F3 | F4 | Faisabilité | Quadrant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Qualification et routage automatiques des tickets | 2 | 4 | 4 | 4 | 5 | **4,2** | 5 | 4 | 5 | 4 | **4,5** | Gain rapide |
| 2 | Diagnostic technique automatisé | 4 | 5 | 5 | 3 | 5 | **4,6** | 3 | 3 | 5 | 4 | **3,6** | Cœur |
| 3 | Résolution autonome des 12 motifs récurrents | 4 | 5 | 5 | 5 | 4 | **4,8** | 4 | 2 | 3 | 3 | **3,0** | Pari structurant |
| 4 | Communication proactive vers le client | 3 | 3 | 3 | 5 | 4 | **3,6** | 4 | 4 | 4 | 5 | **4,2** | Gain rapide |
| 5 | Assistant de l'expert N2 (recherche et synthèse de dossier) | 2 | 4 | 4 | 2 | 3 | **3,4** | 4 | 4 | 5 | 5 | **4,4** | Gain rapide |
| 6 | Détection prédictive des pannes | Modèle prédictif | 5 | 5 | 5 | 2 | **4,4** | 1 | 1 | 3 | 4 | **2,0** | À incuber |
| 7 | Voicebot de premier niveau | 4 | 2 | 4 | 3 | 3 | **3,0** | 2 | 2 | 3 | 3 | **2,4** | Valeur moyenne, faisabilité faible |
| 8 | Génération automatique d'avoirs | 3 | 2 | 4 | 3 | 2 | **2,8** | 3 | 3 | 1 | 3 | **2,6** | À écarter |
| 9 | Traitement automatisé des demandes de modification | 3 | 3 | 5 | 4 | 3 | **3,8** | 4 | 2 | 2 | 3 | **2,8** | Valeur moyenne, faisabilité faible |
| 10 | Diagnostic en libre-service pour le client | 4 | 3 | 4 | 4 | 3 | **3,5** | 3 | 2 | 2 | 3 | **2,5** | Valeur moyenne, faisabilité faible |
| 11 | Planification des interventions sur site | Optimisation | 5 | 4 | 4 | 2 | **3,9** | 2 | 2 | 3 | 2 | **2,2** | Valeur moyenne, faisabilité faible |
| 12 | Mise à jour assistée de la base de connaissances | 3 | 3 | 3 | 2 | 5 | **3,2** | 4 | 4 | 4 | 4 | **4,0** | Gain rapide |
| 13 | Aide en temps réel pendant l'appel | 2 | 2 | 3 | 3 | 3 | **2,7** | 3 | 3 | 5 | 3 | **3,4** | À écarter |
| 14 | Analyse des motifs de contact | 2 | 1 | 2 | 4 | 3 | **2,3** | 4 | 4 | 5 | 4 | **4,2** | À écarter |

Le barreau renvoie à l'échelle des solutions : 1 règle, 2 appel de modèle unique, 3 workflow, 4 agent, 5 système multi-agents. Les cas 6 et 11 relèvent d'autres techniques. Le flux formé par les cas 1 à 5 sera instruit comme un système d'ensemble en phase Concevoir.

## 4. Matrice

| | Faisabilité faible (moins de 3,0) | Faisabilité moyenne (3,0 à 3,9) | Faisabilité forte (4,0 et plus) |
| --- | --- | --- | --- |
| **Valeur forte (4,0 et plus)** | 6 | 2, 3 | 1 |
| **Valeur moyenne (3,0 à 3,9)** | 7, 9, 10, 11 | — | 4, 5, 12 |
| **Valeur faible (moins de 3,0)** | 8 | 13 | 14 |

## 5. Arbitrages

**Retenus : cinq cas, un seul flux**

| N° | Cas d'usage | Rôle dans le portefeuille | Raison |
| --- | --- | --- | --- |
| 1 | Qualification et routage automatiques des tickets | Gain rapide | Erreur réversible, données prêtes : 12 mois de tickets classés. Alimente tous les autres cas |
| 2 | Diagnostic technique automatisé | Cœur du dispositif | Agit sur les 23 % du délai passés en collecte et sur une part des 41 % d'attente entre niveaux. Lecture seule |
| 3 | Résolution autonome des 12 motifs récurrents | Pari structurant | Plus forte valeur du portefeuille : 58 % des incidents relèvent de ces motifs. Faisabilité à construire avec la Direction Réseau |
| 4 | Communication proactive vers le client | Gain rapide | Agit sur l'attente client (18 % du délai) et sur la satisfaction. Visible tôt par les PME |
| 5 | Assistant de l'expert N2 | Gain rapide | Réutilise le diagnostic pour les cas complexes. Embarque les experts, dont dépend l'annotation |

**Différés : quatre cas**

| N° | Cas d'usage | Raison | Condition de réexamen | Échéance |
| --- | --- | --- | --- | --- |
| 6 | Détection prédictive des pannes | Données insuffisantes : historique d'alarmes court et non relié aux tickets, aucun bus d'événements | Douze mois d'alarmes historisées et reliées aux tickets. Historisation à lancer par Thomas Nguyen dès maintenant | Revue en comité à 12 mois |
| 9 | Traitement automatisé des demandes de modification | Hors du périmètre initial de la charte (incidents techniques d'abord) ; touche la chaîne de commande et la facturation | Généralisation achevée sur les incidents et valeur mesurée | Après S39 |
| 10 | Diagnostic en libre-service pour le client | Expose le diagnostic à l'extérieur avant qu'il ait fait ses preuves en interne | Justesse du diagnostic tenue en production pendant trois mois | Mesure à +3 mois |
| 12 | Mise à jour assistée de la base de connaissances | Bien placé dans la matrice, mais sixième cas pour une capacité de cinq. Suppose des cas clos annotés qui n'existent pas encore | Flux de cas clos et contrôlés disponible. La revue manuelle des articles des 12 motifs reste un prérequis du cas 2, hors de ce cas | Réexamen en phase Concevoir |

**Écartés : cinq cas**

| N° | Cas d'usage | Raison |
| --- | --- | --- |
| 7 | Voicebot de premier niveau | Agit sur la prise de contact, pas sur les 64 % du délai perdus en attente et en collecte. Pas de corpus d'appels, téléphonie à intégrer, accueil vocal mal reçu par les dirigeants de PME |
| 8 | Génération automatique d'avoirs | Risque financier : une erreur est une perte directe, difficile à rattraper. Valeur faible et hors périmètre des incidents techniques |
| 11 | Planification des interventions sur site | Hors périmètre de la charte : la réalisation des interventions relève de la Direction Réseau. Transmis à celle-ci avec la fiche |
| 13 | Aide en temps réel pendant l'appel | Accélère une étape de l'existant sans supprimer d'attente. Redondant avec les cas 1 et 2 |
| 14 | Analyse des motifs de contact | Aucun effet sur les indicateurs de la charte. Faisable, mais ce n'est pas la question posée |

La décision ouverte par la charte est ainsi tranchée : le périmètre reste centré sur les incidents techniques. L'extension aux demandes de modification est différée, celle aux réclamations et à la facturation n'est pas retenue.

## 6. Feuille de route par vagues

Les vagues décrivent ici l'élargissement du périmètre et de l'autonomie. Elles précèdent et englobent les trois vagues régionales de la généralisation. Deux phases les préparent : Réinventer (S10 à S13) et Concevoir (S14 à S17).

| Cas d'usage | Vague 1 — Prototype (S18 à S21) | Vague 2 — Pilote de Nantes (S22 à S29) | Vague 3 — Généralisation (S30 à S39) |
| --- | --- | --- | --- |
| 1. Qualification | Un motif de bout en bout | Tous les incidents du plateau | Toutes régions, contrôle par échantillonnage |
| 2. Diagnostic | Le même motif, lecture seule | Les 12 motifs récurrents | Toutes régions |
| 3. Résolution | Le même motif, chaque action approuvée | Mode fantôme, puis actions à risque faible sur un catalogue restreint, élargi sur preuves | Les 12 motifs ; toute autre action sous approbation |
| 4. Communication | Messages de statut du motif | Messages de statut de tous les cas du pilote | Toutes régions ; geste commercial toujours sous approbation |
| 5. Assistant N2 | — | Dossier préparé à chaque escalade | Toutes régions |
| **Preuve attendue en fin de vague** | Seuils d'évaluation tenus sur le motif | Critères du jalon G5 : délai, qualité, usage, aucune action inappropriée | Indicateurs stables d'une région à la suivante ; équipe Voxalis autonome |

Motif pressenti pour le prototype : « perte de synchronisation de l'accès », fréquent et entièrement documenté. À confirmer en phase Concevoir.

## 7. Dépendances

| Élément | Dépend de | Responsable | Échéance | Si la dépendance n'est pas levée |
| --- | --- | --- | --- | --- |
| Cas 2 | Articles des 12 motifs revus et validés | Sophie Lambert | S17 | Diagnostic limité aux motifs dont les articles sont à jour |
| Cas 2 | Accès programmable aux applications utiles au diagnostic, dont celles sans API | Karim Haddad | S17 | Prototype sur les seules applications déjà ouvertes |
| Cas 3 | Catalogue de remédiation classé par risque, validé par la Direction Réseau | Sophie Lambert, Karim Haddad | S16 | Résolution maintenue sous approbation systématique |
| Cas 3 | Justesse du diagnostic au seuil sur le jeu de cas de référence | Thomas Nguyen | S21 | Pas d'action autonome ; le pilote démarre sans le cas 3 |
| Cas 4 | Gabarits de messages validés par la Relation Client et par Élise Martin (DPO) | Sophie Lambert | S17 | Messages de statut limités à l'accusé de prise en charge |
| Tous | Jeu de cas de référence annoté par les experts N2 | Thomas Nguyen | S16 | Aucun passage en prototype |
| Tous | Position sur l'emploi arrêtée avec la DRH et les représentants du personnel | Isabelle Moreau | S13 | Aucune communication aux plateaux, pilote reporté |

## 8. Capacité

Période de S10 à S29, soit 20 semaines, dont 16 de conception et de construction (S14 à S29).

| Ressource | Capacité disponible | Charge estimée | Taux de charge | Commentaire |
| --- | --- | --- | --- | --- |
| Ingénierie : Léo, Inès, architecte SI et data engineer détachés (3 jours par semaine chacun) | 51 semaines-ETP sur S14 à S29 | 49 : socle commun 12, cas 1 : 5, cas 2 : 11, cas 3 : 12, cas 4 : 5, cas 5 : 4 | 96 % | Un sixième cas (6 à 8 semaines-ETP) ne passe pas |
| Experts N2 détachés (2 à mi-temps) | 20 semaines-ETP sur S10 à S29 | 19 : ateliers du processus cible 3, annotation des cas de référence 6, revue des articles 3, catalogue de remédiation 2, revues du pilote 5 | 95 % | Goulot de la mission |
| Stratégie, produit, changement : Hugo, product owner, expert conduite du changement | 50 semaines-ETP sur S10 à S29 | 42 | 84 % | Marge utilisée pour le dialogue social et la formation |

**Goulot** : les experts N2. Parade proposée : renfort ponctuel de deux experts pour l'annotation, de S12 à S15, à décider par Sophie Lambert avant le 20 mars.

## 9. Décisions demandées et suites

| Décision demandée | Recommandation | Sans décision |
| --- | --- | --- |
| Retenir les cinq cas 1 à 5 sur les quatorze identifiés et différer la détection prédictive des pannes | Oui : les cinq cas se renforcent sur le même flux ; la détection prédictive n'a pas les données (faisabilité de 2,0) | La phase Réinventer ne démarre pas en S10 |
| Maintenir le périmètre sur les incidents techniques jusqu'à la fin de la généralisation | Oui : la capacité couvre cinq cas, pas un sixième | Le périmètre glisse, les experts N2 saturent |
| Renforcer l'annotation de deux experts N2 de S12 à S15 | Oui : c'est le goulot | Jeu de cas de référence en retard, prototype décalé |
