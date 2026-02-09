import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Preparador de Taxes en Español | DigiSenda AI Tax Services",
  description: "Servicios profesionales de preparación de impuestos para latinos en Estados Unidos. Atención personalizada W2, 1099 y pequeños negocios.",
  keywords: "preparador de taxes en español, preparación de impuestos latinos, ayuda con taxes, W2, 1099, DigiSenda AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
