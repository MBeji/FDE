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
