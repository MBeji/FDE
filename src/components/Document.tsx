import Link from "next/link";
import type { ReactNode } from "react";
import { FileText, Shapes, Compass, Route, Library, type LucideIcon } from "lucide-react";
import { PHASES_RESUME } from "@/data/referentiels";
import type { PhaseId } from "@/data/types";
import type { Titre } from "@/lib/content";

/* Mise en page commune des pages de contenu : article + rail latéral. */

export function MiseEnPageDocument({ children, rail }: { children: ReactNode; rail: ReactNode }) {
  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_17rem]">
      <article className="min-w-0">{children}</article>
      <aside className="hors-impression flex flex-col gap-7 xl:sticky xl:top-20 xl:max-h-[calc(100dvh-6rem)] xl:self-start xl:overflow-y-auto xl:pr-1">
        {rail}
      </aside>
    </div>
  );
}

export function BlocRail({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <section>
      <p className="surtitre mb-2">{titre}</p>
      {children}
    </section>
  );
}

export function Sommaire({ titres }: { titres: Titre[] }) {
  const niveau2 = titres.filter((t) => t.niveau === 2);
  if (niveau2.length < 2) return null;
  return (
    <BlocRail titre="Sur cette page">
      <ul className="flex flex-col border-l border-line">
        {niveau2.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className="-ml-px block border-l border-transparent py-1 pl-3 text-[0.82rem] text-ink-2 hover:border-ink hover:text-ink"
            >
              {t.texte}
            </a>
          </li>
        ))}
      </ul>
    </BlocRail>
  );
}

const ICONES: Record<string, LucideIcon> = {
  frameworks: Shapes,
  templates: FileText,
  guides: Compass,
  savoir: Library,
  methode: Route,
};

export function ListeLiens({
  section,
  elements,
}: {
  section: "frameworks" | "templates" | "guides" | "savoir";
  elements: { id: string; titre: string }[];
}) {
  const Icone = ICONES[section];
  return (
    <ul className="flex flex-col gap-0.5">
      {elements.map((e) => (
        <li key={e.id}>
          <Link
            href={`/${section}/${e.id}`}
            className="-mx-2 flex items-start gap-2 rounded-md px-2 py-1 text-[0.84rem] text-ink-2 hover:bg-surface-2 hover:text-ink"
          >
            <Icone className="mt-[0.2rem] size-3.5 flex-none text-ink-3" aria-hidden />
            <span>{e.titre}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function LiensPhases({ phases }: { phases: (PhaseId | "transverse")[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {phases.map((p) =>
        p === "transverse" ? (
          <li key={p} className="rounded-md border border-line px-2 py-0.5 text-[0.78rem] text-ink-2">
            Toutes les phases
          </li>
        ) : (
          <li key={p}>
            <Link
              href={`/methode/${p}`}
              className="flex items-center gap-1.5 rounded-md border border-line px-2 py-0.5 text-[0.78rem] text-ink-2 hover:border-line-strong hover:text-ink"
            >
              <span className="font-semibold text-ink tabular-nums">{PHASES_RESUME[p].numero}</span>
              {PHASES_RESUME[p].nom}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
