import { casUsage } from "@/data/cas-usage";
import { COMPETENCES } from "@/data/competences";
import { glossaire } from "@/data/glossaire";
import { CHARTE } from "@/data/metier";
import { phases } from "@/data/phases";
import { CATEGORIES_FRAMEWORK, OUTILS, SECTEURS, TYPES_SAVOIR } from "@/data/referentiels";
import { SITUATIONS } from "@/data/situations";
import { NIVEAUX, TOUS_LES_STANDARDS } from "@/data/standards";
import { frameworks, guides, savoir, templates } from "@/lib/content";
import type { EntreeRecherche } from "@/lib/recherche";

/** Index de recherche du portail. Sans donnée dynamique : généré une fois au build. */
export async function GET() {
  const sections: EntreeRecherche[] = [
    { t: "Section", h: "/metier", n: "Le métier FDE : rôle, charte, règles du pool", r: "Le rôle face aux autres métiers, la charte, les règles de fonctionnement et les situations délicates.", k: "posture responsabilités consultant développeur architecte chef de projet" },
    { t: "Section", h: "/onboarding", n: "Parcours d'onboarding", r: "Cinq étapes, exercices, plan 30/60/90 et mentorat pour les nouveaux FDE.", k: "intégration arrivée nouveau mentor exercices" },
    { t: "Section", h: "/competences", n: "Référentiel de compétences", r: "Compétences, niveaux de maîtrise, auto-évaluation et préparation à l'intervention.", k: "readiness progression niveaux évaluation" },
    { t: "Section", h: "/standards", n: "Standards d'ingénierie", r: "Standards obligatoires, recommandés et contextuels sur dix domaines, et revue de conformité.", k: "devsecops llmops sécurité cloud qualité revue" },
    { t: "Section", h: "/situations", n: "Entrée par situation", r: "Trouver quoi faire et quoi ouvrir selon sa situation du moment.", k: "par où commencer" },
    { t: "Section", h: "/savoir/contribuer", n: "Contribuer au savoir terrain", r: "Assistant de rédaction d'un REX, d'un pattern ou d'un anti-pattern prêt pour une pull request.", k: "capitaliser retour d'expérience partager" },
  ];

  const index: EntreeRecherche[] = [
    ...sections,
    ...SITUATIONS.map((s) => ({ t: "Situation", h: `/situations#${s.id}`, n: s.intitule, r: s.commencer, k: "" })),
    ...CHARTE.map((e) => ({ t: "Charte FDE", h: `/metier#engagement-${e.numero}`, n: `${e.numero}. ${e.titre}`, r: e.principe, k: "engagement charte" })),
    ...COMPETENCES.map((c) => ({ t: "Compétence", h: `/competences#competence-${c.id}`, n: c.nom, r: c.description, k: c.famille })),
    ...TOUS_LES_STANDARDS.map((s) => ({
      t: "Standard",
      h: `/standards#${s.id}`,
      n: s.enonce,
      r: s.pourquoi,
      k: `${s.id} ${s.domaine} ${NIVEAUX[s.niveau].nom}`,
    })),
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
      k: `${f.tags.join(" ")} ${f.origine} framework ${CATEGORIES_FRAMEWORK[f.categorie]?.nom ?? ""}`,
    })),
    ...templates.map((t) => ({
      t: "Template",
      h: `/templates/${t.id}`,
      n: t.titre,
      r: t.resume,
      k: `${t.tags.join(" ")} ${t.type} livrable template trame modèle`,
    })),
    ...guides.map((g) => ({
      t: "Guide",
      h: `/guides/${g.id}`,
      n: g.titre,
      r: g.resume,
      k: `${g.tags.join(" ")} guide`,
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
