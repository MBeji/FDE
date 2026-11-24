---
name: concevoir-architecture-technique
description: "Traduit l'architecture fonctionnelle en composants, intégrations, flux de données, identités, environnements, observabilité et coûts, dans les contraintes du SI du client, et produit le dossier d'architecture. À utiliser avant le jalon de conception, puis à chaque évolution structurante du système."
metadata:
  titre: "Concevoir l'architecture technique"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: architecture
  role: build
  domaine: architecture
  phases: [concevoir]
  technologies: [llm-agents, api-integration, cloud]
  cas-usage: [tout-projet]
  tags: [architecture-technique, composants, integration, securite, observabilite, dossier-architecture]
  proprietaire: build
  diffusion: interne
  entrees: ["Architecture fonctionnelle", "Revue de préparation des données et du SI", "Exigences non fonctionnelles et politique de sécurité du client"]
  sorties: ["Dossier d'architecture", "Liste des décisions d'architecture à trancher", "Besoins en environnements et en accès"]
  prerequis: [concevoir-architecture-fonctionnelle, evaluer-donnees-si]
---

## Mission

Arrêter comment le système sera construit, déployé et exploité chez ce client. Le skill produit pour le FDE Build le dossier d'architecture : composants, flux, frontières de confiance, exploitation, coûts. Une architecture se juge à ce qu'elle rend possible le jour d'une panne, d'un audit ou d'un changement de modèle.

## Quand l'utiliser

- L'architecture fonctionnelle est relue et le jalon G4 approche.
- Un nouvel agent, un nouvel outil ou une nouvelle source de données entre dans le système.
- Une contrainte du client change : hébergement, sécurité, volumétrie.

Ne pas l'utiliser pour trancher un choix isolé : chaque choix structurant se documente par [Arbitrer un choix technologique](/skills/arbitrer-choix-technologiques).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| L'architecture fonctionnelle : blocs, flux, objets de données | Oui | Repasser par l'architecture fonctionnelle. |
| La revue des données et du SI | Oui | La mener d'abord : on ne conçoit pas sur un SI non vu. |
| Les exigences non fonctionnelles : volumes, latence, disponibilité, coût par cas | Oui | Les faire fixer par le propriétaire du processus ; marquer `[À CONFIRMER]`. |
| La politique de sécurité et d'hébergement du client | Oui | La demander au RSSI. |
| La plateforme et les standards techniques du client | Non | Interroger son architecte avant de proposer. |

## Procédure

1. **Chiffrer les exigences.** Volume de cas, latence acceptable, disponibilité, perte de données tolérée, durée de reprise, budget par cas. Sans chiffres, aucune option ne se compare.
2. **Partir de l'existant du client.** Plateforme, hébergement, identités, supervision déjà en place : réutiliser avant d'ajouter.
3. **Faire correspondre blocs et composants.** Pour chaque bloc fonctionnel : le composant qui le porte, son mode d'exécution, son état. Garder la logique déterministe dans le code et réserver les modèles à ce qui demande d'interpréter.
4. **Choisir la topologie d'agents** la plus simple : un agent avec ses outils, puis un enchaînement piloté par le code, et seulement ensuite plusieurs agents coordonnés. Décrire l'orchestration et la gestion de l'état.
5. **Concevoir l'accès au SI.** Une couche d'outils dédiée entre les agents et les systèmes, qui applique authentification, autorisation et journalisation. Chaque agent a sa propre identité et les droits de sa mission.
6. **Tracer les flux de données et les frontières de confiance.** Où vont les données, lesquelles quittent l'environnement du client, ce qui est chiffré, conservé, masqué. Tout contenu externe est traité comme non fiable.
7. **Prévoir l'exploitation dès maintenant** : traces de bout en bout, journal d'audit des actions à effet, indicateurs de qualité, coupe-circuit par agent et par outil, mode dégradé, retour arrière.
8. **Estimer les coûts** : coût par cas, coût mensuel au volume cible, sensibilité au volume.
9. **Définir les environnements et le chemin de déploiement.**
10. **Lister les décisions à trancher** et les risques ouverts, puis faire relire par l'architecte et le RSSI du client.

## Livrable

Le [Dossier d'architecture du système multi-agents](/templates/dossier-architecture-multi-agents), utilisé aussi pour un agent unique : contexte et objectifs, exigences, topologie, agents, orchestration et gestion de l'état, outils et passerelle, données et connaissances, sécurité, observabilité, déploiement, coûts, décisions d'architecture, risques et points ouverts.

## Critères de qualité

- Les exigences non fonctionnelles sont chiffrées et chaque choix s'y rattache.
- Chaque bloc fonctionnel a son composant ; aucun composant sans bloc.
- Les agents n'accèdent au SI que par la couche d'outils ([API-01](/standards#API-01)), chacun sous une identité à moindre privilège ([CLD-03](/standards#CLD-03)).
- Les flux de données et les frontières de confiance sont dessinés ([ARC-02](/standards#ARC-02)), la résidence des données respectée ([CLD-04](/standards#CLD-04)).
- Traces, journal d'audit et coupe-circuit sont conçus, pas reportés ([OBS-02](/standards#OBS-02), [OBS-03](/standards#OBS-03)).
- Le coût par cas est estimé et comparé au budget ([MLO-05](/standards#MLO-05)).

## Garde-fous

- L'architecture et les flux de données sont validés par le RSSI du client avant le pilote ([SEC-02](/standards#SEC-02)) : le skill prépare le dossier, il ne vaut pas validation.
- Ne retenir aucun composant que le client ne pourra pas exploiter ou qui contrevient à sa politique.
- Ne pas introduire de multi-agents pour un problème qu'un agent ou un workflow résout.
- Rester neutre : le dossier décrit des catégories de composants ; le choix d'un produit passe par une décision d'architecture écrite.

## Enchaînements

- **Amont** : [Concevoir l'architecture fonctionnelle](/skills/concevoir-architecture-fonctionnelle), [Passer en revue les données et le SI](/skills/evaluer-donnees-si).
- **Aval** : [Spécifier un agent](/skills/specifier-agent), [Intégrer au SI du client](/skills/integrer-au-si), [Préparer les environnements](/skills/preparer-environnements), [Générer le code d'un incrément](/skills/generer-code), [Rédiger la documentation](/skills/rediger-documentation).
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Architecture de référence d'un système agentique](/frameworks/architecture-reference), [Topologies multi-agents](/frameworks/topologies-multi-agents), [Patterns agentiques](/frameworks/patterns-agentiques), [Protocoles d'interopérabilité : MCP et A2A](/frameworks/protocoles-mcp-a2a), [Mémoire et connaissance](/frameworks/memoire-connaissance), [Context engineering](/frameworks/context-engineering).
