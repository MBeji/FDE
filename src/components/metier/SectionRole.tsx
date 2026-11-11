import Link from "next/link";
import { AlertTriangle, BriefcaseBusiness, CheckCircle2, Cpu, Target } from "lucide-react";
import { SectionMetier } from "@/components/metier/commun";
import { DOUBLE_COMPETENCE, MISSION_FDE, RESPONSABILITES, type MoitieCompetence } from "@/data/metier";

function CarteMoitie({ moitie, icone }: { moitie: MoitieCompetence; icone: "business" | "ingenierie" }) {
  const Icone = icone === "business" ? BriefcaseBusiness : Cpu;
  return (
    <div className="flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Icone className="size-4 text-accent" aria-hidden />
        <h4 className="text-[0.95rem] font-semibold text-ink">{moitie.nom}</h4>
      </div>
      <p className="mt-1.5 text-[0.88rem] text-ink-2 italic">{moitie.question}</p>
      <p className="mt-4 text-[0.75rem] font-medium tracking-wide text-ink-3 uppercase">Ce qu&apos;elle apporte</p>
      <ul className="mt-1.5 space-y-1.5">
        {moitie.apporte.map((a) => (
          <li key={a} className="flex gap-2 text-[0.88rem] leading-snug text-ink">
            <CheckCircle2 className="mt-0.5 size-3.5 flex-none text-good-ink" aria-hidden />
            {a}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <div className="rounded-lg bg-warning-soft p-3">
          <p className="flex items-center gap-1.5 text-[0.78rem] font-semibold text-warning-ink">
            <AlertTriangle className="size-3.5" aria-hidden />
            Quand elle manque
          </p>
          <p className="mt-1 text-[0.86rem] leading-snug text-ink">{moitie.quandElleManque}</p>
          <p className="mt-2 text-[0.8rem] leading-snug text-ink-2">
            <span className="font-medium">Signal d&apos;alerte : </span>
            {moitie.signal}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SectionRole() {
  return (
    <SectionMetier
      id="role"
      surtitre="1 · Le rôle"
      titre="Ce dont un FDE répond"
      description={
        <>
          Un FDE ne se définit pas par ses tâches mais par les résultats dont il répond. Le{" "}
          <Link href="/guides/posture-fde" className="text-accent hover:underline">
            guide de posture
          </Link>{" "}
          décrit sa conduite chez le client ; cette section fixe son contrat.
        </>
      }
    >
      <figure className="rounded-xl border border-accent-line bg-accent-soft p-5 sm:p-6">
        <p className="flex items-center gap-2 text-[0.75rem] font-medium tracking-wide text-accent uppercase">
          <Target className="size-3.5" aria-hidden />
          La mission en une phrase
        </p>
        <blockquote className="titre-editorial mt-2 text-[1.25rem] leading-snug text-ink sm:text-[1.4rem]">
          {MISSION_FDE}
        </blockquote>
      </figure>

      <h3 className="mt-8 text-[1.05rem] font-semibold text-ink">Huit responsabilités, formulées comme des résultats</h3>
      <p className="mt-1 text-[0.9rem] text-ink-2">
        Chacune se constate : si la preuve n&apos;existe pas, la responsabilité n&apos;est pas tenue.
      </p>
      <ol className="mt-4 grid gap-3 md:grid-cols-2">
        {RESPONSABILITES.map((r, i) => (
          <li key={r.titre} className="flex gap-3 rounded-xl border border-line bg-surface p-4">
            <span className="flex size-7 flex-none items-center justify-center rounded-full border border-line-strong text-[0.8rem] font-semibold text-ink">
              {i + 1}
            </span>
            <div>
              <h4 className="text-[0.92rem] font-semibold text-ink">{r.titre}</h4>
              <p className="mt-1 text-[0.88rem] leading-relaxed text-ink">{r.resultat}</p>
              <p className="mt-2 text-[0.8rem] leading-snug text-ink-3">
                <span className="font-medium text-ink-2">Preuve : </span>
                {r.preuve}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-10 text-[1.05rem] font-semibold text-ink">La double compétence</h3>
      <p className="mt-1 max-w-3xl text-[0.9rem] text-ink-2">{DOUBLE_COMPETENCE.synthese}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <CarteMoitie moitie={DOUBLE_COMPETENCE.business} icone="business" />
        <CarteMoitie moitie={DOUBLE_COMPETENCE.ingenierie} icone="ingenierie" />
      </div>
      <p className="mt-4 text-[0.86rem] text-ink-2">
        Pour situer votre niveau sur chaque moitié, utilisez le{" "}
        <Link href="/competences" className="font-medium text-accent hover:underline">
          référentiel de compétences et son auto-évaluation
        </Link>
        .
      </p>
    </SectionMetier>
  );
}
