import type { Metadata } from "next";
import { AutoEvaluation } from "@/components/onboarding/AutoEvaluation";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Compétences",
  description: "Le référentiel de compétences des FDE, l'auto-évaluation, la grille de readiness client et le plan de progression.",
};

export default function PageCompetences() {
  return (
    <>
      <EnTetePage
        surtitre="Progression"
        titre="Référentiel de compétences"
        chapo="Dix-huit compétences en quatre familles, décrites sur quatre niveaux par des comportements observables. Situez-vous, voyez si vous êtes prêt à intervenir seul chez un client et obtenez un plan de progression relié aux ressources du portail."
      />
      <AutoEvaluation />
    </>
  );
}
