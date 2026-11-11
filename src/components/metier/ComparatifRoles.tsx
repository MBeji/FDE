"use client";

import { useState } from "react";
import { Handshake } from "lucide-react";
import { SectionMetier } from "@/components/metier/commun";
import { COMPARATIF, ROLES, type RoleId } from "@/data/metier";
import { cn } from "@/lib/cn";

const AUTRES_ROLES = ROLES.filter((r) => r.id !== "fde");

export function ComparatifRoles() {
  const [compare, setCompare] = useState<Exclude<RoleId, "fde">>("developpeur");
  const roleCompare = ROLES.find((r) => r.id === compare) ?? AUTRES_ROLES[0];

  return (
    <SectionMetier
      id="comparatif"
      surtitre="2 · Positionnement"
      titre="Le FDE et les autres rôles"
      description="Le FDE complète ces métiers, il ne les remplace pas. La comparaison sert à clarifier, dès le cadrage, qui porte quoi dans l'équipe mixte."
    >
      {/* Écrans larges : tableau complet. */}
      <div className="hidden overflow-x-auto rounded-xl border border-line bg-surface shadow-card lg:block">
        <table className="w-full border-collapse text-left text-[0.84rem]">
          <caption className="sr-only">Comparaison du FDE avec le développeur, le consultant, l&apos;architecte et le chef de projet</caption>
          <thead>
            <tr className="border-b border-line bg-surface-2">
              <th scope="col" className="w-[13%] p-3 font-semibold text-ink-3">
                Dimension
              </th>
              {ROLES.map((r) => (
                <th
                  key={r.id}
                  scope="col"
                  className={cn("p-3 font-semibold", r.id === "fde" ? "bg-accent-soft text-accent" : "text-ink")}
                >
                  {r.nom}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARATIF.map((d) => (
              <tr key={d.id} className="border-b border-line align-top last:border-b-0">
                <th scope="row" className="p-3 font-semibold text-ink">
                  {d.nom}
                </th>
                {ROLES.map((r) => (
                  <td
                    key={r.id}
                    className={cn("p-3 leading-snug", r.id === "fde" ? "bg-accent-soft text-ink" : "text-ink-2")}
                  >
                    {d.valeurs[r.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile et tablette : le FDE face à un rôle choisi, en cartes empilées. */}
      <div className="lg:hidden">
        <div role="tablist" aria-label="Rôle à comparer au FDE" className="flex flex-wrap gap-1.5">
          {AUTRES_ROLES.map((r) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              id={`onglet-role-${r.id}`}
              aria-selected={compare === r.id}
              aria-controls="panneau-comparatif"
              onClick={() => setCompare(r.id as Exclude<RoleId, "fde">)}
              className={cn(
                "h-8 rounded-lg px-3 text-[0.82rem] font-medium",
                compare === r.id ? "bg-ink text-bg" : "border border-line bg-surface text-ink-2 hover:border-line-strong",
              )}
            >
              FDE / {r.nom}
            </button>
          ))}
        </div>
        <div
          id="panneau-comparatif"
          role="tabpanel"
          aria-labelledby={`onglet-role-${compare}`}
          className="mt-4 space-y-3"
        >
          {COMPARATIF.map((d) => (
            <div key={d.id} className="rounded-xl border border-line bg-surface p-4">
              <h3 className="text-[0.9rem] font-semibold text-ink">{d.nom}</h3>
              <dl className="mt-2 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg bg-accent-soft p-3">
                  <dt className="text-[0.72rem] font-semibold tracking-wide text-accent uppercase">FDE</dt>
                  <dd className="mt-0.5 text-[0.86rem] leading-snug text-ink">{d.valeurs.fde}</dd>
                </div>
                <div className="rounded-lg bg-surface-2 p-3">
                  <dt className="text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">{roleCompare.nom}</dt>
                  <dd className="mt-0.5 text-[0.86rem] leading-snug text-ink-2">{d.valeurs[compare]}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-8 flex items-center gap-2 text-[1.05rem] font-semibold text-ink">
        <Handshake className="size-4 text-accent" aria-hidden />
        Comment le FDE travaille avec chacun
      </h3>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {AUTRES_ROLES.map((r) => (
          <div key={r.id} className="rounded-xl border border-line bg-surface p-4">
            <h4 className="text-[0.9rem] font-semibold text-ink">Avec le {r.nom.toLowerCase()}</h4>
            <p className="mt-1 text-[0.87rem] leading-relaxed text-ink-2">{r.complementarite}</p>
          </div>
        ))}
      </div>
    </SectionMetier>
  );
}
