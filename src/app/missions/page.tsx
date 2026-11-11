import type { Metadata } from "next";
import { PortefeuilleMissions } from "@/components/missions/PortefeuilleMissions";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = { title: "Mes missions" };

export default function PageMissions() {
  return (
    <>
      <EnTetePage
        surtitre="Piloter"
        titre="Mes missions"
        chapo="Chaque mission suit le Parcours AI-Native : activités, livrables, jalons, registre de valeur et journal. Les données restent dans ce navigateur ; rien n'est envoyé à un serveur, sauf ce que vous choisissez de transmettre au copilote."
      />
      <PortefeuilleMissions />
    </>
  );
}
