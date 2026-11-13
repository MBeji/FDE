import {
  Award,
  BookA,
  BookMarked,
  Bot,
  BriefcaseBusiness,
  Calculator,
  Compass,
  FileText,
  Gauge,
  GitFork,
  GraduationCap,
  IdCard,
  LayoutDashboard,
  Lightbulb,
  Library,
  PenLine,
  Route,
  ScatterChart,
  Shapes,
  ShieldCheck,
  Signpost,
  Sparkles,
  Workflow,
  Users,
  Wrench,
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
      { href: "/situations", nom: "Par situation", icone: Signpost },
      { href: "/missions", nom: "Mes missions", icone: BriefcaseBusiness },
      { href: "/copilote", nom: "Copilote", icone: Sparkles },
    ],
  },
  {
    titre: "Le métier",
    liens: [
      { href: "/metier", nom: "Rôle & charte FDE", icone: IdCard },
      { href: "/raci", nom: "RACI Design · Build", icone: Users },
      { href: "/onboarding", nom: "Onboarding", icone: GraduationCap },
      { href: "/competences", nom: "Compétences", icone: Award },
    ],
  },
  {
    titre: "Méthode",
    liens: [
      { href: "/methode", nom: "Parcours AI-Native", icone: Route },
      { href: "/guides/cas-fil-rouge", nom: "Cas fil rouge", icone: BookMarked },
      { href: "/outils", nom: "Ateliers", icone: Wrench },
    ],
  },
  {
    titre: "Référentiels",
    liens: [
      { href: "/frameworks", nom: "Frameworks", icone: Shapes },
      { href: "/templates", nom: "Templates & livrables", icone: FileText },
      { href: "/guides", nom: "Guides pratiques", icone: Compass },
      { href: "/standards", nom: "Standards d'ingénierie", icone: ShieldCheck },
      { href: "/cas-usage", nom: "Cas d'usage", icone: Lightbulb },
    ],
  },
  {
    titre: "Savoir",
    liens: [
      { href: "/savoir", nom: "Savoir terrain", icone: Library },
      { href: "/savoir/contribuer", nom: "Contribuer", icone: PenLine },
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
  if (href === "/savoir") return pathname.startsWith("/savoir") && pathname !== "/savoir/contribuer";
  return pathname === href || pathname.startsWith(`${href}/`);
}
