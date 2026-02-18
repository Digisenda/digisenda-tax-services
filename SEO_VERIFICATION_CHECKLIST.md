# ✅ SEO Verification Checklist - DigiSenda AI Tax Services

## 🎯 Objetivo

Este documento contiene una lista de verificación completa para validar que todos los elementos de SEO local están correctamente implementados en `https://tax.digisendaai.com`.

---

## 📊 Estado Actual de Implementación

### ✅ Completado en el Código

| Elemento | Estado | Ubicación | Validado |
|----------|--------|-----------|----------|
| Google Analytics 4 | ✅ Implementado | `app/layout.tsx` líneas 51-65 | ⏳ Pendiente validación en producción |
| Schema.org LocalBusiness | ✅ Implementado | `app/layout.tsx` líneas 67-195 | ⏳ Pendiente Rich Results Test |
| Schema.org Organization | ✅ Implementado | `app/layout.tsx` líneas 197-213 | ⏳ Pendiente Rich Results Test |
| Schema.org WebSite | ✅ Implementado | `app/layout.tsx` líneas 215-230 | ⏳ Pendiente Rich Results Test |
| Meta Tags SEO | ✅ Implementado | `app/layout.tsx` líneas 8-41 | ⏳ Pendiente validación |
| Open Graph Tags | ✅ Implementado | `app/layout.tsx` líneas 12-19 | ⏳ Pendiente validación |
| Twitter Card | ✅ Implementado | `app/layout.tsx` líneas 20-24 | ⏳ Pendiente validación |
| Sitemap.xml | ✅ Implementado | `app/sitemap.ts` | ⏳ Pendiente indexación |
| Robots.txt | ✅ Implementado | `app/robots.ts` | ⏳ Pendiente validación |
| Lang="es" | ✅ Implementado | `app/layout.tsx` línea 49 | ✅ Correcto |
| Canonical URL | ✅ Implementado | `app/layout.tsx` líneas 35-37 | ⏳ Pendiente validación |

### 🔴 Pendiente de Configuración Externa

| Elemento | Estado | Acción Requerida | Prioridad |
|----------|--------|------------------|-----------|
| Código de Verificación GSC | ❌ Pendiente | Obtener de Google Search Console | 🔴 Alta |
| Envío de Sitemap a GSC | ❌ Pendiente | Enviar `sitemap.xml` manualmente | 🔴 Alta |
| Google Business Profile | ❌ Pendiente | Crear perfil de negocio | 🟡 Media |
| Vinculación GA4 ↔ GSC | ❌ Pendiente | Vincular cuentas | 🟡 Media |
| Meta Pixel (opcional) | ❌ Pendiente | Decidir si implementar | ⚪ Baja |

---

## 🔍 Validación Paso a Paso

### 1. Validación Local (Pre-Deploy)

#### 1.1 Build Exitoso
```bash
cd /home/user/webapp
npm run build
```

**Criterios de éxito**:
- ✅ Build completa sin errores
- ✅ Generación de `sitemap.xml` exitosa
- ✅ Generación de `robots.txt` exitosa
- ✅ Sin warnings de TypeScript

#### 1.2 Verificar Schema Markup Localmente

Inspeccionar `http://localhost:3000` después de `npm run dev`:

1. Abrir DevTools → **Network** → recargar página
2. Ver HTML source
3. Buscar:
   ```html
   <script type="application/ld+json">
   ```
4. Verificar que aparezcan **3 scripts JSON-LD**:
   - LocalBusiness
   - Organization
   - WebSite

**Comando de verificación rápida**:
```bash
curl http://localhost:3000 | grep -o 'application/ld+json' | wc -l
# Debe devolver: 3
```

---

### 2. Validación en Staging/Producción

#### 2.1 Google Analytics 4

**URL de validación**: `https://tax.digisendaai.com`

**Pasos**:
1. Abrir DevTools → **Console**
2. Escribir:
   ```javascript
   window.dataLayer
   ```
3. Verificar que aparezca el array de Google Analytics

**Alternativa**: Usar extensión [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger)

**Criterios de éxito**:
- ✅ `gtag` está definido
- ✅ ID de medición: `G-4QH3LM3PRB`
- ✅ Aparece evento `page_view` en tiempo real en GA4 dashboard

#### 2.2 Rich Results Test

**URL**: https://search.google.com/test/rich-results

**Pasos**:
1. Ingresar: `https://tax.digisendaai.com`
2. Click en **"Test URL"**
3. Esperar análisis (10-30 segundos)

**Criterios de éxito**:
- ✅ **LocalBusiness** detectado
  - Nombre: DigiSenda AI Tax Services
  - Teléfono: +1-817-670-5508
  - Dirección: Texas, TX 78233, US
  - Horarios: Lun-Vie 9:00-18:00
- ✅ **Organization** detectado
  - Logo: `/digisenda-logo.svg`
  - ContactPoint en español e inglés
- ✅ **WebSite** detectado
  - Idioma: español (es)

**Errores comunes a ignorar**:
- ⚠️ "Missing field 'image'" en algunos elementos (opcional)
- ⚠️ "Missing field 'priceRange'" (ya está incluido)

#### 2.3 Open Graph Validator

**URL**: https://www.opengraph.xyz/

**Pasos**:
1. Ingresar: `https://tax.digisendaai.com`
2. Click en **"Validate"**

**Criterios de éxito**:
- ✅ Título: "Preparador de Taxes en Español | DigiSenda AI Tax Services"
- ✅ Descripción visible
- ✅ Locale: `es_US`
- ✅ Type: `website`
- ✅ URL: `https://tax.digisendaai.com`

#### 2.4 Sitemap Accesible

**Verificar URLs**:
1. `https://tax.digisendaai.com/sitemap.xml`
2. `https://tax.digisendaai.com/robots.txt`

**Pasos**:
```bash
# Sitemap
curl -I https://tax.digisendaai.com/sitemap.xml
# Debe devolver: HTTP/2 200

# Robots.txt
curl https://tax.digisendaai.com/robots.txt
# Debe contener: Sitemap: https://tax.digisendaai.com/sitemap.xml
```

**Criterios de éxito (Sitemap)**:
- ✅ Status 200 OK
- ✅ Content-Type: `application/xml`
- ✅ Contiene 5 URLs:
  - `/`
  - `/legal/privacy`
  - `/legal/terms`
  - `/legal/disclaimer`
  - `/legal/communications`

**Criterios de éxito (Robots.txt)**:
- ✅ Status 200 OK
- ✅ Contiene `User-agent: *`
- ✅ Contiene `Allow: /`
- ✅ Contiene referencia al sitemap

#### 2.5 PageSpeed Insights

**URL**: https://pagespeed.web.dev/

**Pasos**:
1. Analizar: `https://tax.digisendaai.com`
2. Revisar ambas pestañas: **Mobile** y **Desktop**

**Criterios de éxito**:
- ✅ Performance Score: **90+** (verde)
- ✅ Accessibility Score: **95+** (verde)
- ✅ Best Practices Score: **95+** (verde)
- ✅ SEO Score: **100** (verde)

**Core Web Vitals** (críticos):
- ✅ LCP (Largest Contentful Paint): < 2.5s
- ✅ INP (Interaction to Next Paint): < 200ms
- ✅ CLS (Cumulative Layout Shift): < 0.1

**Si hay problemas**:
- ❌ LCP > 2.5s → Optimizar imagen del hero (`/hero-tax-professional.jpg`)
- ❌ CLS > 0.1 → Verificar que el logo tenga dimensiones fijas (`width` y `height`)

---

### 3. Validación de Keywords SEO

#### 3.1 Keywords Primarias

Verificar que estas keywords aparezcan en el HTML:

| Keyword | Ubicación Esperada | Verificado |
|---------|-------------------|------------|
| preparador de taxes en español | H1, meta description | ⏳ |
| preparación de impuestos para latinos | Meta description | ⏳ |
| servicios de impuestos | Body text | ⏳ |
| W2, 1099 | Hero subtitle, Value Proposition | ⏳ |
| pequeños negocios | Hero subtitle | ⏳ |
| DigiSenda AI | Title, branding | ⏳ |
| Texas | Schema markup (address) | ⏳ |

**Comando de verificación**:
```bash
curl -s https://tax.digisendaai.com | grep -i "preparador de taxes en español"
# Debe encontrar al menos 2 coincidencias
```

#### 3.2 Densidad de Keywords

**Herramienta recomendada**: [SEO Review Tools - Keyword Density Checker](https://www.seoreviewtools.com/keyword-density-checker/)

**Criterios de éxito**:
- ✅ "taxes": 1.5% - 2.5%
- ✅ "español": 1% - 2%
- ✅ "impuestos": 1% - 2%
- ✅ "DigiSenda": 0.5% - 1%

**⚠️ Evitar**: keyword stuffing (> 3% cualquier keyword)

---

### 4. Validación de Contact Information

#### 4.1 Teléfono Visible

**Elementos a verificar**:
1. Hero section: debe mostrar `(817) 670-5508`
2. Contact section: debe mostrar `(817) 670-5508`
3. Footer: debe mostrar `(817) 670-5508`

**Schema markup**:
```json
"telephone": "+1-817-670-5508"
```

#### 4.2 WhatsApp (Twilio)

**Verificar link en Contact section**:
```html
<a href="https://wa.me/19405487913">
  WhatsApp
</a>
```

**⚠️ IMPORTANTE**: El número NO debe mostrarse públicamente, solo el link

**Criterios de éxito**:
- ✅ Link funciona al hacer click
- ✅ Abre WhatsApp con número +1 (940) 548-7913
- ✅ Número NO visible en el HTML público

#### 4.3 Email

**Verificar presencia**:
- Contact section: `service.tax@digisendaai.com`
- Schema markup: `"email": "service.tax@digisendaai.com"`
- Footer: `service.tax@digisendaai.com`

#### 4.4 Formulario de Agendar Cita

**URL del formulario**: `https://forms.gle/gzgesEnYCBfgf5y37`

**Verificar**:
- ✅ Link en Hero section (botón "Agenda tu Consulta Gratuita")
- ✅ Link en Contact section
- ✅ Formulario abre correctamente
- ✅ Formulario es responsive (móvil + desktop)

---

### 5. Validación de Accesibilidad

#### 5.1 WAVE Tool

**URL**: https://wave.webaim.org/

**Pasos**:
1. Analizar: `https://tax.digisendaai.com`
2. Revisar reporte

**Criterios de éxito**:
- ✅ 0 errores (errors)
- ✅ < 5 alertas (alerts) menores
- ✅ Estructura de headings correcta (H1 → H2 → H3)
- ✅ Todos los links tienen texto descriptivo
- ✅ Todas las imágenes tienen `alt` text

#### 5.2 Lighthouse Accessibility Audit

En Chrome DevTools:
1. **Lighthouse** tab
2. Seleccionar **"Accessibility"**
3. Click en **"Generate report"**

**Criterios de éxito**:
- ✅ Score: **95+**
- ✅ Color contrast: PASS (texto visible en todos los fondos)
- ✅ Links discernibles: PASS
- ✅ Image alts: PASS

---

### 6. Validación Mobile-First

#### 6.1 Responsive Design Test

**Herramienta**: Chrome DevTools → Device Mode

**Dispositivos a probar**:
1. iPhone SE (375 x 667)
2. iPhone 12 Pro (390 x 844)
3. Samsung Galaxy S20 (360 x 800)
4. iPad Air (820 x 1180)

**Criterios de éxito por dispositivo**:
- ✅ Hero section visible sin scroll horizontal
- ✅ Logo visible y legible
- ✅ H1 título legible sin wrap excesivo
- ✅ Botones de CTA clickables (min 44x44px)
- ✅ Teléfono clickable (activa llamada en móvil)
- ✅ WhatsApp clickable (abre app en móvil)
- ✅ Imagen hero no distorsionada

#### 6.2 Mobile-Friendly Test

**URL**: https://search.google.com/test/mobile-friendly

**Pasos**:
1. Analizar: `https://tax.digisendaai.com`
2. Revisar reporte

**Criterios de éxito**:
- ✅ "Page is mobile-friendly" (verde)
- ✅ Text is readable without zooming
- ✅ No content wider than screen
- ✅ Tap targets are appropriately sized

---

### 7. Validación de Schema Markup (Avanzada)

#### 7.1 Google Schema Markup Validator

**URL**: https://validator.schema.org/

**Pasos**:
1. Copiar el código de un schema desde el HTML fuente
2. Pegarlo en el validador
3. Click en **"Validate"**

**Schemas a validar**:

**LocalBusiness**:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DigiSenda AI Tax Services",
  ...
}
```

**Criterios de éxito**:
- ✅ 0 errores
- ✅ Warnings opcionales permitidos
- ✅ Campos requeridos presentes:
  - `@type`
  - `name`
  - `address` (PostalAddress completo)
  - `telephone`

**Organization**:

**Criterios de éxito**:
- ✅ Logo URL válida: `https://tax.digisendaai.com/digisenda-logo.svg`
- ✅ ContactPoint correcto

**WebSite**:

**Criterios de éxito**:
- ✅ `inLanguage: "es"` presente
- ✅ URL del sitio correcta

---

### 8. Validación de Conversión (UX)

#### 8.1 CTA Buttons

**Verificar 2 CTAs en Hero**:

1. **"Agenda tu Consulta Gratuita"**
   - ✅ Link: `https://forms.gle/gzgesEnYCBfgf5y37`
   - ✅ Abre en nueva pestaña (`target="_blank"`)
   - ✅ Color: azul (#2563eb)
   - ✅ Hover effect visible

2. **"Llama Ahora: (817) 670-5508"**
   - ✅ Link: `tel:8176705508`
   - ✅ Activa llamada en móvil
   - ✅ Color: blanco con borde azul
   - ✅ Hover effect visible

#### 8.2 Trust Signals

**Verificar presencia en Hero**:
- ✅ "Atención 100% en español"
- ✅ "Sin compromiso"
- ✅ "Respuesta rápida"

**Verificar en Value Proposition**:
- ✅ Iconos visibles (ShieldCheck, UserCheck, Scale)
- ✅ Textos de beneficios claros

#### 8.3 Contact Section

**Verificar 4 canales de contacto**:
1. ✅ Teléfono: `(817) 670-5508`
2. ✅ WhatsApp: link funcional (Twilio)
3. ✅ Email: `service.tax@digisendaai.com`
4. ✅ Formulario: Google Forms

**Micro-copy de confianza**:
- ✅ Teléfono: "Respuesta inmediata · Atención en español"
- ✅ WhatsApp: "Chat directo · 100% confidencial"
- ✅ Email: "Envía tu consulta · Te respondemos en 24h"
- ✅ Formulario: "Agenda tu cita · Sin compromiso"

---

## 📊 Métricas de Éxito (Post-Deploy)

### Semana 1

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| Sitio indexado | ✅ Sí | Google Search Console |
| Páginas indexadas | 5 de 5 | Google Search Console → Coverage |
| Impresiones | 10+ | Google Search Console → Performance |
| Sesiones GA4 | 5+ | Google Analytics 4 |
| Rich Results detectados | 3 de 3 | Rich Results Test |

### Mes 1

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| Clics orgánicos | 10+ | Google Search Console |
| Impresiones | 100+ | Google Search Console |
| CTR promedio | 5-10% | Google Search Console |
| Posición promedio | Top 30 | Google Search Console |
| Leads | 1+ | Google Forms + GA4 Events |

### Mes 3

| Métrica | Objetivo | Herramienta |
|---------|----------|-------------|
| Clics orgánicos | 50+ | Google Search Console |
| Keyword ranking | Top 10 para "preparador de taxes en español Texas" | Google Search Console |
| Leads mensuales | 5+ | Google Forms + CRM |
| Conversion rate | 5-10% | GA4 Goals |

---

## 🚨 Errores Comunes y Soluciones

### Error 1: Google Analytics no detectado

**Síntoma**: `window.dataLayer` es `undefined`

**Solución**:
1. Verificar que el script está en `<head>` (línea 50-65 de `layout.tsx`)
2. Limpiar caché del navegador
3. Verificar ID: `G-4QH3LM3PRB`
4. Esperar 24-48 horas para datos en dashboard

### Error 2: Schema markup no detectado por Rich Results Test

**Síntoma**: "No structured data found"

**Soluciones**:
1. Verificar que los scripts tienen `type="application/ld+json"`
2. Validar JSON en https://jsonlint.com/
3. Asegurar que no hay caracteres especiales sin escapar
4. Re-deployar y esperar 5-10 minutos

### Error 3: Sitemap no accesible (404)

**Síntoma**: `https://tax.digisendaai.com/sitemap.xml` devuelve 404

**Soluciones**:
1. Verificar que `app/sitemap.ts` existe
2. Re-build: `npm run build`
3. Verificar en `.next/server/app/sitemap.xml.body`
4. Re-deploy a Vercel

### Error 4: Logo no visible o demasiado pequeño

**Síntoma**: Logo casi invisible en hero

**Solución aplicada** (ya implementada en código):
```typescript
<Image 
  src="/digisenda-logo.svg" 
  width={120} 
  height={120} 
  className="w-32 h-32 brightness-0 invert"
/>
```
- Tamaño: 128x128px (antes era 48x48px)
- Color: blanco (filtro `brightness-0 invert`)

### Error 5: WhatsApp muestra número incorrecto

**Síntoma**: WhatsApp abre con número (817) 670-5508 en lugar de Twilio

**Solución aplicada** (ya implementada):
```typescript
<Link href="https://wa.me/19405487913">
  WhatsApp
</Link>
```
- Número Twilio: +1 (940) 548-7913
- No mostrar número públicamente

---

## 📝 Notas Finales

### Documentos de Referencia

1. **GOOGLE_SEARCH_CONSOLE_SETUP.md**: Guía paso a paso para configurar GSC
2. **IMPLEMENTATION_GUIDE.md**: Guía de implementación original
3. **IMAGE_GENERATION_GUIDE.md**: Guía para generar imagen del hero
4. **README.md**: Documentación general del proyecto

### Contacto y Soporte

- **Repositorio GitHub**: https://github.com/Digisenda/digisenda-tax-services
- **Sitio en Producción**: https://tax.digisendaai.com
- **Email de Soporte**: service.tax@digisendaai.com

---

**Última actualización**: 18 de febrero de 2026  
**Versión**: 1.0  
**Estado**: ✅ Código completado, ⏳ Pendiente validación en producción
