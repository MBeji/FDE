---
name: cartographier-parties-prenantes
description: "Recense les acteurs d'une mission, situe chacun selon son influence et son adhésion sur des faits, écrit ce qu'il gagne et ce qu'il craint, repère les pouvoirs de blocage et en tire un plan d'engagement avec un responsable par relation. À utiliser dès la première semaine du cadrage, puis avant chaque jalon ou COPIL, et quand le processus cible fait entrer de nouveaux acteurs (DRH, managers, représentants du personnel)."
metadata:
  titre: "Cartographier les parties prenantes"
  version: "1.0.0"
  statut: publie
  etape: cadrage
  sous-processus: cadrage
  role: design
  domaine: changement
  phases: [cadrer]
  technologies: []
  cas-usage: [tout-projet]
  tags: [parties-prenantes, influence, adhesion, plan-engagement, adoption, stakeholders, sponsor, acteurs]
  proprietaire: design
  diffusion: interne
  entrees: ["Charte de mission ou son projet", "Comptes rendus d'échanges avec les acteurs", "Organigramme du domaine et des fonctions garantes"]
  sorties: ["Cartographie des parties prenantes", "Plan d'engagement et de communication"]
  prerequis: [cadrer-mission]
---

## Mission

Savoir qui décide, qui peut bloquer et qui vivra avec le résultat, puis organiser la relation avec chacun. Le skill produit, pour le FDE Design, la carte des parties prenantes et le plan d'engagement de la mission. Une mission échoue rarement sur la technique, souvent sur un acteur oublié.

## Quand l'utiliser

- Dans la première semaine du cadrage, avant de figer la gouvernance.
- Avant chaque jalon ou COPIL, pour préparer les échanges préalables.
- Quand le processus cible change des métiers : de nouveaux acteurs entrent sur la carte.

Pour le plan de conduite du changement par population, utiliser [Accompagner le client dans le changement](/skills/accompagner-client).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La charte de mission ou son projet : sponsor, périmètre | Oui | Renvoyer vers [Cadrer la mission](/skills/cadrer-mission). |
| Des échanges réels avec les acteurs : comptes rendus, propos datés | Oui | Ne rien coter de mémoire : position « supposée », échange à planifier. |
| L'organigramme du domaine et des fonctions garantes | Non | Le demander au propriétaire du processus ; lister les rôles sans nom. |
| Le calendrier social et les instances représentatives | Non | Le demander à la DRH ; marquer `[À CONFIRMER]`. |

## Procédure

1. **Recenser large, en personnes.** Sponsor, propriétaire du processus, détenteurs d'un veto (DSI, sécurité, protection des données, juridique, finance), RH, managers de proximité, populations dont le travail change, instances représentatives. Demander à chacun : « qui d'autre peut ralentir ou bloquer ce projet, même sans le vouloir ? » Un rôle sans nom est un trou à combler.
2. **Coter l'influence de 1 à 5.** 5 : décide ou dispose d'un veto. 4 : peut bloquer ou retarder un jalon. 3 : leader d'opinion ou détenteur d'une ressource nécessaire. 2 : consulté. 1 : informé.
3. **Coter l'adhésion de −2 à +2.** Opposé, réservé, neutre, favorable, moteur. Marquer chaque position C (constatée : un propos ou un acte daté) ou S (supposée, à vérifier au prochain contact). Un silence n'est pas une adhésion.
4. **Écrire ce que chacun gagne, perd et craint.** Une crainte dit presque toujours quelque chose de vrai : la transformer en exigence du projet plutôt qu'en argumentaire.
5. **Placer les acteurs dans la matrice et fixer la stratégie.**

   | Position | Stratégie |
   | --- | --- |
   | Influence 4 ou 5, opposé ou réservé | À traiter en premier : écouter, traiter la crainte, co-construire |
   | Influence 4 ou 5, neutre | À gagner avant le prochain jalon |
   | Influence 4 ou 5, favorable ou moteur | Associer aux décisions, faire porter le message |
   | Influence 3 ou moins, favorable | Relais : testeurs et ambassadeurs |
   | Influence 3 ou moins, réservé | Écouter, informer, surveiller les déplacements |

6. **Planifier les déplacements.** Par acteur à déplacer : position actuelle et visée, jalon limite, action, responsable unique de la relation, signal de réussite observable. L'action est un acte, pas un message : une décision confiée, une démonstration sur ses propres cas, un engagement écrit.
7. **En déduire le plan de communication** : cible, objectif, message clé, canal, rythme, émetteur. La direction parle de l'emploi, le manager de l'équipe, le FDE du système.
8. **Tenir la carte à jour.** La revoir à chaque vague d'entretiens et avant chaque jalon ; consigner chaque changement de position avec le fait qui l'a déclenché.

## Livrable

La [Cartographie des parties prenantes](/templates/carte-parties-prenantes), en six parties :

1. Échelles de cotation.
2. Registre : acteur, rôle, intérêt, influence, position, attentes, craintes, stratégie, responsable de la relation.
3. Matrice influence × adhésion, lue en trois phrases : où est la coalition, où est le risque, qui manque.
4. Acteurs à déplacer.
5. Plan de communication.
6. Journal des évolutions.

## Critères de qualité

- Chaque ligne nomme une personne ou une population, jamais une direction.
- Chaque position est constatée ou supposée, avec le fait daté qui la fonde.
- Chaque acteur d'influence 4 ou 5 a une crainte écrite, pas seulement des attentes.
- Chaque relation a un responsable unique dans l'équipe.
- Chaque acteur à déplacer a une action datée et un signal de réussite.
- Sécurité, protection des données, juridique, finance et RH figurent sur la carte, ou leur absence est écrite comme un risque.

## Garde-fous

- La carte porte des jugements sur des personnes : elle ne sort pas de l'équipe de mission et ne se verse dans aucun outil que le client n'a pas autorisé. Écrire des faits, pas des appréciations.
- Le FDE Design valide les cotations et les actions ; l'agent ne contacte aucun acteur.
- Ne jamais inventer une position ou un propos : sans échange réel, écrire « supposée » et `[À CONFIRMER]`.
- L'emploi, la rémunération et la classification relèvent de la direction et de la DRH, qui conduit seule le dialogue avec les représentants du personnel. Ne rien promettre que la direction n'ait écrit.
- Signaler au FDE Design un sponsor qui n'arbitre plus.

## Enchaînements

- **Amont** : [Cadrer la mission](/skills/cadrer-mission).
- **Aval** : [Diagnostiquer le processus existant](/skills/diagnostiquer-processus), dont la carte fixe la liste d'entretiens ; [Piloter la mission](/skills/piloter-mission) ; [Accompagner le client dans le changement](/skills/accompagner-client).
- **Workflow** : [Du mandat au portefeuille arbitré](/skills/workflows/cadrer-et-cibler).
- **Ressources** : [Cartographier et engager les parties prenantes](/frameworks/cartographie-parties-prenantes), [Le modèle d'influence](/frameworks/modele-influence), [Embarquer les équipes et traiter les résistances](/guides/gerer-resistances), [Le sponsor fantôme](/savoir/sponsor-fantome).
