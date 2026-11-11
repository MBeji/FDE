---
id: cartographie-processus
titre: "Cartographier et mesurer le processus existant"
resume: "Décrire le processus tel qu'il se déroule réellement, puis décomposer son délai, son coût et ses variantes pour savoir où se trouve la valeur avant de concevoir quoi que ce soit."
categorie: processus
phases: [diagnostiquer]
origine: "Lean et pratique du conseil en opérations"
niveau: fondamental
tags: [diagnostic, processus, mesure]
templates: [fiche-processus-existant]
lies: [decomposition-taches, reinvention-zero-base, probleme-hypotheses, mesure-impact]
---

## En bref

Un processus existe en trois versions : celle de la procédure, celle que racontent les managers, celle qui se déroule réellement. Seule la troisième intéresse le FDE. La cartographier, c'est décrire le flux de bout en bout, puis mesurer où passent le temps et l'argent : traitement contre attente, variantes, reprises, exceptions. Le livrable n'est pas un schéma : c'est une décomposition chiffrée qui dit où se trouve la valeur et qui servira de référence (baseline) à la mesure d'impact.

Constat classique du Lean, à vérifier à chaque fois : dans un processus de service, le travail effectif ne représente qu'une faible part du délai total. Automatiser le travail sans toucher aux attentes ne change presque rien pour le client.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), dès que le domaine est fixé et avant tout atelier d'idéation.
- Quand le client affirme connaître son processus mais ne sait pas dire où passe le délai.
- Quand il faut une référence signée par la finance pour ouvrir le [registre de valeur](/frameworks/registre-de-valeur).

Ne pas viser l'exhaustivité : modéliser toutes les branches coûte des semaines et n'éclaire aucune décision. Pour un travail peu répétitif, où chaque cas est unique, préférer la [décomposition des tâches](/frameworks/decomposition-taches).

## Comment l'appliquer

### 1. Borner avec un SIPOC

En une heure avec le propriétaire du processus, remplir les cinq colonnes du SIPOC (Suppliers, Inputs, Process, Outputs, Customers) : fournisseurs, entrées, processus en 5 à 7 macro-étapes, sorties, clients. Fixer l'événement qui démarre le compteur, celui qui l'arrête, et l'unité d'œuvre. Résultat : un périmètre et des définitions d'indicateurs que personne ne contestera plus tard.

### 2. Tracer la chaîne de valeur

Pour chaque étape, relever l'acteur, l'outil, le temps de traitement, le temps d'attente en amont, le volume et le taux de bon du premier coup. Compter les passages de relais et les ressaisies. Résultat : une ligne de temps où le travail et l'attente sont séparés.

### 3. Exploiter les journaux

Extraire 6 à 12 mois d'événements horodatés (identifiant du cas, activité, horodatage, acteur) et reconstituer les parcours réels : c'est le process mining. Chercher les variantes et leur fréquence, les boucles (réouvertures, allers-retours entre équipes), la distribution des délais par motif : médiane et 90e centile, pas seulement la moyenne. Résultat : les quelques variantes qui couvrent 80 % du volume, et la liste des exceptions.

### 4. Observer le travail réel

Passer deux à trois jours à côté des opérateurs et suivre des cas de bout en bout. Noter les contournements, les fichiers personnels, les copier-coller entre outils, les questions posées aux collègues, les informations redemandées au client. Deux demandes utiles : « Montrez-moi votre dernier cas difficile » et « Que faites-vous que la procédure ne dit pas ? ».

### 5. Trianguler

| Source | Ce qu'elle révèle | Ce qu'elle cache |
| --- | --- | --- |
| Entretiens | Irritants, règles implicites, processus perçu | Durées réelles, fréquence des exceptions |
| Journaux | Variantes, délais, boucles, volumes | Travail hors outil, cause des attentes |
| Observation | Contournements, charge cognitive, qualité des données | Représentativité statistique |

Quand deux sources divergent, creuser : l'écart est souvent la découverte la plus utile du diagnostic.

### 6. Décomposer le délai et le coût

Répartir le délai de bout en bout en quatre postes : traitement effectif, collecte d'informations, attente interne (files, passages de relais), attente externe (client, tiers). Faire de même pour le coût, par étape et par motif. Segmenter ensuite : concentration des motifs, part des cas standards, exceptions. Cette segmentation dimensionnera les voies du processus cible.

### 7. Faire valider et signer

Restituer au terrain, qui corrige, puis faire signer la référence par le propriétaire du processus et la finance : définitions, période, valeurs.

## Exemple

Chez Voxalis, le diagnostic a mobilisé 22 entretiens, trois jours d'observation sur le plateau de Nantes et l'analyse de 12 mois de tickets. Le processus compte 9 étapes, 4 passages de relais et 6 outils. La décomposition du délai moyen de résolution (MTTR) de 31 h :

| Poste | Part | Durée |
| --- | --- | --- |
| Attente entre N1 et N2 | 41 % | 12,7 h |
| Collecte d'informations et diagnostic manuel dans 6 outils | 23 % | 7,1 h |
| Attente client | 18 % | 5,6 h |
| Traitement effectif | 18 % | 5,6 h |

Trois conséquences. Accélérer le traitement ne peut agir que sur 18 % du délai. Les deux premiers postes, 64 % du délai, tiennent à l'organisation en niveaux et à la dispersion de l'information : ce sont eux que le processus cible devra supprimer. Enfin, 58 % des incidents relèvent de 12 motifs récurrents dont la résolution est documentée : le flux est assez concentré pour différencier des voies. L'hypothèse posée au jour 3 du cadrage est confirmée, et la demande initiale de chatbot, qui visait le contact client, passait à côté de la valeur.

## Pièges à éviter

- **Cartographier le processus officiel.** Les procédures décrivent un flux que personne ne suit. Parade : partir de 20 cas réels tirés au hasard dans les journaux et les faire raconter par ceux qui les ont traités.
- **Se contenter de la moyenne.** Une moyenne mélange des cas réglés dans l'heure et des cas qui traînent plusieurs jours. Parade : médiane, 90e centile et décomposition par motif.
- **Confondre horodatage et travail.** Un changement de statut ne dit pas ce que l'opérateur a fait entre-temps. Parade : chronométrer un échantillon pendant l'observation et recaler les journaux.
- **Chercher la précision au-delà de la décision.** Parade : s'arrêter quand la décomposition est stable à quelques points près et que les priorités ne changeraient plus.
- **Ne pas faire signer la référence.** Sans baseline opposable, chaque gain sera contesté au moment de la mesure. Parade : signature du propriétaire du processus et de la finance au jalon G1.

## Pour aller plus loin

- Templates : [fiche processus existant](/templates/fiche-processus-existant), [guide d'entretien](/templates/guide-entretien), [revue des données et du SI](/templates/revue-donnees-si)
- Guides : [mener des entretiens de diagnostic](/guides/mener-entretiens), [chiffrer la valeur](/guides/chiffrer-la-valeur)
- Frameworks : [décomposition des tâches](/frameworks/decomposition-taches), [réinvention à base zéro](/frameworks/reinvention-zero-base), [mesure d'impact](/frameworks/mesure-impact)
- Anti-pattern : [automatiser l'existant](/savoir/automatiser-l-existant)
- Références : Mike Rother et John Shook, « Learning to See », pour la cartographie de la chaîne de valeur ; Wil van der Aalst, « Process Mining », pour l'exploitation des journaux.
