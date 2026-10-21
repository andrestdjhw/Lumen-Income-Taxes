import React from "react"
import icons from "../../assets/icons.json"

// Íconos de apoyo de la marca (assets/icons.json, compartido con PHP).
// 'data-hatch' se convierte en el rayado de marca; la máscara #lumen-hatch la imprime lumen_icon_defs() en PHP.
const hatch = 'fill="currentColor" stroke="none" mask="url(#lumen-hatch)"'

function Icon({ name, className = "h-5 w-5" }) {
  return <svg className={`lumen-icon ${className} shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{ __html: (icons[name] || "").replaceAll("data-hatch", hatch) }} />
}

export default Icon
