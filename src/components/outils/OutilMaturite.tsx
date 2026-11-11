"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, FlaskConical } from "lucide-react";
import { Radar } from "@/components/charts/Radar";
import { ActionsResultat, fmt } from "@/components/outils/commun";
import { Bouton, Carte, Pastille, Vide, gererFlechesOnglets } from "@/components/ui";
import {
  DIMENSIONS_MATURITE,
  EXEMPLE_VOXALIS,
  NIVEAUX_MATURITE,
  niveauPourScore,
  type DimensionMaturite,
} from "@/data/maturite";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";

const stock = creerStock<Record<string, number>>("fde-atlas:outil:maturite:v1", {});

/** Libellés courts des dimensions, pour les axes du radar. */
/** Onglets dans l'ordre : les dimensions puis le résultat (index = étape). */
const ID_ONGLETS = [...DIMENSIONS_MATURITE.map((d) => d.id), "resultat"];

const NOMS_COURTS: Record<string, string> = {
  vision: "Vision",
  valeur: "Valeur",
  donnees: "Données",
  techno: "Technologie",
  talents: "Talents",
  organisation: "Organisation",
  agentique: "Agentique",
};

function scoreDimension(d: DimensionMaturite, reponses: Record<string, number>): number | null {
  const notes = d.questions.map((q) => reponses[q.id]).filter((n) => n !== undefined);
  return notes.length ? notes.reduce((s, n) => s + n, 0) / notes.length : null;
}

function recommandation(d: DimensionMaturite, score: number): string {
  if (score < 2.5) return d.recommandations.faible;
  if (score < 3.5) return d.recommandations.moyen;
  return d.recommandations.fort;
}

export function OutilMaturite() {
  const [reponses, setReponses] = useStock(stock);
  const [etape, setEtape] = useState(0);

  const total = DIMENSIONS_MATURITE.reduce((s, d) => s + d.questions.length, 0);
  const repondues = Object.keys(reponses).length;
  const scores = DIMENSIONS_MATURITE.map((d) => ({ d, score: scoreDimension(d, reponses) }));
  const notes = scores.filter((s) => s.score !== null) as { d: DimensionMaturite; score: number }[];
  const moyenne = notes.length ? notes.reduce((s, x) => s + x.score, 0) / notes.length : null;
  const niveau = moyenne !== null ? niveauPourScore(moyenne) : null;
  const maillonFaible = notes.length ? [...notes].sort((a, b) => a.score - b.score)[0] : null;
  const surResultat = etape === DIMENSIONS_MATURITE.length;
  const dimension = DIMENSIONS_MATURITE[etape];

  const markdown =
    moyenne !== null && niveau
      ? [
          "# Diagnostic de maturité AI-Native",
          "",
          `**Score global : ${fmt(moyenne, 1)} sur 5 — niveau ${niveau.niveau} « ${niveau.nom} »** (${repondues} réponses sur ${total})`,
          "",
          niveau.description,
          "",
          `**Ce que cela implique pour la mission** : ${niveau.implication}`,
          "",
          "| Dimension | Score | Niveau |",
          "| --- | --- | --- |",
          ...notes.map((x) => `| ${x.d.nom} | ${fmt(x.score, 1)} | ${niveauPourScore(x.score).nom} |`),
          "",
          maillonFaible &&
            `**Maillon faible : ${maillonFaible.d.nom}** (${fmt(maillonFaible.score, 1)}). C'est la dimension qui fixe le rythme de la transformation.`,
          "",
          "## Recommandations par dimension",
          "",
          ...[...notes]
            .sort((a, b) => a.score - b.score)
            .flatMap((x) => [`### ${x.d.nom} — ${fmt(x.score, 1)}`, "", recommandation(x.d, x.score), ""]),
          "## Détail des réponses",
          "",
          ...DIMENSIONS_MATURITE.flatMap((d) => [
            `**${d.nom}**`,
            "",
            ...d.questions
              .filter((q) => reponses[q.id])
              .map((q) => `- ${q.intitule} : ${reponses[q.id]} — ${q.niveaux[reponses[q.id] - 1]}`),
            "",
          ]),
        ]
          .filter((l): l is string => typeof l === "string")
          .join("\n")
      : "";

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-start gap-2">
        <div
          role="tablist"
          aria-label="Dimensions et résultat"
          onKeyDown={(e) => gererFlechesOnglets(e, ID_ONGLETS, ID_ONGLETS[etape], (id) => setEtape(ID_ONGLETS.indexOf(id)))}
          className="flex min-w-0 flex-1 basis-full items-start gap-1 sm:basis-auto"
        >
          <div className="defilement-fin fondu-droite flex min-w-0 flex-1 gap-1 overflow-x-auto lg:flex-wrap lg:overflow-visible lg:[mask-image:none] lg:pr-0">
            {DIMENSIONS_MATURITE.map((d, i) => {
              const faites = d.questions.filter((q) => reponses[q.id]).length;
              return (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  aria-selected={etape === i}
                  tabIndex={etape === i ? 0 : -1}
                  onClick={() => setEtape(i)}
                  className={cn(
                    "flex flex-none items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[0.8rem] font-medium whitespace-nowrap transition-colors",
                    etape === i ? "border-ink bg-ink text-bg" : "border-line bg-surface text-ink-2 hover:border-line-strong",
                  )}
                >
                  {d.nom}
                  <span className={cn("text-[0.68rem] tabular-nums", etape === i ? "opacity-70" : "text-ink-3")}>
                    {faites}/{d.questions.length}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Hors de la zone défilante : le résultat reste toujours visible. */}
          <button
            type="button"
            role="tab"
            aria-selected={surResultat}
            tabIndex={surResultat ? 0 : -1}
            onClick={() => setEtape(DIMENSIONS_MATURITE.length)}
            className={cn(
              "flex-none rounded-lg border px-2.5 py-1.5 text-[0.8rem] font-semibold whitespace-nowrap transition-colors",
              surResultat ? "border-accent bg-accent text-on-accent" : "border-accent-line bg-accent-soft text-accent-strong",
            )}
          >
            Résultat
          </button>
        </div>
        <Bouton
          taille="sm"
          onClick={() => {
            setReponses(EXEMPLE_VOXALIS);
            setEtape(DIMENSIONS_MATURITE.length);
          }}
        >
          <FlaskConical className="size-3.5" aria-hidden />
          Exemple Voxalis
        </Bouton>
      </div>

      {!surResultat ? (
        <div>
          <p className="mb-4 max-w-3xl text-[0.9rem] leading-relaxed text-ink-2">
            <strong className="font-semibold text-ink">{dimension.nom}.</strong> {dimension.description} Choisissez
            pour chaque ligne le niveau qui décrit la réalité observée, preuves à l&apos;appui, pas l&apos;intention.
          </p>
          <div className="flex flex-col gap-4">
            {dimension.questions.map((q) => (
              <Carte key={q.id} className="p-4">
                <h3 className="mb-3 text-[0.95rem] font-semibold text-ink">{q.intitule}</h3>
                <div role="radiogroup" aria-label={q.intitule} className="grid gap-2 md:grid-cols-5">
                  {q.niveaux.map((texte, i) => {
                    const choisi = reponses[q.id] === i + 1;
                    return (
                      <button
                        key={i}
                        type="button"
                        role="radio"
                        aria-checked={choisi}
                        onClick={() => setReponses((r) => ({ ...r, [q.id]: i + 1 }))}
                        className={cn(
                          "flex gap-2.5 rounded-lg border p-2.5 text-left transition-colors md:flex-col md:gap-1.5",
                          choisi ? "border-ink bg-surface-2" : "border-line hover:border-line-strong",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-6 flex-none items-center justify-center rounded-md text-[0.75rem] font-semibold",
                            choisi ? "bg-ink text-bg" : "bg-surface-2 text-ink-2",
                          )}
                        >
                          {i + 1}
                        </span>
                        <span className={cn("text-[0.8rem] leading-snug", choisi ? "text-ink" : "text-ink-2")}>{texte}</span>
                      </button>
                    );
                  })}
                </div>
              </Carte>
            ))}
          </div>
          <div className="mt-5 flex justify-between">
            <Bouton disabled={etape === 0} onClick={() => setEtape(etape - 1)}>
              <ArrowLeft className="size-4" aria-hidden />
              Précédent
            </Bouton>
            <Bouton variante="primaire" onClick={() => setEtape(etape + 1)}>
              {etape === DIMENSIONS_MATURITE.length - 1 ? "Voir le résultat" : "Dimension suivante"}
              <ArrowRight className="size-4" aria-hidden />
            </Bouton>
          </div>
        </div>
      ) : moyenne === null || !niveau ? (
        <Vide titre="Aucune réponse pour l'instant">
          Répondez aux questions d&apos;au moins une dimension, ou chargez l&apos;exemple Voxalis.
        </Vide>
      ) : (
        <div className="flex flex-col gap-5">
          <ActionsResultat
            outil="maturite"
            titre="Diagnostic de maturité AI-Native"
            resume={`Score ${fmt(moyenne, 1)} sur 5, niveau « ${niveau.nom} »${maillonFaible ? `, maillon faible : ${maillonFaible.d.nom}` : ""}`}
            markdown={markdown}
            donnees={reponses}
            onReinitialiser={() => {
              setReponses({});
              setEtape(0);
            }}
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <Carte className="p-5 sm:p-6">
              <p className="surtitre">Score global</p>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-[3.4rem] leading-none font-semibold tracking-tight text-ink">{fmt(moyenne, 1)}</span>
                <span className="text-[1rem] text-ink-3">sur 5</span>
              </p>
              <p className="mt-3 text-[1.05rem] font-semibold text-ink">
                Niveau {niveau.niveau} · {niveau.nom}
              </p>
              <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-2">{niveau.description}</p>
              <ol className="mt-4 flex gap-1" aria-label="Échelle de maturité">
                {NIVEAUX_MATURITE.map((n) => (
                  <li key={n.niveau} className="min-w-0 flex-1">
                    <span className={cn("block h-1.5 rounded-full", n.niveau <= niveau.niveau ? "bg-series-1" : "bg-accent-soft")} />
                    <span className={cn("mt-1.5 block text-[0.68rem] leading-tight break-words hyphens-auto", n.niveau === niveau.niveau ? "font-semibold text-ink" : "text-ink-3")}>
                      {n.nom}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-line pt-4 text-[0.9rem] leading-relaxed text-ink">
                <span className="font-semibold">Pour la mission : </span>
                {niveau.implication}
              </p>
              {repondues < total && (
                <p className="mt-3 text-[0.78rem] text-ink-3">
                  Résultat partiel : {repondues} réponses sur {total}.
                </p>
              )}
            </Carte>

            <Carte className="grid items-center gap-4 p-4 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] sm:p-5">
              <Radar titre="Profil de maturité par dimension" axes={notes.map((x) => ({ nom: x.d.nom, court: NOMS_COURTS[x.d.id], valeur: x.score }))} />
              <ul className="flex flex-col gap-2.5">
                {scores.map(({ d, score }) => (
                  <li key={d.id}>
                    <div className="flex items-baseline justify-between gap-3 text-[0.8rem]">
                      <span className={cn("text-ink", maillonFaible?.d.id === d.id && "font-semibold")}>{d.nom}</span>
                      <span className="font-semibold text-ink tabular-nums">{score === null ? "—" : fmt(score, 1)}</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-accent-soft">
                      <div className="h-full rounded-full bg-series-1" style={{ width: `${((score ?? 0) / 5) * 100}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </Carte>
          </div>

          {maillonFaible && (
            <div className="rounded-xl border border-warning/50 bg-warning-soft p-4 text-[0.9rem] leading-relaxed text-ink">
              <strong className="font-semibold">Maillon faible : {maillonFaible.d.nom}</strong> ({fmt(maillonFaible.score, 1)} sur 5).
              Le profil compte plus que la moyenne : c&apos;est la dimension la plus faible qui fixe le rythme de la
              transformation. Traitez-la dans la feuille de route avant d&apos;accélérer ailleurs.
            </div>
          )}

          <div>
            <h2 className="mb-3 text-[1.1rem] font-semibold text-ink">Recommandations, de la dimension la plus faible à la plus forte</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {[...notes]
                .sort((a, b) => a.score - b.score)
                .map(({ d, score }) => (
                  <Carte key={d.id} className="flex flex-col p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[0.95rem] font-semibold text-ink">{d.nom}</h3>
                      <Pastille>
                        {fmt(score, 1)} · {niveauPourScore(score).nom}
                      </Pastille>
                    </div>
                    <p className="mt-2 text-[0.87rem] leading-relaxed text-ink-2">{recommandation(d, score)}</p>
                    <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3">
                      {d.liens.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="text-[0.8rem] font-medium text-accent hover:underline">
                            {l.libelle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Carte>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
