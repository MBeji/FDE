---
id: reussir-le-pilote
titre: "Réussir un pilote en conditions réelles"
resume: "Conduire un pilote comme une expérience qui se termine par une décision : site et population, référence et groupe témoin, mode fantôme, montée en charge par paliers, rituels avec le terrain, incidents, puis généraliser, ajuster ou arrêter."
phases: [construire]
duree: "9 min"
niveau: fondamental
tags: [pilote, mode-fantome, mesure, terrain]
frameworks: [poc-pilote-production, mesure-impact, niveaux-autonomie, pilotage-adoption, registre-de-valeur]
templates: [plan-pilote, bilan-pilote, plan-evaluation, registre-raid]
---

## Le résultat visé

Un pilote n'est pas une démonstration longue. C'est une expérience en conditions réelles, bornée dans le temps, qui se termine par une décision — généraliser, ajuster ou arrêter — prise sur des mesures que la finance accepte et sur un usage constaté chez de vrais utilisateurs. Les critères de cette décision s'écrivent avant le premier jour, dans le [plan de pilote](/templates/plan-pilote). Sans eux, le pilote glisse vers le [purgatoire des POC](/savoir/poc-purgatoire). Sur ce qui sépare POC, pilote et production, voir [ce framework](/frameworks/poc-pilote-production).

## 1. Choisir le site et la population

| Critère | Ce qu'on cherche | Voxalis : plateau de Nantes |
| --- | --- | --- |
| Représentativité | Un mix de cas proche de l'ensemble | Segment PME Ouest, motifs récurrents présents |
| Volume | De quoi conclure dans la durée prévue | 9 400 tickets en 8 semaines |
| Encadrement | Un responsable disponible chaque jour | Nadia Cherif |
| Connaissance du terrain | Un site déjà observé | Trois jours d'observation pendant le diagnostic |
| Référence | Un historique mesuré sur le même périmètre | 12 mois de tickets analysés |

Prendre une équipe entière — les 18 conseillers du plateau — et non des volontaires : les volontaires font surestimer l'adoption. Éviter le meilleur site comme le plus en difficulté : ni l'un ni l'autre ne prédit la généralisation.

## 2. Fixer la référence et le groupe témoin

Avant le démarrage, figer la liste des indicateurs, leur définition et leur valeur de référence sur le périmètre du pilote, et les faire valider par la finance ([mesure d'impact](/frameworks/mesure-impact)). Chez Voxalis : MTTR, FCR, taux de réouverture, CSAT, erreur de qualification, part des tickets résolus sans intervention humaine, coût d'inférence par ticket, et usage quotidien du poste de supervision, seul indicateur d'[adoption](/frameworks/pilotage-adoption) qui ne se déclare pas.

Ajouter un groupe témoin : une population comparable, sans le système, mesurée sur la même période. Il neutralise la saisonnalité, un incident réseau majeur, une campagne commerciale. À défaut, comparer à la même période de l'année précédente et l'écrire dans le bilan : une comparaison avant-après sans témoin se discute, autant le dire soi-même.

## 3. Démarrer en mode fantôme

En [mode fantôme](/savoir/mode-fantome), les agents traitent les tickets réels, mais rien n'est exécuté ni envoyé : leurs sorties sont journalisées et comparées à ce que les conseillers ont fait. Voxalis y a consacré deux semaines avant toute action réelle. On y découvre ce que le golden set ne contenait pas : formulations inédites, latences des systèmes sources, écarts entre la procédure annotée et la pratique du plateau. Les experts revoient les écarts chaque jour ; chaque écart fondé devient un cas de test.

Critères de sortie : seuils du [plan d'évaluation](/templates/plan-evaluation) tenus sur le flux réel, aucune action inappropriée proposée, procédure d'arrêt testée.

## 4. Monter en charge par paliers

| Palier | Ce qui est ouvert | Condition pour passer au suivant |
| --- | --- | --- |
| Fantôme | Rien n'est exécuté | Seuils tenus sur le flux réel |
| Assisté | Qualification, diagnostic et propositions soumis au conseiller, qui décide | Diagnostics acceptés sans correction dans au moins 85 % des cas, aucun incident majeur |
| Autonome restreint | Résolution sans intervention sur un catalogue réduit d'actions à risque faible | Aucune action inappropriée, réouvertures sous la référence |
| Élargissement | Motifs et actions ajoutés un par un | Preuve par motif, validée avec le métier |

Chaque palier est réversible, et le retour arrière a été testé à blanc. Ne jamais franchir un palier pour tenir un calendrier : l'[autonomie progressive](/savoir/autonomie-progressive) se gagne sur preuves, outil par outil ([niveaux d'autonomie](/frameworks/niveaux-autonomie)).

## 5. Tenir les rituels avec le terrain

- **Point quotidien, 15 minutes, sur le plateau**, avec la responsable et deux ou trois conseillers. Trois questions : « Où l'agent vous a-t-il fait gagner du temps hier ? Où vous en a-t-il fait perdre ? Quel cas n'auriez-vous pas traité comme lui ? »
- **Signalement en un geste** depuis le poste de travail, avec une réponse sous 24 heures. Un signalement resté sans réponse est le dernier.
- **Revue hebdomadaire des erreurs** avec les experts, sur un échantillon de cas et sur tous les signalements.
- **[Revue de valeur hebdomadaire](/savoir/revue-de-valeur-hebdo)** : indicateurs contre référence et témoin, partagés avec le propriétaire du processus et reportés au [registre de valeur](/frameworks/registre-de-valeur).

Un FDE est présent sur le plateau, au moins pendant les deux premières semaines d'actions réelles. Ce qui se voit en regardant un conseiller travailler ne remonte dans aucun tableau de bord.

## 6. Traiter les incidents

| Gravité | Définition | Réaction |
| --- | --- | --- |
| Majeure | Action inappropriée exécutée, donnée exposée, client lésé | Arrêt immédiat de la voie concernée, sponsor informé dans l'heure, reprise après analyse |
| Mineure | Défaut sans dommage durable | Correction rapide, cas ajouté au jeu de test |
| Irritant | Gêne d'usage | Réponse au signalement, arbitrage au backlog |

Voxalis a connu deux incidents mineurs : des messages envoyés en double au client, après un rejeu de `client.envoyer_message` sur délai dépassé. Correction en S24 : clé d'idempotence sur l'outil, et cas ajouté au jeu de test. Tout incident suit le même chemin : analyse sans recherche de coupable, entrée au [registre RAID](/templates/registre-raid), nouveau cas d'évaluation.

## 7. Décider

| Décision | Conditions |
| --- | --- |
| Généraliser | Indicateurs à la cible ou sur la trajectoire, aucun incident majeur, usage installé, coût unitaire dans l'enveloppe du business case |
| Ajuster | Valeur prouvée sur une partie du périmètre, causes d'écart identifiées ; prolongation bornée, avec un objectif précis |
| Arrêter | Critère d'arrêt de la charte atteint, valeur absente, ou risque non maîtrisable |

Le [bilan du pilote](/templates/bilan-pilote) de Voxalis : MTTR de 31 h à 14,5 h, FCR de 54 % à 71 %, réouvertures de 14 % à 8 %, CSAT de 3,6 à 4,3, 31 % des tickets résolus sans intervention humaine, 0,38 € d'inférence par ticket, aucune action inappropriée, 16 conseillers sur 18 utilisateurs quotidiens. Décision : généraliser en trois vagues à partir de S30 (voir [Passer en production](/guides/passer-en-production)).

## Erreurs fréquentes

- **Pas de référence signée.** Les gains seront contestés, à raison ([valeur déclarative](/savoir/valeur-declarative)).
- **Sauter le mode fantôme pour gagner deux semaines.** Le premier incident en coûtera davantage.
- **Mesurer l'agent au lieu du processus.** La justesse du diagnostic n'intéresse pas le COPIL ; le MTTR, si.
- **Laisser les FDE faire tourner le pilote.** Si l'équipe du client n'opère pas, le résultat ne se généralisera pas ([dépendance aux FDE](/savoir/dependance-fde)).
- **Prolonger sans décider.** Une prolongation sans objectif ni date est un arrêt qui ne dit pas son nom.

## Checklist

- [ ] Les critères de décision et d'arrêt sont écrits et validés par le sponsor avant le démarrage.
- [ ] Le site est représentatif, encadré, et l'équipe entière participe.
- [ ] La référence est mesurée sur le périmètre du pilote et validée par la finance.
- [ ] Un groupe témoin est défini, ou son absence est assumée dans le bilan.
- [ ] Le mode fantôme a tenu ses critères de sortie.
- [ ] Chaque palier a une condition d'entrée et un retour arrière testé.
- [ ] Le point quotidien, le signalement et les revues hebdomadaires sont en place.
- [ ] Chaque incident est classé, analysé et converti en cas de test.
- [ ] Le bilan présente les mesures contre référence et témoin, et propose une décision.
