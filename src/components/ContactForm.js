import React, { useId, useState } from "react"
import data, { hasString, t } from "../lib/data"
import Icon from "./Icon"

// Formulario corto del brief (sección 09). No pedir SSN, W-2, datos bancarios ni archivos adjuntos.
// Props (desde data-* en PHP): interest (valor preseleccionado), variant ("compact" para el hero), source (origen del lead).
const interests = ["individual", "business", "irs", "other"]
const contactTimes = ["any", "morning", "afternoon"]
const inputClass = "mt-1 block w-full rounded-md border border-ink/20 bg-white px-3 py-2 short:py-1.5 text-sm text-ink shadow-sm transition focus:border-cianotipo focus:ring-2 focus:ring-cianotipo/20 focus:outline-none"
const labelClass = "block text-sm font-medium text-lumen"

function initialInterest(fallback) {
  const fromUrl = new URLSearchParams(window.location.search).get("interest")
  if (interests.includes(fromUrl)) return fromUrl
  return interests.includes(fallback) ? fallback : ""
}

function ContactTimeSelect({ id, value, onChange }) {
  return (
    <div>
      <label htmlFor={`${id}-contact-time`} className={labelClass}>
        {t("form.contact_time")}
      </label>
      <select id={`${id}-contact-time`} name="contact_time" value={value} onChange={onChange} className={inputClass}>
        {contactTimes.map(option => (
          <option key={option} value={option}>
            {t(`form.contact_time_${option}`)}
          </option>
        ))}
      </select>
    </div>
  )
}

function ContactForm({ interest, variant, source = "contact" }) {
  const compact = variant === "compact"
  const id = useId()
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    language: data.lang || "en",
    interest: initialInterest(interest),
    contact_time: "any",
    message: "",
    consent: false,
    website: "",
    source
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  function update(event) {
    const { name, value, type, checked } = event.target
    setValues(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus("sending")
    setError("")

    try {
      const response = await fetch(data.rest.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) throw new Error(result.code || "generic")

      setStatus("success")
      ;(window.dataLayer = window.dataLayer || []).push({ event: "form_submit_success", form: source })
    } catch (err) {
      const key = `form.error_${err.message}`
      setStatus("error")
      setError(hasString(key) ? t(key) : t("form.error_generic"))
    }
  }

  if (status === "success") {
    return (
      <div className="flex animate-pop-in gap-4 rounded-xl bg-celeste-light p-6" role="status">
        <Icon name="check-circle" className="h-7 w-7 text-lumen" />
        <div>
          <p className="font-semibold text-lumen">{t("form.success_title")}</p>
          <p className="mt-1 text-sm text-ink/70">{t("form.success_text")}</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4 short:space-y-3" : "space-y-5"}>
      <div className={`grid items-end sm:grid-cols-2 ${compact ? "gap-4 short:gap-3" : "gap-5"}`}>
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            {t("form.name")} <span className="text-cianotipo">*</span>
          </label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required value={values.name} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            {t("form.phone")} <span className="text-cianotipo">*</span>
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" required value={values.phone} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            {t("form.email")}
          </label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" value={values.email} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${id}-language`} className={labelClass}>
            {t("form.language")}
          </label>
          <select id={`${id}-language`} name="language" value={values.language} onChange={update} className={inputClass}>
            <option value="en">{t("form.language_en")}</option>
            <option value="es">{t("form.language_es")}</option>
          </select>
        </div>
      </div>

      {compact ? (
        <div className="grid items-end gap-4 sm:grid-cols-2 short:gap-3">
          <div>
            <label htmlFor={`${id}-interest`} className={labelClass}>
              {t("form.interest")}
            </label>
            <select id={`${id}-interest`} name="interest" value={values.interest} onChange={update} className={inputClass}>
              <option value="">{t("form.select")}</option>
              {interests.map(option => (
                <option key={option} value={option}>
                  {t(`form.interest_${option}`)}
                </option>
              ))}
            </select>
          </div>
          <ContactTimeSelect id={id} value={values.contact_time} onChange={update} />
        </div>
      ) : (
        <fieldset>
          <legend className={labelClass}>{t("form.interest")}</legend>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
            {interests.map(option => (
              <label key={option} className="flex items-center gap-2 text-sm text-ink/80">
                <input type="radio" name="interest" value={option} checked={values.interest === option} onChange={update} className="h-4 w-4 accent-cianotipo" />
                {t(`form.interest_${option}`)}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {!compact && (
        <div className="sm:w-1/2 sm:pr-2.5">
          <ContactTimeSelect id={id} value={values.contact_time} onChange={update} />
        </div>
      )}

      {!compact && (
        <div>
          <label htmlFor={`${id}-message`} className={labelClass}>
            {t("form.message")}
          </label>
          <textarea id={`${id}-message`} name="message" rows="3" maxLength="1000" value={values.message} onChange={update} aria-describedby={`${id}-message-hint`} className={inputClass} />
          <p id={`${id}-message-hint`} className="mt-1 text-xs text-ink/65">
            {t("form.message_hint")}
          </p>
        </div>
      )}

      {/* Honeypot anti-spam: oculto para personas, los bots suelen llenarlo. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex="-1" autoComplete="off" value={values.website} onChange={update} />
      </div>

      <label className="flex items-start gap-3 text-xs text-ink/70">
        <input type="checkbox" name="consent" required checked={values.consent} onChange={update} className="mt-0.5 h-4 w-4 shrink-0 accent-cianotipo" />
        <span>{t("form.consent")}</span>
      </label>

      <div aria-live="polite">{status === "error" && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}</div>

      <button type="submit" className={`btn btn-primary w-full ${compact ? "short:py-2.5" : ""}`} disabled={status === "sending"}>
        {status === "sending" ? t("form.sending") : t("form.submit")}
        {status !== "sending" && <Icon name="arrow-right" className="h-4 w-4" />}
      </button>
    </form>
  )
}

export default ContactForm
