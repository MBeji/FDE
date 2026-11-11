import type { Metadata } from "next";
import Link from "next/link";
import { GitPullRequestArrow } from "lucide-react";
import { Bibliotheque, type ElementBibliotheque } from "@/components/Bibliotheque";
import { EnTetePage } from "@/components/ui";
import { PHASE_IDS, PHASES_RESUME, TYPES_SAVOIR } from "@/data/referentiels";
import { savoir } from "@/lib/content";

export const metadata: Metadata = { title: "Savoir terrain" };

export default function PageSavoir() {
  const elements: ElementBibliotheque[] = savoir.map((s) => ({
    href: `/savoir/${s.id}`,
    titre: s.titre,
    resume: s.resume,
    groupe: s.type,
    pastilles: [
      ...(s.secteur ? [{ nom: s.secteur }] : []),
      ...s.phases.slice(0, 3).map((p) => ({ nom: PHASES_RESUME[p].nom })),
    ],
    valeurs: { phase: s.phases, type: [s.type] },
    motsCles: `${s.tags.join(" ")} ${s.secteur}`,
  }));

  return (
    <>
      <EnTetePage
        surtitre="Capitalisation"
        titre="Savoir terrain"
        chapo="Ce que les missions nous ont appris : les pratiques qui marchent, les pièges dans lesquels on retombe, et les retours d'expérience. Cette bibliothèque grandit à chaque mission."
      />
      <div className="mb-8 flex flex-col gap-3 rounded-xl border border-accent-line bg-accent-soft p-4 sm:flex-row sm:items-center">
        <GitPullRequestArrow className="size-5 flex-none text-accent" aria-hidden />
        <p className="flex-1 text-[0.9rem] leading-relaxed text-ink">
          <strong className="font-semibold">Contribuer.</strong> Une fiche de savoir est un fichier
          Markdown dans <code className="rounded bg-surface px-1 py-px font-mono text-[0.8rem]">content/savoir</code>,
          proposé par pull request et relu par un pair. Le journal de votre mission prépare le
          brouillon pour vous.
        </p>
        <Link
          href="/guides/capitaliser"
          className="flex-none text-[0.85rem] font-medium text-accent hover:underline"
        >
          Lire le guide
        </Link>
      </div>
      <Bibliotheque
        elements={elements}
        placeholder="Filtrer le savoir terrain…"
        groupes={Object.entries(TYPES_SAVOIR).map(([valeur, t]) => ({
          valeur,
          nom: t.pluriel,
          description: t.description,
        }))}
        filtres={[
          {
            cle: "phase",
            nom: "Phase",
            options: PHASE_IDS.map((p) => ({
              valeur: p,
              nom: `${PHASES_RESUME[p].numero}. ${PHASES_RESUME[p].nom}`,
            })),
          },
        ]}
      />
    </>
  );
}
