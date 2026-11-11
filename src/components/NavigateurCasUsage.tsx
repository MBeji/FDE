"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, ChevronDown, Plus, Search } from "lucide-react";
import { Bouton, Pastille, Vide } from "@/components/ui";
import { FONCTIONS, HORIZONS, LEVIERS, SECTEURS, SOLUTIONS } from "@/data/referentiels";
import type { CasUsage } from "@/data/types";
import { cn } from "@/lib/cn";
import { nouveauCas, stockPriorisation } from "@/lib/outils/priorisation";
import { useStock } from "@/lib/stockage";

function normaliser(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function Note({ libelle, valeur }: { libelle: string; valeur: number }) {
  return (
    <span className="flex items-center gap-1.5 text-[0.72rem] text-ink-3" title={`${libelle} : ${valeur} sur 5`}>
      {libelle}
      <span className="flex gap-0.5" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={cn("h-1.5 w-2.5 rounded-sm", i <= valeur ? "bg-series-1" : "bg-accent-soft")} />
        ))}
      </span>
      <span className="sr-only">{valeur} sur 5</span>
    </span>
  );
}

function Selecteur({
  libelle,
  valeur,
  options,
  onChange,
}: {
  libelle: string;
  valeur: string;
  options: Record<string, string>;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[0.72rem] font-medium text-ink-3">{libelle}</span>
      <select
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 rounded-lg border border-line bg-bg px-2.5 text-[0.84rem] text-ink outline-none hover:border-line-strong focus:border-accent"
      >
        <option value="">Tous</option>
        {Object.entries(options).map(([v, nom]) => (
          <option key={v} value={v}>
            {nom}
          </option>
        ))}
      </select>
    </label>
  );
}

export function NavigateurCasUsage({ cas }: { cas: CasUsage[] }) {
  const [requete, setRequete] = useState("");
  const [secteur, setSecteur] = useState("");
  const [fonction, setFonction] = useState("");
  const [solution, setSolution] = useState("");
  const [horizon, setHorizon] = useState("");
  const [ouvert, setOuvert] = useState<string | null>(null);
  const [priorisation, setPriorisation] = useStock(stockPriorisation);
  const dejaAjoutes = new Set(priorisation.cas.map((c) => c.titre));

  const visibles = useMemo(() => {
    const termes = normaliser(requete).split(/\s+/).filter(Boolean);
    return cas.filter((c) => {
      if (secteur && c.secteur !== secteur) return false;
      if (fonction && c.fonction !== fonction) return false;
      if (solution && c.solution !== solution) return false;
      if (horizon && c.horizon !== horizon) return false;
      if (!termes.length) return true;
      const texte = normaliser(`${c.titre} ${c.probleme} ${c.description} ${c.kpis.join(" ")}`);
      return termes.every((t) => texte.includes(t));
    });
  }, [cas, requete, secteur, fonction, solution, horizon]);

  return (
    <div>
      <div className="mb-6 grid gap-3 rounded-xl border border-line bg-surface p-3.5 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <label className="flex flex-col gap-1">
          <span className="text-[0.72rem] font-medium text-ink-3">Recherche</span>
          <span className="flex h-9 items-center gap-2 rounded-lg border border-line bg-bg px-2.5 focus-within:border-accent">
            <Search className="size-3.5 flex-none text-ink-3" aria-hidden />
            <input
              value={requete}
              onChange={(e) => setRequete(e.target.value)}
              placeholder="Mot-clé, indicateur…"
              className="w-full bg-transparent text-[0.84rem] outline-none placeholder:text-ink-3"
            />
          </span>
        </label>
        <Selecteur libelle="Secteur" valeur={secteur} options={SECTEURS} onChange={setSecteur} />
        <Selecteur libelle="Fonction" valeur={fonction} options={FONCTIONS} onChange={setFonction} />
        <Selecteur
          libelle="Type de solution"
          valeur={solution}
          options={Object.fromEntries(Object.entries(SOLUTIONS).map(([k, v]) => [k, v.nom]))}
          onChange={setSolution}
        />
        <Selecteur libelle="Horizon" valeur={horizon} options={HORIZONS} onChange={setHorizon} />
      </div>

      <p className="mb-3 text-[0.8rem] text-ink-3">
        {visibles.length} cas d&apos;usage sur {cas.length}
        {priorisation.cas.length > 0 && (
          <>
            {" · "}
            <Link href="/outils/priorisation" className="font-medium text-accent hover:underline">
              {priorisation.cas.length} dans votre atelier de priorisation
            </Link>
          </>
        )}
      </p>

      {!visibles.length && <Vide titre="Aucun cas d'usage">Élargissez les filtres.</Vide>}

      <ul className="flex flex-col gap-2.5">
        {visibles.map((c) => {
          const deplie = ouvert === c.id;
          const ajoute = dejaAjoutes.has(c.titre);
          return (
            <li key={c.id} id={c.id} className="scroll-mt-20 rounded-xl border border-line bg-surface shadow-card">
              <button
                type="button"
                onClick={() => setOuvert(deplie ? null : c.id)}
                aria-expanded={deplie}
                className="flex w-full items-start gap-4 p-4 text-left"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-1.5">
                    <Pastille>{SECTEURS[c.secteur]}</Pastille>
                    <Pastille>{FONCTIONS[c.fonction]}</Pastille>
                    <Pastille ton="accent">{SOLUTIONS[c.solution].nom}</Pastille>
                    <Pastille>{HORIZONS[c.horizon]}</Pastille>
                  </span>
                  <span className="mt-2 block text-[0.98rem] font-semibold text-ink">{c.titre}</span>
                  <span className="mt-1 block text-[0.87rem] leading-relaxed text-ink-2">{c.probleme}</span>
                  <span className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1">
                    <Note libelle="Valeur" valeur={c.valeur} />
                    <Note libelle="Faisabilité" valeur={c.faisabilite} />
                  </span>
                </span>
                <ChevronDown
                  className={cn("mt-1 size-4 flex-none text-ink-3 transition-transform", deplie && "rotate-180")}
                  aria-hidden
                />
              </button>
              {deplie && (
                <div className="border-t border-line p-4">
                  <p className="text-[0.9rem] leading-relaxed text-ink">{c.description}</p>
                  <dl className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-3">
                    {[
                      { titre: "Indicateurs de résultat", liste: c.kpis },
                      { titre: "Prérequis", liste: c.prerequis },
                      { titre: "Points de vigilance", liste: c.risques },
                    ].map((b) => (
                      <div key={b.titre}>
                        <dt className="surtitre mb-1.5">{b.titre}</dt>
                        <dd>
                          <ul className="flex flex-col gap-1">
                            {b.liste.map((x) => (
                              <li key={x} className="flex gap-2 text-[0.85rem] leading-snug text-ink-2">
                                <span className="mt-[0.45rem] size-1 flex-none rounded-full bg-line-strong" aria-hidden />
                                {x}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-3.5">
                    <Pastille>{SOLUTIONS[c.solution].barreau}</Pastille>
                    <Pastille>Autonomie de départ : L{c.autonomie}</Pastille>
                    {c.leviers.map((l) => (
                      <Pastille key={l}>{LEVIERS[l]}</Pastille>
                    ))}
                    <Bouton
                      taille="sm"
                      className="ml-auto"
                      disabled={ajoute}
                      onClick={() =>
                        setPriorisation((e) => ({
                          ...e,
                          cas: [...e.cas, nouveauCas(c.titre, c.valeur, c.faisabilite)],
                        }))
                      }
                    >
                      {ajoute ? <Check className="size-3.5" aria-hidden /> : <Plus className="size-3.5" aria-hidden />}
                      {ajoute ? "Dans votre priorisation" : "Ajouter à ma priorisation"}
                    </Bouton>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
