import {
  FORMATS_MISSION,
  aujourdhui,
  type Artefact,
  type EntreeJournal,
  type Mission,
} from "@/lib/missions-modele";
import { creerStock, nouvelId, useStock } from "@/lib/stockage";

/**
 * Magasin des missions, persisté dans le navigateur.
 * Réexporte le modèle pour que les composants client n'aient qu'un import.
 */
export * from "@/lib/missions-modele";

interface EtatMissions {
  missions: Mission[];
  active: string | null;
}

const ETAT_INITIAL: EtatMissions = { missions: [], active: null };

const stockMissions = creerStock<EtatMissions>("fde-atlas:missions:v1", ETAT_INITIAL);

export function useMissions() {
  const [etat] = useStock(stockMissions);
  const active = etat.missions.find((m) => m.id === etat.active) ?? null;
  return { missions: etat.missions, active };
}

export function creerMission(
  champs: Pick<
    Mission,
    "nom" | "client" | "secteur" | "domaine" | "sponsor" | "auteur" | "format" | "debut" | "probleme" | "ambition"
  >,
): Mission {
  const phases = FORMATS_MISSION[champs.format].phases;
  const maintenant = new Date().toISOString();
  const mission: Mission = {
    id: nouvelId(),
    version: 1,
    ...champs,
    phases,
    phaseCourante: phases[0],
    activites: {},
    livrables: {},
    criteres: {},
    jalons: {},
    valeur: [],
    journal: [],
    artefacts: [],
    creeLe: maintenant,
    majLe: maintenant,
  };
  stockMissions.set((e) => ({ missions: [mission, ...e.missions], active: mission.id }));
  return mission;
}

export function majMission(id: string, modifier: (m: Mission) => Mission) {
  stockMissions.set((e) => ({
    ...e,
    missions: e.missions.map((m) =>
      m.id === id ? { ...modifier(m), majLe: new Date().toISOString() } : m,
    ),
  }));
}

export function supprimerMission(id: string) {
  stockMissions.set((e) => {
    const missions = e.missions.filter((m) => m.id !== id);
    return { missions, active: e.active === id ? (missions[0]?.id ?? null) : e.active };
  });
}

export function activerMission(id: string | null) {
  stockMissions.set((e) => ({ ...e, active: id }));
}

export function ajouterArtefact(missionId: string, artefact: Omit<Artefact, "id" | "date">) {
  majMission(missionId, (m) => ({
    ...m,
    artefacts: [{ ...artefact, id: nouvelId(), date: aujourdhui() }, ...m.artefacts],
  }));
}

export function ajouterEntree(missionId: string, entree: Omit<EntreeJournal, "id">) {
  majMission(missionId, (m) => ({ ...m, journal: [{ ...entree, id: nouvelId() }, ...m.journal] }));
}

/** Importe une mission exportée en JSON. Renvoie un message d'erreur, ou null si tout va bien. */
export function importerMission(json: string): string | null {
  try {
    const m = JSON.parse(json) as Partial<Mission>;
    if (!m || typeof m !== "object" || m.version !== 1 || !m.nom || !Array.isArray(m.phases)) {
      return "Ce fichier n'est pas une mission exportée depuis le portail.";
    }
    const mission: Mission = {
      ...(m as Mission),
      id: nouvelId(),
      activites: m.activites ?? {},
      livrables: m.livrables ?? {},
      criteres: m.criteres ?? {},
      jalons: m.jalons ?? {},
      valeur: m.valeur ?? [],
      journal: m.journal ?? [],
      artefacts: m.artefacts ?? [],
      majLe: new Date().toISOString(),
    };
    stockMissions.set((e) => ({ missions: [mission, ...e.missions], active: mission.id }));
    return null;
  } catch {
    return "Fichier illisible : le JSON est invalide.";
  }
}

