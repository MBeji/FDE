---
id: carte-opportunites
titre: "Carte des opportunités IA"
resume: "La vue d'ensemble des opportunités d'un domaine, maillon par maillon : irritants mesurés, opportunités, barreau de solution envisagé, valeur estimée et prérequis. Elle prépare la notation détaillée et évite de noter des idées isolées."
phase: cibler
type: canevas
format: tableau
effort: "1 à 2 jours, dont un atelier de 3 h"
tags: [opportunites, ciblage, valeur, domaine]
frameworks: [approche-par-domaine, chaine-de-valeur, decomposition-taches, faut-il-un-agent, matrice-valeur-faisabilite]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Noter quinze cas d'usage un par un, c'est perdre la vue du flux. La carte pose d'abord la [chaîne de valeur](/frameworks/chaine-de-valeur) ou le parcours du domaine, place sur chaque maillon les irritants **mesurés** pendant le diagnostic, puis les opportunités qui les traitent. On voit alors où se concentre la valeur, quelles opportunités se renforcent et quels maillons restent sans réponse. C'est l'application directe de [l'approche par domaine](/frameworks/approche-par-domaine).

## Quand l'utiliser

Au début du ciblage, après le diagnostic validé et avant la [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite). La carte alimente les [canevas de cas d'usage](/templates/canevas-cas-usage) et le [portefeuille priorisé](/templates/portefeuille-priorise).

## Comment le remplir

1. Découper le parcours en 5 à 8 maillons, du déclenchement au résultat client.
2. Pour chaque maillon, reporter les irritants chiffrés du diagnostic, avec leur source. Pas de chiffre, pas d'irritant.
3. Placer les opportunités issues des entretiens et de [l'atelier d'idéation](/templates/atelier-ideation).
4. Pour chacune, choisir le barreau le plus bas qui suffit, avec [l'arbre de décision](/frameworks/faut-il-un-agent).
5. Estimer la valeur en ordre de grandeur, en nommant le mécanisme.
6. Lire la vue d'ensemble : concentrations, synergies, maillons orphelins.

## Critères de qualité

- [ ] Chaque irritant porte un chiffre et une source du diagnostic.
- [ ] Chaque opportunité est rattachée à un irritant mesuré.
- [ ] Le barreau envisagé est justifié ; les solutions sans IA figurent sur la carte.
- [ ] La valeur est exprimée par mécanisme, pas par promesse.
- [ ] La vue d'ensemble nomme les synergies et les maillons sans réponse.

<!-- section: template -->
# Carte des opportunités IA — {{client}}, {{domaine}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[0.1]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Sources** | _[Diagnostic, entretiens, analyse de données, observation terrain, atelier]_ |

## 1. Périmètre

- **Domaine et résultat attendu** : _[Le résultat client que produit le domaine, en une phrase]_
- **Inclus** : _[Segments, flux, canaux]_
- **Exclus** : _[Ce qui n'est pas cartographié, et pourquoi]_
- **Référence** : _[Indicateurs de départ du domaine : volumes, délais, qualité, coûts]_

## 2. Maillons et irritants mesurés

| Maillon | Ce qui s'y passe | Irritant mesuré | Valeur | Source |
| --- | --- | --- | --- | --- |
| M1 _[Déclenchement]_ | | _[Indicateur]_ | _[Chiffre]_ | _[Analyse, observation, entretien]_ |
| M2 | | | | |
| M3 | | | | |
| M4 | | | | |
| M5 | | | | |
| M6 _[Résultat]_ | | | | |

## 3. Carte des opportunités

**Barreaux** : 1 règle ou automatisation ; 2 appel de modèle unique ; 3 workflow ; 4 agent ; 5 système multi-agents.

| N° | Maillon | Opportunité | Irritant traité | Barreau envisagé | Valeur estimée (mécanisme et ordre de grandeur) | Prérequis | Confiance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| O1 | | _[Verbe + objet + bénéficiaire]_ | | _[1 à 5, justification]_ | _[Ex. : réduit l'attente entre niveaux, de l'ordre de x h]_ | _[Données, API, décision, accord]_ | _[Forte / Moyenne / Faible]_ |
| O2 | | | | | | | |

## 4. Vue d'ensemble

| Maillon | Poids de l'irritant | Opportunités | Valeur cumulée estimée | Lecture |
| --- | --- | --- | --- | --- |
| M1 | _[Part du délai, du coût ou des défauts]_ | _[O1, O4]_ | _[Forte / Moyenne / Faible]_ | |

- **Concentration** : _[Où se trouve l'essentiel de la valeur]_
- **Synergies** : _[Opportunités qui partagent données, outils ou flux et se renforcent]_
- **Maillons orphelins** : _[Irritants forts sans opportunité crédible]_
- **Solutions sans IA** : _[Ce qui se règle par une règle, un changement de processus ou de politique]_

## 5. Suite

| Opportunité | Décision | Motif | Prochaine étape |
| --- | --- | --- | --- |
| | _[À noter / Fusionnée avec… / Hors périmètre / Écartée]_ | | _[Canevas de cas d'usage, atelier, mesure complémentaire]_ |

<!-- section: exemple -->
# Carte des opportunités IA — Voxalis, Assistance & SAV Entreprises

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, DGA Marché Entreprises |
| **Version** | 1.1 du 13 mars 2026 (version 1.0 du 26 février, mise à jour après notation) |
| **Rédacteur** | Hugo, FDE stratégie et produit |
| **Sources** | Diagnostic validé en COPIL, 22 entretiens, 3 jours d'observation à Nantes, 12 mois de tickets, atelier d'idéation du 24 février |

## 1. Périmètre

- **Domaine et résultat attendu** : un client PME rétabli et informé.
- **Inclus** : incidents techniques du segment PME (62 % des 420 000 tickets annuels, soit environ 260 000), tous canaux.
- **Exclus de la notation** : demandes de modification (23 %) et réclamations et facturation (15 %), conservées sur la carte pour la suite ; clients grands comptes.
- **Référence** : MTTR 31 h, FCR 54 %, réouverture 14 %, 41 € par ticket, NPS +8, churn PME 11,5 %.

## 2. Maillons et irritants mesurés

| Maillon | Ce qui s'y passe | Irritant mesuré | Valeur | Source |
| --- | --- | --- | --- | --- |
| M1 Déclaration | Appel, courriel ou espace client ; création du ticket par le N1 | Attente client, souvent faute d'information demandée au premier contact | 18 % du MTTR, soit 5,6 h | Horodatages, 12 mois |
| M2 Qualification et routage | Choix du motif et de l'équipe | Erreur de qualification manuelle | 9 % des tickets | Recontrôle de 1 000 tickets par les experts N2 |
| M3 Diagnostic | Collecte dans les outils, tests, escalade N2 | Collecte et diagnostic manuel dans 6 outils | 23 % du MTTR, soit 7,1 h | Horodatages, observation |
| M3 Diagnostic | idem | Attente entre N1 et N2 | 41 % du MTTR, soit 12,7 h | Horodatages |
| M4 Résolution | Action réseau, configuration, intervention | Traitement effectif sur des motifs pourtant documentés | 18 % du MTTR ; 58 % des incidents dans 12 motifs | Pareto des motifs de clôture |
| M5 Information client | Relances, statut, clôture | Client non informé, rappels entrants | Rappels non tracés : à mesurer | Entretiens N1 |
| M6 Clôture et capitalisation | Contrôle, mise à jour de la connaissance | Réouverture ; base de connaissances obsolète | 14 % ; 35 % des 2 300 articles | Ticketing ; revue d'échantillon |

## 3. Carte des opportunités

| N° | Maillon | Opportunité | Irritant traité | Barreau envisagé | Valeur estimée (mécanisme et ordre de grandeur) | Prérequis | Confiance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| O1 | M2 | Qualifier et router automatiquement les tickets | Erreur de 9 %, mauvais routages | 3 : classification puis enrichissement CRM, piloté par le code | Supprime une partie des réaffectations ; condition des autres opportunités | API CRM, 12 mois de tickets annotés | Forte |
| O2 | M3 | Automatiser le diagnostic technique | 7,1 h de collecte et une part des 12,7 h d'attente N2 | 4 : le chemin de diagnostic varie selon les résultats des outils | Le plus gros levier sur le MTTR, plusieurs heures par incident | API supervision, test de ligne, inventaire ; accord Direction Réseau | Moyenne |
| O3 | M4 | Résoudre de bout en bout les 12 motifs récurrents | 58 % des incidents traités manuellement | 4 à 5 : combine O1, O2 et une action réseau | Supprime attente et traitement sur la voie concernée ; levier principal sur le coût par ticket | Catalogue d'actions de remédiation, droits en écriture encadrés | Moyenne |
| O4 | M5 | Informer le client à chaque étape, de façon proactive | Attente client, rappels entrants | 3 : messages déclenchés par les changements d'état | Réduit les rappels et l'attente client ; effet sur la satisfaction | Événements de statut du ticketing, modèles de messages validés | Forte |
| O5 | M3 | Assister l'expert N2 : recherche et synthèse du dossier | Temps de reprise du dossier par le N2 | 3 : recherche puis synthèse | Gain de temps N2 sur les cas experts | Accès lecture CRM et base de connaissances | Forte |
| O6 | Amont | Détecter les pannes avant l'appel du client | Incidents évitables | Hors échelle des agents : modèle prédictif sur la supervision | Potentiellement élevée, non chiffrable sans historique fiable | 2 ans d'historique de supervision, aujourd'hui incomplet | Faible |
| O7 | M1 | Voicebot de premier niveau | Attente au décroché | 4 | Faible sur le MTTR : le délai n'est pas au décroché | Plateforme vocale, refonte du serveur vocal | Faible |
| O8 | M5 | Générer automatiquement les avoirs | Délai de geste commercial | 3 | Faible ; risque financier | Règles de compensation, contrôle de gestion | Faible |
| O9 | M6 | Proposer les mises à jour de la base de connaissances depuis les cas clos | 35 % d'articles obsolètes | 3 | Indirecte : condition de qualité de O2 et O3 | Propriétaire de la base nommé | Moyenne |
| O10 | M6 | Contrôler automatiquement la qualité des cas clos | Réouverture de 14 % | 2 : un appel de modèle par cas, grille fixe | Détection précoce des clôtures fragiles | Grille de contrôle des experts N2 | Moyenne |
| O11 | M1 | Guider la déclaration dans l'espace client (questions dynamiques) | Information manquante au premier contact | 2 | Moyenne sur l'attente client | Refonte de l'espace client en cours | Moyenne |
| O12 | M1 | Résumer automatiquement les appels | Saisie des descriptions | 2 | Faible : déjà testé en POC, sans effet mesuré | Enregistrement des appels, consentement | Moyenne |
| O13 | M4 | Optimiser la planification des interventions sur site | Délais d'intervention | 1 : règles et optimisation | Faible sur le périmètre : moins de 10 % des incidents nécessitent un déplacement | Données du prestataire d'intervention | Faible |
| O14 | Hors périmètre | Trier et pré-traiter les réclamations et la facturation | Volume de 15 % des tickets | 3 | À évaluer dans une seconde phase | Accès à la facturation | Faible |

## 4. Vue d'ensemble

| Maillon | Poids de l'irritant | Opportunités | Valeur cumulée estimée | Lecture |
| --- | --- | --- | --- | --- |
| M1 Déclaration | 18 % du MTTR, partagés avec M5 | O7, O11, O12 | Faible | Le délai n'est pas au décroché : un voicebot ne traite pas le problème |
| M2 Qualification | 9 % d'erreurs | O1 | Moyenne, mais condition de tout le reste | Premier maillon à traiter |
| M3 Diagnostic | 64 % du MTTR (41 % + 23 %) | O2, O5 | Forte | Cœur de la valeur |
| M4 Résolution | 18 % du MTTR, 58 % des incidents concentrés | O3, O13 | Forte | Pari structurant, dépend de O1 et O2 |
| M5 Information | 18 % du MTTR, partagés avec M1 | O4, O8 | Moyenne | Effet surtout sur la satisfaction et les rappels |
| M6 Clôture | 14 % de réouverture, 35 % d'articles obsolètes | O9, O10 | Moyenne, indirecte | Boucle de qualité du dispositif |

- **Concentration** : M3 et M4 portent l'essentiel de la valeur. La demande initiale (un chatbot, maillon M1) visait le maillon le moins créateur de valeur.
- **Synergies** : O1, O2, O3 et O4 partagent le même flux de tickets et les mêmes outils ; ensemble, ils dessinent un système unique plutôt que quatre projets. O9 et O10 forment une boucle de qualité réunie dans un même agent.
- **Maillons orphelins** : les rappels entrants (M5) ne sont pas mesurés ; mesure lancée en S8.
- **Solutions sans IA** : rendre obligatoires trois champs à la déclaration ; fixer un délai maximal de prise en charge N2 ; nommer un propriétaire de la base de connaissances.

## 5. Suite

Décisions prises après notation détaillée, arbitrées en COPIL le 12 mars 2026.

| Opportunité | Décision | Motif | Prochaine étape |
| --- | --- | --- | --- |
| O1 | Retenue (4,2 ; 4,5) | Gain rapide | Canevas, puis conception |
| O2 | Retenue (4,6 ; 3,6) | Cœur du dispositif | Canevas, puis conception |
| O3 | Retenue (4,8 ; 3,0) | Pari structurant | Canevas ; catalogue d'actions à risque faible |
| O4 | Retenue (3,6 ; 4,2) | Gain rapide | Canevas, puis conception |
| O5 | Retenue (3,4 ; 4,4) | Gain rapide | Canevas, puis conception |
| O6 | Différée (4,4 ; 2,0) | Données insuffisantes | Plan de collecte de l'historique de supervision |
| O7 | Écartée (3,0 ; 2,4) | Ne traite pas la cause du délai | Aucune |
| O8 | Écartée (2,8 ; 2,6) | Risque financier | Aucune |
| O9, O10 | Fusionnées | Intégrées à la mission d'un agent de contrôle qualité dans le système | Reprises en conception |
| O11 | Différée | Dépend de la refonte de l'espace client | Exigences transmises au projet de refonte |
| O12 | Écartée | Valeur faible, déjà testée | Aucune |
| O13 | Hors périmètre | Volume faible, prestataire externe | Aucune |
| O14 | Hors périmètre | Hors segment incidents | Seconde phase |
