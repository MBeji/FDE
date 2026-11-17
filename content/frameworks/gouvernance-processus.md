---
id: gouvernance-processus
titre: "Gouvernance des processus : propriétaire, plan de contrôle, amélioration continue"
resume: "Ce qui tient le processus après la mise en production : un propriétaire de bout en bout, un modèle de référence versionné, des indicateurs lus en trois étages selon la règle 10-20-70, un plan de contrôle et des revues qui bouclent sur les traces."
categorie: processus
phases: [reinventer, industrialiser, perenniser]
origine: "Pratique du BPM et étape Contrôler du Lean Six Sigma"
niveau: avance
tags: [bpm, gouvernance, indicateurs, amelioration-continue, excellence-operationnelle]
templates: [plan-de-controle-processus, tableau-de-bord-valeur]
lies: [gouvernance-ia, regle-10-20-70, modele-operationnel-cible, mesure-impact, process-mining-dmaic]
---

## En bref

Un agent a un propriétaire, un registre et un cycle de vie : c'est la [gouvernance de l'IA](/frameworks/gouvernance-ia). Mais le client n'achète pas des agents, il achète un processus qui tient ses délais et ses coûts. La gouvernance des processus désigne qui en répond de bout en bout, sur quels indicateurs, et comment il s'améliore une fois l'équipe FDE partie. Elle vient du BPM (Business Process Management) et de l'étape Contrôler du Lean Six Sigma.

Pour un FDE, c'est ce qui empêche le résultat du pilote de s'éroder en six mois. Un système agentique dérive de trois façons : le métier change, les données changent, les modèles changent. Seul un propriétaire qui regarde le processus, et non chaque agent, voit les trois.

## Quand l'utiliser

- En phase [Réinventer](/methode/reinventer), pour nommer le propriétaire du processus cible et écrire son mandat.
- En phase [Industrialiser](/methode/industrialiser), pour installer le plan de contrôle et les revues.
- En phase [Pérenniser](/methode/perenniser), pour vérifier que le client les tient seul.

Ne pas créer une instance de plus si un comité de gouvernance de l'IA existe déjà : séparer les décisions, pas les réunions. Ne pas l'installer pour un prototype : un plan de contrôle sans production à contrôler est de la paperasse.

## Comment l'appliquer

### 1. Nommer un propriétaire de bout en bout

Une personne du métier, avec un mandat écrit : elle répond des indicateurs du processus, arbitre entre les équipes qui le servent, décide des changements de règle et dispose d'un budget d'amélioration. Si le processus traverse trois directions et que personne ne l'a en entier, c'est le premier risque à porter au sponsor.

### 2. Tenir un modèle de référence

Le [modèle du processus](/frameworks/bpmn-agentique), son registre des règles et la [matrice humain-agent](/templates/matrice-humain-agent) sont versionnés ensemble. Tout changement passe par une demande : qui la porte, quelle règle change, quelle évaluation la couvre, qui valide. Un prompt modifié sans que le modèle ait changé est un écart.

### 3. Lire les indicateurs en trois étages

La [règle 10-20-70](/frameworks/regle-10-20-70) répartit l'effort. Elle répartit aussi l'attention : les indicateurs se lisent du haut vers le bas, et un indicateur du bas ne se commente que s'il explique un indicateur du haut.

| Étage | Indicateur | Ce qu'il dit | Source |
| --- | --- | --- | --- |
| **70 — Processus et personnes** | Temps de cycle, en médiane et au 90e centile | Le client est-il servi plus vite ? | Traces du processus |
| | Coût par transaction, coût humain et coût d'inférence compris | La valeur est-elle captée ? | Contrôle de gestion |
| | Bon du premier coup, taux de reprise | La vitesse dégrade-t-elle la qualité ? | Traces du processus |
| | Taux d'intervention humaine, par voie | L'autonomie réelle est-elle celle qui a été conçue ? | Journal des décisions |
| | Adoption : usage quotidien, propositions acceptées sans correction, contournements | Les équipes travaillent-elles dans le nouveau flux ? | Poste de travail, observation |
| | Conformité : part des cas qui suivent un parcours prévu | Le flux réel est-il le flux conçu ? | Analyse des traces |
| **20 — Technologie et données** | Disponibilité et latence des outils exposés aux agents | Le système d'information tient-il la charge ? | Observabilité |
| | Fraîcheur des connaissances, complétude des données | Les agents travaillent-ils sur du vrai ? | Base de connaissances, contrôles de données |
| | Coût d'inférence par cas | Le coût récurrent reste-t-il dans le business case ? | Suivi FinOps |
| **10 — Modèles et agents** | Scores d'évaluation sur le golden set rejoué | Y a-t-il une régression ? | Chaîne d'évaluation |
| | Dérive : écart entre la qualité échantillonnée en production et la référence ; évolution des cas entrants | Le monde a-t-il changé sous l'agent ? | Échantillons revus, traces |
| | Escalades et bascules de voie | Où l'agent doute-t-il ? | Journal des décisions |
| | Actions inappropriées | Les garde-fous tiennent-ils ? Doit rester à zéro | Contrôle des cas clos |

Deux lectures piègent. Un taux d'intervention humaine qui monte signale un agent en difficulté. Un taux d'acceptation sans correction qui approche 100 %, avec des décisions prises en quelques secondes, signale une validation devenue réflexe.

### 4. Écrire le plan de contrôle

Pour chaque indicateur retenu : sa définition, sa source, sa fréquence, sa référence et sa cible, un seuil d'alerte, la réaction prévue et la personne qui la déclenche. Un seuil sans réaction écrite ne sert à rien. Le [plan de contrôle](/templates/plan-de-controle-processus) tient sur une page par processus.

### 5. Répartir les décisions

| Décision | Qui décide |
| --- | --- |
| Changer une règle métier ou un critère d'entrée de voie | Le propriétaire du processus |
| Élargir ou réduire l'autonomie d'un agent | Le comité de gouvernance de l'IA, sur proposition du propriétaire du processus et dossier de preuves |
| Modifier un prompt, un outil ou un modèle | Le propriétaire de l'agent, après non-régression |
| Arrêter une voie ou un agent | L'encadrement de proximité ou l'exploitation, sans attendre une instance |

### 6. Installer trois rythmes

- **Chaque semaine**, en exploitation : incidents, bascules de voie, alertes du plan de contrôle.
- **Chaque mois**, revue de performance du processus : les trois étages, dans l'ordre, puis les demandes de changement.
- **Chaque trimestre**, revue d'amélioration : rejouer l'[analyse des traces](/frameworks/process-mining-dmaic), chercher les parcours nouveaux et les gaspillages apparus, réexaminer les verdicts. Ce qui était gardé à l'humain peut-il passer en voie assistée, preuves à l'appui ?

### 7. Transférer la tenue des revues

Le transfert se fait rythme par rythme : le FDE prépare la première séance, coanime la suivante, puis assiste sans intervenir. Au jalon G7, le client a animé seul au moins un point hebdomadaire et une revue mensuelle ; la première revue trimestrielle est datée.

## Exemple

Chez Voxalis, Sophie Lambert est propriétaire du traitement des incidents de bout en bout. Le comité de gouvernance de l'IA, mensuel, qu'elle copréside avec Karim Haddad, sert aussi de revue de performance : une réunion, deux ordres du jour.

Lecture à trois mois de la généralisation.

| Étage | Indicateur | Référence | Cible à 18 mois | Mesuré à +3 mois |
| --- | --- | --- | --- | --- |
| 70 | Délai moyen de résolution | 31 h | 12 h | 13,2 h |
| 70 | Coût par ticket | 41 € | 26 € | 29 € |
| 70 | Taux de réouverture | 14 % | 7 % | 8 % |
| 70 | Résolution sans intervention humaine | 0 % | 35 % | 33 % |
| 20 | Coût d'inférence par ticket | Sans objet | Plafond de 0,50 € | 0,38 € (mesure du pilote) |
| 10 | Justesse du diagnostic | Sans objet | Au moins 90 % | Seuil tenu au pilote ; alerte sous 88 % en moyenne hebdomadaire |

La revue commence par le délai et le coût, tous deux sur la trajectoire de leur cible à 18 mois, comme la résolution sans intervention humaine. La réouverture, à un point de sa cible, est le seul garde-fou en écart : elle est donnée à l'analyse des causes avant toute retouche d'un prompt. Le changement d'un critère d'entrée de la voie autonome relève de Sophie Lambert. L'ouverture d'un nouveau motif à cette voie passe par le comité, avec son dossier de preuves.

## Pièges à éviter

- **Gouverner les agents et oublier le processus.** Six agents conformes peuvent servir un flux qui se dégrade. Parade : la revue commence par l'étage du haut.
- **Un propriétaire sans mandat.** Un titre sans arbitrage ni budget ne tranche rien. Parade : mandat écrit, validé par le sponsor.
- **Des indicateurs sans réaction.** Parade : chaque seuil a un geste et un nom.
- **Corriger le prompt à chaque écart.** Parade : chercher d'abord la cause dans le flux, les données, puis l'agent.
- **Une gouvernance tenue par l'équipe FDE.** Parade : le transfert des revues est un critère du jalon G7.

## Pour aller plus loin

- Guide : [socle transformation métier](/guides/socle-transformation-metier)
- Frameworks : [gouvernance de l'IA et des agents](/frameworks/gouvernance-ia), [règle 10-20-70](/frameworks/regle-10-20-70), [modèle opérationnel AI-Native](/frameworks/modele-operationnel-cible), [AgentOps](/frameworks/agentops), [mesurer l'impact réel](/frameworks/mesure-impact)
- Templates : [plan de contrôle du processus](/templates/plan-de-controle-processus), [tableau de bord de valeur](/templates/tableau-de-bord-valeur), [registre des agents](/templates/registre-agents)
- Références : la pratique du BPM pour le rôle de propriétaire de processus ; le Lean Six Sigma pour le plan de contrôle.
