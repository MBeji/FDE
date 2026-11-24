import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, GitPullRequest, Minus } from "lucide-react";
import { PastilleStatut } from "@/components/skills/commun";
import { EnTetePage } from "@/components/ui";
import {
  ACCES_AGENTS,
  CIRCUIT,
  DROITS,
  LIBELLES_DROIT,
  ORDRE_ROLES,
  OUTILS_MCP,
  ROLES_GOUVERNANCE,
  VERSIONS,
  type NiveauDroit,
} from "@/data/skills";
import { skills, taxonomieSkills, workflows, type StatutSkill } from "@/lib/content";
import { SECTIONS_SKILL } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Gouvernance des skills",
  description:
    "Comment la bibliothèque de skills IA est tenue : classification, cycle de vie d'un skill, rôles et droits, règles de version, circuit de publication et accès des agents.",
};

const SECTIONS = [
  { id: "etat", titre: "État du patrimoine", resume: "Ce que contient la bibliothèque aujourd'hui" },
  { id: "format", titre: "Un skill, un fichier", resume: "Format et classification" },
  { id: "cycle", titre: "Cycle de vie d'un skill", resume: "Statuts et circuit de publication" },
  { id: "versions", titre: "Versions et historique", resume: "Ce qui change, ce que cela engage" },
  { id: "droits", titre: "Rôles et droits", resume: "Qui peut quoi" },
  { id: "acces", titre: "Accès des agents", resume: "Découvrir, charger, mobiliser" },
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

function Chiffre({ valeur, libelle, detail }: { valeur: number | string; libelle: string; detail?: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4 shadow-card">
      <p className="text-[1.9rem] leading-none font-semibold tracking-tight text-ink tabular-nums">{valeur}</p>
      <p className="mt-2 text-[0.85rem] font-medium text-ink">{libelle}</p>
      {detail && <p className="mt-0.5 text-[0.75rem] leading-snug text-ink-3">{detail}</p>}
    </div>
  );
}

function CelluleDroit({ niveau }: { niveau: NiveauDroit }) {
  if (niveau === "non") {
    return (
      <span className="inline-flex items-center text-ink-3">
        <Minus className="size-3.5" aria-hidden />
        <span className="sr-only">{LIBELLES_DROIT.non}</span>
      </span>
    );
  }
  if (niveau === "pr") {
    return (
      <span className="inline-flex items-center gap-1 text-[0.78rem] font-medium whitespace-nowrap text-accent-strong">
        <GitPullRequest className="size-3.5" aria-hidden />
        {LIBELLES_DROIT.pr}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center text-good-ink">
      <Check className="size-4" aria-hidden />
      <span className="sr-only">{LIBELLES_DROIT.oui}</span>
    </span>
  );
}

const CLASSIFICATION: { axe: string; champ: string; liste: keyof typeof taxonomieSkills; note: string }[] = [
  { axe: "Phase du projet", champ: "etape, sous-processus", liste: "etapes", note: "L'étape du cycle de vie fixe le dossier du skill." },
  { axe: "Rôle", champ: "role", liste: "roles", note: "Qui porte l'activité dans le binôme." },
  { axe: "Domaine métier", champ: "domaine", liste: "domaines", note: "La discipline dont relève le savoir-faire." },
  { axe: "Technologie", champ: "technologies", liste: "technologies", note: "Vide quand le skill ne dépend d'aucune." },
  { axe: "Cas d'usage", champ: "cas-usage", liste: "casUsage", note: "Les types de solution auxquels le skill s'applique." },
];

export default function PageGouvernanceSkills() {
  const { statuts, proprietaires, diffusions, etapes, revisionMois } = taxonomieSkills;
  const compter = (statut: string) => skills.filter((s) => s.statut === statut).length;
  const aReviser = skills.filter((s) => s.aReviser && s.statut === "publie");
  const sousProcessus = etapes.reduce((n, e) => n + e.sousProcessus.length, 0);

  return (
    <>
      <EnTetePage
        fil={[{ href: "/skills", nom: "Skills IA" }]}
        surtitre="Assets IA"
        titre="Gouvernance de la bibliothèque de skills"
        chapo="Un skill engage le pool : des agents l'exécuteront chez des clients. La bibliothèque se gère donc comme du code, dans le dépôt : chaque skill est classé, versionné, relu par un propriétaire avant publication, et révisé à échéance. C'est un cadre proposé, à ajuster par la direction du pool."
      />

      <nav aria-label="Sommaire de la page" className="hors-impression mb-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex gap-3 rounded-lg border border-line bg-surface px-3.5 py-2.5 hover:border-line-strong"
          >
            <span className="text-[0.8rem] font-semibold text-ink-3 tabular-nums">{i + 1}</span>
            <span>
              <span className="block text-[0.88rem] font-medium text-ink">{s.titre}</span>
              <span className="block text-[0.76rem] text-ink-3">{s.resume}</span>
            </span>
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-12">
        <Section
          id="etat"
          numero={1}
          titre="Ce que contient la bibliothèque aujourd'hui"
          description="Ces chiffres sont calculés à chaque déploiement, à partir des fichiers du dépôt."
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Chiffre valeur={compter("publie")} libelle="Skills publiés" detail="Servis aux agents" />
            <Chiffre
              valeur={compter("brouillon") + compter("en-revue")}
              libelle="En préparation"
              detail="Brouillons et skills en revue"
            />
            <Chiffre
              valeur={aReviser.length}
              libelle="À réviser"
              detail={`Publiés depuis plus de ${revisionMois} mois sans révision`}
            />
            <Chiffre valeur={workflows.length} libelle="Workflows" detail={`${sousProcessus} sous-processus couverts`} />
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            <div className="table-wrap defilement-fin !my-0 overflow-x-auto">
              <table className="w-full min-w-[34rem] text-left text-[0.86rem]">
                <thead>
                  <tr className="border-b border-line bg-surface-2 text-[0.72rem] tracking-wide text-ink-3 uppercase">
                    <th scope="col" className="px-4 py-2.5 font-semibold">Propriétaire</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Répond de</th>
                    <th scope="col" className="px-4 py-2.5 text-right font-semibold">Skills</th>
                    <th scope="col" className="px-4 py-2.5 text-right font-semibold">À réviser</th>
                  </tr>
                </thead>
                <tbody>
                  {proprietaires.map((p) => {
                    const siens = skills.filter((s) => s.proprietaire === p.id);
                    return (
                      <tr key={p.id} className="border-b border-line last:border-b-0">
                        <th scope="row" className="px-4 py-2.5 font-medium whitespace-nowrap text-ink">{p.nom}</th>
                        <td className="px-4 py-2.5 text-ink-2">{p.resume}</td>
                        <td className="px-4 py-2.5 text-right text-ink tabular-nums">{siens.length}</td>
                        <td className="px-4 py-2.5 text-right text-ink tabular-nums">{siens.filter((s) => s.aReviser).length}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {aReviser.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {aReviser.map((s) => (
                <li key={s.id}>
                  <Link href={`/skills/${s.id}`} className="rounded-md border border-warning/40 bg-warning-soft px-2 py-0.5 text-[0.78rem] text-ink hover:border-warning">
                    {s.titre}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section
          id="format"
          numero={2}
          titre="Un skill, un dossier, un fichier SKILL.md"
          description="Les skills suivent le standard ouvert Agent Skills : un nom, une description qui dit quand l'utiliser, un corps que l'agent charge quand il en a besoin. Tout ce qui sert à classer et à gouverner vit sous « metadata », pour que le fichier reste chargeable par tout environnement compatible."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
              <h3 className="text-[0.98rem] font-semibold text-ink">Huit sections, toujours les mêmes</h3>
              <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-2">
                Un agent qui a lu un skill sait lire tous les autres. La validation refuse un skill dont une section manque ou change de place.
              </p>
              <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {SECTIONS_SKILL.map((s, i) => (
                  <li key={s} className="flex gap-2 text-[0.86rem] text-ink">
                    <span className="w-4 flex-none font-semibold text-ink-3 tabular-nums">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
              <h3 className="text-[0.98rem] font-semibold text-ink">Une arborescence par étape</h3>
              <pre className="defilement-fin mt-3 overflow-x-auto font-mono text-[0.76rem] leading-relaxed text-ink-2">
                {`skills/
├── taxonomie.json
├── ${etapes[0].dossier}/
│   └── qualifier-opportunite/
│       ├── SKILL.md
│       └── CHANGELOG.md
├── …
├── ${etapes[etapes.length - 1].dossier}/
└── workflows/`}
              </pre>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            <div className="table-wrap defilement-fin !my-0 overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left text-[0.86rem]">
                <caption className="sr-only">Axes de classification d&apos;un skill</caption>
                <thead>
                  <tr className="border-b border-line bg-surface-2 text-[0.72rem] tracking-wide text-ink-3 uppercase">
                    <th scope="col" className="px-4 py-2.5 font-semibold">Axe</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Champ</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Valeurs</th>
                  </tr>
                </thead>
                <tbody>
                  {CLASSIFICATION.map((c) => (
                    <tr key={c.axe} className="border-b border-line align-top last:border-b-0">
                      <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-ink">
                        {c.axe}
                        <span className="mt-0.5 block max-w-[14rem] text-[0.76rem] font-normal whitespace-normal text-ink-3">{c.note}</span>
                      </th>
                      <td className="px-4 py-3 font-mono text-[0.76rem] text-ink-2">{c.champ}</td>
                      <td className="px-4 py-3">
                        <ul className="flex flex-wrap gap-1.5">
                          {(taxonomieSkills[c.liste] as { id: string; nom: string }[]).map((v) => (
                            <li key={v.id} className="rounded-md border border-line bg-bg px-2 py-0.5 text-[0.78rem] text-ink-2">
                              {v.nom}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">
            La taxonomie est un fichier du dépôt (<code className="font-mono text-[0.8rem]">skills/taxonomie.json</code>) : ajouter un domaine, une
            technologie ou un sous-processus passe par une pull request. Chaque sous-processus doit être couvert par au moins un skill actif.
          </p>
        </Section>

        <Section
          id="cycle"
          numero={3}
          titre="Du brouillon au skill publié, puis révisé"
          description="Le circuit est celui d'une pull request. La fusion sur la branche principale vaut publication : rien n'est servi aux agents sans être passé par là."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {statuts.map((st) => (
              <div key={st.id} className="rounded-xl border border-line bg-surface p-4 shadow-card">
                <PastilleStatut statut={st.id as StatutSkill} nom={st.nom} />
                <p className="mt-2.5 text-[0.86rem] leading-relaxed text-ink-2">{st.resume}</p>
              </div>
            ))}
          </div>
          <ol className="mt-5 overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            {CIRCUIT.map((c, i) => (
              <li key={c.etape} className="grid gap-x-6 gap-y-1 border-b border-line px-4 py-3.5 last:border-b-0 md:grid-cols-[13rem_1fr_16rem]">
                <p className="text-[0.9rem] font-semibold text-ink">
                  <span className="mr-2 text-ink-3 tabular-nums">{i + 1}</span>
                  {c.etape}
                  <span className="mt-0.5 block text-[0.78rem] font-normal text-ink-3">{c.qui}</span>
                </p>
                <p className="text-[0.87rem] leading-relaxed text-ink-2">{c.quoi}</p>
                <p className="text-[0.82rem] leading-snug text-ink-2">
                  <span className="font-medium text-ink">Preuve : </span>
                  {c.preuve}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">
            Un skill non révisé depuis plus de {revisionMois} mois est signalé « à réviser » sur sa page et dans le tableau ci-dessus. Le skill{" "}
            <Link href="/skills/creer-skill" className="font-medium text-accent hover:underline">
              Créer ou faire évoluer un skill
            </Link>{" "}
            guide un FDE, ou l&apos;agent qui l&apos;assiste, tout au long du circuit.
          </p>
        </Section>

        <Section
          id="versions"
          numero={4}
          titre="Chaque modification monte la version et laisse une trace"
          description="Un skill porte une version SemVer. Son historique vit à côté de lui, dans CHANGELOG.md : une entrée par version, avec sa date et ce qui change. Le contrôle des versions échoue si un SKILL.md est modifié sans que sa version monte."
        >
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            <div className="table-wrap defilement-fin !my-0 overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left text-[0.86rem]">
                <thead>
                  <tr className="border-b border-line bg-surface-2 text-[0.72rem] tracking-wide text-ink-3 uppercase">
                    <th scope="col" className="px-4 py-2.5 font-semibold">Changement</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Version</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Quand</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Ce que cela engage</th>
                  </tr>
                </thead>
                <tbody>
                  {VERSIONS.map((v) => (
                    <tr key={v.type} className="border-b border-line align-top last:border-b-0">
                      <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-ink">{v.type}</th>
                      <td className="px-4 py-3 font-mono text-[0.78rem] whitespace-nowrap text-ink-2">{v.forme}</td>
                      <td className="px-4 py-3 text-ink-2">{v.quand}</td>
                      <td className="px-4 py-3 text-ink-2">{v.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">
            L&apos;historique de chaque skill est affiché sur sa page. L&apos;historique fin, ligne à ligne, est celui du dépôt.
          </p>
        </Section>

        <Section
          id="droits"
          numero={5}
          titre="Lire est ouvert, écrire passe par une relecture"
          description="Les droits d'écriture sont ceux du dépôt : personne ne modifie un skill publié sans pull request, et le propriétaire de l'étape est demandé en relecture. Les droits de lecture sont ceux du portail."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {ORDRE_ROLES.map((r) => (
              <div key={r} className="rounded-xl border border-line bg-surface p-4 shadow-card">
                <h3 className="text-[0.95rem] font-semibold text-ink">{ROLES_GOUVERNANCE[r].nom}</h3>
                <p className="mt-0.5 text-[0.8rem] leading-snug text-ink-3">{ROLES_GOUVERNANCE[r].qui}</p>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-2">{ROLES_GOUVERNANCE[r].responsabilite}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            <div className="table-wrap defilement-fin !my-0 overflow-x-auto">
              <table className="w-full min-w-[46rem] text-left text-[0.86rem]">
                <caption className="sr-only">Matrice des droits par rôle</caption>
                <thead>
                  <tr className="border-b border-line bg-surface-2 text-[0.72rem] tracking-wide text-ink-3 uppercase">
                    <th scope="col" className="px-4 py-2.5 font-semibold">Action</th>
                    {ORDRE_ROLES.map((r) => (
                      <th key={r} scope="col" className="px-3 py-2.5 text-center font-semibold">
                        {ROLES_GOUVERNANCE[r].nom}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DROITS.map((d) => (
                    <tr key={d.action} className="border-b border-line align-top last:border-b-0">
                      <th scope="row" className="px-4 py-3 font-medium text-ink">
                        {d.action}
                        <span className="mt-0.5 block text-[0.78rem] font-normal text-ink-3">{d.precision}</span>
                      </th>
                      {ORDRE_ROLES.map((r) => (
                        <td key={r} className="px-3 py-3 text-center">
                          <CelluleDroit niveau={d.droits[r]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {diffusions.map((d) => (
              <div key={d.id} className="rounded-xl border border-line bg-surface p-4 shadow-card">
                <h3 className="text-[0.92rem] font-semibold text-ink">Diffusion « {d.nom.toLowerCase()} »</h3>
                <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-2">{d.resume}</p>
                <p className="mt-2 text-[0.8rem] text-ink-3">
                  {skills.filter((s) => s.diffusion === d.id).length} skills
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">
            Le portail n&apos;a pas de comptes individuels : il ne distingue pas les lecteurs entre eux. La diffusion est une règle de
            manipulation, appliquée par l&apos;export à plat, qui peut ne retenir que les skills transférables.
          </p>
        </Section>

        <Section
          id="acces"
          numero={6}
          titre="Un agent découvre, charge et mobilise les skills à l'exécution"
          description="Un agent ne reçoit pas toute la bibliothèque : il lit les descriptions, choisit le skill qui répond à sa tâche, charge son contenu, puis les ressources que le skill cite. C'est ce qui lui évite de réinventer la méthode à chaque projet."
        >
          <div className="grid gap-3 md:grid-cols-2">
            {ACCES_AGENTS.map((a) => (
              <article key={a.voie} className="flex flex-col rounded-xl border border-line bg-surface p-4 shadow-card">
                <h3 className="text-[0.95rem] font-semibold text-ink">{a.voie}</h3>
                <p className="mt-0.5 text-[0.82rem] text-ink-3">{a.pour}</p>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-ink-2">{a.comment}</p>
                <pre className="defilement-fin mt-auto overflow-x-auto pt-3 font-mono text-[0.76rem] leading-relaxed whitespace-pre text-ink">
                  {a.code}
                </pre>
              </article>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface shadow-card">
            <p className="border-b border-line bg-surface-2 px-4 py-2.5 text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">
              Outils du serveur MCP
            </p>
            <dl>
              {OUTILS_MCP.map((o) => (
                <div key={o.nom} className="grid gap-x-6 gap-y-0.5 border-b border-line px-4 py-2.5 last:border-b-0 sm:grid-cols-[12rem_1fr]">
                  <dt className="font-mono text-[0.8rem] text-ink">{o.nom}</dt>
                  <dd className="text-[0.86rem] leading-snug text-ink-2">{o.role}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ul className="mt-4 flex flex-col gap-2 rounded-xl border border-accent-line bg-accent-soft p-4">
            {[
              "Seuls les skills et les workflows publiés sortent par ces voies.",
              "Sur un portail protégé par mot de passe, un agent présente le jeton SKILLS_JETON_AGENTS (en-tête Authorization: Bearer). Ce jeton n'ouvre que le catalogue, les SKILL.md et le serveur MCP : ni les pages, ni le copilote.",
              "Les agents lisent. Ils ne publient rien : une évolution de skill proposée par un agent passe par la pull request d'un contributeur.",
            ].map((t) => (
              <li key={t} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-ink">
                <span className="mt-[0.5rem] size-1.5 flex-none rounded-full bg-series-1" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.86rem] text-ink-2">
            <Link href="/skills" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
              Parcourir la bibliothèque
              <ArrowRight className="size-3" aria-hidden />
            </Link>
          </p>
        </Section>
      </div>
    </>
  );
}
