import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResumeMission } from "@/components/missions/ResumeMission";
import { CarteParcours } from "@/components/Parcours";
import { CarteLien, Pastille, TitreSection, classesBouton } from "@/components/ui";
import { casUsage } from "@/data/cas-usage";
import { glossaire } from "@/data/glossaire";
import { OUTILS, PHASES_RESUME } from "@/data/referentiels";
import { getFramework, getGuide, statistiques } from "@/lib/content";
import { definitionsPhases } from "@/lib/definitions";
import { ICONES_OUTILS } from "@/lib/navigation";

const DEMARRER = [
  { href: "/guides/cas-fil-rouge", repli: "Cas fil rouge : la mission Voxalis", etiquette: "À lire en premier" },
  { href: "/guides/posture-fde", repli: "La posture du FDE", etiquette: "Le métier" },
  { href: "/guides/premiers-jours", repli: "Réussir les dix premiers jours", etiquette: "En mission" },
  { href: "/frameworks/faut-il-un-agent", repli: "Faut-il un agent ?", etiquette: "Le réflexe" },
];

export default function Accueil() {
  const bibliotheque = [
    { href: "/frameworks", nom: "Frameworks", nombre: statistiques.frameworks, texte: "Du problème à l'agent en production" },
    { href: "/templates", nom: "Templates", nombre: statistiques.templates, texte: "Vierges et remplis sur le cas fil rouge" },
    { href: "/guides", nom: "Guides pratiques", nombre: statistiques.guides, texte: "Les gestes du métier, pas à pas" },
    { href: "/cas-usage", nom: "Cas d'usage", nombre: casUsage.length, texte: "Par secteur et par fonction" },
    { href: "/savoir", nom: "Fiches de savoir", nombre: statistiques.savoir, texte: "Patterns, anti-patterns, REX" },
    { href: "/glossaire", nom: "Termes définis", nombre: glossaire.length, texte: "Le vocabulaire commun" },
  ];

  return (
    <>
      <section className="mb-10">
        <p className="surtitre mb-3">L&apos;environnement de travail des Forward Deployed Engineers</p>
        <h1 className="titre-editorial max-w-4xl text-[2.3rem] leading-[1.08] text-balance text-ink sm:text-[3.2rem]">
          Du problème métier à l&apos;organisation qui opère ses propres agents.
        </h1>
        <p className="mt-5 max-w-3xl text-[1.08rem] leading-relaxed text-pretty text-ink-2">
          Une méthode en huit phases, les frameworks et les livrables de chaque étape, des ateliers pour
          produire, un espace pour piloter votre mission et un copilote qui connaît tout cela.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <Link href="/methode" className={classesBouton("primaire")}>
            Découvrir la méthode
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link href="/guides/cas-fil-rouge" className={classesBouton("secondaire")}>
            Lire le cas fil rouge
          </Link>
        </div>
      </section>

      <ResumeMission definitions={definitionsPhases} />

      <section className="mt-14">
        <TitreSection
          titre="Le Parcours AI-Native"
          description="Chaque phase a ses activités, ses livrables et un jalon avec critères de passage et signaux d'arrêt."
          action={{ href: "/methode", nom: "Toute la méthode" }}
        />
        <CarteParcours compact />
      </section>

      <section className="mt-14">
        <TitreSection titre="Par où commencer" description="Quatre lectures pour être opérationnel dès la première semaine." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DEMARRER.map((d) => {
            const id = d.href.split("/").pop()!;
            const doc = d.href.startsWith("/guides") ? getGuide(id) : getFramework(id);
            return (
              <CarteLien
                key={d.href}
                href={d.href}
                titre={doc?.titre ?? d.repli}
                resume={doc?.resume}
                entete={<Pastille ton="accent">{d.etiquette}</Pastille>}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <TitreSection
          titre="Ateliers"
          description="Des outils qui produisent un résultat exploitable, enregistrable dans votre mission."
          action={{ href: "/outils", nom: "Tous les ateliers" }}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {OUTILS.map((o) => {
            const Icone = ICONES_OUTILS[o.id];
            return (
              <Link
                key={o.id}
                href={`/outils/${o.id}`}
                className="group flex gap-3.5 rounded-xl border border-line bg-surface p-4 shadow-card transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-pop"
              >
                <span className="flex size-9 flex-none items-center justify-center rounded-lg bg-surface-2 text-ink-2 group-hover:bg-accent-soft group-hover:text-accent">
                  <Icone className="size-[1.1rem]" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.95rem] font-semibold text-ink">{o.nom}</span>
                  <span className="mt-1 block text-[0.84rem] leading-relaxed text-ink-2">{o.resume}</span>
                  <span className="mt-2 block text-[0.72rem] text-ink-3">
                    {o.phases.map((p) => PHASES_RESUME[p].nom).join(" · ")} · {o.duree}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <TitreSection titre="La bibliothèque" description="Tout le contenu est versionné et s'enrichit par pull request à chaque mission." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {bibliotheque.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="rounded-xl border border-line bg-surface p-4 shadow-card transition-colors hover:border-line-strong"
            >
              <span className="block text-[1.9rem] leading-none font-semibold tracking-tight text-ink">
                {b.nombre}
              </span>
              <span className="mt-2 block text-[0.85rem] font-medium text-ink">{b.nom}</span>
              <span className="mt-0.5 block text-[0.75rem] leading-snug text-ink-3">{b.texte}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
