---
name: generer-code
description: "Génère le code d'un incrément à partir des spécifications et de l'architecture : lecture des conventions du dépôt, plan avant code, petits changements testés, vérification par l'exécution et demande de fusion décrite. À utiliser pour construire une tranche verticale ou une évolution, dans le dépôt du client."
metadata:
  titre: "Générer le code d'un incrément"
  version: "1.0.0"
  statut: publie
  etape: developpement
  sous-processus: generation-code
  role: build
  domaine: ingenierie
  phases: [construire]
  technologies: []
  cas-usage: [tout-projet]
  tags: [generation-code, increment, tranche-verticale, tests, demande-de-fusion]
  proprietaire: build
  diffusion: interne
  entrees: ["Fiche de conception du segment et critères d'acceptation", "Dossier d'architecture et décisions", "Dépôt de code et ses conventions"]
  sorties: ["Demande de fusion avec code et tests", "Description du changement et points à relire"]
  prerequis: [rediger-specifications, concevoir-architecture-technique]
---

## Mission

Produire un incrément qui marche, qui se lit et qui se relit vite. Le skill guide un agent de développement, sous la responsabilité du FDE Build, de la spécification à la demande de fusion. Du code généré vite et mal vérifié coûte plus cher à relire qu'à écrire : la valeur est dans la preuve qu'il fait ce qui est spécifié.

## Quand l'utiliser

- Un segment est déclaré prêt à construire.
- Une évolution ou un correctif est décidé et tracé.

Ne pas l'utiliser sans critères d'acceptation : repasser par [Rédiger les spécifications](/skills/rediger-specifications). Le prompt d'un agent s'écrit avec [Écrire le system prompt d'un agent](/skills/ecrire-system-prompt) ; le branchement sur un système du client avec [Intégrer au SI du client](/skills/integrer-au-si).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La fiche de conception et ses critères d'acceptation | Oui | S'arrêter et demander. |
| L'accès au dépôt et à un environnement où exécuter | Oui | S'arrêter : on ne livre pas du code non exécuté. |
| Les conventions du dépôt : structure, style, tests, guide de contribution | Oui | Les déduire du code existant et les faire confirmer. |
| Le dossier d'architecture et les décisions écrites | Non | Demander au FDE Build avant tout choix structurant. |

## Procédure

1. **Lire avant d'écrire.** Parcourir la structure du dépôt, le guide de démarrage, les conventions, un module voisin et ses tests. Lancer la suite de tests : elle doit passer avant tout changement.
2. **Reformuler l'incrément** : ce qui doit marcher à la fin, sur quels cas, et ce qui n'en fait pas partie.
3. **Écrire le plan.** Fichiers touchés, ordre des changements, tests à ajouter. Un plan qui dépasse une dizaine de fichiers se découpe en plusieurs demandes de fusion.
4. **Viser la tranche verticale.** Faire traverser tout le système à un cas étroit plutôt que de finir une couche : entrée, traitement, effet, trace.
5. **Écrire les tests avec le code.** Un test par critère d'acceptation, plus les chemins d'erreur. Le test échoue d'abord, passe ensuite.
6. **Coder dans le style du dépôt.** Réutiliser l'existant, garder la logique déterministe hors des appels de modèle, traiter les erreurs explicitement : délai d'expiration sur tout appel externe, nouvelles tentatives bornées.
7. **Ne rien introduire sans raison.** Pas de dépendance nouvelle sans justification écrite et version épinglée. Aucun secret dans le code, les journaux ou les prompts.
8. **Vérifier en exécutant.** Lancer tests, formateur et analyse statique. Exécuter l'incrément sur les cas réels joints aux spécifications. Relire son propre diff et retirer ce qui n'est pas nécessaire.
9. **Ouvrir la demande de fusion** : ce qui change et pourquoi, comment cela a été vérifié, ce qui n'est pas traité, où le relecteur doit regarder de près.

## Livrable

Une demande de fusion contenant :

1. Le code de l'incrément, limité à son objet.
2. Les tests correspondant aux critères d'acceptation et aux chemins d'erreur.
3. La documentation touchée, mise à jour dans la même demande.
4. Une description : objet, lien vers la fiche de conception, vérifications faites et leurs résultats, limites connues, points d'attention.

## Critères de qualité

- La suite de tests passe, et chaque critère d'acceptation a son test ([LOG-03](/standards#LOG-03)).
- Formateur et analyse statique passent sans exception ajoutée ([LOG-07](/standards#LOG-07)).
- Aucune dépendance non déclarée ni non épinglée ([LOG-05](/standards#LOG-05)).
- Les erreurs et les appels externes sont traités explicitement ([LOG-06](/standards#LOG-06)).
- Aucun secret dans le dépôt ([OPS-01](/standards#OPS-01)).
- La description dit ce qui a été exécuté, et ce qui ne l'a pas été.

## Garde-fous

- Le code est relu et approuvé par un pair humain avant d'atteindre la branche principale ([LOG-01](/standards#LOG-01)) : l'agent ne fusionne pas son propre travail.
- Le code vit dans le dépôt du client, sous ses règles d'accès ([LOG-02](/standards#LOG-02)).
- Ne jamais déclarer « testé » ce qui n'a pas été exécuté ; ne jamais désactiver un test pour faire passer la suite.
- Aucune donnée de production dans les tests ni dans les exemples.
- Une règle métier absente des spécifications est une question au FDE Design, pas une supposition dans le code.

## Enchaînements

- **Amont** : [Rédiger les spécifications](/skills/rediger-specifications), [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).
- **Aval** : [Appliquer les standards d'ingénierie](/skills/appliquer-standards), [Mener une revue de code](/skills/revoir-code).
- **Workflow** : [Construire un incrément vérifié](/skills/workflows/construire-un-increment).
- **Ressources** : [La tranche verticale](/savoir/tranche-verticale), [Les outils avant les prompts](/savoir/outils-avant-prompts), [Développement piloté par les évaluations](/frameworks/eval-driven-development), [Standards d'ingénierie](/standards).
