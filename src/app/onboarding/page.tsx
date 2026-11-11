import type { Metadata } from "next";
import { ParcoursOnboarding } from "@/components/onboarding/ParcoursOnboarding";
import { EnTetePage } from "@/components/ui";

export const metadata: Metadata = {
  title: "Onboarding",
  description: "Le parcours d'intégration des FDE : cinq étapes, exercices pratiques sur le cas Voxalis, plan 30 / 60 / 90 jours et mentorat.",
};

export default function PageOnboarding() {
  return (
    <>
      <EnTetePage
        surtitre="Intégration"
        titre="Devenir FDE autonome en 90 jours"
        chapo="Comprendre le métier, acquérir les fondamentaux, pratiquer sur le cas Voxalis, observer une mission réelle, puis tenir un périmètre seul. Le parcours, les durées et les rituels sont un cadre proposé, à ajuster par la direction du pool ; votre avancement reste dans ce navigateur et se valide avec votre mentor."
      />
      <ParcoursOnboarding />
    </>
  );
}
