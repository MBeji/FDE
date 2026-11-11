import type { Metadata } from "next";
import { AssistantContribution } from "@/components/savoir/AssistantContribution";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contribuer au savoir terrain",
  description:
    "Rédiger une fiche de retour d'expérience, de pattern ou d'anti-pattern conforme, anonymisée et prête à être proposée par pull request.",
};

export default function PageContribuer() {
  return (
    <>
      <EnTetePage
        fil={[{ href: "/savoir", nom: "Savoir terrain" }]}
        surtitre="Capitalisation"
        titre="Contribuer au savoir terrain"
        chapo="Ce qu'une mission a appris ne sert au pool que s'il est écrit, anonymisé et relu. L'assistant impose la structure attendue, vérifie l'anonymisation d'un retour d'expérience et produit le fichier prêt pour la pull request."
      />
      <AssistantContribution />
    </>
  );
}
