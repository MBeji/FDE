---
id: context-engineering
titre: "Context engineering"
resume: "Traiter le contexte d'un agent comme une ressource rare : décider ce qu'il voit, dans quel ordre et à quel moment, et le tester comme un composant à part entière."
categorie: agents
phases: [concevoir, construire]
origine: "Pratique émergente de l'ingénierie des agents"
niveau: fondamental
tags: [contexte, conception, prompt]
templates: [system-prompt-agent]
lies: [anatomie-agent, memoire-connaissance, conception-outils, topologies-multi-agents]
---

## En bref

À chaque étape, un agent ne décide qu'à partir de ce qui se trouve dans son contexte : instructions, descriptions d'outils, historique, résultats d'outils, documents récupérés. Cette fenêtre est finie, chaque jeton a un coût et une latence, et la capacité du modèle à exploiter une information baisse quand elle est noyée dans un contexte long. Le context engineering consiste à **donner à l'agent le plus petit ensemble d'informations qui lui permet de bien décider**, au moment où il en a besoin.

C'est l'élargissement du prompt engineering à tout ce qui entre dans la fenêtre, pas seulement au system prompt. Sur un agent qui fait de longues boucles, c'est souvent là que se gagne la qualité.

## Quand l'utiliser

- En phase [Concevoir](/methode/concevoir), pour décider de l'assemblage du contexte de chaque agent.
- En phase [Construire](/methode/construire), dès qu'un agent ignore une information pourtant disponible, se répète, perd le fil sur les cas longs ou voit son coût par cas grimper.

Ne pas l'utiliser pour compenser un mauvais outil : un résultat d'outil verbeux se corrige dans l'outil, pas par compaction.

## Comment l'appliquer

### 1. Inventorier et budgéter

Lister tout ce qui entre dans le contexte, mesurer sa taille sur des cas réels, et fixer un budget par catégorie. La question pour chaque élément : **la décision change-t-elle si on l'enlève ?** Si non, l'enlever.

### 2. Ordonner

| Position | Contenu | Raison |
| --- | --- | --- |
| Début, stable | Rôle, mission, règles métier, format de sortie | Identique d'un cas à l'autre, réutilisable en cache |
| Puis | Descriptions des outils, quelques exemples canoniques | Fixent le comportement attendu |
| Puis | État structuré de la tâche | Résumé à jour de ce qui est établi et de ce qui manque |
| Fin | Données du cas, résultats récents, demande en cours | Ce qui varie et sur quoi porte la décision |

Placer le contenu fourni par un tiers (texte client, document) dans des blocs explicitement délimités et marqués comme données.

### 3. Récupérer juste-à-temps

Plutôt que précharger, donner à l'agent des identifiants et des outils pour aller chercher : une référence d'article plutôt que l'article, un identifiant d'équipement plutôt que tout le parc. L'agent charge ce dont il a besoin quand il en a besoin.

### 4. Compacter et prendre des notes

Sur les boucles longues, résumer l'historique au-delà d'un seuil en conservant les décisions, les preuves et les questions ouvertes, et en abandonnant les résultats bruts déjà exploités. Mieux encore : faire tenir à l'agent des **notes structurées** hors du contexte (état du cas, hypothèses testées), relues à chaque étape.

### 5. Isoler par sous-agents

Une exploration coûteuse en contexte (recherche dans un long historique) peut être confiée à un sous-agent qui ne renvoie qu'une synthèse condensée. Le contexte de l'agent principal reste propre.

### 6. Tester

- **Ablation** : retirer un bloc et mesurer l'effet sur le golden set.
- **Cas longs** : constituer un sous-jeu des cas aux trajectoires les plus longues, où la dégradation apparaît.
- **Information enfouie** : vérifier qu'un fait décisif placé au milieu d'un long résultat est bien exploité.
- **Suivi** : taille du contexte et coût par étape, dans les traces.

## Exemple

L'Agent Diagnostic de SAV Augmenté illustre les choix faits par Léo et Inès.

- **Projection, pas historique.** L'Orchestrateur transmet le ticket qualifié en JSON (client, service, motif, description, urgence), jamais les échanges complets avec le client.
- **Récupération juste-à-temps.** La base compte 2 300 articles ; l'agent n'en voit que ce que renvoie `kb.rechercher`, limité aux articles validés depuis moins de 12 mois.
- **Résultats d'outils condensés.** `supervision.etat_service` renvoie une synthèse (état, alarmes actives pertinentes, horodatage) plutôt que le journal brut des alarmes.
- **État structuré.** À chaque étape, l'agent met à jour une liste des vérifications effectuées et de leurs résultats ; c'est elle, et non la conversation, qui alimente le diagnostic final.
- **Sous-agent pour l'expert N2.** L'assistant de l'expert délègue la recherche dans l'historique du client à des sous-agents qui ne renvoient que les faits utiles.

Résultat : 0,12 € par diagnostic constaté pendant le pilote, sous le plafond de 0,20 € fixé dans la fiche agent.

## Pièges à éviter

- **Tout charger « au cas où ».** Le contexte grossit, la qualité baisse et le coût monte. Parade : le test d'ablation tranche.
- **Compacter en perdant les preuves.** Le diagnostic final ne peut plus citer ses sources. Parade : la compaction conserve toujours décisions et preuves.
- **Mélanger instructions et données.** Le texte du client devient une instruction. Parade : blocs délimités, marqués comme données.
- **Optimiser sur des cas courts.** Parade : un sous-jeu dédié aux trajectoires longues.
- **Instructions qui varient d'un cas à l'autre en tête de contexte.** Parade : le stable en tête, le variable en fin.

## Pour aller plus loin

- Frameworks : [mémoire et connaissance](/frameworks/memoire-connaissance), [anatomie d'un agent](/frameworks/anatomie-agent), [concevoir les outils](/frameworks/conception-outils)
- Template : [system prompt d'agent](/templates/system-prompt-agent)
- Guide : [écrire un system prompt](/guides/ecrire-system-prompt)
