import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Preparador de Taxes en Español | DigiSenda AI Tax Services",
  description: "Tu preparador de impuestos de confianza en español. Ayudamos a latinos en Estados Unidos con W2, 1099 y pequeños negocios. Atención personalizada sin promesas falsas de refund.",
  keywords: "preparador de taxes en español, preparación de impuestos para latinos, ayuda con taxes en español, servicios de impuestos, W2, 1099, small business taxes, DigiSenda AI, preparador de impuestos Estados Unidos, tax preparation español",
  openGraph: {
    title: "Preparador de Taxes en Español | DigiSenda AI Tax Services",
    description: "Ayudamos a latinos en Estados Unidos a presentar sus impuestos con confianza. Atención 100% en español, sin promesas falsas.",
    locale: "es_US",
    type: "website",
  },
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
