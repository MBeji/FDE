import { useSyncExternalStore } from "react";

/**
 * Petits magasins d'état persistés dans le navigateur (localStorage).
 * Tout l'espace de travail du FDE est « local-first » : aucune donnée de mission
 * ne quitte le poste, sauf export explicite ou envoi volontaire au copilote.
 */

export interface Stock<T> {
  get(): T;
  getServeur(): T;
  set(valeur: T | ((precedent: T) => T)): void;
  abonner(rappel: () => void): () => void;
}

export function creerStock<T>(cle: string, initial: T): Stock<T> {
  let valeur = initial;
  let charge = false;
  const abonnes = new Set<() => void>();

  function charger() {
    if (charge || typeof window === "undefined") return;
    charge = true;
    try {
      const brut = window.localStorage.getItem(cle);
      if (brut !== null) valeur = JSON.parse(brut) as T;
    } catch {
      // Stockage indisponible ou contenu illisible : on repart de la valeur initiale.
    }
    window.addEventListener("storage", (e) => {
      if (e.key !== cle) return;
      try {
        valeur = e.newValue === null ? initial : (JSON.parse(e.newValue) as T);
        abonnes.forEach((f) => f());
      } catch {
        // Ignore une valeur illisible écrite par un autre onglet.
      }
    });
  }

  return {
    get() {
      charger();
      return valeur;
    },
    getServeur() {
      return initial;
    },
    set(nouvelle) {
      charger();
      valeur = typeof nouvelle === "function" ? (nouvelle as (p: T) => T)(valeur) : nouvelle;
      try {
        window.localStorage.setItem(cle, JSON.stringify(valeur));
      } catch {
        // Quota dépassé ou stockage désactivé : l'état reste valable en mémoire.
      }
      abonnes.forEach((f) => f());
    },
    abonner(rappel) {
      charger();
      abonnes.add(rappel);
      return () => {
        abonnes.delete(rappel);
      };
    },
  };
}

export function useStock<T>(stock: Stock<T>): [T, Stock<T>["set"]] {
  const valeur = useSyncExternalStore(stock.abonner, stock.get, stock.getServeur);
  return [valeur, stock.set];
}

const abonnementVide = () => () => {};

/** Vrai une fois le composant hydraté côté navigateur. */
export function useEstClient(): boolean {
  return useSyncExternalStore(
    abonnementVide,
    () => true,
    () => false,
  );
}

export function nouvelId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID().slice(0, 8);
  }
  return Math.random().toString(36).slice(2, 10);
}

export function telecharger(nomFichier: string, contenu: string, type = "text/markdown") {
  const blob = new Blob([contenu], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const lien = document.createElement("a");
  lien.href = url;
  lien.download = nomFichier;
  document.body.appendChild(lien);
  lien.click();
  lien.remove();
  URL.revokeObjectURL(url);
}
