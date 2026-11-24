# Bibliothèque de skills IA

Le patrimoine de savoir-faire opérationnel du pool, écrit pour être exécuté par des agents IA : un skill par activité du cycle de vie d'un projet, de l'avant-vente au transfert en exploitation. Un skill dit à un agent quand intervenir, de quoi il a besoin, comment procéder, ce qu'il doit produire et où il doit s'arrêter pour laisser décider un humain.

Les skills suivent le standard ouvert **Agent Skills** (un dossier, un fichier `SKILL.md` avec `name` et `description`) : ils se chargent tels quels dans tout environnement d'agents compatible. Le portail les présente sur `/skills`, les sert aux agents par un catalogue et un serveur MCP, et `npm run content` en valide chaque règle.

```
skills/
├── README.md                    Ce guide : format, classification, gouvernance, contribution
├── taxonomie.json               Référentiel de classification (étapes, rôles, domaines, technologies…)
├── 01-avant-vente/              Une étape du cycle de vie
│   └── qualifier-opportunite/   Un skill = un dossier
│       ├── SKILL.md             Le skill
│       ├── CHANGELOG.md         L'historique de ses versions
│       └── references/          Facultatif : annexes chargées à la demande
├── 02-appel-offres/ … 10-pilotage/
└── workflows/                   Enchaînements de skills (un fichier par workflow)
```

## Le cycle de vie couvert

| Étape | Dossier | Sous-processus |
| --- | --- | --- |
| Avant-vente | `01-avant-vente` | Qualification, analyse des besoins, faisabilité, estimation |
| Réponse aux appels d'offres | `02-appel-offres` | Analyse du cahier des charges, exigences, solution, offre, soutenance |
| Cadrage et diagnostic | `03-cadrage` | Cadrage, diagnostic, ciblage et business case |
| Conception | `04-conception` | Processus cible, architecture, choix technologiques, spécifications |
| Développement | `05-developpement` | Génération de code, standards, revues, intégration |
| Tests et validation | `06-tests-validation` | Stratégie, automatisation, fonctionnel, technique, non-régression, évaluation des agents, pilote |
| Déploiement | `07-deploiement` | Environnements, CI/CD, mise en production, validation |
| Livraison | `08-livraison` | Documentation, transfert de compétences, passation, accompagnement |
| Exploitation et maintenance | `09-exploitation` | Support, monitoring, incidents, amélioration continue, maintenance |
| Pilotage et capitalisation | `10-pilotage` | Pilotage, mesure de la valeur, capitalisation, vie de la bibliothèque |

Chaque sous-processus doit être couvert par au moins un skill actif : la validation échoue sinon. Ajouter un sous-processus à `taxonomie.json`, c'est s'engager à écrire son skill dans la même pull request.

## Format d'un skill — `skills/<étape>/<nom>/SKILL.md`

```yaml
---
name: qualifier-opportunite          # = nom du dossier ; minuscules, chiffres, tirets ; 64 caractères au plus
description: "Ce que fait le skill et quand l'utiliser, en 80 à 1 024 caractères. C'est le seul texte qu'un agent lit avant de décider de charger le skill : nommer les déclencheurs."
metadata:
  titre: "Qualifier une opportunité"
  version: "1.0.0"                   # SemVer, entre guillemets ; = première entrée de CHANGELOG.md
  statut: publie                     # brouillon | en-revue | publie | deprecie
  etape: avant-vente                 # étape du cycle de vie = dossier parent
  sous-processus: qualification      # un sous-processus de cette étape
  role: design                       # design | build | binome
  domaine: commerce                  # domaine métier (une valeur)
  phases: []                         # phases du Parcours AI-Native concernées ([] si hors parcours)
  technologies: []                   # [] = indépendant de la technologie
  cas-usage: [tout-projet]           # types de solution auxquels le skill s'applique
  tags: [go-no-go, opportunite]      # mots-clés libres, pour la recherche
  proprietaire: avant-vente          # qui répond du skill
  diffusion: interne                 # interne | client
  entrees: ["Compte rendu du premier échange"]      # ce que le skill consomme, en libellés courts
  sorties: ["Fiche de qualification et recommandation go / no-go"]   # ce qu'il produit
  prerequis: []                      # skills habituellement exécutés avant (leurs sorties nourrissent celui-ci)
---
```

Les valeurs autorisées de `statut`, `etape`, `sous-processus`, `role`, `domaine`, `technologies`, `cas-usage`, `proprietaire` et `diffusion` sont celles de `taxonomie.json`. `phases` reprend les identifiants du Parcours AI-Native (`cadrer`, `diagnostiquer`, `cibler`, `reinventer`, `concevoir`, `construire`, `industrialiser`, `perenniser`). Un skill déprécié peut porter `remplace-par: <nom du skill>`.

Seuls `name`, `description`, `license`, `compatibility`, `allowed-tools` et `metadata` sont admis au premier niveau : tout le reste vit sous `metadata`, pour rester conforme au standard.

### Le corps : huit sections, dans cet ordre

Entre 200 et 900 mots. Pas de titre H1. Les huit titres H2 sont imposés, à l'identique.

1. `## Mission` — ce que le skill produit, pour qui, et pourquoi cela compte. Deux à quatre phrases.
2. `## Quand l'utiliser` — les situations qui le déclenchent, et celles où il ne faut pas l'utiliser, avec le skill vers lequel se tourner.
3. `## Entrées` — ce qu'il faut avoir en main, ce qui est indispensable, et quoi faire quand une entrée manque (la demander, la marquer `[À CONFIRMER]`, s'arrêter).
4. `## Procédure` — les étapes numérotées, à l'infinitif, chacune avec son résultat. C'est le cœur du skill : critères de décision, seuils, questions à poser.
5. `## Livrable` — la structure exacte de ce qui est rendu, et le template du portail quand il existe.
6. `## Critères de qualité` — la liste de contrôle à passer avant de rendre le livrable. Des critères vérifiables, pas des intentions.
7. `## Garde-fous` — ce que l'agent ne fait pas seul : validations humaines et qui les donne, données à ne pas inventer, confidentialité, décisions réservées au client.
8. `## Enchaînements` — les skills en amont et en aval, les ressources du portail à ouvrir.

### Ligne éditoriale

Celle du portail (voir `content/README.md`), avec trois exigences propres aux skills :

- **Écrire pour un agent qui exécute.** Phrases courtes, infinitif, une action par étape. Dire quoi faire dans le cas général, puis dans les cas qui dérapent. Pas de contexte que l'agent ne peut pas utiliser.
- **Rendre le contrôle humain explicite.** Tout engagement (prix, décision de go, mise en production, message au client) nomme la personne qui valide : FDE Design, FDE Build, sponsor, propriétaire du processus.
- **Ne rien inventer.** Un skill interdit à l'agent de fabriquer un chiffre, une référence client ou un fait : il prescrit le marqueur `[À CONFIRMER]` et la façon d'obtenir la donnée.

**Liens** en chemins absolus du portail, vers des pages existantes : `/skills/<nom>`, `/skills/workflows/<id>`, `/templates/<id>`, `/frameworks/<id>`, `/guides/<id>`, `/savoir/<id>`, `/methode/<phase>`, `/outils/<outil>`, `/standards#<ID>`, `/raci`. Le portail en déduit les ressources affichées à côté du skill.

**Annexes.** Un skill qui dépasse 900 mots se découpe : le détail va dans `references/<fichier>.md`, cité par son nom dans la procédure. Un agent ne charge une annexe que s'il en a besoin.

## Historique — `CHANGELOG.md`

À côté de chaque `SKILL.md`. Une entrée par version, de la plus récente à la plus ancienne ; la première porte la version déclarée dans le skill, et sa date vaut date de dernière révision.

```markdown
# Historique — qualifier-opportunite

## 1.1.0 — 2027-02-03

- Ajout du critère de capacité à livrer dans la grille de qualification.

## 1.0.0 — 2026-11-24

- Création du skill.
```

| Changement | Version | Exemples |
| --- | --- | --- |
| Correctif | `x.y.Z` | Reformulation, correction d'un lien, précision qui ne change ni les entrées ni le livrable. |
| Évolution compatible | `x.Y.0` | Étape ou critère ajouté, entrée facultative nouvelle, garde-fou renforcé. |
| Rupture | `X.0.0` | Entrée obligatoire nouvelle, livrable restructuré, périmètre modifié : les workflows qui l'emploient sont à revoir. |

Toute modification d'un `SKILL.md` monte la version : `npm run skills:versions` le vérifie sur chaque pull request.

## Workflows — `skills/workflows/<id>.md`

Un workflow compose des skills pour traiter une situation de bout en bout : il fixe l'ordre, l'intention de chaque étape et les points de contrôle humains.

```yaml
---
id: repondre-appel-offres
titre: "Répondre à un appel d'offres"
resume: "Une ou deux phrases."
declencheur: "Ce qui lance le workflow."
resultat: "Ce qui existe quand il est terminé."
version: "1.0.0"
statut: publie
proprietaire: avant-vente
etapes:
  - skill: qualifier-opportunite
    intention: "Pourquoi cette étape, ce qu'elle apporte à la suivante."
    controle: "Facultatif : la décision humaine qui conditionne la suite, et qui la prend."
---
```

Le corps décrit quand lancer le workflow, ses règles d'orchestration (ce qui peut se mener en parallèle, ce qui se rejoue quand une étape échoue) et ses variantes. Un workflow publié ne mobilise que des skills publiés.

## Gouvernance

| Statut | Signification | Servi aux agents |
| --- | --- | --- |
| `brouillon` | En cours d'écriture, sur une branche ou fusionné pour partage. | Non |
| `en-revue` | Complet, en attente de la relecture du propriétaire. | Non |
| `publie` | Relu, approuvé, fusionné sur la branche principale. | Oui |
| `deprecie` | Remplacé ou abandonné ; reste consultable. | Non |

Le circuit est celui d'une pull request.

1. **Proposer.** Tout membre du pool crée ou modifie un skill sur une branche. Le skill `creer-skill` guide un agent dans l'exercice.
2. **Valider automatiquement.** `npm run content` vérifie le format, la classification, les liens, l'historique et la couverture ; `npm run skills:versions` vérifie que la version monte.
3. **Relire.** Le propriétaire déclaré (`proprietaire`) relit le fond ; un gardien de la bibliothèque relit la forme et la cohérence avec les skills voisins. `.github/CODEOWNERS` rend cette relecture obligatoire.
4. **Publier.** La fusion sur la branche principale vaut publication : le déploiement met à jour le portail, le catalogue et le serveur MCP.
5. **Réviser.** Un skill non révisé depuis plus de douze mois est signalé « à réviser » dans le portail. Le propriétaire le confirme (correctif de version) ou le déprécie.

Les droits suivent ce circuit : lecture pour tout le pool et pour les agents munis du jeton, écriture par pull request, approbation par le propriétaire, publication par la fusion. Le détail des rôles est sur la page `/skills/gouvernance` du portail.

## Comment un agent accède aux skills

| Voie | Pour qui | Comment |
| --- | --- | --- |
| Serveur MCP | Agents qui découvrent les skills à l'exécution | `POST /api/mcp` : `rechercher_skills`, `lire_skill`, `lister_workflows`, `lire_workflow`, `lire_ressource` |
| Catalogue | Agents et scripts sans client MCP | `GET /skills/catalogue.json`, puis `GET /skills/<nom>/SKILL.md` |
| Export à plat | Environnements qui chargent un dossier de skills | `npm run skills:export` produit `dist/skills/<nom>/SKILL.md` |
| Copilote | FDE dans le portail | Le copilote connaît le catalogue et applique le skill qui correspond à la demande |

Seuls les skills publiés sortent par ces voies. Sur un portail protégé, les agents présentent le jeton `SKILLS_JETON_AGENTS` (`Authorization: Bearer …`), qui n'ouvre que ces routes.

## Ajouter un skill

1. Vérifier qu'il n'existe pas déjà : `/skills` dans le portail, ou `rechercher_skills`.
2. Créer `skills/<étape>/<nom>/SKILL.md` et `CHANGELOG.md`. Partir d'un skill voisin de la même étape.
3. Lancer `npm run content` jusqu'à zéro erreur.
4. Ouvrir la pull request ; le propriétaire de l'étape est demandé en relecture.
