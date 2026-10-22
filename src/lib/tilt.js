// Inclinación 3D que sigue al puntero en las tarjetas [data-tilt] (estilos .tilt-card en src/index.css).
// Solo con mouse; con teclado o pantalla táctil la tarjeta aparece sin inclinarse. Desactivado con "reducir movimiento".
const MAX_TILT = 10 // grados

export function initTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("pointermove", event => {
      if (event.pointerType !== "mouse") return
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width // 0 a 1
      const y = (event.clientY - rect.top) / rect.height
      card.style.setProperty("--tilt-x", `${(0.5 - y) * MAX_TILT * 2}deg`)
      card.style.setProperty("--tilt-y", `${(x - 0.5) * MAX_TILT * 2}deg`)
      card.style.setProperty("--glare-x", `${x * 100}%`)
      card.style.setProperty("--glare-y", `${y * 100}%`)
    })
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg")
      card.style.setProperty("--tilt-y", "0deg")
    })
  })
}
