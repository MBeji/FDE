import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Flag, Zap } from "lucide-react";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { BlocRail, ListeLiens, MiseEnPageDocument, Sommaire } from "@/components/Document";
import { Markdown } from "@/components/Markdown";
import { DerouleWorkflow, LigneFiche, PastilleStatut, type EtapeAffichee } from "@/components/skills/commun";
import { EnTetePage, Pastille } from "@/components/ui";
import { getSkill, getWorkflow, workflows } from "@/lib/content";
import { nomProprietaire, nomRole, nomStatut } from "@/lib/skills";

export function generateStaticParams() {
  return workflows.map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: PageProps<"/skills/workflows/[id]">): Promise<Metadata> {
  const w = getWorkflow((await params).id);
  return w ? { title: `${w.titre} · Workflow`, description: w.resume } : {};
}

export default async function PageWorkflow({ params }: PageProps<"/skills/workflows/[id]">) {
  const w = getWorkflow((await params).id);
  if (!w) notFound();

  const etapes: EtapeAffichee[] = w.etapes.map((e, i) => {
    const s = getSkill(e.skill);
    if (!s) throw new Error(`Workflow ${w.id} : skill inconnu « ${e.skill} »`);
    return {
      rang: i + 1,
      skill: { id: s.id, titre: s.titre, description: s.description, role: s.role, nomRole: nomRole(s.role) },
      intention: e.intention,
      controle: e.controle,
    };
  });
  const skillsDistincts = [...new Map(etapes.map((e) => [e.skill.id, e.skill])).values()];
  const controles = etapes.filter((e) => e.controle);
  const autres = workflows.filter((x) => x.id !== w.id);

  return (
    <MiseEnPageDocument
      rail={
        <>
          <BoutonCopilote
            brouillon={`Déroule avec moi le workflow « ${w.titre} », étape par étape, en appliquant le skill de chaque étape et en t'arrêtant aux points de contrôle humains. Voici ma situation : `}
            className="self-start"
          >
            Dérouler avec le copilote
          </BoutonCopilote>
          <Sommaire titres={[{ niveau: 2, texte: "Déroulé", id: "deroule" }, ...w.titres]} />
          <BlocRail titre="Fiche">
            <dl>
              <LigneFiche libelle="Version">
                <span className="font-mono">{w.version}</span>
              </LigneFiche>
              <LigneFiche libelle="Statut">{nomStatut(w.statut)}</LigneFiche>
              <LigneFiche libelle="Propriétaire">{nomProprietaire(w.proprietaire)}</LigneFiche>
              <LigneFiche libelle="Fichier">
                <span className="font-mono text-[0.72rem] break-all text-ink-2">{w.fichier}</span>
              </LigneFiche>
            </dl>
          </BlocRail>
          <BlocRail titre="Décisions qui restent humaines">
            <ul className="flex flex-col gap-2">
              {controles.map((e) => (
                <li key={e.rang} className="text-[0.82rem] leading-snug text-ink-2">
                  <span className="font-semibold text-ink tabular-nums">Étape {e.rang}. </span>
                  {e.controle}
                </li>
              ))}
            </ul>
          </BlocRail>
          <BlocRail titre="Skills mobilisés">
            <ListeLiens section="skills" elements={skillsDistincts} />
          </BlocRail>
          <BlocRail titre="Autres workflows">
            <ul className="flex flex-col gap-0.5">
              {autres.map((x) => (
                <li key={x.id}>
                  <Link
                    href={`/skills/workflows/${x.id}`}
                    className="-mx-2 block rounded-md px-2 py-1 text-[0.84rem] text-ink-2 hover:bg-surface-2 hover:text-ink"
                  >
                    {x.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </BlocRail>
        </>
      }
    >
      <EnTetePage
        fil={[
          { href: "/skills", nom: "Skills IA" },
          { href: "/skills/workflows", nom: "Workflows agentiques" },
        ]}
        surtitre="Workflow agentique"
        titre={w.titre}
        chapo={w.resume}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          <PastilleStatut statut={w.statut} nom={nomStatut(w.statut)} />
          <Pastille className="font-mono">v{w.version}</Pastille>
          <Pastille>{etapes.length} étapes</Pastille>
          <Pastille ton="alerte">
            {controles.length} contrôle{controles.length > 1 ? "s" : ""} humain{controles.length > 1 ? "s" : ""}
          </Pastille>
        </div>
      </EnTetePage>

      <dl className="mb-8 grid gap-3 md:grid-cols-2">
        <div className="flex gap-2.5 rounded-xl border border-line bg-surface p-4 shadow-card">
          <Zap className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
          <div>
            <dt className="text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">Déclencheur</dt>
            <dd className="mt-1 text-[0.9rem] leading-snug text-ink">{w.declencheur}</dd>
          </div>
        </div>
        <div className="flex gap-2.5 rounded-xl border border-line bg-surface p-4 shadow-card">
          <Flag className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
          <div>
            <dt className="text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">Résultat</dt>
            <dd className="mt-1 text-[0.9rem] leading-snug text-ink">{w.resultat}</dd>
          </div>
        </div>
      </dl>

      <section aria-labelledby="deroule" className="mb-10">
        <h2 id="deroule" className="mb-4 scroll-mt-24 text-[1.25rem] font-semibold tracking-tight text-ink">
          Déroulé
        </h2>
        <DerouleWorkflow etapes={etapes} />
      </section>

      <Markdown>{w.corps}</Markdown>
    </MiseEnPageDocument>
  );
}
