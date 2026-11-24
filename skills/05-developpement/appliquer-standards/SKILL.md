---
name: appliquer-standards
description: "Passe un incrément, un service ou un agent au crible des standards d'ingénierie du portail : domaines applicables, standards obligatoires puis recommandés, conditions des standards contextuels, écarts tracés avec responsable et date. À utiliser avant une demande de fusion importante, avant chaque jalon technique et avant la mise en production."
metadata:
  titre: "Appliquer les standards d'ingénierie"
  version: "1.0.0"
  statut: publie
  etape: developpement
  sous-processus: standards
  role: build
  domaine: ingenierie
  phases: [construire, industrialiser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [standards, conformite, revue, ecarts, qualite, audit, bonnes-pratiques, checklist]
  proprietaire: build
  diffusion: interne
  entrees: ["Incrément ou système à examiner", "Référentiel des standards d'ingénierie", "Politiques techniques du client"]
  sorties: ["Rapport de conformité aux standards", "Écarts inscrits au registre RAID"]
  prerequis: [generer-code]
---

## Mission

Vérifier que ce qui est construit tient les exigences du pool, et rendre visibles les écarts au lieu de les découvrir en production. Le skill guide le FDE Build, ou l'agent qui l'assiste, dans une revue de conformité standard par standard. Un écart tracé et arbitré est acceptable ; un écart tu ne l'est pas.

## Quand l'utiliser

- Avant d'ouvrir une demande de fusion qui touche la sécurité, les données, un agent ou le déploiement.
- Avant un jalon technique : G4, G5, G6.
- Avant la mise en production, pour la revue de préparation.
- En reprise d'un système existant.

Ne pas l'utiliser à la place de la revue de code : les standards disent ce qui doit être vrai, [Mener une revue de code](/skills/revoir-code) vérifie que le changement est juste.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le périmètre examiné : dépôt, service, agent, pipeline | Oui | Le faire préciser. |
| Le [référentiel des standards](/standards), avec la vérification attendue de chacun | Oui | Le lire dans le portail : il fait foi. |
| L'accès aux preuves : code, configuration, pipeline, traces, documents | Oui | Noter « non vérifiable » ; ce n'est pas « conforme ». |
| Les politiques techniques du client | Non | Les demander : la plus stricte s'applique. |

## Procédure

1. **Délimiter.** Dire ce qui est examiné et ce qui ne l'est pas.
2. **Sélectionner les domaines applicables** parmi les dix : logiciel, cloud, données, API, DevSecOps, LLMOps, agents, observabilité, cybersécurité, architecture. Un domaine écarté l'est par écrit, avec sa raison.
3. **Vérifier les standards obligatoires** un à un. Pour chacun, chercher la preuve que décrit sa rubrique « vérification » : un fichier, une configuration, une trace, un test. Conclure : conforme, non conforme, non vérifiable.
4. **Vérifier les standards recommandés.** Un écart est admis s'il est justifié par écrit et relu par un pair.
5. **Statuer sur les standards contextuels.** Lire la condition : si elle est remplie, le standard devient attendu ; sinon, le marquer non applicable, avec la raison.
6. **Qualifier chaque écart** : ce qui manque, le risque que cela crée, la correction, son coût.
7. **Corriger ce qui se corrige tout de suite**, dans la même demande de fusion. Le reste se trace.
8. **Tracer.** Chaque écart à un standard obligatoire entre au registre RAID avec un responsable, une date de résorption et l'arbitrage du responsable de mission et du client.
9. **Conclure** : prêt, prêt avec écarts arbitrés, non prêt.

## Livrable

Un rapport de conformité :

| Standard | Niveau | Statut | Preuve | Écart et risque | Action, responsable, date |
| --- | --- | --- | --- | --- | --- |

Précédé d'une synthèse : périmètre, domaines retenus et écartés, nombre de standards par statut, écarts obligatoires ouverts, conclusion. Le mode revue de la page [Standards d'ingénierie](/standards) produit ce tableau.

## Critères de qualité

- Chaque statut « conforme » cite une preuve consultable.
- « Non vérifiable » n'est jamais compté comme conforme.
- Chaque standard contextuel écarté porte la raison pour laquelle sa condition n'est pas remplie.
- Chaque écart obligatoire a un responsable, une date et un arbitrage.
- La conclusion découle du tableau.

## Garde-fous

- L'acceptation d'un écart à un standard obligatoire appartient au responsable de mission et au client, pas à celui qui fait la revue.
- Ne pas déclarer conforme sur la foi d'une déclaration : seule la preuve compte.
- Quand un standard et une politique du client divergent, appliquer la plus stricte et signaler la divergence.
- Les constats de sécurité ne circulent qu'auprès de ceux qui doivent les traiter.

## Enchaînements

- **Amont** : [Générer le code d'un incrément](/skills/generer-code).
- **Aval** : [Mener une revue de code](/skills/revoir-code), [Mettre en production](/skills/mettre-en-production).
- **Workflow** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment).
- **Ressources** : [Standards d'ingénierie](/standards), [Registre RAID : risques, hypothèses, points ouverts, décisions](/templates/registre-raid), [Checklist LLMOps et AgentOps](/templates/checklist-llmops), [Checklist sécurité et conformité](/templates/checklist-securite-conformite).
