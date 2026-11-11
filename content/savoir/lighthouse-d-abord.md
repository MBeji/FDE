---
id: lighthouse-d-abord
titre: "Un phare d'abord"
resume: "Concentrer l'effort sur un domaine vitrine qui prouve la valeur de bout en bout avant d'élargir. Une preuve mesurée dans un domaine pèse plus que dix initiatives dispersées."
type: pattern
phases: [cadrer, cibler]
tags: [portefeuille, domaine, focalisation]
secteur: ""
date: ""
---

## Contexte

Le client arrive avec trente idées réparties sur huit directions, chacune réclamant « son » agent. Le budget est saupoudré, l'équipe data sert tout le monde un jour par quinzaine, et rien n'atteint la production. Voxalis en était là au diagnostic : 7 POC en deux ans, un seul en production, aucun mesuré.

## Le pattern

Choisir **un domaine** — un flux métier de bout en bout, avec un propriétaire unique, une base de coûts et des indicateurs — et y concentrer l'essentiel de la capacité jusqu'à un résultat mesuré. Le reste attend, avec une date de réexamen. Le phare n'est pas un bac à sable sans enjeu : il pèse dans le compte de résultat, et sa réussite doit être assez visible pour changer la conversation interne.

## Pourquoi ça marche

- **Les cas d'usage d'un même domaine se renforcent.** Mêmes données, mêmes outils, mêmes utilisateurs, même jeu d'évaluation. Chez Voxalis, les cinq cas retenus partagent la passerelle de neuf outils et le golden set de 600 cas.
- **Un seul propriétaire arbitre.** Aucune coordination entre directions pour chaque décision.
- **La valeur devient lisible pour la finance** : une référence, une ligne de coûts (17,2 M€, soit 41 € par ticket), un écart mesuré.
- **La preuve crée la demande.** Après un résultat chiffré, les autres directions viennent réclamer le leur. Avant, il faut les convaincre une par une.

## Mise en œuvre

1. **Choisir le phare sur critères**, pas sur l'enthousiasme du demandeur.

| Critère | Question de contrôle |
| --- | --- |
| Sponsor | Porte-t-il le budget et le résultat du domaine ? |
| Enjeu | Le gain visé se verra-t-il dans les comptes du domaine ? |
| Mesure | Peut-on établir une référence en moins de quatre semaines ? |
| Accès | Les systèmes clés exposent-ils des API ? |
| Métier | Le propriétaire du processus détache-t-il des experts ? |
| Délai | Un premier résultat en conditions réelles est-il atteignable en six mois environ ? |

2. **Écrire le hors-périmètre** dans la [charte de mission](/templates/charte-de-mission). Les demandes des autres directions vont dans un backlog tenu par le client, réexaminé aux jalons G2 et G5.
3. **Fixer la condition d'allumage du deuxième phare** : preuve de valeur acquise (G5) et briques réutilisables identifiées.
4. **Capitaliser ce qui se réutilise** — passerelle d'outils, chaîne d'évaluation, gouvernance — pour que le domaine suivant démarre plus vite. C'est l'amorce de l'[usine à agents](/frameworks/usine-agents).

## Limites

- **Un phare trop protégé ne prouve rien.** Meilleure équipe, utilisateurs triés, dérogations de sécurité : le résultat ne se généralisera pas. Piloter dans des conditions représentatives.
- **Le phare ne dispense pas d'équiper le quotidien.** Les outils de productivité (le « Deploy » de [Deploy, Reshape, Invent](/frameworks/deploy-reshape-invent)) avancent en parallèle, avec une autre équipe.
- **Aucun domaine ne passe les critères ?** Ne pas désigner un phare par défaut : traiter le prérequis manquant, ou le dire au sponsor.
- **Les directions écartées se braquent** si elles n'ont ni date ni critère. Leur donner les deux.

Voir aussi : [approche par domaine](/frameworks/approche-par-domaine), [portefeuille priorisé](/templates/portefeuille-priorise), [le purgatoire des POC](/savoir/poc-purgatoire).
