import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <section className="py-20 bg-blue-600 text-white" id="contacto">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Presentar tus Taxes sin Estrés?</h2>
                <p className="text-blue-100 text-lg mb-3 max-w-2xl mx-auto">
                    Contáctanos hoy mismo y recibe ayuda de tu preparador de impuestos en español de confianza.
                </p>
                <p className="text-blue-200 text-sm mb-12 max-w-xl mx-auto">
                    Ayudamos a latinos en Estados Unidos con W2, 1099 y pequeños negocios • Atención rápida y personalizada
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <a
                        href="tel:8176705508"
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl transition-all border border-white/20 flex flex-col items-center"
                    >
                        <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg mb-1">Llámanos</span>
                        <span className="text-blue-100 text-sm mb-2">(817) 670-5508</span>
                        <span className="text-blue-200 text-xs">Respuesta inmediata</span>
                    </a>

                    <a
                        href="https://wa.me/19405487913"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl transition-all border border-white/20 flex flex-col items-center"
                    >
                        <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg mb-1">WhatsApp</span>
                        <span className="text-blue-100 text-sm mb-2">Envía un mensaje</span>
                        <span className="text-blue-200 text-xs">100% en español</span>
                    </a>

                    <a
                        href="mailto:service.tax@digisendaai.com"
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-xl transition-all border border-white/20 flex flex-col items-center"
                    >
                        <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-lg mb-1">Email</span>
                        <span className="text-blue-100 text-sm mb-2">service.tax@digisendaai.com</span>
                        <span className="text-blue-200 text-xs">Te respondemos rápido</span>
                    </a>

                    <Link
                        href="https://forms.gle/gzgesEnYCBfgf5y37"
                        target="_blank"
                        className="group bg-white text-blue-600 hover:bg-blue-50 p-6 rounded-xl transition-all shadow-lg flex flex-col items-center transform hover:-translate-y-1"
                    >
                        <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-lg mb-1">Agendar Cita</span>
                        <span className="text-slate-600 text-sm mb-2">Consulta gratuita</span>
                        <span className="text-slate-500 text-xs">Sin compromiso</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
