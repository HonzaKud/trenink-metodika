"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { listKategorie, VEKY } from "@/lib/filters";
import type { VekStupen } from "@/lib/types";

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const [vek, setVek] = useState<VekStupen>((search.get("vek") as VekStupen) ?? "nabor");
  const [kat, setKat] = useState<string>(search.get("kat") ?? "");
  const [kategorieOpts, setKategorieOpts] = useState<string[]>([]);

  useEffect(() => {
    setKategorieOpts(listKategorie());
    if (!kat) {
      const first = listKategorie()[0] ?? "";
      setKat(first);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goSearch = () => {
    const url = `/search?vek=${encodeURIComponent(vek)}&kat=${encodeURIComponent(kat)}`;
    router.push(url);
  };

  // Pokud jsme na `/search`, necháme to tak; jinak vyhledávání povede na /search
  const isSearch = pathname?.startsWith("/search");

  return (
    <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end">
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 mb-1">Věk</label>
        <select
          className="rounded-lg border p-2"
          value={vek}
          onChange={(e) => setVek(e.target.value as VekStupen)}
        >
          {VEKY.map(v => (
            <option key={v.value} value={v.value}>{v.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-xs text-gray-600 mb-1">Kategorie</label>
        <select
          className="rounded-lg border p-2"
          value={kat}
          onChange={(e) => setKat(e.target.value)}
        >
          {kategorieOpts.map(k => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
      </div>

      <button
        className="rounded-lg p-2 bg-black text-white md:self-end"
        onClick={goSearch}
      >
        Vyhledat
      </button>
    </div>
  );
}
