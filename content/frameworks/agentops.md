---
id: agentops
titre: "AgentOps : exploiter des agents en production"
resume: "Les pratiques, les rôles et les outils pour opérer des agents au quotidien : tracer, mesurer, versionner, déployer progressivement, gérer les incidents et nourrir les évaluations."
categorie: industrialisation
phases: [industrialiser, perenniser]
origine: "Pratique émergente, dans la lignée du MLOps"
niveau: fondamental
tags: [exploitation, observabilite, incidents, run]
templates: [runbook-agent, checklist-mise-en-production]
lies: [evaluation-agents, eval-driven-development, finops-ia, architecture-reference]
---

## En bref

Un agent se dégrade sans qu'aucune ligne de code ne change : un modèle évolue, une base de connaissances vieillit, les demandes des clients dérivent. AgentOps est la discipline qui rend ces dérives visibles et corrigeables. Elle hérite du MLOps (versionner, surveiller, réentraîner) mais s'en écarte sur un point : l'objet à surveiller est un comportement en plusieurs étapes, pas une prédiction. Sans AgentOps, le pilote réussi devient en six mois un système que personne n'ose modifier.

## Quand l'utiliser

- Dès la fin du pilote, pour préparer le passage à l'échelle : les fondations (traçage, versions) se posent en [Construire](/methode/construire), l'organisation en [Industrialiser](/methode/industrialiser).
- Au moment du transfert : AgentOps est ce que l'équipe du client doit savoir faire seule.

Ne pas monter une équipe AgentOps pour un prototype : un ingénieur qui lit les traces suffit.

## Comment l'appliquer

### 1. Tracer chaque cas de bout en bout

Instrumenter avec OpenTelemetry : un identifiant de cas, puis un span par appel de modèle, appel d'outil, décision d'escalade. Conserver les entrées, sorties, versions et coûts. Critère : n'importe quel cas des 30 derniers jours se rejoue et s'explique en moins de dix minutes.

### 2. Tenir quatre tableaux de bord

| Axe | Indicateurs | Seuil d'alerte (à calibrer) |
| --- | --- | --- |
| Qualité | Score des evals en ligne, taux de réouverture, désaccords du contrôle qualité | Baisse de plus de 2 points sur 7 jours |
| Coût | Coût par cas, tokens par cas, part du cache | Dépassement du budget par cas |
| Latence | Délai par étape et de bout en bout | Percentile 95 au-delà du niveau de service |
| Escalades | Taux d'escalade par motif, reprises en main humaines | Écart de plus de 20 % à la moyenne |

### 3. Versionner tout ce qui change le comportement

Prompts, définitions d'outils, configuration des modèles, sources de connaissance : chaque combinaison porte une version unique inscrite dans les traces. Aucune modification sans passage du golden set.

### 4. Déployer progressivement

Mode fantôme, puis petite part du trafic, puis généralisation, avec un critère de retour arrière écrit à l'avance. Un changement de modèle se traite comme une mise en production.

### 5. Gérer les incidents

Niveaux de gravité définis, coupe-circuit par agent et par outil, astreinte, post-mortem sans recherche de coupable. Le [runbook](/templates/runbook-agent) décrit les gestes : rétrograder un niveau d'autonomie, désactiver un outil, basculer sur le modèle de secours.

### 6. Boucler vers le golden set

Chaque incident, chaque désaccord du contrôle qualité devient un cas annoté ajouté au golden set. C'est ce qui fait progresser le système au lieu de le figer.

### 7. Nommer les rôles

| Rôle | Responsabilité |
| --- | --- |
| Responsable AgentOps | Priorise, arbitre les mises en production, tient le budget |
| Ingénieur agents | Prompts, outils, evals, corrections |
| Analyste qualité | Lit les traces, annote, enrichit le golden set |
| Propriétaire d'agent (métier) | Valide les changements de comportement |

## Exemple

Voxalis a créé en phase Industrialiser une équipe AgentOps de 3 ETP (0,35 M€ par an au business case) : un responsable, un ingénieur agents, un analyste qualité. L'Agent Qualité contrôle chaque cas clos et alimente les evals. Les deux incidents du pilote (messages envoyés en double, corrigés en S24) ont produit deux cas de non-régression et une règle d'idempotence sur `client.envoyer_message`. Le critère de transfert en S39 : l'équipe livre seule une nouvelle version de l'Agent Diagnostic, golden set de 600 cas et 120 cas adverses à l'appui.

## Pièges à éviter

- **Surveiller l'infrastructure, pas le comportement.** Un agent peut répondre vite et faux. Parade : evals en ligne sur un échantillon quotidien.
- **Modifier un prompt en production « juste pour corriger ».** Parade : toute modification passe par version, golden set et déploiement progressif.
- **Laisser le golden set se figer.** Il ne reflète plus le trafic réel au bout de quelques mois. Parade : boucle de retour systématique depuis les incidents.
- **Confier AgentOps aux seuls FDE.** C'est la recette de la [dépendance](/savoir/dependance-fde). Parade : équipe client en binôme dès le pilote.

## Pour aller plus loin

- Frameworks : [évaluation des agents](/frameworks/evaluation-agents), [eval-driven development](/frameworks/eval-driven-development), [FinOps de l'IA](/frameworks/finops-ia), [gouvernance de l'IA](/frameworks/gouvernance-ia)
- Templates : [runbook agent](/templates/runbook-agent), [checklist de mise en production](/templates/checklist-mise-en-production)
- Guide : [passer en production](/guides/passer-en-production)
- Références : conventions sémantiques OpenTelemetry pour l'IA générative ; pratiques MLOps.
