#!/usr/bin/env node
/**
 * Exporte les skills publiés dans un dossier à plat, au format Agent Skills :
 *
 *   <sortie>/<nom>/SKILL.md (+ references/, assets/, scripts/ du skill s'ils existent)
 *
 * C'est la forme que chargent les environnements d'agents : copier le dossier produit
 * dans leur répertoire de skills.
 *
 *   node scripts/exporter-skills.mjs                       tous les skills publiés, vers dist/skills
 *   node scripts/exporter-skills.mjs --diffusion client    seulement les skills transférables à un client
 *   node scripts/exporter-skills.mjs --sortie /chemin      autre dossier de sortie
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const option = (nom) => {
  const i = process.argv.indexOf(`--${nom}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
};

const taxonomie = JSON.parse(fs.readFileSync(path.join(racine, "skills", "taxonomie.json"), "utf8"));
const diffusion = option("diffusion");
if (diffusion && !taxonomie.diffusions.some((d) => d.id === diffusion)) {
  console.error(`Diffusion inconnue « ${diffusion} ». Attendu : ${taxonomie.diffusions.map((d) => d.id).join(" | ")}.`);
  process.exit(1);
}
const sortie = path.resolve(option("sortie") ?? path.join(racine, "dist", "skills"));
if (sortie === racine || racine.startsWith(`${sortie}${path.sep}`) || sortie.startsWith(path.join(racine, "skills"))) {
  console.error(`Dossier de sortie refusé : ${sortie}`);
  process.exit(1);
}

/** Annexes d'un skill que le standard permet de livrer avec lui. */
const ANNEXES = ["references", "assets", "scripts"];

fs.rmSync(sortie, { recursive: true, force: true });
fs.mkdirSync(sortie, { recursive: true });

const exportes = [];
for (const etape of taxonomie.etapes) {
  const dossierEtape = path.join(racine, "skills", etape.dossier);
  if (!fs.existsSync(dossierEtape)) continue;
  for (const entree of fs.readdirSync(dossierEtape, { withFileTypes: true })) {
    const source = path.join(dossierEtape, entree.name);
    const fichier = path.join(source, "SKILL.md");
    if (!entree.isDirectory() || !fs.existsSync(fichier)) continue;
    const meta = matter(fs.readFileSync(fichier, "utf8")).data.metadata ?? {};
    if (meta.statut !== "publie") continue;
    if (diffusion && meta.diffusion !== diffusion) continue;
    const cible = path.join(sortie, entree.name);
    fs.mkdirSync(cible, { recursive: true });
    fs.copyFileSync(fichier, path.join(cible, "SKILL.md"));
    for (const annexe of ANNEXES) {
      if (fs.existsSync(path.join(source, annexe))) fs.cpSync(path.join(source, annexe), path.join(cible, annexe), { recursive: true });
    }
    exportes.push({ name: entree.name, titre: meta.titre, version: meta.version, etape: meta.etape, diffusion: meta.diffusion });
  }
}

fs.writeFileSync(path.join(sortie, "index.json"), JSON.stringify({ skills: exportes }, null, 1) + "\n");
console.log(
  `${exportes.length} skills exportés vers ${path.relative(process.cwd(), sortie) || "."}${diffusion ? ` (diffusion : ${diffusion})` : ""}.`,
);
