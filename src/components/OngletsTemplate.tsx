"use client";

import { useState, type ReactNode } from "react";
import { Check, Copy, Download, Printer } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { Bouton } from "@/components/ui";
import { cn } from "@/lib/cn";
import { remplirVariables, useMissions, variablesMission } from "@/lib/missions";
import { telecharger, useEstClient } from "@/lib/stockage";

type Onglet = "mode-emploi" | "template" | "exemple";

const ONGLETS: { id: Onglet; nom: string }[] = [
  { id: "template", nom: "Template vierge" },
  { id: "exemple", nom: "Exemple rempli" },
  { id: "mode-emploi", nom: "Mode d'emploi" },
];

export function BoutonCopier({ texte, libelle = "Copier" }: { texte: string; libelle?: string }) {
  const [copie, setCopie] = useState(false);
  return (
    <Bouton
      taille="sm"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(texte);
          setCopie(true);
          setTimeout(() => setCopie(false), 1800);
        } catch {
          // Presse-papiers indisponible (contexte non sécurisé) : rien à faire.
        }
      }}
    >
      {copie ? <Check className="size-3.5 text-good-ink" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
      {copie ? "Copié" : libelle}
    </Bouton>
  );
}

/** Aperçu d'un template : document vierge, exemple rempli et mode d'emploi. */
export function OngletsTemplate({
  id,
  templateBrut,
  exempleBrut,
  rendus,
}: {
  id: string;
  templateBrut: string;
  exempleBrut: string;
  /** Rendus serveur des trois sections. */
  rendus: Record<Onglet, ReactNode>;
}) {
  const [onglet, setOnglet] = useState<Onglet>("template");
  const estClient = useEstClient();
  const { active } = useMissions();
  const mission = estClient ? active : null;
  const templateRempli = mission ? remplirVariables(templateBrut, variablesMission(mission)) : templateBrut;
  const texteCourant = onglet === "exemple" ? exempleBrut : templateRempli;

  return (
    <div>
      <div className="hors-impression mb-4 flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label="Sections du template" className="flex rounded-lg border border-line bg-surface-2 p-0.5">
          {ONGLETS.map((o) => (
            <button
              key={o.id}
              type="button"
              role="tab"
              aria-selected={onglet === o.id}
              onClick={() => setOnglet(o.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-[0.82rem] font-medium transition-colors",
                onglet === o.id ? "bg-surface text-ink shadow-card" : "text-ink-2 hover:text-ink",
              )}
            >
              {o.nom}
            </button>
          ))}
        </div>
        {onglet !== "mode-emploi" && (
          <div className="flex flex-wrap items-center gap-1.5">
            <BoutonCopier texte={texteCourant} libelle="Copier le Markdown" />
            <Bouton
              taille="sm"
              onClick={() =>
                telecharger(`${id}${onglet === "exemple" ? "-exemple" : ""}.md`, texteCourant)
              }
            >
              <Download className="size-3.5" aria-hidden />
              Télécharger
            </Bouton>
            <Bouton taille="sm" onClick={() => window.print()}>
              <Printer className="size-3.5" aria-hidden />
              Imprimer
            </Bouton>
          </div>
        )}
      </div>

      {onglet === "template" && mission && (
        <p className="hors-impression mb-3 text-[0.82rem] text-ink-2">
          Pré-rempli avec la mission active : <strong className="font-semibold text-ink">{mission.client || mission.nom}</strong>.
        </p>
      )}

      <div role="tabpanel" className={onglet === "mode-emploi" ? "" : "feuille"}>
        {onglet === "template" && mission ? <Markdown>{templateRempli}</Markdown> : rendus[onglet]}
      </div>
    </div>
  );
}
