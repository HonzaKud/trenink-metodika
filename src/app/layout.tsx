import "./globals.css";
import Logo from "@/components/ui/Logo";

export const metadata = {
  title: "Trenérská metodika – HC Rytíři Vlašim",
  description: "Rychlé vyhledávání tréninkových prvků podle ročníku a kategorie.",
  icons: {
    icon: "/brand/logo-hcrytiri.png",
    shortcut: "/brand/logo-hcrytiri.png",
    apple: "/brand/logo-hcrytiri.png",
  },
  themeColor: "#1856a5", // brand-700
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className="h-full">
      <body className="min-h-screen flex flex-col bg-ice-50 text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 shadow-md">
          <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
            <Logo size={44} />
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-6xl px-5 py-6 flex-1 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-10 border-t border-brand-100/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="mx-auto max-w-6xl px-5 py-4 text-xs text-slate-500 flex items-center justify-between flex-wrap gap-2">
            <span>© {new Date().getFullYear()} HC Rytíři Vlašim</span>
            <span>Metodika | interní nástroj</span>
            <span>Vypracoval: Jan Kudrna</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
