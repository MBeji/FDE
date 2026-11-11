---
id: outils-avant-prompts
titre: "Les outils avant les prompts"
resume: "Investir d'abord dans la qualité des outils et du contexte fournis à l'agent. La plupart des erreurs qu'on tente de corriger dans le prompt naissent à l'interface entre l'agent et ses outils."
type: pattern
phases: [concevoir, construire]
tags: [outils, contexte, ingenierie]
secteur: ""
date: ""
---

## Contexte

L'agent se trompe, l'équipe ajoute un paragraphe au system prompt. Six semaines plus tard, le prompt fait quatre pages d'exceptions qui se contredisent, et l'agent appelle toujours le mauvais outil avec le mauvais identifiant. La cause est ailleurs : noms d'outils ambigus, réponses d'API brutes de trois cents champs, messages d'erreur illisibles.

## Le pattern

Traiter l'interface agent-outil comme un produit. Concevoir d'abord des outils pensés pour l'agent — pas un miroir des API existantes — et soigner ce qui entre dans son contexte. Le prompt vient ensuite, et il reste court.

## Pourquoi ça marche

- **L'agent choisit sur le nom, la description et les paramètres.** Une ambiguïté à cet endroit ne se rattrape pas de façon fiable par une consigne.
- **Les résultats d'outils occupent l'essentiel du contexte.** Leur bruit dégrade le raisonnement et alourdit le coût.
- **Une contrainte dans l'outil est déterministe, une consigne est probabiliste.** Filtrer sur l'identifiant client du ticket dans l'outil vaut mieux que l'interdire dans le prompt.
- **Moins d'outils par agent, mieux conçus, réduisent les erreurs de sélection.** Chez Voxalis, la justesse du diagnostic passait de 91 % à 84 % quand un seul agent portait les neuf outils et les règles de remédiation.

## Mise en œuvre

1. **Lire les traces avant de toucher au prompt.** Classer cinquante erreurs : mauvais outil, mauvais paramètres, résultat mal lu, information absente, raisonnement faux. Corriger là où l'erreur naît.
2. **Concevoir l'outil au niveau de la tâche.** `supervision.etat_service` rend l'état du service et les alarmes du client du ticket, pas un export de la supervision.
3. **Décrire l'outil comme à un nouveau collègue** : quand l'utiliser, quand ne pas l'utiliser, format des paramètres avec un exemple, ce qui revient. Préfixer par système (`crm.`, `reseau.`).
4. **Renvoyer peu et lisible** : champs nommés en clair, calculs faits par le code, pagination, identifiants stables.
5. **Écrire des erreurs qui disent quoi faire** : « site introuvable, vérifier le format de l'identifiant de site » plutôt qu'un code 500.
6. **Mettre les garde-fous dans l'outil** : filtre de périmètre, approbation, dédoublonnage. Les messages envoyés en double pendant le pilote Voxalis relèvent de ce niveau : un contrôle dans `client.envoyer_message`, pas une consigne de plus.
7. **Évaluer la sélection d'outils** sur un jeu dédié, rejoué à chaque modification d'une description.

Consigner chaque outil dans une [spécification d'outil](/templates/specification-outil), avec son propriétaire côté SI.

## Limites

- **Un prompt clair reste nécessaire** : rôle, priorités, conditions d'escalade. Il est court parce que les outils portent le reste.
- **Un outil qui fait tout cache un workflow.** Si la séquence est toujours la même, l'assumer ; voir [faut-il un agent ?](/frameworks/faut-il-un-agent)
- **Le coût est côté SI.** Chaque outil a un propriétaire, des droits, une maintenance. Le négocier en phase Concevoir.
- **Certaines erreurs sont de vraies lacunes de connaissance.** Elles se traitent par le contexte : règles, exemples, documents à jour.

Voir aussi : [conception des outils](/frameworks/conception-outils), [context engineering](/frameworks/context-engineering), [protocoles MCP et A2A](/frameworks/protocoles-mcp-a2a), [écrire un system prompt](/guides/ecrire-system-prompt).
