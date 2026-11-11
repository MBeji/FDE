import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";
import { CarteParcours } from "@/components/Parcours";
import { Carte, EnTetePage, TitreSection } from "@/components/ui";
import { CONVICTIONS, PHASE_IDS, PHASES_RESUME } from "@/data/referentiels";
import { cn } from "@/lib/cn";
import { FORMATS_MISSION } from "@/lib/missions-modele";

export const metadata: Metadata = { title: "Parcours AI-Native" };

export default function PageMethode() {
  return (
    <>
      <EnTetePage
        surtitre="La méthode"
        titre="Le Parcours AI-Native"
        chapo="Huit phases pour conduire un client du problème métier à une organisation qui opère ses propres agents. Chaque phase a ses activités, ses livrables, et un jalon qui dit à quelles conditions on continue, et à quels signaux on s'arrête."
      />

      <CarteParcours />

      <section className="mt-14">
        <TitreSection
          titre="Huit convictions"
          description="Ce qui distingue notre façon de faire. Elles tranchent quand la méthode ne dit rien."
        />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CONVICTIONS.map((c, i) => (
            <li key={c.titre}>
              <Carte className="h-full p-4">
                <p className="titre-editorial text-[1.4rem] leading-none text-ink-3">{i + 1}</p>
                <h3 className="mt-2.5 text-[0.95rem] leading-snug font-semibold text-ink">{c.titre}</h3>
                <p className="mt-1.5 text-[0.84rem] leading-relaxed text-ink-2">{c.texte}</p>
              </Carte>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <TitreSection
          titre="Cinq formats de mission"
          description="Toutes les missions ne parcourent pas les huit phases. Le format fixe celles qui sont dans le mandat."
          action={{ href: "/missions", nom: "Créer une mission" }}
        />
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
          {Object.entries(FORMATS_MISSION).map(([id, f]) => (
            <div
              key={id}
              className="grid gap-x-6 gap-y-2 border-b border-line p-4 last:border-b-0 md:grid-cols-[14rem_1fr_auto] md:items-center"
            >
              <div>
                <h3 className="text-[0.95rem] font-semibold text-ink">{f.nom}</h3>
                <p className="text-[0.78rem] text-ink-3">{f.duree}</p>
              </div>
              <p className="text-[0.86rem] leading-relaxed text-ink-2">{f.description}</p>
              <ol className="flex gap-1" aria-label={`Phases couvertes : ${f.phases.map((p) => PHASES_RESUME[p].nom).join(", ")}`}>
                {PHASE_IDS.map((p) => {
                  const couverte = f.phases.includes(p);
                  return (
                    <li
                      key={p}
                      title={`${PHASES_RESUME[p].numero}. ${PHASES_RESUME[p].nom}`}
                      className={cn(
                        "flex size-6 items-center justify-center rounded-md text-[0.7rem] font-semibold tabular-nums",
                        couverte ? "bg-ink text-bg" : "border border-line text-ink-3",
                      )}
                    >
                      {PHASES_RESUME[p].numero}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <Link
        href="/guides/cas-fil-rouge"
        className="group mt-14 flex flex-col gap-4 rounded-2xl border border-line bg-ink p-6 text-bg sm:flex-row sm:items-center"
      >
        <BookMarked className="size-8 flex-none opacity-70" aria-hidden />
        <div className="flex-1">
          <p className="titre-editorial text-[1.35rem]">Voir la méthode à l&apos;œuvre : la mission Voxalis</p>
          <p className="mt-1 text-[0.9rem] leading-relaxed opacity-75">
            Une mission complète racontée de bout en bout, de la reformulation du problème à la mesure
            de la valeur. Tous les exemples de livrables du portail en sont tirés.
          </p>
        </div>
        <ArrowRight className="size-5 flex-none transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
    </>
  );
}
