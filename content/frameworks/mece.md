---
id: mece
titre: "MECE : découper sans trou ni recouvrement"
resume: "Le principe de découpage des cabinets de conseil : des parties mutuellement exclusives et collectivement exhaustives, pour analyser un problème sans double compte ni angle mort."
categorie: strategie
phases: [cadrer, diagnostiquer]
origine: "Pratique des cabinets de conseil en stratégie"
niveau: fondamental
tags: [structuration, decoupage, analyse]
templates: [arbre-hypotheses]
lies: [probleme-hypotheses, pyramide-scqa]
---

## En bref

MECE signifie « mutuellement exclusif, collectivement exhaustif » : chaque élément tombe dans une branche et une seule (pas de recouvrement), et l'ensemble des branches couvre tout le sujet (pas de trou). Un découpage non MECE produit des doubles comptes, des analyses en double et des angles morts que le client trouvera avant vous.

Pour un FDE, MECE sert trois fois : structurer le problème, décomposer un indicateur pour savoir où agir, ordonner un message exécutif.

## Quand l'utiliser

- Pour construire l'arbre de questions d'une [résolution par hypothèses](/frameworks/probleme-hypotheses).
- Pour décomposer un indicateur (délai, coût, volume) avant de chercher où se crée la valeur.
- Pour structurer un support de décision selon le [principe de la pyramide](/frameworks/pyramide-scqa).

Un découpage imparfait suffit quand le recouvrement ne change pas la décision : un remue-méninges, une liste de risques, une grille d'entretien. Exiger la rigueur MECE aux deux premiers niveaux d'un arbre, pas au-delà.

## Comment l'appliquer

### 1. Choisir la logique de découpage

| Logique | Principe | Exemple | Point de vigilance |
| --- | --- | --- | --- |
| **Formule** | Les composantes d'un calcul | Coût = volume × coût unitaire | La plus robuste : exhaustive par construction |
| **Processus** | Les étapes successives d'un flux | Réception, qualification, diagnostic, résolution, clôture | Définir le début et la fin du flux |
| **Segments** | Une partition d'une population | Par motif, par segment client, par canal | Un seul critère de segmentation par niveau |
| **Opposés** | Une dichotomie | Interne ou externe, subi ou choisi | Simple, mais peu explicatif seul |

Préférer la formule chaque fois qu'elle existe, puis le processus. Ne jamais mélanger deux logiques au même niveau.

### 2. Découper sur deux niveaux, pas plus au départ

Trois à cinq branches par niveau. Au-delà, regrouper ; en deçà, le découpage n'apprend rien.

### 3. Passer le test MECE

1. **Exclusivité** : prendre dix éléments réels (dix tickets, dix euros de coût) et vérifier que chacun tombe dans une seule branche.
2. **Exhaustivité** : la somme des branches fait-elle 100 % du total ? Si une branche « Autres » dépasse 10 %, le découpage est à revoir.
3. **Utilité** : chaque branche correspond-elle à un levier d'action distinct ? Un découpage juste mais qui ne sépare pas les leviers ne sert à rien.

### 4. Chiffrer chaque branche

C'est ce qui transforme une structure en diagnostic.

## Exemple

Chez Voxalis, le premier découpage proposé en atelier pour expliquer le MTTR (délai moyen de résolution) de 31 h était : « outils, processus, compétences, organisation ». Il échoue au test : un conseiller qui attend une réponse du N2 relève à la fois du processus et de l'organisation, et aucune branche ne se mesure.

L'équipe a retenu un découpage par formule : chaque heure de vie d'un ticket, reconstruite à partir des horodatages de 12 mois de tickets, est affectée à un seul état.

| Branche (état du ticket) | Part du MTTR | Heures |
| --- | --- | --- |
| Attente entre N1 et N2 | 41 % | 12,7 h |
| Collecte d'informations et diagnostic manuel dans 6 outils | 23 % | 7,1 h |
| Attente client | 18 % | 5,6 h |
| Traitement effectif | 18 % | 5,6 h |
| **Total** | **100 %** | **31 h** |

Exclusif par construction (un ticket est dans un seul état à un instant donné), exhaustif (la somme fait 31 h), utile (chaque branche appelle un levier différent). Lecture immédiate : 64 % du délai se joue dans les attentes internes et la collecte, là où un chatbot n'aurait rien changé.

## Pièges à éviter

- **Mélanger les logiques au même niveau.** « Motifs fréquents, région Ouest, problèmes d'outils » : trois critères, recouvrements garantis. Parade : un critère par niveau.
- **La branche « Autres » obèse.** Elle cache souvent l'essentiel. Parade : au-delà de 10 %, redécouper.
- **Le MECE de façade.** Des branches impossibles à mesurer. Parade : définir la donnée qui chiffre chaque branche.
- **Le perfectionnisme.** Passer une journée à rendre MECE le quatrième niveau d'un arbre. Parade : rigueur aux deux premiers niveaux, pragmatisme ensuite.

## Pour aller plus loin

- Template : [arbre d'hypothèses](/templates/arbre-hypotheses)
- Frameworks : [résolution de problèmes par hypothèses](/frameworks/probleme-hypotheses), [principe de la pyramide et SCQA](/frameworks/pyramide-scqa), [analyse 80/20](/frameworks/analyse-80-20) pour hiérarchiser les branches, [arbre de valeur](/frameworks/arbre-de-valeur) pour un découpage financier
- Référence : Barbara Minto, « The Pyramid Principle » — le regroupement MECE des idées.
