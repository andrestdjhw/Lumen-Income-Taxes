import React, { useState } from "react"
import data, { hasString, t } from "../lib/data"
import Icon from "./Icon"

// Formulario corto del brief (sección 09). No pedir SSN, W-2, datos bancarios ni archivos adjuntos.
const interests = ["individual", "business", "irs", "other"]
const inputClass = "mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 focus:outline-none"
const labelClass = "block text-sm font-medium text-navy-950"

function initialInterest(fallback) {
  const fromUrl = new URLSearchParams(window.location.search).get("interest")
  if (interests.includes(fromUrl)) return fromUrl
  return interests.includes(fallback) ? fallback : ""
}

function ContactForm({ interest }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    language: data.lang || "en",
    interest: initialInterest(interest),
    message: "",
    consent: false,
    website: ""
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
      ;(window.dataLayer = window.dataLayer || []).push({ event: "form_submit_success", form: "contact" })
    } catch (err) {
      const key = `form.error_${err.message}`
      setStatus("error")
      setError(hasString(key) ? t(key) : t("form.error_generic"))
    }
  }

  if (status === "success") {
    return (
      <div className="flex gap-4 rounded-xl bg-brand-50 p-6" role="status">
        <Icon name="check-circle" className="h-7 w-7 text-brand-600" />
        <div>
          <p className="font-semibold text-navy-950">{t("form.success_title")}</p>
          <p className="mt-1 text-sm text-slate-600">{t("form.success_text")}</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lumen-name" className={labelClass}>
            {t("form.name")} <span className="text-brand-600">*</span>
          </label>
          <input id="lumen-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lumen-phone" className={labelClass}>
            {t("form.phone")} <span className="text-brand-600">*</span>
          </label>
          <input id="lumen-phone" name="phone" type="tel" autoComplete="tel" required value={values.phone} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lumen-email" className={labelClass}>
            {t("form.email")}
          </label>
          <input id="lumen-email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} className={inputClass} />
        </div>
        <div>
          <label htmlFor="lumen-language" className={labelClass}>
            {t("form.language")}
          </label>
          <select id="lumen-language" name="language" value={values.language} onChange={update} className={inputClass}>
            <option value="en">{t("form.language_en")}</option>
            <option value="es">{t("form.language_es")}</option>
          </select>
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>{t("form.interest")}</legend>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
          {interests.map(option => (
            <label key={option} className="flex items-center gap-2 text-sm text-slate-700">
              <input type="radio" name="interest" value={option} checked={values.interest === option} onChange={update} className="h-4 w-4 accent-brand-600" />
              {t(`form.interest_${option}`)}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="lumen-message" className={labelClass}>
          {t("form.message")}
        </label>
        <textarea id="lumen-message" name="message" rows="3" maxLength="1000" value={values.message} onChange={update} aria-describedby="lumen-message-hint" className={inputClass} />
        <p id="lumen-message-hint" className="mt-1 text-xs text-slate-500">
          {t("form.message_hint")}
        </p>
      </div>

      {/* Honeypot anti-spam: oculto para personas, los bots suelen llenarlo. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="lumen-website">Website</label>
        <input id="lumen-website" name="website" type="text" tabIndex="-1" autoComplete="off" value={values.website} onChange={update} />
      </div>

      <label className="flex items-start gap-3 text-xs text-slate-600">
        <input type="checkbox" name="consent" required checked={values.consent} onChange={update} className="mt-0.5 h-4 w-4 accent-brand-600" />
        <span>{t("form.consent")}</span>
      </label>

      <div aria-live="polite">{status === "error" && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}</div>

      <button type="submit" className="btn btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? t("form.sending") : t("form.submit")}
        {status !== "sending" && <Icon name="arrow-right" className="h-4 w-4" />}
      </button>
    </form>
  )
}

export default ContactForm
