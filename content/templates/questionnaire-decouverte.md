---
id: questionnaire-decouverte
titre: "Questionnaire de découverte client"
resume: "Le questionnaire envoyé au propriétaire du domaine avant les entretiens : stratégie, processus, volumes, systèmes, initiatives IA, contraintes et attentes, en questions fermées et chiffrées. Il libère les entretiens pour le pourquoi et le comment."
phase: diagnostiquer
type: grille
format: document
effort: "2 h d'adaptation, 1 h 30 de remplissage côté client"
tags: [diagnostic, decouverte, indicateurs, donnees]
frameworks: [approche-par-domaine, maturite-ai-native, mece, chaine-de-valeur]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un entretien de diagnostic coûte une heure à un dirigeant. Le gâcher à demander des volumes ou la liste des applications est une faute. Le questionnaire collecte en amont les faits que le client connaît ou peut retrouver ; les [entretiens](/templates/guide-entretien) servent ensuite aux causes, aux arbitrages et aux tensions. Les réponses donnent aussi un premier signal de maturité : un domaine qui ne connaît pas son délai de résolution n'est pas prêt à mesurer de la valeur.

## Quand l'utiliser

À la fin du cadrage, envoyé au propriétaire du processus avec une semaine de délai. Un questionnaire par domaine, pas par personne.

## Comment le remplir

1. Retirer les questions dont la réponse est déjà connue ; viser 40 questions au plus.
2. Garder la raison de chaque bloc : elle obtient des réponses plus sérieuses.
3. Préférer les questions fermées et chiffrées ; demander la source de chaque chiffre.
4. Accepter « ne sait pas » : c'est une information. La noter comme point à mesurer.
5. À réception, annoter chaque réponse (vérifiée, déclarée, contradictoire) et en tirer les questions des entretiens.

## Critères de qualité

- [ ] Chaque bloc indique pourquoi il est posé.
- [ ] Au moins deux tiers des questions appellent un chiffre, une liste ou un choix.
- [ ] Chaque chiffre reçu a une source et une période de référence.
- [ ] Les « ne sait pas » sont transformés en mesures à réaliser.
- [ ] Le questionnaire se remplit en moins de 90 minutes.

<!-- section: template -->
# Questionnaire de découverte — {{client}}, {{domaine}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Destinataire** | _[Propriétaire du processus, nom et fonction]_ |
| **Envoyé le** | {{date}} |
| **Retour souhaité le** | _[Date, au moins 2 jours avant les premiers entretiens]_ |
| **Contact** | {{auteur}} |

_[Message d'accompagnement : ce questionnaire prépare les entretiens ; répondez avec les chiffres disponibles et indiquez leur source ; « ne sait pas » est une réponse utile ; aucune donnée personnelle n'est demandée.]_

Pour chaque chiffre, indiquer : la valeur, la période de référence, la source (outil, rapport, estimation).

## A. Stratégie et priorités

_Pourquoi : relier le diagnostic à ce que la direction attend vraiment, et savoir ce qui sera arbitré en premier._

| N° | Question | Réponse |
| --- | --- | --- |
| A1 | Quels sont les trois objectifs du domaine pour les 18 prochains mois, par ordre de priorité ? | |
| A2 | Quels indicateurs servent à juger le domaine en comité de direction ? | |
| A3 | Quelles cibles chiffrées sont déjà fixées pour ces indicateurs ? | |
| A4 | Classer de 1 à 4 : réduire les coûts, améliorer l'expérience client, réduire les délais, absorber la croissance sans recruter | |
| A5 | Quels projets en cours touchent le domaine (SI, organisation, offre) ? | |

## B. Organisation et processus

_Pourquoi : comprendre qui fait quoi, où se trouvent les passages de relais, et préparer l'observation terrain._

| N° | Question | Réponse |
| --- | --- | --- |
| B1 | Effectif du domaine en ETP, par rôle et par niveau | |
| B2 | Nombre de sites, et effectif par site | |
| B3 | Part de l'activité sous-traitée, et pour quels flux | |
| B4 | Principales étapes du processus, du premier contact à la clôture | |
| B5 | Nombre de niveaux de support ou d'équipes par lesquels passe un cas complexe | |
| B6 | Existe-t-il des procédures écrites et à jour ? _[Oui / En partie / Non]_ | |
| B7 | Rotation annuelle du personnel et durée de formation d'un nouvel arrivant | |

## C. Volumes et indicateurs

_Pourquoi : établir la référence (baseline) sans laquelle aucune valeur ne pourra être mesurée._

| N° | Question | Réponse |
| --- | --- | --- |
| C1 | Volume annuel de demandes ou de cas, et saisonnalité | |
| C2 | Répartition par grande famille de demandes, en % | |
| C3 | Délai moyen de traitement de bout en bout, et dispersion si connue | |
| C4 | Taux de résolution au premier contact | |
| C5 | Taux de réouverture ou de rappel | |
| C6 | Satisfaction client (NPS, CSAT) et fréquence de mesure | |
| C7 | Coût annuel complet du domaine, et méthode de calcul | |
| C8 | Part des cas relevant de motifs récurrents à résolution connue | |

## D. Systèmes et données

_Pourquoi : savoir ce qu'un agent pourra lire et faire, et ce qui manque._

| N° | Question | Réponse |
| --- | --- | --- |
| D1 | Applications utilisées dans le processus, avec leur propriétaire | |
| D2 | Lesquelles exposent des API documentées ? | |
| D3 | Combien d'applications un collaborateur consulte-t-il pour traiter un cas type ? | |
| D4 | Historique disponible des cas : profondeur, champs, qualité des textes libres | |
| D5 | Base de connaissances : nombre d'articles, part à jour, propriétaire | |
| D6 | Catégories de données personnelles ou sensibles présentes dans les cas | |

## E. Initiatives IA

_Pourquoi : capitaliser sur ce qui existe et comprendre les échecs, pour ne pas les répéter._

| N° | Question | Réponse |
| --- | --- | --- |
| E1 | Projets d'IA menés depuis deux ans : nombre, objet, statut | |
| E2 | Combien sont en production, et avec quels résultats mesurés ? | |
| E3 | Raisons des arrêts | |
| E4 | Plateforme, équipe ou politique d'IA existantes dans l'entreprise | |
| E5 | Usage d'outils d'IA par les collaborateurs, autorisé ou non | |

## F. Contraintes

_Pourquoi : identifier tôt ce qui peut bloquer la mise en production._

| N° | Question | Réponse |
| --- | --- | --- |
| F1 | Exigences de sécurité applicables (classification, hébergement, homologation) | |
| F2 | Contraintes réglementaires propres au secteur | |
| F3 | Accords sociaux ou engagements pris envers les représentants du personnel | |
| F4 | Contraintes budgétaires et calendrier de décision | |
| F5 | Gels de changement prévus (périodes chargées, migrations) | |

## G. Attentes

_Pourquoi : rendre explicite la définition du succès et les inquiétudes._

| N° | Question | Réponse |
| --- | --- | --- |
| G1 | À quoi reconnaîtrez-vous, dans 12 mois, que la mission a réussi ? | |
| G2 | Qu'est-ce qui la ferait échouer ? | |
| G3 | Qui, dans le domaine, doit absolument être rencontré ? | |
| G4 | Quelles questions souhaitez-vous que nous traitions en priorité ? | |

<!-- section: exemple -->
# Questionnaire de découverte — Voxalis, Assistance & SAV Entreprises

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Destinataire** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Envoyé le** | 22 janvier 2026 |
| **Retour souhaité le** | 28 janvier 2026 (reçu le 27 janvier) |
| **Contact** | Hugo, FDE stratégie et produit |

Annotations de l'équipe FDE entre crochets : **[V]** vérifié sur pièce, **[D]** déclaré, à vérifier, **[M]** à mesurer pendant le diagnostic.

## A. Stratégie et priorités

| N° | Question | Réponse |
| --- | --- | --- |
| A1 | Trois objectifs à 18 mois | 1. Réduire nettement le délai de réparation des incidents PME. 2. Faire baisser le churn PME. 3. Absorber la croissance du parc sans augmenter l'effectif. **[D]** |
| A2 | Indicateurs en comité de direction | Délai moyen de résolution, NPS Entreprises, churn PME, coût du domaine. **[V]** tableau de bord mensuel |
| A3 | Cibles déjà fixées | Aucune cible chiffrée sur le délai ; objectif de NPS « positif et en hausse ». **[V]** |
| A4 | Classement | 1. Délais. 2. Expérience client. 3. Coûts. 4. Croissance sans recrutement. |
| A5 | Projets en cours | Migration de l'outil de supervision réseau prévue en 2027 ; refonte de l'espace client PME. **[D]** à confirmer avec Karim Haddad |

## B. Organisation et processus

| N° | Question | Réponse |
| --- | --- | --- |
| B1 | Effectif par rôle | 310 ETP : 190 conseillers N1, 85 experts N2, 35 back-office. **[V]** fichier RH |
| B2 | Sites | Cinq plateaux régionaux (Ouest, Nord, Est, Île-de-France, Sud), dont Nantes pour l'Ouest. **[V]** |
| B3 | Sous-traitance | Débordement confié à un prestataire lors des pics, flux N1 téléphoniques uniquement. Volume « variable ». **[M]** |
| B4 | Étapes du processus | Prise en charge, qualification, premier diagnostic N1, escalade N2, diagnostic approfondi, action réseau ou intervention, information client, clôture, contrôle. **[D]** 9 étapes, observation à Nantes en S4 |
| B5 | Niveaux traversés par un cas complexe | Deux à trois (N1, N2, parfois back-office ou Direction Réseau). **[D]** |
| B6 | Procédures à jour | En partie. **[M]** |
| B7 | Rotation et formation | Rotation N1 « autour de 15 % » ; 6 semaines de formation. **[D]** à obtenir auprès d'Isabelle Moreau |

## C. Volumes et indicateurs

| N° | Question | Réponse |
| --- | --- | --- |
| C1 | Volume annuel | 420 000 tickets sur l'année de référence ; pic en septembre. **[V]** extraction ticketing |
| C2 | Répartition | 62 % incidents techniques, 23 % demandes de modification, 15 % réclamations et facturation. **[V]** |
| C3 | Délai de bout en bout | 31 h en moyenne. Dispersion non suivie. **[V]** moyenne ; **[M]** décomposition par étape |
| C4 | Résolution au premier contact | 54 %. **[V]** |
| C5 | Réouverture | 14 %. **[V]** |
| C6 | Satisfaction | NPS Entreprises +8, mesure trimestrielle ; CSAT après clôture sur 5. **[V]** |
| C7 | Coût complet | 17,2 M€ par an, soit 41 € par ticket, méthode de la direction financière. **[V]** confirmé par Julien Faure le 15 janvier |
| C8 | Motifs récurrents | « Plus de la moitié des incidents, sans doute. » **[M]** Pareto sur 12 mois de tickets |

## D. Systèmes et données

| N° | Question | Réponse |
| --- | --- | --- |
| D1 | Applications | CRM et ticketing, supervision réseau, inventaire du parc, test de ligne, facturation, base de connaissances. **[V]** |
| D2 | API | « La plupart. » **[M]** confirmé ensuite : 4 sur 6, aucun bus d'événements |
| D3 | Applications par cas type | Les 6 sur un incident complexe. **[D]** à observer |
| D4 | Historique | 3 ans dans le ticketing ; descriptions libres saisies par les conseillers, de qualité inégale. **[D]** |
| D5 | Base de connaissances | 2 300 articles ; part à jour inconnue, « beaucoup d'articles anciens ». **[M]** revue d'un échantillon |
| D6 | Données personnelles | Nom, téléphone et courriel des contacts PME ; adresse des sites. **[V]** |

## E. Initiatives IA

| N° | Question | Réponse |
| --- | --- | --- |
| E1 | Projets depuis deux ans | 7 POC, dont 2 dans le SAV Entreprises (classement des courriels, résumé d'appels). **[V]** liste fournie par Thomas Nguyen |
| E2 | En production | Un seul, une FAQ grand public. Aucun résultat mesuré. **[V]** |
| E3 | Raisons des arrêts | « Pas de budget pour industrialiser », « pas de sponsor métier ». **[D]** à creuser en entretien |
| E4 | Plateforme et politique | Bac à sable cloud du groupe ; pas de politique d'usage de l'IA validée. **[V]** |
| E5 | Usage par les collaborateurs | Non autorisé, usage informel probable. **[D]** |

## F. Contraintes

| N° | Question | Réponse |
| --- | --- | --- |
| F1 | Sécurité | Données client classées « Confidentiel », hébergement dans l'Union européenne exigé. **[V]** confirmé par Marc Dubois |
| F2 | Réglementation sectorielle | Obligations d'opérateur de communications électroniques ; à préciser par le juridique. **[D]** |
| F3 | Engagements sociaux | Aucun accord spécifique ; inquiétude exprimée par les représentants du personnel. **[D]** à traiter avec Isabelle Moreau |
| F4 | Budget et décision | Budget à arbitrer en COPIL sur business case ; validation par Julien Faure. **[V]** |
| F5 | Gels de changement | Septembre (rentrée des entreprises) et décembre. **[D]** |

## G. Attentes

| N° | Question | Réponse |
| --- | --- | --- |
| G1 | Signe de réussite | « Un délai de réparation divisé par deux, et des conseillers qui ne passent plus leur journée à chercher l'information. » |
| G2 | Cause d'échec | « Un énième POC sans suite. » « Un outil que les conseillers contournent. » |
| G3 | Personnes à rencontrer | Nadia Cherif (Nantes), deux experts N2 référents, le responsable de la base de connaissances. |
| G4 | Questions prioritaires | Où se perd le temps ? Que peut-on automatiser sans risque pour le client ? |

**Synthèse FDE (28 janvier)** : 18 réponses vérifiées sur pièce, 12 déclarées à vérifier, 6 points à mesurer. Trois chantiers de mesure ouverts pour le diagnostic : décomposition du délai de 31 h par étape, Pareto des motifs d'incident, revue de fraîcheur de la base de connaissances. Questions ajoutées aux entretiens : raisons réelles des arrêts de POC, coût de la sous-traitance de débordement, appropriation des procédures par les N1.
