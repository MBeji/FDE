---
name: tester-technique
description: "Mène les tests techniques d'une solution : performance et latence, charge, coût par cas, sécurité (injection, exfiltration, contrôle d'accès), robustesse aux pannes, mode dégradé, coupe-circuit et reprise, contre des objectifs chiffrés fixés à l'avance. À utiliser avant le pilote, puis avant chaque élargissement de volume ou mise en production."
metadata:
  titre: "Mener les tests techniques"
  version: "1.0.0"
  statut: publie
  etape: tests
  sous-processus: technique
  role: build
  domaine: qualite
  phases: [construire, industrialiser]
  technologies: [tests-evals, observabilite]
  cas-usage: [tout-projet]
  tags: [tests-techniques, performance, charge, securite, robustesse, coupe-circuit]
  proprietaire: build
  diffusion: interne
  entrees: ["Exigences non fonctionnelles chiffrées", "Analyse de risques et plan de tests adverses", "Environnement représentatif de la production"]
  sorties: ["Rapport de tests techniques", "Écarts aux objectifs et plan de correction"]
  prerequis: [definir-strategie-tests]
---

## Mission

Prouver que la solution tient quand les conditions cessent d'être favorables : plus de volume, une dépendance en panne, un utilisateur malveillant. Le skill guide le FDE Build dans une campagne de tests techniques contre des objectifs chiffrés. Ce qui n'a pas été éprouvé avant la production le sera par elle.

## Quand l'utiliser

- Avant le pilote : sécurité et coupe-circuit au minimum.
- Avant la mise en production et avant chaque vague qui change l'ordre de grandeur du volume.
- Après un changement d'architecture, de modèle ou d'hébergement.

Ne pas l'utiliser pour juger la justesse des réponses : c'est [Évaluer un agent](/skills/evaluer-agent).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les objectifs chiffrés : latence, débit, disponibilité, coût par cas, durée de reprise | Oui | Les faire fixer avant de tester : sans cible, un résultat ne dit rien. |
| Un environnement proche de la production | Oui | Tester quand même, et écrire ce que l'écart d'environnement interdit de conclure. |
| L'analyse de risques et son plan de tests adverses | Oui | Repasser par l'analyse de risques. |
| L'accord des équipes dont les systèmes seront sollicités | Oui | L'obtenir par écrit avant tout test de charge ou d'intrusion. |

## Procédure

1. **Écrire le plan** : ce qui est testé, objectif, méthode, environnement, critère de réussite, fenêtre convenue avec le client.
2. **Mesurer la performance nominale** sur des cas représentatifs : latence de bout en bout au médian et aux percentiles élevés, répartition par étape, nombre d'appels de modèle et d'outils par cas.
3. **Monter en charge** par paliers jusqu'au volume cible, puis au-delà. Relever le point où la latence décroche et où apparaissent les limites de débit, les nôtres et celles des systèmes du client et du fournisseur de modèle.
4. **Mesurer le coût par cas** au volume cible et le comparer au budget. Repérer les cas qui consomment anormalement.
5. **Tester la sécurité.** Injections directes et indirectes par un contenu lu, tentatives d'exfiltration, abus d'outils, contournement des droits, accès aux données d'un autre utilisateur. Tests d'intrusion selon la politique du client.
6. **Tester la robustesse.** Couper tour à tour chaque dépendance : modèle, outil, système du client. Vérifier délais d'expiration, nouvelles tentatives, disjoncteur, mode dégradé, message rendu à l'utilisateur.
7. **Tester les bornes d'exécution** : boucle, dépassement du nombre d'étapes, du budget ou de la durée ; l'escalade vers un humain doit se produire.
8. **Exercer le coupe-circuit et le retour arrière** : désactiver un agent ou un outil sans redéploiement, revenir à la version précédente, restaurer une sauvegarde. Chronométrer.
9. **Vérifier l'observabilité** : chaque test se retrouve-t-il dans les traces, les indicateurs et les alertes ?
10. **Conclure** objectif par objectif, et planifier les corrections.

## Livrable

Un rapport de tests techniques :

| Objectif | Cible | Mesuré | Méthode et environnement | Verdict | Action |
| --- | --- | --- | --- | --- | --- |

Avec : résultats des tests adverses par scénario, temps mesurés du coupe-circuit, du retour arrière et de la restauration, limites de validité des résultats, écarts ouverts avec responsable et date.

## Critères de qualité

- Chaque objectif a une cible fixée avant les tests.
- La charge est testée au-delà du volume cible, et le point de rupture est connu.
- Chaque scénario du plan de tests adverses est exécuté ([SEC-03](/standards#SEC-03)).
- Chaque dépendance a été coupée au moins une fois.
- Le coupe-circuit est testé avant le pilote ([AGT-08](/standards#AGT-08)) et les bornes d'exécution fonctionnent ([AGT-07](/standards#AGT-07)).
- Sauvegarde et restauration sont exercées ([CLD-06](/standards#CLD-06)) ; le coût par cas est mesuré ([MLO-05](/standards#MLO-05)).

## Garde-fous

- Aucun test de charge ni d'intrusion sur un système du client sans autorisation écrite, fenêtre convenue et contact d'astreinte.
- Aucun test destructif en production.
- Une faille découverte se signale immédiatement au RSSI par le canal prévu ; son détail ne circule pas.
- Ne pas extrapoler à la production un résultat obtenu sur un environnement sous-dimensionné sans le dire.

## Enchaînements

- **Amont** : [Définir la stratégie de tests](/skills/definir-strategie-tests).
- **Aval** : [Mettre en production](/skills/mettre-en-production).
- **Workflow** : [De la validation à la mise en production](/skills/workflows/mettre-en-production).
- **Ressources** : [Analyse de risques et garde-fous](/templates/analyse-risques-agent), [Checklist sécurité et conformité](/templates/checklist-securite-conformite), [Checklist LLMOps et AgentOps](/templates/checklist-llmops), [Sécurité des agents](/frameworks/securite-agents), [Garde-fous : la défense en profondeur](/frameworks/garde-fous), [FinOps de l'IA](/frameworks/finops-ia).
