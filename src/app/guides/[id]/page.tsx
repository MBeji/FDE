import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { BlocRail, LiensPhases, ListeLiens, MiseEnPageDocument, Sommaire } from "@/components/Document";
import { Markdown } from "@/components/Markdown";
import { EnTetePage, Pastille } from "@/components/ui";
import { NIVEAUX, PHASE_IDS } from "@/data/referentiels";
import { getFramework, getGuide, getTemplate, guides, resoudre } from "@/lib/content";

export function generateStaticParams() {
  return guides.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[id]">): Promise<Metadata> {
  const g = getGuide((await params).id);
  return g ? { title: g.titre, description: g.resume } : {};
}

export default async function PageGuide({ params }: PageProps<"/guides/[id]">) {
  const g = getGuide((await params).id);
  if (!g) notFound();

  const frameworksLies = resoudre(g.frameworks, getFramework);
  const templatesLies = resoudre(g.templates, getTemplate);

  return (
    <MiseEnPageDocument
      rail={
        <>
          <BoutonCopilote
            brouillon={`À partir du guide « ${g.titre} », aide-moi à préparer `}
            className="self-start"
          />
          <Sommaire titres={g.titres} />
          {g.phases.length < PHASE_IDS.length && (
            <BlocRail titre="Phases">
              <LiensPhases phases={g.phases} />
            </BlocRail>
          )}
          {templatesLies.length > 0 && (
            <BlocRail titre="Templates à utiliser">
              <ListeLiens section="templates" elements={templatesLies} />
            </BlocRail>
          )}
          {frameworksLies.length > 0 && (
            <BlocRail titre="Frameworks mobilisés">
              <ListeLiens section="frameworks" elements={frameworksLies} />
            </BlocRail>
          )}
        </>
      }
    >
      <EnTetePage
        fil={[{ href: "/guides", nom: "Guides pratiques" }]}
        surtitre="Guide pratique"
        titre={g.titre}
        chapo={g.resume}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          <Pastille>{g.duree} de lecture</Pastille>
          <Pastille>{NIVEAUX[g.niveau]}</Pastille>
        </div>
      </EnTetePage>
      <Markdown>{g.corps}</Markdown>
    </MiseEnPageDocument>
  );
}
