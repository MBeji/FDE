"use client";

import { AlertTriangle, CheckCircle2, Info, OctagonAlert, RotateCcw } from "lucide-react";
import { ActionsExport, LienRessource, dateDuJour } from "@/components/onboarding/commun";
import { Bouton, Carte, Pastille, TitreSection } from "@/components/ui";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";
import {
  COMPETENCES,
  FAMILLES,
  NIVEAUX,
  SEUIL_ECARTS_NON_BLOQUANTS,
  type Competence,
  type Niveau,
} from "@/data/competences";

interface Etat {
  niveaux: Record<string, Niveau>;
}

const INITIAL: Etat = { niveaux: {} };
const stock = creerStock<Etat>("fde-atlas:competences:v1", INITIAL);

const fmt1 = (n: number) => n.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const nomNiveau = (n: number) => NIVEAUX[n - 1]?.nom ?? "";

interface Ecart {
  competence: Competence;
  actuel: Niveau;
  bloquant: boolean;
}

type Verdict =
  | { statut: "incomplet"; restantes: number }
  | { statut: "pret" | "binome" | "pas-pret"; titre: string; texte: string };

function calculer(niveaux: Record<string, Niveau>) {
  const ecarts: Ecart[] = COMPETENCES.filter((c) => niveaux[c.id] && niveaux[c.id] < c.minimum)
    .map((c) => ({ competence: c, actuel: niveaux[c.id], bloquant: c.critique }))
    .sort((a, b) => Number(b.bloquant) - Number(a.bloquant) || (b.competence.minimum - b.actuel) - (a.competence.minimum - a.actuel));
  const bloquants = ecarts.filter((e) => e.bloquant);
  const nonBloquants = ecarts.filter((e) => !e.bloquant);
  const restantes = COMPETENCES.filter((c) => !niveaux[c.id]).length;

  let verdict: Verdict;
  if (restantes > 0) verdict = { statut: "incomplet", restantes };
  else if (bloquants.length > 0)
    verdict = {
      statut: "pas-pret",
      titre: "Pas encore prêt à intervenir seul",
      texte: `${bloquants.length} compétence${bloquants.length > 1 ? "s" : ""} critique${bloquants.length > 1 ? "s" : ""} sous le niveau exigé. Intervention possible uniquement aux côtés d'un FDE confirmé, le temps de lever ces écarts.`,
    };
  else if (nonBloquants.length > SEUIL_ECARTS_NON_BLOQUANTS)
    verdict = {
      statut: "pas-pret",
      titre: "Pas encore prêt à intervenir seul",
      texte: `Aucun écart critique, mais ${nonBloquants.length} écarts non bloquants : au-delà de ${SEUIL_ECARTS_NON_BLOQUANTS}, leur cumul expose trop la mission. Intervention en binôme jusqu'à les ramener sous ce seuil.`,
    };
  else if (nonBloquants.length > 0)
    verdict = {
      statut: "binome",
      titre: "Prêt, avec binôme sur les écarts",
      texte: `Toutes les compétences critiques sont au niveau. Intervention seule possible, en s'appuyant sur un pair pour ${nonBloquants.length > 1 ? "les sujets suivants" : "le sujet suivant"}.`,
    };
  else
    verdict = {
      statut: "pret",
      titre: "Prêt à intervenir seul chez un client",
      texte: "Toutes les compétences atteignent le niveau minimal. Visez maintenant le niveau Référent sur une ou deux compétences.",
    };

  const familles = FAMILLES.map((f) => {
    const cs = COMPETENCES.filter((c) => c.famille === f.id);
    const evaluees = cs.filter((c) => niveaux[c.id]);
    const moyenne = evaluees.length ? evaluees.reduce((s, c) => s + niveaux[c.id], 0) / evaluees.length : 0;
    const exigence = cs.reduce((s, c) => s + c.minimum, 0) / cs.length;
    const auNiveau = evaluees.filter((c) => niveaux[c.id] >= c.minimum).length;
    return { ...f, total: cs.length, evaluees: evaluees.length, moyenne, exigence, auNiveau };
  });

  return { ecarts, bloquants, nonBloquants, verdict, familles };
}

function construireMarkdown(niveaux: Record<string, Niveau>, date?: string): string {
  const { ecarts, verdict, familles } = calculer(niveaux);
  const l: string[] = [
    "# Auto-évaluation FDE et plan de progression",
    "",
    date ? `Exporté le ${date}.` : "",
    "",
    "## Verdict de readiness client",
    "",
    verdict.statut === "incomplet"
      ? `Évaluation incomplète : ${verdict.restantes} compétence(s) restent à évaluer.`
      : `**${verdict.titre}.** ${verdict.texte}`,
    "",
    "## Synthèse par famille",
    "",
    "| Famille | Niveau moyen | Exigence moyenne | Au niveau requis |",
    "| --- | --- | --- | --- |",
    ...familles.map((f) => `| ${f.nom} | ${f.evaluees ? `${fmt1(f.moyenne)} / 4` : "non évalué"} | ${fmt1(f.exigence)} / 4 | ${f.auNiveau} / ${f.total} |`),
    "",
    "## Détail par compétence",
    "",
    "| Compétence | Niveau déclaré | Minimum requis | Critique |",
    "| --- | --- | --- | --- |",
    ...COMPETENCES.map((c) => {
      const n = niveaux[c.id];
      return `| ${c.nom} | ${n ? `${n} — ${nomNiveau(n)}` : "non évalué"} | ${c.minimum} — ${nomNiveau(c.minimum)} | ${c.critique ? "oui" : "non"} |`;
    }),
    "",
    "## Plan de progression",
    "",
  ];
  if (ecarts.length === 0) l.push("Aucun écart au niveau minimal sur les compétences évaluées.");
  for (const e of ecarts) {
    const c = e.competence;
    l.push(
      `### ${c.nom} — ${e.bloquant ? "écart bloquant" : "écart non bloquant"}`,
      "",
      `Niveau actuel : ${e.actuel} (${nomNiveau(e.actuel)}). Niveau visé : ${c.minimum} (${nomNiveau(c.minimum)}).`,
      "",
      "Ce qu'il faut savoir faire :",
      "",
      ...c.niveaux.slice(e.actuel, c.minimum).map((t, i) => `- Niveau ${e.actuel + i + 1} : ${t}`),
      "",
      "Ressources :",
      "",
      ...c.ressources.map((r) => `- [${r.libelle}](${r.href})`),
      "",
    );
  }
  l.push(
    "---",
    "",
    "Auto-évaluation déclarative, à valider avec le mentor sur preuves (livrables, retours client, situations observées). Niveaux minimaux et compétences critiques : cadre proposé, à ajuster par la direction du pool.",
  );
  return l.filter((x, i, t) => !(x === "" && t[i - 1] === "")).join("\n");
}

export function AutoEvaluation() {
  const [etat, setEtat] = useStock(stock);
  const { ecarts, verdict, familles } = calculer(etat.niveaux);
  const evaluees = COMPETENCES.length - (verdict.statut === "incomplet" ? verdict.restantes : 0);

  const choisir = (id: string, n: Niveau) =>
    setEtat((e) => {
      const niveaux = { ...e.niveaux };
      if (niveaux[id] === n) delete niveaux[id];
      else niveaux[id] = n;
      return { ...e, niveaux };
    });

  return (
    <div className="flex flex-col gap-10">
      <Carte className="flex gap-3 border-accent-line bg-accent-soft p-4">
        <Info className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
        <p className="text-[0.87rem] leading-relaxed text-ink">
          <strong className="font-semibold">Une auto-évaluation se valide avec le mentor.</strong> Choisissez pour chaque compétence le niveau
          dont vous pouvez montrer une preuve : un livrable, un retour client, une situation observée. Les niveaux minimaux et les
          compétences critiques forment un cadre proposé, à ajuster par la direction du pool. Vos réponses restent dans ce navigateur.
        </p>
      </Carte>

      {/* --------------------------- Échelle --------------------------- */}
      <section aria-labelledby="titre-echelle">
        <TitreSection id="titre-echelle" titre="Les quatre niveaux de maîtrise" />
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {NIVEAUX.map((n) => (
            <li key={n.niveau} className="rounded-lg border border-line bg-surface p-3">
              <p className="flex items-baseline gap-2">
                <span className="titre-editorial text-[1.3rem] leading-none text-ink-3">{n.niveau}</span>
                <span className="text-[0.9rem] font-semibold text-ink">{n.nom}</span>
              </p>
              <p className="mt-1 text-[0.82rem] leading-snug text-ink-2">{n.definition}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* --------------------------- Auto-évaluation --------------------------- */}
        <section aria-labelledby="titre-autoeval" className="flex flex-col gap-6">
          <TitreSection
            id="titre-autoeval"
            titre="Auto-évaluation"
            description={`${evaluees} / ${COMPETENCES.length} compétences évaluées. Cliquez à nouveau sur un niveau pour l'effacer.`}
          />
          {FAMILLES.map((f) => (
            <div key={f.id}>
              <h3 className="text-[0.95rem] font-semibold text-ink">{f.nom}</h3>
              <p className="mb-2 text-[0.82rem] text-ink-3">{f.description}</p>
              <div className="flex flex-col gap-2">
                {COMPETENCES.filter((c) => c.famille === f.id).map((c) => (
                  <LigneCompetence key={c.id} competence={c} niveau={etat.niveaux[c.id]} onChoisir={(n) => choisir(c.id, n)} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* --------------------------- Synthèse et verdict --------------------------- */}
        <aside aria-label="Synthèse et verdict" className="flex flex-col gap-4 xl:sticky xl:top-20 xl:self-start">
          <Carte className="p-5">
            <p className="surtitre mb-3">Synthèse par famille</p>
            <ul className="flex flex-col gap-3">
              {familles.map((f) => (
                <li key={f.id}>
                  <div className="flex items-baseline justify-between gap-3 text-[0.82rem]">
                    <span className="font-medium text-ink">{f.nom}</span>
                    <span className="flex-none text-ink tabular-nums">{f.evaluees ? `${fmt1(f.moyenne)} / 4` : "—"}</span>
                  </div>
                  <div
                    className="relative mt-1 h-2 w-full rounded-full bg-accent-soft"
                    role="img"
                    aria-label={`${f.nom} : niveau moyen ${f.evaluees ? fmt1(f.moyenne) : "non évalué"} sur 4, exigence moyenne ${fmt1(f.exigence)}`}
                  >
                    <div className="h-full rounded-full bg-series-1" style={{ width: `${(f.moyenne / 4) * 100}%` }} />
                    <span
                      className="absolute -top-0.5 h-3 w-0.5 rounded-full bg-ink"
                      style={{ left: `calc(${(f.exigence / 4) * 100}% - 1px)` }}
                      aria-hidden
                    />
                  </div>
                  <p className="mt-1 text-[0.72rem] text-ink-3 tabular-nums">
                    Exigence moyenne {fmt1(f.exigence)} · au niveau requis {f.auNiveau} / {f.total}
                    {f.evaluees < f.total && ` · ${f.total - f.evaluees} non évaluée${f.total - f.evaluees > 1 ? "s" : ""}`}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-1.5 text-[0.72rem] text-ink-3">
              <span className="inline-block h-3 w-0.5 rounded-full bg-ink" aria-hidden />
              Repère : niveau moyen exigé pour intervenir seul
            </p>
          </Carte>

          <CarteVerdict verdict={verdict} />

          <Carte className="p-5">
            <p className="surtitre mb-2">Écarts au niveau requis</p>
            {verdict.statut === "incomplet" && ecarts.length === 0 ? (
              <p className="text-[0.85rem] text-ink-2">Les écarts apparaissent au fil de l&apos;évaluation.</p>
            ) : ecarts.length === 0 ? (
              <p className="flex items-center gap-1.5 text-[0.85rem] text-good-ink">
                <CheckCircle2 className="size-3.5" aria-hidden />
                Aucun écart sur les compétences évaluées.
              </p>
            ) : (
              <ul className="flex flex-col gap-1.5">
                {ecarts.map((e) => (
                  <li key={e.competence.id} className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[0.85rem]">
                    {e.bloquant ? (
                      <Pastille ton="critique">
                        <OctagonAlert className="size-3" aria-hidden />
                        Bloquant
                      </Pastille>
                    ) : (
                      <Pastille ton="alerte">
                        <AlertTriangle className="size-3" aria-hidden />
                        Non bloquant
                      </Pastille>
                    )}
                    <span className="text-ink">{e.competence.nom}</span>
                    <span className="text-ink-3 tabular-nums">
                      {e.actuel} → {e.competence.minimum}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-line pt-3">
              <ActionsExport
                nomFichier="auto-evaluation-fde.md"
                apercu={construireMarkdown(etat.niveaux)}
                construire={() => construireMarkdown(etat.niveaux, dateDuJour())}
              />
              <Bouton
                variante="discret"
                taille="sm"
                onClick={() => {
                  if (window.confirm("Effacer toute l'auto-évaluation ?")) setEtat(INITIAL);
                }}
              >
                <RotateCcw className="size-3.5" aria-hidden />
                Réinitialiser
              </Bouton>
            </div>
          </Carte>
        </aside>
      </div>

      {/* --------------------------- Plan de progression --------------------------- */}
      <section aria-labelledby="titre-plan-progression">
        <TitreSection
          id="titre-plan-progression"
          titre="Plan de progression"
          description="Généré à partir des écarts : écarts bloquants d'abord, puis les plus grands. À discuter avec le mentor, qui fixe les preuves attendues."
        />
        {ecarts.length === 0 ? (
          <p className="rounded-xl border border-dashed border-line-strong px-6 py-8 text-center text-[0.9rem] text-ink-2">
            {verdict.statut === "incomplet"
              ? "Évaluez vos compétences : chaque niveau inférieur au minimum requis ajoutera ici une ligne de plan."
              : "Aucun écart au niveau minimal. Choisissez avec le mentor une ou deux compétences à porter au niveau Référent."}
          </p>
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {ecarts.map((e) => (
              <Carte key={e.competence.id} className="flex flex-col p-5">
                <div className="flex flex-wrap items-center gap-1.5">
                  {e.bloquant ? (
                    <Pastille ton="critique">
                      <OctagonAlert className="size-3" aria-hidden />
                      Écart bloquant
                    </Pastille>
                  ) : (
                    <Pastille ton="alerte">
                      <AlertTriangle className="size-3" aria-hidden />
                      Écart non bloquant
                    </Pastille>
                  )}
                  <Pastille>
                    Niveau {e.actuel} → visé {e.competence.minimum} ({nomNiveau(e.competence.minimum)})
                  </Pastille>
                </div>
                <h3 className="mt-2 font-semibold text-ink">{e.competence.nom}</h3>
                <p className="surtitre mt-3 mb-1">Ce qu&apos;il faut savoir faire</p>
                <ul className="flex flex-col gap-1.5">
                  {e.competence.niveaux.slice(e.actuel, e.competence.minimum).map((t, i) => (
                    <li key={t} className="text-[0.87rem] leading-snug text-ink">
                      <span className="font-medium text-ink-3">Niveau {e.actuel + i + 1} · </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="surtitre mt-3 mb-1">Ressources</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {e.competence.ressources.map((r) => (
                    <li key={r.href}>
                      <LienRessource ressource={r} />
                    </li>
                  ))}
                </ul>
              </Carte>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function CarteVerdict({ verdict }: { verdict: Verdict }) {
  if (verdict.statut === "incomplet") {
    return (
      <div className="rounded-xl border border-dashed border-line-strong p-5">
        <p className="surtitre">Verdict de readiness client</p>
        <p className="mt-1 text-[0.9rem] text-ink-2">
          Évaluez les {verdict.restantes} compétence{verdict.restantes > 1 ? "s" : ""} restante{verdict.restantes > 1 ? "s" : ""} pour obtenir
          le verdict.
        </p>
      </div>
    );
  }
  const styles = {
    pret: { cadre: "border-good/30 bg-good-soft", encre: "text-good-ink", Icone: CheckCircle2 },
    binome: { cadre: "border-warning/40 bg-warning-soft", encre: "text-warning-ink", Icone: AlertTriangle },
    "pas-pret": { cadre: "border-critical/30 bg-critical-soft", encre: "text-critical-ink", Icone: OctagonAlert },
  }[verdict.statut];
  return (
    <div className={cn("rounded-xl border p-5", styles.cadre)} role="status">
      <p className="surtitre">Verdict de readiness client</p>
      <p className={cn("mt-1 flex items-center gap-2 text-[1.05rem] font-semibold", styles.encre)}>
        <styles.Icone className="size-5 flex-none" aria-hidden />
        {verdict.titre}
      </p>
      <p className="mt-1.5 text-[0.87rem] leading-relaxed text-ink">{verdict.texte}</p>
      <p className="mt-2 text-[0.78rem] text-ink-2">À confirmer en revue avec le mentor et le lead de mission.</p>
    </div>
  );
}

function LigneCompetence({
  competence: c,
  niveau,
  onChoisir,
}: {
  competence: Competence;
  niveau: Niveau | undefined;
  onChoisir: (n: Niveau) => void;
}) {
  const sousMinimum = niveau !== undefined && niveau < c.minimum;
  return (
    <Carte id={`competence-${c.id}`} className="p-4">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div className="min-w-[14rem] flex-1">
          <p className="flex flex-wrap items-center gap-1.5">
            <span className="text-[0.92rem] font-semibold text-ink">{c.nom}</span>
            {c.critique && <Pastille ton="accent">Critique</Pastille>}
            <Pastille>Minimum : {c.minimum} · {nomNiveau(c.minimum)}</Pastille>
          </p>
          <p className="mt-0.5 text-[0.82rem] leading-snug text-ink-3">{c.description}</p>
        </div>
        <div role="radiogroup" aria-label={`Niveau en ${c.nom}`} className="flex gap-1">
          {NIVEAUX.map((n) => (
            <button
              key={n.niveau}
              type="button"
              role="radio"
              aria-checked={niveau === n.niveau}
              title={n.nom}
              onClick={() => onChoisir(n.niveau)}
              className={cn(
                "size-8 rounded-md text-[0.82rem] font-semibold transition-colors",
                niveau === n.niveau ? "bg-ink text-bg" : "border border-line text-ink-2 hover:border-line-strong",
              )}
            >
              <span aria-hidden>{n.niveau}</span>
              <span className="sr-only">
                {n.niveau} — {n.nom}
              </span>
            </button>
          ))}
        </div>
      </div>
      <ol className="mt-3 grid gap-1.5 md:grid-cols-2">
        {c.niveaux.map((t, i) => {
          const n = (i + 1) as Niveau;
          const actif = niveau === n;
          return (
            <li
              key={t}
              className={cn(
                "rounded-md border px-2.5 py-1.5 text-[0.8rem] leading-snug",
                actif ? "border-ink bg-surface-2 text-ink" : "border-line text-ink-2",
                n === c.minimum && !actif && "border-dashed border-line-strong",
              )}
            >
              <span className="font-semibold text-ink">
                {n}. {nomNiveau(n)}
                {n === c.minimum && <span className="font-normal text-ink-3"> · minimum requis</span>}
              </span>
              <span className="mt-0.5 block">{t}</span>
            </li>
          );
        })}
      </ol>
      {sousMinimum && (
        <p className={cn("mt-2 flex items-center gap-1.5 text-[0.8rem]", c.critique ? "text-critical-ink" : "text-warning-ink")}>
          {c.critique ? <OctagonAlert className="size-3.5" aria-hidden /> : <AlertTriangle className="size-3.5" aria-hidden />}
          {c.critique ? "Écart bloquant" : "Écart non bloquant"} : niveau {niveau}, minimum requis {c.minimum}.
        </p>
      )}
    </Carte>
  );
}
