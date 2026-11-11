/**
 * Plugin rehype minimal : transforme les citations de la forme
 *   > [!TIP]
 *   > texte
 * en encadrés, en posant un attribut data-encadre sur le blockquote
 * et en retirant le marqueur du texte.
 */

interface Noeud {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: Noeud[];
}

const MARQUEUR = /^\s*\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i;

function traiter(noeud: Noeud) {
  if (noeud.type === "element" && noeud.tagName === "blockquote" && noeud.children) {
    const paragraphe = noeud.children.find((c) => c.type === "element" && c.tagName === "p");
    const premier = paragraphe?.children?.[0];
    if (paragraphe && premier?.type === "text" && premier.value) {
      const m = MARQUEUR.exec(premier.value);
      if (m) {
        premier.value = premier.value.replace(MARQUEUR, "");
        // Retire le saut de ligne qui suivait le marqueur.
        if (!premier.value.trim()) {
          paragraphe.children!.shift();
          const suivant = paragraphe.children![0];
          if (suivant?.type === "element" && suivant.tagName === "br") paragraphe.children!.shift();
          const texte = paragraphe.children![0];
          if (texte?.type === "text" && texte.value) texte.value = texte.value.replace(/^\s+/, "");
        }
        if (!paragraphe.children!.length) {
          noeud.children = noeud.children.filter((c) => c !== paragraphe);
        }
        noeud.properties = { ...(noeud.properties ?? {}), "data-encadre": m[1].toLowerCase() };
      }
    }
  }
  for (const enfant of noeud.children ?? []) traiter(enfant);
}

export function rehypeEncadres() {
  return (arbre: unknown) => traiter(arbre as Noeud);
}
