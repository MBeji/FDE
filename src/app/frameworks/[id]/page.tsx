import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { BlocRail, LiensPhases, ListeLiens, MiseEnPageDocument, Sommaire } from "@/components/Document";
import { Markdown } from "@/components/Markdown";
import { EnTetePage, Pastille } from "@/components/ui";
import { CATEGORIES_FRAMEWORK, NIVEAUX } from "@/data/referentiels";
import {
  frameworks,
  getFramework,
  getTemplate,
  guides,
  minutesDeLecture,
  resoudre,
} from "@/lib/content";

export function generateStaticParams() {
  return frameworks.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: PageProps<"/frameworks/[id]">): Promise<Metadata> {
  const f = getFramework((await params).id);
  return f ? { title: f.titre, description: f.resume } : {};
}

export default async function PageFramework({ params }: PageProps<"/frameworks/[id]">) {
  const f = getFramework((await params).id);
  if (!f) notFound();

  const templatesLies = resoudre(f.templates, getTemplate);
  const frameworksLies = resoudre(f.lies, getFramework);
  const guidesLies = guides.filter((g) => g.frameworks.includes(f.id));

  return (
    <MiseEnPageDocument
      rail={
        <>
          <BoutonCopilote
            brouillon={`Aide-moi à appliquer le framework « ${f.titre} » à ma mission. `}
            className="self-start"
          >
            L&apos;appliquer à ma mission
          </BoutonCopilote>
          <Sommaire titres={f.titres} />
          <BlocRail titre="Phases">
            <LiensPhases phases={f.phases} />
          </BlocRail>
          {templatesLies.length > 0 && (
            <BlocRail titre="Templates associés">
              <ListeLiens section="templates" elements={templatesLies} />
            </BlocRail>
          )}
          {guidesLies.length > 0 && (
            <BlocRail titre="Guides pratiques">
              <ListeLiens section="guides" elements={guidesLies} />
            </BlocRail>
          )}
          {frameworksLies.length > 0 && (
            <BlocRail titre="Frameworks connexes">
              <ListeLiens section="frameworks" elements={frameworksLies} />
            </BlocRail>
          )}
        </>
      }
    >
      <EnTetePage
        fil={[{ href: "/frameworks", nom: "Frameworks" }]}
        surtitre={CATEGORIES_FRAMEWORK[f.categorie]?.nom}
        titre={f.titre}
        chapo={f.resume}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          <Pastille>Origine : {f.origine}</Pastille>
          <Pastille>{NIVEAUX[f.niveau]}</Pastille>
          <Pastille>{minutesDeLecture(f.mots)} min de lecture</Pastille>
        </div>
      </EnTetePage>
      <Markdown>{f.corps}</Markdown>
    </MiseEnPageDocument>
  );
}
