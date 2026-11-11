---
id: maturite-ai-native
titre: "Modèle de maturité AI-Native"
resume: "Cinq niveaux et sept dimensions pour mesurer le point de départ d'une organisation, repérer son maillon faible et fixer une cible réaliste."
categorie: strategie
phases: [diagnostiquer]
origine: "Maison"
niveau: fondamental
tags: [diagnostic, maturite, evaluation]
templates: [diagnostic-maturite]
lies: [rewired-six-capacites, regle-10-20-70, modele-operationnel-cible, niveaux-autonomie]
---

## En bref

Le modèle évalue une organisation sur **sept dimensions** — Vision & stratégie ; Cas d'usage & valeur ; Données & connaissances ; Technologie & plateforme ; Talents & culture ; Modèle opérationnel & gouvernance ; Maturité agentique — selon **cinq niveaux** : Initial, Expérimentateur, Praticien, Industriel, AI-Native.

L'intérêt n'est pas la moyenne mais le **profil**. Une organisation avance au rythme de sa dimension la plus faible. Le diagnostic dit au FDE où la mission va buter et ce qu'elle doit construire en plus des agents.

## Quand l'utiliser

- En phase [Diagnostiquer](/methode/diagnostiquer), sur le périmètre du domaine visé, pas sur toute l'entreprise.
- En [Pérenniser](/methode/perenniser), pour mesurer la progression avec la même grille.

Ne pas l'utiliser comme classement entre entités ni comme note de performance des équipes : le score deviendrait négocié.

## Comment l'appliquer

### 1. Partager l'échelle

| Niveau | Nom | Signature |
| --- | --- | --- |
| 1 | Initial | Initiatives individuelles, pas de stratégie, pas de mesure |
| 2 | Expérimentateur | POC multiples, peu en production, valeur non mesurée |
| 3 | Praticien | Quelques cas d'usage en production et mesurés, plateforme émergente, gouvernance définie |
| 4 | Industriel | Plateforme commune, AgentOps, évaluations continues, portefeuille piloté par la valeur |
| 5 | AI-Native | Processus conçus autour des agents, autonomie élargie sur preuves, amélioration continue intégrée |

### 2. Collecter les preuves

Pour chaque dimension, croiser trois sources : entretiens (sponsor, métier, DSI, data, RSSI, DPO, DRH), artefacts (feuille de route, inventaire des cas d'usage, documentation des API, organigramme, tableaux de bord) et observation. Règle : **pas de preuve, pas de point**. Un niveau n'est atteint que si tous ses critères sont démontrés.

### 3. Noter et calibrer

Noter chaque dimension au demi-point. Deux FDE notent séparément, puis confrontent leurs notes : tout écart supérieur à un point se résout par une preuve supplémentaire. Restituer les notes provisoires aux interlocuteurs avant la synthèse : un score contesté et défendu vaut mieux qu'un score accepté par politesse.

### 4. Lire le profil

- **Maillon faible** : la ou les dimensions les plus basses fixent le plafond de la mission.
- **Écart supérieur à un point** entre deux dimensions : déséquilibre à traiter (plateforme sans usages, ambition sans gouvernance).
- **Cible** : un niveau de plus sur le domaine en douze à dix-huit mois est déjà ambitieux.

### 5. Traduire en feuille de route

Chaque dimension sous la cible donne un chantier, un propriétaire et un indicateur. Les chantiers non agentiques entrent dans la charte ou dans le registre des risques.

## Exemple

Diagnostic Voxalis, S3 à S6 : moyenne 2,1 sur 5, niveau Expérimentateur.

| Dimension | Score | Preuve déterminante |
| --- | --- | --- |
| Vision & stratégie | 2,5 | Ambition affichée, aucun domaine prioritaire arbitré |
| Cas d'usage & valeur | 2,0 | 7 POC en deux ans, un seul en production, aucun mesuré |
| Données & connaissances | 2,5 | 2 300 articles, dont 35 % obsolètes |
| Technologie & plateforme | 3,0 | 4 applications sur 6 exposent des API, pas de bus d'événements |
| Talents & culture | 2,0 | Compétences concentrées dans l'équipe Data & IA |
| Modèle opérationnel & gouvernance | 1,5 | Pas de propriétaire de cas d'usage, pas d'instance IA |
| Maturité agentique | 1,5 | Aucun agent en production, aucune évaluation |

Lecture : la technologie (3,0) n'est pas le frein. Les maillons faibles sont la gouvernance et la maturité agentique (1,5). D'où trois décisions : comité de gouvernance IA mensuel, équipe AgentOps de 3 ETP, autonomie gagnée par paliers à partir du mode fantôme.

## Pièges à éviter

- **Noter l'entreprise entière.** La moyenne masque tout. Parade : noter le domaine visé.
- **Noter sur déclaration.** Les répondants surestiment. Parade : exiger un artefact par critère.
- **Présenter la moyenne en titre.** Elle invite à une conclusion fausse. Parade : titrer sur le maillon faible.
- **Viser le niveau 5 d'emblée.** Parade : fixer une cible à un niveau, dimension par dimension.
- **Ne jamais remesurer.** Parade : programmer la remesure en Pérenniser, avec la même grille et les mêmes preuves.

## Pour aller plus loin

- Outil interactif : [auto-diagnostic de maturité](/outils/maturite)
- Template : [diagnostic de maturité](/templates/diagnostic-maturite)
- Frameworks : [six capacités de Rewired](/frameworks/rewired-six-capacites), [modèle opérationnel AI-Native](/frameworks/modele-operationnel-cible), [niveaux d'autonomie](/frameworks/niveaux-autonomie)
- Guide : [mener des entretiens](/guides/mener-entretiens)
