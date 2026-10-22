// Video de fondo del hero ([data-hero-video]). Elige 1080p en escritorio y 720p en pantallas pequeñas.
// No se carga si el usuario prefiere reducir el movimiento o tiene activado el ahorro de datos: queda el poster.
// Se pausa cuando sale de la pantalla o la pestaña se oculta, para no gastar batería.
export function initHeroVideo() {
  const video = document.querySelector("[data-hero-video]")
  if (!video) return

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const saveData = navigator.connection && navigator.connection.saveData
  if (reduceMotion || saveData) return

  video.src = window.matchMedia("(min-width: 1024px)").matches ? video.dataset.srcDesktop : video.dataset.srcMobile

  let inView = true
  const update = () => (inView && !document.hidden ? video.play().catch(() => {}) : video.pause())

  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting
    update()
  }).observe(video)
  document.addEventListener("visibilitychange", update)
}
