import { getSkill } from "@/lib/content";
import { skillBrut, skillsPublies } from "@/lib/skills";

/**
 * Le SKILL.md brut d'un skill publié, tel qu'un agent le charge.
 * Généré une fois au build ; un skill non publié répond 404.
 */
export function generateStaticParams() {
  return skillsPublies.map((s) => ({ id: s.id }));
}

export async function GET(_request: Request, ctx: RouteContext<"/skills/[id]/SKILL.md">) {
  const s = getSkill((await ctx.params).id);
  if (!s || s.statut !== "publie") return new Response("Skill introuvable ou non publié.\n", { status: 404 });
  return new Response(skillBrut(s), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
