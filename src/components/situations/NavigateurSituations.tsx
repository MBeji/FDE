"use client";

import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, Flag } from "lucide-react";
import { IconeSituation } from "@/components/situations/icones";
import { Carte } from "@/components/ui";
import { cn } from "@/lib/cn";
import { useEstClient } from "@/lib/stockage";
import {
  SITUATIONS,
  TYPES_RESSOURCE,
  type RessourceSituation,
  type Situation,
  type TypeRessource,
} from "@/data/situations";

/* Ancre de l'URL, lue uniquement côté navigateur et suivie au fil des changements. */
function abonnerAncre(rappel: () => void) {
  window.addEventListener("hashchange", rappel);
  return () => window.removeEventListener("hashchange", rappel);
}
const lireAncre = () => window.location.hash;
const ancreServeur = () => "";

function situationDepuisAncre(ancre: string): string | null {
  const id = decodeURIComponent(ancre.replace(/^#/, ""));
  return SITUATIONS.some((s) => s.id === id) ? id : null;
}

export function NavigateurSituations() {
  const estClient = useEstClient();
  const ancre = useSyncExternalStore(abonnerAncre, lireAncre, ancreServeur);
  const [choix, setChoix] = useState<{ id: string; ancre: string } | null>(
    null,
  );
  const detail = useRef<HTMLDivElement>(null);

  // Un choix par clic reste valable tant que l'ancre n'a pas changé depuis (retour arrière, lien externe).
  const depuisAncre = estClient ? situationDepuisAncre(ancre) : null;
  const choixValide = choix && choix.ancre === ancre ? choix.id : null;
  const activeId = choixValide ?? depuisAncre ?? SITUATIONS[0].id;
  const active = SITUATIONS.find((s) => s.id === activeId) ?? SITUATIONS[0];

  function choisir(id: string) {
    window.history.replaceState(null, "", `#${id}`);
    setChoix({ id, ancre: `#${id}` });
    if (window.matchMedia("(max-width: 1023px)").matches) {
      detail.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
      <nav aria-label="Situations">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {SITUATIONS.map((s) => {
            const selectionnee = s.id === active.id;
            return (
              <li key={s.id} id={s.id} className="scroll-mt-24">
                <button
                  type="button"
                  aria-pressed={selectionnee}
                  aria-controls="detail-situation"
                  onClick={() => choisir(s.id)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-[border-color,background-color]",
                    selectionnee
                      ? "border-accent-line bg-accent-soft"
                      : "border-line bg-surface hover:border-line-strong",
                  )}
                >
                  <IconeSituation
                    id={s.id}
                    className={cn(
                      "mt-0.5 size-4 flex-none",
                      selectionnee ? "text-accent" : "text-ink-3",
                    )}
                  />
                  <span className="min-w-0">
                    <span className="block text-[0.9rem] leading-snug font-semibold text-ink">
                      {s.intitule}
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-[0.8rem] leading-snug text-ink-2">
                      {s.commencer}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div ref={detail} id="detail-situation" className="scroll-mt-24">
        <DetailSituation situation={active} />
      </div>
    </div>
  );
}

function DetailSituation({ situation }: { situation: Situation }) {
  const groupes = grouperRessources(situation.ressources);

  return (
    <Carte className="p-5 sm:p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent">
          <IconeSituation id={situation.id} className="size-4" />
        </span>
        <h2 className="text-[1.25rem] font-semibold tracking-tight text-ink">
          {situation.intitule}
        </h2>
      </div>

      <div className="mt-4 flex gap-2.5 rounded-lg border border-accent-line bg-accent-soft px-3.5 py-3">
        <Flag className="mt-0.5 size-4 flex-none text-accent" aria-hidden />
        <p className="text-[0.9rem] leading-relaxed text-ink">
          <span className="font-semibold">Par où commencer : </span>
          {situation.commencer}
        </p>
      </div>

      <h3 className="mt-6 mb-3 text-[0.95rem] font-semibold text-ink">
        Étape par étape
      </h3>
      <ol className="space-y-3">
        {situation.etapes.map((e, i) => (
          <li key={e.titre} className="flex gap-3">
            <span
              className="flex size-6 flex-none items-center justify-center rounded-full bg-ink text-[0.75rem] font-semibold text-bg"
              aria-hidden
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 border-b border-line pb-3">
              <p className="text-[0.9rem] font-semibold text-ink">{e.titre}</p>
              <p className="mt-0.5 text-[0.875rem] leading-relaxed text-ink-2">
                {e.detail}
              </p>
              <Link
                href={e.href}
                className="mt-1.5 inline-flex items-center gap-1 text-[0.85rem] font-medium text-accent hover:underline"
              >
                {e.lien}
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-6 mb-3 text-[0.95rem] font-semibold text-ink">
        Ressources complémentaires
      </h3>
      <div className="grid gap-5 md:grid-cols-2">
        {groupes.map(([type, ressources]) => (
          <section key={type} aria-label={TYPES_RESSOURCE[type].nom}>
            <p className="surtitre mb-2">{TYPES_RESSOURCE[type].nom}</p>
            <ul className="space-y-2">
              {ressources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group block rounded-lg border border-line bg-surface px-3 py-2 hover:border-line-strong"
                  >
                    <span className="block text-[0.875rem] font-semibold text-ink group-hover:text-accent">
                      {r.titre}
                    </span>
                    <span className="mt-0.5 block text-[0.8rem] leading-snug text-ink-2">
                      {r.usage}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Carte>
  );
}

function grouperRessources(
  ressources: RessourceSituation[],
): [TypeRessource, RessourceSituation[]][] {
  const parType = new Map<TypeRessource, RessourceSituation[]>();
  for (const r of ressources) {
    parType.set(r.type, [...(parType.get(r.type) ?? []), r]);
  }
  return [...parType.entries()].sort(
    ([a], [b]) => TYPES_RESSOURCE[a].ordre - TYPES_RESSOURCE[b].ordre,
  );
}
