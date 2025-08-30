import "./globals.css";

export const metadata = {
  title: "Trenérská metodika – MVP",
  description: "Rychlé vyhledávání herních prvků podle věku a kategorie."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl p-5">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">Trenérská metodika</h1>
            <p className="text-sm text-gray-600">MVP – filtrování podle věku, kategorie a prvku</p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
