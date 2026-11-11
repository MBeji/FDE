---
id: eval-driven-development
titre: "Développement piloté par les évaluations"
resume: "Un cycle en six temps où le succès et le jeu de test sont définis avant l'agent, et où chaque changement est jugé par un score plutôt que par une impression."
categorie: industrialisation
phases: [concevoir, construire, industrialiser]
origine: "Maison"
niveau: fondamental
tags: [evals, golden-set, non-regression]
templates: [plan-evaluation, rapport-evaluation]
lies: [evaluation-agents, poc-pilote-production, agentops, context-engineering]
---

## En bref

Le comportement d'un agent change à chaque retouche de prompt, d'outil, de modèle ou de base documentaire. Sans mesure, personne ne sait si la dernière modification a amélioré le système ou cassé ce qui marchait. Le développement piloté par les évaluations (eval-driven development) inverse l'ordre habituel : définir le succès, construire le jeu de test, mesurer une référence, puis seulement itérer, une modification à la fois. Le même jeu sert ensuite de filet de non-régression, puis de sonde en production.

C'est la conviction 5 de la méthode, « les évaluations avant les agents ». Pour le FDE, c'est ce qui transforme « ça a l'air de marcher » en preuve opposable au jalon G5.

## Quand l'utiliser

- Dès la phase [Concevoir](/methode/concevoir), avant la première ligne de prompt : voir [golden set au jour 1](/savoir/golden-set-jour-1).
- À chaque changement pendant la phase [Construire](/methode/construire) : prompt, définition d'outil, modèle, connaissances.
- En production, quand la qualité baisse sans cause visible.

Ne pas déployer cet outillage pour une règle déterministe (barreau 1 de [l'échelle des solutions](/frameworks/faut-il-un-agent)) : des tests unitaires suffisent. Ne pas confondre non plus score d'évaluation et valeur : un diagnostic juste ne dit rien du délai de résolution, qui relève de la [mesure d'impact](/frameworks/mesure-impact).

## Comment l'appliquer

### Le cycle en six temps

| Temps | Ce qu'on fait | Résultat attendu |
| --- | --- | --- |
| 1. Définir le succès | Fixer les critères et leurs seuils avec le propriétaire métier. Question : « à partir de quel score mettez-vous l'agent devant un client ? » | Seuils de passage signés |
| 2. Construire le jeu | Tirer des cas réels de l'historique, les faire annoter par les experts, ajouter cas limites et cas adverses. Quelques dizaines de cas suffisent pour démarrer | Golden set versionné |
| 3. Établir la référence | Mesurer la solution la plus simple et, si possible, la performance humaine actuelle | Point de départ chiffré |
| 4. Itérer | Une hypothèse, un seul changement, un nouveau passage, une comparaison. Garder ou annuler | Journal des expériences |
| 5. Verrouiller | Rejouer le jeu en intégration continue à chaque changement ; bloquer la livraison sous les seuils | Non-régression automatique |
| 6. Suivre en production | Noter un échantillon de cas réels ; verser chaque échec au jeu | Jeu vivant, dérives détectées |

### L'analyse d'erreurs, moteur du temps 4

Un score dit qu'il y a un problème, pas lequel. La réponse est dans les traces.

1. Prélever 50 à 100 cas en échec.
2. Lire chaque trace en entier : entrée, appels d'outils, résultats, sortie. Noter en une ligne ce qui a mal tourné, sans grille préalable.
3. Regrouper les notes en catégories et compter.
4. Traiter la catégorie la plus fréquente : une catégorie, une hypothèse, un changement.
5. Rejouer le jeu. Vérifier que la catégorie recule sans qu'une autre progresse.

Mener cette lecture avec un expert métier : il voit des erreurs que l'ingénieur ne voit pas, et inversement. Pour le choix des méthodes de notation (code, modèle juge, expert), voir [l'évaluation des agents](/frameworks/evaluation-agents).

## Exemple

Chez Voxalis, le golden set (600 cas annotés par les experts N2, 120 cas adverses) et les quatre seuils du [plan d'évaluation](/templates/plan-evaluation) existent avant le prototype. Au début du prototype, un agent unique limité au diagnostic atteint 91 % de justesse. Quand on lui confie aussi les neuf outils et les règles de remédiation, le score tombe à 84 %, sous le seuil de 90 %.

Léo et un expert N2 lisent 60 traces en échec en une demi-journée.

| Catégorie d'erreur | Cas | Changement décidé |
| --- | --- | --- |
| Outil mal choisi ou appelé dans le mauvais ordre | 26 | Séparer Diagnostic et Résolution en deux agents |
| Procédure tirée d'un article obsolète | 14 | Limiter `kb.rechercher` aux articles validés depuis moins de 12 mois |
| Incident collectif connu non vérifié d'abord | 11 | Règle de priorité dans les instructions |
| Annotation de référence contestable | 9 | Correction du golden set par les experts |

Chaque changement est rejoué séparément. En S21, les quatre seuils sont tenus sur le motif « perte de synchronisation de l'accès », ce qui ouvre le pilote. Depuis, le jeu est rejoué chaque nuit, et les deux incidents de messages envoyés en double (S24) y ont été ajoutés comme cas de test.

## Pièges à éviter

- **Juger à l'impression.** Trois essais concluants dans une console ne prouvent rien. Parade : aucun changement n'est retenu sans score avant et après, sur le jeu complet.
- **Changer plusieurs choses à la fois.** Le score bouge, personne ne sait pourquoi. Parade : une modification par passage, consignée dans le journal.
- **Se fier à un modèle juge non calibré.** Il note avec assurance, parfois à tort. Parade : mesurer son accord avec les experts sur une cinquantaine de cas avant de s'en servir.
- **Surajuster l'agent au jeu.** À force d'itérer sur les mêmes cas, le score monte et la production déçoit. Parade : réserver des cas jamais consultés pendant la mise au point, et renouveler le jeu avec des cas de production.
- **Regarder les scores sans lire les traces.** Parade : une revue de traces hebdomadaire, inscrite à l'agenda de l'équipe.

## Pour aller plus loin

- Frameworks : [évaluation des agents](/frameworks/evaluation-agents), [du POC à la production](/frameworks/poc-pilote-production), [AgentOps](/frameworks/agentops)
- Templates : [plan d'évaluation](/templates/plan-evaluation), [rapport d'évaluation](/templates/rapport-evaluation)
- Guide : [construire les evals](/guides/construire-les-evals)
- Savoir terrain : [golden set au jour 1](/savoir/golden-set-jour-1), [livrer sans evals](/savoir/livrer-sans-evals)
