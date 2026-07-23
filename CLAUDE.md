# Memoria del proyecto — digisenda-tax-services (sitio público)

Actualizado: 2026-07-23

Landing pública de DigiSenda AI Tax Services (Next.js, previsto en `tax.digisendaai.com`). Punto de entrada de las campañas orgánicas (redes, email, WhatsApp). El CRM que gestiona los leads vive en un repo separado: `digisenda-tax-admin`.

## Antes de trabajar

Leer **`docs/PLAN_PUESTA_EN_MARCHA.md`** (tareas de producción de este repo, S1–S4, con criterios de aceptación). El plan maestro completo (CRM + auditoría Twilio) está en `digisenda-tax-admin/docs/PLAN_PUESTA_EN_MARCHA.md`.

## Estado (auditoría 2026-07-23)

- Landing funcional: contenido real, SEO, legales A2P, sitemap/robots, GA4 (`G-4QH3LM3PRB`) y Meta Pixel (`668657552992892`) cableados. **Publicable tras arreglos menores S1–S3.**
- CTAs actuales: "Llamar" (`tel:`) y "Agendar" (Google Form `forms.gle/gzgesEnYCBfgf5y37`).

## Datos que NO se deben cambiar sin confirmar

- **Teléfono oficial:** (830) 423-5572. Es un **número Twilio** con IVR ("marca 1") que transfiere al móvil y filtra spam; la lógica vive en la cuenta Twilio, no en este repo. No sustituir por un móvil directo.
- **NO reintroducir** el botón de WhatsApp ni el de Email: fueron removidos a propósito (commit `24b4324`). Solo "Llamar" y "Agendar".
- Ignorar los números (817) 670-5508 y (940) 548-7913 que aparecen en `PRODUCTION_AUDIT.md` / `SEO_VERIFICATION_CHECKLIST.md`: son **documentación obsoleta** (tarea S3 = corregirla).

## Pendientes clave

- **S1:** reemplazar el placeholder de verificación de Search Console en `app/layout.tsx`.
- **S2:** normalizar el enlace a `tel:+18304235572`.
- **S3:** sincronizar la documentación obsoleta.
- **S4:** decidir origen de leads (Google Form vs. formulario propio que postee al CRM).

Rama de trabajo: `claude/audit-production-readiness-qyrjto`.
