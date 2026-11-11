"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowRight, FlaskConical, Plus, Trash2, Upload } from "lucide-react";
import { Bouton, CLASSES_SAISIE, Carte, Champ, Jauge, Pastille, Vide } from "@/components/ui";
import { phases } from "@/data/phases";
import { PHASES_RESUME, PHASE_IDS, SECTEURS } from "@/data/referentiels";
import type { SecteurId } from "@/data/types";
import { cn } from "@/lib/cn";
import {
  FORMATS_MISSION,
  activerMission,
  aujourdhui,
  avancementMission,
  creerMission,
  importerMission,
  supprimerMission,
  useMissions,
  type FormatMissionId,
} from "@/lib/missions";
import { missionExemple } from "@/lib/missions-exemple";
import { useEstClient } from "@/lib/stockage";

const VIDE = {
  nom: "",
  client: "",
  secteur: "" as SecteurId | "",
  domaine: "",
  sponsor: "",
  auteur: "",
  format: "domaine-phare" as FormatMissionId,
  debut: "",
  probleme: "",
  ambition: "",
};

function Formulaire({ fermer }: { fermer: () => void }) {
  const router = useRouter();
  const [f, setF] = useState({ ...VIDE, debut: aujourdhui() });
  const champ = <K extends keyof typeof VIDE>(k: K, v: (typeof VIDE)[K]) => setF({ ...f, [k]: v });
  const valide = f.nom.trim() && f.client.trim();

  return (
    <Carte className="mb-8 p-5 sm:p-6">
      <h2 className="text-[1.1rem] font-semibold text-ink">Nouvelle mission</h2>
      <p className="mt-1 mb-5 text-[0.86rem] text-ink-2">
        Ces informations pré-remplissent les templates et donnent son contexte au copilote. Elles
        restent sur ce poste.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Champ libelle="Nom de la mission *">
          <input className={CLASSES_SAISIE} value={f.nom} onChange={(e) => champ("nom", e.target.value)} placeholder="Réinvention du SAV Entreprises" />
        </Champ>
        <Champ libelle="Client *">
          <input className={CLASSES_SAISIE} value={f.client} onChange={(e) => champ("client", e.target.value)} placeholder="Nom du client" />
        </Champ>
        <Champ libelle="Secteur">
          <select className={CLASSES_SAISIE} value={f.secteur} onChange={(e) => champ("secteur", e.target.value as SecteurId | "")}>
            <option value="">Non précisé</option>
            {Object.entries(SECTEURS)
              .filter(([id]) => id !== "transverse")
              .map(([id, nom]) => (
                <option key={id} value={id}>
                  {nom}
                </option>
              ))}
          </select>
        </Champ>
        <Champ libelle="Domaine transformé">
          <input className={CLASSES_SAISIE} value={f.domaine} onChange={(e) => champ("domaine", e.target.value)} placeholder="Assistance & SAV Entreprises" />
        </Champ>
        <Champ libelle="Sponsor">
          <input className={CLASSES_SAISIE} value={f.sponsor} onChange={(e) => champ("sponsor", e.target.value)} placeholder="Nom, fonction" />
        </Champ>
        <Champ libelle="Lead FDE">
          <input className={CLASSES_SAISIE} value={f.auteur} onChange={(e) => champ("auteur", e.target.value)} placeholder="Votre nom" />
        </Champ>
        <Champ libelle="Date de démarrage">
          <input type="date" className={CLASSES_SAISIE} value={f.debut} onChange={(e) => champ("debut", e.target.value)} />
        </Champ>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-[0.8rem] font-medium text-ink">Format de mission</legend>
        <div className="grid gap-2 lg:grid-cols-5">
          {(Object.entries(FORMATS_MISSION) as [FormatMissionId, (typeof FORMATS_MISSION)[FormatMissionId]][]).map(
            ([id, format]) => (
              <label
                key={id}
                className={cn(
                  "flex cursor-pointer flex-col rounded-lg border p-3 transition-colors",
                  f.format === id ? "border-ink bg-surface-2" : "border-line hover:border-line-strong",
                )}
              >
                <input
                  type="radio"
                  name="format"
                  className="sr-only"
                  checked={f.format === id}
                  onChange={() => champ("format", id)}
                />
                <span className="text-[0.88rem] font-semibold text-ink">{format.nom}</span>
                <span className="text-[0.74rem] text-ink-3">{format.duree}</span>
                <span className="mt-2 flex gap-0.5" aria-hidden>
                  {PHASE_IDS.map((p) => (
                    <span
                      key={p}
                      className={cn("h-1.5 flex-1 rounded-sm", format.phases.includes(p) ? "bg-ink" : "bg-line")}
                    />
                  ))}
                </span>
              </label>
            ),
          )}
        </div>
        <p className="mt-2 text-[0.8rem] text-ink-2">{FORMATS_MISSION[f.format].description}</p>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Champ libelle="Problème à résoudre" aide="Un indicateur, une ampleur, une échéance. Peut être complété après le cadrage.">
          <textarea className={cn(CLASSES_SAISIE, "min-h-20")} value={f.probleme} onChange={(e) => champ("probleme", e.target.value)} />
        </Champ>
        <Champ libelle="Ambition chiffrée" aide="L'ordre de grandeur de la valeur visée.">
          <textarea className={cn(CLASSES_SAISIE, "min-h-20")} value={f.ambition} onChange={(e) => champ("ambition", e.target.value)} />
        </Champ>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Bouton
          variante="primaire"
          disabled={!valide}
          onClick={() => {
            creerMission({ ...f, nom: f.nom.trim(), client: f.client.trim() });
            router.push("/missions/active");
          }}
        >
          Créer et ouvrir la mission
          <ArrowRight className="size-4" aria-hidden />
        </Bouton>
        <Bouton variante="discret" onClick={fermer}>
          Annuler
        </Bouton>
      </div>
    </Carte>
  );
}

export function PortefeuilleMissions() {
  const router = useRouter();
  const estClient = useEstClient();
  const { missions, active } = useMissions();
  const [creation, setCreation] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const fichier = useRef<HTMLInputElement>(null);

  function ouvrir(id: string) {
    activerMission(id);
    router.push("/missions/active");
  }

  async function importer(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    setErreur(importerMission(await f.text()));
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Bouton variante="primaire" onClick={() => setCreation(true)} disabled={creation}>
          <Plus className="size-4" aria-hidden />
          Nouvelle mission
        </Bouton>
        <Bouton
          onClick={() => {
            importerMission(JSON.stringify(missionExemple()));
            router.push("/missions/active");
          }}
        >
          <FlaskConical className="size-4" aria-hidden />
          Charger la mission d&apos;exemple
        </Bouton>
        <Bouton onClick={() => fichier.current?.click()}>
          <Upload className="size-4" aria-hidden />
          Importer
        </Bouton>
        <input ref={fichier} type="file" accept="application/json,.json" className="hidden" onChange={importer} />
      </div>

      {erreur && (
        <p role="alert" className="mb-6 rounded-lg border border-critical/30 bg-critical-soft px-4 py-3 text-[0.88rem] text-critical-ink">
          {erreur}
        </p>
      )}

      {creation && <Formulaire fermer={() => setCreation(false)} />}

      {estClient && !missions.length && !creation && (
        <Vide titre="Aucune mission pour l'instant">
          Créez votre mission, ou chargez la mission d&apos;exemple pour découvrir l&apos;espace de travail
          avec le cas fil rouge.
        </Vide>
      )}

      <ul className="grid gap-3 lg:grid-cols-2">
        {estClient &&
          missions.map((m) => {
            const taux = avancementMission(m, phases);
            const phase = PHASES_RESUME[m.phaseCourante];
            return (
              <li key={m.id}>
                <Carte className="flex h-full flex-col p-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {active?.id === m.id && <Pastille ton="bon">Mission active</Pastille>}
                    <Pastille>{FORMATS_MISSION[m.format].nom}</Pastille>
                    {m.secteur && <Pastille>{SECTEURS[m.secteur]}</Pastille>}
                  </div>
                  <h2 className="mt-3 text-[1.05rem] leading-snug font-semibold text-ink">{m.nom}</h2>
                  <p className="text-[0.86rem] text-ink-2">{m.client}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Jauge valeur={taux} />
                    <span className="flex-none text-[0.8rem] font-semibold tabular-nums">{Math.round(taux * 100)} %</span>
                  </div>
                  <p className="mt-1.5 text-[0.78rem] text-ink-3">
                    Phase {phase.numero} · {phase.nom} · mise à jour le{" "}
                    {new Date(m.majLe).toLocaleDateString("fr-FR")}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <Bouton variante="primaire" taille="sm" onClick={() => ouvrir(m.id)}>
                      Ouvrir
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Bouton>
                    <Bouton
                      variante="danger"
                      taille="sm"
                      className="ml-auto"
                      onClick={() => {
                        if (window.confirm(`Supprimer définitivement la mission « ${m.nom} » de ce poste ?`)) {
                          supprimerMission(m.id);
                        }
                      }}
                    >
                      <Trash2 className="size-3.5" aria-hidden />
                      Supprimer
                    </Bouton>
                  </div>
                </Carte>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
