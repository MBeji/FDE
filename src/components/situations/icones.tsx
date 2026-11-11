import {
  BookOpenCheck,
  Compass,
  FileStack,
  HandHelping,
  LifeBuoy,
  type LucideIcon,
  Presentation,
  Rocket,
  Search,
  Share2,
  UserPlus,
  Workflow,
} from "lucide-react";

/** Icône associée à chaque situation (sans état, utilisable côté serveur et côté client). */
export const ICONES_SITUATION: Record<string, LucideIcon> = {
  "rejoindre-le-pool": UserPlus,
  "preparer-une-mission": BookOpenCheck,
  "demarrer-une-mission": Compass,
  "realiser-un-diagnostic": Search,
  "concevoir-une-solution": Workflow,
  "developper-et-industrialiser": Rocket,
  "preparer-une-restitution": Presentation,
  "transferer-la-solution": HandHelping,
  "chercher-un-template": FileStack,
  "rencontrer-une-difficulte": LifeBuoy,
  "partager-un-retour-d-experience": Share2,
};

export function IconeSituation({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const Icone = ICONES_SITUATION[id] ?? Compass;
  return <Icone className={className} aria-hidden />;
}
