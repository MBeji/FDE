---
id: dossier-preparation-mission
titre: "Dossier de préparation de mission"
resume: "La checklist de ce qui doit être prêt avant le premier jour chez le client : contexte, parties prenantes, accès, contraintes de sécurité, logistique, hypothèses, questions ouvertes et risques d'entrée. Pour l'équipe FDE et son responsable d'engagement."
phase: cadrer
type: checklist
format: document
effort: "1 à 2 jours, la semaine précédant le démarrage"
tags: [cadrage, preparation, acces, demarrage]
frameworks: [probleme-hypotheses, cartographie-parties-prenantes, securite-agents]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Une mission se gagne ou se perd souvent dans ses dix premiers jours : une équipe sans comptes, sans données de test ni rendez-vous passe la première semaine à attendre. Ce dossier rassemble tout ce qui doit être réglé **avant** le jour 1, avec un statut et un responsable par ligne. Il sert aussi de premier test du client : la vitesse à laquelle les accès arrivent dit beaucoup sur la capacité à industrialiser plus tard.

## Quand l'utiliser

Dès la signature, et au plus tard cinq jours ouvrés avant le démarrage. Revue quotidienne la dernière semaine. Il précède la [charte de mission](/templates/charte-de-mission) et alimente la [carte des parties prenantes](/templates/carte-parties-prenantes).

## Comment le remplir

1. Résumer le contexte à partir de sources publiques et des échanges commerciaux, sans spéculer.
2. Lister les parties prenantes connues, puis les trous : qui manque pour décider, valider, opérer ?
3. Demander les accès par écrit, ligne par ligne, avec un nom côté client.
4. Faire qualifier par le RSSI et le DPO les données que l'équipe pourra manipuler.
5. Écrire trois à cinq hypothèses de départ, falsifiables.
6. Terminer par les risques d'entrée et la décision : démarrer, démarrer sous réserve, décaler.

## Critères de qualité

- [ ] Chaque ligne a un statut, un responsable nommé et une date.
- [ ] Aucune donnée client n'est manipulée sans classification et autorisation écrites.
- [ ] Les hypothèses sont formulées pour pouvoir être réfutées en deux semaines.
- [ ] Les questions ouvertes ont un destinataire.
- [ ] Les lignes bloquées sont remontées au sponsor avant le jour 1.

<!-- section: template -->
# Dossier de préparation de mission — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Sponsor** | {{sponsor}} |
| **Domaine** | {{domaine}} |
| **Date de démarrage** | _[Date du jour 1]_ |
| **Version** | _[0.1]_ du {{date}} |
| **Rédacteur** | {{auteur}} |

**Statuts** : Fait / En cours / Bloqué / À faire. **Décision de démarrage** : _[Démarrer / Démarrer sous réserve / Décaler]_

## 1. Compréhension du contexte

| Élément | Ce que nous savons | Source | Statut | Responsable |
| --- | --- | --- | --- | --- |
| Activité et modèle économique | _[Métiers, clients, chiffre d'affaires, effectifs]_ | _[Rapport annuel, échanges commerciaux]_ | | |
| Enjeux du domaine | _[Ce qui coûte, ce qui fait perdre des clients, ce qui inquiète le sponsor]_ | | | |
| Demande initiale du client | _[Formulation exacte, entre guillemets]_ | | | |
| Initiatives IA passées | _[POC, résultats, raisons des arrêts]_ | | | |
| Contexte social et organisationnel | _[Réorganisations, plans en cours, climat]_ | | | |

## 2. Parties prenantes connues

| Rôle | Nom et fonction | Rencontré ? | Premier rendez-vous | Responsable FDE |
| --- | --- | --- | --- | --- |
| Sponsor | {{sponsor}} | | | |
| Propriétaire du processus | | | | |
| DSI | | | | |
| RSSI | | | | |
| DPO | | | | |
| Finance | | | | |
| RH | | | | |
| Terrain (manager de proximité) | | | | |

**Trous identifiés** : _[Rôles sans nom, décideurs non identifiés]_

## 3. Accès et environnements

| Besoin | Détail | Demandé le | Interlocuteur client | Statut | Responsable |
| --- | --- | --- | --- | --- | --- |
| Comptes nominatifs | _[Messagerie, annuaire, outils collaboratifs]_ | | | | |
| Postes de travail | _[Postes client ou postes FDE autorisés]_ | | | | |
| Réseau | _[Accès distant, badge, Wi-Fi invité]_ | | | | |
| Environnement de développement | _[Bac à sable, cloud, droits]_ | | | | |
| Données de test autorisées | _[Nature, volume, anonymisation, durée d'usage]_ | | | | |
| Documentation | _[Processus, architecture, indicateurs]_ | | | | |

## 4. Sécurité et conformité

| Point | Exigence | Validé par | Statut | Responsable |
| --- | --- | --- | --- | --- |
| Classification des données accessibles | _[Public / Interne / Confidentiel / Secret]_ | _[RSSI]_ | | |
| Données personnelles | _[Catégories, base légale, minimisation]_ | _[DPO]_ | | |
| Clauses contractuelles | _[Confidentialité, propriété intellectuelle, sous-traitance]_ | _[Juridique]_ | | |
| Habilitations et formations obligatoires | _[Charte informatique, sensibilisation sécurité]_ | | | |
| Usage d'outils d'IA par l'équipe | _[Ce qui est autorisé sur les données du client]_ | _[RSSI]_ | | |

## 5. Logistique

| Élément | Détail | Statut | Responsable |
| --- | --- | --- | --- |
| Lieux et jours de présence | | | |
| Salle projet | | | |
| Rituels et calendrier | _[Point hebdo, COPIL, comité de pilotage]_ | | |
| Outils de partage | _[Espace documentaire, messagerie projet]_ | | |

## 6. Hypothèses de départ

| N° | Hypothèse | Comment la tester en deux semaines | Ce qui la réfuterait |
| --- | --- | --- | --- |
| H1 | _[Hypothèse falsifiable]_ | | |

## 7. Questions ouvertes

| N° | Question | Destinataire | Échéance | Réponse |
| --- | --- | --- | --- | --- |
| Q1 | | | | |

## 8. Risques d'entrée

| Risque | Probabilité | Impact | Parade | Responsable |
| --- | --- | --- | --- | --- |
| | _[Faible / Moyenne / Forte]_ | | | |

## 9. Programme des dix premiers jours

| Jour | Objectif | Rendez-vous | Livrable |
| --- | --- | --- | --- |
| J1 | | | |

<!-- section: exemple -->
# Dossier de préparation de mission — Voxalis

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Domaine** | Assistance & SAV Entreprises (support technique et incidents des clients PME) |
| **Date de démarrage** | Lundi 12 janvier 2026 |
| **Version** | 0.4 du 9 janvier 2026 |
| **Rédacteur** | Yasmine, lead FDE |

**Statuts** : Fait / En cours / Bloqué / À faire. **Décision de démarrage** : démarrer sous réserve (données de test attendues au plus tard le 16 janvier, voir R1).

## 1. Compréhension du contexte

| Élément | Ce que nous savons | Source | Statut | Responsable |
| --- | --- | --- | --- | --- |
| Activité et modèle économique | Opérateur télécom convergent européen : 6,5 millions de clients, 4 800 collaborateurs, 2,1 Md€ de chiffre d'affaires. Marché Entreprises : 38 000 PME, 240 M€ de revenus récurrents | Rapport annuel, réunion de lancement commerciale | Fait | Hugo |
| Enjeux du domaine | Délai de réparation jugé trop long par la sponsor ; lien direct établi par elle avec le départ des clients PME | Entretien commercial avec Claire Besson du 15 décembre 2025 | Fait | Yasmine |
| Demande initiale du client | « Déployer un chatbot pour le SAV » | Cahier des charges | Fait. À reformuler en problème métier avant tout engagement de solution | Yasmine |
| Initiatives IA passées | Plusieurs POC en deux ans, un seul en production (une FAQ grand public), aucun mesuré selon la DSI. Nombre exact et raisons des arrêts à confirmer | Échange avec Thomas Nguyen | En cours | Hugo |
| Contexte social et organisationnel | Inquiétude des représentants du personnel sur l'automatisation du SAV, signalée par la DRH. Recours à une sous-traitance de débordement | Échange avec Isabelle Moreau | Fait | Hugo |

## 2. Parties prenantes connues

| Rôle | Nom et fonction | Rencontré ? | Premier rendez-vous | Responsable FDE |
| --- | --- | --- | --- | --- |
| Sponsor | Claire Besson, DGA Marché Entreprises | Oui | Lundi 12 janvier, 9 h, lancement | Yasmine |
| Propriétaire du processus | Sophie Lambert, Directrice Relation Client Entreprises | Non | Lundi 12 janvier, 14 h | Yasmine |
| DSI | Karim Haddad | Non | Mardi 13 janvier | Léo |
| Responsable Data & IA | Thomas Nguyen | Oui | Mardi 13 janvier | Inès |
| RSSI | Marc Dubois | Non (échanges écrits) | Mardi 13 janvier, accès et données | Léo |
| DPO | Élise Martin | Non (échanges écrits) | Mercredi 14 janvier | Inès |
| Finance | Julien Faure, Directeur financier | Non | Jeudi 15 janvier, méthode de la référence de coûts | Hugo |
| RH | Isabelle Moreau, DRH | Oui | Jeudi 15 janvier | Hugo |
| Terrain | Nadia Cherif, responsable du plateau de Nantes | Non | Vendredi 16 janvier, visite du plateau | Yasmine |

**Trous identifiés** : aucun interlocuteur nommé à la Direction Réseau, qui possède la supervision et les tests de ligne ; représentants du personnel non identifiés ; product owner et référent sécurité de l'équipe Voxalis détachée non encore désignés.

## 3. Accès et environnements

| Besoin | Détail | Demandé le | Interlocuteur client | Statut | Responsable |
| --- | --- | --- | --- | --- | --- |
| Comptes nominatifs | 5 comptes annuaire et messagerie (Yasmine, Léo, Inès, Hugo, expert conduite du changement) | 5 janvier | DSI, support utilisateurs | Fait, livrés le 8 janvier | Léo |
| Postes de travail | 4 postes Voxalis ; postes FDE autorisés sur le réseau invité uniquement | 5 janvier | DSI | En cours, livraison annoncée le 12 janvier à 11 h | Léo |
| Réseau | Accès distant VPN pour 5 personnes ; badges pour le siège et le plateau de Nantes | 5 janvier | DSI, services généraux | VPN fait ; badges Nantes à retirer sur place le 16 janvier | Hugo |
| Environnement de développement | Bac à sable cloud du groupe, région UE, sans connexion au SI de production | 6 janvier | Thomas Nguyen | En cours, ouverture prévue en S2 | Inès |
| Données de test autorisées | Extraction de 12 mois de tickets (420 000 environ), champs libres pseudonymisés, sans coordonnées client ; usage limité au diagnostic, suppression en fin de mission | 6 janvier | Thomas Nguyen, Élise Martin | Bloqué : avis DPO attendu sur la pseudonymisation des descriptions libres | Inès |
| Documentation | Cartographie applicative du SAV, procédures N1 et N2, tableaux de bord mensuels | 6 janvier | Sophie Lambert | En cours, tableaux de bord reçus | Hugo |

## 4. Sécurité et conformité

| Point | Exigence | Validé par | Statut | Responsable |
| --- | --- | --- | --- | --- |
| Classification des données accessibles | Tickets et parc client classés « Confidentiel ». Aucune copie hors du bac à sable | Marc Dubois | En cours, confirmation écrite attendue le 13 janvier | Léo |
| Données personnelles | Contacts PME (nom, téléphone, courriel) exclus de l'extraction ; descriptions libres pseudonymisées par script avant transfert | Élise Martin | Bloqué, voir R1 | Inès |
| Clauses contractuelles | Confidentialité, propriété des livrables au client, réutilisation par le pool des seuls patterns anonymisés | Direction juridique Voxalis | Fait, contrat signé le 18 décembre 2025 | Yasmine |
| Habilitations et formations | Charte informatique signée, module de sensibilisation sécurité de 45 minutes | RSSI | À faire le 12 janvier, avant remise des postes | Léo |
| Usage d'outils d'IA par l'équipe | Aucun service d'IA externe sur les données Voxalis ; uniquement les services ouverts dans le bac à sable | Marc Dubois | Fait, accord écrit du 7 janvier | Léo |

## 5. Logistique

| Élément | Détail | Statut | Responsable |
| --- | --- | --- | --- |
| Lieux et jours de présence | Siège du lundi au jeudi ; plateau de Nantes une journée par semaine à partir de S3 | Fait | Yasmine |
| Salle projet | Salle dédiée au siège pour les S1 à S9 | Fait | Hugo |
| Rituels et calendrier | Point hebdo le vendredi à 11 h avec Sophie Lambert ; COPIL mensuel présidé par Claire Besson, premier le 5 février | En cours, invitation COPIL à envoyer | Hugo |
| Outils de partage | Espace documentaire Voxalis, accès lecture et écriture pour l'équipe | Fait | Hugo |

## 6. Hypothèses de départ

| N° | Hypothèse | Comment la tester en deux semaines | Ce qui la réfuterait |
| --- | --- | --- | --- |
| H1 | Le délai de résolution vient surtout des attentes entre niveaux de support, pas du traitement | Horodatages d'un échantillon de 500 tickets ; 2 entretiens N1 et N2 | Temps de traitement effectif supérieur à 40 % du délai total |
| H2 | Une part majoritaire des incidents relève d'un petit nombre de motifs à résolution documentée | Pareto des motifs de clôture sur 3 mois | Moins de 40 % des incidents dans les 15 premiers motifs |
| H3 | Un chatbot client ne traiterait pas la cause du délai | Croiser H1 avec les canaux d'entrée | Délai concentré avant la création du ticket |
| H4 | Les données nécessaires à un diagnostic automatisé sont accessibles par API | Cartographie applicative et entretien DSI | Moins de la moitié des outils du diagnostic exposés |

## 7. Questions ouvertes

| N° | Question | Destinataire | Échéance | Réponse |
| --- | --- | --- | --- | --- |
| Q1 | Qui, à la Direction Réseau, peut décider de l'ouverture des tests de ligne à un système automatisé ? | Karim Haddad | 13 janvier | |
| Q2 | La finance dispose-t-elle d'un coût complet par ticket, et selon quelle méthode ? | Julien Faure | 15 janvier | |
| Q3 | Quels engagements ont été pris envers les représentants du personnel sur l'automatisation ? | Isabelle Moreau | 15 janvier | |
| Q4 | Pourquoi les POC précédents se sont-ils arrêtés ? | Thomas Nguyen | 13 janvier | |

## 8. Risques d'entrée

| Risque | Probabilité | Impact | Parade | Responsable |
| --- | --- | --- | --- | --- |
| R1. Données de test bloquées par la pseudonymisation des champs libres | Forte | Diagnostic retardé d'une à deux semaines | Démarrer sur les champs structurés ; proposer à Élise Martin le script de pseudonymisation et un test sur 1 000 tickets | Inès |
| R2. Sponsor attachée à la solution « chatbot » | Moyenne | Mission orientée vers un outil plutôt que vers le problème | Présenter le problème reformulé et l'hypothèse H1 dès le J3, chiffres à l'appui | Yasmine |
| R3. Résistance du terrain à une mission perçue comme un plan de réduction d'effectifs | Moyenne | Entretiens et observation de faible qualité | Message commun sponsor et DRH avant la visite de Nantes | Hugo |
| R4. Direction Réseau absente de la gouvernance | Forte | Outils de diagnostic inaccessibles en conception | Faire nommer un référent Réseau au COPIL du 5 février | Yasmine |

## 9. Programme des dix premiers jours

| Jour | Objectif | Rendez-vous | Livrable |
| --- | --- | --- | --- |
| J1 (12 janvier) | Lancer, obtenir les accès | Sponsor, propriétaire du processus | Compte rendu de lancement |
| J2 (13 janvier) | SI, sécurité, données | DSI, RSSI, Data & IA | Liste des accès confirmée |
| J3 (14 janvier) | Partager l'hypothèse de réponse initiale | Sponsor, DPO | Problème reformulé, hypothèses H1 à H4 |
| J4 et J5 | Finance, RH, terrain | Directeur financier, DRH, plateau de Nantes | Méthode de la référence de coûts, premières observations |
| J6 à J10 (S2) | Écrire et faire signer la charte | Point hebdo, sponsor | Charte de mission signée, questionnaire de découverte envoyé |
