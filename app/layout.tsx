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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '668657552992892');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=668657552992892&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Meta Pixel Custom Events Tracker */}
        <Script id="meta-pixel-events" strategy="afterInteractive">
          {`
            (function() {
              'use strict';
              
              // Wait for fbq to be available
              if (typeof fbq === 'undefined') {
                console.warn('[Meta Pixel] fbq not loaded, custom events disabled');
                return;
              }

              /**
               * Track custom Meta Pixel events based on user interactions
               * Events tracked:
               * - CallNowClick: Phone/call button clicks
               * - ScheduleClick: Appointment form button clicks
               * - WhatsAppClick: WhatsApp button clicks
               */
              function trackMetaEvents(event) {
                try {
                  // Get the clicked element (handle event delegation)
                  const target = event.target;
                  if (!target) return;

                  // Find closest clickable element (a, button, or element with role)
                  const element = target.closest('a, button, [role="button"]');
                  if (!element) return;

                  // Extract data for analysis
                  const href = (element.getAttribute('href') || '').toLowerCase();
                  const text = (element.innerText || element.textContent || '').toLowerCase().trim();
                  const ariaLabel = (element.getAttribute('aria-label') || '').toLowerCase();
                  const dataAction = element.getAttribute('data-action') || '';

                  // Event 1: Phone Call Click (tel: links or "llamar" text)
                  if (
                    href.startsWith('tel:') || 
                    text.includes('llamar') || 
                    text.includes('llama') ||
                    ariaLabel.includes('llamar') ||
                    ariaLabel.includes('teléfono') ||
                    dataAction === 'call'
                  ) {
                    fbq('trackCustom', 'CallNowClick', {
                      button_text: text.substring(0, 50),
                      phone_number: href.replace('tel:', ''),
                      source_page: window.location.pathname
                    });
                    console.log('[Meta Pixel] CallNowClick tracked');
                  }

                  // Event 2: WhatsApp Click (wa.me links or "whatsapp" text)
                  else if (
                    href.includes('wa.me') || 
                    href.includes('whatsapp') || 
                    text.includes('whatsapp') ||
                    ariaLabel.includes('whatsapp') ||
                    dataAction === 'whatsapp'
                  ) {
                    fbq('trackCustom', 'WhatsAppClick', {
                      button_text: text.substring(0, 50),
                      source_page: window.location.pathname
                    });
                    console.log('[Meta Pixel] WhatsAppClick tracked');
                  }

                  // Event 3: Schedule/Appointment Click (Google Forms or "agendar" text)
                  else if (
                    href.includes('forms.gle') || 
                    href.includes('google.com/forms') ||
                    href.includes('calendly') ||
                    text.includes('agendar') || 
                    text.includes('cita') ||
                    text.includes('consulta') ||
                    text.includes('reservar') ||
                    ariaLabel.includes('agendar') ||
                    ariaLabel.includes('cita') ||
                    dataAction === 'schedule'
                  ) {
                    fbq('trackCustom', 'ScheduleClick', {
                      button_text: text.substring(0, 50),
                      form_url: href,
                      source_page: window.location.pathname
                    });
                    console.log('[Meta Pixel] ScheduleClick tracked');
                  }

                } catch (error) {
                  console.error('[Meta Pixel] Error tracking event:', error);
                }
              }

              // Attach global click listener with event delegation
              document.addEventListener('click', trackMetaEvents, true);

              // Log successful initialization
              console.log('[Meta Pixel] Custom events tracker initialized');
            })();
          `}
        </Script>
        {/* End Meta Pixel Custom Events */}

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
            "telephone": "+1-830-423-5572",
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
              "telephone": "+1-830-423-5572",
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
