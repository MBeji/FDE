import type { ReactNode } from "react";

/** Les sections de la page, dans l'ordre du sommaire. */
export const SECTIONS_METIER = [
  { id: "role", titre: "Le rôle", resume: "Mission, responsabilités, double compétence" },
  { id: "comparatif", titre: "Le FDE et les autres rôles", resume: "Développeur, consultant, architecte, chef de projet" },
  { id: "charte", titre: "La charte FDE", resume: "Douze engagements observables" },
  { id: "pool", titre: "Les règles du pool", resume: "Avant, pendant et après la mission" },
  { id: "situations", titre: "Situations délicates", resume: "Dix fiches réflexes à 48 heures" },
] as const;

export type SectionMetierId = (typeof SECTIONS_METIER)[number]["id"];

/** Section ancrée. `masquable` : masquée quand on imprime la charte seule. */
export function SectionMetier({
  id,
  surtitre,
  titre,
  description,
  masquable = true,
  children,
}: {
  id: SectionMetierId;
  surtitre: string;
  titre: string;
  description?: ReactNode;
  masquable?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`titre-${id}`}
      data-metier-masquable={masquable ? "" : undefined}
      className="scroll-mt-24 border-t border-line pt-10"
    >
      <p className="surtitre mb-2">{surtitre}</p>
      <h2 id={`titre-${id}`} className="text-[1.25rem] leading-snug font-semibold tracking-tight text-ink">
        {titre}
      </h2>
      {description && <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-ink-2">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
