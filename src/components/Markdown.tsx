import Link from "next/link";
import { Children, isValidElement, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { AlertTriangle, Info, Lightbulb, OctagonAlert } from "lucide-react";
import { Mermaid } from "@/components/Mermaid";
import { cn } from "@/lib/cn";
import { rehypeEncadres } from "@/lib/rehype-encadres";
import { slugifier } from "@/lib/slug";

function texteDe(noeud: ReactNode): string {
  if (typeof noeud === "string" || typeof noeud === "number") return String(noeud);
  if (Array.isArray(noeud)) return noeud.map(texteDe).join("");
  if (isValidElement<{ children?: ReactNode }>(noeud)) return texteDe(noeud.props.children);
  return "";
}

const ENCADRES = {
  note: { libelle: "Note", Icone: Info, classe: "border-line bg-surface-2 text-ink" },
  tip: { libelle: "Conseil", Icone: Lightbulb, classe: "border-accent-line bg-accent-soft text-ink" },
  important: {
    libelle: "Important",
    Icone: OctagonAlert,
    classe: "border-accent-line bg-accent-soft text-ink",
  },
  warning: {
    libelle: "Attention",
    Icone: AlertTriangle,
    classe: "border-warning/50 bg-warning-soft text-ink",
  },
  caution: {
    libelle: "Attention",
    Icone: AlertTriangle,
    classe: "border-critical/40 bg-critical-soft text-ink",
  },
} as const;

const composants: Components = {
  a({ href = "", children }) {
    if (href.startsWith("/")) return <Link href={href}>{children}</Link>;
    if (href.startsWith("#")) return <a href={href}>{children}</a>;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  h2({ children }) {
    return <h2 id={slugifier(texteDe(children))}>{children}</h2>;
  },
  h3({ children }) {
    return <h3 id={slugifier(texteDe(children))}>{children}</h3>;
  },
  table({ children }) {
    return (
      <div className="table-wrap defilement-fin">
        <table>{children}</table>
      </div>
    );
  },
  pre({ children }) {
    const enfant = Children.toArray(children)[0];
    if (isValidElement<{ className?: string; children?: ReactNode }>(enfant)) {
      if (/language-mermaid/.test(enfant.props.className ?? "")) {
        return <Mermaid code={texteDe(enfant.props.children).trim()} />;
      }
    }
    return <pre className="defilement-fin">{children}</pre>;
  },
  blockquote({ children, ...props }) {
    const type = (props as Record<string, unknown>)["data-encadre"] as
      | keyof typeof ENCADRES
      | undefined;
    const encadre = type ? ENCADRES[type] : undefined;
    if (!encadre) return <blockquote>{children}</blockquote>;
    const { Icone } = encadre;
    return (
      <aside className={cn("mb-5 flex gap-3 rounded-[10px] border px-4 py-3.5", encadre.classe)}>
        <Icone className="mt-0.5 size-4 flex-none text-ink-2" aria-hidden />
        <div className="min-w-0 text-[0.925rem] leading-relaxed [&>p:last-child]:mb-0 [&>p]:mb-2">
          <p className="!mb-1 text-xs font-semibold tracking-wide text-ink-2 uppercase">
            {encadre.libelle}
          </p>
          {children}
        </div>
      </aside>
    );
  },
};

/** Rend du Markdown du portail (GFM, encadrés, diagrammes Mermaid, liens internes). */
export function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn("prose-atlas", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeEncadres]} components={composants}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
