import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">DigiSenda AI Tax Services</h3>
                        <p className="text-sm">
                            Servicios profesionales de preparación de impuestos enfocados en la comunidad latina en Estados Unidos.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm">
                            <li>(817) 670-5508</li>
                            <li>service.tax@digisendaai.com</li>
                            <li>Texas, Estados Unidos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                            <li><Link href="/legal/communications" className="hover:text-white transition-colors">SMS Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} DigiSenda AI Tax Services. Todos los derechos reservados.</p>
                    <p className="mt-2 text-slate-500">
                        No somos una entidad gubernamental. Los resultados de reembolso varían según cada caso individual.
                    </p>
                </div>
            </div>
        </footer>
    );
}
