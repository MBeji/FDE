---
name: transferer-competences
description: "Construit et exécute le plan de transfert de compétences vers l'équipe du client : compétences cibles par rôle, écarts, binômage et doublure inversée, preuves d'autonomie, retrait progressif de l'équipe. À utiliser dès l'industrialisation pour le préparer, puis jusqu'à la passation."
metadata:
  titre: "Transférer les compétences"
  version: "1.0.0"
  statut: publie
  etape: livraison
  sous-processus: transfert
  role: binome
  domaine: changement
  phases: [perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [transfert, competences, autonomie, binomage, formation, former, equipe-client, montee-en-competence]
  proprietaire: design
  diffusion: interne
  entrees: ["Documentation et runbook du système", "Équipe du client désignée pour reprendre", "Calendrier de fin de mission"]
  sorties: ["Plan de transfert de compétences", "Preuves d'autonomie constatées", "Écarts résiduels et plan de soutien"]
  prerequis: [rediger-documentation]
---

## Mission

Faire en sorte que l'équipe du client sache opérer, piloter et faire évoluer le système sans nous. Le Build transfère l'exploitation et l'évolution technique ; le Design transfère le pilotage de la valeur, de l'adoption et de la gouvernance. Le critère de réussite n'est pas d'avoir formé : c'est d'avoir vu l'équipe faire seule.

## Quand l'utiliser

- Pendant l'industrialisation : désigner l'équipe qui reprendra et bâtir le plan.
- Après la mise en production : exécuter le transfert.
- Quand un membre clé de l'équipe du client change.

Ne pas l'utiliser pour former les utilisateurs au nouveau geste métier : cela relève de [Accompagner le client dans le changement](/skills/accompagner-client).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les personnes qui reprennent, nommées, avec du temps dédié | Oui | Alerter le sponsor : sans équipe désignée, il n'y a rien à transférer. |
| La documentation et le runbook à jour | Oui | Les compléter en parallèle : on ne transfère pas sur de l'oral. |
| La date de fin de mission | Oui | La faire confirmer : le plan se construit à rebours. |
| Le niveau de départ de chacun | Non | Le mesurer par un entretien et un exercice court. |

## Procédure

1. **Lister les rôles à tenir** côté client après notre départ : propriétaire du processus, responsable d'exploitation, ingénieur qui fait évoluer agents et prompts, référent des évaluations, référents métier, responsable de la valeur.
2. **Décrire pour chaque rôle les gestes à maîtriser**, en verbes : diagnostiquer une alerte, activer le coupe-circuit, modifier un prompt et rejouer les évaluations, ajouter un cas au golden set, lire le tableau de bord de valeur, décider d'un relèvement d'autonomie.
3. **Mesurer l'écart** personne par personne, geste par geste : jamais fait, fait accompagné, fait seul.
4. **Choisir les modalités.** Peu de présentations, beaucoup de pratique : binômage sur le travail réel, puis doublure inversée, où l'équipe du client fait et le FDE observe. Les ateliers servent à comprendre le pourquoi.
5. **Planifier à rebours** de la date de fin, avec un retrait progressif : le FDE fait, puis fait avec, puis regarde faire, puis n'est plus qu'appelable.
6. **Organiser les preuves d'autonomie.** L'équipe du client, seule : traite un incident réel ou simulé, livre une évolution par le pipeline, mène une revue de valeur, conduit une revue d'échantillon de cas.
7. **Constater et consigner** chaque preuve : date, personnes, ce qui a été fait sans aide, ce qui a manqué.
8. **Traiter les écarts qui restent** : complément ciblé, documentation corrigée, ou risque écrit et porté au sponsor.
9. **Transférer les rituels** : revue de valeur, revue des incidents, comité de gouvernance des agents, animés par le client avant notre départ.

## Livrable

Le [Plan de transfert de compétences](/templates/plan-transfert) : rôles cibles, matrice des compétences par personne, modalités et calendrier, preuves d'autonomie prévues puis constatées, écarts résiduels et soutien convenu après la mission.

## Critères de qualité

- Chaque rôle cible est tenu par une personne nommée, avec un suppléant pour les rôles critiques.
- Les compétences sont formulées en gestes observables.
- L'équipe du client a déployé, diagnostiqué et fait évoluer le système sans le FDE ([ARC-05](/standards#ARC-05)).
- Le runbook a été exercé par l'équipe du client ([ARC-04](/standards#ARC-04)).
- Chaque preuve d'autonomie est datée et consignée.
- Les écarts résiduels sont écrits et acceptés par le sponsor.

## Garde-fous

- Le constat d'autonomie est fait avec le sponsor et le responsable de l'équipe du client ; le FDE ne se l'accorde pas à lui-même.
- Ne pas déclarer transférée une compétence vue une seule fois en démonstration.
- Ne pas faire à la place de l'équipe pendant une preuve d'autonomie : intervenir annule la preuve.
- Ne pas prolonger la présence du FDE pour compenser une équipe non désignée : le dire au sponsor.

## Enchaînements

- **Amont** : [Rédiger la documentation](/skills/rediger-documentation).
- **Aval** : [Organiser la passation](/skills/organiser-passation).
- **Workflow** : [De la mise en production au client autonome](/skills/workflows/transferer-au-client).
- **Ressources** : [La dépendance au FDE](/savoir/dependance-fde), [Le binôme métier-FDE](/savoir/binome-metier-fde), [Modèle opérationnel AI-Native](/frameworks/modele-operationnel-cible), [Les six capacités d'une transformation réussie](/frameworks/rewired-six-capacites), [RACI Design · Build](/raci).
