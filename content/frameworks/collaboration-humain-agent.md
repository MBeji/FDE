---
id: collaboration-humain-agent
titre: "Concevoir la collaboration humain-agent"
resume: "Spécifier les modes de travail entre humains et agents, les passages de relais et le poste de supervision, pour obtenir une confiance calibrée plutôt qu'une validation réflexe."
categorie: processus
phases: [reinventer, concevoir, construire]
origine: "Maison"
niveau: avance
tags: [collaboration, supervision, confiance]
templates: [matrice-humain-agent, processus-cible-ai-native]
lies: [niveaux-autonomie, raci-augmente, modele-operationnel-cible, pilotage-adoption, garde-fous]
---

## En bref

Le niveau d'autonomie dit qui a le contrôle. Il ne dit pas comment l'humain et l'agent travaillent ensemble, et c'est là que se gagnent ou se perdent la valeur et la sécurité. Un passage de relais mal conçu recrée l'attente qu'on voulait supprimer. Une supervision mal outillée dégénère en validation réflexe. Concevoir la collaboration, c'est spécifier le mode de travail de chaque voie, le contenu et le délai de chaque passage de relais, le poste de supervision, et les mécanismes qui maintiennent une confiance calibrée : ni défiance qui fait tout refaire, ni complaisance qui laisse tout passer.

## Quand l'utiliser

- En phase [Réinventer](/methode/reinventer), voie par voie, en même temps que le processus cible.
- En phase [Concevoir](/methode/concevoir), pour spécifier les escalades et le poste de supervision avant de construire.
- En pilote, quand l'adoption stagne ou quand le taux d'approbation frôle 100 %.

Sans objet pour un traitement sans humain dans la boucle : la question se réduit alors à un plan d'échantillonnage, traité dans [l'évaluation des agents](/frameworks/evaluation-agents).

## Comment l'appliquer

### 1. Choisir le mode de collaboration de chaque voie

| Mode | L'agent | L'humain | Risque dominant |
| --- | --- | --- | --- |
| Copilote (L1) | Informe et suggère à la demande | Mène le cas | Sous-utilisation, double travail |
| Approbation (L2) | Prépare l'action complète | Valide chaque action | Validation réflexe, file d'attente |
| Supervision par exception (L3) | Agit, escalade ce qui sort du périmètre | Traite les escalades, peut reprendre la main | Perte de contexte à la reprise |
| Contrôle a posteriori (L4) | Agit sur tout le périmètre | Audite par échantillonnage | Dérive lente, érosion des compétences |
| Délégation par l'expert | Exécute les tâches qu'on lui confie | Mène le cas et délègue | Délégation mal formulée |

### 2. Concevoir chaque passage de relais

Trois exigences pour un relais de l'agent vers l'humain.

- **Contexte transmis.** L'humain doit pouvoir décider sans rouvrir les outils : décision attendue, ce que l'agent a fait et constaté avec ses preuves, sa recommandation et son niveau de confiance, ce qu'il ignore, l'échéance. Test : un opérateur expérimenté décide-t-il en moins de deux minutes sans changer d'écran ?
- **Délai.** Chaque relais a un délai cible et un comportement à l'expiration : relance, réaffectation ou repli. Le temps d'attente des escalades se suit comme un indicateur du processus.
- **Charge cognitive.** Borner le nombre de cas simultanés par superviseur, regrouper les demandes similaires, trier par risque et par échéance, proscrire les interruptions non hiérarchisées.

Dans l'autre sens, l'humain rend la main par une décision structurée : approuvé, modifié, ou refusé avec motif. Le motif alimente les évaluations.

### 3. Spécifier le poste de supervision

L'écran montre la file triée, l'état de chaque cas, la raison de l'escalade, les preuves et les actions possibles : approuver, corriger, reprendre la main, arrêter. La reprise en main est possible à tout moment, et l'agent s'arrête proprement en laissant l'état du cas lisible.

### 4. Calibrer la confiance

La confiance est calibrée quand elle suit la fiabilité réelle de l'agent, type de cas par type de cas. Quatre leviers : montrer les preuves, pas seulement la conclusion ; afficher un niveau de confiance dont la justesse est mesurée ; publier les performances par motif ; faire dire à l'agent ce qu'il ne sait pas.

### 5. Contrer la complaisance face à l'automatisation

Un humain qui supervise un système fiable cesse peu à peu de vérifier : le phénomène est documenté de longue date en ergonomie. Parades : suivre le taux de correction et le temps passé par approbation ; injecter des cas témoins dont l'erreur est connue ; proportionner la friction au risque, avec une confirmation explicite qui rappelle l'impact pour les actions sensibles ; limiter les longues séquences d'approbation.

## Exemple

Chez Voxalis, le conseiller N1 devient superviseur de cas, et chaque voie a son mode. Voie assistée, 45 % des tickets : approbation, les agents qualifient, diagnostiquent et proposent, le conseiller décide. Voie autonome, 35 % : contrôle a posteriori par échantillonnage. Voie experte, 20 % : délégation, l'expert N2 mène le cas et les agents exécutent à sa demande.

Le passage de relais de l'Agent Diagnostic est spécifié dans sa fiche. Quand les preuves sont contradictoires ou insuffisantes, il transmet un diagnostic à confiance faible, les vérifications effectuées et la liste de ce qui manque ; l'expert N2 reprend le cas. La confiance affichée est vérifiée : les diagnostics à confiance élevée doivent être justes dans au moins 97 % des cas. Deux indicateurs de collaboration sont suivis : la part des diagnostics acceptés sans correction par le conseiller, avec une cible d'au moins 85 %, et l'usage du poste de supervision, quotidien pour 16 conseillers sur 18 à la fin du pilote.

## Pièges à éviter

- **L'escalade sans contexte.** « Cas transmis à un conseiller » oblige à tout reprendre depuis le début. Parade : un format d'escalade imposé, testé avec les opérateurs.
- **L'approbation à la chaîne.** Parade : réserver L2 aux actions qui le méritent, et mesurer la vigilance avec des cas témoins.
- **Le superviseur évalué comme un opérateur.** Conserver les objectifs de productivité d'avant rend la supervision impossible. Parade : revoir objectifs et effectifs avec la DRH dans le [modèle opérationnel](/frameworks/modele-operationnel-cible).
- **L'érosion des compétences.** Qui ne traite plus de cas ne sait plus les juger. Parade : maintenir une pratique sur les cas complexes et tenir des revues de cas régulières.
- **Le poste de supervision conçu en dernier.** Parade : le maquetter dès la phase Réinventer et l'éprouver pendant le mode fantôme.

## Pour aller plus loin

- Templates : [matrice humain-agent](/templates/matrice-humain-agent), [processus cible AI-Native](/templates/processus-cible-ai-native)
- Frameworks : [niveaux d'autonomie](/frameworks/niveaux-autonomie), [RACI augmenté](/frameworks/raci-augmente), [pilotage de l'adoption](/frameworks/pilotage-adoption)
- Savoir terrain : [l'humain oublié](/savoir/humain-oublie), [mode fantôme](/savoir/mode-fantome), [binôme métier-FDE](/savoir/binome-metier-fde)
- Guide : [gérer les résistances](/guides/gerer-resistances)
- Références : Lisanne Bainbridge, « Ironies of Automation » (1983) ; Raja Parasuraman et Dietrich Manzey, « Complacency and Bias in Human Use of Automation » (2010).
