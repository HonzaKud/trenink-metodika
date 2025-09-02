import type { HraCZ, VekStupen } from "@/lib/types";

export default function PrvekCard({
  item,
  vek
}: {
  item: HraCZ;
  vek: VekStupen;
}) {
  return (
    <article className="border rounded-2xl p-5 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{item.prvek}</h3>
        {item.kategorie && (
          <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
            {item.kategorie}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Metodika pro ročník {vek}</h4>
        <p className="text-sm whitespace-pre-line">
          {item.text || "—"}
        </p>
      </div>

      {typeof item.delka_min === "number" && (
        <div className="mt-3 text-sm text-gray-700">
          <span className="font-medium">Délka: </span>
          {item.delka_min} min
        </div>
      )}

      {item.pomucky?.length ? (
        <div className="mt-3">
          <h5 className="text-sm font-medium">Pomůcky</h5>
          <ul className="list-disc pl-5 text-sm">
            {item.pomucky.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.cile?.length ? (
        <div className="mt-3">
          <h5 className="text-sm font-medium">Cíle</h5>
          <ul className="list-disc pl-5 text-sm">
            {item.cile.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.video?.length ? (
        <div className="mt-3">
          <h5 className="text-sm font-medium">Video/odkazy</h5>
          <ul className="list-disc pl-5 text-sm">
            {item.video.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer" className="underline">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.aktualizovano && (
        <div className="mt-3 text-xs text-gray-500">
          Aktualizováno: {item.aktualizovano}
        </div>
      )}
    </article>
  );
}
