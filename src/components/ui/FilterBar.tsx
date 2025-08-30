"use client";

import { useMemo, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { listKategorie, listPrvkyByKategorie, VEKY } from "@/lib/filters";
import type { VekStupen } from "@/lib/types";

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  // stav z URL
  const [kategorie, setKategorie] = useState<string>(search.get("kat") ?? "Hry");
  const [prvek, setPrvek] = useState<string>(search.get("prvek") ?? "");
  const [vek, setVek] = useState<VekStupen>((search.get("vek") as VekStupen) ?? "nabor");
  const [q, setQ] = useState<string>(search.get("q") ?? "");

  const kategorieOpts = useMemo(() => listKategorie(), []);
  const prvekOpts = useMemo(() => listPrvkyByKategorie(kategorie), [kategorie]);

  useEffect(() => {
    // reset prvek při změně kategorie
    if (prvek && !prvekOpts.includes(prvek)) setPrvek("");
  }, [kategorie, prvekOpts]); // eslint-disable-line

  const goSearch = () => {
    const params = new URLSearchParams();
    if (kategorie) params.set("kat", kategorie);
    if (prvek) params.set("prvek", prvek);
    if (vek) params.set("vek", vek);
    if (q) params.set("q", q);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-3">
      <select
        className="border rounded-lg p-2"
        value={kategorie}
        onChange={(e) => setKategorie(e.target.value)}
      >
        {kategorieOpts.map((k) => (
          <option key={k} value={k}>{k}</option>
        ))}
      </select>

      <select
        className="border rounded-lg p-2"
        value={prvek}
        onChange={(e) => setPrvek(e.target.value)}
      >
        <option value="">Všechny prvky</option>
        {prvekOpts.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      <select
        className="border rounded-lg p-2"
        value={vek}
        onChange={(e) => setVek(e.target.value as VekStupen)}
      >
        {VEKY.map((v) => (
          <option key={v.value} value={v.value}>{v.label}</option>
        ))}
      </select>

      <input
        className="border rounded-lg p-2"
        placeholder="Hledat (text)…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <button
        className="rounded-lg p-2 bg-black text-white"
        onClick={goSearch}
      >
        Vyhledat
      </button>
    </div>
  );
}
