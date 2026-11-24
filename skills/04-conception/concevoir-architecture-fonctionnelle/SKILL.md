---
name: concevoir-architecture-fonctionnelle
description: "Découpe la solution en blocs fonctionnels, acteurs, flux et objets de données, indépendamment de la technologie, et dit pour chaque bloc s'il relève d'un humain, d'une règle, d'un workflow ou d'un agent. À utiliser quand les spécifications existent et avant de choisir composants et technologies."
metadata:
  titre: "Concevoir l'architecture fonctionnelle"
  version: "1.0.0"
  statut: publie
  etape: conception
  sous-processus: architecture
  role: binome
  domaine: architecture
  phases: [concevoir]
  technologies: []
  cas-usage: [tout-projet]
  tags: [architecture-fonctionnelle, blocs, flux, tracabilite, conception, cartographie-fonctionnelle, urbanisation]
  proprietaire: build
  diffusion: interne
  entrees: ["Fiches de conception des segments", "Processus cible et matrice humain-agent", "Cartographie applicative existante"]
  sorties: ["Architecture fonctionnelle", "Matrice de traçabilité spécifications vers blocs", "Interfaces à préciser avec l'existant"]
  prerequis: [rediger-specifications]
---

## Mission

Poser la découpe de la solution avant de parler de technologie : quels blocs, qui fait quoi, quelles informations circulent. Le Design garantit que la découpe est fidèle au processus cible ; le Build répond de la cohérence des blocs et des interfaces. C'est le plan que le métier peut relire et que la technique peut construire.

## Quand l'utiliser

- Les spécifications des premiers segments sont signées.
- Un nouveau segment ou un nouveau cas d'usage s'ajoute au système.
- Deux équipes construisent en parallèle et doivent s'accorder sur les frontières.

Ne pas l'utiliser pour choisir des composants : c'est [Concevoir l'architecture technique](/skills/concevoir-architecture-technique). Pour une automatisation simple d'une seule étape, un schéma dans la fiche de conception suffit.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les fiches de conception : résultats, règles, droits de décision | Oui | Repasser par la rédaction des spécifications. |
| Le processus cible et ses voies | Oui | S'arrêter. |
| La cartographie des applications existantes | Non | La reprendre de la revue des données et du SI. |
| Les exigences non fonctionnelles connues | Non | Les lister comme questions pour l'architecture technique. |

## Procédure

1. **Lister les acteurs.** Rôles humains, agents envisagés, systèmes existants, tiers. Pour chacun : ce qu'il déclenche, ce qu'il reçoit, ce qu'il décide.
2. **Identifier les fonctions.** À partir des étapes du processus cible, regrouper ce qui sert un même résultat en blocs : un bloc a une responsabilité, des entrées, des sorties.
3. **Qualifier chaque bloc** sur l'échelle des solutions : tâche humaine outillée, règle, appel de modèle, workflow, agent. Retenir le barreau le plus bas qui suffit et noter pourquoi. Repérer les blocs transverses : accès aux données, contrôle et approbation, traçabilité, supervision.
4. **Tracer les flux.** Pour chaque voie du processus, dessiner l'enchaînement des blocs et l'information qui passe de l'un à l'autre. Marquer les points d'approbation humaine et les points de reprise.
5. **Décrire les objets de données** : les objets métier manipulés, leur système de référence, qui les crée, qui les modifie, ce qui doit être conservé pour reconstituer une décision.
6. **Fixer les frontières avec l'existant.** Ce que la solution lit, ce qu'elle écrit, dans quel système, et ce qui reste maître. Une donnée a un seul système de référence.
7. **Vérifier la couverture.** Dresser la matrice : chaque règle et chaque critère d'acceptation des spécifications est porté par un bloc ; chaque bloc sert au moins une spécification. Un bloc orphelin est supprimé.
8. **Éprouver sur des cas.** Dérouler trois cas réels, dont une exception, à travers les blocs. Corriger les endroits où l'information manque.
9. **Faire relire** par le propriétaire du processus pour la fidélité, par le FDE Build pour la constructibilité.

## Livrable

1. Carte des acteurs et de leurs responsabilités.
2. Schéma des blocs fonctionnels, avec le niveau de solution de chacun.
3. Flux par voie du processus, points d'approbation et de reprise marqués.
4. Objets de données et systèmes de référence.
5. Interfaces avec l'existant : sens, contenu, fréquence.
6. Matrice de traçabilité spécifications vers blocs.
7. Questions ouvertes pour l'architecture technique.

Ces éléments nourrissent les sections « Contexte et objectifs », « Exigences » et « Topologie » du [Dossier d'architecture du système multi-agents](/templates/dossier-architecture-multi-agents).

## Critères de qualité

- Aucun nom de produit ni de technologie dans le document.
- Chaque bloc a une responsabilité unique, des entrées et des sorties.
- Le niveau de solution de chaque bloc est justifié, conformément à [ARC-06](/standards#ARC-06).
- Chaque spécification est couverte, et aucun bloc n'est orphelin.
- Chaque objet de données a un système de référence unique.
- Les points d'approbation humaine du processus cible se retrouvent tous sur les flux.

## Garde-fous

- Le propriétaire du processus valide la fidélité à la cible ; le FDE Build valide la découpe : aucun des deux ne valide seul.
- Ne pas ajouter d'agent pour ordonner d'autres agents tant qu'un workflow suffit à les enchaîner.
- Ne pas déplacer une décision humaine vers un bloc automatisé sans repasser par la matrice humain-agent et son propriétaire.
- Une question non tranchée reste une question ouverte, visible, plutôt qu'un choix implicite.

## Enchaînements

- **Amont** : [Rédiger les spécifications](/skills/rediger-specifications).
- **Aval** : [Concevoir l'architecture technique](/skills/concevoir-architecture-technique), [Arbitrer un choix technologique](/skills/arbitrer-choix-technologiques).
- **Workflow** : [De la cible à la conception approuvée](/skills/workflows/concevoir-la-solution).
- **Ressources** : [Architecture de référence d'un système agentique](/frameworks/architecture-reference), [Architecture de processus : situer le périmètre](/frameworks/architecture-processus), [Topologies multi-agents](/frameworks/topologies-multi-agents), [Faut-il un agent ? L'échelle des solutions](/frameworks/faut-il-un-agent), [Le multi-agents prématuré](/savoir/multi-agents-premature).
