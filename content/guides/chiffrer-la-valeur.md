---
id: chiffrer-la-valeur
titre: "Chiffrer la valeur d'un cas d'usage en deux jours"
resume: "Une méthode en deux jours pour passer d'une intuition à une fourchette de valeur défendable devant la finance : arbre de valeur, volume × gain unitaire × taux de captation, référence et validation."
phases: [cibler]
duree: "9 min"
niveau: avance
tags: [valeur, business-case, finance]
frameworks: [arbre-de-valeur, business-case-tco, registre-de-valeur, mesure-impact, decomposition-taches]
templates: [business-case, canevas-cas-usage, tableau-de-bord-valeur]
---

## Le résultat visé

En deux jours, une valeur annuelle exprimée en fourchette, dont chaque hypothèse a une source et un propriétaire, adossée à une référence que la finance reconnaît. Pas un business case complet : de quoi arbitrer au jalon G2 de la phase [Cibler](/methode/cibler), compléter le [canevas de cas d'usage](/templates/canevas-cas-usage) et ouvrir le [registre de valeur](/frameworks/registre-de-valeur).

La formule tient en une ligne : **valeur annuelle = volume × gain unitaire × taux de captation.**

| Terme | Définition | Source attendue |
| --- | --- | --- |
| Volume | Nombre d'unités traitées par an : tickets, dossiers, commandes | Système de gestion, confirmé par la finance |
| Gain unitaire | Écart entre le coût (ou la marge) par unité aujourd'hui et en cible | Référence signée, cible argumentée |
| Taux de captation | Part du gain théorique qui se retrouve réellement dans les comptes | Une décision de management, pas un calcul |

## La démarche en deux jours

### Jour 1, matin : construire l'arbre de valeur

Relier le cas d'usage à une ligne du compte de résultat avec un [arbre de valeur](/frameworks/arbre-de-valeur) : coûts, revenus, risques. Ne chiffrer que les branches que l'on saura mesurer, deux au plus.

À demander au propriétaire du processus : « Si ce cas d'usage réussit, quel chiffre de votre tableau de bord bouge, et quelle ligne du budget suit ? »

Chez [Voxalis](/guides/cas-fil-rouge), deux branches : l'efficacité (coût par ticket) et la rétention (churn PME). Le NPS est suivi, mais pas converti en euros : son effet économique est déjà compté dans le churn.

### Jour 1, après-midi : établir la référence

Obtenir de la finance le volume et le coût complet du périmètre. À demander au contrôle de gestion : « Quel coût complet reconnaissez-vous pour ce domaine, sur quelle période, avec quelles clés de répartition ? »

Voxalis : 420 000 tickets par an, 17,2 M€ de coût complet, soit 41 € par ticket. Ce chiffre devient la référence de toute la mission.

### Jour 2, matin : gain unitaire, captation, fourchette

1. **Gain unitaire.** Partir de la [décomposition des tâches](/frameworks/decomposition-taches) : quelles tâches disparaissent, lesquelles raccourcissent, sur quelle part du volume. Voxalis vise 26 € par ticket, soit un gain de 15 €, en ligne avec l'ambition du cadrage (un tiers de moins).
2. **Potentiel.** 15 € × 420 000 tickets = 6,3 M€ par an. Ce n'est pas la valeur, c'est le plafond.
3. **Captation.** Un gain de temps ne devient un gain financier que si une décision le transforme : départs non remplacés, sous-traitance réduite, volume supplémentaire absorbé sans embauche. Voxalis retient 60 %, soit 3,8 M€ par an. Le reste n'est pas perdu : une partie de la capacité libérée est réaffectée à l'accompagnement proactif des clients, et les leviers retenus (non-remplacement des départs, baisse de la sous-traitance de débordement) n'agissent pas du jour au lendemain.
4. **Seconde branche.** Rétention : un churn ramené de 11,5 % à 10,0 % sur 240 M€ de revenus récurrents préserve 3,6 M€ de revenus, soit 1,6 M€ à 45 % de marge. Compter la marge, jamais le chiffre d'affaires.
5. **Total.** 3,8 M€ + 1,6 M€ = 5,4 M€ par an en régime de croisière.
6. **Fourchette.** Faire varier l'hypothèse la plus fragile et montrer ce que cela donne. Ici, la captation :

| Taux de captation | Gain d'efficacité annuel |
| --- | --- |
| 40 % (bas) | 2,5 M€ |
| 60 % (retenu) | 3,8 M€ |
| 80 % (haut) | 5,0 M€ |

La rétention s'ajoute dans les trois cas. Présenter la fourchette et dire laquelle des trois valeurs on recommande d'inscrire, et pourquoi.

### Jour 2, après-midi : faire valider par la finance

Une heure avec le directeur financier ou son contrôleur de gestion. On n'y présente pas un résultat : on y fait valider des hypothèses, une par une.

À dire : « Voici nos hypothèses. Pour chacune, je vous donne la source et notre degré de confiance. Lesquelles accepteriez-vous d'inscrire dans une trajectoire budgétaire, et lesquelles voulez-vous que nous durcissions ? »

Chez Voxalis, Julien Faure a validé des hypothèses prudentes : 60 % de captation, une montée en charge sur trois ans (1,2 M€, puis 4,3 M€, puis 5,4 M€ de bénéfices) et des coûts complets (3,1 M€ d'investissement initial, 1,2 M€ de coût récurrent par an). Résultat sur trois ans : 10,9 M€ de bénéfices pour 5,9 M€ de coûts, un gain net de 5,0 M€, un ROI de 85 % et un retour sur investissement au 21e mois. Ce calcul complet relève du [business case](/templates/business-case) et de l'outil [Business case](/outils/business-case).

Message de confirmation, à envoyer le soir même :

> « Merci pour la séance. Nous retenons : une référence de 41 € par ticket sur 420 000 tickets (source : contrôle de gestion) ; une cible de 26 € ; une captation de 60 % ; une rétention comptée en marge, à 45 %. Valeur annuelle en régime de croisière : 5,4 M€. Sans remarque de votre part d'ici vendredi, nous inscrivons ces hypothèses au registre de valeur. »

## Erreurs classiques

- **Le double comptage.** Trois cas d'usage revendiquent les mêmes minutes gagnées sur le même ticket ; un gain de FCR et un gain de MTTR sont convertis deux fois dans les mêmes ETP. Parade : chiffrer au niveau du domaine, puis répartir entre les cas. Les cinq cas d'usage de Voxalis se partagent une seule enveloppe de 5,4 M€.
- **Les gains de temps non captés.** « Minutes gagnées × volume × coût horaire » ne se retrouve nulle part si personne ne décide ce que devient le temps libéré. Parade : nommer le mécanisme de captation et celui qui le décide ; à défaut, compter zéro.
- **Le régime de croisière dès la première année.** Parade : une rampe explicite. Voxalis ne compte que 1,2 M€ la première année.
- **Les coûts récurrents oubliés.** Inférence, exploitation, maintenance : 1,2 M€ par an chez Voxalis, dont une équipe AgentOps de 3 ETP. Voir [business case et TCO](/frameworks/business-case-tco).
- **La fausse précision.** Écrire 3,78 M€ suggère une exactitude que les hypothèses n'ont pas. Parade : un chiffre après la virgule, et une fourchette.
- **Le ratio importé.** Un gain observé ailleurs est un ordre de grandeur à vérifier, pas une hypothèse. Parade : le recalculer sur les volumes et les coûts du client.
- **La référence non signée.** Sans point de départ reconnu, la valeur reste [déclarative](/savoir/valeur-declarative) et sera contestée au moment de la [mesure d'impact](/frameworks/mesure-impact).

> [!TIP]
> Valeur chiffrée n'est pas valeur réalisée. Trois mois après la généralisation, Voxalis mesure 29 € par ticket pour une cible de 26 € à 18 mois. Le [tableau de bord de valeur](/templates/tableau-de-bord-valeur) suit cet écart : c'est son rôle.

## Checklist

- [ ] Le cas d'usage est relié à une ligne du compte de résultat par un arbre de valeur.
- [ ] Deux branches au plus sont chiffrées ; les autres indicateurs sont suivis sans être convertis en euros.
- [ ] Le volume et le coût unitaire de référence viennent de la finance, source et période indiquées.
- [ ] Le gain unitaire est argumenté par la décomposition des tâches, pas par un ratio importé.
- [ ] Le taux de captation est explicite, avec son mécanisme et son décideur.
- [ ] Les revenus sont comptés en marge.
- [ ] La valeur est présentée en fourchette, avec une rampe de montée en charge.
- [ ] Les coûts récurrents figurent dans le calcul.
- [ ] Aucun gain n'est compté dans deux cas d'usage.
- [ ] La finance a validé chaque hypothèse ; la confirmation écrite est partie.
- [ ] Les hypothèses sont inscrites au registre de valeur.
