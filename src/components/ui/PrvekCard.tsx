import type { PrvekZaznam, VekStupen } from "@/lib/types";

export default function PrvekCard({
  item,
  vek
}: {
  item: PrvekZaznam;
  vek: VekStupen;
}) {
  const textProVek = item.obsah?.[vek] ?? "";

  return (
    <article className="border rounded-2xl p-5 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{item.prvek}</h3>
        <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
          {item.kategorie}
        </span>
      </div>

      {item.popis && <p className="text-sm text-gray-700 mt-1">{item.popis}</p>}

      {/* JEN text pro vybraný věk */}
      <div className="mt-4">
        <h4 className="font-medium">Metodika pro vybraný věk</h4>
        <p className="text-sm whitespace-pre-line">
          {textProVek || "—"}
        </p>
      </div>

      {/* (Volitelné) Jednotná psychosomatika */}
      {item.psychosomatika?.trim() && (
        <div className="mt-4">
          <h4 className="font-medium">Psychosomatická návaznost</h4>
          <p className="text-sm whitespace-pre-line">{item.psychosomatika}</p>
        </div>
      )}
    </article>
  );
}
