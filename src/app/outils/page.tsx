import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EnTetePage, Pastille } from "@/components/ui";
import { OUTILS, PHASES_RESUME } from "@/data/referentiels";
import { ICONES_OUTILS } from "@/lib/navigation";

export const metadata: Metadata = { title: "Ateliers" };

export default function PageOutils() {
  return (
    <>
      <EnTetePage
        surtitre="Ateliers"
        titre="Des outils qui produisent un livrable"
        chapo="Chaque atelier outille un moment précis de la mission et se termine par un résultat exportable en Markdown, enregistrable dans votre mission. Votre travail en cours est conservé sur ce poste."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {OUTILS.map((o) => {
          const Icone = ICONES_OUTILS[o.id];
          return (
            <Link
              key={o.id}
              href={`/outils/${o.id}`}
              className="group flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-card transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-pop"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-10 flex-none items-center justify-center rounded-xl bg-surface-2 text-ink-2 group-hover:bg-accent-soft group-hover:text-accent">
                  <Icone className="size-5" aria-hidden />
                </span>
                <span className="text-[1.1rem] font-semibold text-ink">{o.nom}</span>
                <ArrowRight className="ml-auto size-4 text-ink-3 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
              <span className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{o.resume}</span>
              <span className="mt-4 flex flex-wrap gap-1.5">
                {o.phases.map((p) => (
                  <Pastille key={p}>
                    {PHASES_RESUME[p].numero}. {PHASES_RESUME[p].nom}
                  </Pastille>
                ))}
                <Pastille>{o.duree}</Pastille>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
