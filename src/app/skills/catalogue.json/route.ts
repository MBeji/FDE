import { catalogue } from "@/lib/skills";

/**
 * Catalogue de la bibliothèque de skills, lisible par une machine : skills publiés, workflows et taxonomie.
 * Sans donnée dynamique : généré une fois au build.
 */
export async function GET() {
  return Response.json(catalogue());
}
