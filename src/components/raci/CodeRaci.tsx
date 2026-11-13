import { cn } from "@/lib/cn";
import type { CodeRaci } from "@/data/raci";

/* Sans état : utilisable côté serveur (légende) comme côté client (matrice). */

export const NOMS_CODES: Record<CodeRaci, string> = {
  A: "répond du résultat",
  AR: "répond du résultat et le réalise",
  R: "réalise",
  C: "consulté",
  I: "informé",
};

const STYLES_CODES: Record<CodeRaci, string> = {
  A: "border-accent bg-accent text-on-accent",
  AR: "border-accent bg-accent text-on-accent",
  R: "border-accent-line bg-accent-soft text-accent-strong",
  C: "border-line-strong bg-surface text-ink",
  I: "border-line bg-surface-2 text-ink-3",
};

export function CodeRaciPastille({ code, colonne }: { code: CodeRaci; colonne?: string }) {
  return (
    <span
      title={NOMS_CODES[code]}
      className={cn(
        "inline-flex h-6 min-w-8 items-center [print-color-adjust:exact] justify-center rounded-md border px-1 text-[0.75rem] font-semibold tabular-nums",
        STYLES_CODES[code],
      )}
    >
      <span aria-hidden>{code === "AR" ? "A/R" : code}</span>
      <span className="sr-only">
        {colonne ? `${colonne} : ` : ""}
        {NOMS_CODES[code]}
      </span>
    </span>
  );
}

