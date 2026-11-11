#!/usr/bin/env node
/**
 * Compile le dossier content/ en un module JSON consommé par l'application,
 * en validant au passage le front matter, les sections et les liens internes.
 *
 *   node scripts/build-content.mjs            validation stricte (échec si erreur)
 *   node scripts/build-content.mjs --lenient  les erreurs deviennent des avertissements
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dossierContenu = path.join(racine, "content");
const sortie = path.join(racine, "src", "generated", "content.json");
const tolerant = process.argv.includes("--lenient");

const PHASES = [
  "cadrer",
  "diagnostiquer",
  "cibler",
  "reinventer",
  "concevoir",
  "construire",
  "industrialiser",
  "perenniser",
];
const OUTILS = [
  "maturite",
  "agent-ou-pas",
  "priorisation",
  "business-case",
  "redesign-processus",
  "agent-designer",
];
const CATEGORIES = [
  "strategie",
  "opportunites",
  "processus",
  "agents",
  "industrialisation",
  "confiance",
  "adoption",
  "valeur",
];
const NIVEAUX = ["fondamental", "avance"];
const TYPES_TEMPLATE = ["livrable", "canevas", "grille", "checklist", "trame"];
const FORMATS_TEMPLATE = ["document", "tableau", "atelier", "presentation"];
const TYPES_SAVOIR = ["pattern", "anti-pattern", "rex"];
const SECTIONS_TEMPLATE = ["mode-emploi", "template", "exemple"];
const PAGES_FIXES = [
  "/",
  "/methode",
  "/frameworks",
  "/templates",
  "/guides",
  "/savoir",
  "/outils",
  "/cas-usage",
  "/glossaire",
  "/missions",
  "/copilote",
];

const erreurs = [];
const signaler = (fichier, message) => erreurs.push(`${fichier} — ${message}`);

/** Doit rester identique à src/lib/slug.ts. */
export function slugifier(texte) {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function texteBrut(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compterMots(markdown) {
  const texte = texteBrut(markdown);
  return texte ? texte.split(" ").length : 0;
}

function extraireTitres(markdown) {
  const titres = [];
  let dansCode = false;
  for (const ligne of markdown.split("\n")) {
    if (ligne.trimStart().startsWith("```")) dansCode = !dansCode;
    if (dansCode) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(ligne);
    if (m) {
      const texte = m[2].replace(/[*_`]/g, "");
      titres.push({ niveau: m[1].length, texte, id: slugifier(texte) });
    }
  }
  return titres;
}

function lireDossier(nom) {
  const dossier = path.join(dossierContenu, nom);
  if (!fs.existsSync(dossier)) return [];
  return fs
    .readdirSync(dossier)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((fichier) => {
      const chemin = path.join(dossier, fichier);
      const relatif = path.relative(racine, chemin);
      let analyse;
      try {
        analyse = matter(fs.readFileSync(chemin, "utf8"));
      } catch (e) {
        signaler(relatif, `front matter illisible : ${e.message.split("\n")[0]}`);
        return null;
      }
      const id = fichier.replace(/\.md$/, "");
      if (analyse.data.id !== id) {
        signaler(relatif, `l'id « ${analyse.data.id} » doit être égal au nom de fichier « ${id} »`);
      }
      if (!/^[a-z0-9-]+$/.test(id)) {
        signaler(relatif, "le nom de fichier ne doit contenir que minuscules, chiffres et tirets");
      }
      return { relatif, id, meta: analyse.data, corps: analyse.content.trim() };
    })
    .filter(Boolean);
}

function exigerTexte(doc, champ) {
  const v = doc.meta[champ];
  if (typeof v !== "string" || !v.trim()) {
    signaler(doc.relatif, `champ « ${champ} » manquant ou vide`);
    return "";
  }
  return v.trim();
}

function texteOptionnel(doc, champ) {
  const v = doc.meta[champ];
  if (v === undefined || v === null) return "";
  if (v instanceof Date) return v.toISOString().slice(0, 7);
  return String(v).trim();
}

function exigerParmi(doc, champ, valeurs) {
  const v = doc.meta[champ];
  if (!valeurs.includes(v)) {
    signaler(doc.relatif, `champ « ${champ} » = « ${v} », attendu : ${valeurs.join(" | ")}`);
  }
  return v;
}

function exigerListe(doc, champ, { valeurs, nonVide = false } = {}) {
  const v = doc.meta[champ];
  if (!Array.isArray(v)) {
    signaler(doc.relatif, `champ « ${champ} » doit être une liste (ex. [a, b] ou [])`);
    return [];
  }
  const liste = v.map((x) => String(x));
  if (nonVide && liste.length === 0) signaler(doc.relatif, `champ « ${champ} » ne doit pas être vide`);
  if (valeurs) {
    for (const x of liste) {
      if (!valeurs.includes(x)) signaler(doc.relatif, `champ « ${champ} » : valeur inconnue « ${x} »`);
    }
  }
  return liste;
}

/* ------------------------------------------------------------------ */
/* Lecture                                                             */
/* ------------------------------------------------------------------ */

const frameworks = lireDossier("frameworks").map((doc) => ({
  id: doc.id,
  titre: exigerTexte(doc, "titre"),
  resume: exigerTexte(doc, "resume"),
  categorie: exigerParmi(doc, "categorie", CATEGORIES),
  phases: exigerListe(doc, "phases", { valeurs: PHASES, nonVide: true }),
  origine: exigerTexte(doc, "origine"),
  niveau: exigerParmi(doc, "niveau", NIVEAUX),
  tags: exigerListe(doc, "tags"),
  templates: exigerListe(doc, "templates"),
  lies: exigerListe(doc, "lies"),
  corps: doc.corps,
  titres: extraireTitres(doc.corps),
  mots: compterMots(doc.corps),
  _fichier: doc.relatif,
}));

const templates = lireDossier("templates").map((doc) => {
  const sections = {};
  const morceaux = doc.corps.split(/^<!--\s*section:\s*([a-z-]+)\s*-->\s*$/m);
  for (let i = 1; i < morceaux.length; i += 2) {
    sections[morceaux[i]] = (morceaux[i + 1] ?? "").trim();
  }
  for (const s of SECTIONS_TEMPLATE) {
    if (!sections[s]) signaler(doc.relatif, `section « ${s} » manquante ou vide`);
  }
  for (const s of Object.keys(sections)) {
    if (!SECTIONS_TEMPLATE.includes(s)) signaler(doc.relatif, `section inconnue « ${s} »`);
  }
  return {
    id: doc.id,
    titre: exigerTexte(doc, "titre"),
    resume: exigerTexte(doc, "resume"),
    phase: exigerParmi(doc, "phase", [...PHASES, "transverse"]),
    type: exigerParmi(doc, "type", TYPES_TEMPLATE),
    format: exigerParmi(doc, "format", FORMATS_TEMPLATE),
    effort: exigerTexte(doc, "effort"),
    tags: exigerListe(doc, "tags"),
    frameworks: exigerListe(doc, "frameworks"),
    modeEmploi: sections["mode-emploi"] ?? "",
    template: sections["template"] ?? "",
    exemple: sections["exemple"] ?? "",
    mots: compterMots(doc.corps),
    _fichier: doc.relatif,
  };
});

const guides = lireDossier("guides").map((doc) => ({
  id: doc.id,
  titre: exigerTexte(doc, "titre"),
  resume: exigerTexte(doc, "resume"),
  phases: exigerListe(doc, "phases", { valeurs: PHASES, nonVide: true }),
  duree: exigerTexte(doc, "duree"),
  niveau: exigerParmi(doc, "niveau", NIVEAUX),
  tags: exigerListe(doc, "tags"),
  frameworks: exigerListe(doc, "frameworks"),
  templates: exigerListe(doc, "templates"),
  corps: doc.corps,
  titres: extraireTitres(doc.corps),
  mots: compterMots(doc.corps),
  _fichier: doc.relatif,
}));

const savoir = lireDossier("savoir").map((doc) => ({
  id: doc.id,
  titre: exigerTexte(doc, "titre"),
  resume: exigerTexte(doc, "resume"),
  type: exigerParmi(doc, "type", TYPES_SAVOIR),
  phases: exigerListe(doc, "phases", { valeurs: PHASES }),
  tags: exigerListe(doc, "tags"),
  secteur: texteOptionnel(doc, "secteur"),
  date: texteOptionnel(doc, "date"),
  corps: doc.corps,
  titres: extraireTitres(doc.corps),
  mots: compterMots(doc.corps),
  _fichier: doc.relatif,
}));

/* ------------------------------------------------------------------ */
/* Références croisées et liens internes                               */
/* ------------------------------------------------------------------ */

const ids = {
  frameworks: new Set(frameworks.map((d) => d.id)),
  templates: new Set(templates.map((d) => d.id)),
  guides: new Set(guides.map((d) => d.id)),
  savoir: new Set(savoir.map((d) => d.id)),
};

function verifierRefs(doc, champ, ensemble, nom) {
  for (const ref of doc[champ] ?? []) {
    if (!ensemble.has(ref)) signaler(doc._fichier, `champ « ${champ} » : ${nom} inconnu « ${ref} »`);
  }
}

for (const d of frameworks) {
  verifierRefs(d, "templates", ids.templates, "template");
  verifierRefs(d, "lies", ids.frameworks, "framework");
}
for (const d of templates) verifierRefs(d, "frameworks", ids.frameworks, "framework");
for (const d of guides) {
  verifierRefs(d, "frameworks", ids.frameworks, "framework");
  verifierRefs(d, "templates", ids.templates, "template");
}

function lienValide(chemin) {
  if (PAGES_FIXES.includes(chemin)) return true;
  const segments = chemin.split("/").filter(Boolean);
  if (segments.length !== 2) return false;
  const [section, id] = segments;
  if (section === "methode") return PHASES.includes(id);
  if (section === "outils") return OUTILS.includes(id);
  if (section in ids) return ids[section].has(id);
  return false;
}

function verifierLiens(fichier, markdown) {
  const sansCode = markdown.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
  for (const m of sansCode.matchAll(/\]\((\/[^)\s#?]*)(?:[#?][^)\s]*)?\)/g)) {
    const chemin = m[1].length > 1 ? m[1].replace(/\/$/, "") : m[1];
    if (!lienValide(chemin)) signaler(fichier, `lien interne introuvable : ${m[1]}`);
  }
}

for (const d of frameworks) verifierLiens(d._fichier, d.corps);
for (const d of guides) verifierLiens(d._fichier, d.corps);
for (const d of savoir) verifierLiens(d._fichier, d.corps);
for (const d of templates) {
  verifierLiens(d._fichier, d.modeEmploi);
  verifierLiens(d._fichier, d.template);
  verifierLiens(d._fichier, d.exemple);
}

/* ------------------------------------------------------------------ */
/* Sortie                                                              */
/* ------------------------------------------------------------------ */

const nettoyer = (liste) =>
  liste.map((doc) => {
    const copie = { ...doc };
    delete copie._fichier;
    return copie;
  });

fs.mkdirSync(path.dirname(sortie), { recursive: true });
fs.writeFileSync(
  sortie,
  JSON.stringify(
    {
      frameworks: nettoyer(frameworks),
      templates: nettoyer(templates),
      guides: nettoyer(guides),
      savoir: nettoyer(savoir),
    },
    null,
    1,
  ) + "\n",
);

const total = frameworks.length + templates.length + guides.length + savoir.length;
console.log(
  `Contenu : ${frameworks.length} frameworks, ${templates.length} templates, ${guides.length} guides, ${savoir.length} fiches de savoir (${total} pages).`,
);

if (erreurs.length) {
  const titre = tolerant ? "avertissement(s)" : "erreur(s)";
  console.error(`\n${erreurs.length} ${titre} de contenu :`);
  for (const e of erreurs) console.error(`  - ${e}`);
  if (!tolerant) process.exit(1);
}
