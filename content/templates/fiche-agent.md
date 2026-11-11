---
id: fiche-agent
titre: "Fiche agent"
resume: "La spécification complète d'un agent : mission, périmètre, outils, autonomie, garde-fous et critères d'évaluation. Le contrat entre le métier, l'ingénierie et l'exploitation."
phase: concevoir
type: livrable
format: document
effort: "3 à 4 h par agent"
tags: [agent, specification, conception]
frameworks: [anatomie-agent, niveaux-autonomie, conception-outils, garde-fous, evaluation-agents]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La fiche agent décrit un agent comme on décrirait un poste : ce qu'il doit accomplir, avec quels moyens, dans quelles limites et comment on juge son travail. Elle se rédige **avant** le system prompt et sert de référence unique au métier (qui valide la mission et les limites), à l'ingénierie (qui implémente), à la sécurité (qui valide les droits) et à l'exploitation (qui opère).

## Quand l'utiliser

Dès qu'un cas d'usage est placé au barreau 4 ou 5 de [l'échelle des solutions](/frameworks/faut-il-un-agent). Une fiche par agent. Dans un système multi-agents, les fiches complètent le [dossier d'architecture](/templates/dossier-architecture-multi-agents), qui décrit les interactions.

## Comment le remplir

1. Commencer par la mission et les critères de succès, avec le propriétaire métier. Si la mission ne tient pas en une phrase, l'agent est trop large.
2. Lister ce que l'agent ne fait pas. Cette section évite la majorité des incidents.
3. Décrire chaque outil avec son niveau de risque. Tout outil qui écrit doit avoir une règle d'approbation explicite.
4. Fixer le niveau d'autonomie outil par outil, pas globalement.
5. Terminer par les modes de défaillance : pour chacun, comment on le détecte et ce qui se passe.

L'outil [Agent Designer](/outils/agent-designer) génère cette fiche à partir d'un formulaire guidé.

## Critères de qualité

- [ ] La mission tient en une phrase et nomme un résultat, pas une activité.
- [ ] Les critères de succès sont mesurables et reliés à un indicateur métier.
- [ ] Chaque outil a un propriétaire, un niveau de risque et une règle d'approbation.
- [ ] Les conditions d'escalade vers un humain sont explicites et testables.
- [ ] Chaque mode de défaillance a une détection et une parade.
- [ ] Un propriétaire métier nommé est responsable de l'agent.

<!-- section: template -->
# Fiche agent — _[Nom de l'agent]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Système** | _[Nom du système auquel l'agent appartient]_ |
| **Version** | _[0.1]_ du {{date}} |
| **Propriétaire métier** | _[Nom, fonction : responsable des résultats de l'agent]_ |
| **Responsable technique** | _[Nom, fonction]_ |
| **Rédacteur** | {{auteur}} |

## 1. Mission

**En une phrase** : _[Verbe d'action + résultat produit + pour qui. Exemple : « Établir le diagnostic technique d'un incident pour que le cas soit résolu sans allers-retours. »]_

**Résultat attendu** : _[Ce qui existe quand l'agent a terminé : un diagnostic, une décision, un document, une action exécutée]_

**Critères de succès**

| Critère | Mesure | Cible |
| --- | --- | --- |
| _[Qualité]_ | _[Comment on le mesure]_ | _[Seuil]_ |
| _[Délai]_ | | |
| _[Coût]_ | | |

## 2. Périmètre

**L'agent fait** : _[Liste des tâches couvertes]_

**L'agent ne fait pas** : _[Liste explicite : tâches exclues, décisions réservées à l'humain, populations ou cas exclus]_

**Déclencheurs** : _[Événement, demande d'un utilisateur, appel par un autre agent, planification]_

**Utilisateurs et interlocuteurs** : _[Qui lui parle, qui reçoit ses résultats]_

## 3. Entrées et sorties

| | Contenu | Format | Source ou destinataire |
| --- | --- | --- | --- |
| **Entrées** | | | |
| **Sorties** | | | |

## 4. Outils

| Outil | Ce qu'il fait | Lecture / écriture | Risque | Règle d'approbation | Propriétaire |
| --- | --- | --- | --- | --- | --- |
| _[nom.action]_ | | | _[Faible / Moyen / Élevé]_ | _[Aucune / Humaine au-delà de… / Toujours]_ | |

## 5. Connaissances et contexte

- **Instructions permanentes** : _[Règles métier, politiques, ton]_
- **Connaissances consultées à la demande** : _[Bases documentaires, référentiels, historique]_
- **Mémoire** : _[Ce qui est conservé pendant le cas, entre les cas, et ce qui ne doit jamais l'être]_
- **Données sensibles** : _[Catégories traitées, base légale, règles de masquage]_

## 6. Autonomie et supervision

**Niveau d'autonomie global** : _[L1 à L5, voir les niveaux d'autonomie]_

| Situation | Comportement de l'agent | Rôle de l'humain |
| --- | --- | --- |
| _[Cas nominal]_ | | |
| _[Action à risque]_ | | |
| _[Incertitude ou information manquante]_ | | |

**Conditions d'escalade** : _[Liste testable : seuil de confiance, type de client, montant, nombre de tentatives]_

**Conditions d'élargissement de l'autonomie** : _[Preuves exigées pour passer au niveau supérieur]_

## 7. Garde-fous

| Risque | Garde-fou | Type |
| --- | --- | --- |
| | | _[Entrée / Sortie / Outil / Droit d'accès / Limite de budget]_ |

**Limites dures** : _[Nombre maximal d'étapes, budget par cas, délai maximal, actions interdites]_

## 8. Évaluation

| Dimension | Jeu de test | Méthode de notation | Seuil de passage |
| --- | --- | --- | --- |
| | | _[Code / Modèle juge / Expert]_ | |

**Suivi en production** : _[Indicateurs suivis, fréquence d'échantillonnage humain, alertes]_

## 9. Modes de défaillance

| Défaillance | Détection | Comportement attendu | Parade |
| --- | --- | --- | --- |
| | | | |

## 10. Exploitation

- **Coût cible par exécution** : _[Montant]_
- **Délai cible** : _[Durée]_
- **Journalisation** : _[Ce qui est tracé, durée de conservation]_
- **Procédure d'arrêt** : _[Qui peut désactiver l'agent, comment, et quel est le mode dégradé]_

<!-- section: exemple -->
# Fiche agent — Agent Diagnostic

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Système** | SAV Augmenté |
| **Version** | 1.2 du 11 mai 2026 |
| **Propriétaire métier** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Responsable technique** | Thomas Nguyen, Responsable Data & IA |
| **Rédacteur** | Léo, FDE |

## 1. Mission

**En une phrase** : établir le diagnostic technique d'un incident PME, preuves à l'appui, pour que le cas soit résolu sans aller-retour entre niveaux de support.

**Résultat attendu** : un diagnostic structuré attaché au ticket, comprenant la cause probable, le niveau de confiance, les vérifications effectuées et la remédiation recommandée.

**Critères de succès**

| Critère | Mesure | Cible |
| --- | --- | --- |
| Justesse du diagnostic | Concordance avec le diagnostic de l'expert N2 sur le golden set | ≥ 90 % |
| Délai | Temps entre la qualification du ticket et le diagnostic | ≤ 3 min au 95e centile |
| Coût | Coût d'inférence par diagnostic | ≤ 0,20 € |
| Utilité | Part des diagnostics acceptés sans correction par le conseiller | ≥ 85 % |

## 2. Périmètre

**L'agent fait** : interroger la supervision réseau, lancer un test de ligne, lire l'inventaire du parc client, rechercher les incidents connus et les articles de la base de connaissances, corréler ces éléments, formuler un diagnostic.

**L'agent ne fait pas** : aucune action de remédiation, aucune modification de configuration, aucun contact avec le client, aucun diagnostic sur les liaisons des clients grands comptes ni sur les incidents de sécurité.

**Déclencheurs** : appel par l'Orchestrateur de cas dès qu'un ticket est qualifié « incident technique ».

**Utilisateurs et interlocuteurs** : l'Orchestrateur de cas reçoit le diagnostic ; le superviseur de cas le consulte dans son poste de travail.

## 3. Entrées et sorties

| | Contenu | Format | Source ou destinataire |
| --- | --- | --- | --- |
| **Entrées** | Ticket qualifié : client, service, motif, description, urgence | JSON | Orchestrateur de cas |
| **Sorties** | Cause probable, confiance (élevée, moyenne, faible), preuves, remédiation recommandée, informations manquantes | JSON validé par schéma | Orchestrateur de cas |

## 4. Outils

| Outil | Ce qu'il fait | Lecture / écriture | Risque | Règle d'approbation | Propriétaire |
| --- | --- | --- | --- | --- | --- |
| `supervision.etat_service` | État et alarmes du service du client | Lecture | Faible | Aucune | Direction Réseau |
| `ligne.lancer_test` | Test de synchronisation et de débit | Lecture, avec micro-coupure possible | Moyen | Aucune hors heures ouvrées du client, sinon humaine | Direction Réseau |
| `inventaire.lire_parc` | Équipements et offres du client | Lecture | Faible | Aucune | DSI |
| `incidents.rechercher_connus` | Incidents collectifs en cours par zone | Lecture | Faible | Aucune | Direction Réseau |
| `kb.rechercher` | Procédures de diagnostic | Lecture | Faible | Aucune | Relation Client |

## 5. Connaissances et contexte

- **Instructions permanentes** : arbre de diagnostic des 12 motifs récurrents, règles de priorité (un incident collectif connu prime sur toute autre hypothèse), format de sortie.
- **Connaissances consultées à la demande** : procédures de la base de connaissances, limitées aux articles validés depuis moins de 12 mois.
- **Mémoire** : résultats des vérifications conservés pendant la durée du cas. Aucune mémoire entre les cas.
- **Données sensibles** : identité du contact client et adresse du site. Masquées dans les journaux, validé avec Élise Martin (DPO).

## 6. Autonomie et supervision

**Niveau d'autonomie global** : L3, autonomie encadrée en lecture seule.

| Situation | Comportement de l'agent | Rôle de l'humain |
| --- | --- | --- |
| Motif récurrent, preuves concordantes | Produit le diagnostic, confiance élevée | Aucun, contrôle par échantillonnage (5 % des cas) |
| Test de ligne en heures ouvrées du client | Demande l'approbation avant de lancer le test | Le superviseur de cas approuve ou refuse |
| Preuves contradictoires ou insuffisantes | Produit un diagnostic à confiance faible et liste ce qui manque | L'expert N2 reprend le cas |

**Conditions d'escalade** : confiance faible, plus de 8 appels d'outils sans conclusion, indisponibilité d'un outil pendant plus de 60 secondes, suspicion d'incident de sécurité.

**Conditions d'élargissement de l'autonomie** : passage à L4 sur un motif après 500 diagnostics consécutifs avec une justesse d'au moins 95 % sur ce motif, validé en comité de gouvernance IA.

## 7. Garde-fous

| Risque | Garde-fou | Type |
| --- | --- | --- |
| Instruction malveillante dans la description du ticket | Le texte du client est transmis comme donnée, jamais comme instruction ; jeu adverse de 120 cas | Entrée |
| Diagnostic inventé sans preuve | Chaque cause doit citer au moins un résultat d'outil, vérifié par code | Sortie |
| Accès à un client hors périmètre | Les outils filtrent sur l'identifiant client du ticket | Droit d'accès |
| Boucle d'appels | 12 appels d'outils au maximum par cas | Limite de budget |

**Limites dures** : 12 appels d'outils, 0,50 € et 5 minutes par cas. Aucun outil d'écriture.

## 8. Évaluation

| Dimension | Jeu de test | Méthode de notation | Seuil de passage |
| --- | --- | --- | --- |
| Justesse de la cause | 600 cas du golden set | Comparaison à l'annotation de l'expert, par code | ≥ 90 % |
| Qualité des preuves | 150 cas tirés du golden set | Modèle juge avec grille, calibré sur 50 cas notés par les experts | ≥ 4 sur 5 en moyenne |
| Robustesse | 120 cas adverses | Code : aucune sortie hors schéma, aucune instruction suivie | 100 % |
| Calibration | 600 cas | Les diagnostics à confiance élevée sont justes dans au moins 97 % des cas | ≥ 97 % |

**Suivi en production** : justesse sur l'échantillon hebdomadaire de 5 % revu par les experts N2, taux d'escalade, taux de correction par les conseillers. Alerte si la justesse hebdomadaire passe sous 88 %.

## 9. Modes de défaillance

| Défaillance | Détection | Comportement attendu | Parade |
| --- | --- | --- | --- |
| Supervision indisponible | Erreur ou délai dépassé de l'outil | Diagnostic à confiance faible, escalade | Voie assistée, le conseiller diagnostique manuellement |
| Diagnostic faux à confiance élevée | Agent Qualité, réouverture du ticket | Signalement, cas ajouté au golden set | Revue hebdomadaire, correction des instructions |
| Incident collectif non encore déclaré | Plus de 5 diagnostics identiques sur une zone en 30 minutes | Alerte à la Direction Réseau | Corrélation ajoutée dans l'Orchestrateur |
| Dérive après mise à jour du modèle | Baisse de score sur le golden set rejoué chaque nuit | Blocage du déploiement | Version du modèle figée, retour arrière en une commande |

## 10. Exploitation

- **Coût cible par exécution** : 0,12 € constaté pendant le pilote.
- **Délai cible** : 95 secondes en médiane.
- **Journalisation** : trace complète de chaque cas (appels d'outils, résultats, sortie), conservée 13 mois, données personnelles masquées.
- **Procédure d'arrêt** : l'équipe AgentOps ou Nadia Cherif désactivent l'agent depuis la console d'exploitation ; les tickets basculent en voie assistée sans diagnostic automatique.
