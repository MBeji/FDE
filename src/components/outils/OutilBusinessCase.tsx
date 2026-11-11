"use client";

import { useState } from "react";
import { FlaskConical } from "lucide-react";
import { Colonnes } from "@/components/charts/Colonnes";
import { ActionsResultat, euros, fmt } from "@/components/outils/commun";
import { Bouton, CLASSES_SAISIE, Carte, Champ } from "@/components/ui";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";

interface Etat {
  titre: string;
  volume: number;
  coutActuel: number;
  coutCible: number;
  captation: number;
  autresBenefices: number;
  investissement: number;
  recurrent: number;
  montee: [number, number, number];
  runAn1: number;
}

const INITIAL: Etat = {
  titre: "",
  volume: 0,
  coutActuel: 0,
  coutCible: 0,
  captation: 60,
  autresBenefices: 0,
  investissement: 0,
  recurrent: 0,
  montee: [25, 80, 100],
  runAn1: 35,
};

/** Hypothèses du business case du cas fil rouge. */
const VOXALIS: Etat = {
  titre: "SAV Augmenté — Assistance & SAV Entreprises",
  volume: 420000,
  coutActuel: 41,
  coutCible: 26,
  captation: 60,
  autresBenefices: 1620000,
  investissement: 3100000,
  recurrent: 1200000,
  montee: [22, 80, 100],
  runAn1: 33,
};

const SCENARIOS = {
  prudent: { nom: "Prudent", benefices: 0.7, couts: 1.15, texte: "Bénéfices −30 %, coûts +15 %" },
  central: { nom: "Central", benefices: 1, couts: 1, texte: "Hypothèses saisies" },
  ambitieux: { nom: "Ambitieux", benefices: 1.2, couts: 1, texte: "Bénéfices +20 %" },
} as const;
type Scenario = keyof typeof SCENARIOS;

const stock = creerStock<Etat>("fde-atlas:outil:business-case:v1", INITIAL);

function calculer(e: Etat, s: Scenario) {
  const { benefices: mb, couts: mc } = SCENARIOS[s];
  const potentiel = Math.max(0, e.coutActuel - e.coutCible) * e.volume;
  const capte = potentiel * (e.captation / 100);
  const regime = (capte + e.autresBenefices) * mb;
  const benefices = e.montee.map((m) => (regime * m) / 100);
  const couts = [(e.investissement + (e.recurrent * e.runAn1) / 100) * mc, e.recurrent * mc, e.recurrent * mc];
  const totalB = benefices.reduce((a, b) => a + b, 0);
  const totalC = couts.reduce((a, b) => a + b, 0);
  const net = totalB - totalC;

  // Délai de retour : premier mois où le cumul devient positif, en répartissant chaque année linéairement.
  let cumul = 0;
  let retour: number | null = null;
  for (let an = 0; an < 3 && retour === null; an++) {
    const mensuel = (benefices[an] - couts[an]) / 12;
    for (let mois = 1; mois <= 12; mois++) {
      cumul += mensuel;
      if (cumul >= 0 && (an > 0 || mois > 1 || mensuel > 0)) {
        retour = an * 12 + mois;
        break;
      }
    }
  }
  return { potentiel, capte: capte * mb, regime, benefices, couts, totalB, totalC, net, roi: totalC ? net / totalC : 0, retour };
}

function Nombre({
  libelle,
  valeur,
  onChange,
  suffixe,
  aide,
}: {
  libelle: string;
  valeur: number;
  onChange: (n: number) => void;
  suffixe?: string;
  aide?: string;
}) {
  return (
    <Champ libelle={libelle} aide={aide}>
      <span className="relative">
        <input
          type="number"
          min={0}
          value={valeur || ""}
          placeholder="0"
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className={cn(CLASSES_SAISIE, "tabular-nums", suffixe && "pr-9")}
        />
        {suffixe && <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[0.8rem] text-ink-3">{suffixe}</span>}
      </span>
    </Champ>
  );
}

export function OutilBusinessCase() {
  const [e, setE] = useStock(stock);
  const [scenario, setScenario] = useState<Scenario>("central");
  const champ = <K extends keyof Etat>(k: K, v: Etat[K]) => setE({ ...e, [k]: v });
  const r = calculer(e, scenario);
  const tous = (Object.keys(SCENARIOS) as Scenario[]).map((s) => ({ s, ...calculer(e, s) }));
  const pret = r.regime > 0 || r.totalC > 0;

  const markdown = [
    `# Business case — ${e.titre || "[intitulé]"}`,
    "",
    "## Hypothèses",
    "",
    `- Volume annuel : ${fmt(e.volume)} cas`,
    `- Coût unitaire : ${fmt(e.coutActuel, 2)} € aujourd'hui, ${fmt(e.coutCible, 2)} € en cible`,
    `- Gain d'efficacité potentiel : ${euros(calculer(e, "central").potentiel)} par an, dont ${e.captation} % captés`,
    `- Autres bénéfices en régime de croisière : ${euros(e.autresBenefices)} par an`,
    `- Investissement initial : ${euros(e.investissement)} ; coût récurrent : ${euros(e.recurrent)} par an (${e.runAn1} % la première année)`,
    `- Montée en charge des bénéfices : ${e.montee.join(" %, ")} % sur trois ans`,
    "",
    "## Scénarios sur trois ans",
    "",
    "| Scénario | Valeur annuelle en croisière | Bénéfices | Coûts | Gain net | ROI | Retour sur investissement |",
    "| --- | --- | --- | --- | --- | --- | --- |",
    ...tous.map(
      (x) =>
        `| ${SCENARIOS[x.s].nom} (${SCENARIOS[x.s].texte.toLowerCase()}) | ${euros(x.regime)} | ${euros(x.totalB)} | ${euros(x.totalC)} | ${euros(x.net)} | ${fmt(x.roi * 100)} % | ${x.retour ? `${x.retour}e mois` : "au-delà de 3 ans"} |`,
    ),
    "",
    "## Flux du scénario central",
    "",
    "| | Année 1 | Année 2 | Année 3 |",
    "| --- | --- | --- | --- |",
    `| Bénéfices | ${calculer(e, "central").benefices.map(euros).join(" | ")} |`,
    `| Coûts | ${calculer(e, "central").couts.map(euros).join(" | ")} |`,
    "",
    "_Les gains de temps ne sont des économies que s'ils sont captés : préciser le mécanisme (départs non remplacés, sous-traitance, volume absorbé) et faire valider les hypothèses par la finance._",
    "",
  ].join("\n");

  return (
    <div className="grid gap-6 xl:grid-cols-[23rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-4">
        <Carte className="flex flex-col gap-3.5 p-4">
          <Champ libelle="Intitulé">
            <input className={CLASSES_SAISIE} value={e.titre} placeholder="Domaine ou cas d'usage chiffré" onChange={(ev) => champ("titre", ev.target.value)} />
          </Champ>
          <p className="surtitre mt-1">Bénéfices</p>
          <Nombre libelle="Volume annuel" valeur={e.volume} onChange={(n) => champ("volume", n)} suffixe="cas" aide="Tickets, dossiers, commandes : l'unité d'œuvre du processus." />
          <div className="grid grid-cols-2 gap-3">
            <Nombre libelle="Coût unitaire actuel" valeur={e.coutActuel} onChange={(n) => champ("coutActuel", n)} suffixe="€" />
            <Nombre libelle="Coût unitaire cible" valeur={e.coutCible} onChange={(n) => champ("coutCible", n)} suffixe="€" />
          </div>
          <Nombre libelle="Taux de captation" valeur={e.captation} onChange={(n) => champ("captation", Math.min(100, n))} suffixe="%" aide="Part du gain d'efficacité réellement transformée en économies." />
          <Nombre libelle="Autres bénéfices annuels" valeur={e.autresBenefices} onChange={(n) => champ("autresBenefices", n)} suffixe="€" aide="Marge préservée ou gagnée, risque évité, en régime de croisière." />
          <p className="surtitre mt-1">Coûts</p>
          <Nombre libelle="Investissement initial" valeur={e.investissement} onChange={(n) => champ("investissement", n)} suffixe="€" aide="Équipe, plateforme, intégration, changement et formation." />
          <Nombre libelle="Coût récurrent annuel" valeur={e.recurrent} onChange={(n) => champ("recurrent", n)} suffixe="€" aide="Inférence, plateforme, exploitation, maintenance." />
          <p className="surtitre mt-1">Montée en charge</p>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <Nombre
                key={i}
                libelle={`Année ${i + 1}`}
                valeur={e.montee[i]}
                suffixe="%"
                onChange={(n) => {
                  const montee = [...e.montee] as Etat["montee"];
                  montee[i] = Math.min(100, n);
                  champ("montee", montee);
                }}
              />
            ))}
          </div>
          <Nombre libelle="Part du coût récurrent en année 1" valeur={e.runAn1} onChange={(n) => champ("runAn1", Math.min(100, n))} suffixe="%" />
        </Carte>
        <Bouton taille="sm" className="self-start" onClick={() => setE(VOXALIS)}>
          <FlaskConical className="size-3.5" aria-hidden />
          Exemple Voxalis
        </Bouton>
      </div>

      <div className="flex min-w-0 flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div role="radiogroup" aria-label="Scénario" className="flex rounded-lg border border-line bg-surface-2 p-0.5">
            {(Object.entries(SCENARIOS) as [Scenario, (typeof SCENARIOS)[Scenario]][]).map(([id, s]) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={scenario === id}
                title={s.texte}
                onClick={() => setScenario(id)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[0.82rem] font-medium transition-colors",
                  scenario === id ? "bg-surface text-ink shadow-card" : "text-ink-2 hover:text-ink",
                )}
              >
                {s.nom}
              </button>
            ))}
          </div>
          <p className="text-[0.78rem] text-ink-3">{SCENARIOS[scenario].texte}</p>
        </div>

        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { nom: "Valeur annuelle en croisière", valeur: euros(r.regime) },
            { nom: "Gain net sur 3 ans", valeur: euros(r.net) },
            { nom: "ROI sur 3 ans", valeur: `${fmt(r.roi * 100)} %` },
            { nom: "Retour sur investissement", valeur: r.retour ? `${r.retour}e mois` : "Au-delà de 3 ans" },
          ].map((t) => (
            <Carte key={t.nom} className="px-4 py-3.5">
              <dt className="text-[0.76rem] text-ink-3">{t.nom}</dt>
              <dd className="mt-1 text-[1.45rem] leading-tight font-semibold tracking-tight text-ink">{pret ? t.valeur : "—"}</dd>
            </Carte>
          ))}
        </dl>

        <Carte className="p-4 sm:p-5">
          <h2 className="mb-3 text-[0.95rem] font-semibold text-ink">Bénéfices et coûts par année</h2>
          <Colonnes
            titre="Bénéfices et coûts par année"
            categories={["Année 1", "Année 2", "Année 3"]}
            format={euros}
            series={[
              { nom: "Bénéfices", couleur: "var(--series-1)", valeurs: r.benefices },
              { nom: "Coûts", couleur: "var(--series-2)", valeurs: r.couts },
            ]}
          />
          <div className="table-wrap mt-4 overflow-x-auto rounded-lg border border-line">
            <table className="w-full text-[0.84rem]">
              <thead>
                <tr className="border-b border-line bg-surface-2 text-left text-[0.76rem] text-ink-2">
                  <th className="px-3 py-2 font-medium"> </th>
                  {["Année 1", "Année 2", "Année 3", "Total"].map((c) => (
                    <th key={c} className="px-3 py-2 text-right font-medium">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {[
                  { nom: "Bénéfices", v: r.benefices, t: r.totalB },
                  { nom: "Coûts", v: r.couts, t: r.totalC },
                  { nom: "Flux net", v: r.benefices.map((b, i) => b - r.couts[i]), t: r.net },
                ].map((l) => (
                  <tr key={l.nom} className="border-b border-line last:border-b-0 last:font-semibold">
                    <td className="px-3 py-2 text-ink">{l.nom}</td>
                    {l.v.map((x, i) => (
                      <td key={i} className="px-3 py-2 text-right text-ink">
                        {euros(x)}
                      </td>
                    ))}
                    <td className="px-3 py-2 text-right text-ink">{euros(l.t)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Carte>

        <Carte className="p-4 sm:p-5">
          <h2 className="mb-1 text-[0.95rem] font-semibold text-ink">Du gain potentiel à la valeur captée</h2>
          <p className="mb-3 text-[0.84rem] leading-relaxed text-ink-2">
            Le gain d&apos;efficacité potentiel est de <strong className="font-semibold text-ink">{euros(calculer(e, "central").potentiel)}</strong> par
            an. Seuls <strong className="font-semibold text-ink">{e.captation} %</strong> sont retenus comme économies : un gain de temps n&apos;est une
            économie que si un mécanisme le capte (départs non remplacés, baisse de la sous-traitance, volume absorbé à effectif constant).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.84rem]">
              <thead>
                <tr className="border-b border-line text-left text-[0.76rem] text-ink-2">
                  <th className="py-2 pr-3 font-medium">Scénario</th>
                  <th className="px-3 py-2 text-right font-medium">Gain net 3 ans</th>
                  <th className="px-3 py-2 text-right font-medium">ROI</th>
                  <th className="py-2 pl-3 text-right font-medium">Retour</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {tous.map((x) => (
                  <tr key={x.s} className={cn("border-b border-line last:border-b-0", x.s === scenario && "font-semibold")}>
                    <td className="py-2 pr-3 text-ink">{SCENARIOS[x.s].nom}</td>
                    <td className="px-3 py-2 text-right text-ink">{euros(x.net)}</td>
                    <td className="px-3 py-2 text-right text-ink">{fmt(x.roi * 100)} %</td>
                    <td className="py-2 pl-3 text-right text-ink">{x.retour ? `${x.retour}e mois` : "> 3 ans"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Carte>

        <ActionsResultat
          outil="business-case"
          titre={`Business case — ${e.titre || "sans intitulé"}`}
          resume={`Scénario central : gain net ${euros(calculer(e, "central").net)} sur 3 ans, ROI ${fmt(calculer(e, "central").roi * 100)} %`}
          markdown={markdown}
          donnees={e}
          onReinitialiser={() => setE(INITIAL)}
        />
      </div>
    </div>
  );
}
