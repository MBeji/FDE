"use client";

import { useEffect, useId, useRef, useState } from "react";

/** Lit les jetons de design pour que les diagrammes suivent le thème clair ou sombre. */
function variablesDeTheme() {
  const style = getComputedStyle(document.documentElement);
  const v = (nom: string) => style.getPropertyValue(nom).trim();
  return {
    background: "transparent",
    primaryColor: v("--surface-2"),
    primaryTextColor: v("--ink"),
    primaryBorderColor: v("--line-strong"),
    secondaryColor: v("--accent-soft"),
    tertiaryColor: v("--surface"),
    lineColor: v("--ink-3"),
    textColor: v("--ink"),
    mainBkg: v("--surface-2"),
    nodeBorder: v("--line-strong"),
    clusterBkg: v("--surface"),
    clusterBorder: v("--line"),
    edgeLabelBackground: v("--surface"),
    actorBkg: v("--surface-2"),
    actorBorder: v("--line-strong"),
    actorTextColor: v("--ink"),
    signalColor: v("--ink-2"),
    signalTextColor: v("--ink"),
    labelBoxBkgColor: v("--surface-2"),
    labelBoxBorderColor: v("--line-strong"),
    labelTextColor: v("--ink"),
    noteBkgColor: v("--accent-soft"),
    noteBorderColor: v("--accent-line"),
    noteTextColor: v("--ink"),
    fontFamily: '"Geist Variable", ui-sans-serif, system-ui, sans-serif',
    fontSize: "14px",
  };
}

/**
 * Un diagramme large ne rétrécit pas jusqu'à devenir illisible : en dessous de cette largeur,
 * ou de cette part de sa taille naturelle, il défile horizontalement dans son cadre.
 */
const LARGEUR_MIN_LISIBLE = 620;
const PART_MIN_LISIBLE = 0.6;

export function Mermaid({ code }: { code: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const conteneur = useRef<HTMLDivElement>(null);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    let annule = false;

    async function dessiner() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          themeVariables: variablesDeTheme(),
          flowchart: { curve: "basis", htmlLabels: true, padding: 14, useMaxWidth: true },
          sequence: { useMaxWidth: true, mirrorActors: false },
        });
        const { svg } = await mermaid.render(`mmd${id}${Date.now()}`, code);
        if (!annule && conteneur.current) {
          conteneur.current.innerHTML = svg;
          const dessin = conteneur.current.querySelector("svg");
          const largeur = dessin?.viewBox.baseVal.width ?? 0;
          if (dessin && largeur) {
            const minimum = Math.max(LARGEUR_MIN_LISIBLE, Math.round(largeur * PART_MIN_LISIBLE));
            dessin.style.minWidth = `${Math.min(largeur, minimum)}px`;
          }
          // Un cadre qui défile doit pouvoir recevoir le focus pour être parcouru au clavier.
          conteneur.current.tabIndex = conteneur.current.scrollWidth > conteneur.current.clientWidth ? 0 : -1;
          setErreur(false);
        }
      } catch {
        if (!annule) setErreur(true);
      }
    }

    dessiner();
    const observateur = new MutationObserver(dessiner);
    observateur.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      annule = true;
      observateur.disconnect();
    };
  }, [code, id]);

  if (erreur) {
    return (
      <pre data-mermaid-erreur>
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div
      ref={conteneur}
      data-mermaid
      role="img"
      aria-label="Diagramme"
      className="defilement-fin mb-5 min-h-24 overflow-x-auto rounded-[10px] border border-line bg-surface p-4 [&_svg]:mx-auto [&_svg]:block [&_svg]:h-auto [&_svg]:max-w-full"
    />
  );
}
