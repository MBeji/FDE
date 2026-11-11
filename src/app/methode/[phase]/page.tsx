import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  CircleHelp,
  Compass,
  FileText,
  Flag,
  OctagonX,
  Shapes,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { BlocRail, ListeLiens, MiseEnPageDocument } from "@/components/Document";
import { Carte, EnTetePage, Pastille, classesBouton } from "@/components/ui";
import { getPhase, phases } from "@/data/phases";
import { FILS, OUTILS } from "@/data/referentiels";
import type { Activite, FilId } from "@/data/types";
import { getFicheSavoir, getFramework, getGuide, getTemplate, resoudre } from "@/lib/content";

export function generateStaticParams() {
  return phases.map((p) => ({ phase: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/methode/[phase]">): Promise<Metadata> {
  const p = getPhase((await params).phase);
  return p ? { title: `${p.numero}. ${p.nom}`, description: p.resume } : {};
}

function Section({ id, titre, children }: { id: string; titre: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-12 scroll-mt-20">
      <h2 className="mb-4 text-[1.2rem] font-semibold tracking-tight text-ink">{titre}</h2>
      {children}
    </section>
  );
}

function Ressources({ activite }: { activite: Activite }) {
  const groupes: { Icone: LucideIcon; liens: { href: string; nom: string }[] }[] = [
    {
      Icone: Shapes,
      liens: resoudre(activite.frameworks, getFramework).map((f) => ({
        href: `/frameworks/${f.id}`,
        nom: f.titre,
      })),
    },
    {
      Icone: FileText,
      liens: resoudre(activite.templates, getTemplate).map((t) => ({
        href: `/templates/${t.id}`,
        nom: t.titre,
      })),
    },
    {
      Icone: Compass,
      liens: resoudre(activite.guides, getGuide).map((g) => ({ href: `/guides/${g.id}`, nom: g.titre })),
    },
    {
      Icone: Wrench,
      liens: (activite.outils ?? [])
        .map((id) => OUTILS.find((o) => o.id === id))
        .filter((o) => o !== undefined)
        .map((o) => ({ href: `/outils/${o.id}`, nom: o.nom })),
    },
  ].filter((g) => g.liens.length);

  if (!groupes.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {groupes.flatMap(({ Icone, liens }) =>
        liens.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="flex items-center gap-1.5 rounded-md border border-line bg-bg px-2 py-1 text-[0.78rem] text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
            >
              <Icone className="size-3 flex-none text-ink-3" aria-hidden />
              {l.nom}
            </Link>
          </li>
        )),
      )}
    </ul>
  );
}

export default async function PagePhase({ params }: PageProps<"/methode/[phase]">) {
  const p = getPhase((await params).phase);
  if (!p) notFound();

  const index = phases.findIndex((x) => x.id === p.id);
  const precedente = phases[index - 1];
  const suivante = phases[index + 1];
  const savoirLie = resoudre(p.savoir, getFicheSavoir);

  const sommaire = [
    ["objectifs", "Objectifs"],
    ["activites", "Activités"],
    ["livrables", "Livrables"],
    ["jalon", `Jalon ${p.jalon.code}`],
    ["fils", "Fils transverses"],
    ["pieges", "Pièges et parades"],
    ["roles", "Rôles"],
  ];

  return (
    <MiseEnPageDocument
      rail={
        <>
          <div className="flex flex-col items-start gap-2">
            <Link href="/missions/active" className={classesBouton("primaire", "sm")}>
              Travailler cette phase dans ma mission
            </Link>
            <BoutonCopilote
              brouillon={`Je suis en phase « ${p.nom} ». Compte tenu de ma mission, par quoi dois-je commencer cette semaine ? `}
            />
          </div>
          <BlocRail titre="Sur cette page">
            <ul className="flex flex-col border-l border-line">
              {sommaire.map(([id, nom]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="-ml-px block border-l border-transparent py-1 pl-3 text-[0.82rem] text-ink-2 hover:border-ink hover:text-ink"
                  >
                    {nom}
                  </a>
                </li>
              ))}
            </ul>
          </BlocRail>
          {savoirLie.length > 0 && (
            <BlocRail titre="Savoir terrain">
              <ListeLiens section="savoir" elements={savoirLie} />
            </BlocRail>
          )}
        </>
      }
    >
      <EnTetePage
        fil={[{ href: "/methode", nom: "Parcours AI-Native" }]}
        surtitre={`Phase ${p.numero} · ${p.temps}`}
        titre={`${p.nom} — ${p.promesse.toLowerCase()}`}
        chapo={p.resume}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          <Pastille>Durée type : {p.duree}</Pastille>
          <Pastille ton="accent">
            <Flag className="size-3" aria-hidden />
            Jalon {p.jalon.code} · {p.jalon.nom}
          </Pastille>
        </div>
      </EnTetePage>

      <div id="objectifs" className="grid scroll-mt-20 gap-4 md:grid-cols-2">
        <Carte className="p-5">
          <h2 className="mb-3 flex items-center gap-2 text-[0.95rem] font-semibold text-ink">
            <Target className="size-4 text-accent" aria-hidden />
            Objectifs
          </h2>
          <ul className="flex flex-col gap-2.5">
            {p.objectifs.map((o) => (
              <li key={o} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink">
                <span className="mt-[0.55rem] size-1.5 flex-none rounded-full bg-series-1" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </Carte>
        <Carte className="p-5">
          <h2 className="mb-3 flex items-center gap-2 text-[0.95rem] font-semibold text-ink">
            <CircleHelp className="size-4 text-accent" aria-hidden />
            Questions auxquelles répondre
          </h2>
          <ul className="flex flex-col gap-2.5">
            {p.questions.map((q) => (
              <li key={q} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-2 italic">
                <span className="mt-[0.55rem] size-1.5 flex-none rounded-full bg-line-strong" aria-hidden />
                {q}
              </li>
            ))}
          </ul>
        </Carte>
      </div>

      <Section id="activites" titre="Activités">
        <ol className="flex flex-col gap-3">
          {p.activites.map((a, i) => (
            <li key={a.id}>
              <Carte className="flex gap-4 p-4 sm:p-5">
                <span className="titre-editorial w-6 flex-none text-[1.5rem] leading-none text-ink-3">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[1rem] font-semibold text-ink">{a.titre}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-2">{a.description}</p>
                  <p className="mt-2 flex gap-2 text-[0.86rem] leading-relaxed text-ink">
                    <CircleCheck className="mt-[0.2rem] size-3.5 flex-none text-good-ink" aria-hidden />
                    <span>
                      <span className="font-medium">Résultat :</span> {a.resultat}
                    </span>
                  </p>
                  <Ressources activite={a} />
                </div>
              </Carte>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="livrables" titre="Livrables">
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
          {p.livrables.map((l) => {
            const template = l.template ? getTemplate(l.template) : undefined;
            return (
              <div
                key={l.titre}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line px-4 py-3 last:border-b-0"
              >
                <FileText className="size-4 flex-none text-ink-3" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="text-[0.92rem] font-medium text-ink">{l.titre}</p>
                  <p className="text-[0.82rem] text-ink-2">{l.description}</p>
                </div>
                <Pastille ton={l.obligatoire ? "plein" : "neutre"}>
                  {l.obligatoire ? "Exigé au jalon" : "Recommandé"}
                </Pastille>
                {template && (
                  <Link
                    href={`/templates/${template.id}`}
                    className="flex items-center gap-1 text-[0.82rem] font-medium text-accent hover:underline"
                  >
                    Template
                    <ArrowRight className="size-3" aria-hidden />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="jalon" titre={`Jalon ${p.jalon.code} — ${p.jalon.nom}`}>
        <Carte className="overflow-hidden">
          <p className="titre-editorial border-b border-line bg-surface-2 px-5 py-4 text-[1.15rem] leading-snug text-ink">
            « {p.jalon.question} »
          </p>
          <div className="grid md:grid-cols-2">
            <div className="p-5">
              <h3 className="mb-3 flex items-center gap-2 text-[0.85rem] font-semibold text-good-ink">
                <CircleCheck className="size-4" aria-hidden />
                On passe à la suite si
              </h3>
              <ul className="flex flex-col gap-2">
                {p.jalon.criteres.map((c) => (
                  <li key={c} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-ink">
                    <span className="mt-[0.5rem] size-1.5 flex-none rounded-full bg-good" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-line p-5 md:border-t-0 md:border-l">
              <h3 className="mb-3 flex items-center gap-2 text-[0.85rem] font-semibold text-critical-ink">
                <OctagonX className="size-4" aria-hidden />
                On s&apos;arrête ou on réoriente si
              </h3>
              <ul className="flex flex-col gap-2">
                {p.jalon.arret.map((c) => (
                  <li key={c} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-ink">
                    <span className="mt-[0.5rem] size-1.5 flex-none rounded-full bg-critical" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Carte>
      </Section>

      <Section id="fils" titre="Fils transverses dans cette phase">
        <div className="grid gap-3 md:grid-cols-3">
          {(Object.keys(FILS) as FilId[]).map((fil) => (
            <Carte key={fil} className="p-4">
              <h3 className="surtitre mb-2">{FILS[fil].nom}</h3>
              <p className="text-[0.88rem] leading-relaxed text-ink">{p.fils[fil]}</p>
            </Carte>
          ))}
        </div>
      </Section>

      <Section id="pieges" titre="Pièges et parades">
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
          {p.pieges.map((x) => (
            <div key={x.titre} className="grid gap-x-6 gap-y-1 border-b border-line px-4 py-3.5 last:border-b-0 md:grid-cols-[2fr_3fr]">
              <p className="text-[0.9rem] font-medium text-ink">{x.titre}</p>
              <p className="text-[0.88rem] leading-relaxed text-ink-2">{x.parade}</p>
            </div>
          ))}
        </div>
        <ul className="mt-4 flex flex-col gap-2 rounded-xl border border-accent-line bg-accent-soft p-4">
          {p.conseils.map((c) => (
            <li key={c} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-ink">
              <span className="mt-[0.5rem] size-1.5 flex-none rounded-full bg-series-1" aria-hidden />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="roles" titre="Qui fait quoi">
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {p.roles.map((r) => (
            <div key={r.role} className="border-t border-line pt-3">
              <dt className="text-[0.9rem] font-semibold text-ink">{r.role}</dt>
              <dd className="mt-0.5 text-[0.86rem] leading-relaxed text-ink-2">{r.contribution}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <nav className="hors-impression mt-14 grid gap-3 border-t border-line pt-6 sm:grid-cols-2" aria-label="Phases voisines">
        {precedente ? (
          <Link href={`/methode/${precedente.id}`} className="group rounded-xl border border-line p-4 hover:border-line-strong">
            <span className="flex items-center gap-1.5 text-[0.75rem] text-ink-3">
              <ArrowLeft className="size-3" aria-hidden />
              Phase {precedente.numero}
            </span>
            <span className="mt-1 block text-[0.95rem] font-semibold text-ink group-hover:text-accent">
              {precedente.nom}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {suivante && (
          <Link href={`/methode/${suivante.id}`} className="group rounded-xl border border-line p-4 text-right hover:border-line-strong">
            <span className="flex items-center justify-end gap-1.5 text-[0.75rem] text-ink-3">
              Phase {suivante.numero}
              <ArrowRight className="size-3" aria-hidden />
            </span>
            <span className="mt-1 block text-[0.95rem] font-semibold text-ink group-hover:text-accent">
              {suivante.nom}
            </span>
          </Link>
        )}
      </nav>
    </MiseEnPageDocument>
  );
}
