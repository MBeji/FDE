import type { Metadata } from "next";
import { ListeGlossaire } from "@/components/ListeGlossaire";
import { EnTetePage } from "@/components/ui";
import { glossaire } from "@/data/glossaire";
import { PHASE_IDS, OUTILS } from "@/data/referentiels";
import { frameworks, guides, savoir, templates } from "@/lib/content";

export const metadata: Metadata = { title: "Glossaire" };

export default function PageGlossaire() {
  // Seuls les liens vers des pages existantes sont affichés.
  const liensValides = [
    "/methode",
    "/cas-usage",
    "/glossaire",
    "/missions",
    "/copilote",
    "/metier",
    "/onboarding",
    "/competences",
    "/standards",
    "/situations",
    "/savoir/contribuer",
    ...PHASE_IDS.map((p) => `/methode/${p}`),
    ...OUTILS.map((o) => `/outils/${o.id}`),
    ...frameworks.map((f) => `/frameworks/${f.id}`),
    ...templates.map((t) => `/templates/${t.id}`),
    ...guides.map((g) => `/guides/${g.id}`),
    ...savoir.map((s) => `/savoir/${s.id}`),
  ];

  return (
    <>
      <EnTetePage
        surtitre="Savoir"
        titre="Glossaire"
        chapo="Le vocabulaire commun du pool : IA générative, agents, méthode, conseil, delivery et gouvernance. Chaque définition dit ce que c'est et pourquoi cela compte en mission."
      />
      <ListeGlossaire termes={glossaire} liensValides={liensValides} />
    </>
  );
}
