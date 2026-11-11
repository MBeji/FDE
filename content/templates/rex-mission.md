---
id: rex-mission
titre: "Retour d'expérience de mission"
resume: "La trame du bilan de fin de mission : ce que nous avons fait, ce qui a marché, ce que nous ferions autrement et ce que le pool doit en retenir, prête à être anonymisée puis publiée."
phase: perenniser
type: trame
format: document
effort: "1 jour, dont 1 h de séance en équipe"
tags: [capitalisation, rex, apprentissage]
frameworks: [pyramide-scqa, registre-de-valeur]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Transformer une mission en savoir utilisable par le pool. Un REX utile est précis (des décisions, des chiffres, des erreurs) et honnête : la section « ce que nous ferions autrement » est celle que les collègues lisent d'abord.

## Quand l'utiliser

Dans les trois semaines qui suivent la fin de la mission, à partir du journal tenu chaque semaine ; à compléter après la mesure à +3 mois. Une mission arrêtée en cours de route mérite aussi son REX. Démarche complète : [Capitaliser](/guides/capitaliser).

## Comment le remplir

1. Réunir l'équipe une heure, avec un pair extérieur : chronologie, décisions clés, surprises.
2. Chiffrer les résultats contre la référence, date de mesure à l'appui.
3. Écrire chaque enseignement en trois temps : ce qui s'est passé, l'effet, ce que nous recommandons.
4. Lister les contributions au portail et ouvrir les pull requests.
5. **Anonymiser avant toute publication dans le savoir terrain** : ni nom de client, ni nom de personne, ni chiffre, lieu ou date permettant de l'identifier. La version nominative reste dans l'espace mission. Niveau attendu : [cet exemple](/savoir/rex-exemple-assurance-sinistres).

## Critères de qualité

- [ ] Les résultats sont chiffrés contre la référence, avec leur date de mesure.
- [ ] « Ce que nous ferions autrement » compte au moins trois points, dont un inconfortable.
- [ ] Chaque enseignement peut changer une décision sur une autre mission.
- [ ] Les contributions au portail sont listées, avec un auteur et un statut.
- [ ] La version à publier est anonymisée et validée par le lead de la mission.

<!-- section: template -->
# Retour d'expérience de mission — {{client}}

> [!IMPORTANT]
> Version interne et nominative : elle reste dans l'espace mission. Seule une version anonymisée selon la dernière section est proposée au savoir terrain.

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Secteur, pour la version publiée** | _[À gros grain : « assurance », « télécommunications »]_ |
| **Période** | _[Dates, durée en semaines]_ |
| **Équipe** | _[Équipe FDE et équipe du client détachée]_ |
| **Rédacteur** | {{auteur}} |
| **Version** | {{date}} |
| **Statut** | _[Version interne / Version anonymisée publiée le …]_ |

## Contexte

_[Cinq lignes : le client, le domaine, le problème tel qu'il était posé, le point de départ chiffré, l'historique qui pesait sur la mission.]_

## Ce que nous avons fait

| Phase | Semaines | Ce que nous avons fait | Décision qui a compté |
| --- | --- | --- | --- |
| _[Cadrer]_ | | | _[Celle qui, prise autrement, aurait changé la suite]_ |

## Résultats

| Indicateur | Référence | _[Pilote]_ | _[Dernière mesure, date]_ | Cible |
| --- | --- | --- | --- | --- |
| | | | | |

- **Valeur** : _[Gain capté contre gain prévu ; projection ; ce qui n'est pas encore mesurable.]_
- **Confiance** : _[Incidents, actions inappropriées, écarts de conformité.]_
- **Adoption** : _[Usage réel constaté.]_
- **Autonomie du client** : _[Ce que l'équipe du client fait seule, épreuves à l'appui.]_

## Ce qui a marché

_[Trois à cinq pratiques. Une pratique vue une fois vit ici ; vue deux fois, elle devient un pattern.]_

| Pratique | Ce qui s'est passé | Effet constaté | À reproduire quand |
| --- | --- | --- | --- |
| | | | |

## Ce que nous ferions autrement

_[Trois à cinq points. Écrire ce que l'équipe a réellement payé, pas ce qui se raconte bien.]_

| Ce qui s'est passé | Ce que cela a coûté | Ce que nous ferions |
| --- | --- | --- |
| | | _[Une action précise, à un moment précis de la méthode]_ |

## À retenir

_[Trois à cinq phrases complètes. Chacune doit pouvoir être citée seule.]_

## Contributions au portail

| Type | Page | Contribution | Auteur | Statut |
| --- | --- | --- | --- | --- |
| _[REX / Pattern / Anti-pattern / Framework / Template]_ | _[Lien vers la page créée ou modifiée]_ | | | _[Proposé / Intégré / Publié]_ |

## Anonymisation avant publication

| Élément de la version interne | Dans la version publiée |
| --- | --- |
| Nom du client, des personnes, des produits internes | _[Secteur à gros grain, rôles]_ |
| Chiffres exacts : clients, effectifs, revenus, volumes | _[Ratios et ordres de grandeur]_ |
| Lieux et dates précises | _[« Un site régional », date au format AAAA-MM]_ |
| Extraits de prompts, de tickets, de données | _[Exemples réécrits]_ |

- [ ] Clause de confidentialité du contrat relue.
- [ ] Aucune ré-identification possible par recoupement du secteur, de la taille, du lieu et de la date.
- [ ] Texte validé par le lead de la mission.
- [ ] Pull request ouverte, deux relecteurs dont un extérieur au sujet.

<!-- section: exemple -->
# Retour d'expérience de mission — Voxalis

> [!NOTE]
> Version interne et nominative. Voxalis est un client fictif, créé pour le portail : c'est ce qui permet de le détailler ici comme dans le [REX publié](/savoir/rex-voxalis-sav-augmente). Pour une mission réelle, seule une version anonymisée selon la dernière section quitte l'espace mission.

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Secteur, pour la version publiée** | Télécommunications |
| **Période** | Du 12 janvier au 9 octobre 2026, 39 semaines |
| **Équipe** | Yasmine (lead), Léo et Inès (ingénierie agents), Hugo (stratégie et produit), un expert conduite du changement à mi-temps ; six personnes de Voxalis détachées |
| **Rédacteur** | Yasmine, avec toute l'équipe ; séance de REX du 20 octobre 2026 en présence d'un pair extérieur à la mission |
| **Version** | 23 octobre 2026, complétée le 22 janvier 2027 après la mesure à +3 mois |
| **Statut** | Version interne |

## Contexte

Voxalis, opérateur télécom convergent, sert 38 000 PME. Son SAV Entreprises traite 420 000 tickets par an avec 310 ETP, pour 17,2 M€. Un incident y est résolu en 31 heures en moyenne, et 11,5 % des PME résilient chaque année. La demande initiale tenait en une ligne : « déployer un chatbot pour le SAV ». L'entreprise sortait de sept POC en deux ans, dont un seul en production et aucun mesuré ; sa maturité AI-Native était évaluée à 2,1 sur 5.

## Ce que nous avons fait

| Phase | Semaines | Ce que nous avons fait | Décision qui a compté |
| --- | --- | --- | --- |
| Cadrer | S1 à S2 | Demande reformulée en problème : diviser par deux le délai de résolution, réduire d'un tiers le coût par ticket | Signer trois critères d'arrêt avec la charte |
| Diagnostiquer | S3 à S6 | 22 entretiens, trois jours d'observation à Nantes, 12 mois de tickets analysés | Décomposer le délai avant de parler de solution : 41 % d'attente entre N1 et N2, 18 % de traitement effectif |
| Cibler | S7 à S9 | 14 cas d'usage identifiés, 5 retenus sur un même flux ; business case validé par la finance | Retenir une captation prudente de 60 % ; écarter le voicebot |
| Réinventer | S10 à S13 | Processus reconstruit en trois voies ; métier de superviseur de cas | Obtenir l'engagement de la direction : aucune suppression de poste |
| Concevoir | S14 à S17 | Six agents, passerelle MCP de neuf outils, golden set de 600 cas et 120 cas adverses | Séparer diagnostic et résolution après mesure : 91 % de justesse contre 84 % |
| Construire | S18 à S29 | Prototype sur un motif, puis pilote de 8 semaines à Nantes, dont deux en mode fantôme | Ouvrir la voie autonome motif par motif : 4, puis 9, puis 12 |
| Industrialiser | S30 à S39 | Trois vagues régionales, 190 conseillers formés, équipe AgentOps, registre des agents, comité de gouvernance IA | Lancer la vague 1 sous cinq réserves datées plutôt que d'attendre |
| Pérenniser | À partir de S36 | Transfert constaté par des épreuves ; mesure à +3 mois | Retirer nos droits d'écriture dès le début de la vague 3 |

## Résultats

| Indicateur | Référence | Pilote, S29 | +3 mois, janvier 2027 | Cible à 18 mois |
| --- | --- | --- | --- | --- |
| Délai moyen de résolution (MTTR) | 31 h | 14,5 h | 13,2 h | 12 h |
| Résolution au premier contact (FCR) | 54 % | 71 % | 73 % | 75 % |
| Taux de réouverture | 14 % | 8 % | 8 % | 7 % |
| Résolution sans intervention humaine | 0 % | 31 % | 33 % | 35 % |
| Coût par ticket | 41 € | Non mesuré | 29 € | 26 € |
| NPS Entreprises | +8 | Non mesuré | +22 | +30 |
| Churn annuel PME | 11,5 % | Non mesuré | Trop tôt pour conclure | 10,0 % |

- **Valeur** : à +3 mois, 2,8 M€ de gains d'efficacité captés en rythme annuel, pour 3,8 M€ visés en régime de croisière. Projection à trois ans : 4,7 M€ de gain net contre 5,0 M€ au business case, retour sur investissement au 22e mois au lieu du 21e. Les 1,6 M€ attendus de la rétention ne seront mesurables qu'en octobre 2027.
- **Confiance** : aucune action inappropriée en production. Deux incidents mineurs en S24, des messages envoyés en double, corrigés dans la semaine.
- **Adoption** : 16 conseillers sur 18 en usage quotidien à la fin du pilote ; 190 conseillers formés au rythme des vagues.
- **Autonomie du client** : transfert achevé en S39. L'équipe Voxalis a conduit seule un incident réel, ouvert seule un treizième motif et tenu seule son comité de gouvernance IA.

## Ce qui a marché

| Pratique | Ce qui s'est passé | Effet constaté | À reproduire quand |
| --- | --- | --- | --- |
| Refuser la solution, signer le problème | Le chatbot demandé agissait sur la prise de contact. L'hypothèse posée au troisième jour plaçait le délai ailleurs | Le diagnostic l'a confirmée : 64 % du délai venait des attentes et de la collecte manuelle. La mission a traité le bon problème | La demande nomme un outil |
| Golden set avant le premier prompt | 600 cas annotés par les experts N2 pendant la conception | Il a tranché le découpage en agents, fondé le feu vert du pilote et fait des experts les garants du système plutôt que ses critiques | Toujours ; négocier le temps d'expert dès la charte |
| Mode fantôme, puis ouverture motif par motif | Deux semaines sans action réelle ; voie autonome ouverte sur 4 motifs, puis 9, puis 12, chaque fois sur preuves | Aucune action inappropriée ; le RSSI et les plateaux ont accordé leur confiance sur un historique | Un agent écrit dans un système ou vers un client |
| Engagement social avant la conception | La direction s'est engagée sur l'emploi en phase Réinventer, avec les représentants du personnel | Les conseillers ont jugé l'outil, pas leur avenir : 16 sur 18 l'utilisaient chaque jour à la fin du pilote | Le business case compte un gain d'efficacité |
| Les vagues comme dispositif de mesure et de transfert | Trois vagues ; les régions non encore déployées ont servi de témoin, et chaque vague a correspondu à un jalon d'autonomie | Attribution des gains acceptée sans débat par la finance ; à la vague 3, l'équipe Voxalis menait seule | La généralisation peut être découpée |

## Ce que nous ferions autrement

| Ce qui s'est passé | Ce que cela a coûté | Ce que nous ferions |
| --- | --- | --- |
| La base de connaissances comptait 35 % d'articles obsolètes. Nous le savions en S5 ; le chantier n'a commencé qu'à la conception | Au prototype, 14 des 60 échecs analysés venaient d'un article périmé. La parade a été un filtre sur les articles validés depuis moins de 12 mois, pas un assainissement | Ouvrir le chantier documentaire dès le diagnostic, avec un propriétaire métier et une échéance |
| L'idempotence était spécifiée pour l'outil d'action sur le réseau, jugé risqué, pas pour l'envoi de messages, jugé anodin | Deux messages en double devant des clients, pendant la première semaine d'actions réelles | Rendre l'idempotence obligatoire pour tout outil d'écriture et tester les rejeux avant le pilote |
| Six personnes détachées construisaient avec nous depuis S3, mais l'équipe AgentOps n'a existé qu'en S30, et son troisième membre est arrivé en S32 | Transfert de l'exploitation comprimé sur dix semaines ; un membre encore au niveau 2 sur deux compétences à la clôture ; fin de mission prononcée avec une réserve | Faire nommer l'équipe d'exploitation au jalon G4 et la mettre d'astreinte en binôme dès le pilote |
| Les objectifs des responsables d'équipe sont restés exprimés en durée moyenne de traitement jusqu'à la vague 2 | Pendant trois semaines, l'encadrement de l'Ouest a piloté selon deux logiques contradictoires ; une réserve à la revue de préparation | Traiter les objectifs de l'encadrement en phase Réinventer, avec le métier cible |
| Le COPIL a longtemps lu « de 41 € à 26 € par ticket » comme une économie de trésorerie | À +3 mois, il a fallu expliquer que 29 € par ticket représentaient 2,8 M€ captés, pas 5 M€ | Suivre le taux de captation dès le pilote et présenter potentiel et capté sur deux lignes à chaque COPIL |

## À retenir

1. Le délai était dans les files d'attente entre niveaux de support, pas dans le traitement : décomposer l'indicateur avant de concevoir quoi que ce soit.
2. Le golden set est l'actif qui reste : il a servi à concevoir, à décider, à convaincre, puis à transférer.
3. L'autonomie s'accorde motif par motif, sur preuves. Un élargissement refusé pour 0,8 point sous le seuil montre que la gouvernance fonctionne.
4. Le transfert de l'exploitation commence au pilote, pas à la généralisation.
5. Un gain de capacité n'est pas un gain financier : la captation se pilote comme un indicateur à part.

## Contributions au portail

| Type | Page | Contribution | Auteur | Statut |
| --- | --- | --- | --- | --- |
| REX | [REX Voxalis](/savoir/rex-voxalis-sav-augmente) | Version de ce document pour le savoir terrain | Yasmine | Publié |
| Pattern | [Le mode fantôme](/savoir/mode-fantome) | Exemple chiffré : deux semaines, critères de sortie, ouverture sur 4 motifs | Léo | Proposé |
| Pattern | [L'autonomie progressive](/savoir/autonomie-progressive) | Règle d'ouverture d'un motif et exemple d'élargissement refusé | Inès | Proposé |
| Anti-pattern | [Dépendance au FDE](/savoir/dependance-fde) | Symptôme ajouté : équipe d'exploitation non nommée à la fin de la conception | Yasmine | Proposé |
| Framework | [Faut-il un agent ?](/frameworks/faut-il-un-agent) | Exemple chiffré de la séparation entre diagnostic et résolution | Léo | Intégré |
| Template | [Revue des données et du SI](/templates/revue-donnees-si) | Ligne de contrôle sur l'obsolescence de la base documentaire | Hugo | Proposé |
| Template | [Spécification d'outil](/templates/specification-outil) | Champ « idempotence » obligatoire pour tout outil d'écriture | Inès | Intégré |
| Template | [Revue de préparation](/templates/checklist-mise-en-production) | Point 6.2 : objectifs de l'encadrement cohérents avec le nouveau processus | Expert conduite du changement | Intégré |
| Template | [Runbook d'exploitation](/templates/runbook-agent) | Règle : ne jamais relancer en masse des actions restées en attente | Inès | Intégré |
| Template | [Tableau de bord de valeur](/templates/tableau-de-bord-valeur) | Section « du potentiel au capté », avec le taux de captation constaté | Hugo | Intégré |
| Template | [Plan de transfert](/templates/plan-transfert) | Compteur de sollicitations ; retrait des droits d'écriture comme épreuve | Yasmine | Intégré |

## Anonymisation avant publication

Table appliquée à une mission réelle ; elle montre ce que deviendrait ce document.

| Élément de la version interne | Dans la version publiée |
| --- | --- |
| « Voxalis », « SAV Augmenté » | « Un opérateur télécom européen », « le système » |
| Claire Besson, Sophie Lambert, Nadia Cherif | « La sponsor », « la propriétaire du processus », « la responsable du plateau pilote » |
| 38 000 PME, 420 000 tickets, 310 ETP, 17,2 M€ | « Plusieurs dizaines de milliers de clients professionnels », « plusieurs centaines de milliers de tickets par an », ratios |
| MTTR de 31 h à 13,2 h ; coût par ticket de 41 € à 29 € | « Délai de résolution divisé par plus de deux » ; « coût par ticket réduit de près de 30 % » |
| Plateau de Nantes ; du 12 janvier au 9 octobre 2026 | « Un plateau régional » ; date au format 2026-10 |
| Noms des outils, extraits de tickets et de prompts | Catégories d'outils, exemples réécrits |

- [x] Clause de confidentialité du contrat relue.
- [x] Aucune ré-identification possible par recoupement : vérifié par le pair extérieur.
- [x] Texte validé par Yasmine, lead de la mission.
- [x] Pull request ouverte, deux relecteurs dont un extérieur au sujet.
