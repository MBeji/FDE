import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { BlocRail, LiensPhases, ListeLiens, MiseEnPageDocument } from "@/components/Document";
import { Markdown } from "@/components/Markdown";
import { OngletsTemplate } from "@/components/OngletsTemplate";
import { EnTetePage, Pastille } from "@/components/ui";
import { FORMATS_TEMPLATE, TYPES_TEMPLATE } from "@/data/referentiels";
import { getFramework, getTemplate, guides, resoudre, templates } from "@/lib/content";

export function generateStaticParams() {
  return templates.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: PageProps<"/templates/[id]">): Promise<Metadata> {
  const t = getTemplate((await params).id);
  return t ? { title: t.titre, description: t.resume } : {};
}

export default async function PageTemplate({ params }: PageProps<"/templates/[id]">) {
  const t = getTemplate((await params).id);
  if (!t) notFound();

  const frameworksLies = resoudre(t.frameworks, getFramework);
  const guidesLies = guides.filter((g) => g.templates.includes(t.id));
  const memePhase = templates.filter((x) => x.phase === t.phase && x.id !== t.id);

  return (
    <MiseEnPageDocument
      rail={
        <>
          <BoutonCopilote
            brouillon={`Rédige un premier jet du livrable « ${t.titre} » pour ma mission, à partir du template du portail. Voici les éléments dont je dispose : `}
            className="self-start"
          >
            Rédiger avec le copilote
          </BoutonCopilote>
          <BlocRail titre="Phase">
            <LiensPhases phases={[t.phase]} />
          </BlocRail>
          {frameworksLies.length > 0 && (
            <BlocRail titre="Frameworks mobilisés">
              <ListeLiens section="frameworks" elements={frameworksLies} />
            </BlocRail>
          )}
          {guidesLies.length > 0 && (
            <BlocRail titre="Guides pratiques">
              <ListeLiens section="guides" elements={guidesLies} />
            </BlocRail>
          )}
          {memePhase.length > 0 && (
            <BlocRail titre="Dans la même phase">
              <ListeLiens section="templates" elements={memePhase} />
            </BlocRail>
          )}
        </>
      }
    >
      <EnTetePage
        fil={[{ href: "/templates", nom: "Templates & livrables" }]}
        surtitre={TYPES_TEMPLATE[t.type]}
        titre={t.titre}
        chapo={t.resume}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          <Pastille>{FORMATS_TEMPLATE[t.format]}</Pastille>
          <Pastille>Effort : {t.effort}</Pastille>
        </div>
      </EnTetePage>
      <OngletsTemplate
        id={t.id}
        templateBrut={t.template}
        exempleBrut={t.exemple}
        rendus={{
          template: <Markdown>{t.template}</Markdown>,
          exemple: <Markdown>{t.exemple}</Markdown>,
          "mode-emploi": <Markdown>{t.modeEmploi}</Markdown>,
        }}
      />
    </MiseEnPageDocument>
  );
}
