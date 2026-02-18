import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    url: "https://tax.digisendaai.com",
    siteName: "DigiSenda AI Tax Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preparador de Taxes en Español | DigiSenda AI Tax Services",
    description: "Tu preparador de impuestos de confianza. Atención 100% en español.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://tax.digisendaai.com",
  },
  verification: {
    google: "google-site-verification-code", // Será configurado en Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4QH3LM3PRB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4QH3LM3PRB', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Schema.org LocalBusiness Markup */}
        <Script id="schema-local-business" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://tax.digisendaai.com/#business",
            "name": "DigiSenda AI Tax Services",
            "alternateName": "DigiSenda AI",
            "description": "Servicios profesionales de preparación de impuestos para latinos en Estados Unidos. Atención personalizada en español para W2, 1099 y pequeños negocios.",
            "url": "https://tax.digisendaai.com",
            "telephone": "+1-817-670-5508",
            "email": "service.tax@digisendaai.com",
            "image": "https://tax.digisendaai.com/hero-tax-professional.jpg",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Texas",
              "addressRegion": "TX",
              "addressCountry": "US",
              "postalCode": "78233"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.5728",
              "longitude": "-98.4764"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "United States"
              },
              {
                "@type": "State",
                "name": "Texas"
              }
            ],
            "serviceType": [
              "Tax Preparation",
              "Tax Filing",
              "Tax Consulting",
              "W2 Tax Services",
              "1099 Tax Services",
              "Small Business Tax Services",
              "ACA Tax Services"
            ],
            "knowsLanguage": [
              {
                "@type": "Language",
                "name": "Spanish",
                "alternateName": "es"
              },
              {
                "@type": "Language",
                "name": "English",
                "alternateName": "en"
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://forms.gle/gzgesEnYCBfgf5y37"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tax Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Preparación de Taxes W2",
                    "description": "Servicio de preparación de impuestos para empleados con formulario W2"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Preparación de Taxes 1099",
                    "description": "Servicio de preparación de impuestos para trabajadores independientes con formulario 1099"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Taxes para Pequeños Negocios",
                    "description": "Preparación de impuestos para pequeños negocios y Schedule C"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Taxes ACA (Affordable Care Act)",
                    "description": "Asistencia con formularios relacionados al seguro de salud (ACA)"
                  }
                }
              ]
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://forms.gle/gzgesEnYCBfgf5y37",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": "Cita de Consulta Fiscal"
              }
            }
          })}
        </Script>

        {/* Schema.org Organization Markup */}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DigiSenda AI Tax Services",
            "url": "https://tax.digisendaai.com",
            "logo": "https://tax.digisendaai.com/digisenda-logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-817-670-5508",
              "contactType": "customer service",
              "availableLanguage": ["Spanish", "English"],
              "areaServed": "US"
            }
          })}
        </Script>

        {/* Schema.org WebSite Markup */}
        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DigiSenda AI Tax Services",
            "alternateName": "DigiSenda AI",
            "url": "https://tax.digisendaai.com",
            "description": "Servicios profesionales de preparación de impuestos en español para latinos en Estados Unidos",
            "inLanguage": "es",
            "publisher": {
              "@type": "Organization",
              "name": "DigiSenda AI Tax Services"
            }
          })}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
