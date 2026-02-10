import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Branding Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Logo placeholder - Usuario agregará logo real */}
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">DS</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
                DigiSenda AI Tax Services
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Tu Preparador de Taxes en Español que Habla Tu Idioma
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-4">
                ¿Sientes que preparar tus impuestos es complicado? No estás solo. Ayudamos a latinos en Estados Unidos a presentar sus taxes con confianza.
              </p>
              <p className="text-base text-slate-400 mb-8">
                Atención personalizada • W2, 1099 y pequeños negocios • Sin promesas falsas de refund
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="https://forms.gle/gzgesEnYCBfgf5y37" 
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Consulta Gratis
                </Link>
                <a 
                  href="tel:8176705508" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-slate-200 hover:border-slate-300"
                >
                  <Phone className="w-5 h-5" />
                  (817) 670-5508
                </a>
              </div>
              
              <div className="mt-6 space-y-2">
                <p className="text-sm text-slate-300 font-medium">
                  ✓ Atención 100% en español · Sin compromiso · Respuesta rápida
                </p>
                <p className="text-xs text-slate-400">
                  Servicio profesional de preparación de impuestos para latinos en Estados Unidos
                </p>
              </div>
            </div>

            {/* Right Column - Human Image */}
            <div className="relative hidden lg:block">
              {/* Placeholder para imagen humana generada con IA */}
              {/* Usuario agregará la imagen en /public/hero-tax-professional.jpg */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  {/* Imagen humana se agregará aquí */}
                  <div className="bg-slate-700 rounded-xl aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-slate-400 text-sm">Imagen profesional aquí</p>
                      <p className="text-slate-500 text-xs mt-2">Tu preparador de confianza</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
