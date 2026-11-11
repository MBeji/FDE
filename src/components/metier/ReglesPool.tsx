import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpFromLine, CalendarClock, FileText, Info, ListChecks } from "lucide-react";
import { SectionMetier } from "@/components/metier/commun";
import { REGLES_POOL } from "@/data/metier";

function Bloc({ icone: Icone, titre, children }: { icone: typeof Info; titre: string; children: ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold tracking-wide text-ink-3 uppercase">
        <Icone className="size-3.5" aria-hidden />
        {titre}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function ReglesPool() {
  return (
    <SectionMetier
      id="pool"
      surtitre="4 · Fonctionnement"
      titre="Les règles du pool"
      description="Ce que le pool attend de chaque mission, et ce que chaque mission rend au pool, en trois temps."
    >
      <p className="mb-5 flex gap-2 rounded-lg border border-line bg-surface-2 p-3 text-[0.86rem] leading-snug text-ink-2">
        <Info className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
        <span>
          <span className="font-semibold text-ink">Cadre proposé, à valider par la direction du pool.</span> Les
          rituels, fréquences et seuils ci-dessous sont un point de départ : adaptez-les à la taille du pool et aux
          engagements contractuels de chaque mission.
        </span>
      </p>
      <ol className="grid gap-4 lg:grid-cols-3">
        {REGLES_POOL.map((t, i) => (
          <li key={t.id} className="flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-ink text-[0.8rem] font-semibold text-bg">
                {i + 1}
              </span>
              <h3 className="text-[1rem] font-semibold text-ink">{t.titre}</h3>
            </div>
            <p className="mt-2 text-[0.88rem] text-ink-2 italic">{t.objectif}</p>

            <div className="mt-4 space-y-5">
              <Bloc icone={ListChecks} titre="Standards attendus">
                <ul className="space-y-1.5">
                  {t.standards.map((s) => (
                    <li key={s} className="border-l-2 border-accent-line pl-2.5 text-[0.86rem] leading-snug text-ink">
                      {s}
                    </li>
                  ))}
                </ul>
              </Bloc>
              <Bloc icone={CalendarClock} titre="Rituels">
                <ul className="space-y-2">
                  {t.rituels.map((r) => (
                    <li key={r.nom} className="rounded-lg bg-surface-2 p-2.5">
                      <p className="text-[0.86rem] font-semibold text-ink">{r.nom}</p>
                      <p className="text-[0.76rem] text-ink-3">{r.frequence}</p>
                      <p className="mt-1 text-[0.83rem] leading-snug text-ink-2">{r.contenu}</p>
                    </li>
                  ))}
                </ul>
              </Bloc>
              <Bloc icone={FileText} titre="Livrables de pilotage">
                <ul className="space-y-1">
                  {t.livrables.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[0.86rem] font-medium text-accent hover:underline">
                        {l.libelle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Bloc>
              <Bloc icone={ArrowUpFromLine} titre="Ce qui remonte au pool">
                <ul className="list-disc space-y-1 pl-4 text-[0.86rem] leading-snug text-ink marker:text-ink-3">
                  {t.remontees.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Bloc>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[0.86rem] text-ink-2">
        Un nouveau membre découvre ces règles pas à pas dans le{" "}
        <Link href="/onboarding" className="font-medium text-accent hover:underline">
          parcours d&apos;intégration
        </Link>
        . Une mission qui dévie des standards se reprend avec le guide{" "}
        <Link href="/guides/redresser-mission" className="font-medium text-accent hover:underline">
          Redresser une mission
        </Link>
        .
      </p>
    </SectionMetier>
  );
}
