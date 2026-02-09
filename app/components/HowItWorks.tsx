import { MessageCircle, PhoneCall, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Contáctanos',
        description: 'Llena el formulario o envíanos un mensaje para iniciar.',
        icon: MessageCircle
    },
    {
        id: 2,
        title: 'Hablamos',
        description: 'Una breve llamada para entender tu situación fiscal.',
        icon: PhoneCall
    },
    {
        id: 3,
        title: 'Te Guiamos',
        description: 'Te decimos exactamente qué documentos necesitas.',
        icon: FileText
    },
    {
        id: 4,
        title: 'Preparamos',
        description: 'Tu declaración lista y presentada correctamente.',
        icon: CheckCircle2
    }
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Cómo Funciona</h2>
                    <p className="text-slate-600">
                        Un proceso simple de 4 pasos diseñado para tu comodidad.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative z-10">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                                    {step.id}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-0 transform translate-y-1/2"></div>
                </div>
            </div>
        </section>
    );
}
