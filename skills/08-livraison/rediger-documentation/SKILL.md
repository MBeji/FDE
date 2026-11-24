---
name: rediger-documentation
description: "Rédige et tient à jour la documentation de ceux qui reprendront le système : dossier d'architecture, décisions, runbook d'exploitation, documentation des agents (fiche, prompts, outils, évaluations), guide de démarrage et guides utilisateur par rôle. À utiliser au fil de chaque incrément, et avant le transfert pour la compléter et la faire éprouver."
metadata:
  titre: "Rédiger la documentation"
  version: "1.0.0"
  statut: publie
  etape: livraison
  sous-processus: documentation
  role: build
  domaine: ingenierie
  phases: [industrialiser, perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [documentation, runbook, guide-utilisateur, transfert, exploitabilite]
  proprietaire: build
  diffusion: client
  entrees: ["Système construit, dépôt et décisions d'architecture", "Fiches agent, prompts, outils et rapports d'évaluation", "Profils des lecteurs : exploitation, développement, utilisateurs"]
  sorties: ["Documentation technique et d'exploitation dans le dépôt", "Guides utilisateur par rôle", "Compte rendu de l'épreuve par un tiers"]
  prerequis: [concevoir-architecture-technique]
---

## Mission

Permettre à quelqu'un qui n'a pas construit le système de le comprendre, de l'exploiter et de le faire évoluer. Le skill guide la rédaction de la documentation au fil de la construction, puis sa mise à l'épreuve avant le transfert. Une documentation se juge à un seul critère : un tiers réussit-il avec elle, sans appeler l'auteur ?

## Quand l'utiliser

- À chaque incrément : la documentation change dans la même demande de fusion que le code.
- Avant la mise en production : runbook et guides utilisateur complets.
- Avant le transfert : relecture d'ensemble et épreuve par l'équipe qui reprend.

Ne pas l'utiliser pour produire un document de fin de mission écrit d'un bloc : ce qui est rédigé après coup décrit ce dont on se souvient, pas ce qui est.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le système tel qu'il est : dépôt, configuration, pipeline | Oui | Le lire : la documentation décrit le réel, pas le prévu. |
| Les décisions d'architecture et leurs raisons | Oui | Les reconstituer avec le FDE Build et les écrire. |
| Les lecteurs visés et ce qu'ils doivent savoir faire | Oui | Les lister avec le client avant d'écrire. |
| Les incidents et questions déjà survenus | Non | Interroger le support : ce sont les meilleures entrées du runbook. |

## Procédure

1. **Partir des lecteurs et de leurs tâches.** L'exploitant doit diagnostiquer et rétablir ; le développeur doit installer, modifier et livrer ; l'utilisateur doit travailler avec le système et reprendre la main ; le propriétaire du processus doit piloter. Chaque document sert une de ces tâches.
2. **Tenir le dossier d'architecture à jour** : composants, flux de données, frontières de confiance, dépendances externes, avec les décisions et leurs raisons.
3. **Écrire le guide de démarrage** : installer le projet et lancer ses tests en local, en moins d'une demi-journée.
4. **Documenter chaque agent** : sa fiche, son prompt et son historique, ses outils et leurs droits, son golden set, ses derniers résultats d'évaluation, son niveau d'autonomie et les conditions de son relèvement.
5. **Rédiger le runbook** par service et par agent : ce que signifie chaque alerte, le diagnostic des pannes courantes, le coupe-circuit, le mode dégradé, le retour arrière, les contacts et l'escalade. Des commandes exactes, pas des principes.
6. **Décrire les opérations courantes** : livrer une évolution, modifier un prompt et rejouer les évaluations, ajouter un cas au golden set, changer de version de modèle, faire tourner les secrets.
7. **Écrire les guides utilisateur par rôle** : ce que fait l'agent et ce qu'il ne fait pas, comment vérifier, corriger, reprendre la main et signaler une erreur.
8. **Ranger au bon endroit** : la documentation technique dans le dépôt, à côté du code ; les guides utilisateur là où les utilisateurs travaillent.
9. **Éprouver.** Faire exécuter par un membre de l'équipe du client, sans aide : une installation, un diagnostic d'alerte, un retour arrière, une modification de prompt. Corriger chaque endroit où il bute.

## Livrable

1. Le [Dossier d'architecture du système multi-agents](/templates/dossier-architecture-multi-agents) à jour, et les [Relevés de décision d'architecture (ADR)](/templates/adr).
2. Le guide de démarrage du dépôt.
3. Par agent : [Fiche agent](/templates/fiche-agent), prompt versionné, spécifications d'outils, dernier rapport d'évaluation ; l'ensemble référencé au [Registre des agents](/templates/registre-agents).
4. Le [Runbook d'exploitation](/templates/runbook-agent), par service et par agent.
5. Les procédures des opérations courantes.
6. Les guides utilisateur par rôle.
7. Le compte rendu de l'épreuve : qui a exécuté quoi, ce qui a été corrigé.

## Critères de qualité

- Le dossier d'architecture décrit le système en service ([ARC-02](/standards#ARC-02)).
- Un nouvel arrivant lance le projet et ses tests en moins d'une demi-journée ([LOG-08](/standards#LOG-08)).
- Chaque service et chaque agent a un runbook, exercé par l'équipe du client ([ARC-04](/standards#ARC-04)).
- La documentation vit dans le dépôt et change avec le code ([ARC-08](/standards#ARC-08)).
- Chaque procédure a été exécutée par quelqu'un d'autre que son auteur.
- Aucun secret, aucune donnée personnelle, aucun détail de faille non corrigée.

## Garde-fous

- Ne décrire que ce qui a été vérifié dans le système réel ; marquer `[À CONFIRMER]` ce qui ne l'a pas été.
- Ne jamais écrire de secret dans la documentation : renvoyer au coffre.
- La documentation remise au client ne contient ni élément commercial, ni information sur d'autres clients.
- Les guides utilisateur sont relus par un manager du métier avant diffusion.

## Enchaînements

- **Amont** : [Concevoir l'architecture technique](/skills/concevoir-architecture-technique).
- **Aval** : [Transférer les compétences](/skills/transferer-competences), [Assurer le support](/skills/assurer-support).
- **Workflow** : [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
- **Ressources** : [La dépendance au FDE](/savoir/dependance-fde), [AgentOps : exploiter des agents en production](/frameworks/agentops), [Standards d'ingénierie](/standards).
