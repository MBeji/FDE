import type { Metadata } from "next";
import { NavigateurSituations } from "@/components/situations/NavigateurSituations";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Par situation",
  description:
    "Ce qu'il faut ouvrir, et dans quel ordre, selon la situation du moment : préparer une mission, réaliser un diagnostic, concevoir, transférer, partager un retour d'expérience.",
};

export default function PageSituations() {
  return (
    <>
      <EnTetePage
        surtitre="Démarrer"
        titre="Que faites-vous en ce moment ?"
        chapo="Choisissez votre situation : le portail vous dit par où commencer, dans quel ordre avancer et quelles ressources garder sous la main. Chaque étape renvoie vers la page précise qui permet d'agir."
      />
      <NavigateurSituations />
    </>
  );
}
