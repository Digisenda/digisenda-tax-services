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
              {/* Logo real */}
              <Image 
                src="/digisenda-logo.svg"
                alt="DigiSenda AI Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
                DigiSenda AI Tax Services
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Presenta tus Taxes<br />
                <span className="text-blue-400">con Confianza,</span><br />
                No con Miedo
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Atención personalizada en español para W2, 1099, trabajadores independientes y ACA. 
                Te explicamos tu situación y buscamos el mejor resultado posible dentro de la ley.
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
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                  {/* Imagen profesional real */}
                  <Image 
                    src="/hero-tax-professional.jpg"
                    alt="Preparador de impuestos profesional en español - DigiSenda AI"
                    width={800}
                    height={800}
                    className="rounded-xl object-cover w-full h-full shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
