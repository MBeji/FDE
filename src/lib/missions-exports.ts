import { phases } from "@/data/phases";
import { PHASES_RESUME } from "@/data/referentiels";
import {
  FORMATS_MISSION,
  STATUTS_LIVRABLE,
  STATUTS_VALEUR,
  avancementMission,
  avancementPhase,
  cleLivrable,
  type Mission,
} from "@/lib/missions-modele";

const nombre = (n: number | null) => (n === null ? "—" : n.toLocaleString("fr-FR"));

const dateLongue = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/** Point d'avancement prêt à envoyer, construit à partir de l'état de la mission. */
export function genererPointAvancement(m: Mission): string {
  const phase = phases.find((p) => p.id === m.phaseCourante)!;
  const local = avancementPhase(m, phase);
  const global = avancementMission(m, phases);
  const restantes = phase.activites.filter((a) => !m.activites[a.id]);
  const faites = phase.activites.filter((a) => m.activites[a.id]);
  const risques = m.journal.filter((e) => e.type === "risque" && !e.clos);
  const decisions = m.journal.filter((e) => e.type === "decision").slice(0, 5);

  const lignes = [
    `# Point d'avancement — ${m.nom}`,
    "",
    `**Client** : ${m.client} · **Date** : ${dateLongue(new Date().toISOString())} · **Rédacteur** : ${m.auteur || "_[à compléter]_"}`,
    "",
    "## En une phrase",
    "",
    `_[Le message de la semaine : où en est-on, et qu'attend-on du sponsor ?]_`,
    "",
    "## Avancement",
    "",
    `- Phase en cours : **${phase.numero}. ${phase.nom}** — ${Math.round(local.taux * 100)} % (mission : ${Math.round(global * 100)} %)`,
    `- Jalon visé : **${phase.jalon.code} — ${phase.jalon.nom}** (${local.criteres} critère(s) sur ${phase.jalon.criteres.length} réunis)`,
    "",
    "| Livrable | Statut |",
    "| --- | --- |",
    ...phase.livrables.map(
      (l) => `| ${l.titre} | ${STATUTS_LIVRABLE[m.livrables[cleLivrable(phase.id, l)] ?? "a-faire"]} |`,
    ),
    "",
    "## Fait",
    "",
    ...(faites.length ? faites.map((a) => `- ${a.titre}`) : ["- _[à compléter]_"]),
    "",
    "## À venir",
    "",
    ...(restantes.length ? restantes.map((a) => `- ${a.titre}`) : ["- Préparation du jalon"]),
    "",
    "## Valeur",
    "",
  ];

  if (m.valeur.length) {
    lignes.push(
      "| Indicateur | Référence | Cible | Réalisé | Statut |",
      "| --- | --- | --- | --- | --- |",
      ...m.valeur.map(
        (v) =>
          `| ${v.indicateur}${v.unite ? ` (${v.unite})` : ""} | ${nombre(v.reference)} | ${nombre(v.cible)} | ${nombre(v.realise)} | ${STATUTS_VALEUR[v.statut].nom} |`,
      ),
    );
  } else {
    lignes.push("_Registre de valeur à ouvrir._");
  }

  lignes.push(
    "",
    "## Risques et points de blocage",
    "",
    ...(risques.length
      ? risques.map((r) => `- **${r.titre}**${r.detail ? ` — ${r.detail}` : ""}`)
      : ["- Aucun risque ouvert."]),
    "",
    "## Décisions",
    "",
    ...(decisions.length
      ? decisions.map((d) => `- ${dateLongue(d.date)} : ${d.titre}`)
      : ["- Aucune décision enregistrée."]),
    "",
    "## Décisions attendues",
    "",
    "- _[Décision, par qui, pour quand]_",
    "",
  );
  return lignes.join("\n");
}

/** Brouillon de retour d'expérience, à anonymiser avant publication dans content/savoir. */
export function genererBrouillonRex(m: Mission): string {
  const apprentissages = m.journal.filter((e) => e.type === "apprentissage");
  const decisions = m.journal.filter((e) => e.type === "decision");
  const id = `rex-${m.secteur || "secteur"}-${m.domaine || "domaine"}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return [
    "---",
    `id: ${id}`,
    `titre: "REX — ${m.domaine || "[domaine]"} chez [un client du secteur]"`,
    `resume: "[Une ou deux phrases : ce que la mission a fait et la leçon principale.]"`,
    "type: rex",
    `phases: [${m.phases.join(", ")}]`,
    "tags: []",
    `secteur: "${m.secteur}"`,
    `date: "${new Date().toISOString().slice(0, 7)}"`,
    "---",
    "",
    "> [!WARNING]",
    "> Brouillon généré depuis le journal de mission. Anonymiser avant publication : ni nom de client, ni nom de personne, ni chiffre permettant de l'identifier.",
    "",
    "## Contexte",
    "",
    `Format de mission : ${FORMATS_MISSION[m.format].nom}. Phases couvertes : ${m.phases.map((p) => PHASES_RESUME[p].nom).join(", ")}.`,
    "",
    m.probleme ? `Problème de départ : ${m.probleme}` : "_[Le problème de départ]_",
    "",
    "## Ce que nous avons fait",
    "",
    ...(decisions.length
      ? decisions.map((d) => `- ${d.titre}${d.detail ? ` — ${d.detail}` : ""}`)
      : ["_[Les grandes étapes et les décisions structurantes]_"]),
    "",
    "## Résultats",
    "",
    ...(m.valeur.length
      ? [
          "| Indicateur | Référence | Cible | Réalisé |",
          "| --- | --- | --- | --- |",
          ...m.valeur.map(
            (v) =>
              `| ${v.indicateur}${v.unite ? ` (${v.unite})` : ""} | ${nombre(v.reference)} | ${nombre(v.cible)} | ${nombre(v.realise)} |`,
          ),
        ]
      : ["_[Les résultats mesurés, contre la référence]_"]),
    "",
    "## Ce qui a marché",
    "",
    ...(apprentissages.length
      ? apprentissages.map((a) => `- **${a.titre}**${a.detail ? ` — ${a.detail}` : ""}`)
      : ["_[À compléter]_"]),
    "",
    "## Ce que nous ferions autrement",
    "",
    "_[À compléter : c'est la partie la plus utile aux missions suivantes]_",
    "",
    "## À retenir",
    "",
    "_[Trois enseignements réutilisables]_",
    "",
  ].join("\n");
}
