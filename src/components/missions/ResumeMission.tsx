"use client";

import Link from "next/link";
import { ArrowRight, Circle, Plus } from "lucide-react";
import { Carte, Jauge, classesBouton } from "@/components/ui";
import { PHASES_RESUME } from "@/data/referentiels";
import {
  FORMATS_MISSION,
  avancementMission,
  avancementPhase,
  useMissions,
  type DefinitionPhase,
} from "@/lib/missions";
import { useEstClient } from "@/lib/stockage";

export interface DefinitionPhaseAffichable extends Omit<DefinitionPhase, "activites"> {
  activites: { id: string; titre: string }[];
}

/** Bloc d'accueil : la mission active et ses prochaines actions, ou l'invitation à en créer une. */
export function ResumeMission({ definitions }: { definitions: DefinitionPhaseAffichable[] }) {
  const estClient = useEstClient();
  const { active } = useMissions();

  if (!estClient || !active) {
    return (
      <Carte className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex-1">
          <p className="surtitre mb-1.5">Espace mission</p>
          <h2 className="text-[1.1rem] font-semibold text-ink">Aucune mission active</h2>
          <p className="mt-1 max-w-xl text-[0.9rem] leading-relaxed text-ink-2">
            Créez votre mission pour suivre son avancement phase par phase, tenir le registre de valeur
            et le journal des décisions, et obtenir des templates pré-remplis. Tout reste sur votre poste.
          </p>
        </div>
        <Link href="/missions" className={classesBouton("primaire")}>
          <Plus className="size-4" aria-hidden />
          Créer une mission
        </Link>
      </Carte>
    );
  }

  const definition = definitions.find((d) => d.id === active.phaseCourante);
  const phase = PHASES_RESUME[active.phaseCourante];
  const global = avancementMission(active, definitions);
  const local = definition ? avancementPhase(active, definition) : null;
  const prochaines = definition?.activites.filter((a) => !active.activites[a.id]).slice(0, 3) ?? [];

  return (
    <Carte className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="surtitre mb-1.5">Mission active · {FORMATS_MISSION[active.format].nom}</p>
        <h2 className="titre-editorial text-[1.5rem] leading-tight text-ink">{active.nom}</h2>
        <p className="mt-1 text-[0.9rem] text-ink-2">
          {active.client}
          {active.domaine && ` · ${active.domaine}`}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <Jauge valeur={global} libelle="Avancement de la mission" />
          <span className="flex-none text-[0.85rem] font-semibold text-ink tabular-nums">
            {Math.round(global * 100)} %
          </span>
        </div>
        <Link href="/missions/active" className={`${classesBouton("primaire")} mt-5`}>
          Ouvrir la mission
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
      <div className="border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
        <p className="text-[0.8rem] text-ink-3">
          Phase {phase.numero} · {phase.nom}
          {local && ` · ${Math.round(local.taux * 100)} %`}
        </p>
        <p className="mt-0.5 mb-3 text-[0.95rem] font-semibold text-ink">Prochaines actions</p>
        {prochaines.length ? (
          <ul className="flex flex-col gap-2">
            {prochaines.map((a) => (
              <li key={a.id} className="flex gap-2.5 text-[0.88rem] leading-snug text-ink">
                <Circle className="mt-[0.2rem] size-3.5 flex-none text-ink-3" aria-hidden />
                {a.titre}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[0.88rem] text-ink-2">
            Toutes les activités de la phase sont faites. Vérifiez les critères du jalon {phase.jalon.split(" ")[0]}.
          </p>
        )}
        <Link
          href={`/methode/${active.phaseCourante}`}
          className="mt-4 inline-flex items-center gap-1 text-[0.84rem] font-medium text-accent hover:underline"
        >
          Voir la méthode de la phase
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </Carte>
  );
}
