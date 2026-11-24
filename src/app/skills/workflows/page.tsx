import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flag, Hand, Zap } from "lucide-react";
import { PastilleStatut } from "@/components/skills/commun";
import { EnTetePage, Pastille } from "@/components/ui";
import { getSkill, workflows } from "@/lib/content";
import { nomStatut } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Workflows agentiques",
  description:
    "Les enchaînements de skills qui traitent une situation de bout en bout, de la qualification d'une opportunité au traitement d'un incident, avec leurs points de contrôle humains.",
};

export default function PageWorkflows() {
  return (
    <>
      <EnTetePage
        fil={[{ href: "/skills", nom: "Skills IA" }]}
        surtitre="Assets IA"
        titre="Workflows agentiques"
        chapo="Un skill fait une chose. Un workflow en compose plusieurs pour traiter une situation de bout en bout : il fixe l'ordre, l'intention de chaque étape et les décisions qui restent humaines. Un agent orchestrateur le déroule ; chaque étape charge son skill."
      />
      <ol className="flex flex-col gap-4">
        {workflows.map((w, i) => {
          const controles = w.etapes.filter((e) => e.controle).length;
          return (
            <li key={w.id}>
              <article className="rounded-xl border border-line bg-surface p-5 shadow-card">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div className="min-w-0">
                    <p className="surtitre mb-1.5">Workflow {i + 1}</p>
                    <h2 className="text-[1.15rem] leading-snug font-semibold tracking-tight text-ink">
                      <Link href={`/skills/workflows/${w.id}`} className="hover:text-accent">
                        {w.titre}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {w.statut !== "publie" && <PastilleStatut statut={w.statut} nom={nomStatut(w.statut)} />}
                    <Pastille>{w.etapes.length} skills</Pastille>
                    <Pastille ton="alerte">
                      <Hand className="size-3" aria-hidden />
                      {controles} contrôle{controles > 1 ? "s" : ""} humain{controles > 1 ? "s" : ""}
                    </Pastille>
                  </div>
                </div>
                <p className="mt-2 max-w-3xl text-[0.92rem] leading-relaxed text-ink-2">{w.resume}</p>
                <dl className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="flex gap-2.5 rounded-lg bg-surface-2 p-3">
                    <Zap className="mt-0.5 size-4 flex-none text-ink-2" aria-hidden />
                    <div>
                      <dt className="text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">Déclencheur</dt>
                      <dd className="mt-0.5 text-[0.86rem] leading-snug text-ink">{w.declencheur}</dd>
                    </div>
                  </div>
                  <div className="flex gap-2.5 rounded-lg bg-surface-2 p-3">
                    <Flag className="mt-0.5 size-4 flex-none text-ink-2" aria-hidden />
                    <div>
                      <dt className="text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">Résultat</dt>
                      <dd className="mt-0.5 text-[0.86rem] leading-snug text-ink">{w.resultat}</dd>
                    </div>
                  </div>
                </dl>
                <ol className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2" aria-label={`Skills du workflow ${w.titre}`}>
                  {w.etapes.map((e, j) => (
                    <li key={`${j}-${e.skill}`} className="flex items-center gap-1.5">
                      <Link
                        href={`/skills/${e.skill}`}
                        className="rounded-md border border-line bg-bg px-2 py-0.5 text-[0.78rem] text-ink-2 hover:border-line-strong hover:text-ink"
                      >
                        <span className="mr-1 font-semibold text-ink tabular-nums">{j + 1}</span>
                        {getSkill(e.skill)?.titre ?? e.skill}
                      </Link>
                      {j < w.etapes.length - 1 && <ArrowRight className="size-3 flex-none text-ink-3" aria-hidden />}
                    </li>
                  ))}
                </ol>
                <Link
                  href={`/skills/workflows/${w.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-[0.85rem] font-medium text-accent hover:underline"
                >
                  Voir le déroulé et les règles d&apos;orchestration
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </article>
            </li>
          );
        })}
      </ol>
    </>
  );
}
