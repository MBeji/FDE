---
id: analyse-80-20
titre: "Analyse 80/20"
resume: "Trouver la minorité de causes qui produit la majorité de l'effet, pour concentrer le diagnostic et le premier périmètre d'agents là où se trouve le volume."
categorie: strategie
phases: [diagnostiquer, cibler]
origine: "Principe de Pareto"
niveau: fondamental
tags: [pareto, diagnostic, priorisation]
templates: [fiche-processus-existant]
lies: [mece, analyse-causes-racines, matrice-valeur-faisabilite]
---

## En bref

Dans la plupart des activités, l'effet se concentre sur un petit nombre de causes : quelques motifs font l'essentiel des tickets, quelques clients l'essentiel des réclamations, quelques étapes l'essentiel du délai. Le chiffre 80/20 est une image, pas une loi : la concentration réelle se mesure. L'analyse 80/20 consiste à trier, cumuler et lire la courbe pour décider où concentrer l'effort.

Pour un FDE, elle répond à deux questions décisives : par où commencer, et quel périmètre donner au premier agent pour qu'il traite un volume qui compte.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), dès qu'un historique de transactions est disponible (tickets, dossiers, demandes).
- En phase [Cibler](/methode/cibler), pour dimensionner un cas d'usage : quelle part du volume couvre-t-il réellement ?
- Avant de construire un golden set, pour qu'il reflète la distribution réelle.

Ne pas l'utiliser seule pour arbitrer le risque, ni sur moins de quelques centaines d'éléments : la courbe n'y est pas stable.

## Comment l'appliquer

1. **Définir l'effet et l'unité.** Volume de tickets, heures consommées, euros perdus : le classement change selon l'effet. Question à poser : « quel effet voulons-nous réduire ? ».
2. **Fiabiliser la variable de classement.** Les codes saisis par les opérateurs sont souvent faux. Faire requalifier un échantillon de 200 à 300 éléments par des experts et mesurer l'écart avant de conclure.
3. **Trier, cumuler, tracer.** Classer les catégories par effet décroissant et calculer le pourcentage cumulé. Résultat : la courbe de concentration.
4. **Lire la courbe.** Repérer le coude, le point où chaque catégorie supplémentaire n'ajoute presque plus rien.
5. **Décider où arrêter.** Couper quand l'une de ces conditions est atteinte : le volume couvert justifie l'investissement, les catégories suivantes demandent un traitement différent, ou chacune pèse moins de 1 % de l'effet.
6. **Examiner la longue traîne.** Avant de la laisser de côté, vérifier qu'elle ne concentre pas les cas à fort impact client, financier ou réglementaire.

| Forme de la courbe | Lecture | Décision |
| --- | --- | --- |
| Coude net, peu de catégories | Forte concentration | Périmètre restreint, gain rapide |
| Progression régulière | Pas de concentration | Chercher un autre axe de découpage, ou une solution générique |
| Coude après un regroupement | Catégories trop fines | Regrouper par mode de résolution, pas par symptôme |

## Exemple

Chez Voxalis, l'hypothèse « les incidents sont trop variés pour être standardisés » a été testée en S4 sur 12 mois de tickets, soit environ 260 000 incidents techniques (62 % des 420 000 tickets).

1. **Fiabilisation** : l'erreur de qualification manuelle étant de 9 %, les experts N2 ont requalifié un échantillon et regroupé les motifs par mode de résolution plutôt que par libellé saisi.
2. **Résultat** : 58 % des incidents relèvent de 12 motifs récurrents dont la résolution est documentée, soit environ 150 000 incidents par an. Ce n'est pas du 80/20, mais la concentration suffit à changer la stratégie.
3. **Décision** : l'hypothèse est tuée, et le cas d'usage « résolution autonome des 12 motifs récurrents » est créé ; il obtient la meilleure note de valeur du portefeuille (4,8). Le prototype démarre sur un seul de ces motifs, « perte de synchronisation de l'accès ».
4. **Longue traîne** : les incidents sur liaisons et téléphonie d'entreprise multi-sites, peu nombreux mais critiques pour le client, sont orientés vers la voie experte (20 % des tickets), où l'expert N2 garde la main.

## Pièges à éviter

- **Croire à 80/20 sans mesurer.** Annoncer « 20 % des motifs font 80 % du volume » sans courbe. Parade : toujours montrer la courbe et le chiffre réel.
- **Classer sur des codes non fiables.** Une qualification fausse produit une fausse concentration. Parade : requalifier un échantillon avant de conclure.
- **Confondre fréquence et valeur.** Parade : refaire le classement sur un second effet, heures ou churn.
- **Abandonner la longue traîne.** Elle porte souvent le risque. Parade : lui attribuer un traitement explicite, par exemple une voie experte.

## Pour aller plus loin

- Template : [fiche processus existant](/templates/fiche-processus-existant)
- Frameworks : [MECE](/frameworks/mece) pour construire les catégories, [analyse des causes racines](/frameworks/analyse-causes-racines) pour comprendre chaque motif dominant, [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite)
- Savoir terrain : [golden set dès le jour 1](/savoir/golden-set-jour-1)
- Référence : le principe de Pareto, issu des travaux de l'économiste Vilfredo Pareto et popularisé en qualité industrielle.
