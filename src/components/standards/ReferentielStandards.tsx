"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  BookOpen,
  MinusCircle,
  Search,
} from "lucide-react";
import { ActionsResultat } from "@/components/outils/commun";
import { Bouton, CLASSES_SAISIE, Champ, Jauge, OngletsSegmentes, Pastille, Vide } from "@/components/ui";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";
import {
  DOMAINES_STANDARDS,
  NIVEAUX,
  REFERENTIELS_EXTERNES,
  type DomaineStandards,
  type NiveauStandard,
  type Standard,
} from "@/data/standards";

/* ------------------------------------------------------------------ */
/* État de la revue, conservé localement                               */
/* ------------------------------------------------------------------ */

type Statut = "conforme" | "ecart" | "na";

const JALONS = {
  "": "Non précisé",
  "fin-conception": "Fin de conception (G4)",
  "avant-pilote": "Avant le pilote",
  "avant-production": "Avant la mise en production",
} as const;
type Jalon = keyof typeof JALONS;

interface EtatRevue {
  objet: string;
  jalon: Jalon;
  statuts: Record<string, Statut>;
  notes: Record<string, string>;
}

const INITIAL: EtatRevue = { objet: "", jalon: "", statuts: {}, notes: {} };
const stockRevue = creerStock<EtatRevue>("fde-atlas:standards:v1", INITIAL);
/** Mode conservé : on retrouve la revue en cours après un rechargement ou un aller-retour. */
const stockMode = creerStock<"consulter" | "revue">("fde-atlas:standards:mode:v1", "consulter");

const STATUTS: Record<Statut, { nom: string; icone: typeof CheckCircle2; actif: string }> = {
  conforme: { nom: "Conforme", icone: CheckCircle2, actif: "border-good/30 bg-good-soft text-good-ink" },
  ecart: { nom: "Écart", icone: AlertTriangle, actif: "border-critical/30 bg-critical-soft text-critical-ink" },
  na: { nom: "Non applicable", icone: MinusCircle, actif: "border-line-strong bg-surface-2 text-ink" },
};

const TONS_NIVEAU: Record<NiveauStandard, "plein" | "accent" | "neutre"> = {
  obligatoire: "plein",
  recommande: "accent",
  contextuel: "neutre",
};

const ORDRE_NIVEAUX: NiveauStandard[] = ["obligatoire", "recommande", "contextuel"];

const TOTAL = DOMAINES_STANDARDS.reduce((n, d) => n + d.standards.length, 0);

function normaliser(t: string) {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function texteRecherche(s: Standard) {
  return normaliser(
    [
      s.id,
      s.enonce,
      s.pourquoi,
      s.verification,
      s.condition ?? "",
      s.exemple ?? "",
      ...s.references.map((r) => REFERENTIELS_EXTERNES[r].nom),
    ].join(" "),
  );
}

/* ------------------------------------------------------------------ */
/* Synthèse et export                                                  */
/* ------------------------------------------------------------------ */

interface Synthese {
  evalues: number;
  obligatoires: number;
  obligatoiresConformes: number;
  obligatoiresApplicables: number;
  obligatoiresNonEvalues: number;
  ecarts: Record<NiveauStandard, number>;
  totalEcarts: number;
  taux: number | null;
}

function calculerSynthese(etat: EtatRevue): Synthese {
  const ecarts: Record<NiveauStandard, number> = { obligatoire: 0, recommande: 0, contextuel: 0 };
  let evalues = 0;
  let obligatoires = 0;
  let obligatoiresConformes = 0;
  let obligatoiresNa = 0;
  let obligatoiresNonEvalues = 0;
  for (const d of DOMAINES_STANDARDS) {
    for (const s of d.standards) {
      const st = etat.statuts[s.id];
      if (st) evalues++;
      if (st === "ecart") ecarts[s.niveau]++;
      if (s.niveau === "obligatoire") {
        obligatoires++;
        if (st === "conforme") obligatoiresConformes++;
        else if (st === "na") obligatoiresNa++;
        else if (!st) obligatoiresNonEvalues++;
      }
    }
  }
  const obligatoiresApplicables = obligatoires - obligatoiresNa;
  const evaluesApplicables = obligatoiresApplicables - obligatoiresNonEvalues;
  return {
    evalues,
    obligatoires,
    obligatoiresConformes,
    obligatoiresApplicables,
    obligatoiresNonEvalues,
    ecarts,
    totalEcarts: ecarts.obligatoire + ecarts.recommande + ecarts.contextuel,
    taux: evaluesApplicables > 0 ? obligatoiresConformes / evaluesApplicables : null,
  };
}

function pct(x: number) {
  return `${Math.round(x * 100)} %`;
}

function genererMarkdown(etat: EtatRevue, syn: Synthese): string {
  const l: string[] = [];
  l.push("# Revue des standards d'ingénierie", "");
  if (etat.objet.trim()) l.push(`**Objet de la revue** : ${etat.objet.trim()}`, "");
  if (etat.jalon) l.push(`**Jalon** : ${JALONS[etat.jalon]}`, "");
  l.push("## Synthèse", "");
  l.push(`- Standards évalués : ${syn.evalues} sur ${TOTAL}`);
  l.push(
    `- Conformité des obligatoires : ${syn.taux === null ? "non calculable (aucun obligatoire applicable évalué)" : pct(syn.taux)} (${syn.obligatoiresConformes} conformes sur ${syn.obligatoiresApplicables - syn.obligatoiresNonEvalues} applicables évalués)`,
  );
  if (syn.obligatoiresNonEvalues > 0) l.push(`- Obligatoires non évalués : ${syn.obligatoiresNonEvalues}`);
  l.push(
    `- Écarts : ${syn.ecarts.obligatoire} obligatoires, ${syn.ecarts.recommande} recommandés, ${syn.ecarts.contextuel} contextuels`,
    "",
  );
  l.push(
    "> Rappel : tout écart à un standard obligatoire est inscrit au registre RAID et arbitré ; un écart à un standard recommandé est justifié par écrit.",
    "",
  );

  l.push("## Écarts", "");
  if (syn.totalEcarts === 0) l.push("Aucun écart relevé.", "");
  for (const d of DOMAINES_STANDARDS) {
    const ecarts = d.standards
      .filter((s) => etat.statuts[s.id] === "ecart")
      .sort((a, b) => ORDRE_NIVEAUX.indexOf(a.niveau) - ORDRE_NIVEAUX.indexOf(b.niveau));
    if (!ecarts.length) continue;
    l.push(`### ${d.nom}`, "");
    for (const s of ecarts) {
      l.push(`- **${s.id} — ${NIVEAUX[s.niveau].nom}** : ${s.enonce}`);
      l.push(`  - Pourquoi : ${s.pourquoi}`);
      const note = etat.notes[s.id]?.trim();
      l.push(`  - Note : ${note ? note.replace(/\s*\n\s*/g, " ") : "à compléter (constat, propriétaire, date de résorption)"}`);
    }
    l.push("");
  }

  const autres = (statut: Statut, titre: string) => {
    const lignes: string[] = [];
    for (const d of DOMAINES_STANDARDS) {
      const liste = d.standards.filter((s) => etat.statuts[s.id] === statut);
      if (!liste.length) continue;
      lignes.push(`### ${d.nom}`, "");
      for (const s of liste) {
        const note = etat.notes[s.id]?.trim();
        lignes.push(`- ${s.id} — ${s.enonce}${note ? ` *Note : ${note.replace(/\s*\n\s*/g, " ")}*` : ""}`);
      }
      lignes.push("");
    }
    if (lignes.length) l.push(`## ${titre}`, "", ...lignes);
  };
  autres("na", "Non applicables");
  autres("conforme", "Conformes");

  const nonEvalues = DOMAINES_STANDARDS.flatMap((d) => d.standards).filter((s) => !etat.statuts[s.id]);
  if (nonEvalues.length) {
    l.push("## Non évalués", "");
    l.push(nonEvalues.map((s) => s.id).join(", "), "");
  }
  return l.join("\n");
}

/* ------------------------------------------------------------------ */
/* Composants                                                          */
/* ------------------------------------------------------------------ */

function SelecteurStatut({
  standard,
  valeur,
  onChange,
}: {
  standard: Standard;
  valeur: Statut | undefined;
  onChange: (s: Statut | undefined) => void;
}) {
  return (
    <div role="radiogroup" aria-label={`Statut de ${standard.id}`} className="flex flex-wrap gap-1">
      {(Object.keys(STATUTS) as Statut[]).map((s) => {
        const { nom, icone: Icone, actif } = STATUTS[s];
        const choisi = valeur === s;
        return (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={choisi}
            onClick={() => onChange(choisi ? undefined : s)}
            className={cn(
              "inline-flex h-7 items-center gap-1 rounded-md border px-2 text-[0.75rem] font-medium transition-colors",
              choisi ? actif : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink",
            )}
          >
            <Icone className="size-3.5" aria-hidden />
            {nom}
          </button>
        );
      })}
    </div>
  );
}

function LigneStandard({
  standard,
  deplie,
  onBasculer,
  revue,
  statut,
  note,
  onStatut,
  onNote,
}: {
  standard: Standard;
  deplie: boolean;
  onBasculer: () => void;
  revue: boolean;
  statut: Statut | undefined;
  note: string;
  onStatut: (s: Statut | undefined) => void;
  onNote: (n: string) => void;
}) {
  const s = standard;
  const idDetail = `detail-${s.id}`;
  const afficherNote = revue && (deplie || statut === "ecart" || note.length > 0);
  return (
    <li id={s.id} className="scroll-mt-20 rounded-xl border border-line bg-surface shadow-card">
      <div className="flex flex-col gap-2 p-3.5 sm:p-4">
        <button
          type="button"
          onClick={onBasculer}
          aria-expanded={deplie}
          aria-controls={idDetail}
          className="flex w-full items-start gap-3 text-left"
        >
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[0.72rem] text-ink-3">{s.id}</span>
              <Pastille ton={TONS_NIVEAU[s.niveau]}>{NIVEAUX[s.niveau].nom}</Pastille>
              {revue && statut && (
                <span className="sr-only">Statut : {STATUTS[statut].nom}</span>
              )}
            </span>
            <span className="mt-1.5 block text-[0.9rem] leading-relaxed font-medium text-ink">{s.enonce}</span>
            {s.condition && (
              <span className="mt-1 block text-[0.8rem] leading-snug text-ink-2">
                <span className="font-medium text-ink">S&apos;applique si : </span>
                {s.condition}
              </span>
            )}
          </span>
          <ChevronDown
            className={cn("mt-1 size-4 flex-none text-ink-3 transition-transform", deplie && "rotate-180")}
            aria-hidden
          />
        </button>
        {revue && <SelecteurStatut standard={s} valeur={statut} onChange={onStatut} />}
      </div>

      {deplie && (
        <div id={idDetail} className="border-t border-line px-3.5 py-3.5 sm:px-4">
          <dl className="grid gap-x-8 gap-y-3 md:grid-cols-2">
            <div>
              <dt className="surtitre mb-1">Pourquoi</dt>
              <dd className="text-[0.87rem] leading-relaxed text-ink-2">{s.pourquoi}</dd>
            </div>
            <div>
              <dt className="surtitre mb-1">Vérification en revue</dt>
              <dd className="text-[0.87rem] leading-relaxed text-ink-2">{s.verification}</dd>
            </div>
            {s.exemple && (
              <div className="md:col-span-2">
                <dt className="surtitre mb-1">Exemple Voxalis</dt>
                <dd className="text-[0.87rem] leading-relaxed text-ink-2">{s.exemple}</dd>
              </div>
            )}
            {s.references.length > 0 && (
              <div className="md:col-span-2">
                <dt className="surtitre mb-1.5">Référentiels externes</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {s.references.map((r) => (
                    <Pastille key={r}>{REFERENTIELS_EXTERNES[r].nom}</Pastille>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </div>
      )}

      {afficherNote && (
        <div className="border-t border-line px-3.5 py-3 sm:px-4">
          <Champ
            libelle={`Note de revue — ${s.id}`}
            aide={
              statut === "ecart"
                ? s.niveau === "obligatoire"
                  ? "Écart à un obligatoire : décrivez le constat, le propriétaire, la date de résorption et la référence RAID."
                  : "Décrivez le constat et la justification de l'écart, ou l'action prévue."
                : undefined
            }
          >
            <textarea
              value={note}
              onChange={(e) => onNote(e.target.value)}
              rows={2}
              className={cn(CLASSES_SAISIE, "resize-y")}
              placeholder="Constat, preuve consultée, action prévue…"
            />
          </Champ>
        </div>
      )}
    </li>
  );
}

function BandeauSynthese({ syn }: { syn: Synthese }) {
  return (
    <div className="grid gap-4 rounded-xl border border-line bg-surface p-4 shadow-card md:grid-cols-[1.3fr_1fr_1fr]">
      <div>
        <p className="surtitre mb-1">Conformité des obligatoires</p>
        <p className="text-[1.6rem] leading-none font-semibold text-ink tabular-nums">
          {syn.taux === null ? "—" : pct(syn.taux)}
        </p>
        <Jauge valeur={syn.taux ?? 0} libelle="Conformité des standards obligatoires" className="mt-2.5" />
        <p className="mt-1.5 text-[0.78rem] text-ink-3">
          {syn.obligatoiresConformes} conformes sur {syn.obligatoiresApplicables - syn.obligatoiresNonEvalues} applicables
          évalués
          {syn.obligatoiresNonEvalues > 0 && ` · ${syn.obligatoiresNonEvalues} obligatoires restent à évaluer`}
        </p>
      </div>
      <div>
        <p className="surtitre mb-1.5">Écarts par niveau</p>
        <ul className="flex flex-col gap-1">
          {ORDRE_NIVEAUX.map((n) => (
            <li key={n} className="flex items-center justify-between gap-2 text-[0.85rem] text-ink-2">
              <span>{NIVEAUX[n].nom}</span>
              {syn.ecarts[n] > 0 ? (
                <Pastille ton={n === "obligatoire" ? "critique" : "alerte"}>
                  <AlertTriangle className="size-3" aria-hidden />
                  {syn.ecarts[n]} écart{syn.ecarts[n] > 1 ? "s" : ""}
                </Pastille>
              ) : (
                <span className="text-[0.8rem] text-ink-3 tabular-nums">0</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="surtitre mb-1.5">Avancement</p>
        <p className="text-[0.85rem] text-ink-2">
          <span className="font-semibold text-ink tabular-nums">{syn.evalues}</span> standards évalués sur {TOTAL}
        </p>
        <Jauge valeur={syn.evalues / TOTAL} libelle="Avancement de la revue" className="mt-2" />
        {syn.ecarts.obligatoire > 0 ? (
          <p className="mt-2 flex items-start gap-1.5 text-[0.78rem] leading-snug text-critical-ink">
            <AlertTriangle className="mt-px size-3.5 flex-none" aria-hidden />
            Écart sur un obligatoire : inscription au RAID et arbitrage avant de franchir le jalon.
          </p>
        ) : syn.evalues > 0 && syn.obligatoiresNonEvalues === 0 ? (
          <p className="mt-2 flex items-start gap-1.5 text-[0.78rem] leading-snug text-good-ink">
            <CheckCircle2 className="mt-px size-3.5 flex-none" aria-hidden />
            Tous les obligatoires sont évalués, sans écart.
          </p>
        ) : null}
      </div>
    </div>
  );
}

const CLASSES_SELECT =
  "h-9 rounded-lg border border-line bg-bg px-2.5 text-[0.84rem] text-ink outline-none hover:border-line-strong focus:border-accent";

type FiltreStatut = "" | "a-evaluer" | Statut;

export function ReferentielStandards() {
  const [mode, setMode] = useStock(stockMode);
  const [requete, setRequete] = useState("");
  const [domaine, setDomaine] = useState("");
  const [niveau, setNiveau] = useState<NiveauStandard | "">("");
  const [filtreStatut, setFiltreStatut] = useState<FiltreStatut>("");
  const [ouverts, setOuverts] = useState<Set<string>>(() => new Set());
  const [etat, setEtat] = useStock(stockRevue);
  const revue = mode === "revue";

  const visibles: { domaine: DomaineStandards; standards: Standard[] }[] = useMemo(() => {
    const termes = normaliser(requete).split(/\s+/).filter(Boolean);
    return DOMAINES_STANDARDS.filter((d) => !domaine || d.id === domaine)
      .map((d) => ({
        domaine: d,
        standards: d.standards.filter((s) => {
          if (niveau && s.niveau !== niveau) return false;
          if (revue && filtreStatut) {
            const st = etat.statuts[s.id];
            if (filtreStatut === "a-evaluer" ? st : st !== filtreStatut) return false;
          }
          if (!termes.length) return true;
          const texte = texteRecherche(s);
          return termes.every((t) => texte.includes(t));
        }),
      }))
      .filter((g) => g.standards.length > 0);
  }, [requete, domaine, niveau, revue, filtreStatut, etat.statuts]);

  const nbVisibles = visibles.reduce((n, g) => n + g.standards.length, 0);
  const syn = useMemo(() => calculerSynthese(etat), [etat]);
  const markdown = useMemo(() => genererMarkdown(etat, syn), [etat, syn]);

  const basculer = (id: string) =>
    setOuverts((o) => {
      const n = new Set(o);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  const toutDeplier = () => setOuverts(new Set(visibles.flatMap((g) => g.standards.map((s) => s.id))));

  const definirStatut = (id: string, st: Statut | undefined) =>
    setEtat((e) => {
      const statuts = { ...e.statuts };
      if (st) statuts[id] = st;
      else delete statuts[id];
      return { ...e, statuts };
    });
  const definirNote = (id: string, note: string) =>
    setEtat((e) => {
      const notes = { ...e.notes };
      if (note) notes[id] = note;
      else delete notes[id];
      return { ...e, notes };
    });

  const filtresActifs = Boolean(requete || domaine || niveau || (revue && filtreStatut));

  return (
    <div>
      {/* Mode */}
      <OngletsSegmentes
        className="mb-4"
        libelle="Mode d'utilisation"
        prefixeId="standards"
        valeur={mode}
        onChange={setMode}
        onglets={[
          { id: "consulter", nom: "Consulter", icone: BookOpen },
          { id: "revue", nom: "Mener une revue", icone: ClipboardCheck },
        ]}
      />

      <div id="standards-panneau" role="tabpanel" aria-labelledby={`standards-onglet-${mode}`}>
        {revue && (
          <section aria-label="Revue en cours" className="mb-6 flex flex-col gap-4">
            <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
              <Champ libelle="Objet de la revue" aide="Système, périmètre et version revus.">
                <input
                  value={etat.objet}
                  onChange={(e) => setEtat((x) => ({ ...x, objet: e.target.value }))}
                  className={CLASSES_SAISIE}
                  placeholder="Ex. : SAV Augmenté, agents Qualification et Diagnostic, avant le pilote de Nantes"
                />
              </Champ>
              <Champ libelle="Jalon">
                <select
                  value={etat.jalon}
                  onChange={(e) => setEtat((x) => ({ ...x, jalon: e.target.value as Jalon }))}
                  className={CLASSES_SAISIE}
                >
                  {(Object.keys(JALONS) as Jalon[]).map((j) => (
                    <option key={j} value={j}>
                      {JALONS[j]}
                    </option>
                  ))}
                </select>
              </Champ>
            </div>
            <BandeauSynthese syn={syn} />
            <ActionsResultat
              outil="revue-standards"
              titre={`Revue des standards d'ingénierie${etat.objet.trim() ? ` — ${etat.objet.trim()}` : ""}`}
              resume={`${syn.evalues}/${TOTAL} évalués · obligatoires conformes : ${syn.taux === null ? "—" : pct(syn.taux)} · écarts : ${syn.ecarts.obligatoire} obligatoires, ${syn.ecarts.recommande} recommandés, ${syn.ecarts.contextuel} contextuels`}
              markdown={markdown}
              donnees={etat}
              onReinitialiser={() => setEtat(INITIAL)}
            />
          </section>
        )}

        {/* Filtres */}
        <div
          className={cn(
            "mb-4 grid gap-3 rounded-xl border border-line bg-surface p-3.5 sm:grid-cols-2",
            revue ? "lg:grid-cols-[1.4fr_1fr_auto_1fr]" : "lg:grid-cols-[1.4fr_1fr_auto]",
          )}
        >
          <label className="flex flex-col gap-1">
            <span className="text-[0.72rem] font-medium text-ink-3">Recherche</span>
            <span className="flex h-9 items-center gap-2 rounded-lg border border-line bg-bg px-2.5 focus-within:border-accent">
              <Search className="size-3.5 flex-none text-ink-3" aria-hidden />
              <input
                type="search"
                value={requete}
                onChange={(e) => setRequete(e.target.value)}
                placeholder="Secret, golden set, OWASP, AGT-03…"
                className="w-full bg-transparent text-[0.84rem] outline-none placeholder:text-ink-3"
              />
            </span>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.72rem] font-medium text-ink-3">Domaine</span>
            <select value={domaine} onChange={(e) => setDomaine(e.target.value)} className={CLASSES_SELECT}>
              <option value="">Tous les domaines</option>
              {DOMAINES_STANDARDS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.nom}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-col gap-1">
            <span id="filtre-niveau" className="text-[0.72rem] font-medium text-ink-3">
              Niveau
            </span>
            <div role="group" aria-labelledby="filtre-niveau" className="flex min-h-9 flex-wrap items-center gap-1.5">
              {ORDRE_NIVEAUX.map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={niveau === n}
                  onClick={() => setNiveau(niveau === n ? "" : n)}
                  className={cn(
                    "rounded-md border px-2 py-0.5 text-[0.78rem] transition-colors",
                    niveau === n
                      ? "border-ink bg-ink font-medium text-bg"
                      : "border-line text-ink-2 hover:border-line-strong hover:text-ink",
                  )}
                >
                  {NIVEAUX[n].nom}
                </button>
              ))}
            </div>
          </div>
          {revue && (
            <label className="flex flex-col gap-1">
              <span className="text-[0.72rem] font-medium text-ink-3">Statut de revue</span>
              <select
                value={filtreStatut}
                onChange={(e) => setFiltreStatut(e.target.value as FiltreStatut)}
                className={CLASSES_SELECT}
              >
                <option value="">Tous</option>
                <option value="a-evaluer">À évaluer</option>
                <option value="ecart">Écarts</option>
                <option value="conforme">Conformes</option>
                <option value="na">Non applicables</option>
              </select>
            </label>
          )}
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[0.8rem] text-ink-3" aria-live="polite">
            {nbVisibles} standard{nbVisibles > 1 ? "s" : ""} sur {TOTAL}
            {filtresActifs && (
              <>
                {" · "}
                <button
                  type="button"
                  onClick={() => {
                    setRequete("");
                    setDomaine("");
                    setNiveau("");
                    setFiltreStatut("");
                  }}
                  className="font-medium text-accent hover:underline"
                >
                  Effacer les filtres
                </button>
              </>
            )}
          </p>
          <div className="flex gap-1">
            <Bouton variante="discret" taille="sm" onClick={toutDeplier} disabled={!nbVisibles}>
              Tout déplier
            </Bouton>
            <Bouton variante="discret" taille="sm" onClick={() => setOuverts(new Set())} disabled={!ouverts.size}>
              Tout replier
            </Bouton>
          </div>
        </div>

        {!nbVisibles && <Vide titre="Aucun standard ne correspond">Élargissez la recherche ou les filtres.</Vide>}

        <div className="flex flex-col gap-8">
          {visibles.map(({ domaine: d, standards }) => {
            const evaluesDomaine = d.standards.filter((s) => etat.statuts[s.id]).length;
            const ecartsDomaine = d.standards.filter((s) => etat.statuts[s.id] === "ecart").length;
            return (
              <section key={d.id} aria-labelledby={`domaine-${d.id}`}>
                <div className="mb-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
                  <div className="max-w-3xl">
                    <h2 id={`domaine-${d.id}`} className="text-[1.1rem] font-semibold tracking-tight text-ink">
                      {d.nom}
                    </h2>
                    <p className="mt-0.5 text-[0.88rem] text-ink-2">{d.intention}</p>
                  </div>
                  <p className="flex items-center gap-1.5 text-[0.78rem] text-ink-3">
                    {standards.length} sur {d.standards.length}
                    {revue && (
                      <>
                        {" · "}
                        {evaluesDomaine} évalué{evaluesDomaine > 1 ? "s" : ""}
                        {ecartsDomaine > 0 && (
                          <Pastille ton="critique">
                            <AlertTriangle className="size-3" aria-hidden />
                            {ecartsDomaine} écart{ecartsDomaine > 1 ? "s" : ""}
                          </Pastille>
                        )}
                      </>
                    )}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {standards.map((s) => (
                    <LigneStandard
                      key={s.id}
                      standard={s}
                      deplie={ouverts.has(s.id)}
                      onBasculer={() => basculer(s.id)}
                      revue={revue}
                      statut={etat.statuts[s.id]}
                      note={etat.notes[s.id] ?? ""}
                      onStatut={(st) => definirStatut(s.id, st)}
                      onNote={(n) => definirNote(s.id, n)}
                    />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
