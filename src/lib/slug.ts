/** Doit rester identique à la fonction du même nom dans scripts/build-content.mjs. */
export function slugifier(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
