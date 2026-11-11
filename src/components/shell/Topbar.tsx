"use client";

import Link from "next/link";
import { BriefcaseBusiness, Menu, Moon, Search, Sparkles, Sun } from "lucide-react";
import { Logo } from "@/components/shell/Sidebar";
import { useShell } from "@/components/shell/ShellProvider";
import { PHASES_RESUME } from "@/data/referentiels";
import { useMissions } from "@/lib/missions";
import { creerStock, useEstClient, useStock } from "@/lib/stockage";

type Theme = "light" | "dark" | "systeme";
const stockTheme = creerStock<Theme>("fde-atlas:theme", "systeme");

function ThemeToggle() {
  const [, setTheme] = useStock(stockTheme);

  function basculer() {
    const sombre = document.documentElement.dataset.theme === "dark";
    const suivant = sombre ? "light" : "dark";
    document.documentElement.dataset.theme = suivant;
    setTheme(suivant);
  }

  return (
    <button
      type="button"
      onClick={basculer}
      className="rounded-lg p-2 text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
      aria-label="Basculer entre thème clair et thème sombre"
      title="Thème clair ou sombre"
    >
      <Sun className="size-[1.1rem] [[data-theme=dark]_&]:hidden" aria-hidden />
      <Moon className="hidden size-[1.1rem] [[data-theme=dark]_&]:block" aria-hidden />
    </button>
  );
}

function MissionActive() {
  const estClient = useEstClient();
  const { active } = useMissions();

  if (!estClient || !active) {
    return (
      <Link
        href="/missions"
        className="hidden items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-[0.8rem] text-ink-2 transition-colors hover:border-line-strong hover:text-ink md:flex"
      >
        <BriefcaseBusiness className="size-3.5" aria-hidden />
        Aucune mission active
      </Link>
    );
  }

  const phase = PHASES_RESUME[active.phaseCourante];
  return (
    <Link
      href="/missions/active"
      className="hidden max-w-[19rem] items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-[0.8rem] transition-colors hover:border-line-strong md:flex"
      title="Ouvrir la mission active"
    >
      <span className="size-1.5 flex-none rounded-full bg-good" aria-hidden />
      <span className="truncate font-medium text-ink">{active.client || active.nom}</span>
      <span className="flex-none text-ink-3">
        Phase {phase.numero} · {phase.nom}
      </span>
    </Link>
  );
}

export function Topbar() {
  const { setMenuOuvert, setRechercheOuverte, ouvrirCopilote } = useShell();

  return (
    <header className="hors-impression sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-line bg-bg/85 px-3 backdrop-blur-md sm:px-5 lg:px-8">
      <button
        type="button"
        onClick={() => setMenuOuvert(true)}
        className="rounded-lg p-2 text-ink-2 hover:bg-surface-2 lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <Menu className="size-5" />
      </button>
      <Logo className="mr-1 lg:hidden [&>span]:hidden sm:[&>span]:flex" />

      <button
        type="button"
        onClick={() => setRechercheOuverte(true)}
        className="flex h-9 min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-line bg-surface px-3 text-left text-[0.85rem] text-ink-3 transition-colors hover:border-line-strong sm:max-w-md"
      >
        <Search className="size-4 flex-none" aria-hidden />
        <span className="truncate">Rechercher une méthode, un template, un terme…</span>
        <kbd className="ml-auto hidden flex-none rounded border border-line bg-surface-2 px-1.5 py-px font-sans text-[0.68rem] font-medium text-ink-3 sm:block">
          ⌘K
        </kbd>
      </button>

      <div className="ml-auto flex flex-none items-center gap-1.5">
        <MissionActive />
        <ThemeToggle />
        <button
          type="button"
          onClick={() => ouvrirCopilote()}
          className="flex h-9 items-center gap-2 rounded-lg bg-ink px-3 text-[0.85rem] font-medium text-bg transition-opacity hover:opacity-85"
          title="Ouvrir le copilote (⌘J)"
        >
          <Sparkles className="size-4" aria-hidden />
          <span className="hidden sm:inline">Copilote</span>
        </button>
      </div>
    </header>
  );
}
