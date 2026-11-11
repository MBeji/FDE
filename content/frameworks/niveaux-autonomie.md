---
id: niveaux-autonomie
titre: "Niveaux d'autonomie des agents"
resume: "Six niveaux, de L0 à L5, pour fixer le partage du contrôle entre l'agent et l'humain, outil par outil et situation par situation, et l'élargir sur preuves."
categorie: processus
phases: [reinventer, concevoir, construire, industrialiser]
origine: "Maison"
niveau: fondamental
tags: [autonomie, supervision, risque]
templates: [matrice-humain-agent, fiche-agent]
lies: [faut-il-un-agent, collaboration-humain-agent, raci-augmente, garde-fous, evaluation-agents]
---

## En bref

Le niveau d'autonomie décrit le partage du contrôle entre un agent et les humains : qui décide, qui exécute, qui vérifie, et à quel moment. L'échelle compte six niveaux, de L0 à L5. Deux règles la gouvernent. L'autonomie se fixe par outil et par situation, jamais globalement pour un agent. Elle s'élargit sur preuves, jamais au calendrier (conviction n° 6). C'est le principal levier de maîtrise du risque dont dispose le FDE, et aussi ce qui conditionne la valeur : en dessous de L3, l'humain reste le goulot du flux.

## Quand l'utiliser

- En phase [Réinventer](/methode/reinventer), pour dimensionner les voies du processus cible et remplir la [matrice humain-agent](/templates/matrice-humain-agent).
- En phase [Concevoir](/methode/concevoir), outil par outil, dans chaque [fiche agent](/templates/fiche-agent).
- En pilote puis en production, pour instruire chaque demande d'élargissement devant le comité de gouvernance.

Ne pas l'utiliser pour choisir l'architecture : savoir qui tient le plan relève de [l'échelle des solutions](/frameworks/faut-il-un-agent). Un workflow peut agir en L4, un agent rester en L2.

## Comment l'appliquer

### 1. Parler la même échelle

| Niveau | Nom | L'agent | L'humain |
| --- | --- | --- | --- |
| L0 | Manuel | N'intervient pas | Fait tout |
| L1 | Assistance | Informe et suggère | Décide et exécute |
| L2 | Proposition | Prépare l'action complète | Approuve chaque action avant exécution (human-in-the-loop) |
| L3 | Autonomie encadrée | Agit seul dans un périmètre défini, escalade les exceptions | Supervise en temps réel, peut reprendre la main (human-on-the-loop) |
| L4 | Autonomie contrôlée | Agit seul sur tout le périmètre | Contrôle a posteriori par échantillonnage et sur alerte |
| L5 | Autonomie complète | Planifie et gère ses exceptions | Fixe les objectifs et audite |

Le saut décisif se situe entre L2 et L3 : l'humain cesse de valider chaque action et passe à la supervision. L5 n'est pas une cible raisonnable pour un processus d'entreprise : viser L3 ou L4 sur des périmètres bornés.

### 2. Noter chaque action sur quatre critères

| Critère | Question | Plafonne à L1 ou L2 | Autorise L3 ou L4 |
| --- | --- | --- | --- |
| Réversibilité | Peut-on annuler l'action, et en combien de temps ? | Irréversible, ou annulation coûteuse | Annulable en quelques minutes, sans séquelle |
| Coût de l'erreur | Que coûte une action fausse dans le pire cas ? | Dommage client, financier, légal ou de sécurité | Limité à un cas, sans effet durable |
| Vérifiabilité | Détecte-t-on l'erreur vite et sans effort ? | Erreur silencieuse | Contrôle par code ou signal métier rapide |
| Maturité des évaluations | Quelles preuves mesurées a-t-on ? | Ni golden set ni historique | Seuils tenus hors ligne, puis en production |

Le critère le plus défavorable fixe le plafond. Une lecture n'est pas sans risque par nature : vérifier ses effets de bord.

### 3. Fixer l'autonomie par outil et par situation

L'unité de décision est le couple outil et situation. La situation se décrit par des conditions testables : type de client, plage horaire, montant, appartenance à un catalogue, niveau de confiance de l'agent. Ces règles s'appliquent dans le code qui exécute les outils, pas seulement dans le prompt.

### 4. Écrire les conditions d'élargissement et de repli

Pour chaque passage au niveau supérieur, consigner la preuve exigée (volume de cas, taux, durée d'observation), l'instance qui décide et la condition de retour arrière. Séquence type : mode fantôme, où l'agent propose sans que rien ne s'exécute ; puis L2 ; puis L3 sur un périmètre restreint ; puis élargissement. Le repli peut être automatique sur alerte. L'élargissement ne l'est jamais.

### 5. Dimensionner la supervision

Chaque niveau a un coût humain : capacité et délai d'approbation en L2, poste de supervision et temps de reprise en L3, taux d'échantillonnage en L4. Un L2 à fort volume recrée une file d'attente et dégénère en validation réflexe : voir la [collaboration humain-agent](/frameworks/collaboration-humain-agent).

## Exemple

Les six agents de SAV Augmenté n'ont pas le même niveau, et deux d'entre eux en ont plusieurs.

| Agent | Niveau | Ce qui le justifie |
| --- | --- | --- |
| Orchestrateur de cas | L3 | Choisit la voie et déclenche les escalades, sans action directe sur le client |
| Qualification | L4, contrôle par échantillonnage | Erreur réversible et détectable, exactitude mesurée sur 600 cas annotés |
| Diagnostic | L3, lecture seule | Aucune écriture ; escalade dès que la confiance est faible |
| Résolution | L3 sur le catalogue à risque faible, L2 au-delà | La réversibilité dépend de l'action |
| Communication | L3 pour les messages de statut, L2 pour tout geste commercial | Le coût de l'erreur change avec l'engagement pris |
| Qualité | L3 | Contrôle les cas clos, n'agit pas sur le client |

L'autonomie par situation se lit sur `ligne.lancer_test` : outil de lecture, mais avec une micro-coupure possible. L'Agent Diagnostic le lance seul hors des heures ouvrées du client et demande l'approbation du superviseur de cas sinon.

L'élargissement est écrit à l'avance : passage à L4 sur un motif après 500 diagnostics consécutifs avec une justesse d'au moins 95 % sur ce motif, validé en comité de gouvernance IA. Le pilote a suivi la séquence : deux semaines en mode fantôme, puis un catalogue d'actions restreint, puis l'élargissement. Résultat : 31 % des tickets résolus sans intervention humaine, aucune action inappropriée en production.

## Pièges à éviter

- **Un niveau unique par agent.** « L'agent est en L3 » ne dit rien de l'outil qui écrit. Parade : décider outil par outil, situation par situation, dans la fiche agent.
- **L2 partout, par prudence.** Parade : mesurer le taux de refus et le temps passé par approbation. Des refus rarissimes et des validations en quelques secondes signalent une approbation qui ne contrôle plus rien.
- **Élargir au calendrier.** « L3 en vague 2 » n'est pas une preuve. Parade : une condition chiffrée par passage, vérifiée avant la décision.
- **L'autonomie écrite dans le prompt seulement.** Un modèle peut ignorer une consigne. Parade : faire porter les permissions et les approbations par la couche d'exécution des outils.
- **Aucun chemin de repli.** Parade : une condition de retour arrière par niveau, et un mode dégradé testé avant la mise en production.

## Pour aller plus loin

- Outil interactif : [Agent Designer](/outils/agent-designer)
- Templates : [matrice humain-agent](/templates/matrice-humain-agent), [fiche agent](/templates/fiche-agent), [analyse de risques d'un agent](/templates/analyse-risques-agent)
- Frameworks : [collaboration humain-agent](/frameworks/collaboration-humain-agent), [RACI augmenté](/frameworks/raci-augmente), [garde-fous](/frameworks/garde-fous), [évaluer un agent](/frameworks/evaluation-agents)
- Savoir terrain : [autonomie progressive](/savoir/autonomie-progressive), [mode fantôme](/savoir/mode-fantome)
