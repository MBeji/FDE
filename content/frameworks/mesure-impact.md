---
id: mesure-impact
titre: "Mesurer l'impact réel"
resume: "Établir une référence, construire un contrefactuel crédible et choisir la bonne méthode (avant/après, groupe témoin, déploiement échelonné, test A/B) pour attribuer un gain au système agentique, et à lui seul."
categorie: valeur
phases: [construire, perenniser]
origine: "Maison"
niveau: avance
tags: [mesure, valeur, pilote]
templates: [plan-pilote, bilan-pilote, tableau-de-bord-valeur]
lies: [registre-de-valeur, arbre-de-valeur, poc-pilote-production, pilotage-adoption]
---

## En bref

Un gain mesuré n'est pas un gain attribuable. Entre la référence et le pilote, la saison change, l'équipe pilote est plus motivée, la base de connaissances a été nettoyée. Mesurer l'impact réel, c'est répondre à une question précise : **que se serait-il passé sans le système ?** Cette situation fictive est le **contrefactuel**.

Pour un FDE, c'est ce qui distingue une preuve de valeur d'une démonstration. Un directeur financier qui a vu passer sept POC « réussis » ne se laisse convaincre que par un contrefactuel crédible.

## Quand l'utiliser

- En [Construire](/methode/construire), dès la conception du pilote : la méthode se choisit avant le démarrage, jamais après.
- En [Pérenniser](/methode/perenniser), pour les mesures à +3 et +6 mois et l'audit.

Ne pas déployer un protocole lourd sur un gain marginal : la rigueur doit être proportionnée à l'enjeu financier et à la décision qui en dépend.

## Comment l'appliquer

### 1. Figer la référence

Période d'au moins douze mois si la saisonnalité compte, définition exacte de chaque indicateur, source, périmètre. Faire valider par la finance. Instrumenter le pilote avec les mêmes définitions.

### 2. Choisir la méthode

| Méthode | Principe | Quand l'utiliser | Limite |
| --- | --- | --- | --- |
| Avant/après | Comparer le pilote à la référence | Effet très supérieur aux variations naturelles | N'isole ni la saison ni les autres changements |
| Groupe témoin | Comparer à un périmètre comparable sans le système, sur la même période | Plusieurs sites ou équipes comparables | Comparabilité à démontrer |
| Déploiement échelonné | Les vagues successives servent de témoin les unes aux autres | Généralisation par vagues | Exige un calendrier tenu |
| Test A/B | Affectation aléatoire des cas au système ou au processus actuel | Volume élevé, affectation possible au niveau du cas | Contraintes opérationnelles et d'équité client |

Par défaut : groupe témoin pour le pilote, déploiement échelonné pour la généralisation.

### 3. Calculer l'effet attribuable

Effet attribuable = évolution du périmètre pilote − évolution du témoin sur la même période. Accompagner chaque chiffre de son volume et de sa dispersion : un écart sur quelques centaines de cas peut n'être que du bruit.

### 4. Traiter l'attribution entre leviers

Le système agentique s'accompagne de changements de processus, de rôles et de connaissances. Décider avant le pilote si l'on mesure le dispositif complet (recommandé) ou chaque levier ; dans le second cas, prévoir les variantes nécessaires.

### 5. Documenter dans le bilan

Méthode, référence, témoin, effet brut, effet attribuable, biais identifiés, intervalle d'incertitude. C'est ce document que la finance audite.

## Exemple

Pilote Voxalis à Nantes : 8 semaines, 18 conseillers, segment PME Ouest, 9 400 tickets, précédé de deux semaines en mode fantôme.

| Indicateur | Référence | Pilote | Évolution brute |
| --- | --- | --- | --- |
| MTTR | 31 h | 14,5 h | − 16,5 h |
| FCR | 54 % | 71 % | + 17 points |
| Réouvertures | 14 % | 8 % | − 6 points |
| CSAT sur 5 | 3,6 | 4,3 | + 0,7 |

Le mode fantôme a servi de première mesure sans risque : les décisions des agents étaient comparées à celles des conseillers sur les mêmes tickets, avant toute action réelle.

Illustration du calcul attribuable : si les plateaux témoins, sur la même période, étaient passés de 31 h à 29 h de MTTR (effet saisonnier, nettoyage de la base de connaissances commun à tous les sites), l'effet attribuable serait de 16,5 − 2 = 14,5 h, et c'est ce chiffre qui devrait entrer au registre. La généralisation en trois vagues (Ouest, puis Nord et Est, puis Île-de-France et Sud) a ensuite offert un témoin naturel : les régions pas encore déployées.

## Pièges à éviter

- **Choisir la méthode après les résultats.** Parade : méthode inscrite dans le [plan de pilote](/templates/plan-pilote), signée avant le démarrage.
- **Effet de nouveauté.** L'équipe pilote, observée et outillée, surperforme. Parade : mesurer aussi les dernières semaines et la vague suivante.
- **Témoin contaminé.** Les plateaux témoins reçoivent la base nettoyée ou des consignes nouvelles. Parade : lister ce qui change partout et le neutraliser dans le calcul.
- **Indicateur redéfini en cours de route.** Parade : définitions figées dans le registre de valeur.
- **Annoncer sans volume.** Parade : toujours donner le nombre de cas et la période.

## Pour aller plus loin

- Frameworks : [registre de valeur](/frameworks/registre-de-valeur), [arbre de valeur](/frameworks/arbre-de-valeur), [du POC à la production](/frameworks/poc-pilote-production)
- Templates : [plan de pilote](/templates/plan-pilote), [bilan de pilote](/templates/bilan-pilote)
- Savoir terrain : [mode fantôme](/savoir/mode-fantome), [la démonstration trompeuse](/savoir/demo-trompeuse)
- Guide : [réussir le pilote](/guides/reussir-le-pilote)
