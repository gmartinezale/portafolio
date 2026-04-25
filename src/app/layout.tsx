import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portafolio Alexis González",
  description: "Portafolio personal de Alexis González, Desarrollador Full Stack con más de 12 años de experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080b12] min-h-screen`}
      >
        <Providers>
          {children}
          <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800/50 mt-16">
            <p>© 2026 Alexis González. Todos los derechos reservados.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
