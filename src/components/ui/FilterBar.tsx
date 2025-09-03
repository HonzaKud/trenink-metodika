"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { VEKY, KATEGORIE } from "@/lib/filters"; // nebo "@/lib/constants"
import type { VekStupen } from "@/lib/types";

function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4">
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 11.94 1.16l-4.2 3.36a.75.75 0 01-.94 0l-4.2-3.36a.75.75 0 01-.08-1.18z" />
    </svg>
  );
}

export default function FilterBar() {
  const router = useRouter();
  const search = useSearchParams();

  const [vek, setVek] = useState<VekStupen | "">((search.get("vek") as VekStupen) ?? "");
  const [kat, setKat] = useState<string>(search.get("kat") ?? "");

  // ❗ Bez `any`: ověříme, že kat je v whitelistu
  useEffect(() => {
    if (kat && !(KATEGORIE as readonly string[]).includes(kat)) {
      setKat("");
    }
  }, [kat]);

  const canSearch = !!vek && !!kat;

  const submit = () => {
    if (!canSearch) return;
    router.push(`/search?vek=${encodeURIComponent(vek)}&kat=${encodeURIComponent(kat)}`);
  };

  const SelectWrap = ({ children }: { children: React.ReactNode }) => (
    <div className="relative">
      {children}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
        <ChevronDown />
      </span>
    </div>
  );

  const baseSelectCls =
    "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 pr-9 text-sm shadow-sm focus:ring-2 focus:ring-brand-500";

  return (
    <section className="rounded-2xl bg-white shadow-sm border border-brand-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Věk */}
        <div className="flex flex-col">
          <label htmlFor="vek" className="text-xs font-medium text-slate-600 mb-1">
            Věk (ročník)
          </label>
          <SelectWrap>
            <select
              id="vek"
              className={`${baseSelectCls} ${!vek ? "text-slate-400" : ""}`}
              value={vek}
              onChange={(e) => setVek(e.target.value as VekStupen | "")}
              aria-invalid={!vek}
            >
              <option value="" disabled>
                — Vyberte věk —
              </option>
              {VEKY.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </SelectWrap>
        </div>

        {/* Kategorie */}
        <div className="flex flex-col">
          <label htmlFor="kat" className="text-xs font-medium text-slate-600 mb-1">
            Kategorie
          </label>
          <SelectWrap>
            <select
              id="kat"
              className={`${baseSelectCls} ${!kat ? "text-slate-400" : ""}`}
              value={kat}
              onChange={(e) => setKat(e.target.value)}
              aria-invalid={!kat}
            >
              <option value="" disabled>
                — Vyberte kategorii —
              </option>
              {KATEGORIE.map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </SelectWrap>
        </div>

        {/* Tlačítko */}
        <div className="flex items-end">
          <button
            onClick={submit}
            disabled={!canSearch}
            className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 active:bg-brand-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Vyhledat
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {canSearch ? "Připraveno k vyhledání." : "Vyberte prosím oba filtry."}
      </p>
    </section>
  );
}
