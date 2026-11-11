import type { Metadata } from "next";
import { Bibliotheque, type ElementBibliotheque } from "@/components/Bibliotheque";
import { EnTetePage } from "@/components/ui";
import { FORMATS_TEMPLATE, PHASE_IDS, PHASES_RESUME, TYPES_TEMPLATE } from "@/data/referentiels";
import { templates } from "@/lib/content";

export const metadata: Metadata = { title: "Templates & livrables" };

export default function PageTemplates() {
  const elements: ElementBibliotheque[] = templates.map((t) => ({
    href: `/templates/${t.id}`,
    titre: t.titre,
    resume: t.resume,
    groupe: t.phase,
    pastilles: [{ nom: TYPES_TEMPLATE[t.type] ?? t.type }, { nom: t.effort }],
    valeurs: { phase: [t.phase], type: [t.type], format: [t.format] },
    motsCles: t.tags.join(" "),
  }));

  return (
    <>
      <EnTetePage
        surtitre="Bibliothèque"
        titre="Templates et livrables"
        chapo="Chaque template réunit le document vierge, prêt à copier, un exemple entièrement rempli sur le cas fil rouge, et son mode d'emploi. Avec une mission active, les templates sont pré-remplis à son nom."
      />
      <Bibliotheque
        elements={elements}
        placeholder="Filtrer les templates…"
        groupes={[
          ...PHASE_IDS.map((p) => ({
            valeur: p as string,
            nom: `${PHASES_RESUME[p].numero}. ${PHASES_RESUME[p].nom}`,
            description: PHASES_RESUME[p].promesse,
          })),
          { valeur: "transverse", nom: "Transverses", description: "Utiles tout au long de la mission." },
        ]}
        filtres={[
          {
            cle: "type",
            nom: "Type",
            options: Object.entries(TYPES_TEMPLATE).map(([valeur, nom]) => ({ valeur, nom })),
          },
          {
            cle: "format",
            nom: "Format",
            options: Object.entries(FORMATS_TEMPLATE).map(([valeur, nom]) => ({ valeur, nom })),
          },
        ]}
      />
    </>
  );
}
