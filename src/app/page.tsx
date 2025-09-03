// src/app/page.tsx
import { Suspense } from "react";
import Image from "next/image";
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

      {/* Velké logo uprostřed, jen s pop-in animací */}
      <div className="flex justify-center py-10">
        <Image
          src="/brand/logo-hcrytiri.png"
          alt="HC Rytíři Vlašim – logo"
          width={420}
          height={420}
          priority
          className="w-64 md:w-80 lg:w-[420px] h-auto select-none animate-pop-in"
        />
      </div>
    </main>
  );
}
