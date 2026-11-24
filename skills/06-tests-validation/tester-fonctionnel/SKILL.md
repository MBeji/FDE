---
name: tester-fonctionnel
description: "Conçoit et mène les tests fonctionnels et la recette métier : cas de test dérivés des critères d'acceptation, exécution avec les experts métier, qualification des anomalies et prononcé de la recette. À utiliser quand un périmètre est construit et évalué, avant le pilote et avant toute mise en production."
metadata:
  titre: "Mener les tests fonctionnels et la recette"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: fonctionnel
  role: design
  domaine: qualite
  phases: [construire]
  technologies: [tests-evals]
  cas-usage: [tout-projet]
  tags: [recette, tests-fonctionnels, criteres-acceptation, anomalies, validation-metier]
  proprietaire: design
  diffusion: interne
  entrees: ["Fiches de conception et critères d'acceptation", "Version candidate en environnement de recette", "Experts métier disponibles pour recetter"]
  sorties: ["Cahier de recette exécuté", "Registre des anomalies qualifiées", "Procès-verbal de recette"]
  prerequis: [definir-strategie-tests, rediger-specifications]
---

## Mission

Faire constater par le métier que la solution fait ce qui était spécifié, sur ses propres cas. Le skill aide le FDE Design à préparer et à conduire la recette, jusqu'à la décision du propriétaire du processus. Une recette se gagne ou se perd dans la préparation des cas, pas le jour de l'exécution.

## Quand l'utiliser

- Un périmètre est construit, ses tests automatisés passent et ses évaluations tiennent les seuils.
- Une évolution notable est livrée sur un système en service.

Ne pas l'utiliser pour mesurer la qualité statistique d'un agent : c'est [Évaluer un agent](/skills/evaluer-agent). La recette vérifie la conformité aux spécifications ; le pilote, avec [Conduire le pilote](/skills/conduire-pilote), prouve la valeur en conditions réelles.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les critères d'acceptation signés | Oui | Repasser par les spécifications : on ne recette pas contre des attentes orales. |
| Une version candidate figée, en environnement de recette | Oui | Attendre : une recette sur une version mouvante ne vaut rien. |
| Des experts métier détachés pour la durée de la recette | Oui | Faire arbitrer le propriétaire du processus. |
| Des données de recette représentatives et autorisées | Oui | Les préparer avec le Build ; jamais de production brute. |
| La stratégie de tests et ses critères de sortie | Non | Fixer les critères de prononcé avant de commencer. |

## Procédure

1. **Dériver les cas de test** des critères d'acceptation : un cas au moins par critère. Couvrir le nominal, les limites, les erreurs, les cas hors périmètre.
2. **Ajouter les cas propres à un agent** : cas où il doit escalader, cas où il doit refuser, données manquantes ou contradictoires, demande ambiguë, tentative de le faire sortir de son rôle. Vérifier aussi ce que voit l'humain qui reprend la main.
3. **Écrire chaque cas** : situation de départ, action, résultat attendu, critère couvert. Pour une réponse non déterministe, l'attendu décrit ce qui doit être vrai, pas un texte mot pour mot.
4. **Fixer avant de commencer** les niveaux de gravité et la règle de prononcé : bloquante (un résultat faux à effet, une règle métier violée, un parcours impossible), majeure (contournable mais gênante), mineure. Par exemple : aucune bloquante, majeures assorties d'un plan daté.
5. **Préparer la campagne** : jeu de données, comptes, planning, qui exécute quoi. Les experts métier exécutent ; le FDE Design anime.
6. **Exécuter et consigner** chaque cas : conforme, non conforme, non exécuté, avec la preuve. Rejouer plusieurs fois les cas sensibles d'un agent.
7. **Qualifier chaque anomalie** avec le Build : défaut de la solution, défaut de la spécification, ou attente nouvelle. Une attente nouvelle devient une demande d'évolution, pas une anomalie.
8. **Corriger et retester.** Chaque correction repasse les cas touchés et la non-régression.
9. **Rendre le bilan** et proposer : recette prononcée, prononcée avec réserves, refusée.

## Livrable

1. Le cahier de recette : cas, critère couvert, résultat attendu, résultat obtenu, statut, preuve.
2. Le registre des anomalies : description, gravité, origine, décision, date de correction.
3. Le procès-verbal de recette : périmètre et version recettés, taux de cas conformes, anomalies ouvertes par gravité, réserves, décision et signature.

## Critères de qualité

- Chaque critère d'acceptation est couvert par au moins un cas exécuté.
- Les escalades et les refus attendus de l'agent sont testés.
- La règle de prononcé est écrite avant l'exécution.
- Chaque anomalie a une gravité, une origine et une décision.
- La version recettée est identifiée et n'a pas changé pendant la campagne.
- Les cas non exécutés sont listés avec leur raison.

## Garde-fous

- La recette est prononcée par le propriétaire du processus, pas par le FDE ni par un agent.
- Ne pas requalifier une anomalie bloquante pour tenir une date : la date se rediscute avec le sponsor.
- Ne pas recetter avec des données de production non anonymisées.
- Le FDE Build fournit les corrections ; il ne juge pas seul qu'un cas est conforme.

## Enchaînements

- **Amont** : [Définir la stratégie de tests](/skills/definir-strategie-tests), [Rédiger les spécifications](/skills/rediger-specifications).
- **Aval** : [Conduire le pilote](/skills/conduire-pilote).
- **Workflow** : [De la validation à la mise en production](/skills/workflows/mettre-en-production).
- **Ressources** : [Plan d'évaluation](/templates/plan-evaluation), [Rapport d'évaluation](/templates/rapport-evaluation), [RACI Design · Build](/raci).
