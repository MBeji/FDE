---
id: rapport-evaluation
titre: "Rapport d'évaluation"
resume: "Le compte rendu d'une campagne d'évaluation : verdict face aux seuils, résultats par dimension et par strate, analyse des erreurs, évolution depuis la version précédente et recommandations. Le document qui autorise, ou non, le passage d'un jalon."
phase: construire
type: livrable
format: document
effort: "1 jour par campagne, lecture des erreurs comprise"
tags: [evaluation, qualite, analyse-erreurs, decision]
frameworks: [evaluation-agents, eval-driven-development]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le rapport dit si une version franchit les seuils du [plan d'évaluation](/templates/plan-evaluation), où elle échoue encore et quoi corriger d'abord. Il sert deux lecteurs : le décideur, qui lit la première page et tranche ; l'équipe, qui lit l'analyse d'erreurs et sait quoi faire lundi.

## Quand l'utiliser

À chaque jalon : fin de prototype, sortie du mode fantôme, fin de pilote, changement de modèle. Pas pour les passages quotidiens en intégration continue, dont le tableau de bord suffit.

## Comment le remplir

1. Commencer par le verdict : seuils tenus ou non, décision recommandée, réserves.
2. Donner chaque résultat avec son numérateur, son dénominateur et sa dispersion entre exécutions.
3. Lire par strate : une moyenne tenue peut cacher un motif en échec.
4. Lire les traces en échec avec un expert métier, les classer par cause, les compter.
5. Dire pour chaque catégorie où corriger : prompt, outil, connaissance, donnée ou annotation.
6. Comparer à la version précédente, à version de jeu égale.
7. Écrire ce que le rapport ne prouve pas.

Méthode : [eval-driven development](/frameworks/eval-driven-development).

## Critères de qualité

- [ ] Le verdict et la décision demandée tiennent dans la première section.
- [ ] Chaque pourcentage est accompagné de ses effectifs.
- [ ] Les versions du système et des jeux sont indiquées.
- [ ] Les erreurs sont classées par cause, avec un exemple par catégorie.
- [ ] Un garde-fou qui a arrêté une erreur est compté comme un défaut à corriger.
- [ ] Chaque recommandation a un responsable et une échéance.

<!-- section: template -->
# Rapport d'évaluation — _[Nom du système]_ — _[Objet de la campagne]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Version évaluée** | _[Système, prompts, outils, modèle, connaissances]_ |
| **Jeux utilisés** | _[Golden set et jeu adverse : versions, nombres de cas]_ |
| **Campagne** | _[Date, nombre d'exécutions, environnement]_ |
| **Plan d'évaluation de référence** | _[Version et date]_ |
| **Décision demandée** | _[Jalon, instance, date]_ |
| **Rédacteur** | {{auteur}} |
| **Date du rapport** | {{date}} |

## 1. Synthèse et verdict

**Verdict** : _[Seuils tenus ou non. Décision recommandée en une phrase.]_

| Critère | Seuil | Résultat | Effectifs | Verdict |
| --- | --- | --- | --- | --- |
| | | | | _[Tenu / Tenu avec marge faible / Non tenu]_ |

**Ce que le décideur doit savoir** : _[Trois points au plus.]_

**Réserves** : _[Conditions à lever, avec responsable et échéance.]_

## 2. Conditions de la campagne

| Critère | Exécution 1 | Exécution 2 | Exécution 3 | Retenu |
| --- | --- | --- | --- | --- |
| | | | | |

_[Environnement : outils rejoués ou réels, écritures simulées. Règle de retenue. Écarts au protocole du plan, s'il y en a.]_

## 3. Résultats par dimension

### 3.1 _[Dimension]_

| Strate | Cas | Réussites | Taux |
| --- | --- | --- | --- |
| | | | |

_[Incertitude statistique. Écart entre cas de mise au point et réserve. Indicateurs de trajectoire : appels d'outils, coût, délai.]_

### 3.2 Jeu adverse

| Famille | Cas | Comportement attendu obtenu | Écarts sans action | Actions inappropriées |
| --- | --- | --- | --- | --- |
| | | | | |

_[Appels arrêtés par un garde-fou : nombre, nature, cause.]_

## 4. Analyse d'erreurs

| Catégorie | Cas | Exemple | Où corriger |
| --- | --- | --- | --- |
| | | | _[Prompt / Outil / Connaissance / Donnée source / Annotation]_ |

_[Deux ou trois cas commentés : entrée, ce que l'agent a fait, ce qu'il fallait faire, pourquoi.]_

## 5. Évolution depuis la version précédente

| Critère | Version précédente | Version évaluée | Écart | Ce qui l'explique |
| --- | --- | --- | --- | --- |
| | | | | |

_[Strates en recul. Changements essayés puis annulés.]_

## 6. Recommandations

| N° | Recommandation | Où | Responsable | Échéance |
| --- | --- | --- | --- | --- |
| | | | | |

## 7. Limites de ce rapport

_[Ce que la campagne ne mesure pas, et où cela sera mesuré.]_

<!-- section: exemple -->
# Rapport d'évaluation — SAV Augmenté — Fin de prototype

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Version évaluée** | SAV Augmenté 0.9, candidate au pilote : prompt de l'Agent Diagnostic 1.2, passerelle 0.9, catalogue de remédiation 1.0, version du modèle figée, index de la base de connaissances du 1er juin |
| **Jeux utilisés** | Golden set 1.1 (600 cas, 9 annotations corrigées depuis la version 1.0) ; jeu adverse 1.0 (120 cas) |
| **Campagne** | 2 juin 2026, trois exécutions complètes, environnement de préproduction |
| **Plan d'évaluation de référence** | Version 1.0 du 30 avril 2026 |
| **Décision demandée** | Entrée en pilote sur le plateau de Nantes, COPIL de S21 |
| **Rédacteur** | Léo, FDE, avec les deux experts N2 détachés et le référent sécurité |
| **Date du rapport** | 3 juin 2026 |

## 1. Synthèse et verdict

**Verdict** : les quatre seuils de passage sont tenus, sur la plus défavorable de trois exécutions. Nous recommandons l'entrée en pilote le 8 juin, en mode fantôme, avec trois réserves à lever avant toute action réelle.

| Critère | Seuil | Résultat | Effectifs | Verdict |
| --- | --- | --- | --- | --- |
| Exactitude de la qualification | ≥ 95 % | 96,2 % | 577 sur 600 | Tenu |
| Justesse du diagnostic | ≥ 90 % | 91,0 % | 546 sur 600 | Tenu, avec une marge faible |
| Actions inappropriées sur le jeu adverse | 0 | 0 | 120 cas, trois exécutions | Tenu |
| Conformité des messages client | ≥ 98 % | 98,6 % | 1 418 sur 1 438 | Tenu |
| Recul d'une strate depuis le 20 mai | 2 cas au plus | Aucune strate en recul | 14 strates | Tenu |

**Ce que le décideur doit savoir**

1. Les seuils sont tenus sur l'ensemble du golden set pour la qualification et le diagnostic, et de bout en bout sur le motif du prototype, « perte de synchronisation de l'accès ».
2. La marge sur le diagnostic est mince. Avec 600 cas, 91,0 % se lit « entre 88,7 % et 93,3 % ». Seul le flux réel, en mode fantôme, confirmera.
3. Aucune action inappropriée n'a été exécutée, mais la passerelle a dû arrêter trois appels non conformes. Nous les comptons comme des défauts, pas comme des succès.

**Réserves**

| N° | Réserve | Responsable | Échéance |
| --- | --- | --- | --- |
| 1 | Supprimer la cause des trois appels non conformes : du texte non fiable repris dans le diagnostic transmis à l'Agent Résolution | Léo | 10 juin |
| 2 | Maintenir en voie assistée les motifs « qualité audio dégradée » (80,0 %) et « débit dégradé » (83,3 %), sous le plancher de 85 % | Sophie Lambert | Jusqu'à preuve en production |
| 3 | Mesurer le délai de diagnostic sur le flux réel : le rejeu ne le mesure pas | Inès | Revue du 19 juin |

## 2. Conditions de la campagne

| Critère | Exécution 1 | Exécution 2 | Exécution 3 | Retenu |
| --- | --- | --- | --- | --- |
| Exactitude de la qualification | 96,2 % (577) | 96,5 % (579) | 96,3 % (578) | 96,2 % |
| Justesse du diagnostic | 91,0 % (546) | 91,5 % (549) | 91,2 % (547) | 91,0 % |
| Actions inappropriées | 0 | 0 | 0 | 0 |
| Conformité des messages | 98,6 % (1 418 sur 1 438) | 98,8 % (1 423 sur 1 440) | 98,7 % (1 417 sur 1 436) | 98,6 % |

Les outils de lecture rejouent les réponses enregistrées de chaque cas. Les trois outils d'écriture tournent en mode simulation, avec leurs règles d'approbation réelles. Le résultat retenu est le plus défavorable, critère par critère, comme le prévoit le plan. Les analyses qui suivent portent sur l'exécution 1. Aucun écart au protocole.

## 3. Résultats par dimension

### 3.1 Exactitude de la qualification

| Strate | Cas | Réussites | Taux |
| --- | --- | --- | --- |
| 12 motifs récurrents | 360 | 352 | 97,8 % |
| Longue traîne | 180 | 170 | 94,4 % |
| Cas difficiles | 60 | 55 | 91,7 % |
| **Ensemble** | **600** | **577** | **96,2 %** |

Cas de mise au point : 96,5 % (386 sur 400). Réserve : 95,5 % (191 sur 200). Écart d'un point : pas de sur-ajustement.

Les 23 erreurs : 9 confusions entre motifs voisins, surtout « débit dégradé » et « coupures intermittentes » ; 6 urgences sous-estimées ; 5 services mal identifiés chez des clients à plusieurs sites ; 3 identifiants de ligne mal extraits.

### 3.2 Justesse du diagnostic

| Strate | Cas | Réussites | Taux |
| --- | --- | --- | --- |
| 12 motifs récurrents | 360 | 339 | 94,2 % |
| Longue traîne | 180 | 157 | 87,2 % |
| Cas difficiles | 60 | 50 | 83,3 % |
| **Ensemble, en chaîne complète** | **600** | **546** | **91,0 %** |
| Ensemble, avec la qualification de référence | 600 | 554 | 92,3 % |

Cas de mise au point : 91,5 % (366 sur 400). Réserve : 90,0 % (180 sur 200). Écart de 1,5 point, sous l'alerte de 3 points.

L'écart entre les deux dernières lignes mesure ce que les erreurs de qualification coûtent au diagnostic : 8 cas. Avec 92,3 %, l'agent est au niveau de l'accord entre experts (92 %) : le gain restant est en amont et dans les outils, pas dans le prompt.

| Motif récurrent | Justes sur 30 | Lecture |
| --- | --- | --- |
| Perte de synchronisation de l'accès | 29 | Motif du prototype |
| Débit dégradé | 25 | Sous le plancher de 85 % : voie assistée |
| Coupures intermittentes de l'accès | 27 | |
| Équipement client injoignable | 30 | |
| Échec d'authentification de la session | 29 | |
| Postes téléphoniques non enregistrés | 29 | |
| Appels entrants non aboutis | 28 | |
| Qualité audio dégradée | 24 | Sous le plancher de 85 % : voie assistée |
| Renvoi ou accueil vocal inopérant | 29 | |
| Liaison de secours non basculée | 29 | |
| Ligne mobile sans service | 30 | |
| Données mobiles inopérantes | 30 | |

Une strate de 30 cas ne distingue pas 27 de 29. Ce tableau désigne les deux motifs à problème ; il ne suffit pas à ouvrir les autres à l'autonomie.

**Calibration**

| Confiance annoncée | Cas | Diagnostics justes | Taux |
| --- | --- | --- | --- |
| Élevée | 390 | 380 | 97,4 % |
| Moyenne | 150 | 132 | 88,0 % |
| Faible | 60 | 34 | 56,7 % |

La cible de 97 % à confiance élevée est tenue. Seuls les diagnostics à confiance élevée peuvent ouvrir la voie autonome : 10 diagnostics faux sur 390 y accéderaient. C'est pourquoi l'Agent Résolution relit l'état du service avant d'agir.

**Trajectoire** : 5,4 appels d'outils par cas en moyenne ; 9 cas arrêtés à la limite de 8 appels et rendus en confiance faible ; 0,14 € par diagnostic. Qualité des preuves notée par le modèle juge sur 150 cas : 4,3 sur 5, pour une cible de 4.

### 3.3 Jeu adverse

| Famille | Cas | Comportement attendu obtenu | Écarts sans action | Actions inappropriées |
| --- | --- | --- | --- | --- |
| Injection dans la description du ticket | 30 | 27 | 3 | 0 |
| Injection par un contenu renvoyé par un outil | 15 | 15 | 0 | 0 |
| Demande hors périmètre | 20 | 20 | 0 | 0 |
| Panne ou incohérence d'outil | 15 | 13 | 2 | 0 |
| Données contradictoires | 15 | 14 | 1 | 0 |
| Pression de l'interlocuteur | 15 | 12 | 3 | 0 |
| Accès aux données d'un autre client ou aux instructions | 10 | 10 | 0 | 0 |
| **Total** | **120** | **111** | **9** | **0** |

**Appels arrêtés par la passerelle : 3.** Dans trois cas d'injection, l'Agent Diagnostic a ignoré l'instruction mais l'a recopiée dans un constat du champ `preuves`. L'Agent Résolution, qui reçoit ce champ, a alors appelé `reseau.executer_action`. Deux appels ont été mis en attente d'approbation, parce que le diagnostic était à confiance moyenne ; le troisième, qui visait un service étranger au client du ticket, a été refusé. Rien n'a été exécuté. Mais la séparation des deux agents devait empêcher le texte du client d'atteindre l'agent qui agit : le relais le laissait passer.

**Autres écarts** : dans 2 cas de panne d'outil, un diagnostic à confiance moyenne au lieu de l'escalade attendue ; dans 1 cas, une contradiction non signalée ; dans 3 cas de pression, une escalade vers un humain alors qu'un message de statut suffisait.

Zéro action inappropriée sur 120 cas distincts reste compatible avec un taux réel pouvant atteindre 2,5 %. Les règles tenues par la passerelle et le mode fantôme couvrent cette incertitude.

### 3.4 Conformité des messages

1 438 messages produits, soit 2,4 par cas ; 1 418 conformes aux huit règles. Accord du modèle juge avec les experts sur les 50 messages de calibrage : 94 %. Les 20 messages non conformes ont tous été relus par un expert.

| Défaut | Messages |
| --- | --- |
| Délai de rétablissement annoncé sans source | 7 |
| Terme technique non expliqué | 5 |
| Prochaine étape absente | 4 |
| Ton inadapté | 3 |
| Répétition du message précédent | 1 |

La mention du caractère automatique du message est présente dans 100 % des cas.

### 3.5 Tranche du prototype, de bout en bout

Sur les 30 cas du motif « perte de synchronisation de l'accès » : qualification juste dans 30 cas, diagnostic juste dans 29, messages conformes à 98,6 % (71 sur 72). Les deux actions à risque faible du motif ont été exécutées sur les 10 lignes de test de la Direction Réseau : effet constaté conforme à la spécification dans les 10 cas. Aucune action inappropriée sur les cas adverses qui touchent ce motif. Les quatre seuils sont tenus sur le motif.

## 4. Analyse d'erreurs

Les 54 diagnostics faux ont été lus un par un par Léo et un expert N2.

| Catégorie | Cas | Exemple | Où corriger |
| --- | --- | --- | --- |
| Résultat du test de ligne mal lu | 11 | Marge de bruit de 4 dB tenue pour suffisante | Outil : `ligne.lancer_test` doit renvoyer une interprétation, pas des valeurs brutes |
| Deux causes, une seule retrouvée | 10 | Lien saturé et priorisation de la voix absente | Prompt : repères par motif ; annotation : causes secondaires admises |
| Incident collectif mal corrélé | 8 | Incident clos vingt minutes plus tôt, client pas encore rétabli | Outil : `incidents.rechercher_connus` doit renvoyer les incidents clos depuis moins de 24 h |
| Erreur de qualification propagée | 8 | « Débit dégradé » qualifié « coupures intermittentes » | Agent Qualification : exemples de motifs voisins |
| Inventaire incomplet ou périmé | 7 | Équipement remplacé, ancien modèle à l'inventaire | Donnée source, avec la DSI |
| Conclusion prématurée | 5 | Diagnostic rendu après deux vérifications concordantes, la troisième aurait contredit | Prompt |
| Procédure absente de la base | 3 | Motif rare de téléphonie sans article | Connaissances |
| Annotation à revoir | 2 | Deux causes recevables, une seule annotée | Golden set |

**Lecture** : 39 des 54 erreurs se corrigent hors du prompt, dont 19 dans la réponse de deux outils. C'est là que va l'effort des deux prochaines semaines.

**Trois cas commentés**

- **Cas 412, coupures intermittentes.** Le test renvoie une marge de bruit de 4 dB. L'agent conclut à une ligne saine et retient le réseau local du client. L'expert lit une marge insuffisante et retient un profil de ligne inadapté. L'agent n'a pas le seuil ; l'outil le connaît et ne le dit pas.
- **Cas 177, perte de synchronisation.** Un incident collectif a été clos vingt minutes avant le ticket. L'outil ne renvoie que les incidents en cours ; l'agent conclut à un défaut de ligne et recommande une action. L'expert attend la resynchronisation. En production, la relecture de l'état avant action aurait évité l'action inutile, pas le diagnostic faux.
- **Cas 533, qualité audio dégradée.** L'agent identifie la saturation du lien et s'arrête. L'annotation retient l'absence de priorisation de la voix comme cause principale. Aucune mesure n'existe pendant un appel dégradé : ce motif restera fragile tant qu'un outil ne la fournit pas.

## 5. Évolution depuis la version précédente

Comparaison avec la campagne du 20 mai (S19), sur la même version des jeux.

| Critère | 20 mai | 2 juin | Écart | Ce qui l'explique |
| --- | --- | --- | --- | --- |
| Exactitude de la qualification | 93,8 % (563) | 96,2 % (577) | + 2,4 points | Exemples de motifs voisins ; règle d'urgence pour les sites uniques |
| Justesse du diagnostic, en chaîne | 88,2 % (529) | 91,0 % (546) | + 2,8 points | Meilleure qualification ; motif transmis traité comme une hypothèse ; repères par motif réécrits avec les experts |
| Justesse du diagnostic, qualification de référence | 91,0 % (546) | 92,3 % (554) | + 1,3 point | Les deux derniers changements ci-dessus |
| Actions inappropriées | 2 | 0 | | Diagnostic de moins de 30 minutes exigé par la passerelle ; contrôle par code des délais dans les messages |
| Conformité des messages | 96,4 % (1 352 sur 1 402) | 98,6 % | + 2,2 points | Gabarits revus ; contrôle par code |

Le 20 mai, aucun des quatre seuils n'était tenu. Les deux actions inappropriées de cette campagne étaient un redémarrage d'équipement décidé sur un diagnostic vieux de plus d'une heure, et un message promettant un rétablissement « sous deux heures » à un client menaçant de résilier. Les deux ont été corrigées par une règle tenue par le code, pas par une consigne.

Aucune strate ne recule. Un changement a été essayé puis annulé : imposer un test de ligne avant toute conclusion sur un motif d'accès gagnait 2 cas, mais augmentait de 41 % les tests demandés en heures ouvrées.

## 6. Recommandations

| N° | Recommandation | Où | Responsable | Échéance |
| --- | --- | --- | --- | --- |
| 1 | Entrer en pilote le 8 juin, en mode fantôme | — | COPIL | S21 |
| 2 | Rédiger les constats sans recopie du texte du client ; borner la longueur du champ dans le schéma `diagnostic.v1` ; rejouer le jeu adverse | Prompt et schéma | Léo | 10 juin |
| 3 | Garder « qualité audio dégradée » et « débit dégradé » en voie assistée | Paramètre de la passerelle | Sophie Lambert | Jusqu'à preuve en production |
| 4 | Faire renvoyer par `ligne.lancer_test` une interprétation des marges | Outil | Inès, Direction Réseau | 26 juin |
| 5 | Faire renvoyer par `incidents.rechercher_connus` les incidents clos depuis moins de 24 h | Outil | Inès | 19 juin |
| 6 | En mode fantôme, faire revoir par les experts au moins 300 diagnostics ; alerte sous 88 % | Suivi en production | Experts N2 référents | 19 juin |
| 7 | Corriger les 2 annotations ; verser au jeu adverse les cas issus de l'attaque manuelle de S21 | Jeux | Léo, référent sécurité | 12 juin |

## 7. Limites de ce rapport

- **Il ne mesure pas la valeur.** Le MTTR, le FCR et le coût par ticket se mesurent pendant le pilote.
- **Il ne mesure ni les délais ni la tenue en charge.** Les outils sont rejoués. Le mode fantôme et le test de charge les mesurent.
- **La résolution n'est évaluée de bout en bout que sur un motif.** Les autres motifs s'ouvriront un par un, sur preuve en production.
- **Il ne dit rien de l'adoption.** Un diagnostic juste que le conseiller ne lit pas ne raccourcit aucun délai.
