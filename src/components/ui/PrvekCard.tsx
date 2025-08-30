import type { PrvekZaznam, VekStupen } from "@/lib/types";

export default function PrvekCard({
  item,
  vek
}: {
  item: PrvekZaznam;
  vek: VekStupen;
}) {
  return (
    <article className="border rounded-2xl p-5 bg-white shadow-sm">
      <h3 className="text-lg font-semibold">{item.prvek}</h3>
      <p className="text-sm text-gray-600 mt-1">{item.popis}</p>

      <div className="mt-4">
        <h4 className="font-medium">Psychosomatická návaznost</h4>
        <p className="text-sm whitespace-pre-line">{item.psychosomatika}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Doporučení pro vybraný věk</h4>
        <p className="text-sm whitespace-pre-line">
          {item.obsah[vek] || "—"}
        </p>
      </div>
    </article>
  );
}
