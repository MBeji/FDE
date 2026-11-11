---
id: bilan-pilote
titre: "Bilan de pilote"
resume: "Le document de décision de fin de pilote : résultats face aux objectifs fixés au plan, valeur mesurée, incidents, adoption, enseignements, puis une recommandation (généraliser, ajuster ou arrêter) et ses conditions."
phase: construire
type: livrable
format: document
effort: "2 à 3 jours, répartis sur les dernières semaines du pilote"
tags: [pilote, valeur, decision, adoption]
frameworks: [poc-pilote-production, mesure-impact, registre-de-valeur, pilotage-adoption]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le bilan confronte ce que le pilote a produit à ce que le [plan de pilote](/templates/plan-pilote) avait annoncé, et propose une décision au jalon G5 : généraliser, ajuster ou arrêter. Il est écrit pour être contesté par la finance, la sécurité et le terrain, et pour leur résister.

## Quand l'utiliser

Ouvrir le document dès la première semaine du pilote et le remplir au fil de l'eau : une version provisoire sert la décision, la version définitive la confirme. Démarche : [réussir le pilote](/guides/reussir-le-pilote).

## Comment le remplir

1. Commencer par la recommandation et les trois faits qui la fondent.
2. Reprendre chaque seuil du plan, sans en ajouter ni en retirer, avec le résultat et le verdict.
3. Montrer la trajectoire semaine par semaine, pas seulement la moyenne finale.
4. Confronter le résultat à la référence et au groupe témoin, et écrire les limites de la mesure.
5. Séparer ce qui est mesuré de ce qui est extrapolé. N'inscrire au [registre de valeur](/frameworks/registre-de-valeur) que le mesuré.
6. Décrire chaque incident : cause, correction, ce qu'il change à la conception.
7. Assortir la recommandation de conditions datées, avec un responsable.

## Critères de qualité

- [ ] La recommandation est en première page.
- [ ] Chaque objectif du plan a son résultat, y compris ceux qui sont manqués.
- [ ] Les effectifs et la fenêtre de mesure sont indiqués.
- [ ] Aucun gain financier n'est déclaré sans validation de la finance.
- [ ] Les critères d'arrêt de la charte sont vérifiés explicitement.
- [ ] Les conditions de généralisation ont un responsable et une échéance.
- [ ] Les limites du bilan sont écrites par ses auteurs.

<!-- section: template -->
# Bilan de pilote — _[Nom du système]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[1.0]_ du {{date}} |
| **Plan de pilote de référence** | _[Version et date]_ |
| **Rédacteur** | {{auteur}} |
| **Décision demandée** | _[Instance, date, jalon]_ |

## 1. Synthèse et recommandation

**Recommandation** : _[Généraliser / Ajuster / Arrêter, en une phrase.]_

**Trois faits qui la fondent** : _[Chiffrés.]_

**Ce qui n'a pas marché** : _[Objectifs manqués, incidents.]_

**Conditions** : _[Nombre et nature ; détail en section 9.]_

## 2. Rappel du dispositif

| Axe | Prévu au plan | Réalisé |
| --- | --- | --- |
| Site et population | | |
| Flux et volume | | |
| Durée | | |
| Paliers | | |

**Écarts au plan** : _[Ce qui a été fait autrement, et pourquoi.]_

## 3. Résultats face aux objectifs

| Indicateur | Référence | Seuil de succès | Résultat | Groupe témoin | Verdict |
| --- | --- | --- | --- | --- | --- |
| | | | | | _[Atteint / Partiel / Non atteint]_ |

_[Fenêtre de mesure et effectifs.]_

**Hypothèses du plan**

| N° | Hypothèse | Verdict | Preuve |
| --- | --- | --- | --- |
| | | _[Confirmée / Partiellement / Infirmée]_ | |

**Trajectoire**

| Semaine | Palier | Volume | _[Indicateur 1]_ | _[Indicateur 2]_ |
| --- | --- | --- | --- | --- |
| | | | | |

**Solidité de la mesure** : _[Référence locale, groupe témoin, événements exceptionnels, règles fixées à l'avance et appliquées.]_

**D'où vient le gain** : _[Décomposition du résultat principal par cause.]_

## 4. Valeur mesurée

| Hypothèse du business case | Constat du pilote | Lecture |
| --- | --- | --- |
| | | _[Confirmée / En bonne voie / Non mesurable en pilote]_ |

_[Ce qui est inscrit au registre de valeur, ce qui ne l'est pas, et quand la mesure aura lieu.]_

## 5. Qualité et sécurité en production

| Critère | Seuil | Résultat en production | Méthode |
| --- | --- | --- | --- |
| | | | |

## 6. Incidents

| Date | Gravité | Ce qui s'est passé | Cause | Correction | Ce que cela change |
| --- | --- | --- | --- | --- | --- |
| | _[Majeure / Mineure]_ | | | | |

_[Déclenchements de garde-fous, arrêts et replis.]_

## 7. Adoption

| Indicateur | Début | Milieu | Fin | Seuil |
| --- | --- | --- | --- | --- |
| | | | | |

_[Ce que disent les utilisateurs, dans leurs mots. Irritants non résolus.]_

## 8. Enseignements

| Enseignement | Fait à l'appui | Ce qu'on en fait |
| --- | --- | --- |
| | | |

## 9. Recommandation et conditions de généralisation

**Vérification des critères d'arrêt de la charte** : _[Un par un.]_

**Recommandation** : _[Et pourquoi pas les deux autres options.]_

| N° | Condition | Responsable | Échéance |
| --- | --- | --- | --- |
| | | | |

**Plan de généralisation** : _[Vagues, points d'arrêt entre les vagues, ce qui reste sous surveillance.]_

## 10. Limites du bilan

_[Ce que le pilote ne prouve pas, et quand cela sera mesuré.]_

<!-- section: exemple -->
# Bilan de pilote — SAV Augmenté

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Version** | 1.0 du 31 juillet 2026, définitive |
| **Plan de pilote de référence** | Version 1.0 du 28 mai 2026 |
| **Rédacteur** | Hugo et Yasmine, FDE, avec Nadia Cherif et le product owner Voxalis |
| **Décision demandée** | Généralisation, COPIL de S29 (jalon G5). La version provisoire, arrêtée en S28, a fondé la décision ; les données de S29 la confirment |

## 1. Synthèse et recommandation

**Recommandation** : généraliser en trois vagues à partir de S30, sous huit conditions.

**Trois faits qui la fondent**

1. Le délai de résolution est divisé par deux : MTTR de 14,5 h sur les trois dernières semaines, contre 31 h en référence et 30,4 h dans le groupe témoin sur la même période.
2. La qualité progresse en même temps : FCR de 54 % à 71 %, réouvertures de 14 % à 8 %, CSAT de 3,6 à 4,3.
3. Aucune action inappropriée n'a été exécutée en production, et 31 % des tickets sont résolus sans intervention humaine.

**Ce qui n'a pas marché** : deux incidents mineurs en S24, des messages envoyés en double à 52 clients ; un délai de diagnostic de 3 min 50 s au 95e centile pour un objectif de 3 minutes ; 7 motifs ouverts à l'autonomie sur les 8 visés.

**Conditions** : huit, détaillées en section 9. Trois sont à remplir avant la vague 2.

## 2. Rappel du dispositif

| Axe | Prévu au plan | Réalisé |
| --- | --- | --- |
| Site et population | Plateau de Nantes, 18 conseillers, équipe entière | Conforme |
| Flux et volume | Incidents techniques du segment PME Ouest, 9 000 à 9 500 tickets | 9 400 tickets |
| Durée | 8 semaines, S22 à S29 | Conforme |
| Paliers | Fantôme (S22 et S23), assisté (S24), autonome restreint (S25), élargissement (S26 à S29) | Conforme. Sortie du mode fantôme décidée le 19 juin |
| Motifs ouverts à la voie autonome | 8 visés | 7 |

**Écarts au plan** : aucun sur le protocole de mesure. Aucun indicateur ajouté ni redéfini après le 8 juin. Le 8e motif visé, « appels entrants non aboutis », n'a pas atteint la preuve exigée : les propositions étaient approuvées sans modification dans 88 % des cas, pour un seuil de 95 %. Il reste en voie assistée.

## 3. Résultats face aux objectifs

Fenêtre de mesure fixée au plan : S27 à S29, soit 3 510 tickets. Qualification et justesse du diagnostic : échantillon de 5 % sur les 8 semaines, soit 470 tickets revus par les experts N2.

| Indicateur | Référence | Seuil de succès | Résultat | Groupe témoin | Verdict |
| --- | --- | --- | --- | --- | --- |
| MTTR | 31 h | 16 h au plus | 14,5 h | 30,4 h | Atteint |
| FCR | 54 % | 68 % au moins | 71 % | 55 % | Atteint |
| Taux de réouverture | 14 % | 10 % au plus | 8 % | 14 % | Atteint |
| CSAT sur 5 | 3,6 | 4,0 au moins | 4,3 | 3,6 | Atteint |
| Tickets résolus sans intervention humaine | 0 % | 25 % au moins | 31 % | 0 % | Atteint |
| Erreur de qualification | 9 % (manuel) | 5 % au plus | 3,8 % | Sans objet | Atteint |
| Justesse du diagnostic | Sans objet | 90 % au moins | 91,5 % | Sans objet | Atteint |
| Actions inappropriées exécutées | Sans objet | 0 | 0 | Sans objet | Atteint |
| Coût d'inférence par ticket | Sans objet | 0,50 € au plus | 0,38 € | Sans objet | Atteint |
| Usage quotidien du poste de supervision | Sans objet | 15 sur 18 | 16 sur 18 | Sans objet | Atteint |
| Diagnostics acceptés sans correction | Sans objet | 85 % au moins | 87 % | Sans objet | Atteint |
| Délai de diagnostic au 95e centile | Sans objet | 3 minutes au plus | 3 min 50 s | Sans objet | Non atteint |
| Motifs ouverts à la voie autonome | 0 | 8 | 7 | Sans objet | Partiel |

Effectifs : 1 089 tickets résolus sans intervention sur 3 510 ; 18 erreurs de qualification et 430 diagnostics justes sur 470 ; 772 réponses à l'enquête de satisfaction, soit 22 % des tickets de la fenêtre. Le taux de réouverture porte sur les 2 330 tickets clos en S27 et S28, seuls observés 7 jours pleins ; celui de S29 sera connu le 7 août.

**Hypothèses du plan**

| N° | Hypothèse | Verdict | Preuve |
| --- | --- | --- | --- |
| H1 | Le système divise le délai par deux | Confirmée | 14,5 h contre 31 h |
| H2 | Un quart des incidents se résout sans intervention ni action inappropriée | Confirmée | 31 %, aucune action inappropriée |
| H3 | La qualité perçue s'améliore | Confirmée | FCR, réouvertures et CSAT au-delà des seuils |
| H4 | La qualité du golden set tient sur le flux réel | Confirmée | 3,8 % d'erreur de qualification ; 91,5 % de justesse, pour 91,0 % sur le golden set |
| H5 | Les conseillers adoptent le rôle de superviseur de cas | Confirmée, avec un irritant | 16 sur 18 ; file d'approbation saturée le matin |
| H6 | Le coût tient dans le business case | Confirmée | 0,38 € par ticket |

**Trajectoire**

| Semaine | Palier | Tickets | MTTR | Résolus sans intervention | Motifs ouverts |
| --- | --- | --- | --- | --- | --- |
| S22 et S23 | Fantôme | 2 350 | 30,6 h | 0 % | 0 |
| S24 | Assisté | 1 210 | 24,1 h | 0 % | 0 |
| S25 | Autonome restreint | 1 180 | 19,8 h | 9 % | 1 |
| S26 | Élargissement | 1 150 | 16,9 h | 19 % | 3 |
| S27 | Élargissement | 1 140 | 15,1 h | 29 % | 5 |
| S28 | Élargissement | 1 190 | 14,4 h | 31 % | 7 |
| S29 | Mesure | 1 180 | 14,0 h | 33 % | 7 |

Le MTTR perd 6,5 heures dès la semaine assistée, avant toute autonomie : le premier gain vient du diagnostic prêt à l'arrivée du conseiller, pas de la résolution automatique.

**Solidité de la mesure**

- Référence locale : pendant les deux semaines de mode fantôme, processus inchangé, le plateau affiche un MTTR de 30,6 h et un FCR de 55 %, proches de la référence du domaine.
- Groupe témoin : le plateau de Lille passe de 31,2 h sur 12 mois à 30,4 h sur S27 à S29. Corrigée de cette variation, la baisse attribuable au système est d'environ 15 heures.
- Événement exceptionnel : un incident collectif le 15 juillet, 86 tickets comptés à part comme prévu, pour le pilote comme pour le témoin.

**D'où vient le gain**, d'après les changements de statut horodatés :

| Composante du délai | Référence | Pilote, S27 à S29 |
| --- | --- | --- |
| Attente entre N1 et N2 | 12,7 h | 3,1 h |
| Collecte d'informations et diagnostic | 7,1 h | 0,6 h |
| Attente du client | 5,6 h | 5,9 h |
| Traitement effectif | 5,6 h | 4,9 h |
| **Total** | **31 h** | **14,5 h** |

L'hypothèse posée au cadrage est vérifiée : le délai tenait aux attentes internes et à la collecte. L'attente du client devient le premier poste, avec 41 % du délai restant. C'est le prochain gisement, et il relève de l'Agent Communication.

## 4. Valeur mesurée

| Hypothèse du business case | Constat du pilote | Lecture |
| --- | --- | --- |
| Coût par ticket de 41 € à 26 € en régime de croisière | Non mesurable sur 18 conseillers. Indicateur avancé : temps humain par ticket de 34 à 22 minutes, soit 35 % de moins | En bonne voie ; mesure à 3 mois après la généralisation |
| 35 % de tickets en voie autonome | 31 % avec 7 motifs ouverts sur 12 ; 33 % la dernière semaine | En bonne voie |
| Inférence et plateforme : 0,55 M€ par an | 0,38 € par ticket, soit environ 0,16 M€ par an sur 420 000 tickets | Confirmée |
| Churn PME de 11,5 % à 10,0 % | Non mesurable en 8 semaines. Indicateur avancé : CSAT de 3,6 à 4,3 | Mesure à 12 mois |

Coût d'inférence par composant : Orchestrateur 0,05 €, Qualification 0,03 €, Diagnostic 0,12 €, Résolution 0,07 €, Communication 0,05 €, Qualité 0,06 €.

**Au registre de valeur** : les indicateurs opérationnels ci-dessus y sont inscrits comme mesurés, avec leur méthode, validée par le contrôle de gestion. Aucun gain financier n'est inscrit au titre du pilote. Julien Faure a confirmé cette position : la valeur se constatera contre la référence signée, après la généralisation.

## 5. Qualité et sécurité en production

| Critère | Seuil | Résultat en production | Méthode |
| --- | --- | --- | --- |
| Erreur de qualification | 5 % au plus | 3,8 % (18 sur 470) | Échantillon de 5 % revu par les experts N2 |
| Justesse du diagnostic | 90 % au moins ; alerte sous 88 % | 91,5 % (430 sur 470) ; minimum hebdomadaire de 89,7 % en S23 | Même échantillon |
| Actions inappropriées | 0 | 0 sur 2 496 actions réseau, dont 1 804 sans approbation | Agent Qualité sur chaque cas clos ; 10 % des actions revues par les experts ; signalements |
| Conformité des messages | 98 % au moins | 98,7 % (592 sur 600) | 100 messages revus par semaine de S24 à S29 |
| Refus en approbation | Vigilance sous 2 % | 9 % | Poste de supervision |

**Mode fantôme** : 2 350 tickets traités sans effet. Il a révélé trois problèmes absents du golden set : un délai de diagnostic de 4 min 30 s au 95e centile en charge réelle ; un inventaire périmé dans 7 % des cas ; des tests de ligne proposés sans nécessité pendant les heures ouvrées du client. Les deux derniers ont été corrigés avant le 22 juin.

**Garde-fou déclenché** : le 15 juillet, quatre resynchronisations identiques en 20 minutes sur une même zone ; la cinquième demande a ouvert le disjoncteur. La Direction Réseau a déclaré un incident collectif 12 minutes plus tard. Les quatre actions, conformes aux règles avec l'information disponible, étaient sans effet et sans dommage : les services étaient déjà coupés. L'autonomie a repris sur la zone après 2 h 40.

## 6. Incidents

Aucun incident majeur. Deux incidents mineurs.

| Date | Gravité | Ce qui s'est passé | Cause | Correction | Ce que cela change |
| --- | --- | --- | --- | --- | --- |
| 23 juin (S24) | Mineure | 38 clients ont reçu deux fois le message de prise en charge, pendant 50 minutes | `client.envoyer_message` rejoué après un délai dépassé, alors que le premier envoi avait abouti. L'outil n'avait pas de clé d'idempotence | Le jour même : délai d'attente allongé. Insuffisant | Voir ci-dessous |
| 25 juin (S24) | Mineure | 14 clients ont reçu deux fois le message de rétablissement | Même cause, sur un autre gabarit | Le 26 juin : clé d'idempotence calculée par la passerelle à partir du ticket, de l'étape et du gabarit ; cas ajoutés au jeu de test | L'idempotence devient un champ obligatoire de toute spécification d'outil d'écriture |

Trois des 52 clients concernés ont demandé une précision ; aucune réclamation. Claire Besson a été informée le 23 juin ; le COPIL de S25 n'a eu aucune décision à prendre.

L'analyse de risques avait identifié le scénario, mais ne l'avait traité que pour `reseau.executer_action`, jugé plus dangereux. Un risque coté sur un outil vaut pour tous les outils de même nature.

## 7. Adoption

| Indicateur | S24 | S26 | S29 | Seuil |
| --- | --- | --- | --- | --- |
| Conseillers utilisant le poste de supervision chaque jour | 11 sur 18 | 14 sur 18 | 16 sur 18 | 15 sur 18 |
| Diagnostics acceptés sans correction | 83 % | 86 % | 88 % | 85 % |
| Délai médian d'approbation | 7 min | 5 min | 4 min | Sans objet |
| Demandes d'approbation réaffectées après 15 minutes | 21 % | 15 % | 12 % | Sans objet |

Le palier assisté s'est ouvert à 83 % de diagnostics acceptés sans correction ; le seuil de 85 % a été atteint en fin de S24, condition du passage au palier suivant.

**Ce que disent les conseillers.** Enquête de S29, 17 répondants sur 18 : 14 souhaitent continuer ainsi, 2 sont partagés, 1 préférait l'ancien fonctionnement. « Je ne cours plus après l'information, je décide. » « Entre 9 h et 10 h 30, la file d'approbation déborde et on valide à la chaîne. »

**Les deux conseillers qui n'utilisent pas le poste chaque jour** y traitent moins de la moitié de leurs cas. Tous deux gèrent surtout des clients à plusieurs sites, pour lesquels l'affichage du dossier est jugé confus.

**Signalements** : 214 en 8 semaines, dont 205 traités en moins de 24 heures ; 61 sont devenus des cas de test.

## 8. Enseignements

| Enseignement | Fait à l'appui | Ce qu'on en fait |
| --- | --- | --- |
| Le premier gain vient de la voie assistée | 6,5 heures de MTTR gagnées en S24, sans aucune autonomie | Chaque vague commence par le palier assisté ; la valeur n'attend pas l'autonomie |
| Le mode fantôme paie ses deux semaines | Trois problèmes trouvés avant toute action réelle | Une semaine de mode fantôme par vague, sur le flux de la région |
| La preuve par motif tient face au calendrier | 7 motifs ouverts, 1 refusé à 88 %, sans contestation | La règle devient celle du comité de gouvernance IA |
| Corriger l'outil rapporte plus que corriger le prompt | Réponse interprétée du test de ligne livrée le 26 juin : justesse sur « débit dégradé » de 83 % à 93 %, motif ouvert le 23 juillet | Revue des réponses des neuf outils avant la vague 2 |
| Tout outil d'écriture doit être idempotent | Deux incidents en S24 | Champ obligatoire de la spécification d'outil ; test en intégration continue |
| Le poste de supervision décide de l'adoption | File saturée le matin ; affichage confus pour les clients à plusieurs sites | Deux chantiers prioritaires du product owner |
| Le client est devenu le premier facteur de délai | 5,9 h d'attente sur 14,5 h | Étude d'une confirmation de rétablissement en un geste, hors du périmètre des vagues |

## 9. Recommandation et conditions de généralisation

**Vérification des critères d'arrêt de la charte (critère n° 3)**

| Constat qui imposerait l'arrêt | Résultat | Atteint ? |
| --- | --- | --- |
| MTTR du périmètre pilote supérieur à 21,7 h | 14,5 h | Non |
| Action automatisée inappropriée dont la cause n'est pas corrigée et vérifiée | Aucune action inappropriée | Non |
| Moins de deux tiers des conseillers en usage quotidien | 16 sur 18 | Non |

**Recommandation** : généraliser. Toutes les conditions fixées au plan pour cette décision sont réunies. Ajuster ne se justifie pas : les deux objectifs manqués ne touchent ni la sécurité ni la valeur, et se traitent comme des conditions. Arrêter ne se justifie pas : aucun critère d'arrêt n'est atteint.

| N° | Condition | Responsable | Échéance |
| --- | --- | --- | --- |
| 1 | Idempotence vérifiée sur les trois outils d'écriture, par un test en intégration continue | Inès | Faite le 26 juin ; contrôle avant S30 |
| 2 | Équipe AgentOps nommée et d'astreinte : 2 ETP à l'ouverture de la vague 1, le troisième avant la vague 2 | Thomas Nguyen | S30, puis S33 |
| 3 | Délai de diagnostic ramené sous 3 minutes au 95e centile : file prioritaire et capacité accrue de l'application de test de ligne | Karim Haddad, Direction Réseau | Avant la vague 2 (S33) |
| 4 | Test de charge de la passerelle et de la supervision au volume national | Karim Haddad | Avant la vague 2 (S33) |
| 5 | File d'approbation triée par urgence ; affichage revu pour les clients à plusieurs sites | Product owner | S32 |
| 6 | Formation de chaque vague avant sa bascule, managers d'abord | Isabelle Moreau, expert conduite du changement | Avant chaque vague |
| 7 | Les 7 motifs ouverts le restent ; tout nouveau motif et toute nouvelle action passent par la preuve par motif, puis par le comité de gouvernance IA | Sophie Lambert | Permanent |
| 8 | Procédure d'accès et d'effacement couvrant les traces | Élise Martin | Avant la vague 2 (S33) |

**Plan de généralisation** : Ouest de S30 à S32, Nord et Est de S33 à S35, Île-de-France et Sud de S36 à S39. Chaque vague commence par une semaine de mode fantôme, puis le palier assisté ; les motifs déjà prouvés s'ouvrent ensuite sans nouvelle preuve. Une revue de fin de vague, avec les mêmes critères d'arrêt immédiat que le pilote, conditionne la suivante. Ne pas promettre 14,5 h dès la première semaine d'une vague : le pilote a mis cinq semaines d'actions réelles à y parvenir.

## 10. Limites du bilan

- **Trois semaines de mesure, en été.** Le groupe témoin corrige la saison, pas la taille de la fenêtre. La mesure à 3 mois après la généralisation fera foi.
- **Un seul site.** Nantes avait été observé pendant le diagnostic et son équipe préparée de près. Les vagues diront ce qui se transpose.
- **Le coût par ticket n'est pas mesuré.** Le temps humain par ticket est un indicateur avancé, pas un gain.
- **Le churn n'est pas mesurable.** La satisfaction progresse ; son effet sur la fidélité se lira à 12 mois.
- **L'effet d'observation n'est pas exclu.** Une équipe suivie chaque jour travaille différemment ; le témoin ne le corrige pas.
- **Les réouvertures de S29 manquent.** Le taux de 8 % porte sur S27 et S28.
