export type VekStupen = "nabor" | "1" | "2" | "3" | "4" | "5-6" | "7-8";

export interface HraCZ {
  id: string;          // např. "starty-na-signal--1"
  prvek_id: string;    // např. "starty-na-signal"
  prvek: string;       // název hry (pro select a kartu)
  kategorie: string;   // "Bruslení" | "Střelba" | "Technika hole" | "HČJ" | "Hry"
  vek: VekStupen;      // ročník/třída
  text: string;        // hlavní metodika pro daný ročník

  // volitelná metadata (zobrazíme jen pokud existují)
  pomucky?: string[];
  delka_min?: number;
  cile?: string[];
  video?: string[];
  aktualizovano?: string; // ISO datum
}
