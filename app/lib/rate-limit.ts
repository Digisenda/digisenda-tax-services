// In-memory, per-instance rate limiter. Not distributed — on Vercel each
// serverless instance has its own counters, so this is a best-effort spam
// brake alongside the honeypot, not a hard guarantee.
const hits = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function isRateLimited(key: string): boolean {
    const now = Date.now();
    const entry = hits.get(key);

    if (!entry || now > entry.resetAt) {
        hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
        return false;
    }

    entry.count += 1;
    return entry.count > MAX_REQUESTS;
}
