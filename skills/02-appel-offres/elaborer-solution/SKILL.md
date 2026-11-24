---
name: elaborer-solution
description: "Construit la solution proposée dans une offre : compréhension du besoin, approche et phasage, architecture de principe, niveau de solution justifié, organisation, engagements mesurables, risques et facteurs de différenciation. À utiliser quand les exigences sont tracées et la faisabilité confirmée, avant de rédiger et de chiffrer."
metadata:
  titre: "Élaborer la solution proposée"
  version: "1.0.0"
  statut: publie
  etape: appel-offres
  sous-processus: solution
  role: binome
  domaine: architecture
  phases: []
  technologies: [llm-agents, api-integration]
  cas-usage: [tout-projet]
  tags: [solution, appel-offres, approche, architecture-de-principe, differenciation]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Matrice de conformité", "Note de faisabilité", "Critères de notation de la consultation"]
  sorties: ["Dossier de solution validé par le binôme", "Découpage en lots pour le chiffrage"]
  prerequis: [identifier-exigences, etudier-faisabilite]
---

## Mission

Décider ce que nous proposons avant de l'écrire. Le skill produit un dossier de solution court, que le binôme valide et dont découlent le mémoire technique et le chiffrage. Le Design porte la compréhension du besoin, l'approche, la valeur et l'organisation ; le Build porte l'architecture de principe, le niveau de solution et les risques techniques.

## Quand l'utiliser

- La matrice de conformité existe et la faisabilité est confirmée.
- L'acheteur autorise une variante et l'on veut en proposer une.
- Une réponse de l'acheteur remet en cause un choix structurant.

Ne pas l'utiliser pour rédiger : la mise en forme relève de [Rédiger l'offre technique](/skills/rediger-offre-technique). Une solution n'est pas une architecture détaillée : celle-ci se conçoit en mission.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La matrice de conformité et ses exigences à risque | Oui | S'arrêter : on ne conçoit pas une réponse sans savoir à quoi répondre. |
| La note de faisabilité | Oui | Lancer l'étude de faisabilité d'abord. |
| Les critères de notation et leur pondération | Oui | Les reprendre de la synthèse de consultation. |
| Les références et retours d'expérience comparables | Non | Ne citer aucune référence ; s'appuyer sur la méthode. |

## Procédure

1. **Écrire notre compréhension du besoin** en dix lignes : le résultat métier visé, ce qui l'empêche aujourd'hui, ce que le client craint. Si le dossier demande une solution, dire le problème qu'elle sert.
2. **Arrêter le parti pris.** Une phrase qui résume ce que nous proposons et pourquoi cela répond mieux que l'évidence. Sans parti pris, l'offre est un catalogue.
3. **Poser l'approche et le phasage** sur le Parcours AI-Native : phases, jalons de décision du client, critères d'arrêt, ce qui est prouvé à chaque étape. Proposer un premier périmètre étroit qui prouve la valeur avant d'élargir.
4. **Fixer le niveau de solution** capacité par capacité, au barreau le plus bas qui suffit, et le justifier. Si le dossier impose un agent là où un workflow suffit, le dire et proposer l'alternative en variante.
5. **Dessiner l'architecture de principe** : blocs, flux, intégrations au SI, où sont les données, où intervient l'humain. Un schéma, pas un dossier.
6. **Dire comment on prouve.** Évaluations avant construction, golden set constitué avec les experts du client, pilote mesuré contre une référence, autonomie relevée sur preuves.
7. **Décrire l'organisation** : binôme Design et Build, rôles attendus côté client, gouvernance, transfert de compétences jusqu'à l'autonomie.
8. **Proposer des engagements mesurables** et dire à quelles conditions ils tiennent. Refuser un engagement de résultat qui dépend de données non vues.
9. **Relier la solution aux critères de notation** : pour chaque critère, les deux ou trois éléments de la solution qui marquent des points.
10. **Découper en lots** pour le chiffrage et lister les hypothèses.

## Livrable

Un dossier de solution de cinq pages au plus :

1. Compréhension du besoin et parti pris.
2. Approche, phasage, jalons et critères d'arrêt.
3. Architecture de principe et niveau de solution par capacité.
4. Dispositif de preuve : évaluations, pilote, mesure de la valeur.
5. Organisation, gouvernance et transfert.
6. Engagements et conditions.
7. Risques et parades.
8. Tableau critères de notation × éléments de réponse.
9. Lots et hypothèses pour le chiffrage.

## Critères de qualité

- Le parti pris tient en une phrase et se retrouve dans chaque section.
- Chaque exigence éliminatoire est couverte ou explicitement traitée en réserve.
- Le niveau de solution est justifié par l'insuffisance du barreau inférieur.
- Chaque engagement a un indicateur, une méthode de mesure et ses conditions.
- Chaque critère de notation a au moins un élément de réponse identifié.

## Garde-fous

- La solution est validée par le FDE Design et le FDE Build ensemble avant rédaction : aucun des deux ne promet ce que l'autre n'a pas qualifié.
- Ne promettre ni gain chiffré ni délai sans référence mesurée chez le client : annoncer une méthode de mesure, pas un résultat.
- Ne citer que des références réelles et autorisées ; à défaut, n'en citer aucune.
- Rester neutre sur les technologies tant que le SI du client n'a pas été vu.

## Enchaînements

- **Amont** : [Identifier et tracer les exigences](/skills/identifier-exigences), [Étudier la faisabilité](/skills/etudier-faisabilite).
- **Aval** : [Estimer les charges et les coûts](/skills/estimer-charges-couts), [Rédiger l'offre technique](/skills/rediger-offre-technique), [Rédiger l'offre commerciale](/skills/rediger-offre-commerciale).
- **Workflow** : [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Faut-il un agent ? L'échelle des solutions](/frameworks/faut-il-un-agent), [Architecture de référence d'un système agentique](/frameworks/architecture-reference), [Du POC à la production](/frameworks/poc-pilote-production), [L'approche par domaine](/frameworks/approche-par-domaine), [Parcours AI-Native](/methode).
