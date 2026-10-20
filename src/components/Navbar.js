import React, { useEffect, useState } from "react"
import data, { site, t } from "../lib/data"
import Icon from "./Icon"
import Logo from "./Logo"

function LanguageSwitch({ className = "" }) {
  const links = data.langLinks || {}

  return (
    <div className={`items-center gap-1 text-sm font-semibold ${className}`} aria-label={t("nav.language")} role="group">
      {["es", "en"].map((lang, index) => (
        <React.Fragment key={lang}>
          {index > 0 && <span className="text-slate-300">|</span>}
          <a href={links[lang] || "#"} hrefLang={lang} lang={lang} aria-current={data.lang === lang ? "true" : undefined} className={`rounded px-1.5 py-1 ${data.lang === lang ? "text-brand-600" : "text-slate-500 hover:text-navy-950"}`} data-track="language_switch">
            {lang.toUpperCase()}
          </a>
        </React.Fragment>
      ))}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const nav = data.nav || []

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    if (!open) return
    const onKeyDown = event => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <header className={`bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : "border-b border-slate-100"}`}>
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <a href={data.homeUrl} className="text-navy-950" aria-label={`${site.name} — ${t("nav.home")}`}>
            <Logo />
          </a>

          <nav aria-label={t("nav.main")} className="hidden xl:block">
            <ul className="flex items-center gap-5 text-sm font-medium whitespace-nowrap text-slate-700">
              {nav.map(item => (
                <li key={item.key}>
                  <a href={item.url || "#"} aria-current={item.current ? "page" : undefined} className={`transition-colors hover:text-brand-600 ${item.current ? "text-brand-600" : ""}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch className="hidden sm:flex" />
            <a href={site.phoneHref} className="btn btn-outline hidden px-4 whitespace-nowrap lg:inline-flex xl:hidden 2xl:inline-flex" data-track="click_call">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn btn-primary hidden px-4 whitespace-nowrap sm:inline-flex" target="_blank" rel="noopener" data-track="click_book">
              {t("cta.book")}
              <Icon name="calendar" className="h-4 w-4" />
            </a>
            <button type="button" className="rounded-md p-2 text-navy-950 hover:bg-brand-50 xl:hidden" aria-expanded={open} aria-controls="lumen-mobile-menu" onClick={() => setOpen(value => !value)}>
              <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
              <span className="sr-only">{open ? t("nav.close") : t("nav.menu")}</span>
            </button>
          </div>
        </div>

        {open && (
          <div id="lumen-mobile-menu" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden">
            <nav aria-label={t("nav.main")} className="container-site py-4">
              <ul className="divide-y divide-slate-100">
                {nav.map(item => (
                  <li key={item.key}>
                    <a href={item.url || "#"} aria-current={item.current ? "page" : undefined} className={`block py-3 text-base font-medium ${item.current ? "text-brand-600" : "text-navy-950"}`} onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
                <LanguageSwitch className="flex" />
                <a href={site.phoneHref} className="btn btn-outline" data-track="click_call">
                  <Icon name="phone" className="h-4 w-4" />
                  {t("cta.call", site.phone)}
                </a>
                <a href={site.bookingUrl} className="btn btn-primary" target="_blank" rel="noopener" data-track="click_book">
                  {t("cta.book")}
                  <Icon name="calendar" className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* CTA fijo en móvil: Agendar y Llamar siempre visibles (brief, sección 13). */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] sm:hidden">
        <a href={site.phoneHref} className="btn btn-outline px-3" data-track="click_call">
          <Icon name="phone" className="h-4 w-4" />
          {t("cta.call_short")}
        </a>
        <a href={site.bookingUrl} className="btn btn-primary px-3" target="_blank" rel="noopener" data-track="click_book">
          <Icon name="calendar" className="h-4 w-4" />
          {t("cta.book")}
        </a>
      </div>
    </>
  )
}

export default Navbar
