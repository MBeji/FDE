---
name: automatiser-tests
description: "Automatise les tests et les évaluations dans le pipeline : tests déterministes rapides à chaque changement, évaluations d'agent déclenchées par tout changement de prompt, d'outil, de modèle ou de paramètre, seuils bloquants et rapports lisibles. À utiliser dès la première tranche verticale, puis à chaque nouveau niveau de test."
metadata:
  titre: "Automatiser les tests"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: automatisation
  role: build
  domaine: qualite
  phases: [construire]
  technologies: [tests-evals, ci-cd]
  cas-usage: [tout-projet]
  tags: [automatisation, tests, evaluations, pipeline, seuils]
  proprietaire: build
  diffusion: interne
  entrees: ["Stratégie de tests et plan d'évaluation", "Dépôt, pipeline et environnements de test", "Golden set versionné"]
  sorties: ["Suites de tests et d'évaluations exécutées par le pipeline", "Seuils bloquants configurés", "Rapport d'exécution à chaque changement"]
  prerequis: [definir-strategie-tests]
---

## Mission

Faire en sorte que la preuve se rejoue toute seule. Le skill guide le FDE Build pour brancher tests et évaluations sur le pipeline, avec des seuils qui bloquent. Ce qui n'est vérifié qu'à la main cesse d'être vérifié à la première semaine chargée.

## Quand l'utiliser

- La stratégie de tests est définie et la première tranche verticale se construit.
- Un nouveau niveau de test ou un nouvel agent entre dans le périmètre.
- La suite devient lente, instable ou ignorée.

Ne pas l'utiliser pour décider quoi tester ni à quel seuil : c'est [Définir la stratégie de tests](/skills/definir-strategie-tests).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La stratégie de tests : niveaux, seuils, critères de sortie | Oui | La définir d'abord. |
| Un pipeline et un environnement d'exécution | Oui | Les mettre en place avec la chaîne CI/CD. |
| Le golden set, versionné, avec les résultats attendus | Oui pour les évaluations | Automatiser d'abord les tests déterministes. |
| Des données de test autorisées | Oui | Les construire, synthétiques ou anonymisées ; jamais de production brute. |

## Procédure

1. **Répartir sur la pyramide.** Beaucoup de tests unitaires sur la logique déterministe, moins de tests d'intégration contre des doublures conformes aux contrats, peu de parcours de bout en bout. Tout ce qui peut se tester sans modèle se teste sans modèle.
2. **Rendre les tests déterministes rapides** : exécutés à chaque demande de fusion, en quelques minutes, bloquants.
3. **Automatiser les évaluations d'agent.** Un lanceur qui rejoue le golden set, note chaque cas (par code quand c'est possible, par un évaluateur fondé sur un modèle sinon, calibré sur des annotations humaines) et compare aux seuils.
4. **Brancher les déclencheurs.** Tout changement de prompt, de définition d'outil, de version de modèle ou de paramètre lance les évaluations. Une suite réduite à chaque demande de fusion, la suite complète avant tout déploiement.
5. **Poser les seuils bloquants** de la stratégie : un score sous le seuil, ou une régression au-delà de la tolérance par rapport à la version de référence, bloque.
6. **Maîtriser les données de test** : jeux versionnés, rejouables, sans donnée personnelle réelle ; état remis à zéro entre deux exécutions.
7. **Traiter l'instabilité.** Un test qui échoue sans raison est corrigé ou mis en quarantaine avec un ticket et une date, jamais ignoré. Pour les évaluations, répéter les cas sensibles et raisonner sur un taux, pas sur un essai.
8. **Produire un rapport lisible** : ce qui a échoué, sur quel cas, avec la sortie obtenue et l'attendue. Suivre le coût et la durée des évaluations.
9. **Ajouter les tests adverses** au jeu rejoué : injections, tentatives d'exfiltration, abus d'outils.

## Livrable

1. Les suites de tests, par niveau, dans le dépôt.
2. Le lanceur d'évaluations et sa configuration : golden set, notation, seuils.
3. La configuration du pipeline : déclencheurs et blocages.
4. Un rapport par exécution, conservé avec l'artefact.
5. La liste des tests en quarantaine, avec responsable et date.

## Critères de qualité

- La logique métier et les chemins d'erreur sont couverts par des tests bloquants ([LOG-03](/standards#LOG-03)).
- Chaque agent a un golden set rejoué avant tout déploiement ([AGT-02](/standards#AGT-02)).
- Tout changement de prompt, d'outil, de modèle ou de paramètre déclenche l'évaluation, et une régression bloque ([MLO-03](/standards#MLO-03)).
- Les jeux d'évaluation sont versionnés et séparés des exemples des prompts ([MLO-04](/standards#MLO-04)).
- Tout évaluateur fondé sur un modèle est calibré contre des annotations humaines ([MLO-06](/standards#MLO-06)).
- Aucun test n'est désactivé sans ticket ni date.

## Garde-fous

- Les seuils se modifient par une décision tracée du binôme et du propriétaire métier, jamais dans le fichier de configuration pour faire passer un pipeline.
- Ne pas utiliser de données de production non anonymisées dans les tests.
- Ne pas confier la notation à un évaluateur automatique non calibré comme critère de passage.
- Contourner un blocage pour livrer est une décision du FDE Build, écrite, avec la correction planifiée.

## Enchaînements

- **Amont** : [Définir la stratégie de tests](/skills/definir-strategie-tests).
- **Aval** : [Garantir la non-régression](/skills/tester-non-regression), [Mettre en place la chaîne CI/CD](/skills/mettre-en-place-ci-cd).
- **Workflow** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment).
- **Ressources** : [Développement piloté par les évaluations](/frameworks/eval-driven-development), [Évaluer un agent](/frameworks/evaluation-agents), [Construire les évaluations d'un agent](/guides/construire-les-evals), [Livrer sans évaluations](/savoir/livrer-sans-evals).
