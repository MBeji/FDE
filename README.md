# FDE Atlas

L'environnement de travail des Forward Deployed Engineers (FDE) qui conduisent des missions de transformation AI-Native : une méthode de bout en bout, les frameworks et les livrables de chaque étape, des ateliers interactifs, un espace de pilotage de mission et un copilote méthodologique.

## Ce que contient le portail

| Espace | Contenu |
| --- | --- |
| **Entrée par situation** | Onze situations (« je rejoins le pool », « je prépare une mission », « je réalise un diagnostic »…) : par où commencer, étapes ordonnées, ressources à ouvrir. |
| **Le métier FDE** | Le rôle et la double compétence, le FDE face aux autres métiers, la charte en douze engagements, les règles de fonctionnement du pool, dix fiches réflexes pour les situations délicates. |
| **RACI Design · Build** | La répartition du binôme FDE Design (sur site) et FDE Build (à distance) : rôles, matrice RACI rattachée aux activités, livrables et jalons, passages de relais, rituels, conformité du travail à distance, arbitrages. Export Markdown. |
| **Onboarding** | Parcours d'intégration en cinq étapes, exercices pratiques avec grille d'évaluation, plan 30/60/90, mentorat, priorités par profil d'origine. Progression suivie localement. |
| **Compétences** | Référentiel de 18 compétences sur quatre niveaux, auto-évaluation, grille de préparation à l'intervention chez un client, plan de progression. |
| **Parcours AI-Native** | La méthode en 8 phases (Cadrer, Diagnostiquer, Cibler, Réinventer, Concevoir, Construire, Industrialiser, Pérenniser). Pour chaque phase : objectifs, activités, questions à poser au client, livrables, jalon avec critères de passage et signaux d'arrêt, pièges et parades. Trois fils transverses : valeur, confiance, adoption. |
| **Socle métier & processus** | Le socle transformation métier et excellence opérationnelle, côté Design du FDE : architecture de processus (APQC), process mining et DMAIC, carte de flux de valeur, grille « supprimer, réingénierer, automatiser, agentifier », BPMN augmenté, fil numérique, gouvernance des processus. Trois livrables (diagnostic par les traces, fiche de conception de processus agentique, plan de contrôle) et les ponts vers le build. |
| **Frameworks** | 60 fiches, du conseil en stratégie (MECE, 80/20, pyramide, causes racines…) à l'ingénierie des agents : quand l'utiliser, comment l'appliquer, exemple chiffré, pièges. |
| **Templates** | 45 livrables : document vierge, exemple entièrement rempli, mode d'emploi. Copie, téléchargement Markdown, pré-remplissage avec la mission active. |
| **Guides pratiques** | 18 playbooks : entretiens, ateliers, chiffrage de la valeur, conception d'agents, évaluations, pilote, COPIL, dialogue avec les dirigeants, redressement de mission. |
| **Standards d'ingénierie** | 96 standards sur dix domaines, classés obligatoire, recommandé ou contextuel, avec un mode revue de conformité exportable. |
| **Cas fil rouge** | Une mission complète (client fictif Voxalis) dont sont tirés tous les exemples. |
| **Cas d'usage** | 82 cas par secteur et par fonction, reliés à l'atelier de priorisation. |
| **Ateliers** | Diagnostic de maturité, Agent ou pas ?, Priorisation, Business case, Redesign de processus, Agent Designer. Chacun produit un résultat exportable. |
| **Espace mission** | Suivi par phase (activités, livrables, jalons), registre de valeur, journal (décisions, risques, apprentissages), exports (point d'avancement, brouillon de REX). |
| **Copilote** | Assistant qui connaît le contenu du portail, la page consultée et, sur autorisation, la mission. Quatre modes : guide, rédacteur, challenger, coach. Bibliothèque de 32 prompts. |
| **Skills IA** | La bibliothèque partagée de skills pour agents IA : 52 skills au format `SKILL.md`, un par activité du cycle de vie d'un projet (avant-vente, réponse aux appels d'offres, cadrage, conception, développement, tests, déploiement, livraison, exploitation, pilotage), portés par le FDE Design, le FDE Build ou le binôme. Classés par étape, rôle, domaine, technologie et cas d'usage ; versionnés ; 8 workflows qui les enchaînent ; gouvernance et accès des agents (catalogue JSON, serveur MCP, export). |
| **Savoir terrain** | Patterns, anti-patterns et retours d'expérience, avec un assistant de contribution qui génère une fiche prête pour une pull request ; glossaire de 110 termes. |
| **Aide** | Toutes les fonctionnalités du portail : par où commencer selon sa situation, catalogue des pages construit à partir du menu, fonctions transverses, raccourcis clavier, questions fréquentes. |

## Démarrer

Prérequis : Node.js 22 ou supérieur.

```bash
npm install
```

```bash
npm run dev
```

Le portail est disponible sur http://localhost:3000.

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` puis `npm run start` | Build et serveur de production |
| `npm run content` | Validation stricte du contenu et des skills (front matter, sections, liens internes, historique, couverture) |
| `npm run skills:versions` | Vérifie qu'un skill modifié monte de version, par rapport à `origin/main` |
| `npm run skills:export` | Exporte les skills publiés à plat (`dist/skills/<nom>/SKILL.md`), prêts à être chargés par un environnement d'agents |
| `npm run typecheck` | Vérification TypeScript |
| `npm run lint` | ESLint |

## Configuration

Toutes les variables sont facultatives (voir `.env.example`).

| Variable | Effet |
| --- | --- |
| `ANTHROPIC_API_KEY` | Active le copilote IA. Sans clé, le copilote passe en mode hors ligne : il renvoie vers les ressources du portail et prépare une invite à coller dans un autre assistant. |
| `COPILOTE_MODELE` | Modèle du copilote (défaut : `claude-opus-5-5`). |
| `PORTAIL_MOT_DE_PASSE` | Protège tout le portail par un mot de passe (authentification HTTP Basic). |
| `SKILLS_JETON_AGENTS` | Jeton d'accès des agents IA à la bibliothèque de skills (`Authorization: Bearer …`) quand le portail est protégé. Il n'ouvre que `/api/mcp`, `/skills/catalogue.json` et les `SKILL.md` bruts. |

Le portail contient votre méthode : déployez-le derrière une authentification (SSO de l'hébergeur, réseau privé, ou à défaut `PORTAIL_MOT_DE_PASSE`). Si le copilote est activé sur un déploiement accessible, cette protection est indispensable : la route `/api/copilote` consomme votre clé d'API.

## Déployer

L'application est un projet Next.js standard : elle se déploie telle quelle sur Vercel ou sur tout hébergeur Node.js (`npm run build`, `npm run start`). Renseignez les variables d'environnement dans la console de l'hébergeur.

## Données et confidentialité

- **Les données de mission restent dans le navigateur** (stockage local). Aucune base de données, aucun compte. Une mission s'exporte en JSON pour être sauvegardée ou transmise.
- **Le copilote** envoie à l'API du modèle la conversation, la page consultée et, si l'utilisateur le laisse activé, un résumé de la mission active. N'y collez pas de données que le client n'autorise pas à sortir.

## Bibliothèque de skills IA

Le dossier [`skills/`](skills/README.md) contient le savoir-faire du pool écrit pour être exécuté par des agents : un dossier par skill, un fichier `SKILL.md` au standard Agent Skills, un `CHANGELOG.md`, et une taxonomie (`skills/taxonomie.json`) qui porte la classification.

```
skills/
├── taxonomie.json            Étapes, rôles, domaines, technologies, cas d'usage, statuts, propriétaires
├── 01-avant-vente/ … 10-pilotage/
│   └── <nom-du-skill>/SKILL.md + CHANGELOG.md
└── workflows/<id>.md         Enchaînements de skills, avec leurs points de contrôle humains
```

Un agent accède aux skills publiés de quatre façons :

| Voie | Comment |
| --- | --- |
| Serveur MCP (transport HTTP, lecture seule) | `POST /api/mcp` — outils `rechercher_skills`, `lire_skill`, `lister_workflows`, `lire_workflow`, `lire_ressource` |
| Catalogue et fichiers bruts | `GET /skills/catalogue.json`, puis `GET /skills/<nom>/SKILL.md` |
| Export à plat | `npm run skills:export` (option `-- --diffusion client` pour les seuls skills transférables à un client) |
| Copilote du portail | Le copilote connaît le catalogue et applique le skill qui correspond à la demande |

La gouvernance (statuts, versions, droits, circuit de publication par pull request) est décrite dans [`skills/README.md`](skills/README.md) et sur la page `/skills/gouvernance`. `.github/CODEOWNERS` désigne les relecteurs : à compléter avec les référents de chaque étape.

## Enrichir le contenu

Tout le savoir vit dans `content/`, en Markdown versionné : un fichier par framework, template, guide ou fiche de savoir. Capitaliser, c'est ouvrir une pull request. Les formats, les champs obligatoires et la ligne éditoriale sont décrits dans [`content/README.md`](content/README.md) ; `npm run content` valide l'ensemble.

Les données structurées (phases de la méthode et questions client, cas d'usage, glossaire, prompts, modèle de maturité, standards, onboarding, compétences, charte et règles du pool, situations) sont dans `src/data/`. Ce qui relève des choix de votre organisation (règles du pool, durées d'onboarding, seuils de compétences) y est présenté comme un cadre proposé : ajustez-le.

## Architecture

```
content/                 Contenu Markdown (frameworks, templates, guides, savoir)
skills/                  Bibliothèque de skills IA (SKILL.md, workflows, taxonomie)
scripts/build-content.mjs  Valide content/ et skills/, et les compile en src/generated/content.json
src/data/                Méthode, cas d'usage, glossaire, prompts, maturité (TypeScript)
src/app/                 Pages (App Router), routes /api/copilote et /api/mcp
src/components/          Interface : coquille, bibliothèques, missions, ateliers, copilote, graphiques
src/lib/                 Modèle de mission, stockage local, recherche, base de connaissances du copilote
```

Next.js 16 (App Router, rendu statique), React 19, TypeScript, Tailwind CSS 4, SDK Anthropic. Les pages de contenu sont générées statiquement ; seule la route du copilote s'exécute à la demande.
