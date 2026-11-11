import type { Metadata } from "next";
import { EspaceMission } from "@/components/missions/EspaceMission";

export const metadata: Metadata = { title: "Mission active" };

export default function PageMissionActive() {
  return <EspaceMission />;
}
