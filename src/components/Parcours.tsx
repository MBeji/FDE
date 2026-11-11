import Link from "next/link";
import { Flag } from "lucide-react";
import { phases } from "@/data/phases";
import { FILS, TEMPS } from "@/data/referentiels";
import type { FilId } from "@/data/types";
import { cn } from "@/lib/cn";

/** La carte du Parcours AI-Native : quatre temps, huit phases, trois fils transverses. */
export function CarteParcours({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-card sm:p-5">
      <div className="grid gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-8">
        {TEMPS.map((temps) => {
          const liste = phases.filter((p) => p.temps === temps);
          return (
            <div
              key={temps}
              className={cn(
                "flex flex-col gap-2",
                liste.length === 3 && "lg:col-span-3",
                liste.length === 2 && "lg:col-span-2",
                liste.length === 1 && "lg:col-span-1",
              )}
            >
              <p className="surtitre flex items-center gap-2">
                {temps}
                <span className="h-px flex-1 bg-line" aria-hidden />
              </p>
              <div
                className={cn(
                  "grid flex-1 gap-2",
                  liste.length === 3 && "lg:grid-cols-3",
                  liste.length === 2 && "lg:grid-cols-2",
                )}
              >
                {liste.map((p) => (
                  <Link
                    key={p.id}
                    href={`/methode/${p.id}`}
                    className="group flex flex-col rounded-xl border border-line bg-bg p-3 transition-[border-color,box-shadow] hover:border-ink hover:shadow-pop"
                  >
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="titre-editorial text-[1.6rem] leading-none text-ink-3 group-hover:text-accent">
                        {p.numero}
                      </span>
                      <span className="text-[0.68rem] text-ink-3">{p.duree.replace("semaines", "sem.")}</span>
                    </span>
                    <span className="mt-2 text-[0.92rem] font-semibold text-ink">{p.nom}</span>
                    {!compact && (
                      <span className="mt-1 text-[0.78rem] leading-snug text-ink-2">{p.promesse}</span>
                    )}
                    <span className="mt-auto flex items-center gap-1 pt-2.5 text-[0.68rem] font-medium text-ink-3">
                      <Flag className="size-3 flex-none" aria-hidden />
                      {p.jalon.code} · {p.jalon.nom}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col gap-1.5 border-t border-line pt-4">
        {(Object.keys(FILS) as FilId[]).map((fil) => (
          <div key={fil} className="flex items-center gap-3">
            <span className="w-20 flex-none text-[0.78rem] font-semibold text-ink">{FILS[fil].nom}</span>
            <span className="relative h-5 flex-1 overflow-hidden rounded-full bg-surface-2">
              <span className="absolute inset-y-0 left-0 flex w-full items-center px-3 text-[0.72rem] text-ink-2">
                <span className="truncate">{FILS[fil].principe}</span>
              </span>
            </span>
          </div>
        ))}
        <p className="mt-1 text-[0.72rem] text-ink-3">
          Trois fils transverses courent sur toutes les phases : ils ne se traitent jamais « à la fin ».
        </p>
      </div>
    </div>
  );
}
