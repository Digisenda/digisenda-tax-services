# Meta Pixel Custom Events - DigiSenda AI Tax Services

## 📊 Eventos Personalizados Implementados

Este documento describe los eventos personalizados de Meta Pixel (Facebook) implementados en el sitio web para rastrear acciones clave de conversión.

---

## 🎯 Eventos Rastreados

### 1. **CallNowClick** - Clic en Botón de Llamada

**Descripción**: Se activa cuando un usuario hace clic en un enlace telefónico o botón de llamada.

**Criterios de Activación**:
- Enlaces `tel:` (ejemplo: `tel:8304235572`)
- Texto del botón contiene: "llamar", "llama"
- `aria-label` contiene: "llamar", "teléfono"
- Atributo `data-action="call"`

**Parámetros Enviados**:
```javascript
{
  button_text: "Llama Ahora",        // Texto del botón (máx 50 caracteres)
  phone_number: "8304235572",        // Número extraído del href
  source_page: "/",                   // Página donde ocurrió el clic
}
```

**Ejemplo de Botón Detectado**:
```html
<a href="tel:8304235572">Llama Ahora</a>
<button aria-label="llamar ahora">Contactar</button>
```

---

### 2. **WhatsAppClick** - Clic en Botón de WhatsApp

**Descripción**: Se activa cuando un usuario hace clic en un enlace de WhatsApp.

**Criterios de Activación**:
- URLs con `wa.me` (ejemplo: `https://wa.me/18304235572`)
- URLs con `whatsapp`
- Texto del botón contiene: "whatsapp"
- `aria-label` contiene: "whatsapp"
- Atributo `data-action="whatsapp"`

**Parámetros Enviados**:
```javascript
{
  button_text: "WhatsApp",           // Texto del botón (máx 50 caracteres)
  source_page: "/",                   // Página donde ocurrió el clic
}
```

**Ejemplo de Botón Detectado**:
```html
<a href="https://wa.me/18304235572">WhatsApp</a>
<button data-action="whatsapp">Enviar Mensaje</button>
```

---

### 3. **ScheduleClick** - Clic en Botón de Agendar Cita

**Descripción**: Se activa cuando un usuario hace clic en enlaces de formularios o botones de agendar cita.

**Criterios de Activación**:
- URLs con `forms.gle` o `google.com/forms`
- URLs con `calendly`
- Texto del botón contiene: "agendar", "cita", "consulta", "reservar"
- `aria-label` contiene: "agendar", "cita"
- Atributo `data-action="schedule"`

**Parámetros Enviados**:
```javascript
{
  button_text: "Agendar Consulta Gratis",  // Texto del botón (máx 50 caracteres)
  form_url: "https://forms.gle/...",        // URL del formulario
  source_page: "/",                          // Página donde ocurrió el clic
}
```

**Ejemplo de Botón Detectado**:
```html
<a href="https://forms.gle/gzgesEnYCBfgf5y37">Agendar Consulta Gratis</a>
<button data-action="schedule">Reservar Cita</button>
```

---

## 🔧 Implementación Técnica

### Ubicación del Código
- **Archivo**: `app/layout.tsx`
- **Script ID**: `meta-pixel-events`
- **Estrategia**: `afterInteractive` (Next.js)
- **Líneas**: ~92-200

### Características Técnicas

#### ✅ Mejores Prácticas Implementadas

1. **Event Delegation**:
   - Listener global en `document` con captura (`true`)
   - Maneja clics en elementos dinámicamente agregados
   - Eficiente: un solo listener vs. múltiples

2. **Defensivo y Robusto**:
   - Verificación de `fbq` disponible
   - Try-catch para prevenir errores
   - Verificación de elementos nulos
   - `.closest()` para manejar clics en elementos hijos

3. **Multi-Criterio Detection**:
   - Analiza: `href`, `innerText`, `aria-label`, `data-action`
   - Case-insensitive (`.toLowerCase()`)
   - Normaliza texto (`.trim()`)

4. **Rich Event Data**:
   - Parámetros personalizados por evento
   - Tracking de página origen (`window.location.pathname`)
   - Texto del botón para análisis UX

5. **Debugging & Logging**:
   - Console logs para desarrollo
   - Mensajes de error descriptivos
   - Fácil troubleshooting

#### ⚙️ Orden de Ejecución

```
1. Meta Pixel base script carga (fbq init)
2. PageView event se envía
3. Custom events script se ejecuta
4. Event listener se adjunta a document
5. Usuario hace clic → evento se rastrea
```

---

## 📊 Visualización en Meta Events Manager

### Acceso al Dashboard
1. Ir a: https://business.facebook.com/events_manager
2. Seleccionar Pixel ID: `668657552992892`
3. Ver pestaña **"Custom Events"**

### Eventos que Aparecerán

| Nombre del Evento | Tipo | Descripción |
|-------------------|------|-------------|
| `PageView` | Estándar | Vista de página automática |
| `CallNowClick` | Personalizado | Clic en botón de llamada |
| `WhatsAppClick` | Personalizado | Clic en botón WhatsApp |
| `ScheduleClick` | Personalizado | Clic en botón agendar cita |

---

## 🎯 Uso en Meta Ads

### 1. Crear Conversiones Personalizadas

#### Conversión: "Solicitud de Llamada"
- **Evento**: `CallNowClick`
- **URL contiene**: `tax.digisendaai.com`
- **Uso**: Optimizar para leads telefónicos

#### Conversión: "Inicio de Conversación WhatsApp"
- **Evento**: `WhatsAppClick`
- **URL contiene**: `tax.digisendaai.com`
- **Uso**: Optimizar para conversaciones directas

#### Conversión: "Solicitud de Cita"
- **Evento**: `ScheduleClick`
- **URL contiene**: `tax.digisendaai.com`
- **Uso**: Optimizar para agendamiento de citas

### 2. Configurar Campañas

**Objetivo de Campaña**: Conversiones

**Evento de Optimización**: Seleccionar uno de:
- `CallNowClick` (más directo)
- `ScheduleClick` (más calificado)
- `WhatsAppClick` (conversacional)

**Audiencias Personalizadas**:
- Usuarios que hicieron `CallNowClick` pero no convirtieron
- Usuarios que hicieron `ScheduleClick` (audiencia caliente)
- Combinaciones: `ScheduleClick` AND NOT `CallNowClick`

---

## 🧪 Testing y Validación

### 1. Test en Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir navegador en http://localhost:3000
# Abrir DevTools → Console
```

**Verificar en Console**:
```
[Meta Pixel] Custom events tracker initialized
```

**Al hacer clic en botón de llamada**:
```
[Meta Pixel] CallNowClick tracked
```

### 2. Test con Meta Pixel Helper

1. Instalar extensión: [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper)
2. Abrir sitio web: https://tax.digisendaai.com
3. Hacer clic en botones (llamar, WhatsApp, agendar)
4. Verificar que aparezcan eventos en la extensión

### 3. Test en Meta Events Manager

1. Ir a: https://business.facebook.com/events_manager
2. Seleccionar Pixel ID: `668657552992892`
3. Activar **"Test Events"**
4. Hacer clics en el sitio web
5. Verificar eventos aparecen en tiempo real (delay ~30 segundos)

---

## 📈 Métricas Esperadas

### Semana 1
- ✅ Eventos personalizados rastreándose correctamente
- ✅ Al menos 10 eventos `CallNowClick`
- ✅ Al menos 5 eventos `ScheduleClick`
- ✅ Al menos 3 eventos `WhatsAppClick`

### Mes 1
- 🎯 100+ eventos totales de interacción
- 🎯 Tasa de conversión (eventos/PageViews): 5-10%
- 🎯 Identificación de botón más efectivo

### Mes 3
- 🎯 Optimización de campañas basada en eventos
- 🎯 Reducción de CPA (Cost Per Acquisition)
- 🎯 Audiencias de retargeting activas (200+ usuarios)

---

## 🔧 Troubleshooting

### Problema: Eventos no aparecen en Meta Events Manager

**Soluciones**:
1. Verificar que `fbq` está cargado:
   ```javascript
   console.log(typeof fbq); // Debe ser "function"
   ```
2. Revisar Console por errores
3. Verificar que Pixel ID es correcto: `668657552992892`
4. Esperar 2-5 minutos (delay de procesamiento)
5. Usar "Test Events" en Events Manager

### Problema: Eventos se duplican

**Causa**: Múltiples listeners o navegación SPA

**Solución**: El código actual usa un solo listener global y previene duplicación con `closest()`.

### Problema: Botón no detectado

**Diagnóstico**:
1. Verificar estructura HTML del botón
2. Revisar que texto/href/aria-label coincida con criterios
3. Agregar `data-action="call|whatsapp|schedule"` manualmente si necesario

---

## 🚀 Mejoras Futuras (Opcional)

### 1. Eventos Adicionales

```javascript
// Form Submit (si se agrega formulario en sitio)
fbq('trackCustom', 'FormSubmit', {
  form_id: 'contact-form',
  source_page: window.location.pathname
});

// Email Click
fbq('trackCustom', 'EmailClick', {
  email: 'service.tax@digisendaai.com'
});

// Download (si se agregan PDFs/recursos)
fbq('trackCustom', 'DownloadClick', {
  file_name: 'tax-checklist.pdf'
});
```

### 2. Enhanced Data Parameters

```javascript
// Agregar información del usuario (si disponible)
fbq('trackCustom', 'CallNowClick', {
  button_text: text,
  phone_number: href,
  source_page: window.location.pathname,
  user_language: navigator.language,
  device_type: /mobile/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
  referrer: document.referrer
});
```

### 3. Integración con GA4

```javascript
// Enviar evento también a Google Analytics
if (typeof gtag !== 'undefined') {
  gtag('event', 'call_now_click', {
    'event_category': 'engagement',
    'event_label': text
  });
}
```

---

## 📝 Changelog

### Versión 1.0 (28 Feb 2026)
- ✅ Implementación inicial de 3 eventos personalizados
- ✅ CallNowClick para tracking de llamadas
- ✅ WhatsAppClick para tracking de mensajes
- ✅ ScheduleClick para tracking de agendamiento
- ✅ Event delegation con un solo listener
- ✅ Multi-criterio detection (href, text, aria-label, data-action)
- ✅ Rich event data con parámetros personalizados
- ✅ Debugging logs para desarrollo
- ✅ Código defensivo con try-catch

---

## 🔗 Recursos

- **Meta Pixel ID**: `668657552992892`
- **Meta Events Manager**: https://business.facebook.com/events_manager
- **Meta Pixel Helper**: https://chrome.google.com/webstore/detail/facebook-pixel-helper
- **Meta Ads Manager**: https://business.facebook.com/adsmanager
- **Documentación Meta Pixel**: https://developers.facebook.com/docs/meta-pixel
- **Custom Events Guide**: https://developers.facebook.com/docs/meta-pixel/reference#custom-events

---

**Última actualización**: 28 de febrero de 2026  
**Versión**: 1.0  
**Autor**: DigiSenda AI Development Team
