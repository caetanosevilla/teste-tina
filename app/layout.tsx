import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = { title: "Maré — Agenda online para clínicas" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <>
          <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <span className="text-xl font-bold tracking-tight text-teal-800">maré</span>
            <a href="#contato" className="text-sm font-semibold text-slate-700 hover:text-teal-800">Fale com a gente</a>
          </header>
          {children}
          <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">© 2026 Maré · marca fictícia para teste</footer>
        </>
      </body>
    </html>
  );
}
