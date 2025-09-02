import "./globals.css";
import Logo from "@/components/ui/Logo";

export const metadata = {
  title: "Trenérská metodika – HC Rytíři Vlašim",
  description: "Rychlé vyhledávání tréninkových prvků podle ročníku a kategorie."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-ice-50 text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 shadow-md">
          <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
            <Logo size={44} />
            <nav className="hidden md:flex items-center gap-4 text-brand-100 text-sm">
              <span className="opacity-80">MVP</span>
              <span className="opacity-80">v0.1</span>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-6xl px-5 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-10 border-t border-brand-100/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="mx-auto max-w-6xl px-5 py-4 text-xs text-slate-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} HC Rytíři Vlašim</span>
            <span>Metodika | interní nástroj</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
