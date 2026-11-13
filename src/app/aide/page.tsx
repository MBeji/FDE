import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Copy,
  FlagTriangleRight,
  Lock,
  Moon,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Carte, EnTetePage, Pastille, TitreSection } from "@/components/ui";
import { AIDE_PAGES, POINTS_ENTREE } from "@/data/aide";
import { MODES_COPILOTE } from "@/data/referentiels";
import { NAVIGATION } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Aide",
  description:
    "Toutes les fonctionnalités du portail FDE Atlas, par où commencer selon votre situation, les fonctions transverses, les raccourcis clavier et les questions fréquentes.",
};

const SOMMAIRE = [
  { id: "commencer", titre: "Par où commencer" },
  { id: "catalogue", titre: "Catalogue des fonctionnalités" },
  { id: "transverses", titre: "Fonctions transverses" },
  { id: "raccourcis", titre: "Raccourcis clavier" },
  { id: "faq", titre: "Questions fréquentes" },
];

const lien = "font-medium text-accent hover:underline";

const TRANSVERSES: { icone: LucideIcon; titre: string; contenu: ReactNode }[] = [
  {
    icone: Search,
    titre: "Recherche",
    contenu: (
      <>
        Le champ de recherche de la barre du haut (ou <Touche>⌘ K</Touche>) ouvre une palette qui cherche dans
        tout le portail : phases, frameworks, templates, guides, standards, cas d&apos;usage, glossaire,
        situations. Sans résultat, un bouton transmet la question au copilote.
      </>
    ),
  },
  {
    icone: Moon,
    titre: "Thème clair ou sombre",
    contenu: (
      <>
        Le bouton soleil / lune de la barre du haut bascule le thème. Le choix est mémorisé dans le navigateur ;
        tant que vous n&apos;avez rien choisi, le portail suit le réglage de votre système.
      </>
    ),
  },
  {
    icone: Sparkles,
    titre: "Copilote",
    contenu: (
      <>
        Bouton « Copilote » en haut à droite (ou <Touche>⌘ J</Touche>), disponible sur toutes les pages. Quatre
        modes : {Object.values(MODES_COPILOTE).map((m) => m.nom.toLowerCase()).join(", ")}. Il reçoit la page
        consultée et, tant que vous laissez l&apos;étiquette de mission activée, un résumé de la mission active.
        Sans clé d&apos;API sur le déploiement, il passe en <strong className="font-semibold text-ink">mode hors
        ligne</strong> : il propose les ressources du portail les plus proches de votre question et une invite à
        copier dans un autre assistant.
      </>
    ),
  },
  {
    icone: BriefcaseBusiness,
    titre: "Missions dans le navigateur",
    contenu: (
      <>
        Les missions, la progression d&apos;onboarding, l&apos;auto-évaluation et la saisie des ateliers sont
        conservées dans le stockage local de ce navigateur. Depuis{" "}
        <Link href="/missions" className={lien}>Mes missions</Link>, importez une mission en JSON ou chargez la
        mission d&apos;exemple ; depuis la mission active, onglet Exports, exportez-la en JSON pour la sauvegarder
        ou la transmettre.
      </>
    ),
  },
  {
    icone: Copy,
    titre: "Copier, télécharger, imprimer",
    contenu: (
      <>
        Templates, résultats d&apos;ateliers, exports de mission et charte se copient en Markdown ou se
        téléchargent en fichier <code className="text-[0.85em]">.md</code>. Les templates et la charte ont aussi
        un bouton « Imprimer » ; l&apos;impression masque le menu et les barres.
      </>
    ),
  },
  {
    icone: Lock,
    titre: "Protection par mot de passe",
    contenu: (
      <>
        Si le déploiement définit la variable <code className="text-[0.85em]">PORTAIL_MOT_DE_PASSE</code>, tout
        le portail demande une authentification du navigateur : seul le mot de passe compte, l&apos;identifiant
        est libre. Sans cette variable, le portail est ouvert et doit être protégé autrement (SSO, réseau privé).
      </>
    ),
  },
];

const RACCOURCIS: { touches: string[]; effet: string; ou: string }[] = [
  { touches: ["⌘ K", "Ctrl K"], effet: "Ouvrir ou fermer la recherche", ou: "Partout" },
  { touches: ["⌘ J", "Ctrl J"], effet: "Ouvrir ou fermer le copilote", ou: "Partout" },
  { touches: ["Échap"], effet: "Fermer la recherche, puis le menu, puis le copilote", ou: "Partout" },
  { touches: ["↑", "↓"], effet: "Parcourir les résultats", ou: "Recherche" },
  { touches: ["Entrée"], effet: "Ouvrir le résultat sélectionné", ou: "Recherche" },
  { touches: ["Entrée"], effet: "Envoyer la question", ou: "Copilote" },
  { touches: ["Maj Entrée"], effet: "Aller à la ligne", ou: "Copilote" },
  {
    touches: ["←", "→", "Début", "Fin"],
    effet: "Passer d'un onglet à l'autre",
    ou: "Onglets (mission, onboarding, diagnostic de maturité)",
  },
];

const FAQ: { question: string; reponse: ReactNode }[] = [
  {
    question: "Où sont mes données ?",
    reponse: (
      <>
        Dans le stockage local de votre navigateur, sur ce poste uniquement : aucun compte, aucune base de
        données. Elles ne suivent donc pas d&apos;un navigateur à l&apos;autre et disparaissent si vous videz les
        données du site. Exportez régulièrement vos missions en JSON. Seul le copilote envoie des données hors du
        navigateur : la conversation, la page consultée et, si vous le laissez activé, le résumé de la mission.
      </>
    ),
  },
  {
    question: "Le copilote ne répond pas.",
    reponse: (
      <>
        Si l&apos;étiquette « Mode hors ligne » s&apos;affiche, aucune clé d&apos;API n&apos;est configurée sur ce
        déploiement : le copilote renvoie vers les ressources du portail et vous donne une invite à coller dans un
        autre assistant. Sinon, un message vous indique la cause : connexion interrompue (réessayez), trop de
        demandes en peu de temps (patientez quelques minutes) ou conversation trop longue (démarrez une nouvelle
        conversation avec le bouton de la barre du copilote).
      </>
    ),
  },
  {
    question: "Comment contribuer ?",
    reponse: (
      <>
        Le savoir vit en Markdown dans le dépôt du portail. L&apos;
        <Link href="/savoir/contribuer" className={lien}>assistant de contribution</Link> produit une fiche
        conforme et anonymisée ; vous la proposez ensuite par pull request, où elle est relue comme du code avant
        d&apos;être publiée au déploiement suivant. Le format attendu est décrit dans{" "}
        <code className="text-[0.85em]">content/README.md</code>.
      </>
    ),
  },
  {
    question: "Comment signaler une erreur ?",
    reponse: (
      <>
        Le portail n&apos;a pas de formulaire de signalement. Proposez la correction par pull request sur le dépôt
        du portail : le contenu éditorial est dans <code className="text-[0.85em]">content/</code>, les données
        structurées (phases, cas d&apos;usage, glossaire, standards…) dans{" "}
        <code className="text-[0.85em]">src/data/</code>. Si vous ne pouvez pas la corriger vous-même, décrivez-la
        par le canal habituel du dépôt, en indiquant l&apos;adresse de la page.
      </>
    ),
  },
];

function Touche({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-block rounded border border-line bg-surface-2 px-1.5 py-px font-sans text-[0.75rem] font-medium whitespace-nowrap text-ink-2">
      {children}
    </kbd>
  );
}

function Section({ id, titre, description, children }: { id: string; titre: string; description?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="scroll-mt-20">
      <TitreSection id={id} titre={titre} description={description} />
      {children}
    </section>
  );
}

export default function PageAide() {
  return (
    <>
      <EnTetePage
        surtitre="Aide"
        titre="Aide"
        chapo="Tout ce que fait le portail, et où le trouver : par quelle page commencer selon votre situation, à quoi sert chaque espace, les fonctions disponibles partout, les raccourcis clavier et les réponses aux questions fréquentes."
      />

      <nav aria-label="Sommaire de la page" className="hors-impression mb-10 flex flex-wrap gap-2">
        {SOMMAIRE.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[0.85rem] font-medium text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
          >
            {s.titre}
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        <Section id="commencer" titre="Par où commencer" description="Quatre points d'entrée selon ce que vous faites en ce moment.">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {POINTS_ENTREE.map((p) => (
              <Carte key={p.titre} className="flex flex-col p-5">
                <h3 className="flex items-center gap-2 text-[0.98rem] font-semibold text-ink">
                  <FlagTriangleRight className="size-4 flex-none text-accent" aria-hidden />
                  {p.titre}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-2">{p.texte}</p>
                <div className="mt-auto pt-4">
                  <Link
                    href={p.principal.href}
                    className="flex items-center gap-1 text-[0.88rem] font-semibold text-accent hover:underline"
                  >
                    {p.principal.nom}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                  <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[0.8rem]">
                    {p.autres.map((a) => (
                      <Link key={a.href} href={a.href} className="text-ink-2 hover:text-accent hover:underline">
                        {a.nom}
                      </Link>
                    ))}
                  </p>
                </div>
              </Carte>
            ))}
          </div>
        </Section>

        <Section
          id="catalogue"
          titre="Catalogue des fonctionnalités"
          description="Toutes les pages du menu, dans le même ordre, avec leur usage."
        >
          <div className="space-y-8">
            {NAVIGATION.map((groupe) => (
              <div key={groupe.titre}>
                <p className="surtitre mb-3">{groupe.titre}</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {groupe.liens.map((l) => {
                    const Icone = l.icone;
                    const aide = AIDE_PAGES[l.href];
                    return (
                      <li key={l.href}>
                        <Carte className="flex h-full flex-col p-4">
                          <div className="flex items-start gap-3">
                            <span className="flex size-8 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent">
                              <Icone className="size-4" aria-hidden />
                            </span>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-[0.95rem] leading-snug font-semibold">
                                <Link href={l.href} className="text-ink hover:text-accent">
                                  {l.nom}
                                </Link>
                              </h3>
                              {aide && (
                                <>
                                  <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-2">{aide.resume}</p>
                                  <p className="mt-2 text-[0.84rem] leading-relaxed text-ink">
                                    <span className="font-medium">À utiliser quand </span>
                                    {aide.quand}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                          {aide?.sousLiens && aide.sousLiens.length > 0 && (
                            <ul className="mt-3 flex flex-wrap gap-1.5 pl-11">
                              {aide.sousLiens.map((s) => (
                                <li key={s.href}>
                                  <Link href={s.href} className="inline-flex rounded-md transition-opacity hover:opacity-80">
                                    <Pastille>{s.nom}</Pastille>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                          <div className="mt-auto pt-3 pl-11">
                            <Link
                              href={l.href}
                              className="inline-flex items-center gap-1 text-[0.82rem] font-medium text-accent hover:underline"
                              aria-label={`Ouvrir ${l.nom}`}
                            >
                              Ouvrir
                              <ArrowRight className="size-3.5" aria-hidden />
                            </Link>
                          </div>
                        </Carte>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="transverses" titre="Fonctions transverses" description="Disponibles depuis n'importe quelle page.">
          <ul className="grid gap-3 md:grid-cols-2">
            {TRANSVERSES.map((t) => {
              const Icone = t.icone;
              return (
                <li key={t.titre}>
                  <Carte className="h-full p-4">
                    <h3 className="flex items-center gap-2 text-[0.95rem] font-semibold text-ink">
                      <Icone className="size-4 flex-none text-accent" aria-hidden />
                      {t.titre}
                    </h3>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-2">{t.contenu}</p>
                  </Carte>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section
          id="raccourcis"
          titre="Raccourcis clavier"
          description="⌘ sur Mac, Ctrl sur Windows et Linux."
        >
          <Carte className="overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-[0.86rem]">
              <thead>
                <tr className="border-b border-line text-[0.75rem] tracking-wide text-ink-3 uppercase">
                  <th scope="col" className="px-4 py-2.5 font-medium">Touches</th>
                  <th scope="col" className="px-4 py-2.5 font-medium">Effet</th>
                  <th scope="col" className="px-4 py-2.5 font-medium">Où</th>
                </tr>
              </thead>
              <tbody>
                {RACCOURCIS.map((r) => (
                  <tr key={`${r.ou}-${r.effet}`} className="border-b border-line last:border-0">
                    <td className="px-4 py-2.5">
                      <span className="flex flex-wrap items-center gap-1">
                        {r.touches.map((t, i) => (
                          <span key={t} className="flex items-center gap-1">
                            {i > 0 && <span className="text-ink-3">{r.touches[0].startsWith("⌘") ? "ou" : "/"}</span>}
                            <Touche>{t}</Touche>
                          </span>
                        ))}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-ink">{r.effet}</td>
                    <td className="px-4 py-2.5 text-ink-2">{r.ou}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Carte>
        </Section>

        <Section id="faq" titre="Questions fréquentes">
          <div className="space-y-2">
            {FAQ.map((f) => (
              <details key={f.question} className="group rounded-xl border border-line bg-surface shadow-card">
                <summary className="cursor-pointer list-none px-4 py-3 text-[0.95rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {f.question}
                    <ArrowRight className="size-4 flex-none text-ink-3 transition-transform group-open:rotate-90" aria-hidden />
                  </span>
                </summary>
                <p className="border-t border-line px-4 py-3 text-[0.88rem] leading-relaxed text-ink-2">{f.reponse}</p>
              </details>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
