// Envío de leads con EmailJS (API REST) protegido con Google reCAPTCHA v3.
// Las claves (públicas por diseño) vienen de lumen_site()['emailjs'] y ['recaptcha_site_key'] vía window.lumenData.
// El token de reCAPTCHA se envía como "g-recaptcha-response": EmailJS lo verifica si el reCAPTCHA está
// configurado en la plantilla (EmailJS → Email Templates → Settings → reCAPTCHA, con la Secret Key).
import data from "./data"

const config = data.emailjs || {}
let recaptchaPromise = null

// Carga el script de reCAPTCHA una sola vez (se llama al primer foco en un formulario y antes de enviar).
export function loadRecaptcha() {
  if (!config.recaptchaKey) return Promise.resolve(null)
  if (!recaptchaPromise) {
    recaptchaPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(config.recaptchaKey)}`
      script.async = true
      script.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha))
      script.onerror = () => {
        recaptchaPromise = null
        reject(new Error("recaptcha"))
      }
      document.head.appendChild(script)
    })
  }
  return recaptchaPromise
}

async function recaptchaToken(action) {
  const grecaptcha = await loadRecaptcha()
  return grecaptcha ? grecaptcha.execute(config.recaptchaKey, { action }) : ""
}

async function send(templateId, templateParams, action) {
  const token = await recaptchaToken(action) // Un token por envío: reCAPTCHA no reutiliza tokens.
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true, // El envío termina aunque el visitante cierre o cambie de página.
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: templateId,
      user_id: config.publicKey,
      template_params: { ...templateParams, "g-recaptcha-response": token }
    })
  })
  if (!response.ok) {
    // El motivo exacto de EmailJS queda en la consola del navegador para diagnosticar.
    console.warn(`[EmailJS] ${templateId}: ${response.status} ${await response.text().catch(() => "")}`)
    throw new Error(response.status === 429 ? "rate_limited" : "generic")
  }
}

export async function sendLead(templateParams) {
  if (!config.serviceId || !config.templateId || !config.publicKey) throw new Error("generic")
  await send(config.templateId, templateParams, "lead_submit")
}

// Textos del auto-reply en el idioma que eligió el cliente en el formulario (no el de la página).
const autoReplyCopy = {
  en: {
    subject: "We received your request | Lumen Income Tax",
    heading: "Thank you, %s.",
    intro: "We received your request and a member of our team will contact you as soon as possible.",
    summary_title: "Your request",
    label_interest: "Interested in",
    label_phone: "We will call you at",
    label_time: "Best time to reach you",
    next_title: "What happens next",
    step_1: "We review your request.",
    step_2: "We call you to understand your situation.",
    step_3: "We let you know which documents to bring to your appointment.",
    cta: "Book an appointment",
    privacy: "For your security, never send your Social Security number or tax documents by email.",
    signoff: "The Lumen Income Tax team",
    interests: { individual: "Individual Taxes", business: "Business Taxes", irs: "IRS Notice", other: "Other" },
    times: { any: "Any time", morning: "Morning", afternoon: "Afternoon" }
  },
  es: {
    subject: "Recibimos tu solicitud | Lumen Income Tax",
    heading: "Gracias, %s.",
    intro: "Recibimos tu solicitud y una persona de nuestro equipo se comunicará contigo lo antes posible.",
    summary_title: "Tu solicitud",
    label_interest: "Te interesa",
    label_phone: "Te llamaremos al",
    label_time: "Mejor horario para contactarte",
    next_title: "Qué sigue",
    step_1: "Revisamos tu solicitud.",
    step_2: "Te llamamos para entender tu situación.",
    step_3: "Te indicamos qué documentos traer a tu cita.",
    cta: "Agendar una cita",
    privacy: "Por tu seguridad, nunca envíes tu número de Seguro Social ni documentos fiscales por correo.",
    signoff: "El equipo de Lumen Income Tax",
    interests: { individual: "Impuestos personales", business: "Impuestos de negocio", irs: "Carta del IRS", other: "Otro" },
    times: { any: "Cualquier horario", morning: "Mañana", afternoon: "Tarde" }
  }
}

// Variables del auto-reply al cliente. El Auto-Reply nativo de EmailJS (plantilla del lead → pestaña Auto-Reply,
// vinculada a autoReplyTemplateId) recibe los mismos parámetros que el lead, así que se envían juntos en una sola petición.
// Van en el idioma que eligió el cliente; interest y contact_time del lead quedan en inglés para el equipo,
// por eso las versiones traducidas para el cliente se llaman client_interest y client_contact_time.
export function autoReplyParams({ name, language, interest, contactTime }) {
  const copy = autoReplyCopy[language === "es" ? "es" : "en"]
  const { interests, times, heading, ...texts } = copy
  return {
    ...texts,
    heading: heading.replace("%s", name.split(/\s+/)[0]),
    to_name: name,
    client_interest: interests[interest] || interests.other,
    client_contact_time: times[contactTime] || times.any,
    booking_url: data.site?.bookingUrl || "",
    lang: language === "es" ? "es" : "en"
  }
}
