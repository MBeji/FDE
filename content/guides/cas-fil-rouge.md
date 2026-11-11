---
id: cas-fil-rouge
titre: "Cas fil rouge : la mission Voxalis"
resume: "Une mission complète racontée de bout en bout, du cadrage à la mesure de la valeur. Tous les exemples de livrables du portail en sont tirés."
phases: [cadrer, diagnostiquer, cibler, reinventer, concevoir, construire, industrialiser, perenniser]
duree: "15 min"
niveau: fondamental
tags: [exemple, telecom, service-client, multi-agents]
frameworks: [approche-par-domaine, reinvention-zero-base, niveaux-autonomie, topologies-multi-agents, registre-de-valeur]
templates: [charte-de-mission, diagnostic-maturite, portefeuille-priorise, business-case, processus-cible-ai-native, fiche-agent, dossier-architecture-multi-agents, plan-evaluation, plan-pilote, tableau-de-bord-valeur]
---

> [!NOTE]
> Voxalis est un client fictif. Le cas est construit pour être réaliste et cohérent : chaque exemple de livrable du portail reprend les mêmes chiffres, les mêmes acteurs et le même calendrier. Lisez-le une fois en entier, puis revenez-y phase par phase.

## Le client et son problème

Voxalis est un opérateur télécom convergent européen : 6,5 millions de clients, 4 800 collaborateurs, 2,1 Md€ de chiffre d'affaires. Son marché Entreprises sert 38 000 PME, pour 240 M€ de revenus récurrents.

Le domaine concerné est **l'Assistance & SAV Entreprises** : support technique et traitement des incidents des clients PME (accès internet, téléphonie d'entreprise, liaisons, flottes mobiles). Le constat de départ tient en une phrase de la sponsor : « Nos clients PME nous quittent parce qu'on met un jour et demi à réparer ce qu'un bon technicien règle en vingt minutes. »

| Indicateur (année de référence) | Valeur |
| --- | --- |
| Tickets par an | 420 000 (62 % incidents techniques, 23 % demandes de modification, 15 % réclamations et facturation) |
| Effectif du domaine | 310 ETP (190 conseillers N1, 85 experts N2, 35 back-office) |
| Coût complet du domaine | 17,2 M€ par an, soit 41 € par ticket |
| Délai moyen de résolution (MTTR) | 31 h |
| Résolution au premier contact (FCR) | 54 % |
| Taux de réouverture | 14 % |
| NPS Entreprises | +8 |
| Churn annuel PME | 11,5 % |

## Les acteurs

| Rôle | Personne |
| --- | --- |
| Sponsor | Claire Besson, Directrice générale adjointe Marché Entreprises |
| Propriétaire du processus | Sophie Lambert, Directrice Relation Client Entreprises |
| DSI | Karim Haddad |
| Responsable Data & IA | Thomas Nguyen |
| RSSI | Marc Dubois |
| DPO | Élise Martin |
| DRH | Isabelle Moreau |
| Directeur financier | Julien Faure |
| Responsable du plateau pilote (Nantes) | Nadia Cherif |
| Équipe FDE | Yasmine (lead), Léo et Inès (ingénierie agents), Hugo (stratégie et produit), un expert conduite du changement à mi-temps |
| Équipe Voxalis détachée | 2 experts N2 à mi-temps, 1 architecte SI, 1 data engineer, 1 product owner, 1 référent sécurité |

## Le calendrier

Mission de 39 semaines, démarrée le 12 janvier 2026. COPIL mensuel présidé par Claire Besson.

| Phase | Semaines | Jalon de sortie |
| --- | --- | --- |
| 0. Cadrer | S1 à S2 | Charte signée, hypothèse de réponse initiale partagée |
| 1. Diagnostiquer | S3 à S6 | Diagnostic validé en COPIL |
| 2. Cibler | S7 à S9 | Portefeuille et business case arbitrés |
| 3. Réinventer | S10 à S13 | Processus cible et modèle opérationnel validés |
| 4. Concevoir | S14 à S17 | Architecture et plan d'évaluation approuvés |
| 5. Construire | S18 à S29 | Prototype (S18 à S21), puis pilote de 8 semaines (S22 à S29) |
| 6. Industrialiser | S30 à S39 | Généralisation en 3 vagues régionales |
| 7. Pérenniser | à partir de S36 | Transfert achevé en S39, mesures à +3 et +6 mois |

## Phase 0 — Cadrer (S1 à S2)

L'équipe refuse la demande initiale (« déployer un chatbot pour le SAV ») et la reformule en problème métier : **comment diviser par deux le délai de résolution des incidents PME tout en réduisant le coût par ticket d'un tiers ?** L'hypothèse de réponse initiale est posée dès le jour 3 : l'essentiel du délai vient des attentes entre niveaux de support et de la collecte manuelle d'informations, pas du temps de traitement. La [charte de mission](/templates/charte-de-mission) fixe l'ambition, le périmètre (segment PME, incidents techniques d'abord), la gouvernance et trois critères d'arrêt.

## Phase 1 — Diagnostiquer (S3 à S6)

Vingt-deux entretiens, trois jours d'observation sur le plateau de Nantes, analyse de 12 mois de tickets.

- **Décomposition du MTTR de 31 h** : 41 % d'attente entre N1 et N2, 23 % de collecte d'informations et de diagnostic manuel dans 6 outils, 18 % d'attente client, 18 % de traitement effectif.
- **Concentration** : 58 % des incidents relèvent de 12 motifs récurrents dont la résolution est documentée.
- **Connaissance** : 2 300 articles dans la base, dont 35 % obsolètes.
- **SI** : 6 applications (CRM et ticketing, supervision réseau, inventaire du parc, test de ligne, facturation, base de connaissances), dont 4 exposent des API ; aucun bus d'événements.
- **Historique IA** : 7 POC en deux ans, un seul en production (une FAQ grand public), aucun mesuré.

Le [diagnostic de maturité](/templates/diagnostic-maturite) donne une moyenne de 2,1 sur 5, niveau « Expérimentateur ».

| Dimension | Score |
| --- | --- |
| Vision & stratégie | 2,5 |
| Cas d'usage & valeur | 2,0 |
| Données & connaissances | 2,5 |
| Technologie & plateforme | 3,0 |
| Talents & culture | 2,0 |
| Modèle opérationnel & gouvernance | 1,5 |
| Maturité agentique | 1,5 |

## Phase 2 — Cibler (S7 à S9)

Quatorze cas d'usage identifiés dans le domaine, cinq retenus après notation [valeur × faisabilité](/frameworks/matrice-valeur-faisabilite) sur 5.

| Cas d'usage retenu | Valeur | Faisabilité | Rôle dans le portefeuille |
| --- | --- | --- | --- |
| Qualification et routage automatiques des tickets | 4,2 | 4,5 | Gain rapide |
| Diagnostic technique automatisé | 4,6 | 3,6 | Cœur du dispositif |
| Résolution autonome des 12 motifs récurrents | 4,8 | 3,0 | Pari structurant |
| Communication proactive vers le client | 3,6 | 4,2 | Gain rapide |
| Assistant de l'expert N2 (recherche et synthèse de dossier) | 3,4 | 4,4 | Gain rapide |

Écartés ou différés : détection prédictive des pannes (valeur 4,4 mais faisabilité 2,0, données insuffisantes), voicebot de premier niveau (3,0 et 2,4), génération automatique d'avoirs (2,8 et 2,6, risque financier).

Le [business case](/templates/business-case), validé par Julien Faure, retient des hypothèses prudentes.

| Poste | Montant |
| --- | --- |
| Gain d'efficacité potentiel en régime de croisière | (41 € − 26 €) × 420 000 tickets = 6,3 M€ par an |
| Gain d'efficacité capté (hypothèse 60 %) | 3,8 M€ par an |
| Rétention : churn de 11,5 % à 10,0 % sur 240 M€, marge de 45 % | 1,6 M€ de marge par an |
| **Valeur annuelle en régime de croisière** | **5,4 M€** |
| Investissement initial | 3,1 M€ (équipe mixte 1,9 M€, plateforme et intégration 0,7 M€, changement et formation 0,5 M€) |
| Coût récurrent | 1,2 M€ par an (inférence et plateforme 0,55 M€, équipe AgentOps de 3 ETP 0,35 M€, maintenance évolutive 0,3 M€) |
| Bénéfices sur 3 ans | 1,2 M€ + 4,3 M€ + 5,4 M€ = 10,9 M€ |
| Coûts sur 3 ans | 3,5 M€ + 1,2 M€ + 1,2 M€ = 5,9 M€ |
| **Gain net et ROI à 3 ans** | **5,0 M€, soit 85 %** |
| Retour sur investissement | 21e mois |

## Phase 3 — Réinventer (S10 à S13)

Le processus existant compte 9 étapes, 4 passages de relais et 6 outils. L'équipe ne l'automatise pas : elle le [reconstruit à partir du résultat attendu](/frameworks/reinvention-zero-base), « un client rétabli et informé ». Le [processus cible](/templates/processus-cible-ai-native) organise le flux en trois voies.

| Voie | Part des tickets | Principe |
| --- | --- | --- |
| Autonome | 35 % | Motifs récurrents à risque faible : les agents résolvent, l'humain contrôle par échantillonnage |
| Assistée | 45 % | Les agents qualifient, diagnostiquent et proposent ; le conseiller décide et valide |
| Experte | 20 % | L'expert N2 mène le cas, les agents préparent le dossier et exécutent à la demande |

Le métier de conseiller évolue vers celui de **superviseur de cas**. Engagement pris avec Isabelle Moreau et les représentants du personnel : aucune suppression de poste, les gains sont captés par le non-remplacement des départs et la baisse de la sous-traitance de débordement, et une partie de la capacité libérée est réaffectée à l'accompagnement proactif des clients.

## Phase 4 — Concevoir (S14 à S17)

Le système, baptisé **SAV Augmenté**, suit une [topologie à superviseur](/frameworks/topologies-multi-agents) : un orchestrateur et cinq agents spécialisés.

| Agent | Mission | Niveau d'autonomie |
| --- | --- | --- |
| Orchestrateur de cas | Tient l'état du cas, choisit la voie, déclenche les escalades | L3 |
| Agent Qualification | Classe le ticket, extrait les informations, enrichit depuis le CRM | L4, contrôle par échantillonnage |
| Agent Diagnostic | Interroge supervision, tests de ligne et inventaire, corrèle avec les incidents connus | L3, lecture seule |
| Agent Résolution | Exécute les actions du catalogue de remédiation | L3 sur le catalogue à risque faible, L2 au-delà (approbation humaine) |
| Agent Communication | Informe le client à chaque étape | L3 pour les messages de statut, L2 pour tout geste commercial |
| Agent Qualité | Contrôle chaque cas clos, alimente les évaluations et la base de connaissances | L3 |

Les agents accèdent au SI par une passerelle MCP qui expose neuf outils : `crm.lire_ticket`, `crm.mettre_a_jour_ticket`, `supervision.etat_service`, `ligne.lancer_test`, `inventaire.lire_parc`, `incidents.rechercher_connus`, `reseau.executer_action`, `kb.rechercher`, `client.envoyer_message`. Seuls `crm.mettre_a_jour_ticket`, `reseau.executer_action` et `client.envoyer_message` écrivent.

Le [plan d'évaluation](/templates/plan-evaluation) repose sur un golden set de 600 cas historiques annotés par les experts N2, plus 120 cas adverses.

| Critère | Seuil de passage |
| --- | --- |
| Exactitude de la qualification | ≥ 95 % |
| Justesse du diagnostic | ≥ 90 % |
| Actions inappropriées sur le jeu adverse | 0 |
| Conformité des messages client | ≥ 98 % |

## Phase 5 — Construire (S18 à S29)

Prototype en 4 semaines sur une tranche verticale (un motif, « perte de synchronisation de l'accès », de bout en bout), puis [pilote](/templates/plan-pilote) de 8 semaines sur le plateau de Nantes : 18 conseillers, segment PME Ouest, 9 400 tickets. Deux semaines en mode fantôme avant toute action réelle.

| Indicateur | Référence | Pilote |
| --- | --- | --- |
| MTTR | 31 h | 14,5 h |
| FCR | 54 % | 71 % |
| Tickets résolus sans intervention humaine | 0 % | 31 % |
| Taux de réouverture | 14 % | 8 % |
| Satisfaction client (CSAT sur 5) | 3,6 | 4,3 |
| Erreur de qualification | 9 % (manuel) | 3,8 % |
| Coût d'inférence par ticket | sans objet | 0,38 € |

Aucune action inappropriée en production. Deux incidents mineurs (messages envoyés en double) corrigés en S24. À S29, 16 conseillers sur 18 utilisent le poste de supervision chaque jour.

## Phase 6 — Industrialiser (S30 à S39)

Généralisation en trois vagues : Ouest (S30 à S32), Nord et Est (S33 à S35), Île-de-France et Sud (S36 à S39). 190 conseillers formés. Mise en place d'une équipe AgentOps de 3 ETP, d'un registre des agents et d'un comité de gouvernance IA mensuel coprésidé par Sophie Lambert et Karim Haddad.

## Phase 7 — Pérenniser (à partir de S36)

Transfert achevé en S39 : l'équipe Voxalis opère, évalue et fait évoluer les agents seule. Mesure à +3 mois après généralisation, suivie dans le [tableau de bord de valeur](/templates/tableau-de-bord-valeur).

| Indicateur | Référence | Cible à 18 mois | Mesuré à +3 mois |
| --- | --- | --- | --- |
| MTTR | 31 h | 12 h | 13,2 h |
| FCR | 54 % | 75 % | 73 % |
| Taux de réouverture | 14 % | 7 % | 8 % |
| Coût par ticket | 41 € | 26 € | 29 € |
| Résolution sans intervention humaine | 0 % | 35 % | 33 % |
| NPS Entreprises | +8 | +30 | +22 |
| Churn annuel PME | 11,5 % | 10,0 % | Trop tôt pour conclure, mesure à 12 mois |

## Ce qu'il faut retenir

1. **Le problème a été reformulé avant d'être traité.** La demande parlait de chatbot, la valeur était dans les files d'attente internes.
2. **Un domaine, pas une liste de cas d'usage.** Cinq cas d'usage qui se renforcent sur un même flux valent plus que quinze dispersés.
3. **Le processus a été reconstruit, pas automatisé.** Les trois voies n'existaient pas dans l'organisation de départ.
4. **Les évaluations ont précédé les agents.** Le golden set était prêt avant la première ligne de prompt.
5. **L'autonomie s'est gagnée.** Mode fantôme, puis catalogue d'actions restreint, puis élargissement sur preuves.
6. **La valeur a été mesurée contre une référence signée par la finance**, pas déclarée.
7. **Le client est autonome.** Le critère de fin de mission était le transfert, pas la mise en production.
