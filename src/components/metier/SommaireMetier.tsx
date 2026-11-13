import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SECTIONS_METIER } from "@/components/metier/commun";

const LIENS_PARCOURS = [
  { href: "/guides/posture-fde", nom: "La posture du FDE" },
  { href: "/raci", nom: "Le binôme Design · Build (RACI)" },
  { href: "/onboarding", nom: "Parcours d'intégration" },
  { href: "/competences", nom: "Référentiel de compétences" },
  { href: "/guides/gerer-resistances", nom: "Gérer les résistances" },
  { href: "/guides/redresser-mission", nom: "Redresser une mission" },
];

export function SommaireMetier() {
  return (
    <div data-metier-masquable="" className="hors-impression mb-10 grid gap-4 lg:grid-cols-[1fr_18rem]">
      <nav aria-label="Sommaire de la page" className="rounded-xl border border-line bg-surface p-4 shadow-card">
        <p className="surtitre mb-3">Sommaire</p>
        <ol className="grid gap-1 sm:grid-cols-2 xl:grid-cols-3">
          {SECTIONS_METIER.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex gap-3 rounded-lg px-2 py-2 hover:bg-surface-2"
              >
                <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-md bg-accent-soft text-[0.75rem] font-semibold text-accent">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-[0.9rem] font-semibold text-ink group-hover:text-accent">{s.titre}</span>
                  <span className="block text-[0.78rem] leading-snug text-ink-3">{s.resume}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <aside aria-label="Pages liées" className="rounded-xl border border-line bg-surface-2 p-4">
        <p className="surtitre mb-3">À lire avec cette page</p>
        <ul className="space-y-1.5">
          {LIENS_PARCOURS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex items-center justify-between gap-2 text-[0.86rem] font-medium text-ink hover:text-accent"
              >
                {l.nom}
                <ArrowRight className="size-3.5 flex-none text-ink-3" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
