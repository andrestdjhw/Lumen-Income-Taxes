import React, { useEffect, useRef, useState } from "react"
import data, { site, t } from "../lib/data"
import Icon from "./Icon"
import Logo from "./Logo"
import Topbar from "./Topbar"
import SocialLinks from "./SocialLinks"

function LanguageSwitch({ className = "" }) {
  const links = data.langLinks || {}

  return (
    <div className={`items-center gap-1 text-sm font-semibold ${className}`} aria-label={t("nav.language")} role="group">
      {["es", "en"].map((lang, index) => (
        <React.Fragment key={lang}>
          {index > 0 && <span className="text-celeste">|</span>}
          <a href={links[lang] || "#"} hrefLang={lang} lang={lang} aria-current={data.lang === lang ? "true" : undefined} className={`rounded px-1.5 py-1 ${data.lang === lang ? "text-cianotipo" : "text-ink/65 hover:text-lumen"}`} data-track="language_switch">
            {lang.toUpperCase()}
          </a>
        </React.Fragment>
      ))}
    </div>
  )
}

// Mega menú de escritorio: abre con hover (solo mouse) o con clic/teclado; cierra con Escape, clic fuera o al salir el foco.
function MegaMenu({ item }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const buttonRef = useRef(null)
  const closeTimer = useRef(null)
  const panelId = `lumen-mega-${item.key}`

  useEffect(() => {
    if (!open) return
    const onKeyDown = event => {
      if (event.key !== "Escape") return
      setOpen(false)
      buttonRef.current.focus()
    }
    const onPointerDown = event => !ref.current.contains(event.target) && setOpen(false)
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  function show(event) {
    if (event.pointerType !== "mouse") return
    clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function hide(event) {
    if (event.pointerType !== "mouse") return
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <li ref={ref} className="flex h-full items-center" onPointerEnter={show} onPointerLeave={hide} onBlur={event => !event.currentTarget.contains(event.relatedTarget) && setOpen(false)}>
      <button ref={buttonRef} type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)} className={`flex h-full items-center gap-1 transition-colors hover:text-cianotipo ${open || item.current ? "text-cianotipo" : ""}`}>
        {item.label}
        <Icon name="chevron-down" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div id={panelId} className={`absolute inset-x-0 top-full border-t border-ink/5 bg-white shadow-xl transition duration-300 ease-out-soft ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
        <div className="container-site grid gap-6 py-8 lg:grid-cols-12">
          <ul className="grid gap-4 lg:col-span-8 lg:grid-cols-3">
            {item.children.map((child, index) => (
              <li key={child.key} className={`transition duration-500 ease-out-soft ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`} style={{ transitionDelay: open ? `${index * 70}ms` : "0ms" }}>
                <a href={child.url || "#"} aria-current={child.current ? "page" : undefined} onClick={() => setOpen(false)} className="group flex h-full flex-col rounded-xl border border-ink/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-cianotipo hover:bg-celeste-light hover:shadow-lg hover:shadow-lumen/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full text-lumen icon-chip group-hover:scale-110">
                    <Icon name={child.icon} className="h-5 w-5" />
                  </span>
                  <span className="mt-4 font-semibold whitespace-normal text-lumen">{child.label}</span>
                  <span className="mt-1 text-sm font-normal whitespace-normal text-ink/70">{child.text}</span>
                  <span className="mt-auto pt-4 text-cianotipo">
                    <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className={`flex flex-col justify-between rounded-xl bg-lumen p-6 whitespace-normal text-white transition duration-500 ease-out-soft lg:col-span-4 ${open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`} style={{ transitionDelay: open ? "200ms" : "0ms" }}>
            <div>
              <p className="text-xl font-bold">{t("nav.mega_title")}</p>
              <p className="mt-2 text-sm font-normal text-celeste">{t("nav.mega_text")}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a href={site.bookingUrl} className="btn btn-primary" target="_blank" rel="noopener" data-track="click_book">
                {t("cta.book")}
                <Icon name="calendar" className="h-4 w-4" />
              </a>
              <a href={site.phoneHref} className="btn btn-light" data-track="click_call">
                <Icon name="phone" className="h-4 w-4" />
                {t("cta.call", site.phone)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

// Grupo desplegable (acordeón) del menú móvil.
function MobileGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(item.current)
  const panelId = `lumen-mobile-${item.key}`

  return (
    <li>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)} className={`flex w-full items-center justify-between py-3 text-base font-medium ${item.current ? "text-cianotipo" : "text-lumen"}`}>
        {item.label}
        <Icon name="chevron-down" className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <ul id={panelId} hidden={!open} className="animate-slide-down space-y-1 pb-3">
        {item.children.map(child => (
          <li key={child.key}>
            <a href={child.url || "#"} aria-current={child.current ? "page" : undefined} onClick={onNavigate} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-celeste-light">
              <Icon name={child.icon} className="h-5 w-5 text-lumen" />
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [topbarVisible, setTopbarVisible] = useState(true)
  const nav = data.nav || []

  useEffect(() => {
    // El topbar se oculta al bajar y reaparece al subir (o al volver arriba del todo).
    // Solo se cuenta un cambio de dirección tras 12px acumulados, y el header usa umbrales distintos para
    // compactarse (40px) y expandirse (4px): así el scroll lento no hace que el estado cambie de ida y vuelta.
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(prev => (prev ? y > 4 : y > 40))
      if (y < 40) {
        setTopbarVisible(true)
        lastY = y
      } else if (Math.abs(y - lastY) >= 12) {
        setTopbarVisible(y < lastY)
        lastY = y
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // El navbar sube la altura del topbar en lugar de plegarlo: su alto no cambia, así el contenido de la página
  // no se mueve (un cambio de alto activaba el "scroll anchoring" del navegador y provocaba el rebote).
  const showTopbar = topbarVisible || open
  useEffect(() => {
    const wrapper = document.getElementById("lumen-navbar")
    const topbar = wrapper && wrapper.firstElementChild
    if (wrapper && topbar) wrapper.style.setProperty("--topbar-offset", showTopbar ? "0px" : `${topbar.offsetHeight}px`)
  }, [showTopbar])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    if (!open) return
    const onKeyDown = event => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <Topbar visible={showTopbar} />
      <header className={`relative bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-ink/5"}`}>
        {/* Alto fijo: cambiarlo al hacer scroll movía el contenido. Al compactarse solo cambian la sombra y el tamaño del logo. */}
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <a href={data.homeUrl} className={`origin-left text-lumen transition-transform duration-300 ease-out-soft ${scrolled ? "scale-[0.88]" : ""}`} aria-label={`${site.name} — ${t("nav.home")}`}>
            <Logo />
          </a>

          <nav aria-label={t("nav.main")} className="hidden h-full lg:block">
            <ul className="flex h-full items-center gap-7 text-sm font-medium whitespace-nowrap text-ink/80">
              {nav.map(item =>
                item.children ? (
                  <MegaMenu key={item.key} item={item} />
                ) : (
                  <li key={item.key}>
                    <a href={item.url || "#"} aria-current={item.current ? "page" : undefined} className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-cianotipo after:transition-transform after:duration-300 hover:text-cianotipo hover:after:scale-x-100 ${item.current ? "text-cianotipo after:scale-x-100" : "after:scale-x-0"}`}>
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch className="hidden sm:flex" />
            <a href={site.phoneHref} className="btn btn-outline hidden px-4 whitespace-nowrap xl:inline-flex" data-track="click_call">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
            <a href={site.bookingUrl} className="btn btn-primary hidden px-4 whitespace-nowrap sm:inline-flex" target="_blank" rel="noopener" data-track="click_book">
              {t("cta.book")}
              <Icon name="calendar" className="h-4 w-4" />
            </a>
            <button type="button" className="rounded-md p-2 text-lumen hover:bg-celeste-light lg:hidden" aria-expanded={open} aria-controls="lumen-mobile-menu" onClick={() => setOpen(value => !value)}>
              <Icon name={open ? "x" : "menu"} className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
              <span className="sr-only">{open ? t("nav.close") : t("nav.menu")}</span>
            </button>
          </div>
        </div>

        {open && (
          <div id="lumen-mobile-menu" className="animate-slide-down max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-ink/5 bg-white lg:hidden">
            <nav aria-label={t("nav.main")} className="container-site py-4">
              <ul className="divide-y divide-ink/5">
                {nav.map(item =>
                  item.children ? (
                    <MobileGroup key={item.key} item={item} onNavigate={() => setOpen(false)} />
                  ) : (
                    <li key={item.key}>
                      <a href={item.url || "#"} aria-current={item.current ? "page" : undefined} className={`block py-3 text-base font-medium ${item.current ? "text-cianotipo" : "text-lumen"}`} onClick={() => setOpen(false)}>
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
              {/* Sin botones de Llamar/Agendar: en móvil ya están en la barra fija inferior y en tablet en el header y el topbar. */}
              {/* En móvil las redes van aquí (el topbar muestra correo y ubicación); desde tablet siguen en el topbar. */}
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink/5 pt-4">
                <LanguageSwitch className="flex" />
                <div className="sm:hidden">
                  <SocialLinks itemClassName="text-lumen hover:bg-celeste-light" />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* CTA fijo en móvil: Agendar y Llamar siempre visibles (brief, sección 13). */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-white p-2 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] sm:hidden">
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
