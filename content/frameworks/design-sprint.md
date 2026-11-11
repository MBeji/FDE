---
id: design-sprint
titre: "Design sprint"
resume: "Cinq temps en quatre ou cinq jours, comprendre, diverger, décider, prototyper, tester, pour concevoir et confronter à de vrais utilisateurs un processus cible ou un agent avant d'investir dans sa construction."
categorie: processus
phases: [reinventer, construire]
origine: "Google Ventures"
niveau: fondamental
tags: [conception, prototype, atelier]
templates: [atelier-ideation, processus-cible-ai-native]
lies: [reinvention-zero-base, collaboration-humain-agent, poc-pilote-production]
---

## En bref

Le design sprint, formalisé chez Google Ventures, répond à une question de conception critique en cinq jours : comprendre, produire des solutions, en choisir une, la prototyper, la tester auprès d'utilisateurs réels. Il remplace des semaines de débats par une preuve observée.

Pour un FDE, il sert à concevoir un processus cible avec le métier plutôt que pour lui, et à tester l'interaction entre humain et agent avant d'écrire du code de production. Il ne prouve ni la fiabilité de l'agent ni la valeur : c'est le rôle des évaluations et du pilote.

## Quand l'utiliser

- En [Réinventer](/methode/reinventer), quand plusieurs options de processus cible s'opposent et que le débat tourne en rond.
- En début de [Construire](/methode/construire), pour tester le poste de travail humain avant de lancer le prototype de l'agent.
- Quand l'adhésion des opérateurs est incertaine : les faire participer et tester vaut mieux qu'une présentation.

Il est disproportionné pour une question tranchée, une amélioration locale ou un sujet purement technique, et impossible sans décideur disponible ni utilisateurs réels.

## Comment l'appliquer

| Temps | Objectif | Livrable de fin de journée |
| --- | --- | --- |
| 1. Comprendre | Fixer le résultat attendu, cartographier le parcours, écouter les experts | Objectif à long terme, questions du sprint, étape ciblée |
| 2. Diverger | Chaque participant esquisse seul une solution complète | Esquisses individuelles, anonymes |
| 3. Décider | Choisir, sans débat interminable | Solution retenue, scénario case par case |
| 4. Prototyper | Construire une façade réaliste, juste assez pour être testée | Prototype, script de test |
| 5. Tester | Cinq entretiens individuels avec des utilisateurs réels | Constats par question du sprint, décision de suite |

1. **Préparer** : une question de sprint, un décideur présent, cinq à sept participants (métier, opérateurs, experts, ingénierie), cinq testeurs recrutés à l'avance, des cas réels anonymisés.
2. **Adapter le prototype à un agent.** Trois options, de la plus légère à la plus réaliste : un agent simulé par un humain derrière l'écran, des sorties de modèle préparées sur les cas de test, un premier prompt branché sur des données en lecture seule. Le prototype teste le partage du travail entre humain et agent, pas la qualité du modèle.
3. **Tester sur des cas réels** : observer ce que l'utilisateur fait, pas ce qu'il dit préférer.
4. **Décider la suite** : construire, retester, ou abandonner l'option.
5. **Compresser à quatre jours** quand l'équipe est rodée, en fusionnant diverger et décider.

## Exemple

En S11, chez Voxalis, l'équipe hésitait sur la voie assistée (45 % des tickets) : l'agent doit-il présenter un diagnostic unique avec une action proposée, ou plusieurs hypothèses classées que le conseiller départage ?

- **Participants** : Sophie Lambert (décideuse), Nadia Cherif, deux conseillers et deux experts N2 du plateau de Nantes, l'architecte SI détaché ; Hugo anime, Léo prototype.
- **Prototype** : une maquette du poste de supervision du conseiller, alimentée par des sorties préparées sur 10 tickets historiques réels, dont deux pièges.
- **Test** : cinq conseillers de Nantes extérieurs au sprint.

Résultat : avec plusieurs hypothèses classées, les testeurs ont été plus lents et deux sur cinq se sont trompés sur un piège. Avec un diagnostic unique, ses preuves et un bouton « contester », ils ont décidé plus vite et repéré les pièges grâce aux preuves. Cette option a été inscrite dans le [processus cible](/templates/processus-cible-ai-native). Elle a ensuite été mesurée là où un sprint ne peut pas le faire : justesse du diagnostic sur le golden set de 600 cas (seuil ≥ 90 %), puis pilote de 8 semaines sur 9 400 tickets.

## Pièges à éviter

- **Un sprint sans décideur.** La solution choisie est rediscutée la semaine suivante. Parade : pas de sprint si le décideur n'est pas disponible.
- **Tester avec des collègues.** Parade : cinq utilisateurs réels, recrutés à l'avance.
- **Prendre le test pour une évaluation.** Dix cas montrent un usage, pas une fiabilité. Parade : renvoyer toute question de qualité au [plan d'évaluation](/templates/plan-evaluation).
- **Prototyper le modèle au lieu de l'interaction.** Parade : simuler l'agent, prototyper ce que voit et décide l'humain.

## Pour aller plus loin

- Templates : [atelier d'idéation](/templates/atelier-ideation), [processus cible AI-Native](/templates/processus-cible-ai-native)
- Frameworks : [réinvention zero-base](/frameworks/reinvention-zero-base), [collaboration humain-agent](/frameworks/collaboration-humain-agent), [du POC à la production](/frameworks/poc-pilote-production)
- Outil : [redesign de processus](/outils/redesign-processus)
- Guide : [animer un atelier d'idéation](/guides/animer-atelier-ideation)
- Référence : Jake Knapp, John Zeratsky et Braden Kowitz, « Sprint » (2016).
