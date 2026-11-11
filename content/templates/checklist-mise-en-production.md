---
id: checklist-mise-en-production
titre: "Revue de préparation à la mise en production"
resume: "La liste de contrôle qui conditionne le passage à l'échelle d'un système d'agents : huit rubriques, un statut et une preuve par point, une décision signée."
phase: industrialiser
type: checklist
format: tableau
effort: "1 à 2 jours de préparation, 2 h de revue"
tags: [production, go-no-go, exploitation, gouvernance]
frameworks: [poc-pilote-production, agentops, evaluation-agents, securite-agents, gouvernance-ia]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Décider, preuves à l'appui, si un système d'agents peut quitter le pilote. La revue remplace « ça marche » par une quarantaine de points vérifiables et rend la décision opposable : qui a décidé, sur quoi, avec quelles réserves.

## Quand l'utiliser

Avant chaque élargissement : première vague, nouvelle population, nouvel outil d'écriture. La commencer quatre semaines avant la date visée : elle sert d'abord de plan de travail. La démarche complète est décrite dans [Passer en production](/guides/passer-en-production).

## Comment le remplir

1. Confier chaque rubrique à son responsable. Le FDE instruit, il ne se certifie pas lui-même.
2. Attribuer un statut : conforme, réserve, non conforme ou sans objet. « En cours » n'est pas un statut.
3. Citer une preuve datée et consultable : mesure, test, document signé.
4. Donner à chaque réserve un propriétaire, une échéance et un critère de levée.
5. Décider en séance. Un point bloquant non conforme reporte la mise en production.

## Critères de qualité

- [ ] Chaque point a un statut et une preuve datée.
- [ ] Les seuils sont ceux du [plan d'évaluation](/templates/plan-evaluation), pas des seuils ajustés après coup.
- [ ] L'arrêt, le mode dégradé et le retour arrière ont été testés, pas seulement décrits.
- [ ] Aucun point bloquant n'est non conforme si la décision est favorable.
- [ ] Chaque réserve a un propriétaire, une échéance et un critère de levée.
- [ ] La décision est signée par le propriétaire métier et le responsable de l'exploitation.

<!-- section: template -->
# Revue de préparation à la mise en production — {{client}}

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Système** | _[Nom du système, agents et outils concernés]_ |
| **Objet de la revue** | _[Vague, population, volume attendu, nouveaux outils ou nouveau niveau d'autonomie]_ |
| **Version candidate** | _[Identifiant et date de la version soumise à la revue]_ |
| **Date de la revue** | {{date}} |
| **Mise en production visée** | _[Date]_ |
| **Participants** | _[Propriétaire métier, exploitation, sécurité, conformité, finance, ressources humaines]_ |
| **Rédacteur** | {{auteur}} |

**Statuts** : C conforme, R réserve (acceptable sous condition datée), NC non conforme, SO sans objet (à justifier).
**(B)** : point bloquant. Un seul point bloquant non conforme interdit la mise en production.

## 1. Qualité

_[Signataire : propriétaire métier]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 1.1 | (B) Les seuils du plan d'évaluation sont tenus par la version candidate sur le golden set | | _[Rapport, date, version]_ | |
| 1.2 | (B) Le jeu adverse ne produit aucune action inappropriée | | | |
| 1.3 | Les résultats en conditions réelles confirment les résultats hors ligne | | | |
| 1.4 | (B) Les évaluations sont rejouées avant tout déploiement et bloquent en cas de régression | | | |
| 1.5 | Le golden set est versionné, a un propriétaire chez le client et s'enrichit des cas de production | | | |
| 1.6 | Les limites connues du système sont listées et acceptées par le métier | | | |

## 2. Sécurité

_[Signataire : RSSI]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 2.1 | (B) Chaque agent a une identité technique et des droits minimaux ; tout outil d'écriture a une règle d'approbation exécutée par le code | | | |
| 2.2 | (B) Les tests d'injection et de contournement ont été menés et revus par la sécurité | | | |
| 2.3 | Les secrets sont hors du code et des prompts ; les jetons ont une durée de vie courte | | | |
| 2.4 | Chaque action est journalisée : qui, quoi, sur quel objet, selon quelle règle | | | |
| 2.5 | Les limites dures sont actives en production : étapes, budget, débit par outil | | | |
| 2.6 | (B) La réponse à un incident de sécurité est écrite, et l'arrêt d'urgence a été testé par ceux qui l'appliqueront | | | |

## 3. Conformité

_[Signataires : DPO, juridique]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 3.1 | (B) L'analyse d'impact relative à la protection des données est validée | | | |
| 3.2 | La qualification réglementaire du système est documentée et validée par le juridique | | | |
| 3.3 | Les personnes sont informées qu'elles interagissent avec un système d'IA | | | |
| 3.4 | Les données personnelles sont masquées dans les journaux ; les durées de conservation sont appliquées | | | |
| 3.5 | Les contrats et la localisation des traitements sont validés | | | |
| 3.6 | Les représentants du personnel ont été informés et consultés selon les règles applicables | | | |

## 4. Exploitation

_[Signataire : responsable de l'exploitation]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 4.1 | Le tableau de bord d'exploitation est en service : qualité, volumes, délais, erreurs, coûts ; une trace de bout en bout par cas | | | |
| 4.2 | (B) Chaque alerte a un seuil, un destinataire et une action ; son déclenchement a été testé | | | |
| 4.3 | (B) Les runbooks sont écrits et ont été déroulés par ceux qui les appliqueront | | | |
| 4.4 | L'astreinte est organisée : équipe nommée, plages, escalade | | | |
| 4.5 | (B) Le mode dégradé est défini et testé : l'activité continue sans les agents | | | |
| 4.6 | Prompts, outils et modèle sont versionnés ; la version du modèle est figée ; le déploiement est progressif | | | |

## 5. Performance et coûts

_[Signataires : DSI, finance]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 5.1 | Le système tient le volume cible et ses pics, avec une marge | | _[Volume testé, durée, rapport au pic attendu]_ | |
| 5.2 | Les délais aux centiles élevés respectent les engagements pris avec le métier | | | |
| 5.3 | Le coût par cas est mesuré ; sa projection au volume cible tient dans le business case | | | |
| 5.4 | Des plafonds et des alertes de consommation existent par cas et par jour | | | |
| 5.5 | Les quotas des fournisseurs et les capacités des applications appelées sont vérifiés | | | |

## 6. Adoption

_[Signataires : propriétaire métier, ressources humaines]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 6.1 | Les utilisateurs de la vague sont formés avant l'ouverture de leur accès | | _[Nombre formé sur nombre attendu]_ | |
| 6.2 | L'encadrement de proximité est formé ; ses objectifs sont cohérents avec le nouveau processus | | | |
| 6.3 | Le support de proximité est en place pour les premières semaines | | | |
| 6.4 | La communication a été faite aux équipes et, si nécessaire, aux clients | | | |
| 6.5 | Les indicateurs d'adoption sont définis, avec référence, cible et seuil d'alerte | | | |
| 6.6 | Les irritants remontés pendant le pilote sont traités ou planifiés | | | |

## 7. Gouvernance

_[Signataires : propriétaire métier, DSI]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 7.1 | (B) Chaque agent a un propriétaire métier nommé | | | |
| 7.2 | Les agents sont inscrits au registre : version, autonomie, outils d'écriture, niveau de risque | | | |
| 7.3 | Une instance décide des élargissements d'autonomie et des arrêts | | | |
| 7.4 | Les règles d'élargissement et de repli de l'autonomie sont écrites | | | |
| 7.5 | Le contrôle humain par échantillonnage est organisé et sa charge est planifiée | | | |
| 7.6 | La référence de valeur est signée ; la mesure après déploiement est planifiée | | | |

## 8. Réversibilité

_[Signataire : DSI]_

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 8.1 | (B) Le retour à la version précédente est testé et son délai mesuré | | | |
| 8.2 | Le retour au processus manuel reste possible : outils, accès et compétences conservés | | | |
| 8.3 | Données, prompts, évaluations et journaux appartiennent au client et sont exportables | | | |
| 8.4 | Le changement de fournisseur ou de modèle a été testé, ou au moins chiffré | | | |
| 8.5 | Les critères de gel ou d'arrêt de la généralisation sont fixés à l'avance | | | |

## Synthèse

| Rubrique | Points | Conformes | Réserves | Non conformes | Sans objet |
| --- | --- | --- | --- | --- | --- |
| 1. Qualité | 6 | | | | |
| 2. Sécurité | 6 | | | | |
| 3. Conformité | 6 | | | | |
| 4. Exploitation | 6 | | | | |
| 5. Performance et coûts | 5 | | | | |
| 6. Adoption | 6 | | | | |
| 7. Gouvernance | 6 | | | | |
| 8. Réversibilité | 5 | | | | |
| **Total** | **46** | | | | |

## Réserves et plan de levée

| N° | Point | Réserve | Propriétaire | Échéance | Critère de levée |
| --- | --- | --- | --- | --- | --- |
| R1 | | | | | _[Constat vérifiable, pas une intention]_ |

## Décision

- [ ] **Mise en production autorisée**
- [ ] **Mise en production autorisée sous réserves** : _[Réserves qui conditionnent l'étape suivante]_
- [ ] **Mise en production reportée** : _[Points non conformes, date de la nouvelle revue]_

**Critères de gel ou d'arrêt après la mise en production** : _[Trois ou quatre seuils constatables sans débat, avec la conséquence de chacun.]_

| Nom | Fonction | Rubriques signées | Date |
| --- | --- | --- | --- |
| | | | |
| {{sponsor}} | Sponsor | Décision entérinée | |

<!-- section: exemple -->
# Revue de préparation à la mise en production — Voxalis

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Système** | SAV Augmenté : six agents, passerelle MCP de neuf outils dont trois en écriture |
| **Objet de la revue** | Vague 1 de la généralisation : région Ouest, 48 conseillers dont les 18 du plateau de Nantes, environ 2 000 tickets par semaine |
| **Version candidate** | Version du 27 juillet 2026, celle de la dernière semaine du pilote |
| **Date de la revue** | 31 juillet 2026 (S29) |
| **Mise en production visée** | 3 août 2026 (S30) |
| **Participants** | Sophie Lambert, Karim Haddad, Marc Dubois, Élise Martin, Julien Faure, Isabelle Moreau, Thomas Nguyen, Nadia Cherif, Yasmine, Léo, Inès |
| **Rédacteur** | Yasmine, lead FDE ; instruction par Léo, Inès et Hugo avec l'équipe Voxalis détachée |

**Statuts** : C conforme, R réserve, NC non conforme, SO sans objet. **(B)** : point bloquant.

## 1. Qualité

Signataire : Sophie Lambert.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 1.1 | (B) Les seuils du plan d'évaluation sont tenus par la version candidate sur le golden set | C | Campagne du 28 juillet sur la version candidate : les quatre seuils sont tenus (qualification ≥ 95 %, diagnostic ≥ 90 %, conformité des messages ≥ 98 %, aucune action inappropriée). Rapport d'évaluation joint | Léo, experts N2 |
| 1.2 | (B) Le jeu adverse ne produit aucune action inappropriée | C | 120 cas adverses rejoués le 28 juillet : 0 action inappropriée. Aucune en production sur les 9 400 tickets du pilote | Léo, référent sécurité |
| 1.3 | Les résultats en conditions réelles confirment les résultats hors ligne | C | Pilote : erreur de qualification de 3,8 % ; justesse du diagnostic au-dessus du seuil d'alerte de 88 % chaque semaine sur l'échantillon de 5 % ; MTTR de 14,5 h, FCR de 71 %, réouvertures à 8 % | Sophie Lambert |
| 1.4 | (B) Les évaluations sont rejouées avant tout déploiement et bloquent en cas de régression | C | Rejeu chaque nuit et à chaque modification ; blocage vérifié le 15 juillet par une régression injectée volontairement | Léo |
| 1.5 | Le golden set est versionné, a un propriétaire chez le client et s'enrichit des cas de production | C | Version du 24 juillet : 600 cas initiaux et 38 cas issus du pilote, dont les deux envois de messages en double de S24. Propriétaires : les deux experts N2 détachés | Experts N2 |
| 1.6 | Les limites connues du système sont listées et acceptées par le métier | C | Annexe du bilan du pilote : incidents hors des 12 motifs récurrents traités en voie assistée ou experte, aucun diagnostic sur les grands comptes ni sur les incidents de sécurité. Acceptée par Sophie Lambert le 29 juillet | Hugo |

## 2. Sécurité

Signataire : Marc Dubois.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 2.1 | (B) Chaque agent a une identité technique et des droits minimaux ; tout outil d'écriture a une règle d'approbation exécutée par le code | C | Matrice de droits de la passerelle revue outil par outil le 16 juillet. Les trois outils d'écriture ont une table de décision exécutée par la passerelle. L'Agent Diagnostic n'a aucun droit d'écriture | Référent sécurité |
| 2.2 | (B) Les tests d'injection et de contournement ont été menés et revus par la sécurité | C | Jeu adverse construit avec le référent sécurité ; campagne complémentaire de l'équipe du RSSI les 8 et 9 juillet : aucune action obtenue hors règle | Marc Dubois |
| 2.3 | Les secrets sont hors du code et des prompts ; les jetons ont une durée de vie courte | C | Jetons d'agent de 15 minutes ; secrets dans le coffre de la DSI ; dépôt de code contrôlé le 16 juillet | Inès, architecte SI |
| 2.4 | Chaque action est journalisée : qui, quoi, sur quel objet, selon quelle règle | C | Journal d'audit de la passerelle, conservé 13 mois ; 20 cas tirés au hasard reconstitués de bout en bout le 17 juillet | Référent sécurité |
| 2.5 | Les limites dures sont actives en production : étapes, budget, débit par outil | C | Plafonds par ticket, par service, par zone et global vérifiés le 22 juillet ; disjoncteur de zone ouvert à la cinquième action identique | Inès |
| 2.6 | (B) La réponse à un incident de sécurité est écrite, et l'arrêt d'urgence a été testé par ceux qui l'appliqueront | R | Arrêt d'urgence déclenché par Nadia Cherif le 23 juillet : voie autonome suspendue en 4 minutes. La procédure « incident de sécurité » du runbook est écrite, mais l'astreinte ne l'a jamais jouée sans l'équipe FDE | Marc Dubois |

## 3. Conformité

Signataire : Élise Martin.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 3.1 | (B) L'analyse d'impact relative à la protection des données est validée | C | Analyse validée par Élise Martin le 22 mai, avant le pilote ; mise à jour pour la généralisation le 20 juillet | Élise Martin |
| 3.2 | La qualification réglementaire du système est documentée et validée par le juridique | C | Note du juridique du 6 mai : au regard de l'EU AI Act, le système relève des obligations de transparence, pas des systèmes à haut risque. À réexaminer pour tout nouvel agent ou nouvel usage | Juridique, Élise Martin |
| 3.3 | Les personnes sont informées qu'elles interagissent avec un système d'IA | C | Mention dans chaque message de l'Agent Communication ; page d'information de l'espace client en ligne depuis le 1er juin | Sophie Lambert |
| 3.4 | Les données personnelles sont masquées dans les journaux ; les durées de conservation sont appliquées | C | Masquage contrôlé sur 200 traces le 17 juillet ; conservation de 13 mois ; purge automatique testée | Élise Martin, data engineer |
| 3.5 | Les contrats et la localisation des traitements sont validés | C | Avenant de sous-traitance signé le 15 mai ; traitements dans l'Union européenne ; aucune donnée client utilisée pour entraîner un modèle | Karim Haddad, juridique |
| 3.6 | Les représentants du personnel ont été informés et consultés selon les règles applicables | C | Démarche conduite par Isabelle Moreau en phase Réinventer ; point d'information du 9 juillet sur les résultats du pilote | Isabelle Moreau |

## 4. Exploitation

Signataire : Karim Haddad.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 4.1 | Le tableau de bord d'exploitation est en service : qualité, volumes, délais, erreurs, coûts ; une trace de bout en bout par cas | C | En service depuis S22 ; traces corrélées par l'identifiant du ticket ; lu chaque matin pendant le pilote | Thomas Nguyen |
| 4.2 | (B) Chaque alerte a un seuil, un destinataire et une action ; son déclenchement a été testé | C | Sept alertes, chacune déclenchée à blanc le 21 juillet, dont la justesse hebdomadaire sous 88 % et les 5 diagnostics identiques sur une zone en 30 minutes | Inès, data engineer |
| 4.3 | (B) Les runbooks sont écrits et ont été déroulés par ceux qui les appliqueront | C | Runbooks de l'Agent Résolution et de l'Agent Communication, runbook commun aux quatre autres agents, en version 1.0 du 24 juillet. Trois procédures déroulées par l'équipe Voxalis le 23 juillet. Procédure « incident de sécurité » : voir 2.6 | Inès |
| 4.4 | L'astreinte est organisée : équipe nommée, plages, escalade | R | Équipe AgentOps : deux membres sur trois en poste le 3 août, le troisième le 17 août ; Inès complète la rotation d'ici là. Hors heures d'ouverture, l'astreinte de la DSI est habilitée à l'arrêt d'urgence depuis le 30 juillet | Thomas Nguyen |
| 4.5 | (B) Le mode dégradé est défini et testé : l'activité continue sans les agents | C | Bascule en voie assistée testée le 23 juillet à Nantes : 4 minutes, aucun ticket perdu. Fiche réflexe affichée sur les plateaux de l'Ouest | Nadia Cherif |
| 4.6 | Prompts, outils et modèle sont versionnés ; la version du modèle est figée ; le déploiement est progressif | C | Version du modèle figée ; déploiement par paliers de 10 %, 50 % puis 100 % du flux ; historique des déploiements du pilote consultable | Léo |

## 5. Performance et coûts

Signataires : Karim Haddad, Julien Faure.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 5.1 | Le système tient le volume cible et ses pics, avec une marge | R | Test du 22 juillet : 150 tickets par heure tenus pendant 2 h, soit 1,4 fois le pic attendu en vague 1. Rien n'est prouvé au pic national, estimé à 400 tickets par heure : la limite globale de 120 actions par heure sur `reseau.executer_action` et la capacité de `ligne.lancer_test` datent du pilote | Karim Haddad |
| 5.2 | Les délais aux centiles élevés respectent les engagements pris avec le métier | C | Sous charge, diagnostic rendu en 2 min 40 s au 95e centile pour une cible de 3 min | Léo |
| 5.3 | Le coût par cas est mesuré ; sa projection au volume cible tient dans le business case | C | 0,38 € d'inférence par ticket en pilote, sous le plafond de 0,50 €. Projection : environ 0,16 M€ par an pour 420 000 tickets, dans les 0,55 M€ prévus pour l'inférence et la plateforme. Vu par Julien Faure le 28 juillet | Julien Faure |
| 5.4 | Des plafonds et des alertes de consommation existent par cas et par jour | C | Limite par cas active sur chaque agent ; alerte de dérive du coût unitaire déclenchée à blanc le 21 juillet | Inès |
| 5.5 | Les quotas des fournisseurs et les capacités des applications appelées sont vérifiés | C | Quotas d'inférence relevés le 10 juillet pour le volume national. Capacité des applications réseau : traitée par la réserve du point 5.1 | Architecte SI |

## 6. Adoption

Signataires : Sophie Lambert, Isabelle Moreau.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 6.1 | Les utilisateurs de la vague sont formés avant l'ouverture de leur accès | C | 30 conseillers à former, les 18 de Nantes l'étant déjà : 27 formés et validés au 29 juillet, 3 en congé formés à leur retour. Aucun accès n'est ouvert sans validation | Nadia Cherif |
| 6.2 | L'encadrement de proximité est formé ; ses objectifs sont cohérents avec le nouveau processus | R | Responsables d'équipe de l'Ouest formés le 16 juillet. Leurs objectifs individuels restent exprimés en durée moyenne de traitement, ce qui contredit le rôle de superviseur de cas | Sophie Lambert |
| 6.3 | Le support de proximité est en place pour les premières semaines | C | Six champions issus du pilote, présents sur les plateaux de l'Ouest pendant deux semaines ; signalement en un geste depuis le poste de supervision, réponse sous 24 h | Nadia Cherif |
| 6.4 | La communication a été faite aux équipes et, si nécessaire, aux clients | C | Réunions d'équipe tenues du 20 au 22 juillet par les responsables d'équipe ; message de Claire Besson programmé le 3 août | Sophie Lambert |
| 6.5 | Les indicateurs d'adoption sont définis, avec référence, cible et seuil d'alerte | C | Plan de conduite du changement, version 2.0 du 24 juillet : usage quotidien (16 conseillers sur 18 en fin de pilote), acceptation des propositions, contournement | Expert conduite du changement |
| 6.6 | Les irritants remontés pendant le pilote sont traités ou planifiés | C | 41 irritants remontés : 33 corrigés, 8 planifiés avec une date. Liste présentée aux conseillers de Nantes le 28 juillet | Product owner |

## 7. Gouvernance

Signataires : Sophie Lambert, Karim Haddad.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 7.1 | (B) Chaque agent a un propriétaire métier nommé | C | Sophie Lambert pour les six agents, avec un référent opérationnel par agent | Sophie Lambert |
| 7.2 | Les agents sont inscrits au registre : version, autonomie, outils d'écriture, niveau de risque | C | Registre des agents créé le 28 juillet, six lignes | Thomas Nguyen |
| 7.3 | Une instance décide des élargissements d'autonomie et des arrêts | C | Comité de gouvernance IA mensuel, coprésidé par Sophie Lambert et Karim Haddad ; première séance le 6 août | Karim Haddad |
| 7.4 | Les règles d'élargissement et de repli de l'autonomie sont écrites | C | Conditions inscrites dans chaque fiche agent ; la liste des motifs ouverts à la voie autonome ne change que sur décision du comité, un repli s'applique sans l'attendre | Product owner |
| 7.5 | Le contrôle humain par échantillonnage est organisé et sa charge est planifiée | C | 5 % des cas revus chaque semaine par les experts N2 ; charge estimée à 25 heures par semaine au volume national, répartie entre six experts et inscrite au planning | Sophie Lambert |
| 7.6 | La référence de valeur est signée ; la mesure après déploiement est planifiée | C | Référence signée par Julien Faure ; registre de valeur à jour au 29 juillet ; mesures prévues à +3 et +6 mois | Hugo, Julien Faure |

## 8. Réversibilité

Signataire : Karim Haddad.

| N° | Point de contrôle | Statut | Preuve | Responsable |
| --- | --- | --- | --- | --- |
| 8.1 | (B) Le retour à la version précédente est testé et son délai mesuré | C | Testé le 21 juillet : 6 minutes, jeu de vérification rejoué dans la foulée | Léo |
| 8.2 | Le retour au processus manuel reste possible : outils, accès et compétences conservés | C | Écrans et accès d'origine conservés ; contrat de sous-traitance de débordement maintenu pendant toute la généralisation | Sophie Lambert |
| 8.3 | Données, prompts, évaluations et journaux appartiennent au client et sont exportables | C | Dépôts, golden set et journaux hébergés chez Voxalis depuis le début ; export complet testé le 17 juillet | Architecte SI |
| 8.4 | Le changement de fournisseur ou de modèle a été testé, ou au moins chiffré | R | Chiffré dans le dossier d'architecture, jamais testé : le golden set n'a été rejoué sur aucun autre modèle | Thomas Nguyen |
| 8.5 | Les critères de gel ou d'arrêt de la généralisation sont fixés à l'avance | C | Quatre critères, listés dans la décision ci-dessous | Yasmine |

## Synthèse

| Rubrique | Points | Conformes | Réserves | Non conformes | Sans objet |
| --- | --- | --- | --- | --- | --- |
| 1. Qualité | 6 | 6 | 0 | 0 | 0 |
| 2. Sécurité | 6 | 5 | 1 | 0 | 0 |
| 3. Conformité | 6 | 6 | 0 | 0 | 0 |
| 4. Exploitation | 6 | 5 | 1 | 0 | 0 |
| 5. Performance et coûts | 5 | 4 | 1 | 0 | 0 |
| 6. Adoption | 6 | 5 | 1 | 0 | 0 |
| 7. Gouvernance | 6 | 6 | 0 | 0 | 0 |
| 8. Réversibilité | 5 | 4 | 1 | 0 | 0 |
| **Total** | **46** | **41** | **5** | **0** | **0** |

Sur les douze points bloquants, onze sont conformes et aucun n'est non conforme. Le point 2.6 est en réserve : l'arrêt d'urgence est testé, la procédure qui l'entoure ne l'est pas encore.

## Réserves et plan de levée

| N° | Point | Réserve | Propriétaire | Échéance | Critère de levée |
| --- | --- | --- | --- | --- | --- |
| R1 | 5.1 | Capacité non prouvée au volume national | Karim Haddad, avec la Direction Réseau | 21 août (S32) | 400 tickets par heure tenus pendant 2 h, diagnostic sous 3 min au 95e centile, limite globale de `reseau.executer_action` relevée avec l'accord de la Direction Réseau |
| R2 | 4.4 | Équipe AgentOps incomplète | Thomas Nguyen | 21 août (S32) | Trois membres en poste ; une semaine complète d'astreinte tenue sans FDE dans la rotation |
| R3 | 2.6 | Procédure « incident de sécurité » jamais jouée par l'astreinte | Marc Dubois | 12 août (S31) | Exercice à blanc : arrêt d'urgence déclenché par l'astreinte en moins de 5 minutes, sans l'équipe FDE ; chaîne d'alerte vérifiée jusqu'au RSSI et à la DPO |
| R4 | 6.2 | Objectifs des responsables d'équipe contradictoires avec le rôle de superviseur de cas | Sophie Lambert, Isabelle Moreau | 21 août (S32) | Nouvelle grille d'objectifs diffusée : la durée moyenne de traitement en sort, la qualité de supervision y entre |
| R5 | 8.4 | Changement de modèle jamais testé | Thomas Nguyen | 25 septembre (S37) | Golden set rejoué sur un second modèle ; écarts par critère présentés au comité de gouvernance IA |

## Décision

- [ ] Mise en production autorisée
- [x] **Mise en production autorisée sous réserves** : la vague 1 (Ouest) démarre le 3 août. Les réserves R1 à R4 conditionnent la vague 2 : elles seront constatées levées, ou non, le 21 août. La réserve R5 ne conditionne aucune vague.
- [ ] Mise en production reportée

**Critères de gel ou d'arrêt après la mise en production**

| Constat | Conséquence |
| --- | --- |
| Une action inappropriée exécutée sur le service d'un client | Arrêt immédiat de la voie autonome ; reprise sur décision conjointe de Sophie Lambert et Marc Dubois |
| Justesse hebdomadaire du diagnostic sous 88 % deux semaines de suite | Gel de la vague suivante jusqu'au retour au-dessus de 90 % |
| Taux de réouverture au-dessus de 12 % sur une semaine dans la région déployée | Gel de la vague suivante, analyse sous 5 jours ouvrés |
| Moins de deux tiers des conseillers déployés en usage quotidien trois semaines après l'ouverture | Gel de la vague suivante ; les causes sont traitées avant d'aller plus loin |

| Nom | Fonction | Rubriques signées | Date |
| --- | --- | --- | --- |
| Sophie Lambert | Directrice Relation Client Entreprises | Qualité, adoption, gouvernance | 31 juillet 2026 |
| Karim Haddad | DSI | Exploitation, performance, gouvernance, réversibilité | 31 juillet 2026 |
| Marc Dubois | RSSI | Sécurité | 31 juillet 2026 |
| Élise Martin | DPO | Conformité | 31 juillet 2026 |
| Julien Faure | Directeur financier | Coûts | 31 juillet 2026 |
| Isabelle Moreau | DRH | Adoption | 31 juillet 2026 |
| Claire Besson | Directrice générale adjointe Marché Entreprises, sponsor | Décision entérinée | 31 juillet 2026 |
