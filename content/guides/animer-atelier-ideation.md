---
id: animer-atelier-ideation
titre: "Animer un atelier d'identification des opportunités"
resume: "Le déroulé d'un atelier de trois heures qui part des irritants du métier et aboutit à des cas d'usage formulés, notés en valeur et en faisabilité, avec un porteur chacun."
phases: [cibler]
duree: "9 min"
niveau: fondamental
tags: [atelier, cas-usage, priorisation, animation]
frameworks: [approche-par-domaine, matrice-valeur-faisabilite, faut-il-un-agent, cartographie-processus]
templates: [atelier-ideation, canevas-cas-usage, portefeuille-priorise]
---

## Le résultat visé

En trois heures, sortir avec dix à quinze cas d'usage formulés dans le même format, notés à chaud en valeur et en faisabilité, chacun avec un porteur métier, et une liste courte de cinq ou six cas à instruire. Pas quarante idées, pas un mur de notes adhésives. Chez [Voxalis](/guides/cas-fil-rouge), la phase [Cibler](/methode/cibler) a identifié quatorze cas d'usage dans le domaine Assistance & SAV Entreprises ; cinq ont été retenus.

L'atelier vient après le diagnostic, jamais avant : sans faits partagés, le groupe note des intuitions.

## Avant l'atelier

1. **Fixer le périmètre : un domaine.** Un atelier « IA pour toute l'entreprise » produit des cas dispersés. L'[approche par domaine](/frameworks/approche-par-domaine) donne des cas qui se renforcent sur un même flux.
2. **Composer le groupe : huit à douze personnes.** Un tiers d'opérationnels (chez Voxalis : conseillers N1, experts N2, back-office), un tiers de managers avec le propriétaire du processus, un tiers de SI, data, finance et sécurité. Sans opérationnels, les irritants sont de seconde main ; sans le SI, la faisabilité est inventée.
3. **Pré-câbler le propriétaire du processus** sur les critères de notation et sur ce qui sera fait du résultat. C'est lui qui ouvre la séance.
4. **Envoyer une page de préparation à J-3** : trois faits du diagnostic et une consigne. « Venez avec deux situations de la semaine dernière où vous avez perdu du temps ou attendu quelqu'un. »
5. **Préparer la matière** : la [cartographie du processus](/frameworks/cartographie-processus) affichée au mur, les irritants relevés en entretien, la grille de notation imprimée, et trois ou quatre cas de réserve tirés de la [bibliothèque de cas d'usage](/cas-usage) pour relancer un groupe à sec.

Le [template d'atelier](/templates/atelier-ideation) fournit le déroulé détaillé et les supports.

## Pendant : trois heures minutées

| Horaire | Séquence | Technique |
| --- | --- | --- |
| 0 h 00 | Ouverture par le propriétaire du processus, règles du jeu | Dire ce qui sera décidé, et par qui |
| 0 h 10 | Rappel du diagnostic : trois faits chiffrés | Questions de compréhension seulement |
| 0 h 25 | Divergence 1 : irritants et décisions | Individuel et silencieux, une idée par note |
| 0 h 45 | Regroupement sur le processus affiché | Les participants placent, l'animateur nomme les grappes |
| 1 h 05 | Divergence 2 : formuler les cas d'usage | Sous-groupes mixtes de trois ou quatre, une grappe chacun |
| 1 h 40 | Pause | L'équipe FDE fusionne les doublons |
| 1 h 50 | Restitution : deux minutes par cas | Clarifications seulement |
| 2 h 15 | Convergence : notation à chaud | Vote simultané, discussion des écarts |
| 2 h 45 | Lecture de la matrice, porteurs, suites | Un nom par cas retenu |

### Partir des irritants et des décisions, pas de la technologie

La consigne de la première divergence ne contient ni « IA » ni « agent » :

- « Où attendez-vous quelqu'un ou quelque chose ? »
- « Quelle information allez-vous chercher à la main, dans plusieurs outils ? »
- « Quelle décision prenez-vous avec trop peu d'éléments, ou trop tard ? »
- « Que faites-vous dix fois par jour sans que cela demande votre expertise ? »

La solution n'entre qu'à la seconde divergence, par une phrase imposée, reprise du [canevas de cas d'usage](/templates/canevas-cas-usage) :

> « Pour [qui], qui aujourd'hui [irritant, avec son chiffre], nous voulons [résultat], mesuré par [indicateur]. »

Exemple Voxalis : « Pour le conseiller N1, qui interroge jusqu'à six outils avant de pouvoir escalader un incident, nous voulons un diagnostic technique prêt dès l'ouverture du ticket, mesuré par le délai de résolution. » Un cas sans indicateur n'est pas affiché.

### Diverger puis converger, sans mélanger

Pendant la divergence, aucune critique : « On note tout, on triera à 2 h 15. » Le travail silencieux avant tout échange évite que le groupe s'aligne sur la première idée du plus gradé.

### Noter à chaud

Chaque participant note chaque cas de 1 à 5 sur deux axes, sur une carte ; tous révèlent en même temps.

| Axe | Ce qu'on note | Note 1 | Note 5 |
| --- | --- | --- | --- |
| Valeur | Volume concerné, irritant mesuré, lien avec l'indicateur du sponsor | Marginal, sans lien | Massif, au cœur de l'objectif |
| Faisabilité | Données disponibles, accès au SI, risque en cas d'erreur, acceptation par le terrain | Données absentes, risque fort | Données et API prêtes, erreur réversible |

Ne discuter que les écarts de deux points ou plus : ils signalent une information que toute la salle n'a pas. « Vous mettez 2 en faisabilité quand la salle met 4 : que savez-vous que nous ignorons ? » Reporter les moyennes sur la [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite) et lire les quadrants à voix haute. Annoncer que ces notes sont provisoires.

Chez Voxalis, la détection prédictive des pannes, notée 4,4 en valeur, n'a obtenu que 2,0 en faisabilité faute de données suffisantes : différée, pas abandonnée. La génération automatique d'avoirs (2,8 et 2,6) a été écartée pour son risque financier.

### Gérer les personnalités

| Profil | Ce qui se passe | Réponse |
| --- | --- | --- |
| Le dominant | Parle le premier, ancre le groupe | Travail silencieux, vote simultané ; « Je prends d'abord ceux qu'on n'a pas entendus. » |
| Le sceptique | « On a déjà essayé. » | « Qu'est-ce qui a manqué la dernière fois ? Notons-le comme condition de faisabilité. » |
| Le technophile | Propose un agent pour tout | « Quel irritant cela règle-t-il, et pour qui ? » L'[échelle des solutions](/frameworks/faut-il-un-agent) se traite après l'atelier |
| Le silencieux | N'écrit rien ; souvent un opérationnel | Le faire restituer pour son sous-groupe ; aller le voir à la pause |
| Le hiérarchique | Sa présence fige les réponses | Lui confier l'ouverture et la clôture ; lui demander de noter en dernier |

## Après : les 48 heures qui comptent

1. **Le soir même** : photographier la matrice, transcrire les cas, remercier par écrit en joignant la liste courte.
2. **Sous 48 h** : compte rendu d'une page avec les cas notés, les porteurs et la date de l'arbitrage.
3. **Dans la semaine** : remplir un canevas par cas de la liste courte, recaler les notes sur les données avec l'outil de [priorisation](/outils/priorisation), puis [chiffrer la valeur](/guides/chiffrer-la-valeur) des meilleurs.
4. **Au jalon G2** : présenter le [portefeuille priorisé](/templates/portefeuille-priorise), cas écartés et raisons compris.

## Erreurs fréquentes

- **Ouvrir par une démonstration de technologie.** Le groupe cherche ensuite des usages à l'outil : c'est l'anti-pattern [techno d'abord](/savoir/techno-d-abord).
- **Inviter vingt personnes.** Au-delà de douze, la moitié de la salle regarde.
- **Noter par consensus oral.** La note du plus gradé devient celle du groupe.
- **Sortir sans porteurs.** Un cas sans nom en face ne sera jamais instruit.
- **Laisser croire que tout sera fait.** Dire en ouverture : « Nous retiendrons cinq ou six cas. »
- **Prendre les notes à chaud pour un arbitrage.** Elles ouvrent l'instruction, elles ne la remplacent pas.

## Checklist

- [ ] Périmètre limité à un domaine ; diagnostic partagé avant l'atelier.
- [ ] Huit à douze participants, dont un tiers d'opérationnels, avec le SI et la finance.
- [ ] Propriétaire du processus pré-câblé ; page de préparation envoyée à J-3.
- [ ] Processus affiché, grille de notation imprimée, cas de réserve prêts.
- [ ] Première divergence sans aucune mention de technologie.
- [ ] Chaque cas formulé avec la phrase imposée et un indicateur.
- [ ] Vote simultané ; seuls les écarts de deux points ou plus sont discutés.
- [ ] Un porteur nommé par cas retenu avant la clôture.
- [ ] Compte rendu envoyé sous 48 h ; notes recalées sur les données dans la semaine.
