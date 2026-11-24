/**
 * Gouvernance de la bibliothèque de skills : qui peut quoi, circuit de publication,
 * règles de version et voies d'accès des agents.
 *
 * La classification elle-même (étapes, rôles, domaines, statuts…) vit dans skills/taxonomie.json,
 * à côté des skills. Comme les règles du pool, c'est un cadre proposé : les titulaires des rôles
 * et les seuils sont à fixer par la direction du pool.
 */

/* ------------------------------------------------------------------ */
/* 1. Rôles et droits                                                  */
/* ------------------------------------------------------------------ */

export type RoleGouvernance = "lecteur" | "contributeur" | "proprietaire" | "gardien" | "agent";

export const ROLES_GOUVERNANCE: Record<RoleGouvernance, { nom: string; qui: string; responsabilite: string }> = {
  lecteur: {
    nom: "Lecteur",
    qui: "Tout membre du pool ayant accès au portail.",
    responsabilite: "Consulte et applique les skills ; signale ce qui est faux ou manquant.",
  },
  contributeur: {
    nom: "Contributeur",
    qui: "Tout membre du pool ayant accès au dépôt, et les agents qui l'assistent.",
    responsabilite: "Propose un skill ou une évolution par pull request, avec un cas d'épreuve.",
  },
  proprietaire: {
    nom: "Propriétaire",
    qui: "Les référents désignés pour une étape du cycle de vie (champ « proprietaire » du skill).",
    responsabilite: "Répond du fond : relit et approuve les modifications, révise le skill à échéance, décide de le déprécier.",
  },
  gardien: {
    nom: "Gardien de la bibliothèque",
    qui: "Un petit groupe nommé par la direction du pool.",
    responsabilite: "Répond de la forme et de la cohérence : format, taxonomie, doublons, composition des workflows, fusion.",
  },
  agent: {
    nom: "Agent IA",
    qui: "Tout agent muni du jeton d'accès de la bibliothèque, et le copilote du portail.",
    responsabilite: "Découvre, charge et exécute les skills publiés ; ne modifie rien.",
  },
};

export type NiveauDroit = "oui" | "non" | "pr";

export const LIBELLES_DROIT: Record<NiveauDroit, string> = {
  oui: "Oui",
  non: "Non",
  pr: "Par pull request",
};

export const ORDRE_ROLES: RoleGouvernance[] = ["lecteur", "contributeur", "proprietaire", "gardien", "agent"];

export const DROITS: { action: string; precision: string; droits: Record<RoleGouvernance, NiveauDroit> }[] = [
  {
    action: "Consulter les skills publiés",
    precision: "Portail, catalogue, serveur MCP.",
    droits: { lecteur: "oui", contributeur: "oui", proprietaire: "oui", gardien: "oui", agent: "oui" },
  },
  {
    action: "Consulter brouillons et skills en revue",
    precision: "Visibles dans le portail et le dépôt, jamais servis aux agents.",
    droits: { lecteur: "oui", contributeur: "oui", proprietaire: "oui", gardien: "oui", agent: "non" },
  },
  {
    action: "Mobiliser un skill dans une mission ou un workflow",
    precision: "Dans le respect de ses garde-fous.",
    droits: { lecteur: "oui", contributeur: "oui", proprietaire: "oui", gardien: "oui", agent: "oui" },
  },
  {
    action: "Créer ou modifier un skill",
    precision: "Toujours sur une branche ; jamais directement sur la branche principale.",
    droits: { lecteur: "non", contributeur: "pr", proprietaire: "pr", gardien: "pr", agent: "non" },
  },
  {
    action: "Approuver une modification",
    precision: "Relecture obligatoire du propriétaire de l'étape (CODEOWNERS).",
    droits: { lecteur: "non", contributeur: "non", proprietaire: "oui", gardien: "oui", agent: "non" },
  },
  {
    action: "Publier",
    precision: "La fusion sur la branche principale, après validation automatique et approbation.",
    droits: { lecteur: "non", contributeur: "non", proprietaire: "non", gardien: "oui", agent: "non" },
  },
  {
    action: "Déprécier un skill",
    precision: "Décision du propriétaire, appliquée par pull request.",
    droits: { lecteur: "non", contributeur: "non", proprietaire: "pr", gardien: "pr", agent: "non" },
  },
  {
    action: "Modifier la taxonomie ou le format",
    precision: "Touche tous les skills : décision des gardiens.",
    droits: { lecteur: "non", contributeur: "non", proprietaire: "non", gardien: "pr", agent: "non" },
  },
  {
    action: "Remettre un skill à un client",
    precision: "Uniquement les skills dont la diffusion est « transférable au client ».",
    droits: { lecteur: "non", contributeur: "oui", proprietaire: "oui", gardien: "oui", agent: "non" },
  },
];

/* ------------------------------------------------------------------ */
/* 2. Circuit de publication                                           */
/* ------------------------------------------------------------------ */

export const CIRCUIT: { etape: string; qui: string; quoi: string; preuve: string }[] = [
  {
    etape: "Proposer",
    qui: "Contributeur",
    quoi: "Créer ou modifier le skill sur une branche, à partir d'un cas réel. Le skill « Créer ou faire évoluer un skill » guide l'exercice.",
    preuve: "Pull request avec le cas d'épreuve et son résultat.",
  },
  {
    etape: "Valider automatiquement",
    qui: "Intégration continue",
    quoi: "Format, classification, sections, liens internes, historique, couverture des sous-processus, montée de version.",
    preuve: "Contrôles verts sur la pull request.",
  },
  {
    etape: "Relire",
    qui: "Propriétaire, puis gardien",
    quoi: "Le propriétaire juge le fond : la procédure est-elle celle qu'on veut voir exécutée ? Le gardien juge la forme et la cohérence avec les skills voisins.",
    preuve: "Approbation du propriétaire sur la pull request.",
  },
  {
    etape: "Publier",
    qui: "Gardien",
    quoi: "Fusionner. Le déploiement met à jour le portail, le catalogue et le serveur MCP : les agents voient la nouvelle version à leur prochaine recherche.",
    preuve: "Statut « publié », version et date dans l'historique.",
  },
  {
    etape: "Réviser",
    qui: "Propriétaire",
    quoi: "À l'échéance de révision, ou dès qu'une mission signale un écart : confirmer, corriger ou déprécier.",
    preuve: "Nouvelle entrée d'historique, ou statut « déprécié » avec son remplaçant.",
  },
];

/* ------------------------------------------------------------------ */
/* 3. Règles de version                                                */
/* ------------------------------------------------------------------ */

export const VERSIONS: { type: string; forme: string; quand: string; consequence: string }[] = [
  {
    type: "Correctif",
    forme: "1.2.3 → 1.2.4",
    quand: "Reformulation, lien corrigé, précision qui ne change ni les entrées ni le livrable.",
    consequence: "Aucune pour ceux qui l'utilisent.",
  },
  {
    type: "Évolution compatible",
    forme: "1.2.3 → 1.3.0",
    quand: "Étape ou critère ajouté, entrée facultative nouvelle, garde-fou renforcé.",
    consequence: "Les workflows restent valables ; le changement est annoncé au pool.",
  },
  {
    type: "Rupture",
    forme: "1.2.3 → 2.0.0",
    quand: "Entrée obligatoire nouvelle, livrable restructuré, périmètre modifié.",
    consequence: "Les workflows qui emploient le skill sont revus dans la même pull request.",
  },
];

/* ------------------------------------------------------------------ */
/* 4. Voies d'accès des agents                                         */
/* ------------------------------------------------------------------ */

export const ACCES_AGENTS: { voie: string; pour: string; comment: string; code: string }[] = [
  {
    voie: "Serveur MCP",
    pour: "Un agent qui choisit ses skills à l'exécution, selon la tâche reçue.",
    comment:
      "Déclarer le portail comme serveur MCP (transport HTTP). L'agent cherche un skill par la tâche, le charge, puis charge les templates et frameworks que le skill cite.",
    code: "POST /api/mcp\noutils : rechercher_skills, lire_skill, lister_workflows, lire_workflow, lire_ressource",
  },
  {
    voie: "Catalogue et fichiers bruts",
    pour: "Un agent ou un script sans client MCP.",
    comment: "Lire le catalogue, choisir d'après les descriptions, puis charger le SKILL.md du skill retenu.",
    code: "GET /skills/catalogue.json\nGET /skills/<nom>/SKILL.md",
  },
  {
    voie: "Export à plat",
    pour: "Un environnement d'agents qui charge un dossier de skills au format Agent Skills.",
    comment:
      "Produire le dossier depuis le dépôt et le copier dans le répertoire de skills de l'environnement. Une option restreint l'export aux skills transférables à un client.",
    code: "npm run skills:export\nnpm run skills:export -- --diffusion client",
  },
  {
    voie: "Copilote du portail",
    pour: "Un FDE qui travaille dans le portail.",
    comment:
      "Le copilote connaît le catalogue : il reconnaît la tâche, charge le skill qui lui correspond et en suit la procédure et les garde-fous.",
    code: "Bouton « Appliquer avec le copilote » sur chaque skill",
  },
];

export const OUTILS_MCP: { nom: string; role: string }[] = [
  { nom: "rechercher_skills", role: "Trouver les skills qui répondent à une tâche, avec filtres par étape, rôle, domaine, technologie et cas d'usage." },
  { nom: "lire_skill", role: "Charger le SKILL.md complet d'un skill publié." },
  { nom: "lister_workflows", role: "Lister les workflows publiés et leurs étapes." },
  { nom: "lire_workflow", role: "Charger un workflow : étapes, intentions, points de contrôle humains, règles d'orchestration." },
  { nom: "lire_ressource", role: "Charger un template, un framework, un guide ou une fiche de savoir que le skill cite." },
];
