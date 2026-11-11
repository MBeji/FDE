---
id: modele-operationnel-cible
titre: "Modèle opérationnel AI-Native"
resume: "Structure, rôles, gouvernance, compétences et rituels d'une organisation qui opère des agents en production : équipes de domaine, équipe plateforme, centre d'expertise et nouveaux métiers."
categorie: processus
phases: [reinventer, industrialiser]
origine: "Maison"
niveau: avance
tags: [organisation, gouvernance, roles]
templates: [modele-operationnel-cible, matrice-humain-agent, registre-agents]
lies: [raci-augmente, agentops, gouvernance-ia, rewired-six-capacites]
---

## En bref

Des agents en production sans modèle opérationnel, ce sont des actifs sans propriétaire : personne ne décide d'élargir leur autonomie, de corriger une dérive ou de les arrêter. Le modèle opérationnel AI-Native répond à quatre questions : **qui construit, qui opère, qui répond du résultat, qui décide**.

Il repose sur trois structures (équipes de domaine, équipe plateforme, centre d'expertise), quatre nouveaux rôles et des rituels courts. C'est souvent la dimension la plus faible au diagnostic, et celle qui conditionne le passage à l'échelle.

## Quand l'utiliser

- En [Réinventer](/methode/reinventer), en même temps que le processus cible : on ne redessine pas un flux sans redessiner qui le porte.
- En [Industrialiser](/methode/industrialiser), pour installer les rôles et les instances avant la généralisation.

Pour un premier agent en pilote, ne pas créer toute la structure : nommer les rôles, les instances viendront avec le passage à l'échelle.

## Comment l'appliquer

### 1. Poser la structure

| Structure | Mission | Rattachement type |
| --- | --- | --- |
| Équipe de domaine | Possède le processus et ses agents, répond de la valeur | Métier |
| Équipe plateforme | Passerelle d'outils, observabilité, sécurité, composants communs | DSI |
| Centre d'expertise | Méthodes, standards, évaluations, formation, revue des nouveaux agents | Data & IA |
| Équipe AgentOps | Exploitation, supervision, incidents, évaluations continues | Plateforme ou domaine selon la taille |

### 2. Créer les nouveaux rôles

| Rôle | Responsabilités | Profil d'origine fréquent |
| --- | --- | --- |
| Propriétaire d'agent | Répond du comportement et de la valeur d'un agent, décide de son autonomie | Responsable métier ou product owner |
| Superviseur de cas | Supervise les agents au quotidien, valide, reprend la main, signale | Conseiller ou opérateur expérimenté |
| Ingénieur AgentOps | Surveille, diagnostique, corrige, déploie les versions | Ingénieur d'exploitation ou développeur |
| Responsable des évaluations | Tient le golden set, les seuils et les campagnes d'évaluation | Expert métier formé |

### 3. Installer la gouvernance

- Un **registre des agents** : chaque agent, son propriétaire, son niveau d'autonomie par outil, ses seuils.
- Un **comité de gouvernance IA**, mensuel, qui décide des mises en production, des élargissements d'autonomie et des arrêts.
- Des droits de décision écrits : qui peut modifier un prompt, ajouter un outil, élargir un catalogue d'actions.

### 4. Planifier les compétences

Pour chaque rôle, définir les compétences, le parcours de formation et le vivier interne. Les rôles doivent être tenus par des collaborateurs du client avant la fin de la mission.

### 5. Fixer les rituels

| Rituel | Fréquence | Objet |
| --- | --- | --- |
| Revue de supervision | Quotidienne | Cas escaladés, anomalies |
| Revue qualité des agents | Hebdomadaire | Résultats d'évaluation, incidents, corrections |
| Revue de valeur | Hebdomadaire | Indicateurs avancés du registre |
| Comité de gouvernance IA | Mensuel | Autonomie, mises en production, risques |
| Revue de portefeuille | Trimestrielle | Entrées et sorties de cas d'usage |

## Exemple

Chez Voxalis, la dimension Modèle opérationnel & gouvernance était notée 1,5 au diagnostic.

- **Équipe de domaine** : Assistance & SAV Entreprises, sous Sophie Lambert. Les 190 conseillers deviennent superviseurs de cas ; les experts N2 mènent la voie experte.
- **Équipe plateforme** : sous Karim Haddad, elle opère la passerelle MCP et ses neuf outils.
- **Centre d'expertise** : porté par l'équipe de Thomas Nguyen, il reprend les méthodes d'évaluation au transfert.
- **AgentOps** : 3 ETP, financés dans le coût récurrent à 0,35 M€ par an.
- **Responsables des évaluations** : les deux experts N2 détachés, qui ont annoté les 600 cas du golden set.
- **Gouvernance** : registre des agents et comité de gouvernance IA mensuel coprésidé par Sophie Lambert et Karim Haddad.

Le critère de fin de mission, transfert achevé en S39, a été vérifié rôle par rôle : chaque rôle tenu par un collaborateur Voxalis, sans FDE en appui.

## Pièges à éviter

- **Centraliser tous les agents dans l'équipe IA.** Le métier ne se les approprie pas. Parade : la propriété des agents est dans le domaine.
- **Oublier le superviseur de cas.** Parade : définir le poste, sa fiche, sa formation et son outil avant le pilote.
- **Un comité sans droits de décision.** Parade : écrire ce que le comité décide, et ce qu'il délègue.
- **Rôles tenus par les FDE.** Parade : un binôme client dès le premier jour sur chaque rôle.

## Pour aller plus loin

- Template : [modèle opérationnel cible](/templates/modele-operationnel-cible)
- Frameworks : [RACI augmenté](/frameworks/raci-augmente), [AgentOps](/frameworks/agentops), [gouvernance de l'IA](/frameworks/gouvernance-ia)
- Template : [registre des agents](/templates/registre-agents)
- Savoir terrain : [dépendance aux FDE](/savoir/dependance-fde), [binôme métier-FDE](/savoir/binome-metier-fde)
