"use client";

import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { useShell } from "@/components/shell/ShellProvider";
import { classesBouton } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Ouvre le copilote avec un brouillon de question lié à la page courante. */
export function BoutonCopilote({
  brouillon,
  children = "Demander au copilote",
  variante = "secondaire",
  className,
}: {
  brouillon?: string;
  children?: ReactNode;
  variante?: "secondaire" | "primaire" | "discret";
  className?: string;
}) {
  const { ouvrirCopilote } = useShell();
  return (
    <button
      type="button"
      onClick={() => ouvrirCopilote(brouillon)}
      className={cn(classesBouton(variante, "sm"), className)}
    >
      <Sparkles className="size-3.5" aria-hidden />
      {children}
    </button>
  );
}
