// Animaciones al entrar en pantalla (atributo data-reveal, estilos en src/index.css).
// Se reinician cada vez que el elemento sale de la pantalla y vuelve a entrar.
const selector = "[data-reveal]"

export function reveal(type = "up", index = 0) {
  return { "data-reveal": type, style: index ? { "--reveal-delay": `${index * 110}ms` } : undefined }
}

export function initReveal() {
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) entry.target.classList.add("is-visible")
        else if (!entry.isIntersecting) entry.target.classList.remove("is-visible")
      })
    },
    { threshold: [0, 0.15] }
  )

  const observeAll = root => {
    if (root.matches?.(selector)) observer.observe(root)
    root.querySelectorAll?.(selector).forEach(el => observer.observe(el))
  }

  document.documentElement.classList.add("reveal-on")
  observeAll(document)

  // Los componentes de React se montan después: también se observan sus elementos.
  new MutationObserver(mutations => {
    mutations.forEach(mutation => mutation.addedNodes.forEach(node => node.nodeType === 1 && observeAll(node)))
  }).observe(document.body, { childList: true, subtree: true })
}
