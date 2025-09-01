export type VekStupen = "nabor" | "1" | "2" | "3" | "4" | "5-6" | "7-8";

export interface PrvekZaznam {
  id: string;
  kategorie: string;   // "Hry" | "Bruslení" | "Střelba" | ...
  prvek: string;       // název prvku
  popis: string;       // krátký popis
  psychosomatika?: string; // volitelně – jednotný text
  obsah: Partial<Record<VekStupen, string>>; // text pro každý věk
}
