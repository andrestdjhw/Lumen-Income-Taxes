import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"
import Chatbot from "./components/Chatbot"

// Monta un componente de React en el elemento con el id indicado, si existe en la página.
// Los atributos data-* del elemento se pasan como props (ej. data-interest="business").
function mount(id, Component) {
  const el = document.getElementById(id)
  if (el) ReactDOM.createRoot(el).render(<Component {...el.dataset} />)
}

mount("lumen-navbar", Navbar)
mount("lumen-footer", Footer)
mount("lumen-contact-form", ContactForm)
mount("lumen-chatbot", Chatbot)

// Eventos GA4 sugeridos en el brief (click_call, click_book, click_directions, language_switch).
document.addEventListener("click", event => {
  const el = event.target.closest("[data-track]")
  if (el) (window.dataLayer = window.dataLayer || []).push({ event: el.dataset.track })
})
