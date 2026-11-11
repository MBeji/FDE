---
id: plan-pilote
titre: "Plan de pilote"
resume: "Le protocole d'un pilote en conditions réelles : hypothèses à prouver, périmètre, paliers d'autonomie, méthode de mesure avec référence et groupe témoin, critères de décision et d'arrêt écrits avant le premier jour."
phase: construire
type: livrable
format: document
effort: "2 à 3 jours, dont une demi-journée avec le responsable du site pilote"
tags: [pilote, mesure, mode-fantome, decision]
frameworks: [poc-pilote-production, mesure-impact, niveaux-autonomie, pilotage-adoption]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le plan de pilote fait du pilote une expérience qui se termine par une décision : généraliser, ajuster ou arrêter. Il fixe à l'avance ce qu'on cherche à prouver, comment on le mesure et à partir de quel résultat on décide. Sans lui, un pilote devient une démonstration prolongée : voir [du POC à la production](/frameworks/poc-pilote-production).

## Quand l'utiliser

Pendant le prototype, pour une validation avant le premier ticket réel. Il s'appuie sur le [plan d'évaluation](/templates/plan-evaluation) et prépare le [bilan de pilote](/templates/bilan-pilote). Démarche : [réussir le pilote](/guides/reussir-le-pilote).

## Comment le remplir

1. Formuler les hypothèses à prouver, chacune avec son indicateur et son seuil.
2. Choisir un site représentatif et une équipe entière, pas des volontaires.
3. Fixer la référence, le groupe témoin et la fenêtre de mesure avec la finance.
4. Décrire les paliers, du [mode fantôme](/savoir/mode-fantome) à l'élargissement, avec la preuve exigée pour chaque passage et le retour arrière.
5. Écrire la règle de décision et les critères d'arrêt, en reprenant ceux de la charte.
6. Organiser les rituels avec le terrain et la communication.

## Critères de qualité

- [ ] Chaque hypothèse a un indicateur, une source et un seuil.
- [ ] La référence est mesurée sur un périmètre comparable et validée par la finance.
- [ ] Un groupe témoin est défini, ou son absence est assumée par écrit.
- [ ] Chaque palier a une condition d'entrée et un retour arrière testé.
- [ ] La règle de décision couvre les trois issues.
- [ ] Les critères d'arrêt immédiat ont un déclencheur et un responsable.
- [ ] Le plan est validé par le sponsor avant le démarrage.

<!-- section: template -->
# Plan de pilote — _[Nom du système]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[1.0]_ du {{date}} |
| **Responsable du pilote** | _[Propriétaire du processus]_ |
| **Responsable du site** | _[Nom, fonction]_ |
| **Rédacteur** | {{auteur}} |
| **Statut** | _[Projet / Validé le… par…]_ |

## 1. Objet et décision attendue

_[Ce que le pilote doit prouver, en deux lignes. La décision qu'il prépare, sa date et l'instance qui la prend.]_

## 2. Hypothèses à prouver

| N° | Hypothèse | Indicateur | Seuil de succès |
| --- | --- | --- | --- |
| H1 | _[Formulée de façon réfutable]_ | | |

## 3. Périmètre

| Axe | Choix | Justification |
| --- | --- | --- |
| Site | | _[Représentativité, encadrement, connaissance du terrain]_ |
| Population | _[Équipe entière, effectif]_ | |
| Flux | _[Types de cas, segment]_ | |
| Volume attendu | | _[Suffisant pour conclure ?]_ |
| Durée | _[Dates de début et de fin]_ | |
| Système | _[Agents, outils, version]_ | |

**Hors périmètre** : _[Cas, populations et fonctions exclus.]_

## 4. Dispositif

| Palier | Semaines | Ce qui est ouvert | Condition pour passer au suivant | Décideur |
| --- | --- | --- | --- | --- |
| Fantôme | | _[Rien n'est exécuté ni envoyé]_ | | |
| Assisté | | | | |
| Autonome restreint | | | | |
| Élargissement | | | | |

- **Preuve exigée pour élargir** : _[Volume, taux, absence d'incident, qui valide.]_
- **Retour arrière** : _[Comment, en combien de temps, testé quand. Ce qui ramène automatiquement au palier précédent.]_

## 5. Indicateurs et méthode de mesure

| Indicateur | Définition | Source | Référence | Seuil de succès |
| --- | --- | --- | --- | --- |
| | | | | |

- **Référence** : _[D'où viennent les valeurs, sur quel périmètre, validées par qui.]_
- **Groupe témoin** : _[Population comparable sans le système, même période. À défaut, méthode de substitution et ses limites.]_
- **Fenêtre de mesure** : _[Semaines retenues pour le verdict, et pourquoi.]_
- **Règles fixées à l'avance** : _[Traitement des événements exceptionnels, des données manquantes, des cas encore ouverts.]_

## 6. Critères de décision et d'arrêt

| Décision | Conditions |
| --- | --- |
| Généraliser | |
| Ajuster | _[Prolongation bornée, avec un objectif précis]_ |
| Arrêter | _[Critères de la charte]_ |

**Arrêt ou repli immédiat pendant le pilote**

| Déclencheur | Réaction | Responsable | Reprise |
| --- | --- | --- | --- |
| | | | |

## 7. Organisation

| Rôle | Personne | Responsabilité pendant le pilote |
| --- | --- | --- |
| | | |

| Rituel | Participants | Rythme | Objet |
| --- | --- | --- | --- |
| | | | |

**Traitement des incidents** : _[Niveaux de gravité, réaction, information du sponsor.]_

## 8. Risques du pilote

| Risque | Parade | Porteur |
| --- | --- | --- |
| | | |

## 9. Communication

| Public | Message | Canal | Date | Émetteur |
| --- | --- | --- | --- | --- |
| | | | | |

## 10. Calendrier

| Semaine | Dates | Palier et événements |
| --- | --- | --- |
| | | |

## 11. Prérequis au démarrage

- [ ] _[Seuils d'évaluation tenus]_
- [ ] _[Référence validée par la finance]_
- [ ] _[Équipe formée]_
- [ ] _[Procédure d'arrêt testée]_
- [ ] _[Avis de la sécurité et du DPO]_

<!-- section: exemple -->
# Plan de pilote — SAV Augmenté

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Version** | 1.0 du 28 mai 2026 |
| **Responsable du pilote** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Responsable du site** | Nadia Cherif, responsable du plateau de Nantes |
| **Rédacteur** | Hugo, FDE, avec Yasmine et Nadia Cherif |
| **Statut** | Validé au COPIL de S21, avec le rapport d'évaluation de fin de prototype |

## 1. Objet et décision attendue

Prouver en conditions réelles que SAV Augmenté divise par deux le délai de résolution des incidents PME sans dégrader la qualité de service ni la sécurité du réseau. Le pilote prépare la décision du COPIL de S29 (jalon G5) : généraliser en trois vagues à partir de S30, ajuster, ou arrêter.

## 2. Hypothèses à prouver

| N° | Hypothèse | Indicateur | Seuil de succès |
| --- | --- | --- | --- |
| H1 | Le délai vient des attentes entre N1 et N2 et de la collecte manuelle : le système le divise par deux | MTTR | 16 h au plus |
| H2 | Un quart au moins des incidents se résout sans intervention humaine et sans action inappropriée | Part des tickets résolus sans intervention ; actions inappropriées exécutées | 25 % au moins ; 0 |
| H3 | La qualité perçue par le client s'améliore | FCR ; taux de réouverture ; CSAT | 68 % au moins ; 10 % au plus ; 4,0 au moins |
| H4 | La qualité mesurée sur le golden set tient sur le flux réel | Erreur de qualification ; justesse du diagnostic | 5 % au plus ; 90 % au moins |
| H5 | Les conseillers adoptent le rôle de superviseur de cas | Usage quotidien du poste de supervision ; diagnostics acceptés sans correction | 15 conseillers sur 18 ; 85 % au moins |
| H6 | Le coût d'exploitation tient dans le business case | Coût d'inférence par ticket | 0,50 € au plus |

## 3. Périmètre

| Axe | Choix | Justification |
| --- | --- | --- |
| Site | Plateau de Nantes | Observé trois jours pendant le diagnostic ; responsable disponible chaque jour ; ni le meilleur plateau ni le plus en difficulté |
| Population | Les 18 conseillers du plateau, équipe entière ; les experts N2 du segment, dont les deux experts détachés comme référents | Des volontaires feraient surestimer l'adoption |
| Flux | Tous les tickets d'incident technique du segment PME Ouest | Les 12 motifs récurrents y sont présents dans les proportions du domaine |
| Volume attendu | Environ 1 150 tickets par semaine d'après les 12 derniers mois, soit 9 000 à 9 500 sur la durée | Suffisant pour lire le MTTR à l'heure près et chaque motif récurrent séparément |
| Durée | 8 semaines, de S22 à S29 : du 8 juin au 31 juillet 2026 | Deux semaines de mode fantôme, trois de montée en charge, trois de mesure |
| Système | L'Orchestrateur de cas et les cinq agents, la passerelle et ses neuf outils, dans la version évaluée en S21 | Dossier d'architecture 1.1 |

**Hors périmètre** : demandes de modification, réclamations et facturation, renvoyées au flux habituel après qualification ; grands comptes ; autres régions ; tout geste commercial automatique.

## 4. Dispositif

| Palier | Semaines | Ce qui est ouvert | Condition pour passer au suivant | Décideur |
| --- | --- | --- | --- | --- |
| Fantôme | S22 et S23 | Les agents traitent tous les tickets. Rien n'est exécuté ni envoyé. Leurs sorties sont comparées à ce que font les conseillers | Seuils du plan d'évaluation tenus sur le flux réel ; aucune action inappropriée proposée ; procédure d'arrêt testée | Sophie Lambert et Marc Dubois, revue du 19 juin |
| Assisté | S24 | Qualification automatique. Diagnostic et proposition soumis au conseiller, qui décide. Messages de statut envoyés automatiquement | Diagnostics acceptés sans correction dans 85 % des cas au moins ; aucun incident majeur | Sophie Lambert, revue du 26 juin |
| Autonome restreint | S25 | Résolution sans intervention sur le motif « perte de synchronisation de l'accès », avec deux actions à risque faible : `resynchroniser_acces` et `redemarrer_equipement` | Aucune action inappropriée ; réouvertures du motif sous la référence de 14 % | Sophie Lambert et Direction Réseau, revue du 3 juillet |
| Élargissement | S26 à S29 | Motifs ajoutés un par un, deux par semaine au plus. Ambition : 8 motifs ouverts en fin de pilote | Preuve par motif | Sophie Lambert et Direction Réseau, en revue hebdomadaire |

**Preuve exigée pour ouvrir un motif à la voie autonome** : au moins 50 cas du motif traités en voie assistée ; proposition de l'Agent Résolution approuvée sans modification dans 95 % des cas au moins ; aucune proposition jugée inappropriée par l'expert N2 référent ; justesse du diagnostic d'au moins 90 % sur le motif. Une action ne rejoint le catalogue ouvert qu'après avoir fait ses preuves sous approbation humaine.

**Particularité du mode fantôme** : les outils de lecture sont réels, sauf `ligne.lancer_test`, que les agents ne lancent pas tant qu'aucune action réelle n'est permise, à cause de la micro-coupure. Ils indiquent qu'ils l'auraient lancé et utilisent le résultat du test quand le conseiller l'a fait. Les experts référents revoient les écarts chaque jour ; chaque écart fondé devient un cas de test.

**Retour arrière** : chaque palier se referme en moins de 2 minutes par les interrupteurs de la passerelle (par motif, par outil d'écriture, par agent). Essai à blanc en S21 et en S23. Un incident ramène au palier précédent sans attendre la revue. L'élargissement, lui, n'est jamais automatique.

## 5. Indicateurs et méthode de mesure

| Indicateur | Définition | Source | Référence | Seuil de succès |
| --- | --- | --- | --- | --- |
| MTTR | Délai moyen de l'ouverture à la clôture, tickets clos dans la fenêtre | Ticketing | 31 h | 16 h au plus |
| FCR | Part des tickets résolus au premier contact | Ticketing | 54 % | 68 % au moins |
| Taux de réouverture | Part des tickets rouverts dans les 7 jours suivant la clôture | Ticketing | 14 % | 10 % au plus |
| CSAT | Note sur 5 à l'enquête envoyée après clôture | Enquête client | 3,6 | 4,0 au moins |
| Résolution sans intervention humaine | Part des tickets clos sans aucun geste humain | Traces | 0 % | 25 % au moins |
| Erreur de qualification | Part des tickets mal qualifiés dans un échantillon de 5 % revu par les experts N2 | Échantillon | 9 % (manuel) | 5 % au plus |
| Justesse du diagnostic | Concordance avec l'expert N2 sur le même échantillon | Échantillon | Sans objet | 90 % au moins |
| Actions inappropriées exécutées | Constatées par l'Agent Qualité, les experts ou un signalement | Traces, signalements | Sans objet | 0 |
| Coût d'inférence par ticket | Coût des appels de modèle rapporté au nombre de tickets | Traces | Sans objet | 0,50 € au plus |
| Usage quotidien du poste de supervision | Conseillers présents ayant traité leurs cas dans le poste, chaque jour de la dernière semaine | Journaux du poste | Sans objet | 15 sur 18 |
| Délai de diagnostic | 95e centile du temps entre qualification et diagnostic | Traces | Sans objet | 3 minutes au plus |
| Diagnostics acceptés sans correction | Part des diagnostics non modifiés par le conseiller | Poste de supervision | Sans objet | 85 % au moins |

- **Référence** : les valeurs du domaine, signées par Julien Faure. Vérification faite sur le périmètre du pilote : sur les 12 mois analysés, le segment PME Ouest s'en écarte de moins de 5 % (MTTR de 30,2 h, FCR de 55 %). La référence du domaine est donc retenue, avec son accord. Les deux semaines de mode fantôme, où le processus reste inchangé, en donnent une mesure fraîche.
- **Groupe témoin** : le plateau de Lille, segment PME Nord, qui ne reçoit le système qu'en vague 2. Mêmes indicateurs, mêmes semaines. L'écart du pilote est lu après déduction de la variation du témoin : cela neutralise l'effet de l'été et d'un éventuel incident réseau.
- **Fenêtre de mesure** : les trois dernières semaines, S27 à S29, pour les indicateurs de résultat. Les semaines S24 à S26 montrent la trajectoire mais ne fondent pas le verdict : le système n'y a pas encore son périmètre. L'erreur de qualification et la justesse se mesurent sur toute la durée.
- **Règles fixées à l'avance** : les tickets liés à un incident collectif déclaré sont comptés à part dans le calcul du MTTR, pour le pilote comme pour le témoin. Le taux de réouverture n'est calculé que sur les tickets observés 7 jours pleins. Aucun indicateur n'est ajouté ni redéfini après le 8 juin.

## 6. Critères de décision et d'arrêt

| Décision | Conditions |
| --- | --- |
| Généraliser | Aucun critère d'arrêt atteint ; aucune action inappropriée exécutée ; réouverture et CSAT au seuil ; MTTR de 16 h au plus ; coût d'inférence dans l'enveloppe ; usage quotidien au seuil |
| Ajuster | Aucun critère d'arrêt atteint, mais MTTR entre 16 h et 21,7 h, ou un seuil de qualité manqué dont la cause est identifiée. Prolongation de 4 semaines au plus, avec un objectif écrit |
| Arrêter | Critère d'arrêt n° 3 de la charte de mission : MTTR du périmètre pilote supérieur à 21,7 h ; action automatisée inappropriée dont la cause n'est pas corrigée et vérifiée ; moins de deux tiers des conseillers, soit moins de 12 sur 18, utilisant le dispositif chaque jour |

Un seuil manqué sur un indicateur secondaire (délai de diagnostic, nombre de motifs ouverts) n'empêche pas de généraliser, mais devient une condition de la généralisation.

**Arrêt ou repli immédiat pendant le pilote**

| Déclencheur | Réaction | Responsable | Reprise |
| --- | --- | --- | --- |
| Action inappropriée exécutée chez un client | Arrêt de la voie autonome ; Claire Besson informée dans l'heure | Nadia Cherif ou la cellule d'exploitation | Après analyse, correction vérifiée et accord de Sophie Lambert et de Marc Dubois |
| Donnée personnelle ou donnée d'un autre client exposée | Arrêt des envois de messages ; Élise Martin informée | Cellule d'exploitation | Après accord d'Élise Martin |
| Justesse hebdomadaire du diagnostic sous 88 % | Retour en voie assistée des motifs en cause | Sophie Lambert | Après revue d'erreurs et nouveau passage au seuil |
| CSAT hebdomadaire sous 3,6 deux semaines de suite, ou réouverture au-dessus de 14 % | Retour au palier assisté | Sophie Lambert | Sur décision en revue hebdomadaire |
| Cinq actions identiques sur une zone en 30 minutes | Suspension automatique de l'autonomie sur la zone | Disjoncteur de la passerelle | Par la Direction Réseau |

## 7. Organisation

| Rôle | Personne | Responsabilité pendant le pilote |
| --- | --- | --- |
| Responsable du pilote | Sophie Lambert | Décide des paliers ; porte les résultats au COPIL |
| Responsable du site | Nadia Cherif | Anime le point quotidien ; déclenche l'arrêt d'urgence ; remonte les irritants |
| Experts N2 référents | Les deux experts détachés | Revue quotidienne des écarts en mode fantôme ; échantillon hebdomadaire de 5 % ; preuve par motif |
| Cellule d'exploitation | Inès, Léo, data engineer, référent sécurité, product owner | Surveille, corrige, tient l'astreinte sur la plage de service. Préfigure l'équipe AgentOps |
| Mesure | Hugo, avec le contrôle de gestion | Tableau des indicateurs, groupe témoin, revue de valeur |
| Changement | Expert conduite du changement | Formation, écoute du plateau, lien avec Isabelle Moreau |
| Correspondant réseau | Direction Réseau | Catalogue d'actions, disjoncteur, lignes de test |
| Lead | Yasmine | Relation avec la sponsor ; arbitrages |

Un FDE est présent sur le plateau chaque jour de S22 à S25, puis trois jours par semaine. Le product owner Voxalis présente les résultats au COPIL.

| Rituel | Participants | Rythme | Objet |
| --- | --- | --- | --- |
| Point de plateau | Nadia Cherif, deux ou trois conseillers, un FDE | Chaque jour, 15 minutes | Où l'agent a fait gagner du temps, où il en a fait perdre, quel cas aurait été traité autrement |
| Signalement en un geste | Tous les conseillers | En continu, réponse sous 24 h | Erreurs et irritants, depuis le poste de supervision |
| Revue d'erreurs | Experts référents, Léo, product owner | Chaque jeudi | Échantillon de la semaine et tous les signalements |
| Revue de valeur et de palier | Sophie Lambert, Nadia Cherif, Hugo, Yasmine, Direction Réseau | Chaque vendredi | Indicateurs contre référence et témoin ; décision de palier ; registre de valeur |
| COPIL | Composition habituelle, avec Marc Dubois et Élise Martin en S29 | S25 et S29 | Point d'étape, puis décision |

**Traitement des incidents**

| Gravité | Définition | Réaction |
| --- | --- | --- |
| Majeure | Action inappropriée exécutée, donnée exposée, client lésé | Arrêt immédiat de la voie concernée ; sponsor informée dans l'heure ; reprise après analyse |
| Mineure | Défaut sans dommage durable | Correction sous 48 h ; cas ajouté au jeu de test |
| Irritant | Gêne d'usage | Réponse au signalement ; arbitrage au backlog |

Chaque incident est analysé sans recherche de coupable, inscrit au registre RAID et converti en cas d'évaluation.

## 8. Risques du pilote

| Risque | Parade | Porteur |
| --- | --- | --- |
| Crainte pour l'emploi sur le plateau | Engagement pris avec les représentants du personnel rappelé par Isabelle Moreau avant le démarrage : aucune suppression de poste | Isabelle Moreau |
| Les équipes du pilote se surpassent parce qu'elles sont observées | Équipe entière, groupe témoin, fenêtre de mesure en fin de pilote | Hugo |
| Période d'été : congés, volumes inhabituels | Témoin sur les mêmes semaines ; congés des référents planifiés ; pas de palier ouvert sans référent présent | Nadia Cherif |
| Incident collectif majeur pendant la fenêtre de mesure | Tickets concernés comptés à part, règle écrite à l'avance | Hugo |
| Experts N2 rappelés en production | Temps réservé inscrit au plan de charge ; alerte en revue du vendredi | Sophie Lambert |
| Applications sources plus lentes en charge réelle | Latences mesurées en mode fantôme ; quota réservé à la passerelle | Karim Haddad |
| Approbation machinale en voie assistée | Temps par approbation et taux de refus suivis chaque semaine | Nadia Cherif |
| Calendrier qui pousse à ouvrir un palier sans preuve | La preuve par motif est écrite ; un palier non ouvert est un résultat, pas un échec | Sophie Lambert |

## 9. Communication

| Public | Message | Canal | Date | Émetteur |
| --- | --- | --- | --- | --- |
| Représentants du personnel | Dispositif, données tracées, absence d'usage individuel, engagement sur l'emploi | Réunion d'information | 26 mai | Isabelle Moreau |
| Conseillers du plateau | Ce qui change et ce qui ne change pas ; le rôle de superviseur de cas ; comment signaler ; comment arrêter | Réunion de plateau, puis formation de deux demi-journées sur des cas réels | 2 et 4 juin | Sophie Lambert, Nadia Cherif |
| Experts N2 | Rôle de référent ; revue des écarts ; preuve par motif | Atelier | 3 juin | Sophie Lambert |
| Direction Réseau | Actions automatiques, disjoncteur, correspondant désigné | Note et exercice d'arrêt | S21 | Karim Haddad |
| Autres plateaux | Ce qu'est le pilote ; quand ils seront concernés | Note | 8 juin | Sophie Lambert |
| Commerciaux du segment PME Ouest | Les clients recevront des messages automatiques ; que répondre | Note | 19 juin | Sophie Lambert |
| Clients | Aucune campagne. Chaque message indique qu'il est produit automatiquement et comment joindre un conseiller | Messages de statut | À partir du 22 juin | Agent Communication |
| COPIL | Avancement, incidents, décision | Séances de S25 et S29 | — | Product owner, Yasmine |

## 10. Calendrier

| Semaine | Dates | Palier et événements |
| --- | --- | --- |
| S21 | 1er au 5 juin | Campagne d'évaluation de fin de prototype ; formation ; essai d'arrêt à blanc ; COPIL |
| S22 | 8 au 12 juin | Mode fantôme |
| S23 | 15 au 19 juin | Mode fantôme ; second essai d'arrêt ; revue de sortie le 19 juin |
| S24 | 22 au 26 juin | Palier assisté : premières actions réelles, sous approbation |
| S25 | 29 juin au 3 juillet | Autonome restreint sur un motif ; COPIL d'étape |
| S26 | 6 au 10 juillet | Élargissement |
| S27 | 13 au 17 juillet | Élargissement ; début de la fenêtre de mesure |
| S28 | 20 au 24 juillet | Élargissement ; version provisoire du bilan |
| S29 | 27 au 31 juillet | Mesure ; COPIL de décision (jalon G5) ; bilan définitif |

## 11. Prérequis au démarrage

État au 28 mai 2026.

- [x] Référence et méthode de mesure validées par Julien Faure.
- [x] Groupe témoin accepté par le responsable du plateau de Lille.
- [x] Analyse d'impact sur la protection des données achevée par Élise Martin.
- [x] Articles de la base de connaissances revus pour les 12 motifs récurrents.
- [ ] Quatre seuils du plan d'évaluation tenus : campagne du 2 juin.
- [ ] Les 18 conseillers formés : 2 et 4 juin.
- [ ] Procédure d'arrêt testée à blanc avec Nadia Cherif.
- [ ] Demi-journée d'attaque manuelle conduite par le référent sécurité.
- [ ] File d'approbation et signalement en un geste recettés par trois conseillers.
