---
id: probleme-hypotheses
titre: "Résolution de problèmes par hypothèses"
resume: "La méthode de travail des cabinets de conseil en stratégie : écrire le problème, le découper en questions MECE, avancer une réponse dès le premier jour, puis la prouver ou la tuer par l'analyse."
categorie: strategie
phases: [cadrer, diagnostiquer]
origine: "Pratique des cabinets de conseil en stratégie"
niveau: fondamental
tags: [cadrage, hypotheses, mece]
templates: [arbre-hypotheses, charte-de-mission]
lies: [pyramide-scqa, arbre-de-valeur, approche-par-domaine]
---

## En bref

Une mission ne commence pas par la collecte de données, mais par une réponse provisoire. La résolution par hypothèses consiste à écrire le problème, à le découper en questions sans recouvrement ni oubli (MECE : mutuellement exclusives, collectivement exhaustives), à avancer dès le premier jour la réponse la plus probable, puis à ne mener que les analyses capables de la confirmer ou de la tuer.

Pour un FDE, c'est le garde-fou contre deux dérives : exécuter la solution demandée sans vérifier le problème, et diagnostiquer pendant six semaines sans rien conclure.

## Quand l'utiliser

- En phase [Cadrer](/methode/cadrer), dès qu'une demande est formulée en solution (« il nous faut un chatbot », « un agent pour les achats »).
- En phase [Diagnostiquer](/methode/diagnostiquer), pour décider quels entretiens, quelles données et quelles observations valent le temps passé.
- En cours de mission, quand l'équipe accumule des analyses sans savoir ce qu'elles démontrent.

Ne pas traiter l'hypothèse comme une conclusion fixée d'avance : elle est faite pour être attaquée. Sur un terrain inconnu, s'accorder deux ou trois jours d'exploration ouverte (entretiens, observation) avant de la poser.

## Comment l'appliquer

### 1. Écrire l'énoncé du problème

Une question unique et quatre rubriques, validées par le sponsor avant tout plan de travail.

| Rubrique | Question à poser | Critère de qualité |
| --- | --- | --- |
| Question clé | Quelle décision ce travail doit-il permettre ? | Commence par « comment », contient un résultat chiffré |
| Décideur | Qui tranche, qui peut bloquer ? | Une personne nommée, pas un comité |
| Critères de succès | À quoi saura-t-on que le problème est résolu ? | Deux ou trois indicateurs, avec référence et cible |
| Contraintes | Qu'est-ce qui n'est pas négociable ? | Budget, délai, cadre social et réglementaire, SI existant |
| Périmètre | Qu'est-ce qui est dedans, dehors ? | Les exclusions sont écrites |

Test : si la question nomme une technologie, elle décrit une solution. Remonter d'un cran en demandant « pour obtenir quoi ? ».

### 2. Construire l'arbre de questions

Découper la question clé en trois à cinq sous-questions MECE, puis chacune en questions assez fines pour qu'une analyse y réponde. Deux découpages fonctionnent presque toujours : par la mécanique du résultat (un délai se découpe en étapes, un coût en volume × coût unitaire, voir l'[arbre de valeur](/frameworks/arbre-de-valeur)) ou par le parcours. Test d'exhaustivité : « Si toutes les branches étaient résolues, le problème le serait-il ? »

### 3. Poser l'hypothèse de réponse initiale

Dès le jour 1, au plus tard en fin de première semaine, écrire la réponse la plus probable à la question clé, puis une hypothèse par branche. Une bonne hypothèse est réfutable (une donnée peut la contredire), tranchée (elle exclut des options) et utile (si elle est vraie, on sait quoi faire).

### 4. Établir le plan d'analyse

Une ligne par hypothèse : l'analyse qui la départage, la source, le responsable, l'échéance, et le résultat qui la ferait tomber. Toute analyse qui ne se rattache à aucune hypothèse sort du plan. Commencer par celles dont le résultat changerait la recommandation.

### 5. Itérer et tuer

Revoir l'arbre chaque semaine, lors du [point hebdomadaire](/templates/point-hebdo). Chaque hypothèse reçoit un verdict : confirmée, nuancée ou tuée. Une hypothèse tuée est un résultat : elle se consigne avec sa preuve et se remplace. Si la réponse initiale tombe, réécrire la question clé plutôt que d'ajuster les analyses.

## Exemple

La demande de Voxalis était « déployer un chatbot pour le SAV ». L'énoncé retenu en S2 : **comment diviser par deux le délai de résolution des incidents PME tout en réduisant le coût par ticket d'un tiers ?** Décideur : Claire Besson. Critères : MTTR (référence 31 h) et coût par ticket (référence 41 €). Périmètre : segment PME, incidents techniques d'abord.

Hypothèse de réponse initiale, posée au jour 3 : l'essentiel du délai vient des attentes entre niveaux de support et de la collecte manuelle d'informations, pas du temps de traitement.

| Hypothèse | Analyse et source | Responsable, échéance | Verdict |
| --- | --- | --- | --- |
| Le délai est surtout de l'attente entre N1 et N2 | Décomposition du MTTR sur 12 mois de tickets horodatés | Hugo, S4 | Confirmée : 41 % du MTTR |
| La collecte d'informations pèse plus que le traitement | Observation de trois jours sur le plateau de Nantes | Léo, S5 | Confirmée : 23 % contre 18 % |
| Les incidents sont trop variés pour être standardisés | Pareto des motifs, revu avec les experts N2 | Inès, S4 | Tuée : 58 % relèvent de 12 motifs documentés |
| La base de connaissances est exploitable en l'état | Audit des 2 300 articles | Inès, S5 | Tuée : 35 % d'articles obsolètes |

Conséquence : un chatbot aurait agi sur la prise de contact, alors que 64 % du délai se joue dans les attentes internes et la collecte. La troisième hypothèse, une fois tuée, a ouvert le cas d'usage le mieux noté en valeur : la résolution autonome des 12 motifs récurrents.

## Pièges à éviter

- **Prendre la demande pour le problème.** Parade : un énoncé écrit, validé par le sponsor, avant tout plan de travail.
- **Un arbre qui n'est pas MECE.** Des branches qui se recouvrent produisent des analyses en double ; une branche oubliée, une recommandation fragile. Parade : découper par la mécanique du résultat et passer le test d'exhaustivité.
- **S'attacher à son hypothèse.** On ne retient alors que les données qui la confirment. Parade : écrire à l'avance le résultat qui la tuerait et confier la contre-analyse à un coéquipier.
- **Tout analyser.** Faute de savoir quoi chercher, l'équipe explore tout. Parade : pas d'analyse sans hypothèse, pas d'hypothèse sans échéance.
- **Des hypothèses invérifiables.** « L'organisation n'est pas mûre » ne se teste pas. Parade : reformuler avec un indicateur et un seuil.

## Pour aller plus loin

- Templates : [arbre d'hypothèses](/templates/arbre-hypotheses), [charte de mission](/templates/charte-de-mission)
- Frameworks : [principe de la pyramide et SCQA](/frameworks/pyramide-scqa) pour présenter la réponse, [arbre de valeur](/frameworks/arbre-de-valeur) pour découper un résultat financier
- Guides : [premiers jours](/guides/premiers-jours), [mener des entretiens de diagnostic](/guides/mener-entretiens)
- Référence : la démarche dite « hypothesis-driven » des cabinets de conseil en stratégie ; le principe MECE, formalisé par Barbara Minto.
