"use client";

import Link from "next/link";
import { useState } from "react";
import { BookmarkPlus, Check, Download, RotateCcw } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { Bouton } from "@/components/ui";
import { ajouterArtefact, useMissions, type OutilId } from "@/lib/missions";
import { telecharger, useEstClient } from "@/lib/stockage";

/** Actions communes à tous les ateliers : copier, télécharger, enregistrer dans la mission active. */
export function ActionsResultat({
  outil,
  titre,
  resume,
  markdown,
  donnees,
  onReinitialiser,
}: {
  outil: OutilId;
  titre: string;
  resume: string;
  markdown: string;
  donnees: unknown;
  onReinitialiser?: () => void;
}) {
  const estClient = useEstClient();
  const { active } = useMissions();
  const [enregistre, setEnregistre] = useState(false);

  return (
    <div className="hors-impression flex flex-wrap items-center gap-1.5">
      {estClient && active ? (
        <Bouton
          variante="primaire"
          taille="sm"
          onClick={() => {
            ajouterArtefact(active.id, { outil, titre, resume, markdown, donnees });
            setEnregistre(true);
            setTimeout(() => setEnregistre(false), 2500);
          }}
        >
          {enregistre ? <Check className="size-3.5" aria-hidden /> : <BookmarkPlus className="size-3.5" aria-hidden />}
          {enregistre ? "Enregistré dans la mission" : "Enregistrer dans la mission"}
        </Bouton>
      ) : (
        <Link href="/missions" className="text-[0.8rem] font-medium text-accent hover:underline">
          Créer une mission pour y enregistrer ce résultat
        </Link>
      )}
      <BoutonCopier texte={markdown} libelle="Copier le Markdown" />
      <Bouton taille="sm" onClick={() => telecharger(`${outil}.md`, markdown)}>
        <Download className="size-3.5" aria-hidden />
        Télécharger
      </Bouton>
      {onReinitialiser && (
        <Bouton
          variante="discret"
          taille="sm"
          onClick={() => {
            if (window.confirm("Effacer la saisie en cours de cet atelier ?")) onReinitialiser();
          }}
        >
          <RotateCcw className="size-3.5" aria-hidden />
          Réinitialiser
        </Bouton>
      )}
    </div>
  );
}

/** Sélecteur de note de 1 à 5, sous forme de boutons radio compacts. */
export function Note5({
  valeur,
  onChange,
  libelle,
}: {
  valeur: number;
  onChange: (v: number) => void;
  libelle: string;
}) {
  return (
    <div role="radiogroup" aria-label={libelle} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={valeur === n}
          onClick={() => onChange(n)}
          className={
            valeur === n
              ? "size-7 rounded-md bg-ink text-[0.78rem] font-semibold text-bg"
              : "size-7 rounded-md border border-line text-[0.78rem] text-ink-2 hover:border-line-strong"
          }
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export const fmt = (n: number, decimales = 0) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: decimales, maximumFractionDigits: decimales });

/** Montant compact en euros : 1,2 M€, 350 k€, 800 €. */
export function euros(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return `${fmt(n / 1_000_000, abs >= 10_000_000 ? 0 : 1)} M€`;
  if (abs >= 1_000) return `${fmt(n / 1_000, 0)} k€`;
  return `${fmt(n, 0)} €`;
}
