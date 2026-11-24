import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { BlocRail, LiensPhases, ListeLiens, MiseEnPageDocument, Sommaire } from "@/components/Document";
import { Markdown } from "@/components/Markdown";
import { ActionsSkill } from "@/components/skills/ActionsSkill";
import { LigneFiche, PastilleRole, PastilleStatut } from "@/components/skills/commun";
import { EnTetePage, Pastille } from "@/components/ui";
import { OUTILS } from "@/data/referentiels";
import {
  getFicheSavoir,
  getFramework,
  getGuide,
  getSkill,
  getTemplate,
  resoudre,
  skills,
  taxonomieSkills,
} from "@/lib/content";
import {
  nomCasUsage,
  nomDiffusion,
  nomDomaine,
  nomEtape,
  nomProprietaire,
  nomRole,
  nomSousProcessus,
  nomStatut,
  nomTechnologie,
  rangEtape,
  skillBrut,
  skillsAval,
  workflowsDuSkill,
} from "@/lib/skills";

export function generateStaticParams() {
  return skills.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps<"/skills/[id]">): Promise<Metadata> {
  const s = getSkill((await params).id);
  return s ? { title: `${s.titre} · Skill`, description: s.description } : {};
}

const dateLongue = (iso: string) =>
  iso ? new Date(`${iso}T00:00:00Z`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }) : "—";

function ListeTextes({ elements }: { elements: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {elements.map((e) => (
        <li key={e} className="flex gap-2 text-[0.84rem] leading-snug text-ink-2">
          <span className="mt-[0.5rem] size-1 flex-none rounded-full bg-line-strong" aria-hidden />
          {e}
        </li>
      ))}
    </ul>
  );
}

export default async function PageSkill({ params }: PageProps<"/skills/[id]">) {
  const s = getSkill((await params).id);
  if (!s) notFound();

  const amont = resoudre(s.prerequis, getSkill);
  const aval = skillsAval(s.id);
  const dansWorkflows = workflowsDuSkill(s.id);
  const remplacant = s.remplacePar ? getSkill(s.remplacePar) : undefined;
  const templatesLies = resoudre(s.ressources.templates, getTemplate);
  const frameworksLies = resoudre(s.ressources.frameworks, getFramework);
  const guidesLies = resoudre(s.ressources.guides, getGuide);
  const savoirLie = resoudre(s.ressources.savoir, getFicheSavoir);
  const outilsLies = OUTILS.filter((o) => s.ressources.outils.includes(o.id));

  return (
    <MiseEnPageDocument
      rail={
        <>
          <BoutonCopilote
            brouillon={`Applique le skill « ${s.titre} » à ma mission, en suivant sa procédure et ses garde-fous. Voici les entrées dont je dispose : `}
            className="self-start"
          >
            Appliquer avec le copilote
          </BoutonCopilote>
          <Sommaire titres={s.titres} />
          <BlocRail titre="Classification">
            <dl>
              <LigneFiche libelle="Étape">
                <Link href={`/skills#groupe-${s.etape}`} className="hover:text-accent">
                  {rangEtape(s.etape)}. {nomEtape(s.etape)}
                </Link>
              </LigneFiche>
              <LigneFiche libelle="Sous-processus">{nomSousProcessus(s.etape, s.sousProcessus)}</LigneFiche>
              <LigneFiche libelle="Rôle">
                <Link href={`/skills?role=${s.role}`} className="hover:text-accent">
                  {nomRole(s.role)}
                </Link>
              </LigneFiche>
              <LigneFiche libelle="Domaine">{nomDomaine(s.domaine)}</LigneFiche>
              <LigneFiche libelle="Technologies">
                {s.technologies.length ? s.technologies.map(nomTechnologie).join(", ") : "Indépendant de la technologie"}
              </LigneFiche>
              <LigneFiche libelle="Cas d'usage">{s.casUsage.map(nomCasUsage).join(", ")}</LigneFiche>
            </dl>
          </BlocRail>
          {s.phases.length > 0 && (
            <BlocRail titre="Parcours AI-Native">
              <LiensPhases phases={s.phases} />
            </BlocRail>
          )}
          <BlocRail titre="Ce qu'il consomme">
            <ListeTextes elements={s.entrees} />
          </BlocRail>
          <BlocRail titre="Ce qu'il produit">
            <ListeTextes elements={s.sorties} />
          </BlocRail>
          {amont.length > 0 && (
            <BlocRail titre="Skills en amont">
              <ListeLiens section="skills" elements={amont} />
            </BlocRail>
          )}
          {aval.length > 0 && (
            <BlocRail titre="Skills en aval">
              <ListeLiens section="skills" elements={aval} />
            </BlocRail>
          )}
          {dansWorkflows.length > 0 && (
            <BlocRail titre="Workflows qui le mobilisent">
              <ul className="flex flex-col gap-1">
                {dansWorkflows.map((w) => (
                  <li key={w.id}>
                    <Link
                      href={`/skills/workflows/${w.id}`}
                      className="-mx-2 flex items-start gap-1.5 rounded-md px-2 py-1 text-[0.84rem] text-ink-2 hover:bg-surface-2 hover:text-ink"
                    >
                      <ArrowRight className="mt-[0.2rem] size-3.5 flex-none text-ink-3" aria-hidden />
                      {w.titre}
                    </Link>
                  </li>
                ))}
              </ul>
            </BlocRail>
          )}
          {templatesLies.length > 0 && (
            <BlocRail titre="Templates">
              <ListeLiens section="templates" elements={templatesLies} />
            </BlocRail>
          )}
          {frameworksLies.length > 0 && (
            <BlocRail titre="Frameworks">
              <ListeLiens section="frameworks" elements={frameworksLies} />
            </BlocRail>
          )}
          {(guidesLies.length > 0 || savoirLie.length > 0) && (
            <BlocRail titre="Guides et savoir terrain">
              <ListeLiens section="guides" elements={guidesLies} />
              <ListeLiens section="savoir" elements={savoirLie} />
            </BlocRail>
          )}
          {(outilsLies.length > 0 || s.ressources.standards.length > 0) && (
            <BlocRail titre="Ateliers et standards">
              <ul className="flex flex-wrap gap-1.5">
                {outilsLies.map((o) => (
                  <li key={o.id}>
                    <Link href={`/outils/${o.id}`} className="rounded-md border border-line px-2 py-0.5 text-[0.78rem] text-ink-2 hover:border-line-strong hover:text-ink">
                      {o.nom}
                    </Link>
                  </li>
                ))}
                {s.ressources.standards.map((id) => (
                  <li key={id}>
                    <Link href={`/standards#${id}`} className="rounded-md border border-line px-2 py-0.5 font-mono text-[0.74rem] text-ink-2 hover:border-line-strong hover:text-ink">
                      {id}
                    </Link>
                  </li>
                ))}
              </ul>
            </BlocRail>
          )}
          <BlocRail titre="Gouvernance">
            <dl>
              <LigneFiche libelle="Propriétaire">{nomProprietaire(s.proprietaire)}</LigneFiche>
              <LigneFiche libelle="Diffusion">{nomDiffusion(s.diffusion)}</LigneFiche>
              <LigneFiche libelle="Révisé le">{dateLongue(s.reviseLe)}</LigneFiche>
              <LigneFiche libelle="Fichier">
                <span className="font-mono text-[0.72rem] break-all text-ink-2">{s.fichier}</span>
              </LigneFiche>
            </dl>
            <Link href="/skills/gouvernance" className="mt-2 inline-flex items-center gap-1 text-[0.8rem] font-medium text-accent hover:underline">
              Proposer une évolution
              <ArrowRight className="size-3" aria-hidden />
            </Link>
          </BlocRail>
          <BlocRail titre="Historique des versions">
            <ol className="flex flex-col gap-2.5">
              {s.historique.map((h) => (
                <li key={h.version} className="text-[0.82rem] leading-snug">
                  <p className="text-ink">
                    <span className="font-mono font-semibold">{h.version}</span>
                    <span className="text-ink-3"> · {dateLongue(h.date)}</span>
                  </p>
                  <ul className="mt-0.5 text-ink-2">
                    {h.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </BlocRail>
        </>
      }
    >
      <EnTetePage
        fil={[{ href: "/skills", nom: "Skills IA" }]}
        surtitre={`${nomEtape(s.etape)} · ${nomSousProcessus(s.etape, s.sousProcessus)}`}
        titre={s.titre}
        chapo={s.description}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <PastilleRole role={s.role} nom={nomRole(s.role)} />
            <PastilleStatut statut={s.statut} nom={nomStatut(s.statut)} />
            <Pastille className="font-mono">v{s.version}</Pastille>
            <Pastille className="font-mono">{s.id}</Pastille>
            {s.aReviser && <Pastille ton="alerte">À réviser</Pastille>}
          </div>
          <ActionsSkill id={s.id} brut={skillBrut(s)} />
        </div>
      </EnTetePage>

      {s.statut !== "publie" && (
        <aside className="mb-6 flex gap-3 rounded-[10px] border border-warning/50 bg-warning-soft px-4 py-3.5 text-[0.9rem] leading-relaxed text-ink">
          <TriangleAlert className="mt-0.5 size-4 flex-none text-warning-ink" aria-hidden />
          <p>
            {taxonomieSkills.statuts.find((x) => x.id === s.statut)?.resume}
            {remplacant && (
              <>
                {" "}
                Remplacé par{" "}
                <Link href={`/skills/${remplacant.id}`} className="font-medium text-accent hover:underline">
                  {remplacant.titre}
                </Link>
                .
              </>
            )}
          </p>
        </aside>
      )}

      <Markdown>{s.corps}</Markdown>
    </MiseEnPageDocument>
  );
}
