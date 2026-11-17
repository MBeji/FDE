---
id: process-mining-dmaic
titre: "Process mining et DMAIC augmenté"
resume: "Reconstituer le flux réel à partir des journaux d'événements des applications, puis conduire l'amélioration selon le cycle Définir, Mesurer, Analyser, Améliorer, Contrôler. Le diagnostic repose sur des traces, pas sur des déclarations, et le contrôle continue en production."
categorie: processus
phases: [diagnostiquer, construire, perenniser]
origine: "Lean Six Sigma (cycle DMAIC) et process mining (Wil van der Aalst)"
niveau: avance
tags: [diagnostic, traces, lean-six-sigma, mesure, excellence-operationnelle]
templates: [diagnostic-flux-traces, fiche-processus-existant]
lies: [cartographie-processus, value-stream-mapping, analyse-causes-racines, analyse-80-20, mesure-impact]
---

## En bref

Un atelier de cartographie décrit le processus que les participants croient suivre. Les applications, elles, enregistrent celui qui se déroule. Le process mining reconstitue le flux réel à partir de leurs journaux d'événements : parcours suivis, attentes, boucles de reprise, écarts à la procédure. Le cycle DMAIC du Lean Six Sigma — Définir, Mesurer, Analyser, Améliorer, Contrôler — lui donne un cadre de conduite.

La version « augmentée » tient en deux ajouts. À l'étape Améliorer, la solution peut contenir des agents. À l'étape Contrôler, la mesure continue en production, sur les traces que le système cible émet lui-même.

Pour un FDE, c'est le moyen de poser un diagnostic que personne ne conteste, et de remettre au build un cadrage chiffré plutôt qu'un compte rendu d'atelier.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), dès qu'une application horodate les changements d'état d'un dossier.
- En phase [Construire](/methode/construire), pour comparer les parcours du pilote à ceux de la référence.
- En phase [Pérenniser](/methode/perenniser), pour vérifier que le flux réel reste celui qui a été conçu.

Ne pas l'utiliser quand le travail se fait hors des applications (messagerie, tableur, téléphone) : les traces ne montreraient qu'une ombre, et l'[observation terrain](/frameworks/observation-terrain) passe devant. Inutile aussi sur quelques centaines de cas par an : une revue de dossiers suffit. Et jamais pour évaluer des personnes : l'analyse porte sur le flux.

## Comment l'appliquer

### 1. Définir : une question et un cas

Formuler la question de décision (« où passent les 31 h ? ») et non un sujet (« analyser le SAV »). Fixer le processus étudié, ce qu'est un cas, l'événement qui ouvre le compteur et celui qui l'arrête. Sans ces quatre définitions, deux analystes obtiendront deux délais.

### 2. Mesurer : construire le journal d'événements

Trois colonnes suffisent pour commencer : **identifiant du cas, activité, horodatage**. Ajouter l'équipe ou le rôle, puis les attributs qui serviront à segmenter : motif, segment de clientèle, canal. Extraire 6 à 12 mois.

Contrôler la qualité avant toute analyse.

| Défaut fréquent | Effet | Parade |
| --- | --- | --- |
| L'horodatage marque un changement de statut, pas le travail | Le temps « en cours » surestime le temps travaillé | Recaler par un chronométrage d'observation |
| Cas ouverts avant la période ou non clos à la fin | Délais tronqués | Ne garder que les cas complets |
| Activités faites hors application | Parcours incomplets | Les lister, les mesurer à part |
| Doublons, cas fusionnés ou rouverts sous un autre numéro | Volumes et boucles faux | Règle de rapprochement écrite |

Pseudonymiser les personnes dès l'extraction, et faire valider le traitement par le DPO.

### 3. Analyser : trois lectures

| Lecture | Question | Ce qu'on en tire |
| --- | --- | --- |
| Découverte | Quels parcours existent, à quelle fréquence ? | Les quelques variantes qui portent l'essentiel du volume, et la longue traîne des exceptions |
| Performance | Où le temps s'accumule-t-il ? | L'attente à chaque transition, en médiane et au 90e centile ; les goulots |
| Conformité | Où le réel s'écarte-t-il du prescrit ? | Étapes sautées, boucles de reprise, contournements |

Croiser ensuite avec les attributs : un goulot qui ne touche qu'un motif n'appelle pas la même réponse qu'un goulot général. Confronter enfin aux entretiens et à l'observation : les traces disent où, rarement pourquoi. Pour le pourquoi, passer à l'[analyse des causes racines](/frameworks/analyse-causes-racines).

### 4. Améliorer : rendre un verdict, pas un schéma

Trier la valeur de chaque étape avec la [carte de flux de valeur](/frameworks/value-stream-mapping), puis rendre un verdict par segment avec la [grille de décision](/frameworks/eliminer-automatiser-agentifier). L'amélioration elle-même relève de la [réinvention à base zéro](/frameworks/reinvention-zero-base).

### 5. Contrôler : garder le même instrument

Exiger du système cible qu'il émette le même journal, enrichi des décisions des agents : c'est l'objet du [fil numérique](/frameworks/fil-numerique). Rejouer les trois lectures à échéance fixe et inscrire les seuils dans le [plan de contrôle](/templates/plan-de-controle-processus). Une variante nouvelle en production est un signal : soit une exception oubliée, soit un contournement.

### 6. Commencer sans outil spécialisé

Un entrepôt de données, des requêtes et un carnet d'analyse suffisent pour les variantes et les délais. Un outil dédié accélère l'exploration, il ne conditionne pas le diagnostic. Ne jamais suspendre la phase à l'achat d'une licence.

### Ce que le build en reçoit

| Résultat de l'analyse | Usage côté build |
| --- | --- |
| Variantes et leurs parts | Voies du processus cible et dimensionnement de chacune |
| Cas réels classés par variante | Plan de tirage du golden set, exceptions comprises |
| Délais et taux de reprise par étape | Référence signée, puis critères de succès |
| Applications touchées à chaque étape | Liste des outils à exposer aux agents |
| Étapes classées gaspillage | Ce qu'on ne construira pas |

## Exemple

Chez Voxalis, le journal couvre 12 mois : 260 000 incidents techniques PME, reconstitués à partir des changements de statut du ticketing. Question posée au cadrage : où passent les 31 h du délai moyen ?

| Parcours reconstitué | Part des incidents | Délai moyen |
| --- | --- | --- |
| Résolu au premier contact | 54 % | Moins d'une heure |
| Transféré au N2, sans retour vers le client | 23 % | Environ 47 h |
| Transféré au N2, avec demande de complément au client | 23 % | Environ 84 h |

Trois constats sortent des traces, aucun des entretiens.

- **La moyenne ne décrit personne.** Les 46 % d'incidents transférés portent presque tout le délai, avec 66 h en moyenne.
- **Une boucle pèse plus du quart du délai.** L'aller-retour pour complément concerne 23 % des incidents et représente 8,5 h sur les 31 h : file du N1, attente du client, puis retour en file du N2.
- **La file du N2 ignore l'ancienneté.** Un ticket qui revient avec la réponse du client repart au rang d'un nouveau ticket : 13,5 h d'attente par ticket concerné.

Ce que les traces ne montraient pas, l'observation l'a montré : les vérifications du N1 sont refaites au N2, constaté sur 41 des 50 tickets transférés relus.

En production, le même instrument sert au contrôle. Le système SAV Augmenté émet un événement par changement d'état, avec la voie suivie : la part de chaque voie, les bascules d'une voie à l'autre et les réouvertures se lisent chaque semaine sans enquête.

## Pièges à éviter

- **Prendre un statut pour du travail.** « En cours chez le N2 » ne veut pas dire qu'on y travaille. Parade : recaler par l'observation et l'écrire dans les limites.
- **S'arrêter à la moyenne.** Deux populations opposées donnent une moyenne qui n'existe pas. Parade : segmenter avant de conclure.
- **Analyser sans question.** Un outil d'exploration produit des cartes sans fin. Parade : une question de décision par analyse.
- **Glisser vers la surveillance.** Un classement par conseiller détruit la confiance du terrain et expose le client. Parade : résultats agrégés, cadre validé par le DPO et présenté aux représentants du personnel.
- **Attendre un journal parfait.** Parade : commencer avec trois colonnes et documenter les défauts.

## Pour aller plus loin

- Guide : [socle transformation métier](/guides/socle-transformation-metier)
- Frameworks : [cartographier et mesurer le processus existant](/frameworks/cartographie-processus), [carte de flux de valeur](/frameworks/value-stream-mapping), [analyse 80/20](/frameworks/analyse-80-20), [mesurer l'impact réel](/frameworks/mesure-impact)
- Templates : [diagnostic de flux par les traces](/templates/diagnostic-flux-traces), [fiche processus existant](/templates/fiche-processus-existant), [plan de contrôle du processus](/templates/plan-de-controle-processus)
- Références : Wil van der Aalst pour le process mining (découverte, conformité, amélioration) ; le cycle DMAIC du Lean Six Sigma.
