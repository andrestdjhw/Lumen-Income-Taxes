import React from "react"
import { site, t } from "../lib/data"
import Icon from "./Icon"

// Íconos de redes sociales (topbar y footer). Las redes sin URL todavía se muestran igual, pero sin enlace.
function SocialLinks({ className = "", itemClassName = "" }) {
  const social = site.social || []
  const newTab = t("topbar.new_tab")
  const base = `flex h-8 w-8 items-center justify-center rounded-full ${itemClassName}`

  return (
    <ul className={`flex items-center gap-1 ${className}`} aria-label={t("topbar.social")}>
      {social.map(link => (
        <li key={link.key}>
          {link.url ? (
            <a href={link.url} className={`${base} transition duration-300 hover:-translate-y-0.5 hover:bg-white/10`} target="_blank" rel="noopener" aria-label={`${link.label} ${newTab}`}>
              <Icon name={link.key} className="h-4 w-4" />
            </a>
          ) : (
            <span className={base} title={link.label}>
              <Icon name={link.key} className="h-4 w-4" />
              <span className="sr-only">{link.label}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
