"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { CheckCircle2, ChevronDown, Clock, FileText, RotateCcw, Target, UserRound } from "lucide-react";
import { ActionsExport, ElementCochable, LienRessource, dateDuJour, pourcentage } from "@/components/onboarding/commun";
import { Bouton, Carte, Jauge, Pastille, TitreSection } from "@/components/ui";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";
import {
  CHECKLIST_ARRIVEE,
  ETAPES_ONBOARDING,
  MENTORAT,
  PLAN_30_60_90,
  PROFILS,
  type EtapeOnboarding,
  type Exercice,
  type ProfilId,
} from "@/data/onboarding";

interface Etat {
  profil: ProfilId | null;
  coches: Record<string, boolean>;
}

const INITIAL: Etat = { profil: null, coches: {} };
const stock = creerStock<Etat>("fde-atlas:onboarding:v1", INITIAL);

/** Identifiants comptés dans la progression d'une étape : ses actions, puis ses exercices. */
function elementsEtape(e: EtapeOnboarding): string[] {
  return [...e.actions.map((a) => a.id), ...(e.exercices ?? []).map((x) => x.id)];
}

interface ProchaineAction {
  id: string;
  libelle: string;
  etape: string;
  href?: string;
  prioritaire: boolean;
}

function prochainesActions(etat: Etat, priorites: Set<string>, n = 6): ProchaineAction[] {
  const toutes: ProchaineAction[] = [
    ...CHECKLIST_ARRIVEE.map((a) => ({ id: a.id, libelle: a.libelle, etape: "Arrivée", href: a.ressource?.href, prioritaire: false })),
    ...ETAPES_ONBOARDING.flatMap((e) => [
      ...e.actions.map((a) => ({ id: a.id, libelle: a.libelle, etape: e.nom, href: a.ressource?.href, prioritaire: priorites.has(a.id) })),
      ...(e.exercices ?? []).map((x) => ({ id: x.id, libelle: `Exercice : ${x.titre}`, etape: e.nom, href: undefined, prioritaire: priorites.has(x.id) })),
    ]),
  ].filter((a) => !etat.coches[a.id]);
  // Arrivée d'abord, puis l'étape en cours ; dans une même étape, les priorités du profil passent devant.
  const rangEtape = (nom: string) => (nom === "Arrivée" ? 0 : ETAPES_ONBOARDING.findIndex((e) => e.nom === nom) + 1);
  return toutes
    .map((a, i) => ({ a, i }))
    .sort((x, y) => rangEtape(x.a.etape) - rangEtape(y.a.etape) || Number(y.a.prioritaire) - Number(x.a.prioritaire) || x.i - y.i)
    .slice(0, n)
    .map(({ a }) => a);
}

function construireMarkdown(etat: Etat, date?: string): string {
  const profil = PROFILS.find((p) => p.id === etat.profil);
  const priorites = new Set(profil?.priorites ?? []);
  const tousIds = [...CHECKLIST_ARRIVEE.map((a) => a.id), ...ETAPES_ONBOARDING.flatMap(elementsEtape)];
  const faits = tousIds.filter((id) => etat.coches[id]).length;
  const lignes: string[] = [
    "# Plan d'intégration FDE",
    "",
    date ? `Exporté le ${date}.` : "",
    `**Profil d'origine** : ${profil ? profil.nom : "non renseigné"}`,
    `**Avancement global** : ${faits} / ${tousIds.length} (${pourcentage(faits, tousIds.length)} %)`,
    "",
    "## Avancement par étape",
    "",
    "| Étape | Période | Fait | Avancement |",
    "| --- | --- | --- | --- |",
    `| Arrivée | Semaine 1 | ${CHECKLIST_ARRIVEE.filter((a) => etat.coches[a.id]).length} / ${CHECKLIST_ARRIVEE.length} | ${pourcentage(CHECKLIST_ARRIVEE.filter((a) => etat.coches[a.id]).length, CHECKLIST_ARRIVEE.length)} % |`,
    ...ETAPES_ONBOARDING.map((e) => {
      const ids = elementsEtape(e);
      const f = ids.filter((id) => etat.coches[id]).length;
      return `| ${e.numero}. ${e.nom} | ${e.periode} | ${f} / ${ids.length} | ${pourcentage(f, ids.length)} % |`;
    }),
  ];
  if (profil) {
    lignes.push(
      "",
      `## Priorités du profil « ${profil.nom} »`,
      "",
      "**Acquis à valoriser**",
      "",
      ...profil.acquis.map((x) => `- ${x}`),
      "",
      "**À acquérir en premier**",
      "",
      ...profil.aAcquerir.map((x) => `- ${x}`),
      "",
      "**Trois ressources à ouvrir d'abord**",
      "",
      ...profil.ressources.map((r) => `- [${r.libelle}](${r.href})`),
    );
  }
  const suivantes = prochainesActions(etat, priorites, 8);
  lignes.push("", "## Prochaines actions", "");
  if (suivantes.length === 0) lignes.push("Toutes les actions du parcours sont cochées. Préparer la revue de readiness à 90 jours.");
  else lignes.push(...suivantes.map((a) => `- [ ] ${a.libelle} (${a.etape}${a.prioritaire ? ", prioritaire" : ""})${a.href ? ` — ${a.href}` : ""}`));
  const exercices = ETAPES_ONBOARDING.flatMap((e) => e.exercices ?? []);
  lignes.push(
    "",
    "## Exercices pratiques",
    "",
    ...exercices.map((x) => `- [${etat.coches[x.id] ? "x" : " "}] ${x.titre} (${x.duree})${priorites.has(x.id) ? " — prioritaire" : ""}`),
    "",
    "## Plan 30 / 60 / 90 jours",
    "",
    ...PLAN_30_60_90.flatMap((j) => [`### ${j.horizon} — ${j.titre}`, "", ...j.objectifs.map((o) => `- ${o}`), "", `Point de validation : ${j.validation}`, ""]),
    "---",
    "",
    "L'avancement est déclaratif : chaque étape et chaque exercice se valident avec le mentor. Durées et points de validation : cadre proposé, à ajuster par la direction du pool.",
  );
  return lignes.filter((l, i, t) => !(l === "" && t[i - 1] === "")).join("\n");
}

export function ParcoursOnboarding() {
  const [etat, setEtat] = useStock(stock);
  const [ongletActif, setOngletActif] = useState(0);
  const [ouverts, setOuverts] = useState<Record<string, boolean>>({});
  const refsOnglets = useRef<(HTMLButtonElement | null)[]>([]);

  const profil = PROFILS.find((p) => p.id === etat.profil) ?? null;
  const priorites = new Set(profil?.priorites ?? []);
  const basculer = (id: string) => setEtat((e) => ({ ...e, coches: { ...e.coches, [id]: !e.coches[id] } }));
  const compte = (ids: string[]) => ids.filter((id) => etat.coches[id]).length;

  const idsArrivee = CHECKLIST_ARRIVEE.map((a) => a.id);
  const tousIds = [...idsArrivee, ...ETAPES_ONBOARDING.flatMap(elementsEtape)];
  const faitsGlobal = compte(tousIds);
  const suivantes = prochainesActions(etat, priorites, 4);
  const etape = ETAPES_ONBOARDING[ongletActif];

  function clavierOnglets(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const n = ETAPES_ONBOARDING.length;
    let cible: number | null = null;
    if (e.key === "ArrowRight") cible = (i + 1) % n;
    if (e.key === "ArrowLeft") cible = (i - 1 + n) % n;
    if (e.key === "Home") cible = 0;
    if (e.key === "End") cible = n - 1;
    if (cible === null) return;
    e.preventDefault();
    setOngletActif(cible);
    refsOnglets.current[cible]?.focus();
  }

  return (
    <div className="flex flex-col gap-10">
      {/* ---------------------------- Profil et avancement ---------------------------- */}
      <section aria-labelledby="titre-profil" className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Carte className="p-5">
          <h2 id="titre-profil" className="text-[1.05rem] font-semibold text-ink">
            Votre profil d&apos;origine
          </h2>
          <p className="mt-0.5 text-[0.85rem] text-ink-2">
            Le parcours est le même pour tous ; l&apos;ordre et l&apos;insistance changent selon ce que vous savez déjà.
          </p>
          <div role="radiogroup" aria-label="Profil d'origine" className="mt-3 flex flex-wrap gap-1.5">
            {PROFILS.map((p) => (
              <button
                key={p.id}
                type="button"
                role="radio"
                aria-checked={etat.profil === p.id}
                onClick={() => setEtat((e) => ({ ...e, profil: e.profil === p.id ? null : p.id }))}
                className={cn(
                  "h-8 rounded-lg border px-3 text-[0.82rem] font-medium transition-colors",
                  etat.profil === p.id ? "border-ink bg-ink text-bg" : "border-line text-ink-2 hover:border-line-strong",
                )}
              >
                {p.nom}
              </button>
            ))}
          </div>
          {profil ? (
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="surtitre mb-1.5">Ce que vous savez déjà</p>
                <ul className="flex flex-col gap-1">
                  {profil.acquis.map((x) => (
                    <li key={x} className="flex gap-2 text-[0.85rem] leading-snug text-ink-2">
                      <CheckCircle2 className="mt-0.5 size-3.5 flex-none text-good-ink" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="surtitre mb-1.5">À acquérir en premier</p>
                <ul className="flex flex-col gap-1">
                  {profil.aAcquerir.map((x) => (
                    <li key={x} className="flex gap-2 text-[0.85rem] leading-snug text-ink">
                      <Target className="mt-0.5 size-3.5 flex-none text-accent" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="surtitre mb-1.5">Trois ressources à ouvrir d&apos;abord</p>
                <ol className="flex flex-col gap-1.5">
                  {profil.ressources.map((r, i) => (
                    <li key={r.href} className="flex gap-2 text-[0.85rem]">
                      <span className="w-3 flex-none text-ink-3">{i + 1}.</span>
                      <LienRessource ressource={r} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-lg border border-dashed border-line-strong px-4 py-3 text-[0.85rem] text-ink-2">
              Choisissez un profil pour voir vos priorités. Les actions et exercices correspondants seront mis en avant dans les étapes.
            </p>
          )}
        </Carte>

        <Carte className="flex flex-col gap-4 p-5">
          <div>
            <p className="surtitre">Avancement global</p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="titre-editorial text-[2rem] leading-none text-ink">{pourcentage(faitsGlobal, tousIds.length)} %</span>
              <span className="text-[0.85rem] text-ink-2">
                {faitsGlobal} / {tousIds.length} éléments
              </span>
            </p>
            <Jauge valeur={faitsGlobal / tousIds.length} libelle="Avancement global du parcours" className="mt-2" />
          </div>
          <ul className="flex flex-col gap-1.5">
            <li className="flex items-center gap-3 text-[0.8rem]">
              <span className="w-36 flex-none text-ink-2">Arrivée</span>
              <Jauge valeur={compte(idsArrivee) / idsArrivee.length} libelle="Avancement de la checklist d'arrivée" />
              <span className="w-9 flex-none text-right text-ink tabular-nums">{pourcentage(compte(idsArrivee), idsArrivee.length)} %</span>
            </li>
            {ETAPES_ONBOARDING.map((e) => {
              const ids = elementsEtape(e);
              return (
                <li key={e.id} className="flex items-center gap-3 text-[0.8rem]">
                  <span className="w-36 flex-none truncate text-ink-2">
                    {e.numero}. {e.nom}
                  </span>
                  <Jauge valeur={compte(ids) / ids.length} libelle={`Avancement de l'étape ${e.nom}`} />
                  <span className="w-9 flex-none text-right text-ink tabular-nums">{pourcentage(compte(ids), ids.length)} %</span>
                </li>
              );
            })}
          </ul>
          {suivantes.length > 0 && (
            <div className="border-t border-line pt-3">
              <p className="surtitre mb-1.5">Prochaines actions</p>
              <ul className="flex flex-col gap-1">
                {suivantes.map((a) => (
                  <li key={a.id} className="text-[0.82rem] leading-snug text-ink">
                    <span className="text-ink-3">{a.etape} · </span>
                    {a.libelle}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-line pt-3">
            <ActionsExport
              nomFichier="plan-integration-fde.md"
              apercu={construireMarkdown(etat)}
              construire={() => construireMarkdown(etat, dateDuJour())}
            />
            <Bouton
              variante="discret"
              taille="sm"
              onClick={() => {
                if (window.confirm("Effacer le profil et toutes les cases cochées du parcours ?")) setEtat(INITIAL);
              }}
            >
              <RotateCcw className="size-3.5" aria-hidden />
              Réinitialiser
            </Bouton>
          </div>
        </Carte>
      </section>

      {/* ---------------------------- Checklist d'arrivée ---------------------------- */}
      <section aria-labelledby="titre-arrivee">
        <TitreSection
          id="titre-arrivee"
          titre="Checklist d'arrivée"
          description="La première semaine : rencontrer les bonnes personnes, poser le cadre, faire son point de départ."
        />
        <Carte className="p-3">
          <ul className="grid gap-x-4 md:grid-cols-2">
            {CHECKLIST_ARRIVEE.map((a) => (
              <ElementCochable
                key={a.id}
                id={a.id}
                libelle={a.libelle}
                ressource={a.ressource}
                coche={!!etat.coches[a.id]}
                onBasculer={() => basculer(a.id)}
              />
            ))}
          </ul>
        </Carte>
      </section>

      {/* ---------------------------- Les cinq étapes ---------------------------- */}
      <section aria-labelledby="titre-etapes">
        <TitreSection
          id="titre-etapes"
          titre="Les cinq étapes du parcours"
          description="Environ 13 semaines. Les étapes se chevauchent : on apprend en pratiquant, on pratique en observant."
        />
        <div role="tablist" aria-label="Étapes du parcours" className="grid grid-cols-1 gap-1.5 sm:grid-cols-5">
          {ETAPES_ONBOARDING.map((e, i) => {
            const ids = elementsEtape(e);
            const actif = i === ongletActif;
            return (
              <button
                key={e.id}
                ref={(el) => {
                  refsOnglets.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`onglet-${e.id}`}
                aria-selected={actif}
                aria-controls={`panneau-${e.id}`}
                tabIndex={actif ? 0 : -1}
                onClick={() => setOngletActif(i)}
                onKeyDown={(ev) => clavierOnglets(ev, i)}
                className={cn(
                  "flex flex-col gap-1.5 rounded-lg border p-3 text-left transition-colors",
                  actif ? "border-ink bg-surface shadow-card" : "border-line bg-surface-2 hover:border-line-strong",
                )}
              >
                <span className="surtitre">
                  Étape {e.numero} · {e.periode}
                </span>
                <span className="text-[0.9rem] leading-tight font-semibold text-ink">{e.nom}</span>
                <Jauge valeur={compte(ids) / ids.length} libelle={`Avancement de l'étape ${e.nom}`} />
                <span className="text-[0.72rem] text-ink-3 tabular-nums">
                  {compte(ids)} / {ids.length}
                </span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={`panneau-${etape.id}`} aria-labelledby={`onglet-${etape.id}`} className="mt-4">
          <Carte className="overflow-hidden">
            <div className="grid gap-4 border-b border-line bg-surface-2 p-5 md:grid-cols-3">
              <div className="md:col-span-1">
                <p className="surtitre mb-1">Objectif</p>
                <p className="text-[0.9rem] leading-relaxed text-ink">{etape.objectif}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[0.8rem] text-ink-2">
                  <Clock className="size-3.5" aria-hidden />
                  {etape.duree}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="surtitre mb-1">À la fin de l&apos;étape, vous savez faire</p>
                <p className="text-[0.9rem] leading-relaxed text-ink">{etape.critereValidation}</p>
                <p className="mt-2 text-[0.78rem] text-ink-3">Critère validé par le mentor, sur preuve observée.</p>
              </div>
            </div>
            <div className="p-3">
              <p className="surtitre px-2 pt-2 pb-1">Actions</p>
              <ul className="flex flex-col">
                {etape.actions.map((a) => (
                  <ElementCochable
                    key={a.id}
                    id={a.id}
                    libelle={a.libelle}
                    ressource={a.ressource}
                    prioritaire={priorites.has(a.id)}
                    coche={!!etat.coches[a.id]}
                    onBasculer={() => basculer(a.id)}
                  />
                ))}
              </ul>
            </div>
            {etape.exercices && (
              <div className="border-t border-line p-5">
                <p className="surtitre mb-1">Exercices pratiques</p>
                <p className="mb-3 text-[0.85rem] text-ink-2">
                  Tous appuyés sur le cas Voxalis. Cochez un exercice lorsque le mentor l&apos;a validé avec la grille.
                </p>
                <ul className="flex flex-col gap-2">
                  {etape.exercices.map((x) => (
                    <CarteExercice
                      key={x.id}
                      exercice={x}
                      ouvert={!!ouverts[x.id]}
                      onOuvrir={() => setOuverts((o) => ({ ...o, [x.id]: !o[x.id] }))}
                      valide={!!etat.coches[x.id]}
                      onValider={() => basculer(x.id)}
                      prioritaire={priorites.has(x.id)}
                    />
                  ))}
                </ul>
              </div>
            )}
          </Carte>
        </div>
      </section>

      {/* ---------------------------- Plan 30 / 60 / 90 ---------------------------- */}
      <section aria-labelledby="titre-plan">
        <TitreSection
          id="titre-plan"
          titre="Plan 30 / 60 / 90 jours"
          description="Cadre proposé, à ajuster par la direction du pool : chaque horizon se termine par un point de validation formel."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {PLAN_30_60_90.map((j) => (
            <Carte key={j.id} className="flex flex-col p-5">
              <p className="surtitre">{j.horizon}</p>
              <h3 className="titre-editorial mt-1 text-[1.25rem] leading-tight text-ink">{j.titre}</h3>
              <p className="mt-3 text-[0.8rem] font-semibold text-ink">Objectifs</p>
              <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 marker:text-ink-3">
                {j.objectifs.map((o) => (
                  <li key={o} className="text-[0.85rem] leading-snug text-ink-2">
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[0.8rem] font-semibold text-ink">Livrables</p>
              <ul className="mt-1 flex flex-col gap-1">
                {j.livrables.map((l) => (
                  <li key={l} className="flex gap-2 text-[0.85rem] leading-snug text-ink-2">
                    <FileText className="mt-0.5 size-3.5 flex-none text-ink-3" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <div className="rounded-lg border border-accent-line bg-accent-soft p-3">
                  <p className="text-[0.75rem] font-semibold text-accent">Point de validation avec le mentor</p>
                  <p className="mt-1 text-[0.82rem] leading-snug text-ink">{j.validation}</p>
                </div>
              </div>
            </Carte>
          ))}
        </div>
      </section>

      {/* ---------------------------- Mentorat ---------------------------- */}
      <section aria-labelledby="titre-mentorat">
        <TitreSection
          id="titre-mentorat"
          titre="Le dispositif de mentorat"
          description="Chaque arrivant a un mentor, FDE confirmé hors de sa ligne hiérarchique. Rituels proposés, à ajuster par la direction du pool."
        />
        <div className="grid gap-3 lg:grid-cols-2">
          <Carte className="p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink">
              <UserRound className="size-4 text-ink-3" aria-hidden />
              Le mentor
            </h3>
            <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 marker:text-ink-3">
              {MENTORAT.roleMentor.map((x) => (
                <li key={x} className="text-[0.87rem] leading-snug text-ink-2">
                  {x}
                </li>
              ))}
            </ul>
          </Carte>
          <Carte className="p-5">
            <h3 className="flex items-center gap-2 font-semibold text-ink">
              <UserRound className="size-4 text-ink-3" aria-hidden />
              Le nouvel arrivant
            </h3>
            <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 marker:text-ink-3">
              {MENTORAT.roleArrivant.map((x) => (
                <li key={x} className="text-[0.87rem] leading-snug text-ink-2">
                  {x}
                </li>
              ))}
            </ul>
          </Carte>
          <Carte className="overflow-x-auto p-5 lg:col-span-2">
            <h3 className="font-semibold text-ink">Rituels</h3>
            <table className="mt-2 w-full min-w-[36rem] text-left text-[0.85rem]">
              <thead>
                <tr className="border-b border-line text-[0.75rem] text-ink-3">
                  <th scope="col" className="py-2 pr-4 font-medium">Rituel</th>
                  <th scope="col" className="py-2 pr-4 font-medium">Fréquence</th>
                  <th scope="col" className="py-2 font-medium">Contenu</th>
                </tr>
              </thead>
              <tbody>
                {MENTORAT.rituels.map((r) => (
                  <tr key={r.nom} className="border-b border-line last:border-0">
                    <th scope="row" className="py-2 pr-4 align-top font-medium text-ink">{r.nom}</th>
                    <td className="py-2 pr-4 align-top text-ink-2">{r.frequence}</td>
                    <td className="py-2 align-top text-ink-2">{r.contenu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Carte>
          <Carte className="p-5 lg:col-span-2">
            <h3 className="font-semibold text-ink">Ce que le mentor valide</h3>
            <ul className="mt-2 grid gap-x-6 gap-y-1 md:grid-cols-2">
              {MENTORAT.validations.map((x) => (
                <li key={x} className="flex gap-2 text-[0.87rem] leading-snug text-ink-2">
                  <CheckCircle2 className="mt-0.5 size-3.5 flex-none text-good-ink" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[0.82rem] text-ink-3">
              Le mentor ne note pas à la place de l&apos;arrivant : il confronte l&apos;auto-évaluation du{" "}
              <Link href="/competences" className="font-medium text-accent hover:underline">
                référentiel de compétences
              </Link>{" "}
              à des preuves.
            </p>
          </Carte>
        </div>
      </section>
    </div>
  );
}

function CarteExercice({
  exercice: x,
  ouvert,
  onOuvrir,
  valide,
  onValider,
  prioritaire,
}: {
  exercice: Exercice;
  ouvert: boolean;
  onOuvrir: () => void;
  valide: boolean;
  onValider: () => void;
  prioritaire: boolean;
}) {
  const idCase = `case-${x.id}`;
  return (
    <li className={cn("rounded-lg border", prioritaire && !valide ? "border-accent-line" : "border-line")}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 p-3">
        <button
          type="button"
          aria-expanded={ouvert}
          aria-controls={`detail-${x.id}`}
          onClick={onOuvrir}
          className="flex min-w-[14rem] flex-1 items-center gap-2 text-left"
        >
          <ChevronDown className={cn("size-4 flex-none text-ink-3 transition-transform", ouvert && "rotate-180")} aria-hidden />
          <span className="text-[0.9rem] font-semibold text-ink">{x.titre}</span>
        </button>
        <span className="flex flex-wrap items-center gap-1.5">
          {prioritaire && <Pastille ton="accent">Prioritaire pour votre profil</Pastille>}
          <Pastille>{x.duree}</Pastille>
          {valide && (
            <Pastille ton="bon">
              <CheckCircle2 className="size-3" aria-hidden />
              Validé
            </Pastille>
          )}
        </span>
        <span className="flex items-center gap-1.5">
          <input id={idCase} type="checkbox" checked={valide} onChange={onValider} className="size-4 cursor-pointer accent-accent" />
          <label htmlFor={idCase} className="cursor-pointer text-[0.8rem] text-ink-2">
            Validé par le mentor
          </label>
        </span>
      </div>
      {ouvert && (
        <div id={`detail-${x.id}`} className="grid gap-4 border-t border-line p-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div>
            <p className="surtitre mb-1">Énoncé</p>
            <p className="text-[0.9rem] leading-relaxed text-ink">{x.enonce}</p>
            <p className="surtitre mt-3 mb-1">Livrable attendu</p>
            <p className="text-[0.9rem] leading-relaxed text-ink">{x.livrable}</p>
          </div>
          <div>
            <p className="surtitre mb-1">Grille d&apos;évaluation</p>
            <ol className="flex list-decimal flex-col gap-1 pl-4 marker:text-ink-3">
              {x.criteres.map((c) => (
                <li key={c} className="pl-1 text-[0.85rem] leading-snug text-ink-2">
                  {c}
                </li>
              ))}
            </ol>
            <p className="surtitre mt-3 mb-1">Ressources</p>
            <ul className="flex flex-col gap-1">
              {x.ressources.map((r) => (
                <li key={r.href}>
                  <LienRessource ressource={r} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}
