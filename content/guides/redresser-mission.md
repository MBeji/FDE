---
id: redresser-mission
titre: "Redresser une mission en difficulté"
resume: "Repérer les signaux faibles, poser un diagnostic en 48 heures, mener la conversation de vérité avec le sponsor, choisir entre recentrer, réduire et arrêter, puis dérouler un plan de redressement à trois semaines."
phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire, industrialiser, perenniser]
duree: "9 min"
niveau: avance
tags: [pilotage, sponsor, perimetre, redressement]
frameworks: [probleme-hypotheses, pyramide-scqa, regle-10-20-70, registre-de-valeur]
templates: [charte-de-mission, registre-raid, point-hebdo, support-copil]
---

## Le résultat visé

En trois semaines, une mission remise sur une trajectoire de valeur mesurable avec un sponsor engagé, ou réduite à ce qu'elle peut réellement livrer, ou arrêtée proprement. Les trois issues sont acceptables. La seule qui ne l'est pas : continuer à l'identique en espérant.

Une mission décroche rarement pour des raisons techniques. La [règle 10-20-70](/frameworks/regle-10-20-70) vaut aussi pour les échecs : chercher d'abord du côté du portage, du périmètre et de l'usage.

## Repérer les signaux faibles

| Signal | Ce qu'on observe | Seuil d'alerte |
| --- | --- | --- |
| [Sponsor absent](/savoir/sponsor-fantome) | COPIL reportés ou délégués, arbitrages en attente | Deux COPIL de suite sans le sponsor, ou une décision bloquée depuis plus de deux semaines |
| Périmètre qui glisse | Des demandes s'ajoutent, rien ne sort | Le périmètre ne correspond plus à la [charte](/templates/charte-de-mission), sans avenant |
| [Démonstrations sans usage](/savoir/demo-trompeuse) | Applaudissements en comité, personne sur le terrain | Aucun utilisateur réel un mois après la première démonstration |
| [Valeur non mesurée](/savoir/valeur-declarative) | Gains « estimés », référence jamais signée | [Registre de valeur](/frameworks/registre-de-valeur) sans mise à jour depuis un mois |
| Métier indisponible | Ateliers annulés, experts happés par l'opérationnel | Annotation du golden set à l'arrêt |
| Équipe qui compense | Les FDE font le travail du client, les semaines s'allongent | Un livrable du client produit par l'équipe FDE |

Un signal isolé appelle la vigilance ; deux signaux, un diagnostic dans la semaine. Avant la mission, Voxalis en cumulait plusieurs : 7 POC en deux ans, un seul en production, aucun mesuré. C'est pour ne pas reproduire ce passé que la charte fixe trois critères d'arrêt.

## Poser le diagnostic en 48 heures

**Jour 1, matin : les faits.** Relire la charte : problème, ambition, périmètre, critères d'arrêt. Mettre en regard ce qui devait être livré à cette date et ce qui l'est. Relire le [registre RAID](/templates/registre-raid) et les trois derniers [points hebdomadaires](/templates/point-hebdo) : les alertes y figurent souvent déjà, sans suite.

**Jour 1, après-midi : cinq entretiens de 30 minutes.** Le propriétaire du processus, un utilisateur de terrain, le responsable technique du client, un proche du sponsor, un membre de l'équipe FDE. Trois questions identiques : « À quoi sert cette mission aujourd'hui ? Qu'a-t-elle changé pour vous jusqu'ici ? Qu'est-ce qui vous ferait dire dans trois mois qu'elle a échoué ? »

**Jour 2, matin : la cause racine.** N'en retenir qu'une.

| Cause racine | Indice | Issue probable |
| --- | --- | --- |
| Problème mal posé ou devenu caduc | Les réponses à « à quoi sert la mission » divergent | Recentrer |
| Portage insuffisant | Les décisions n'arrivent pas | Conversation avec le sponsor, puis réduire ou arrêter |
| Périmètre trop large | Beaucoup de chantiers ouverts, aucun terminé | Réduire |
| Exécution | Objectif clair et porté, retard quand même | Plan d'équipe : compétences, accès au SI, dépendances |

**Jour 2, après-midi : une page.** Situation, complication, question, réponse ([pyramide et SCQA](/frameworks/pyramide-scqa)) : une recommandation, deux alternatives, ce qui est demandé au sponsor. La faire contester par un pair extérieur à la mission avant de la porter.

## Mener la conversation de vérité

En tête-à-tête, 45 minutes, jamais en COPIL. Une page, pas de présentation. Des faits, la part de responsabilité de l'équipe, une demande précise.

- **Ouvrir.** « Je vous ai demandé ce rendez-vous parce que la mission, telle qu'elle avance, ne produira pas le résultat inscrit dans la charte. Je préfère vous le dire maintenant qu'au bilan. »
- **Poser les faits.** « Trois constats. La référence n'est toujours pas validée par la finance. Les experts ont été disponibles deux jours sur les dix prévus. La décision sur les accès au SI attend depuis trois semaines. »
- **Prendre sa part.** « De notre côté, nous avons accepté deux cas d'usage supplémentaires sans rien retirer. C'était une erreur. »
- **Demander.** « J'ai besoin de trois choses d'ici vendredi : votre arbitrage sur le périmètre, un interlocuteur nommé à la finance, une demi-heure par semaine avec vous. »
- **Ouvrir l'alternative.** « Si ces conditions ne peuvent pas être réunies, je recommande de réduire la mission à un seul flux plutôt que de continuer ainsi. »
- **Tester l'engagement.** « Si vous deviez défendre cette mission demain devant votre comité exécutif, que diriez-vous ? »

À proscrire : « quelques ajustements suffiront », la mise en cause des équipes du client, le détour par la technique. Se taire après la demande. Confirmer par écrit, le jour même, ce qui a été décidé. Sur la tenue de ce type d'échange, voir [la posture du FDE](/guides/posture-fde).

> [!WARNING]
> Le sponsor ne doit jamais découvrir une difficulté en séance. Si le prochain COPIL est dans dix jours, la conversation a lieu cette semaine.

## Choisir : recentrer, réduire, arrêter

| Option | Quand | Ce que cela implique |
| --- | --- | --- |
| Recentrer | Le problème a changé ou a été mal posé | Reformuler le [problème et les hypothèses](/frameworks/probleme-hypotheses), avenant à la charte, retour au jalon concerné |
| Réduire | La valeur existe sur une partie ; le portage ou la capacité ne couvrent pas le tout | Une [tranche verticale](/savoir/tranche-verticale), un site, un indicateur ; le reste explicitement gelé |
| Arrêter | Critère d'arrêt atteint, sponsor introuvable, valeur non démontrable | Clôture propre : livrer ce qui est réutilisable, écrire le REX, préserver la relation |

Réduire n'est pas reculer. Chez Voxalis, toute demande de rouvrir un cas d'usage écarté, comme le voicebot de premier niveau (3,0 en valeur, 2,4 en faisabilité), renvoyait à la notation arbitrée en COPIL, pas à une opinion. Arrêter n'est pas échouer : les critères d'arrêt existent pour servir, et un arrêt décidé coûte moins qu'un enlisement subi.

## Dérouler le plan à trois semaines

| Semaine | Objectif | Ce qui est produit | Preuve de sortie |
| --- | --- | --- | --- |
| 1 | Stabiliser | Avenant à la charte, liste de ce qui s'arrête, référence validée, point hebdomadaire de 30 minutes avec le sponsor | L'avenant est signé, les décisions en attente sont prises |
| 2 | Prouver | Un résultat visible sur le périmètre réduit, en conditions réelles | Un utilisateur réel s'en sert, une mesure existe face à la référence |
| 3 | Décider | Revue avec le sponsor, puis [COPIL](/templates/support-copil) | Poursuite, nouvelle réduction ou arrêt, consigné |

Pendant ces trois semaines : aucun ajout de périmètre, trois indicateurs au plus, publiés chaque semaine, et tout écart remonté sous 24 heures.

## Erreurs fréquentes

- **Attendre le prochain COPIL.** Chaque semaine de silence réduit les options.
- **Compenser par l'effort.** Les semaines de soixante heures masquent le problème et l'aggravent.
- **Ajouter des personnes.** Sur un problème de portage ou de périmètre, cela n'augmente que la dépense.
- **Proposer un plan sans rien demander au sponsor.** Si le redressement ne dépend que de l'équipe, le diagnostic est incomplet.
- **Réduire sans dire ce qui s'arrête.** Le périmètre gelé revient à la réunion suivante.

## Checklist

- [ ] Les signaux sont datés et factuels, pas des impressions.
- [ ] Le diagnostic tient en une page et désigne une seule cause racine.
- [ ] Un pair extérieur à la mission a contesté la recommandation.
- [ ] La conversation avec le sponsor a eu lieu en tête-à-tête, avec une demande précise.
- [ ] Les décisions sont confirmées par écrit le jour même.
- [ ] L'option retenue — recentrer, réduire ou arrêter — est formalisée par un avenant à la charte.
- [ ] La liste de ce qui s'arrête est écrite et communiquée.
- [ ] Le plan à trois semaines a une preuve de sortie par semaine.
- [ ] La revue de fin de plan débouche sur une décision consignée en COPIL.
- [ ] L'épisode est [capitalisé](/guides/capitaliser), quelle que soit l'issue.
