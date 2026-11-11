---
id: pilotage-adoption
titre: "Piloter l'adoption"
resume: "Un entonnoir en cinq étages, de l'accès à l'impact, des indicateurs pour chacun, un réseau de champions et les signaux d'alerte qui imposent d'agir."
categorie: adoption
phases: [construire, industrialiser, perenniser]
origine: "Maison"
niveau: fondamental
tags: [adoption, indicateurs, champions]
templates: [plan-conduite-changement, tableau-de-bord-valeur]
lies: [adkar, modele-influence, mesure-impact, kotter-8-etapes]
---

## En bref

L'adoption ne se décrète pas et ne se mesure pas au nombre de personnes formées. Elle se pilote comme un entonnoir : **accès → activation → usage régulier → maîtrise → impact**. Chaque étage a ses indicateurs et ses causes de perte. Le pilotage consiste à repérer l'étage où l'on perd le plus de monde et à agir là.

Pour un FDE, c'est le lien entre le fil Adoption et le fil Valeur : un agent parfait que personne n'utilise ne crée aucune valeur, et un usage massif sans maîtrise en détruit.

## Quand l'utiliser

- En [Construire](/methode/construire), dès le premier jour du pilote : l'adoption fait partie des critères de la preuve de valeur.
- En [Industrialiser](/methode/industrialiser), vague par vague, pour comparer les sites.
- En [Pérenniser](/methode/perenniser), pour détecter l'érosion après le départ des FDE.

## Comment l'appliquer

### 1. Définir l'entonnoir et ses indicateurs

| Étage | Définition | Indicateur | Source |
| --- | --- | --- | --- |
| Accès | La personne a les droits, l'outil et la formation | % de la population cible équipée et formée | Annuaire, formation |
| Activation | Elle a utilisé l'outil sur un cas réel | % ayant traité au moins un cas | Traces |
| Usage régulier | Elle l'utilise comme mode de travail normal | % utilisant l'outil chaque jour travaillé | Traces |
| Maîtrise | Elle l'utilise bien : valide, corrige, signale | Taux de correction pertinente des propositions, signalements, contournements | Traces, Agent Qualité, observation |
| Impact | Son travail produit le résultat attendu | MTTR, FCR, satisfaction par équipe | Tableau de bord de valeur |

Fixer une cible par étage et par vague. Mesurer chaque semaine.

### 2. Monter un réseau de champions

1. Un champion pour 8 à 12 utilisateurs, choisi parmi les pairs respectés et volontaires.
2. Formé en avance, avec un accès direct à l'équipe produit.
3. Rôle : aider sur le plateau, remonter les irritants, relayer les améliorations.
4. Temps alloué explicitement (par exemple deux heures par semaine) et reconnu.
5. Point hebdomadaire de 30 minutes entre champions et équipe produit.

### 3. Surveiller les signaux d'alerte

| Signal | Interprétation probable | Action |
| --- | --- | --- |
| Activation forte, usage régulier faible | L'outil ne fait pas gagner de temps ou des irritants bloquent | Observation sur le plateau, correction des irritants en une semaine |
| Usage qui baisse après deux à trois semaines | Effet nouveauté passé, ou retour aux anciens outils | Vérifier les mécanismes formels, retirer l'ancien chemin |
| Taux d'acceptation des propositions proche de 100 % | Validation sans lecture : maîtrise faible, risque qualité | Contrôles d'échantillons, rappel du rôle de superviseur |
| Écart fort entre équipes | Effet manager | Diagnostic [ADKAR](/frameworks/adkar) de l'équipe en retrait |
| Usage élevé, impact absent | Mauvais usage ou mauvaise cible de valeur | Revoir le processus et les indicateurs de valeur |

### 4. Rendre l'adoption visible

Un tableau partagé chaque semaine avec les managers et les champions, puis mensuellement en COPIL, à côté des indicateurs de valeur.

## Exemple

Au pilote de Nantes (S22 à S29), l'entonnoir des 18 conseillers a évolué ainsi : accès 18 sur 18 en S22 ; activation 18 sur 18 en S24, après le mode fantôme ; usage régulier 11 sur 18 en S25, puis **16 sur 18 en S29**. Le creux de S25 venait d'un irritant identifié par les deux champions : le poste de supervision n'affichait pas l'historique client, obligeant à rouvrir le CRM. Corrigé en une semaine.

Au niveau maîtrise, l'équipe a surveillé le taux d'acceptation des propositions de l'Agent Résolution : une conseillère à 100 % sur deux semaines a été accompagnée en binôme. À l'étage impact, le MTTR du pilote est passé de 31 h à 14,5 h. Pour la généralisation, la cible fixée à chaque vague est de 85 % d'usage régulier quatre semaines après le démarrage.

## Pièges à éviter

- **Compter les formés.** La formation est l'accès, pas l'adoption. Parade : piloter l'usage régulier et la maîtrise.
- **Ignorer la maîtrise.** Un usage massif mais aveugle dégrade la qualité. Parade : suivre corrections et signalements.
- **Des champions sans temps.** Ils s'épuisent en trois semaines. Parade : temps alloué et reconnu.
- **Mesurer sans agir.** Parade : chaque signal d'alerte a un responsable et un délai d'action.

## Pour aller plus loin

- Frameworks : [ADKAR](/frameworks/adkar), [modèle d'influence](/frameworks/modele-influence), [mesure d'impact](/frameworks/mesure-impact)
- Templates : [plan de conduite du changement](/templates/plan-conduite-changement), [tableau de bord de valeur](/templates/tableau-de-bord-valeur)
- Savoir terrain : [l'humain oublié](/savoir/humain-oublie), [revue de valeur hebdomadaire](/savoir/revue-de-valeur-hebdo)
