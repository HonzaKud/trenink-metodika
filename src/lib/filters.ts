import hry from "@/data/hry.json";
import brusleni from "@/data/brusleni.json";
import rychlost from "@/data/rychlost.json";
// případně další kategorie importem (strelba.json apod.)

export const VEKY = [
  { value: "nabor", label: "Nábor" },
  { value: "1", label: "1. třída" },
  { value: "2", label: "2. třída" },
  { value: "3", label: "3. třída" },
  { value: "4", label: "4. třída" },
  { value: "5-6", label: "5.–6. třída" },
  { value: "7-8", label: "7.–8. třída" },
] as const;

const ALL = [
  ...hry,
  ...brusleni,
  ...rychlost,
  // ...strelba
];

export function listKategorie(): string[] {
  // Vytáhne unikátní hodnoty kategorie z dat
  return Array.from(new Set(ALL.map(x => x.kategorie))).sort();
}

export function getDataByKat(kat: string) {
  return ALL.filter(x => x.kategorie === kat);
}
