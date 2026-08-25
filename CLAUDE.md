# Memoria del proyecto — digisenda-tax-services (sitio público)

Actualizado: 2026-07-28

Landing pública de DigiSenda AI Tax Services (Next.js, previsto en `tax.digisendaai.com`). Punto de entrada de las campañas orgánicas (redes, email, WhatsApp). El CRM que gestiona los leads vive en un repo separado: `digisenda-tax-admin`.

## Antes de trabajar

Leer **`docs/PLAN_PUESTA_EN_MARCHA.md`** (tareas de producción de este repo, con estado de ejecución). El plan maestro completo (CRM + auditoría Twilio) está en `digisenda-tax-admin/docs/PLAN_PUESTA_EN_MARCHA.md` §1.1.

## Estado (verificado 2026-07-28)

- **S1-S4 completadas y ya en `main`/Producción.** Landing publicable: SEO (código de Search Console leído desde `NEXT_PUBLIC_GSC_VERIFICATION`), teléfono normalizado a `tel:+18304235572`, docs obsoletas marcadas como históricas, y **formulario propio de leads** (`LeadForm`, sección `#agendar`) que reemplazó al Google Form.
- CTAs actuales en Producción: "Llamar" (`tel:+18304235572`) y "Agendar" (`#agendar`, formulario propio que postea a `/api/lead` → reenvía server-to-server a `admin`'s `/api/leads` con `LEAD_INTAKE_TOKEN`).
- GA4 (`G-4QH3LM3PRB`) y Meta Pixel (`668657552992892`) siguen cableados sin cambios.
- **`main` ya tiene estos cambios y Producción en `tax.digisendaai.com` los sirve.** Confirmado vía Vercel MCP el 2026-07-28: el deploy de producción activo (`dpl_881Z4i66xfaNkwTVym5XTyevFNei`) es del commit `35a8d07` sobre `main` y está `READY`; sin errores de runtime en el rango consultado. No queda ninguna fusión pendiente de confirmación.

## Datos que NO se deben cambiar sin confirmar

- **Teléfono oficial:** (830) 423-5572. Es un **número Twilio** con IVR ("marca 1") que transfiere al móvil y filtra spam; la lógica vive en la cuenta Twilio, no en este repo. No sustituir por un móvil directo.
- **NO reintroducir** el botón de WhatsApp ni el de Email: fueron removidos a propósito (commit `24b4324`). Solo "Llamar" y "Agendar".
- Ignorar los números (817) 670-5508 y (940) 548-7913 en `PRODUCTION_AUDIT.md` / `SEO_VERIFICATION_CHECKLIST.md`: son documentación histórica, ya marcada como obsoleta.
- **No volver a enlazar el Google Form** como CTA principal — fue reemplazado intencionalmente por `LeadForm` (decisión del usuario, sesión 2026-07-25).

## Pendientes de acción humana

- **Verificar modo de Cloudflare para `tax.digisendaai.com`** (hallazgo de `/security-review`, 2026-08-25, confianza 0.5 — no bloqueante, pero vale confirmarlo): `app/api/lead/route.ts` ahora toma el *último* IP de `x-forwarded-for` como el real (Vercel añade la IP de conexión real al final de la cadena). Eso es correcto solo si Vercel es el primer salto que termina la conexión del visitante. Si Cloudflare está en modo proxy ("nube naranja") frente a Vercel para este dominio, el salto que Vercel observa es el de Cloudflare, no el del visitante, y el IP guardado en el `AuditLog` del CRM sería el de Cloudflare para el 100% de los envíos. Si Cloudflare está en modo proxy, cambiar a leer `CF-Connecting-IP` en vez de `x-forwarded-for`.
- Cargar el código real de Search Console en `NEXT_PUBLIC_GSC_VERIFICATION` (Vercel).
- Generar `LEAD_INTAKE_TOKEN` (mismo valor que en el proyecto `admin` de Vercel) y cargar `LEAD_INTAKE_URL=https://admin.tax.digisendaai.com/api/leads` — el dominio de `admin` ya está conectado, así que esto ya puede hacerse.
- Bloqueante compartido con `admin`: credenciales OAuth de Google pendientes (ver `digisenda-tax-admin/docs/CONTINUITY.md`); no bloquea este repo directamente, pero es el pendiente crítico del proyecto en conjunto.

Rama de trabajo: `claude/project-status-pending-tasks-64vgmj`.
