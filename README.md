# DigiSenda AI Tax Services - Landing Page

> Sitio web profesional de preparación de impuestos para la comunidad latina en Estados Unidos.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

## 🌐 Sitio en Producción

**Dominio previsto:** [tax.digisendaai.com](https://tax.digisendaai.com)

## 📋 Descripción

Landing page de alta conversión diseñada específicamente para captar clientes latinos en Estados Unidos que necesitan servicios de preparación de taxes. El sitio está optimizado para SEO local y comprensión por LLMs (ChatGPT, Gemini, Perplexity).

### Características Principales

- ✅ **Diseño responsivo** con Tailwind CSS
- ✅ **Optimizado para conversión** con CTAs claros
- ✅ **Contacto inmediato**: Teléfono, WhatsApp, Email, Agenda
- ✅ **Páginas legales completas** (Privacy, Terms, Disclaimer, SMS Policy)
- ✅ **Cumplimiento A2P** para verificación de mensajería SMS
- ✅ **SEO optimizado** para búsquedas locales en Texas
- ✅ **Multiidioma preparado** (actualmente en español)

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
tax-services/
├── app/
│   ├── components/          # Componentes React
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── ValueProposition.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Contact.tsx     # Métodos de contacto
│   │   └── Footer.tsx
│   ├── legal/[slug]/       # Páginas legales dinámicas
│   ├── thank-you/          # Página de agradecimiento
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Estilos globales
│   ├── robots.ts           # Configuración SEO
│   └── sitemap.ts          # Mapa del sitio
├── public/                 # Archivos estáticos
├── tailwind.config.ts      # Configuración Tailwind
├── package.json
└── README.md
```

## 🎨 Diseño y Branding

### Paleta de Colores

- **Primario (Azul)**: `#2563eb` - Botones CTA, enlaces
- **Azul Oscuro**: `#1e3a8a` - Headers, fondos
- **Slate**: Textos y fondos secundarios
- **Blanco**: Fondos principales

### Tipografía

- **Fuente principal**: Inter (Google Fonts)
- **Tamaños**: Sistema responsivo con Tailwind

## 📞 Información de Contacto (Producción)

- **Teléfono**: (817) 670-5508
- **WhatsApp**: (817) 670-5508
- **Email**: service.tax@digisendaai.com
- **Formulario de citas**: [Google Form](https://forms.gle/gzgesEnYCBfgf5y37)
- **Ubicación**: Texas, Estados Unidos (ZIP: 78233)

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 🌍 Despliegue en Vercel

### Paso 1: Conectar Repositorio

1. Ve a [vercel.com](https://vercel.com)
2. Importa el repositorio `Digisenda/digisenda-tax-services`
3. Configura el proyecto (Next.js se detecta automáticamente)

### Paso 2: Configurar Dominio

1. En Vercel, ve a **Settings** → **Domains**
2. Agrega `tax.digisendaai.com`
3. Configura los registros DNS según las instrucciones de Vercel

### Paso 3: Variables de Entorno (Opcional)

Si necesitas agregar Google Analytics u otras integraciones:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 SEO y Analytics

### SEO Implementado

- ✅ Meta tags optimizados
- ✅ Sitemap.xml generado automáticamente
- ✅ Robots.txt configurado
- ✅ Schema markup (JSON-LD) preparado
- ✅ Open Graph tags
- ✅ Idioma español (`lang="es"`)

### Pendiente de Configurar

- [ ] Google Analytics 4 (GA4)
- [ ] Google Search Console
- [ ] Meta Pixel (opcional)

## 📄 Páginas Legales

Todas las páginas legales están completamente desarrolladas y cumplen con estándares A2P:

- `/legal/privacy` - Política de Privacidad
- `/legal/terms` - Términos de Servicio
- `/legal/disclaimer` - Descargo de Responsabilidad
- `/legal/communications` - Política de SMS/A2P

## 🔒 Seguridad y Cumplimiento

- ✅ **A2P Compliant**: Política de SMS con opt-out claro
- ✅ **HTTPS**: Habilitado automáticamente en Vercel
- ✅ **Sin datos sensibles**: No se almacenan SSN ni datos fiscales en el sitio
- ✅ **Disclaimer claro**: No afiliación con IRS

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 16.1.6 (App Router)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: Tailwind CSS 3.4.17
- **Iconos**: Lucide React
- **Utilidades**: clsx, tailwind-merge
- **Deployment**: Vercel (recomendado)

## 📝 Licencia

© 2026 DigiSenda AI Tax Services. Todos los derechos reservados.

## 🤝 Soporte

Para preguntas sobre el código o despliegue, contacta al equipo de desarrollo.

---

**Desarrollado para DigiSenda AI** | [GitHub](https://github.com/Digisenda)
