import type { HraCZ, VekStupen } from "@/lib/types";

export default function PrvekCard({
  item,
  vek
}: {
  item: HraCZ;
  vek: VekStupen;
}) {
  return (
    <article className="border border-brand-100 rounded-2xl p-5 bg-white shadow-sm hover:border-brand-300 hover:shadow-md transition-colors duration-200">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{item.prvek}</h3>
        {item.kategorie && (
          <span className="shrink-0 rounded-md border border-brand-200 bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
            {item.kategorie}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h4 className="font-medium text-slate-800">Metodika pro ročník {vek}</h4>
        <p className="text-sm whitespace-pre-line text-slate-700">
          {item.text || "—"}
        </p>
      </div>

      {typeof item.delka_min === "number" && (
        <div className="mt-3 text-sm text-slate-700">
          <span className="font-medium">Délka: </span>
          {item.delka_min} min
        </div>
      )}

      {item.pomucky?.length ? (
        <div className="mt-3">
          <h5 className="text-sm font-medium text-slate-800">Pomůcky</h5>
          <ul className="list-disc pl-5 text-sm text-slate-700">
            {item.pomucky.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.cile?.length ? (
        <div className="mt-3">
          <h5 className="text-sm font-medium text-slate-800">Cíle</h5>
          <ul className="list-disc pl-5 text-sm text-slate-700">
            {item.cile.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.video?.length ? (
        <div className="mt-3">
          <h5 className="text-sm font-medium text-slate-800">Video/odkazy</h5>
          <ul className="list-disc pl-5 text-sm">
            {item.video.map((url) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-brand-700 hover:text-brand-800"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.aktualizovano && (
        <div className="mt-3 text-xs text-slate-500">
          Aktualizováno: {item.aktualizovano}
        </div>
      )}
    </article>
  );
}
