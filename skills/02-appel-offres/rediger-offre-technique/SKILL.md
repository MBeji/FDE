---
name: rediger-offre-technique
description: "Rédige le mémoire technique d'une offre dans le plan imposé, en répondant exigence par exigence et critère par critère à partir du dossier de solution. À utiliser quand la solution est validée par le binôme, puis à chaque relecture avant dépôt."
metadata:
  titre: "Rédiger l'offre technique"
  version: "1.0.0"
  statut: publie
  etape: appel-offres
  sous-processus: offre
  role: build
  domaine: commerce
  phases: []
  technologies: []
  cas-usage: [tout-projet]
  tags: [memoire-technique, offre, redaction, appel-offres, conformite]
  proprietaire: avant-vente
  diffusion: interne
  entrees: ["Dossier de solution validé", "Matrice de conformité", "Cadre de réponse et critères de notation"]
  sorties: ["Mémoire technique prêt pour validation", "Matrice de conformité complétée des renvois"]
  prerequis: [elaborer-solution]
---

## Mission

Transformer la solution arrêtée en un document que le correcteur peut noter sans chercher. Le skill produit le mémoire technique pour le FDE Build, qui en répond. Un correcteur lit plusieurs offres avec une grille : celle qui suit son plan, répond dans ses termes et prouve ce qu'elle avance marque les points.

## Quand l'utiliser

- Le dossier de solution est validé et la rédaction démarre.
- Une relecture demande de reprendre une section.
- Avant dépôt, pour le contrôle final de complétude.

Ne pas l'utiliser pour inventer la solution en écrivant : repasser par [Élaborer la solution proposée](/skills/elaborer-solution). Le prix n'apparaît pas dans le mémoire technique.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| Le dossier de solution validé | Oui | S'arrêter. |
| Le cadre de réponse ou le plan imposé | Oui s'il existe | Suivre l'ordre des critères de notation. |
| La matrice de conformité | Oui | La construire d'abord. |
| Les CV et références autorisés | Non | Laisser `[À CONFIRMER]` ; ne rien inventer. |
| Les contraintes de forme : pages, format, langue | Non | Les relire dans le règlement de la consultation. |

## Procédure

1. **Bâtir le plan** à partir du cadre imposé, sans le réordonner ni le renommer. Sans cadre, suivre les critères de notation dans leur ordre, le plus lourd d'abord.
2. **Allouer les pages** au prorata de la pondération. Un critère à 10 % ne reçoit pas un tiers du document.
3. **Écrire le message de chaque section** en une phrase avant de la rédiger. Chaque section s'ouvre sur ce message, puis le prouve.
4. **Répondre dans les termes du client.** Reprendre son vocabulaire et l'intitulé de ses exigences ; renvoyer à leur identifiant quand le dossier en donne.
5. **Prouver.** Chaque affirmation s'appuie sur un fait : la méthode et ses livrables, une référence réelle, un exemple de livrable, un dispositif de mesure. Supprimer tout adjectif qui ne s'appuie sur rien.
6. **Traiter les réserves franchement.** Une exigence non tenue telle quelle est dite, avec l'alternative et son bénéfice.
7. **Montrer plutôt que décrire.** Un schéma pour l'architecture de principe, un tableau pour le phasage et les jalons, un tableau pour les rôles. Chaque figure a un titre qui porte son message.
8. **Rédiger la synthèse en dernier**, en une page : le besoin compris, le parti pris, trois raisons de nous choisir, reliées aux critères.
9. **Contrôler.** Compléter la colonne « section de l'offre » de la matrice. Vérifier la cohérence avec le chiffrage : mêmes lots, mêmes profils, mêmes durées.
10. **Faire relire** par quelqu'un qui n'a pas écrit, grille de notation en main.

## Livrable

Le mémoire technique, dans le format demandé :

1. Synthèse d'une page.
2. Compréhension du besoin et des enjeux.
3. Solution proposée, section par section selon le plan imposé.
4. Méthode, phasage, jalons et livrables.
5. Organisation, équipe et gouvernance.
6. Gestion des risques, sécurité et conformité.
7. Transfert de compétences et réversibilité.
8. Annexes demandées : CV, références, matrice de conformité.

## Critères de qualité

- Le plan est celui du client, à l'identique.
- Chaque section s'ouvre sur son message et se rattache à un critère de notation.
- Chaque exigence de la matrice renvoie à une section.
- Aucun chiffre, aucune référence, aucun CV qui ne soit réel et vérifié.
- Durées, lots et profils sont identiques à ceux du chiffrage.
- Les limites de forme sont respectées.

## Garde-fous

- Le mémoire est validé par le FDE Build, puis par le responsable de l'offre : le skill ne dépose rien.
- Ne jamais fabriquer une référence, un résultat client ou une certification ; marquer `[À CONFIRMER]` ce qui reste à vérifier et le lister en fin de document.
- Ne pas engager l'entreprise au-delà du dossier de solution : tout engagement nouveau remonte au responsable de l'offre.
- Ne nommer un intervenant qu'avec son accord et sa disponibilité confirmée.

## Enchaînements

- **Amont** : [Élaborer la solution proposée](/skills/elaborer-solution).
- **Aval** : [Préparer la soutenance](/skills/preparer-soutenance).
- **Workflow** : [Répondre à un appel d'offres](/skills/workflows/repondre-appel-offres).
- **Ressources** : [Principe de la pyramide et SCQA](/frameworks/pyramide-scqa), [Communication exécutive](/frameworks/communication-executive).
