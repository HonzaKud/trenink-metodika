// src/app/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import FilterBar from "@/components/ui/FilterBar";

const SPONSORS = [
  { src: "/partners/SBlogo.png", alt: "Logo Sponzora – SB" },
  { src: "/partners/Vlasimlogo.png", alt: "Logo Sponzora – AKZP Vlašim" },
  { src: "/partners/domeceklogo.png", alt: "Logo Sponzora – Domeček Vlašim" },
] as const;

export default function HomePage() {
  return (
    <main className="space-y-8">
      {/* Filtry */}
      <Suspense fallback={<div className="text-sm text-gray-500">Načítám filtry…</div>}>
        <FilterBar />
      </Suspense>

      {/* Info text (vycentrovaný) */}
      <p className="text-sm text-gray-600 text-center">
        Vyber parametry a klikni na <b>Vyhledat</b>. Výsledky se zobrazí na stránce „Search“.
      </p>

      {/* Velké klubové logo uprostřed s pop-in animací */}
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

      {/* Partner bar */}
      <section aria-labelledby="partners-heading" className="mt-2">
        <h2
          id="partners-heading"
          className="text-sm md:text-base font-semibold tracking-wide text-slate-700 text-center mb-3"
        >
          Podporují nás
        </h2>

        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-items-center">
          {SPONSORS.map((s) => (
            <div
              key={s.src}
              className="w-full rounded-xl border border-brand-100 bg-white px-4 py-3 shadow-sm flex items-center justify-center"
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={220}
                height={80}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
