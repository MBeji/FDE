---
id: rex-voxalis-sav-augmente
titre: "REX — SAV Augmenté chez un opérateur télécom"
resume: "Trente-neuf semaines pour reconstruire le SAV Entreprises d'un opérateur autour d'un système multi-agents : MTTR de 31 h à 13,2 h, FCR de 54 % à 73 %, mais un coût par ticket encore au-dessus de la cible à +3 mois."
type: rex
phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire, industrialiser, perenniser]
tags: [telecom, service-client, multi-agents, transfert]
secteur: "Télécoms"
date: "2026-10"
---

> [!NOTE]
> Ce REX est tiré du [cas fil rouge](/guides/cas-fil-rouge), fictif. Voxalis n'existe pas ; le client est nommé parce qu'il est fictif. Le texte sert de modèle de rédaction : un vrai REX est anonymisé et ne contient aucun chiffre permettant d'identifier le client.

## Contexte

Voxalis, opérateur télécom convergent, sert 38 000 PME. Son domaine Assistance & SAV Entreprises traitait 420 000 tickets par an avec 310 ETP, pour un coût complet de 17,2 M€, soit 41 € par ticket. Délai moyen de résolution (MTTR) : 31 h. Résolution au premier contact (FCR) : 54 %. Churn annuel PME : 11,5 %. La demande initiale : « déployer un chatbot pour le SAV ». L'organisation sortait de sept POC en deux ans, un seul en production, aucun mesuré.

## Ce que nous avons fait

- **Cadrer (S1-S2).** Refus du chatbot, reformulation : diviser par deux le délai de résolution des incidents PME et réduire le coût par ticket d'un tiers. Hypothèse posée au jour 3 : le délai vient des attentes et de la collecte, pas du traitement.
- **Diagnostiquer (S3-S6).** 22 entretiens, 3 jours sur le plateau de Nantes, 12 mois de tickets. Le MTTR se décomposait en 41 % d'attente N1-N2, 23 % de collecte dans 6 outils, 18 % d'attente client, 18 % de traitement effectif. 58 % des incidents relevaient de 12 motifs documentés.
- **Cibler (S7-S9).** 14 cas d'usage, 5 retenus sur un même flux. Business case validé par le directeur financier : 5,4 M€ de valeur annuelle en croisière, 3,1 M€ d'investissement, ROI de 85 % à 3 ans.
- **Réinventer (S10-S13).** Processus reconstruit en trois voies (autonome 35 %, assistée 45 %, experte 20 %), conseiller devenu superviseur de cas, engagement écrit d'aucune suppression de poste.
- **Concevoir (S14-S17).** Orchestrateur et cinq agents, passerelle MCP à neuf outils dont trois en écriture. Golden set de 600 cas annotés et 120 cas adverses prêt avant le premier prompt.
- **Construire (S18-S29).** Prototype sur un motif de bout en bout, puis pilote de 8 semaines à Nantes (18 conseillers, 9 400 tickets), dont 2 semaines en mode fantôme.
- **Industrialiser et pérenniser (S30-S39).** Trois vagues régionales, 190 conseillers formés, équipe AgentOps de 3 ETP, comité de gouvernance IA mensuel. Transfert achevé en S39.

## Résultats

| Indicateur | Référence | Pilote | +3 mois | Cible à 18 mois |
| --- | --- | --- | --- | --- |
| MTTR | 31 h | 14,5 h | 13,2 h | 12 h |
| FCR | 54 % | 71 % | 73 % | 75 % |
| Réouverture | 14 % | 8 % | 8 % | 7 % |
| Résolution sans humain | 0 % | 31 % | 33 % | 35 % |
| Coût par ticket | 41 € | — | 29 € | 26 € |
| NPS Entreprises | +8 | — | +22 | +30 |
| Churn PME | 11,5 % | — | non mesurable | 10,0 % |

Aucune action inappropriée en production. Coût d'inférence au pilote : 0,38 € par ticket.

## Ce qui a marché

- **La reformulation au cadrage.** La décomposition du MTTR a disqualifié le chatbot en une slide.
- **Les évaluations avant les agents.** Les seuils (qualification ≥ 95 %, zéro action inappropriée sur le jeu adverse) ont tranché les débats de conception.
- **L'autonomie par outil.** Agent Diagnostic en lecture seule, Résolution en L3 sur le seul catalogue à risque faible, Communication en L2 pour tout geste commercial. Le RSSI a validé parce que le périmètre était borné.
- **L'engagement sur l'emploi**, pris avec la DRH avant le pilote : 16 conseillers sur 18 utilisaient le poste de supervision chaque jour à S29.
- **L'équipe mixte**, qui a rendu le transfert crédible dès le début.

## Ce que nous ferions autrement

- **L'idempotence des écritures.** Deux incidents de messages clients envoyés en double, corrigés en S24. La cause : une reprise après erreur de l'orchestrateur rejouait l'appel à `client.envoyer_message` sans clé d'idempotence. Le jeu adverse testait les actions inappropriées, pas les reprises. Nous ajouterions désormais des cas de rejeu et de panne partielle au plan d'évaluation de tout outil qui écrit.
- **La captation du coût.** À +3 mois, 29 € par ticket contre 26 € visés. Les gains de temps sont là ; leur conversion en euros dépend du rythme des départs non remplacés et de la baisse de la sous-traitance, que nous avions modélisés trop linéairement. Nous construirions un calendrier de captation mois par mois avec la finance et la DRH dès la phase Cibler.
- **Le churn.** 1,6 M€ des 5,4 M€ reposent sur la rétention, non mesurable avant 12 mois. Nous aurions dû poser dès le cadrage un indicateur avancé suivi mensuellement (réclamations des PME à risque, par exemple) plutôt qu'un seul point de mesure lointain.

## À retenir

1. Une décomposition chiffrée du problème vaut plus que toute démonstration pour réorienter une demande.
2. Tout outil qui écrit doit être testé en rejeu et en reprise, pas seulement en cas adverses.
3. Le gain capté se planifie avec la finance et la DRH ; il ne suit pas mécaniquement le gain de temps.
4. Pour chaque bénéfice lent à mesurer, prévoir un indicateur avancé.
5. La mission était finie quand le client opérait seul, pas à la mise en production.

Voir aussi : [registre de valeur](/frameworks/registre-de-valeur), [mode fantôme](/savoir/mode-fantome), [REX de mission](/templates/rex-mission).
