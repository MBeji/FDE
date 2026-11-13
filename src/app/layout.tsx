import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource-variable/source-serif-4";
import "./globals.css";
import { CopilotDrawer } from "@/components/copilote/CopilotDrawer";
import { CommandPalette } from "@/components/shell/CommandPalette";
import { ShellProvider } from "@/components/shell/ShellProvider";
import { Sidebar } from "@/components/shell/Sidebar";
import { Topbar } from "@/components/shell/Topbar";

export const metadata: Metadata = {
  title: {
    default: "FDE Sofrecom — Transformation AI-Native",
    template: "%s · FDE Sofrecom",
  },
  description:
    "L'environnement de travail des Forward Deployed Engineers : méthode, frameworks, templates, outils et copilote pour conduire une transformation AI-Native.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

/** Applique le thème avant le premier affichage pour éviter tout flash. */
const SCRIPT_THEME = `(function(){try{var t=JSON.parse(localStorage.getItem("fde-atlas:theme"));if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_THEME }} />
      </head>
      <body className="min-h-dvh antialiased">
        <ShellProvider>
          <Sidebar />
          <div className="flex min-h-dvh flex-col lg:pl-64">
            <Topbar />
            <main className="mx-auto w-full max-w-[1180px] flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
              {children}
            </main>
          </div>
          <CommandPalette />
          <CopilotDrawer />
        </ShellProvider>
      </body>
    </html>
  );
}
