"use client";

import { Download, Printer } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { Bouton } from "@/components/ui";
import { telecharger } from "@/lib/stockage";

/** Le Markdown est produit côté serveur et passé en prop, comme les données de la matrice. */
export function ExportRaci({ markdown }: { markdown: string }) {
  return (
    <div className="hors-impression flex flex-wrap items-center gap-1.5">
      <BoutonCopier texte={markdown} libelle="Copier en Markdown" />
      <Bouton taille="sm" onClick={() => telecharger("raci-design-build.md", markdown)}>
        <Download className="size-3.5" aria-hidden />
        Télécharger
      </Bouton>
      <Bouton taille="sm" onClick={() => window.print()}>
        <Printer className="size-3.5" aria-hidden />
        Imprimer
      </Bouton>
    </div>
  );
}
