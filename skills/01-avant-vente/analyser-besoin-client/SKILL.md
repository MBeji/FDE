---
name: analyser-besoin-client
description: "Passe de la solution demandée au problème métier : résultat attendu, indicateur, acteurs, processus touché, contraintes, existant et critères de succès du client. Produit une note de besoin et la liste des questions ouvertes. À utiliser après un go de qualification, quand la demande est formulée en solution (« il nous faut un agent ») et avant toute étude de faisabilité ou tout chiffrage."
metadata:
  titre: "Analyser le besoin du client"
  version: "1.0.0"
  statut: publie
  etape: avant-vente
  sous-processus: analyse-besoin
  role: design
  domaine: conseil
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [besoin, probleme-metier, decouverte, note-de-besoin, questions-ouvertes, expression-de-besoin]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Demande du client et comptes rendus d'échanges", "Fiche de qualification et décision de go", "Documents remis par le client (indicateurs, organisation, existant)"]
  sorties: ["Note de besoin", "Liste des questions ouvertes, classées"]
  prerequis: [qualifier-opportunite]
---

## Mission

Transformer une demande exprimée en solution en un problème métier écrit, mesurable et reconnu par le client. Le skill produit une note de besoin et la liste des questions ouvertes, que le FDE Design valide ; elles fondent l'étude de faisabilité et le chiffrage. Sans elles, on chiffre une solution et on découvre le problème en mission.

## Quand l'utiliser

- L'opportunité a reçu un go et le client accepte au moins un échange de découverte.
- La demande nomme une technologie (« un chatbot », « un agent pour les achats ») sans dire le résultat attendu.
- Le périmètre a changé depuis la qualification : la note se met à jour avant tout nouveau chiffrage.

Ne pas l'utiliser face à un dossier de consultation : passer par [Analyser le cahier des charges](/skills/analyser-cahier-des-charges), les questions suivant alors le canal officiel. Ne pas en faire un diagnostic : [Diagnostiquer le processus existant](/skills/diagnostiquer-processus) vient une fois la mission signée.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La demande du client, dans ses propres mots | Oui | S'arrêter et la demander au porteur du compte. |
| La fiche de qualification et la décision de go | Oui | Renvoyer vers [Qualifier une opportunité](/skills/qualifier-opportunite). |
| Un échange avec le demandeur ou le sponsor pressenti | Oui | Le faire planifier ; à défaut, rendre une note « sur pièces », tout en `[À CONFIRMER]`. |
| Indicateurs, volumes et coûts du périmètre | Non | Marquer `[À CONFIRMER]` et inscrire la question, avec la source attendue. |
| Description de l'existant et des initiatives passées | Non | Reprendre les blocs utiles du questionnaire de découverte. |

## Procédure

1. **Séparer la demande du problème.** Recopier la demande telle quelle, puis remonter d'un cran : « pour obtenir quoi ? ». Tant que l'énoncé nomme une technologie, c'est encore une solution. Résultat : deux lignes distinctes, la solution demandée et le résultat métier visé.
2. **Écrire l'énoncé du problème** en une question : « comment », un indicateur, une ampleur, une échéance. Si le client n'a exprimé aucun indicateur, lui proposer deux formulations à départager ; ne pas choisir à sa place.
3. **Poser la référence.** Valeur actuelle de l'indicateur, source, période, et coût de l'inaction s'il est connu. Un chiffre entendu en entretien reste « déclaré » tant qu'aucune pièce ne le confirme.
4. **Identifier les acteurs.** Qui demande, qui décide, qui paie, qui utilisera, qui peut bloquer (DSI, sécurité, protection des données, juridique, ressources humaines). Pour chacun : ce qu'il gagne, ce qu'il craint. Le décideur est une personne nommée, pas un comité.
5. **Délimiter le processus touché.** Événement de début, événement de fin, grandes étapes, volumes, équipes, exclusions. Découper par étapes du flux, sans trou ni recouvrement.
6. **Recenser l'existant et les contraintes.** Applications et données en jeu, initiatives d'IA déjà tentées et raison de leur arrêt, budget, calendrier, sécurité, réglementation, engagements sociaux. Dire de chaque contrainte si elle est négociable.
7. **Faire dire les critères de succès au client.** « À quoi reconnaîtrez-vous, dans douze mois, que c'est réussi ? Qu'est-ce qui ferait échouer le projet ? » Deux ou trois critères, cités, avec leur cible.
8. **Classer les questions ouvertes** : bloquante pour la faisabilité, bloquante pour le chiffrage, à lever au cadrage. Chacune nomme son destinataire et ce que sa réponse change.
9. **Préparer la reformulation au client** : cinq lignes que le FDE Design lui adresse pour confirmation.

En échange, partir du dernier cas réel, des faits avant les opinions, et n'évoquer aucune solution avant la clôture.

## Livrable

Une note de besoin de deux pages au plus :

1. Demande d'origine, citée, et problème reformulé.
2. Résultat attendu : indicateur, référence (valeur, source, période, statut), cible, échéance.
3. Acteurs : rôle, nom, fonction, gain, crainte.
4. Processus touché : début, fin, volumes, exclusions.
5. Existant et initiatives passées.
6. Contraintes, négociables ou non.
7. Critères de succès du client.
8. Questions ouvertes classées, et hypothèses `[À CONFIRMER]`.

Les faits se collectent avec le [Questionnaire de découverte client](/templates/questionnaire-decouverte), réduit aux blocs utiles.

## Critères de qualité

- L'énoncé du problème contient un indicateur et ne nomme aucune technologie.
- Chaque chiffre porte sa source, sa période et son statut : vérifié, déclaré ou à confirmer.
- Le décideur est nommé, ou son absence est écrite comme un risque.
- Le périmètre a un début, une fin et des exclusions écrites.
- Les critères de succès sont ceux du client, cités, pas ceux de l'équipe.
- Chaque question ouverte dit ce que sa réponse change.

## Garde-fous

- Le FDE Design valide la note et porte tout échange avec le client : l'agent prépare, il n'envoie rien.
- Ne rien inventer : ni volume, ni coût, ni nom, ni contrainte. Ce qui manque porte `[À CONFIRMER]` et devient une question.
- Ne proposer ni solution, ni prix, ni délai dans la note.
- Un besoin qui change l'enjeu ou le périmètre est signalé au responsable de l'offre : la qualification se rejoue.
- Les propos recueillis ne sont pas attribués hors de l'équipe ; les documents du client restent dans les outils qu'il a autorisés.

## Enchaînements

- **Amont** : [Qualifier une opportunité](/skills/qualifier-opportunite).
- **Aval** : [Étudier la faisabilité](/skills/etudier-faisabilite) ; [Cadrer la mission](/skills/cadrer-mission) si le client signe.
- **Workflow** : [De l'opportunité à l'estimation](/skills/workflows/qualifier-et-chiffrer).
- **Ressources** : [Résolution de problèmes par hypothèses](/frameworks/probleme-hypotheses), [MECE : découper sans trou ni recouvrement](/frameworks/mece), [Cartographier et engager les parties prenantes](/frameworks/cartographie-parties-prenantes), [Mener des entretiens de diagnostic](/guides/mener-entretiens), [Dialoguer avec les dirigeants et avec le terrain](/guides/dialoguer-avec-les-dirigeants).
