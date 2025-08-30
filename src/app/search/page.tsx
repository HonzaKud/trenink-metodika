import { filterData, VEKY } from "@/lib/filters";
import type { VekStupen } from "@/lib/types";
import PrvekCard from "@/components/PrvekCard";

export default function SearchPage({
  searchParams
}: {
  searchParams: { kat?: string; prvek?: string; vek?: VekStupen; q?: string };
}) {
  const vek: VekStupen = (searchParams.vek as VekStupen) ?? "nabor";
  const results = filterData({
    kategorie: searchParams.kat,
    prvek: searchParams.prvek,
    vek,
    q: searchParams.q
  });

  const vekLabel = VEKY.find((v) => v.value === vek)?.label ?? "Nábor";

  return (
    <main className="space-y-6">
      <h2 className="text-xl font-semibold">
        Výsledky {results.length ? `(${results.length})` : ""}
      </h2>
      <p className="text-sm text-gray-600">
        Věk: <b>{vekLabel}</b>
        {searchParams.kat ? <> · Kategorie: <b>{searchParams.kat}</b></> : null}
        {searchParams.prvek ? <> · Prvek: <b>{searchParams.prvek}</b></> : null}
        {searchParams.q ? <> · Hledání: <b>{searchParams.q}</b></> : null}
      </p>

      <section className="grid gap-4 md:grid-cols-2">
        {results.map((item) => (
          <PrvekCard key={item.id} item={item} vek={vek} />
        ))}
        {results.length === 0 && (
          <div className="text-sm text-gray-600">Nic jsme nenašli. Zkus upravit filtry.</div>
        )}
      </section>
    </main>
  );
}
