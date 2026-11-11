---
id: poc-purgatoire
titre: "Le purgatoire des POC"
resume: "Des preuves de concept qui s'accumulent, toutes « concluantes », sans qu'aucune n'atteigne la production. Le signe d'une organisation qui expérimente pour ne pas décider."
type: anti-pattern
phases: [cibler, construire, industrialiser]
tags: [delivery, poc, passage-a-l-echelle]
secteur: ""
date: ""
---

## Symptômes

- Une liste de POC « concluants » en comité, aucun utilisateur en production. Voxalis au diagnostic : 7 POC en deux ans, un seul en production (une FAQ grand public), aucun mesuré.
- Chaque POC s'est terminé par une démonstration et une « phase 2 à cadrer ».
- Aucun critère de succès écrit à l'avance, aucune référence mesurée.
- Les POC ont tourné sur des extraits de données, hors SI, sans revue de sécurité.
- Le porteur est une cellule innovation ; le propriétaire du processus a été « tenu informé ».
- Le budget d'industrialisation n'existe sur aucune ligne.

## Pourquoi ça arrive

- **Le POC répond à une question déjà tranchée.** « Est-ce que ça marche ? » : sur un parcours nominal, presque toujours. Les vraies questions ne sont pas posées : le système crée-t-il de la valeur dans le processus réel, s'intègre-t-il, sera-t-il utilisé, sait-on l'opérer ?
- **Il n'engage personne.** Pas d'arbitrage, pas de changement d'organisation, pas de risque politique.
- **Le plus dur est repoussé « après »** : intégration, sécurité, conduite du changement, exploitation.
- **Les incitations récompensent le nombre d'expérimentations**, pas les mises en production.

## Conséquences

Le métier a « déjà essayé l'IA » et n'y croit plus. La finance voit des dépenses sans retour et ferme le robinet. Aucune capacité ne se construit : chaque POC repart de zéro, avec d'autres outils et un autre prestataire.

## Comment en sortir

1. **Inventorier les POC en une page** : propriétaire métier, valeur en jeu, ce qui bloque la production.
2. **Trier sans ménagement.** Arrêter ceux qui n'ont ni propriétaire ni enjeu chiffré, et l'annoncer. Un arrêt assumé libère des moyens et crédibilise le reste.
3. **Rattacher les survivants à un domaine** doté d'un sponsor ; voir [un phare d'abord](/savoir/lighthouse-d-abord).
4. **Remplacer la « phase 2 » par un pilote** en conditions réelles : vrais utilisateurs, vrai flux, référence, critères de succès et d'arrêt écrits dans le [plan de pilote](/templates/plan-pilote).
5. **Faire financer le chemin vers la production avant le pilote**, pas après son succès.

## Comment l'éviter

- Ne rien lancer sans quatre éléments : un propriétaire métier, une hypothèse de valeur, des critères de succès et d'arrêt, et une décision d'industrialisation prise d'avance si les critères sont atteints.
- Préférer une [tranche verticale](/savoir/tranche-verticale) en conditions réelles à une maquette hors SI.
- Traiter sécurité, intégration et exploitation dès la conception : la [checklist de mise en production](/templates/checklist-mise-en-production) se lit au premier jour, pas au dernier.
- Plafonner le nombre d'initiatives en parallèle. Trois menées jusqu'au bout valent mieux que douze entamées.
- Clore chaque pilote par un [bilan](/templates/bilan-pilote) qui tranche : généraliser, corriger ou arrêter.

Voir aussi : [POC, pilote, production](/frameworks/poc-pilote-production), [approche par domaine](/frameworks/approche-par-domaine).
