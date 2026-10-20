import React from "react"
import ReactDOM from "react-dom/client"

// Monta un componente de React en el elemento con el id indicado, si existe en la página.
// Uso: mount("navbar-root", Navbar)
function mount(id, Component) {
  const el = document.getElementById(id)
  if (el) ReactDOM.createRoot(el).render(<Component />)
}
