import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return [
        { slug: 'privacy' },
        { slug: 'terms' },
        { slug: 'disclaimer' },
        { slug: 'communications' },
    ];
}

const legalContent: Record<string, { title: string; content: string }> = {
    privacy: {
        title: 'Política de Privacidad',
        content: `
      <p><strong>Última actualización:</strong> Febrero 2026</p>
      
      <h3>1. Información que Recopilamos</h3>
      <p>DigiSenda AI Tax Services ("nosotros", "nuestro") recopila la siguiente información personal cuando usted utiliza nuestros servicios:</p>
      <ul>
        <li><strong>Información de contacto:</strong> nombre completo, dirección de correo electrónico, número de teléfono, dirección postal</li>
        <li><strong>Información fiscal:</strong> número de Seguro Social (SSN), información de ingresos (W2, 1099), deducciones, dependientes</li>
        <li><strong>Información de comunicación:</strong> registros de llamadas, mensajes SMS, correos electrónicos</li>
        <li><strong>Información técnica:</strong> dirección IP, tipo de navegador, páginas visitadas</li>
      </ul>

      <h3>2. Cómo Usamos Su Información</h3>
      <p>Utilizamos su información personal para:</p>
      <ul>
        <li>Preparar y presentar sus declaraciones de impuestos</li>
        <li>Comunicarnos con usted sobre su caso fiscal</li>
        <li>Programar citas y enviar recordatorios</li>
        <li>Cumplir con obligaciones legales y regulatorias</li>
        <li>Mejorar nuestros servicios</li>
      </ul>

      <h3>3. Compartir Información</h3>
      <p>No vendemos ni alquilamos su información personal. Podemos compartir su información con:</p>
      <ul>
        <li><strong>IRS y autoridades fiscales:</strong> cuando sea requerido por ley</li>
        <li><strong>Proveedores de servicios:</strong> que nos ayudan a operar nuestro negocio (bajo acuerdos de confidencialidad)</li>
        <li><strong>Autoridades legales:</strong> cuando sea requerido por orden judicial</li>
      </ul>

      <h3>4. Seguridad de Datos</h3>
      <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información, incluyendo:</p>
      <ul>
        <li>Cifrado SSL/TLS para transmisión de datos</li>
        <li>Almacenamiento seguro con acceso restringido</li>
        <li>Capacitación regular del personal en privacidad</li>
        <li>Auditorías de seguridad periódicas</li>
      </ul>

      <h3>5. Sus Derechos</h3>
      <p>Usted tiene derecho a:</p>
      <ul>
        <li>Acceder a su información personal</li>
        <li>Solicitar correcciones</li>
        <li>Solicitar eliminación (sujeto a requisitos legales de retención)</li>
        <li>Optar por no recibir comunicaciones de marketing</li>
      </ul>

      <h3>6. Retención de Datos</h3>
      <p>Conservamos sus registros fiscales durante al menos 7 años según lo requiere la ley federal.</p>

      <h3>7. Contacto</h3>
      <p>Para preguntas sobre esta política, contáctenos en: <a href="mailto:service.tax@digisendaai.com">service.tax@digisendaai.com</a></p>
    `,
    },
    terms: {
        title: 'Términos de Servicio',
        content: `
      <p><strong>Última actualización:</strong> Febrero 2026</p>

      <h3>1. Aceptación de Términos</h3>
      <p>Al utilizar los servicios de DigiSenda AI Tax Services, usted acepta estar legalmente vinculado por estos Términos de Servicio. Si no está de acuerdo, no utilice nuestros servicios.</p>

      <h3>2. Descripción de Servicios</h3>
      <p>Ofrecemos servicios profesionales de preparación de declaraciones de impuestos, incluyendo:</p>
      <ul>
        <li>Preparación de declaraciones federales y estatales</li>
        <li>Revisión de documentos fiscales (W2, 1099, etc.)</li>
        <li>Asesoría sobre deducciones y créditos aplicables</li>
        <li>Presentación electrónica ante el IRS</li>
      </ul>

      <h3>3. Responsabilidades del Cliente</h3>
      <p>Usted se compromete a:</p>
      <ul>
        <li>Proporcionar información completa, precisa y veraz</li>
        <li>Entregar todos los documentos fiscales relevantes</li>
        <li>Revisar su declaración antes de la presentación</li>
        <li>Pagar los honorarios acordados de manera oportuna</li>
        <li>Informar cualquier cambio en su situación fiscal</li>
      </ul>

      <h3>4. Honorarios y Pagos</h3>
      <p>Los honorarios se determinan según la complejidad de su declaración y se acuerdan antes de comenzar el trabajo. Los honorarios son no reembolsables una vez que se presenta la declaración.</p>

      <h3>5. Limitación de Responsabilidad</h3>
      <p>Nuestra responsabilidad se limita a la preparación profesional de su declaración basada en la información que usted proporciona. No somos responsables por:</p>
      <ul>
        <li>Información incorrecta o incompleta proporcionada por el cliente</li>
        <li>Cambios en las leyes fiscales después de la presentación</li>
        <li>Auditorías del IRS (aunque ofrecemos asistencia)</li>
        <li>Retrasos en el procesamiento por parte del IRS</li>
      </ul>

      <h3>6. Confidencialidad</h3>
      <p>Mantenemos estricta confidencialidad de su información fiscal según lo requiere la ley y los estándares profesionales.</p>

      <h3>7. Cancelación</h3>
      <p>Cualquiera de las partes puede cancelar el servicio antes de la presentación de la declaración. Los honorarios por trabajo ya realizado serán aplicables.</p>

      <h3>8. Modificaciones</h3>
      <p>Nos reservamos el derecho de modificar estos términos. Los cambios se publicarán en nuestro sitio web.</p>

      <h3>9. Ley Aplicable</h3>
      <p>Estos términos se rigen por las leyes del estado de Texas, Estados Unidos.</p>

      <h3>10. Contacto</h3>
      <p>Para preguntas sobre estos términos: <a href="mailto:service.tax@digisendaai.com">service.tax@digisendaai.com</a> | Tel: (817) 670-5508</p>
    `,
    },
    disclaimer: {
        title: 'Descargo de Responsabilidad',
        content: `
      <p><strong>Última actualización:</strong> Febrero 2026</p>

      <h3>1. Naturaleza del Servicio</h3>
      <p><strong>DigiSenda AI Tax Services es un servicio privado de preparación de impuestos.</strong> No somos una agencia gubernamental ni estamos afiliados con el IRS (Internal Revenue Service), el Departamento del Tesoro de EE. UU., ni ninguna otra entidad gubernamental federal, estatal o local.</p>

      <h3>2. No Garantizamos Resultados Específicos</h3>
      <p>Los resultados de su declaración de impuestos, incluyendo reembolsos o saldos adeudados, dependen completamente de:</p>
      <ul>
        <li>Su situación fiscal individual</li>
        <li>La precisión de la información que proporciona</li>
        <li>Las leyes fiscales aplicables</li>
        <li>Las políticas del IRS</li>
      </ul>
      <p><strong>No garantizamos ni prometemos montos específicos de reembolso.</strong> Cualquier estimación proporcionada es solo informativa y puede variar del resultado final.</p>

      <h3>3. No es Asesoramiento Legal o Financiero</h3>
      <p>La información proporcionada en este sitio web y durante nuestras consultas es solo para fines informativos relacionados con la preparación de impuestos. No constituye:</p>
      <ul>
        <li>Asesoramiento legal</li>
        <li>Asesoramiento financiero o de inversión</li>
        <li>Planificación patrimonial</li>
        <li>Asesoramiento contable integral</li>
      </ul>
      <p>Para asuntos legales o financieros complejos, consulte con un abogado o asesor financiero certificado.</p>

      <h3>4. Responsabilidad del Contribuyente</h3>
      <p>Usted, como contribuyente, es el responsable final de:</p>
      <ul>
        <li>La exactitud de su declaración de impuestos</li>
        <li>Revisar su declaración antes de firmar</li>
        <li>Proporcionar información completa y veraz</li>
        <li>Cumplir con todas las obligaciones fiscales</li>
      </ul>

      <h3>5. Cambios en Leyes Fiscales</h3>
      <p>Las leyes fiscales cambian frecuentemente. La información en este sitio es actual a la fecha de publicación, pero puede quedar desactualizada. Siempre trabajamos con la legislación vigente al momento de preparar su declaración.</p>

      <h3>6. Limitación de Responsabilidad</h3>
      <p>En ningún caso DigiSenda AI Tax Services será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan del uso de nuestros servicios.</p>

      <h3>7. Auditorías del IRS</h3>
      <p>Aunque preparamos declaraciones con el máximo cuidado profesional, el IRS puede seleccionar cualquier declaración para auditoría. Una auditoría no implica error en la preparación. Ofrecemos asistencia en caso de auditoría como servicio adicional.</p>

      <h3>8. Uso del Sitio Web</h3>
      <p>El uso de este sitio web es bajo su propio riesgo. No garantizamos que el sitio esté libre de errores o interrupciones.</p>

      <h3>9. Enlaces Externos</h3>
      <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido o prácticas de privacidad de esos sitios.</p>

      <h3>10. Contacto</h3>
      <p>Para aclaraciones sobre este descargo: <a href="mailto:service.tax@digisendaai.com">service.tax@digisendaai.com</a></p>
    `,
    },
    communications: {
        title: 'Política de Comunicaciones y Mensajería (SMS/A2P)',
        content: `
      <p><strong>Última actualización:</strong> Febrero 2026</p>

      <h3>1. Consentimiento para Comunicaciones</h3>
      <p>Al proporcionar su número de teléfono a DigiSenda AI Tax Services, usted acepta expresamente recibir:</p>
      <ul>
        <li><strong>Mensajes de texto (SMS):</strong> notificaciones sobre su caso, recordatorios de citas, actualizaciones de estado</li>
        <li><strong>Llamadas telefónicas:</strong> consultas, seguimiento de documentos, confirmaciones</li>
        <li><strong>Mensajes de WhatsApp:</strong> si opta por este canal de comunicación</li>
      </ul>
      <p><strong>Este consentimiento no es una condición para comprar nuestros servicios.</strong> Puede optar por comunicarse solo por correo electrónico o en persona.</p>

      <h3>2. Tipos de Mensajes</h3>
      <p>Los mensajes que puede recibir incluyen:</p>
      <ul>
        <li>Confirmaciones de citas programadas</li>
        <li>Recordatorios de documentos pendientes</li>
        <li>Notificaciones de estado de su declaración</li>
        <li>Alertas de plazos importantes</li>
        <li>Respuestas a sus consultas</li>
        <li>Información sobre cambios en leyes fiscales relevantes (ocasional)</li>
      </ul>

      <h3>3. Frecuencia de Mensajes</h3>
      <p>La frecuencia de mensajes varía según su caso individual. Puede recibir:</p>
      <ul>
        <li><strong>Durante temporada activa:</strong> 2-5 mensajes por semana</li>
        <li><strong>Fuera de temporada:</strong> mensajes ocasionales (menos de 1 por mes)</li>
      </ul>
      <p>No enviamos mensajes de marketing masivo.</p>

      <h3>4. Cómo Darse de Baja (Opt-Out)</h3>
      <p>Puede dejar de recibir mensajes SMS en cualquier momento:</p>
      <ul>
        <li><strong>Envíe "STOP"</strong> como respuesta a cualquiera de nuestros mensajes</li>
        <li><strong>Envíe un correo a:</strong> <a href="mailto:service.tax@digisendaai.com">service.tax@digisendaai.com</a> con el asunto "Cancelar SMS"</li>
        <li><strong>Llame al:</strong> (817) 670-5508 y solicite ser removido de la lista de SMS</li>
      </ul>
      <p>Recibirá un mensaje de confirmación de cancelación. Tenga en cuenta que aún puede recibir mensajes críticos relacionados con servicios ya contratados.</p>

      <h3>5. Cómo Obtener Ayuda</h3>
      <p>Para ayuda con mensajes SMS, envíe <strong>"HELP"</strong> como respuesta a cualquier mensaje o contáctenos en:</p>
      <ul>
        <li>Email: <a href="mailto:service.tax@digisendaai.com">service.tax@digisendaai.com</a></li>
        <li>Teléfono: (817) 670-5508</li>
      </ul>

      <h3>6. Tarifas y Cargos</h3>
      <p><strong>No cobramos por enviar mensajes SMS.</strong> Sin embargo:</p>
      <ul>
        <li>Pueden aplicarse tarifas estándar de mensajes y datos de su operador móvil</li>
        <li>Consulte con su proveedor de telefonía sobre su plan de mensajería</li>
        <li>Las tarifas varían según su operador (AT&T, Verizon, T-Mobile, etc.)</li>
      </ul>

      <h3>7. Operadores Compatibles</h3>
      <p>Nuestro servicio de mensajería es compatible con los principales operadores de EE. UU., incluyendo AT&T, Verizon, T-Mobile, Sprint, y la mayoría de operadores regionales.</p>

      <h3>8. Privacidad y Seguridad</h3>
      <p>Sus comunicaciones están protegidas según nuestra <a href="/legal/privacy">Política de Privacidad</a>. Nunca compartimos su número de teléfono con terceros para fines de marketing.</p>

      <h3>9. Cumplimiento A2P (Application-to-Person)</h3>
      <p>Cumplimos con todas las regulaciones de mensajería A2P, incluyendo:</p>
      <ul>
        <li>Registro de marca ante operadores</li>
        <li>Consentimiento expreso previo</li>
        <li>Mecanismos claros de opt-out</li>
        <li>Límites de frecuencia de mensajes</li>
      </ul>

      <h3>10. Cambios a Esta Política</h3>
      <p>Podemos actualizar esta política ocasionalmente. Los cambios se publicarán en esta página con una nueva fecha de actualización.</p>

      <h3>11. Información de Contacto</h3>
      <p><strong>DigiSenda AI Tax Services</strong><br>
      Email: <a href="mailto:service.tax@digisendaai.com">service.tax@digisendaai.com</a><br>
      Teléfono: (817) 670-5508<br>
      WhatsApp: (817) 670-5508<br>
      Ubicación: Texas, Estados Unidos</p>
    `,
    },
};

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = legalContent[slug];

    if (!page) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-slate-900">{page.title}</h1>
            <div
                className="prose prose-slate max-w-none text-slate-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: page.content }}
            />
            <div className="mt-12 pt-8 border-t border-slate-200">
                <a href="/" className="text-blue-600 hover:underline">← Volver al inicio</a>
            </div>
        </div>
    );
}
