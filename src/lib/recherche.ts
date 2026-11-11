/** Entrée de l'index de recherche, volontairement compacte (clés d'une lettre). */
export interface EntreeRecherche {
  /** Type affiché. */
  t: string;
  /** Lien. */
  h: string;
  /** Nom. */
  n: string;
  /** Résumé. */
  r: string;
  /** Mots-clés supplémentaires. */
  k: string;
}

export function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

/**
 * Recherche dans l'index. En mode strict, tous les termes doivent être présents (barre de recherche) ;
 * sinon les entrées sont classées par nombre de termes trouvés (questions en langage naturel).
 */
export function chercher(index: EntreeRecherche[], requete: string, strict = true, maximum = 24): EntreeRecherche[] {
  const termes = normaliser(requete)
    .split(/[^a-z0-9]+/)
    .filter((t) => (strict ? t.length > 0 : t.length > 3));
  if (!termes.length) return [];
  const resultats: { entree: EntreeRecherche; score: number }[] = [];
  for (const entree of index) {
    const titre = normaliser(entree.n);
    const reste = normaliser(`${entree.r} ${entree.k}`);
    let score = 0;
    let manque = false;
    for (const t of termes) {
      if (titre.startsWith(t)) score += 12;
      else if (titre.includes(t)) score += 8;
      else if (reste.includes(t)) score += 2;
      else manque = true;
    }
    if (strict ? !manque && score > 0 : score >= 8) resultats.push({ entree, score });
  }
  return resultats
    .sort((a, b) => b.score - a.score)
    .slice(0, maximum)
    .map((r) => r.entree);
}

let cacheIndex: Promise<EntreeRecherche[]> | null = null;

/** Charge l'index une seule fois par session de navigation. */
export function chargerIndex(): Promise<EntreeRecherche[]> {
  cacheIndex ??= fetch("/recherche.json")
    .then((r) => (r.ok ? (r.json() as Promise<EntreeRecherche[]>) : []))
    .catch(() => {
      cacheIndex = null;
      return [];
    });
  return cacheIndex;
}
