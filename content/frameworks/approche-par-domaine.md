---
id: approche-par-domaine
titre: "L'approche par domaine"
resume: "Concentrer la transformation sur un ou deux domaines métier traités de bout en bout, plutôt que de disperser l'effort sur des cas d'usage isolés."
categorie: opportunites
phases: [cibler]
origine: "Maison, d'après Rewired (McKinsey)"
niveau: fondamental
tags: [ciblage, domaine, portefeuille]
templates: [portefeuille-priorise, canevas-cas-usage, charte-de-mission]
lies: [rewired-six-capacites, matrice-valeur-faisabilite, portefeuille-horizons, deploy-reshape-invent]
---

## En bref

Un **domaine** est un ensemble cohérent d'activités qui sert un même résultat client ou métier, partage les mêmes données, les mêmes systèmes et les mêmes équipes, et a un responsable unique. Exemples : le traitement des sinistres, l'assistance technique, l'onboarding fournisseur.

Transformer un domaine plutôt que des cas d'usage isolés change trois choses : les cas d'usage se renforcent (données, outils et agents réutilisés), le processus peut être reconstruit au lieu d'être rapiécé, et la valeur apparaît dans un indicateur que le comité de direction suit déjà. C'est la deuxième conviction de la méthode : le domaine avant le cas d'usage.

## Quand l'utiliser

- En phase [Cibler](/methode/cibler), avant de lister les cas d'usage.
- Dès le [cadrage](/methode/cadrer) si le client arrive avec une liste de quinze idées sans lien.
- Quand un historique de POC dispersés n'a produit aucun résultat mesurable.

Ne pas l'utiliser pour une demande ponctuelle d'outillage individuel : c'est du déploiement, il relève d'un autre dispositif.

## Comment l'appliquer

### 1. Découper l'activité en domaines

Partir des résultats que l'entreprise délivre, pas de l'organigramme. Un bon domaine a un début et une fin observables (« ticket ouvert » à « client rétabli »), un indicateur de résultat et un propriétaire.

### 2. Évaluer les domaines candidats

| Critère | Question à poser | Signal favorable |
| --- | --- | --- |
| Valeur | Quel poids dans le coût, le revenu ou le risque ? | Valeur adressable chiffrable en millions d'euros |
| Douleur | Le comité de direction en parle-t-il déjà ? | Indicateur suivi et dégradé |
| Densité | Combien de tâches de langage, de recherche, de décision ? | Volume élevé, motifs récurrents |
| Données et SI | Les systèmes sont-ils accessibles ? | API existantes, historique exploitable |
| Sponsor | Qui portera la transformation ? | Un propriétaire unique, disponible |
| Exemplarité | Le résultat sera-t-il réplicable ailleurs ? | Pattern transposable à d'autres domaines |

### 3. Choisir un domaine, deux au maximum

Un premier domaine pour prouver, un second seulement si l'organisation a la capacité de les porter en parallèle. Au-delà, l'attention du sponsor, les experts métier et l'équipe plateforme se diluent.

### 4. Identifier les cas d'usage du domaine

Cartographier le flux de bout en bout, puis chercher les cas d'usage le long du flux. Retenir ceux qui partagent des données et des outils et dont l'enchaînement couvre le flux.

### 5. Vérifier le renforcement

Pour chaque cas d'usage retenu, nommer ce qu'il apporte aux autres : données, outil, confiance, capacité libérée. Un cas qui n'apporte rien aux autres doit justifier seul sa place.

## Exemple

Chez Voxalis, l'**Assistance & SAV Entreprises** coche tous les critères : 17,2 M€ de coût annuel, MTTR de 31 h cité par la sponsor, churn PME de 11,5 %, 420 000 tickets dont 58 % des incidents sur 12 motifs documentés, 4 applications sur 6 dotées d'API, une propriétaire de processus, Sophie Lambert.

Sur 14 cas d'usage identifiés, cinq sont retenus, qui se renforcent sur le même flux.

| Cas d'usage | Ce qu'il apporte aux autres |
| --- | --- |
| Qualification et routage | Tickets structurés, prérequis du diagnostic et du choix de voie |
| Diagnostic technique | Diagnostic fiable, prérequis de la résolution autonome |
| Résolution des 12 motifs récurrents | Capacité libérée, 35 % des tickets en voie autonome |
| Communication proactive | Moins de relances clients, donc moins d'attente client (18 % du MTTR) |
| Assistant de l'expert N2 | Dossiers préparés, réduction de l'attente entre N1 et N2 (41 % du MTTR) |

Pris un par un dans des directions différentes, ces cas d'usage n'auraient pas réduit le MTTR de 31 h à 14,5 h sur le pilote : c'est leur enchaînement qui supprime les attentes.

## Pièges à éviter

- **Choisir le domaine le plus facile.** Faible valeur, aucun sponsor ne s'en souviendra. Parade : la valeur et la douleur passent avant la faisabilité dans le choix du domaine.
- **Définir le domaine par l'organigramme.** On hérite des silos. Parade : définir par le résultat client, de bout en bout.
- **Accepter des cas d'usage hors domaine « pour faire plaisir ».** Parade : les placer dans un registre d'idées pour une vague ultérieure.
- **Traiter trois domaines en parallèle.** Parade : un domaine prouvé, puis réplication.

## Pour aller plus loin

- Frameworks : [six capacités de Rewired](/frameworks/rewired-six-capacites), [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite), [cartographie des processus](/frameworks/cartographie-processus)
- Templates : [canevas de cas d'usage](/templates/canevas-cas-usage), [portefeuille priorisé](/templates/portefeuille-priorise)
- Savoir terrain : [lighthouse d'abord](/savoir/lighthouse-d-abord), [le purgatoire des POC](/savoir/poc-purgatoire)
- Référence : McKinsey, « Rewired » (2023), sur la feuille de route alignée sur la valeur par domaine.
