import type { Language } from "@/lib/i18n/translations"

type Localized<T> = Record<Language, T>

export type ProjectId = "botito" | "codegym" | "gpsprop" | "frideza" | "chief"
export type ProjectStatus = "live" | "private" | "thesis"

export interface ProjectImage {
    src: string
    width: number
    height: number
    alt: Localized<string>
    /** Device mockup on a transparent background: shown without frame or shadow. */
    mockup?: boolean
}

export interface Project {
    id: ProjectId
    name: string
    status: ProjectStatus
    featured?: boolean
    url?: string
    instagram?: string
    /** A live demo the visitor can use right now (e.g. Botito's test bot on WhatsApp). */
    demo?: string
    /** Brand color behind the project's visuals. */
    panel: string
    /** How the cover sits on the panel: an inset screenshot, a centered logo or a full-bleed photo. */
    coverKind: "screenshot" | "logo" | "photo" | "device"
    cover: ProjectImage
    /** Optional second visual floating over the cover (a chat card, a phone). */
    overlay?: ProjectImage & { kind: "card" | "device" | "phone" }
    gallery: ProjectImage[]
    sector: Localized<string>
    /** The business need, in the client's words. Leads the project everywhere it appears. */
    need: Localized<string>
    tagline: Localized<string>
    problem: Localized<string>
    built: Localized<string[]>
    role: Localized<string>
    stack: string[]
}

const img = (src: string, width: number, height: number, es: string, en: string): ProjectImage => ({
    src,
    width,
    height,
    alt: { es, en },
})

const botitoLanding = img("/projects/botito-landing.webp", 2400, 1500, "Página principal de Botito", "Botito home page")
const botitoChat = img(
    "/projects/botito-chat.webp",
    980,
    730,
    "Conversación de WhatsApp donde el asistente agenda una visita",
    "WhatsApp conversation where the assistant books a viewing",
)
const codegymDashboard = {
    ...img(
        "/projects/codegym-dashboard.webp",
        2400,
        1600,
        "Panel del dueño con ingresos, egresos y asistencias, en una MacBook",
        "Owner dashboard with income, expenses and attendance, on a MacBook",
    ),
    mockup: true,
}
const codegymLanding = img("/projects/codegym-landing.webp", 1800, 1125, "Página principal de CodeGym", "CodeGym home page")
const codegymPortal = {
    ...img(
        "/projects/codegym-portal.webp",
        1800,
        1200,
        "Portal del socio en el celular: cuota al día y asistencia registrada",
        "Member app on a phone: fee paid and attendance logged",
    ),
    mockup: true,
}

export const projects: Project[] = [
    {
        id: "botito",
        name: "Botito",
        status: "live",
        featured: true,
        url: "https://botito.com.ar",
        instagram: "https://www.instagram.com/botitocrm/",
        // Botito's public test bot (the "Mandale un audio al bot de prueba" button on botito.com.ar).
        // It serves Argentine agencies, so the opening message is in Spanish in both languages.
        demo: `https://wa.me/5493585049517?text=${encodeURIComponent("Hola! Estoy buscando una propiedad, ¿qué tienen disponible?")}`,
        panel: "#1B7F4B",
        coverKind: "screenshot",
        cover: botitoLanding,
        overlay: { ...botitoChat, kind: "card" },
        gallery: [
            botitoLanding,
            botitoChat,
            img("/projects/botito-og.webp", 1200, 630, "Presentación de Botito: ninguna consulta sin responder", "Botito: no inquiry left unanswered"),
        ],
        sector: { es: "Inmobiliarias", en: "Real estate" },
        need: {
            es: "Responder cada consulta, incluso la que llega a las 3 de la mañana.",
            en: "Answer every inquiry, even the one that arrives at 3 a.m.",
        },
        tagline: {
            es: "Asistente de WhatsApp con IA, CRM y portal web para inmobiliarias.",
            en: "AI WhatsApp assistant, CRM and website for real estate agencies.",
        },
        problem: {
            es: "Las consultas llegan a cualquier hora, muchas en audio, y quedan repartidas en el celular de cada asesor. Las que entran de noche o el fin de semana se enfrían antes de que alguien las vea.",
            en: "Inquiries arrive at all hours, many as voice notes, scattered across each agent's phone. The ones that come in at night or on weekends go cold before anyone sees them.",
        },
        built: {
            es: [
                "Asistente sobre la API oficial de WhatsApp que responde con el inventario real: busca propiedades, manda la ficha y agenda la visita.",
                "Transcripción de audios con IA, para que el asistente entienda los mensajes de voz igual que los de texto.",
                "Bandeja compartida y CRM en tablero Kanban: todo el equipo ve cada interesado y en qué etapa está.",
                "Portal web propio para cada inmobiliaria, con buscador y fichas pensadas para aparecer en Google.",
                "Autogestión para inquilinos: cuotas, comprobantes y reclamos de mantenimiento.",
                "Plataforma multi-inmobiliaria: cada cliente con sus usuarios, datos y número de WhatsApp separados.",
            ],
            en: [
                "An assistant on the official WhatsApp API that answers from the live inventory: it finds listings, sends the details and books the viewing.",
                "AI voice-note transcription, so the assistant understands audio messages just like text.",
                "A shared inbox and Kanban CRM: the whole team sees every lead and the stage it's in.",
                "A website for each agency, with search and listing pages built to rank on Google.",
                "Tenant self-service: rent payments, receipts and maintenance requests.",
                "Multi-tenant platform: each agency has its own users, data and WhatsApp number.",
            ],
        },
        role: { es: "Producto, diseño y desarrollo full-stack", en: "Product, design and full-stack development" },
        stack: ["Next.js", "TypeScript", "Firebase", "Vercel AI SDK", "WhatsApp Cloud API", "Google Maps"],
    },
    {
        id: "codegym",
        name: "CodeGym",
        status: "live",
        featured: true,
        url: "https://www.codegym.fit",
        panel: "#3563E9",
        coverKind: "device",
        cover: codegymDashboard,
        overlay: { ...codegymPortal, kind: "device" },
        gallery: [
            codegymDashboard,
            codegymPortal,
            codegymLanding,
            img(
                "/projects/codegym-kiosk.webp",
                1800,
                760,
                "Kiosko de entrada: el socio pone su DNI y queda registrada la asistencia",
                "Check-in kiosk: members enter their ID and attendance is logged",
            ),
        ],
        sector: { es: "Gimnasios", en: "Gyms" },
        need: {
            es: "Cobrar cuotas y controlar el acceso sin un mostrador colapsado.",
            en: "Collect fees and check members in without a jammed front desk.",
        },
        tagline: {
            es: "Gestión de gimnasios con portal del socio y kiosko de entrada.",
            en: "Gym management with a member app and a check-in kiosk.",
        },
        problem: {
            es: "Planillas que se desordenan, cuotas vencidas que nadie persigue y un mostrador colapsado en la hora pico.",
            en: "Spreadsheets that drift out of date, overdue fees nobody chases and a front desk that jams at peak hours.",
        },
        built: {
            es: [
                "Panel del dueño con clientes, membresías, cobros, vencimientos, gastos y estadísticas.",
                "Portal del socio: entra con DNI y PIN desde el celular, sin crear cuenta, y ve su cuota y sus asistencias.",
                "Kiosko en una tablet en la puerta: el socio pone su DNI y queda registrado; si debe la cuota, no pasa.",
                "Recordatorios por WhatsApp y reportes exportables a Excel y PDF.",
                "Venta, puesta en marcha y soporte a cada gimnasio, de la demo en adelante.",
            ],
            en: [
                "Owner dashboard with members, memberships, payments, renewals, expenses and stats.",
                "Member app: log in with ID number and PIN from a phone, no account needed, to check fees and attendance.",
                "A tablet kiosk at the door: members enter their ID to check in; if their fee is overdue, they can't.",
                "WhatsApp reminders and reports exportable to Excel and PDF.",
                "Sales, onboarding and support for every gym, from the first demo onwards.",
            ],
        },
        role: { es: "Co-fundador: producto, desarrollo y ventas", en: "Co-founder: product, engineering and sales" },
        stack: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
        id: "gpsprop",
        name: "GPSProp",
        status: "live",
        url: "https://www.gpsprop.com.ar",
        panel: "#D6EE5A",
        coverKind: "screenshot",
        cover: img(
            "/projects/gpsprop-home.webp",
            2400,
            1500,
            "Buscador y propiedades destacadas de GPSProp",
            "GPSProp search and featured listings",
        ),
        overlay: {
            ...img("/projects/gpsprop-mobile.webp", 720, 1440, "GPSProp en el celular", "GPSProp on a phone"),
            kind: "phone",
        },
        gallery: [img("/projects/gpsprop-mobile.webp", 720, 1440, "GPSProp en el celular", "GPSProp on a phone")],
        sector: { es: "Portal inmobiliario", en: "Property portal" },
        need: {
            es: "Encontrar todas las propiedades de la región en un solo lugar.",
            en: "Find every listing in the region in one place.",
        },
        tagline: {
            es: "El portal inmobiliario de Río Cuarto y la región.",
            en: "The property portal for Río Cuarto and the surrounding region.",
        },
        problem: {
            es: "Las propiedades de la zona estaban dispersas entre redes sociales y portales nacionales, sin un lugar donde comparar opciones de inmobiliarias verificadas.",
            en: "Local listings were scattered across social media and national portals, with no single place to compare listings from verified agencies.",
        },
        built: {
            es: [
                "Buscador por operación, tipo de propiedad y localidad, con ubicación en Google Maps.",
                "Panel para inmobiliarias: carga guiada de propiedades, fotos que se reordenan arrastrando y ubicación en el mapa.",
                "Directorio de profesionales del hogar para que los usuarios los contacten directo.",
                "Alta de inmobiliarias con verificación y doble factor de autenticación.",
                "Emails automáticos de notificación para usuarios e inmobiliarias.",
            ],
            en: [
                "Search by operation, property type and town, with Google Maps locations.",
                "Agency dashboard: guided listing creation, drag-to-reorder photos and map placement.",
                "A directory of home-service professionals that users can contact directly.",
                "Agency sign-up with verification and two-factor authentication.",
                "Automated notification emails for users and agencies.",
            ],
        },
        role: { es: "Desarrollo full-stack", en: "Full-stack development" },
        stack: ["Next.js", "TypeScript", "Firebase", "Google Maps", "Resend", "Tailwind CSS"],
    },
    {
        id: "frideza",
        name: "Pedidos Frideza",
        status: "private",
        panel: "#B91919",
        coverKind: "logo",
        cover: img("/projects/frideza-logo.svg", 686, 170, "Logo de Frideza", "Frideza logo"),
        gallery: [],
        sector: { es: "Frigorífico", en: "Meat packing" },
        need: {
            es: "Manejar pedidos y entregas desde el celular, no desde planillas.",
            en: "Run orders and deliveries from a phone, not from spreadsheets.",
        },
        tagline: {
            es: "Pedidos, hojas de ruta y entregas para Frigorífico General Deheza, desde el celular.",
            en: "Orders, delivery routes and drop-offs for Frigorífico General Deheza, run from a phone.",
        },
        problem: {
            es: "La operación diaria dependía de planillas y llamados: tomar el pedido, armar la hoja de ruta, entregar y cerrar el pedido pasaba por varias manos.",
            en: "Daily operations ran on spreadsheets and phone calls: taking an order, building the route sheet, delivering and closing it went through several hands.",
        },
        built: {
            es: [
                "App que se instala desde un enlace y está pensada para el celular: el vendedor carga el pedido donde está.",
                "Pedidos con aprobación y estados que no se pueden saltear ni pisar entre dos personas.",
                "Rutas de entrega optimizadas con Google Maps y hoja de ruta en PDF lista para imprimir.",
                "Pantalla del chofer: ve su ruta del día y registra cada entrega con foto del comprobante; el pedido se cierra solo.",
                "Cuatro roles (administración, logística, vendedor y chofer) con permisos controlados en el servidor.",
                "Exportación a Excel y aviso cuando el teléfono se queda sin señal, para no perder datos.",
            ],
            en: [
                "An app installed from a link and designed for phones: sales reps enter orders wherever they are.",
                "Orders with approval and states that can't be skipped or overwritten by two people at once.",
                "Delivery routes optimized with Google Maps and a print-ready PDF route sheet.",
                "Driver screen: drivers see the day's route and log each drop-off with a photo of the receipt; the order closes itself.",
                "Four roles (admin, logistics, sales and driver) with permissions enforced on the server.",
                "Excel export and a warning when the phone loses signal, so no data gets lost.",
            ],
        },
        role: { es: "Desarrollo, implementación y operación", en: "Development, rollout and operation" },
        stack: ["Next.js", "Firebase", "Google Maps", "PWA", "Vitest", "Playwright"],
    },
    {
        id: "chief",
        name: "Chief Dashboard",
        status: "thesis",
        panel: "#2A2F3A",
        coverKind: "photo",
        cover: img(
            "/projects/chief-dashboard.webp",
            1676,
            910,
            "Chief Dashboard mostrando un gráfico generado a partir de una pregunta",
            "Chief Dashboard showing a chart generated from a question",
        ),
        gallery: [],
        sector: { es: "Inteligencia artificial", en: "Artificial intelligence" },
        need: {
            es: "Obtener respuestas de la base de datos sin esperar un reporte.",
            en: "Get answers from the database without waiting for a report.",
        },
        tagline: {
            es: "Preguntale a tu base de datos en lenguaje natural y recibí métricas y gráficos.",
            en: "Ask your database questions in plain language and get metrics and charts back.",
        },
        problem: {
            es: "Quien toma decisiones depende de que alguien técnico arme cada consulta o reporte que necesita.",
            en: "Decision makers depend on someone technical to build every query or report they need.",
        },
        built: {
            es: [
                "Chat que convierte preguntas de negocio en consultas sobre bases PostgreSQL.",
                "Arquitectura de agentes con MCP para acceder a los datos de forma controlada.",
                "Gráficos y métricas generados en el momento, que se pueden fijar para volver a verlos.",
            ],
            en: [
                "A chat that turns business questions into queries against PostgreSQL databases.",
                "An agent architecture built on MCP for controlled access to the data.",
                "Charts and metrics generated on the spot, which can be pinned to revisit later.",
            ],
        },
        role: { es: "Proyecto final de Ingeniería en Sistemas: diseño y desarrollo", en: "Systems Engineering final project: design and development" },
        stack: ["React", "Express", "TypeScript", "PostgreSQL", "Docker", "MCP"],
    },
]

/** Cover first, then the extra gallery images, without duplicates. */
export function projectImages(project: Project): ProjectImage[] {
    const all = [project.cover, ...project.gallery]
    return all.filter((image, i) => all.findIndex((other) => other.src === image.src) === i)
}

export const getProject = (id: string) => projects.find((p) => p.id === id)

/** Panels light enough to need dark text and outlines. */
export const isLightPanel = (project: Project) => project.id === "gpsprop"

export const site = {
    whatsapp: "https://wa.me/5493584118627",
    email: "martincarnino2001@gmail.com",
    linkedin: "https://www.linkedin.com/in/martin-carnino/",
    github: "https://github.com/Carnino",
    wayclo: "https://wayclo.com",
}
