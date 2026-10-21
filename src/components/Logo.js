import React from "react"

// Logo provisional (mismo trazo que template-parts/logo.php): reemplazar cuando se entregue el branding final.
const rays = Array.from({ length: 11 }, (_, index) => {
  const angle = ((index + 1) * 15 * Math.PI) / 180
  return {
    x1: 20 + 9 * Math.cos(angle),
    y1: 19 - 9 * Math.sin(angle),
    x2: 20 + 17 * Math.cos(angle),
    y2: 19 - 17 * Math.sin(angle)
  }
})

function Logo() {
  return (
    <span className="inline-flex flex-col items-center leading-none">
      <svg viewBox="0 0 40 20" className="h-4 w-8 text-capa" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <path d="M13 19a7 7 0 0 1 14 0" />
        {rays.map((ray, index) => (
          <line key={index} {...ray} />
        ))}
      </svg>
      <span className="text-2xl font-semibold tracking-[0.14em]">LUMEN</span>
      <span className="mt-1 text-[0.55rem] font-medium tracking-[0.4em]">INCOME TAX</span>
    </span>
  )
}

export default Logo
