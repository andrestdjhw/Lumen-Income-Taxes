// Carrusel con desplazamiento nativo (se puede deslizar con el dedo), flechas, puntos y avance automático.
// Marcado: [data-carousel] > [data-carousel-track] > [data-carousel-slide], más [data-carousel-dot], [data-carousel-prev] y [data-carousel-next].
// Se pausa con el mouse encima, con el foco dentro o con la pestaña oculta; no avanza solo si el usuario prefiere reducir el movimiento.
const INTERVAL = 4500

export function initCarousels() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  document.querySelectorAll("[data-carousel]").forEach(root => {
    const track = root.querySelector("[data-carousel-track]")
    const slides = [...root.querySelectorAll("[data-carousel-slide]")]
    const dots = [...root.querySelectorAll("[data-carousel-dot]")]
    if (!track || slides.length < 2) return

    let paused = false
    const slideWidth = () => slides[0].offsetWidth
    const index = () => Math.round(track.scrollLeft / slideWidth())
    // Posiciones reales: con 2 tarjetas visibles y 4 en total hay 3 posiciones (y 3 puntos).
    const positions = () => slides.length - Math.max(1, Math.round(track.clientWidth / slideWidth())) + 1

    const goTo = target => {
      const count = positions()
      const i = (target + count) % count
      track.scrollTo({ left: i * slideWidth(), behavior: reduceMotion ? "auto" : "smooth" })
    }
    const next = () => goTo(index() + 1)
    const prev = () => goTo(index() - 1)

    root.querySelector("[data-carousel-next]")?.addEventListener("click", next)
    root.querySelector("[data-carousel-prev]")?.addEventListener("click", prev)
    dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)))

    const updateDots = () => {
      const count = positions()
      const active = Math.min(index(), count - 1)
      dots.forEach((dot, i) => {
        dot.hidden = i >= count
        dot.setAttribute("aria-current", i === active ? "true" : "false")
      })
    }
    track.addEventListener("scroll", () => window.requestAnimationFrame(updateDots), { passive: true })
    window.addEventListener("resize", updateDots)
    updateDots()

    root.addEventListener("pointerenter", () => (paused = true))
    root.addEventListener("pointerleave", () => (paused = false))
    root.addEventListener("focusin", () => (paused = true))
    root.addEventListener("focusout", event => !root.contains(event.relatedTarget) && (paused = false))
    track.addEventListener("touchstart", () => (paused = true), { passive: true })

    if (!reduceMotion) {
      setInterval(() => {
        if (!paused && !document.hidden) next()
      }, INTERVAL)
    }
  })
}
