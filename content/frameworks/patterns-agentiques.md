---
id: patterns-agentiques
titre: "Patterns agentiques"
resume: "Les six patterns de composition des systèmes à base de modèles, du simple enchaînement à l'agent autonome, avec pour chacun quand l'utiliser et quand l'éviter."
categorie: agents
phases: [cibler, concevoir]
origine: "Anthropic, « Building Effective Agents »"
niveau: fondamental
tags: [architecture, workflow, conception]
templates: [fiche-agent, adr, dossier-architecture-multi-agents]
lies: [faut-il-un-agent, topologies-multi-agents, anatomie-agent, evaluation-agents]
---

## En bref

La plupart des systèmes qui fonctionnent en production ne sont pas des agents autonomes mais des compositions de briques simples. « Building Effective Agents » en distingue six : cinq **workflows**, où le code tient le plan, et l'**agent autonome**, où le modèle le tient. Connaître ces patterns permet de nommer précisément l'architecture d'une brique, de choisir le plus simple qui suffit, et de rendre le système évaluable étape par étape.

Pour un FDE, c'est le vocabulaire commun avec l'équipe d'ingénierie du client, et le meilleur antidote à « on va mettre un agent ».

## Quand l'utiliser

- En phase [Cibler](/methode/cibler), pour estimer la faisabilité d'un cas d'usage : un enchaînement ne coûte pas ce que coûte un agent.
- En phase [Concevoir](/methode/concevoir), brique par brique, une fois le barreau fixé avec [l'échelle des solutions](/frameworks/faut-il-un-agent).
- En revue d'architecture, pour démonter un système opaque en patterns identifiables.

Ne pas l'utiliser pour organiser plusieurs agents entre eux : c'est l'objet des [topologies multi-agents](/frameworks/topologies-multi-agents).

## Comment l'appliquer

### 1. Choisir le pattern de chaque brique

| Pattern | Principe | À utiliser quand | À éviter quand |
| --- | --- | --- | --- |
| **Enchaînement** | Une suite fixe d'appels, chacun traitant la sortie du précédent, avec des contrôles programmatiques entre étapes | La tâche se découpe en étapes stables ; on accepte un peu de latence pour plus de fiabilité | Les étapes dépendent du contenu ; la latence est critique |
| **Routage** | Un classement de l'entrée oriente vers un traitement spécialisé | Des catégories distinctes appellent des traitements différents, et le classement est fiable | Les catégories se recouvrent ; l'erreur de routage n'est pas rattrapable |
| **Parallélisation** | Sous-tâches indépendantes lancées en parallèle (sectionnement) ou même tâche lancée plusieurs fois (vote) | Sous-tâches réellement indépendantes ; décision sensible qui gagne à un consensus | Les sous-tâches dépendent l'une de l'autre ; le coût multiplié n'est pas justifié |
| **Orchestrateur-ouvriers** | Un modèle découpe dynamiquement la tâche, délègue, puis synthétise | Le nombre et la nature des sous-tâches ne sont pas connus à l'avance | Les sous-tâches sont prévisibles : un sectionnement suffit |
| **Évaluateur-optimiseur** | Un modèle produit, un autre critique selon des critères explicites, en boucle | Les critères de qualité sont formulables et une révision améliore réellement le résultat | Aucun critère clair ; une seule passe suffit déjà |
| **Agent autonome** | Le modèle choisit ses outils et ses étapes en boucle, jusqu'à une condition d'arrêt | Chemin imprévisible, nombre d'étapes variable, environnement interrogeable | Le chemin peut s'écrire ; les erreurs ne sont ni détectables ni réversibles |

### 2. Composer

Les patterns s'emboîtent : un routage qui oriente vers un enchaînement, un agent dont un outil est lui-même un sectionnement. Règle de composition : **chaque niveau d'emboîtement doit se justifier par une mesure**, et chaque brique doit pouvoir être évaluée isolément.

### 3. Placer les contrôles entre les étapes

Dans un enchaînement, le contrôle entre deux étapes (schéma, règle métier, seuil de confiance) est l'endroit le moins cher pour arrêter une erreur. Le spécifier dès la conception.

### 4. Documenter

Pour chaque brique : pattern retenu, pattern écarté, raison, signal qui ferait changer de pattern. Consigner dans un [ADR](/templates/adr).

## Exemple

SAV Augmenté n'est pas « un système d'agents » uniforme : chaque brique a son pattern.

| Brique | Pattern | Raison |
| --- | --- | --- |
| Qualification | Appel unique suivi d'un **routage** vers les trois voies (autonome, assistée, experte) | Catégories nettes, classement vérifiable sur 600 cas annotés, seuil d'exactitude de 95 % |
| Diagnostic | **Agent autonome** borné, avec **sectionnement** des premières vérifications (supervision, inventaire, incidents connus en parallèle) | L'ordre des vérifications suivantes dépend des premiers résultats |
| Résolution | **Agent autonome** sur le catalogue de remédiation, approbation humaine au-delà | Choix de l'action selon le diagnostic, nombre d'étapes variable |
| Communication | **Enchaînement** : lire l'état, choisir un gabarit, rédiger, contrôler, envoyer ; **évaluateur-optimiseur** sur le contrôle de conformité | Étapes stables ; critère de conformité explicite, seuil de 98 % |
| Assistant de l'expert N2 | **Orchestrateur-ouvriers** | Les recherches à mener dans l'historique et la base varient avec chaque dossier |
| Agent Qualité | **Évaluateur** hors ligne sur chaque cas clos | Critique a posteriori qui alimente les évaluations |

La tentation initiale de l'équipe Voxalis était un agent unique pour tout le flux. Seules deux briques sur six relèvent finalement de l'agent autonome.

## Pièges à éviter

- **Appeler « agent » tout ce qui appelle un modèle.** Parade : nommer le pattern exact de chaque brique dans la conception.
- **Router sans voie de repli.** Une erreur de routage envoie le cas dans le mauvais traitement. Parade : seuil de confiance en dessous duquel le cas part dans la voie la plus supervisée.
- **Boucler l'évaluateur-optimiseur sans fin.** Parade : nombre maximal d'itérations et sortie vers l'humain si le critère n'est pas atteint.
- **Paralléliser des tâches dépendantes.** Les résultats se contredisent et la synthèse invente. Parade : vérifier l'indépendance réelle avant de sectionner.
- **Empiler les patterns pour la démonstration.** Parade : chaque emboîtement doit améliorer un score mesuré sur le golden set.

## Pour aller plus loin

- Frameworks : [faut-il un agent ?](/frameworks/faut-il-un-agent), [topologies multi-agents](/frameworks/topologies-multi-agents), [anatomie d'un agent](/frameworks/anatomie-agent)
- Templates : [dossier d'architecture multi-agents](/templates/dossier-architecture-multi-agents), [ADR](/templates/adr)
- Savoir terrain : [l'agent partout](/savoir/agent-partout)
- Référence : Anthropic, « Building Effective Agents » — la typologie des six patterns et la distinction entre workflows et agents.
