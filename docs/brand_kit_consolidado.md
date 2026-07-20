# Kit de Marca Consolidado — DigiSenda Tax Service

**Entidad:** DigiSenda AI LLC
**Marca madre:** DigiSenda AI
**Submarca:** DigiSenda Tax Service
**Sitio web:** https://tax.digisendaai.com/
**Fecha:** 20 de julio de 2026
**Versión:** 3 (consolida `brand-kit digisenda ai tax service.html` — auditoría del código — con `brand_Kit_DigiSenda_Tax_Service_v2.md` — propuesta estratégica)

**Alcance de este documento:** identidad de marca únicamente — naming, voz, personalidad, paleta, tipografía, logotipo y dirección fotográfica. Se excluye a propósito toda la sección de estructura/copy del sitio web de la propuesta v2 (hero, secciones, proceso, CTA final): eso pertenece a una conversación de rediseño de sitio, no al kit de marca.

**Cómo leer las marcas de estado:**
- ✅ **Vigente** — confirmado en el código de `digisenda-tax-services` o en `SocialStudio/brands/taxes/brand.yaml`.
- 🆕 **Propuesto** — recomendación de la v2, aún no implementada. Requiere decisión antes de ejecutar.

---

## 1. Arquitectura de marca

| Elemento | Estado | Detalle |
|---|---|---|
| Marca madre | 🆕 | **DigiSenda AI** — innovación, automatización, infraestructura tecnológica. |
| Submarca fiscal | 🆕 | **DigiSenda Tax Service** — confianza, claridad, acompañamiento, atención humana en español. |
| Relación visual | 🆕 | La submarca hereda estructura de logo, azul corporativo y tipografía de la marca madre; reduce estética "de software" (hologramas, brillos, robots, cyan dominante). |
| Nombre actual en producción | ✅ | `DigiSenda AI Tax Services` (título, metadata, schema.org y footer del sitio). |
| Nombre oficial recomendado | 🆕 | `DigiSenda Tax Service` (sin "AI" visible), con línea de respaldo **"Un servicio de DigiSenda AI LLC"** / *"A service of DigiSenda AI LLC"*. |

**Por qué renombrar (razón dada en v2):** la palabra "AI" en el nombre fiscal puede sugerir que una inteligencia artificial prepara las declaraciones automáticamente. La tecnología debe ser ventaja interna, no la primera promesa.

**Decisión pendiente:** ¿se adopta el renombre a "DigiSenda Tax Service" en el sitio, footer, SEO, redes y documentos? Hoy conviven tres variantes (`DigiSenda AI`, `DigiSenda AI Tax Services`, `DigiSenda Tax Service`) — es la inconsistencia que la v2 detectó y que motivó este ejercicio de consolidación.

---

## 2. Promesa y jerarquía de mensajes

| Nivel | Mensaje | Estado |
|---|---|---|
| Tagline emocional (hero) | **"Presenta tus Taxes con Confianza, No con Miedo"** | ✅ vigente — ya es el H1 del sitio |
| Promesa principal | "Taxes claros, profesionales y en español." | 🆕 propuesta |
| Posicionamiento extendido | "DigiSenda Tax Service ayuda a familias, trabajadores y pequeños negocios hispanos a preparar sus impuestos con claridad, atención personalizada y cumplimiento de la ley." | 🆕 propuesta |
| Campaña educativa (temporada baja) | "Una buena temporada de taxes no comienza en enero. Comienza durante el año." | 🆕 propuesta |
| Cierre de contenido | "Prepárate, protégete y presenta tus taxes con confianza." | 🆕 propuesta |
| Diferenciador ya validado | "No prometemos milagros ni refunds millonarios" / footer real: *"No somos una entidad gubernamental. Los resultados de reembolso varían según cada caso individual."* | ✅ vigente |

---

## 3. Personalidad y voz de marca

**Voz de marca validada** (`brand.yaml`, ✅ vigente):
> Cálido, honesto y bilingüe (atención 100% en español). Cercano y de confianza, pero profesional — nada de tecnicismos legales pesados. Sin prometer de más ni generar expectativas sobre reembolsos: expectativas honestas, explicaciones claras de documentos y procesos, trato personalizado y sin apuro.

**Cinco atributos de personalidad** (🆕 propuesto, compatible con la voz vigente):

| Atributo | Significa |
|---|---|
| Humana | Habla como una persona real, no con lenguaje frío o burocrático. |
| Clara | Explica sin tecnicismos innecesarios; cuando un término es necesario, lo explica. |
| Honesta | No promete refunds, créditos ni resultados antes de analizar el caso. |
| Profesional | Trabaja con procesos, documentación, revisión, seguridad y cumplimiento. |
| Moderna | Usa tecnología y canales digitales sin eliminar el trato humano. |

> **Fórmula:** Profesional sin ser fría. Moderna sin ser artificial. Cercana sin perder autoridad.

**La marca debe decir** (🆕): "Analizamos tu situación" · "Te explicamos las opciones" · "Según los documentos proporcionados" · "Dentro de lo permitido por la ley" · "Cada caso es diferente" · "Podrías calificar" · "Es necesario revisar" · "Consulta con un profesional" · "Te indicamos qué documentos necesitas" · "No envíes información sensible por redes sociales."

**La marca no debe decir** (🆕): "Te conseguiremos el máximo refund" · "Calificas seguro" · "Garantizamos tu reembolso" · "Obtén miles de dólares" · "Somos aprobados por el IRS" · "Trabajamos para el IRS" · "Presentación sin riesgo" · "Te devolvemos más que cualquier otro preparador" · "Crédito garantizado" · "Refund asegurado."

---

## 4. Paleta de color

### 4.1 Núcleo vigente (validado en `tailwind.config.ts` y componentes)

| Nombre | Hex | Estado | Uso confirmado |
|---|---:|---|---|
| Azul primario (Neural/Clear Blue en v2) | `#2563EB` | ✅ | Botones y enlaces primarios (mismo valor que propone v2 — sin conflicto) |
| Azul hover | `#1D4ED8` | ✅ | Estado hover de botones |
| Azul acento sobre oscuro | `#60A5FA` | ✅ | Titular sobre el Hero oscuro |
| Azul tinte de íconos | `#DBEAFE` / `#EFF6FF` | ✅ | Fondos de íconos, hover claro |
| Slate 900 | `#0F172A` | ✅ | Fondo del Hero y footer, titulares sobre blanco |
| Slate 50–200 | `#F8FAFC` – `#E2E8F0` | ✅ | Fondos alternos, bordes, separadores |
| Slate 600 | `#475569` | ✅ | Texto de cuerpo |
| Morado acento | `#9333EA` | ✅ (uso limitado) | Solo en el degradado atmosférico de fondo del Hero, al 20% de opacidad — no se usa en texto ni botones |

### 4.2 Ampliación propuesta en v2 (🆕 no implementada)

| Nombre | Hex | Uso recomendado |
|---|---:|---|
| Deep Space | `#0B0F19` | Footer/fondos oscuros de la marca madre |
| AI Cyan | `#06B6D4` | Detalles e indicadores tecnológicos (vínculo visual con DigiSenda AI) |
| Silver | `#CBD5F5` | Bordes y fondos secundarios |
| Graphite | `#1E293B` | Texto oscuro y estructura |
| Trust Navy | `#12345B` | Color institucional fiscal |
| Soft Cyan | `#DDF7FA` | Fondos informativos |
| Warm Sand | `#F7F3EB` | Fondos humanos/editoriales |
| Success Green | `#15803D` | Confirmaciones |
| Alert Amber | `#B45309` | Advertencias educativas |

Distribución sugerida (🆕): 55% blanco · 20% Warm Sand/gris claro · 15% Trust Navy · 7% azul · 3% cyan y otros acentos. Regla explícita: **el cyan debe ser un vínculo con DigiSenda AI, sin dominar la identidad fiscal.**

**⚠️ Conflicto a resolver:** el sitio actual usa **morado** (`#9333EA`) como acento decorativo del Hero; la v2 no lo contempla y en su lugar propone **AI Cyan** (`#06B6D4`) como el acento que conecta con la marca madre. Ambos cumplen el mismo rol (acento atmosférico ligado a "DigiSenda AI"), por lo que hay que elegir uno: mantener el morado ya vigente, o migrar al cyan propuesto por consistencia con la arquitectura de marca de la sección 1.

---

## 5. Tipografía

| Rol | Tipografía | Estado | Uso |
|---|---|---|---|
| Cuerpo de texto | **Inter** | ✅ vigente | Única familia hoy en el sitio (`next/font/google`); párrafos, botones, formularios, navegación |
| Titulares/display | **Space Grotesk** | 🆕 propuesta | Titulares, portadas, nombres de sección, estadísticas, llamadas principales — hoy los titulares usan Inter 800 |
| Datos/técnico | **IBM Plex Mono** | 🆕 propuesta | Números de formularios, fechas, etiquetas, referencias — uso limitado, nunca en párrafos largos |

**Nota de migración:** adoptar Space Grotesk implica re-probar la jerarquía actual (hoy el H1 del Hero es Inter 800 extrabold a 44–60px) antes de reemplazarla.

---

## 6. Sistema de logotipo

**Estado actual (✅ vigente):** existe un único archivo (`public/digisenda-logo.svg`), usado en negro sobre fondos claros y, mediante filtro CSS (`brightness-0 invert`), en blanco sobre el Hero oscuro (`slate-900`). No hay más variantes.

**Sistema propuesto (🆕, 4 versiones oficiales):**

| Versión | Compuesto por | Uso previsto |
|---|---|---|
| Horizontal | Símbolo + "DigiSenda Tax Service" | Sitio, documentos, email, encabezados |
| Vertical | — | Portadas, redes, material promocional, miniaturas |
| Reducida | Símbolo o inicial "D" | Favicon, foto de perfil, ícono de app, marca de agua |
| Institucional | "DigiSenda Tax Service" + *"Un servicio de DigiSenda AI LLC"* | Documentos formales, contratos |

**Reglas de uso (🆕, aplican a todas las versiones futuras):**
- No incluir logos, águilas, escudos o sellos del IRS ni banderas como elemento central.
- No usar símbolos de dólar ni formularios 1040 como parte del logo.
- Máximo dos colores en la versión principal.
- Mantener siempre una versión monocromática blanca y una azul oscuro.
- Evitar degradados complejos en documentos y contratos oficiales.

**Gap:** hoy solo existe el archivo horizontal/isotipo único; faltan por producir las variantes vertical, reducida e institucional.

---

## 7. Dirección fotográfica y voceros (🆕 propuesto)

**Personas:** Juan e Isamary (voceros reales), clientes latinos adultos, familias, trabajadores independientes, pequeños comerciantes, conductores — conversaciones y escenas reales (orientación, revisión de documentos, trabajo en computadora).

**Estilo:** iluminación natural o suave, tonos cálidos, expresiones tranquilas, fondos reales, composición limpia.

**Evitar:** personas excesivamente perfectas, oficinas genéricas, apretones de mano falsos, calculadoras/billetes como imagen principal, robots, hologramas, estética de multinacional o de banco.

**Voceros en video:** Isamary como rostro principal; Juan como autoridad/dirección; ambos en contenido institucional o de bienvenida.

**Gap frente al estado actual:** el sitio usa hoy una sola fotografía de stock genérica en el Hero (`hero-tax-professional.jpg`) — no hay fotografía real de Juan o Isamary todavía.

---

## 8. Fuentes y decisiones pendientes

**Compilado a partir de:**
- `docs/brand-kit digisenda ai tax service.html` — auditoría del código fuente (Tailwind, componentes, logo, tipografía real del sitio).
- `docs/brand_Kit_DigiSenda_Tax_Service_v2.md` — propuesta estratégica de marca.
- `SocialStudio/brands/taxes/brand.yaml` — voz, audiencia, contacto.
- `tax.digisendaai.com` — sitio en producción.

**Excluido deliberadamente de este documento** (pertenece a rediseño de sitio, no a kit de marca): estructura de Hero/secciones/proceso/CTA del sitio web, y el roadmap de implementación específico de web/SEO/CRM de la propuesta v2.

**Decisiones que requieren aprobación antes de ejecutar cualquier cambio:**
1. ¿Renombrar oficialmente de "DigiSenda AI Tax Services" a "DigiSenda Tax Service" + línea de respaldo?
2. ¿Conservar el morado (`#9333EA`) como acento, o migrar al AI Cyan (`#06B6D4`) propuesto?
3. ¿Adoptar Space Grotesk para titulares e IBM Plex Mono para datos?
4. ¿Producir las variantes de logo (vertical, reducida, institucional)?
5. ¿Programar sesión de fotografía real con Juan e Isamary?
