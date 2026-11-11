"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, BriefcaseBusiness, FileText, Library, RotateCcw, Sparkles, Square, X } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { useShell } from "@/components/shell/ShellProvider";
import { MODES_COPILOTE } from "@/data/referentiels";
import type { ModeCopilote } from "@/data/types";
import { cn } from "@/lib/cn";
import { contexteMission, useMissions } from "@/lib/missions";
import { chargerIndex, chercher, type EntreeRecherche } from "@/lib/recherche";
import { useEstClient } from "@/lib/stockage";

interface Message {
  role: "user" | "assistant";
  content: string;
  /** Réponse construite localement (copilote non configuré) : liens vers les ressources. */
  ressources?: EntreeRecherche[];
  /** Invite complète prête à coller dans un autre assistant. */
  invite?: string;
}

type Statut = "inconnu" | "configure" | "non-configure";

const AMORCES: Record<ModeCopilote, string[]> = {
  guide: [
    "Par quoi commencer cette semaine, compte tenu de ma phase ?",
    "Comment vérifier qu'il faut vraiment un agent pour ce cas d'usage ?",
    "Quels livrables dois-je avoir avant le prochain jalon ?",
  ],
  redacteur: [
    "Rédige la charte de mission à partir des éléments suivants : ",
    "Rédige une fiche agent pour l'agent suivant : ",
    "Prépare le point d'avancement de la semaine à partir de ces notes : ",
  ],
  challenger: [
    "Critique ce business case comme le ferait un directeur financier : ",
    "Quelles sont les failles de cette conception d'agent ? ",
    "Mon énoncé du problème tient-il ? Le voici : ",
  ],
  coach: [
    "Prépare-moi au COPIL de fin de phase : voici mes messages clés : ",
    "Mon sponsor n'arbitre plus. Aide-moi à préparer la conversation.",
    "Joue un responsable de plateau inquiet pour son équipe, je m'entraîne.",
  ],
};

function inviteAutonome(question: string, mode: ModeCopilote, mission: string | null, page: string): string {
  return [
    "Tu aides un Forward Deployed Engineer qui conduit une mission de transformation AI-Native chez un client.",
    MODES_COPILOTE[mode].description,
    mission && `Contexte de la mission :\n${mission}`,
    page !== "/" && `Page du référentiel méthodologique consultée : ${page}`,
    `Demande : ${question}`,
    "Signale tes hypothèses et ce qui te manque plutôt que d'inventer des faits ou des chiffres.",
  ]
    .filter(Boolean)
    .join("\n\n");
}

export function CopilotDrawer() {
  const { copiloteOuvert, setCopiloteOuvert, demande } = useShell();
  const pathname = usePathname();
  const estClient = useEstClient();
  const { active } = useMissions();

  const [messages, setMessages] = useState<Message[]>([]);
  const [saisie, setSaisie] = useState("");
  const [mode, setMode] = useState<ModeCopilote>("guide");
  const [avecMission, setAvecMission] = useState(true);
  const [statut, setStatut] = useState<Statut>("inconnu");
  const [enCours, setEnCours] = useState(false);
  const [demandeVue, setDemandeVue] = useState(0);

  const controleur = useRef<AbortController | null>(null);
  const fil = useRef<HTMLDivElement>(null);
  const zone = useRef<HTMLTextAreaElement>(null);

  // Une demande venue d'une page (bouton « Demander au copilote ») remplit la zone de saisie.
  if (demande && demande.cle !== demandeVue) {
    setDemandeVue(demande.cle);
    if (demande.brouillon) setSaisie(demande.brouillon);
  }

  useEffect(() => {
    if (!copiloteOuvert) return;
    zone.current?.focus();
    if (statut !== "inconnu") return;
    let actif = true;
    fetch("/api/copilote", { method: "POST", body: JSON.stringify({ sonde: true }) })
      .then((r) => r.json())
      .then((r: { configure?: boolean }) => actif && setStatut(r.configure ? "configure" : "non-configure"))
      .catch(() => actif && setStatut("non-configure"));
    return () => {
      actif = false;
    };
  }, [copiloteOuvert, statut]);

  useEffect(() => {
    fil.current?.scrollTo({ top: fil.current.scrollHeight });
  }, [messages]);

  const mission = estClient && active && avecMission ? contexteMission(active) : null;

  async function repondreHorsLigne(question: string) {
    const index = await chargerIndex();
    const ressources = chercher(index, question, false, 6);
    setMessages((m) => [
      ...m,
      {
        role: "assistant",
        content: ressources.length
          ? "Le copilote IA n'est pas configuré sur ce déploiement. Voici les ressources du portail les plus proches de votre question :"
          : "Le copilote IA n'est pas configuré sur ce déploiement, et aucune ressource du portail ne correspond directement à cette question.",
        ressources,
        invite: inviteAutonome(question, mode, mission, pathname),
      },
    ]);
  }

  async function envoyer(texte = saisie) {
    const question = texte.trim();
    if (!question || enCours) return;
    setSaisie("");
    const historique: Message[] = [...messages, { role: "user", content: question }];
    setMessages(historique);

    if (statut === "non-configure") {
      await repondreHorsLigne(question);
      return;
    }

    setEnCours(true);
    controleur.current = new AbortController();
    try {
      const reponse = await fetch("/api/copilote", {
        method: "POST",
        signal: controleur.current.signal,
        body: JSON.stringify({
          messages: historique.filter((m) => !m.ressources).map(({ role, content }) => ({ role, content })),
          mode,
          page: pathname,
          mission: mission ?? undefined,
        }),
      });

      if (reponse.status === 503) {
        setStatut("non-configure");
        await repondreHorsLigne(question);
        return;
      }
      if (!reponse.ok || !reponse.body) {
        const erreur = (await reponse.json().catch(() => null)) as { message?: string } | null;
        setMessages((m) => [...m, { role: "assistant", content: `_${erreur?.message ?? "Le copilote est indisponible. Réessayez."}_` }]);
        return;
      }

      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      const lecteur = reponse.body.getReader();
      const decodeur = new TextDecoder();
      for (;;) {
        const { done, value } = await lecteur.read();
        if (done) break;
        const morceau = decodeur.decode(value, { stream: true });
        setMessages((m) => {
          const dernier = m[m.length - 1];
          return [...m.slice(0, -1), { ...dernier, content: dernier.content + morceau }];
        });
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") {
        setMessages((m) => [...m, { role: "assistant", content: "_Connexion interrompue. Réessayez._" }]);
      }
    } finally {
      setEnCours(false);
      controleur.current = null;
    }
  }

  if (!copiloteOuvert) return null;

  return (
    <aside
      aria-label="Copilote"
      className="hors-impression fixed inset-y-0 right-0 z-40 flex w-full flex-col border-l border-line bg-surface shadow-modal sm:w-[30rem]"
    >
      <header className="flex h-14 flex-none items-center gap-2 border-b border-line px-4">
        <Sparkles className="size-4 text-accent" aria-hidden />
        <h2 className="text-[0.95rem] font-semibold text-ink">Copilote</h2>
        {statut === "non-configure" && (
          <span className="rounded-md border border-warning/40 bg-warning-soft px-1.5 py-px text-[0.68rem] font-medium text-warning-ink">
            Mode hors ligne
          </span>
        )}
        <div className="ml-auto flex items-center gap-0.5">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={() => {
                controleur.current?.abort();
                setMessages([]);
              }}
              className="rounded-lg p-2 text-ink-2 hover:bg-surface-2 hover:text-ink"
              aria-label="Nouvelle conversation"
              title="Nouvelle conversation"
            >
              <RotateCcw className="size-4" />
            </button>
          )}
          <button
            type="button"
            onClick={() => setCopiloteOuvert(false)}
            className="rounded-lg p-2 text-ink-2 hover:bg-surface-2 hover:text-ink"
            aria-label="Fermer le copilote"
          >
            <X className="size-4" />
          </button>
        </div>
      </header>

      <div className="flex flex-none gap-1 border-b border-line p-2" role="radiogroup" aria-label="Mode du copilote">
        {(Object.entries(MODES_COPILOTE) as [ModeCopilote, { nom: string; description: string }][]).map(([id, m]) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={mode === id}
            title={m.description}
            onClick={() => setMode(id)}
            className={cn(
              "flex-1 rounded-md px-2 py-1.5 text-[0.8rem] font-medium transition-colors",
              mode === id ? "bg-ink text-bg" : "text-ink-2 hover:bg-surface-2 hover:text-ink",
            )}
          >
            {m.nom}
          </button>
        ))}
      </div>

      <div ref={fil} className="defilement-fin flex-1 overflow-y-auto px-4 py-4">
        {!messages.length ? (
          <div>
            <p className="text-[0.9rem] leading-relaxed text-ink-2">
              <strong className="font-semibold text-ink">{MODES_COPILOTE[mode].nom}.</strong>{" "}
              {MODES_COPILOTE[mode].description} Je connais la méthode, les frameworks, les templates
              et les guides du portail, ainsi que la page que vous consultez.
            </p>
            <ul className="mt-4 flex flex-col gap-1.5">
              {AMORCES[mode].map((a) => (
                <li key={a}>
                  <button
                    type="button"
                    onClick={() => (a.endsWith(" ") ? (setSaisie(a), zone.current?.focus()) : envoyer(a))}
                    className="w-full rounded-lg border border-line px-3 py-2 text-left text-[0.85rem] text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
                  >
                    {a.trim()}
                    {a.endsWith(" ") && "…"}
                  </button>
                </li>
              ))}
            </ul>
            <Link
              href="/copilote"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-accent hover:underline"
            >
              <Library className="size-3.5" aria-hidden />
              Bibliothèque de prompts
            </Link>
            {statut === "non-configure" && (
              <p className="mt-5 rounded-lg border border-warning/40 bg-warning-soft p-3 text-[0.82rem] leading-relaxed text-ink">
                Le copilote IA n&apos;est pas configuré sur ce déploiement (variable{" "}
                <code className="font-mono text-[0.78rem]">ANTHROPIC_API_KEY</code>). En attendant, vos
                questions renvoient vers les ressources du portail, avec une invite prête à coller dans
                votre assistant habituel.
              </p>
            )}
          </div>
        ) : (
          <ol className="flex flex-col gap-5">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <li key={i} className="ml-8 self-end rounded-2xl rounded-br-md bg-surface-3 px-3.5 py-2.5 text-[0.9rem] leading-relaxed whitespace-pre-wrap text-ink">
                  {m.content}
                </li>
              ) : (
                <li key={i} className="min-w-0">
                  {m.content ? (
                    <Markdown className="!text-[0.9rem]">{m.content}</Markdown>
                  ) : (
                    <p className="flex items-center gap-2 text-[0.85rem] text-ink-3" aria-live="polite">
                      <span className="size-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
                      Réflexion en cours…
                    </p>
                  )}
                  {m.ressources && m.ressources.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1">
                      {m.ressources.map((r) => (
                        <li key={r.h}>
                          <Link href={r.h} className="flex items-start gap-2 rounded-lg border border-line px-3 py-2 hover:border-line-strong">
                            <FileText className="mt-0.5 size-3.5 flex-none text-ink-3" aria-hidden />
                            <span className="min-w-0">
                              <span className="block text-[0.86rem] font-medium text-ink">{r.n}</span>
                              <span className="block text-[0.72rem] text-ink-3">{r.t}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {(m.invite || (m.content && !(enCours && i === messages.length - 1))) && (
                    <div className="mt-2.5">
                      {m.invite ? (
                        <BoutonCopier texte={m.invite} libelle="Copier l'invite pour un autre assistant" />
                      ) : (
                        <BoutonCopier texte={m.content} />
                      )}
                    </div>
                  )}
                </li>
              ),
            )}
          </ol>
        )}
      </div>

      <footer className="flex-none border-t border-line p-3">
        <div className="mb-2 flex flex-wrap items-center gap-1.5 text-[0.72rem] text-ink-3">
          <span className="flex items-center gap-1 rounded-md border border-line px-1.5 py-0.5" title="La page consultée est transmise au copilote">
            <FileText className="size-3" aria-hidden />
            <span className="max-w-[11rem] truncate">{pathname === "/" ? "Accueil" : pathname}</span>
          </span>
          {estClient && active && (
            <button
              type="button"
              aria-pressed={avecMission}
              onClick={() => setAvecMission(!avecMission)}
              title="Transmettre ou non le résumé de la mission active au copilote"
              className={cn(
                "flex items-center gap-1 rounded-md border px-1.5 py-0.5 transition-colors",
                avecMission ? "border-accent-line bg-accent-soft text-accent-strong" : "border-line line-through",
              )}
            >
              <BriefcaseBusiness className="size-3" aria-hidden />
              <span className="max-w-[11rem] truncate">{active.client || active.nom}</span>
            </button>
          )}
        </div>
        <div className="flex items-end gap-2 rounded-xl border border-line bg-bg p-2 focus-within:border-accent">
          <textarea
            ref={zone}
            value={saisie}
            onChange={(e) => setSaisie(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                envoyer();
              }
            }}
            rows={Math.min(8, Math.max(2, saisie.split("\n").length))}
            placeholder="Posez votre question, ou collez un document à critiquer…"
            aria-label="Message au copilote"
            className="defilement-fin max-h-56 flex-1 resize-none bg-transparent px-1.5 py-1 text-[0.9rem] leading-relaxed text-ink outline-none placeholder:text-ink-3"
          />
          {enCours ? (
            <button
              type="button"
              onClick={() => controleur.current?.abort()}
              className="flex size-8 flex-none items-center justify-center rounded-lg bg-ink text-bg"
              aria-label="Arrêter la génération"
            >
              <Square className="size-3.5" fill="currentColor" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => envoyer()}
              disabled={!saisie.trim()}
              className="flex size-8 flex-none items-center justify-center rounded-lg bg-ink text-bg transition-opacity disabled:opacity-30"
              aria-label="Envoyer"
            >
              <ArrowUp className="size-4" />
            </button>
          )}
        </div>
        <p className="mt-1.5 text-[0.68rem] leading-snug text-ink-3">
          Vos messages et le contexte indiqué ci-dessus sont envoyés à l&apos;API du modèle. N&apos;y collez pas de
          données que le client n&apos;autorise pas à sortir. Vérifiez toujours une réponse avant de l&apos;utiliser.
        </p>
      </footer>
    </aside>
  );
}
