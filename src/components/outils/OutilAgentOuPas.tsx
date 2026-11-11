"use client";

import Link from "next/link";
import { ActionsResultat } from "@/components/outils/commun";
import { CLASSES_SAISIE, Carte, Champ, Pastille, Vide } from "@/components/ui";
import { cn } from "@/lib/cn";
import { creerStock, useStock } from "@/lib/stockage";

type Reponse = "oui" | "non" | "";

interface Etat {
  besoin: string;
  reponses: Record<string, Reponse>;
}

const INITIAL: Etat = { besoin: "", reponses: {} };
const stock = creerStock<Etat>("fde-atlas:outil:agent-ou-pas:v1", INITIAL);

const QUESTIONS: { id: string; question: string; aide: string }[] = [
  {
    id: "regles",
    question: "La logique s'écrit-elle entièrement en règles stables, sur des entrées structurées ?",
    aide: "Si un développeur peut tout spécifier sans ambiguïté, aucun modèle n'est nécessaire.",
  },
  {
    id: "etapes",
    question: "La tâche comporte-t-elle plusieurs étapes distinctes ?",
    aide: "Par exemple : lire, décider, rédiger, contrôler. Une seule classification ou une seule rédaction compte pour une étape.",
  },
  {
    id: "chemin",
    question: "Le chemin varie-t-il d'un cas à l'autre au point qu'on ne peut pas l'écrire en moins de dix branches ?",
    aide: "Le nombre et l'ordre des étapes dépendent de ce que l'on découvre en route.",
  },
  {
    id: "systemes",
    question: "Faut-il interroger plusieurs systèmes dans un ordre qui dépend de ce qu'on y trouve ?",
    aide: "Si l'ordre des appels est toujours le même, c'est un workflow.",
  },
  {
    id: "reversible",
    question: "Une erreur est-elle détectable et réversible avant de causer un dommage ?",
    aide: "Tests, revue, annulation possible, action sans effet irréversible.",
  },
  {
    id: "valeur",
    question: "La valeur d'un cas traité justifie-t-elle quelques dizaines de centimes et plusieurs dizaines de secondes ?",
    aide: "Un agent coûte et attend plus qu'un appel unique.",
  },
  {
    id: "verifiable",
    question: "Sait-on vérifier objectivement que le résultat est bon ?",
    aide: "Sans critère de succès, pas d'évaluation ; sans évaluation, pas d'agent.",
  },
  {
    id: "sature",
    question: "Un agent unique a-t-il montré ses limites, mesure à l'appui ?",
    aide: "Trop d'outils, contexte saturé, droits d'accès distincts, traitements à paralléliser. Répondez non si vous ne l'avez pas mesuré.",
  },
];

interface Verdict {
  barreau: number;
  nom: string;
  resume: string;
  raisons: string[];
  conditions: string[];
  suite: string[];
}

function verdict(r: Record<string, Reponse>): Verdict | null {
  const oui = (id: string) => r[id] === "oui";
  const non = (id: string) => r[id] === "non";
  const repondu = (ids: string[]) => ids.every((id) => r[id]);

  if (!r.regles) return null;
  if (oui("regles")) {
    return {
      barreau: 1,
      nom: "Règle ou automatisation déterministe",
      resume: "Aucun modèle n'est nécessaire. Un script, un moteur de règles ou une automatisation classique fera mieux, moins cher et de façon prévisible.",
      raisons: ["La logique est entièrement spécifiable et les entrées sont structurées."],
      conditions: [],
      suite: ["Spécifier les règles avec le métier et les tester sur l'historique.", "Garder un modèle en réserve pour les seules entrées non structurées, s'il en apparaît."],
    };
  }
  if (!repondu(["etapes", "chemin", "systemes"])) return null;

  if (non("chemin") && non("systemes")) {
    return oui("etapes")
      ? {
          barreau: 3,
          nom: "Workflow",
          resume: "Les étapes sont connues à l'avance : le code tient le plan, le modèle exécute chaque étape. Plus prévisible, moins cher et plus simple à évaluer qu'un agent.",
          raisons: ["Plusieurs étapes, mais un chemin stable.", "L'ordre des appels aux systèmes ne dépend pas de ce qu'on y trouve."],
          conditions: [],
          suite: ["Choisir le pattern : enchaînement, routage ou parallélisation.", "Évaluer chaque étape séparément, puis l'ensemble.", "Ajouter une étape de contrôle si la sortie part vers un client."],
        }
      : {
          barreau: 2,
          nom: "Appel de modèle unique",
          resume: "Une tâche de langage isolée : classer, extraire, résumer ou rédiger. Un appel bien conçu, avec le bon contexte, suffit.",
          raisons: ["Une seule étape.", "Pas de chemin variable ni d'exploration de systèmes."],
          conditions: [],
          suite: ["Soigner le contexte fourni et le format de sortie.", "Constituer un jeu de test et mesurer avant d'aller plus loin.", "Ajouter une recherche documentaire si la tâche exige des connaissances internes."],
        };
  }

  if (!repondu(["reversible", "valeur", "verifiable"])) return null;
  const raisons = [
    oui("chemin") && "Le chemin varie d'un cas à l'autre.",
    oui("systemes") && "L'ordre des appels aux systèmes dépend de ce qu'on y trouve.",
  ].filter(Boolean) as string[];

  const conditions = [
    non("reversible") && "Erreur non réversible : démarrer en L2 (approbation humaine de chaque action) et poser des garde-fous sur les outils qui écrivent.",
    non("valeur") && "Valeur unitaire insuffisante : revenir à un workflow, ou réserver l'agent aux cas complexes par un routage en amont.",
    non("verifiable") && "Résultat non vérifiable : définir le succès avec le métier et construire le golden set avant toute construction.",
  ].filter(Boolean) as string[];

  if (conditions.length) {
    return {
      barreau: 4,
      nom: "Agent, sous conditions",
      resume: "Le besoin relève bien d'un agent, mais une ou plusieurs conditions ne sont pas réunies. Les traiter d'abord, ou rester un barreau plus bas en attendant.",
      raisons,
      conditions,
      suite: ["En attendant : un workflow qui couvre les cas simples, l'humain sur le reste.", "Lever les conditions, puis prototyper l'agent sur une tranche verticale."],
    };
  }

  if (!r.sature) return null;
  if (oui("sature")) {
    return {
      barreau: 5,
      nom: "Système multi-agents",
      resume: "Un agent unique ne suffit plus, et vous l'avez mesuré. Découper selon les contextes, les outils et les droits d'accès, pas selon l'organigramme.",
      raisons: [...raisons, "Un agent unique a montré ses limites, mesure à l'appui."],
      conditions: [],
      suite: ["Choisir la topologie la plus simple : un superviseur et des agents spécialisés.", "Écrire une fiche par agent et consigner la décision de découpage dans un ADR.", "Évaluer chaque agent, puis le système de bout en bout."],
    };
  }
  return {
    barreau: 4,
    nom: "Agent",
    resume: "Le chemin est imprévisible, l'erreur rattrapable, la valeur suffisante et le résultat vérifiable : un agent est justifié. Un seul, tant que rien ne prouve qu'il en faut plusieurs.",
    raisons,
    conditions: [],
    suite: ["Constituer le golden set, puis concevoir les outils avant le prompt.", "Démarrer en L2 ou L3 et écrire les conditions d'élargissement de l'autonomie.", "Fixer une limite dure d'étapes, de coût et de durée par cas."],
  };
}

const BARREAUX = ["Règle", "Appel unique", "Workflow", "Agent", "Multi-agents"];

export function OutilAgentOuPas() {
  const [etat, setEtat] = useStock(stock);
  const v = verdict(etat.reponses);
  const r = etat.reponses;

  // N'affiche que les questions utiles compte tenu des réponses déjà données.
  const visibles = QUESTIONS.filter((q) => {
    if (q.id === "regles") return true;
    if (r.regles !== "non") return false;
    if (["etapes", "chemin", "systemes"].includes(q.id)) return true;
    const candidatAgent = r.chemin === "oui" || r.systemes === "oui";
    if (!candidatAgent || !r.etapes || !r.chemin || !r.systemes) return false;
    if (["reversible", "valeur", "verifiable"].includes(q.id)) return true;
    return r.reversible === "oui" && r.valeur === "oui" && r.verifiable === "oui";
  });

  const markdown = v
    ? [
        "# Choix du niveau de solution",
        "",
        etat.besoin && `**Besoin** : ${etat.besoin}`,
        "",
        `**Recommandation : barreau ${v.barreau} — ${v.nom}**`,
        "",
        v.resume,
        "",
        "## Justification",
        "",
        ...v.raisons.map((x) => `- ${x}`),
        ...(v.conditions.length ? ["", "## Conditions à lever", "", ...v.conditions.map((x) => `- ${x}`)] : []),
        "",
        "## Prochaines étapes",
        "",
        ...v.suite.map((x) => `- ${x}`),
        "",
        "## Réponses",
        "",
        ...visibles.filter((q) => r[q.id]).map((q) => `- ${q.question} **${r[q.id] === "oui" ? "Oui" : "Non"}**`),
      ]
        .filter((l) => l !== false)
        .join("\n")
    : "";

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-3">
        <Carte className="p-4">
          <Champ libelle="Le besoin, en une phrase" aide="Ce que la solution doit accomplir, pour qui. Sert d'intitulé au résultat.">
            <input
              className={CLASSES_SAISIE}
              value={etat.besoin}
              placeholder="Établir le diagnostic technique d'un incident PME"
              onChange={(e) => setEtat({ ...etat, besoin: e.target.value })}
            />
          </Champ>
        </Carte>
        {visibles.map((q, i) => (
          <Carte key={q.id} className="flex flex-wrap items-center gap-x-5 gap-y-3 p-4">
            <span className="titre-editorial w-5 flex-none text-[1.3rem] leading-none text-ink-3">{i + 1}</span>
            <div className="min-w-[14rem] flex-1">
              <p className="text-[0.92rem] font-medium text-ink">{q.question}</p>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-ink-3">{q.aide}</p>
            </div>
            <div role="radiogroup" aria-label={q.question} className="flex gap-1">
              {(["oui", "non"] as const).map((choix) => (
                <button
                  key={choix}
                  type="button"
                  role="radio"
                  aria-checked={r[q.id] === choix}
                  onClick={() => setEtat({ ...etat, reponses: { ...r, [q.id]: choix } })}
                  className={cn(
                    "h-8 w-14 rounded-lg border text-[0.82rem] font-medium transition-colors",
                    r[q.id] === choix ? "border-ink bg-ink text-bg" : "border-line text-ink-2 hover:border-line-strong",
                  )}
                >
                  {choix === "oui" ? "Oui" : "Non"}
                </button>
              ))}
            </div>
          </Carte>
        ))}
      </div>

      <div className="xl:sticky xl:top-20 xl:self-start">
        {!v ? (
          <Vide titre="Répondez aux questions">
            La recommandation apparaît dès que les réponses suffisent à trancher. Les questions s&apos;adaptent à vos réponses.
          </Vide>
        ) : (
          <Carte className="overflow-hidden">
            <div className="border-b border-line bg-surface-2 p-5">
              <ol className="mb-4 flex gap-1" aria-label={`Barreau ${v.barreau} sur 5`}>
                {BARREAUX.map((b, i) => (
                  <li key={b} className="flex-1">
                    <span className={cn("block h-1.5 rounded-full", i + 1 === v.barreau ? "bg-series-1" : i + 1 < v.barreau ? "bg-[var(--seq-2)]" : "bg-surface-3")} />
                    <span className={cn("mt-1.5 block text-[0.66rem]", i + 1 === v.barreau ? "font-semibold text-ink" : "text-ink-3")}>{b}</span>
                  </li>
                ))}
              </ol>
              <p className="surtitre">Recommandation · barreau {v.barreau}</p>
              <p className="titre-editorial mt-1 text-[1.5rem] leading-tight text-ink">{v.nom}</p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">{v.resume}</p>
            </div>
            <div className="flex flex-col gap-4 p-5">
              <div>
                <p className="surtitre mb-1.5">Pourquoi</p>
                <ul className="flex flex-col gap-1">
                  {v.raisons.map((x) => (
                    <li key={x} className="flex gap-2 text-[0.87rem] leading-snug text-ink">
                      <span className="mt-[0.45rem] size-1 flex-none rounded-full bg-ink-3" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              {v.conditions.length > 0 && (
                <div className="rounded-lg border border-warning/50 bg-warning-soft p-3">
                  <p className="mb-1.5 text-[0.8rem] font-semibold text-warning-ink">Conditions à lever d&apos;abord</p>
                  <ul className="flex flex-col gap-1.5">
                    {v.conditions.map((x) => (
                      <li key={x} className="text-[0.85rem] leading-snug text-ink">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <p className="surtitre mb-1.5">Prochaines étapes</p>
                <ol className="flex list-decimal flex-col gap-1 pl-4 marker:text-ink-3">
                  {v.suite.map((x) => (
                    <li key={x} className="pl-1 text-[0.87rem] leading-snug text-ink">
                      {x}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-line pt-4">
                <Link href="/frameworks/faut-il-un-agent">
                  <Pastille ton="accent">Framework : l&apos;échelle des solutions</Pastille>
                </Link>
                {v.barreau >= 3 && (
                  <Link href="/frameworks/patterns-agentiques">
                    <Pastille>Patterns agentiques</Pastille>
                  </Link>
                )}
                {v.barreau >= 4 && (
                  <Link href="/outils/agent-designer">
                    <Pastille>Agent Designer</Pastille>
                  </Link>
                )}
              </div>
              <ActionsResultat
                outil="agent-ou-pas"
                titre={etat.besoin || "Choix du niveau de solution"}
                resume={`Barreau ${v.barreau} — ${v.nom}`}
                markdown={markdown}
                donnees={etat}
                onReinitialiser={() => setEtat(INITIAL)}
              />
            </div>
          </Carte>
        )}
      </div>
    </div>
  );
}
