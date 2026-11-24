#!/usr/bin/env node
/**
 * Vérifie qu'un skill modifié monte de version.
 *
 * Compare chaque skills/<étape>/<nom>/SKILL.md et chaque skills/workflows/<id>.md à sa version
 * sur la branche de référence : si le fichier a changé, sa version doit être strictement supérieure.
 * Un fichier nouveau est accepté tel quel. Le format et l'historique sont vérifiés par build-content.mjs.
 *
 *   node scripts/verifier-versions-skills.mjs              compare à origin/main
 *   node scripts/verifier-versions-skills.mjs --base <ref> compare à une autre référence git
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { comparerVersions } from "./skills.mjs";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const i = process.argv.indexOf("--base");
const base = i >= 0 ? process.argv[i + 1] : "origin/main";

const git = (...args) => execFileSync("git", args, { cwd: racine, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });

let origine;
try {
  origine = git("merge-base", base, "HEAD").trim();
} catch {
  console.error(`Référence git introuvable : « ${base} ». Récupérer l'historique (git fetch) ou passer --base <ref>.`);
  process.exit(1);
}

const SEMVER = /^\d+\.\d+\.\d+$/;
/** La version déclarée : sous metadata pour un skill, au premier niveau pour un workflow. */
const versionDe = (texte) => {
  const data = matter(texte).data;
  const v = data.metadata?.version ?? data.version;
  return typeof v === "string" && SEMVER.test(v) ? v : null;
};

const modifies = git("diff", "--name-only", "--diff-filter=M", origine, "--", "skills")
  .split("\n")
  .filter((f) => /^skills\/[^/]+\/[^/]+\/SKILL\.md$/.test(f) || /^skills\/workflows\/[^/]+\.md$/.test(f));

const erreurs = [];
for (const fichier of modifies) {
  const chemin = path.join(racine, fichier);
  if (!fs.existsSync(chemin)) continue;
  const avant = versionDe(git("show", `${origine}:${fichier}`));
  const apres = versionDe(fs.readFileSync(chemin, "utf8"));
  if (!avant || !apres) continue; // version illisible : signalée par la validation du contenu
  if (comparerVersions(apres, avant) <= 0) {
    erreurs.push(`${fichier} — modifié sans montée de version (${avant} → ${apres}) : monter la version et ajouter l'entrée d'historique.`);
  }
}

console.log(`Versions des skills : ${modifies.length} fichier(s) modifié(s) par rapport à ${base}.`);
if (erreurs.length) {
  console.error(`\n${erreurs.length} erreur(s) de version :`);
  for (const e of erreurs) console.error(`  - ${e}`);
  process.exit(1);
}
