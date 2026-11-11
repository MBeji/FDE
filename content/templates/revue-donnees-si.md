---
id: revue-donnees-si
titre: "Revue de préparation des données et du SI"
resume: "La grille qui dit, cas d'usage par cas d'usage, si les données, les applications, la sécurité et la plateforme permettent de construire : prêt, à préparer ou bloquant, avec le plan de remédiation."
phase: diagnostiquer
type: grille
format: tableau
effort: "3 à 5 jours, avec l'architecte et le data engineer du client"
tags: [donnees, si, securite, faisabilite]
frameworks: [architecture-reference, memoire-connaissance, securite-agents, conception-outils]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La revue répond à une question simple : peut-on construire, et sinon, que faut-il préparer et qui s'en charge ? Elle évite de découvrir en phase Construire qu'une application n'a pas d'API ou qu'une donnée est inutilisable. Elle fonde la note de faisabilité de chaque cas d'usage et donne à la DSI, au RSSI et au DPO une liste d'actions datées plutôt qu'une surprise.

## Quand l'utiliser

En phase [Diagnostiquer](/methode/diagnostiquer) pour l'inventaire et la cartographie, puis en phase Cibler pour les verdicts, qui alimentent le [canevas de cas d'usage](/templates/canevas-cas-usage) et la [matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite). À mettre à jour jusqu'au jalon G4.

## Comment le remplir

1. Inventorier les sources avec le data engineer. Noter la qualité sur un échantillon, pas sur déclaration.
2. Cartographier les applications avec l'architecte : API en lecture, en écriture, événements, environnement de test.
3. Recueillir par écrit les exigences du RSSI et du DPO, selon les principes de [sécurité des agents](/frameworks/securite-agents).
4. Comparer la plateforme existante à l'[architecture de référence](/frameworks/architecture-reference).
5. Rendre un verdict par cas d'usage, avec sa condition de levée.
6. Transformer chaque « à préparer » en action : responsable, échéance, effort.

## Critères de qualité

- [ ] Chaque source a un propriétaire nommé et un niveau de sensibilité.
- [ ] La qualité est constatée sur un échantillon, source de la mesure indiquée.
- [ ] La lecture et l'écriture sont distinguées pour chaque application.
- [ ] Chaque verdict « à préparer » renvoie à une action datée du plan de remédiation.
- [ ] Chaque verdict « bloquant » dit pourquoi, et ce qui le rouvrirait.
- [ ] Le RSSI et le DPO ont relu leurs exigences.

<!-- section: template -->
# Revue de préparation des données et du SI — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Sponsor** | {{sponsor}} |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Contributeurs côté client** | _[Architecte, data engineer, RSSI, DPO, propriétaires d'applications]_ |

## 1. Synthèse

**Verdict global** : _[Peut-on construire ? Combien de cas d'usage prêts, à préparer, bloquants.]_

**Trois constats**

1.
2.
3.

**Décisions demandées** : _[Actions de remédiation à lancer, charge à inscrire au business case.]_

## 2. Inventaire des sources de données

_[Qualité notée de 1 à 5 : 5 fiable et complète, 4 fiable avec des défauts connus, 3 utilisable avec précautions, 2 lacunaire ou peu fiable, 1 inexploitable. Indiquer le constat qui fonde la note.]_

| Source | Contenu | Application | Qualité | Fraîcheur | Accès | Propriétaire | Sensibilité |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | _[Volume, profondeur, structuré ou texte libre]_ | | _[Note et constat]_ | _[Temps réel, quotidienne, à la demande]_ | _[API, export, écran uniquement]_ | _[Nom ou direction]_ | _[Données personnelles, financières, internes]_ |

## 3. Cartographie applicative

| Application | Rôle dans le processus | API en lecture | API en écriture | Événements | Environnement de test | Propriétaire |
| --- | --- | --- | --- | --- | --- | --- |
| | | _[Oui, non, documentée ou non, limites]_ | _[Quelles actions, sous quelles conditions]_ | _[Publie, consomme, aucun]_ | | |

**Bilan** : _[Nombre d'applications accessibles par API. Mécanisme d'événements. Ce qui manque pour le processus visé.]_

## 4. Contraintes de sécurité et de conformité

| Exigence | Origine | Conséquence pour la conception | Interlocuteur | Statut |
| --- | --- | --- | --- | --- |
| _[Données personnelles]_ | _[Texte, politique interne, décision]_ | | | _[Acté / À instruire / Ouvert]_ |
| _[Hébergement et sous-traitance]_ | | | | |
| _[Droits d'accès et comptes techniques]_ | | | | |
| _[Actions d'écriture]_ | | | | |
| _[Journalisation et conservation]_ | | | | |
| _[Risques propres aux modèles de langage]_ | | | | |
| _[Réglementation sectorielle et IA]_ | | | | |

## 5. Plateforme IA existante

| Capacité | État chez le client | Écart pour le dispositif visé |
| --- | --- | --- |
| Accès à des modèles | | |
| Recherche documentaire | | |
| Accès des modèles aux outils du SI | | |
| Évaluation | | |
| Observabilité et traces | | |
| Suivi des coûts | | |
| Environnements | | |
| Compétences | | |

## 6. Verdict par cas d'usage

_[Prêt : constructible avec ce qui existe. À préparer : remédiation identifiée, avec un responsable, réalisable avant la date de besoin. Bloquant : aucune remédiation réaliste à l'horizon de la mission, ou décision qui ne relève pas d'elle.]_

| Cas d'usage | Données | Applications | Sécurité et conformité | Plateforme | Verdict | Condition de levée |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | _[Prêt / À préparer / Bloquant]_ | _[Numéros des actions du plan]_ |

## 7. Plan de remédiation

| N° | Action | Cas d'usage débloqués | Responsable | Échéance | Effort estimé | Statut |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | _[Date, et pour quel besoin]_ | | |

**Chemin critique** : _[L'action dont le retard décale la construction.]_

## 8. Ce que la revue ne traite pas

_[Limites acceptées, sujets renvoyés à la feuille de route du SI, mesures restant à faire.]_

<!-- section: exemple -->
# Revue de préparation des données et du SI — Voxalis

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Sponsor** | Claire Besson, Directrice générale adjointe Marché Entreprises |
| **Version** | 2.0 du 6 mars 2026. La version 1.0 du 18 février (inventaire et cartographie) a été présentée au jalon G1 ; la version 2.0 ajoute les verdicts par cas d'usage et le plan de remédiation |
| **Rédacteur** | Léo et Inès, FDE |
| **Contributeurs côté Voxalis** | Architecte SI et data engineer détachés, Marc Dubois (RSSI), Élise Martin (DPO), Thomas Nguyen (Data & IA), Direction Réseau |

## 1. Synthèse

**Verdict global** : le SI de Voxalis permet de construire. Sur les huit cas d'usage instruits, trois sont prêts, deux sont à préparer avec des remédiations compatibles avec un prototype en S18, trois sont bloquants à l'horizon de la mission.

**Trois constats**

1. **Quatre applications sur six exposent des API.** Les deux qui manquent, le test de ligne et la base de connaissances, sont précisément celles dont un diagnostic d'incident a besoin.
2. **Il n'existe aucun bus d'événements.** Aucune application ne sait ce qui change dans une autre. Une interrogation périodique du ticketing suffit pour démarrer ; il faudra mieux avant la généralisation.
3. **La connaissance est le premier risque de qualité.** 35 % des 2 300 articles de la base sont obsolètes. Un système automatisé appliquerait une procédure périmée sans la mettre en doute.

**Décisions demandées au COPIL du 12 mars** : lancer dès maintenant les actions 1, 2 et 6 du plan de remédiation, sans attendre le jalon G4 ; inscrire la charge de la DSI et de la Direction Réseau dans le business case ; porter à 24 mois la conservation de l'historique des alarmes.

## 2. Inventaire des sources de données

Qualité de 1 (inexploitable) à 5 (fiable et complète), constatée sur les 12 mois de tickets et sur des échantillons relus avec les experts N2.

| Source | Contenu | Application | Qualité | Fraîcheur | Accès | Propriétaire | Sensibilité |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tickets et statuts | 420 000 tickets sur 12 mois, statuts horodatés, description et compte rendu en texte libre | CRM et ticketing | 4 : horodatages complets ; motif erroné sur 9 % des tickets ; comptes rendus souvent réduits à une ligne | Temps réel | API, lecture et écriture | Relation Client pour les données, DSI pour l'application | Données personnelles : identité et coordonnées des contacts |
| Dossier client | 38 000 clients PME : contacts, offres, engagements de service | CRM et ticketing | 4 | Temps réel | API, lecture | Marché Entreprises | Données personnelles et contractuelles |
| Parc installé | Équipements, accès et configuration par site | Inventaire du parc | 3 : écarts avec le terrain signalés par les experts N2, non mesurés | À chaque intervention ou modification d'offre ; délai de mise à jour à mesurer | API, lecture | DSI | Adresses des sites, données techniques |
| État du service et alarmes | État des accès et des équipements, alarmes en cours | Supervision réseau | 4 | Temps réel | API, lecture | Direction Réseau | Interne, sensible : topologie du réseau |
| Incidents collectifs | Pannes de zone déclarées, périmètre, heure de rétablissement prévue | Supervision réseau | 3 : déclaration manuelle par l'exploitation, parfois tardive | Dès la déclaration | API, lecture | Direction Réseau | Interne |
| Historique des alarmes | Alarmes passées | Supervision réseau | 2 pour un usage prédictif : 3 mois de profondeur | Sans objet | API, lecture | Direction Réseau | Interne |
| Résultats des tests de ligne | Synchronisation, débit, erreurs | Test de ligne | 2 : non conservés par l'outil, recopiés à la main dans les tickets | À la demande | Écran uniquement | Direction Réseau | Interne ; un test peut provoquer une micro-coupure chez le client |
| État du compte | Factures, impayés, suspensions | Facturation | 5 | Quotidienne | API, lecture ; écriture sous double validation | Direction financière | Financière, élevée |
| Procédures | 2 300 articles de diagnostic et de résolution | Base de connaissances | 2 : 35 % d'articles obsolètes ; ni propriétaire ni date de validation par article | Révision non organisée | Écran uniquement ; export complet possible | Relation Client | Interne |

## 3. Cartographie applicative

| Application | Rôle dans le traitement d'un incident | API en lecture | API en écriture | Événements | Environnement de test | Propriétaire |
| --- | --- | --- | --- | --- | --- | --- |
| CRM et ticketing | Dossier client, tickets, échanges avec le client | Oui, documentée | Oui : mise à jour du ticket, envoi d'un message au client | Aucun ; interrogation périodique possible | Oui | DSI |
| Supervision réseau | État des services, alarmes, incidents collectifs, actions à distance | Oui ; tenue en charge aux heures de pointe à vérifier | Non exposée : les actions à distance se font dans l'interface d'exploitation, réservée aux experts N2 et à l'exploitation | Aucun | Lignes de test de la Direction Réseau | Direction Réseau |
| Inventaire du parc | Équipements et offres par client | Oui | Sans objet pour la mission | Aucun | Oui | DSI |
| Facturation | État du compte | Oui | Oui, sous double validation humaine | Aucun | Oui | Direction financière pour les données, DSI pour l'application |
| Test de ligne | Test de synchronisation et de débit | Non | Non | Aucun | Non | Direction Réseau |
| Base de connaissances | Procédures de diagnostic et de résolution | Non ; export complet possible | Non | Aucun | Sans objet | Relation Client |

**Bilan** : 4 applications sur 6 exposent des API. Aucun bus d'événements. Pour traiter un incident de bout en bout, il manque trois choses : lancer un test de ligne par programme, rechercher dans une base de connaissances fiable, exécuter une action à distance dans un cadre contrôlé.

## 4. Contraintes de sécurité et de conformité

| Exigence | Origine | Conséquence pour la conception | Interlocuteur | Statut |
| --- | --- | --- | --- | --- |
| Minimiser et protéger les données personnelles des contacts clients : identité, coordonnées, adresse du site | RGPD | Analyse d'impact avant le pilote ; masquage dans les traces ; durée de conservation fixée | Élise Martin | À instruire, action 8 |
| Ne pas accéder au contenu des communications ni aux données de trafic des clients | Secret des correspondances, politique interne | Les outils n'exposent que l'état du service, jamais le trafic | Élise Martin, Marc Dubois | Acté |
| Traiter les données dans l'Union européenne, sans réutilisation pour entraîner des modèles tiers | Politique de sécurité de Voxalis | Critère de choix du fournisseur de modèles ; clauses contractuelles à vérifier | Marc Dubois | Conforme pour l'accès actuel ; à revérifier si le fournisseur change |
| Appliquer le moindre privilège : une identité technique par usage, des droits par action, aucun compte générique | Politique de sécurité de Voxalis | Accès au SI par une passerelle unique ; lecture et écriture séparées | Marc Dubois | À instruire, action 5 |
| Encadrer toute écriture sur le réseau : traçable, réversible, limitée à une liste fermée | Direction Réseau, RSSI | Catalogue d'actions autorisées ; approbation humaine au-delà | Marc Dubois, Direction Réseau | À instruire, action 6 |
| Traiter les risques propres aux applications à base de modèles de langage : injection de prompt par le texte d'un client, agentivité excessive, divulgation d'informations | OWASP Top 10 pour les applications LLM | Texte du client traité comme une donnée ; jeu de cas adverses ; limites d'actions par cas | Marc Dubois, Inès | Intégré à l'analyse de risques de la phase Concevoir |
| Qualifier le dispositif et les obligations de transparence envers les clients qui reçoivent des messages produits par un système d'IA | EU AI Act | Qualification et calendrier applicable à établir par le juridique de Voxalis | Élise Martin, direction juridique | Ouvert, action 10 |
| Maintenir la double validation humaine de toute écriture comptable | Contrôle interne financier | Aucune écriture automatisée en facturation | Julien Faure | Acté |

## 5. Plateforme IA existante

| Capacité | État chez Voxalis | Écart pour le dispositif visé |
| --- | --- | --- |
| Accès à des modèles | En place : accès encadré à des modèles de langage, validé par la sécurité, utilisé par la FAQ grand public | Vérifier les quotas et prévoir un repli en cas d'indisponibilité |
| Recherche documentaire | En place sur un corpus public, pour la FAQ | À construire sur la base interne, limitée aux articles validés |
| Accès des modèles aux outils du SI | Inexistant | Passerelle d'outils à construire, sur un standard ouvert tel que MCP |
| Évaluation | Inexistante : aucun jeu de test, aucun des 7 POC mesuré | Jeu d'évaluation annoté par les experts N2, rejoué à chaque évolution |
| Observabilité et traces | Journalisation applicative classique | Trace par cas : appels d'outils, résultats, coûts, selon un standard ouvert tel qu'OpenTelemetry |
| Suivi des coûts | Aucun suivi par usage | Budget par cas et coût par ticket |
| Environnements | Développement et production pour la FAQ | Bac à sable avec tickets anonymisés, API de test et lignes de test |
| Compétences | Équipe Data & IA : science des données et ingénierie de données ; aucune expérience d'agents | Montée en compétences par binômes, dès la phase Concevoir |

## 6. Verdict par cas d'usage

Verdicts pour les huit cas d'usage instruits en détail parmi les quatorze identifiés. Ils alimentent la note de faisabilité du portefeuille présenté le 12 mars.

| Cas d'usage | Données | Applications | Sécurité et conformité | Plateforme | Verdict | Condition de levée |
| --- | --- | --- | --- | --- | --- | --- |
| Qualification et routage automatiques des tickets | 12 mois de tickets ; motifs à corriger sur l'échantillon de référence | API du ticketing en lecture et en écriture | Masquage des données personnelles dans les traces | Jeu d'évaluation à construire | **Prêt** | — |
| Assistant de l'expert N2 | Tickets et parc accessibles ; base de connaissances limitée aux articles validés | API en lecture | Lecture seule | Recherche documentaire à étendre | **Prêt** | Recherche dans la base ouverte au fil des actions 2 et 3 |
| Communication proactive vers le client | États du ticket | API d'envoi de message du ticketing | Transparence envers le client à qualifier ; tout geste commercial reste humain | Pas d'événement : interrogation périodique | **Prêt** | Notification par le ticketing avant la généralisation (action 4) ; qualification juridique (action 10) |
| Diagnostic technique automatisé | Supervision et parc accessibles ; test de ligne inaccessible ; procédures peu fiables | 3 des 5 applications nécessaires sont accessibles ; manquent le test de ligne et la base de connaissances | Lecture seule, mais un test de ligne peut couper le service | Passerelle d'outils à construire | **À préparer** | Actions 1, 2, 3, 5 et 7 avant le prototype (S18) |
| Résolution autonome des 12 motifs récurrents | Procédures des 12 motifs à valider | Aucune action à distance exposée à un système automatisé | Écriture sur le réseau : liste fermée, droits, traçabilité, approbation | Passerelle et garde-fous | **À préparer** | Actions 2, 5 et 6 ; avis du RSSI au jalon G4 |
| Détection prédictive des pannes | Historique d'alarmes de 3 mois, tests de ligne non conservés | API de supervision suffisante | Sans difficulté particulière | Sans objet | **Bloquant** | Aucune à l'horizon de la mission. Conserver l'historique dès maintenant (action 11) pour rouvrir le sujet dans un an |
| Voicebot de premier niveau | Échanges téléphoniques ni transcrits ni reliés aux tickets | Aucune des six applications ne couvre la voix | Traitement de la voix : analyse d'impact spécifique | Aucune brique vocale | **Bloquant** | Hors de portée de la mission ; à réexaminer après la généralisation |
| Génération automatique d'avoirs | État du compte fiable | Écriture en facturation sous double validation | Toute écriture comptable exige deux validations humaines | Sans objet | **Bloquant** | Décision de la direction financière, hors mission |

Trois cas prêts, deux à préparer, trois bloquants.

## 7. Plan de remédiation

| N° | Action | Cas d'usage débloqués | Responsable | Échéance | Effort estimé | Statut au 6 mars |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Exposer le test de ligne par une API : lancement, lecture du résultat, conservation des résultats | Diagnostic | Karim Haddad, avec la Direction Réseau | 30 avril (S16), pour le prototype en S18 | 6 à 8 semaines, à confirmer par la DSI | Cadrage en cours |
| 2 | Revoir les articles des 12 motifs récurrents ; dater et attribuer chaque article validé ; archiver les obsolètes | Diagnostic, Résolution, Assistant N2 | Sophie Lambert, avec les experts N2 | Essai chronométré sur deux motifs le 20 mars ; 12 motifs revus le 7 mai (S17) | Moins de six semaines si l'essai le confirme | Essai planifié |
| 3 | Construire un index de recherche sur les seuls articles validés | Diagnostic, Assistant N2 | Thomas Nguyen | 7 mai (S17) | 3 semaines | À lancer après l'essai |
| 4 | Détecter les changements d'état des tickets : interrogation périodique pour le prototype, notification par le ticketing ensuite | Communication proactive, puis tous | Karim Haddad | Interrogation : S18. Notification : avant la première vague (S30) | À chiffrer par la DSI | Ouvert |
| 5 | Créer les identités techniques et la matrice de droits par outil ; faire passer tous les accès par une passerelle unique | Tous | Marc Dubois, référent sécurité, architecte SI | 6 mai (S17) | 2 semaines | Principe accepté par le RSSI |
| 6 | Définir avec la Direction Réseau la liste fermée des actions à distance autorisées, leurs conditions et leur réversibilité | Résolution | Direction Réseau, Marc Dubois | Jalon G4 (7 mai) | 4 ateliers | À lancer |
| 7 | Vérifier la tenue en charge de la supervision aux heures de pointe | Diagnostic | Karim Haddad | 3 avril | Un test de charge | Planifié |
| 8 | Mener l'analyse d'impact sur les données personnelles | Tous | Élise Martin | Lancée en S10, conclue avant le pilote (S22) | À préciser par la DPO | À lancer |
| 9 | Mettre à disposition un bac à sable : tickets anonymisés, API de test, lignes de test | Tous | Thomas Nguyen, data engineer | 10 avril (S13) | 3 semaines | À lancer |
| 10 | Faire qualifier le dispositif au regard de l'EU AI Act par le juridique de Voxalis | Communication proactive, puis tous | Élise Martin | Jalon G4 (7 mai) | À préciser | Ouvert |
| 11 | Porter à 24 mois la conservation de l'historique des alarmes | Détection prédictive, plus tard | Direction Réseau | Décision au COPIL du 12 mars | Faible | Proposé |

**Chemin critique** : l'action 1. Le diagnostic d'un incident d'accès passe par un test de ligne ; sans API, pas de prototype en S18. Viennent ensuite les actions 2 et 6, qui dépendent de la disponibilité des experts N2 et de la Direction Réseau.

## 8. Ce que la revue ne traite pas

- **Le bus d'événements.** Sa mise en place relève de la feuille de route du SI, pas de la mission. Le dispositif est conçu pour s'en passer.
- **Les écarts de l'inventaire du parc.** Signalés par les experts, non mesurés. Ils le seront pendant le prototype, en comparant l'inventaire aux résultats des tests.
- **Les six autres cas d'usage identifiés.** Ils n'ont pas été instruits en détail à ce stade et restent au portefeuille avec la mention « non instruit ».
- **Le coût des remédiations.** Les efforts sont des estimations. Ils sont chiffrés par la DSI pour le business case du 12 mars.
