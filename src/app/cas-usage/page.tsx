import type { Metadata } from "next";
import { NavigateurCasUsage } from "@/components/NavigateurCasUsage";
import { EnTetePage } from "@/components/ui";
import { casUsage } from "@/data/cas-usage";

export const metadata: Metadata = { title: "Cas d'usage" };

export default function PageCasUsage() {
  return (
    <>
      <EnTetePage
        surtitre="Bibliothèque"
        titre="Cas d'usage par secteur"
        chapo="Un point de départ pour les ateliers d'idéation, pas un catalogue à déployer. Les notes de valeur et de faisabilité sont des ordres de grandeur typiques : recalibrez-les chez le client, puis envoyez les cas retenus dans l'atelier de priorisation."
      />
      <NavigateurCasUsage cas={casUsage} />
    </>
  );
}
