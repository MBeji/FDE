"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CornerDownLeft, Search, Sparkles } from "lucide-react";
import { useShell } from "@/components/shell/ShellProvider";
import { classesBouton } from "@/components/ui";
import { cn } from "@/lib/cn";
import { chargerIndex, chercher, type EntreeRecherche } from "@/lib/recherche";

const SUGGESTIONS = [
  { n: "Parcours AI-Native", h: "/methode", t: "Méthode" },
  { n: "Cas fil rouge : la mission Voxalis", h: "/guides/cas-fil-rouge", t: "Guide" },
  { n: "Faut-il un agent ?", h: "/frameworks/faut-il-un-agent", t: "Framework" },
  { n: "Fiche agent", h: "/templates/fiche-agent", t: "Template" },
  { n: "Diagnostic de maturité", h: "/outils/maturite", t: "Outil" },
];

function Palette({ fermer }: { fermer: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const { ouvrirCopilote } = useShell();
  const [requete, setRequete] = useState("");
  const [index, setIndex] = useState<EntreeRecherche[]>([]);
  const [selection, setSelection] = useState(0);
  const liste = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let actif = true;
    chargerIndex().then((i) => actif && setIndex(i));
    return () => {
      actif = false;
    };
  }, []);

  const resultats = useMemo(
    () => (requete.trim() ? chercher(index, requete) : (SUGGESTIONS as EntreeRecherche[])),
    [index, requete],
  );
  const courant = Math.min(selection, Math.max(0, resultats.length - 1));

  function aller(href: string) {
    fermer();
    const [chemin, ancre] = href.split("#");
    // Ancre de la page courante : router.push ne déclenche pas hashchange, dont dépendent
    // les composants qui suivent l'ancre (ex. /situations).
    if (ancre && chemin === pathname) window.location.hash = ancre;
    else router.push(href);
  }

  function surTouche(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const suivant =
        e.key === "ArrowDown"
          ? Math.min(courant + 1, resultats.length - 1)
          : Math.max(courant - 1, 0);
      setSelection(suivant);
      liste.current?.children[suivant]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && resultats[courant]) {
      e.preventDefault();
      aller(resultats[courant].h);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Recherche">
      <button type="button" aria-label="Fermer la recherche" className="absolute inset-0 bg-scrim" onClick={fermer} />
      <div className="relative flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-modal">
        <div className="flex flex-none items-center gap-3 border-b border-line px-4">
          <Search className="size-4 flex-none text-ink-3" aria-hidden />
          <input
            autoFocus
            value={requete}
            onChange={(e) => {
              setRequete(e.target.value);
              setSelection(0);
            }}
            onKeyDown={surTouche}
            placeholder="Rechercher dans tout le portail…"
            aria-label="Rechercher dans tout le portail"
            className="h-12 flex-1 bg-transparent text-[0.95rem] text-ink outline-none placeholder:text-ink-3"
          />
          <kbd className="rounded border border-line bg-surface-2 px-1.5 py-px text-[0.68rem] text-ink-3">Échap</kbd>
        </div>

        {!requete.trim() && <p className="surtitre px-4 pt-3 pb-1">Souvent consultés</p>}

        {resultats.length ? (
          <ul ref={liste} className="defilement-fin flex-1 overflow-y-auto p-2">
            {resultats.map((r, i) => (
              <li key={`${r.t}-${r.h}-${r.n}`}>
                <button
                  type="button"
                  onClick={() => aller(r.h)}
                  onMouseMove={() => setSelection(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left",
                    i === courant && "bg-surface-2",
                  )}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.9rem] font-medium text-ink">{r.n}</span>
                    {r.r && <span className="block truncate text-[0.8rem] text-ink-3">{r.r}</span>}
                  </span>
                  <span className="flex-none rounded-md border border-line px-1.5 py-px text-[0.68rem] font-medium text-ink-2">
                    {r.t}
                  </span>
                  {i === courant && <CornerDownLeft className="size-3.5 flex-none text-ink-3" aria-hidden />}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-3 px-4 py-10 text-center">
            <p className="text-[0.9rem] text-ink-3">
              Aucun résultat pour « {requete} ». Essayez un autre terme, ou posez la question au copilote.
            </p>
            <button
              type="button"
              onClick={() => {
                ouvrirCopilote(requete.trim());
                fermer();
              }}
              className={classesBouton("secondaire", "sm")}
            >
              <Sparkles className="size-3.5" aria-hidden />
              Demander au copilote
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function CommandPalette() {
  const { rechercheOuverte, setRechercheOuverte } = useShell();
  if (!rechercheOuverte) return null;
  return <Palette fermer={() => setRechercheOuverte(false)} />;
}
