# FDE Atlas

L'environnement de travail des Forward Deployed Engineers (FDE) qui conduisent des missions de transformation AI-Native : une méthode de bout en bout, les frameworks et les livrables de chaque étape, des ateliers interactifs, un espace de pilotage de mission et un copilote méthodologique.

## Ce que contient le portail

| Espace | Contenu |
| --- | --- |
| **Entrée par situation** | Onze situations (« je rejoins le pool », « je prépare une mission », « je réalise un diagnostic »…) : par où commencer, étapes ordonnées, ressources à ouvrir. |
| **Le métier FDE** | Le rôle et la double compétence, le FDE face aux autres métiers, la charte en douze engagements, les règles de fonctionnement du pool, dix fiches réflexes pour les situations délicates. |
| **RACI Design · Build** | La répartition du binôme FDE Design (sur site) et FDE Build (à distance) : rôles, matrice RACI rattachée aux activités, livrables et jalons, passages de relais, rituels, conformité du nearshore, arbitrages. Export Markdown. |
| **Onboarding** | Parcours d'intégration en cinq étapes, exercices pratiques avec grille d'évaluation, plan 30/60/90, mentorat, priorités par profil d'origine. Progression suivie localement. |
| **Compétences** | Référentiel de 18 compétences sur quatre niveaux, auto-évaluation, grille de préparation à l'intervention chez un client, plan de progression. |
| **Parcours AI-Native** | La méthode en 8 phases (Cadrer, Diagnostiquer, Cibler, Réinventer, Concevoir, Construire, Industrialiser, Pérenniser). Pour chaque phase : objectifs, activités, questions à poser au client, livrables, jalon avec critères de passage et signaux d'arrêt, pièges et parades. Trois fils transverses : valeur, confiance, adoption. |
| **Frameworks** | 53 fiches, du conseil en stratégie (MECE, 80/20, pyramide, causes racines…) à l'ingénierie des agents : quand l'utiliser, comment l'appliquer, exemple chiffré, pièges. |
| **Templates** | 42 livrables : document vierge, exemple entièrement rempli, mode d'emploi. Copie, téléchargement Markdown, pré-remplissage avec la mission active. |
| **Guides pratiques** | 17 playbooks : entretiens, ateliers, chiffrage de la valeur, conception d'agents, évaluations, pilote, COPIL, dialogue avec les dirigeants, redressement de mission. |
| **Standards d'ingénierie** | 96 standards sur dix domaines, classés obligatoire, recommandé ou contextuel, avec un mode revue de conformité exportable. |
| **Cas fil rouge** | Une mission complète (client fictif Voxalis) dont sont tirés tous les exemples. |
| **Cas d'usage** | 82 cas par secteur et par fonction, reliés à l'atelier de priorisation. |
| **Ateliers** | Diagnostic de maturité, Agent ou pas ?, Priorisation, Business case, Redesign de processus, Agent Designer. Chacun produit un résultat exportable. |
| **Espace mission** | Suivi par phase (activités, livrables, jalons), registre de valeur, journal (décisions, risques, apprentissages), exports (point d'avancement, brouillon de REX). |
| **Copilote** | Assistant qui connaît le contenu du portail, la page consultée et, sur autorisation, la mission. Quatre modes : guide, rédacteur, challenger, coach. Bibliothèque de 32 prompts. |
| **Savoir terrain** | Patterns, anti-patterns et retours d'expérience, avec un assistant de contribution qui génère une fiche prête pour une pull request ; glossaire de 96 termes. |

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
| `npm run content` | Validation stricte du contenu (front matter, sections, liens internes) |
| `npm run typecheck` | Vérification TypeScript |
| `npm run lint` | ESLint |

## Configuration

Toutes les variables sont facultatives (voir `.env.example`).

| Variable | Effet |
| --- | --- |
| `ANTHROPIC_API_KEY` | Active le copilote IA. Sans clé, le copilote passe en mode hors ligne : il renvoie vers les ressources du portail et prépare une invite à coller dans un autre assistant. |
| `COPILOTE_MODELE` | Modèle du copilote (défaut : `claude-opus-5-5`). |
| `PORTAIL_MOT_DE_PASSE` | Protège tout le portail par un mot de passe (authentification HTTP Basic). |

Le portail contient votre méthode : déployez-le derrière une authentification (SSO de l'hébergeur, réseau privé, ou à défaut `PORTAIL_MOT_DE_PASSE`). Si le copilote est activé sur un déploiement accessible, cette protection est indispensable : la route `/api/copilote` consomme votre clé d'API.

## Déployer

L'application est un projet Next.js standard : elle se déploie telle quelle sur Vercel ou sur tout hébergeur Node.js (`npm run build`, `npm run start`). Renseignez les variables d'environnement dans la console de l'hébergeur.

## Données et confidentialité

- **Les données de mission restent dans le navigateur** (stockage local). Aucune base de données, aucun compte. Une mission s'exporte en JSON pour être sauvegardée ou transmise.
- **Le copilote** envoie à l'API du modèle la conversation, la page consultée et, si l'utilisateur le laisse activé, un résumé de la mission active. N'y collez pas de données que le client n'autorise pas à sortir.

## Enrichir le contenu

Tout le savoir vit dans `content/`, en Markdown versionné : un fichier par framework, template, guide ou fiche de savoir. Capitaliser, c'est ouvrir une pull request. Les formats, les champs obligatoires et la ligne éditoriale sont décrits dans [`content/README.md`](content/README.md) ; `npm run content` valide l'ensemble.

Les données structurées (phases de la méthode et questions client, cas d'usage, glossaire, prompts, modèle de maturité, standards, onboarding, compétences, charte et règles du pool, situations) sont dans `src/data/`. Ce qui relève des choix de votre organisation (règles du pool, durées d'onboarding, seuils de compétences) y est présenté comme un cadre proposé : ajustez-le.

## Architecture

```
content/                 Contenu Markdown (frameworks, templates, guides, savoir)
scripts/build-content.mjs  Valide content/ et le compile en src/generated/content.json
src/data/                Méthode, cas d'usage, glossaire, prompts, maturité (TypeScript)
src/app/                 Pages (App Router) et route /api/copilote
src/components/          Interface : coquille, bibliothèques, missions, ateliers, copilote, graphiques
src/lib/                 Modèle de mission, stockage local, recherche, base de connaissances du copilote
```

Next.js 16 (App Router, rendu statique), React 19, TypeScript, Tailwind CSS 4, SDK Anthropic. Les pages de contenu sont générées statiquement ; seule la route du copilote s'exécute à la demande.
