import Link from "next/link";
import { ArrowRight, CalendarCheck, Scale } from "lucide-react";
import { Carte, Pastille } from "@/components/ui";
import { NIVEAUX, REFERENTIELS_EXTERNES, type NiveauStandard } from "@/data/standards";

/* Encadrés statiques de la section Standards (composants serveur). */

const TONS: Record<NiveauStandard, "plein" | "accent" | "neutre"> = {
  obligatoire: "plein",
  recommande: "accent",
  contextuel: "neutre",
};

export function LegendeNiveaux() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {(Object.keys(NIVEAUX) as NiveauStandard[]).map((n) => (
        <Carte key={n} className="p-4">
          <div className="flex items-center gap-2">
            <Pastille ton={TONS[n]}>{NIVEAUX[n].nom}</Pastille>
            <span className="text-[0.8rem] font-medium text-ink-3">{NIVEAUX[n].court}</span>
          </div>
          <p className="mt-2 text-[0.87rem] leading-relaxed text-ink-2">{NIVEAUX[n].definition}</p>
        </Carte>
      ))}
    </div>
  );
}

const MOMENTS = [
  {
    nom: "Fin de conception",
    quand: "Avant le jalon G4 — Conception approuvée",
    portee:
      "Revue sur dossier : architecture, ADR, fiches agents, analyse de risques, plan d'évaluation. Les standards de construction sont jugés sur ce qui est prévu.",
  },
  {
    nom: "Avant le pilote",
    quand: "Avant toute action réelle, mode fantôme compris",
    portee:
      "Revue sur pièces : golden set rejoué, tests adverses, droits des agents, coupe-circuit testé, secrets, traces. Aucun écart obligatoire ouvert sur les domaines agents et cybersécurité.",
  },
  {
    nom: "Avant la mise en production",
    quand:
      "Avant la première vague de généralisation (revue de préparation de la phase Industrialiser), puis avant chaque vague ; constatée au jalon G6",
    portee:
      "Revue complète des dix domaines, homologation du RSSI, runbooks exercés par l'équipe du client. Chaque écart obligatoire restant est arbitré et daté.",
  },
];

export function EncadreUsage() {
  return (
    <Carte className="p-5">
      <div className="flex items-center gap-2">
        <CalendarCheck className="size-4 text-accent" aria-hidden />
        <h2 className="text-[1.05rem] font-semibold text-ink">Quand et comment mener la revue</h2>
      </div>
      <p className="mt-2 max-w-3xl text-[0.9rem] leading-relaxed text-ink-2">
        La revue est menée par un pair qui n&apos;a pas construit le système, en présence du référent technique du client.
        Elle se fonde sur des preuves (configuration, historique, rapports d&apos;évaluation), jamais sur une déclaration.
        Comptez une demi-journée pour une revue complète ; l&apos;export Markdown alimente le registre RAID et le support de
        COPIL.
      </p>
      <ol className="mt-4 grid gap-3 md:grid-cols-3">
        {MOMENTS.map((m, i) => (
          <li key={m.nom} className="rounded-lg border border-line bg-surface-2 p-3.5">
            <p className="surtitre">Revue {i + 1}</p>
            <p className="mt-1 text-[0.92rem] font-semibold text-ink">{m.nom}</p>
            <p className="text-[0.78rem] text-ink-3">{m.quand}</p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-2">{m.portee}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-3.5">
        {[
          { href: "/templates/checklist-securite-conformite", nom: "Checklist sécurité et conformité (revue 1)" },
          { href: "/templates/checklist-llmops", nom: "Checklist LLMOps (revues 2 et 3)" },
          { href: "/templates/checklist-mise-en-production", nom: "Checklist de mise en production" },
          { href: "/frameworks/securite-agents", nom: "Sécurité des agents" },
          { href: "/templates/registre-raid", nom: "Registre RAID" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex items-center gap-1 text-[0.85rem] font-medium text-accent hover:underline"
          >
            {l.nom}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        ))}
      </div>
    </Carte>
  );
}

export function TableReferentiels() {
  return (
    <section aria-labelledby="titre-referentiels">
      <div className="mb-3 flex items-center gap-2">
        <Scale className="size-4 text-accent" aria-hidden />
        <h2 id="titre-referentiels" className="text-[1.1rem] font-semibold tracking-tight text-ink">
          Référentiels externes cités
        </h2>
      </div>
      <p className="mb-4 max-w-3xl text-[0.9rem] text-ink-2">
        Les standards ne remplacent pas ces référentiels : ils en traduisent l&apos;esprit en règles vérifiables sur une
        mission. Citer le référentiel concerné aide à parler le langage du RSSI, du DPO ou de l&apos;auditeur du client.
      </p>
      <div className="overflow-x-auto rounded-xl border border-line bg-surface">
        <table className="w-full min-w-[40rem] border-collapse text-left text-[0.86rem]">
          <thead>
            <tr className="border-b border-line bg-surface-2">
              <th scope="col" className="w-[22%] px-3.5 py-2.5 font-semibold text-ink">
                Référentiel
              </th>
              <th scope="col" className="px-3.5 py-2.5 font-semibold text-ink">
                Ce que c&apos;est
              </th>
              <th scope="col" className="px-3.5 py-2.5 font-semibold text-ink">
                À quoi il nous sert
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(REFERENTIELS_EXTERNES).map(([id, r]) => (
              <tr key={id} className="border-b border-line last:border-b-0 align-top">
                <th scope="row" className="px-3.5 py-2.5 font-medium text-ink">
                  {r.nom}
                </th>
                <td className="px-3.5 py-2.5 leading-relaxed text-ink-2">{r.nature}</td>
                <td className="px-3.5 py-2.5 leading-relaxed text-ink-2">{r.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
