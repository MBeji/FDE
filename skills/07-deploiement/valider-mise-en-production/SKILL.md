---
name: valider-mise-en-production
description: "Constate qu'un service mis en production tient ses engagements : vérifications immédiates, période d'observation avec indicateurs techniques, métier et d'adoption, critères de retour arrière, anomalies résiduelles tracées et constat de bon fonctionnement signé par le client. À utiliser après chaque mise en service ou vague de déploiement."
metadata:
  titre: "Valider la mise en production"
  version: "1.0.0"
  statut: publie
  etape: deploiement
  sous-processus: validation
  role: binome
  domaine: ops
  phases: [industrialiser]
  technologies: [observabilite]
  cas-usage: [tout-projet]
  tags: [validation, production, vsr, observation, indicateurs, constat, hypercare, verification]
  proprietaire: build
  diffusion: interne
  entrees: ["Compte rendu de mise en service", "Indicateurs cibles et seuils (techniques, métier, adoption)", "Tableaux de bord et traces de production"]
  sorties: ["Constat de bon fonctionnement signé", "Registre des anomalies résiduelles", "Décision de poursuivre le déploiement"]
  prerequis: [mettre-en-production]
---

## Mission

Passer de « c'est déployé » à « cela fonctionne, et le client le constate ». Le Build suit les indicateurs techniques ; le Design suit les indicateurs métier et l'adoption. Le skill organise la période d'observation et prépare le constat que le client signe. Tant que ce constat n'existe pas, la mise en production n'est pas terminée.

## Quand l'utiliser

- Juste après une mise en service, puis pendant la période d'observation convenue.
- À la fin de chaque vague, avant de lancer la suivante.

Ne pas l'utiliser pour mesurer la valeur finale : quelques semaines d'observation valident le fonctionnement, pas le retour sur investissement, qui relève de [Mesurer la valeur réalisée](/skills/mesurer-valeur).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Les indicateurs cibles et leurs seuils, fixés avant la mise en service | Oui | Les reprendre du plan de mise en production ; sinon les faire fixer avant de conclure. |
| L'accès aux tableaux de bord, traces et journaux de production | Oui | Le demander à l'exploitation ; sans mesure, pas de constat. |
| La durée d'observation convenue | Oui | La fixer avec le client : couvrir au moins un cycle complet d'activité. |
| Un échantillon de cas réels à relire | Non | L'organiser avec les experts métier. |

## Procédure

1. **Vérifier aussitôt après le déploiement.** Parcours de bout en bout sur un cas réel, intégrations joignables, traces présentes, alertes actives, version déployée conforme à la version approuvée.
2. **Ouvrir la période d'observation** : durée, indicateurs, seuils, fréquence des points, critères de retour arrière.
3. **Suivre les indicateurs techniques** (Build) : disponibilité, latence, taux d'erreur, appels d'outils en échec, coût par cas, garde-fous déclenchés.
4. **Suivre la qualité** : taux d'escalade, corrections humaines, réouvertures, comparés aux résultats du pilote. Faire relire un échantillon de cas par des experts métier, réussites comprises.
5. **Suivre le métier et l'adoption** (Design) : volumes traités, délais, usage réel par les équipes, contournements, retours des utilisateurs et des managers.
6. **Tenir un point régulier** avec l'exploitation et le propriétaire du processus : quotidien la première semaine, puis espacé.
7. **Traiter les anomalies.** Qualifier, corriger par le pipeline, tracer. Une anomalie non corrigée reste au registre avec un responsable et une date.
8. **Appliquer les critères.** Un seuil de retour arrière atteint déclenche le retour arrière ou le coupe-circuit. Des seuils tenus sur toute la période ouvrent le constat.
9. **Rédiger le constat** : ce qui a été observé, sur quelle période, contre quels seuils, avec quelles réserves.
10. **Le faire signer** par le client et décider de la suite : vague suivante, ajustement, ou transfert vers l'exploitation courante.

## Livrable

Un constat de bon fonctionnement :

1. Version et périmètre en service, période observée.
2. Tableau des indicateurs : cible, mesuré, verdict, pour les trois familles (technique, qualité, métier et adoption).
3. Résultat de la relecture d'échantillon.
4. Incidents et anomalies survenus, état de chacun.
5. Réserves, avec responsable et date.
6. Décision et signatures.

## Critères de qualité

- Les seuils sont ceux fixés avant la mise en service.
- Les trois familles d'indicateurs sont mesurées, adoption comprise.
- Les indicateurs métier sont produits par le système, sans reconstitution manuelle ([OBS-07](/standards#OBS-07)).
- La qualité est suivie par des objectifs de service ([OBS-05](/standards#OBS-05)) et le coût par cas chaque jour ([OBS-08](/standards#OBS-08)).
- Un échantillon de cas a été relu par des experts métier.
- Chaque réserve a un responsable et une échéance.

## Garde-fous

- Le constat est signé par le client : propriétaire du processus pour le métier, responsable d'exploitation pour la technique. Ni le FDE ni un agent ne le prononcent.
- Ne pas écourter la période d'observation pour tenir un calendrier ; ne pas changer un seuil en cours d'observation.
- Les données d'usage ne servent pas à évaluer individuellement les personnes.
- Un écart constaté se dit le jour même au client, sans attendre le point suivant.

## Enchaînements

- **Amont** : [Mettre en production](/skills/mettre-en-production).
- **Aval** : [Organiser la passation](/skills/organiser-passation), [Superviser le service](/skills/superviser-monitoring).
- **Workflow** : [De la validation à la mise en production](/skills/workflows/mettre-en-production).
- **Ressources** : [Revue de préparation à la mise en production](/templates/checklist-mise-en-production), [Plan de contrôle du processus](/templates/plan-de-controle-processus), [Tableau de bord de valeur](/templates/tableau-de-bord-valeur), [Mesurer l'impact réel](/frameworks/mesure-impact), [Piloter l'adoption](/frameworks/pilotage-adoption).
