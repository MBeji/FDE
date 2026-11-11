---
id: business-case
titre: "Business case"
resume: "Le dossier d'investissement du domaine, validé par la finance : hypothèses sourcées, bénéfices par levier, coûts initiaux et récurrents, flux sur 3 ans, ROI, scénarios, sensibilité et modalités de mesure."
phase: cibler
type: livrable
format: document
effort: "3 à 5 jours, dont deux séances avec la finance"
tags: [valeur, finance, investissement, roi]
frameworks: [business-case-tco, arbre-de-valeur, registre-de-valeur, finops-ia]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Le business case fonde la décision d'investir au jalon G2 et devient la référence contre laquelle la valeur sera mesurée. Il ne sert pas à convaincre : il sert à rendre les hypothèses discutables, une par une, par le directeur financier. Il se chiffre au niveau du domaine, jamais cas d'usage par cas d'usage.

## Quand l'utiliser

En phase [Cibler](/methode/cibler), une fois la référence établie et le [portefeuille](/templates/portefeuille-priorise) stabilisé. Il se rejoue au jalon G5 avec les mesures du pilote. Le calcul peut être conduit dans l'outil [Business case](/outils/business-case) ; la démarche est décrite dans [Chiffrer la valeur](/guides/chiffrer-la-valeur).

## Comment le remplir

1. Faire signer la référence (volume, coût unitaire, période) par la finance.
2. Écrire chaque hypothèse avec sa source, son niveau de confiance et son valideur.
3. Chiffrer deux leviers au plus : valeur = volume × gain unitaire × taux de captation. Compter les revenus en marge.
4. Inscrire tous les coûts récurrents : inférence, exploitation, maintenance.
5. Poser une montée en charge explicite, puis trois scénarios et la sensibilité.
6. Écrire comment, par qui et quand chaque gain sera mesuré.

## Critères de qualité

- [ ] La référence est signée par la finance, source et période indiquées.
- [ ] Chaque hypothèse a une source et un valideur nommé.
- [ ] Le mécanisme de captation et son décideur sont écrits.
- [ ] Aucun gain n'est compté deux fois ; les revenus sont en marge.
- [ ] Les coûts récurrents figurent sur les trois années.
- [ ] Le scénario prudent et le seuil de rentabilité sont montrés.
- [ ] Chaque gain a un indicateur, une source de mesure et une date.

<!-- section: template -->
# Business case — {{client}} — {{domaine}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[0.1]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Validé par** | _[Nom du directeur financier ou de son représentant, date]_ |
| **Décision demandée** | _[Instance, date]_ |

## 1. Synthèse

_[Cinq lignes : ce que l'on propose d'investir, pour quelle valeur annuelle, avec quel retour, sous quelles hypothèses principales, et ce qui est demandé.]_

| Chiffre clé | Valeur |
| --- | --- |
| Valeur annuelle en régime de croisière | |
| Investissement initial | |
| Coût récurrent annuel | |
| Gain net à 3 ans | |
| ROI à 3 ans | |
| Délai de retour | |

## 2. Périmètre et référence

| Élément | Valeur | Source et période | Signé par |
| --- | --- | --- | --- |
| _[Volume annuel]_ | | | |
| _[Coût complet et coût unitaire]_ | | | |
| _[Indicateur de revenu ou de risque concerné]_ | | | |

**Ce que le business case couvre et ne couvre pas** : _[Périmètre, cas d'usage inclus, exclusions]_

## 3. Hypothèses

| N° | Hypothèse | Valeur retenue | Source | Confiance | Validée par |
| --- | --- | --- | --- | --- | --- |
| H1 | | | | _[Forte / Moyenne / Faible]_ | |

## 4. Bénéfices par levier

**Levier 1 — _[Nom]_**

- Calcul : _[Volume × gain unitaire × taux de captation]_
- Mécanisme de captation : _[Décision qui transforme le gain en euros, et qui la prend]_
- Valeur annuelle en régime de croisière : _[Montant]_

**Levier 2 — _[Nom]_**

- Calcul : _[Compter la marge, pas le chiffre d'affaires]_
- Valeur annuelle en régime de croisière : _[Montant]_

**Bénéfices suivis mais non valorisés** : _[Indicateurs suivis sans conversion en euros, et pourquoi]_

## 5. Coûts

| Poste | Montant | Contenu | Hypothèse de calcul |
| --- | --- | --- | --- |
| **Investissement initial** | | | |
| _[Équipe]_ | | | |
| _[Plateforme et intégration]_ | | | |
| _[Changement et formation]_ | | | |
| **Coût récurrent annuel** | | | |
| _[Inférence et plateforme]_ | | | |
| _[Exploitation]_ | | | |
| _[Maintenance évolutive]_ | | | |

## 6. Flux sur 3 ans

| | Année 1 | Année 2 | Année 3 | Total |
| --- | --- | --- | --- | --- |
| Montée en charge | _[% du régime de croisière]_ | | | |
| Bénéfices, levier 1 | | | | |
| Bénéfices, levier 2 | | | | |
| **Total bénéfices** | | | | |
| Investissement initial | | | | |
| Coût récurrent | | | | |
| **Total coûts** | | | | |
| **Flux net** | | | | |
| **Cumul** | | | | |

_[Préciser le point de départ de l'année 1 et si les flux sont actualisés.]_

## 7. ROI et délai de retour

- **Gain net à 3 ans** : _[Bénéfices − coûts]_
- **ROI à 3 ans** : _[Gain net ÷ coûts]_
- **Délai de retour** : _[Mois où le cumul devient positif]_

## 8. Scénarios

| Hypothèse | Prudent | Central | Ambitieux |
| --- | --- | --- | --- |
| _[Hypothèse qui varie]_ | | | |
| **Valeur annuelle en régime de croisière** | | | |
| **Bénéfices à 3 ans** | | | |
| **Coûts à 3 ans** | | | |
| **Gain net à 3 ans** | | | |
| **ROI à 3 ans** | | | |
| **Délai de retour** | | | |

## 9. Sensibilité

| Variable | Variation défavorable | Effet sur le gain net à 3 ans | Variation favorable | Effet |
| --- | --- | --- | --- | --- |
| | | | | |

**Seuil de rentabilité** : _[Valeur de l'hypothèse la plus fragile en dessous de laquelle le gain net à 3 ans s'annule]_

## 10. Risques sur la valeur

| Risque | Effet sur la valeur | Parade | Porteur |
| --- | --- | --- | --- |
| | | | |

## 11. Modalités de mesure

| Indicateur | Définition | Source | Fréquence | Responsable |
| --- | --- | --- | --- | --- |
| | | | | |

**Jalons de mesure** : _[Dates auxquelles le réalisé est comparé au prévu, et instance qui en prend acte]_

**Méthode d'attribution** : _[Groupe témoin, comparaison avant-après, cohorte]_

<!-- section: exemple -->
# Business case — Voxalis — Assistance & SAV Entreprises

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Version** | 1.0 du 9 mars 2026 |
| **Rédacteur** | Hugo, FDE, avec le contrôle de gestion |
| **Validé par** | Julien Faure, Directeur financier, le 9 mars 2026 |
| **Décision demandée** | COPIL du 12 mars 2026 (jalon G2) |

## 1. Synthèse

Nous proposons d'investir 3,1 M€ pour reconstruire le traitement des incidents PME autour de cinq cas d'usage. En régime de croisière, la valeur est de 5,4 M€ par an : 3,8 M€ de gain d'efficacité capté et 1,6 M€ de marge préservée par la baisse du churn. Le coût récurrent est de 1,2 M€ par an. L'investissement est récupéré au 21e mois. Deux hypothèses portent le résultat : la part du gain d'efficacité réellement captée (60 %) et l'effet du délai de résolution sur le churn.

| Chiffre clé | Valeur |
| --- | --- |
| Valeur annuelle en régime de croisière | 5,4 M€ |
| Investissement initial | 3,1 M€ |
| Coût récurrent annuel | 1,2 M€ |
| Gain net à 3 ans | 5,0 M€ |
| ROI à 3 ans | 85 % |
| Délai de retour | 21e mois |

## 2. Périmètre et référence

| Élément | Valeur | Source et période | Signé par |
| --- | --- | --- | --- |
| Volume | 420 000 tickets par an | Ticketing, année de référence | Julien Faure, 5 mars 2026 |
| Coût complet du domaine | 17,2 M€ par an, soit 41 € par ticket | Contrôle de gestion, année de référence | Julien Faure, 5 mars 2026 |
| Revenus récurrents du segment PME | 240 M€, 38 000 clients | Direction financière | Julien Faure, 5 mars 2026 |
| Churn annuel PME | 11,5 % | Direction financière | Julien Faure, 5 mars 2026 |

**Ce que le business case couvre et ne couvre pas** : les cinq cas d'usage retenus au portefeuille, sur les incidents techniques du segment PME. Les gains sont rapportés à l'ensemble des 420 000 tickets, parce que le coût par ticket de la finance est calculé sur l'ensemble du domaine. La valeur est chiffrée une seule fois, au niveau du domaine : les cinq cas se partagent une même enveloppe. Le coût par ticket s'entend hors coût récurrent de la solution, compté à part en section 5.

## 3. Hypothèses

| N° | Hypothèse | Valeur retenue | Source | Confiance | Validée par |
| --- | --- | --- | --- | --- | --- |
| H1 | Volume de tickets stable sur 3 ans | 420 000 par an | Ticketing, trois dernières années | Forte | Julien Faure |
| H2 | Coût par ticket en régime de croisière | 26 €, contre 41 € | Décomposition des tâches du diagnostic ; cohérent avec l'ambition de la charte (un tiers de moins) | Moyenne | Sophie Lambert, Julien Faure |
| H3 | Part du gain d'efficacité captée | 60 % | Décision de management. Ordre de grandeur : 45 départs naturels non remplacés sur 3 ans et baisse de la sous-traitance de débordement | Moyenne | Julien Faure ; modalités à arrêter avec Isabelle Moreau en phase Réinventer |
| H4 | Churn PME en régime de croisière | 10,0 %, contre 11,5 % | Conviction de la sponsor, étayée par les motifs de résiliation ; lien de cause à effet non démontré | Faible | Claire Besson, Julien Faure |
| H5 | Taux de marge sur les revenus récurrents | 45 % | Direction financière | Forte | Julien Faure |
| H6 | Montée en charge du gain d'efficacité | 32 %, 87 %, 100 % du régime de croisière | Calendrier de la mission : pilote en S22, généralisation de S30 à S39 | Moyenne | Julien Faure |
| H7 | Effet sur le churn | Nul en année 1, 10,6 % en année 2, 10,0 % en année 3 | Les contrats se renouvellent sur la durée ; prudence | Faible | Julien Faure |
| H8 | Coût d'inférence | 0,50 € par ticket au plus | Estimation à confirmer au prototype et au pilote | Moyenne | Thomas Nguyen |
| H9 | Stabilité des 12 motifs récurrents | 58 % des incidents | Analyse de 12 mois de tickets | Forte | Sophie Lambert |

## 4. Bénéfices par levier

**Levier 1 — Efficacité**

- Calcul : (41 € − 26 €) × 420 000 tickets = 6,3 M€ par an de gain potentiel. Ce chiffre est un plafond, pas la valeur.
- Mécanisme de captation : un gain de temps ne devient un gain financier que si une décision le transforme. Deux mécanismes sont retenus : le non-remplacement de départs naturels, de l'ordre de 45 sur 3 ans, soit environ 2,0 M€ par an à 44 k€ de coût complet moyen par ETP ; la baisse de la sous-traitance de débordement, pour environ 1,8 M€ par an. Aucune suppression de poste n'est supposée. La répartition exacte sera arrêtée par Claire Besson et Isabelle Moreau en phase Réinventer.
- Valeur annuelle en régime de croisière : 6,3 M€ × 60 % = 3,8 M€. Les 40 % restants ne sont pas perdus : ils financent la qualité de service et l'accompagnement proactif des clients, sans être comptés ici.

**Levier 2 — Rétention**

- Calcul : churn de 11,5 % à 10,0 %, soit 1,5 point sur 240 M€ de revenus récurrents = 3,6 M€ de revenus préservés par an. À 45 % de marge : 1,6 M€.
- Valeur annuelle en régime de croisière : 1,6 M€ de marge.

**Valeur annuelle en régime de croisière : 3,8 M€ + 1,6 M€ = 5,4 M€.**

**Bénéfices suivis mais non valorisés** : le NPS Entreprises (+8 aujourd'hui), dont l'effet économique est déjà compté dans le churn ; le délai de résolution, le FCR et le taux de réouverture, qui sont les causes des deux leviers et non des gains supplémentaires ; la réutilisation de la plateforme par d'autres domaines.

## 5. Coûts

| Poste | Montant | Contenu | Hypothèse de calcul |
| --- | --- | --- | --- |
| **Investissement initial** | **3,1 M€** | | |
| Équipe mixte | 1,9 M€ | Équipe FDE sur 39 semaines et temps des six personnes détachées par Voxalis | Plan de mission |
| Plateforme et intégration | 0,7 M€ | Accès programmables aux six applications, environnement d'évaluation, traçage, poste de supervision | Estimation de la DSI, revue par Karim Haddad |
| Changement et formation | 0,5 M€ | Formation des 190 conseillers et de l'encadrement, temps de formation compris, communication | Estimation avec la DRH |
| **Coût récurrent annuel** | **1,2 M€** | | |
| Inférence et plateforme | 0,55 M€ | Inférence : 0,50 € × 420 000 tickets = 0,21 M€. Plateforme : 0,34 M€ (hébergement, traçage, licences) | H8 |
| Équipe AgentOps | 0,35 M€ | 3 ETP : exploitation, évaluation, évolution des agents | Coût complet |
| Maintenance évolutive | 0,3 M€ | Évolutions des agents, des outils et des évaluations | Forfait annuel |

Le coût récurrent de l'année 1 est de 0,4 M€, soit un tiers d'année pleine, la solution montant en charge à partir du pilote.

## 6. Flux sur 3 ans

En M€. L'année 1 commence au lancement de la mission, en janvier 2026. Flux non actualisés, par convention avec la direction financière pour un horizon de 3 ans.

| | Année 1 | Année 2 | Année 3 | Total |
| --- | --- | --- | --- | --- |
| Part du potentiel d'efficacité réalisée | 32 % | 87 % | 100 % | |
| Coût moyen par ticket sur l'année | 36 € | 28 € | 26 € | |
| Churn PME | 11,5 % | 10,6 % | 10,0 % | |
| Bénéfices, efficacité captée à 60 % | 1,2 | 3,3 | 3,8 | 8,3 |
| Bénéfices, rétention | 0,0 | 1,0 | 1,6 | 2,6 |
| **Total bénéfices** | **1,2** | **4,3** | **5,4** | **10,9** |
| Investissement initial | 3,1 | — | — | 3,1 |
| Coût récurrent | 0,4 | 1,2 | 1,2 | 2,8 |
| **Total coûts** | **3,5** | **1,2** | **1,2** | **5,9** |
| **Flux net** | **−2,3** | **+3,1** | **+4,2** | **+5,0** |
| **Cumul** | −2,3 | +0,8 | +5,0 | |

## 7. ROI et délai de retour

- **Gain net à 3 ans** : 10,9 M€ − 5,9 M€ = 5,0 M€.
- **ROI à 3 ans** : 5,0 M€ ÷ 5,9 M€ = 85 %.
- **Délai de retour** : le cumul est de −2,3 M€ à la fin de l'année 1 et progresse de 3,1 M€ sur l'année 2, soit environ 0,26 M€ par mois. Il devient positif au cours du 21e mois, en septembre 2027.

Les deux seuils du critère d'arrêt n° 1 de la charte sont tenus : valeur annuelle de 5,4 M€ pour un minimum de 3 M€, retour au 21e mois pour un maximum de 30.

## 8. Scénarios

Les coûts sont identiques dans les trois scénarios, pour isoler l'effet des hypothèses de bénéfice. Leur variation est traitée en section 9.

| Hypothèse | Prudent | Central | Ambitieux |
| --- | --- | --- | --- |
| Taux de captation du gain d'efficacité | 40 % | 60 % | 80 % |
| Churn PME en régime de croisière | 10,75 % | 10,0 % | 9,5 % |
| Montée en charge de l'efficacité | 20 %, 80 %, 100 % (environ deux mois de retard) | 32 %, 87 %, 100 % | 32 %, 87 %, 100 % |
| Gain d'efficacité capté en régime de croisière | 2,5 M€ | 3,8 M€ | 5,0 M€ |
| Marge préservée en régime de croisière | 0,8 M€ | 1,6 M€ | 2,2 M€ |
| **Valeur annuelle en régime de croisière** | **3,3 M€** | **5,4 M€** | **7,2 M€** |
| Bénéfices par année | 0,5, puis 2,4, puis 3,3 | 1,2, puis 4,3, puis 5,4 | 1,6, puis 5,7, puis 7,2 |
| **Bénéfices à 3 ans** | **6,2 M€** | **10,9 M€** | **14,5 M€** |
| **Coûts à 3 ans** | 5,9 M€ | 5,9 M€ | 5,9 M€ |
| **Gain net à 3 ans** | **+0,3 M€** | **+5,0 M€** | **+8,6 M€** |
| **ROI à 3 ans** | 5 % | 85 % | 146 % |
| **Délai de retour** | 35e mois | 21e mois | 18e mois |

**Lecture.** Le scénario prudent reste positif à 3 ans, mais de peu, et son délai de retour dépasse le seuil de 30 mois fixé par la charte. La décision d'aujourd'hui porte sur le scénario central, validé par la direction financière. Le business case sera rejoué au jalon G5 avec les mesures du pilote : si elles placent la mission sur la trajectoire prudente, la généralisation sera réexaminée.

## 9. Sensibilité

Effet de chaque variable prise isolément sur le gain net à 3 ans du scénario central (5,0 M€).

| Variable | Variation défavorable | Effet sur le gain net à 3 ans | Variation favorable | Effet |
| --- | --- | --- | --- | --- |
| Taux de captation | 40 % au lieu de 60 % | −2,8 M€, soit 2,2 M€ | 80 % | +2,8 M€, soit 7,8 M€ |
| Churn en régime de croisière | Aucun effet : 11,5 % | −2,6 M€, soit 2,4 M€ | 9,5 % | +0,9 M€, soit 5,9 M€ |
| Montée en charge | Un trimestre de retard sur les deux leviers | −1,4 M€, soit 3,6 M€ | — | — |
| Inférence et plateforme | Coût doublé : 1,1 M€ par an | −1,3 M€, soit 3,7 M€ | Inférence à 0,25 € par ticket | +0,2 M€, soit 5,2 M€ |
| Coût par ticket en régime de croisière | 28 € au lieu de 26 € | −1,1 M€, soit 3,9 M€ | 24 € | +1,1 M€, soit 6,1 M€ |
| Investissement initial | +20 % | −0,6 M€, soit 4,4 M€ | −10 % | +0,3 M€, soit 5,3 M€ |

**Seuil de rentabilité.** Toutes choses égales par ailleurs, le gain net à 3 ans s'annule pour un taux de captation de 24 %. Sans aucun effet sur le churn, il s'annule à 43 %. Aucune variable prise seule ne rend le gain net négatif. Le cumul d'une captation à 40 % et d'un churn inchangé le ramène à −0,4 M€ : ce sont les deux hypothèses à surveiller, et elles relèvent du management, pas de la technologie.

## 10. Risques sur la valeur

| Risque | Effet sur la valeur | Parade | Porteur |
| --- | --- | --- | --- |
| Les gains de capacité ne sont pas captés : départs remplacés, sous-traitance maintenue | Jusqu'à −2,8 M€ sur 3 ans | Mécanismes et trajectoire d'effectifs arrêtés en phase Réinventer ; suivi trimestriel avec la finance et la DRH | Claire Besson |
| Le churn ne baisse pas, ou la baisse n'est pas attribuable | Jusqu'à −2,6 M€ sur 3 ans | Suivi par cohorte des clients ayant subi un incident ; indicateurs avancés : NPS, satisfaction, réouvertures | Julien Faure |
| La généralisation prend du retard | −1,4 M€ par trimestre | Pilote avec critères de décision écrits ; vagues régionales conditionnées | Yasmine |
| Le coût d'inférence dérive avec le volume ou la complexité des cas | Jusqu'à −1,3 M€ sur 3 ans | Plafond de coût par cas, mesure dès le prototype, suivi par ticket et par agent | Thomas Nguyen |
| La qualité se dégrade : réouvertures en hausse, gain repris par les reprises | Coût par ticket au-dessus de la cible | Taux de réouverture en garde-fou ; aucun objectif atteint en dégradant un garde-fou | Sophie Lambert |

## 11. Modalités de mesure

| Indicateur | Définition | Source | Fréquence | Responsable |
| --- | --- | --- | --- | --- |
| Coût par ticket | Coût complet du domaine, hors coût récurrent de la solution, divisé par le nombre de tickets clos | Contrôle de gestion | Trimestrielle | Julien Faure |
| Gain d'efficacité capté | Écart de masse salariale et de sous-traitance du domaine par rapport à la référence, à volume comparable | Contrôle de gestion, DRH | Trimestrielle | Julien Faure |
| Churn annuel PME | Part des clients PME résiliés sur 12 mois glissants ; lecture par cohorte, selon qu'ils ont subi ou non un incident | Direction financière | Trimestrielle, concluante à 12 mois | Julien Faure |
| MTTR, FCR, taux de réouverture | Définitions du diagnostic, inchangées | Ticketing | Hebdomadaire | Sophie Lambert |
| NPS Entreprises | Baromètre clients | Baromètre | Semestrielle | Claire Besson |
| Coût d'inférence par ticket | Coût d'inférence total divisé par le nombre de tickets traités | Traces de la plateforme | Hebdomadaire | Thomas Nguyen |

**Jalons de mesure** : bilan du pilote au jalon G5 (S29), où le business case est rejoué avec les mesures réelles ; mesures à +3 et +6 mois après la généralisation ; churn à 12 mois ; cibles à 18 mois. Le COPIL prend acte de chaque mesure, puis le comité qui lui succédera.

**Méthode d'attribution** : pendant le pilote, comparaison du plateau de Nantes à sa propre référence et à un périmètre témoin sans le système, sur la même période. Après généralisation, comparaison à la référence signée, à volume et à mix de motifs comparables. Toutes les hypothèses de ce document sont inscrites au registre de valeur, avec leur propriétaire.
