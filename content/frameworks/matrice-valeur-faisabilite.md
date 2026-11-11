---
id: matrice-valeur-faisabilite
titre: "Matrice valeur × faisabilité"
resume: "Noter chaque cas d'usage sur des critères de valeur et de faisabilité explicites et pondérés, pour arbitrer un portefeuille en quadrants plutôt qu'à l'intuition."
categorie: opportunites
phases: [cibler]
origine: "Pratique des cabinets de conseil en stratégie"
niveau: fondamental
tags: [priorisation, portefeuille, notation]
templates: [portefeuille-priorise, canevas-cas-usage]
lies: [approche-par-domaine, portefeuille-horizons, faut-il-un-agent, business-case-tco]
---

## En bref

La matrice place chaque cas d'usage sur deux axes notés de 1 à 5 : la **valeur** qu'il crée et la **faisabilité** de sa mise en production. Chaque axe agrège des sous-critères pondérés, définis avant la notation. Le résultat est un classement en quatre quadrants qui structure la discussion d'arbitrage.

Sa vraie utilité n'est pas le graphique, c'est la discipline : des critères explicites, des notes justifiées par des faits, des désaccords visibles. Mal utilisée, elle habille d'une apparence de rigueur une décision déjà prise.

## Quand l'utiliser

- En phase [Cibler](/methode/cibler), sur la liste longue des cas d'usage d'un domaine, après l'atelier d'idéation.
- À chaque revue de portefeuille, pour renoter à la lumière des preuves.

Ne pas l'utiliser pour comparer des cas d'usage de domaines différents sans critère de renforcement : on recrée l'éparpillement.

## Comment l'appliquer

### 1. Fixer les critères et leurs poids avant de noter

| Axe | Critère | Poids par défaut | Note 1 | Note 5 |
| --- | --- | --- | --- | --- |
| Valeur | Impact financier | 50 % | Moins de 0,1 M€ par an | Plusieurs M€ par an |
| Valeur | Impact stratégique | 30 % | Aucun lien avec les priorités | Indicateur suivi par le comité de direction |
| Valeur | Portée | 20 % | Une équipe, un cas rare | Tout le domaine, volume élevé |
| Faisabilité | Données | 20 % | Inexistantes ou inaccessibles | Disponibles, fiables, historisées |
| Faisabilité | Complexité technique | 20 % | Barreau 5 sans précédent | Barreau 1 ou 2 |
| Faisabilité | Intégration au SI | 20 % | Aucun accès, actions en écriture critiques | API existantes en lecture |
| Faisabilité | Risque et conformité | 20 % | Haut risque, décision irréversible | Erreur détectable et réversible |
| Faisabilité | Adoption | 20 % | Métier opposé | Métier demandeur |

Ajuster les poids avec le sponsor, une fois, avant toute notation. Règle éliminatoire : une note de 1 en données ou en risque classe le cas « à incuber » quelle que soit sa moyenne.

### 2. Noter en atelier, preuves à l'appui

Chaque note s'accompagne d'une justification en une ligne. Faire noter séparément le métier, la DSI et les FDE, puis confronter : un écart de deux points signale un fait manquant.

### 3. Placer dans les quadrants

| Quadrant | Position | Décision |
| --- | --- | --- |
| Gains rapides | Valeur moyenne à forte, faisabilité forte | Lancer en première vague |
| Cœur ou paris structurants | Valeur forte, faisabilité moyenne | Investir, préparer les prérequis |
| À incuber | Valeur forte, faisabilité faible | Lever le verrou (souvent les données) avant de reconsidérer |
| À écarter | Valeur faible | Archiver avec la raison |

### 4. Contrôler la cohérence du portefeuille

Vérifier les dépendances entre cas retenus et la capacité de l'équipe. Le classement donne un ordre, pas un plan.

L'[outil de priorisation](/outils/priorisation) calcule les notes pondérées et trace la matrice.

## Exemple

Chez Voxalis, 14 cas d'usage notés, 5 retenus. Détail pour quatre d'entre eux (valeur : financier, stratégique, portée ; faisabilité : données, technique, intégration, risque, adoption).

| Cas d'usage | Notes de valeur | Valeur | Notes de faisabilité | Faisabilité | Quadrant |
| --- | --- | --- | --- | --- | --- |
| Qualification et routage | 4 ; 4 ; 5 | 4,2 | 5 ; 5 ; 4 ; 4 ; 4,5 | 4,5 | Gain rapide |
| Diagnostic technique | 5 ; 4 ; 4,5 | 4,6 | 3 ; 3 ; 4 ; 4 ; 4 | 3,6 | Cœur |
| Résolution des 12 motifs | 5 ; 5 ; 4 | 4,8 | 3 ; 3 ; 3 ; 3 ; 3 | 3,0 | Pari structurant |
| Détection prédictive des pannes | 4 ; 5 ; 4,5 | 4,4 | 1 ; 2 ; 2 ; 3 ; 2 | 2,0 | À incuber |

La détection prédictive avait la deuxième meilleure valeur ; sa note de 1 en données (historique de supervision insuffisant) l'a écartée sans débat. La génération automatique d'avoirs (2,8 et 2,6) a été écartée pour risque financier.

## Pièges à éviter

- **Noter puis pondérer.** Ajuster les poids après coup pour faire gagner son favori. Parade : poids figés et signés avant la notation.
- **Effet de halo.** Un cas séduisant reçoit de bonnes notes partout. Parade : noter critère par critère sur l'ensemble des cas, pas cas par cas.
- **Tout au milieu.** Des notes entre 3 et 4 ne discriminent rien. Parade : ancrer chaque note sur l'échelle décrite, imposer au moins un 1 et un 5 par critère.
- **Surestimer la faisabilité des données.** Parade : une note de 4 ou 5 en données exige un échantillon extrait et examiné.
- **Confondre valeur et volume.** Parade : l'impact financier se chiffre en euros, pas en nombre de tickets.

## Pour aller plus loin

- Outil : [priorisation](/outils/priorisation)
- Template : [portefeuille priorisé](/templates/portefeuille-priorise)
- Frameworks : [portefeuille et horizons](/frameworks/portefeuille-horizons), [faut-il un agent ?](/frameworks/faut-il-un-agent), [business case et coût complet](/frameworks/business-case-tco)
- Guide : [animer un atelier d'idéation](/guides/animer-atelier-ideation)
