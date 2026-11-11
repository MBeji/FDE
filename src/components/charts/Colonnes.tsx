/**
 * Colonnes groupées sur un axe unique. Deux séries au plus, légende toujours présente,
 * valeurs exactes dans le tableau qui accompagne le graphique.
 */
export interface SerieColonnes {
  nom: string;
  /** Variable CSS de couleur, par exemple "var(--series-1)". */
  couleur: string;
  valeurs: number[];
}

function graduations(max: number): number[] {
  if (max <= 0) return [0, 1];
  const brut = max / 4;
  const puissance = 10 ** Math.floor(Math.log10(brut));
  const pas = [1, 2, 2.5, 5, 10].map((m) => m * puissance).find((p) => p >= brut) ?? brut;
  const liste: number[] = [];
  for (let v = 0; v <= max + pas * 0.001; v += pas) liste.push(v);
  if (liste[liste.length - 1] < max) liste.push(liste[liste.length - 1] + pas);
  return liste;
}

export function Colonnes({
  categories,
  series,
  format,
  titre,
}: {
  categories: string[];
  series: SerieColonnes[];
  format: (n: number) => string;
  titre: string;
}) {
  const L = 520;
  const H = 260;
  const M = { g: 58, d: 10, h: 12, b: 30 };
  const max = Math.max(...series.flatMap((s) => s.valeurs), 0);
  const ticks = graduations(max);
  const haut = ticks[ticks.length - 1];
  const y = (v: number) => H - M.b - (v / haut) * (H - M.h - M.b);
  const bande = (L - M.g - M.d) / categories.length;
  const largeur = Math.min(24, (bande - 24) / series.length - 2);

  return (
    <figure>
      <svg viewBox={`0 0 ${L} ${H}`} role="img" aria-label={titre} className="w-full">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={M.g} y1={y(t)} x2={L - M.d} y2={y(t)} stroke={t === 0 ? "var(--axis)" : "var(--grid)"} strokeWidth={1} />
            <text x={M.g - 8} y={y(t) + 3.5} fontSize={10.5} fill="var(--ink-3)" textAnchor="end">
              {format(t)}
            </text>
          </g>
        ))}
        {categories.map((c, i) => {
          const centre = M.g + bande * (i + 0.5);
          const debut = centre - (series.length * (largeur + 2) - 2) / 2;
          return (
            <g key={c}>
              {series.map((s, j) => {
                const v = Math.max(0, s.valeurs[i] ?? 0);
                const h = y(0) - y(v);
                const x = debut + j * (largeur + 2);
                const r = Math.min(4, h);
                return (
                  <path
                    key={s.nom}
                    d={`M${x},${y(0)} V${y(v) + r} Q${x},${y(v)} ${x + r},${y(v)} H${x + largeur - r} Q${x + largeur},${y(v)} ${x + largeur},${y(v) + r} V${y(0)} Z`}
                    fill={s.couleur}
                  >
                    <title>{`${s.nom}, ${c} : ${format(s.valeurs[i] ?? 0)}`}</title>
                  </path>
                );
              })}
              <text x={centre} y={H - M.b + 17} fontSize={11} fill="var(--ink-2)" textAnchor="middle">
                {c}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[0.76rem] text-ink-2">
        {series.map((s) => (
          <span key={s.nom} className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-[3px]" style={{ background: s.couleur }} aria-hidden />
            {s.nom}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
