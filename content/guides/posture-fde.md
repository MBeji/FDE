---
id: posture-fde
titre: "La posture du FDE"
resume: "Ce qu'est un Forward Deployed Engineer, ses trois casquettes, les cinq principes qui règlent sa conduite chez le client et les comportements auxquels on reconnaît un bon FDE."
phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire, industrialiser, perenniser]
duree: "8 min"
niveau: fondamental
tags: [posture, role, relation-client]
frameworks: [probleme-hypotheses, pyramide-scqa, regle-10-20-70]
templates: [charte-de-mission, point-hebdo, plan-transfert, rex-mission]
---

## Le résultat visé

Savoir dire en une minute ce que vous venez faire chez le client et ce que vous ne ferez pas, puis le prouver par votre conduite. Au bout de trois semaines, le sponsor doit avoir constaté que vous n'êtes ni un consultant de plus ni un prestataire de plus.

## Ce qu'est un FDE

Un Forward Deployed Engineer (FDE) est un ingénieur intégré chez le client, qui livre en production et répond du résultat. Le modèle est né chez les éditeurs de plateformes de données, qui ont envoyé leurs ingénieurs travailler au milieu des utilisateurs plutôt que de leur remettre un produit et une documentation. Les laboratoires d'IA l'ont repris pour la même raison : entre un modèle capable et un processus transformé, il reste un travail de cadrage, d'intégration et d'adoption que ni une API ni un rapport ne font seuls.

Trois traits le distinguent :

- son unité de travail est le problème du client, pas le livrable ;
- son critère de réussite est un indicateur métier mesuré en production, pas une recette signée ;
- sa mission s'achève quand le client opère seul (jalon G7 de la [méthode](/methode)), pas quand le budget est consommé.

## Trois casquettes, portées en même temps

| Casquette | Sa question | Ce qu'elle produit | La dérive si elle domine |
| --- | --- | --- | --- |
| Conseil | Quel problème vaut d'être résolu, et qui décide ? | Problème reformulé, [hypothèses](/frameworks/probleme-hypotheses), valeur chiffrée, décisions préparées | Des recommandations justes que personne n'exécute |
| Ingénierie | Qu'est-ce qui fonctionne sur des cas réels, mesure à l'appui ? | Agents, outils, evals, mise en production | Un système élégant dont personne ne voulait |
| Produit | Pour quel utilisateur, et que ne construit-on pas ? | Périmètre arbitré, expérience de travail, adoption suivie | Un backlog sans fin et aucune date |

On ne change pas de casquette selon la phase, mais selon l'interlocuteur, plusieurs fois par jour : le matin avec le directeur financier sur la référence, l'après-midi dans les traces d'un agent, le soir pour trancher ce qui sort du pilote. Une équipe répartit les dominantes (chez [Voxalis](/guides/cas-fil-rouge), Hugo porte la stratégie et le produit, Léo et Inès l'ingénierie des agents), mais chacun doit pouvoir tenir les trois conversations. La [règle 10-20-70](/frameworks/regle-10-20-70) dit pourquoi : l'essentiel de la valeur se joue dans les personnes et les processus, là où l'ingénierie seule n'entre pas.

## Cinq principes de posture

### 1. Travailler chez le client

Votre bureau est le plateau, pas la salle de réunion. On y voit ce qu'aucun entretien ne dit. Chez Voxalis, trois jours d'observation à Nantes ont montré des conseillers reconstituant chaque dossier dans six outils : 23 % du délai de résolution. Dès la première semaine, demander un badge, une place sur le plateau et un accès en lecture aux outils.

À dire : « Où puis-je m'asseoir pour être au plus près de l'équipe qui traite les tickets ? »

### 2. Livrer vite quelque chose de réel

Réel signifie : les données du client, ses cas, ses utilisateurs. Une maquette sur données fictives n'est pas une livraison, c'est une [démo trompeuse](/savoir/demo-trompeuse). Chez Voxalis, le premier objet réel a été une analyse, la décomposition du MTTR de 31 h sur douze mois de tickets ; le second, un prototype en quatre semaines sur une [tranche verticale](/savoir/tranche-verticale), un seul motif traité de bout en bout. Règle : jamais plus de deux semaines sans montrer quelque chose qui tourne ou qui se mesure.

### 3. Dire la vérité au sponsor

Le sponsor a besoin de vous pour entendre ce que son organisation ne lui dit pas. Chez Voxalis : refuser la demande initiale (« déployer un chatbot pour le SAV »), annoncer que 35 % de la base de connaissances est obsolète, rappeler que sur sept POC aucun n'a été mesuré. Le format tient en trois temps, conclusion d'abord ([principe de la pyramide](/frameworks/pyramide-scqa)) : le fait, la conséquence, la proposition. Et jamais en séance pour la première fois (voir [Préparer et piloter un COPIL](/guides/piloter-copil)).

À dire : « Je préfère vous le dire maintenant plutôt qu'en comité : [fait]. Si rien ne change, [conséquence]. Je propose [option] et j'ai besoin de vous pour [décision]. »

### 4. Rendre le client autonome

L'autonomie se construit dès le premier jour, pas pendant le dernier mois. Chaque FDE travaille en [binôme](/savoir/binome-metier-fde) avec une personne du client, chaque décision est écrite, chaque composant est exploité avec l'équipe du client avant le départ. Chez Voxalis, six personnes détachées ont construit avec l'équipe FDE, et le critère de fin de mission était le transfert, achevé en S39.

Le test hebdomadaire : « Si nous disparaissons vendredi, qu'est-ce qui s'arrête ? » Chaque réponse est une dette à inscrire au [plan de transfert](/templates/plan-transfert). Sinon, la mission glisse vers la [dépendance au FDE](/savoir/dependance-fde).

### 5. Faire remonter le terrain

Dans deux directions. Vers le sponsor : ce que vit le plateau, en faits et non en rumeurs. Vers le pool FDE : ce qui a marché, ce qui a échoué, ce qui manque à la méthode. Un apprentissage resté dans la tête d'un FDE est perdu à la mission suivante : noter au fil de l'eau, puis [capitaliser](/guides/capitaliser) dans un [REX de mission](/templates/rex-mission).

## Ce que le FDE n'est pas

- **Un consultant qui recommande et repart.** Il reste jusqu'à la mesure du résultat.
- **Un intégrateur qui exécute un cahier des charges.** Il conteste la demande quand elle ne sert pas le problème.
- **Une ressource en régie.** Il n'attend pas qu'on lui confie des tâches : il répond d'un résultat.
- **Un avant-vente.** Il ne promet rien que les evals n'aient montré.
- **Un héros solitaire.** Ce qu'il est seul à savoir faire tourner est un risque, pas un mérite.

## Les comportements observables

| Situation | Un bon FDE | Le signal inverse |
| --- | --- | --- |
| On lui demande une solution (« il nous faut un agent ») | Remonte au problème et à l'indicateur avant de répondre | Dessine l'architecture |
| Une donnée manque | Va la chercher à la source ; fait remonter le blocage sous 48 h | Attend, ou suppose sans le dire |
| Une évaluation est mauvaise | La montre le jour même, analyse d'erreurs à l'appui | L'arrange pour la démonstration |
| Un utilisateur contourne l'outil | S'assoit à côté de lui | Demande un rappel à l'ordre au manager |
| Une décision traîne | Prépare options et recommandation, obtient l'arbitrage dans la semaine | La signale dans un compte rendu |
| La journée se termine | Écrit ce qui a été appris et décidé | Garde tout en tête |

## Erreurs fréquentes

- **Se réfugier dans le code.** C'est confortable, et le problème se déplace sans vous. Parade : une demi-journée par semaine sur le terrain, non négociable.
- **Faire à la place du client.** Plus rapide aujourd'hui, ruineux au transfert. Parade : le binôme tient le clavier une fois sur deux.
- **Adoucir les mauvaises nouvelles.** Le sponsor finit par les apprendre, par quelqu'un d'autre. Parade : les annoncer sous 24 h, avec une option.
- **Prendre parti dans la politique interne.** Vous perdez l'accès à la moitié de l'organisation. Parade : s'en tenir aux faits et au mandat de la [charte de mission](/templates/charte-de-mission).

## Checklist

- [ ] Je sais énoncer le problème du client et l'indicateur visé en une phrase.
- [ ] Je travaille sur site, au contact des utilisateurs, plusieurs jours par semaine.
- [ ] J'ai montré quelque chose de réel au cours des deux dernières semaines.
- [ ] Le sponsor a entendu de ma bouche la dernière mauvaise nouvelle, avant tout comité.
- [ ] J'ai un binôme nommé côté client, et il sait refaire ce que j'ai fait cette semaine.
- [ ] Mes décisions et mes apprentissages de la semaine sont écrits et partagés ([point hebdomadaire](/templates/point-hebdo)).
- [ ] Je sais répondre à la question « qu'est-ce qui s'arrête si nous partons vendredi ? ».
