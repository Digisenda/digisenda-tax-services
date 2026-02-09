import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Preparación de Taxes en Español para Latinos en EE. UU.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10">
            Expertos en W2, 1099 y pequeños negocios. Atención personalizada, rápida y confiable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://forms.gle/gzgesEnYCBfgf5y37" 
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <Calendar className="w-5 h-5" />
              Agendar Cita Ahora
            </Link>
            <a 
              href="tel:8176705508" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors text-lg border border-slate-200"
            >
              <Phone className="w-5 h-5" />
              Llamar (817) 670-5508
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Servicio privado y seguro. Hablamos tu idioma.
          </p>
        </div>
      </div>
    </section>
  );
}
