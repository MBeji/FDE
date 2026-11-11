import {
  BookA,
  BookMarked,
  Bot,
  BriefcaseBusiness,
  Calculator,
  Compass,
  FileText,
  Gauge,
  GitFork,
  LayoutDashboard,
  Lightbulb,
  Library,
  Route,
  ScatterChart,
  Shapes,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface LienNav {
  href: string;
  nom: string;
  icone: LucideIcon;
}

export const NAVIGATION: { titre: string; liens: LienNav[] }[] = [
  {
    titre: "Piloter",
    liens: [
      { href: "/", nom: "Cockpit", icone: LayoutDashboard },
      { href: "/missions", nom: "Mes missions", icone: BriefcaseBusiness },
      { href: "/copilote", nom: "Copilote", icone: Sparkles },
    ],
  },
  {
    titre: "Méthode",
    liens: [
      { href: "/methode", nom: "Parcours AI-Native", icone: Route },
      { href: "/guides/cas-fil-rouge", nom: "Cas fil rouge", icone: BookMarked },
    ],
  },
  {
    titre: "Bibliothèque",
    liens: [
      { href: "/frameworks", nom: "Frameworks", icone: Shapes },
      { href: "/templates", nom: "Templates & livrables", icone: FileText },
      { href: "/guides", nom: "Guides pratiques", icone: Compass },
      { href: "/cas-usage", nom: "Cas d'usage", icone: Lightbulb },
    ],
  },
  {
    titre: "Ateliers",
    liens: [
      { href: "/outils/maturite", nom: "Diagnostic de maturité", icone: Gauge },
      { href: "/outils/agent-ou-pas", nom: "Agent ou pas ?", icone: GitFork },
      { href: "/outils/priorisation", nom: "Priorisation", icone: ScatterChart },
      { href: "/outils/business-case", nom: "Business case", icone: Calculator },
      { href: "/outils/redesign-processus", nom: "Redesign de processus", icone: Workflow },
      { href: "/outils/agent-designer", nom: "Agent Designer", icone: Bot },
    ],
  },
  {
    titre: "Savoir",
    liens: [
      { href: "/savoir", nom: "Savoir terrain", icone: Library },
      { href: "/glossaire", nom: "Glossaire", icone: BookA },
    ],
  },
];

export const ICONES_OUTILS: Record<string, LucideIcon> = {
  maturite: Gauge,
  "agent-ou-pas": GitFork,
  priorisation: ScatterChart,
  "business-case": Calculator,
  "redesign-processus": Workflow,
  "agent-designer": Bot,
};

/** Un lien est actif s'il correspond à la page, ou à l'une de ses sous-pages. */
export function estActif(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/guides") return pathname.startsWith("/guides") && pathname !== "/guides/cas-fil-rouge";
  return pathname === href || pathname.startsWith(`${href}/`);
}
