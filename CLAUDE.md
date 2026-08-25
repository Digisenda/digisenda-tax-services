# Memoria del proyecto — digisenda-tax-services (sitio público)

Actualizado: 2026-08-25

Landing pública de DigiSenda AI Tax Services (Next.js, previsto en `tax.digisendaai.com`). Punto de entrada de las campañas orgánicas (redes, email, WhatsApp). El CRM que gestiona los leads vive en un repo separado: `digisenda-tax-admin`.

## Antes de trabajar

Leer **`docs/PLAN_PUESTA_EN_MARCHA.md`** (tareas de producción de este repo, con estado de ejecución). El plan maestro completo (CRM + auditoría Twilio) está en `digisenda-tax-admin/docs/PLAN_PUESTA_EN_MARCHA.md` §1.1.

## Estado (verificado 2026-08-25)

- **S1-S4 completadas, en `main`/Producción desde 2026-07-28.** Landing publicable: SEO (código de Search Console leído desde `NEXT_PUBLIC_GSC_VERIFICATION`), teléfono normalizado a `tel:+18304235572`, docs obsoletas marcadas como históricas, y **formulario propio de leads** (`LeadForm`, sección `#agendar`) que reemplaza al Google Form.
- CTAs actuales en Producción: "Llamar" (`tel:+18304235572`) y "Agendar" (`#agendar`, formulario propio que postea a `/api/lead` → reenvía server-to-server a `admin`'s `/api/leads` con `LEAD_INTAKE_TOKEN`).
- **Sesión 2026-08-25 — 7 arreglos de seguridad/medición/SEO fusionados a `main` (commit de merge `55693a4`):** honeypot re-verificado en el servidor (antes `LeadForm.tsx` no reenviaba el campo `company` al backend, así que un bot que postease directo a `/api/lead` lo evadía por completo); rate limit en memoria (`app/lib/rate-limit.ts`); timeout de 8s en el fetch saliente al CRM; evento de conversión (`generate_lead`/`Lead`) movido de "al hacer clic" a "tras `res.ok`" y separado del `try/catch` de red para que un fallo de analítica después de un envío exitoso no se reporte como error al usuario (evita reenvíos que duplicarían el lead); JSON-LD ya no referencia el Google Form retirado; `/thank-you` con `noindex`; IDs de GA4/Pixel movidos a env (`NEXT_PUBLIC_GA_ID`/`NEXT_PUBLIC_META_PIXEL_ID`) con los valores actuales de producción como fallback, así que nada cambia si esas env vars no se configuran. Se corrigió además un bug real encontrado por `/code-review`: el rate limiter tomaba el *primer* salto de `x-forwarded-for`, que el cliente controla — el limiter no protegía nada. Ahora toma el último salto. Sin tocar diseño ni copy — fue acotado a esos 7 puntos a petición explícita del usuario. Detalle completo de por qué (sirvió de molde para el endpoint nuevo de Bexar en `digisenda-tax-admin`/`DigiSenda-AI-WEB`) en `digisenda-tax-admin/docs/CONTINUITY.md`, sesión 2026-08-25.
- GA4/Meta Pixel: los IDs de producción (`G-4QH3LM3PRB` / `668657552992892`) siguen siendo los valores reales, ahora como fallback si `NEXT_PUBLIC_GA_ID`/`NEXT_PUBLIC_META_PIXEL_ID` no están configurados en Vercel.
- **`main` tiene todos estos cambios.** Sin PR abierto en ningún momento — se fusionó directo a `main` a petición del usuario.

## Datos que NO se deben cambiar sin confirmar

- **Teléfono oficial:** (830) 423-5572. Es un **número Twilio** con IVR ("marca 1") que transfiere al móvil y filtra spam; la lógica vive en la cuenta Twilio, no en este repo. No sustituir por un móvil directo.
- **NO reintroducir** el botón de WhatsApp ni el de Email: fueron removidos a propósito (commit `24b4324`). Solo "Llamar" y "Agendar".
- Ignorar los números (817) 670-5508 y (940) 548-7913 en `PRODUCTION_AUDIT.md` / `SEO_VERIFICATION_CHECKLIST.md`: son documentación histórica, ya marcada como obsoleta.
- **No volver a enlazar el Google Form** como CTA principal — fue reemplazado intencionalmente por `LeadForm` (decisión del usuario, sesión 2026-07-25).

## Pendientes de acción humana

- **Verificar modo de Cloudflare para `tax.digisendaai.com`** (hallazgo de `/security-review`, 2026-08-25, confianza 0.5 — no bloqueante, pero vale confirmarlo): `app/api/lead/route.ts` ahora toma el *último* IP de `x-forwarded-for` como el real (Vercel añade la IP de conexión real al final de la cadena). Eso es correcto solo si Vercel es el primer salto que termina la conexión del visitante. Si Cloudflare está en modo proxy ("nube naranja") frente a Vercel para este dominio, el salto que Vercel observa es el de Cloudflare, no el del visitante, y el IP guardado en el `AuditLog` del CRM sería el de Cloudflare para el 100% de los envíos. Si Cloudflare está en modo proxy, cambiar a leer `CF-Connecting-IP` en vez de `x-forwarded-for`.
- Cargar el código real de Search Console en `NEXT_PUBLIC_GSC_VERIFICATION` (Vercel) — sigue pendiente, sin cambios desde 2026-07-28.

**Ya resuelto, no repetir:** ~~Generar `LEAD_INTAKE_TOKEN`/`LEAD_INTAKE_URL`~~ — confirmado configurado y verificado de extremo a extremo con un lead real desde el 2026-07-30 (ver `digisenda-tax-admin/docs/CONTINUITY.md`). ~~Credenciales OAuth de Google pendientes~~ — resuelto 2026-07-30, no bloquea ni este repo ni `admin` (ese bloqueante era de `admin`, no de este repo directamente, y ya está cerrado).

No hay una rama de trabajo activa — la última sesión fusionó directo a `main` (`claude/bexar-sales-funnel-web-tu27bp`, merge commit `55693a4`, sin PR).
