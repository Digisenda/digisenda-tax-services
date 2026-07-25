import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(body: unknown): body is {
    name: string;
    phone: string;
    email?: string;
    consent: true;
} {
    if (!body || typeof body !== 'object') return false;
    const b = body as Record<string, unknown>;

    if (typeof b.name !== 'string' || b.name.trim().length < 2 || b.name.length > 200) {
        return false;
    }

    if (typeof b.phone !== 'string' || b.phone.replace(/\D/g, '').length < 10) {
        return false;
    }

    if (b.email !== undefined && (typeof b.email !== 'string' || !EMAIL_RE.test(b.email))) {
        return false;
    }

    if (b.consent !== true) {
        return false;
    }

    return true;
}

export async function POST(request: Request) {
    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    if (!isValidPayload(body)) {
        return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const intakeUrl = process.env.LEAD_INTAKE_URL;
    const intakeToken = process.env.LEAD_INTAKE_TOKEN;

    if (!intakeUrl || !intakeToken) {
        console.error('[lead] LEAD_INTAKE_URL/LEAD_INTAKE_TOKEN not configured');
        return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    try {
        const res = await fetch(intakeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-lead-intake-token': intakeToken,
            },
            body: JSON.stringify({
                name: body.name,
                phone: body.phone,
                email: body.email,
                consent: true,
                consentChannel: 'WHATSAPP',
            }),
        });

        if (!res.ok) {
            console.error('[lead] intake responded with', res.status);
            return NextResponse.json({ error: 'Intake failed' }, { status: 502 });
        }
    } catch (error) {
        console.error('[lead] failed to reach intake endpoint', error);
        return NextResponse.json({ error: 'Intake unreachable' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
}
