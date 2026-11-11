"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronsUpDown,
  CircleCheck,
  FileText,
  Flag,
  OctagonX,
} from "lucide-react";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import {
  OngletExports,
  OngletJournal,
  OngletTravaux,
  OngletValeur,
} from "@/components/missions/OngletsMission";
import { Bouton, Carte, Jauge, Pastille, Vide, classesBouton, gererFlechesOnglets } from "@/components/ui";
import { phases } from "@/data/phases";
import type { Phase, PhaseId } from "@/data/types";
import { cn } from "@/lib/cn";
import {
  FORMATS_MISSION,
  STATUTS_LIVRABLE,
  ajouterEntree,
  aujourdhui,
  avancementMission,
  avancementPhase,
  cleCritere,
  cleLivrable,
  majMission,
  useMissions,
  type Mission,
  type StatutLivrable,
} from "@/lib/missions";
import { creerStock, useEstClient, useStock } from "@/lib/stockage";

type Onglet = "parcours" | "valeur" | "journal" | "travaux" | "exports";

/** Onglet conservé : on le retrouve après un rechargement ou au retour d'un atelier. */
const stockOnglet = creerStock<Onglet>("fde-atlas:mission:onglet:v1", "parcours");

const ORDRE_STATUT: StatutLivrable[] = ["a-faire", "en-cours", "valide"];

function Case({
  coche,
  onChange,
  children,
}: {
  coche: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2 hover:bg-surface-2">
      <input type="checkbox" checked={coche} onChange={onChange} className="peer sr-only" />
      <span
        className={cn(
          "mt-0.5 flex size-[1.1rem] flex-none items-center justify-center rounded-[5px] border-[1.5px] transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent",
          coche ? "border-ink bg-ink text-bg" : "border-line-strong bg-surface",
        )}
        aria-hidden
      >
        {coche && <Check className="size-3" strokeWidth={3} />}
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </label>
  );
}

function BandePhases({
  mission,
  selection,
  onSelection,
}: {
  mission: Mission;
  selection: PhaseId;
  onSelection: (p: PhaseId) => void;
}) {
  const liste = useRef<HTMLOListElement>(null);
  // Sur mobile, la frise défile : on amène la phase sélectionnée au centre, sans faire défiler la page.
  useEffect(() => {
    const ol = liste.current;
    const actif = ol?.querySelector<HTMLElement>('[aria-current="step"]');
    if (!ol || !actif || ol.scrollWidth <= ol.clientWidth) return;
    const cible = actif.offsetLeft - ol.offsetLeft - (ol.clientWidth - actif.offsetWidth) / 2;
    ol.scrollTo({ left: Math.max(0, cible) });
  }, [selection]);

  return (
    <ol ref={liste} className="defilement-fin flex gap-1.5 overflow-x-auto pb-1">
      {phases.map((p) => {
        const dansMandat = mission.phases.includes(p.id);
        const a = avancementPhase(mission, p);
        const courante = mission.phaseCourante === p.id;
        return (
          <li key={p.id} className="min-w-[7.5rem] flex-1">
            <button
              type="button"
              disabled={!dansMandat}
              onClick={() => onSelection(p.id)}
              aria-current={selection === p.id ? "step" : undefined}
              className={cn(
                "flex w-full flex-col rounded-xl border p-2.5 text-left transition-colors",
                selection === p.id ? "border-ink bg-surface shadow-card" : "border-line bg-surface hover:border-line-strong",
                !dansMandat && "cursor-not-allowed opacity-40",
              )}
            >
              <span className="flex items-center justify-between gap-1 text-[0.7rem] text-ink-3">
                <span>Phase {p.numero}</span>
                {a.franchi ? (
                  <CircleCheck className="size-3.5 text-good-ink" aria-label="Jalon franchi" />
                ) : courante ? (
                  <span className="rounded bg-ink px-1 py-px text-[0.6rem] font-semibold text-bg">En cours</span>
                ) : null}
              </span>
              <span className="mt-0.5 text-[0.86rem] font-semibold text-ink">{p.nom}</span>
              <Jauge valeur={dansMandat ? a.taux : 0} className="mt-2 h-1" libelle={`Avancement de la phase ${p.nom}`} />
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function OngletParcours({
  mission,
  phase,
  onSelection,
}: {
  mission: Mission;
  phase: Phase;
  onSelection: (p: PhaseId) => void;
}) {
  const a = avancementPhase(mission, phase);
  const etatJalon = useRef<HTMLSpanElement>(null);
  const indexMandat = mission.phases.indexOf(phase.id);
  const suivante = mission.phases[indexMandat + 1];

  function basculerActivite(id: string) {
    majMission(mission.id, (m) => ({ ...m, activites: { ...m.activites, [id]: !m.activites[id] } }));
  }
  function avancerLivrable(cle: string) {
    majMission(mission.id, (m) => {
      const courant = m.livrables[cle] ?? "a-faire";
      const suivant = ORDRE_STATUT[(ORDRE_STATUT.indexOf(courant) + 1) % ORDRE_STATUT.length];
      return { ...m, livrables: { ...m.livrables, [cle]: suivant } };
    });
  }
  function basculerCritere(cle: string) {
    majMission(mission.id, (m) => ({ ...m, criteres: { ...m.criteres, [cle]: !m.criteres[cle] } }));
  }
  function franchirJalon() {
    majMission(mission.id, (m) => ({
      ...m,
      jalons: { ...m.jalons, [phase.id]: { franchi: true, date: aujourdhui() } },
      phaseCourante: suivante ?? m.phaseCourante,
    }));
    ajouterEntree(mission.id, {
      type: "decision",
      date: aujourdhui(),
      phase: phase.id,
      titre: `Jalon ${phase.jalon.code} franchi — ${phase.jalon.nom}`,
      detail: "",
    });
    // On reste sur la phase close pour voir la confirmation ; le focus suit le message.
    onSelection(phase.id);
    requestAnimationFrame(() => etatJalon.current?.focus());
  }
  function rouvrirJalon() {
    majMission(mission.id, (m) => ({
      ...m,
      jalons: { ...m.jalons, [phase.id]: { franchi: false } },
      phaseCourante: phase.id,
    }));
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-5">
        <Carte className="p-4 sm:p-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-2">
            <h2 className="text-[1rem] font-semibold text-ink">
              Activités
              <span className="ml-2 text-[0.8rem] font-normal text-ink-3">
                {a.activites} / {phase.activites.length}
              </span>
            </h2>
            <Link href={`/methode/${phase.id}`} className="flex items-center gap-1.5 text-[0.8rem] font-medium text-accent hover:underline">
              <BookOpen className="size-3.5" aria-hidden />
              Méthode de la phase
            </Link>
          </div>
          <ul>
            {phase.activites.map((act) => (
              <li key={act.id}>
                <Case coche={Boolean(mission.activites[act.id])} onChange={() => basculerActivite(act.id)}>
                  <span className={cn("block text-[0.9rem] font-medium", mission.activites[act.id] ? "text-ink-3 line-through" : "text-ink")}>
                    {act.titre}
                  </span>
                  <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-3">{act.resultat}</span>
                </Case>
              </li>
            ))}
          </ul>
        </Carte>

        <Carte className="p-4 sm:p-5">
          <h2 className="mb-2 px-2 text-[1rem] font-semibold text-ink">
            Livrables
            <span className="ml-2 text-[0.8rem] font-normal text-ink-3">
              {a.livrables} / {phase.livrables.length} validés
            </span>
          </h2>
          <ul className="flex flex-col">
            {phase.livrables.map((l) => {
              const cle = cleLivrable(phase.id, l);
              const statut = mission.livrables[cle] ?? "a-faire";
              return (
                <li key={cle} className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg px-2 py-2">
                  <FileText className="size-4 flex-none text-ink-3" aria-hidden />
                  <span className="min-w-[12rem] flex-1">
                    <span className="block text-[0.9rem] font-medium text-ink">
                      {l.titre}
                      {l.obligatoire && <span className="ml-1.5 text-[0.7rem] font-normal text-ink-3">exigé au jalon</span>}
                    </span>
                  </span>
                  {l.template && (
                    <Link href={`/templates/${l.template}`} className="text-[0.78rem] font-medium text-accent hover:underline">
                      Template
                    </Link>
                  )}
                  <button
                    type="button"
                    onClick={() => avancerLivrable(cle)}
                    title="Cliquer pour changer le statut"
                    aria-label={`Statut de ${l.titre} : ${STATUTS_LIVRABLE[statut]}. Cliquer pour changer.`}
                    className="rounded-md transition-opacity hover:opacity-80"
                  >
                    <Pastille ton={statut === "valide" ? "bon" : statut === "en-cours" ? "accent" : "neutre"} className="min-w-[4.6rem] justify-center">
                      {STATUTS_LIVRABLE[statut]}
                      <ChevronsUpDown className="size-3 opacity-60" aria-hidden />
                    </Pastille>
                  </button>
                </li>
              );
            })}
          </ul>
        </Carte>
      </div>

      <Carte className="self-start overflow-hidden">
        <div className="border-b border-line bg-surface-2 px-5 py-4">
          <p className="flex items-center gap-2 text-[0.8rem] font-semibold text-ink-2">
            <Flag className="size-3.5" aria-hidden />
            Jalon {phase.jalon.code} · {phase.jalon.nom}
          </p>
          <p className="titre-editorial mt-1.5 text-[1.05rem] leading-snug text-ink">« {phase.jalon.question} »</p>
        </div>
        <div className="p-3 sm:p-4">
          <p className="surtitre mb-1 px-2">Critères de passage</p>
          <ul>
            {phase.jalon.criteres.map((c, i) => {
              const cle = cleCritere(phase.id, i);
              return (
                <li key={cle}>
                  <Case coche={Boolean(mission.criteres[cle])} onChange={() => basculerCritere(cle)}>
                    <span className="text-[0.86rem] leading-snug text-ink">{c}</span>
                  </Case>
                </li>
              );
            })}
          </ul>
          <p className="surtitre mt-4 mb-2 flex items-center gap-1.5 px-2">
            <OctagonX className="size-3.5 text-critical-ink" aria-hidden />
            Signaux d&apos;arrêt à surveiller
          </p>
          <ul className="flex flex-col gap-1.5 px-2">
            {phase.jalon.arret.map((s) => (
              <li key={s} className="flex gap-2 text-[0.82rem] leading-snug text-ink-2">
                <span className="mt-[0.45rem] size-1 flex-none rounded-full bg-critical" aria-hidden />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-line px-2 pt-4">
            {a.franchi ? (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span
                  ref={etatJalon}
                  tabIndex={-1}
                  className="flex items-center gap-1.5 text-[0.86rem] font-medium text-good-ink"
                >
                  <CircleCheck className="size-4" aria-hidden />
                  Jalon franchi
                  {mission.jalons[phase.id]?.date &&
                    ` le ${new Date(mission.jalons[phase.id]!.date!).toLocaleDateString("fr-FR")}`}
                </span>
                <Bouton variante="discret" taille="sm" className="ml-auto" onClick={rouvrirJalon}>
                  Rouvrir
                </Bouton>
                {suivante && (
                  <Bouton variante="primaire" className="w-full" onClick={() => onSelection(suivante)}>
                    Passer à la phase suivante
                    <ArrowRight className="size-4" aria-hidden />
                  </Bouton>
                )}
              </div>
            ) : (
              <>
                <Bouton variante="primaire" disabled={!a.pretPourJalon} onClick={franchirJalon} className="w-full">
                  Franchir le jalon {phase.jalon.code}
                  <ArrowRight className="size-4" aria-hidden />
                </Bouton>
                {!a.pretPourJalon && (
                  <p className="mt-2 text-[0.78rem] leading-snug text-ink-3">
                    Le jalon se franchit quand tous les critères sont réunis et les livrables exigés validés.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </Carte>
    </div>
  );
}

export function EspaceMission() {
  const estClient = useEstClient();
  const { active: mission } = useMissions();
  const [onglet, setOnglet] = useStock(stockOnglet);
  const [selection, setSelection] = useState<PhaseId | null>(null);

  if (!estClient) return <div className="h-64" aria-busy />;

  if (!mission) {
    return (
      <Vide titre="Aucune mission active">
        <p>Créez une mission ou chargez la mission d&apos;exemple pour ouvrir l&apos;espace de travail.</p>
        <Link href="/missions" className={`${classesBouton("primaire")} mt-4`}>
          Aller à mes missions
        </Link>
      </Vide>
    );
  }

  const idPhase = selection && mission.phases.includes(selection) ? selection : mission.phaseCourante;
  const phase = phases.find((p) => p.id === idPhase)!;
  const global = avancementMission(mission, phases);
  const jalonsFranchis = mission.phases.filter((p) => mission.jalons[p]?.franchi).length;
  const risquesOuverts = mission.journal.filter((e) => e.type === "risque" && !e.clos).length;

  const onglets: { id: Onglet; nom: string; compteur?: number }[] = [
    { id: "parcours", nom: "Parcours" },
    { id: "valeur", nom: "Valeur", compteur: mission.valeur.length },
    { id: "journal", nom: "Journal", compteur: mission.journal.length },
    { id: "travaux", nom: "Travaux", compteur: mission.artefacts.length },
    { id: "exports", nom: "Exports" },
  ];

  return (
    <div>
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <Pastille>{FORMATS_MISSION[mission.format].nom}</Pastille>
          <Link href="/missions" className="text-[0.78rem] font-medium text-accent hover:underline">
            Changer de mission
          </Link>
        </div>
        <h1 className="titre-editorial mt-2.5 text-[1.9rem] leading-tight text-balance text-ink sm:text-[2.2rem]">
          {mission.nom}
        </h1>
        <p className="mt-1 text-[0.95rem] text-ink-2">
          {mission.client}
          {mission.sponsor && ` · Sponsor : ${mission.sponsor}`}
        </p>
        {mission.probleme && (
          <p className="mt-3 max-w-3xl border-l-2 border-line-strong pl-3 text-[0.9rem] leading-relaxed text-ink-2">
            {mission.probleme}
          </p>
        )}
      </header>

      <dl className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { nom: "Avancement", valeur: `${Math.round(global * 100)} %` },
          { nom: "Jalons franchis", valeur: `${jalonsFranchis} / ${mission.phases.length}` },
          { nom: "Indicateurs de valeur suivis", valeur: String(mission.valeur.length) },
          { nom: "Risques ouverts", valeur: String(risquesOuverts) },
        ].map((s) => (
          <Carte key={s.nom} className="px-4 py-3">
            <dt className="text-[0.76rem] text-ink-3">{s.nom}</dt>
            <dd className="mt-0.5 text-[1.5rem] leading-tight font-semibold tracking-tight text-ink">{s.valeur}</dd>
          </Carte>
        ))}
      </dl>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-line">
        <div
          role="tablist"
          aria-label="Sections de la mission"
          onKeyDown={(e) => gererFlechesOnglets(e, onglets.map((o) => o.id), onglet, setOnglet)}
          className="defilement-fin fondu-droite flex min-w-0 gap-1 overflow-x-auto"
        >
          {onglets.map((o) => (
            <button
              key={o.id}
              type="button"
              role="tab"
              id={`mission-onglet-${o.id}`}
              aria-controls="mission-panneau"
              aria-selected={onglet === o.id}
              tabIndex={onglet === o.id ? 0 : -1}
              onClick={() => setOnglet(o.id)}
              className={cn(
                "-mb-px flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-[0.88rem] font-medium whitespace-nowrap transition-colors",
                onglet === o.id ? "border-ink text-ink" : "border-transparent text-ink-2 hover:text-ink",
              )}
            >
              {o.nom}
              {o.compteur !== undefined && o.compteur > 0 && (
                <span className="rounded-full bg-surface-3 px-1.5 text-[0.68rem] text-ink-2 tabular-nums">{o.compteur}</span>
              )}
            </button>
          ))}
        </div>
        <BoutonCopilote
          brouillon="Compte tenu de l'état de ma mission, quelles sont mes trois priorités de la semaine et quels risques dois-je anticiper ? "
          className="mb-2"
        >
          Faire le point avec le copilote
        </BoutonCopilote>
      </div>

      <div id="mission-panneau" role="tabpanel" aria-labelledby={`mission-onglet-${onglet}`}>
        {onglet === "parcours" && (
          <>
            <div className="mb-5">
              <BandePhases mission={mission} selection={idPhase} onSelection={setSelection} />
            </div>
            <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-[1.25rem] font-semibold tracking-tight text-ink">
                {phase.numero}. {phase.nom}
              </h2>
              <p className="text-[0.9rem] text-ink-2">{phase.promesse}</p>
              {mission.phaseCourante !== phase.id && (
                <Bouton
                  taille="sm"
                  className="ml-auto"
                  onClick={() => majMission(mission.id, (m) => ({ ...m, phaseCourante: phase.id }))}
                >
                  Définir comme phase en cours
                </Bouton>
              )}
            </div>
            <OngletParcours mission={mission} phase={phase} onSelection={setSelection} />
          </>
        )}
        {onglet === "valeur" && <OngletValeur mission={mission} />}
        {onglet === "journal" && <OngletJournal mission={mission} />}
        {onglet === "travaux" && <OngletTravaux mission={mission} />}
        {onglet === "exports" && <OngletExports mission={mission} />}
      </div>
    </div>
  );
}
