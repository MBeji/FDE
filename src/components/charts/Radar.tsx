/**
 * Profil en radar pour une série unique de notes de 0 à 5.
 * Le radar montre la forme du profil ; la lecture précise passe par la liste chiffrée affichée à côté.
 */
export function Radar({
  axes,
  titre,
}: {
  axes: { nom: string; court?: string; valeur: number }[];
  titre: string;
}) {
  const taille = 340;
  const centre = taille / 2;
  const rayon = 112;
  const n = axes.length;
  const point = (i: number, v: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (rayon * v) / 5;
    return [centre + r * Math.cos(angle), centre + r * Math.sin(angle)] as const;
  };
  const polygone = axes.map((a, i) => point(i, a.valeur).join(",")).join(" ");

  return (
    <figure>
      <svg viewBox={`-46 0 ${taille + 92} ${taille}`} role="img" aria-label={titre} className="mx-auto w-full max-w-[26rem]">
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
        <polygon points={polygone} fill="var(--series-1)" fillOpacity={0.12} stroke="var(--series-1)" strokeWidth={2} strokeLinejoin="round" />
        {axes.map((a, i) => {
          const [x, y] = point(i, a.valeur);
          const [lx, ly] = point(i, 5.75);
          const ancre = Math.abs(lx - centre) < 12 ? "middle" : lx > centre ? "start" : "end";
          return (
            <g key={a.nom}>
              <circle cx={x} cy={y} r={5} fill="var(--series-1)" stroke="var(--surface)" strokeWidth={2}>
                <title>{`${a.nom} : ${a.valeur.toLocaleString("fr-FR", { maximumFractionDigits: 1 })} sur 5`}</title>
              </circle>
              <text x={lx} y={ly + 5} fontSize={14} fill="var(--ink-2)" textAnchor={ancre}>
                {a.court ?? a.nom}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="text-center text-[0.72rem] text-ink-3">Du centre (1) vers l&apos;extérieur (5)</figcaption>
    </figure>
  );
}
