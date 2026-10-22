import React from "react"
import data, { site } from "../lib/data"

// Wordmark oficial (assets/brand/wordmark.png). light: versión blanca para fondos oscuros.
function Logo({ light = false, className = "h-10 w-auto sm:h-11" }) {
  return <img src={data.logos?.wordmark} alt={site.name} width="720" height="213" className={`${className} ${light ? "logo-white" : ""}`} decoding="async" />
}

export default Logo
