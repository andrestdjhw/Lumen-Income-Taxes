// Slideshow con fundido para fondos con varias imágenes ([data-slideshow] > img[data-slide]).
// Se pausa con la pestaña oculta y no corre si el usuario prefiere reducir el movimiento.
const INTERVAL = 6000

export function initSlideshows() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  document.querySelectorAll("[data-slideshow]").forEach(container => {
    const slides = [...container.querySelectorAll("[data-slide]")]
    if (slides.length < 2) return

    let current = 0
    setInterval(() => {
      if (document.hidden) return
      slides[current].classList.add("opacity-0")
      current = (current + 1) % slides.length
      slides[current].loading = "eager"
      slides[current].classList.remove("opacity-0")
    }, INTERVAL)
  })
}
