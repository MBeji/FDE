"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { CarteLien, Pastille, Vide } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useEstClient } from "@/lib/stockage";

export interface ElementBibliotheque {
  href: string;
  titre: string;
  resume: string;
  /** Petites étiquettes affichées sur la carte. */
  pastilles: { nom: string; ton?: "neutre" | "accent" }[];
  /** Valeurs filtrables, par clé de filtre. */
  valeurs: Record<string, string[]>;
  /** Valeur de regroupement (clé d'un groupe). */
  groupe?: string;
  /** Texte additionnel pris en compte par la recherche. */
  motsCles?: string;
}

export interface FiltreBibliotheque {
  cle: string;
  nom: string;
  options: { valeur: string; nom: string }[];
}

function normaliser(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

/** Navigateur de bibliothèque : recherche plein texte, filtres, regroupement. */
export function Bibliotheque({
  elements,
  filtres,
  groupes,
  placeholder = "Filtrer…",
}: {
  elements: ElementBibliotheque[];
  filtres: FiltreBibliotheque[];
  groupes?: { valeur: string; nom: string; description?: string }[];
  placeholder?: string;
}) {
  const estClient = useEstClient();
  const [requete, setRequete] = useState("");
  const [choix, setChoix] = useState<Record<string, string> | null>(null);

  // Les filtres initiaux viennent de l'URL (ex. /templates?phase=cadrer), lue côté navigateur.
  const depuisUrl = useMemo(() => {
    if (!estClient) return {};
    const params = new URLSearchParams(window.location.search);
    const initial: Record<string, string> = {};
    for (const f of filtres) {
      const v = params.get(f.cle);
      if (v && f.options.some((o) => o.valeur === v)) initial[f.cle] = v;
    }
    return initial;
  }, [estClient, filtres]);

  const actifs = choix ?? depuisUrl;

  const visibles = useMemo(() => {
    const termes = normaliser(requete).split(/\s+/).filter(Boolean);
    return elements.filter((e) => {
      for (const [cle, valeur] of Object.entries(actifs)) {
        if (valeur && !e.valeurs[cle]?.includes(valeur)) return false;
      }
      if (!termes.length) return true;
      const texte = normaliser(`${e.titre} ${e.resume} ${e.motsCles ?? ""}`);
      return termes.every((t) => texte.includes(t));
    });
  }, [elements, actifs, requete]);

  const filtreActif = Boolean(requete.trim()) || Object.values(actifs).some(Boolean);

  function basculer(cle: string, valeur: string) {
    setChoix({ ...actifs, [cle]: actifs[cle] === valeur ? "" : valeur });
  }

  const sections = groupes
    ? groupes
        .map((g) => ({ ...g, elements: visibles.filter((e) => e.groupe === g.valeur) }))
        .filter((g) => g.elements.length)
    : [{ valeur: "", nom: "", description: undefined, elements: visibles }];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-line bg-surface p-3.5">
        <div className="flex items-center gap-2.5 rounded-lg border border-line bg-bg px-3 focus-within:border-accent">
          <Search className="size-4 flex-none text-ink-3" aria-hidden />
          <input
            value={requete}
            onChange={(e) => setRequete(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="h-9 flex-1 bg-transparent text-[0.875rem] outline-none placeholder:text-ink-3"
          />
          <span className="flex-none text-[0.75rem] text-ink-3 tabular-nums">
            {visibles.length} / {elements.length}
          </span>
        </div>
        {filtres.map((f) => (
          <div key={f.cle} className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 w-20 flex-none text-[0.75rem] font-medium text-ink-3">{f.nom}</span>
            {f.options.map((o) => {
              const actif = actifs[f.cle] === o.valeur;
              return (
                <button
                  key={o.valeur}
                  type="button"
                  aria-pressed={actif}
                  onClick={() => basculer(f.cle, o.valeur)}
                  className={cn(
                    "rounded-md border px-2 py-0.5 text-[0.78rem] transition-colors",
                    actif
                      ? "border-ink bg-ink font-medium text-bg"
                      : "border-line text-ink-2 hover:border-line-strong hover:text-ink",
                  )}
                >
                  {o.nom}
                </button>
              );
            })}
          </div>
        ))}
        {filtreActif && (
          <button
            type="button"
            onClick={() => {
              setRequete("");
              setChoix({});
            }}
            className="flex items-center gap-1 self-start text-[0.78rem] font-medium text-accent hover:underline"
          >
            <X className="size-3" aria-hidden />
            Effacer les filtres
          </button>
        )}
      </div>

      {!visibles.length && (
        <Vide titre="Aucun résultat">Élargissez la recherche ou effacez les filtres.</Vide>
      )}

      <div className="flex flex-col gap-10">
        {sections.map((s) => (
          <section key={s.valeur}>
            {s.nom && (
              <div className="mb-3.5">
                <h2 className="text-[1.05rem] font-semibold tracking-tight text-ink">
                  {s.nom}
                  <span className="ml-2 text-[0.8rem] font-normal text-ink-3">{s.elements.length}</span>
                </h2>
                {s.description && <p className="mt-0.5 text-[0.875rem] text-ink-2">{s.description}</p>}
              </div>
            )}
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {s.elements.map((e) => (
                <CarteLien
                  key={e.href}
                  href={e.href}
                  titre={e.titre}
                  resume={e.resume}
                  pied={e.pastilles.map((p) => (
                    <Pastille key={p.nom} ton={p.ton}>
                      {p.nom}
                    </Pastille>
                  ))}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
