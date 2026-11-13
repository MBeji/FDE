import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Cpu,
  BriefcaseBusiness,
  Info,
  MapPin,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import { ExportRaci } from "@/components/raci/ExportRaci";
import { CodeRaciPastille } from "@/components/raci/CodeRaci";
import { MatriceRaci, type PhaseResumee } from "@/components/raci/MatriceRaci";
import { EnTetePage } from "@/components/ui";
import { phases } from "@/data/phases";
import {
  ARBITRAGES,
  CONTRAINTES_DISTANCE,
  CONTRE_TELEPHONE_ARABE,
  DEFINITION_PRET,
  DEFINITION_TERMINE,
  ENGAGEMENTS_COMMUNS,
  ESCALADE,
  LEGENDE_RACI,
  LIGNES_RACI,
  PRINCIPE_BINOME,
  RELAIS,
  RITUELS_BINOME,
  ROLES_BINOME,
  ancrePhaseRaci,
  raciEnMarkdown,
  type Artefact,
  type DefinitionRole,
} from "@/data/raci";
import { getTemplate } from "@/lib/content";

export const metadata: Metadata = {
  title: "RACI Design · Build",
  description:
    "Qui fait quoi dans le binôme FDE Design (sur site) et FDE Build (à distance), du cadrage à la pérennisation : rôles, matrice RACI, passages de relais, rituels, conformité du travail à distance et arbitrages.",
};

const SECTIONS = [
  { id: "roles", titre: "Les deux rôles", resume: "Mission, présence, compétences" },
  { id: "matrice", titre: "Matrice RACI", resume: "Activités, livrables et jalons" },
  { id: "relais", titre: "Passages de relais", resume: "Artefacts, prêt et terminé" },
  { id: "rituels", titre: "Rituels du binôme", resume: "Synchro, écrit, démo, journal" },
  { id: "terrain", titre: "Éviter le téléphone arabe", resume: "Le Build au contact du terrain" },
  { id: "distance", titre: "Travail à distance", resume: "Accès aux données et RGPD" },
  { id: "arbitrages", titre: "Escalade et arbitrages", resume: "Qui tranche, et comment" },
] as const;

function Section({
  id,
  numero,
  titre,
  description,
  children,
}: {
  id: (typeof SECTIONS)[number]["id"];
  numero: number;
  titre: string;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`titre-${id}`} className="scroll-mt-24 border-t border-line pt-10">
      <p className="surtitre mb-2">
        {numero} · {SECTIONS[numero - 1].titre}
      </p>
      <h2 id={`titre-${id}`} className="text-[1.25rem] leading-snug font-semibold tracking-tight text-ink">
        {titre}
      </h2>
      {description && <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-ink-2">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function CarteRole({ role }: { role: DefinitionRole }) {
  const Icone = role.id === "design" ? BriefcaseBusiness : Cpu;
  const Presence = role.id === "design" ? MapPin : MonitorSmartphone;
  return (
    <article className="flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Icone className="size-4 text-accent" aria-hidden />
        <h3 className="text-[1.05rem] font-semibold text-ink">{role.nom}</h3>
      </div>
      <p className="mt-0.5 text-[0.85rem] text-ink-3">{role.accroche}</p>
      <p className="mt-3 text-[0.92rem] leading-relaxed text-ink">{role.mission}</p>
      <div className="mt-4 flex gap-2 rounded-lg bg-surface-2 p-3">
        <Presence className="mt-0.5 size-4 flex-none text-ink-2" aria-hidden />
        <p className="text-[0.86rem] leading-snug text-ink-2">
          <span className="font-semibold text-ink">{role.presence.mode}. </span>
          {role.presence.detail}
        </p>
      </div>
      <p className="mt-4 text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">Responsabilités</p>
      <ul className="mt-1.5 space-y-1.5">
        {role.responsabilites.map((r) => (
          <li key={r} className="flex gap-2 text-[0.87rem] leading-snug text-ink">
            <CheckCircle2 className="mt-0.5 size-3.5 flex-none text-good-ink" aria-hidden />
            {r}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">
        Compétences dominantes · {role.dominante.toLowerCase()}
      </p>
      <ul className="mt-1.5 flex flex-wrap gap-1.5">
        {role.competences.map((c) => (
          <li key={c} className="rounded-md border border-line bg-bg px-2 py-0.5 text-[0.78rem] text-ink-2">
            {c}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ListeArtefacts({ artefacts }: { artefacts: Artefact[] }) {
  return (
    <ul className="space-y-1.5">
      {artefacts.map((a) => {
        const t = a.template ? getTemplate(a.template) : undefined;
        if (a.template && !t) throw new Error(`RACI : template inconnu « ${a.template} »`);
        return (
          <li key={a.libelle} className="text-[0.86rem] leading-snug text-ink">
            {a.libelle}
            {t && (
              <>
                {" "}
                <Link href={`/templates/${t.id}`} className="text-[0.8rem] font-medium whitespace-nowrap text-accent hover:underline">
                  Template
                  <ArrowRight className="ml-0.5 inline size-3" aria-hidden />
                </Link>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ListeCoches({ titre, elements }: { titre: string; elements: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5 shadow-card break-inside-avoid">
      <h3 className="text-[0.98rem] font-semibold text-ink">{titre}</h3>
      <ul className="mt-3 space-y-2">
        {elements.map((e) => (
          <li key={e} className="flex gap-2 text-[0.87rem] leading-snug text-ink">
            <span className="mt-0.5 size-3.5 flex-none rounded-sm border border-line-strong" aria-hidden />
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PageRaci() {
  const phasesResumees: PhaseResumee[] = phases.map((p) => ({
    id: p.id,
    numero: p.numero,
    nom: p.nom,
    ancre: ancrePhaseRaci(p.id),
  }));
  const nomPhase = (id: string) => phases.find((p) => p.id === id);

  return (
    <>
      <EnTetePage
        fil={[{ href: "/metier", nom: "Le métier FDE" }]}
        surtitre="Le métier"
        titre="Le binôme FDE Design · FDE Build : qui fait quoi"
        chapo="Le FDE Design travaille chez le client ; le FDE Build construit à distance, depuis le back-office. Cette page fixe leur répartition, du cadrage à la pérennisation, rattachée aux activités, livrables et jalons du Parcours AI-Native."
      >
        <ExportRaci markdown={raciEnMarkdown()} />
      </EnTetePage>

      <figure className="mb-8 rounded-xl border border-accent-line bg-accent-soft p-5 sm:p-6">
        <p className="text-[0.75rem] font-medium tracking-wide text-accent uppercase">Le principe</p>
        <blockquote className="titre-editorial mt-2 text-[1.1rem] leading-snug text-ink sm:text-[1.25rem]">
          {PRINCIPE_BINOME}
        </blockquote>
        <figcaption className="mt-3 text-[0.86rem] text-ink-2">
          C&apos;est la{" "}
          <Link href="/metier#role" className="font-medium text-accent hover:underline">
            double compétence du FDE
          </Link>{" "}
          répartie sur deux personnes : chacun porte une moitié en dominante et tient les deux conversations.
        </figcaption>
      </figure>

      <nav aria-label="Sommaire de la page" className="hors-impression mb-10 rounded-xl border border-line bg-surface p-4 shadow-card">
        <p className="surtitre mb-3">Sommaire</p>
        <ol className="grid gap-1 sm:grid-cols-2 xl:grid-cols-4">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="group flex gap-3 rounded-lg px-2 py-2 hover:bg-surface-2">
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

      <div className="space-y-12">
        <Section
          id="roles"
          numero={1}
          titre="Deux rôles, un seul résultat"
          description="Chacun a sa dominante et son lieu de travail ; aucun ne peut réussir la mission sans l'autre."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <CarteRole role={ROLES_BINOME.design} />
            <CarteRole role={ROLES_BINOME.build} />
          </div>
          <div className="mt-4 rounded-xl border border-line bg-surface-2 p-5">
            <h3 className="text-[0.98rem] font-semibold text-ink">Ce que le binôme s&apos;engage à tenir ensemble</h3>
            <ul className="mt-2 space-y-1.5">
              {ENGAGEMENTS_COMMUNS.map((e) => (
                <li key={e} className="border-l-2 border-accent-line pl-2.5 text-[0.88rem] leading-snug text-ink">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="matrice"
          numero={2}
          titre="La matrice RACI, phase par phase"
          description={
            <>
              Chaque ligne est une activité, un livrable ou un jalon du{" "}
              <Link href="/methode" className="text-accent hover:underline">
                Parcours AI-Native
              </Link>
              . Un seul A par ligne. Aux jalons, la décision appartient au client : la matrice dit ce que chaque membre du
              binôme prépare et présente.
            </>
          }
        >
          <dl className="mb-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(LEGENDE_RACI) as (keyof typeof LEGENDE_RACI)[]).map((k) => (
              <div key={k} className="flex gap-2.5 rounded-lg border border-line bg-surface p-3">
                <dt className="flex-none">
                  <CodeRaciPastille code={k} />
                </dt>
                <dd className="text-[0.82rem] leading-snug text-ink-2">
                  <span className="font-semibold text-ink">{LEGENDE_RACI[k].nom}. </span>
                  {LEGENDE_RACI[k].definition}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mb-5 flex gap-2 rounded-lg border border-line bg-surface-2 p-3 text-[0.84rem] leading-snug text-ink-2">
            <Info className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
            <span>
              <span className="font-semibold text-ink">A/R</span> : répond du résultat et le réalise.{" "}
              <span className="font-semibold text-ink">Client</span> : le sponsor, le propriétaire du processus, les
              experts, la DSI ou l&apos;exploitation selon la ligne. Cadre proposé : une mission peut déplacer une ligne,
              à condition de l&apos;écrire dans la charte de mission.
            </span>
          </p>
          <MatriceRaci lignes={LIGNES_RACI} phases={phasesResumees} />
        </Section>

        <Section
          id="relais"
          numero={3}
          titre="Interfaces et passages de relais"
          description="Ce qui passe d'une moitié du binôme à l'autre à chaque phase, et à quelles conditions un sujet change de mains."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <ListeCoches titre="Définition de « prêt » : du Design vers le Build" elements={DEFINITION_PRET} />
            <ListeCoches titre="Définition de « terminé » : du Build vers le Design" elements={DEFINITION_TERMINE} />
          </div>
          <ol className="mt-6 space-y-3">
            {RELAIS.map((r) => {
              const p = nomPhase(r.phase);
              return (
                <li key={r.phase} id={`relais-${r.phase}`} className="scroll-mt-24 rounded-xl border border-line bg-surface p-4 shadow-card break-inside-avoid sm:p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[0.98rem] font-semibold text-ink">
                      <Link href={`/methode/${r.phase}`} className="hover:text-accent">
                        Phase {p?.numero} · {p?.nom}
                      </Link>
                    </h3>
                    <p className="text-[0.8rem] text-ink-3">Au plus tard : {r.quand.charAt(0).toLowerCase() + r.quand.slice(1).replace(/\.$/, "")}</p>
                  </div>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">
                        <ArrowDown className="size-3.5" aria-hidden />
                        Du Design vers le Build
                      </p>
                      <ListeArtefacts artefacts={r.versBuild} />
                    </div>
                    <div className="border-t border-line pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-4">
                      <p className="mb-2 flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">
                        <ArrowUp className="size-3.5" aria-hidden />
                        Du Build vers le Design
                      </p>
                      <ListeArtefacts artefacts={r.versDesign} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section
          id="rituels"
          numero={4}
          titre="Les rituels du binôme"
          description={
            <>
              Ils s&apos;ajoutent aux{" "}
              <Link href="/metier#pool" className="text-accent hover:underline">
                rituels du pool
              </Link>{" "}
              (point hebdomadaire avec le client, COPIL, revue de pairs) sans les remplacer.
            </>
          }
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {RITUELS_BINOME.map((r) => (
              <div key={r.nom} className="rounded-xl border border-line bg-surface p-4 shadow-card break-inside-avoid">
                <h3 className="text-[0.95rem] font-semibold text-ink">{r.nom}</h3>
                <p className="mt-0.5 text-[0.8rem] text-ink-3">
                  {r.frequence} · {r.qui}
                </p>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-ink">{r.contenu}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="terrain"
          numero={5}
          titre="Éviter le téléphone arabe"
          description="Le premier risque du binôme est que le Build construise d'après le récit du Design, et non d'après le terrain. Six pratiques le préviennent."
        >
          <ol className="grid gap-3 md:grid-cols-2">
            {CONTRE_TELEPHONE_ARABE.map((x, i) => (
              <li key={x.titre} className="flex gap-3 rounded-xl border border-line bg-surface p-4 break-inside-avoid">
                <span className="titre-editorial w-6 flex-none text-[1.4rem] leading-none text-accent">{i + 1}</span>
                <div>
                  <h3 className="text-[0.93rem] font-semibold text-ink">{x.titre}</h3>
                  <p className="mt-1 text-[0.87rem] leading-relaxed text-ink-2">{x.texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="distance"
          numero={6}
          titre="Travail à distance : accès aux données et conformité"
          description={
            <>
              Travailler à distance sur les données d&apos;un client se prépare au cadrage. Voir aussi les{" "}
              <Link href="/templates/checklist-securite-conformite" className="text-accent hover:underline">
                checklist sécurité et conformité
              </Link>{" "}
              et les{" "}
              <Link href="/standards" className="text-accent hover:underline">
                standards d&apos;ingénierie
              </Link>
              .
            </>
          }
        >
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            {CONTRAINTES_DISTANCE.map((c) => (
              <div key={c.titre} className="grid gap-x-6 gap-y-1.5 border-b border-line px-4 py-4 break-inside-avoid last:border-b-0 md:grid-cols-[1fr_2fr]">
                <h3 className="flex gap-2 text-[0.92rem] font-semibold text-ink">
                  <ShieldCheck className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
                  {c.titre}
                </h3>
                <div>
                  <p className="text-[0.87rem] leading-relaxed text-ink">{c.regle}</p>
                  <p className="mt-1.5 text-[0.82rem] leading-snug text-ink-2">
                    <span className="font-medium text-ink">Contrôle : </span>
                    {c.controle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[0.8rem] leading-snug text-ink-3">
            Ces règles ne remplacent pas l&apos;avis du DPO du client et du juriste du pool, qui restent seuls juges de la base
            juridique d&apos;un transfert.
          </p>
        </Section>

        <Section
          id="arbitrages"
          numero={7}
          titre="Escalade et arbitrages"
          description="Chacun tranche dans sa colonne ; un désaccord qui touche les deux monte, vite et par écrit."
        >
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            {ARBITRAGES.map((a) => (
              <div key={a.sujet} className="grid gap-x-6 gap-y-1 border-b border-line px-4 py-3.5 break-inside-avoid last:border-b-0 md:grid-cols-[2fr_1fr_3fr]">
                <p className="text-[0.88rem] font-medium text-ink">{a.sujet}</p>
                <p className="text-[0.86rem] font-semibold text-accent">{a.tranche}</p>
                <p className="text-[0.86rem] leading-relaxed text-ink-2">{a.comment}</p>
              </div>
            ))}
          </div>
          <ol className="mt-5 grid gap-3 md:grid-cols-3">
            {ESCALADE.map((e) => (
              <li key={e.niveau} className="rounded-xl border border-line bg-surface-2 p-4 break-inside-avoid">
                <h3 className="text-[0.93rem] font-semibold text-ink">{e.niveau}</h3>
                <p className="mt-0.5 text-[0.8rem] text-ink-3">
                  {e.delai} · {e.qui}
                </p>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-ink">{e.comment}</p>
              </li>
            ))}
          </ol>
          <p className="hors-impression mt-5 text-[0.86rem] text-ink-2">
            Pour les tensions avec le client lui-même, voir les{" "}
            <Link href="/metier#situations" className="font-medium text-accent hover:underline">
              fiches réflexes des situations délicates
            </Link>
            .
          </p>
        </Section>
      </div>
    </>
  );
}
