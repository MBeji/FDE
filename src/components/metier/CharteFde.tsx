"use client";

import Link from "next/link";
import { Ban, Check, Download, Printer } from "lucide-react";
import { BoutonCopier } from "@/components/OngletsTemplate";
import { SectionMetier } from "@/components/metier/commun";
import { Bouton } from "@/components/ui";
import { CHARTE, MISSION_FDE, charteEnMarkdown } from "@/data/metier";
import { telecharger } from "@/lib/stockage";

const MARKDOWN_CHARTE = charteEnMarkdown();

/** Imprime la charte seule : les autres sections sont masquées le temps de l'impression. */
function imprimerCharte() {
  const masques = Array.from(document.querySelectorAll<HTMLElement>("[data-metier-masquable]")).filter(
    (el) => !el.classList.contains("hors-impression"),
  );
  masques.forEach((el) => el.classList.add("hors-impression"));
  const retablir = () => {
    masques.forEach((el) => el.classList.remove("hors-impression"));
    window.removeEventListener("afterprint", retablir);
  };
  window.addEventListener("afterprint", retablir);
  window.print();
}

export function CharteFde() {
  return (
    <SectionMetier
      id="charte"
      surtitre="3 · Engagements"
      titre="La charte FDE"
      masquable={false}
      description="Douze engagements que chaque membre du pool prend envers ses clients et envers le pool. Chacun se traduit en comportements que l'on peut observer, et en limites que l'on ne franchit pas."
    >
      <div className="hors-impression mb-5 flex flex-wrap items-center gap-1.5">
        <BoutonCopier texte={MARKDOWN_CHARTE} libelle="Copier la charte en Markdown" />
        <Bouton taille="sm" onClick={() => telecharger("charte-fde.md", MARKDOWN_CHARTE)}>
          <Download className="size-3.5" aria-hidden />
          Télécharger
        </Bouton>
        <Bouton taille="sm" onClick={imprimerCharte}>
          <Printer className="size-3.5" aria-hidden />
          Imprimer la charte
        </Bouton>
      </div>

      <article className="feuille">
        <header className="border-b border-line pb-5">
          <p className="surtitre">Charte du pool FDE</p>
          <p className="titre-editorial mt-2 max-w-3xl text-[1.2rem] leading-snug text-ink">{MISSION_FDE}</p>
        </header>
        <ol className="divide-y divide-line">
          {CHARTE.map((e) => (
            <li key={e.numero} className="grid gap-3 py-6 break-inside-avoid md:grid-cols-[3.5rem_1fr]">
              <span
                className="titre-editorial text-[2rem] leading-none text-accent tabular-nums"
                aria-hidden
              >
                {String(e.numero).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.02rem] font-semibold text-ink">
                  <span className="sr-only">Engagement {e.numero} : </span>
                  {e.titre}
                </h3>
                <p className="mt-1 max-w-3xl text-[0.9rem] leading-relaxed text-ink-2">{e.principe}</p>
                <div className="mt-3 grid gap-4 md:grid-cols-[3fr_2fr]">
                  <div>
                    <p className="text-[0.72rem] font-semibold tracking-wide text-ink-3 uppercase">Concrètement</p>
                    <ul className="mt-1.5 space-y-1">
                      {e.comportements.map((c) => (
                        <li key={c} className="flex gap-2 text-[0.87rem] leading-snug text-ink">
                          <Check className="mt-0.5 size-3.5 flex-none text-good-ink" aria-hidden />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-critical-soft p-3">
                    <p className="text-[0.72rem] font-semibold tracking-wide text-critical-ink uppercase">Jamais</p>
                    <ul className="mt-1.5 space-y-1">
                      {e.jamais.map((j) => (
                        <li key={j} className="flex gap-2 text-[0.85rem] leading-snug text-ink">
                          <Ban className="mt-0.5 size-3.5 flex-none text-critical-ink" aria-hidden />
                          {j}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hors-impression mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {e.ressources.map((r) => (
                    <Link key={r.href} href={r.href} className="text-[0.8rem] font-medium text-accent hover:underline">
                      {r.libelle}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </SectionMetier>
  );
}
