---
id: checklist-securite-conformite
titre: "Checklist sécurité et conformité"
resume: "La revue systématique d'un système d'agents avant construction : données, identités, secrets, outils en écriture, injection, journalisation, fournisseurs, RGPD, EU AI Act et continuité. Statut, preuve et validateur par ligne, pour le RSSI, le DPO et le juridique du client."
phase: concevoir
type: checklist
format: tableau
effort: "1 jour de préparation, puis 2 h de revue avec le RSSI et le DPO"
tags: [securite, conformite, rgpd, eu-ai-act]
frameworks: [securite-agents, garde-fous, eu-ai-act, gouvernance-ia, ia-responsable]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un agent qui lit des données client et agit dans le SI cumule les risques d'une application, d'un utilisateur privilégié et d'un sous-traitant. Cette checklist couvre les points sur lesquels un projet d'agents se fait bloquer, ou pire, ne se fait pas bloquer : données, droits, outils en écriture, [injection](/frameworks/securite-agents), traçabilité, fournisseurs, RGPD et [EU AI Act](/frameworks/eu-ai-act). Chaque ligne exige une preuve, pas une déclaration.

> [!IMPORTANT]
> Le FDE prépare et documente ; il ne valide pas. La validation appartient au RSSI, au DPO et au juridique du client. Une ligne sans validateur nommé n'est pas conforme.

## Quand l'utiliser

En fin de conception, avant la construction : c'est une condition du jalon G4. Revue à nouveau avant tout passage en production et à chaque nouvel outil en écriture. Elle complète [l'analyse de risques de l'agent](/templates/analyse-risques-agent).

## Comment le remplir

1. Partir des [fiches agents](/templates/fiche-agent) et de la [spécification des outils](/templates/specification-outil).
2. Pour chaque ligne, joindre la preuve : document, configuration, résultat de test.
3. Statuer : conforme, conforme sous condition (avec échéance), non conforme, sans objet.
4. Faire signer chaque domaine par son validateur.

## Critères de qualité

- [ ] Chaque ligne a une preuve vérifiable et un validateur nommé.
- [ ] Chaque outil en écriture a une règle d'approbation testée.
- [ ] L'injection est testée sur un jeu adverse, pas seulement décrite.
- [ ] La qualification EU AI Act est écrite et confirmée par le juridique.
- [ ] Les conditions ont une échéance et un responsable.

<!-- section: template -->
# Checklist sécurité et conformité — {{client}}, _[Nom du système]_

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Revue** | _[Fin de conception / Avant production / Nouvel outil]_ du {{date}} |
| **Préparée par** | {{auteur}} |
| **Validateurs** | _[RSSI, DPO, juridique : noms]_ |

**Statuts** : Conforme / Conforme sous condition / Non conforme / Sans objet.

> [!IMPORTANT]
> Ce document prépare la décision. La validation appartient au RSSI, au DPO et au juridique de {{client}}.

## 1. Données

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| D1 | Classification de chaque source de données utilisée par les agents | | _[Inventaire des sources]_ | _[RSSI]_ |
| D2 | Minimisation : chaque agent ne reçoit que les champs nécessaires à sa mission | | | |
| D3 | Résidence : hébergement et traitement dans la zone exigée | | | |
| D4 | Durées de conservation des traces, mémoires et jeux d'évaluation | | | |
| D5 | Jeux de test et d'évaluation : origine, anonymisation, autorisation | | | |

## 2. Identités et droits des agents

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| I1 | Une identité technique distincte par agent, jamais celle d'un utilisateur | | | |
| I2 | Moindre privilège : droits limités aux outils et aux périmètres de données de la fiche agent | | | |
| I3 | Filtrage par client ou par dossier appliqué côté outil, pas dans le prompt | | | |
| I4 | Revue périodique des droits | | | |

## 3. Secrets

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| S1 | Aucun secret dans les prompts, le code ou les traces | | | |
| S2 | Secrets dans un coffre, rotation définie | | | |

## 4. Outils en écriture

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| W1 | Liste exhaustive des outils qui écrivent | | | |
| W2 | Règle d'approbation par outil et par situation, appliquée par le code | | | |
| W3 | Plafonds : nombre d'actions, montants, périmètre | | | |
| W4 | Réversibilité ou procédure de correction de chaque action | | | |

## 5. Entrées non fiables et injection

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| E1 | Inventaire des entrées non fiables (textes clients, documents, réponses d'outils) | | | |
| E2 | Séparation données et instructions dans le contexte | | | |
| E3 | Validation des sorties par schéma avant tout appel d'outil | | | |
| E4 | Jeu adverse exécuté, avec résultat | | | |

## 6. Journalisation et traçabilité

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| J1 | Trace de bout en bout : entrées, appels d'outils, sorties, décisions humaines | | | |
| J2 | Masquage des données personnelles dans les traces | | | |
| J3 | Accès aux traces restreint et journalisé | | | |

## 7. Fournisseurs de modèles et sous-traitance

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| F1 | Contrat avec le fournisseur : absence d'usage des données pour l'entraînement, localisation, sous-traitants ultérieurs | | | _[Juridique]_ |
| F2 | Clauses de sous-traitance des données personnelles | | | _[DPO]_ |
| F3 | Plan de sortie : changement de fournisseur possible sans refonte | | | |

## 8. RGPD

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| R1 | Traitement inscrit au registre, finalité décrite | | | _[DPO]_ |
| R2 | Base légale identifiée | | | _[DPO]_ |
| R3 | Information des personnes concernées | | | _[DPO]_ |
| R4 | Décision sur l'analyse d'impact (AIPD) : requise ou non, motivée | | | _[DPO]_ |
| R5 | Absence de décision produisant des effets juridiques sans intervention humaine, ou garanties prévues | | | _[DPO]_ |

## 9. EU AI Act

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| A1 | Qualification du système : pratique interdite, haut risque, obligations de transparence, risque minimal | | _[Note de qualification]_ | _[Juridique]_ |
| A2 | Rôle de {{client}} (fournisseur, déployeur) | | | _[Juridique]_ |
| A3 | Obligations applicables et calendrier, fixés par le juridique | | | _[Juridique]_ |

## 10. Continuité

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| C1 | Mode dégradé sans agents, testé | | | |
| C2 | Procédure d'arrêt d'urgence : qui, comment, en combien de temps | | | |
| C3 | Dépendance au fournisseur de modèle : comportement en cas d'indisponibilité | | | |

## Synthèse et signatures

| Domaine | Lignes conformes | Sous condition | Non conformes | Validateur | Date |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

**Conditions à lever** : _[Liste, échéance, responsable]_

**Décision** : _[Construction autorisée / autorisée sous conditions / refusée]_

<!-- section: exemple -->
# Checklist sécurité et conformité — Voxalis, SAV Augmenté

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Revue** | Fin de conception (S17), réunion du 6 mai 2026 |
| **Préparée par** | Léo et Inès, FDE, avec le référent sécurité de l'équipe Voxalis |
| **Validateurs** | Marc Dubois (RSSI), Élise Martin (DPO), juriste référente de la Direction juridique |

**Statuts** : Conforme / Conforme sous condition / Non conforme / Sans objet.

> [!IMPORTANT]
> Ce document prépare la décision. La validation appartient au RSSI, au DPO et au juridique de Voxalis.

## 1. Données

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| D1 | Classification des sources | Conforme | Inventaire des 6 applications et de la base de connaissances : tickets, parc et supervision « Confidentiel », base de connaissances « Interne » | Marc Dubois |
| D2 | Minimisation | Conforme | Matrice champs par agent : l'Agent Diagnostic ne reçoit ni nom ni téléphone du contact ; seul l'Agent Communication accède aux coordonnées | Élise Martin |
| D3 | Résidence | Conforme | Hébergement et inférence dans l'Union européenne, attestation du fournisseur jointe | Marc Dubois |
| D4 | Conservation | Conforme | Traces 13 mois, données personnelles masquées ; aucune mémoire entre les cas | Élise Martin |
| D5 | Jeux d'évaluation | Conforme sous condition | Golden set de 600 cas et 120 cas adverses pseudonymisés. Condition : purge des numéros de ligne restés en clair dans 14 descriptions, avant le 13 mai | Élise Martin |

## 2. Identités et droits des agents

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| I1 | Identité par agent | Conforme | 6 comptes de service, un par agent, déclarés dans l'annuaire | Marc Dubois |
| I2 | Moindre privilège | Conforme | Matrice agents × 9 outils de la passerelle MCP ; l'Agent Diagnostic n'a aucun outil en écriture | Marc Dubois |
| I3 | Filtrage côté outil | Conforme | Chaque outil filtre sur l'identifiant client du ticket ; test d'accès croisé négatif sur 50 cas | Marc Dubois |
| I4 | Revue des droits | Conforme sous condition | Revue trimestrielle prévue ; à inscrire au mandat du comité de gouvernance IA avant la production | Marc Dubois |

## 3. Secrets

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| S1 | Aucun secret exposé | Conforme | Analyse automatique du dépôt et des traces de test : aucun secret détecté | Marc Dubois |
| S2 | Coffre et rotation | Conforme | Secrets des 6 applications dans le coffre du groupe, rotation à 90 jours ; les agents n'y accèdent que via la passerelle | Marc Dubois |

## 4. Outils en écriture

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| W1 | Liste exhaustive | Conforme | 3 outils sur 9 : `crm.mettre_a_jour_ticket`, `reseau.executer_action`, `client.envoyer_message` | Marc Dubois |
| W2 | Règles d'approbation | Conforme sous condition | `reseau.executer_action` : L3 sur le catalogue d'actions à risque faible, approbation humaine au-delà ; `client.envoyer_message` : L3 pour les statuts, approbation pour tout geste commercial. Règles d'approbation spécifiées dans la passerelle ; tests à exécuter pendant le prototype | Marc Dubois |
| W3 | Plafonds | Conforme | Au plus 2 actions réseau par cas, aucune sur les liaisons grands comptes ; au plus 3 messages client par cas et par jour | Marc Dubois |
| W4 | Réversibilité | Conforme sous condition | Procédure de retour arrière documentée pour 9 des 11 actions du catalogue ; les 2 restantes sont retirées du catalogue tant qu'elle manque | Marc Dubois |

## 5. Entrées non fiables et injection

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| E1 | Inventaire | Conforme | Descriptions de tickets, courriels clients, articles de la base, réponses des outils | Marc Dubois |
| E2 | Séparation données et instructions | Conforme | Textes clients balisés comme données dans le contexte ; aucun outil déclenché par une consigne trouvée dans un texte client | Marc Dubois |
| E3 | Validation des sorties | Conforme | Schémas JSON validés par code avant chaque appel d'outil | Marc Dubois |
| E4 | Jeu adverse | Conforme sous condition | Jeu de 120 cas adverses constitué, annoté et versionné le 4 mai ; seuil fixé à 0 action inappropriée. Condition : rejeu obligatoire avant le mode fantôme (S22) | Marc Dubois |

## 6. Journalisation et traçabilité

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| J1 | Trace de bout en bout | Conforme | Traces au format OpenTelemetry, reliées à l'identifiant du ticket, approbations humaines comprises | Marc Dubois |
| J2 | Masquage | Conforme | Masquage des noms, téléphones, courriels et adresses, vérifié sur 200 traces | Élise Martin |
| J3 | Accès aux traces | Conforme sous condition | Accès limité à l'équipe AgentOps ; journal des consultations à activer avant le pilote (S22) | Marc Dubois |

## 7. Fournisseurs de modèles et sous-traitance

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| F1 | Contrat fournisseur | Conforme | Avenant du contrat cadre groupe : pas d'usage des données pour l'entraînement, traitement dans l'Union européenne, liste des sous-traitants ultérieurs | Juriste référente |
| F2 | Sous-traitance de données personnelles | Conforme | Clauses de sous-traitance du contrat cadre applicables | Élise Martin |
| F3 | Plan de sortie | Conforme | Interface modèle abstraite ; golden set rejouable sur un autre modèle en une journée | Marc Dubois |

## 8. RGPD

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| R1 | Registre | Conforme sous condition | Fiche de traitement « Assistance SAV augmentée » rédigée ; inscription au registre avant le 15 mai | Élise Martin |
| R2 | Base légale | Conforme | Exécution du contrat de service avec le client PME | Élise Martin |
| R3 | Information | Conforme sous condition | Mention dans les messages de l'Agent Communication indiquant qu'ils sont rédigés par un système automatisé ; mise à jour de la politique de confidentialité Entreprises avant le pilote | Élise Martin |
| R4 | Analyse d'impact | Conforme sous condition | La DPO a décidé de mener une AIPD (traitement automatisé à grande échelle avec actions sur le service). AIPD à finaliser avant le pilote (S22) | Élise Martin |
| R5 | Décisions automatisées | Conforme | Aucun geste commercial ni décision contractuelle sans approbation humaine ; les actions réseau rétablissent un service, sans effet juridique | Élise Martin |

## 9. EU AI Act

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| A1 | Qualification | Conforme | Note de qualification : ni pratique interdite ni usage relevant des catégories à haut risque identifiées ; obligation de transparence pour les messages adressés aux clients. Confirmée par la juriste référente le 6 mai | Juriste référente |
| A2 | Rôle | Conforme | Voxalis fait développer le système et le met en service sous son nom pour son propre usage : fournisseur et déployeur du système (note de qualification du 6 mai). Les obligations propres au modèle d'IA à usage général restent portées par son fournisseur, dont les engagements sont vérifiés en F1 | Juriste référente |
| A3 | Obligations et calendrier | Conforme | Liste des obligations et calendrier applicable établis par la Direction juridique, annexés | Juriste référente |

## 10. Continuité

| N° | Contrôle | Statut | Preuve | Validateur |
| --- | --- | --- | --- | --- |
| C1 | Mode dégradé | Conforme sous condition | Bascule de tous les tickets en traitement manuel décrite ; test de bascule à réaliser pendant le mode fantôme du pilote | Marc Dubois |
| C2 | Arrêt d'urgence | Conforme | Désactivation par agent ou globale depuis la console d'exploitation, par l'équipe AgentOps ou la responsable du plateau, effet en moins d'une minute | Marc Dubois |
| C3 | Indisponibilité du modèle | Conforme | Délai maximal de 60 secondes, puis bascule en traitement manuel (mode dégradé C1) | Marc Dubois |

## Synthèse et signatures

| Domaine | Lignes conformes | Sous condition | Non conformes | Validateur | Date |
| --- | --- | --- | --- | --- | --- |
| Sécurité (données, identités, secrets, outils, injection, traces, continuité) | 16 | 6 | 0 | Marc Dubois | 6 mai 2026 |
| Protection des données (D2, D4, D5, J2, F2, RGPD) | 6 | 4 | 0 | Élise Martin | 6 mai 2026 |
| Juridique (F1, EU AI Act) | 4 | 0 | 0 | Juriste référente | 6 mai 2026 |

**Conditions à lever**

| Condition | Échéance | Responsable |
| --- | --- | --- |
| D5 : purge des 14 descriptions du golden set | 13 mai 2026 | Inès |
| W4 : procédures de retour arrière des 2 actions retirées | Avant leur réintégration au catalogue | Léo |
| R1 : inscription au registre | 15 mai 2026 | Élise Martin |
| I4, W2, E4, J3, R3, R4, C1 : revue des droits, tests des règles d'approbation, rejeu du jeu adverse, journal des accès, information, AIPD, test de bascule | Avant le pilote, 8 juin 2026 | Yasmine (suivi), validateurs concernés |

**Décision** : construction autorisée sous conditions. Aucune action réelle sur le réseau ni message client avant la levée de toutes les conditions marquées « avant le pilote ».
