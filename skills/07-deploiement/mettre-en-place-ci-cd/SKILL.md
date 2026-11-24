---
name: mettre-en-place-ci-cd
description: "Met en place la chaîne de livraison : artefact unique promu d'environnement en environnement, tests et évaluations bloquants, analyses de sécurité, prompts et outils déployés comme du code, déploiement progressif et retour arrière automatisés, traçabilité. À utiliser dès la première tranche verticale, et avant toute mise en production."
metadata:
  titre: "Mettre en place la chaîne CI/CD"
  version: "1.0.0"
  statut: publie
  etape: deploiement
  sous-processus: ci-cd
  role: build
  domaine: ops
  phases: [construire, industrialiser]
  technologies: [ci-cd]
  cas-usage: [tout-projet]
  tags: [ci-cd, pipeline, deploiement, devsecops, retour-arriere, llmops]
  proprietaire: build
  diffusion: interne
  entrees: ["Dépôt de code et environnements disponibles", "Stratégie de tests et seuils", "Règles de déploiement et de séparation des rôles du client"]
  sorties: ["Pipeline d'intégration et de déploiement opérationnel", "Procédure de retour arrière testée", "Journal des déploiements"]
  prerequis: [preparer-environnements]
---

## Mission

Faire en sorte que livrer soit un geste banal, contrôlé et réversible. Le skill guide le FDE Build pour construire le pipeline qui teste, évalue, sécurise et déploie. Dans un système d'agents, un prompt ou une définition d'outil change le comportement autant que du code : ils passent par le même chemin.

## Quand l'utiliser

- Dès la première tranche verticale : un pipeline minimal, enrichi ensuite.
- Avant le pilote : tests, évaluations et retour arrière doivent être en place.
- Quand une livraison manuelle a causé une anomalie ou un écart entre environnements.

Ne pas l'utiliser pour décider quoi tester : c'est [Définir la stratégie de tests](/skills/definir-strategie-tests).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le dépôt du client et son outil d'intégration continue | Oui | Utiliser l'outillage du client ; n'en introduire un autre qu'avec son accord écrit. |
| Des environnements décrits par du code | Oui | Les préparer d'abord. |
| Les suites de tests et d'évaluations, avec leurs seuils | Oui | Démarrer avec les tests existants et compléter. |
| Les règles du client : approbations, fenêtres, séparation des rôles | Non | Les demander ; appliquer la séparation auteur et déployeur par défaut. |

## Procédure

1. **Poser l'étape d'intégration.** À chaque demande de fusion : formateur, analyse statique, tests automatisés. Un échec bloque la fusion.
2. **Ajouter les contrôles de sécurité** : détection de secrets à chaque commit, analyse statique de sécurité, analyse des dépendances et des images, avec un seuil bloquant sur les vulnérabilités critiques.
3. **Construire un artefact unique**, immuable, versionné, accompagné de son inventaire de composants. Le même artefact est promu jusqu'à la production : on ne reconstruit jamais.
4. **Sortir la configuration du code** : elle est injectée par l'environnement.
5. **Traiter prompts, outils et modèle comme du code.** Versionnés dans le dépôt, version du modèle épinglée, déployés par le pipeline. Tout changement déclenche les évaluations ; une régression sous le seuil bloque.
6. **Automatiser le déploiement** vers chaque environnement, infrastructure comprise. Approbation explicite avant la production, par une personne autre que l'auteur.
7. **Déployer progressivement** : une fraction du trafic ou une population restreinte d'abord, critères de passage mesurés, puis élargissement.
8. **Automatiser le retour arrière** et l'essayer : revenir à l'artefact précédent, prompts et configuration compris, en quelques minutes.
9. **Tracer** chaque déploiement : qui, quoi, quand, sur quelle approbation, avec quel résultat de tests et d'évaluations.
10. **Soigner la vitesse.** Un pipeline lent se contourne : paralléliser, garder la suite rapide à chaque fusion et la suite complète avant déploiement.
11. **Documenter** le pipeline et former l'équipe du client à le modifier.

## Livrable

1. La définition du pipeline, dans le dépôt.
2. Le schéma des étapes : déclencheurs, contrôles bloquants, approbations.
3. La procédure de retour arrière, avec la date et le résultat de son dernier essai.
4. Le journal des déploiements.
5. La liste des contrôles désactivés ou tolérés, avec leur justification et leur échéance.

## Critères de qualité

- L'artefact est unique, immuable et promu sans reconstruction ([OPS-03](/standards#OPS-03)) ; la configuration est hors du code ([LOG-04](/standards#LOG-04)).
- Les tests bloquent la fusion ([LOG-03](/standards#LOG-03)) ; la détection de secrets tourne à chaque commit ([OPS-02](/standards#OPS-02)) ; les analyses de sécurité ont un seuil bloquant ([OPS-05](/standards#OPS-05)).
- Prompts, outils et version de modèle sont versionnés et déployés par le pipeline ([MLO-01](/standards#MLO-01), [MLO-02](/standards#MLO-02)), et les évaluations bloquent une régression ([MLO-03](/standards#MLO-03)).
- Chaque déploiement en production est automatisé, tracé et réversible ([OPS-04](/standards#OPS-04)).
- L'auteur d'un changement ne peut pas le déployer seul ([OPS-06](/standards#OPS-06)).
- Un inventaire des composants accompagne chaque artefact ([OPS-07](/standards#OPS-07)).

## Garde-fous

- Aucune modification manuelle en production ; une intervention d'urgence est régularisée par le pipeline dans les vingt-quatre heures et consignée.
- L'approbation de mise en production est humaine et suit les règles du client.
- Ne pas désactiver un contrôle bloquant pour tenir une date : la dérogation est décidée par le FDE Build et le responsable technique du client, par écrit, avec une échéance.
- Les secrets du pipeline viennent du coffre et n'apparaissent pas dans les journaux.

## Enchaînements

- **Amont** : [Préparer les environnements](/skills/preparer-environnements), [Automatiser les tests](/skills/automatiser-tests).
- **Aval** : [Mettre en production](/skills/mettre-en-production).
- **Workflow** : [De la validation à la mise en production](/skills/workflows/mettre-en-production).
- **Ressources** : [Checklist LLMOps et AgentOps](/templates/checklist-llmops), [AgentOps : exploiter des agents en production](/frameworks/agentops), [L'usine à agents](/frameworks/usine-agents), [Standards d'ingénierie](/standards).
