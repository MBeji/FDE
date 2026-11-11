/**
 * Profil en radar pour une série unique de notes de 0 à 5.
 * Lecture précise assurée par la liste chiffrée affichée à côté (pas de valeur portée par la seule couleur).
 */
export function Radar({ axes, titre }: { axes: { nom: string; valeur: number }[]; titre: string }) {
  const taille = 340;
  const centre = taille / 2;
  const rayon = 104;
  const n = axes.length;
  const point = (i: number, v: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (rayon * v) / 5;
    return [centre + r * Math.cos(angle), centre + r * Math.sin(angle)] as const;
  };
  const polygone = axes.map((a, i) => point(i, a.valeur).join(",")).join(" ");

  return (
    <svg viewBox={`0 0 ${taille} ${taille}`} role="img" aria-label={titre} className="mx-auto w-full max-w-[22rem]">
      {[1, 2, 3, 4, 5].map((niveau) => (
        <polygon
          key={niveau}
          points={axes.map((_, i) => point(i, niveau).join(",")).join(" ")}
          fill="none"
          stroke="var(--grid)"
          strokeWidth={1}
        />
      ))}
      {axes.map((_, i) => {
        const [x, y] = point(i, 5);
        return <line key={i} x1={centre} y1={centre} x2={x} y2={y} stroke="var(--grid)" strokeWidth={1} />;
      })}
      {[1, 3, 5].map((niveau) => (
        <text key={niveau} x={centre + 4} y={centre - (rayon * niveau) / 5 + 3} fontSize={9} fill="var(--ink-3)">
          {niveau}
        </text>
      ))}
      <polygon points={polygone} fill="var(--series-1)" fillOpacity={0.12} stroke="var(--series-1)" strokeWidth={2} strokeLinejoin="round" />
      {axes.map((a, i) => {
        const [x, y] = point(i, a.valeur);
        const [lx, ly] = point(i, 6.15);
        const ancre = Math.abs(lx - centre) < 12 ? "middle" : lx > centre ? "start" : "end";
        const mots = a.nom.split(" & ");
        return (
          <g key={a.nom}>
            <circle cx={x} cy={y} r={5} fill="var(--series-1)" stroke="var(--surface)" strokeWidth={2}>
              <title>{`${a.nom} : ${a.valeur.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} sur 5`}</title>
            </circle>
            <text x={lx} y={ly - (mots.length - 1) * 5} fontSize={10.5} fill="var(--ink-2)" textAnchor={ancre}>
              {mots.map((m, j) => (
                <tspan key={m} x={lx} dy={j ? 12 : 0}>
                  {j < mots.length - 1 ? `${m} &` : m}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
