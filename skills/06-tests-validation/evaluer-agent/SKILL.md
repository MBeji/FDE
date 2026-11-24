---
name: evaluer-agent
description: "Évalue un agent contre son golden set : résultat, trajectoire et composants, notation par code, par évaluateur calibré et par experts, analyse d'erreurs par catégorie, décision par rapport aux seuils et rapport d'évaluation. À utiliser à chaque itération de construction, avant le pilote, avant tout relèvement d'autonomie et à intervalle régulier en production."
metadata:
  titre: "Évaluer un agent"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: evaluation-agents
  role: build
  domaine: ia-agents
  phases: [construire]
  technologies: [llm-agents, tests-evals]
  cas-usage: [assistant, agent, multi-agents]
  tags: [evaluation, golden-set, analyse-erreurs, seuils, rapport-evaluation]
  proprietaire: build
  diffusion: client
  entrees: ["Plan d'évaluation et golden set versionné", "Version de l'agent à évaluer (prompt, outils, modèle)", "Experts métier pour la revue d'échantillons"]
  sorties: ["Rapport d'évaluation", "Analyse d'erreurs priorisée", "Recommandation par rapport aux seuils"]
  prerequis: [definir-strategie-tests, ecrire-system-prompt]
---

## Mission

Dire, preuves à l'appui, si un agent fait bien son travail, où il échoue et pourquoi. Le skill guide l'équipe technique pour mener une évaluation complète et en tirer une décision. Une démonstration réussie montre qu'un agent peut marcher ; seule l'évaluation dit à quelle fréquence il marche.

## Quand l'utiliser

- À chaque itération sur un prompt, un outil ou un modèle.
- Avant le pilote, avant la mise en production, avant tout relèvement d'autonomie.
- Périodiquement en production, sur un échantillon de cas réels.

Ne pas l'utiliser sans plan d'évaluation ni golden set : repasser par [Définir la stratégie de tests](/skills/definir-strategie-tests). Pour comparer deux versions, voir [Garantir la non-régression](/skills/tester-non-regression).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le plan d'évaluation : dimensions, méthodes de notation, seuils | Oui | S'arrêter. |
| Le golden set versionné, avec les résultats attendus | Oui | Le constituer avec le métier avant d'évaluer. |
| La version exacte évaluée : prompt, outils, modèle, paramètres | Oui | La figer et la noter : un résultat sans version ne se compare pas. |
| Les traces d'exécution de chaque cas | Oui pour la trajectoire | Activer la trace avant de lancer. |
| Des experts métier pour relire un échantillon | Non | Le signaler comme limite du rapport. |

## Procédure

1. **Vérifier le jeu.** Couvre-t-il les catégories de cas du processus, les cas difficiles, les cas où l'agent doit escalader ou refuser, les cas adverses ? Signaler les trous avant de mesurer.
2. **Exécuter** la version figée sur tout le jeu, traces activées. Répéter les cas à forte variabilité.
3. **Noter le résultat** de chaque cas. Par code quand le résultat se vérifie (valeur, format, action effectuée). Par un évaluateur fondé sur un modèle pour les réponses rédigées, avec une grille écrite et un calibrage préalable sur des annotations humaines. Par des experts sur un échantillon.
4. **Noter la trajectoire** : les bons outils ont-ils été appelés, dans un ordre sensé, sans étape inutile ni action interdite ? Un bon résultat obtenu par un mauvais chemin est une erreur en attente.
5. **Mesurer les composants** quand le résultat est mauvais : recherche d'information, choix de l'outil, paramètres, raisonnement, rédaction.
6. **Relever les indicateurs de service** : taux d'escalade, escalades à tort et escalades manquées, latence, coût par cas.
7. **Analyser les erreurs.** Lire les échecs un par un, les regrouper par cause, compter. Chaque catégorie reçoit une hypothèse de correction : spécification, données, outil, prompt, garde-fou.
8. **Faire relire un échantillon** par les experts métier, réussites comprises, pour vérifier que la notation dit vrai.
9. **Conclure contre les seuils** dimension par dimension, et recommander : continuer à itérer, passer à l'étape suivante, ou revoir le périmètre de l'agent.

## Livrable

Le [Rapport d'évaluation](/templates/rapport-evaluation) : version évaluée et jeu utilisé, résultats par dimension et par catégorie de cas contre les seuils, indicateurs de service, analyse d'erreurs priorisée avec les corrections proposées, limites de l'évaluation, recommandation. Les échecs y figurent, pas seulement les scores.

## Critères de qualité

- La version évaluée et la version du golden set sont identifiées.
- Les résultats sont donnés par catégorie de cas, pas seulement en moyenne.
- Tout évaluateur fondé sur un modèle est calibré contre des annotations humaines ([MLO-06](/standards#MLO-06)).
- Chaque catégorie d'erreur a un décompte, un exemple et une hypothèse de correction.
- Les escalades à tort et les escalades manquées sont mesurées séparément.
- Coût et latence par cas sont mesurés ([MLO-05](/standards#MLO-05)).

## Garde-fous

- La décision de passer au pilote, en production ou à un niveau d'autonomie supérieur est humaine : binôme et propriétaire métier, sur la base du rapport ([AGT-10](/standards#AGT-10)).
- Ne jamais ajuster le jeu, la grille ou les seuils après avoir vu les résultats pour améliorer le score.
- Aucun cas du golden set ne sert d'exemple dans un prompt ([MLO-04](/standards#MLO-04)).
- Les cas réels sont anonymisés ; les données d'évaluation restent dans l'environnement du client.

## Enchaînements

- **Amont** : [Définir la stratégie de tests](/skills/definir-strategie-tests), [Écrire le system prompt d'un agent](/skills/ecrire-system-prompt).
- **Aval** : [Conduire le pilote](/skills/conduire-pilote), [Améliorer en continu](/skills/ameliorer-en-continu).
- **Workflow** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment).
- **Ressources** : [Évaluer un agent](/frameworks/evaluation-agents), [Développement piloté par les évaluations](/frameworks/eval-driven-development), [Construire les évaluations d'un agent](/guides/construire-les-evals), [Plan d'évaluation](/templates/plan-evaluation), [La démo qui trompe](/savoir/demo-trompeuse).
