---
name: integrer-au-si
description: "Branche la solution sur les systèmes du client : contrat d'interface, identité de service à moindre privilège, outils d'agent décrits pour l'agent, écritures idempotentes et approuvées, gestion des pannes, tests d'intégration. À utiliser dès qu'un incrément doit lire ou écrire dans un système existant."
metadata:
  titre: "Intégrer au SI du client"
  version: "1.0.0"
  statut: publie
  etape: developpement
  sous-processus: integration
  role: build
  domaine: ingenierie
  phases: [construire]
  technologies: [api-integration, mcp-outils]
  cas-usage: [tout-projet]
  tags: [integration, api, outils-agent, mcp, idempotence, moindre-privilege, connecteur, crm, erp, interface]
  proprietaire: build
  diffusion: interne
  entrees: ["Dossier d'architecture et interfaces identifiées", "Documentation et environnement de test du système cible", "Fiche agent et droits accordés"]
  sorties: ["Outils et connecteurs intégrés et testés", "Spécifications d'outils et contrats d'interface versionnés"]
  prerequis: [concevoir-architecture-technique]
---

## Mission

Faire dialoguer la solution avec le SI du client sans le fragiliser. Le skill guide le FDE Build dans la construction des connecteurs et des outils d'agent : un contrat, des droits minimaux, des erreurs exploitables, des tests. Un agent n'est utile que par ce qu'il peut lire et faire ; il n'est sûr que si chaque action est bornée.

## Quand l'utiliser

- Un incrément doit lire ou écrire dans un système du client.
- Un nouvel outil est ajouté à un agent.
- Une interface existante change de version.

Ne pas l'utiliser avant que l'accès au système soit prévu au dossier d'architecture : repasser par [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le système cible, son propriétaire et sa documentation | Oui | Les faire désigner ; ne pas rétro-concevoir une interface sans accord. |
| Un environnement de test représentatif | Oui pour toute écriture | Inscrire le risque et se limiter à la lecture. |
| La fiche agent : outils prévus, autonomie, approbations | Oui pour un outil d'agent | Repasser par la spécification de l'agent. |
| Les limites du système : débit, plages de maintenance, volumétrie | Non | Les demander ; supposer des limites basses en attendant. |

## Procédure

1. **Inventorier les interactions** : pour chaque besoin, lecture ou écriture, objet concerné, fréquence, sensibilité.
2. **Choisir le mode d'accès** le plus maîtrisé que le système offre : interface documentée avant tout ; jamais d'accès direct à une base ou à un écran quand une interface existe.
3. **Écrire le contrat** : opérations, schémas d'entrée et de sortie, erreurs, version. Le verser au dépôt.
4. **Obtenir une identité de service dédiée**, avec les seuls droits nécessaires, par environnement. Aucun compte personnel, aucune clé longue durée.
5. **Concevoir chaque outil pour l'agent.** Un outil par tâche métier plutôt que par appel technique ; un nom explicite ; une description qui dit quand l'utiliser et quand ne pas l'utiliser ; des paramètres typés avec exemples ; des résultats courts et utiles.
6. **Sécuriser les écritures.** Idempotence par clé ou contrôle d'état ; validation des entrées côté serveur ; règle d'approbation humaine selon le niveau d'autonomie ; propriétaire nommé.
7. **Traiter la panne.** Délai d'expiration, nouvelles tentatives bornées, limite de débit, disjoncteur. Les erreurs rendues à l'agent disent la cause et l'action possible, sans rien révéler d'interne.
8. **Journaliser** chaque appel et chaque action à effet, corrélés à la trace de l'exécution.
9. **Tester.** Dans le pipeline contre des doublures conformes au contrat ; en recette, un parcours de bout en bout sur les vrais systèmes ; puis les cas de panne.
10. **Faire valider** par le propriétaire du système avant toute écriture en production.

## Livrable

1. Les connecteurs et outils, avec leurs tests.
2. Une [Spécification d'outil](/templates/specification-outil) par outil exposé à un agent.
3. Les contrats d'interface versionnés dans le dépôt.
4. Le tableau des identités de service et de leurs droits.
5. Le compte rendu des tests d'intégration, pannes comprises.

## Critères de qualité

- Les agents n'atteignent le SI que par la couche d'outils ([API-01](/standards#API-01)).
- Chaque interface a un contrat versionné ([API-02](/standards#API-02)) et chaque appel est authentifié et autorisé ([API-03](/standards#API-03)).
- Chaque écriture est idempotente ([API-04](/standards#API-04)), validée ([API-05](/standards#API-05)), approuvée selon sa règle et dotée d'un propriétaire ([AGT-03](/standards#AGT-03)).
- Délais, limites et disjoncteur sont en place ([API-06](/standards#API-06)) ; les erreurs sont exploitables par un agent ([API-07](/standards#API-07)).
- Chaque agent a sa propre identité et aucun outil superflu ([AGT-04](/standards#AGT-04)) ; les descriptions d'outils sont écrites pour lui ([AGT-09](/standards#AGT-09)).
- Les tests d'intégration tournent dans le pipeline et en recette ([API-08](/standards#API-08)).

## Garde-fous

- Aucune écriture dans un système de production sans l'accord écrit de son propriétaire et sans essai préalable en environnement de test.
- Ne jamais contourner un contrôle d'accès du client, même provisoirement.
- Ne pas exposer à un agent un outil dont sa mission n'a pas besoin.
- Les tests de charge sur un système du client se planifient avec son équipe.

## Enchaînements

- **Amont** : [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).
- **Aval** : [Automatiser les tests](/skills/automatiser-tests), [Mener les tests techniques](/skills/tester-technique).
- **Workflow** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment).
- **Ressources** : [Concevoir les outils d'un agent](/frameworks/conception-outils), [Protocoles d'interopérabilité : MCP et A2A](/frameworks/protocoles-mcp-a2a), [Revue de préparation des données et du SI](/templates/revue-donnees-si), [Les outils avant les prompts](/savoir/outils-avant-prompts).
