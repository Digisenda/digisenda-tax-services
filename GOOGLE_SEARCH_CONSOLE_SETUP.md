# Guía de Configuración: Google Search Console

## 📋 Información Requerida

- **Sitio Web**: `https://tax.digisendaai.com`
- **Sitemap URL**: `https://tax.digisendaai.com/sitemap.xml`
- **Google Analytics ID**: `G-4QH3LM3PRB` (ya integrado en el código)

---

## 🔧 Paso 1: Crear Propiedad en Google Search Console

### 1.1 Acceso Inicial
1. Ir a [Google Search Console](https://search.google.com/search-console)
2. Iniciar sesión con la cuenta de Google de DigiSenda AI
3. Click en **"Agregar Propiedad"**

### 1.2 Seleccionar Tipo de Propiedad
- **Opción Recomendada**: Propiedad de dominio (Domain property)
  - Dominio: `digisendaai.com`
  - Esta opción cubre todos los subdominios y protocolos

- **Alternativa**: Prefijo de URL
  - URL: `https://tax.digisendaai.com`
  - Solo cubre exactamente esta URL

---

## 🔐 Paso 2: Verificar Propiedad del Sitio

### Método 1: Etiqueta HTML (Recomendado para Next.js)

**El código ya está preparado** en `app/layout.tsx` línea 39:

```typescript
verification: {
  google: "google-site-verification-code", // Reemplazar con código real
},
```

**Acciones requeridas**:

1. En Google Search Console, seleccionar **"Etiqueta HTML"**
2. Copiar el código de verificación (ejemplo: `abc123xyz456`)
3. Reemplazar en el código:

```typescript
verification: {
  google: "TU_CODIGO_AQUI", // Por ejemplo: "abc123xyz456"
},
```

4. Hacer commit, push y desplegar a producción
5. Regresar a Google Search Console y click en **"Verificar"**

### Método 2: Google Analytics (Más Rápido)

Si ya está configurado Google Analytics 4 (✅ ya lo está):

1. En Google Search Console, seleccionar **"Google Analytics"**
2. Usar la misma cuenta de Google vinculada a Analytics
3. Click en **"Verificar"** (verificación automática)

### Método 3: DNS (Más técnico)

1. Google proporcionará un registro TXT
2. Agregar en el DNS del dominio `digisendaai.com`:
   ```
   Tipo: TXT
   Host: @
   Valor: google-site-verification=CODIGO_PROPORCIONADO
   TTL: 3600
   ```
3. Esperar propagación DNS (5-30 minutos)
4. Click en **"Verificar"**

---

## 📊 Paso 3: Enviar Sitemap

### 3.1 Una Vez Verificado el Sitio

1. En Google Search Console, ir a **"Sitemaps"** (menú lateral izquierdo)
2. Ingresar URL del sitemap:
   ```
   https://tax.digisendaai.com/sitemap.xml
   ```
3. Click en **"Enviar"**

### 3.2 Verificar Estado

- Estado debe cambiar a **"Correcto"** o **"Success"** en 24-48 horas
- Revisar que aparezcan **5 URLs descubiertas**:
  - `/` (homepage)
  - `/legal/privacy`
  - `/legal/terms`
  - `/legal/disclaimer`
  - `/legal/communications`

---

## 🎯 Paso 4: Configuración SEO Local (Texas)

### 4.1 Información Local a Destacar

Según el schema markup ya implementado:

- **Ubicación**: Texas, TX 78233, United States
- **Coordenadas GPS**: Lat 29.5728, Lon -98.4764
- **Teléfono**: +1 (830) 423-5572
- **Email**: service.tax@digisendaai.com
- **Horario**: Lunes a Viernes, 9:00 AM - 6:00 PM

### 4.2 Crear Perfil de Google Business (Opcional pero Recomendado)

1. Ir a [Google Business Profile](https://www.google.com/business/)
2. Crear perfil con datos arriba mencionados
3. Categoría: **"Tax Preparation Service"** o **"Accountant"**
4. Descripción:
   ```
   Servicios profesionales de preparación de impuestos para latinos en Estados Unidos. 
   Atención 100% en español para W2, 1099, pequeños negocios y ACA. 
   Consultas sin compromiso. No somos agencia gubernamental.
   ```
5. Subir foto del logo: `/public/digisenda-logo.svg`
6. Vincular con Google Search Console

---

## 📈 Paso 5: Monitoreo y Optimización

### 5.1 Métricas Clave a Monitorear (Semanalmente)

En Google Search Console → **"Rendimiento"**:

- **Clics**: Objetivo inicial 10+ por semana
- **Impresiones**: Objetivo inicial 100+ por semana
- **CTR promedio**: Objetivo 5-10%
- **Posición promedio**: Objetivo Top 20 (primeras 2 páginas)

### 5.2 Queries Clave a Monitorear

Estas queries deben aparecer en los primeros 30 días:

1. `preparador de taxes en español`
2. `preparación de impuestos latinos`
3. `tax preparer spanish texas`
4. `ayuda con taxes en español`
5. `preparador de taxes texas`
6. `digisenda ai`

### 5.3 Alertas Importantes

En Google Search Console → **"Configuración"** → **"Notificaciones por email**:

Activar alertas para:
- ✅ Errores de indexación
- ✅ Problemas de seguridad
- ✅ Penalizaciones manuales
- ✅ Problemas de Core Web Vitals

---

## 🛠️ Paso 6: Herramientas Adicionales

### 6.1 Google PageSpeed Insights

1. Ir a [PageSpeed Insights](https://pagespeed.web.dev/)
2. Analizar: `https://tax.digisendaai.com`
3. **Objetivo**: Score 90+ en móvil y desktop
4. Revisar métricas Core Web Vitals:
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

### 6.2 Rich Results Test

1. Ir a [Rich Results Test](https://search.google.com/test/rich-results)
2. Analizar: `https://tax.digisendaai.com`
3. Verificar que aparezcan:
   - ✅ LocalBusiness schema
   - ✅ Organization schema
   - ✅ WebSite schema
   - ✅ Offer Catalog

---

## ✅ Checklist de Validación

### Pre-Launch (Antes de Desplegar)

- [x] Google Analytics 4 integrado (ID: G-4QH3LM3PRB)
- [x] Schema.org markup implementado (LocalBusiness + Organization + WebSite)
- [x] Sitemap.xml generado automáticamente
- [x] Robots.txt configurado
- [x] Meta tags optimizados (title, description, keywords)
- [x] Open Graph tags completos
- [x] Lang="es" en HTML
- [x] ~~PENDIENTE: Código de verificación de Google Search Console~~ — **no aplica** (ver nota 2026-07-28 al final del documento)

### Post-Launch (Después de Desplegar)

- [ ] Sitio desplegado en `tax.digisendaai.com`
- [ ] Verificar sitio en Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Crear Google Business Profile
- [ ] Vincular Google Analytics con Search Console
- [ ] Revisar PageSpeed Insights (objetivo 90+)
- [ ] Validar Rich Results
- [ ] Configurar alertas de email

---

## 🚀 Timeline de Resultados Esperados

### Semana 1 (Post-Deploy)
- ✅ Sitio indexado en Google
- ✅ Sitemap procesado
- ✅ Primeras impresiones en Search Console

### Mes 1
- ✅ 10+ clics orgánicos
- ✅ 100+ impresiones
- ✅ Al menos 1 lead desde búsqueda orgánica

### Mes 3
- ✅ Top 10 para "preparador de taxes en español Texas"
- ✅ 50+ clics orgánicos por semana
- ✅ 5+ leads mensuales desde SEO

---

## 📞 Recursos y Soporte

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com/
- **Google Business Profile**: https://www.google.com/business/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Documentación Next.js SEO**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

---

## ✅ Nota 2026-07-28: el código de verificación HTML no hace falta

Esta guía asumía el **Método 1 (Etiqueta HTML)** descrito arriba, pero DigiSenda AI terminó usando el **Método 3 (DNS) a nivel de dominio raíz** descrito en la sección "1.2 Seleccionar Tipo de Propiedad": `digisendaai.com` está registrado como **propiedad de Dominio** en Search Console, verificada por un registro TXT en el DNS del dominio raíz — no como una propiedad de "Prefijo de URL" específica para `tax.digisendaai.com`.

Una propiedad de Dominio cubre **automáticamente todos los subdominios y protocolos** del dominio raíz. Confirmado con datos reales de Search Console: `https://tax.digisendaai.com/sitemap.xml` aparece enviado y con estado **Correcto** (5 páginas descubiertas), sin que `app/layout.tsx` haya tenido nunca un código de verificación real — solo el placeholder `"google-site-verification-code"`, que sigue así intencionalmente.

**Conclusión:** dejar el placeholder tal cual. No se necesita generar ni cargar `NEXT_PUBLIC_GSC_VERIFICATION`. Si en el futuro se decide separar `tax.digisendaai.com` en su propia propiedad de Prefijo de URL (no recomendado — fragmenta el reporting sin beneficio de ranking, ver `digisenda-tax-admin/docs/CONTINUITY.md`), recién ahí aplicaría el Método 1 de este documento.

---

**Última actualización**: 28 de julio de 2026 (nota de arquitectura añadida; contenido original de 28 de febrero de 2026 sin cambios)  
**Versión**: 1.2  
**Autor**: DigiSenda AI Development Team
