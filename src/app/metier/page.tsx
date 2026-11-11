import type { Metadata } from "next";
import { CharteFde } from "@/components/metier/CharteFde";
import { ComparatifRoles } from "@/components/metier/ComparatifRoles";
import { ReglesPool } from "@/components/metier/ReglesPool";
import { SectionRole } from "@/components/metier/SectionRole";
import { SituationsDelicates } from "@/components/metier/SituationsDelicates";
import { SommaireMetier } from "@/components/metier/SommaireMetier";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Le métier FDE",
  description:
    "Le rôle du Forward Deployed Engineer, sa place parmi les autres métiers, la charte du pool, les règles de fonctionnement et dix fiches réflexes pour les situations délicates.",
};

export default function PageMetier() {
  return (
    <>
      <div data-metier-masquable="">
        <EnTetePage
          surtitre="Le métier"
          titre="Être FDE : le rôle, la charte, les règles du pool"
          chapo="Ce dont un FDE répond, ce qui le distingue des métiers qu'il côtoie, les douze engagements que prend chaque membre du pool, et les réflexes à avoir quand une mission se tend. La posture au quotidien est détaillée dans le guide dédié ; cette page en fixe le contrat."
        />
        <SommaireMetier />
      </div>
      <div className="space-y-12">
        <SectionRole />
        <ComparatifRoles />
        <CharteFde />
        <ReglesPool />
        <SituationsDelicates />
      </div>
    </>
  );
}
