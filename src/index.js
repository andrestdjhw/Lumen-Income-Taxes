import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"
import Chatbot from "./components/Chatbot"
import CookieBanner from "./components/CookieBanner"
import { initReveal } from "./lib/reveal"
import { initSlideshows } from "./lib/slideshow"
import { initCarousels } from "./lib/carousel"
import { initHeroVideo } from "./lib/hero-video"
import { initTilt } from "./lib/tilt"

// Monta un componente de React en cada elemento que coincida con el selector.
// Los atributos data-* del elemento se pasan como props (ej. data-interest="business").
function mount(selector, Component) {
  document.querySelectorAll(selector).forEach(el => ReactDOM.createRoot(el).render(<Component {...el.dataset} />))
}

mount("#lumen-navbar", Navbar)
mount("#lumen-footer", Footer)
mount("[data-component='contact-form']", ContactForm)
mount("#lumen-chatbot", Chatbot)
mount("#lumen-cookies", CookieBanner)
initReveal()

// Alto del navbar para que el hero + cinta ocupen exactamente la pantalla (.hero-screen en src/index.css).
// Solo se mide arriba del todo: así el hero no cambia de tamaño cuando el topbar se oculta al hacer scroll.
const navbar = document.getElementById("lumen-navbar")
if (navbar && "ResizeObserver" in window) {
  new ResizeObserver(() => {
    if (window.scrollY < 10) document.documentElement.style.setProperty("--nav-h", `${navbar.offsetHeight}px`)
  }).observe(navbar)
}
initSlideshows()
initCarousels()
initHeroVideo()
initTilt()

// Eventos GA4 sugeridos en el brief (click_call, click_book, click_directions, language_switch).
document.addEventListener("click", event => {
  const el = event.target.closest("[data-track]")
  if (el) (window.dataLayer = window.dataLayer || []).push({ event: el.dataset.track })
})
