import { NextResponse, type NextRequest } from "next/server";

/**
 * Protection d'accès optionnelle du portail.
 * Si la variable PORTAIL_MOT_DE_PASSE est définie, tout le site (pages et API) exige
 * une authentification HTTP Basic avec ce mot de passe, quel que soit l'identifiant saisi.
 * Sans cette variable, le portail est ouvert : à réserver à un déploiement déjà protégé (SSO, réseau privé).
 */
function egaux(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return difference === 0;
}

export function proxy(request: NextRequest) {
  const attendu = process.env.PORTAIL_MOT_DE_PASSE;
  if (!attendu) return NextResponse.next();

  const entete = request.headers.get("authorization");
  if (entete?.startsWith("Basic ")) {
    try {
      const decode = atob(entete.slice(6));
      const motDePasse = decode.slice(decode.indexOf(":") + 1);
      if (egaux(motDePasse, attendu)) return NextResponse.next();
    } catch {
      // En-tête mal formé : on redemande l'authentification.
    }
  }

  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="FDE Sofrecom", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
