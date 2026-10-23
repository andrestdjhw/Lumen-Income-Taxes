import React, { useEffect, useState } from "react"
import data, { t } from "../lib/data"
import Icon from "./Icon"

// Aviso de cookies. Hoy el sitio no usa cookies de publicidad ni analítica (solo las de Google Maps y Calendly),
// pero la elección queda guardada en este navegador y se publica en window.lumenConsent y en el dataLayer
// ("cookie_consent"), para condicionar herramientas como Google Analytics si se agregan más adelante.
const STORAGE_KEY = "lumen-cookie-consent"

function readConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    return null
  }
}

function saveConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch (error) {
    // Navegación privada o almacenamiento bloqueado: el aviso volverá a aparecer en la próxima visita.
  }
  window.lumenConsent = value
  ;(window.dataLayer = window.dataLayer || []).push({ event: "cookie_consent", consent: value })
}

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    if (stored) {
      window.lumenConsent = stored
      return
    }
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  const choose = value => {
    saveConsent(value)
    setVisible(false)
  }

  return (
    <div role="region" aria-label={t("cookie.label")} className="fixed inset-x-2 bottom-[4.75rem] z-[60] animate-pop-in sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md">
      <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-2xl shadow-lumen/20">
        <div className="flex gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lumen icon-chip">
            <Icon name="shield" className="h-5 w-5" />
          </span>
          <p className="text-sm text-ink/80">
            {t("cookie.text")}{" "}
            {data.privacyUrl && (
              <a href={data.privacyUrl} className="font-semibold text-cianotipo underline-offset-4 hover:underline">
                {t("cookie.privacy")}
              </a>
            )}
          </p>
        </div>
        <div className="mt-4 flex gap-3">
          <button type="button" className="btn btn-outline flex-1 px-4 py-2.5" onClick={() => choose("declined")}>
            {t("cookie.decline")}
          </button>
          <button type="button" className="btn btn-primary flex-1 px-4 py-2.5" onClick={() => choose("accepted")}>
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
