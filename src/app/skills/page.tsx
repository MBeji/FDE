import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hand, Landmark, Plug } from "lucide-react";
import { Bibliotheque, type ElementBibliotheque } from "@/components/Bibliotheque";
import { EnTetePage, TitreSection, classesBouton } from "@/components/ui";
import { ACCES_AGENTS } from "@/data/skills";
import { skills, taxonomieSkills, workflows } from "@/lib/content";
import { nomRole, nomSousProcessus, nomStatut, rangEtape } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills IA",
  description:
    "La bibliothèque partagée de skills IA : un skill par activité du cycle de vie d'un projet, de l'avant-vente à l'exploitation, classé, versionné et mobilisable par les agents.",
};

export default function PageSkills() {
  const { etapes, roles, domaines, technologies, casUsage, statuts } = taxonomieSkills;
  const tousLesCas = casUsage.map((c) => c.id);
  const statutsPresents = statuts.filter((st) => skills.some((s) => s.statut === st.id));

  const elements: ElementBibliotheque[] = skills.map((s) => ({
    href: `/skills/${s.id}`,
    titre: s.titre,
    resume: s.description,
    groupe: s.etape,
    pastilles: [
      { nom: nomRole(s.role), ton: s.role === "binome" ? "neutre" : "accent" },
      { nom: nomSousProcessus(s.etape, s.sousProcessus) },
      ...(s.statut === "publie" ? [] : [{ nom: nomStatut(s.statut) }]),
      ...(s.aReviser ? [{ nom: "À réviser" }] : []),
    ],
    valeurs: {
      // Un skill du binôme concerne les deux rôles ; un skill « tout projet » concerne tous les cas d'usage.
      role: s.role === "binome" ? ["design", "build", "binome"] : [s.role],
      domaine: [s.domaine],
      technologie: s.technologies,
      cas: s.casUsage.includes("tout-projet") ? tousLesCas : s.casUsage,
      statut: [s.statut],
    },
    motsCles: `${s.id} ${s.tags.join(" ")} ${s.entrees.join(" ")} ${s.sorties.join(" ")}`,
  }));

  return (
    <>
      <EnTetePage
        surtitre="Assets IA"
        titre="Bibliothèque de skills IA"
        chapo="Le savoir-faire du pool, écrit pour être exécuté par des agents : un skill par activité du cycle de vie d'un projet, de l'avant-vente au transfert en exploitation. Chaque skill dit quand intervenir, de quoi partir, comment procéder, quoi produire et où s'arrêter pour laisser décider un humain."
      >
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/skills/workflows" className={classesBouton("primaire")}>
            Workflows agentiques
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link href="/skills/gouvernance" className={classesBouton("secondaire")}>
            <Landmark className="size-4" aria-hidden />
            Gouvernance
          </Link>
          <Link href="#agents" className={classesBouton("discret")}>
            <Plug className="size-4" aria-hidden />
            Brancher un agent
          </Link>
        </div>
      </EnTetePage>

      <section aria-labelledby="titre-cycle" className="mb-12">
        <TitreSection
          id="titre-cycle"
          titre="Le cycle de vie couvert"
          description={`${skills.length} skills sur ${etapes.length} étapes, portés par le FDE Design, le FDE Build ou le binôme.`}
        />
        <ol className="grid grid-cols-2 gap-2.5 md:grid-cols-5">
          {etapes.map((e) => {
            const nombre = skills.filter((s) => s.etape === e.id).length;
            return (
              <li key={e.id}>
                <Link
                  href={`#groupe-${e.id}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface p-3.5 shadow-card transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-pop"
                >
                  <span className="titre-editorial text-[1.35rem] leading-none text-ink-3 tabular-nums">
                    {String(rangEtape(e.id)).padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-[0.88rem] leading-snug font-semibold text-ink group-hover:text-accent">
                    {e.nom}
                  </span>
                  <span className="mt-auto pt-2 text-[0.75rem] text-ink-3">
                    {nombre} skill{nombre > 1 ? "s" : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="titre-workflows" className="mb-12">
        <TitreSection
          id="titre-workflows"
          titre="Workflows agentiques"
          description="Des enchaînements de skills pour traiter une situation de bout en bout, avec leurs points de contrôle humains."
          action={{ href: "/skills/workflows", nom: "Tous les workflows" }}
        />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {workflows.map((w) => {
            const controles = w.etapes.filter((e) => e.controle).length;
            return (
              <Link
                key={w.id}
                href={`/skills/workflows/${w.id}`}
                className="group flex flex-col rounded-xl border border-line bg-surface p-4 shadow-card transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-pop"
              >
                <h3 className="text-[0.92rem] leading-snug font-semibold text-ink group-hover:text-accent">{w.titre}</h3>
                <p className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-3 text-[0.75rem] text-ink-3">
                  <span>{w.etapes.length} skills</span>
                  <span className="flex items-center gap-1">
                    <Hand className="size-3" aria-hidden />
                    {controles} contrôle{controles > 1 ? "s" : ""} humain{controles > 1 ? "s" : ""}
                  </span>
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="titre-skills">
        <TitreSection
          id="titre-skills"
          titre="Tous les skills"
          description="Classés par étape du cycle de vie. Filtrez par rôle, domaine métier, technologie ou cas d'usage."
        />
        <Bibliotheque
          elements={elements}
          placeholder="Filtrer les skills…"
          groupes={etapes.map((e) => ({
            valeur: e.id,
            nom: `${rangEtape(e.id)}. ${e.nom}`,
            description: e.resume,
          }))}
          filtres={[
            { cle: "role", nom: "Rôle", options: roles.map((r) => ({ valeur: r.id, nom: r.nom })) },
            { cle: "domaine", nom: "Domaine", options: domaines.map((d) => ({ valeur: d.id, nom: d.nom })) },
            { cle: "technologie", nom: "Technologie", options: technologies.map((t) => ({ valeur: t.id, nom: t.nom })) },
            {
              cle: "cas",
              nom: "Cas d'usage",
              options: casUsage.filter((c) => c.id !== "tout-projet").map((c) => ({ valeur: c.id, nom: c.nom })),
            },
            // Le filtre de statut n'apparaît que s'il y a autre chose que des skills publiés.
            ...(statutsPresents.length > 1
              ? [{ cle: "statut", nom: "Statut", options: statutsPresents.map((st) => ({ valeur: st.id, nom: st.nom })) }]
              : []),
          ]}
        />
      </section>

      <section id="agents" aria-labelledby="titre-agents" className="mt-14 scroll-mt-24 border-t border-line pt-10">
        <TitreSection
          id="titre-agents"
          titre="Brancher un agent sur la bibliothèque"
          description="Un agent découvre les skills par leur description, charge celui qui répond à sa tâche, puis les ressources qu'il cite. Seuls les skills publiés lui sont servis."
          action={{ href: "/skills/gouvernance#acces", nom: "Accès et droits" }}
        />
        <div className="grid gap-3 md:grid-cols-2">
          {ACCES_AGENTS.map((a) => (
            <article key={a.voie} className="flex min-w-0 flex-col rounded-xl border border-line bg-surface p-4 shadow-card">
              <h3 className="text-[0.95rem] font-semibold text-ink">{a.voie}</h3>
              <p className="mt-0.5 text-[0.82rem] text-ink-3">{a.pour}</p>
              <p className="mt-2 text-[0.87rem] leading-relaxed text-ink-2">{a.comment}</p>
              <pre className="mt-auto pt-3 font-mono text-[0.76rem] leading-relaxed [overflow-wrap:anywhere] whitespace-pre-wrap text-ink">
                {a.code}
              </pre>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
