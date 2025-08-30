import hry from "@/data/hry.json";
import { PrvekZaznam, VekStupen } from "./types";

// Když přidáš další datasety (bruslení, rychlost…), stačí je připojit sem:
const DATASETS: PrvekZaznam[] = [
  ...hry
  // ...brusleni, ...rychlost
];

export interface FilterQuery {
  kategorie?: string;
  prvek?: string;
  vek?: VekStupen;
  q?: string; // full-text do názvu/obsahu
}

export function getAllData(): PrvekZaznam[] {
  return DATASETS;
}

export function filterData({
  kategorie,
  prvek,
  vek,
  q
}: FilterQuery): PrvekZaznam[] {
  const qNorm = (q ?? "").toLowerCase();

  return DATASETS.filter((item) => {
    if (kategorie && item.kategorie !== kategorie) return false;
    if (prvek && item.prvek !== prvek) return false;
    if (qNorm) {
      const hay =
        `${item.prvek} ${item.popis} ${item.psychosomatika} ${Object.values(item.obsah).join(" ")}`.toLowerCase();
      if (!hay.includes(qNorm)) return false;
    }
    // Věk nefiltruje položku jako takovou (všechny prvky mají všech 7 textů),
    // ale používá se na výběr správného bloku na kartě. Pokud bys chtěl
    // omezit pouze na záznamy, které mají ne-prázdný text pro daný věk:
    if (vek && !item.obsah[vek]) return false;

    return true;
  });
}

export function listKategorie(): string[] {
  return Array.from(new Set(DATASETS.map((d) => d.kategorie))).sort();
}

export function listPrvkyByKategorie(kat?: string): string[] {
  const pool = kat ? DATASETS.filter((d) => d.kategorie === kat) : DATASETS;
  return Array.from(new Set(pool.map((d) => d.prvek))).sort();
}

export const VEKY: { label: string; value: VekStupen }[] = [
  { label: "Nábor", value: "nabor" },
  { label: "1. třída", value: "1" },
  { label: "2. třída", value: "2" },
  { label: "3. třída", value: "3" },
  { label: "4. třída", value: "4" },
  { label: "5.–6. třída", value: "5-6" },
  { label: "7.–8. třída", value: "7-8" }
];
