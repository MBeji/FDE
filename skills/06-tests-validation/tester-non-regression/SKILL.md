---
name: tester-non-regression
description: "Vérifie qu'un changement ne dégrade rien de ce qui marchait : suite de non-régression rejouée, comparaison à la version de référence, cas issus des incidents ajoutés, évaluation complète à tout changement de modèle, surveillance de la dérive. À utiliser avant chaque fusion et chaque déploiement, et après tout incident."
metadata:
  titre: "Garantir la non-régression"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: non-regression
  role: build
  domaine: qualite
  phases: [construire, industrialiser, perenniser]
  technologies: [tests-evals, ci-cd]
  cas-usage: [tout-projet]
  tags: [non-regression, evaluations, reference, derive, changement-de-modele, regression, tnr, comparaison-de-versions]
  proprietaire: build
  diffusion: client
  entrees: ["Changement à vérifier (code, prompt, outil, modèle, paramètre, données)", "Suite de non-régression et golden set versionnés", "Résultats de la version de référence"]
  sorties: ["Rapport de non-régression comparé à la référence", "Décision : passer, corriger ou bloquer", "Cas ajoutés à la suite"]
  prerequis: [automatiser-tests]
---

## Mission

Garantir que ce qui marchait hier marche encore après le changement d'aujourd'hui. Le skill guide l'équipe qui construit ou exploite le système pour rejouer la suite de non-régression, comparer à la référence et décider. Un système à base de modèles peut régresser sans qu'une ligne de code ait bougé : c'est la comparaison qui le révèle.

## Quand l'utiliser

- Avant toute fusion et tout déploiement.
- À chaque changement de prompt, d'outil, de paramètre ou de données de référence.
- À tout changement de version de modèle : évaluation complète.
- Après un incident : le cas rejoint la suite.
- À intervalle régulier en production, pour détecter une dérive.

Ne pas l'utiliser pour qualifier une fonctionnalité nouvelle : elle se teste d'abord pour elle-même.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La description du changement et ce qu'il touche | Oui | La demander : on ne choisit pas la suite à rejouer à l'aveugle. |
| La suite de non-régression et le golden set versionnés | Oui | Les constituer avec l'automatisation des tests. |
| Les résultats de la version de référence, cas par cas | Oui | Rejouer la version en production pour établir la référence. |
| Les seuils et la tolérance de régression | Oui | Les reprendre du plan d'évaluation. |

## Procédure

1. **Qualifier le changement.** Code déterministe : tests automatisés et suite réduite. Prompt, outil ou paramètre : évaluations de l'agent touché. Modèle : suite complète de tous les agents. Données de référence : cas qui s'appuient sur elles.
2. **Figer la référence** : la version actuellement en service, ses scores par cas, la version du golden set.
3. **Rejouer la suite** sur la version candidate, dans les mêmes conditions. Répéter les cas sensibles : on compare des taux, pas un essai isolé.
4. **Comparer cas par cas**, pas seulement au score global. Une moyenne stable peut cacher dix cas dégradés et dix améliorés.
5. **Classer les écarts** : régression franche, amélioration, variation dans la marge de bruit. Regarder de près chaque cas passé de réussi à échoué.
6. **Vérifier aussi** la latence, le coût par cas, le taux d'escalade et les tests adverses : une régression n'est pas toujours une erreur de réponse.
7. **Décider.** Aucune régression au-delà de la tolérance et seuils tenus : passer. Régression sur des cas critiques : bloquer, même si le score global monte. Entre les deux : corriger ou faire arbitrer.
8. **Enrichir la suite.** Tout incident, toute correction humaine récurrente, toute erreur trouvée en production devient un cas, avec son résultat attendu validé par le métier.
9. **Entretenir la suite** : retirer les cas obsolètes par décision tracée, garder le temps d'exécution compatible avec le rythme des livraisons.

## Livrable

Un rapport de non-régression :

1. Le changement, la version candidate, la référence, la version du golden set.
2. Scores globaux, avant et après, par agent et par catégorie de cas.
3. Liste des cas dégradés et des cas améliorés.
4. Latence, coût par cas, taux d'escalade, tests adverses : avant et après.
5. Décision et justification.
6. Cas ajoutés ou retirés de la suite.

## Critères de qualité

- La comparaison est faite cas par cas contre une référence identifiée.
- Tout changement de modèle a rejoué l'évaluation complète ([MLO-02](/standards#MLO-02)).
- Une régression sous le seuil bloque le déploiement ([MLO-03](/standards#MLO-03)).
- Le golden set est rejoué avant tout déploiement ([AGT-02](/standards#AGT-02)).
- Les retours de production alimentent la suite selon un rythme planifié ([MLO-07](/standards#MLO-07)).
- Chaque cas retiré l'est par une décision tracée.

## Garde-fous

- Ne jamais relever un seuil, élargir une tolérance ni retirer un cas pour faire passer un changement : ces décisions appartiennent au propriétaire métier et au responsable technique, et se tracent.
- Le résultat attendu d'un nouveau cas est validé par un expert métier, pas déduit de la sortie actuelle de l'agent.
- Les cas issus de la production sont anonymisés avant d'entrer dans la suite.
- Une régression acceptée pour livrer est une décision humaine écrite, avec sa correction planifiée.

## Enchaînements

- **Amont** : [Automatiser les tests](/skills/automatiser-tests).
- **Aval** : [Mettre en production](/skills/mettre-en-production), [Maintenir et faire évoluer](/skills/maintenir-evoluer).
- **Workflows** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment), [Traiter un incident et en tirer une amélioration](/skills/workflows/traiter-un-incident).
- **Ressources** : [Évaluer un agent](/frameworks/evaluation-agents), [AgentOps : exploiter des agents en production](/frameworks/agentops), [Développement piloté par les évaluations](/frameworks/eval-driven-development).
