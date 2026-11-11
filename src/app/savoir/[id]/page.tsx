import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlocRail, LiensPhases, ListeLiens, MiseEnPageDocument, Sommaire } from "@/components/Document";
import { Markdown } from "@/components/Markdown";
import { EnTetePage, Pastille } from "@/components/ui";
import { TYPES_SAVOIR } from "@/data/referentiels";
import { getFicheSavoir, savoir } from "@/lib/content";

export function generateStaticParams() {
  return savoir.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps<"/savoir/[id]">): Promise<Metadata> {
  const s = getFicheSavoir((await params).id);
  return s ? { title: s.titre, description: s.resume } : {};
}

export default async function PageFicheSavoir({ params }: PageProps<"/savoir/[id]">) {
  const s = getFicheSavoir((await params).id);
  if (!s) notFound();

  const voisins = savoir.filter((x) => x.type === s.type && x.id !== s.id).slice(0, 6);

  return (
    <MiseEnPageDocument
      rail={
        <>
          <Sommaire titres={s.titres} />
          {s.phases.length > 0 && (
            <BlocRail titre="Phases concernées">
              <LiensPhases phases={s.phases} />
            </BlocRail>
          )}
          {voisins.length > 0 && (
            <BlocRail titre={`Autres ${TYPES_SAVOIR[s.type].pluriel.toLowerCase()}`}>
              <ListeLiens section="savoir" elements={voisins} />
            </BlocRail>
          )}
        </>
      }
    >
      <EnTetePage
        fil={[{ href: "/savoir", nom: "Savoir terrain" }]}
        surtitre={TYPES_SAVOIR[s.type].nom}
        titre={s.titre}
        chapo={s.resume}
      >
        {(s.secteur || s.date) && (
          <div className="flex flex-wrap items-center gap-1.5">
            {s.secteur && <Pastille>{s.secteur}</Pastille>}
            {s.date && <Pastille>{s.date}</Pastille>}
          </div>
        )}
      </EnTetePage>
      <Markdown>{s.corps}</Markdown>
    </MiseEnPageDocument>
  );
}
