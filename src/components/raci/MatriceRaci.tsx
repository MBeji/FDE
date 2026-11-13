"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { CodeRaciPastille } from "@/components/raci/CodeRaci";
import { OngletsSegmentes } from "@/components/ui";
import type { CodeRaci, ColonneRaci, LigneResolue, RoleBinome } from "@/data/raci";
import type { PhaseId } from "@/data/types";

/* Ce composant reçoit ses données en props : la méthode complète (phases.ts) n'entre pas dans le bundle client. */

export interface PhaseResumee {
  id: PhaseId;
  numero: number;
  nom: string;
  ancre: string;
}

type Vue = "matrice" | RoleBinome;

const VUES: { id: Vue; nom: string }[] = [
  { id: "matrice", nom: "Matrice complète" },
  { id: "design", nom: "Responsable : Design" },
  { id: "build", nom: "Responsable : Build" },
];

const COLONNES: { id: ColonneRaci; court: string; long: string }[] = [
  { id: "design", court: "Design", long: "FDE Design" },
  { id: "build", court: "Build", long: "FDE Build" },
  { id: "client", court: "Client", long: "Client" },
];

const LIBELLE_TYPE: Record<LigneResolue["type"], string> = {
  activite: "Activité",
  livrable: "Livrable",
  jalon: "Jalon",
};

function responsable(code: CodeRaci) {
  return code === "A" || code === "R" || code === "AR";
}

function Ligne({ l, vue }: { l: LigneResolue; vue: Vue }) {
  const precisions = (["design", "build"] as const).filter((r) => l.precision?.[r] && (vue === "matrice" || vue === r));
  return (
    <tr id={vue === "matrice" ? l.ancre : undefined} className={cn("border-t border-line align-top", l.type === "jalon" && "bg-surface-2")}>
      <th scope="row" className="py-2.5 pr-2 pl-3 text-left font-normal sm:pl-4">
        <span className="block text-[0.68rem] font-medium tracking-wide text-ink-3 uppercase">{LIBELLE_TYPE[l.type]}</span>
        {l.template ? (
          <Link href={`/templates/${l.template}`} className="text-[0.88rem] leading-snug font-medium text-ink hover:text-accent hover:underline">
            {l.intitule}
          </Link>
        ) : (
          <span className={cn("text-[0.88rem] leading-snug text-ink", l.type === "jalon" ? "font-semibold" : "font-medium")}>
            {l.intitule}
          </span>
        )}
        {precisions.map((r) => (
          <span key={r} className="mt-1 block text-[0.8rem] leading-snug text-ink-2">
            <span className="font-medium text-ink">{r === "design" ? "Design" : "Build"} : </span>
            {l.precision?.[r]}
          </span>
        ))}
      </th>
      {COLONNES.map((c) => (
        <td key={c.id} className={cn("px-1 py-2.5 text-center", vue === c.id && "bg-accent-soft/50")}>
          <CodeRaciPastille code={l[c.id]} colonne={c.long} />
        </td>
      ))}
    </tr>
  );
}

export function MatriceRaci({ lignes, phases }: { lignes: LigneResolue[]; phases: PhaseResumee[] }) {
  const [phase, setPhase] = useState<PhaseId | "toutes">("toutes");
  const [vue, setVue] = useState<Vue>("matrice");

  const visibles = phases.filter((p) => phase === "toutes" || p.id === phase);
  const filtrer = (p: PhaseId) => lignes.filter((l) => l.phase === p && (vue === "matrice" || responsable(l[vue])));
  const total = visibles.reduce((n, p) => n + filtrer(p.id).length, 0);
  const nbA = vue === "matrice" ? 0 : visibles.reduce((n, p) => n + filtrer(p.id).filter((l) => l[vue] === "A" || l[vue] === "AR").length, 0);

  return (
    <div>
      <div className="hors-impression flex flex-col gap-3 rounded-xl border border-line bg-surface p-3 shadow-card sm:p-4">
        <div className="overflow-x-auto">
          <OngletsSegmentes onglets={VUES} valeur={vue} onChange={setVue} libelle="Vue de la matrice" prefixeId="raci" />
        </div>
        <div role="group" aria-label="Filtrer par phase" className="flex flex-wrap gap-1.5">
          {[{ id: "toutes" as const, numero: -1, nom: "Toutes les phases" }, ...phases].map((p) => {
            const actif = phase === p.id;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={actif}
                onClick={() => setPhase(p.id)}
                className={cn(
                  "rounded-md border px-2 py-1 text-[0.78rem] font-medium transition-colors",
                  actif ? "border-ink bg-ink text-bg" : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink",
                )}
              >
                {p.numero >= 0 ? `${p.numero}. ${p.nom}` : p.nom}
              </button>
            );
          })}
        </div>
        <p className="text-[0.8rem] text-ink-3" aria-live="polite">
          {vue === "matrice"
            ? `${total} lignes affichées.`
            : `${total} lignes dont le FDE ${vue === "design" ? "Design" : "Build"} est responsable, dont ${nbA} où il répond du résultat (A).`}
        </p>
      </div>

      <div id="raci-panneau" role="tabpanel" aria-labelledby={`raci-onglet-${vue}`} className="mt-5 space-y-6">
        {visibles.map((p) => {
          const ls = filtrer(p.id);
          return (
            <div key={p.id} id={p.ancre} className="scroll-mt-24 break-inside-avoid-page">
              <h3 className="mb-2 text-[0.98rem] font-semibold text-ink">
                Phase {p.numero} · {p.nom}
              </h3>
              {ls.length === 0 ? (
                <p className="rounded-lg border border-dashed border-line px-3 py-2 text-[0.85rem] text-ink-3">
                  Rien dans cette phase : le FDE {vue === "design" ? "Design" : "Build"} y est consulté ou informé.
                </p>
              ) : (
                <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
                  <table className="w-full table-fixed border-collapse">
                    <caption className="sr-only">
                      Matrice RACI de la phase {p.nom}
                    </caption>
                    <colgroup>
                      <col />
                      <col className="w-[3.25rem] sm:w-20" />
                      <col className="w-[3.25rem] sm:w-20" />
                      <col className="w-[3.25rem] sm:w-20" />
                    </colgroup>
                    <thead>
                      <tr className="bg-surface-2 text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">
                        <th scope="col" className="py-2 pr-2 pl-3 text-left sm:pl-4">
                          Élément de la méthode
                        </th>
                        {COLONNES.map((c) => (
                          <th key={c.id} scope="col" className={cn("px-1 py-2 text-center", vue === c.id && "text-accent")}>
                            {c.court}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ls.map((l) => (
                        <Ligne key={`${l.type}-${l.ref}`} l={l} vue={vue} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
