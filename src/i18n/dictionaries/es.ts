import type { Dictionary } from "../types";

const es: Dictionary = {
  nav: {
    features: "Funciones",
    faq: "Preguntas frecuentes",
    support: "Soporte",
    comingSoon: "Próximamente",
  },
  footer: {
    tagline: "Tu contenido. Tu pantalla.",
    features: "Funciones",
    privacy: "Política de privacidad",
    support: "Soporte",
    terms: "Términos de uso",
    copyright: "© 2026 ITQuotes. Todos los derechos reservados.",
    madeBy: "Un producto de itQuotes — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — TV en directo, bien hecho",
    metaDescription:
      "Viewaro es un reproductor IPTV rápido y elegante para iPhone, iPad, Mac, Apple TV, Android y Android TV. Fuentes M3U, Xtream y manuales, guía EPG en directo, favoritos y control parental — próximamente.",
    eyebrow: "Viewaro Player",
    heroLine1: "Tu contenido.",
    heroLine2: "Tu pantalla.",
    heroSub:
      "Un reproductor IPTV rápido y elegante para tu móvil, tu Mac y tu televisor. Trae tu propia lista de reproducción — Viewaro se encarga del resto.",
    badge: "Próximamente en App Store y Google Play",
    featuresEyebrow: "Funciones",
    featuresHeading: "Todo lo que una app de TV en directo debería ser.",
    features: [
      {
        title: "TV en directo y guía",
        body: "Una guía de programación integrada con progreso en directo y lo que viene después — sin necesidad de una pantalla aparte.",
      },
      {
        title: "Cualquier fuente",
        body: "Conecta una lista M3U, una cuenta Xtream Codes o añade canales uno por uno. Combina varias fuentes a la vez.",
      },
      {
        title: "Favoritos y búsqueda",
        body: "Crea una lista de canales personal y encuentra cualquier cosa al instante, en todas las fuentes que hayas añadido.",
      },
      {
        title: "Sincronización en la nube",
        body: "Fuentes, favoritos y ajustes te siguen del móvil al televisor. Inicia sesión una vez, u omítelo — el modo invitado también funciona.",
      },
      {
        title: "Control parental",
        body: "Bloquea canales individuales con un PIN, para que el mando pueda entregarse sin preocupaciones.",
      },
      {
        title: "Diseñado para cada pantalla",
        body: "Un reproductor tan cómodo en el móvil como en Apple TV y Android TV, con navegación completa por mando incluida.",
      },
    ],
    integrationsEyebrow: "En la hoja de ruta",
    integrationsHeading: "Llegan películas y series.",
    integrationsSub:
      "Un catálogo enriquecido con metadatos sobre la TV en directo — integraciones planificadas, aún no disponibles.",
    integrations: [
      {
        name: "TMDB",
        body: "Carátulas, reparto y sinopsis para el catálogo de películas y series.",
      },
      {
        name: "Trakt",
        body: "Sincronización de historial y progreso de visionado, si ya lo llevas ahí.",
      },
    ],
    plannedLabel: "Planificado",
    howEyebrow: "Cómo funciona",
    howHeading: "Listo en un minuto.",
    steps: [
      {
        step: "01",
        title: "Instala Viewaro",
        body: "En tu móvil, tablet, Mac o televisor. Una app, la misma experiencia en todas partes.",
      },
      {
        step: "02",
        title: "Añade tu lista",
        body: "Pega un enlace M3U o inicia sesión con tu cuenta Xtream. Tus canales aparecen en segundos.",
      },
      {
        step: "03",
        title: "Empieza a ver",
        body: "TV en directo con guía de programación completa, favoritos y cambio de canal instantáneo. Eso es todo.",
      },
    ],
    faqEyebrow: "Preguntas frecuentes",
    faqHeading: "Buenas preguntas.",
    faqs: [
      {
        q: "¿Viewaro incluye canales o streams?",
        a: "No. Viewaro es un reproductor — no contiene canales, streams ni suscripciones de ningún tipo. Tú conectas tu propia lista de tu propio proveedor, y Viewaro le da un hogar precioso.",
      },
      {
        q: "¿Qué plataformas son compatibles?",
        a: "Viewaro se está desarrollando para iPhone, iPad, Mac, Apple TV, Android y Android TV.",
      },
      {
        q: "¿Qué formatos de lista puedo usar?",
        a: "Listas M3U/M3U8 y cuentas Xtream Codes, además de canales añadidos manualmente. Los datos EPG se admiten vía XMLTV, detectados automáticamente desde tu lista o añadidos manualmente.",
      },
      {
        q: "¿Necesito una cuenta?",
        a: "No — todo funciona en modo invitado. Una cuenta gratuita opcional añade sincronización en la nube, para que tus fuentes, favoritos y ajustes te sigan entre dispositivos.",
      },
      {
        q: "¿Cuándo se lanza?",
        a: "Viewaro está actualmente en desarrollo y pruebas en todas las plataformas. Los detalles del lanzamiento aparecerán aquí primero.",
      },
    ],
    ctaHeading: "Lanzamiento próximo.",
    ctaBody:
      "Viewaro se está desarrollando y probando en las cinco plataformas. Vuelve pronto para conocer los detalles del lanzamiento.",
  },
  legal: {
    updatedLabel: "Última actualización:",
    privacy: {
      title: "Política de privacidad",
      metaDescription: "Cómo gestiona Viewaro tus datos.",
      updated: "30 de julio de 2026",
      sections: [
        {
          paragraphs: [
            "Viewaro se basa en un principio simple: **tu contenido es asunto tuyo.** La app es un reproductor de listas que tú proporcionas — no nos interesa lo que ves, y la app está diseñada para que siga siendo así.",
          ],
        },
        {
          heading: "Qué almacena Viewaro en tu dispositivo",
          list: [
            "**Fuentes de listas** — las URL M3U, datos del servidor Xtream Codes y canales añadidos manualmente que configures. Las credenciales se guardan en el almacenamiento seguro del sistema operativo (Keychain en plataformas Apple, almacenamiento basado en Keystore en Android).",
            "**Preferencias** — favoritos, canales vistos recientemente, ajustes de diseño y reproducción, PIN de control parental.",
            "**Datos de la guía de programación** — datos EPG (XMLTV) descargados de la URL que configures, guardados en caché localmente.",
          ],
        },
        {
          paragraphs: [
            "La reproducción ocurre directamente entre tu dispositivo y los servidores de tu lista. Tus streams nunca pasan por nosotros, ni los grabamos ni los reportamos.",
          ],
        },
        {
          heading: "Cuenta opcional y sincronización en la nube",
          paragraphs: [
            "Viewaro funciona completamente sin cuenta. Si decides crear una (para sincronizar fuentes, favoritos y ajustes entre dispositivos), almacenamos:",
          ],
        },
        {
          list: [
            "tu dirección de correo electrónico (o el identificador proporcionado por Iniciar sesión con Apple/Google);",
            "los datos sincronizados en sí: tus fuentes, favoritos y ajustes.",
          ],
        },
        {
          paragraphs: [
            "Estos datos se usan únicamente para ofrecer la sincronización. Puedes eliminar tu cuenta y todos los datos sincronizados en cualquier momento desde la app.",
          ],
        },
        {
          heading: "Compras",
          paragraphs: [
            "Las suscripciones son procesadas por Apple (App Store) o Google (Google Play). Nunca vemos tus datos de pago. Usamos RevenueCat, un servicio de gestión de suscripciones, para validar los derechos de compra; recibe un identificador de usuario anónimo y recibos de compra, no tu identidad.",
          ],
        },
        {
          heading: "Analítica",
          paragraphs: [
            "Podemos recopilar estadísticas de uso anónimas y agregadas (como qué pantallas se usan o si ocurren errores de reproducción) para mejorar la app. Estas estadísticas no contienen información personal, identificadores de cuenta, ni nada sobre el contenido de tus listas o lo que ves.",
          ],
        },
        {
          heading: "Lo que no hacemos",
          list: [
            "No vendemos ni compartimos tus datos con terceros con fines de marketing.",
            "No rastreamos lo que ves.",
            "No mostramos anuncios ni usamos SDK publicitarios.",
            "No recopilamos tu ubicación.",
          ],
        },
        {
          heading: "Retención y eliminación de datos",
          paragraphs: [
            "Los datos en el dispositivo permanecen en tu dispositivo y se eliminan al desinstalar la app. Los datos de la cuenta se conservan solo mientras exista tu cuenta — eliminar tu cuenta desde la app los borra permanentemente.",
          ],
        },
        {
          heading: "Menores",
          paragraphs: [
            "Viewaro no está dirigido a menores. La función de control parental existe para que los adultos puedan restringir el acceso a canales en pantallas compartidas.",
          ],
        },
        {
          heading: "Cambios",
          paragraphs: [
            "Actualizaremos esta política a medida que la app evolucione, indicando la fecha de la última revisión en la parte superior de esta página.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [
            "¿Preguntas sobre privacidad? Visita nuestra [página de soporte](/support) o escríbenos — los detalles están ahí.",
          ],
        },
      ],
    },
    terms: {
      title: "Términos de uso",
      metaDescription: "Términos de uso de la app Viewaro.",
      updated: "30 de julio de 2026",
      sections: [
        {
          paragraphs: [
            "Estos términos se aplican a la aplicación Viewaro en todas las plataformas compatibles (iPhone, iPad, Mac, Apple TV, Android y Android TV). Al usar Viewaro, aceptas estos términos.",
          ],
        },
        {
          heading: "1. Viewaro es un reproductor, no un servicio de contenido",
          paragraphs: [
            "Viewaro **no** proporciona, vende, aloja ni empaqueta canales de televisión, streams, vídeos u otro contenido multimedia. La app reproduce contenido exclusivamente desde fuentes que **tú** configuras — tus propias listas, servidores y suscripciones de proveedores externos.",
            "Eres el único responsable de las fuentes que añadas y de asegurarte de que tienes derecho legal a acceder y ver ese contenido en tu país. Viewaro y su desarrollador no tienen ninguna afiliación con proveedores de contenido y no aceptan responsabilidad por contenido de terceros, su legalidad, disponibilidad o calidad.",
          ],
        },
        {
          heading: "2. Licencia",
          paragraphs: [
            "Te concedemos una licencia personal, no exclusiva e intransferible para usar Viewaro en dispositivos que poseas o controles, según lo permitan los términos de App Store o Google Play mediante los que la obtuviste. En plataformas Apple, se aplica el [Acuerdo de licencia de usuario final de aplicaciones con licencia](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) estándar de Apple donde no sea sustituido por estos términos.",
          ],
        },
        {
          heading: "3. Suscripciones",
          paragraphs: [
            "Algunas funciones pueden requerir una suscripción de pago. Las suscripciones se facturan a través de tu cuenta de App Store o Google Play, se renuevan automáticamente salvo que se cancelen al menos 24 horas antes del final del periodo vigente, y pueden gestionarse o cancelarse en los ajustes de tu cuenta de la tienda. Los precios se muestran en la app antes de la compra. Los reembolsos son gestionados por Apple o Google según sus políticas.",
          ],
        },
        {
          heading: "4. Uso aceptable",
          list: [
            "No uses Viewaro para acceder a contenido que no tienes derecho legal a ver.",
            "No intentes aplicar ingeniería inversa, revender ni redistribuir la app.",
            "No uses la app de ninguna forma que infrinja la legislación aplicable.",
          ],
        },
        {
          heading: "5. Exención de responsabilidad y limitación de responsabilidad",
          paragraphs: [
            'Viewaro se proporciona "tal cual", sin garantías de ningún tipo. En la medida permitida por la ley, el desarrollador no es responsable de los daños derivados del uso de la app, incluidos los causados por contenido de terceros o la falta de disponibilidad de tus fuentes.',
          ],
        },
        {
          heading: "6. Cambios",
          paragraphs: [
            "Podemos actualizar estos términos a medida que la app evolucione. El uso continuado tras una actualización constituye aceptación. La fecha de revisión se muestra en la parte superior de esta página.",
          ],
        },
        {
          heading: "7. Contacto",
          paragraphs: [
            "¿Preguntas sobre estos términos? Visita nuestra [página de soporte](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Soporte",
      metaDescription: "Obtén ayuda con Viewaro.",
      sections: [
        {
          paragraphs: [
            "Viewaro está actualmente en desarrollo. Cuando se lance, esta página será la forma más rápida de obtener ayuda. Las preguntas más comunes se responden a continuación — para cualquier otra cosa, contáctanos.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [
            "Escríbenos a [support@itquotes.hr](mailto:support@itquotes.hr) e incluye tu dispositivo, versión del sistema operativo y una breve descripción del problema. Nunca incluyas la URL de tu lista ni credenciales de tu proveedor en un correo.",
          ],
        },
        {
          heading: "Preguntas frecuentes",
          topics: [
            {
              q: "Mi lista no carga",
              a: "Verifica la URL con tu proveedor — debe apuntar a un archivo M3U/M3U8 o a un servidor Xtream Codes válido. Si la lista carga en un navegador pero no en la app, tu proveedor podría estar bloqueando el acceso desde apps; contáctalo.",
            },
            {
              q: "Un canal no se reproduce",
              a: 'La disponibilidad del stream depende totalmente de tu proveedor. Prueba el mismo canal más tarde, o verifica que funcione en el portal de tu proveedor. La opción "omitir canales rotos" de Viewaro puede ocultar canales que fallan repetidamente.',
            },
            {
              q: "La guía de programación está vacía",
              a: "Los datos EPG provienen de una fuente XMLTV. Si tu lista no anuncia una, añade la URL EPG manualmente en los ajustes de la fuente y actualiza la guía.",
            },
            {
              q: "¿Cómo cancelo mi suscripción?",
              a: "Las suscripciones las gestiona Apple o Google, no nosotros. En dispositivos Apple: Ajustes → tu nombre → Suscripciones. En Android: Play Store → Pagos y suscripciones.",
            },
            {
              q: "¿Cómo elimino mi cuenta?",
              a: "En la app, abre la sección de cuenta y elige Eliminar cuenta. Esto elimina permanentemente tu cuenta y todos los datos sincronizados.",
            },
          ],
        },
        {
          heading: "Una nota sobre el contenido",
          paragraphs: [
            "Viewaro es solo un reproductor — no incluye canales ni streams, y no podemos ayudar con preguntas sobre el contenido, precios o cuenta de ningún proveedor específico. Para todo lo relacionado con los propios canales, contacta con tu proveedor.",
          ],
        },
      ],
    },
  },
};

export default es;
