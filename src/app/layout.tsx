import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NutriLife - Alimentación Saludable",
  description: "Descubre recetas saludables peruanas, calcula tu IMC y aprende sobre alimentación consciente con NutriLife",
  keywords: "alimentación saludable, recetas peruanas, IMC, nutrición, comida saludable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}