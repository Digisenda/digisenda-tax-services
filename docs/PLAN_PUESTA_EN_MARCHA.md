# Plan de Puesta en Marcha — Sitio público (`digisenda-tax-services`)

**Fecha:** 2026-07-23
**Contexto:** Parte del plan maestro DigiSenda (el documento completo, incluyendo el CRM y la auditoría Twilio, vive en el repo `digisenda-tax-admin` → `docs/PLAN_PUESTA_EN_MARCHA.md`). Este archivo cubre solo las tareas de este repositorio.

> Para la **sesión de implementación**. Ejecutar en orden. Cada tarea trae archivo y criterio de aceptación.

---

## Estado

Landing de una página, funcional y casi lista: contenido real, SEO, páginas legales A2P, sitemap/robots, GA4 (`G-4QH3LM3PRB`) y Meta Pixel (`668657552992892`) cableados. **Publicable tras 3 arreglos menores.**

El botón "Llámanos" apunta al número Twilio (830) 423-5572, que en la cuenta Twilio contesta con un IVR ("marca 1") y transfiere al móvil filtrando spam. Ese flujo **funciona** y no requiere código aquí.

---

## Tareas

### S2 — Normalizar el enlace telefónico 🟡
- **Archivos:** `app/components/Hero.tsx`, `app/components/Contact.tsx`
- **Cambio:** `href="tel:8304235572"` → `href="tel:+18304235572"`. Mantener el texto visible "(830) 423-5572".
- **Motivo:** en móvil ya funciona; el prefijo `+1` lo hace fiable también desde escritorio y normaliza el formato. Marca al mismo número Twilio (no cambia el flujo IVR).
- **Aceptación:** clic en "Llamar" inicia la llamada en móvil y escritorio y entra al IVR de Twilio.

### S1 — Verificación de Google Search Console ✅ resuelto (por decisión de arquitectura, no por código)
- **Archivo:** `app/layout.tsx` (`metadata.verification.google`) — sigue con el placeholder `"google-site-verification-code"` sin reemplazar, y **no hace falta reemplazarlo**.
- **Decisión (2026-07-28):** DigiSenda AI registra `digisendaai.com` como **propiedad de Dominio** en Search Console (verificación por DNS a nivel de dominio raíz), no como propiedades de "Prefijo de URL" por sitio. Una propiedad de Dominio cubre automáticamente **todos los subdominios y protocolos**, incluido `tax.digisendaai.com`, sin necesidad de un meta-tag/código de verificación por sitio.
- **Confirmado con datos reales:** en Search Console, `https://tax.digisendaai.com/sitemap.xml` ya aparece enviado (18 feb 2026) y con estado **Correcto** (5 páginas descubiertas), conviviendo con el sitemap de `https://digisendaai.com/sitemap.xml` bajo la misma vista — exactamente el comportamiento esperado de una propiedad de Dominio.
- **Conclusión:** `NEXT_PUBLIC_GSC_VERIFICATION`/el meta-tag HTML es un mecanismo alternativo redundante en este caso. No es bloqueante y no hace falta completarlo salvo que se decida crear una propiedad de Prefijo de URL independiente para `tax.digisendaai.com` (no recomendado — ver razonamiento en `digisenda-ai-web` y en `digisenda-tax-admin/docs/CONTINUITY.md`).

### S3 — Sincronizar documentación obsoleta 🟡
- **Archivos:** `PRODUCTION_AUDIT.md`, `SEO_VERIFICATION_CHECKLIST.md`
- **Problema:** citan teléfono (817) 670-5508 y WhatsApp Twilio (940) 548-7913 que ya no aplican (el sitio usa 830-423-5572 y el botón WhatsApp fue removido en commit `24b4324`).
- **Cambio:** actualizar al estado real o marcar esas secciones como históricas.
- **Aceptación:** no quedan datos de contacto contradictorios en el repo.

### S4 — Origen de leads (coordinar con Fase 3 del CRM) 🟡
- **Hoy:** todos los leads van a un Google Form externo (`forms.gle/gzgesEnYCBfgf5y37`), fuera del CRM y del control de consentimiento.
- **Opción A (mínima):** mantener el Google Form y documentar la importación manual al CRM.
- **Opción B (recomendada):** formulario propio que postee a un endpoint seguro del CRM (`LEAD_INTAKE_URL` + `LEAD_INTAKE_TOKEN`), creando `Contact` + `Consent`. Definir junto con la Fase 3 del plan maestro.
- **Aceptación:** un lead enviado desde el sitio queda registrado de forma controlada (con consentimiento) donde el equipo lo gestione.

---

## Verificación final (este repo)
- `npm run build` y `npm run lint` verdes.
- GA4 y Meta Pixel disparan `PageView`, `Contact` (clic llamar) y `Schedule` (clic agendar) — comprobar con Meta Pixel Helper.
- DNS `tax.digisendaai.com` con HTTPS.
- Páginas legales coherentes con lo que realmente se recopila.

## Variables de entorno
- `NEXT_PUBLIC_GSC_VERIFICATION` (si se externaliza S1)
- `LEAD_INTAKE_URL`, `LEAD_INTAKE_TOKEN` (si se implementa la Opción B de S4)
