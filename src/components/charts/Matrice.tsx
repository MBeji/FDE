/**
 * Matrice valeur × faisabilité (échelle 1 à 5).
 * Chaque point porte le numéro de la ligne correspondante du tableau, qui donne les valeurs exactes.
 */
export interface PointMatrice {
  numero: number;
  titre: string;
  valeur: number;
  faisabilite: number;
  /** Les cas différés ou écartés passent en gris : la couleur signale ce qui reste dans le portefeuille. */
  attenue: boolean;
}

const L = 520;
const H = 400;
const M = { g: 46, d: 14, h: 14, b: 40 };

export function Matrice({ points }: { points: PointMatrice[] }) {
  const x = (f: number) => M.g + ((f - 1) / 4) * (L - M.g - M.d);
  const y = (v: number) => H - M.b - ((v - 1) / 4) * (H - M.h - M.b);

  // Décale légèrement les points superposés pour qu'ils restent tous visibles.
  const vus = new Map<string, number>();
  const places = points.map((p) => {
    const cle = `${p.faisabilite.toFixed(1)}:${p.valeur.toFixed(1)}`;
    const rang = vus.get(cle) ?? 0;
    vus.set(cle, rang + 1);
    return { ...p, cx: x(p.faisabilite) + rang * 13, cy: y(p.valeur) - rang * 5 };
  });

  const zones = [
    { nom: "Gains rapides", fx: 4.4, vy: 4.85 },
    { nom: "Paris structurants", fx: 3.12, vy: 4.85 },
    { nom: "À incuber", fx: 1.75, vy: 4.85 },
    { nom: "À écarter", fx: 3, vy: 1.25 },
  ];

  return (
    <figure>
      <svg viewBox={`0 0 ${L} ${H}`} role="img" aria-label="Matrice valeur et faisabilité des cas d'usage" className="w-full">
        {[1, 2, 3, 4, 5].map((n) => (
          <g key={n}>
            <line x1={x(n)} y1={y(1)} x2={x(n)} y2={y(5)} stroke="var(--grid)" strokeWidth={1} />
            <line x1={x(1)} y1={y(n)} x2={x(5)} y2={y(n)} stroke="var(--grid)" strokeWidth={1} />
            <text x={x(n)} y={H - M.b + 16} fontSize={11} fill="var(--ink-3)" textAnchor="middle">
              {n}
            </text>
            <text x={M.g - 10} y={y(n) + 4} fontSize={11} fill="var(--ink-3)" textAnchor="end">
              {n}
            </text>
          </g>
        ))}
        {/* Frontières des quadrants */}
        <line x1={x(1)} y1={y(3)} x2={x(5)} y2={y(3)} stroke="var(--axis)" strokeWidth={1.5} />
        <line x1={x(2.5)} y1={y(3)} x2={x(2.5)} y2={y(5)} stroke="var(--axis)" strokeWidth={1.5} />
        <line x1={x(3.75)} y1={y(3)} x2={x(3.75)} y2={y(5)} stroke="var(--axis)" strokeWidth={1.5} />
        {zones.map((z) => (
          <text key={z.nom} x={x(z.fx)} y={y(z.vy)} fontSize={10.5} fontWeight={600} fill="var(--ink-3)" textAnchor="middle" letterSpacing="0.04em">
            {z.nom.toUpperCase()}
          </text>
        ))}
        <text x={(x(1) + x(5)) / 2} y={H - 4} fontSize={11.5} fill="var(--ink-2)" textAnchor="middle">
          Faisabilité
        </text>
        <text x={12} y={(y(1) + y(5)) / 2} fontSize={11.5} fill="var(--ink-2)" textAnchor="middle" transform={`rotate(-90 12 ${(y(1) + y(5)) / 2})`}>
          Valeur
        </text>
        {places.map((p) => (
          <g key={p.numero}>
            <circle cx={p.cx} cy={p.cy} r={11} fill={p.attenue ? "var(--series-muted)" : "var(--series-1)"} stroke="var(--surface)" strokeWidth={2}>
              <title>{`${p.numero}. ${p.titre} — valeur ${p.valeur.toFixed(1)}, faisabilité ${p.faisabilite.toFixed(1)}`}</title>
            </circle>
            <text x={p.cx} y={p.cy + 3.8} fontSize={10.5} fontWeight={600} textAnchor="middle" fill={p.attenue ? "var(--ink)" : "#ffffff"} pointerEvents="none">
              {p.numero}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[0.75rem] text-ink-2">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-series-1" aria-hidden />
          Retenu ou à arbitrer
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-series-muted" aria-hidden />
          Différé ou écarté
        </span>
        <span className="text-ink-3">Les numéros renvoient au tableau.</span>
      </figcaption>
    </figure>
  );
}
