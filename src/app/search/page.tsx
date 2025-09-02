import PrvekCard from "@/components/ui/PrvekCard";
import FilterBar from "@/components/ui/FilterBar";
import { getByVekAndKat } from "@/lib/filters";
import type { VekStupen } from "@/lib/types";

type SP = { vek?: VekStupen; kat?: string };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const { vek = "nabor", kat = "" } = await searchParams;

  const results = kat ? getByVekAndKat(vek, kat) : [];

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <FilterBar />

      <div className="text-sm text-gray-700">
        Výběr: <b>{vek}</b> → <b>{kat || "—"}</b> &nbsp;
        {results.length > 0 && (
          <span className="text-gray-500">({results.length} položek)</span>
        )}
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {results.length > 0 ? (
          results.map((item) => <PrvekCard key={item.id} item={item} vek={vek} />)
        ) : (
          <div className="text-sm text-gray-600">
            Nic jsme nenašli pro zvolený ročník a kategorii.
          </div>
        )}
      </section>
    </main>
  );
}
