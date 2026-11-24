---
name: mettre-en-production
description: "Conduit une mise en production : revue de préparation, plan par vagues, communication, retour arrière et coupe-circuit vérifiés, déploiement par étapes avec critères de passage et surveillance renforcée. À utiliser après un pilote concluant pour la généralisation, et pour toute mise en service d'une évolution ou d'un correctif."
metadata:
  titre: "Mettre en production"
  version: "1.0.0"
  statut: publie
  etape: deploiement
  sous-processus: mise-en-production
  role: build
  domaine: ops
  phases: [industrialiser]
  technologies: [ci-cd, observabilite]
  cas-usage: [tout-projet]
  tags: [mise-en-production, revue-de-preparation, deploiement-progressif, retour-arriere, vagues, go-live, mise-en-service, lancement]
  proprietaire: build
  diffusion: interne
  entrees: ["Bilan de pilote ou résultats de validation", "Version candidate et rapports de tests", "Pipeline, runbook et équipe d'exploitation en place"]
  sorties: ["Revue de préparation signée", "Plan de mise en production exécuté", "Compte rendu de mise en service"]
  prerequis: [mettre-en-place-ci-cd, tester-technique, conduire-pilote]
---

## Mission

Mettre en service sans surprise : savoir avant de commencer que tout est prêt, avancer par étapes, pouvoir revenir en arrière à tout moment. Le skill guide le FDE Build, avec le FDE Design pour le déploiement auprès des équipes. Le feu vert reste une décision du client.

## Quand l'utiliser

- Le pilote est concluant et le comité a décidé de généraliser.
- Une évolution ou un correctif doit être mis en service sur un système en production.
- Une nouvelle vague de déploiement démarre.

Ne pas l'utiliser pour rattraper une validation incomplète : repasser par [Mener les tests techniques](/skills/tester-technique) ou [Conduire le pilote](/skills/conduire-pilote).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les preuves : évaluations, tests techniques, recette, bilan de pilote | Oui | S'arrêter : la revue de préparation ne peut pas conclure. |
| La version candidate, figée et identifiée | Oui | La figer avant la revue. |
| Un pipeline avec retour arrière testé | Oui | Le mettre en place d'abord. |
| Un runbook et une équipe d'exploitation nommée, astreinte comprise | Oui | Pas de mise en production sans personne pour répondre. |
| Le plan d'accompagnement des équipes | Non pour un correctif | Le demander au FDE Design avant de fixer les vagues. |

## Procédure

1. **Passer la revue de préparation**, point par point : qualité prouvée par les évaluations, sécurité homologuée, observabilité et alertes en place, runbook écrit et exercé, coupe-circuit testé, sauvegardes restaurées, coûts budgétés, support organisé, agents inscrits au registre, équipes formées. Chaque point : prêt, prêt avec réserve, non prêt.
2. **Traiter les écarts.** Un point non prêt bloque ou devient une réserve acceptée par écrit par le client, avec une date.
3. **Écrire le plan.** Vagues (populations, volumes, périmètres), fenêtres, enchaînement des opérations, responsables, critères de passage d'une vague à la suivante, critères de retour arrière.
4. **Préparer la communication** : qui est prévenu, quand, de quoi ; canal de remontée des problèmes pour les utilisateurs.
5. **Répéter** le déploiement et le retour arrière en préproduction. Vérifier le coupe-circuit dans l'environnement cible.
6. **Obtenir le feu vert** du client, tracé : qui, quand, sur quelle version.
7. **Déployer la première vague** par le pipeline, sur un périmètre réduit et à un niveau d'autonomie prudent. Vérifier aussitôt un parcours de bout en bout.
8. **Surveiller de près.** Présence renforcée du Build, seuils d'alerte resserrés, revue quotidienne des indicateurs et d'un échantillon de cas.
9. **Décider à chaque vague** : poursuivre, attendre, revenir en arrière. Les critères sont écrits ; on ne les réinterprète pas le jour même.
10. **Clore** : compte rendu, mise à jour du registre et de la documentation, passage à la validation en production.

## Livrable

1. La [Revue de préparation à la mise en production](/templates/checklist-mise-en-production), signée.
2. Le plan de mise en production : vagues, fenêtres, opérations, critères de passage et de retour arrière, communication.
3. Le compte rendu de mise en service : déroulé réel, incidents, décisions, réserves ouvertes.
4. Le [Registre des agents](/templates/registre-agents) et le [Runbook d'exploitation](/templates/runbook-agent) à jour.

## Critères de qualité

- Chaque point de la revue a un statut et une preuve.
- Le retour arrière a été exécuté en répétition, et sa durée est connue.
- Le coupe-circuit a été vérifié dans l'environnement cible ([AGT-08](/standards#AGT-08)).
- Le déploiement est automatisé et tracé ([OPS-04](/standards#OPS-04)) ; chaque alerte renvoie à un runbook et à une astreinte ([OBS-06](/standards#OBS-06)).
- Les critères de passage entre vagues sont écrits avant la première.
- Chaque agent mis en service est inscrit au registre ([ARC-03](/standards#ARC-03)).

## Garde-fous

- Le feu vert de mise en production est donné par le client, au jalon G6 pour une généralisation ; l'agent ne déclenche jamais lui-même un déploiement en production.
- La sécurité est homologuée par le RSSI avant la production ([SEC-02](/standards#SEC-02)).
- Aucune mise en service à la veille d'une période où personne ne peut intervenir.
- Un critère de retour arrière atteint déclenche le retour arrière : on analyse ensuite.
- Le relèvement d'autonomie ne fait pas partie de la mise en production : il se décide à part, sur preuves.

## Enchaînements

- **Amont** : [Mettre en place la chaîne CI/CD](/skills/mettre-en-place-ci-cd), [Mener les tests techniques](/skills/tester-technique), [Conduire le pilote](/skills/conduire-pilote).
- **Aval** : [Valider la mise en production](/skills/valider-mise-en-production), [Superviser le service](/skills/superviser-monitoring).
- **Workflows** : [De la validation à la mise en production](/skills/workflows/mettre-en-production), [Traiter un incident et en tirer une amélioration](/skills/workflows/traiter-un-incident).
- **Ressources** : [Passer en production et à l'échelle](/guides/passer-en-production), [Du POC à la production](/frameworks/poc-pilote-production), [AgentOps : exploiter des agents en production](/frameworks/agentops), [L'usine à agents](/frameworks/usine-agents).
