"use client";

import Link from "next/link";
import { useMemo } from "react";
import { AlertTriangle, ChevronDown, Clock, MessageSquareQuote, Search, XCircle } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { SectionMetier } from "@/components/metier/commun";
import { Bouton, CLASSES_SAISIE, Vide } from "@/components/ui";
import { SITUATIONS, situationEnMarkdown, type SituationDelicate } from "@/data/metier";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";

const stockSituations = creerStock<{ recherche: string; ouvertes: string[] }>("fde-atlas:metier:v1", {
  recherche: "",
  ouvertes: [],
});

function normaliser(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function texteRecherche(s: SituationDelicate) {
  return normaliser(
    [s.titre, s.enjeu, s.formulation, s.motsCles, ...s.actions48h, ...s.eviter].join(" "),
  );
}

const INDEX = SITUATIONS.map((s) => ({ s, texte: texteRecherche(s) }));

function Fiche({
  s,
  ouverte,
  onBasculer,
}: {
  s: SituationDelicate;
  ouverte: boolean;
  onBasculer: () => void;
}) {
  const idPanneau = `situation-${s.id}`;
  return (
    <li className="rounded-xl border border-line bg-surface shadow-card">
      <h3>
        <button
          type="button"
          aria-expanded={ouverte}
          aria-controls={idPanneau}
          onClick={onBasculer}
          className="flex w-full items-start justify-between gap-3 rounded-xl p-4 text-left hover:bg-surface-2"
        >
          <span>
            <span className="block text-[0.95rem] font-semibold text-ink">{s.titre}</span>
            {!ouverte && <span className="mt-1 line-clamp-2 block text-[0.84rem] text-ink-2">{s.enjeu}</span>}
          </span>
          <ChevronDown
            className={cn("mt-0.5 size-4 flex-none text-ink-3 transition-transform", ouverte && "rotate-180")}
            aria-hidden
          />
        </button>
      </h3>
      {ouverte && (
        <div id={idPanneau} className="space-y-4 border-t border-line px-4 pt-4 pb-4">
          <div>
            <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide text-warning-ink uppercase">
              <AlertTriangle className="size-3.5" aria-hidden />
              Ce qui se joue
            </p>
            <p className="mt-1 text-[0.88rem] leading-relaxed text-ink">{s.enjeu}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide text-ink-3 uppercase">
                <Clock className="size-3.5" aria-hidden />
                Dans les 48 heures
              </p>
              <ol className="mt-1.5 space-y-1.5">
                {s.actions48h.map((a, i) => (
                  <li key={a} className="flex gap-2 text-[0.87rem] leading-snug text-ink">
                    <span className="flex size-5 flex-none items-center justify-center rounded-full bg-accent-soft text-[0.7rem] font-semibold text-accent">
                      {i + 1}
                    </span>
                    {a}
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-4">
              <figure className="rounded-lg border border-accent-line bg-accent-soft p-3">
                <figcaption className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide text-accent uppercase">
                  <MessageSquareQuote className="size-3.5" aria-hidden />
                  À dire
                </figcaption>
                <blockquote className="mt-1 text-[0.88rem] leading-relaxed text-ink">{s.formulation}</blockquote>
              </figure>
              <div className="rounded-lg bg-critical-soft p-3">
                <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide text-critical-ink uppercase">
                  <XCircle className="size-3.5" aria-hidden />
                  À éviter
                </p>
                <ul className="mt-1 space-y-1">
                  {s.eviter.map((e) => (
                    <li key={e} className="text-[0.85rem] leading-snug text-ink">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-3 border-t border-line pt-3">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-[0.75rem] font-medium text-ink-3">À ouvrir</span>
              {s.ressources.map((r) => (
                <Link key={r.href} href={r.href} className="text-[0.82rem] font-medium text-accent hover:underline">
                  {r.libelle}
                </Link>
              ))}
            </div>
            <BoutonCopier texte={situationEnMarkdown(s)} libelle="Copier la fiche" />
          </div>
        </div>
      )}
    </li>
  );
}

export function SituationsDelicates() {
  const [etat, setEtat] = useStock(stockSituations);
  const { recherche, ouvertes } = etat;

  const visibles = useMemo(() => {
    const termes = normaliser(recherche).split(/\s+/).filter(Boolean);
    return INDEX.filter(({ texte }) => termes.every((t) => texte.includes(t))).map(({ s }) => s);
  }, [recherche]);

  const basculer = (id: string) =>
    setEtat((p) => ({
      ...p,
      ouvertes: p.ouvertes.includes(id) ? p.ouvertes.filter((o) => o !== id) : [...p.ouvertes, id],
    }));

  const toutesOuvertes = visibles.length > 0 && visibles.every((s) => ouvertes.includes(s.id));

  return (
    <SectionMetier
      id="situations"
      surtitre="5 · Fiches réflexes"
      titre="Situations délicates"
      description={
        <>
          Dix situations que tout FDE rencontre. Pour chacune : ce qui se joue, quoi faire dans les 48 heures, une
          formulation prête à dire et ce qu&apos;il faut éviter. Pour une mission déjà en difficulté, ouvrez{" "}
          <Link href="/guides/redresser-mission" className="text-accent hover:underline">
            Redresser une mission
          </Link>
          ; pour les réticences du terrain,{" "}
          <Link href="/guides/gerer-resistances" className="text-accent hover:underline">
            Gérer les résistances
          </Link>
          .
        </>
      }
    >
      <div className="mb-4 flex flex-wrap items-end gap-3">
        <label className="flex min-w-0 flex-1 basis-64 flex-col gap-1.5">
          <span className="text-[0.8rem] font-medium text-ink">Rechercher une situation</span>
          <span className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-3" aria-hidden />
            <input
              type="search"
              value={recherche}
              onChange={(e) => setEtat((p) => ({ ...p, recherche: e.target.value }))}
              placeholder="Ex. : données, sponsor, incident, chiffres…"
              className={cn(CLASSES_SAISIE, "pl-9")}
            />
          </span>
        </label>
        <Bouton
          taille="md"
          disabled={visibles.length === 0}
          onClick={() =>
            setEtat((p) => ({
              ...p,
              ouvertes: toutesOuvertes
                ? p.ouvertes.filter((o) => !visibles.some((s) => s.id === o))
                : Array.from(new Set([...p.ouvertes, ...visibles.map((s) => s.id)])),
            }))
          }
        >
          {toutesOuvertes ? "Tout replier" : "Tout déplier"}
        </Bouton>
      </div>
      <p className="mb-3 text-[0.8rem] text-ink-3" aria-live="polite">
        {visibles.length} fiche{visibles.length > 1 ? "s" : ""} sur {SITUATIONS.length}
      </p>
      {visibles.length === 0 ? (
        <Vide titre="Aucune situation ne correspond">
          Essayez un autre mot, ou ouvrez le guide{" "}
          <Link href="/guides/redresser-mission" className="text-accent hover:underline">
            Redresser une mission
          </Link>
          .
        </Vide>
      ) : (
        <ul className="space-y-2.5">
          {visibles.map((s) => (
            <Fiche key={s.id} s={s} ouverte={ouvertes.includes(s.id)} onBasculer={() => basculer(s.id)} />
          ))}
        </ul>
      )}
    </SectionMetier>
  );
}
