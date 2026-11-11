# Guide de contribution au contenu

Tout le savoir du portail vit dans ce dossier, en Markdown versionné. Capitaliser, c'est ouvrir une pull request : le contenu est relu comme du code, puis publié au prochain déploiement.

```
content/
├── frameworks/   Un fichier par framework ou méthode
├── templates/    Un fichier par template (mode d'emploi + template vierge + exemple rempli)
├── guides/       Guides pratiques (playbooks)
└── savoir/       Patterns, anti-patterns et retours d'expérience
```

`npm run content` valide l'ensemble (champs obligatoires, valeurs autorisées, liens internes) et échoue avec un message explicite en cas d'erreur.

## Règles communes

- **Nom de fichier = `id`** : `content/frameworks/regle-10-20-70.md` porte `id: regle-10-20-70`. Minuscules, chiffres et tirets uniquement.
- **Front matter YAML** en tête de fichier, entre deux lignes `---`. Mettre entre guillemets doubles toute valeur contenant `:`, `#`, `[` ou commençant par un guillemet. Les listes s'écrivent en ligne : `tags: [cadrage, valeur]`.
- **Pas de titre H1** dans le corps (le titre vient du front matter), sauf dans les sections `template` et `exemple` d'un template, qui sont des documents autonomes.
- **Liens internes** en chemins absolus du portail : `/frameworks/<id>`, `/templates/<id>`, `/guides/<id>`, `/savoir/<id>`, `/methode/<phase>`, `/outils/<outil>`, `/cas-usage`, `/glossaire`. Ne lier que des identifiants existants.
- **Encadrés** avec la syntaxe d'alertes : `> [!TIP]`, `> [!NOTE]`, `> [!WARNING]`, `> [!IMPORTANT]` en première ligne d'une citation.
- **Diagrammes** en blocs ` ```mermaid ` (`flowchart LR|TD`, `sequenceDiagram`). Mettre entre guillemets doubles tout libellé contenant parenthèses, deux-points, slash ou apostrophe : `A["Agent (L3)"]`. Rester simple : moins de 15 nœuds.
- **Tableaux** GFM pour tout ce qui se compare ou se remplit.

### Identifiants de référence

Phases (`phase`, `phases`) : `cadrer`, `diagnostiquer`, `cibler`, `reinventer`, `concevoir`, `construire`, `industrialiser`, `perenniser`. Les templates acceptent aussi `transverse`.

Outils (`/outils/<outil>`) : `maturite`, `agent-ou-pas`, `priorisation`, `business-case`, `redesign-processus`, `agent-designer`.

## Ligne éditoriale

Le lecteur est un FDE en mission, souvent pressé, qui doit agir dans l'heure. Écrire comme un associé de cabinet de conseil qui aurait aussi mis des agents en production.

- **Français professionnel, direct, dense.** Phrases courtes, verbes d'action, infinitif ou impératif (« Cartographier… », « Vérifiez… »). Pas de remplissage, pas de superlatifs, pas d'emphase commerciale.
- **Opérationnel avant tout.** Chaque page doit permettre de faire quelque chose : étapes numérotées, critères de décision, seuils, questions à poser, exemples chiffrés, pièges nommés.
- **Prendre position.** Dire ce qu'il faut faire, dans quel ordre, et ce qu'il ne faut pas faire. Signaler les limites d'un framework et les cas où ne pas l'utiliser.
- **Vocabulaire.** Garder les termes anglais quand ils sont l'usage du métier (evals, system prompt, workflow, golden set, human-in-the-loop, guardrails peut se dire garde-fous). Écrire « cas d'usage », « agent », « système multi-agents », « AI-Native ». Définir un acronyme à sa première occurrence.
- **Rigueur.** Aucune statistique, étude ou citation inventée. Attribuer un framework à son auteur réel (`origine`) ; marquer `Maison` ce qui relève de notre propre méthode. Pas de promesse chiffrée générique (« +40 % de productivité ») : les chiffres viennent du cas fil rouge ou sont présentés comme des ordres de grandeur à vérifier.
- **Neutralité technologique.** Citer les standards ouverts (MCP, A2A, OpenTelemetry) et les catégories de solutions, pas des produits. Éviter tout ce qui périme vite (noms de modèles, versions, prix).
- **Cas fil rouge.** Les exemples s'appuient sur la mission Voxalis décrite dans `/guides/cas-fil-rouge`. Reprendre ses chiffres, ses noms et son calendrier sans les modifier. Un exemple d'un autre secteur est bienvenu en complément quand il éclaire un point différent.

## Frameworks — `content/frameworks/<id>.md`

```yaml
---
id: regle-10-20-70
titre: "Règle 10-20-70"
resume: "Une ou deux phrases : ce que c'est et à quoi ça sert."
categorie: strategie      # strategie | opportunites | processus | agents | industrialisation | confiance | adoption | valeur
phases: [cadrer, diagnostiquer]
origine: "BCG"            # auteur ou organisme réel, ou "Maison"
niveau: fondamental       # fondamental | avance
tags: [transformation, investissement]
templates: [charte-de-mission]   # templates qui outillent ce framework (peut être vide : [])
lies: [rewired-six-capacites]    # frameworks connexes (peut être vide : [])
---
```

Corps : 450 à 800 mots, avec ces sections dans cet ordre.

1. `## En bref` — l'idée en 3 à 5 phrases, et pourquoi elle compte pour un FDE.
2. `## Quand l'utiliser` — situations déclenchantes, et cas où ne pas l'utiliser.
3. `## Comment l'appliquer` — étapes numérotées, concrètes, avec les questions à poser et le résultat attendu de chaque étape. Tableau ou diagramme si cela clarifie.
4. `## Exemple` — application au cas Voxalis (ou à un autre cas réaliste), chiffrée.
5. `## Pièges à éviter` — 3 à 5 erreurs réelles, chacune avec sa parade.
6. `## Pour aller plus loin` — liens internes vers les frameworks, templates, guides et outils associés ; sources de référence nommées sans URL.

## Templates — `content/templates/<id>.md`

```yaml
---
id: charte-de-mission
titre: "Charte de mission"
resume: "Une ou deux phrases : ce que produit ce template et pour qui."
phase: cadrer             # une phase, ou transverse
type: livrable            # livrable | canevas | grille | checklist | trame
format: document          # document | tableau | atelier | presentation
effort: "2 à 3 h"
tags: [cadrage, gouvernance]
frameworks: [probleme-hypotheses]   # frameworks mobilisés (peut être vide : [])
---
```

Corps en trois sections, chacune introduite par un marqueur sur sa propre ligne.

```markdown
<!-- section: mode-emploi -->
## À quoi ça sert
## Quand l'utiliser
## Comment le remplir
## Critères de qualité

<!-- section: template -->
# Titre du livrable — {{client}}
(le document vierge, prêt à être copié)

<!-- section: exemple -->
# Titre du livrable — Voxalis
(le même document, rempli pour le cas fil rouge)
```

- **Mode d'emploi** : 150 à 250 mots. Les critères de qualité sont une liste de contrôle que le FDE peut appliquer avant d'envoyer le livrable.
- **Template** : structure complète du livrable, utilisable telle quelle dans un éditeur Markdown, Notion, Confluence ou un document. Variables entre doubles accolades, pré-remplies par le portail depuis la mission active : `{{client}}`, `{{mission}}`, `{{sponsor}}`, `{{domaine}}`, `{{date}}`, `{{auteur}}`. Indications de remplissage en italique entre crochets : `_[Décrire le périmètre en une phrase]_`.
- **Exemple** : le template entièrement rempli, réaliste et cohérent avec le cas Voxalis. C'est la partie la plus utile : elle montre le niveau d'exigence attendu.

## Guides pratiques — `content/guides/<id>.md`

```yaml
---
id: mener-entretiens
titre: "Mener des entretiens de diagnostic"
resume: "Une ou deux phrases."
phases: [diagnostiquer]
duree: "12 min"           # temps de lecture
niveau: fondamental       # fondamental | avance
tags: [diagnostic, entretien]
frameworks: []
templates: [guide-entretien]
---
```

Corps : 700 à 1 200 mots. Structure libre, mais toujours : le résultat visé, la démarche pas à pas, des formulations ou exemples prêts à l'emploi, les erreurs fréquentes, et une liste de contrôle finale (`## Checklist`).

## Savoir terrain — `content/savoir/<id>.md`

```yaml
---
id: poc-purgatoire
titre: "Le purgatoire des POC"
resume: "Une ou deux phrases."
type: anti-pattern        # pattern | anti-pattern | rex
phases: [construire, industrialiser]
tags: [delivery]
secteur: ""               # pour un rex : secteur du client (anonymisé)
date: ""                  # pour un rex : AAAA-MM
---
```

- **Pattern** (300 à 500 mots) : `## Contexte`, `## Le pattern`, `## Pourquoi ça marche`, `## Mise en œuvre`, `## Limites`.
- **Anti-pattern** (300 à 500 mots) : `## Symptômes`, `## Pourquoi ça arrive`, `## Conséquences`, `## Comment en sortir`, `## Comment l'éviter`.
- **REX** (400 à 800 mots) : `## Contexte`, `## Ce que nous avons fait`, `## Résultats`, `## Ce qui a marché`, `## Ce que nous ferions autrement`, `## À retenir`. **Toujours anonymiser** : ni nom de client, ni nom de personne, ni chiffre permettant de l'identifier.
