"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useShell } from "@/components/shell/ShellProvider";
import { cn } from "@/lib/cn";
import { NAVIGATION, estActif } from "@/lib/navigation";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="FDE Atlas, accueil">
      <svg viewBox="0 0 28 28" className="size-7 flex-none" aria-hidden>
        <rect width="28" height="28" rx="7" fill="var(--ink)" />
        <path
          d="M7 20 L14 7 L21 20"
          fill="none"
          stroke="var(--bg)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="16.5" r="1.9" fill="var(--series-1)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-tight text-ink">FDE Atlas</span>
        <span className="mt-1 text-[0.65rem] font-medium tracking-wide text-ink-3 uppercase">
          Transformation AI-Native
        </span>
      </span>
    </Link>
  );
}

function Liens({ onNaviguer }: { onNaviguer?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Navigation principale" className="flex flex-col gap-6">
      {NAVIGATION.map((groupe) => (
        <div key={groupe.titre}>
          <p className="surtitre mb-1.5 px-3">{groupe.titre}</p>
          <ul className="flex flex-col gap-px">
            {groupe.liens.map((lien) => {
              const actif = estActif(pathname, lien.href);
              const Icone = lien.icone;
              return (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    onClick={onNaviguer}
                    aria-current={actif ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-[0.4rem] text-[0.875rem] transition-colors",
                      actif
                        ? "bg-surface-3 font-medium text-ink"
                        : "text-ink-2 hover:bg-surface-2 hover:text-ink",
                    )}
                  >
                    <Icone className={cn("size-4 flex-none", actif ? "text-accent" : "text-ink-3")} aria-hidden />
                    <span className="truncate">{lien.nom}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  const { menuOuvert, setMenuOuvert } = useShell();

  return (
    <>
      {/* Bureau */}
      <aside className="hors-impression fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-bg lg:flex">
        <div className="flex h-14 flex-none items-center border-b border-line px-5">
          <Logo />
        </div>
        <div className="defilement-fin flex-1 overflow-y-auto px-3 py-5">
          <Liens />
        </div>
        <p className="flex-none border-t border-line px-5 py-3 text-[0.7rem] leading-relaxed text-ink-3">
          Données de mission conservées sur ce poste uniquement.
        </p>
      </aside>

      {/* Mobile */}
      {menuOuvert && (
        <div className="hors-impression fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Fermer le menu"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setMenuOuvert(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col bg-bg shadow-modal">
            <div className="flex h-14 flex-none items-center justify-between border-b border-line px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setMenuOuvert(false)}
                className="rounded-lg p-2 text-ink-2 hover:bg-surface-2"
                aria-label="Fermer le menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="defilement-fin flex-1 overflow-y-auto px-3 py-5">
              <Liens onNaviguer={() => setMenuOuvert(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
