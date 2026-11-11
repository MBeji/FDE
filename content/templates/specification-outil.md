---
id: specification-outil
titre: "Spécification d'outil"
resume: "Le contrat d'un outil exposé à un agent : ce que l'agent en lit, ses paramètres, ses réponses, ses erreurs, ses effets de bord et sa règle d'approbation. À écrire avant le system prompt."
phase: concevoir
type: canevas
format: document
effort: "2 à 3 h par outil, une demi-journée pour un outil d'écriture"
tags: [outils, mcp, specification, garde-fous]
frameworks: [conception-outils, protocoles-mcp-a2a, garde-fous, niveaux-autonomie]
---

<!-- section: mode-emploi -->
## À quoi ça sert

Un agent ne connaît d'un outil que sa description, son schéma et ses réponses. La spécification fixe ce contrat : assez clair pour que l'agent choisisse le bon outil sans aide, assez strict pour que la passerelle refuse ce qui ne doit pas passer. Elle engage le propriétaire de l'application, la sécurité et l'ingénierie.

## Quand l'utiliser

Pour chaque outil d'une [fiche agent](/templates/fiche-agent), en commençant par ceux qui écrivent. Toujours avant le prompt : voir [outils avant prompts](/savoir/outils-avant-prompts) et la [conception d'outils](/frameworks/conception-outils).

## Comment le remplir

1. Écrire l'intention en une phrase, puis la description telle que l'agent la lira : quand utiliser l'outil, quand s'en abstenir, que faire du résultat.
2. Réduire les paramètres au nécessaire ; préférer les énumérations au texte libre.
3. Rédiger chaque erreur comme une consigne : ce qui s'est passé, quoi faire ensuite.
4. Décrire effets de bord, réversibilité et idempotence avec le propriétaire de l'application.
5. Faire appliquer droits, approbation et limites par la passerelle, jamais par le seul prompt.
6. Tester la description sur des scénarios réels avant d'intégrer.

## Critères de qualité

- [ ] La description suffit à savoir quand appeler l'outil et quand s'abstenir.
- [ ] Chaque paramètre a un type, des bornes et un exemple.
- [ ] Chaque erreur dit à l'agent quoi faire.
- [ ] Un double appel ne produit pas deux effets.
- [ ] La règle d'approbation est une table de décision exécutée par le code.
- [ ] Les tests couvrent le contrat, la sélection par l'agent et les cas adverses.

<!-- section: template -->
# Spécification d'outil — _[domaine.action]_

| | |
| --- | --- |
| **Client / mission** | {{client}} — {{mission}} |
| **Système** | _[Nom du système]_ |
| **Version** | _[1.0]_ du {{date}} |
| **Application source** | _[Application du SI appelée par l'outil]_ |
| **Propriétaire de l'outil** | _[Nom, fonction : responsable de l'application et de ses effets]_ |
| **Agents autorisés** | _[Liste fermée]_ |
| **Nature** | _[Lecture / Écriture / Lecture avec effet de bord]_ |
| **Rédacteur** | {{auteur}} |

## 1. Nom et intention

**Nom** : _[`domaine.verbe_objet`, en minuscules. Le nom doit suffire à deviner l'usage.]_

**Intention** : _[Une phrase : ce que l'outil permet d'obtenir, du point de vue du métier.]_

**Hors intention** : _[Ce pour quoi l'outil ne doit pas être utilisé, et l'outil à employer à la place.]_

## 2. Description lue par l'agent

_[Le texte exact exposé au modèle. Écrire pour un collègue compétent qui découvre l'outil : usage, contre-indications, lecture du résultat, conduite en cas de refus. Pas de jargon interne non expliqué.]_

```text
[Ce que fait l'outil, en une phrase.]

Quand l'utiliser : [situations].
Quand ne pas l'utiliser : [situations, et alternative].

[Valeurs possibles des paramètres clés, avec leur effet.]

Résultat : [ce qui est renvoyé et comment l'interpréter].
En cas de refus ou d'erreur : [conduite attendue].
```

## 3. Paramètres

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": ["[parametre_1]"],
  "properties": {
    "[parametre_1]": {
      "type": "string",
      "description": "[Sens, format, d'où vient la valeur]"
    },
    "[parametre_2]": {
      "type": "string",
      "enum": ["[valeur_a]", "[valeur_b]"],
      "description": "[Effet de chaque valeur]"
    }
  }
}
```

| Paramètre | Obligatoire | Contrôle effectué par la passerelle | Exemple |
| --- | --- | --- | --- |
| | | _[Format, appartenance, cohérence avec le contexte du cas]_ | |

## 4. Réponse

```json
{
  "statut": "[valeur parmi une liste fermée]",
  "resume": "[Une phrase lisible par l'agent]",
  "donnees": {}
}
```

_[Règles : réponse courte, champs nommés en langage métier, valeurs interprétées plutôt que brutes, taille maximale.]_

## 5. Erreurs

| Code | Situation | Message renvoyé à l'agent | Nouvel essai |
| --- | --- | --- | --- |
| _[CODE_STABLE]_ | _[Quand elle survient]_ | _[Ce qui s'est passé et quoi faire]_ | _[Oui, une fois après… / Non]_ |

## 6. Effets de bord et réversibilité

| Effet | Sur quoi | Durée | Réversible | Comment annuler |
| --- | --- | --- | --- | --- |
| | | | _[Oui / Non / Partiellement]_ | |

**Ce que l'outil ne fait pas** : _[Effets laissés à d'autres outils ou agents.]_

## 7. Idempotence et reprise

- **Clé d'idempotence** : _[Comment elle est calculée, par qui, sur quelle fenêtre.]_
- **Double appel** : _[Comportement.]_
- **Délai dépassé ou état inconnu** : _[Ce que l'agent doit faire avant toute nouvelle tentative.]_
- **Appels concurrents** : _[Verrou, file, rejet.]_

## 8. Droits d'accès

| Identité | Droit | Périmètre de données | Justification |
| --- | --- | --- | --- |
| _[Identité technique de l'agent]_ | _[Appel]_ | _[Filtre appliqué]_ | |
| _[Rôle humain]_ | _[Approbation]_ | | |

## 9. Risque et règle d'approbation

**Niveau de risque** : _[Faible / Moyen / Élevé, avec le critère de classement.]_

Table de décision, évaluée dans l'ordre par la passerelle ; la première règle satisfaite s'applique.

| N° | Condition | Décision |
| --- | --- | --- |
| 1 | _[Condition vérifiable par le code]_ | _[Refus / Approbation par… / Exécution]_ |

**Approbation** : _[Qui approuve, ce qu'il voit, délai maximal, que se passe-t-il sans réponse.]_

## 10. Limites de débit et de coût

| Portée | Limite | Au-delà |
| --- | --- | --- |
| _[Par objet, par cas, par zone, globale]_ | | _[Refus, approbation, suspension]_ |

## 11. Journalisation

_[Ce qui est tracé à chaque appel, où, combien de temps, avec quelles données masquées.]_

## 12. Tests et critères d'acceptation

| Type de test | Contenu | Critère d'acceptation |
| --- | --- | --- |
| Contrat | _[Schéma, chaque erreur]_ | |
| Règle d'approbation | _[Chaque ligne de la table, cas limites]_ | |
| Idempotence | | |
| Sélection par l'agent | _[Scénarios où l'outil doit, ou ne doit pas, être appelé]_ | |
| Adverse | | |
| Bout en bout | | |

## 13. Historique des versions

| Version | Date | Changement | Compatibilité |
| --- | --- | --- | --- |
| | | | |

<!-- section: exemple -->
# Spécification d'outil — reseau.executer_action

| | |
| --- | --- |
| **Client / mission** | Voxalis — Réinvention de l'Assistance & SAV Entreprises |
| **Système** | SAV Augmenté |
| **Version** | 1.0 du 5 mai 2026 |
| **Application source** | Supervision réseau (interface d'exploitation) |
| **Propriétaire de l'outil** | Direction Réseau |
| **Agents autorisés** | Agent Résolution, et lui seul |
| **Nature** | Écriture |
| **Rédacteur** | Inès, FDE, avec l'architecte SI détaché |

## 1. Nom et intention

**Nom** : `reseau.executer_action`

**Intention** : exécuter une action de remédiation du catalogue sur le service d'un client PME, et dire si le service est rétabli.

**Hors intention** : lire un état (utiliser `supervision.etat_service`), tester une hypothèse (utiliser `ligne.lancer_test`), agir sur un équipement partagé entre plusieurs clients (aucun outil : domaine réservé à la Direction Réseau).

## 2. Description lue par l'agent

```text
Exécute une seule action de remédiation du catalogue sur un seul service du client du ticket en cours, puis vérifie si le service est rétabli.

Quand l'utiliser : après un diagnostic rattaché au ticket, quand la remédiation recommandée figure au catalogue ci-dessous.
Quand ne pas l'utiliser : pour vérifier un état (supervision.etat_service le fait sans effet), pour essayer une action « au cas où », ou si un incident collectif touche la zone : aucune action individuelle ne rétablira alors le service.

Catalogue (paramètre action) :
- resynchroniser_acces : relance la synchronisation de l'accès côté réseau. Coupure de moins de 2 minutes.
- redemarrer_equipement : redémarre l'équipement installé chez le client. Coupure de 3 à 5 minutes.
- reinitialiser_session : ferme et rouvre la session d'authentification. Coupure de moins d'une minute.
- reappliquer_profil : réapplique le profil de ligne prévu par l'offre. Coupure de moins de 2 minutes.
- reenregistrer_postes : force le réenregistrement des postes téléphoniques. Coupe les appels en cours.
- reappliquer_config_telephonie : réapplique la configuration de référence du standard (renvois, accueil). Sans coupure.
- changer_profil, basculer_secours, reinitialiser_configuration, mettre_a_jour_logiciel : modifient durablement le service ; toujours soumises à l'approbation d'un humain.

Approbation : ce n'est pas à toi de décider si une approbation est nécessaire. La passerelle l'établit d'après l'action, l'état du service, l'heure et le diagnostic. Si elle est requise, la réponse porte le statut en_attente_approbation : ne tente pas une autre action pour contourner l'attente, rends la main à l'Orchestrateur.

Résultat : le statut, l'état du service avant et après, et verification.service_retabli. Si service_retabli vaut false, ne répète pas la même action : rends la main avec ce que tu as observé.

Pour connaître la règle qui s'appliquerait sans rien exécuter, appelle l'outil avec mode = "simulation".
```

## 3. Paramètres

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": ["ticket_id", "service_id", "action", "diagnostic_id", "justification"],
  "properties": {
    "ticket_id": {
      "type": "string",
      "description": "Identifiant du ticket en cours, tel que transmis par l'Orchestrateur."
    },
    "service_id": {
      "type": "string",
      "description": "Identifiant du service à traiter, repris du diagnostic. Doit appartenir au client du ticket."
    },
    "action": {
      "type": "string",
      "enum": [
        "resynchroniser_acces", "redemarrer_equipement", "reinitialiser_session",
        "reappliquer_profil", "reenregistrer_postes", "reappliquer_config_telephonie",
        "changer_profil", "basculer_secours", "reinitialiser_configuration", "mettre_a_jour_logiciel"
      ],
      "description": "Code de l'action du catalogue."
    },
    "parametres": {
      "type": "object",
      "description": "Uniquement pour changer_profil : {\"profil\": \"stable\" ou \"standard\"}. Vide pour les autres actions."
    },
    "diagnostic_id": {
      "type": "string",
      "description": "Identifiant du diagnostic qui motive l'action. Il doit être rattaché au ticket et dater de moins de 30 minutes."
    },
    "justification": {
      "type": "string",
      "maxLength": 300,
      "description": "Une phrase : le constat qui motive l'action. Reprise dans le journal d'audit et dans la demande d'approbation."
    },
    "mode": {
      "type": "string",
      "enum": ["execution", "simulation"],
      "default": "execution",
      "description": "simulation renvoie la décision qui s'appliquerait, sans aucun effet."
    }
  }
}
```

| Paramètre | Obligatoire | Contrôle effectué par la passerelle | Exemple |
| --- | --- | --- | --- |
| `ticket_id` | Oui | Ticket ouvert, affecté au cas en cours de l'agent appelant | `VX-2606-014532` |
| `service_id` | Oui | Service présent dans le parc du client du ticket ; client du segment PME ; équipement non partagé | `ACC-0088213-01` |
| `action` | Oui | Valeur du catalogue ; action applicable au type de service | `resynchroniser_acces` |
| `parametres` | Non | Schéma propre à l'action | `{"profil": "stable"}` |
| `diagnostic_id` | Oui | Diagnostic rattaché au ticket, de moins de 30 minutes | `DG-7f3a91` |
| `justification` | Oui | Longueur ; aucun contrôle de fond | « Port d'accès figé depuis 07 h 42, ligne sans défaut physique » |
| `mode` | Non | Aucun effet en simulation, y compris sur les compteurs | `simulation` |

L'agent ne fournit ni l'identité du client ni la clé d'idempotence : la passerelle les déduit du ticket.

## 4. Réponse

```json
{
  "statut": "executee",
  "execution_id": "EX-20260622-000187",
  "deja_executee": false,
  "resume": "Accès resynchronisé en 74 secondes. Service rétabli.",
  "etat_avant": {"service": "hors_service", "depuis": "2026-06-22T07:42:00+02:00"},
  "etat_apres": {"service": "en_service", "debit_descendant": "conforme à l'offre"},
  "verification": {"service_retabli": true, "methode": "relecture de la supervision 60 secondes après l'action"},
  "approbation": null,
  "prochaine_etape": "Aucune. Rendre la main à l'Orchestrateur."
}
```

- `statut` prend une valeur parmi : `executee`, `en_attente_approbation`, `refusee`, `echouee`, `simulee`.
- Avec `en_attente_approbation`, le champ `approbation` précise l'approbateur attendu et la règle appliquée ; l'agent n'attend pas, l'Orchestrateur reprend le cas à la décision.
- Les états sont interprétés (« conforme à l'offre ») plutôt que bruts : l'agent n'a pas à connaître les seuils de la supervision.
- Taille maximale de la réponse : 1 500 caractères.

## 5. Erreurs

| Code | Situation | Message renvoyé à l'agent | Nouvel essai |
| --- | --- | --- | --- |
| `SERVICE_HORS_PERIMETRE` | Service absent du parc du client du ticket, client grand compte ou équipement partagé | « Ce service ne peut pas être traité par cet outil. Ne cherche pas un autre identifiant : rends la main en signalant l'écart. » | Non |
| `DIAGNOSTIC_ABSENT` | Aucun diagnostic de moins de 30 minutes rattaché au ticket | « Aucun diagnostic récent ne justifie cette action. Demande un nouveau diagnostic à l'Orchestrateur. » | Non |
| `INCIDENT_COLLECTIF_EN_COURS` | Incident collectif déclaré sur la zone du service | « Un incident collectif touche cette zone ; une action individuelle est inutile. Rends la main : le client sera informé de l'incident. » | Non |
| `ACTION_INAPPLICABLE` | Action sans objet pour ce type de service | « Cette action ne s'applique pas à ce service. Relis la remédiation recommandée par le diagnostic. » | Oui, avec une autre action du diagnostic |
| `EQUIPEMENT_INJOIGNABLE` | L'équipement ne répond pas à la commande | « L'équipement ne répond pas. Réessaie une fois après 60 secondes ; en cas de nouvel échec, rends la main : une intervention sur site est probablement nécessaire. » | Oui, une fois |
| `LIMITE_ATTEINTE` | Plafond par ticket ou plafond global atteint | « Le nombre maximal d'actions est atteint. Rends la main à un humain. » | Non |
| `VOIE_AUTONOME_SUSPENDUE` | Arrêt d'urgence activé ou disjoncteur de zone ouvert | « Les actions automatiques sont suspendues sur ce périmètre. Rends la main. » | Non |
| `APPROBATION_REFUSEE` | L'approbateur a refusé | « L'action a été refusée par [rôle] : [motif saisi]. Ne la repropose pas. » | Non |
| `ETAT_INCONNU` | Délai de 90 secondes dépassé ou application indisponible | « L'issue de l'action est inconnue. Lis l'état du service avec supervision.etat_service avant toute autre décision. » | Oui, après lecture de l'état |

## 6. Effets de bord et réversibilité

| Action | Effet sur le service | Risque | Réversible | Comment annuler |
| --- | --- | --- | --- | --- |
| `resynchroniser_acces` | Coupure de moins de 2 min | Faible | Oui | Sans objet : aucun réglage modifié |
| `redemarrer_equipement` | Coupure de 3 à 5 min | Faible | Oui | Sans objet |
| `reinitialiser_session` | Coupure de moins d'une minute | Faible | Oui | Sans objet |
| `reappliquer_profil` | Coupure de moins de 2 min | Faible | Oui | Le profil précédent est conservé 30 jours |
| `reenregistrer_postes` | Appels en cours coupés | Faible | Oui | Sans objet |
| `reappliquer_config_telephonie` | Aucune coupure ; écrase les réglages modifiés hors référence | Faible | Oui | La configuration précédente est conservée 30 jours |
| `changer_profil` | Débit réduit durablement | Moyen | Oui | `changer_profil` avec le profil d'origine |
| `basculer_secours` | Trafic sur le lien de secours, débit réduit | Moyen | Oui | Retour manuel par un expert N2 |
| `reinitialiser_configuration` | Coupure de 10 à 15 min, réglages locaux du client perdus | Élevé | Non | Reconfiguration manuelle |
| `mettre_a_jour_logiciel` | Coupure de 10 min, échec possible | Élevé | Partiellement | Retour à la version précédente par un expert N2 |

Une action est classée à risque faible si elle est réversible, limitée au service du client du ticket et d'une interruption inférieure à 5 minutes.

Chaque exécution crée une entrée dans le journal d'exploitation de la supervision réseau.

**Ce que l'outil ne fait pas** : il ne met pas à jour le ticket (rôle de l'Orchestrateur) et n'informe pas le client (rôle de l'Agent Communication).

## 7. Idempotence et reprise

- **Clé d'idempotence** : calculée par la passerelle, jamais par l'agent. Empreinte de `ticket_id`, `service_id`, `action` et `diagnostic_id`, valable 30 minutes.
- **Double appel** : la seconde demande n'exécute rien et renvoie le résultat de la première, avec `deja_executee` à `true`.
- **Délai dépassé** : erreur `ETAT_INCONNU`. L'agent lit l'état du service avant toute nouvelle demande ; s'il rappelle l'outil à l'identique, la clé d'idempotence empêche une seconde exécution.
- **Appels concurrents** : un verrou par service. Une demande sur un service déjà en cours d'action est refusée avec `LIMITE_ATTEINTE`.

## 8. Droits d'accès

| Identité | Droit | Périmètre de données | Justification |
| --- | --- | --- | --- |
| `agent-resolution` | Appel de l'outil | Services du client du ticket en cours, segment PME | Seul agent chargé de la remédiation (ADR-004) |
| Superviseur de cas | Approbation des actions à risque moyen et des règles 7 à 10 | Tickets de son plateau | Décision de proximité |
| Expert N2 | Approbation des actions à risque élevé | Tous tickets PME | Compétence technique requise |
| Équipe AgentOps, responsable de plateau | Arrêt d'urgence | Global ou par zone | Procédure d'arrêt |

Aucun autre agent ne voit l'outil : il n'apparaît pas dans leur liste d'outils. Le jeton de l'agent expire après 15 minutes.

## 9. Risque et règle d'approbation

**Niveau de risque** : faible à élevé selon l'action (section 6). Niveau d'autonomie : L3 sur le catalogue à risque faible, L2 au-delà.

Table de décision, évaluée dans l'ordre par la passerelle ; la première règle satisfaite s'applique.

| N° | Condition | Décision |
| --- | --- | --- |
| 1 | Arrêt d'urgence activé, ou disjoncteur ouvert sur la zone | Refus `VOIE_AUTONOME_SUSPENDUE` |
| 2 | Service hors du parc du client, client grand compte ou équipement partagé | Refus `SERVICE_HORS_PERIMETRE` |
| 3 | Incident collectif déclaré sur la zone | Refus `INCIDENT_COLLECTIF_EN_COURS` |
| 4 | Aucun diagnostic de moins de 30 minutes rattaché au ticket | Refus `DIAGNOSTIC_ABSENT` |
| 5 | Plus de 3 actions déjà exécutées sur le ticket | Refus `LIMITE_ATTEINTE` |
| 6 | Action à risque élevé | Approbation d'un expert N2 |
| 7 | Action à risque moyen | Approbation du superviseur de cas |
| 8 | Diagnostic à confiance moyenne ou faible | Approbation du superviseur de cas |
| 9 | Motif du ticket non ouvert à la voie autonome | Approbation du superviseur de cas |
| 10 | Action avec coupure sur un service vu « en service » par la supervision, pendant les heures ouvrées du client ; ou deuxième action sur le même service en 24 h | Approbation du superviseur de cas |
| 11 | Tout autre cas | Exécution sans approbation |

**Approbation** : la demande s'affiche dans le poste de supervision avec le diagnostic, ses preuves, l'action, son effet et la justification. Sans réponse en 15 minutes, elle est réaffectée au responsable de plateau. Elle n'est jamais approuvée par défaut.

La liste des motifs ouverts à la voie autonome est un paramètre de la passerelle, modifié sur décision du comité de gouvernance IA.

## 10. Limites de débit et de coût

| Portée | Limite | Au-delà |
| --- | --- | --- |
| Par service | 1 action en cours ; 1 action sans approbation par 24 h | Approbation (règle 10) |
| Par ticket | 3 actions exécutées | Refus, escalade vers un humain |
| Par zone | 5 actions identiques en 30 minutes | Ouverture du disjoncteur de zone, alerte à la Direction Réseau |
| Globale | 120 actions par heure | Refus, alerte à l'équipe AgentOps |
| Par appel | 90 secondes | `ETAT_INCONNU` |

## 11. Journalisation

Chaque appel, y compris refusé ou simulé, est tracé : identité appelante, ticket, service, action, diagnostic, règle appliquée, approbateur, état avant et après, durée. Conservation 13 mois dans le journal d'audit de la passerelle ; identité du contact client masquée.

## 12. Tests et critères d'acceptation

| Type de test | Contenu | Critère d'acceptation |
| --- | --- | --- |
| Contrat | 46 tests : schéma, chaque code d'erreur, chaque action sur les lignes de test | 100 % |
| Règle d'approbation | Les 11 règles et leurs cas limites, soit 68 combinaisons relues par le référent sécurité | 100 % |
| Idempotence | Double appel, reprise après délai dépassé, appels concurrents sur un service | Un seul effet, même `execution_id` |
| Sélection par l'agent | 80 scénarios tirés du golden set : bonne action, ou abstention quand aucune action ne convient | ≥ 95 % de choix corrects, aucune action hors catalogue |
| Adverse | Les 120 cas adverses du plan d'évaluation | 0 action inappropriée exécutée |
| Bout en bout | 10 lignes de test de la Direction Réseau, les 6 actions à risque faible | Effet constaté identique à l'effet décrit en section 6 |
| Charge et disjoncteur | 200 appels en 10 minutes ; 6 actions identiques sur une zone | Limites tenues ; disjoncteur ouvert à la cinquième |

## 13. Historique des versions

| Version | Date | Changement | Compatibilité |
| --- | --- | --- | --- |
| 0.1 | 22 avril 2026 | Première version : 6 actions à risque faible, paramètre `client_id` fourni par l'agent | — |
| 0.2 | 28 avril 2026 | Suppression de `client_id`, déduit du ticket ; ajout du mode simulation | Rupture |
| 1.0 | 5 mai 2026 | Catalogue de 10 actions, table de décision à 11 règles, clé d'idempotence calculée par la passerelle | Compatible 0.2 |
