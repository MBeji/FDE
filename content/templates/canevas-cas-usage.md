---
id: canevas-cas-usage
titre: "Fiche cas d'usage"
resume: "Une page par cas d'usage : le problème mesuré, la solution la plus simple qui suffit, la valeur contre une référence, la faisabilité et les hypothèses à lever. La matière première de la priorisation."
phase: cibler
type: canevas
format: document
effort: "1 à 2 h par cas d'usage"
tags: [cas-usage, priorisation, valeur, faisabilite]
frameworks: [matrice-valeur-faisabilite, faut-il-un-agent, decomposition-taches, arbre-de-valeur]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La fiche décrit un cas d'usage en une page, dans une forme identique d'un cas à l'autre : mêmes rubriques, mêmes échelles de notation. Elle oblige à écrire le problème avant la solution, à chiffrer la valeur contre une référence mesurée et à nommer le barreau de [l'échelle des solutions](/frameworks/faut-il-un-agent). Elle alimente directement le [portefeuille priorisé](/templates/portefeuille-priorise).

## Quand l'utiliser

En phase [Cibler](/methode/cibler), dans la semaine qui suit l'[atelier d'idéation](/templates/atelier-ideation) : une fiche par cas d'usage issu de l'atelier. Pour un cas manifestement hors périmètre, se limiter aux rubriques 1, 3 et 7.

## Comment le remplir

1. Partir du problème et de sa mesure, avec un utilisateur du terrain. Sans référence chiffrée, aller la chercher avant de continuer.
2. Décrire la solution au barreau le plus bas qui suffit. Tout barreau 4 ou 5 se justifie, et le barreau inférieur s'écarte par un argument.
3. Chiffrer la valeur : un levier, un indicateur, sa référence, sa cible.
4. Noter chaque critère de la [grille valeur × faisabilité](/frameworks/matrice-valeur-faisabilite) de la mission, avec un fait à l'appui.
5. Formuler les hypothèses de façon testable et dater le prochain pas.

## Critères de qualité

- [ ] Le problème est décrit sans nommer la solution et s'appuie sur une mesure sourcée.
- [ ] La valeur a un indicateur, une référence et une cible.
- [ ] Le barreau retenu est justifié, le barreau inférieur explicitement écarté.
- [ ] Chaque note repose sur un fait, pas sur une opinion.
- [ ] Chaque hypothèse a un test, un propriétaire et une échéance.
- [ ] La fiche tient en une page et nomme un propriétaire métier.

<!-- section: template -->
# Fiche cas d'usage — _[Nom du cas d'usage : un résultat, pas une technologie]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Domaine** | {{domaine}} |
| **Version** | _[0.1]_ du {{date}} |
| **Propriétaire métier** | _[Nom, fonction : la personne qui portera le résultat]_ |
| **Rédacteur** | {{auteur}} |
| **Statut** | _[Idée / Qualifié / Retenu / Différé / Écarté]_ |

## 1. Problème

- **Constat** : _[Ce qui ne fonctionne pas aujourd'hui, vu par celui qui le subit. Ne pas mentionner la solution.]_
- **Mesure** : _[Chiffre, unité, période, source. Exemple : « 7,1 h par ticket, analyse de 12 mois de tickets ».]_
- **Cause principale** : _[La cause sur laquelle la solution agit]_
- **Si on ne fait rien** : _[Conséquence à 12 mois]_

## 2. Utilisateurs et bénéficiaires

| Qui | Combien | Ce qui change pour eux |
| --- | --- | --- |
| _[Utilisateur direct]_ | | |
| _[Bénéficiaire final]_ | | |

## 3. Solution envisagée

- **En une phrase** : _[Qui ou quoi fait quoi, pour produire quel résultat]_
- **Barreau de l'échelle des solutions** : _[1 règle / 2 appel de modèle unique / 3 workflow / 4 agent / 5 système multi-agents]_ — _[Justification en une phrase]_
- **Barreau inférieur écarté parce que** : _[Argument factuel, ou « à vérifier par un test » avec le test]_
- **Niveau d'autonomie au démarrage** : _[L1 à L4, et ce que l'humain valide]_
- **Ce que la solution ne fait pas** : _[Exclusions explicites]_

## 4. Valeur

| Levier | Indicateur | Référence (source) | Cible |
| --- | --- | --- | --- |
| _[Coût / Délai / Qualité / Revenu / Risque / Expérience]_ | | | |

**Lecture de la valeur** : _[Valeur propre au cas, ou contribution à un objectif du domaine. Ne pas additionner des gains déjà comptés dans un autre cas.]_

## 5. Données et intégrations

| Besoin | Source ou application | Disponibilité | Point d'attention |
| --- | --- | --- | --- |
| | | _[API / Export / Saisie manuelle / Inexistant]_ | _[Qualité, droits, données personnelles]_ |

## 6. Risques

| Risque | Gravité | Parade envisagée |
| --- | --- | --- |
| | _[Faible / Moyenne / Forte]_ | |

## 7. Notation

| Critère | Poids | Note (1 à 5) | Fait à l'appui |
| --- | --- | --- | --- |
| _[Critère de valeur 1]_ | _[%]_ | | |
| _[Critère de valeur 2]_ | | | |
| **Valeur** | 100 % | **_[Note pondérée]_** | |
| _[Critère de faisabilité 1]_ | _[%]_ | | |
| _[Critère de faisabilité 2]_ | | | |
| **Faisabilité** | 100 % | **_[Note pondérée]_** | |

**Position dans la matrice** : _[Gain rapide / Cœur ou pari structurant / À incuber / À écarter]_

## 8. Hypothèses à valider

| Hypothèse | Test qui la valide ou l'invalide | Propriétaire | Échéance |
| --- | --- | --- | --- |
| _[« Nous supposons que… »]_ | | | |

## 9. Prochain pas

- **Décision proposée** : _[Retenir / Différer jusqu'à… / Écarter, et pourquoi]_
- **Action suivante** : _[Une action, un propriétaire, une date]_

<!-- section: exemple -->
# Fiche cas d'usage — Diagnostic technique automatisé

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Version** | 1.0 du 3 mars 2026 |
| **Propriétaire métier** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Rédacteur** | Hugo, FDE, avec les deux experts N2 détachés |
| **Statut** | Qualifié, proposé au COPIL du 12 mars 2026 |

## 1. Problème

- **Constat** : pour comprendre un incident, le conseiller N1 consulte jusqu'à six applications, dans un ordre qui dépend de ce qu'il y trouve. Quand il n'aboutit pas, il transmet au N2 un ticket sans diagnostic, et le ticket attend.
- **Mesure** : la collecte d'informations et le diagnostic manuel représentent 23 % du délai moyen de résolution (MTTR) de 31 h, soit 7,1 h par ticket. L'attente entre N1 et N2 en représente 41 %, soit 12,7 h. Source : analyse de 12 mois de tickets et trois jours d'observation à Nantes.
- **Cause principale** : l'information existe mais elle est dispersée, et les procédures de diagnostic sont dans une base dont 35 % des 2 300 articles sont obsolètes.
- **Si on ne fait rien** : le MTTR reste à 31 h et le churn PME à 11,5 %, quel que soit l'effort mis sur les autres étapes.

## 2. Utilisateurs et bénéficiaires

| Qui | Combien | Ce qui change pour eux |
| --- | --- | --- |
| Conseillers N1 | 190 | Reçoivent un diagnostic étayé au lieu de le reconstituer dans six applications |
| Experts N2 | 85 | Reçoivent des dossiers complets ; moins d'escalades faute de diagnostic |
| Clients PME | 38 000 | Ne répètent plus les mêmes informations ; rétablissement plus rapide |

## 3. Solution envisagée

- **En une phrase** : dès qu'un ticket est qualifié « incident technique », un agent interroge la supervision, le test de ligne, l'inventaire, les incidents connus et la base de connaissances, puis attache au ticket un diagnostic avec ses preuves et une remédiation recommandée.
- **Barreau de l'échelle des solutions** : 4, agent. L'ordre des vérifications dépend de ce que révèlent la supervision et le test de ligne ; la description du client est en texte libre.
- **Barreau inférieur écarté parce que** : un workflow à étapes fixes couvrirait les motifs simples mais demanderait plus de dix branches pour les 12 motifs récurrents. À vérifier en conception : comparer un workflow et un agent sur les mêmes cas annotés avant d'arrêter l'architecture.
- **Niveau d'autonomie au démarrage** : mode fantôme, puis L3 en lecture seule. L'agent produit le diagnostic seul ; il n'exécute aucune remédiation.
- **Ce que la solution ne fait pas** : aucune action sur le réseau, aucun contact avec le client, aucun diagnostic pour les grands comptes ni pour les incidents de sécurité.

## 4. Valeur

| Levier | Indicateur | Référence (source) | Cible |
| --- | --- | --- | --- |
| Délai | Temps de collecte et de diagnostic par ticket | 7,1 h (analyse des tickets, 12 mois) | Moins de 5 min sur les 12 motifs récurrents |
| Délai | Attente entre N1 et N2 | 12,7 h (même source) | Contribue à la cible de MTTR du domaine : 12 h |
| Qualité | Justesse du diagnostic | Non mesurée aujourd'hui | Au moins 90 % de concordance avec l'expert N2 |
| Coût | Coût par ticket | 41 € (contrôle de gestion) | Contribue à la cible du domaine : 26 € |

**Lecture de la valeur** : le cas n'a pas de valeur isolée. Il conditionne la résolution autonome des motifs récurrents et supprime la première cause d'escalade. Sa valeur est comptée une seule fois, dans le business case du domaine.

## 5. Données et intégrations

| Besoin | Source ou application | Disponibilité | Point d'attention |
| --- | --- | --- | --- |
| État du service et alarmes | Supervision réseau | À confirmer par la revue données et SI | Tenue en charge aux heures de pointe |
| Test de synchronisation et de débit | Test de ligne | À confirmer | Micro-coupure possible pendant le test : règle à fixer pour les heures ouvrées du client |
| Équipements et offres du client | Inventaire du parc | À confirmer | Fraîcheur des données après une modification d'offre |
| Incidents collectifs en cours | Supervision réseau | À confirmer | Un incident collectif doit primer sur toute autre hypothèse |
| Procédures de diagnostic | Base de connaissances | Recherche à construire | 35 % d'articles obsolètes : revue des articles des 12 motifs en prérequis |
| Ticket et historique du client | CRM et ticketing | À confirmer | Identité du contact et adresse du site : masquage à valider avec Élise Martin (DPO) |

Quatre des six applications du domaine exposent une API et il n'existe aucun bus d'événements. Les accès manquants sont instruits avec l'architecte SI détaché dans la [revue données et SI](/templates/revue-donnees-si).

## 6. Risques

| Risque | Gravité | Parade envisagée |
| --- | --- | --- |
| Diagnostic faux présenté avec assurance | Forte | Chaque cause cite au moins un résultat de vérification ; niveau de confiance affiché ; revue d'un échantillon par les experts N2 |
| Test de ligne lancé pendant l'activité du client | Moyenne | Approbation humaine en heures ouvrées du client |
| Instruction malveillante dans la description du ticket | Moyenne | Texte du client traité comme une donnée ; jeu de cas adverses avant toute mise en service |
| Procédure obsolète suivie par l'agent | Moyenne | Recherche limitée aux articles validés depuis moins de 12 mois |

## 7. Notation

| Critère | Poids | Note (1 à 5) | Fait à l'appui |
| --- | --- | --- | --- |
| Délai de résolution | 30 % | 5 | Agit sur 23 % du MTTR directement, et sur une part des 41 % d'attente entre niveaux |
| Coût par ticket | 30 % | 5 | Supprime la collecte manuelle sur 62 % des tickets (incidents techniques) |
| Expérience client et rétention | 20 % | 3 | Effet indirect : le client ne voit pas le diagnostic, il voit le délai |
| Effet d'entraînement | 20 % | 5 | Prérequis de la résolution autonome et de l'assistant de l'expert N2 |
| **Valeur** | 100 % | **4,6** | |
| Données et connaissances | 30 % | 3 | Base de connaissances à assainir sur les 12 motifs |
| Intégration au SI | 30 % | 3 | Deux applications sur six sans API, pas de bus d'événements |
| Maîtrise du risque | 20 % | 5 | Lecture seule : une erreur est détectable avant toute action |
| Acceptabilité et effort de changement | 20 % | 4 | Experts N2 demandeurs ; conseillers N1 à rassurer sur leur rôle |
| **Faisabilité** | 100 % | **3,6** | |

**Position dans la matrice** : valeur forte, faisabilité moyenne. Cœur du dispositif.

## 8. Hypothèses à valider

| Hypothèse | Test qui la valide ou l'invalide | Propriétaire | Échéance |
| --- | --- | --- | --- |
| Une justesse d'au moins 90 % est atteignable sur les 12 motifs récurrents | Premier jeu de 100 cas annotés par les experts N2 sur 3 motifs, rejoué par un prototype | Inès, FDE | 27 mars 2026 |
| Les articles des 12 motifs peuvent être revus en moins de six semaines | Revue chronométrée des articles de deux motifs | Sophie Lambert | 20 mars 2026 |
| La supervision supporte les interrogations supplémentaires aux heures de pointe | Test de charge avec la DSI | Karim Haddad | 3 avril 2026 |
| Les conseillers font confiance à un diagnostic qu'ils n'ont pas construit | Dix diagnostics présentés à l'aveugle à six conseillers de Nantes | Nadia Cherif | 27 mars 2026 |

## 9. Prochain pas

- **Décision proposée** : retenir. Le cas porte la valeur du domaine et précède la résolution autonome dans la feuille de route.
- **Action suivante** : lancer l'annotation des 100 premiers cas pendant la phase Réinventer, sans attendre la conception. Inès et les deux experts N2, pour le 27 mars 2026.
