---
id: guide-entretien
titre: "Guide d'entretien"
resume: "Trois trames d'entretien de diagnostic (dirigeant, opérationnel métier, IT et données) et la fiche de synthèse à remplir dans l'heure qui suit."
phase: diagnostiquer
type: trame
format: document
effort: "30 min de préparation, 45 min d'entretien, 20 min de synthèse"
tags: [diagnostic, entretien, terrain]
frameworks: [probleme-hypotheses, cartographie-processus, maturite-ai-native]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un diagnostic vaut ce que valent ses entretiens. Ce guide fournit une réserve de questions éprouvées pour trois types d'interlocuteurs, avec les relances qui font passer de l'opinion au fait, et une fiche de synthèse qui rattache chaque entretien aux hypothèses de la mission. Ce n'est pas un questionnaire : c'est une trame dans laquelle on choisit.

## Quand l'utiliser

Pendant le cadrage pour les dirigeants, puis tout au long de la phase [Diagnostiquer](/methode/diagnostiquer). La conduite de l'entretien est décrite dans le guide [Mener des entretiens de diagnostic](/guides/mener-entretiens).

## Comment le remplir

1. Adapter les trames au vocabulaire du client : noms des outils, des équipes, des indicateurs.
2. Avant chaque entretien, écrire l'hypothèse à tester, tirée de l'[arbre d'hypothèses](/templates/arbre-hypotheses), et retenir cinq questions.
3. Lister ce que vous voulez voir : un écran, un fichier personnel, un cas en cours.
4. Mener à deux, au poste de travail, sans le supérieur hiérarchique.
5. Remplir la fiche de synthèse dans l'heure. Marquer « à vérifier » tout chiffre déclaré.
6. Reporter les effets dans l'arbre d'hypothèses, la [fiche du processus existant](/templates/fiche-processus-existant) et la [cartographie des parties prenantes](/templates/carte-parties-prenantes).

## Critères de qualité

- [ ] Une hypothèse à tester et cinq questions sont écrites avant l'entretien.
- [ ] Chaque question appelle un récit ou un chiffre, jamais un oui ou un non.
- [ ] Aucune question ne mentionne une solution ni ne demande « ce qu'il faudrait automatiser ».
- [ ] La fiche distingue ce qui a été vu de ce qui a été déclaré.
- [ ] Chaque chiffre déclaré a une vérification prévue, avec un responsable.
- [ ] La fiche dit quelle hypothèse sort renforcée, affaiblie ou nouvelle.

<!-- section: template -->
# Guide d'entretien — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |

## Règles communes

- 45 minutes, à deux : l'un mène, l'autre note. Au poste de travail de la personne, jamais en présence de son supérieur hiérarchique.
- Cinq questions choisies dans la trame, pas vingt. Une hypothèse à tester par entretien.
- Les faits avant les opinions : commencer par le dernier cas réel, finir par les avis.
- Aucune mention de solution avant la clôture.
- Fiche de synthèse écrite dans l'heure. Tout chiffre déclaré reste « à vérifier ».

## Préparation de l'entretien

| | |
| --- | --- |
| **Interlocuteur** | _[Nom, fonction, ancienneté dans le poste]_ |
| **Date et lieu** | _[Date, horaire, au poste de travail si possible]_ |
| **Binôme** | _[Qui mène, qui note]_ |
| **Trame** | _[A, B ou C, et variante éventuelle]_ |
| **Hypothèse à tester** | _[Une seule, tirée de l'arbre d'hypothèses]_ |
| **Cinq questions retenues** | _[Numéros dans la trame]_ |
| **Ce que nous voulons voir** | _[Un écran, un fichier, un cas en cours, un tableau de bord]_ |
| **Contexte** | _[Ce que l'on sait déjà de sa position et de son histoire avec le sujet]_ |

## Trame A — Dirigeant

_[Sponsor, directeur métier, directeur financier, DRH. Objet : l'ambition, les contraintes, les décisions possibles.]_

**Introduction (2 min)**

> « Merci de ce temps. Nous cherchons à comprendre où se trouve le problème avant de parler de solution. J'ai cinq questions. Je vous restituerai sous une semaine ce que j'en retiens, et rien ne sera attribué sans votre accord. »

**Questions**

| N° | Question | Ce qu'on cherche | Relances |
| --- | --- | --- | --- |
| A1 | « Dans douze mois, qu'est-ce qui doit avoir changé pour que vous jugiez la mission réussie ? Sur quel chiffre ? » | L'ambition et l'indicateur qui compte vraiment | « Qui regarde ce chiffre ? D'où vient-il ? » |
| A2 | « Pourquoi maintenant ? Que se passe-t-il si rien ne change ? » | L'urgence réelle, le coût de l'inaction | « Qu'avez-vous déjà perdu ? » |
| A3 | « Où pensez-vous que se perdent le temps et l'argent dans ce domaine ? » | Son hypothèse, à confronter aux données | « Sur quel fait fondez-vous cette conviction ? » |
| A4 | « Qu'est-ce qui a déjà été tenté, et pourquoi cela n'a-t-il pas suffi ? » | L'historique, les causes d'échec, la lassitude des équipes | « Qui portait le sujet ? Qu'a-t-on mesuré ? » |
| A5 | « Qu'est-ce qui est intouchable ? » | Les contraintes : social, clients, réglementation, SI, budget | « Intouchable pour qui ? Depuis quand ? » |
| A6 | « Qui doit être d'accord pour que cela réussisse, et qui pourrait le faire échouer ? » | Les parties prenantes et leurs intérêts | « Qu'a-t-il à y perdre ? » |
| A7 | « Jusqu'où accepteriez-vous qu'un système agisse sans validation humaine ? » | L'appétit pour le risque, les lignes rouges | « Citez-moi une action que vous ne déléguerez jamais. » |
| A8 | « Qu'est-ce qui vous ferait arrêter la mission ? » | Les critères d'arrêt | « À quelle date voudriez-vous le savoir ? » |
| A9 | « Quelle décision êtes-vous prêt à prendre que vos équipes n'attendent pas ? » | La marge de manœuvre réelle | « Qu'est-ce qui vous en empêcherait ? » |

Variantes selon la fonction :

- **Finance** : « Quel coût complet reconnaissez-vous pour ce domaine, et qui signera la référence ? »
- **Sécurité et conformité** : « Qu'est-ce qui vous ferait dire non dans trois mois ? »
- **Ressources humaines** : « Quel est le calendrier social, et quand faut-il informer les représentants du personnel ? »

**Clôture (3 min)**

1. Reformuler trois points et les faire corriger.
2. « Qu'est-ce que je ne vous ai pas demandé et que je devrais savoir ? »
3. « Qui me dira le contraire de ce que vous venez de dire ? »
4. Annoncer la suite : date de restitution, prochaine décision qui lui sera demandée.

## Trame B — Opérationnel métier

_[Ceux qui font le travail et leurs managers de proximité. Objet : le travail réel. À mener au poste, écran ouvert.]_

**Introduction (2 min)**

> « Merci de prendre ce temps. Nous cherchons à comprendre comment le travail se passe vraiment, pas à évaluer qui que ce soit. Ce que vous direz ne sera attribué à personne. Je ne viens pas vous présenter un outil : aujourd'hui, l'expert, c'est vous. Nous en avons pour 45 minutes, et j'aimerais que vous me montriez un ou deux cas à l'écran. »

**Questions**

| N° | Question | Ce qu'on cherche | Relances |
| --- | --- | --- | --- |
| B1 | « Racontez-moi le dernier cas que vous avez traité, du début à la fin. » | Le déroulé réel, étape par étape | « Et ensuite ? Qui a pris la suite ? » |
| B2 | « Montrez-moi. Peut-on ouvrir ce cas à l'écran ? » | Les outils, les ressaisies, les copier-coller | « Où avez-vous trouvé cette information ? Qu'avez-vous dû ressaisir ? » |
| B3 | « Sur vos dix derniers cas, combien se sont passés ainsi ? » | Les fréquences, les variantes | « Et les autres, que s'est-il passé ? » |
| B4 | « À quel moment avez-vous attendu quelqu'un ou quelque chose ? Combien de temps ? » | Les attentes et les passages de relais | « Que faisait le client pendant ce temps ? Comment avez-vous su que le cas était revenu ? » |
| B5 | « Qu'est-ce qui revient en erreur, en reprise ou en réclamation ? » | Les défauts de qualité et leur cause | « La dernière fois, c'était quand ? » |
| B6 | « Que faites-vous qui n'est écrit dans aucune procédure ? » | Les contournements, les outils parallèles, les circuits informels | « Puis-je voir votre aide-mémoire ? Qui appelez-vous directement ? » |
| B7 | « À quoi voyez-vous qu'un cas va mal tourner ? » | Le jugement expert, le savoir tacite | « Qu'avez-vous regardé en premier, et pourquoi ? » |
| B8 | « Qu'est-ce qui vous fait perdre le plus de temps chaque jour ? » | Les irritants, classés par l'intéressé | « Par exemple ? Combien de fois par jour ? » |
| B9 | « Sur quoi êtes-vous évalué ? » | Les objectifs individuels et ce qu'ils poussent à faire | « Qu'est-ce que cela vous amène à faire que vous ne feriez pas sinon ? » |
| B10 | « Qu'est-ce qui vous inquiète dans ce projet ? » À poser en dernier | Les craintes, les conditions d'adhésion | « Qu'est-ce qui vous rassurerait ? » |

Variante pour un manager de proximité : remplacer B7 par « Qu'est-ce que vos indicateurs ne montrent pas ? » et ajouter « Comment se répartit le travail entre vos équipes et celles d'à côté ? ».

**Clôture (3 min)**

1. « Qu'est-ce que je ne vous ai pas demandé et que je devrais savoir ? »
2. « Qui d'autre devrais-je voir ? »
3. « Pouvez-vous m'envoyer le fichier que vous m'avez montré ? »
4. Dire quand et comment le diagnostic sera restitué aux personnes rencontrées. Tenir cette promesse.

## Trame C — IT et données

_[DSI, architecte, responsable data, responsable applicatif, RSSI, DPO. Objet : ce que le SI permet, ce qu'il interdit, ce que cela coûterait.]_

**Introduction (2 min)**

> « Nous ne venons pas avec une architecture. Nous cherchons à savoir ce que le système d'information permet aujourd'hui, ce qu'il interdit et ce que nos demandes vous coûteraient. Un schéma au tableau nous aidera plus qu'un long discours. »

**Questions**

| N° | Question | Ce qu'on cherche | Relances |
| --- | --- | --- | --- |
| C1 | « Dessinez-moi les applications utilisées pour traiter un cas, et ce qui circule entre elles. » | La cartographie réelle et les flux | « Par quel mécanisme : API, fichier, ressaisie ? » |
| C2 | « Pour chaque application : existe-t-il une API ? En lecture, en écriture ? Qui l'utilise déjà ? » | L'accès programmatique | « Est-elle documentée ? Y a-t-il un environnement de test, des limites de débit ? » |
| C3 | « Comment une application apprend-elle qu'un fait a changé dans une autre ? » | Les événements, les synchronisations, les délais | « En combien de temps ? Que se passe-t-il en cas d'échec ? » |
| C4 | « Où est la donnée de référence pour le client, le contrat, le cas ? Qui en est propriétaire ? » | Les sources de vérité et leurs propriétaires | « Quel champ ne faut-il pas croire ? » |
| C5 | « Quel historique peut-on extraire, sur quelle profondeur, en combien de temps ? » | La matière pour l'analyse et pour l'évaluation | « Les horodatages sont-ils fiables ? Qu'est-ce qui est en texte libre ? » |
| C6 | « Quelles données sont personnelles ou sensibles, et quelles règles s'y appliquent ? » | Les contraintes de conformité | « Hébergement, conservation, masquage : qui décide ? » |
| C7 | « Comment une nouvelle application obtient-elle des droits ? En combien de temps ? » | Les habilitations, les comptes de service | « Qui signe ? Les droits sont-ils accordés par action ou par application ? » |
| C8 | « Qu'avez-vous déjà en place pour l'IA : accès à des modèles, environnements, évaluation, supervision ? » | La plateforme existante | « Qu'est-ce qui a été validé par la sécurité ? » |
| C9 | « Parlez-moi des expérimentations passées : combien, lesquelles sont en production, qu'est-ce qui a bloqué ? » | L'historique et ses leçons | « Qu'a-t-on mesuré ? Qui en était propriétaire côté métier ? » |
| C10 | « Comment met-on en production chez vous ? À quelle fréquence, avec quelles validations ? » | Le cycle de livraison, les périodes de gel | « Combien de temps entre une demande et une mise en service ? » |
| C11 | « Qu'est-ce qui vous ferait dire non dans trois mois ? » | Les objections à traiter maintenant | « Que vous faudrait-il pour dire oui ? » |
| C12 | « Quelle capacité vos équipes peuvent-elles réellement consacrer à ce sujet ? » | La charge, la concurrence avec la feuille de route du SI | « Qu'est-ce qui passerait après ? » |

**Clôture (3 min)**

1. « Qu'est-ce que je ne vous ai pas demandé et que je devrais savoir ? »
2. Demander les documents : schéma d'architecture, catalogue d'API, dictionnaire de données, politique de sécurité, bilans des expérimentations.
3. Convenir du prochain point et de l'interlocuteur pour chaque application.

## Fiche de synthèse d'entretien

_[À remplir dans l'heure. Une demi-page à une page.]_

| | |
| --- | --- |
| **Interlocuteur** | _[Nom, fonction]_ |
| **Entretien** | _[Numéro, date, durée, lieu]_ |
| **Binôme** | _[Qui a mené, qui a noté]_ |
| **Rédaction** | _[Auteur, heure de rédaction]_ |
| **Diffusion** | Équipe de mission uniquement. Aucun propos n'est attribué hors de l'équipe |

**Trois messages clés**

1. _[Ce que cet entretien apprend, en une phrase qui énonce un constat.]_
2.
3.

**Faits**

| Fait | Source | À vérifier par |
| --- | --- | --- |
| _[Ce qui a été vu ou chiffré]_ | _[Vu à l'écran / Document / Déclaré]_ | _[Analyse ou observation, responsable, échéance]_ |

**Verbatims**

- _[Deux ou trois phrases exactes, entre guillemets.]_

**Effet sur les hypothèses**

| Hypothèse | Effet | Élément |
| --- | --- | --- |
| _[Numéro et libellé]_ | _[Renforcée / Affaiblie / Nouvelle]_ | _[Le fait ou le propos qui le justifie]_ |

**Position et conditions d'adhésion**

_[Influence et adhésion selon les échelles de la cartographie des parties prenantes. Ce que la personne attend, ce qu'elle craint, à quelles conditions elle soutiendra.]_

**Suites**

| Action | Responsable | Échéance |
| --- | --- | --- |
| _[Document attendu, vérification, personne à voir]_ | | |

<!-- section: exemple -->
# Guide d'entretien — Voxalis

Extrait du dossier d'entretiens du diagnostic : préparation et fiche de synthèse de l'entretien n° 6 sur 22.

## Préparation de l'entretien

| | |
| --- | --- |
| **Interlocutrice** | Nadia Cherif, responsable du plateau de Nantes, segment PME Ouest |
| **Date et lieu** | Jeudi 29 janvier 2026, de 14 h à 14 h 45 dans son bureau, puis 20 min au poste d'un conseiller volontaire |
| **Binôme** | Hugo mène, Inès note |
| **Trame** | B, opérationnel métier, variante manager de proximité |
| **Hypothèse à tester** | H1 : le délai est surtout de l'attente entre N1 et N2. Question précise : cette attente vient-elle d'un manque d'information au moment du transfert ? |
| **Cinq questions retenues** | B1, B2, B4, B9, B10 |
| **Ce que nous voulons voir** | Un ticket transféré au N2, ouvert à l'écran. L'aide-mémoire d'un conseiller. Le tableau de bord du plateau |
| **Contexte** | Premier contact le 19 janvier. Elle n'est pas demandeuse : son plateau a déjà servi de terrain à deux expérimentations. Trois jours d'observation sont prévus chez elle du 3 au 5 février |

## Fiche de synthèse d'entretien

| | |
| --- | --- |
| **Interlocutrice** | Nadia Cherif, responsable du plateau de Nantes |
| **Entretien** | N° 6 sur 22, jeudi 29 janvier 2026, 1 h 05, plateau de Nantes |
| **Binôme** | Hugo, Inès |
| **Rédaction** | Inès, le 29 janvier à 15 h 45. Relue par Hugo |
| **Diffusion** | Équipe de mission uniquement. Aucun propos n'est attribué hors de l'équipe |

**Trois messages clés**

1. Le délai se fabrique au transfert. Le ticket part dans la file du N2 avec un commentaire libre, le conseiller perd la main et la visibilité, le client rappelle.
2. Le conseiller cherche plus qu'il ne répare : jusqu'à six applications par incident, des résultats recopiés à la main, une base de connaissances à laquelle le plateau ne se fie plus.
3. Le plateau suivra si trois conditions sont tenues. Sinon il attendra que le projet passe, comme les deux précédents.

**Faits**

| Fait | Source | À vérifier par |
| --- | --- | --- |
| Sur le ticket ouvert devant nous (perte de synchronisation d'un accès), le conseiller a consulté quatre applications et recopié à la main le résultat du test de ligne avant de transférer | Vu à l'écran | Observation du 3 au 5 février : nombre d'applications et de ressaisies par cas (Léo) |
| Ce ticket, transféré à 15 h 40, a été pris en charge par le N2 le lendemain à 9 h 10. L'expert a relancé le test de ligne | Vu à l'écran | Attente par passage de relais sur 12 mois de tickets (Hugo, S4) |
| « Une douzaine de motifs font plus de la moitié de nos incidents » | Déclaré | Pareto des motifs (Inès, S4) |
| « La moitié du retard, c'est le client qu'on n'arrive pas à joindre » | Déclaré, opinion | Durée des statuts d'attente du client (Hugo, S4) |
| « Un bon tiers de la base de connaissances est périmé » | Déclaré | Audit de la base (Inès, S5) |
| Les conseillers ont des objectifs individuels de durée moyenne d'appel et de nombre de tickets traités | Tableau de bord du plateau, vu | Grille d'objectifs à demander à Sophie Lambert |
| Le plateau a servi de terrain à deux expérimentations d'outils d'aide en deux ans, arrêtées sans restitution aux équipes | Déclaré | Bilan des POC avec Thomas Nguyen (Yasmine, S5) |

**Verbatims**

- « Mes conseillers passent plus de temps à chercher qu'à réparer. »
- « Quand on transfère, le ticket part dans un tunnel. Le client rappelle, et nous, on ne sait rien lui dire. »
- « La base de connaissances, plus personne n'y croit. Chacun a son carnet. »
- « On nous a déjà présenté deux outils. On a joué le jeu trois mois, puis plus de nouvelles. »

**Effet sur les hypothèses**

| Hypothèse | Effet | Élément |
| --- | --- | --- |
| H1 : le délai est surtout de l'attente entre N1 et N2 | Renforcée | Sur le cas vu à l'écran, 17 h 30 d'attente pour un seul transfert. Le mécanisme se précise : un commentaire libre, aucun échange oral, des vérifications refaites |
| H2 : la collecte pèse plus que le traitement | Renforcée | Quatre applications consultées et un résultat recopié pour un motif courant |
| H4 : la base de connaissances est exploitable en l'état | Affaiblie | Aide-mémoire personnels sur tous les postes vus |
| H6 : l'attente du client pèse plus que l'attente interne | Nouvelle | Opinion répandue sur le plateau, à trancher par les données avant d'en tirer une conclusion |
| Hors arbre | À instruire en phase Réinventer | Un objectif de durée d'appel rend le transfert rapide rationnel pour le conseiller |

**Position et conditions d'adhésion**

Influence : 3 sur 5, forte sur son plateau et écoutée de ses pairs. Adhésion : −1, réservée, position constatée. Elle ne conteste pas le but, elle doute de la suite. Elle pose trois conditions :

1. Ses conseillers participent à la conception, pas seulement aux tests.
2. Rien de ce que le futur outil enregistre ne sert à évaluer individuellement un conseiller.
3. Quel que soit le résultat, la direction revient l'annoncer au plateau.

Ligne rouge exprimée : aucune machine ne promet un délai d'intervention à un client.

**Suites**

| Action | Responsable | Échéance |
| --- | --- | --- |
| Porter les trois conditions à Sophie Lambert et obtenir sa réponse avant l'observation | Hugo | 30 janvier |
| Mettre à jour la cartographie des parties prenantes et l'arbre d'hypothèses (ajout de H6) | Yasmine, Hugo | 30 janvier |
| Faire relire par Nadia Cherif la note d'information destinée aux conseillers | Hugo | 2 février |
| Demander la grille d'objectifs des conseillers | Hugo | 3 février |
| Extraire 50 tickets transférés depuis Nantes, à relire avec un expert N2 | Léo | 6 février |
| Rencontrer les personnes qu'elle désigne : deux conseillers expérimentés, une recrue de moins de six mois, l'expert N2 qui reçoit le plus de transferts du plateau | Hugo, Léo | Pendant l'observation, du 3 au 5 février |
