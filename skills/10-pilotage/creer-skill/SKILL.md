---
name: creer-skill
description: "Crée un nouveau skill ou fait évoluer un skill existant de la bibliothèque, au format imposé : classification, huit sections, historique, validation et pull request. À utiliser quand une activité revient en mission sans skill pour la porter, quand un skill s'est révélé faux ou incomplet sur le terrain, ou quand un skill arrive à échéance de révision."
metadata:
  titre: "Créer ou faire évoluer un skill"
  version: "1.0.0"
  statut: publie
  etape: pilotage
  sous-processus: bibliotheque
  role: binome
  domaine: pilotage
  phases: [perenniser]
  technologies: []
  cas-usage: [tout-projet]
  tags: [skill, bibliotheque, capitalisation, gouvernance, versionnement, nouveau-skill, contribuer, mettre-a-jour]
  proprietaire: bibliotheque
  diffusion: interne
  entrees: ["Activité à couvrir ou skill à corriger, avec le constat de terrain", "Exemple réel du livrable attendu", "Taxonomie et skills voisins de la bibliothèque"]
  sorties: ["SKILL.md et CHANGELOG.md valides", "Pull request prête pour la relecture du propriétaire"]
  prerequis: []
---

## Mission

Transformer un savoir-faire en skill qu'un agent peut exécuter sans son auteur, et le faire entrer dans la bibliothèque par le circuit de validation. Un skill mal classé ne sera pas trouvé ; un skill vague sera exécuté de travers. Ce skill garantit le format, la classification et l'historique, et prépare la relecture du propriétaire.

## Quand l'utiliser

- Une activité revient d'une mission à l'autre et aucun skill ne la couvre.
- Un skill a produit un mauvais résultat : étape manquante, critère faux, garde-fou absent.
- Un skill est signalé « à réviser », ou un template, un framework ou un standard qu'il cite a changé.
- Un skill doit être déprécié au profit d'un autre.

Ne pas créer de skill pour un savoir qui ne s'exécute pas : un retour d'expérience ou un pattern relève de [Capitaliser un retour d'expérience](/skills/capitaliser-rex). Ne pas dupliquer : si un skill voisin couvre 80 % du besoin, le faire évoluer.

## Entrées

| Entrée | Indispensable | Si elle manque |
| --- | --- | --- |
| L'activité à couvrir, ou le skill à corriger et le constat qui le motive | Oui | S'arrêter : un skill sans cas réel est une supposition. |
| Un exemple réel et anonymisé du livrable attendu | Oui pour une création | Le demander au FDE qui a mené l'activité. |
| `skills/README.md` et `skills/taxonomie.json` | Oui | Les lire dans le dépôt : ils font foi. |
| Les skills voisins de la même étape | Oui | Les lister par le catalogue ou la recherche de la bibliothèque. |
| Le propriétaire pressenti | Non | Reprendre celui des skills de la même étape. |

## Procédure

1. **Chercher l'existant.** Interroger la bibliothèque sur l'activité. Décider : création, évolution d'un skill voisin, ou rien à faire. Consigner les skills examinés.
2. **Situer le skill.** Choisir l'étape et le sous-processus dans la taxonomie, puis le rôle (design, build, binome), le domaine, les phases, les technologies et les cas d'usage. Si aucun sous-processus ne convient, proposer son ajout à la taxonomie dans la même pull request.
3. **Nommer.** Un verbe à l'infinitif et son objet, en minuscules et tirets, 64 caractères au plus : `qualifier-opportunite`. Le nom ne change plus une fois publié.
4. **Écrire la description.** Ce que fait le skill et quand l'utiliser, en nommant les déclencheurs : c'est le seul texte qu'un agent lit avant de le charger. La tester : lue seule, permet-elle de choisir ce skill plutôt que son voisin ?
5. **Écrire les huit sections**, dans l'ordre imposé. Partir du livrable réel pour écrire la procédure : chaque étape à l'infinitif, avec son résultat, ses critères de décision et ses cas qui dérapent. Nommer dans les garde-fous qui valide quoi.
6. **Déclarer les entrées, les sorties et les prérequis** dans le front matter. Vérifier que chaque entrée est la sortie d'un skill amont ou une donnée que l'utilisateur fournit.
7. **Lier.** Skills amont et aval, templates, frameworks, guides et standards du portail, en chemins absolus. Ne lier que des pages existantes.
8. **Versionner.** Création : `1.0.0`. Évolution : correctif, mineure ou majeure selon la règle du README, avec une entrée datée en tête de `CHANGELOG.md` qui dit ce qui change et pourquoi. Une version majeure liste les workflows à revoir.
9. **Valider.** Lancer `npm run content` jusqu'à zéro erreur, puis `npm run skills:versions`.
10. **Éprouver.** Exécuter le skill sur le cas réel de départ, sans autre contexte que ses entrées. Corriger ce qui a manqué.
11. **Soumettre.** Ouvrir la pull request au statut `en-revue`, avec le cas d'épreuve et son résultat. Le propriétaire relit le fond ; le statut passe à `publie` dans la même pull request, après son approbation.

## Livrable

Une pull request contenant :

1. `skills/<étape>/<nom>/SKILL.md`, conforme au format.
2. `skills/<étape>/<nom>/CHANGELOG.md`, avec l'entrée de la version.
3. Le cas d'épreuve : entrées fournies, livrable obtenu, écarts corrigés.
4. Si besoin : la modification de `taxonomie.json` et celle des workflows touchés.

## Critères de qualité

- La validation passe sans erreur ni avertissement sur le skill.
- La description nomme au moins un déclencheur concret et distingue le skill de ses voisins.
- Chaque étape de la procédure est exécutable par un agent qui n'a pas le contexte de l'auteur.
- Chaque engagement (décision, prix, mise en production, message au client) nomme la personne qui valide.
- Le skill a été exécuté sur un cas réel, et le résultat est joint.
- Aucun nom de client, de personne ni de produit ; aucun chiffre non sourcé.

## Garde-fous

- Un agent ne publie pas un skill : il prépare la pull request, un propriétaire humain approuve et fusionne.
- Ne jamais verser dans un skill une information confidentielle d'un client ; anonymiser l'exemple avant de s'en servir.
- Ne pas changer le sens d'un skill publié sous couvert d'un correctif : une rupture est une version majeure, annoncée.
- Ne pas supprimer un skill : le déprécier, avec `remplace-par` quand un successeur existe.
- Diffusion `client` seulement pour un skill utile à l'équipe qui exploitera le système, et sans élément commercial.

## Enchaînements

- **Amont** : [Capitaliser un retour d'expérience](/skills/capitaliser-rex), qui révèle les skills à créer ou à corriger.
- **Aval** : relecture par le propriétaire, puis publication par la fusion.
- **Workflow** : [De la mise en production au client autonome](/skills/workflows/transferer-au-client), dont la capitalisation révise les skills utilisés.
- **Ressources** : [Gouvernance de la bibliothèque](/skills/gouvernance), [Capitaliser : transformer le terrain en savoir collectif](/guides/capitaliser).
