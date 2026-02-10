import { ShieldCheck, UserCheck, Scale } from 'lucide-react';

const features = [
    {
        title: 'Te Escuchamos de Verdad',
        description: 'Cada persona tiene una historia diferente. Tomamos el tiempo para entender tu situación y encontrar las mejores opciones para ti, sin apuros.',
        icon: UserCheck
    },
    {
        title: 'Todo en Español, Todo Claro',
        description: 'Nada de términos complicados que no entiendes. Te explicamos cada documento y cada paso en tu idioma, para que te sientas seguro.',
        icon: Scale
    },
    {
        title: 'Honestidad Antes que Todo',
        description: 'No prometemos milagros ni refunds millonarios. Te decimos la verdad desde el principio para que sepas exactamente qué esperar.',
        icon: ShieldCheck
    }
];

export default function ValueProposition() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué Confiar en Nosotros?</h2>
                    <p className="text-slate-600 text-lg">
                        Sabemos que tus impuestos son importantes. Por eso trabajamos con honestidad y cercanía para que te sientas tranquilo durante todo el proceso.
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
