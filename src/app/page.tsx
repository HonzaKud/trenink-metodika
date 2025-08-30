// src/app/page.tsx
import { Suspense } from "react";
import FilterBar from "@/components/ui/FilterBar";

export default function HomePage() {
  return (
    <main className="space-y-6">
      <Suspense fallback={<div className="text-sm text-gray-500">Načítám filtry…</div>}>
        <FilterBar />
      </Suspense>

      <p className="text-sm text-gray-600">
        Vyber parametry a klikni na <b>Vyhledat</b>. Výsledky se zobrazí na stránce „Search“.
      </p>
    </main>
  );
}
