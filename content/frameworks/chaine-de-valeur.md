---
id: chaine-de-valeur
titre: "Analyse de la chaîne de valeur"
resume: "Décomposer l'entreprise en activités, situer où se créent la valeur, les coûts et les délais, et en déduire les domaines candidats à une transformation AI-Native."
categorie: opportunites
phases: [diagnostiquer, cibler]
origine: "Michael Porter"
niveau: fondamental
tags: [strategie, domaines, diagnostic]
templates: [carte-opportunites]
lies: [approche-par-domaine, decomposition-taches, matrice-valeur-faisabilite]
---

## En bref

La chaîne de valeur décrit l'entreprise comme un enchaînement d'activités qui, ensemble, créent ce que le client paie. Michael Porter distingue les activités principales (produire, vendre, livrer, servir) et les activités de soutien (infrastructure, ressources humaines, technologie, achats). L'analyse consiste à mesurer, activité par activité, ce qu'elle coûte, le temps qu'elle consomme et ce qu'elle apporte au client.

Pour un FDE, c'est la carte qui précède le choix du domaine. Elle évite de partir du cas d'usage le plus visible pour aller vers l'activité où l'IA change réellement l'économie de l'entreprise.

## Quand l'utiliser

- En début de [Diagnostiquer](/methode/diagnostiquer), quand le mandat porte sur une direction entière ou que le domaine n'est pas encore fixé.
- En [Cibler](/methode/cibler), pour justifier devant le comité de direction le choix d'un domaine plutôt qu'un autre.
- Quand le client présente une liste de cas d'usage dispersés : la chaîne les replace sur un flux commun.

Ne pas l'utiliser quand le domaine est déjà arrêté et légitime : passer directement à la [cartographie du processus](/frameworks/cartographie-processus). Ne pas en faire un exercice exhaustif de plusieurs semaines : une version utile se construit en trois à cinq jours.

## Comment l'appliquer

1. **Tracer la chaîne à partir du client.** Six à dix activités principales, nommées par leur résultat (« raccorder le client », pas « service raccordement »). Question : « que se passe-t-il entre le moment où le client nous découvre et celui où il renouvelle ? »
2. **Ajouter les activités de soutien** qui pèsent sur les activités principales retenues.
3. **Mesurer chaque activité** sur cinq critères, avec les données disponibles et des ordres de grandeur assumés ailleurs.

| Critère | Question | Source |
| --- | --- | --- |
| Coût | Combien d'ETP et d'euros ? | Contrôle de gestion |
| Délai | Combien de temps le client attend-il ? | Horodatages SI |
| Impact client | Pèse-t-elle sur la satisfaction ou le churn ? | NPS, enquêtes, motifs de résiliation |
| Intensité informationnelle | Le travail consiste-t-il à lire, chercher, rédiger, décider ? | Observation, entretiens |
| Répétitivité | Les cas se ressemblent-ils ? | Analyse des volumes |

4. **Repérer les domaines candidats** : une activité est candidate à une transformation AI-Native quand elle cumule coût ou délai élevés, impact client fort et travail à forte intensité informationnelle.
5. **Regrouper en domaines** de bout en bout plutôt qu'en tâches isolées, puis les reporter sur la [carte d'opportunités](/templates/carte-opportunites).

## Exemple

En S3, l'équipe a tracé la chaîne du Marché Entreprises de Voxalis (38 000 PME, 240 M€ de revenus récurrents) pour vérifier que le domaine pressenti était le bon.

| Activité principale | Coût, délai | Impact client | Intensité informationnelle | Candidat |
| --- | --- | --- | --- | --- |
| Concevoir les offres | Faible volume | Indirect | Moyenne | Non |
| Vendre et contractualiser | Cycle commercial | Moyen | Forte | Second rang |
| Raccorder et activer | Délais de mise en service | Fort | Moyenne | Second rang |
| Exploiter le réseau | Fortement automatisé | Fort | Faible côté humain | Non |
| Facturer | Industrialisé | Moyen | Faible | Non |
| **Assister et dépanner (SAV)** | **17,2 M€, 310 ETP, 31 h de MTTR** | **Fort** | **Forte** | **Oui** |

Le SAV cumule les trois signaux. Son coût direct est de 41 € par ticket, mais son poids réel est ailleurs : avec un churn PME de 11,5 %, Voxalis perd environ 27,6 M€ de revenus récurrents par an, et la sponsor relie explicitement ces départs aux délais de réparation. La chaîne a aussi montré que le SAV dépend de deux activités de soutien, la base de connaissances (35 % d'articles obsolètes) et le SI (6 applications, aucun bus d'événements), qui sont entrées dans le périmètre du domaine.

## Pièges à éviter

- **Recopier l'organigramme.** Une chaîne par directions reproduit les silos. Parade : nommer les activités par leur résultat pour le client.
- **Ne mesurer que les coûts.** L'activité la plus chère n'est pas forcément celle où se joue la valeur. Parade : toujours croiser coût et impact client.
- **Viser l'exhaustivité.** Parade : trois à cinq jours, des ordres de grandeur, et une décision.
- **Oublier les activités de soutien.** Les données et la connaissance conditionnent la faisabilité. Parade : les rattacher au domaine choisi.

## Pour aller plus loin

- Template : [carte d'opportunités](/templates/carte-opportunites)
- Frameworks : [approche par domaine](/frameworks/approche-par-domaine), [décomposition en tâches](/frameworks/decomposition-taches), [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite)
- Référence : Michael Porter, « Competitive Advantage » (1985), qui introduit la chaîne de valeur.
