/**
 * Lecture et validation de la bibliothèque de skills (dossier skills/).
 *
 * Appelé par scripts/build-content.mjs, qui fournit ses utilitaires et sa collecte d'erreurs.
 * Le format des fichiers est décrit dans skills/README.md : toute règle vérifiée ici y figure.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/** Sections d'un SKILL.md, dans l'ordre imposé. */
export const SECTIONS_SKILL = [
  "Mission",
  "Quand l'utiliser",
  "Entrées",
  "Procédure",
  "Livrable",
  "Critères de qualité",
  "Garde-fous",
  "Enchaînements",
];

/** Champs de premier niveau admis par le standard Agent Skills. */
const CLES_STANDARD = ["name", "description", "license", "compatibility", "allowed-tools", "metadata"];
const CLES_METADATA = [
  "titre",
  "version",
  "statut",
  "etape",
  "sous-processus",
  "role",
  "domaine",
  "phases",
  "technologies",
  "cas-usage",
  "tags",
  "proprietaire",
  "diffusion",
  "entrees",
  "sorties",
  "prerequis",
  "remplace-par",
];
const CLES_WORKFLOW = [
  "id",
  "titre",
  "resume",
  "declencheur",
  "resultat",
  "version",
  "statut",
  "proprietaire",
  "etapes",
];
/** Noms réservés par les routes du portail sous /skills. */
const NOMS_RESERVES = ["workflows", "gouvernance", "catalogue"];
const MOTS = { min: 200, max: 900 };
const DESCRIPTION = { min: 80, max: 1024 };

const NOM_VALIDE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SEMVER = /^(\d+)\.(\d+)\.(\d+)$/;
const DATE_ISO = /^\d{4}-\d{2}-\d{2}$/;

export function comparerVersions(a, b) {
  const [x, y] = [a, b].map((v) => SEMVER.exec(v).slice(1).map(Number));
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return 0;
}

function dateValide(texte) {
  return DATE_ISO.test(texte) && !Number.isNaN(Date.parse(`${texte}T00:00:00Z`));
}

/** Lit un CHANGELOG.md : une entrée par titre « ## 1.2.0 — 2026-11-24 », suivie de puces. */
export function lireHistorique(texte) {
  const entrees = [];
  let courante = null;
  for (const ligne of texte.split("\n")) {
    const titre = /^##\s+(\S+)\s+[—–-]\s+(\S+)\s*$/.exec(ligne);
    if (titre) {
      courante = { version: titre[1], date: titre[2], notes: [] };
      entrees.push(courante);
      continue;
    }
    const puce = /^\s*[-*]\s+(.+?)\s*$/.exec(ligne);
    if (puce && courante) courante.notes.push(puce[1]);
  }
  return entrees;
}

/** Identifiants des ressources du portail citées dans un texte Markdown, par section. */
function ressourcesCitees(markdown) {
  const sansCode = markdown.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
  const trouver = (motif) => [...new Set([...sansCode.matchAll(motif)].map((m) => m[1]))];
  return {
    templates: trouver(/\]\(\/templates\/([a-z0-9-]+)[)#?]/g),
    frameworks: trouver(/\]\(\/frameworks\/([a-z0-9-]+)[)#?]/g),
    guides: trouver(/\]\(\/guides\/([a-z0-9-]+)[)#?]/g),
    savoir: trouver(/\]\(\/savoir\/([a-z0-9-]+)[)#?]/g),
    outils: trouver(/\]\(\/outils\/([a-z0-9-]+)[)#?]/g),
    standards: trouver(/\]\(\/standards#([A-Z]{3}-\d{2})\)/g),
    skills: trouver(/\]\(\/skills\/([a-z0-9-]+)[)#?]/g).filter((id) => !NOMS_RESERVES.includes(id)),
  };
}

function lireTaxonomie(dossier, signaler) {
  const relatif = "skills/taxonomie.json";
  let brut;
  try {
    brut = JSON.parse(fs.readFileSync(path.join(dossier, "taxonomie.json"), "utf8"));
  } catch (e) {
    signaler(relatif, `fichier illisible : ${e.message.split("\n")[0]}`);
    return null;
  }
  for (const liste of ["etapes", "roles", "domaines", "technologies", "casUsage", "statuts", "proprietaires", "diffusions"]) {
    const valeurs = brut[liste];
    if (!Array.isArray(valeurs) || !valeurs.length) {
      signaler(relatif, `liste « ${liste} » manquante ou vide`);
      brut[liste] = [];
      continue;
    }
    const vus = new Set();
    for (const v of valeurs) {
      if (!NOM_VALIDE.test(v.id ?? "") || !v.nom) signaler(relatif, `${liste} : entrée sans id valide ou sans nom`);
      if (vus.has(v.id)) signaler(relatif, `${liste} : identifiant en double « ${v.id} »`);
      vus.add(v.id);
    }
  }
  for (const e of brut.etapes) {
    if (!e.dossier || !e.resume) signaler(relatif, `étape « ${e.id} » : dossier ou résumé manquant`);
    if (!Array.isArray(e.sousProcessus) || !e.sousProcessus.length) {
      signaler(relatif, `étape « ${e.id} » : aucun sous-processus`);
      e.sousProcessus = [];
    }
  }
  if (!Number.isInteger(brut.revisionMois) || brut.revisionMois < 1) {
    signaler(relatif, "« revisionMois » doit être un entier positif");
    brut.revisionMois = 12;
  }
  return brut;
}

/**
 * @param {object} o
 * @param {string} o.racine Racine du dépôt.
 * @param {(fichier: string, message: string) => void} o.signaler
 * @param {string[]} o.phases Identifiants des phases du Parcours AI-Native.
 * @param {(markdown: string) => {niveau: number, texte: string, id: string}[]} o.extraireTitres
 * @param {(markdown: string) => number} o.compterMots
 * @param {Date} [o.aujourdhui]
 */
export function lireBibliothequeSkills({ racine, signaler, phases, extraireTitres, compterMots, aujourdhui = new Date() }) {
  const dossier = path.join(racine, "skills");
  const vide = { taxonomie: null, skills: [], workflows: [] };
  if (!fs.existsSync(dossier)) return vide;
  const taxonomie = lireTaxonomie(dossier, signaler);
  if (!taxonomie) return vide;

  const ids = (liste) => taxonomie[liste].map((x) => x.id);
  const dossiersEtapes = new Map(taxonomie.etapes.map((e) => [e.dossier, e]));

  for (const entree of fs.readdirSync(dossier, { withFileTypes: true })) {
    if (!entree.isDirectory() || entree.name.startsWith("_") || entree.name === "workflows") continue;
    if (!dossiersEtapes.has(entree.name)) {
      signaler(`skills/${entree.name}`, "dossier inconnu : ce n'est le dossier d'aucune étape de taxonomie.json");
    }
  }

  /* ---------------------------------------------------------------- */
  /* Skills                                                            */
  /* ---------------------------------------------------------------- */

  const skills = [];
  for (const etape of taxonomie.etapes) {
    const dossierEtape = path.join(dossier, etape.dossier);
    if (!fs.existsSync(dossierEtape)) continue;
    for (const entree of fs.readdirSync(dossierEtape, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (!entree.isDirectory()) continue;
      const relatifDossier = `skills/${etape.dossier}/${entree.name}`;
      const relatif = `${relatifDossier}/SKILL.md`;
      const chemin = path.join(dossierEtape, entree.name, "SKILL.md");
      if (!fs.existsSync(chemin)) {
        signaler(relatifDossier, "SKILL.md manquant");
        continue;
      }
      let analyse;
      try {
        analyse = matter(fs.readFileSync(chemin, "utf8"));
      } catch (e) {
        signaler(relatif, `front matter illisible : ${e.message.split("\n")[0]}`);
        continue;
      }
      const erreur = (message) => signaler(relatif, message);
      const data = analyse.data;
      const meta = data.metadata && typeof data.metadata === "object" && !Array.isArray(data.metadata) ? data.metadata : null;

      for (const cle of Object.keys(data)) {
        if (!CLES_STANDARD.includes(cle)) erreur(`champ « ${cle} » hors du standard Agent Skills : le placer sous « metadata »`);
      }
      if (!meta) {
        erreur("bloc « metadata » manquant");
        continue;
      }
      for (const cle of Object.keys(meta)) {
        if (!CLES_METADATA.includes(cle)) erreur(`metadata : champ inconnu « ${cle} »`);
      }

      const nom = entree.name;
      if (data.name !== nom) erreur(`« name » = « ${data.name} », attendu le nom du dossier « ${nom} »`);
      if (!NOM_VALIDE.test(nom) || nom.length > 64) erreur("nom de skill invalide : minuscules, chiffres et tirets, 64 caractères au plus");
      if (NOMS_RESERVES.includes(nom)) erreur(`nom réservé par le portail : « ${nom} »`);

      const description = typeof data.description === "string" ? data.description.trim() : "";
      if (description.length < DESCRIPTION.min || description.length > DESCRIPTION.max) {
        erreur(`« description » : ${description.length} caractères, attendu entre ${DESCRIPTION.min} et ${DESCRIPTION.max}`);
      }

      const texte = (cle) => {
        const v = meta[cle];
        if (typeof v !== "string" || !v.trim()) {
          erreur(`metadata : champ « ${cle} » manquant ou vide`);
          return "";
        }
        return v.trim();
      };
      const parmi = (cle, valeurs) => {
        const v = meta[cle];
        if (!valeurs.includes(v)) erreur(`metadata : « ${cle} » = « ${v} », attendu : ${valeurs.join(" | ")}`);
        return v;
      };
      const liste = (cle, { valeurs, nonVide = false } = {}) => {
        const v = meta[cle];
        if (!Array.isArray(v) || v.some((x) => typeof x !== "string" || !x.trim())) {
          erreur(`metadata : « ${cle} » doit être une liste de textes (ex. [a, b] ou [])`);
          return [];
        }
        if (nonVide && !v.length) erreur(`metadata : « ${cle} » ne doit pas être vide`);
        if (valeurs) for (const x of v) if (!valeurs.includes(x)) erreur(`metadata : « ${cle} » : valeur inconnue « ${x} »`);
        if (new Set(v).size !== v.length) erreur(`metadata : « ${cle} » contient un doublon`);
        return v.map((x) => x.trim());
      };

      const version = typeof meta.version === "string" ? meta.version : "";
      if (!SEMVER.test(version)) erreur(`metadata : « version » = « ${meta.version} », attendu un texte de la forme "1.2.0"`);
      if (meta.etape !== etape.id) erreur(`metadata : « etape » = « ${meta.etape} », attendu « ${etape.id} » (dossier ${etape.dossier})`);

      const corps = analyse.content.trim();
      const titres = extraireTitres(corps);
      const sections = titres.filter((t) => t.niveau === 2).map((t) => t.texte);
      if (sections.join(" | ") !== SECTIONS_SKILL.join(" | ")) {
        erreur(`sections attendues, dans cet ordre : ${SECTIONS_SKILL.map((s) => `« ${s} »`).join(", ")} ; trouvées : ${sections.map((s) => `« ${s} »`).join(", ") || "aucune"}`);
      }
      if (/^#\s/m.test(corps.replace(/```[\s\S]*?```/g, ""))) erreur("pas de titre H1 dans le corps : le titre vient de « metadata.titre »");
      const mots = compterMots(corps);
      if (mots < MOTS.min || mots > MOTS.max) erreur(`corps de ${mots} mots, attendu entre ${MOTS.min} et ${MOTS.max}`);

      /* Historique des versions */
      const relatifHistorique = `${relatifDossier}/CHANGELOG.md`;
      const cheminHistorique = path.join(dossierEtape, nom, "CHANGELOG.md");
      let historique = [];
      if (!fs.existsSync(cheminHistorique)) {
        signaler(relatifDossier, "CHANGELOG.md manquant");
      } else {
        historique = lireHistorique(fs.readFileSync(cheminHistorique, "utf8"));
        if (!historique.length) signaler(relatifHistorique, "aucune entrée de la forme « ## 1.0.0 — AAAA-MM-JJ »");
        historique.forEach((h, i) => {
          if (!SEMVER.test(h.version)) signaler(relatifHistorique, `version invalide « ${h.version} »`);
          if (!dateValide(h.date)) signaler(relatifHistorique, `date invalide « ${h.date} » pour la version ${h.version}`);
          if (!h.notes.length) signaler(relatifHistorique, `version ${h.version} : aucune note de changement`);
          const suivante = historique[i + 1];
          if (suivante && SEMVER.test(h.version) && SEMVER.test(suivante.version) && comparerVersions(h.version, suivante.version) <= 0) {
            signaler(relatifHistorique, `versions à classer de la plus récente à la plus ancienne (${h.version} avant ${suivante.version})`);
          }
        });
        if (historique.length && SEMVER.test(version) && historique[0].version !== version) {
          signaler(relatifHistorique, `la première entrée (${historique[0].version}) doit être la version du skill (${version})`);
        }
      }
      const reviseLe = historique[0] && dateValide(historique[0].date) ? historique[0].date : "";
      const limite = new Date(aujourdhui);
      limite.setMonth(limite.getMonth() - taxonomie.revisionMois);

      skills.push({
        id: nom,
        titre: texte("titre"),
        description,
        version,
        statut: parmi("statut", ids("statuts")),
        etape: etape.id,
        sousProcessus: parmi("sous-processus", etape.sousProcessus.map((s) => s.id)),
        role: parmi("role", ids("roles")),
        domaine: parmi("domaine", ids("domaines")),
        phases: liste("phases", { valeurs: phases }),
        technologies: liste("technologies", { valeurs: ids("technologies") }),
        casUsage: liste("cas-usage", { valeurs: ids("casUsage"), nonVide: true }),
        tags: liste("tags"),
        proprietaire: parmi("proprietaire", ids("proprietaires")),
        diffusion: parmi("diffusion", ids("diffusions")),
        entrees: liste("entrees", { nonVide: true }),
        sorties: liste("sorties", { nonVide: true }),
        prerequis: liste("prerequis"),
        remplacePar: typeof meta["remplace-par"] === "string" ? meta["remplace-par"] : "",
        enTete: analyse.matter.trim(),
        corps,
        titres,
        mots,
        historique,
        reviseLe,
        aReviser: Boolean(reviseLe) && new Date(`${reviseLe}T00:00:00Z`) < limite,
        fichier: relatif,
        ressources: ressourcesCitees(corps),
        _fichier: relatif,
      });
    }
  }

  /* Unicité, prérequis, remplacement, cycles, couverture ------------- */

  const parId = new Map();
  for (const s of skills) {
    if (parId.has(s.id)) signaler(s._fichier, `nom de skill en double : aussi défini dans ${parId.get(s.id)._fichier}`);
    else parId.set(s.id, s);
  }
  for (const s of skills) {
    for (const p of s.prerequis) {
      if (p === s.id) signaler(s._fichier, "metadata : un skill ne peut pas être son propre prérequis");
      else if (!parId.has(p)) signaler(s._fichier, `metadata : prérequis inconnu « ${p} »`);
    }
    if (s.remplacePar) {
      if (s.statut !== "deprecie") signaler(s._fichier, "metadata : « remplace-par » ne s'emploie que sur un skill déprécié");
      if (!parId.has(s.remplacePar) || s.remplacePar === s.id) signaler(s._fichier, `metadata : « remplace-par » désigne un skill inconnu « ${s.remplacePar} »`);
    }
  }
  const etat = new Map();
  const visiter = (id, pile) => {
    if (etat.get(id) === "fait") return;
    if (etat.get(id) === "en-cours") {
      signaler(parId.get(id)._fichier, `prérequis en boucle : ${[...pile.slice(pile.indexOf(id)), id].join(" → ")}`);
      return;
    }
    etat.set(id, "en-cours");
    for (const p of parId.get(id).prerequis) if (parId.has(p)) visiter(p, [...pile, id]);
    etat.set(id, "fait");
  };
  for (const id of parId.keys()) visiter(id, []);

  for (const e of taxonomie.etapes) {
    for (const sp of e.sousProcessus) {
      const couvert = skills.some((s) => s.etape === e.id && s.sousProcessus === sp.id && s.statut !== "deprecie");
      if (!couvert) signaler("skills/taxonomie.json", `aucun skill actif pour le sous-processus « ${e.id} / ${sp.id} »`);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Workflows                                                         */
  /* ---------------------------------------------------------------- */

  const workflows = [];
  const dossierWorkflows = path.join(dossier, "workflows");
  if (fs.existsSync(dossierWorkflows)) {
    for (const fichier of fs.readdirSync(dossierWorkflows).filter((f) => f.endsWith(".md")).sort()) {
      const relatif = `skills/workflows/${fichier}`;
      const erreur = (message) => signaler(relatif, message);
      let analyse;
      try {
        analyse = matter(fs.readFileSync(path.join(dossierWorkflows, fichier), "utf8"));
      } catch (e) {
        erreur(`front matter illisible : ${e.message.split("\n")[0]}`);
        continue;
      }
      const data = analyse.data;
      const id = fichier.replace(/\.md$/, "");
      if (data.id !== id) erreur(`l'id « ${data.id} » doit être égal au nom de fichier « ${id} »`);
      if (!NOM_VALIDE.test(id)) erreur("le nom de fichier ne doit contenir que minuscules, chiffres et tirets");
      for (const cle of Object.keys(data)) if (!CLES_WORKFLOW.includes(cle)) erreur(`champ inconnu « ${cle} »`);
      const texte = (cle) => {
        const v = data[cle];
        if (typeof v !== "string" || !v.trim()) {
          erreur(`champ « ${cle} » manquant ou vide`);
          return "";
        }
        return v.trim();
      };
      const version = typeof data.version === "string" ? data.version : "";
      if (!SEMVER.test(version)) erreur(`« version » = « ${data.version} », attendu un texte de la forme "1.2.0"`);
      if (!ids("statuts").includes(data.statut)) erreur(`« statut » = « ${data.statut} », attendu : ${ids("statuts").join(" | ")}`);
      if (!ids("proprietaires").includes(data.proprietaire)) erreur(`« proprietaire » inconnu « ${data.proprietaire} »`);

      const etapes = [];
      if (!Array.isArray(data.etapes) || data.etapes.length < 2) {
        erreur("« etapes » doit lister au moins deux étapes");
      } else {
        data.etapes.forEach((e, i) => {
          const rang = `étape ${i + 1}`;
          if (!e || typeof e !== "object") return erreur(`${rang} : attendu un objet { skill, intention, controle }`);
          for (const cle of Object.keys(e)) {
            if (!["skill", "intention", "controle"].includes(cle)) erreur(`${rang} : champ inconnu « ${cle} »`);
          }
          const skill = parId.get(e.skill);
          if (!skill) return erreur(`${rang} : skill inconnu « ${e.skill} »`);
          if (data.statut === "publie" && skill.statut !== "publie") {
            erreur(`${rang} : un workflow publié ne mobilise que des skills publiés (« ${e.skill} » est « ${skill.statut} »)`);
          }
          if (typeof e.intention !== "string" || !e.intention.trim()) erreur(`${rang} : « intention » manquante`);
          if (e.controle !== undefined && (typeof e.controle !== "string" || !e.controle.trim())) erreur(`${rang} : « controle » vide`);
          etapes.push({ skill: e.skill, intention: String(e.intention ?? "").trim(), controle: typeof e.controle === "string" ? e.controle.trim() : "" });
        });
      }
      const corps = analyse.content.trim();
      if (!corps) erreur("corps vide : décrire quand lancer le workflow et ses règles d'orchestration");

      workflows.push({
        id,
        titre: texte("titre"),
        resume: texte("resume"),
        declencheur: texte("declencheur"),
        resultat: texte("resultat"),
        version,
        statut: data.statut,
        proprietaire: data.proprietaire,
        etapes,
        corps,
        titres: extraireTitres(corps),
        fichier: relatif,
        _fichier: relatif,
      });
    }
  }

  // Les workflows suivent le cycle de vie : rang de l'étape de leur premier skill, puis de leur dernier.
  const rang = (id) => taxonomie.etapes.findIndex((e) => e.id === parId.get(id)?.etape);
  const cle = (w) => [rang(w.etapes[0]?.skill), rang(w.etapes.at(-1)?.skill)];
  workflows.sort((a, b) => cle(a)[0] - cle(b)[0] || cle(a)[1] - cle(b)[1] || a.id.localeCompare(b.id));

  return { taxonomie, skills, workflows };
}
