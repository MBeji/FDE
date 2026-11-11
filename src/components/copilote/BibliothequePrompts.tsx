"use client";

import { useMemo, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { useShell } from "@/components/shell/ShellProvider";
import { Bouton, CLASSES_SAISIE, Carte, Pastille, Vide } from "@/components/ui";
import { MODES_COPILOTE, PHASES_RESUME, PHASE_IDS, SECTEURS } from "@/data/referentiels";
import type { ModeCopilote, PromptModele } from "@/data/types";
import { cn } from "@/lib/cn";
import { useMissions, type Mission } from "@/lib/missions";
import { useEstClient } from "@/lib/stockage";

/** Valeurs proposées d'office à partir de la mission active, quand le nom de la variable s'y prête. */
function valeursMission(m: Mission | null): Record<string, string> {
  if (!m) return {};
  return {
    client: m.client,
    mission: m.nom,
    domaine: m.domaine,
    sponsor: m.sponsor,
    secteur: m.secteur ? SECTEURS[m.secteur] : "",
    probleme: m.probleme,
    ambition: m.ambition,
    phase: PHASES_RESUME[m.phaseCourante].nom,
  };
}

function remplir(prompt: string, valeurs: Record<string, string>): string {
  return prompt.replace(/\{\{\s*([\w-]+)\s*\}\}/g, (tout, nom: string) => valeurs[nom]?.trim() || tout);
}

export function BibliothequePrompts({ prompts }: { prompts: PromptModele[] }) {
  const { ouvrirCopilote } = useShell();
  const estClient = useEstClient();
  const { active } = useMissions();
  const [phase, setPhase] = useState("");
  const [mode, setMode] = useState<ModeCopilote | "">("");
  const [choisi, setChoisi] = useState<string>(prompts[0]?.id ?? "");
  const [saisies, setSaisies] = useState<Record<string, Record<string, string>>>({});
  const detail = useRef<HTMLDivElement>(null);

  // Sous lg, le détail est sous la liste : on l'amène à l'écran pour que le choix se voie.
  function choisir(id: string) {
    setChoisi(id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      detail.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const visibles = useMemo(
    () => prompts.filter((p) => (!phase || p.phase === phase) && (!mode || p.mode === mode)),
    [prompts, phase, mode],
  );
  const prompt = visibles.find((p) => p.id === choisi) ?? visibles[0];
  const proposees = valeursMission(estClient ? active : null);
  const valeurs = prompt
    ? Object.fromEntries(prompt.variables.map((v) => [v.nom, saisies[prompt.id]?.[v.nom] ?? proposees[v.nom] ?? ""]))
    : {};
  const texte = prompt ? remplir(prompt.prompt, valeurs) : "";

  return (
    <div>
      <div className="mb-5 flex flex-col gap-2.5 rounded-xl border border-line bg-surface p-3.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 w-14 flex-none text-[0.75rem] font-medium text-ink-3">Phase</span>
          {[...PHASE_IDS, "transverse" as const].map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={phase === p}
              onClick={() => setPhase(phase === p ? "" : p)}
              className={cn(
                "rounded-md border px-2 py-0.5 text-[0.78rem] transition-colors",
                phase === p ? "border-ink bg-ink font-medium text-bg" : "border-line text-ink-2 hover:border-line-strong",
              )}
            >
              {p === "transverse" ? "Transverse" : `${PHASES_RESUME[p].numero}. ${PHASES_RESUME[p].nom}`}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 w-14 flex-none text-[0.75rem] font-medium text-ink-3">Mode</span>
          {(Object.entries(MODES_COPILOTE) as [ModeCopilote, { nom: string; description: string }][]).map(([id, m]) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              title={m.description}
              onClick={() => setMode(mode === id ? "" : id)}
              className={cn(
                "rounded-md border px-2 py-0.5 text-[0.78rem] transition-colors",
                mode === id ? "border-ink bg-ink font-medium text-bg" : "border-line text-ink-2 hover:border-line-strong",
              )}
            >
              {m.nom}
            </button>
          ))}
        </div>
      </div>

      {!prompt ? (
        <Vide titre="Aucun prompt pour ces filtres" />
      ) : (
        <div className="grid gap-5 lg:grid-cols-[19rem_minmax(0,1fr)]">
          <ul className="defilement-fin flex flex-col gap-1 lg:max-h-[46rem] lg:overflow-y-auto lg:pr-1">
            {visibles.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  id={p.id}
                  aria-current={prompt.id === p.id}
                  onClick={() => choisir(p.id)}
                  className={cn(
                    "w-full rounded-lg border px-3 py-2.5 text-left transition-colors",
                    prompt.id === p.id ? "border-ink bg-surface shadow-card" : "border-transparent hover:bg-surface-2",
                  )}
                >
                  <span className="block text-[0.88rem] leading-snug font-medium text-ink">{p.titre}</span>
                  <span className="mt-1 block text-[0.72rem] text-ink-3">
                    {MODES_COPILOTE[p.mode].nom} · {p.phase === "transverse" ? "Transverse" : PHASES_RESUME[p.phase].nom}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <Carte ref={detail} className="min-w-0 scroll-mt-24 p-5">
            <div className="flex flex-wrap items-center gap-1.5">
              <Pastille ton="accent">{MODES_COPILOTE[prompt.mode].nom}</Pastille>
              <Pastille>{prompt.phase === "transverse" ? "Transverse" : `Phase ${PHASES_RESUME[prompt.phase].numero} · ${PHASES_RESUME[prompt.phase].nom}`}</Pastille>
            </div>
            <h2 className="mt-3 text-[1.2rem] font-semibold tracking-tight text-ink">{prompt.titre}</h2>
            <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-2">{prompt.objectif}</p>

            {prompt.variables.length > 0 && (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {prompt.variables.map((v) => {
                  const longue = /notes|document|texte|contenu|brouillon|fiche|traces|transcription/i.test(v.nom);
                  const Balise = longue ? "textarea" : "input";
                  return (
                    <label key={v.nom} className={cn("flex flex-col gap-1.5", longue && "sm:col-span-2")}>
                      <span className="text-[0.8rem] font-medium text-ink">
                        <code className="mr-1.5 rounded bg-surface-2 px-1 py-px font-mono text-[0.74rem] text-ink-2">{v.nom}</code>
                        {v.description}
                      </span>
                      <Balise
                        className={cn(CLASSES_SAISIE, longue && "min-h-24")}
                        value={valeurs[v.nom]}
                        placeholder={v.exemple ? `Ex. : ${v.exemple}` : undefined}
                        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                          setSaisies({ ...saisies, [prompt.id]: { ...saisies[prompt.id], [v.nom]: e.target.value } })
                        }
                      />
                    </label>
                  );
                })}
              </div>
            )}

            <div className="mt-5 rounded-lg border border-line bg-bg p-4">
              <pre className="defilement-fin max-h-80 overflow-y-auto font-sans text-[0.86rem] leading-relaxed whitespace-pre-wrap text-ink">{texte}</pre>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Bouton variante="primaire" onClick={() => ouvrirCopilote(texte)}>
                <Sparkles className="size-4" aria-hidden />
                Lancer dans le copilote
              </Bouton>
              <BoutonCopier texte={texte} libelle="Copier le prompt" />
            </div>

            {prompt.conseils && prompt.conseils.length > 0 && (
              <div className="mt-5 border-t border-line pt-4">
                <p className="surtitre mb-2">Conseils d&apos;usage</p>
                <ul className="flex flex-col gap-1.5">
                  {prompt.conseils.map((c) => (
                    <li key={c} className="flex gap-2 text-[0.85rem] leading-relaxed text-ink-2">
                      <span className="mt-[0.5rem] size-1 flex-none rounded-full bg-line-strong" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Carte>
        </div>
      )}
    </div>
  );
}
