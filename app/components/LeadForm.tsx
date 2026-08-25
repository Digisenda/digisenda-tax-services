'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
    }
}

type Status = 'idle' | 'submitting' | 'error';

export default function LeadForm() {
    const router = useRouter();
    const [status, setStatus] = useState<Status>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('submitting');
        setErrorMessage(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        // Honeypot: campo oculto que solo un bot rellenaría.
        if ((formData.get('company') as string)?.trim()) {
            router.push('/thank-you');
            return;
        }

        const payload = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email') || undefined,
            consent: formData.get('consent') === 'on',
            company: formData.get('company'),
        };

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error('request_failed');
            }

            // Fired only once the CRM confirms the lead was received — not
            // on button click, unlike the "Schedule" event in layout.tsx's
            // global click listener, which counts intent regardless of
            // whether the submit actually succeeded.
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'generate_lead');
            }
            if (typeof window.fbq === 'function') {
                window.fbq('track', 'Lead');
            }

            router.push('/thank-you');
        } catch {
            setStatus('error');
            setErrorMessage(
                'No pudimos enviar tu solicitud. Intenta de nuevo o llámanos directamente.',
            );
        }
    }

    return (
        <section className="py-20 bg-white" id="agendar">
            <div className="container mx-auto px-4 max-w-xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
                    Agenda tu Consulta Gratuita
                </h2>
                <p className="text-slate-600 text-center mb-8">
                    Déjanos tus datos y te contactamos por WhatsApp para coordinar tu cita.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot anti-spam: oculto para personas, visible para bots */}
                    <input
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        className="absolute left-[-9999px] h-0 w-0 opacity-0"
                        aria-hidden="true"
                    />

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                            Nombre completo
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            minLength={2}
                            maxLength={200}
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Teléfono (WhatsApp)
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="(830) 000-0000"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email <span className="text-slate-400">(opcional)</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <label className="flex items-start gap-2 text-sm text-slate-600">
                        <input
                            type="checkbox"
                            name="consent"
                            required
                            className="mt-1"
                        />
                        <span>
                            Acepto que DigiSenda AI Tax Services me contacte por WhatsApp
                            para dar seguimiento a mi consulta.
                        </span>
                    </label>

                    {status === 'error' && errorMessage && (
                        <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
                    >
                        {status === 'submitting' && <Loader2 className="w-5 h-5 animate-spin" />}
                        Agendar Consulta Gratis
                    </button>
                </form>
            </div>
        </section>
    );
}
