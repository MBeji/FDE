"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Pastille, Vide } from "@/components/ui";
import { CATEGORIES_GLOSSAIRE } from "@/data/referentiels";
import type { CategorieGlossaire, TermeGlossaire } from "@/data/types";
import { cn } from "@/lib/cn";

function normaliser(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function libelleLien(href: string): string {
  const [, section, id] = href.split("/");
  const noms: Record<string, string> = {
    frameworks: "Framework",
    templates: "Template",
    guides: "Guide",
    savoir: "Savoir terrain",
    methode: "Méthode",
    outils: "Outil",
  };
  return `${noms[section] ?? "Voir"}${id ? ` : ${id.replace(/-/g, " ")}` : ""}`;
}

export function ListeGlossaire({ termes, liensValides }: { termes: TermeGlossaire[]; liensValides: string[] }) {
  const [requete, setRequete] = useState("");
  const [categorie, setCategorie] = useState<CategorieGlossaire | "">("");
  const valides = useMemo(() => new Set(liensValides), [liensValides]);

  const visibles = useMemo(() => {
    const q = normaliser(requete.trim());
    return termes.filter((t) => {
      if (categorie && t.categorie !== categorie) return false;
      if (!q) return true;
      return normaliser(`${t.terme} ${t.alias ?? ""} ${t.definition}`).includes(q);
    });
  }, [termes, requete, categorie]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-line bg-surface p-3.5">
        <div className="flex items-center gap-2.5 rounded-lg border border-line bg-bg px-3 focus-within:border-accent">
          <Search className="size-4 flex-none text-ink-3" aria-hidden />
          <input
            value={requete}
            onChange={(e) => setRequete(e.target.value)}
            placeholder="Filtrer les termes…"
            aria-label="Filtrer les termes"
            className="h-9 flex-1 bg-transparent text-[0.875rem] outline-none placeholder:text-ink-3"
          />
          <span className="text-[0.75rem] text-ink-3 tabular-nums">
            {visibles.length} / {termes.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(Object.entries(CATEGORIES_GLOSSAIRE) as [CategorieGlossaire, string][]).map(([id, nom]) => (
            <button
              key={id}
              type="button"
              aria-pressed={categorie === id}
              onClick={() => setCategorie(categorie === id ? "" : id)}
              className={cn(
                "rounded-md border px-2 py-0.5 text-[0.78rem] transition-colors",
                categorie === id
                  ? "border-ink bg-ink font-medium text-bg"
                  : "border-line text-ink-2 hover:border-line-strong hover:text-ink",
              )}
            >
              {nom}
            </button>
          ))}
        </div>
      </div>

      {!visibles.length && <Vide titre="Aucun terme">Essayez un autre mot.</Vide>}

      <dl className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
        {visibles.map((t) => (
          <div
            key={t.id}
            id={t.id}
            className="grid scroll-mt-20 gap-x-8 gap-y-1.5 border-b border-line px-5 py-4 last:border-b-0 target:bg-accent-soft md:grid-cols-[15rem_1fr]"
          >
            <dt>
              <span className="text-[0.95rem] font-semibold text-ink">{t.terme}</span>
              {t.alias && <span className="mt-0.5 block text-[0.78rem] text-ink-3">{t.alias}</span>}
              <Pastille className="mt-2">{CATEGORIES_GLOSSAIRE[t.categorie]}</Pastille>
            </dt>
            <dd className="text-[0.9rem] leading-relaxed text-ink-2">
              {t.definition}
              {t.voir && t.voir.some((h) => valides.has(h)) && (
                <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {t.voir
                    .filter((h) => valides.has(h))
                    .map((h) => (
                      <Link key={h} href={h} className="text-[0.8rem] font-medium text-accent hover:underline">
                        {libelleLien(h)}
                      </Link>
                    ))}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
