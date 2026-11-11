import type { Metadata } from "next";
import { Bibliotheque, type ElementBibliotheque } from "@/components/Bibliotheque";
import { EnTetePage } from "@/components/ui";
import { CATEGORIES_FRAMEWORK, NIVEAUX, PHASE_IDS, PHASES_RESUME } from "@/data/referentiels";
import { frameworks } from "@/lib/content";

export const metadata: Metadata = { title: "Frameworks" };

export default function PageFrameworks() {
  const elements: ElementBibliotheque[] = frameworks.map((f) => ({
    href: `/frameworks/${f.id}`,
    titre: f.titre,
    resume: f.resume,
    groupe: f.categorie,
    pastilles: [{ nom: f.origine.split(",")[0] }, ...(f.niveau === "avance" ? [{ nom: "Avancé" }] : [])],
    valeurs: { categorie: [f.categorie], phase: f.phases, niveau: [f.niveau] },
    motsCles: `${f.tags.join(" ")} ${f.origine}`,
  }));

  return (
    <>
      <EnTetePage
        surtitre="Bibliothèque"
        titre="Frameworks et méthodes"
        chapo="Les cadres de pensée que nous mobilisons en mission, des classiques du conseil en stratégie à l'ingénierie des systèmes d'agents. Chaque fiche dit quand l'utiliser, comment l'appliquer pas à pas, et les pièges à éviter."
      />
      <Bibliotheque
        elements={elements}
        placeholder="Filtrer les frameworks…"
        groupes={Object.entries(CATEGORIES_FRAMEWORK).map(([valeur, c]) => ({
          valeur,
          nom: c.nom,
          description: c.description,
        }))}
        filtres={[
          {
            cle: "phase",
            nom: "Phase",
            options: PHASE_IDS.map((p) => ({
              valeur: p,
              nom: `${PHASES_RESUME[p].numero}. ${PHASES_RESUME[p].nom}`,
            })),
          },
          {
            cle: "niveau",
            nom: "Niveau",
            options: Object.entries(NIVEAUX).map(([valeur, nom]) => ({ valeur, nom })),
          },
        ]}
      />
    </>
  );
}
