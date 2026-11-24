"use client";

import { Download, FileCode } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { Bouton, classesBouton } from "@/components/ui";
import { telecharger } from "@/lib/stockage";

/** Copier, télécharger ou ouvrir le SKILL.md tel qu'un agent le charge. Le texte vient du serveur. */
export function ActionsSkill({ id, brut }: { id: string; brut: string }) {
  return (
    <div className="hors-impression flex flex-wrap items-center gap-1.5">
      <BoutonCopier texte={brut} libelle="Copier le SKILL.md" />
      <Bouton taille="sm" onClick={() => telecharger("SKILL.md", brut)}>
        <Download className="size-3.5" aria-hidden />
        Télécharger
      </Bouton>
      <a href={`/skills/${id}/SKILL.md`} className={classesBouton("discret", "sm")}>
        <FileCode className="size-3.5" aria-hidden />
        Fichier brut
      </a>
    </div>
  );
}
