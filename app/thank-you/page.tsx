import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-lg text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full text-green-600">
                        <CheckCircle className="w-16 h-16" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">¡Gracias por contactarnos!</h1>
                <p className="text-slate-600 text-lg mb-8">
                    Hemos recibido tu solicitud. Un especialista de DigiSenda AI Tax Services se pondrá en contacto contigo muy pronto para guiarte en tu proceso.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
}
