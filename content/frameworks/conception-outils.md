---
id: conception-outils
titre: "Concevoir les outils d'un agent"
resume: "Les règles pour concevoir des outils qu'un agent utilise juste : orientés tâche, sans ambiguïté, aux réponses exploitables, sûrs par construction et testés avec l'agent lui-même."
categorie: agents
phases: [concevoir]
origine: "Maison, d'après Anthropic"
niveau: fondamental
tags: [outils, conception, securite]
templates: [specification-outil]
lies: [anatomie-agent, garde-fous, protocoles-mcp-a2a, context-engineering]
---

## En bref

Un outil est l'interface entre un modèle et le système d'information. L'agent ne voit de cet outil que son nom, sa description, ses paramètres et ce qu'il renvoie : c'est sa seule documentation. Un outil mal conçu produit des erreurs qu'aucun prompt ne rattrape. Anthropic recommande de soigner l'interface agent-outil autant qu'une interface homme-machine ; l'expérience terrain le confirme : **c'est l'investissement au meilleur rendement sur un agent.**

Pour un FDE, l'outil est aussi la frontière de sécurité : ce que l'outil ne permet pas, l'agent ne peut pas le faire.

## Quand l'utiliser

- En phase [Concevoir](/methode/concevoir), pour chaque outil listé dans la [fiche agent](/templates/fiche-agent), avant d'écrire le system prompt.
- Quand un agent choisit le mauvais outil, invente des paramètres ou enchaîne des appels inutiles.
- Avant d'exposer une API existante à un agent via une passerelle.

## Comment l'appliquer

### 1. Appliquer les neuf règles

| Règle | Concrètement | Erreur évitée |
| --- | --- | --- |
| **Orienté tâche** | Un outil par intention métier, pas un par point d'API ; il agrège les appels nécessaires | L'agent orchestre cinq appels bas niveau et se perd |
| **Nom explicite** | `domaine.verbe_objet`, sans synonyme entre outils | Confusion entre deux outils proches |
| **Description complète** | Ce qu'il fait, quand l'utiliser, quand ne pas l'utiliser, effets de bord | Usage hors contexte |
| **Paramètres sans ambiguïté** | Types stricts, énumérations, unités, formats ; identifiants plutôt que texte libre | Paramètres inventés ou mal formatés |
| **Réponse concise et exploitable** | Champs utiles à la décision, libellés lisibles, pagination | Contexte saturé, information clé noyée |
| **Erreurs actionnables** | Dire ce qui a échoué et quoi faire ensuite | Boucles de nouvelles tentatives à l'identique |
| **Idempotence** | Clé d'idempotence sur toute écriture | Actions exécutées deux fois |
| **Lecture et écriture séparées** | Jamais un outil qui lit et écrit à la fois | Écriture déclenchée par une simple consultation |
| **Moindre privilège** | Périmètre filtré par le contexte du cas, droits propres à chaque agent | Accès à des données hors périmètre |

### 2. Classer le risque et fixer l'approbation

Pour chaque outil d'écriture : réversibilité, impact, règle d'approbation. Le contrôle s'exécute dans l'outil ou la passerelle, pas dans le prompt. Voir [garde-fous](/frameworks/garde-fous).

### 3. Tester avec l'agent

Rejouer le golden set et lire les traces : outil choisi, paramètres passés, nombre d'appels, erreurs. Mesurer le taux d'appels erronés par outil. Réécrire la description ou la réponse de l'outil, puis remesurer. Faire aussi lire la spécification à l'agent et lui demander ce qu'il en comprend : les ambiguïtés apparaissent vite.

### 4. Documenter

Une [spécification d'outil](/templates/specification-outil) par outil : contrat, risque, propriétaire, règle d'approbation, exemples d'appels.

## Exemple

`reseau.executer_action` est l'outil le plus sensible de SAV Augmenté : il agit sur le réseau. La première version exposait directement l'API de configuration ; elle a été refondue.

| Aspect | Conception retenue |
| --- | --- |
| Intention | Exécuter **une action du catalogue de remédiation** sur le service d'un client, pas une commande arbitraire |
| Paramètres | `action_id` (énumération du catalogue), `service_id` (identifiant du ticket en cours, imposé par la passerelle), `motif` (texte court tracé), `cle_idempotence`, `simulation` (booléen) |
| Réponse | Statut, résultat de la vérification post-action, état du service avant et après, identifiant d'exécution |
| Erreurs | « Action hors catalogue à risque faible : approbation humaine requise, demande créée » ; « Action déjà exécutée avec cette clé : résultat précédent renvoyé » |
| Risque et approbation | Catalogue à risque faible exécuté en L3 ; toute autre action passe en L2, approbation du superviseur de cas |
| Privilège | Accordé au seul Agent Résolution ; l'Agent Diagnostic n'y a pas accès |

Le paramètre `simulation` a servi pendant les deux semaines de mode fantôme : l'agent préparait et « exécutait » ses actions sans effet réel, ce qui a permis de comparer ses décisions à celles des conseillers. La même logique d'idempotence, appliquée après coup à `client.envoyer_message`, a corrigé en S24 les deux incidents de messages envoyés en double.

## Pièges à éviter

- **Exposer l'API telle quelle.** Parade : partir des intentions métier de la fiche agent, pas du catalogue d'API.
- **Descriptions écrites pour des développeurs.** Parade : écrire pour un lecteur qui ne connaît pas le SI et doit choisir entre neuf outils.
- **Renvoyer tout ce que l'API renvoie.** Parade : ne garder que les champs utiles à la décision ; le reste reste accessible par identifiant.
- **Messages d'erreur techniques.** Un code HTTP n'apprend rien à l'agent. Parade : chaque erreur dit quoi faire ensuite.
- **Écriture sans idempotence.** Parade : clé obligatoire sur tout outil qui écrit, testée par rejeu.

## Pour aller plus loin

- Frameworks : [anatomie d'un agent](/frameworks/anatomie-agent), [garde-fous](/frameworks/garde-fous), [protocoles MCP et A2A](/frameworks/protocoles-mcp-a2a)
- Template : [spécification d'outil](/templates/specification-outil)
- Savoir terrain : [les outils avant les prompts](/savoir/outils-avant-prompts), [mode fantôme](/savoir/mode-fantome)
- Référence : Anthropic, « Building Effective Agents » — le soin à apporter à l'interface agent-outil.
