---
id: plan-de-mission
titre: "Plan de mission"
resume: "Le calendrier de la mission en tableaux : phases, semaines, activités, livrables, jalons de décision, charge par profil, rituels, prérequis côté client et dépendances."
phase: cadrer
type: livrable
format: tableau
effort: "3 à 4 h, puis une révision à chaque jalon"
tags: [planification, jalons, charge]
frameworks: [regle-10-20-70, poc-pilote-production]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le plan de mission traduit la [charte](/templates/charte-de-mission) en calendrier : ce qui est fait chaque semaine, ce qui est livré, qui décide quoi et quand, et ce que le client doit fournir pour que les dates tiennent. Il sert à l'équipe pour s'organiser, au client pour réserver ses personnes, au COPIL pour savoir quand il sera sollicité.

## Quand l'utiliser

À rédiger pendant le [cadrage](/methode/cadrer), vers le septième jour, et à annexer à la charte. À réviser à chaque jalon : détaillé à la semaine pour la phase qui s'ouvre, indicatif au-delà. Les écarts se suivent dans le [point hebdomadaire](/templates/point-hebdo) et le [registre RAID](/templates/registre-raid).

## Comment le remplir

1. Partir des jalons de décision, pas des activités : fixer d'abord les dates de COPIL.
2. Détailler à la semaine les deux phases à venir. Ne pas feindre la précision au-delà.
3. Chiffrer la charge par profil, côté client compris. Vérifier qu'elle respecte la [règle 10-20-70](/frameworks/regle-10-20-70).
4. Dater chaque prérequis côté client, avec un responsable nommé et un statut.
5. Tracer les dépendances jusqu'au pilote et écrire la parade en cas de retard.
6. Poser le calendrier réel : jours fériés, congés, périodes de pointe du métier.

## Critères de qualité

- [ ] Chaque phase se termine par un jalon daté et une décision nommée.
- [ ] Chaque livrable a une semaine de remise.
- [ ] La charge du client est chiffrée, profil par profil.
- [ ] Chaque prérequis a un responsable, une échéance et un statut.
- [ ] Le chemin critique est écrit, avec une parade par dépendance.
- [ ] Le plan distingue ce qui est ferme de ce qui est indicatif.

<!-- section: template -->
# Plan de mission — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Prochaine révision** | _[Jalon et date]_ |

## 1. Trajectoire

| Phase | Semaines | Dates | Activités principales | Livrables | Jalon de sortie | Statut du plan |
| --- | --- | --- | --- | --- | --- | --- |
| 0. Cadrer | | | | | G0 — Mandat clair | _[Réalisé / Ferme / Indicatif]_ |
| 1. Diagnostiquer | | | | | G1 — Diagnostic partagé | |
| 2. Cibler | | | | | G2 — Paris arbitrés | |
| 3. Réinventer | | | | | G3 — Cible validée par le métier | |
| 4. Concevoir | | | | | G4 — Conception approuvée | |
| 5. Construire | | | | | G5 — Preuve de valeur | |
| 6. Industrialiser | | | | | G6 — Prêt pour l'échelle | |
| 7. Pérenniser | | | | | G7 — Client autonome | |

## 2. Plan détaillé des phases à venir

_[Une ligne par semaine, pour la phase en cours et la suivante.]_

| Semaine | Dates | Activités | Livrables et points de contrôle | Sollicitations du client |
| --- | --- | --- | --- | --- |
| S1 | | | | _[Qui, combien de temps]_ |
| S2 | | | | |

## 3. Plan indicatif des phases suivantes

| Période | Semaines | Activités | Livrables | Point de décision |
| --- | --- | --- | --- | --- |
| | | | | |

## 4. Jalons et décisions

| Jalon | Date | Instance | Décision attendue | Décideur | Critère d'arrêt associé |
| --- | --- | --- | --- | --- | --- |
| | | | _[Une question fermée]_ | | _[Numéro du critère de la charte, s'il y a lieu]_ |

## 5. Charge par profil

**Équipe FDE** (en jours)

| Profil | Rythme | _[Période 1]_ | _[Période 2]_ | _[Période 3]_ | Total |
| --- | --- | --- | --- | --- | --- |
| | _[Jours par semaine]_ | | | | |
| **Total** | | | | | |

**Équipe client détachée** (en jours)

| Profil | Rythme | _[Période 1]_ | _[Période 2]_ | _[Période 3]_ | Total |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
| **Total** | | | | | |

**Contrôle de cohérence** : _[Part de la charge consacrée au métier, au processus et à l'adoption. Ce qui n'est pas compté : personnes interrogées, participants aux ateliers, utilisateurs en formation.]_

## 6. Rituels

| Rituel | Rythme | Durée | Participants | Entrée | Sortie |
| --- | --- | --- | --- | --- | --- |
| Point d'équipe | Quotidien | | | | |
| Point hebdomadaire | Hebdomadaire | | | | |
| Point sponsor | | | | | |
| COPIL | _[Mensuel : lister les dates]_ | | | | |
| _[Revue spécialisée, démonstration]_ | | | | | |

## 7. Prérequis côté client

| N° | Prérequis | Nécessaire pour | Responsable | Échéance | Statut |
| --- | --- | --- | --- | --- | --- |
| 1 | _[Données]_ | | | | _[Levé / En cours / Ouvert / En retard]_ |
| 2 | _[Accès aux systèmes]_ | | | | |
| 3 | _[Disponibilité des personnes]_ | | | | |
| 4 | _[Décisions et validations]_ | | | | |

## 8. Dépendances et chemin critique

| Amont | Aval | Marge | Parade en cas de retard |
| --- | --- | --- | --- |
| | | | |

**Chemin critique** : _[La chaîne de dépendances sans marge, en une ligne.]_

## 9. Hypothèses de planification et règles de révision

- **Hypothèses** : _[Ce sur quoi le calendrier repose : disponibilités, délais de décision, durée incompressible de certaines étapes.]_
- **Calendrier réel** : _[Jours fériés, congés, périodes de pointe du métier, gels de mise en production.]_
- **Règles de révision** : _[Quand le plan est mis à jour, quel glissement remonte au COPIL.]_

<!-- section: exemple -->
# Plan de mission — Voxalis

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Version** | 1.0 du 23 janvier 2026, annexée à la charte |
| **Rédacteur** | Yasmine, lead FDE |
| **Prochaine révision** | Jalon G1, 19 février 2026 |

## 1. Trajectoire : 39 semaines, du 12 janvier au 9 octobre 2026

| Phase | Semaines | Dates | Activités principales | Livrables | Jalon de sortie | Statut du plan |
| --- | --- | --- | --- | --- | --- | --- |
| 0. Cadrer | S1 à S2 | 12 au 23 janvier | Reformulation du problème, hypothèse de réponse initiale, accès, rituels | Charte, cartographie des parties prenantes, plan de mission, arbre d'hypothèses | G0 — Mandat clair, 23 janvier | Réalisé |
| 1. Diagnostiquer | S3 à S6 | 26 janvier au 20 février | 22 entretiens, 3 jours d'observation à Nantes, analyse de 12 mois de tickets, revue du SI | Fiche du processus existant, décomposition du délai, diagnostic de maturité, revue des données et du SI, référence signée | G1 — Diagnostic partagé, COPIL du 19 février | Ferme, détaillé à la semaine |
| 2. Cibler | S7 à S9 | 23 février au 13 mars | Idéation, qualification et notation des cas d'usage, chiffrage | Portefeuille priorisé, business case | G2 — Paris arbitrés, COPIL du 12 mars | Ferme |
| 3. Réinventer | S10 à S13 | 16 mars au 10 avril | Reconstruction du processus, répartition humain-agent, organisation | Processus cible, matrice humain-agent, modèle opérationnel cible | G3 — Cible validée par le métier, COPIL du 9 avril | Indicatif |
| 4. Concevoir | S14 à S17 | 13 avril au 8 mai | Architecture, spécifications, jeu d'évaluation, analyse de risques | Dossier d'architecture, spécifications, plan d'évaluation, analyse de risques | G4 — Conception approuvée, COPIL du 7 mai | Indicatif |
| 5. Construire | S18 à S29 | 11 mai au 31 juillet | Prototype (S18 à S21), pilote de 8 semaines (S22 à S29) | Rapport d'évaluation, plan et bilan du pilote | G5 — Preuve de valeur, COPIL du 30 juillet | Indicatif |
| 6. Industrialiser | S30 à S39 | 3 août au 9 octobre | Généralisation en trois vagues régionales, exploitation, formation | Checklist de mise en production, runbooks, plan de conduite du changement, registre | G6 — Prêt pour l'échelle, COPIL du 8 octobre | Indicatif |
| 7. Pérenniser | À partir de S36 | À partir du 14 septembre | Transfert, mesure de la valeur, capitalisation | Tableau de bord de valeur, plan de transfert, retour d'expérience | G7 — Client autonome : transfert achevé en S39, mesures à +3 et +6 mois | Indicatif |

Engagement ferme jusqu'au jalon G2. Les phases 3 à 7 sont conditionnées à la décision d'investissement du 12 mars, puis à la décision de généralisation du 30 juillet.

## 2. Plan détaillé : cadrage et diagnostic (S1 à S6)

| Semaine | Dates | Activités | Livrables et points de contrôle | Sollicitations de Voxalis |
| --- | --- | --- | --- | --- |
| S1 | 12 au 16 janvier | Sponsor et propriétaire du processus (12). Demi-journée sur un plateau, DSI, Data & IA (13). Problème reformulé et hypothèse initiale (14). Finance, RSSI, DPO (15). DRH, premier point hebdomadaire (16) | Arbre d'hypothèses v1. Cartographie des parties prenantes v1. Registre RAID ouvert | Claire Besson : 45 min, puis 20 min. Sept directeurs et responsables : 45 min chacun |
| S2 | 19 au 23 janvier | Responsables de plateau et opérationnels (19). Équipe détachée pressentie (20). Charte relue séparément par la sponsor et la propriétaire du processus (21 et 22). Réunion de lancement (23) | Charte signée. Plan de mission. Agendas du diagnostic bloqués | Réunion de lancement : 1 h, comité élargi |
| S3 | 26 au 30 janvier | Réception et contrôle de l'extraction des tickets (26). Entretiens 1 à 8 : direction, Data & IA, RSSI, responsable du plateau de Nantes. Premières analyses | Point de contrôle du 28 janvier : les horodatages de statut permettent-ils de décomposer le délai ? Cartographie des parties prenantes v3 | 8 entretiens de 45 min. Data engineer : 2 jours |
| S4 | 2 au 6 février | Observation à Nantes (3 au 5). Entretiens 9 à 15 : conseillers, experts N2, back-office. Mesure des attentes, Pareto des motifs | Fiche du processus existant v1. Deux hypothèses tranchées | 7 entretiens. Plateau de Nantes : 3 jours d'observation. Experts N2 : 2,5 jours chacun |
| S5 | 9 au 13 février | Répartition entre collecte et traitement. Audit de la base de connaissances. Entretiens 16 à 22 : SI, DPO, Direction Réseau, derniers conseillers et experts. Cartographie applicative. Référence avec le contrôle de gestion (10 et 12). Questionnaire de maturité | Revue des données et du SI v1. Diagnostic de maturité v0. Référence prête à signer | 7 entretiens. Architecte SI : 1 jour. Contrôle de gestion : 2 séances de 2 h |
| S6 | 16 au 20 février | Pré-câblage de chaque membre du COPIL (16 et 17). Restitution au plateau de Nantes (17). COPIL (19). Préparation de l'atelier d'idéation (20) | Diagnostic validé, référence signée : jalon G1 | COPIL : 1 h. Pré-câblage : 20 min par membre |

## 3. Plan indicatif : S7 à S39

| Période | Semaines | Activités | Livrables | Point de décision |
| --- | --- | --- | --- | --- |
| Cibler | S7 à S9 | Atelier d'idéation (S7). Qualification et notation valeur × faisabilité (S7 et S8). Business case avec la direction financière (S8 et S9) | Portefeuille priorisé, business case | G2, 12 mars : décision d'investissement. Critère d'arrêt n° 1 |
| Réinventer | S10 à S13 | Reconstruction du processus à partir du résultat attendu, en ateliers avec conseillers et experts. Répartition entre humains et agents. Position sur l'emploi et les métiers avec la DRH | Processus cible, matrice humain-agent, modèle opérationnel cible | G3, 9 avril : validation par le métier |
| Concevoir | S14 à S17 | Choix du niveau de solution le plus simple qui suffit. Architecture et spécifications. Jeu d'évaluation annoté par les experts N2, avant tout développement. Analyse de risques avec le RSSI et la DPO | Dossier d'architecture, plan d'évaluation, analyse de risques | G4, 7 mai : avis formel du RSSI, approbation de la conception |
| Construire, prototype | S18 à S21 | Tranche verticale : un motif d'incident traité de bout en bout, évalué sur le jeu de test | Rapport d'évaluation | 4 juin : décision de lancer le pilote |
| Construire, pilote | S22 à S29 | Pilote de 8 semaines sur un plateau (Nantes pressenti), dont 2 semaines en mode fantôme (S22 et S23). Mesure hebdomadaire contre la référence | Bilan du pilote | G5, 30 juillet : décision de généralisation. Critère d'arrêt n° 3 |
| Industrialiser | S30 à S39 | Trois vagues régionales : Ouest (S30 à S32), Nord et Est (S33 à S35), Île-de-France et Sud (S36 à S39). Formation des conseillers. Mise en place de l'exploitation et de la gouvernance | Checklist de mise en production, runbooks, plan de conduite du changement, registre | Passage d'une vague à la suivante décidé en point hebdomadaire, sur les critères fixés au jalon G5. COPIL des 27 août et 17 septembre |
| Pérenniser | À partir de S36 | Transfert à l'équipe Voxalis. Tableau de bord de valeur. Retour d'expérience | Plan de transfert, tableau de bord de valeur | G6 et G7, 8 octobre. Mesures en janvier et en avril 2027 |

## 4. Jalons et décisions

| Jalon | Date | Instance | Décision attendue | Décideur | Critère d'arrêt associé |
| --- | --- | --- | --- | --- | --- |
| G0 | 23 janvier | Réunion de lancement | Le mandat est-il celui de la charte ? | Claire Besson | — |
| G1 | 19 février | COPIL | Le diagnostic et la référence sont-ils validés ? | Claire Besson, Julien Faure pour la référence | N° 2, vérifié en continu |
| G2 | 12 mars | COPIL | Quels cas d'usage, pour quel investissement ? | Claire Besson | N° 1 |
| G3 | 9 avril | COPIL | Le métier valide-t-il le processus cible et le modèle opérationnel ? | Sophie Lambert | — |
| G4 | 7 mai | COPIL | La conception est-elle approuvée, sécurité comprise ? | Karim Haddad, avis de Marc Dubois | — |
| Lancement du pilote | 4 juin | COPIL | Le prototype passe-t-il les seuils d'évaluation ? | Sophie Lambert | — |
| G5 | 30 juillet | COPIL | Généralise-t-on ? | Claire Besson | N° 3 |
| G6 et G7 | 8 octobre | COPIL | Le dispositif est-il généralisé et l'équipe Voxalis autonome ? | Claire Besson | — |

## 5. Charge par profil

**Équipe FDE** (en jours)

| Profil | Rythme | Stratégie, S1 à S9 | Conception, S10 à S17 | Réalisation, S18 à S39 | Total |
| --- | --- | --- | --- | --- | --- |
| Yasmine, lead | Plein temps | 45 | 40 | 110 | 195 |
| Hugo, stratégie et produit | Plein temps | 45 | 40 | 110 | 195 |
| Léo, ingénierie agents | Plein temps | 45 | 40 | 110 | 195 |
| Inès, ingénierie agents | Plein temps | 45 | 40 | 110 | 195 |
| Expert conduite du changement | Mi-temps | 22,5 | 20 | 55 | 97,5 |
| **Total** | | 202,5 | 180 | 495 | 877,5 |

**Équipe Voxalis détachée** (en jours)

| Profil | Rythme | Stratégie, S1 à S9 | Conception, S10 à S17 | Réalisation, S18 à S39 | Total |
| --- | --- | --- | --- | --- | --- |
| 2 experts N2 | 2,5 jours par semaine chacun à partir de S3 | 35 | 40 | 110 | 185 |
| Architecte SI | 1 jour par semaine à partir de S3, 2 jours en conception, 3 jours pendant la construction, 2 jours ensuite | 7 | 16 | 56 | 79 |
| Data engineer | 2 jours par semaine de S3 à S6, 1 jour de S7 à S9, puis comme l'architecte | 11 | 16 | 56 | 83 |
| Product owner | 2 jours par semaine de S7 à S9, plein temps à partir de S10 | 6 | 40 | 110 | 156 |
| Référent sécurité | Une demi-journée par semaine à partir de S3, 1 jour à partir de S10 | 3,5 | 8 | 22 | 33,5 |
| **Total** | | 62,5 | 120 | 354 | 536,5 |

Charge théorique à 5 jours par semaine, avant jours fériés et congés. Elle est recalculée en net à chaque jalon.

**Contrôle de cohérence** : la charge tournée vers le métier, le processus et l'adoption (Hugo, l'expert conduite du changement, les experts N2, le product owner et la moitié du temps de Yasmine) représente 731 jours sur 1 414, soit 52 %. C'est en deçà du repère de 70 % de la règle 10-20-70. L'écart tient à ce que ce plan ne compte pas : le temps des responsables de plateau, des conseillers en formation et de la DRH. Il sera chiffré dans le business case du jalon G2 ; à défaut, il serait pris sur la production.

## 6. Rituels

| Rituel | Rythme | Durée | Participants | Entrée | Sortie |
| --- | --- | --- | --- | --- | --- |
| Point d'équipe | Chaque jour, 9 h 15 | 15 min | Équipe FDE et équipe Voxalis détachée | Blocages du jour | Tout blocage non levé dans la journée entre au registre RAID |
| Point hebdomadaire | Chaque vendredi | 30 min | Sophie Lambert, product owner dès sa désignation, Yasmine, Hugo | Note d'avancement d'une page envoyée la veille ; arbre d'hypothèses à jour | Décisions opérationnelles, registre RAID mis à jour |
| Point sponsor | Chaque semaine | 15 min | Claire Besson, Yasmine | Ce qu'elle doit savoir, ce dont l'équipe a besoin | Arbitrages entre deux COPIL |
| COPIL | Mensuel, le jeudi : 19 février, 12 mars, 9 avril, 7 mai, 4 juin, 2 juillet, 30 juillet, 27 août, 17 septembre, 8 octobre | 1 h | Membres désignés par la charte | Support envoyé 48 h avant, décisions attendues en première page | Relevé de décisions sous 24 h |
| Revue sécurité et conformité | Mensuelle jusqu'à S13, toutes les deux semaines ensuite | 45 min | Marc Dubois, Élise Martin, référent sécurité, Inès | Données, accès et risques nouveaux | Exigences écrites, points ouverts datés |
| Démonstration | Toutes les deux semaines à partir de S18 | 30 min | Équipe mixte, conseillers et experts du plateau pilote | Ce qui fonctionne sur des cas réels, erreurs comprises | Retours du terrain triés et priorisés |

## 7. Prérequis côté Voxalis

| N° | Prérequis | Nécessaire pour | Responsable | Échéance | Statut au 23 janvier |
| --- | --- | --- | --- | --- | --- |
| 1 | Extraction de 12 mois de tickets, changements de statut horodatés compris | Décomposition du délai, S3 à S5 | Thomas Nguyen | 26 janvier | Demandée le 13 janvier, livraison confirmée |
| 2 | Comptes en lecture sur les six applications du poste de travail SAV | Entretiens au poste, revue du SI | Karim Haddad | 26 janvier | Ouverts sur le ticketing et la base de connaissances, en cours sur les quatre autres |
| 3 | Agendas des 22 entretiens | Diagnostic | Sophie Lambert | 23 janvier | Levé |
| 4 | Observation à Nantes : accord, information préalable des équipes et des représentants du personnel | Observation du 3 au 5 février | Sophie Lambert, Isabelle Moreau, Nadia Cherif | 30 janvier | Accord de principe, note d'information en relecture |
| 5 | Détachement des deux experts N2 à mi-temps, remplacés sur leur plateau | Validation des analyses dès S3 | Sophie Lambert | 26 janvier | Experts désignés, remplacement à confirmer |
| 6 | Désignation de l'architecte SI, du data engineer et du référent sécurité | Revue des données et du SI | Karim Haddad, Thomas Nguyen, Marc Dubois | 26 janvier | Architecte et data engineer désignés, référent sécurité attendu |
| 7 | Référence financière : définitions, période, valeurs | Jalon G1 | Julien Faure | 19 février | Deux séances fixées avec le contrôle de gestion |
| 8 | Désignation du product owner | Phase Cibler | Sophie Lambert | S6 | Ouvert |
| 9 | Calendrier d'information des représentants du personnel | Toute communication aux équipes au-delà de Nantes | Isabelle Moreau | Avant le jalon G1 | Ouvert |
| 10 | Environnement technique : bac à sable, accès à des modèles validés par la sécurité | Phase Concevoir | Karim Haddad, Marc Dubois | S13 | À instruire au jalon G2 |

Les prérequis techniques seront complétés par la revue des données et du SI, au jalon G1.

## 8. Dépendances et chemin critique

| Amont | Aval | Marge | Parade en cas de retard |
| --- | --- | --- | --- |
| Extraction des tickets (26 janvier) | Décomposition du délai (S4 et S5), puis jalon G1 | 1 semaine | Commencer sur un échantillon de 3 mois. Au-delà de 10 jours ouvrés de retard, critère d'arrêt n° 2 |
| Observation à Nantes (S4) | Répartition entre collecte et traitement (S5) | Aucune | Report en S5 ; le diagnostic est alors présenté avec une fourchette |
| Référence signée (G1) | Business case (G2) | 3 semaines | Pas de business case « sous réserve » : le jalon G2 est reporté |
| Position de la direction sur l'emploi | Validation de la cible par le métier (G3), puis communication aux équipes | 4 semaines après G2 | Pas de jalon G3 sans position écrite |
| Disponibilité des experts N2 (S14 à S17) | Jeu d'évaluation, puis premier développement (S18) | Aucune | Aucun développement sans jeu d'évaluation ; arbitrage de Sophie Lambert sur la charge des experts |
| Avis du RSSI (G4) | Démarrage du prototype (S18) | Quelques jours | Revue sécurité toutes les deux semaines dès S14, pour qu'aucune objection n'apparaisse au jalon |
| Analyse d'impact sur les données personnelles et information des représentants du personnel | Démarrage du pilote (S22) | À fixer au jalon G3 | Lancer les deux démarches dès la phase Réinventer |
| Bilan du pilote (31 juillet) | Première vague (3 août) | Aucune | Décision du 30 juillet préparée sur les données de S28 ; la première vague porte sur la région du plateau pilote |

**Chemin critique** : extraction des tickets, référence signée, décision d'investissement, jeu d'évaluation, pilote, première vague.

## 9. Hypothèses de planification et règles de révision

- **Hypothèses** : arbitrages rendus sous 5 jours ouvrés ; experts N2 effectivement disponibles à mi-temps ; un seul prototype avant le pilote. La durée du pilote, 8 semaines dont 2 en mode fantôme, n'est pas compressible : en cas de retard, c'est la généralisation qui glisse.
- **Calendrier réel** : six jours fériés tombent en semaine sur la période, soit le 6 avril (S13), les 1er et 8 mai (S16 et S17), le 14 mai (S18), le 25 mai (S20) et le 14 juillet (S27). La phase Concevoir en perd deux sur vingt. Le pilote se termine le 31 juillet et la première vague se déroule en août : elle porte sur la région Ouest, dont le plateau pilote fait partie, et la formation des conseillers concernés est à caler avant leurs congés. Les congés de l'équipe de mission sont étalés pour garder au moins deux FDE présents en continu.
- **Règles de révision** : le plan est mis à jour à chaque jalon, et la phase qui s'ouvre est alors détaillée à la semaine. Tout glissement d'un jalon de plus d'une semaine est porté au COPIL avec une proposition. Aucun jalon n'est déclaré franchi « sous réserve ».
