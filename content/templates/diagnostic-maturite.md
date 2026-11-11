---
id: diagnostic-maturite
titre: "Synthèse du diagnostic de maturité"
resume: "La restitution du diagnostic de maturité AI-Native : un score par dimension appuyé sur des preuves, l'écart à l'ambition, des recommandations priorisées et leurs conséquences sur la feuille de route."
phase: diagnostiquer
type: livrable
format: document
effort: "2 jours de synthèse, une fois les entretiens menés"
tags: [maturite, diagnostic, restitution]
frameworks: [maturite-ai-native, rewired-six-capacites, regle-10-20-70, pyramide-scqa]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un score de maturité ne vaut rien seul. Ce livrable le transforme en décisions : ce que le client sait déjà faire, ce qui l'empêchera d'atteindre son ambition, et ce qu'il faut traiter avant de construire. Il sert au COPIL pour valider le diagnostic, et à l'équipe pour calibrer la suite : niveau d'autonomie de départ, effort de gouvernance, prérequis à financer.

## Quand l'utiliser

En fin de phase [Diagnostiquer](/methode/diagnostiquer), pour le jalon G1. Les scores viennent de la grille de [maturité AI-Native](/frameworks/maturite-ai-native), remplie avec l'outil [Maturité](/outils/maturite) ; les preuves viennent des entretiens, de l'observation et de la [revue des données et du SI](/templates/revue-donnees-si).

## Comment le remplir

1. Noter chaque dimension de 1 à 5, par demi-point, sur des faits. Deux preuves au moins par score.
2. Écrire pour chaque dimension ce qui manque pour gagner un niveau.
3. Fixer le niveau requis par l'ambition, sur le domaine visé, et mesurer l'écart.
4. Limiter les recommandations à sept, chacune avec un responsable et une échéance.
5. Traduire le diagnostic en conséquences phase par phase.
6. Rédiger la synthèse en dernier, conclusion d'abord, selon le [principe de la pyramide](/frameworks/pyramide-scqa).

## Critères de qualité

- [ ] Chaque score s'appuie sur au moins deux preuves vérifiables, chiffrées quand c'est possible.
- [ ] La synthèse tient en une page et commence par le verdict.
- [ ] L'écart est mesuré contre un niveau requis par l'ambition, pas contre le niveau 5.
- [ ] Chaque recommandation a un responsable nommé et une échéance.
- [ ] Les forces sont aussi étayées que les faiblesses.
- [ ] Aucun directeur ne découvre son score en séance.

<!-- section: template -->
# Synthèse du diagnostic de maturité — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Périmètre évalué** | _[Entreprise, direction ou domaine]_ |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |

## 1. Synthèse exécutive

**Verdict** : _[Score moyen, niveau, et ce que cela signifie en une phrase.]_

**Trois messages**

1. _[La principale force, chiffrée.]_
2. _[Le principal frein, chiffré.]_
3. _[Ce que cela implique pour l'ambition.]_

**Décisions demandées** : _[Trois au plus, formulées comme des questions fermées.]_

## 2. Méthode et sources

| Source | Détail |
| --- | --- |
| Entretiens | _[Nombre, répartition par type d'interlocuteur]_ |
| Observation | _[Lieu, durée]_ |
| Données | _[Jeux analysés, période]_ |
| Documents | _[Liste]_ |

**Échelle** : 1 Initial, 2 Expérimentateur, 3 Praticien, 4 Industriel, 5 AI-Native. Notation par demi-point.

**Règle de notation** : _[Comment les scores ont été établis et confrontés aux intéressés.]_

## 3. Score par dimension

| Dimension | Score | Niveau | Preuves | Ce qui manque pour gagner un niveau |
| --- | --- | --- | --- | --- |
| Vision & stratégie | | | _[Deux preuves au moins]_ | |
| Cas d'usage & valeur | | | | |
| Données & connaissances | | | | |
| Technologie & plateforme | | | | |
| Talents & culture | | | | |
| Modèle opérationnel & gouvernance | | | | |
| Maturité agentique | | | | |
| **Moyenne** | | | | |

## 4. Forces

1. _[Une force, la preuve, ce qu'elle permet.]_
2.
3.

## 5. Faiblesses

1. _[Une faiblesse, la preuve, ce qu'elle empêche.]_
2.
3.

## 6. Écart à l'ambition

**Ambition** : _[L'ambition de la charte, en une phrase.]_

| Dimension | Score actuel | Niveau requis | Écart | Criticité | Pourquoi ce niveau est requis |
| --- | --- | --- | --- | --- | --- |
| | | _[Sur le domaine visé, à l'échéance de la mission]_ | | _[Faible / Moyenne / Forte]_ | |

**Lecture** : _[Où se concentre l'écart, et ce qui peut attendre.]_

## 7. Recommandations priorisées

| Priorité | Recommandation | Dimension | Effet attendu | Responsable | Échéance |
| --- | --- | --- | --- | --- | --- |
| 1 | _[Un verbe d'action, un objet, un périmètre]_ | | | | |

## 8. Implications pour la feuille de route

| Phase | Ce que le diagnostic impose |
| --- | --- |
| Cibler | |
| Réinventer | |
| Concevoir | |
| Construire | |
| Industrialiser et pérenniser | |

## Annexe : entretiens et sources

| Catégorie | Nombre | Détail |
| --- | --- | --- |
| | | |

<!-- section: exemple -->
# Synthèse du diagnostic de maturité — Voxalis

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Périmètre évalué** | Voxalis, vue depuis le Marché Entreprises et le domaine Assistance & SAV |
| **Version** | 1.0 du 19 février 2026, présentée au COPIL de diagnostic |
| **Rédacteur** | Yasmine et Hugo, FDE |

## 1. Synthèse exécutive

**Verdict** : Voxalis obtient 2,1 sur 5, niveau « Expérimentateur ». L'entreprise sait lancer des expérimentations d'IA. Elle ne sait pas encore les mesurer, les gouverner ni les mener à l'échelle.

**Trois messages**

1. **Le frein n'est pas technique.** La dimension la mieux notée est Technologie & plateforme (3,0) : quatre applications sur six exposent des API, et douze mois de tickets horodatés ont suffi à décomposer le délai de résolution.
2. **Les deux dimensions les plus basses relèvent de l'organisation.** Modèle opérationnel & gouvernance et Maturité agentique sont à 1,5. Sept POC en deux ans, un seul en production, aucun mesuré : aucun n'avait de propriétaire métier, aucune instance ne les arbitrait.
3. **L'ambition est atteignable sur un domaine, pas partout à la fois.** Diviser par deux le délai de résolution suppose d'amener l'Assistance & SAV au niveau 3 au moins en neuf mois. L'écart se concentre sur trois dimensions, et quatre prérequis sont à lever avant de construire (recommandations 2, 4, 5 et 6).

**Décisions demandées au COPIL du 19 février**

1. Validez-vous le diagnostic et la référence des indicateurs ?
2. Acceptez-vous de suspendre tout nouveau POC d'IA sur le Marché Entreprises jusqu'au jalon G2, pour concentrer les moyens sur l'Assistance & SAV ?
3. Confirmez-vous les responsables des sept recommandations ?

## 2. Méthode et sources

| Source | Détail |
| --- | --- |
| Entretiens | 22, dont 12 avec des opérationnels et leur encadrement de proximité (détail en annexe) |
| Observation | 3 jours sur le plateau de Nantes, du 3 au 5 février |
| Données | 12 mois de tickets, soit 420 000 tickets ; les 2 300 articles de la base de connaissances |
| Documents | Dossiers des 7 POC, tableaux de bord du domaine, cartographie applicative, politique de sécurité |

**Échelle** : 1 Initial, 2 Expérimentateur, 3 Praticien, 4 Industriel, 5 AI-Native. Notation par demi-point.

**Règle de notation** : chaque score repose sur au moins deux faits vérifiables. Les scores ont été présentés à chaque directeur concerné les 16 et 17 février. Deux ont été discutés (Technologie & plateforme, Talents & culture) ; aucun n'a été modifié, deux formulations de preuves l'ont été.

## 3. Score par dimension

| Dimension | Score | Niveau | Preuves | Ce qui manque pour gagner un niveau |
| --- | --- | --- | --- | --- |
| Vision & stratégie | 2,5 | Entre Expérimentateur et Praticien | Une sponsor de niveau direction générale adjointe porte le sujet et préside le COPIL. Avant la mission, aucun objectif chiffré n'était associé à l'IA et aucun domaine n'était désigné comme prioritaire. La demande initiale était formulée en solution : « un chatbot » | Une feuille de route par domaine, chiffrée et arbitrée en comité de direction |
| Cas d'usage & valeur | 2,0 | Expérimentateur | 7 POC en deux ans, un seul en production (une FAQ grand public), aucun mesuré. Aucune référence financière avant celle de la mission. Les sujets ont été choisis à partir d'une technologie disponible, pas d'un problème chiffré | Une référence signée par la finance ; des critères écrits de passage du POC à la production |
| Données & connaissances | 2,5 | Entre Expérimentateur et Praticien | Les tickets sont exploitables : statuts horodatés, 58 % des incidents sur 12 motifs à la résolution documentée. En regard, 35 % des 2 300 articles de la base de connaissances sont obsolètes, sans propriétaire ni cycle de révision ; le motif est erroné sur 9 % des tickets ; les résultats de test de ligne ne sont pas conservés | Un propriétaire et un cycle de révision pour la connaissance ; des données de diagnostic conservées |
| Technologie & plateforme | 3,0 | Praticien | 4 des 6 applications du poste de travail exposent des API. L'équipe Data & IA dispose d'un accès encadré à des modèles de langage, en production pour la FAQ grand public. En regard : aucun bus d'événements ; ni le test de ligne ni la base de connaissances n'ont d'API ; aucun outillage d'évaluation ni de traçage par cas | Un accès par API aux deux applications manquantes, un mécanisme de notification, un socle d'évaluation et d'observabilité |
| Talents & culture | 2,0 | Expérimentateur | Les compétences IA sont concentrées dans l'équipe Data & IA ; aucun profil produit côté métier. Aucun conseiller ni expert n'a été formé. Sur le plateau de Nantes, deux expérimentations arrêtées sans restitution ont laissé de la méfiance. En regard, les experts N2 sont reconnus et prêts à formaliser leur savoir | Un product owner métier, des binômes avec l'équipe Data & IA, une restitution systématique aux équipes |
| Modèle opérationnel & gouvernance | 1,5 | Entre Initial et Expérimentateur | Aucune instance n'arbitre ni ne suit les initiatives d'IA. Aucun inventaire des systèmes d'IA en service. Le RSSI et la DPO disent avoir été saisis en fin de projet sur les POC. Aucun des 7 POC n'avait de propriétaire métier | Un propriétaire métier par système, une instance de gouvernance, une revue sécurité et conformité dès la conception |
| Maturité agentique | 1,5 | Entre Initial et Expérimentateur | Aucun agent en production ni en test. Le seul système en service répond à des questions à partir de documents, sans agir dans le SI. Aucun outil du SI n'est exposé à un modèle. Aucun jeu d'évaluation. Aucune règle écrite sur l'autonomie ou la supervision humaine | Un premier agent en lecture seule, évalué sur un jeu de test, avec des règles d'autonomie écrites |
| **Moyenne** | **2,1** | **Expérimentateur** | | |

## 4. Forces

1. **Un socle technique utilisable sans chantier préalable.** Quatre applications sur six exposent des API, dont le ticketing, la supervision et l'inventaire : l'essentiel de ce qu'un diagnostic d'incident consulte est accessible.
2. **Des données de tickets fiables.** Elles ont permis de décomposer les 31 h de délai en quatre postes. Elles fourniront la matière d'un jeu d'évaluation fondé sur des cas réels.
3. **Un flux concentré et un savoir disponible.** 58 % des incidents relèvent de 12 motifs dont la résolution est documentée, et 85 experts N2 savent les traiter.
4. **Une sponsor engagée et un problème désormais chiffré.** La question n'est plus « quel outil ? » mais « comment diviser le délai par deux ? ».

## 5. Faiblesses

1. **Aucune valeur mesurée.** Sept POC, aucun résultat chiffré : l'entreprise ne sait pas dire ce que l'IA lui a rapporté.
2. **Aucune gouvernance.** Pas de propriétaire métier, pas d'instance, une sécurité et une conformité consultées en bout de chaîne. Un système qui agirait dans le SI n'aurait aujourd'hui personne pour en répondre.
3. **Une connaissance dégradée.** Un tiers de la base est obsolète. Confiée telle quelle à un système automatisé, elle produirait des erreurs à grande échelle.
4. **Un SI sans événements.** Chaque application ignore ce qui se passe dans les autres : le ticketing ne sait pas qu'un incident collectif est en cours.
5. **Une confiance entamée sur le terrain.** Les équipes ont vu passer des expérimentations sans suite et attendent des preuves.

## 6. Écart à l'ambition

**Ambition** : diviser par deux le délai de résolution des incidents PME et réduire d'un tiers le coût par ticket, ce qui suppose d'exploiter un dispositif d'IA en production sur l'Assistance & SAV à la fin de la mission (S39).

| Dimension | Score actuel | Niveau requis | Écart | Criticité | Pourquoi ce niveau est requis |
| --- | --- | --- | --- | --- | --- |
| Vision & stratégie | 2,5 | 3,0 | 0,5 | Faible | Un domaine prioritaire et un objectif chiffré suffisent ; la charte les a posés |
| Cas d'usage & valeur | 2,0 | 3,5 | 1,5 | Forte | Sans référence ni mesure, la généralisation ne sera pas décidée |
| Données & connaissances | 2,5 | 3,5 | 1,0 | Forte | Un système automatisé applique la connaissance telle qu'elle est écrite |
| Technologie & plateforme | 3,0 | 3,5 | 0,5 | Moyenne | Deux accès manquent ; il faut de quoi évaluer et tracer |
| Talents & culture | 2,0 | 3,0 | 1,0 | Forte | 190 conseillers changent de façon de travailler |
| Modèle opérationnel & gouvernance | 1,5 | 3,0 | 1,5 | Forte | Quelqu'un doit répondre d'un système qui agit, l'exploiter et l'arrêter |
| Maturité agentique | 1,5 | 3,5 | 2,0 | Forte | Évaluer, borner l'autonomie, superviser : rien de cela n'existe |

**Lecture** : l'écart cumulé est de 8 points, dont 5 sur trois dimensions : Cas d'usage & valeur, Modèle opérationnel & gouvernance, Maturité agentique. Aucune n'est technologique. Le niveau requis vaut pour le domaine Assistance & SAV ; il ne s'agit pas d'élever toute l'entreprise en neuf mois.

## 7. Recommandations priorisées

| Priorité | Recommandation | Dimension | Effet attendu | Responsable | Échéance |
| --- | --- | --- | --- | --- | --- |
| 1 | Suspendre tout nouveau POC d'IA sur le Marché Entreprises jusqu'au jalon G2 et concentrer les moyens sur l'Assistance & SAV | Vision & stratégie | Fin de la dispersion ; un domaine mené jusqu'au bout | Claire Besson | COPIL du 19 février |
| 2 | Signer la référence des indicateurs, puis écrire les critères de passage en production avant tout développement | Cas d'usage & valeur | Une valeur mesurable, opposable à la généralisation | Julien Faure, Sophie Lambert | Référence : 19 février. Critères : jalon G2 |
| 3 | Nommer un propriétaire métier et un product owner du futur dispositif ; installer une revue sécurité et conformité dès la conception | Modèle opérationnel & gouvernance | Une personne répond du système ; aucun veto tardif | Sophie Lambert, Marc Dubois, Élise Martin | S7 |
| 4 | Remettre à niveau la base de connaissances en commençant par les articles des 12 motifs récurrents ; lui donner un propriétaire et un cycle de révision | Données & connaissances | Une connaissance fiable là où se concentre le volume | Sophie Lambert, avec les experts N2 | Articles des 12 motifs : avant le prototype (S18) |
| 5 | Ouvrir l'accès au test de ligne par API et donner au ticketing un moyen de notifier ses changements d'état | Technologie & plateforme | Les deux manques du SI levés avant la construction | Karim Haddad, avec la Direction Réseau | Avant le prototype (S18) |
| 6 | Construire le jeu d'évaluation avec les experts N2 avant le premier développement ; écrire les règles d'autonomie | Maturité agentique | Chaque évolution est jugée sur des cas réels | Thomas Nguyen, Sophie Lambert | Phase Concevoir (S14 à S17) |
| 7 | Arrêter la position de la direction sur l'emploi et les métiers avant toute annonce ; associer les plateaux à la conception | Talents & culture | Des équipes qui contribuent au lieu d'attendre | Isabelle Moreau, Sophie Lambert | Avant le jalon G3 |

## 8. Implications pour la feuille de route

| Phase | Ce que le diagnostic impose |
| --- | --- |
| Cibler (S7 à S9) | Retenir des cas d'usage qui s'appuient sur les forces : données de tickets, API existantes, motifs récurrents. Noter la faisabilité à partir de la revue des données et du SI. Faire entrer dans le business case la remise à niveau de la base de connaissances, les accès manquants, la formation et l'exploitation |
| Réinventer (S10 à S13) | Décrire dans le modèle opérationnel cible qui est propriétaire, qui exploite, qui arbitre. Traiter les objectifs individuels des conseillers, qui poussent aujourd'hui au transfert rapide |
| Concevoir (S14 à S17) | Partir bas en autonomie : lecture seule et approbation humaine d'abord, élargissement sur preuves. Concevoir sans dépendre d'un bus d'événements. Aucun développement avant le jeu d'évaluation |
| Construire (S18 à S29) | Commencer par un motif traité de bout en bout. Faire tourner le dispositif sans action réelle avant de le laisser agir. Restituer aux équipes à chaque étape |
| Industrialiser et pérenniser (à partir de S30) | Prévoir dès le jalon G2 l'équipe d'exploitation, l'inventaire des systèmes et l'instance de gouvernance. Faire de la reprise par l'équipe Data & IA le critère de fin de mission |

La règle 10-20-70 se vérifie ici par l'absurde : les POC passés se sont arrêtés à l'algorithme et à la technologie. Les trois dimensions qui concentrent l'écart appellent un travail sur les personnes, les processus et la gouvernance. C'est là que l'effort de la mission doit porter.

## Annexe : entretiens et sources

| Catégorie | Nombre | Détail |
| --- | --- | --- |
| Dirigeants et directeurs | 6 | Sponsor, Relation Client, DSI, finance, ressources humaines, réseau |
| Opérationnels et encadrement de proximité | 12 | Responsable du plateau de Nantes, 5 conseillers N1, 4 experts N2, 1 formateur, 1 gestionnaire de back-office |
| SI, données, sécurité, conformité | 4 | Responsable Data & IA, RSSI, DPO, responsable applicatif du CRM |
| **Total** | **22** | Menés du 26 janvier au 13 février |
