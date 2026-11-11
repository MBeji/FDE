"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, FlaskConical, Plus, Trash2 } from "lucide-react";
import { Matrice } from "@/components/charts/Matrice";
import { ActionsResultat, Note5, fmt } from "@/components/outils/commun";
import { Bouton, CLASSES_SAISIE, Carte, Pastille, Vide } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  CRITERES_FAISABILITE,
  CRITERES_VALEUR,
  DECISIONS,
  ETAT_PRIORISATION_INITIAL,
  QUADRANTS,
  nouveauCas,
  quadrant,
  scores,
  stockPriorisation,
  type CasPriorise,
  type Decision,
  type EtatPriorisation,
} from "@/lib/outils/priorisation";
import { useStock } from "@/lib/stockage";

/** Le portefeuille du cas fil rouge : notes globales reprises du guide. */
const EXEMPLE: [string, number, number, Decision, string][] = [
  ["Qualification et routage automatiques des tickets", 4.2, 4.5, "retenu", "Gain rapide"],
  ["Diagnostic technique automatisé", 4.6, 3.6, "retenu", "Cœur du dispositif"],
  ["Résolution autonome des 12 motifs récurrents", 4.8, 3.0, "retenu", "Pari structurant"],
  ["Communication proactive vers le client", 3.6, 4.2, "retenu", "Gain rapide"],
  ["Assistant de l'expert N2", 3.4, 4.4, "retenu", "Gain rapide"],
  ["Détection prédictive des pannes", 4.4, 2.0, "differe", "Données insuffisantes"],
  ["Voicebot de premier niveau", 3.0, 2.4, "ecarte", "Valeur et faisabilité trop faibles"],
  ["Génération automatique d'avoirs", 2.8, 2.6, "ecarte", "Risque financier"],
];

function exemple(): EtatPriorisation {
  return {
    ...ETAT_PRIORISATION_INITIAL,
    cas: EXEMPLE.map(([titre, v, f, decision, note]) => {
      const c = nouveauCas(titre);
      for (const k of Object.keys(c.valeur) as (keyof CasPriorise["valeur"])[]) c.valeur[k] = v;
      for (const k of Object.keys(c.faisabilite) as (keyof CasPriorise["faisabilite"])[]) c.faisabilite[k] = f;
      return { ...c, decision, note };
    }),
  };
}

export function OutilPriorisation() {
  const [etat, setEtat] = useStock(stockPriorisation);
  const [titre, setTitre] = useState("");
  const [ouvert, setOuvert] = useState<string | null>(null);
  const [poidsOuverts, setPoidsOuverts] = useState(false);

  const classes = etat.cas
    .map((c) => ({ c, ...scores(c, etat) }))
    .sort((a, b) => b.valeur + b.faisabilite - (a.valeur + a.faisabilite))
    .map((x, i) => ({ ...x, numero: i + 1, quadrant: quadrant(x.valeur, x.faisabilite) }));

  const maj = (id: string, f: (c: CasPriorise) => CasPriorise) =>
    setEtat((e) => ({ ...e, cas: e.cas.map((c) => (c.id === id ? f(c) : c)) }));

  function ajouter() {
    if (!titre.trim()) return;
    const c = nouveauCas(titre.trim());
    setEtat((e) => ({ ...e, cas: [...e.cas, c] }));
    setTitre("");
    setOuvert(c.id);
  }

  const retenus = classes.filter((x) => x.c.decision === "retenu");
  const markdown = [
    "# Portefeuille priorisé de cas d'usage",
    "",
    `${classes.length} cas d'usage notés, ${retenus.length} retenus.`,
    "",
    "| N° | Cas d'usage | Valeur | Faisabilité | Quadrant | Décision | Motif |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...classes.map(
      (x) =>
        `| ${x.numero} | ${x.c.titre} | ${fmt(x.valeur, 1)} | ${fmt(x.faisabilite, 1)} | ${QUADRANTS[x.quadrant].nom} | ${x.c.decision ? DECISIONS[x.c.decision] : "À arbitrer"} | ${x.c.note || "—"} |`,
    ),
    "",
    "## Pondération",
    "",
    `Valeur : ${CRITERES_VALEUR.map((k) => `${k.nom} ${etat.poidsValeur[k.id]} %`).join(", ")}.`,
    "",
    `Faisabilité : ${CRITERES_FAISABILITE.map((k) => `${k.nom} ${etat.poidsFaisabilite[k.id]} %`).join(", ")}.`,
    "",
  ].join("\n");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex min-w-[16rem] flex-1 gap-2">
          <input
            className={CLASSES_SAISIE}
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ajouter()}
            placeholder="Intitulé d'un cas d'usage à noter"
            aria-label="Intitulé d'un cas d'usage"
          />
          <Bouton variante="primaire" onClick={ajouter} disabled={!titre.trim()}>
            <Plus className="size-4" aria-hidden />
            Ajouter
          </Bouton>
        </div>
        <Link href="/cas-usage" className="text-[0.82rem] font-medium text-accent hover:underline">
          Piocher dans la bibliothèque
        </Link>
        <Bouton taille="sm" onClick={() => setEtat(exemple())}>
          <FlaskConical className="size-3.5" aria-hidden />
          Exemple Voxalis
        </Bouton>
      </div>

      {!classes.length ? (
        <Vide titre="Aucun cas d'usage à noter">
          Ajoutez les cas issus de vos ateliers, ou piochez dans la bibliothèque par secteur. Notez-les en séance, avec le métier et l&apos;IT.
        </Vide>
      ) : (
        <>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Carte className="p-4">
              <Matrice
                points={classes.map((x) => ({
                  numero: x.numero,
                  titre: x.c.titre,
                  valeur: x.valeur,
                  faisabilite: x.faisabilite,
                  attenue: x.c.decision === "differe" || x.c.decision === "ecarte",
                }))}
              />
            </Carte>

            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                {(Object.keys(QUADRANTS) as (keyof typeof QUADRANTS)[]).map((q) => (
                  <Carte key={q} className="p-3.5">
                    <p className="text-[1.5rem] leading-none font-semibold text-ink">{classes.filter((x) => x.quadrant === q).length}</p>
                    <p className="mt-1.5 text-[0.84rem] font-medium text-ink">{QUADRANTS[q].nom}</p>
                    <p className="mt-0.5 text-[0.74rem] leading-snug text-ink-3">{QUADRANTS[q].conseil}</p>
                  </Carte>
                ))}
              </div>
              {retenus.length > 6 && (
                <p className="rounded-lg border border-warning/50 bg-warning-soft p-3 text-[0.84rem] leading-relaxed text-ink">
                  <strong className="font-semibold">{retenus.length} cas retenus.</strong> Au-delà de six sur un domaine, le
                  portefeuille s&apos;éparpille. Arbitrez plus sévèrement, ou séquencez en vagues.
                </p>
              )}
              <Carte className="p-3.5">
                <button
                  type="button"
                  onClick={() => setPoidsOuverts(!poidsOuverts)}
                  aria-expanded={poidsOuverts}
                  className="flex w-full items-center justify-between text-[0.86rem] font-medium text-ink"
                >
                  Pondération des critères
                  <ChevronDown className={cn("size-4 text-ink-3 transition-transform", poidsOuverts && "rotate-180")} aria-hidden />
                </button>
                {poidsOuverts && (
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    {(
                      [
                        ["Valeur", CRITERES_VALEUR, "poidsValeur"],
                        ["Faisabilité", CRITERES_FAISABILITE, "poidsFaisabilite"],
                      ] as const
                    ).map(([nom, criteres, cle]) => (
                      <div key={cle}>
                        <p className="surtitre mb-1.5">{nom}</p>
                        {criteres.map((k) => (
                          <label key={k.id} className="flex items-center justify-between gap-2 py-0.5 text-[0.8rem] text-ink-2">
                            {k.nom}
                            <input
                              type="number"
                              min={0}
                              max={100}
                              step={5}
                              value={(etat[cle] as Record<string, number>)[k.id]}
                              onChange={(e) =>
                                setEtat((s) => ({ ...s, [cle]: { ...s[cle], [k.id]: Math.max(0, Number(e.target.value) || 0) } }))
                              }
                              className="w-16 rounded-md border border-line bg-surface px-1.5 py-0.5 text-right tabular-nums outline-none focus:border-accent"
                            />
                          </label>
                        ))}
                      </div>
                    ))}
                    <p className="text-[0.74rem] text-ink-3 sm:col-span-2">
                      Les poids sont relatifs : ils n&apos;ont pas besoin de totaliser 100.
                    </p>
                  </div>
                )}
              </Carte>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            {classes.map((x) => {
              const deplie = ouvert === x.c.id;
              return (
                <div key={x.c.id} className="border-b border-line last:border-b-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3">
                    <span className="flex size-6 flex-none items-center justify-center rounded-full bg-surface-3 text-[0.72rem] font-semibold tabular-nums">{x.numero}</span>
                    <button type="button" onClick={() => setOuvert(deplie ? null : x.c.id)} aria-expanded={deplie} className="min-w-[12rem] flex-1 text-left">
                      <span className="block text-[0.92rem] font-medium text-ink">{x.c.titre}</span>
                      <span className="text-[0.76rem] text-ink-3">
                        Valeur {fmt(x.valeur, 1)} · Faisabilité {fmt(x.faisabilite, 1)} · {deplie ? "replier" : "noter les critères"}
                      </span>
                    </button>
                    <Pastille>{QUADRANTS[x.quadrant].nom}</Pastille>
                    <select
                      value={x.c.decision}
                      aria-label={`Décision pour ${x.c.titre}`}
                      onChange={(e) => maj(x.c.id, (c) => ({ ...c, decision: e.target.value as Decision }))}
                      className="h-8 rounded-lg border border-line bg-surface px-2 text-[0.8rem] outline-none focus:border-accent"
                    >
                      <option value="">À arbitrer</option>
                      {Object.entries(DECISIONS).map(([id, nom]) => (
                        <option key={id} value={id}>
                          {nom}
                        </option>
                      ))}
                    </select>
                    <Bouton variante="discret" taille="sm" aria-label={`Supprimer ${x.c.titre}`} onClick={() => setEtat((e) => ({ ...e, cas: e.cas.filter((c) => c.id !== x.c.id) }))}>
                      <Trash2 className="size-3.5" aria-hidden />
                    </Bouton>
                  </div>
                  {deplie && (
                    <div className="grid gap-x-10 gap-y-4 border-t border-line bg-bg px-4 py-4 md:grid-cols-2">
                      {(
                        [
                          ["Valeur", CRITERES_VALEUR, "valeur"],
                          ["Faisabilité", CRITERES_FAISABILITE, "faisabilite"],
                        ] as const
                      ).map(([nom, criteres, cle]) => (
                        <div key={cle}>
                          <p className="surtitre mb-2">{nom}</p>
                          <ul className="flex flex-col gap-2">
                            {criteres.map((k) => (
                              <li key={k.id} className="flex items-center justify-between gap-3">
                                <span className="min-w-0">
                                  <span className="block text-[0.84rem] text-ink">{k.nom}</span>
                                  <span className="block text-[0.72rem] text-ink-3">{k.aide}</span>
                                </span>
                                <Note5
                                  libelle={`${k.nom} pour ${x.c.titre}`}
                                  valeur={Math.round((x.c[cle] as Record<string, number>)[k.id])}
                                  onChange={(n) => maj(x.c.id, (c) => ({ ...c, [cle]: { ...c[cle], [k.id]: n } }))}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <label className="flex flex-col gap-1.5 md:col-span-2">
                        <span className="text-[0.8rem] font-medium text-ink">Motif de la décision</span>
                        <input
                          className={CLASSES_SAISIE}
                          value={x.c.note}
                          placeholder="À écrire aussi pour les cas écartés ou différés"
                          onChange={(e) => maj(x.c.id, (c) => ({ ...c, note: e.target.value }))}
                        />
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <ActionsResultat
            outil="priorisation"
            titre="Portefeuille priorisé de cas d'usage"
            resume={`${classes.length} cas notés, ${retenus.length} retenus`}
            markdown={markdown}
            donnees={etat}
            onReinitialiser={() => setEtat(ETAT_PRIORISATION_INITIAL)}
          />
        </>
      )}
    </div>
  );
}
