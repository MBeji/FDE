---
id: registre-raid
titre: "Registre RAID : risques, hypothèses, points ouverts, décisions"
resume: "Le registre unique de ce qui peut faire dérailler la mission et de ce qui a été tranché : un tableau par type, chaque ligne avec un propriétaire, une échéance et un statut, et les règles de tenue qui le gardent vivant."
phase: transverse
type: grille
format: tableau
effort: "1 h à l'ouverture, puis 15 min par semaine"
tags: [pilotage, risques, decisions, gouvernance]
frameworks: [probleme-hypotheses, gouvernance-ia]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le registre RAID réunit quatre choses que les missions dispersent dans des comptes rendus : les risques (ce qui pourrait arriver), les hypothèses (ce que l'on tient pour vrai sans preuve), les points ouverts (ce qui est arrivé et n'est pas réglé) et les décisions (ce qui a été tranché, par qui, pourquoi). Il évite de rediscuter une décision prise et de découvrir un risque connu.

## Quand l'utiliser

Dès la phase [Cadrer](/methode/cadrer), à partir des risques de la [charte](/templates/charte-de-mission), et jusqu'au transfert. Il est relu chaque semaine pour le [point hebdomadaire](/templates/point-hebdo) ; ses trois premiers risques remontent au [COPIL](/templates/support-copil). Tout incident d'un agent y entre.

## Comment le remplir

1. Écrire un risque en trois temps : cause, événement, effet. « Retard » n'est pas un risque.
2. Classer correctement : un risque survenu devient un point ouvert ; une hypothèse invalidée devient un risque ou une décision à prendre.
3. Donner à chaque ligne un propriétaire nommé, une échéance datée et un statut.
4. Écrire chaque décision avec sa raison : c'est la raison que l'on cherchera dans six mois.
5. Clore, ne jamais supprimer.

## Critères de qualité

- [ ] Chaque ligne a un propriétaire nommé, une échéance et un statut à jour.
- [ ] Chaque risque a une parade engagée, pas une intention.
- [ ] Chaque hypothèse dit ce qui en dépend et comment la valider.
- [ ] Chaque décision porte sa date, son décideur et sa raison.
- [ ] Aucune échéance dépassée sans commentaire.
- [ ] Le registre a été relu dans les sept derniers jours.

<!-- section: template -->
# Registre RAID — {{client}} — {{mission}}

| | |
| --- | --- |
| **Sponsor** | {{sponsor}} |
| **Tenu par** | {{auteur}} |
| **Mis à jour le** | {{date}} |
| **Revue** | _[Jour et instance de la revue hebdomadaire]_ |

## Règles de tenue

1. **Quatre types, quatre tableaux.** Risque : événement incertain. Hypothèse : tenue pour vraie sans preuve. Point ouvert : fait avéré, non réglé. Décision : arbitrage pris par une personne nommée.
2. **Un propriétaire, une échéance, un statut** par ligne. Le propriétaire est une personne, pas une équipe.
3. **Revue hebdomadaire**, lignes en retard d'abord. Dix minutes suffisent si le registre est tenu.
4. **Requalifier** : un risque survenu devient un point ouvert ; une hypothèse invalidée devient un risque ou appelle une décision.
5. **Remonter** : les trois premiers risques vont au COPIL ; un point ouvert en retard de plus d'une semaine va au point sponsor.
6. **Clore, ne pas supprimer** : date de clôture et raison restent lisibles.

| Type | Statuts |
| --- | --- |
| Risque | Ouvert / Sous contrôle / Survenu / Clos |
| Hypothèse | À valider / Validée / Invalidée |
| Point ouvert | Ouvert / En cours / Clos |
| Décision | Prise / Appliquée / Révisée |

## 1. Risques

| Réf. | Risque : cause, événement, effet | Probabilité | Impact | Parade engagée | Propriétaire | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | | _[Faible / Moyenne / Forte]_ | _[Faible / Moyen / Fort]_ | | | | |

## 2. Hypothèses

| Réf. | Hypothèse | Ce qui en dépend | Comment la valider | Propriétaire | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| H-01 | _[« Nous supposons que… »]_ | _[Chiffre, décision ou jalon]_ | _[Test, mesure, date]_ | | | |

## 3. Points ouverts

| Réf. | Point ouvert | Effet s'il n'est pas réglé | Action | Propriétaire | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| P-01 | | | | | | |

## 4. Décisions

| Réf. | Date | Décision | Prise par, dans quelle instance | Raison | Ce qu'elle entraîne | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| D-01 | | | | | | |

<!-- section: exemple -->
# Registre RAID — Voxalis — Réinvention de l'Assistance & SAV Entreprises

| | |
| --- | --- |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Tenu par** | Yasmine, lead FDE, avec le product owner |
| **Mis à jour le** | Vendredi 26 juin 2026 (S24, troisième semaine du pilote) |
| **Revue** | Chaque mardi, en point hebdomadaire avec Sophie Lambert |

Extrait : les lignes actives ou structurantes à cette date. Le registre complet compte 12 risques, 7 hypothèses, 19 points ouverts dont 15 clos, et 11 décisions.

## Règles de tenue

Les six règles du modèle s'appliquent. Deux précisions propres à la mission : tout incident d'un agent entre au registre le jour même, puis devient un cas d'évaluation ; toute demande de rouvrir un cas d'usage écarté renvoie à la décision D-02.

## 1. Risques

| Réf. | Risque : cause, événement, effet | Probabilité | Impact | Parade engagée | Propriétaire | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | Les départs sont remplacés par habitude et la sous-traitance de débordement est maintenue : les gains de capacité ne sont pas captés, et le business case perd jusqu'à 2,8 M€ sur 3 ans | Moyenne | Fort | Trajectoire d'effectifs inscrite au modèle opérationnel cible ; revue de valeur trimestrielle avec la finance et la DRH | Claire Besson | Jalon G5, 30 juillet, puis chaque trimestre | Sous contrôle |
| R-02 | Une instruction glissée dans la description d'un ticket ou dans la réponse d'un client conduit un agent à une action inappropriée sur le service d'un client | Faible | Fort | Texte du client traité comme une donnée ; 120 cas adverses rejoués chaque nuit, aucune action inappropriée ; l'agent qui lit le texte du client n'a aucun droit d'écriture sur le réseau | Marc Dubois | Revue sécurité toutes les deux semaines | Sous contrôle |
| R-03 | Les deux experts N2 détachés cumulent la revue quotidienne des écarts, l'échantillon hebdomadaire et l'annotation : les revues prennent du retard ou perdent en qualité, et les preuves d'élargissement manquent | Forte | Moyen | Troisième expert en renfort deux jours par semaine jusqu'à S27 | Sophie Lambert | 30 juin | Ouvert |
| R-04 | Le poste de supervision ne s'installe pas dans le travail quotidien : moins de deux tiers des conseillers l'utilisent chaque jour en fin de pilote, et le critère d'arrêt n° 3 est atteint. Mesure en S24 : 11 sur 18 | Moyenne | Fort | Rencontre individuelle des sept non-utilisateurs ; historique des échanges ajouté au poste (P-02) ; deux heures libérées par conseiller ; point quotidien sur le plateau | Nadia Cherif | Revue le 3 juillet | Ouvert |

## 2. Hypothèses

| Réf. | Hypothèse | Ce qui en dépend | Comment la valider | Propriétaire | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| H-01 | Un délai de résolution divisé par deux ramène le churn PME de 11,5 % à 10,0 % | 1,6 M€ de marge par an, soit 30 % de la valeur du business case | Suivi par cohorte des clients ayant subi un incident ; indicateurs avancés en attendant : satisfaction, réouvertures, NPS | Julien Faure | Mesure à 12 mois après généralisation | À valider |
| H-02 | Le mix de motifs du segment PME Ouest est comparable à celui des autres régions | La transposition des résultats de Nantes, et la part de 35 % de la voie autonome | Comparaison du mix de motifs par région sur les 12 mois de tickets | Thomas Nguyen | 10 juillet, avant le bilan du pilote | À valider |
| H-03 | Le coût d'inférence reste sous 0,50 € par ticket quand la voie autonome est ouverte | Les 0,55 M€ par an d'inférence et de plateforme du business case | Mesure hebdomadaire par ticket et par agent. S24 : 0,41 €, voie autonome non ouverte | Thomas Nguyen | Jalon G5, 30 juillet | À valider, tendance favorable |

## 3. Points ouverts

| Réf. | Point ouvert | Effet s'il n'est pas réglé | Action | Propriétaire | Échéance | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| P-01 | Messages de statut envoyés en double les 23 et 24 juin : 23 clients concernés. Cause : nouvel appel de `client.envoyer_message` après un délai dépassé, alors que le premier envoi avait abouti | Perte de confiance des clients et du plateau ; aucun dommage constaté | Clé d'idempotence déployée le 25 juin ; les deux cas ajoutés au jeu de test rejoué chaque nuit ; clôture après une semaine sans récidive | Léo | 3 juillet | En cours : corrigé, en observation |
| P-02 | Le poste de supervision n'affiche pas l'historique des échanges avec le client : les conseillers rouvrent le CRM | Frein principal à l'usage quotidien (R-04) | Historique ajouté au poste | Product owner | 29 juin | En cours |
| P-03 | Propositions des agents corrigées trop souvent sur la téléphonie d'entreprise : 71 % d'acceptation sans correction, contre 88 % sur l'accès internet et un seuil de 85 % | La voie autonome ne peut pas s'ouvrir le 6 juillet | Revue des corrections avec les experts N2 ; articles et instructions corrigés ; nouvelle mesure sur cinq jours | Léo | 1er juillet | Ouvert |

## 4. Décisions

| Réf. | Date | Décision | Prise par, dans quelle instance | Raison | Ce qu'elle entraîne | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| D-01 | 22 janvier 2026 | La mission ne déploie pas un chatbot. Elle répond à une question : comment diviser par deux le délai de résolution des incidents PME en réduisant le coût par ticket d'un tiers. Périmètre : segment PME, incidents techniques d'abord | Claire Besson, COPIL de lancement | Un chatbot agit sur la prise de contact ; rien n'établissait que le délai se joue là | Charte signée ; trois critères d'arrêt | Appliquée |
| D-02 | 12 mars 2026 | Cinq cas d'usage retenus sur quatorze ; détection prédictive des pannes différée ; 3,1 M€ engagés ; business case rejoué au jalon G5 avant toute généralisation | Claire Besson, COPIL n° 3 | Notation valeur × faisabilité ; business case validé par Julien Faure ; capacité de l'équipe limitée à cinq cas | Le périmètre reste centré sur les incidents techniques jusqu'à la fin de la généralisation | Appliquée |
| D-03 | 9 avril 2026 | Aucune suppression de poste. Les gains sont captés par le non-remplacement des départs et la baisse de la sous-traitance de débordement ; une partie de la capacité libérée va à l'accompagnement proactif des clients | Claire Besson et Isabelle Moreau, COPIL n° 4, après présentation aux représentants du personnel le 1er avril | Condition de l'adhésion des plateaux ; cohérent avec une captation de 60 % | Trajectoire de 310 à 265 ETP en trois ans ; suivi trimestriel | Appliquée |
| D-04 | 19 juin 2026 | Sortie du mode fantôme et ouverture de la voie assistée le 22 juin. La voie autonome restreinte s'ouvrira au plus tôt le 6 juillet, si 85 % des propositions sont acceptées sans correction et sans incident majeur | Sophie Lambert, revue hebdomadaire du pilote | Critères de sortie du mode fantôme tenus ; un palier ne se franchit pas au calendrier | Décision de palier le 3 juillet | Appliquée |
