import { ShieldCheck, UserCheck, Scale } from 'lucide-react';

const features = [
    {
        title: 'Atención Personalizada',
        description: 'No eres un número más. Analizamos tu situación específica para maximizar tus beneficios legalmente.',
        icon: UserCheck
    },
    {
        title: 'Proceso Claro y Responsable',
        description: 'Te explicamos cada paso. Sin letras chiquitas ni sorpresas. Sabrás exactamente qué estás presentando.',
        icon: Scale
    },
    {
        title: 'Sin Promesas Falsas',
        description: 'Hablamos con la verdad. No te prometemos refunds irreales, sino el mejor resultado posible dentro de la ley.',
        icon: ShieldCheck
    }
];

export default function ValueProposition() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué elegir DigiSenda AI?</h2>
                    <p className="text-slate-600 text-lg">
                        Combinamos experiencia y honestidad para brindarte la tranquilidad que necesitas en tus impuestos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
