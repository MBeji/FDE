import type { Metadata } from "next";
import { Bibliotheque, type ElementBibliotheque } from "@/components/Bibliotheque";
import { EnTetePage } from "@/components/ui";
import { PHASE_IDS, PHASES_RESUME } from "@/data/referentiels";
import { guides } from "@/lib/content";

export const metadata: Metadata = { title: "Guides pratiques" };

export default function PageGuides() {
  const elements: ElementBibliotheque[] = guides.map((g) => ({
    href: `/guides/${g.id}`,
    titre: g.titre,
    resume: g.resume,
    pastilles: [
      { nom: g.duree },
      ...(g.phases.length === PHASE_IDS.length
        ? [{ nom: "Toutes les phases" }]
        : g.phases.map((p) => ({ nom: PHASES_RESUME[p].nom }))),
    ],
    valeurs: { phase: g.phases },
    motsCles: g.tags.join(" "),
  }));

  return (
    <>
      <EnTetePage
        surtitre="Bibliothèque"
        titre="Guides pratiques"
        chapo="Les gestes du métier, pas à pas : mener un entretien, animer un atelier, concevoir un agent, construire ses évaluations, tenir un COPIL. Écrits pour un FDE qui a une réunion demain matin."
      />
      <Bibliotheque
        elements={elements}
        placeholder="Filtrer les guides…"
        filtres={[
          {
            cle: "phase",
            nom: "Phase",
            options: PHASE_IDS.map((p) => ({
              valeur: p,
              nom: `${PHASES_RESUME[p].numero}. ${PHASES_RESUME[p].nom}`,
            })),
          },
        ]}
      />
    </>
  );
}
