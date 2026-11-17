---
id: fil-numerique
titre: "Fil numérique : continuité des données et traçabilité des décisions"
resume: "Faire suivre à chaque cas un identifiant unique d'un système à l'autre, et enregistrer chaque décision, humaine ou d'agent, avec ce qui l'a fondée. Le même fil sert à exploiter, à mesurer et à apprendre."
categorie: industrialisation
phases: [diagnostiquer, concevoir, industrialiser]
origine: "Maison, d'après le digital core (Accenture) et le digital thread de l'industrie"
niveau: avance
tags: [donnees, tracabilite, integration, observabilite, bpm]
templates: [revue-donnees-si, fiche-conception-processus-agentique]
lies: [architecture-reference, conception-outils, agentops, process-mining-dmaic]
---

## En bref

Un processus traverse plusieurs applications, et à chaque frontière l'information se perd : on ressaisit, on recopie, on redemande. Le fil numérique, ou digital thread, est la continuité qui l'empêche. Un cas porte le même identifiant partout, et chaque décision laisse une trace reliée à ce cas. La notion vient de l'industrie, où elle relie un produit à ses données tout au long de sa vie. Accenture en fait, avec son digital core (plateformes, socle de données et d'IA, fondation technique), la condition de toute réinvention.

Les agents rendent le fil plus nécessaire encore. Un agent décide vite et souvent : sans trace, personne ne peut expliquer un résultat, mesurer un indicateur ni corriger une erreur. Pour un FDE, le fil se conçoit **avec** le processus cible, pas après.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), pour repérer où le fil se rompt aujourd'hui.
- En phase [Concevoir](/methode/concevoir), pour spécifier l'identifiant du cas, le journal des décisions et les outils exposés aux agents.
- En phase [Industrialiser](/methode/industrialiser), pour brancher les indicateurs et le contrôle sur le fil.

Ne pas en faire un programme d'urbanisation du système d'information : le fil se tire le long d'un processus, celui de la mission. Ne pas attendre un socle de données complet pour commencer : un identifiant commun et un journal suffisent au premier pilote.

## Comment l'appliquer

### 1. Relever les ruptures du fil existant

Suivre un cas réel d'une application à l'autre et noter chaque rupture : ressaisie, copier-coller, export, message libre, information redemandée au client. Les gaspillages « transport » et « mouvements » de la [carte de flux de valeur](/frameworks/value-stream-mapping) en donnent la liste.

### 2. Choisir l'objet pivot et son identifiant

Un seul objet métier porte le cas de bout en bout : un ticket, une commande, un dossier. Son identifiant est repris dans chaque application et dans chaque trace. Quand deux applications ont chacune le leur, une table de correspondance tenue par le système vaut mieux que deux migrations.

### 3. Spécifier le journal des décisions

Chaque décision ou action du processus cible écrit une ligne.

| Champ | Contenu |
| --- | --- |
| Identifiant du cas | L'objet pivot |
| Étape | L'élément du [modèle de processus](/frameworks/bpmn-agentique) concerné |
| Exécutant | Rôle humain, agent ou service |
| Entrées | Les données consultées, par référence et non par copie |
| Décision ou action | Ce qui a été décidé ou fait |
| Fondement | La règle appliquée, ou la version du prompt, du modèle et des outils |
| Confiance et contrôles | Le niveau de confiance, le résultat des garde-fous |
| Validation humaine | Qui a approuvé, modifié ou refusé, et quand |
| Horodatage | Début et fin |

Masquer les données personnelles selon les règles fixées avec le DPO. Pour les traces techniques, s'appuyer sur un standard ouvert comme OpenTelemetry.

### 4. Exposer les applications par des outils, pas par des écrans

Le fil casse dès qu'un agent ou un humain doit lire un écran pour recopier une valeur. Chaque application du processus offre une interface programmable : c'est l'objet de la [conception des outils](/frameworks/conception-outils) et des [protocoles d'interopérabilité](/frameworks/protocoles-mcp-a2a). Les applications sans interface sont les premiers chantiers de la [revue des données et du SI](/templates/revue-donnees-si).

### 5. Faire émettre des événements au processus cible

Chaque changement d'état du cas produit un événement daté : pris en charge, voie choisie, action exécutée, approbation demandée, clos. Ce journal est celui que le [process mining](/frameworks/process-mining-dmaic) a lu au diagnostic. S'il existe dès la conception, le contrôle en production ne coûte presque rien.

### 6. Brancher les trois usages

| Usage | Ce que le fil permet |
| --- | --- |
| Exploiter | Reprendre un cas avec tout son dossier ; expliquer une décision au client, au comité ou au régulateur |
| Mesurer | Calculer les indicateurs du [plan de contrôle](/templates/plan-de-controle-processus) depuis les traces, sans tableau tenu à la main |
| Apprendre | Verser chaque cas clos et contrôlé dans les évaluations ; rejouer l'analyse des parcours |

### 7. Vérifier le socle

Lire le socle du client avec les trois composantes du digital core.

- **Plateformes** : les applications qui portent le processus sont-elles accessibles par programme, avec un environnement de test ?
- **Données et IA** : les données de référence ont-elles un propriétaire ? La base de connaissances est-elle fiable ?
- **Fondation** : identités, droits, intégration, observabilité.

Les manques vont au plan de remédiation de la revue des données et du SI.

## Exemple

Chez Voxalis, six applications portent le traitement d'un incident. Quatre exposent des API, aucune n'émet d'événements. Le diagnostic relève quatre ruptures du fil.

| Rupture constatée | Conséquence |
| --- | --- |
| Le résultat du test de ligne est recopié à la main dans le ticket | Erreurs, et un diagnostic qui ne se relit pas |
| Le transfert au N2 se fait par un commentaire libre | Les vérifications du N1 sont refaites : 41 des 50 tickets relus |
| La supervision détecte un incident collectif, le ticketing l'ignore | Chaque conseiller le redécouvre seul |
| Les rappels des clients ne sont pas reliés aux tickets | Leur volume reste inconnu |

Dans la cible, le ticket est l'objet pivot. L'orchestration du cas tient un seul état, visible de tous. Les agents accèdent aux applications par neuf outils, dont trois seulement écrivent. Trois interfaces manquaient et ont été construites : lancer un test de ligne par programme, rechercher dans une base de connaissances fiable, exécuter une action à distance dans un cadre contrôlé.

Chaque action de l'agent de résolution écrit une ligne au journal : le cas, l'action du catalogue, le diagnostic qui la fonde, la version des règles, le résultat de la vérification du rétablissement. Les données d'identité du contact y sont masquées, selon les règles arrêtées avec Élise Martin.

Le même fil sert trois fois. Le superviseur de cas reprend un dossier sans rien redemander. La part de résolution sans intervention humaine se lit dans les traces. Chaque cas clos est contrôlé, puis versé aux évaluations quand il révèle un écart.

## Pièges à éviter

- **Concevoir le fil après le pilote.** Les indicateurs se reconstituent alors à la main, et mal. Parade : identifiant et journal dans la fiche de conception, avant le build.
- **Tracer le modèle, pas la décision.** Des traces techniques sans règle ni validation n'expliquent rien à un métier. Parade : le champ « fondement » est obligatoire.
- **Copier les données dans le journal.** Parade : des références, et le masquage décidé avec le DPO.
- **Lancer un chantier de données sans fin.** Parade : le fil d'un processus, puis du suivant.
- **Laisser une application hors du fil.** Elle redevient un écran à recopier. Parade : la traiter comme un prérequis du processus cible.

## Pour aller plus loin

- Guide : [socle transformation métier](/guides/socle-transformation-metier)
- Frameworks : [architecture de référence](/frameworks/architecture-reference), [concevoir les outils d'un agent](/frameworks/conception-outils), [AgentOps](/frameworks/agentops), [process mining et DMAIC augmenté](/frameworks/process-mining-dmaic)
- Templates : [revue de préparation des données et du SI](/templates/revue-donnees-si), [fiche de conception de processus agentique](/templates/fiche-conception-processus-agentique)
- Références : Accenture, publications sur le digital core et sur la continuité numérique (digital thread) ; OpenTelemetry pour les traces.
