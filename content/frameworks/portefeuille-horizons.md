---
id: portefeuille-horizons
titre: "Portefeuille et horizons"
resume: "Équilibrer gains rapides, cœur de la transformation et paris, puis les séquencer en vagues réalistes au regard des dépendances et de la capacité de l'équipe."
categorie: opportunites
phases: [cibler, perenniser]
origine: "Maison, d'après les trois horizons (McKinsey)"
niveau: fondamental
tags: [portefeuille, sequencement, feuille-de-route]
templates: [portefeuille-priorise, plan-de-mission]
lies: [matrice-valeur-faisabilite, approche-par-domaine, deploy-reshape-invent, poc-pilote-production]
---

## En bref

Les trois horizons de McKinsey distinguent le cœur de métier, les activités émergentes et les options futures. Nous les transposons au portefeuille de cas d'usage d'un domaine : **gains rapides** qui financent et crédibilisent, **cœur** qui porte l'essentiel de la valeur, **paris** et options qui préparent la suite.

Un portefeuille fait uniquement de gains rapides ne transforme rien ; un portefeuille fait uniquement de paris s'épuise avant la première preuve. Le travail du FDE est d'équilibrer les trois, puis de les ordonner en vagues qui respectent les dépendances techniques et la capacité réelle.

## Quand l'utiliser

- En fin de phase [Cibler](/methode/cibler), après la notation [valeur × faisabilité](/frameworks/matrice-valeur-faisabilite), pour transformer un classement en feuille de route.
- En [Pérenniser](/methode/perenniser), à chaque revue trimestrielle du portefeuille, pour faire monter ou sortir des cas d'usage.

Ne pas l'utiliser pour répartir un budget entre domaines sans lien : les horizons s'appliquent au sein d'une trajectoire cohérente.

## Comment l'appliquer

### 1. Affecter chaque cas d'usage à un horizon

| Horizon | Contenu | Rôle | Critère de succès |
| --- | --- | --- | --- |
| H1 Gains rapides | Faisabilité forte, valeur moyenne à forte | Prouver vite, créer les briques communes, gagner la confiance | Valeur mesurée en moins de 3 mois |
| H2 Cœur | Valeur forte, faisabilité moyenne | Porter l'ambition du domaine | Indicateur de domaine déplacé |
| H3 Paris et options | Valeur forte, incertitude forte | Explorer, lever les verrous | Verrou levé ou option abandonnée |

Repère de départ à discuter avec le sponsor : la majorité de l'effort sur H1 et H2, une part limitée et financée par étapes sur H3.

### 2. Cartographier les dépendances

Pour chaque cas, lister ce qu'il exige d'un autre : données structurées, outil exposé, confiance acquise. Un cas H2 dépend presque toujours d'un H1 ; l'ordre se lit sur ce graphe, pas dans le classement.

### 3. Mesurer la capacité

Compter les ressources rares : ingénieurs agents, experts métier pour annoter les évaluations, intégrateurs SI, capacité d'absorption du métier. Une équipe de deux ingénieurs agents ne mène pas cinq cas d'usage en parallèle.

### 4. Construire les vagues

Une vague regroupe ce qui peut avancer ensemble, se termine par un jalon mesurable et livre au moins une valeur visible. Chaque vague prépare la suivante.

### 5. Revoir le portefeuille

À chaque revue : un cas H3 dont le verrou est levé passe en H2 ; un cas qui n'a pas déplacé son indicateur sort. Documenter les sorties autant que les entrées.

## Exemple

Le portefeuille Voxalis, tel qu'arbitré à S9.

| Horizon | Cas d'usage | Dépend de |
| --- | --- | --- |
| H1 | Qualification et routage (4,2 ; 4,5) | Accès CRM et ticketing |
| H1 | Communication proactive (3,6 ; 4,2) | Qualification, état du cas |
| H1 | Assistant de l'expert N2 (3,4 ; 4,4) | Base de connaissances nettoyée |
| H2 | Diagnostic technique (4,6 ; 3,6) | Qualification, outils de supervision et de test de ligne |
| H2 | Résolution des 12 motifs récurrents (4,8 ; 3,0) | Diagnostic fiable, catalogue de remédiation |
| H3 | Détection prédictive des pannes (4,4 ; 2,0) | Historique de supervision exploitable |

Séquencement retenu : prototype sur une tranche verticale (un motif de bout en bout, S18 à S21) qui fait exister les briques H1 et H2 ; pilote de 8 semaines à Nantes (S22 à S29) ; généralisation en trois vagues régionales (S30 à S39). Avec deux ingénieurs agents, le portefeuille a été construit par couches sur un même flux plutôt que par cas d'usage parallèles. La détection prédictive reste en H3 : le chantier de données de supervision est à engager avant toute reconsidération.

## Pièges à éviter

- **Empiler les gains rapides.** Le comité applaudit, le domaine ne change pas. Parade : au moins un cas H2 dans chaque vague.
- **Lancer le pari sans le socle.** La résolution autonome sans qualification ni diagnostic fiables échoue sur ses données d'entrée. Parade : respecter le graphe de dépendances.
- **Planifier à capacité théorique.** Parade : compter les experts métier disponibles pour les évaluations, souvent le vrai goulet.
- **Ne jamais sortir un cas.** Parade : un critère de sortie écrit pour chaque cas, appliqué en revue.

## Pour aller plus loin

- Frameworks : [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite), [Déployer, Remodeler, Inventer](/frameworks/deploy-reshape-invent), [du POC à la production](/frameworks/poc-pilote-production)
- Template : [portefeuille priorisé](/templates/portefeuille-priorise)
- Savoir terrain : [tranche verticale](/savoir/tranche-verticale), [plateforme avant les usages](/savoir/plateforme-avant-usages)
- Référence : McKinsey, modèle des trois horizons de croissance.
