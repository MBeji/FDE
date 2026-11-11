import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconeSituation } from "@/components/situations/icones";
import { Carte } from "@/components/ui";
import { SITUATIONS } from "@/data/situations";

/**
 * Bloc compact des onze situations, chacune en lien vers /situations#<identifiant>.
 * Sans état : utilisable depuis un composant serveur (page d'accueil).
 */
export function BlocSituations({
  titre = "Que faites-vous en ce moment ?",
}: {
  titre?: string;
}) {
  return (
    <Carte className="p-5">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
        <h2 className="text-[1.05rem] font-semibold tracking-tight text-ink">
          {titre}
        </h2>
        <Link
          href="/situations"
          className="flex items-center gap-1 text-[0.85rem] font-medium text-accent hover:underline"
        >
          Entrer par situation
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
      <ul className="grid gap-x-4 gap-y-0.5 sm:grid-cols-2 lg:grid-cols-3">
        {SITUATIONS.map((s) => (
          <li key={s.id}>
            <Link
              href={`/situations#${s.id}`}
              className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.9rem] text-ink-2 hover:bg-surface-2 hover:text-ink"
            >
              <IconeSituation
                id={s.id}
                className="size-4 flex-none text-ink-3 group-hover:text-accent"
              />
              <span>{s.intitule}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Carte>
  );
}
