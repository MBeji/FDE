---
id: usine-agents
titre: "L'usine à agents"
resume: "Passer de quelques agents artisanaux à une capacité industrielle : composants réutilisables, chemin balisé, catalogue, équipe plateforme et critères de mise en service."
categorie: industrialisation
phases: [industrialiser, perenniser]
origine: "Maison"
niveau: avance
tags: [plateforme, passage-a-echelle, reutilisation]
templates: [registre-agents]
lies: [architecture-reference, agentops, gouvernance-ia, modele-operationnel-cible]
---

## En bref

Le premier agent coûte cher parce que tout est à construire. Le dixième ne devrait coûter qu'une fraction, à condition que ce qui a été construit soit réutilisable. L'usine à agents est le dispositif qui rend cela possible : des composants communs, un chemin balisé pour passer de l'idée à la production, un catalogue de ce qui existe, une équipe qui l'entretient et des critères de mise en service identiques pour tous.

Notre position est nette : **l'usine se construit après deux ou trois agents en production, jamais avant.** C'est en industrialisant les premiers qu'on apprend ce qui mérite d'être commun.

## Quand l'utiliser

- Quand deux ou trois agents tournent en production et que d'autres équipes en demandent.
- Quand on constate la même brique reconstruite deux fois (connecteur, évaluateur, tableau de bord).
- En [Pérenniser](/methode/perenniser), pour que le client multiplie les agents sans les FDE.

Ne pas l'utiliser avant le premier agent en production : on fabrique alors une plateforme sans usage, l'[anti-pattern](/savoir/plateforme-avant-usages) le plus coûteux du passage à l'échelle.

## Comment l'appliquer

### 1. Inventorier ce qui s'est répété

Revoir les agents existants et lister les briques construites plusieurs fois ou appelées à l'être. Ne mutualiser que ce qui a déjà servi au moins deux fois.

| Composant réutilisable | Contenu |
| --- | --- |
| Outils | Serveurs MCP vers les systèmes du client, avec droits et journalisation |
| Connaissances | Indexation, recherche, règles de fraîcheur des sources |
| Évaluation | Harnais d'evals, évaluateurs types, gestion des golden sets |
| Observabilité | Traçage, tableaux de bord qualité, coût, latence, escalades |
| Sécurité | Filtres d'entrée et de sortie, jeux de cas adverses de base |
| Expérience | Composants du poste de supervision : validation, reprise en main |

### 2. Tracer le chemin balisé

Un parcours standard, outillé, que toute équipe peut suivre : modèle de projet, golden set obligatoire, analyse de risques, mode fantôme, critères de mise en service. Le chemin balisé n'interdit pas d'en sortir ; il rend le bon chemin plus facile que le mauvais.

### 3. Ouvrir le catalogue

Publier ce qui existe : agents en production, outils disponibles, sources de connaissance, avec leur propriétaire et leur niveau de maturité. Le catalogue s'appuie sur le [registre des agents](/templates/registre-agents).

### 4. Constituer l'équipe plateforme

Une petite équipe produit qui traite les équipes métier comme ses clients : elle maintient les composants, accompagne les nouveaux agents, mesure le temps de mise en production. Elle ne construit pas les agents à la place des métiers.

### 5. Fixer les critères de mise en service

Identiques pour tous : seuils d'evals atteints, analyse de risques validée, propriétaire d'agent nommé, runbook écrit, coût par cas estimé, inscription au registre. Proportionner la revue au risque (voir [gouvernance de l'IA](/frameworks/gouvernance-ia)).

### 6. Mesurer l'usine

Délai de l'idée à la production, part des composants réutilisés, coût de construction d'un agent, nombre d'agents par équipe plateforme.

## Exemple

Voxalis n'a pas construit d'usine pendant la mission : elle aurait précédé les usages. Au transfert en S39, six agents tournent (l'Orchestrateur et cinq spécialisés). La revue de capitalisation recense trois candidats à la mutualisation : la passerelle MCP et ses neuf outils, le harnais d'evals, le poste de supervision. Le comité de gouvernance IA fixe alors la règle : le deuxième domaine (par exemple la facturation PME) réutilisera ces trois briques et suivra le même chemin balisé. L'équipe AgentOps de 3 ETP constitue le noyau de la future équipe plateforme.

## Pièges à éviter

- **Construire l'usine d'abord.** Parade : deux ou trois agents en production avant toute mutualisation.
- **Faire de l'équipe plateforme un goulet.** Si elle construit chaque agent, elle devient la file d'attente. Parade : elle outille, les équipes produits construisent.
- **Un chemin balisé trop lourd.** Les équipes le contournent. Parade : revue proportionnée au risque, et un chemin rapide pour les agents en lecture seule.
- **Un catalogue que personne ne tient.** Parade : l'inscription au registre conditionne la mise en service.

## Pour aller plus loin

- Frameworks : [architecture de référence](/frameworks/architecture-reference), [AgentOps](/frameworks/agentops), [gouvernance de l'IA](/frameworks/gouvernance-ia), [modèle opérationnel cible](/frameworks/modele-operationnel-cible)
- Template : [registre des agents](/templates/registre-agents)
- Savoir terrain : [plateforme avant les usages](/savoir/plateforme-avant-usages), [lighthouse d'abord](/savoir/lighthouse-d-abord)
- Référence : pratiques d'ingénierie de plateforme et de « chemin balisé » issues du génie logiciel.
