"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

interface DemandeCopilote {
  /** Texte placé dans la zone de saisie à l'ouverture. */
  brouillon?: string;
  /** Identifiant unique pour distinguer deux demandes successives identiques. */
  cle: number;
}

interface Shell {
  menuOuvert: boolean;
  setMenuOuvert: (v: boolean) => void;
  rechercheOuverte: boolean;
  setRechercheOuverte: (v: boolean) => void;
  copiloteOuvert: boolean;
  setCopiloteOuvert: (v: boolean) => void;
  demande: DemandeCopilote | null;
  /** Ouvre le copilote, éventuellement avec un brouillon de question. */
  ouvrirCopilote: (brouillon?: string) => void;
}

const Contexte = createContext<Shell | null>(null);

export function ShellProvider({ children }: { children: ReactNode }) {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [rechercheOuverte, setRechercheOuverte] = useState(false);
  const [copiloteOuvert, setCopiloteOuvert] = useState(false);
  const [demande, setDemande] = useState<DemandeCopilote | null>(null);

  const ouvrirCopilote = useCallback((brouillon?: string) => {
    setDemande({ brouillon, cle: Date.now() });
    setCopiloteOuvert(true);
  }, []);

  useEffect(() => {
    function surTouche(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setRechercheOuverte((v) => !v);
      } else if (mod && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setCopiloteOuvert((v) => !v);
      }
    }
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, []);

  const valeur = useMemo(
    () => ({
      menuOuvert,
      setMenuOuvert,
      rechercheOuverte,
      setRechercheOuverte,
      copiloteOuvert,
      setCopiloteOuvert,
      demande,
      ouvrirCopilote,
    }),
    [menuOuvert, rechercheOuverte, copiloteOuvert, demande, ouvrirCopilote],
  );

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>;
}

export function useShell(): Shell {
  const shell = useContext(Contexte);
  if (!shell) throw new Error("useShell doit être utilisé sous ShellProvider");
  return shell;
}
