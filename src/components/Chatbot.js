import React, { useState } from "react"
import data, { site, t } from "../lib/data"
import Icon from "./Icon"

// Base del chatbot: por ahora ofrece accesos rápidos. La lógica conversacional se definirá más adelante.
function Chatbot() {
  const [open, setOpen] = useState(false)

  const options = [
    { label: t("cta.book"), href: site.bookingUrl, icon: "calendar", external: true, track: "click_book" },
    { label: t("cta.call", site.phone), href: site.phoneHref, icon: "phone", track: "click_call" },
    { label: t("chat.faq"), href: data.faqUrl, icon: "help" },
    { label: t("chat.message"), href: data.contactUrl && `${data.contactUrl}#contact-form`, icon: "mail" }
  ].filter(option => option.href)

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col items-end sm:right-6 sm:bottom-6">
      {open && (
        <div id="lumen-chat-panel" role="dialog" aria-label={t("chat.title")} className="mb-3 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="bg-navy-950 px-5 py-4 text-white">
            <p className="font-semibold">{t("chat.title")}</p>
          </div>
          <div className="space-y-4 p-5">
            <p className="rounded-xl rounded-tl-none bg-brand-50 p-3 text-sm text-navy-950">{t("chat.greeting")}</p>
            <ul className="space-y-2">
              {options.map(option => (
                <li key={option.icon}>
                  <a href={option.href} target={option.external ? "_blank" : undefined} rel={option.external ? "noopener" : undefined} data-track={option.track} className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-navy-950 transition hover:border-brand-600 hover:text-brand-600">
                    <Icon name={option.icon} className="h-4 w-4 text-brand-600" />
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">{t("chat.note")}</p>
          </div>
        </div>
      )}
      <button type="button" className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition hover:bg-brand-700" aria-expanded={open} aria-controls="lumen-chat-panel" onClick={() => setOpen(value => !value)}>
        <Icon name={open ? "x" : "message"} className="h-6 w-6" />
        <span className="sr-only">{open ? t("chat.close") : t("chat.open")}</span>
      </button>
    </div>
  )
}

export default Chatbot
