"use client";

import { ArrowDown, ArrowUp, FlaskConical, Plus, Trash2 } from "lucide-react";
import { ActionsResultat, fmt } from "@/components/outils/commun";
import { Bouton, CLASSES_SAISIE, Carte, Champ, Vide } from "@/components/ui";
import { cn } from "@/lib/cn";
import { creerStock, nouvelId, useStock } from "@/lib/stockage";

type Sort = "conserver" | "augmenter" | "agent" | "automatiser" | "eliminer";

/** Hypothèses de gain par défaut, à défendre devant le terrain : ordre de grandeur, pas promesse. */
const SORTS: Record<Sort, { nom: string; gainTraitement: number; gainAttente: number; realise: string }> = {
  conserver: { nom: "Garder humain", gainTraitement: 0, gainAttente: 0, realise: "humain" },
  augmenter: { nom: "Augmenter l'humain", gainTraitement: 0.4, gainAttente: 0.2, realise: "humain" },
  agent: { nom: "Déléguer à un agent", gainTraitement: 0.85, gainAttente: 0.85, realise: "agent" },
  automatiser: { nom: "Automatiser par règle", gainTraitement: 0.95, gainAttente: 0.9, realise: "agent" },
  eliminer: { nom: "Éliminer", gainTraitement: 1, gainAttente: 1, realise: "" },
};

interface Etape {
  id: string;
  nom: string;
  acteur: string;
  traitement: number;
  attente: number;
  sort: Sort;
  autonomie: number;
}

interface Etat {
  nom: string;
  volume: number;
  eligibles: number;
  etapes: Etape[];
}

const INITIAL: Etat = { nom: "", volume: 0, eligibles: 100, etapes: [] };
const stock = creerStock<Etat>("fde-atlas:outil:redesign:v1", INITIAL);

const etape = (nom: string, acteur: string, traitement: number, attente: number, sort: Sort, autonomie = 3): Etape => ({
  id: nouvelId(),
  nom,
  acteur,
  traitement,
  attente,
  sort,
  autonomie,
});

/** Le traitement d'un incident PME chez Voxalis : 9 étapes, 4 passages de relais, 31 h de bout en bout. */
const exempleVoxalis = (): Etat => ({
  nom: "Traitement d'un incident technique PME",
  volume: 260400,
  eligibles: 65,
  etapes: [
    etape("Enregistrement et qualification du ticket", "Conseiller N1", 25, 0, "agent", 4),
    etape("Collecte d'informations dans six outils", "Conseiller N1", 150, 0, "agent", 3),
    etape("Premier diagnostic", "Conseiller N1", 98, 0, "agent", 3),
    etape("Transfert au niveau 2 et file d'attente", "Conseiller N1", 10, 763, "eliminer"),
    etape("Reprise du dossier et diagnostic approfondi", "Expert N2", 180, 0, "augmenter", 1),
    etape("Demande d'informations au client", "Expert N2", 15, 335, "agent", 3),
    etape("Remédiation", "Exploitation réseau", 160, 0, "agent", 3),
    etape("Vérification du rétablissement", "Back-office", 75, 0, "automatiser"),
    etape("Information du client et clôture", "Conseiller N1", 50, 0, "agent", 3),
  ],
});

function duree(minutes: number): string {
  if (minutes < 90) return `${fmt(minutes)} min`;
  return `${fmt(minutes / 60, 1)} h`;
}

function relais(acteurs: string[]): number {
  let n = 0;
  for (let i = 1; i < acteurs.length; i++) if (acteurs[i] && acteurs[i - 1] && acteurs[i] !== acteurs[i - 1]) n++;
  return n;
}

export function OutilRedesign() {
  const [e, setE] = useStock(stock);
  const maj = (id: string, champs: Partial<Etape>) =>
    setE((s) => ({ ...s, etapes: s.etapes.map((x) => (x.id === id ? { ...x, ...champs } : x)) }));
  const deplacer = (i: number, sens: -1 | 1) =>
    setE((s) => {
      const etapes = [...s.etapes];
      const j = i + sens;
      if (j < 0 || j >= etapes.length) return s;
      [etapes[i], etapes[j]] = [etapes[j], etapes[i]];
      return { ...s, etapes };
    });

  const cible = e.etapes.map((x) => ({
    ...x,
    tCible: x.traitement * (1 - SORTS[x.sort].gainTraitement),
    aCible: x.attente * (1 - SORTS[x.sort].gainAttente),
  }));
  const somme = (f: (x: (typeof cible)[number]) => number) => cible.reduce((s, x) => s + f(x), 0);
  const avant = { traitement: somme((x) => x.traitement), attente: somme((x) => x.attente) };
  const apres = { traitement: somme((x) => x.tCible), attente: somme((x) => x.aCible) };
  const delaiAvant = avant.traitement + avant.attente;
  const delaiCible = apres.traitement + apres.attente;
  const part = Math.min(100, Math.max(0, e.eligibles)) / 100;
  const delaiMoyen = part * delaiCible + (1 - part) * delaiAvant;
  const relaisAvant = relais(e.etapes.map((x) => x.acteur));
  const relaisApres = relais(
    cible.filter((x) => x.sort !== "eliminer").map((x) => (SORTS[x.sort].realise === "agent" ? "Agents" : x.acteur)),
  );
  const heuresLiberees = ((avant.traitement - apres.traitement) * part * e.volume) / 60;

  const markdown = [
    `# Redesign de processus — ${e.nom || "[processus]"}`,
    "",
    `Volume annuel : ${fmt(e.volume)} cas. Part des cas éligibles au flux cible : ${e.eligibles} %.`,
    "",
    "## Synthèse",
    "",
    "| | Existant | Cible (cas éligibles) | Moyenne pondérée |",
    "| --- | --- | --- | --- |",
    `| Délai de bout en bout | ${duree(delaiAvant)} | ${duree(delaiCible)} | ${duree(delaiMoyen)} |`,
    `| Temps de traitement | ${duree(avant.traitement)} | ${duree(apres.traitement)} | |`,
    `| Temps d'attente | ${duree(avant.attente)} | ${duree(apres.attente)} | |`,
    `| Passages de relais | ${relaisAvant} | ${relaisApres} | |`,
    "",
    `Capacité libérée : environ ${fmt(heuresLiberees)} heures par an, soit ${fmt(heuresLiberees / 1600, 1)} équivalents temps plein. Une capacité libérée n'est une économie que si un mécanisme la capte.`,
    "",
    "## Étapes",
    "",
    "| N° | Étape | Acteur actuel | Traitement | Attente | Décision | Autonomie | Traitement cible | Attente cible |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
    ...cible.map(
      (x, i) =>
        `| ${i + 1} | ${x.nom} | ${x.acteur} | ${duree(x.traitement)} | ${duree(x.attente)} | ${SORTS[x.sort].nom} | ${x.sort === "agent" ? `L${x.autonomie}` : "—"} | ${duree(x.tCible)} | ${duree(x.aCible)} |`,
    ),
    "",
    "_Gains par défaut : augmenter −40 % de traitement et −20 % d'attente ; agent −85 % ; règle −95 % et −90 % ; éliminer −100 %. À valider sur des cas réels avec le terrain._",
    "",
  ].join("\n");

  return (
    <div className="flex flex-col gap-5">
      <Carte className="grid gap-4 p-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-end">
        <Champ libelle="Processus">
          <input className={CLASSES_SAISIE} value={e.nom} placeholder="Traitement d'un incident, d'un dossier, d'une commande…" onChange={(ev) => setE({ ...e, nom: ev.target.value })} />
        </Champ>
        <Champ libelle="Volume annuel (cas)">
          <input type="number" min={0} className={cn(CLASSES_SAISIE, "tabular-nums")} value={e.volume || ""} placeholder="0" onChange={(ev) => setE({ ...e, volume: Math.max(0, Number(ev.target.value) || 0) })} />
        </Champ>
        <Champ libelle="Cas éligibles au flux cible (%)">
          <input type="number" min={0} max={100} className={cn(CLASSES_SAISIE, "tabular-nums")} value={e.eligibles} onChange={(ev) => setE({ ...e, eligibles: Math.min(100, Math.max(0, Number(ev.target.value) || 0)) })} />
        </Champ>
        <Bouton taille="sm" className="h-9" onClick={() => setE(exempleVoxalis())}>
          <FlaskConical className="size-3.5" aria-hidden />
          Exemple Voxalis
        </Bouton>
      </Carte>

      {e.etapes.length > 0 && (
        <>
          <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { nom: "Délai moyen de bout en bout", avant: duree(delaiAvant), apres: duree(delaiMoyen) },
              { nom: "Temps de traitement (cas éligibles)", avant: duree(avant.traitement), apres: duree(apres.traitement) },
              { nom: "Passages de relais", avant: String(relaisAvant), apres: String(relaisApres) },
              { nom: "Capacité libérée par an", avant: "", apres: e.volume ? `${fmt(heuresLiberees / 1600, 1)} ETP` : "—" },
            ].map((t) => (
              <Carte key={t.nom} className="px-4 py-3.5">
                <dt className="text-[0.76rem] text-ink-3">{t.nom}</dt>
                <dd className="mt-1 flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[1.45rem] leading-tight font-semibold tracking-tight text-ink">{t.apres}</span>
                  {t.avant && <span className="text-[0.82rem] text-ink-3">contre {t.avant}</span>}
                </dd>
              </Carte>
            ))}
          </dl>

          <Carte className="p-4 sm:p-5">
            <h2 className="mb-3 text-[0.95rem] font-semibold text-ink">Où passe le temps, avant et après</h2>
            <div className="flex flex-col gap-3">
              {[
                { nom: "Existant", t: avant.traitement, a: avant.attente },
                { nom: "Cible", t: apres.traitement, a: apres.attente },
              ].map((l) => (
                <div key={l.nom} className="grid grid-cols-[4.5rem_minmax(0,1fr)_5rem] items-center gap-3">
                  <span className="text-[0.82rem] font-medium text-ink">{l.nom}</span>
                  <span className="flex h-6 gap-0.5" role="img" aria-label={`${l.nom} : ${duree(l.t)} de traitement, ${duree(l.a)} d'attente`}>
                    <span className="rounded-[4px] bg-series-1" style={{ width: `${(l.t / (delaiAvant || 1)) * 100}%` }} title={`Traitement : ${duree(l.t)}`} />
                    <span className="rounded-[4px] bg-series-2" style={{ width: `${(l.a / (delaiAvant || 1)) * 100}%` }} title={`Attente : ${duree(l.a)}`} />
                  </span>
                  <span className="text-right text-[0.84rem] font-semibold text-ink tabular-nums">{duree(l.t + l.a)}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.76rem] text-ink-2">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-[3px] bg-series-1" aria-hidden />
                Traitement
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-[3px] bg-series-2" aria-hidden />
                Attente
              </span>
              <span className="text-ink-3">La valeur est presque toujours dans l&apos;attente, pas dans le traitement.</span>
            </p>
          </Carte>
        </>
      )}

      {!e.etapes.length ? (
        <Vide titre="Décrivez le processus existant">
          Ajoutez ses étapes dans l&apos;ordre, avec le temps de traitement et le temps d&apos;attente mesurés. Décidez ensuite du sort de chacune.
        </Vide>
      ) : (
        <ol className="flex flex-col gap-2">
          {cible.map((x, i) => (
            <li key={x.id}>
              <Carte className="grid gap-x-3 gap-y-2.5 p-3.5 lg:grid-cols-[1.5rem_minmax(0,2fr)_minmax(0,1.1fr)_5.5rem_5.5rem_11.5rem_4.5rem_auto] lg:items-center">
                <span className="titre-editorial text-[1.2rem] leading-none text-ink-3">{i + 1}</span>
                <input aria-label="Nom de l'étape" className={CLASSES_SAISIE} value={x.nom} placeholder="Étape" onChange={(ev) => maj(x.id, { nom: ev.target.value })} />
                <input aria-label="Acteur" className={CLASSES_SAISIE} value={x.acteur} placeholder="Acteur" onChange={(ev) => maj(x.id, { acteur: ev.target.value })} />
                <label className="flex flex-col gap-0.5">
                  <span className="text-[0.66rem] text-ink-3">Traitement (min)</span>
                  <input type="number" min={0} className={cn(CLASSES_SAISIE, "tabular-nums")} value={x.traitement || ""} placeholder="0" onChange={(ev) => maj(x.id, { traitement: Math.max(0, Number(ev.target.value) || 0) })} />
                </label>
                <label className="flex flex-col gap-0.5">
                  <span className="text-[0.66rem] text-ink-3">Attente (min)</span>
                  <input type="number" min={0} className={cn(CLASSES_SAISIE, "tabular-nums")} value={x.attente || ""} placeholder="0" onChange={(ev) => maj(x.id, { attente: Math.max(0, Number(ev.target.value) || 0) })} />
                </label>
                <label className="flex flex-col gap-0.5">
                  <span className="text-[0.66rem] text-ink-3">Décision</span>
                  <select className={CLASSES_SAISIE} value={x.sort} onChange={(ev) => maj(x.id, { sort: ev.target.value as Sort })}>
                    {(Object.entries(SORTS) as [Sort, (typeof SORTS)[Sort]][]).map(([id, s]) => (
                      <option key={id} value={id}>
                        {s.nom}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={cn("flex flex-col gap-0.5", x.sort !== "agent" && "invisible")}>
                  <span className="text-[0.66rem] text-ink-3">Autonomie</span>
                  <select className={CLASSES_SAISIE} value={x.autonomie} onChange={(ev) => maj(x.id, { autonomie: Number(ev.target.value) })}>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        L{n}
                      </option>
                    ))}
                  </select>
                </label>
                <span className="flex items-center justify-end gap-0.5">
                  <Bouton variante="discret" taille="sm" aria-label="Monter l'étape" disabled={i === 0} onClick={() => deplacer(i, -1)}>
                    <ArrowUp className="size-3.5" aria-hidden />
                  </Bouton>
                  <Bouton variante="discret" taille="sm" aria-label="Descendre l'étape" disabled={i === cible.length - 1} onClick={() => deplacer(i, 1)}>
                    <ArrowDown className="size-3.5" aria-hidden />
                  </Bouton>
                  <Bouton variante="discret" taille="sm" aria-label={`Supprimer l'étape ${x.nom}`} onClick={() => setE((s) => ({ ...s, etapes: s.etapes.filter((y) => y.id !== x.id) }))}>
                    <Trash2 className="size-3.5" aria-hidden />
                  </Bouton>
                </span>
                <p className="text-[0.76rem] text-ink-3 lg:col-span-7 lg:col-start-2">
                  Cible : {duree(x.tCible)} de traitement, {duree(x.aCible)} d&apos;attente
                  {x.sort === "eliminer" && " — étape supprimée du flux"}
                </p>
              </Carte>
            </li>
          ))}
        </ol>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Bouton variante="primaire" onClick={() => setE((s) => ({ ...s, etapes: [...s.etapes, etape("", s.etapes.at(-1)?.acteur ?? "", 0, 0, "conserver")] }))}>
          <Plus className="size-4" aria-hidden />
          Ajouter une étape
        </Bouton>
        {e.etapes.length > 0 && (
          <ActionsResultat
            outil="redesign-processus"
            titre={`Redesign — ${e.nom || "processus"}`}
            resume={`Délai moyen ${duree(delaiAvant)} → ${duree(delaiMoyen)}, relais ${relaisAvant} → ${relaisApres}`}
            markdown={markdown}
            donnees={e}
            onReinitialiser={() => setE(INITIAL)}
          />
        )}
      </div>

      <p className="max-w-3xl text-[0.82rem] leading-relaxed text-ink-3">
        Cet atelier chiffre un ordre de grandeur à partir de l&apos;existant. Il ne remplace pas la reconstruction à base
        zéro : avant de décider du sort de chaque étape, demandez-vous quelles étapes n&apos;existent que parce qu&apos;un humain
        devait transmettre, vérifier ou attendre.
      </p>
    </div>
  );
}
