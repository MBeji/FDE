---
name: capitaliser-rex
description: "Transforme ce qu'une mission a appris en savoir réutilisable : collecte au fil de l'eau, atelier de retour d'expérience, anonymisation, rédaction du REX et des patterns ou anti-patterns, versement des composants réutilisables et révision des skills utilisés. À utiliser à chaque jalon pour capturer, et à la clôture de la mission pour restituer."
metadata:
  titre: "Capitaliser un retour d'expérience"
  version: "1.0.0"
  statut: publie
  etape: pilotage
  sous-processus: capitalisation
  role: binome
  domaine: pilotage
  phases: [perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [rex, capitalisation, patterns, anonymisation, savoir-terrain, retour-d-experience, lecons, retrospective]
  proprietaire: bibliotheque
  diffusion: interne
  entrees: ["Journal de mission : décisions, risques, apprentissages", "Livrables, mesures de valeur et rapports d'évaluation", "Liste des skills utilisés pendant la mission"]
  sorties: ["Retour d'expérience anonymisé, prêt pour une pull request", "Patterns ou anti-patterns proposés", "Demandes de révision de skills"]
  prerequis: []
---

## Mission

Faire en sorte que la mission suivante parte de ce que celle-ci a appris. Le Design et le Build capitalisent ensemble : le REX de la mission, les patterns et anti-patterns qu'elle révèle, les composants réutilisables, et la mise à jour des skills qui se sont montrés faux ou incomplets. Un apprentissage resté dans la tête d'un FDE est perdu à la mission d'après.

## Quand l'utiliser

- À chaque jalon : noter à chaud ce qui a marché, raté, surpris.
- À la clôture : atelier de retour d'expérience et rédaction.
- Après un incident ou un échec notable, sans attendre la fin.

Ne pas l'utiliser pour le bilan remis au client : celui-ci relève de la clôture de mission. Le REX s'adresse au pool et dit aussi ce qui n'a pas marché.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le journal de la mission : décisions, risques, apprentissages | Oui | Le reconstituer avec le binôme, jalon par jalon. |
| Les résultats : valeur mesurée, évaluations, incidents | Oui | Écrire le REX sans chiffres plutôt qu'avec des chiffres supposés. |
| Les deux membres du binôme, et si possible un pair extérieur | Oui | Ne pas rédiger seul : un REX à une voix est un plaidoyer. |
| La liste des skills, templates et frameworks utilisés | Non | La dresser en relisant les livrables. |

## Procédure

1. **Capturer au fil de l'eau.** À chaque jalon, trois lignes au journal : une décision qui a compté, une difficulté, une surprise. C'est la matière première ; à la clôture, la mémoire a déjà réécrit l'histoire.
2. **Tenir l'atelier de retour d'expérience** à la clôture, avec le binôme et un pair du pool : dérouler la mission phase par phase, et pour chacune demander ce que l'on referait, ce que l'on ferait autrement, ce que l'on ignorait.
3. **Chercher les causes.** Derrière chaque réussite ou difficulté, la condition qui l'a rendue possible : c'est elle qui se transmet, pas l'anecdote.
4. **Trier ce qui est réutilisable** : une pratique qui a marché et marcherait ailleurs (pattern), un piège dans lequel d'autres tomberont (anti-pattern), le récit complet d'une mission (REX), un composant technique, une correction à apporter à une ressource du portail.
5. **Anonymiser.** Retirer le nom du client, des personnes, des produits, et tout chiffre permettant de l'identifier ; garder le secteur et les ordres de grandeur. Faire relire par quelqu'un qui ne connaît pas le client : s'il le reconnaît, recommencer.
6. **Rédiger le REX** dans le format du portail : contexte, ce que nous avons fait, résultats, ce qui a marché, ce que nous ferions autrement, à retenir.
7. **Rédiger les patterns et anti-patterns** que la mission révèle, un par fiche, dans leur format.
8. **Réviser les skills utilisés.** Pour chacun : la procédure était-elle juste, qu'a-t-il manqué, quel garde-fou aurait évité une erreur ? Chaque écart devient une demande d'évolution, traitée avec [Créer ou faire évoluer un skill](/skills/creer-skill). Une activité menée sans skill devient un skill à créer.
9. **Verser les composants réutilisables** (outils, prompts génériques, jeux d'évaluation synthétiques, scripts), nettoyés de toute donnée du client.
10. **Soumettre** par pull request et présenter au pool en revue de pairs.

## Livrable

1. Le REX anonymisé, d'après le [Retour d'expérience de mission](/templates/rex-mission), prêt pour une pull request dans le savoir terrain.
2. Les fiches pattern ou anti-pattern proposées.
3. La liste des demandes de révision : skills, templates, frameworks, avec le constat qui les motive.
4. Les composants réutilisables versés, avec leur notice.

## Critères de qualité

- Le REX dit ce qui n'a pas marché et ce que l'on ferait autrement, pas seulement les réussites.
- Aucun nom de client, de personne ou de produit ; aucun chiffre identifiant.
- Chaque enseignement est relié à une condition ou à une cause, pas à une anecdote.
- Les chiffres cités viennent des mesures de la mission.
- Chaque skill utilisé a été passé en revue, et les écarts sont déposés.
- Un pair extérieur à la mission a relu.

## Garde-fous

- Rien de confidentiel ne sort de la mission : en cas de doute sur une information, elle ne figure pas. Les engagements de confidentialité du contrat priment.
- Aucune donnée réelle du client dans un composant versé au pool.
- La publication passe par une pull request relue : un agent prépare le REX, le binôme le valide, un pair l'approuve.
- Le REX ne juge pas les personnes, ni chez le client ni dans l'équipe.

## Enchaînements

- **Amont** : [Organiser la passation](/skills/organiser-passation), [Mesurer la valeur réalisée](/skills/mesurer-valeur).
- **Aval** : [Créer ou faire évoluer un skill](/skills/creer-skill).
- **Workflow** : [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
- **Ressources** : [Capitaliser : transformer le terrain en savoir collectif](/guides/capitaliser), [Savoir terrain](/savoir), [Contribuer au savoir terrain](/savoir/contribuer), [Gouvernance de la bibliothèque de skills](/skills/gouvernance).
