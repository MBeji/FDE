import type { Metadata } from "next";
import { BibliothequePrompts } from "@/components/copilote/BibliothequePrompts";
import { BoutonCopilote } from "@/components/copilote/BoutonCopilote";
import { Carte, EnTetePage, TitreSection } from "@/components/ui";
import { prompts } from "@/data/prompts";
import { MODES_COPILOTE } from "@/data/referentiels";

export const metadata: Metadata = { title: "Copilote" };

export default function PageCopilote() {
  return (
    <>
      <EnTetePage
        surtitre="Piloter"
        titre="Le copilote méthodologique"
        chapo="Un assistant qui connaît la méthode, les frameworks, les templates et les guides du portail, la page que vous consultez et, si vous l'autorisez, le contexte de votre mission. Disponible partout avec ⌘J."
      >
        <BoutonCopilote variante="primaire">Ouvrir le copilote</BoutonCopilote>
      </EnTetePage>

      <section className="mb-12">
        <TitreSection titre="Quatre façons de travailler avec lui" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(MODES_COPILOTE).map((m) => (
            <Carte key={m.nom} className="p-4">
              <h3 className="text-[0.95rem] font-semibold text-ink">{m.nom}</h3>
              <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-2">{m.description}</p>
            </Carte>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-[0.84rem] leading-relaxed text-ink-3">
          Le copilote propose, le FDE décide. Vérifiez toute réponse avant de l&apos;utiliser, et ne transmettez pas
          de données que le client n&apos;autorise pas à sortir de son système d&apos;information.
        </p>
      </section>

      <section>
        <TitreSection
          titre="Bibliothèque de prompts"
          description={`${prompts.length} prompts éprouvés, par phase et par mode. Renseignez les variables, puis lancez-les dans le copilote ou copiez-les dans votre assistant habituel.`}
        />
        <BibliothequePrompts prompts={prompts} />
      </section>
    </>
  );
}
