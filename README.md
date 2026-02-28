# DigiSenda AI Tax Services - Landing Page

> Sitio web profesional de preparación de impuestos para la comunidad latina en Estados Unidos.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black)](https://vercel.com)

## 🌐 Sitio en Producción

**Dominio:** [tax.digisendaai.com](https://tax.digisendaai.com)

## 📋 Descripción

Landing page de alta conversión diseñada específicamente para captar clientes latinos en Estados Unidos que necesitan servicios de preparación de taxes. El sitio está completamente optimizado para SEO local, conversión y comprensión por LLMs (ChatGPT, Gemini, Perplexity).

### Características Principales

- ✅ **Diseño responsivo** con Tailwind CSS
- ✅ **Optimizado para conversión** con CTAs estratégicos y copy humanizado
- ✅ **Contacto inmediato**: Teléfono, WhatsApp, Email, Formulario de citas
- ✅ **Páginas legales completas** (Privacy, Terms, Disclaimer, SMS Policy)
- ✅ **Cumplimiento A2P** para verificación de mensajería SMS
- ✅ **SEO local avanzado** para búsquedas en Texas
- ✅ **Branding visible** con logo y nombre DigiSenda AI
- ✅ **Copy emocional** diseñado para conectar con usuarios latinos
- ✅ **Google Analytics 4** integrado
- ✅ **Meta Pixel (Facebook)** integrado
- ✅ **Schema.org markup completo** (LocalBusiness, Organization, WebSite)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Digisenda/digisenda-tax-services.git
cd digisenda-tax-services

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
digisenda-tax-services/
├── app/
│   ├── components/                    # Componentes React
│   │   ├── Hero.tsx                  # Hero con branding y copy emocional
│   │   ├── ValueProposition.tsx      # Propuesta de valor humanizada
│   │   ├── HowItWorks.tsx           # Proceso de trabajo
│   │   ├── Contact.tsx              # Métodos de contacto (4 canales)
│   │   └── Footer.tsx               # Footer con info de contacto
│   ├── legal/[slug]/                # Páginas legales dinámicas
│   ├── thank-you/                   # Página de agradecimiento
│   ├── layout.tsx                   # Layout principal + SEO + Analytics
│   ├── page.tsx                     # Landing page principal
│   ├── globals.css                  # Estilos globales Tailwind
│   ├── robots.ts                    # Configuración SEO robots
│   └── sitemap.ts                   # Mapa del sitio automático
├── public/
│   ├── digisenda-logo.svg          # Logo oficial DigiSenda AI
│   ├── hero-tax-professional.jpg   # Imagen profesional del hero
│   └── favicon.ico                 # Favicon del sitio
├── docs/                            # Documentación del proyecto
│   ├── GOOGLE_SEARCH_CONSOLE_SETUP.md
│   ├── SEO_VERIFICATION_CHECKLIST.md
│   └── IMAGE_GENERATION_GUIDE.md
├── tailwind.config.ts              # Configuración Tailwind
├── next.config.mjs                 # Configuración Next.js
├── package.json
└── README.md
```

## 🎨 Diseño y Branding

### Paleta de Colores

- **Primario (Azul)**: `#2563eb` - Botones CTA, acentos
- **Azul Oscuro**: `#1e3a8a` - Headers, fondos oscuros
- **Slate 900**: `#0f172a` - Fondo del hero
- **Slate 400**: `#94a3b8` - Textos secundarios
- **Blanco**: `#ffffff` - Fondos principales, textos sobre oscuro

### Tipografía

- **Fuente principal**: Inter (Google Fonts)
- **Hero H1**: `text-4xl md:text-5xl lg:text-6xl font-extrabold`
- **Sistema responsivo**: Mobile-first con breakpoints Tailwind

### Branding

- **Logo**: DigiSenda AI (`/digisenda-logo.svg`)
- **Tamaño logo**: 128x128px con filtro `brightness-0 invert` (blanco sobre azul)
- **Nombre visible**: "DigiSenda AI Tax Services" en hero y footer

## 📞 Información de Contacto (Actualizada)

- **Teléfono**: (830) 423-5572
- **WhatsApp**: +1 (830) 423-5572
- **Email**: service.tax@digisendaai.com
- **Formulario de citas**: [Google Form](https://forms.gle/gzgesEnYCBfgf5y37)
- **Ubicación**: Texas, Estados Unidos (ZIP: 78233)

## 🔧 Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting y verificación de código
npm run lint
```

## 🌍 Despliegue en Vercel

### Paso 1: Conectar Repositorio

1. Ve a [vercel.com](https://vercel.com)
2. Importa el repositorio `Digisenda/digisenda-tax-services`
3. Configura el proyecto (Next.js se detecta automáticamente)
4. Deploy automático en cada push a `main`

### Paso 2: Configurar Dominio

1. En Vercel, ve a **Settings** → **Domains**
2. Agrega `tax.digisendaai.com`
3. Configura los registros DNS:
   ```
   Type: CNAME
   Name: tax
   Value: cname.vercel-dns.com
   ```

### Paso 3: Variables de Entorno

No se requieren variables de entorno adicionales. Todos los IDs de tracking están directamente en el código:

- **Google Analytics ID**: `G-4QH3LM3PRB`
- **Meta Pixel ID**: `668657552992892`

## 📊 SEO y Analytics

### ✅ SEO Completamente Implementado

- ✅ **Meta tags optimizados** con keywords locales
- ✅ **Sitemap.xml** generado automáticamente (5 URLs)
- ✅ **Robots.txt** configurado para máxima indexación
- ✅ **Schema.org markup (JSON-LD)** completo:
  - LocalBusiness (con ubicación, horarios, servicios)
  - Organization (con logo y contacto)
  - WebSite (con idioma español)
- ✅ **Open Graph tags** para redes sociales
- ✅ **Twitter Card** configurado
- ✅ **Idioma español** (`lang="es"`)
- ✅ **Canonical URL** configurado

### ✅ Analytics Completamente Implementado

- ✅ **Google Analytics 4 (GA4)**: ID `G-4QH3LM3PRB`
- ✅ **Meta Pixel (Facebook)**: ID `668657552992892`
- ✅ **Tracking de PageView** automático
- ✅ **Estrategia afterInteractive** para mejor performance

### 📋 Pendiente de Configuración Externa

- [ ] **Código de verificación de Google Search Console**
  - Obtener código en [Google Search Console](https://search.google.com/search-console)
  - Actualizar `app/layout.tsx` línea 40
- [ ] **Enviar sitemap a Google Search Console**
  - URL: `https://tax.digisendaai.com/sitemap.xml`
- [ ] **Crear Google Business Profile** (opcional pero recomendado)
- [ ] **Vincular GA4 con Google Search Console**

## 📄 Páginas Legales

Todas las páginas legales están completamente desarrolladas y cumplen con estándares A2P:

- `/legal/privacy` - Política de Privacidad (GDPR compliant)
- `/legal/terms` - Términos de Servicio
- `/legal/disclaimer` - Descargo de Responsabilidad (No afiliación IRS)
- `/legal/communications` - Política de SMS/A2P (Opt-out claro)

Todas actualizadas con el número de contacto: **(830) 423-5572**

## 🎯 Copy y Mensajería

### Hero Section

**Título principal:**
```
Presenta tus Taxes
con Confianza,
No con Miedo
```

**Enfoque**: Mensaje emocional que conecta con el miedo/ansiedad que sienten los latinos al presentar taxes, ofreciendo confianza y tranquilidad.

**CTAs**:
1. Agendar Consulta Gratis (botón azul primario)
2. Llama Ahora: (830) 423-5572 (botón blanco secundario)

**Micro-copy de confianza**:
- "Atención 100% en español · Sin compromiso · Respuesta rápida"

### Keywords SEO Principales

- "preparador de taxes en español"
- "preparación de impuestos para latinos"
- "preparación de impuestos para latinos en Estados Unidos"
- "servicios de impuestos en español"
- "ayuda con taxes W2, 1099"
- "preparador de impuestos Texas"

## 🔒 Seguridad y Cumplimiento

- ✅ **A2P Compliant**: Política de SMS con opt-out claro
- ✅ **HTTPS**: Habilitado automáticamente en Vercel
- ✅ **Sin datos sensibles**: No se almacenan SSN ni datos fiscales
- ✅ **Disclaimer claro**: No afiliación con IRS ni agencias gubernamentales
- ✅ **Privacy Policy**: Cumplimiento GDPR y leyes de privacidad US
- ✅ **CORS headers**: Configurados para máxima seguridad

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 16.1.6 (App Router)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: Tailwind CSS 3.4.17
- **Iconos**: Lucide React
- **Utilidades**: clsx, tailwind-merge
- **Analytics**: Google Analytics 4, Meta Pixel
- **Deployment**: Vercel
- **Fonts**: Inter (Google Fonts)

## 📈 Métricas de Éxito Esperadas

### Semana 1 (Post-Deploy)
- ✅ Sitio indexado en Google
- ✅ Primeras impresiones en Search Console
- ✅ Datos visibles en GA4 dashboard

### Mes 1
- 🎯 10+ clics orgánicos
- 🎯 100+ impresiones
- 🎯 1+ lead desde búsqueda orgánica
- 🎯 CTR 5-10%

### Mes 3
- 🎯 Top 10 para "preparador de taxes en español Texas"
- 🎯 50+ clics orgánicos semanales
- 🎯 5+ leads mensuales desde SEO
- 🎯 CTR 10-15%

## 🔄 Actualizaciones Recientes

### Febrero 2026

**v2.0 - Optimización de Branding, SEO y Analytics**
- ✅ Hero copy actualizado con mensaje emocional
- ✅ Logo DigiSenda AI visible (128x128px, blanco)
- ✅ Número de contacto unificado: (830) 423-5572
- ✅ Google Analytics 4 integrado completamente
- ✅ Meta Pixel (Facebook) integrado
- ✅ Schema.org markup avanzado (LocalBusiness, Organization, WebSite)
- ✅ SEO local optimizado para Texas
- ✅ Copy humanizado en todas las secciones
- ✅ Micro-copy de confianza en CTAs
- ✅ Imagen profesional del hero integrada
- ✅ Documentación SEO completa (3 guías)

## 📚 Documentación Adicional

- **GOOGLE_SEARCH_CONSOLE_SETUP.md**: Guía completa para configurar GSC
- **SEO_VERIFICATION_CHECKLIST.md**: Lista de verificación con 50+ checks
- **IMAGE_GENERATION_GUIDE.md**: Guía para generar imágenes con IA
- **PRODUCTION_AUDIT.md**: Auditoría técnica pre-producción

## 📝 Licencia

© 2026 DigiSenda AI Tax Services. Todos los derechos reservados.

## 🤝 Soporte y Contacto

Para preguntas sobre el código, despliegue o funcionalidad:

- **Email**: service.tax@digisendaai.com
- **Teléfono**: (830) 423-5572
- **Repositorio**: [GitHub - Digisenda/digisenda-tax-services](https://github.com/Digisenda/digisenda-tax-services)

---

**Desarrollado para DigiSenda AI** | [GitHub](https://github.com/Digisenda) | [Sitio Web](https://tax.digisendaai.com)
