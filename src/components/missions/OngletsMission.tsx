"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { Bouton, CLASSES_SAISIE, Carte, Champ, Pastille, Vide } from "@/components/ui";
import { OUTILS, PHASES_RESUME } from "@/data/referentiels";
import { cn } from "@/lib/cn";
import {
  STATUTS_VALEUR,
  TYPES_ENTREE,
  ajouterEntree,
  aujourdhui,
  majMission,
  progressionValeur,
  supprimerMission,
  type LigneValeur,
  type Mission,
  type StatutValeur,
  type TypeEntree,
} from "@/lib/missions";
import { genererBrouillonRex, genererPointAvancement } from "@/lib/missions-exports";
import { nouvelId, telecharger } from "@/lib/stockage";

function versNombre(v: string): number | null {
  if (!v.trim()) return null;
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

/* ------------------------------------------------------------------ */
/* Valeur                                                              */
/* ------------------------------------------------------------------ */

export function OngletValeur({ mission }: { mission: Mission }) {
  function maj(id: string, champs: Partial<LigneValeur>) {
    majMission(mission.id, (m) => ({
      ...m,
      valeur: m.valeur.map((l) => (l.id === id ? { ...l, ...champs } : l)),
    }));
  }
  function ajouter() {
    majMission(mission.id, (m) => ({
      ...m,
      valeur: [
        ...m.valeur,
        {
          id: nouvelId(),
          indicateur: "",
          unite: "",
          reference: null,
          cible: null,
          realise: null,
          baisseFavorable: false,
          methode: "",
          proprietaire: "",
          statut: "hypothese",
        },
      ],
    }));
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div className="max-w-2xl">
          <h2 className="text-[1.15rem] font-semibold text-ink">Registre de valeur</h2>
          <p className="mt-1 text-[0.88rem] leading-relaxed text-ink-2">
            Une ligne par hypothèse de valeur. Elle naît au cadrage comme un ordre de grandeur, reçoit
            une référence mesurée au diagnostic, une cible au business case, puis un réalisé.{" "}
            <Link href="/frameworks/registre-de-valeur" className="font-medium text-accent hover:underline">
              Le framework
            </Link>
          </p>
        </div>
        <Bouton variante="primaire" taille="sm" onClick={ajouter}>
          <Plus className="size-3.5" aria-hidden />
          Ajouter un indicateur
        </Bouton>
      </div>

      {!mission.valeur.length ? (
        <Vide titre="Le registre est vide">
          Ouvrez-le dès le cadrage avec une première hypothèse chiffrée, même imprécise.
        </Vide>
      ) : (
        <div className="flex flex-col gap-3">
          {mission.valeur.map((l) => {
            const progression = progressionValeur(l);
            return (
              <Carte key={l.id} className="p-4">
                <div className="grid gap-x-4 gap-y-3 lg:grid-cols-[minmax(0,2.2fr)_5rem_repeat(3,6rem)_9rem_auto] lg:items-end">
                  <Champ libelle="Indicateur">
                    <input className={CLASSES_SAISIE} value={l.indicateur} placeholder="Délai moyen de résolution" onChange={(e) => maj(l.id, { indicateur: e.target.value })} />
                  </Champ>
                  <Champ libelle="Unité">
                    <input className={CLASSES_SAISIE} value={l.unite} placeholder="h, %, €" onChange={(e) => maj(l.id, { unite: e.target.value })} />
                  </Champ>
                  {(["reference", "cible", "realise"] as const).map((champ) => (
                    <Champ key={champ} libelle={champ === "reference" ? "Référence" : champ === "cible" ? "Cible" : "Réalisé"}>
                      <input
                        className={cn(CLASSES_SAISIE, "tabular-nums")}
                        inputMode="decimal"
                        defaultValue={l[champ] ?? ""}
                        placeholder="—"
                        onBlur={(e) => maj(l.id, { [champ]: versNombre(e.target.value) })}
                      />
                    </Champ>
                  ))}
                  <Champ libelle="Statut">
                    <select className={CLASSES_SAISIE} value={l.statut} title={STATUTS_VALEUR[l.statut].aide} onChange={(e) => maj(l.id, { statut: e.target.value as StatutValeur })}>
                      {Object.entries(STATUTS_VALEUR).map(([id, s]) => (
                        <option key={id} value={id}>
                          {s.nom}
                        </option>
                      ))}
                    </select>
                  </Champ>
                  <Bouton
                    variante="discret"
                    taille="sm"
                    aria-label={`Supprimer l'indicateur ${l.indicateur}`}
                    onClick={() => majMission(mission.id, (m) => ({ ...m, valeur: m.valeur.filter((x) => x.id !== l.id) }))}
                  >
                    <Trash2 className="size-3.5" aria-hidden />
                  </Bouton>
                </div>

                <div className="mt-3 grid gap-x-4 gap-y-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_auto] md:items-end">
                  <Champ libelle="Méthode de mesure et source">
                    <input className={CLASSES_SAISIE} value={l.methode} placeholder="Comment, sur quelle période, depuis quel système" onChange={(e) => maj(l.id, { methode: e.target.value })} />
                  </Champ>
                  <Champ libelle="Propriétaire">
                    <input className={CLASSES_SAISIE} value={l.proprietaire} placeholder="Qui répond du résultat" onChange={(e) => maj(l.id, { proprietaire: e.target.value })} />
                  </Champ>
                  <label className="flex h-9 items-center gap-2 text-[0.8rem] text-ink-2">
                    <input type="checkbox" checked={l.baisseFavorable} onChange={(e) => maj(l.id, { baisseFavorable: e.target.checked })} className="size-3.5 accent-[var(--ink)]" />
                    Une baisse est une amélioration
                  </label>
                </div>

                {progression !== null && (
                  <div className="mt-4 flex items-center gap-3 border-t border-line pt-3">
                    <span className="flex-none text-[0.76rem] text-ink-3">Chemin parcouru vers la cible</span>
                    <div
                      role="progressbar"
                      aria-valuenow={Math.round(progression * 100)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Chemin parcouru vers la cible pour ${l.indicateur}`}
                      className="h-2 flex-1 overflow-hidden rounded-full bg-accent-soft"
                    >
                      <div className="h-full rounded-full bg-series-1" style={{ width: `${progression * 100}%` }} />
                    </div>
                    <span className="w-12 flex-none text-right text-[0.86rem] font-semibold text-ink tabular-nums">
                      {Math.round(progression * 100)} %
                    </span>
                  </div>
                )}
              </Carte>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Journal                                                             */
/* ------------------------------------------------------------------ */

const TONS_ENTREE: Record<TypeEntree, "accent" | "alerte" | "bon" | "neutre"> = {
  decision: "accent",
  risque: "alerte",
  apprentissage: "bon",
  note: "neutre",
};

export function OngletJournal({ mission }: { mission: Mission }) {
  const [type, setType] = useState<TypeEntree>("decision");
  const [titre, setTitre] = useState("");
  const [detail, setDetail] = useState("");
  const [filtre, setFiltre] = useState<TypeEntree | "">("");

  const entrees = mission.journal.filter((e) => !filtre || e.type === filtre);

  function ajouter() {
    if (!titre.trim()) return;
    ajouterEntree(mission.id, {
      type,
      date: aujourdhui(),
      phase: mission.phaseCourante,
      titre: titre.trim(),
      detail: detail.trim(),
    });
    setTitre("");
    setDetail("");
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
      <Carte className="self-start p-4 sm:p-5">
        <h2 className="text-[1rem] font-semibold text-ink">Consigner</h2>
        <p className="mt-1 mb-4 text-[0.82rem] leading-relaxed text-ink-2">
          Trente secondes maintenant valent mieux qu&apos;une heure de reconstitution en fin de mission.
          Les apprentissages alimentent le brouillon de REX.
        </p>
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          {(Object.entries(TYPES_ENTREE) as [TypeEntree, { nom: string }][]).map(([id, t]) => (
            <button
              key={id}
              type="button"
              aria-pressed={type === id}
              onClick={() => setType(id)}
              className={cn(
                "rounded-lg border px-2.5 py-1.5 text-[0.82rem] font-medium transition-colors",
                type === id ? "border-ink bg-ink text-bg" : "border-line text-ink-2 hover:border-line-strong",
              )}
            >
              {t.nom}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Champ libelle="Titre">
            <input
              className={CLASSES_SAISIE}
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ajouter()}
              placeholder={type === "risque" ? "Ce qui pourrait mal tourner" : type === "decision" ? "Ce qui a été décidé, par qui" : "En une phrase"}
            />
          </Champ>
          <Champ libelle="Détail (facultatif)">
            <textarea className={cn(CLASSES_SAISIE, "min-h-20")} value={detail} onChange={(e) => setDetail(e.target.value)} />
          </Champ>
          <Bouton variante="primaire" disabled={!titre.trim()} onClick={ajouter}>
            <Plus className="size-4" aria-hidden />
            Ajouter au journal
          </Bouton>
        </div>
      </Carte>

      <div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {(Object.entries(TYPES_ENTREE) as [TypeEntree, { pluriel: string }][]).map(([id, t]) => {
            const n = mission.journal.filter((e) => e.type === id).length;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={filtre === id}
                onClick={() => setFiltre(filtre === id ? "" : id)}
                className={cn(
                  "rounded-md border px-2 py-0.5 text-[0.78rem] transition-colors",
                  filtre === id ? "border-ink bg-ink font-medium text-bg" : "border-line text-ink-2 hover:border-line-strong",
                )}
              >
                {t.pluriel} · {n}
              </button>
            );
          })}
        </div>

        {!entrees.length ? (
          <Vide titre="Rien à afficher">Consignez votre première décision, votre premier risque ou votre premier apprentissage.</Vide>
        ) : (
          <ul className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            {entrees.map((e) => (
              <li key={e.id} className="flex gap-3 border-b border-line px-4 py-3.5 last:border-b-0">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Pastille ton={e.type === "risque" && e.clos ? "neutre" : TONS_ENTREE[e.type]}>
                      {TYPES_ENTREE[e.type].nom}
                      {e.type === "risque" && e.clos && " traité"}
                    </Pastille>
                    <span className="text-[0.74rem] text-ink-3">
                      {new Date(e.date).toLocaleDateString("fr-FR")} · {PHASES_RESUME[e.phase].nom}
                    </span>
                  </div>
                  <p className={cn("mt-1.5 text-[0.92rem] font-medium text-ink", e.clos && "text-ink-3 line-through")}>{e.titre}</p>
                  {e.detail && <p className="mt-0.5 text-[0.85rem] leading-relaxed text-ink-2">{e.detail}</p>}
                </div>
                <div className="flex flex-none flex-col items-end gap-1">
                  {e.type === "risque" && (
                    <Bouton
                      variante="discret"
                      taille="sm"
                      onClick={() =>
                        majMission(mission.id, (m) => ({
                          ...m,
                          journal: m.journal.map((x) => (x.id === e.id ? { ...x, clos: !x.clos } : x)),
                        }))
                      }
                    >
                      {e.clos ? "Rouvrir" : "Marquer traité"}
                    </Bouton>
                  )}
                  <Bouton
                    variante="discret"
                    taille="sm"
                    aria-label={`Supprimer l'entrée ${e.titre}`}
                    onClick={() => majMission(mission.id, (m) => ({ ...m, journal: m.journal.filter((x) => x.id !== e.id) }))}
                  >
                    <Trash2 className="size-3.5" aria-hidden />
                  </Bouton>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Travaux enregistrés depuis les ateliers                             */
/* ------------------------------------------------------------------ */

export function OngletTravaux({ mission }: { mission: Mission }) {
  const [ouvert, setOuvert] = useState<string | null>(null);

  if (!mission.artefacts.length) {
    return (
      <Vide titre="Aucun travail enregistré">
        <p>
          Les résultats des ateliers (diagnostic de maturité, portefeuille priorisé, business case,
          fiches agents…) s&apos;enregistrent ici d&apos;un clic depuis chaque outil.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {OUTILS.map((o) => (
            <Link key={o.id} href={`/outils/${o.id}`} className="rounded-md border border-line px-2 py-1 text-[0.8rem] text-ink-2 hover:border-line-strong hover:text-ink">
              {o.nom}
            </Link>
          ))}
        </div>
      </Vide>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {mission.artefacts.map((a) => {
        const outil = OUTILS.find((o) => o.id === a.outil);
        const deplie = ouvert === a.id;
        return (
          <li key={a.id}>
            <Carte className="overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 p-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Pastille ton="accent">{outil?.nom ?? a.outil}</Pastille>
                    <span className="text-[0.74rem] text-ink-3">{new Date(a.date).toLocaleDateString("fr-FR")}</span>
                  </div>
                  <p className="mt-1.5 text-[0.95rem] font-semibold text-ink">{a.titre}</p>
                  <p className="text-[0.84rem] text-ink-2">{a.resume}</p>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Bouton taille="sm" onClick={() => setOuvert(deplie ? null : a.id)}>
                    {deplie ? "Replier" : "Afficher"}
                  </Bouton>
                  <BoutonCopier texte={a.markdown} />
                  <Bouton taille="sm" onClick={() => telecharger(`${a.outil}-${a.date}.md`, a.markdown)}>
                    <Download className="size-3.5" aria-hidden />
                  </Bouton>
                  <Bouton
                    variante="discret"
                    taille="sm"
                    aria-label={`Supprimer ${a.titre}`}
                    onClick={() => majMission(mission.id, (m) => ({ ...m, artefacts: m.artefacts.filter((x) => x.id !== a.id) }))}
                  >
                    <Trash2 className="size-3.5" aria-hidden />
                  </Bouton>
                </div>
              </div>
              {deplie && (
                <div className="border-t border-line bg-bg p-5">
                  <Markdown>{a.markdown}</Markdown>
                </div>
              )}
            </Carte>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Exports                                                             */
/* ------------------------------------------------------------------ */

export function OngletExports({ mission }: { mission: Mission }) {
  const [apercu, setApercu] = useState<"point" | "rex">("point");
  const point = genererPointAvancement(mission);
  const rex = genererBrouillonRex(mission);
  const texte = apercu === "point" ? point : rex;

  return (
    <div className="grid gap-6 xl:grid-cols-[20rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-3 self-start">
        {[
          {
            id: "point" as const,
            titre: "Point d'avancement",
            texte: "Avancement, livrables, valeur, risques et décisions, mis en forme à partir de l'état de la mission.",
          },
          {
            id: "rex" as const,
            titre: "Brouillon de REX",
            texte: "Pré-rempli avec vos décisions, vos résultats et vos apprentissages. À anonymiser puis à proposer dans content/savoir.",
          },
        ].map((e) => (
          <button
            key={e.id}
            type="button"
            aria-pressed={apercu === e.id}
            onClick={() => setApercu(e.id)}
            className={cn(
              "rounded-xl border bg-surface p-4 text-left transition-colors",
              apercu === e.id ? "border-ink shadow-card" : "border-line hover:border-line-strong",
            )}
          >
            <span className="block text-[0.95rem] font-semibold text-ink">{e.titre}</span>
            <span className="mt-1 block text-[0.82rem] leading-relaxed text-ink-2">{e.texte}</span>
          </button>
        ))}

        <Carte className="p-4">
          <p className="text-[0.95rem] font-semibold text-ink">Sauvegarde</p>
          <p className="mt-1 text-[0.82rem] leading-relaxed text-ink-2">
            La mission vit dans ce navigateur. Exportez-la pour la sauvegarder, la reprendre sur un
            autre poste ou la transmettre à un collègue.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Bouton
              taille="sm"
              onClick={() =>
                telecharger(`mission-${mission.client.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`, JSON.stringify(mission, null, 2), "application/json")
              }
            >
              <Download className="size-3.5" aria-hidden />
              Exporter en JSON
            </Bouton>
            <Bouton
              variante="danger"
              taille="sm"
              onClick={() => {
                if (window.confirm(`Supprimer définitivement la mission « ${mission.nom} » de ce poste ?`)) {
                  supprimerMission(mission.id);
                }
              }}
            >
              <Trash2 className="size-3.5" aria-hidden />
              Supprimer la mission
            </Bouton>
          </div>
        </Carte>
      </div>

      <div>
        <div className="mb-3 flex flex-wrap items-center justify-end gap-1.5">
          <BoutonCopier texte={texte} libelle="Copier le Markdown" />
          <Bouton taille="sm" onClick={() => telecharger(apercu === "point" ? "point-avancement.md" : "rex-brouillon.md", texte)}>
            <Download className="size-3.5" aria-hidden />
            Télécharger
          </Bouton>
        </div>
        <div className="feuille">
          {apercu === "rex" ? (
            <pre className="defilement-fin overflow-x-auto font-mono text-[0.8rem] leading-relaxed whitespace-pre-wrap text-ink">{rex}</pre>
          ) : (
            <Markdown>{point}</Markdown>
          )}
        </div>
      </div>
    </div>
  );
}
