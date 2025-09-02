import type { HraCZ, VekStupen } from "@/lib/types";

import dataNabor from "@/data/nabor.json";
import data1 from "@/data/1.json";
import data2 from "@/data/2.json";
import data3 from "@/data/3.json";
import data4 from "@/data/4.json";
import data56 from "@/data/5-6.json";
import data78 from "@/data/7-8.json";

export const VEKY = [
  { value: "nabor", label: "Nábor" },
  { value: "1", label: "1. třída" },
  { value: "2", label: "2. třída" },
  { value: "3", label: "3. třída" },
  { value: "4", label: "4. třída" },
  { value: "5-6", label: "5.–6. třída" },
  { value: "7-8", label: "7.–8. třída" },
] as const;

// Fixní seznam kategorií dle zadání
export const KATEGORIE = [
  "Bruslení",
  "Střelba",
  "Technika hole",
  "HČJ",
  "Hry",
] as const;

const BY_VEK: Record<VekStupen, HraCZ[]> = {
  nabor: dataNabor as HraCZ[],
  "1": data1 as HraCZ[],
  "2": data2 as HraCZ[],
  "3": data3 as HraCZ[],
  "4": data4 as HraCZ[],
  "5-6": data56 as HraCZ[],
  "7-8": data78 as HraCZ[],
};

// Vrátí všechny položky pro daný ročník a kategorii
export function getByVekAndKat(vek: VekStupen, kat: string): HraCZ[] {
  const arr = BY_VEK[vek] ?? [];
  return arr.filter((x) => x.kategorie === kat);
}
