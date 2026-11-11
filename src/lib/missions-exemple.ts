import { phases } from "@/data/phases";
import { PHASE_IDS } from "@/data/referentiels";
import type { PhaseId } from "@/data/types";
import { cleCritere, cleLivrable, type Mission } from "@/lib/missions-modele";

/**
 * Mission de démonstration : le cas fil rouge Voxalis (voir /guides/cas-fil-rouge),
 * tel qu'il se présente trois mois après la généralisation.
 */
export function missionExemple(): Mission {
  const franchies: PhaseId[] = PHASE_IDS.filter((p) => p !== "perenniser");
  const datesJalons: Record<string, string> = {
    cadrer: "2026-01-23",
    diagnostiquer: "2026-02-20",
    cibler: "2026-03-13",
    reinventer: "2026-04-10",
    concevoir: "2026-05-08",
    construire: "2026-07-31",
    industrialiser: "2026-10-09",
  };

  const activites: Mission["activites"] = {};
  const livrables: Mission["livrables"] = {};
  const criteres: Mission["criteres"] = {};
  const jalons: Mission["jalons"] = {};

  for (const phase of phases) {
    if (franchies.includes(phase.id)) {
      for (const a of phase.activites) activites[a.id] = true;
      for (const l of phase.livrables) livrables[cleLivrable(phase.id, l)] = "valide";
      phase.jalon.criteres.forEach((_, i) => (criteres[cleCritere(phase.id, i)] = true));
      jalons[phase.id] = { franchi: true, date: datesJalons[phase.id] };
    }
  }
  // Phase 7 en cours : mesure à +3 mois faite, transfert achevé, REX en rédaction.
  activites["perenniser-1"] = true;
  activites["perenniser-2"] = true;
  livrables["perenniser:tableau-de-bord-valeur"] = "valide";
  livrables["perenniser:plan-transfert"] = "valide";
  livrables["perenniser:rex-mission"] = "en-cours";
  criteres[cleCritere("perenniser", 1)] = true;
  criteres[cleCritere("perenniser", 2)] = true;

  return {
    id: "exemple",
    version: 1,
    nom: "Réinvention de l'Assistance & SAV Entreprises",
    client: "Voxalis (exemple)",
    secteur: "telecoms",
    domaine: "Assistance & SAV Entreprises",
    sponsor: "Claire Besson, DGA Marché Entreprises",
    auteur: "Yasmine, lead FDE",
    format: "transformation",
    phases: [...PHASE_IDS],
    debut: "2026-01-12",
    probleme:
      "Diviser par deux le délai de résolution des incidents PME tout en réduisant le coût par ticket d'un tiers.",
    ambition:
      "MTTR de 31 h à 12 h, coût par ticket de 41 € à 26 €, 35 % des tickets résolus sans intervention humaine, en 18 mois.",
    phaseCourante: "perenniser",
    activites,
    livrables,
    criteres,
    jalons,
    valeur: [
      {
        id: "v1",
        indicateur: "Délai moyen de résolution (MTTR)",
        unite: "h",
        reference: 31,
        cible: 12,
        realise: 13.2,
        baisseFavorable: true,
        methode: "Moyenne mensuelle sur les tickets clos, source CRM",
        proprietaire: "Sophie Lambert",
        statut: "realisee",
      },
      {
        id: "v2",
        indicateur: "Résolution au premier contact (FCR)",
        unite: "%",
        reference: 54,
        cible: 75,
        realise: 73,
        baisseFavorable: false,
        methode: "Tickets clos sans réouverture ni transfert, source CRM",
        proprietaire: "Sophie Lambert",
        statut: "realisee",
      },
      {
        id: "v3",
        indicateur: "Coût par ticket",
        unite: "€",
        reference: 41,
        cible: 26,
        realise: 29,
        baisseFavorable: true,
        methode: "Coût complet du domaine rapporté au volume, contrôle de gestion",
        proprietaire: "Julien Faure",
        statut: "auditee",
      },
      {
        id: "v4",
        indicateur: "Tickets résolus sans intervention humaine",
        unite: "%",
        reference: 0,
        cible: 35,
        realise: 33,
        baisseFavorable: false,
        methode: "Part des tickets clos en voie autonome",
        proprietaire: "Sophie Lambert",
        statut: "realisee",
      },
      {
        id: "v5",
        indicateur: "NPS Entreprises",
        unite: "points",
        reference: 8,
        cible: 30,
        realise: 22,
        baisseFavorable: false,
        methode: "Enquête trimestrielle",
        proprietaire: "Claire Besson",
        statut: "realisee",
      },
      {
        id: "v6",
        indicateur: "Churn annuel PME",
        unite: "%",
        reference: 11.5,
        cible: 10,
        realise: null,
        baisseFavorable: true,
        methode: "Mesure à 12 mois, cohorte PME, direction financière",
        proprietaire: "Julien Faure",
        statut: "engagee",
      },
    ],
    journal: [
      {
        id: "j1",
        type: "apprentissage",
        date: "2026-10-12",
        phase: "perenniser",
        titre: "La valeur était dans les files d'attente internes, pas dans le premier contact",
        detail:
          "41 % du délai venait de l'attente entre N1 et N2. La demande initiale (un chatbot) n'y aurait rien changé.",
      },
      {
        id: "j2",
        type: "risque",
        date: "2026-10-05",
        phase: "perenniser",
        titre: "Mesure du churn non concluante avant 12 mois",
        detail: "Risque de voir le bénéfice de rétention contesté d'ici là. Suivi mensuel de la cohorte.",
      },
      {
        id: "j3",
        type: "decision",
        date: "2026-07-31",
        phase: "construire",
        titre: "Généralisation décidée en COPIL, en trois vagues régionales",
        detail: "Pilote de Nantes : MTTR 14,5 h, FCR 71 %, 31 % de résolution autonome, aucun incident grave.",
      },
      {
        id: "j4",
        type: "apprentissage",
        date: "2026-06-12",
        phase: "construire",
        titre: "Deux semaines de mode fantôme ont évité un incident réseau",
        detail:
          "La comparaison agent contre humain a révélé un motif mal couvert par le catalogue d'actions, corrigé avant toute action réelle.",
      },
      {
        id: "j5",
        type: "risque",
        date: "2026-06-05",
        phase: "construire",
        titre: "Messages client envoyés en double",
        detail: "Deux occurrences en S24. Cause : reprise sur erreur non idempotente. Corrigé.",
        clos: true,
      },
      {
        id: "j6",
        type: "decision",
        date: "2026-04-28",
        phase: "concevoir",
        titre: "Séparer l'Agent Diagnostic de l'Agent Résolution",
        detail:
          "Avec un agent unique portant les neuf outils, la justesse du diagnostic passait de 91 % à 84 %.",
      },
      {
        id: "j7",
        type: "decision",
        date: "2026-04-03",
        phase: "reinventer",
        titre: "Engagement social : aucune suppression de poste",
        detail:
          "Gains captés par le non-remplacement des départs et la baisse de la sous-traitance de débordement.",
      },
      {
        id: "j8",
        type: "decision",
        date: "2026-01-15",
        phase: "cadrer",
        titre: "Reformulation du mandat : du chatbot au délai de résolution",
        detail: "Validée par Claire Besson au jour 3.",
      },
    ],
    artefacts: [],
    creeLe: "2026-01-12T08:00:00.000Z",
    majLe: "2026-11-02T08:00:00.000Z",
  };
}
