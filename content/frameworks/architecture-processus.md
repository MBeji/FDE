---
id: architecture-processus
titre: "Architecture de processus : situer le périmètre"
resume: "Ranger les processus du client par niveaux, du macro-processus à l'activité, avec le référentiel APQC comme langue commune. Sert à fixer un périmètre que personne ne conteste, à repérer les interfaces et à réutiliser d'un domaine à l'autre."
categorie: processus
phases: [cadrer, diagnostiquer, perenniser]
origine: "APQC (Process Classification Framework)"
niveau: fondamental
tags: [bpm, perimetre, cadrage, taxonomie]
templates: [charte-de-mission, diagnostic-flux-traces]
lies: [approche-par-domaine, chaine-de-valeur, cartographie-processus, mece]
---

## En bref

Avant de mesurer un processus, il faut savoir lequel. Une architecture de processus est la carte des processus d'une entreprise, rangés par niveaux : du macro-processus à l'activité. Le référentiel le plus répandu est le Process Classification Framework (PCF) de l'APQC : treize catégories au premier niveau, puis des groupes de processus, des processus, des activités et des tâches. Il existe en version inter-secteurs et en déclinaisons sectorielles.

Pour un FDE, la carte rend trois services. Elle fixe un périmètre que personne ne rediscutera au troisième COPIL. Elle donne une langue commune au métier, à la DSI et aux missions suivantes. Elle montre les interfaces, c'est-à-dire les endroits où un agent devra passer la main à un autre processus.

## Quand l'utiliser

- En phase [Cadrer](/methode/cadrer), pour écrire le périmètre de la [charte de mission](/templates/charte-de-mission).
- En phase [Diagnostiquer](/methode/diagnostiquer), pour choisir les processus à mesurer et ceux qu'on laisse de côté.
- En phase [Pérenniser](/methode/perenniser), pour choisir le domaine suivant et repérer ce qui se réutilise.

Ne pas cartographier toute l'entreprise : la carte sert à situer, pas à inventorier. Ne pas imposer le vocabulaire du référentiel à un client qui a déjà le sien : garder ses mots et noter la correspondance. Ne pas lire la carte comme un flux : l'ordre des éléments d'un niveau ne dit rien de leur ordre d'exécution.

## Comment l'appliquer

### 1. Partir de ce qui existe

Demander la cartographie des processus du client : qualité, contrôle interne et audit en tiennent souvent une. À défaut, partir du PCF, dans sa version sectorielle si elle existe.

### 2. Situer le domaine sur quatre niveaux

| Niveau | Nom dans le PCF | Question | Ce que la mission en fait |
| --- | --- | --- | --- |
| L1 | Catégorie | Dans quelle grande fonction de l'entreprise sommes-nous ? | Le terrain du sponsor et du portefeuille |
| L2 | Groupe de processus | Quel ensemble cohérent, avec un responsable et un budget ? | Le périmètre de la charte : le domaine |
| L3 | Processus | Quel flux de bout en bout, d'un déclencheur à un résultat ? | L'unité de mesure et de réinvention : une fiche, un modèle, une référence |
| L4 | Activité | Quelle étape, tenue par un acteur ? | L'unité de verdict et de répartition entre humains et agents |

Le niveau suivant, la tâche, est le geste élémentaire : c'est la maille de la [décomposition des tâches](/frameworks/decomposition-taches) et des outils d'un agent.

### 3. Appliquer la règle des trois mailles

La mission **s'engage sur un L2, se mesure sur des L3, se construit sur des L4**. Un périmètre posé au niveau L1 est trop large pour prouver quoi que ce soit dans le délai d'une mission. Un périmètre posé directement au niveau L4 est un cas d'usage isolé, sans le flux qui lui donne sa valeur.

### 4. Borner chaque processus retenu

Pour chaque processus L3 du périmètre, écrire cinq lignes : l'événement qui le déclenche, le résultat qu'il produit, son propriétaire, les processus en amont et en aval, les applications qui le portent. Si personne ne répond du processus de bout en bout, le noter comme un risque : c'est le premier sujet de la [gouvernance des processus](/frameworks/gouvernance-processus).

### 5. Marquer les interfaces

Lister les points où le processus touche un autre processus ou une autre direction. Chaque interface est un passage de relais où des données et des décisions doivent traverser : elle se retrouvera dans les exceptions du processus cible et dans le [fil numérique](/frameworks/fil-numerique).

### 6. Écrire le périmètre et le garder

Reporter les quatre niveaux, les exclusions et les interfaces dans la charte. Au domaine suivant, repartir de la même carte : les activités de même nature (qualifier une demande, vérifier une pièce, informer un client) se retrouvent d'un processus à l'autre, et avec elles les agents et les outils déjà construits.

## Exemple

Chez Voxalis, la demande initiale parlait d'un chatbot pour « le SAV ». Située sur la carte, elle devient un périmètre.

| Niveau | Chez Voxalis | Dans la mission |
| --- | --- | --- |
| L1 | Gérer le service client (catégorie 6.0 du PCF inter-secteurs, libellé à vérifier dans la version en vigueur) | Le terrain de Claire Besson, sponsor |
| L2 | Assistance & SAV Entreprises | Périmètre de la charte : 420 000 tickets, 310 ETP, 17,2 M€ par an |
| L3 | Traitement d'un incident technique PME, du signalement au rétablissement confirmé | 260 000 incidents par an ; premier processus mesuré et reconstruit. Laissés pour plus tard : demandes de modification (23 % des tickets), réclamations et facturation (15 %) |
| L4 | Les neuf étapes de la [fiche processus](/templates/fiche-processus-existant), de l'ouverture du ticket à la clôture | Unité des verdicts et de la matrice humain-agent |

Quatre interfaces sont marquées dès le cadrage : la Direction Réseau (incidents collectifs, équipements partagés entre clients), le back-office (interventions sur site), le recouvrement (comptes suspendus), le commerce (gestes commerciaux). Toutes réapparaissent comme exceptions du processus cible. Aucune n'a été découverte en cours de pilote.

La carte a resservi au jalon G7 : le domaine suivant a été cherché parmi les processus voisins capables de réutiliser la qualification, la passerelle d'outils et la chaîne d'évaluation.

## Pièges à éviter

- **Nommer le périmètre par l'organigramme.** « Le service N2 » n'est pas un processus : le flux le traverse. Parade : nommer un déclencheur et un résultat.
- **Descendre trop bas trop tôt.** Détailler les tâches avant d'avoir choisi le processus fabrique des semaines de cartographie inutile. Parade : la règle des trois mailles.
- **Prendre la taxonomie pour un flux.** La carte dit ce qui existe, pas ce qui s'enchaîne. Parade : le flux se mesure par les [traces](/frameworks/process-mining-dmaic).
- **Oublier les interfaces.** Les incidents de production naissent aux frontières. Parade : une ligne par interface dans la charte, avec un interlocuteur nommé.
- **Plaquer le référentiel.** Un métier ne se reconnaît pas dans des libellés génériques. Parade : ses mots dans les livrables, la correspondance en annexe.

## Pour aller plus loin

- Guide : [socle transformation métier](/guides/socle-transformation-metier)
- Frameworks : [l'approche par domaine](/frameworks/approche-par-domaine), [analyse de la chaîne de valeur](/frameworks/chaine-de-valeur), [cartographier le processus existant](/frameworks/cartographie-processus), [gouvernance des processus](/frameworks/gouvernance-processus)
- Templates : [charte de mission](/templates/charte-de-mission), [diagnostic de flux par les traces](/templates/diagnostic-flux-traces)
- Référence : APQC, Process Classification Framework — la taxonomie en cinq niveaux, en version inter-secteurs et sectorielle.
