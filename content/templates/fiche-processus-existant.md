---
id: fiche-processus-existant
titre: "Fiche processus existant"
resume: "La description mesurée d'un processus tel qu'il se déroule réellement : étapes, acteurs, outils, temps de traitement et d'attente, passages de relais, irritants et exceptions. La référence contre laquelle la cible sera mesurée."
phase: diagnostiquer
type: canevas
format: tableau
effort: "2 jours par processus, après les entretiens et l'observation"
tags: [processus, diagnostic, mesure]
frameworks: [cartographie-processus, decomposition-taches, reinvention-zero-base]
---

<!-- section: mode-emploi -->
## À quoi ça sert

La fiche fixe, chiffres à l'appui, ce qui se passe réellement entre le déclencheur et le résultat : qui fait quoi, avec quel outil, en combien de temps, et où le cas attend. Elle répond à la question qui décide de tout le reste : où part le délai ? Signée, elle devient la référence de la mission et le point de départ du [processus cible](/templates/processus-cible-ai-native).

## Quand l'utiliser

En phase [Diagnostiquer](/methode/diagnostiquer), une fois les journaux extraits et l'observation faite. Une fiche par processus du périmètre. La méthode est décrite dans [Cartographier et mesurer le processus existant](/frameworks/cartographie-processus).

## Comment le remplir

1. Borner le processus avec le SIPOC : déclencheur, fin, unité d'œuvre, démarrage et arrêt du compteur.
2. Lister les étapes réelles, pas celles de la procédure. Cinq à dix suffisent.
3. Séparer partout le temps de traitement du temps d'attente. Moyenner sur l'ensemble des cas, en indiquant la part des cas qui passent par chaque étape.
4. Décrire chaque passage de relais : ce qui est transmis, ce qui se perd.
5. Vérifier que les temps des étapes redonnent le délai total. Sinon, il manque une étape ou une attente.
6. Écrire « non mesuré » plutôt qu'une estimation.
7. Faire corriger par le terrain, puis signer par le propriétaire du processus et la finance.

## Critères de qualité

- [ ] Le compteur a un début et une fin définis, et une source.
- [ ] La somme des temps des étapes égale le délai de bout en bout.
- [ ] Chaque chiffre porte sa source : journaux, observation ou déclaration.
- [ ] Chaque passage de relais dit ce qui se perd.
- [ ] Les exceptions sont listées avec leur fréquence, même approximative.
- [ ] Des opérationnels ont relu et corrigé la fiche.

<!-- section: template -->
# Fiche processus existant — {{client}}

| | |
| --- | --- |
| **Mission** | {{mission}} |
| **Domaine** | {{domaine}} |
| **Processus** | _[Nom du processus, formulé du déclencheur au résultat]_ |
| **Propriétaire du processus** | _[Nom, fonction]_ |
| **Version** | _[1.0]_ du {{date}} |
| **Rédacteur** | {{auteur}} |
| **Sources** | _[Journaux : période et volume. Observation : lieu et durée. Entretiens : nombre]_ |
| **Validation** | _[Qui a relu sur le terrain. Qui signe la référence, à quelle date]_ |

## En bref

_[Trois constats chiffrés, conclusion d'abord. Ce sont eux que le comité retiendra.]_

1.
2.
3.

## 1. Identité du processus

| Rubrique | Contenu |
| --- | --- |
| Résultat attendu | _[Du point de vue de celui qui le reçoit]_ |
| Déclencheur | _[L'événement qui démarre le compteur]_ |
| Fin | _[L'événement qui arrête le compteur]_ |
| Unité d'œuvre | _[Un dossier, un ticket, une commande]_ |
| Volume annuel | |
| Délai de bout en bout | _[Moyenne, et médiane si disponible. Préciser : heures d'horloge ou heures ouvrées]_ |
| Chiffres clés | _[Nombre d'étapes, de passages de relais, d'outils]_ |

## 2. SIPOC

| Fournisseurs | Entrées | Processus | Sorties | Clients |
| --- | --- | --- | --- | --- |
| _[Qui fournit]_ | _[Ce qui entre]_ | _[5 à 7 macro-étapes]_ | _[Ce qui sort]_ | _[Qui reçoit]_ |

## 3. Étapes

_[Temps de traitement : durée pendant laquelle un acteur a le cas en main. Temps d'attente : durée pendant laquelle le cas n'avance pas, en file avant l'étape ou dans l'attente d'un tiers. Les deux en délai écoulé, moyennés sur l'ensemble des cas. La charge de travail, en minutes réellement passées, se mesure à part pour le calcul du coût.]_

| N° | Étape | Acteur | Outils | Part des cas et volume annuel | Temps de traitement | Temps d'attente | Taux d'erreur ou de reprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | |
| 2 | | | | | | | |
| **Total** | | | | | | | |

## 4. Passages de relais

| N° | De, vers | Part des cas | Ce qui est transmis | Mode de transmission | Attente moyenne | Ce qui se perd |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | _[File, message, appel, réunion]_ | | _[Information, priorité, contexte]_ |

## 5. Décomposition du délai

| Poste | Étapes ou relais concernés | Durée | Part du délai |
| --- | --- | --- | --- |
| Traitement effectif | | | |
| Collecte d'informations | | | |
| Attente interne (files, passages de relais) | | | |
| Attente externe (client, tiers) | | | |
| **Total** | | | 100 % |

**Lecture** : _[Ce que la décomposition change à la compréhension du problème. Segmenter si la moyenne mélange des populations différentes.]_

## 6. Irritants

| Irritant | Étapes | Qui le subit | Fréquence | Effet mesuré | Preuve |
| --- | --- | --- | --- | --- | --- |
| | | | | | _[Journaux / Observation / Entretiens]_ |

## 7. Exceptions et variantes

| Cas | Fréquence | Traitement actuel | Point d'attention pour la cible |
| --- | --- | --- | --- |
| | _[Chiffrée, ou « non mesurée »]_ | | |

## 8. Données produites et consommées

| Donnée | Étapes | Produite ou consommée | Système | Qualité constatée | Accès |
| --- | --- | --- | --- | --- | --- |
| | | | | | _[API, export, écran uniquement]_ |

## 9. Indicateurs

| Indicateur | Définition | Valeur de référence | Source | Fiabilité |
| --- | --- | --- | --- | --- |
| | | | | _[Bonne / Moyenne / Faible, et pourquoi]_ |

## 10. Limites de la mesure

_[Ce que la fiche ne mesure pas, ce qui repose sur un échantillon, ce qui reste à confirmer et par qui.]_

<!-- section: exemple -->
# Fiche processus existant — Voxalis

| | |
| --- | --- |
| **Mission** | Réinvention de l'Assistance & SAV Entreprises |
| **Domaine** | Assistance & SAV Entreprises |
| **Processus** | Traitement d'un incident technique PME, du signalement au rétablissement confirmé |
| **Propriétaire du processus** | Sophie Lambert, Directrice Relation Client Entreprises |
| **Version** | 1.2 du 18 février 2026 |
| **Rédacteur** | Hugo, FDE, avec Léo et les deux experts N2 détachés |
| **Sources** | 12 mois de tickets avec changements de statut horodatés. 3 jours d'observation sur le plateau de Nantes, du 3 au 5 février. 22 entretiens |
| **Validation** | Relue par les experts N2 détachés et restituée au plateau de Nantes le 17 février. Référence soumise à la signature de Sophie Lambert et de Julien Faure au jalon G1 du 19 février |

## En bref

1. **Sur 31 h de délai moyen, 18 % seulement sont du traitement.** L'attente entre N1 et N2 pèse 41 %, la collecte et le diagnostic manuels 23 %, l'attente du client 18 %.
2. **La moyenne cache deux populations.** Un incident résolu au premier contact (54 %) est clos en moins d'une heure. Un incident transféré au N2 (46 %) met en moyenne 66 h, près de trois jours.
3. **Le travail de collecte est fait deux fois.** Le dossier arrive incomplet au N2, qui refait les vérifications du N1 : constaté sur 41 des 50 tickets transférés relus.

## 1. Identité du processus

| Rubrique | Contenu |
| --- | --- |
| Résultat attendu | Le service du client est rétabli et le client le sait |
| Déclencheur | Un client PME signale un incident ; le compteur démarre à l'ouverture du ticket |
| Fin | Clôture du ticket après confirmation du rétablissement |
| Unité d'œuvre | Un incident technique |
| Volume annuel | Environ 260 000 incidents, soit 62 % des 420 000 tickets du domaine |
| Délai de bout en bout | 31 h en moyenne, en heures d'horloge, nuits et week-ends compris |
| Chiffres clés | 9 étapes, 4 passages de relais, 6 outils |

## 2. SIPOC

| Fournisseurs | Entrées | Processus | Sorties | Clients |
| --- | --- | --- | --- | --- |
| Client PME | Signalement : service touché, symptômes | Ouvrir et qualifier | Service rétabli | Client PME |
| DSI | Contrat, parc installé, état du compte | Collecter et diagnostiquer au N1 | Client informé du rétablissement | Chargé de compte du Marché Entreprises |
| Direction Réseau | État du service, alarmes, résultat du test de ligne | Résoudre au N1 ou transférer | Ticket clos et documenté | Direction Relation Client, pour ses indicateurs |
| Relation Client | Procédures de la base de connaissances | Diagnostiquer et remédier au N2 | Demande d'intervention sur site, le cas échéant | Back-office |
| | | Vérifier, informer, clore | Signalement d'un incident collectif | Direction Réseau |

## 3. Étapes

Les temps sont des délais écoulés, en heures, moyennés sur l'ensemble des incidents : une étape qui ne concerne que 46 % des incidents compte pour 46 % de sa durée propre. Le temps de traitement est le temps pendant lequel le ticket est en cours chez un acteur, qui mène plusieurs dossiers de front ; ce n'est pas sa charge de travail. Sources : horodatages de statut, recalés par le chronométrage de l'observation.

```mermaid
flowchart LR
  E1["1. Ouverture du ticket - N1"] --> E2["2. Qualification - N1"]
  E2 --> E3["3. Collecte et premier diagnostic - N1"]
  E3 --> E4["4. Résolution ou transfert - N1"]
  E4 -->|Résolu au premier contact| E9["9. Vérification et clôture - N1"]
  E4 -->|Relais 1| E5["5. Reprise et nouvelle collecte - N2"]
  E5 --> E6["6. Diagnostic approfondi - N2"]
  E6 -->|Relais 2| E7["7. Complément auprès du client - N1"]
  E7 -->|Relais 3| E8["8. Remédiation - N2"]
  E6 --> E8
  E8 -->|Relais 4| E9
```

| N° | Étape | Acteur | Outils | Part des incidents et volume annuel | Temps de traitement | Temps d'attente | Taux d'erreur ou de reprise |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Réception du signalement et ouverture du ticket | Conseiller N1 | CRM et ticketing | 100 %, 260 000 | 0,1 h | — | Non mesuré : tickets en double pour un même incident |
| 2 | Qualification : client, service, motif, urgence, état du compte | Conseiller N1 | CRM et ticketing, inventaire du parc, facturation | 100 %, 260 000 | 0,2 h | — | 9 % d'erreurs de qualification |
| 3 | Collecte d'informations et premier diagnostic | Conseiller N1 | Supervision réseau, test de ligne, inventaire du parc, base de connaissances | 100 %, 260 000 | 0,6 h | — | Non mesuré : résultats de test recopiés à la main dans le ticket |
| 4 | Résolution au premier contact, ou rédaction du transfert | Conseiller N1 | CRM et ticketing, test de ligne | 100 %, 260 000 | 0,2 h | — | Dossier de transfert incomplet : au moins une vérification refaite au N2 sur 41 des 50 tickets relus |
| 5 | Prise en charge par le N2 et nouvelle collecte | Expert N2 | Supervision réseau, test de ligne, inventaire du parc | 46 %, 120 000 | 2,4 h | 6,9 h dans la file du N2 (relais 1) | Voir étape 4 |
| 6 | Diagnostic approfondi | Expert N2 | Supervision réseau, test de ligne, base de connaissances | 46 %, 120 000 | 3,9 h | — | Non mesuré |
| 7 | Complément auprès du client : information manquante, manipulation, créneau | Conseiller N1 | CRM et ticketing | 23 %, 60 000 | 0,1 h | 1,5 h dans la file du N1 (relais 2), puis 3,8 h d'attente du client | Non mesuré : nombre de tentatives de rappel |
| 8 | Remédiation : action à distance, ou demande d'intervention | Expert N2 | Supervision réseau, CRM et ticketing | 46 %, 120 000 | 4,7 h | 3,1 h dans la file du N2 au retour du complément (relais 3) | Non mesuré |
| 9 | Vérification du rétablissement, information du client et clôture | Conseiller N1 | CRM et ticketing, test de ligne | 100 %, 260 000 | 0,5 h | 1,2 h dans la file du N1 (relais 4), puis 1,8 h d'attente du client | 14 % de réouvertures |
| **Total** | | | 6 outils | | **12,7 h** | **18,3 h** | **31,0 h de bout en bout** |

## 4. Passages de relais

| N° | De, vers | Part des incidents | Ce qui est transmis | Mode de transmission | Attente moyenne | Ce qui se perd |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | N1 vers N2 | 46 % | Le ticket, avec un commentaire libre | Réaffectation à la file du N2, sans échange oral | 6,9 h, soit 15 h par ticket transféré | Les résultats des vérifications déjà faites, ce qui a été dit au client |
| 2 | N2 vers N1 | 23 % | Une demande de complément | Commentaire dans le ticket, retour en file du N1 | 1,5 h, soit 6,5 h par ticket concerné | Le raisonnement de l'expert : le conseiller rappelle le client sans savoir ce qui est cherché |
| 3 | N1 vers N2 | 23 % | La réponse du client | Retour en file du N2, au rang d'un nouveau ticket | 3,1 h, soit 13,5 h par ticket concerné | L'ancienneté du ticket |
| 4 | N2 vers N1 | 46 % | L'action effectuée, à confirmer avec le client | Changement de statut | 1,2 h, soit 2,6 h par ticket transféré | Rien, mais le client n'a reçu aucune nouvelle depuis le transfert |
| **Total** | | | | | **12,7 h** | |

Les quatre relais ont lieu entre N1 et N2, dans les deux sens. Aucun ne comporte d'échange oral.

## 5. Décomposition du délai

| Poste | Étapes ou relais concernés | Durée | Part du délai |
| --- | --- | --- | --- |
| Attente entre N1 et N2 | Relais 1 à 4 | 12,7 h | 41 % |
| Collecte d'informations et diagnostic manuel dans 6 outils | Étapes 2, 3, 5 et 6 | 7,1 h | 23 % |
| Attente du client | Étapes 7 et 9 | 5,6 h | 18 % |
| Traitement effectif | Étapes 1, 4, 7, 8 et 9 | 5,6 h | 18 % |
| **Total** | | **31,0 h** | **100 %** |

**Lecture**

- Accélérer le traitement ne peut agir que sur 18 % du délai. Les deux premiers postes, 64 % du délai, tiennent à l'organisation en niveaux et à la dispersion de l'information dans six outils.
- La moyenne de 31 h ne décrit aucun client réel. Les 54 % d'incidents résolus au premier contact sont clos en moins d'une heure ; les 46 % transférés portent la quasi-totalité du délai, avec 66 h en moyenne.
- Le flux est concentré : 58 % des incidents relèvent de 12 motifs récurrents dont la résolution est documentée.
- L'hypothèse posée le 14 janvier est confirmée. L'ouverture du ticket pèse 0,1 h : la demande initiale de chatbot visait le seul point du processus où il n'y a pas de délai à gagner.

## 6. Irritants

| Irritant | Étapes | Qui le subit | Fréquence | Effet mesuré | Preuve |
| --- | --- | --- | --- | --- | --- |
| Le dossier arrive incomplet au N2, qui refait les vérifications | 4 et 5 | Expert N2, client | 41 des 50 tickets transférés relus | 2,4 h de nouvelle collecte en moyenne | Relecture de tickets avec un expert N2 |
| Six applications sans lien entre elles, résultats recopiés à la main | 2, 3, 5 et 6 | Conseiller N1, expert N2 | Chaque incident | 7,1 h de collecte et de diagnostic | Observation |
| Après le transfert, le conseiller ne sait plus où en est le ticket | 5 à 8 | Conseiller N1, client | Chaque transfert | Le client rappelle et n'obtient pas de réponse ; non chiffré, les rappels n'étant pas reliés aux tickets | Observation, entretiens |
| Le ticket qui revient d'un complément reprend la file sans priorité | 7 et 8 | Client | 23 % des incidents | 13,5 h d'attente au retour, par ticket concerné | Journaux |
| La base de connaissances n'est pas fiable | 3 et 6 | Conseiller N1 surtout | 35 % des 2 300 articles sont obsolètes | Aide-mémoire personnels, transferts de précaution | Audit de la base, observation |
| Le client n'est informé qu'à la clôture | 5 à 9 | Client | Chaque transfert | Satisfaction de 3,6 sur 5, 14 % de réouvertures | Enquêtes, journaux |
| Un incident collectif est traité ticket par ticket | 3 et 6 | Conseiller N1, expert N2 | Non mesurée | Diagnostics individuels inutiles pendant une panne de zone | Observation : aucun événement ne relie la supervision au ticketing |

## 7. Exceptions et variantes

| Cas | Fréquence | Traitement actuel | Point d'attention pour la cible |
| --- | --- | --- | --- |
| Incident collectif sur une zone | Non mesurée | La supervision le détecte, le ticketing l'ignore : chaque conseiller le découvre seul | Un incident collectif connu doit primer sur tout diagnostic individuel |
| Intervention sur site ou échange de matériel | Non isolée dans les données | Le N2 émet une demande au back-office, qui planifie | Délais longs, comptés dans la remédiation (étape 8) ; hors périmètre de la mission |
| Compte suspendu pour impayé | Rare | Détecté en qualification par la facturation, renvoyé au recouvrement | Ce n'est pas un incident technique : à sortir du flux dès la qualification |
| Test de ligne pendant l'activité du client | Fréquent en journée | Le conseiller prévient le client, le test provoque une micro-coupure | Règle explicite à fixer pour les heures ouvrées du client |
| Suspicion d'incident de sécurité | Rare | Escalade au RSSI, hors processus | À maintenir hors de tout traitement automatisé |
| Réouverture | 14 % des tickets clos | Nouveau passage en file du N1, sans reprise systématique de l'historique | Relier le ticket rouvert à son dossier d'origine |
| Demande de geste commercial après un incident long | Non mesurée | Back-office, validation manuelle | Décision réservée à l'humain |

## 8. Données produites et consommées

| Donnée | Étapes | Produite ou consommée | Système | Qualité constatée | Accès |
| --- | --- | --- | --- | --- | --- |
| Ticket : motif, description, statuts horodatés | 1 à 9 | Produite | CRM et ticketing | Horodatages fiables ; motif erroné dans 9 % des cas ; description en texte libre | API |
| Contrat, parc et offres du client | 2, 3 et 5 | Consommée | Inventaire du parc | Écarts avec le terrain signalés par les experts, non mesurés | API |
| État du compte | 2 | Consommée | Facturation | Fiable | API |
| État du service et alarmes | 3, 5, 6 et 8 | Consommée | Supervision réseau | Fiable, en temps réel | API |
| Résultat du test de ligne | 3, 5, 6 et 9 | Produite, puis recopiée | Test de ligne | Non conservé par l'outil ; recopié à la main dans le ticket | Écran uniquement |
| Procédures de diagnostic et de résolution | 3 et 6 | Consommée | Base de connaissances | 35 % des 2 300 articles obsolètes | Écran uniquement, export possible |
| Compte rendu de résolution | 8 et 9 | Produite | CRM et ticketing | Texte libre, souvent une ligne | API |

## 9. Indicateurs

| Indicateur | Définition | Valeur de référence | Source | Fiabilité |
| --- | --- | --- | --- | --- |
| Délai moyen de résolution (MTTR) | De l'ouverture à la clôture, en heures d'horloge | 31 h | Ticketing | Bonne |
| Résolution au premier contact (FCR) | Incidents clos sans transfert ni rappel | 54 % | Ticketing | Bonne |
| Taux de réouverture | Tickets rouverts après clôture | 14 % | Ticketing | Bonne |
| Erreur de qualification | Motif corrigé en cours de traitement | 9 % | Ticketing, contrôlé sur échantillon avec les experts N2 | Moyenne |
| Concentration des motifs | Part des incidents relevant des 12 premiers motifs | 58 % | Ticketing | Bonne après correction des motifs |
| Satisfaction client | Note sur 5 à l'enquête après clôture | 3,6 | Enquêtes | Moyenne : tous les clients ne répondent pas |
| Coût complet par ticket | Coût du domaine rapporté aux 420 000 tickets, tous types confondus | 41 € | Contrôle de gestion | Bonne pour la moyenne ; pas de coût par niveau ni par motif |

## 10. Limites de la mesure

- Les horodatages donnent les attentes. La répartition entre collecte et traitement repose sur le chronométrage de trois jours sur un seul plateau.
- La charge de travail par étape, en minutes réellement passées, n'est pas mesurée ici. Elle l'est avec le contrôle de gestion, pour le coût par parcours attendu en S8.
- Les rappels de clients ne sont pas reliés aux tickets : leur volume reste inconnu.
- Le constat sur les 50 tickets relus vient du seul plateau de Nantes. Il est à confirmer sur un second plateau avant la conception.
- Les taux marqués « non mesuré » le restent tant qu'aucune donnée ne les fonde : aucune estimation n'a été substituée.
