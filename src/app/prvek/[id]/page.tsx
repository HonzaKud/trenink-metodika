// src/app/prvek/[id]/page.tsx

type PageProps = {
  params: { id: string };
  searchParams?: { vek?: string };
};

export default function PrvekDetailPage({ params, searchParams }: PageProps) {
  const id = decodeURIComponent(params.id);
  const vek = searchParams?.vek ?? "nabor";

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Detail prvku</h1>
      <p className="text-sm text-gray-600">
        ID: <b>{id}</b> · Věk: <b>{vek}</b>
      </p>

      <div className="rounded-xl border p-4">
        <p>
          Zde bude detailová stránka prvku <b>{id}</b>. Napojíme na data po
          dokončení API/datového modulu.
        </p>
      </div>

      <a href="/search" className="inline-block text-blue-600 hover:underline">
        ← Zpět na vyhledávání
      </a>
    </main>
  );
}
