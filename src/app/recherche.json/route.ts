import { casUsage } from "@/data/cas-usage";
import { glossaire } from "@/data/glossaire";
import { phases } from "@/data/phases";
import { CATEGORIES_FRAMEWORK, OUTILS, SECTEURS, TYPES_SAVOIR } from "@/data/referentiels";
import { frameworks, guides, savoir, templates } from "@/lib/content";
import type { EntreeRecherche } from "@/lib/recherche";

/** Index de recherche du portail. Sans donnée dynamique : généré une fois au build. */
export async function GET() {
  const index: EntreeRecherche[] = [
    ...phases.map((p) => ({
      t: "Phase",
      h: `/methode/${p.id}`,
      n: `${p.numero}. ${p.nom} — ${p.promesse}`,
      r: p.resume,
      k: `${p.jalon.code} ${p.jalon.nom} ${p.activites.map((a) => a.titre).join(" ")}`,
    })),
    ...OUTILS.map((o) => ({ t: "Outil", h: `/outils/${o.id}`, n: o.nom, r: o.resume, k: "atelier" })),
    ...frameworks.map((f) => ({
      t: "Framework",
      h: `/frameworks/${f.id}`,
      n: f.titre,
      r: f.resume,
      k: `${f.tags.join(" ")} ${f.origine} ${CATEGORIES_FRAMEWORK[f.categorie]?.nom ?? ""}`,
    })),
    ...templates.map((t) => ({
      t: "Template",
      h: `/templates/${t.id}`,
      n: t.titre,
      r: t.resume,
      k: `${t.tags.join(" ")} ${t.type} livrable`,
    })),
    ...guides.map((g) => ({
      t: "Guide",
      h: `/guides/${g.id}`,
      n: g.titre,
      r: g.resume,
      k: g.tags.join(" "),
    })),
    ...savoir.map((s) => ({
      t: TYPES_SAVOIR[s.type]?.nom ?? "Savoir",
      h: `/savoir/${s.id}`,
      n: s.titre,
      r: s.resume,
      k: `${s.tags.join(" ")} ${s.secteur}`,
    })),
    ...casUsage.map((c) => ({
      t: "Cas d'usage",
      h: `/cas-usage#${c.id}`,
      n: c.titre,
      r: c.probleme,
      k: `${SECTEURS[c.secteur]} ${c.fonction} ${c.solution}`,
    })),
    ...glossaire.map((g) => ({
      t: "Glossaire",
      h: `/glossaire#${g.id}`,
      n: g.terme,
      r: g.definition,
      k: g.alias ?? "",
    })),
  ];

  return Response.json(index);
}
