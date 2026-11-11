import Link from "next/link";
import type { ComponentProps, ComponentType, KeyboardEvent, ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

/* Primitives d'interface partagées, sans état (utilisables côté serveur comme côté client). */

export function EnTetePage({
  surtitre,
  titre,
  chapo,
  children,
  fil,
}: {
  surtitre?: string;
  titre: string;
  chapo?: ReactNode;
  children?: ReactNode;
  fil?: { href: string; nom: string }[];
}) {
  return (
    <header className="mb-8 lg:mb-10">
      {fil && (
        <nav aria-label="Fil d'Ariane" className="hors-impression mb-4 flex flex-wrap items-center gap-1 text-[0.8rem] text-ink-3">
          {fil.map((f) => (
            <span key={f.href} className="flex items-center gap-1">
              <Link href={f.href} className="hover:text-ink">
                {f.nom}
              </Link>
              <ChevronRight className="size-3" aria-hidden />
            </span>
          ))}
        </nav>
      )}
      {surtitre && <p className="surtitre mb-2.5">{surtitre}</p>}
      <h1 className="titre-editorial text-[2rem] leading-[1.12] text-balance text-ink sm:text-[2.5rem]">
        {titre}
      </h1>
      {chapo && (
        <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-pretty text-ink-2">{chapo}</p>
      )}
      {children && <div className="mt-5">{children}</div>}
    </header>
  );
}

export function Pastille({
  children,
  ton = "neutre",
  className,
}: {
  children: ReactNode;
  ton?: "neutre" | "accent" | "plein" | "bon" | "alerte" | "critique";
  className?: string;
}) {
  const tons = {
    neutre: "border-line bg-surface text-ink-2",
    accent: "border-accent-line bg-accent-soft text-accent-strong",
    plein: "border-ink bg-ink text-bg",
    bon: "border-good/30 bg-good-soft text-good-ink",
    alerte: "border-warning/40 bg-warning-soft text-warning-ink",
    critique: "border-critical/30 bg-critical-soft text-critical-ink",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-1.5 py-px text-[0.7rem] leading-5 font-medium whitespace-nowrap",
        tons[ton],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Carte({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-xl border border-line bg-surface shadow-card", className)}
      {...props}
    />
  );
}

export function CarteLien({
  href,
  titre,
  resume,
  entete,
  pied,
  className,
}: {
  href: string;
  titre: string;
  resume?: string;
  entete?: ReactNode;
  pied?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col rounded-xl border border-line bg-surface p-4 shadow-card transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-pop",
        className,
      )}
    >
      {entete && <div className="mb-2.5 flex flex-wrap items-center gap-1.5">{entete}</div>}
      <h3 className="text-[0.95rem] leading-snug font-semibold text-ink group-hover:text-accent">
        {titre}
      </h3>
      {resume && (
        <p className="mt-1.5 line-clamp-3 text-[0.85rem] leading-relaxed text-ink-2">{resume}</p>
      )}
      {pied && <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">{pied}</div>}
    </Link>
  );
}

export function TitreSection({
  titre,
  description,
  action,
  id,
}: {
  titre: string;
  description?: string;
  action?: { href: string; nom: string };
  id?: string;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
      <div>
        <h2 id={id} className="text-[1.15rem] font-semibold tracking-tight text-ink">
          {titre}
        </h2>
        {description && <p className="mt-0.5 text-[0.9rem] text-ink-2">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="flex items-center gap-1 text-[0.85rem] font-medium text-accent hover:underline"
        >
          {action.nom}
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      )}
    </div>
  );
}

const STYLES_BOUTON = {
  primaire: "bg-ink text-bg hover:opacity-85",
  accent: "bg-accent text-on-accent hover:opacity-90",
  secondaire: "border border-line bg-surface text-ink hover:border-line-strong",
  discret: "text-ink-2 hover:bg-surface-2 hover:text-ink",
  danger: "border border-line bg-surface text-critical-ink hover:border-critical/50",
};

export function classesBouton(
  variante: keyof typeof STYLES_BOUTON = "secondaire",
  taille: "sm" | "md" = "md",
) {
  return cn(
    "inline-flex flex-none items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-[opacity,border-color,background-color] disabled:pointer-events-none disabled:opacity-45",
    taille === "sm" ? "h-8 px-2.5 text-[0.8rem]" : "h-9 px-3.5 text-[0.85rem]",
    STYLES_BOUTON[variante],
  );
}

export function Bouton({
  variante = "secondaire",
  taille = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variante?: keyof typeof STYLES_BOUTON; taille?: "sm" | "md" }) {
  return (
    <button type="button" className={cn(classesBouton(variante, taille), className)} {...props} />
  );
}

export function Champ({
  libelle,
  aide,
  children,
  className,
}: {
  libelle: string;
  aide?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-[0.8rem] font-medium text-ink">{libelle}</span>
      {children}
      {aide && <span className="text-[0.75rem] leading-snug text-ink-3">{aide}</span>}
    </label>
  );
}

export const CLASSES_SAISIE =
  "w-full rounded-lg border border-line bg-surface px-3 py-2 text-[0.875rem] text-ink outline-none transition-colors placeholder:text-ink-3 hover:border-line-strong focus:border-accent";

/** Barre de progression : le fond est une teinte plus claire de la même couleur. */
export function Jauge({ valeur, className, libelle }: { valeur: number; className?: string; libelle?: string }) {
  const pct = Math.round(Math.max(0, Math.min(1, valeur)) * 100);
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={libelle ?? "Avancement"}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-accent-soft", className)}
    >
      <div className="h-full rounded-full bg-series-1 transition-[width]" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Vide({ titre, children }: { titre: string; children?: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-line-strong px-6 py-10 text-center">
      <p className="text-[0.95rem] font-medium text-ink">{titre}</p>
      {children && <div className="mx-auto mt-1.5 max-w-md text-[0.875rem] text-ink-2">{children}</div>}
    </div>
  );
}

/**
 * Navigation au clavier d'un tablist (motif ARIA « onglets ») : flèches gauche/droite,
 * Début et Fin déplacent la sélection et le focus. À poser en onKeyDown sur l'élément role="tablist".
 */
export function gererFlechesOnglets<T extends string>(
  e: KeyboardEvent<HTMLElement>,
  ids: readonly T[],
  valeur: T,
  choisir: (id: T) => void,
) {
  const i = ids.indexOf(valeur);
  const cible =
    e.key === "ArrowRight" ? (i + 1) % ids.length
    : e.key === "ArrowLeft" ? (i - 1 + ids.length) % ids.length
    : e.key === "Home" ? 0
    : e.key === "End" ? ids.length - 1
    : -1;
  if (cible < 0) return;
  e.preventDefault();
  choisir(ids[cible]);
  e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')[cible]?.focus();
}

/**
 * Contrôle segmenté (2 à 4 onglets courts) : rail gris, onglet actif en surface.
 * Réservé aux bascules de vue au sein d'un bloc ; les onglets de page gardent le soulignement.
 */
export function OngletsSegmentes<T extends string>({
  onglets,
  valeur,
  onChange,
  libelle,
  prefixeId,
  className,
}: {
  onglets: readonly { id: T; nom: string; icone?: ComponentType<{ className?: string; "aria-hidden"?: boolean }> }[];
  valeur: T;
  onChange: (id: T) => void;
  libelle: string;
  /** Si fourni, chaque onglet reçoit l'id `${prefixeId}-onglet-${id}` et contrôle `${prefixeId}-panneau`. */
  prefixeId?: string;
  className?: string;
}) {
  const ids = onglets.map((o) => o.id);
  return (
    <div
      role="tablist"
      aria-label={libelle}
      onKeyDown={(e) => gererFlechesOnglets(e, ids, valeur, onChange)}
      className={cn("inline-flex max-w-full rounded-lg border border-line bg-surface-2 p-0.5", className)}
    >
      {onglets.map((o) => {
        const actif = valeur === o.id;
        return (
          <button
            key={o.id}
            type="button"
            role="tab"
            id={prefixeId ? `${prefixeId}-onglet-${o.id}` : undefined}
            aria-controls={prefixeId ? `${prefixeId}-panneau` : undefined}
            aria-selected={actif}
            tabIndex={actif ? 0 : -1}
            onClick={() => onChange(o.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[0.82rem] font-medium whitespace-nowrap transition-colors",
              actif ? "bg-surface text-ink shadow-card" : "text-ink-2 hover:text-ink",
            )}
          >
            {o.icone && <o.icone className="size-3.5" aria-hidden />}
            {o.nom}
          </button>
        );
      })}
    </div>
  );
}
