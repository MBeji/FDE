---
name: etudier-faisabilite
description: "Rend un verdict de faisabilité sur un besoin reformulé : données, intégration au SI, niveau de solution, contraintes de sécurité, de réglementation et d'organisation. À utiliser après l'analyse du besoin et avant tout chiffrage ou toute promesse de solution, en avant-vente comme en réponse à appel d'offres."
metadata:
  titre: "Étudier la faisabilité"
  version: "1.0.0"
  statut: publie
  etape: avant-vente
  sous-processus: faisabilite
  role: build
  domaine: architecture
  phases: []
  technologies: [llm-agents, donnees, api-integration]
  cas-usage: [tout-projet]
  tags: [faisabilite, donnees, niveau-de-solution, risques, avant-vente, etude-de-faisabilite, prerequis, go-no-go-technique]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Note de besoin validée", "Informations disponibles sur les données et le SI du client", "Contraintes de sécurité, de conformité et de calendrier connues"]
  sorties: ["Note de faisabilité avec verdict", "Hypothèses et risques à porter dans le chiffrage"]
  prerequis: [analyser-besoin-client]
---

## Mission

Dire, avant de chiffrer ou de promettre, si le besoin est tenable et à quelles conditions. Le skill produit pour le FDE Build une note de faisabilité avec un verdict par axe et un verdict d'ensemble. Une faisabilité surestimée en avant-vente se paie pendant toute la mission : mieux vaut un périmètre tenable qu'une promesse que les données ne permettront pas de tenir.

## Quand l'utiliser

- Une note de besoin existe et l'on s'apprête à estimer ou à construire une solution.
- Une consultation contient des exigences structurantes dont la tenue n'est pas acquise.
- Une information nouvelle change la donne : accès aux données refusé, contrainte d'hébergement, délai raccourci.

Ne pas l'utiliser sans besoin reformulé : repasser par [Analyser le besoin du client](/skills/analyser-besoin-client). En mission, la revue détaillée relève de [Passer en revue les données et le SI](/skills/evaluer-donnees-si).

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| La note de besoin : problème, indicateur, processus touché | Oui | S'arrêter et la demander. |
| Ce que l'on sait des données : sources, volumes, sensibilité | Oui | Formuler les questions et noter l'axe « non évaluable ». |
| Les systèmes à intégrer et leur mode d'accès | Non | Poser l'hypothèse la plus prudente et la marquer `[À CONFIRMER]`. |
| Les contraintes de sécurité, d'hébergement et de conformité | Non | Supposer les contraintes d'un grand compte régulé. |
| Le calendrier attendu par le client | Non | Raisonner sur les durées types du [Parcours AI-Native](/methode). |

## Procédure

1. **Découper le besoin en capacités.** Lister ce que la solution doit savoir faire : lire quelles données, décider quoi, agir dans quel système. Résultat : cinq à dix capacités, chacune rattachée à une étape du processus.
2. **Placer chaque capacité sur l'échelle des solutions.** Règle, appel de modèle unique, workflow, agent, système multi-agents : retenir le barreau le plus bas qui suffit et écrire pourquoi le barreau inférieur ne suffit pas.
3. **Évaluer l'axe données.** Pour chaque source : existe-t-elle, qui en est propriétaire, peut-on y accéder dans les délais, sa qualité permet-elle l'usage visé, contient-elle des données personnelles ou sensibles ?
4. **Évaluer l'axe SI et intégration.** Interfaces disponibles, droits d'écriture, environnements de test, équipes à mobiliser côté client. Une action à effet dans un système sans interface ni environnement de test est un risque majeur.
5. **Évaluer l'axe confiance.** Qualifier le niveau de risque réglementaire du cas d'usage, les exigences de sécurité et de résidence des données, la nécessité d'un contrôle humain. Un cas à risque élevé reste faisable, avec ses obligations chiffrées.
6. **Évaluer l'axe organisation.** Sponsor, propriétaire du processus, disponibilité des experts métier pour annoter et recetter, capacité du client à exploiter ensuite.
7. **Noter chaque axe** : vert (acquis), orange (faisable sous condition nommée), rouge (bloquant en l'état), gris (non évaluable sans information).
8. **Conclure.** Un axe rouge sans parade : non faisable en l'état, proposer un périmètre réduit qui l'évite. Des axes orange : faisable sous conditions, chaque condition devenant un prérequis client ou une hypothèse de chiffrage. Plus de deux axes gris : demander un atelier de découverte avant de s'engager.

## Livrable

Une note de faisabilité de deux pages :

1. Rappel du besoin et des capacités attendues.
2. Niveau de solution retenu par capacité, avec sa justification.
3. Tableau des quatre axes : note, constats, source de l'information.
4. Verdict : faisable, faisable sous conditions, non faisable en l'état.
5. Conditions et prérequis côté client.
6. Risques et hypothèses à porter dans le chiffrage.
7. Périmètre alternatif, si le périmètre demandé n'est pas tenable.

## Critères de qualité

- Chaque note d'axe repose sur un constat sourcé ou sur une hypothèse marquée `[À CONFIRMER]`.
- Le niveau de solution est justifié par l'insuffisance du barreau inférieur.
- Aucun axe n'est noté vert sur la seule foi d'une déclaration non vérifiée du client.
- Chaque condition est formulée de façon vérifiable et attribuée.
- La note distingue ce qui est faisable techniquement de ce qui l'est dans le délai demandé.

## Garde-fous

- Le verdict est signé par le FDE Build ; le skill le prépare, il ne l'annonce pas au client.
- Ne jamais déduire la qualité des données d'un échantillon que le client a choisi lui-même.
- Ne pas se prononcer sur une qualification juridique : donner les repères et renvoyer au juridique et au DPO du client.
- Ne citer aucun produit ni fournisseur : la faisabilité se juge sur des capacités.

## Enchaînements

- **Amont** : [Analyser le besoin du client](/skills/analyser-besoin-client).
- **Aval** : [Estimer les charges et les coûts](/skills/estimer-charges-couts), [Élaborer la solution proposée](/skills/elaborer-solution).
- **Workflows** : [De l'opportunité à l'estimation](/skills/workflows/qualifier-et-chiffrer), [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Faut-il un agent ? L'échelle des solutions](/frameworks/faut-il-un-agent), [Matrice valeur × faisabilité](/frameworks/matrice-valeur-faisabilite), [EU AI Act : qualifier un cas d'usage](/frameworks/eu-ai-act), [Revue de préparation des données et du SI](/templates/revue-donnees-si), atelier [Agent ou pas ?](/outils/agent-ou-pas).
