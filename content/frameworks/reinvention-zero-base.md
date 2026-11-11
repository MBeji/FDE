---
id: reinvention-zero-base
titre: "Réinvention à base zéro"
resume: "Reconstruire un processus à partir du résultat attendu par le client, et non de l'existant, en appliquant cinq principes de conception AI-Native."
categorie: processus
phases: [reinventer]
origine: "Maison"
niveau: fondamental
tags: [processus, conception, ai-native]
templates: [processus-cible-ai-native]
lies: [cartographie-processus, niveaux-autonomie, collaboration-humain-agent, modele-operationnel-cible, deploy-reshape-invent]
---

## En bref

Automatiser un processus existant, c'est en figer les défauts. Ses étapes, ses passages de relais et ses contrôles ont été conçus pour des personnes qui travaillent en séquence, avec une attention limitée et des outils cloisonnés. La réinvention à base zéro part du résultat attendu par le client et reconstruit le flux comme si l'on disposait, dès l'origine, d'agents capables de lire, de raisonner et d'agir en parallèle. De l'existant, on ne garde que les contraintes réelles, pas les habitudes. C'est la conviction n° 3 de la méthode : réinventer, pas automatiser.

## Quand l'utiliser

- En phase [Réinventer](/methode/reinventer), une fois le diagnostic partagé et les paris arbitrés.
- Quand la [décomposition du délai](/frameworks/cartographie-processus) montre que l'attente et la coordination pèsent plus que le traitement.
- Quand le client demande « un agent par étape » de son processus actuel.

Ne pas l'utiliser sans diagnostic chiffré : on reconstruirait sur des opinions. Inutile aussi quand le processus est déjà simple et stable, ou quand ses étapes sont imposées par un texte : la marge de conception est alors trop faible pour justifier l'effort.

## Comment l'appliquer

### 1. Formuler le résultat attendu

Une phrase, du point de vue du client, avec son indicateur. Pas « traiter le ticket », mais « un client rétabli et informé ». Tout ce qui ne contribue pas à ce résultat devra justifier son existence.

### 2. Séparer contraintes et habitudes

Lister ce qui s'impose vraiment : obligations réglementaires, limites physiques, engagements contractuels, décisions qui doivent rester humaines. Pour chaque « on a toujours fait ainsi », demander qui l'impose, et par quel texte. Sans réponse, c'est une hypothèse de conception, pas une contrainte.

### 3. Poser les questions de reconstruction

1. Si le résultat pouvait être produit en une seule étape, que manquerait-il ?
2. Quelle information manque quand le cas arrive, et qui pourrait la réunir sans attendre ?
3. Ce passage de relais existe-t-il pour une compétence, un droit d'accès ou une question de charge ?
4. Quelles étapes se suivent sans dépendre l'une de l'autre ?
5. Ce contrôle prévient-il un risque réel, et que coûterait-il s'il ne portait que sur les cas à risque ?
6. Que faudrait-il pour agir avant que le client ne se manifeste ?

### 4. Appliquer les cinq principes de conception AI-Native

| Principe | Dans le processus hérité | Dans le processus cible |
| --- | --- | --- |
| Flux déclenchés par événements | Le travail attend dans une file qu'on le prenne | Chaque événement (ticket, alarme, réponse du client) lance le traitement sans délai |
| Traitements parallèles | Vérifications en série, un outil après l'autre | Collectes et vérifications indépendantes lancées en même temps |
| L'humain sur l'exception et la décision | L'humain exécute tout, routine comprise | L'humain traite ce qui demande jugement, relation ou responsabilité |
| Voies différenciées selon le risque | Un circuit unique pour tous les cas | Plusieurs voies, chacune avec son [niveau d'autonomie](/frameworks/niveaux-autonomie) |
| Boucle d'apprentissage intégrée | Retours d'expérience ponctuels | Chaque cas clos alimente évaluations, base de connaissances et catalogue d'actions |

### 5. Dessiner les voies et les dimensionner

Affecter chaque segment du diagnostic à une voie, estimer sa part du volume, puis fixer le rôle de l'humain et de l'agent sur chacune dans la [matrice humain-agent](/templates/matrice-humain-agent).

### 6. Éprouver la cible sur des cas réels

Rejouer sur table 20 à 30 cas tirés des journaux, exceptions comprises, avec les experts du terrain. Noter ce qui casse, corriger, puis chiffrer l'écart avec l'existant en délai, en coût et en qualité.

### 7. Faire valider par le métier

Processus cible, répartition humain-agent et [modèle opérationnel](/frameworks/modele-operationnel-cible) passent ensemble le jalon G3. Sans l'accord de ceux dont le travail change, la cible reste un dessin.

## Exemple

Chez Voxalis, le processus existant compte 9 étapes, 4 passages de relais et 6 outils. Le résultat attendu retenu : « un client rétabli et informé ». La question 3 fait tomber la structure en niveaux : l'attente entre N1 et N2, 41 % du délai, découle d'une répartition des compétences et de la charge, pas d'une contrainte. Le flux est reconstruit en trois voies.

| Voie | Part des tickets | Principe |
| --- | --- | --- |
| Autonome | 35 % | Motifs récurrents à risque faible : les agents résolvent, l'humain contrôle par échantillonnage |
| Assistée | 45 % | Les agents qualifient, diagnostiquent et proposent ; le conseiller décide et valide |
| Experte | 20 % | L'expert N2 mène le cas, les agents préparent le dossier et exécutent à la demande |

Les cinq principes s'y lisent. Le ticket déclenche qualification et diagnostic sans file d'attente. La supervision, le test de ligne et l'inventaire sont interrogés par l'Agent Diagnostic, et non plus par un conseiller qui navigue dans six outils. Le conseiller devient superviseur de cas. L'autonomie dépend de la voie. L'Agent Qualité contrôle chaque cas clos et alimente les évaluations et la base de connaissances. Au pilote, le MTTR passe de 31 h à 14,5 h et la résolution au premier contact de 54 % à 71 %.

## Pièges à éviter

- **Baptiser « cible » un existant accéléré.** Parade : compter. Si la cible conserve autant d'étapes et de passages de relais, reprendre à l'étape 3.
- **Concevoir sans le terrain.** Une cible dessinée entre consultants ignore les exceptions qui font le quotidien. Parade : des experts métier dans chaque atelier, et le rejeu de cas réels.
- **Tout placer en voie autonome.** Parade : la voie dépend du risque et l'autonomie se gagne sur preuves ; dimensionner prudemment, élargir ensuite.
- **Ignorer la transition.** Une cible sans chemin pour l'atteindre ne sera pas adoptée. Parade : paliers d'autonomie, mode fantôme, et engagements sur l'emploi négociés avec la DRH avant toute annonce.
- **Oublier la boucle d'apprentissage.** Sans propriétaire de la base de connaissances et du golden set, le processus cible se dégrade. Parade : l'inscrire dans le modèle opérationnel.

## Pour aller plus loin

- Outil interactif : [Redesign de processus](/outils/redesign-processus)
- Templates : [processus cible AI-Native](/templates/processus-cible-ai-native), [matrice humain-agent](/templates/matrice-humain-agent)
- Guide : [repenser un processus](/guides/repenser-un-processus)
- Frameworks : [cartographie du processus existant](/frameworks/cartographie-processus), [collaboration humain-agent](/frameworks/collaboration-humain-agent), [Deploy, Reshape, Invent](/frameworks/deploy-reshape-invent)
- Anti-pattern : [automatiser l'existant](/savoir/automatiser-l-existant)
- Référence : Michael Hammer, « Reengineering Work: Don't Automate, Obliterate » (Harvard Business Review, 1990), pour l'idée fondatrice de reconstruire plutôt qu'automatiser.
