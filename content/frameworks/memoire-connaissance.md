---
id: memoire-connaissance
titre: "Mémoire et connaissance"
resume: "Les types de mémoire d'un agent, la chaîne de recherche documentaire (indexation, découpage, recherche hybride, reclassement) et ce qui décide vraiment de sa qualité : une base juste, fraîche et bien gardée."
categorie: agents
phases: [diagnostiquer, concevoir]
origine: "Maison"
niveau: fondamental
tags: [connaissance, recherche-documentaire, memoire, donnees]
templates: [revue-donnees-si, fiche-agent]
lies: [context-engineering, anatomie-agent, evaluation-agents, securite-agents]
---

## En bref

Un agent ne sait que ce qu'on lui donne. Sa mémoire se décide : ce qu'il garde pendant une tâche, entre les tâches, et ce qu'il va chercher dans une base de connaissance. La recherche documentaire (souvent appelée RAG, Retrieval-Augmented Generation) est une chaîne d'ingénierie, pas une case à cocher. Mais aucune chaîne ne compense une base fausse : **un article obsolète bien retrouvé produit une réponse fausse et convaincante.**

Pour un FDE, la qualité de la connaissance se mesure dès le diagnostic. Elle est souvent le vrai chemin critique du projet.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), pour auditer la base documentaire du client : volume, fraîcheur, propriétaires, droits.
- En phase [Concevoir](/methode/concevoir), pour spécifier la section « connaissances et contexte » de chaque [fiche agent](/templates/fiche-agent).
- Quand un agent répond juste sur la forme mais faux sur le fond : la cause est d'abord dans la base ou la récupération.

## Comment l'appliquer

### 1. Choisir les mémoires utiles, et seulement elles

| Type | Contenu | Durée | Risque principal |
| --- | --- | --- | --- |
| **Travail** | Contexte de l'étape en cours | Une étape | Saturation |
| **Tâche** | Vérifications faites, hypothèses, décisions | La durée du cas | Perte lors d'une compaction |
| **Épisodique** | Cas passés similaires et leur issue | Longue | Reproduire une erreur passée |
| **Sémantique** | Faits durables sur un client ou un équipement | Longue | Faits périmés, données personnelles conservées sans base légale |
| **Documentaire** | Procédures, référentiels, politiques | Celle de la base | Obsolescence |

Règle : pas de mémoire longue sans propriétaire, sans durée de conservation et sans validation du DPO.

### 2. Construire la chaîne de récupération

1. **Indexer avec des métadonnées** : produit, motif, date de validation, propriétaire, niveau de confidentialité. Sans métadonnées, pas de filtre.
2. **Découper selon la structure** : une procédure, une section, un tableau entier. Un découpage à taille fixe coupe les procédures en leur milieu.
3. **Rechercher en hybride** : la recherche lexicale retrouve les codes d'erreur et les références d'équipement, la recherche vectorielle les formulations voisines. Combiner les deux.
4. **Filtrer, puis reclasser** : appliquer les filtres de métadonnées (fraîcheur, produit, droits) avant le reclassement, puis ne garder que les meilleurs passages.
5. **Citer** : chaque passage renvoyé porte son identifiant, pour que la réponse le cite et que l'erreur soit traçable.

### 3. Garder la base juste

Un propriétaire par article, une date de validation, un cycle de revue. Les articles non revus sortent de l'index, ils ne restent pas « au cas où ». Les retours des agents (article contredit par les faits, article manquant) alimentent la revue.

### 4. Respecter les droits

Les droits d'accès s'appliquent au moment de la récupération, avec l'identité de l'utilisateur ou du cas. Un agent ne doit jamais retrouver un document que la personne servie n'aurait pas le droit de lire.

### 5. Évaluer la récupération séparément

Constituer un jeu de requêtes réelles avec les passages attendus, annotés par les experts. Mesurer le rappel (le bon passage est-il parmi les premiers résultats ?) et la précision. Séparer toujours l'erreur de récupération de l'erreur de génération : elles ne se corrigent pas au même endroit.

## Exemple

Le diagnostic de Voxalis a révélé une base de 2 300 articles, dont 35 % obsolètes, soit environ 800 articles qui décrivaient des offres retirées, des équipements remplacés ou des procédures abandonnées. Brancher un agent sur cette base aurait industrialisé l'erreur.

Décisions prises avant la construction :

- **Priorisation par la valeur.** Les articles couvrant les 12 motifs récurrents (58 % des incidents) ont été revus en premier par les deux experts N2 détachés.
- **Filtre de fraîcheur.** `kb.rechercher` ne renvoie que les articles validés depuis moins de 12 mois ; le reste est hors index.
- **Métadonnées obligatoires.** Motif, produit, propriétaire et date de validation, sans quoi un article n'est pas indexé.
- **Recherche hybride.** Indispensable pour les références d'équipements et les codes d'alarme cités dans les tickets.
- **Boucle d'amélioration.** L'Agent Qualité signale les articles contredits par les cas clos ; leur mise à jour reste une décision humaine.
- **Mémoire bornée.** L'Agent Diagnostic n'a aucune mémoire entre les cas ; l'historique client passe par `crm.lire_ticket`, soumis aux droits.

## Pièges à éviter

- **Indexer toute la base d'un coup.** Parade : nettoyer d'abord le périmètre qui porte la valeur.
- **Régler la récupération sur des questions inventées.** Parade : requêtes tirées de vrais tickets.
- **Mémoire longue par défaut.** Parade : chaque mémoire justifiée, bornée dans le temps, validée par le DPO.
- **Droits appliqués après la génération.** L'information a déjà fuité dans la réponse. Parade : filtrage avant récupération.
- **Corriger le prompt quand la base est fausse.** Parade : mesurer la récupération à part.

## Pour aller plus loin

- Frameworks : [context engineering](/frameworks/context-engineering), [évaluer un agent](/frameworks/evaluation-agents), [sécurité des agents](/frameworks/securite-agents)
- Templates : [revue données et SI](/templates/revue-donnees-si), [fiche agent](/templates/fiche-agent)
- Cas : [la mission Voxalis](/guides/cas-fil-rouge)
