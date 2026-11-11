import { phases } from "@/data/phases";
import type { DefinitionPhaseAffichable } from "@/components/missions/ResumeMission";

/** Version allégée des phases, transmise aux composants client qui calculent l'avancement. */
export const definitionsPhases: DefinitionPhaseAffichable[] = phases.map((p) => ({
  id: p.id,
  activites: p.activites.map((a) => ({ id: a.id, titre: a.titre })),
  livrables: p.livrables.map((l) => ({ titre: l.titre, template: l.template, obligatoire: l.obligatoire })),
  jalon: { criteres: p.jalon.criteres },
}));
