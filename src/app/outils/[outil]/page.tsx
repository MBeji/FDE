import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { OutilAgentOuPas } from "@/components/outils/OutilAgentOuPas";
import { OutilMaturite } from "@/components/outils/OutilMaturite";
import { EnTetePage, Pastille } from "@/components/ui";
import { OUTILS, PHASES_RESUME } from "@/data/referentiels";

const COMPOSANTS: Record<string, ComponentType> = {
  maturite: OutilMaturite,
  "agent-ou-pas": OutilAgentOuPas,
};

export function generateStaticParams() {
  return OUTILS.filter((o) => COMPOSANTS[o.id]).map((o) => ({ outil: o.id }));
}

export async function generateMetadata({ params }: PageProps<"/outils/[outil]">): Promise<Metadata> {
  const o = OUTILS.find((x) => x.id === (await params).outil);
  return o ? { title: o.nom, description: o.resume } : {};
}

export default async function PageOutil({ params }: PageProps<"/outils/[outil]">) {
  const { outil } = await params;
  const definition = OUTILS.find((o) => o.id === outil);
  const Composant = COMPOSANTS[outil];
  if (!definition || !Composant) notFound();

  return (
    <>
      <EnTetePage fil={[{ href: "/outils", nom: "Ateliers" }]} surtitre="Atelier" titre={definition.nom} chapo={definition.resume}>
        <div className="flex flex-wrap gap-1.5">
          {definition.phases.map((p) => (
            <Pastille key={p}>
              {PHASES_RESUME[p].numero}. {PHASES_RESUME[p].nom}
            </Pastille>
          ))}
          <Pastille>{definition.duree}</Pastille>
        </div>
      </EnTetePage>
      <Composant />
    </>
  );
}
