"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { Bouton, Pastille } from "@/components/ui";
import { cn } from "@/lib/cn";
import { telecharger } from "@/lib/stockage";
import type { Ressource } from "@/data/onboarding";

/** Élément cochable : case, libellé, ressource du portail et mise en avant éventuelle. */
export function ElementCochable({
  id,
  libelle,
  coche,
  onBasculer,
  ressource,
  prioritaire,
}: {
  id: string;
  libelle: string;
  coche: boolean;
  onBasculer: () => void;
  ressource?: Ressource;
  prioritaire?: boolean;
}) {
  const idCase = `case-${id}`;
  return (
    <li
      className={cn(
        "flex flex-wrap items-start gap-x-3 gap-y-1 rounded-lg px-2 py-2",
        prioritaire && !coche && "bg-accent-soft",
      )}
    >
      <input
        id={idCase}
        type="checkbox"
        checked={coche}
        onChange={onBasculer}
        className="mt-[0.2rem] size-4 flex-none cursor-pointer accent-accent"
      />
      <label
        htmlFor={idCase}
        className={cn(
          "min-w-[12rem] flex-1 cursor-pointer text-[0.9rem] leading-snug",
          coche ? "text-ink-3 line-through decoration-line-strong" : "text-ink",
        )}
      >
        {libelle}
        {prioritaire && !coche && (
          <Pastille ton="accent" className="ml-2 align-middle">
            Prioritaire pour votre profil
          </Pastille>
        )}
      </label>
      {ressource && <LienRessource ressource={ressource} />}
    </li>
  );
}

export function LienRessource({ ressource, className }: { ressource: Ressource; className?: string }) {
  return (
    <Link
      href={ressource.href}
      className={cn(
        "inline-flex flex-none items-center gap-0.5 text-[0.8rem] font-medium text-accent hover:underline",
        className,
      )}
    >
      {ressource.libelle}
      <ArrowUpRight className="size-3" aria-hidden />
    </Link>
  );
}

/** Copier et télécharger un document Markdown construit au moment du clic. */
export function ActionsExport({
  nomFichier,
  construire,
  apercu,
}: {
  nomFichier: string;
  construire: () => string;
  /** Version du Markdown utilisée pour la copie (sans date). */
  apercu: string;
}) {
  return (
    <div className="hors-impression flex flex-wrap items-center gap-1.5">
      <Bouton variante="primaire" taille="sm" onClick={() => telecharger(nomFichier, construire())}>
        <Download className="size-3.5" aria-hidden />
        Exporter en Markdown
      </Bouton>
      <BoutonCopier texte={apercu} libelle="Copier le Markdown" />
    </div>
  );
}

export const pourcentage = (fait: number, total: number) => (total === 0 ? 0 : Math.round((fait / total) * 100));

/** Date du jour au format français ; à n'appeler que dans un gestionnaire d'événement. */
export function dateDuJour(): string {
  return new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
