export type VekStupen =
  | "nabor"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5-6"
  | "7-8";

export interface PrvekZaznam {
  id: string;                // slug/ID pro routing
  kategorie: string;         // např. "Hry"
  prvek: string;             // např. "Pohybové hry na ledě"
  popis: string;             // krátký popis prvku
  psychosomatika: string;    // text z „Psychosomatická návaznost“
  obsah: Record<VekStupen, string>; // texty pro jednotlivé ročníky
}
