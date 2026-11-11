import type { Metadata } from "next";
import { EncadreUsage, LegendeNiveaux, TableReferentiels } from "@/components/standards/EncadresStandards";
import { ReferentielStandards } from "@/components/standards/ReferentielStandards";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = { title: "Standards d'ingénierie" };

export default function PageStandards() {
  return (
    <>
      <EnTetePage
        surtitre="Référentiel"
        titre="Standards d'ingénierie"
        chapo="Les règles techniques qu'un pair doit pouvoir constater dans tout système livré par un FDE, en dix domaines. Obligatoire : non négociable chez un grand compte, tout écart est tracé et arbitré. Recommandé : attendu par défaut, l'écart se justifie par écrit. Contextuel : s'applique quand la condition écrite est remplie. Consultez-les en conception ; passez en mode revue pour évaluer un système à un jalon et exporter les écarts."
      />
      <div className="flex flex-col gap-10">
        <LegendeNiveaux />
        <EncadreUsage />
        <ReferentielStandards />
        <TableReferentiels />
      </div>
    </>
  );
}
