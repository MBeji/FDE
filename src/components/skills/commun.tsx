import Link from "next/link";
import { Bot, Hand } from "lucide-react";
import { Pastille } from "@/components/ui";
import type { RoleSkill, StatutSkill } from "@/lib/content";

/* Éléments d'affichage partagés par les pages de la bibliothèque de skills (sans état). */

const TON_STATUT: Record<StatutSkill, "bon" | "alerte" | "neutre" | "critique"> = {
  publie: "bon",
  "en-revue": "alerte",
  brouillon: "neutre",
  deprecie: "critique",
};

export function PastilleStatut({ statut, nom }: { statut: StatutSkill; nom: string }) {
  return <Pastille ton={TON_STATUT[statut]}>{nom}</Pastille>;
}

export function PastilleRole({ role, nom }: { role: RoleSkill; nom: string }) {
  return <Pastille ton={role === "binome" ? "neutre" : "accent"}>{nom}</Pastille>;
}

/** Ligne « libellé : valeur » des fiches d'identité. */
export function LigneFiche({ libelle, children }: { libelle: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 border-b border-line py-1.5 text-[0.82rem] last:border-b-0">
      <dt className="w-24 flex-none text-ink-3">{libelle}</dt>
      <dd className="min-w-0 text-ink">{children}</dd>
    </div>
  );
}

export interface EtapeAffichee {
  rang: number;
  skill: { id: string; titre: string; description: string; role: RoleSkill; nomRole: string };
  intention: string;
  controle: string;
}

/** Déroulé d'un workflow : une étape par skill, les points de contrôle humains entre les étapes. */
export function DerouleWorkflow({ etapes, skillCourant }: { etapes: EtapeAffichee[]; skillCourant?: string }) {
  return (
    <ol className="flex flex-col">
      {etapes.map((e, i) => (
        <li key={`${e.rang}-${e.skill.id}`} className="relative pb-3 pl-11 last:pb-0">
          {i < etapes.length - 1 && <span className="absolute top-8 bottom-0 left-[0.9rem] w-px bg-line-strong" aria-hidden />}
          <span
            className="absolute top-3 left-0 flex size-[1.85rem] items-center justify-center rounded-full border border-line-strong bg-surface text-[0.8rem] font-semibold text-ink tabular-nums"
            aria-hidden
          >
            {e.rang}
          </span>
          <div
            className={
              e.skill.id === skillCourant
                ? "rounded-xl border border-accent-line bg-accent-soft p-4"
                : "rounded-xl border border-line bg-surface p-4 shadow-card"
            }
          >
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <Bot className="size-3.5 flex-none text-ink-3" aria-hidden />
              <Link href={`/skills/${e.skill.id}`} className="text-[0.95rem] font-semibold text-ink hover:text-accent">
                <span className="sr-only">Étape {e.rang} : </span>
                {e.skill.titre}
              </Link>
              <PastilleRole role={e.skill.role} nom={e.skill.nomRole} />
            </div>
            <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-2">{e.intention}</p>
            {e.controle && (
              <p className="mt-3 flex gap-2 rounded-lg border border-warning/40 bg-warning-soft px-3 py-2 text-[0.84rem] leading-snug text-ink">
                <Hand className="mt-0.5 size-3.5 flex-none text-warning-ink" aria-hidden />
                <span>
                  <span className="font-semibold">Contrôle humain. </span>
                  {e.controle}
                </span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
