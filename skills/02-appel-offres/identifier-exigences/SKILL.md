---
name: identifier-exigences
description: "Extrait chaque exigence d'un dossier de consultation, la classe, la relie à un critère de notation et construit la matrice de conformité qui suit l'offre jusqu'au dépôt. À utiliser après l'analyse du cahier des charges, puis à chaque additif ou réponse de l'acheteur."
metadata:
  titre: "Identifier et tracer les exigences"
  version: "1.0.0"
  statut: publie
  etape: appel-offres
  sous-processus: exigences
  role: binome
  domaine: conseil
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [exigences, matrice-de-conformite, tracabilite, appel-offres, rfp, conformite, requirements]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Synthèse de consultation", "Pièces du dossier de consultation", "Réponses de l'acheteur aux questions"]
  sorties: ["Matrice de conformité", "Liste des exigences à risque ou éliminatoires"]
  prerequis: [analyser-cahier-des-charges]
---

## Mission

Faire en sorte qu'aucune exigence ne reste sans réponse. Le skill produit la matrice de conformité : chaque exigence du dossier, sa nature, notre position et l'endroit de l'offre qui y répond. Le Design porte les exigences métier, de service et contractuelles ; le Build porte les exigences techniques, de sécurité et d'exploitation.

## Quand l'utiliser

- La synthèse de consultation est faite et la réponse démarre.
- Un additif ou une réponse de l'acheteur ajoute, retire ou précise des exigences.
- Avant le dépôt, pour vérifier que chaque exigence a sa réponse.

Ne pas l'utiliser pour décider de la solution : la matrice dit ce qu'il faut satisfaire, [Élaborer la solution proposée](/skills/elaborer-solution) dit comment.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le cahier des charges et ses annexes | Oui | S'arrêter. |
| Le cadre de réponse imposé, s'il existe | Oui s'il existe | Demander confirmation qu'il n'y en a pas. |
| La synthèse de consultation | Non | Relever soi-même critères de notation et critères éliminatoires. |
| Les réponses de l'acheteur aux questions | Non | Noter la date de mise à jour de la matrice. |

## Procédure

1. **Découper le dossier en énoncés.** Parcourir chaque pièce et isoler chaque phrase qui oblige : « doit », « devra », « est exigé », mais aussi les attentes implicites des annexes et du cadre de réponse. Une exigence par ligne ; une phrase qui en contient deux se scinde.
2. **Identifier chaque exigence.** Un identifiant stable, la pièce et la page d'origine, l'énoncé cité tel quel.
3. **Classer.** Nature : fonctionnelle, technique, sécurité, conformité, service et exploitation, contractuelle, livrable. Force : éliminatoire, obligatoire, souhaitée, information.
4. **Relier à la notation.** Indiquer le critère de notation que l'exigence alimente : cela dit où investir.
5. **Attribuer.** Chaque exigence reçoit un répondant : FDE Design ou FDE Build, ou un expert nommé.
6. **Prendre position.** Conforme, conforme sous réserve (laquelle), non conforme (avec l'alternative proposée), à clarifier (avec la question). Aucune ligne ne reste vide.
7. **Isoler les exigences à risque.** Toute exigence éliminatoire non acquise, tout engagement de résultat, toute exigence qui contredit la méthode (agent imposé là où une règle suffit, autonomie totale sans preuve) est remontée au binôme et au responsable de l'offre.
8. **Tracer vers l'offre.** À mesure que l'offre s'écrit, renseigner la section qui répond à chaque exigence. Avant dépôt : zéro ligne sans section, zéro « à clarifier » restant.

## Livrable

La matrice de conformité, un tableau :

| Id | Source | Exigence | Nature | Force | Critère de notation | Répondant | Position | Réserve ou alternative | Section de l'offre |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Accompagnée d'une page de synthèse : nombre d'exigences par nature et par position, liste des exigences éliminatoires et de leur état, exigences à risque et décision attendue pour chacune.

## Critères de qualité

- Chaque exigence cite sa source, à la page près.
- Aucune ligne ne regroupe deux exigences.
- Toute exigence éliminatoire est marquée et a une position explicite.
- Chaque « conforme sous réserve » énonce la réserve en une phrase.
- À la veille du dépôt, chaque ligne renvoie à une section de l'offre.

## Garde-fous

- Ne jamais déclarer « conforme » une exigence que la faisabilité n'a pas confirmée : la marquer « à clarifier » et la renvoyer vers [Étudier la faisabilité](/skills/etudier-faisabilite).
- Une non-conformité se décide, elle ne se cache pas : c'est le responsable de l'offre qui tranche de la présenter comme réserve ou variante.
- Ne pas reformuler une exigence au point d'en changer le sens : la citation fait foi.
- Les engagements contractuels sont relus par le juridique avant le dépôt.

## Enchaînements

- **Amont** : [Analyser le cahier des charges](/skills/analyser-cahier-des-charges).
- **Aval** : [Élaborer la solution proposée](/skills/elaborer-solution), [Rédiger l'offre technique](/skills/rediger-offre-technique).
- **Workflow** : [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [MECE : découper sans trou ni recouvrement](/frameworks/mece), [RACI Design · Build](/raci).
