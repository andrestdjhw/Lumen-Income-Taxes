import React from "react"
import { site, t } from "../lib/data"
import Icon from "./Icon"
import SocialLinks from "./SocialLinks"

// Barra superior del navbar: contacto (izquierda), dirección (centro) y redes sociales (derecha).
// Navbar controla `visible`: se oculta al bajar y reaparece al subir.
function Topbar({ visible }) {
  const newTab = t("topbar.new_tab")

  return (
    <div className={`grid bg-linear-to-r from-ink to-lumen text-celeste transition-[grid-template-rows] duration-300 ease-out-soft ${visible ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`} aria-hidden={!visible} inert={visible ? undefined : ""}>
      <div className="overflow-hidden">
        <div className="container-site flex h-10 items-center justify-between gap-4 text-xs sm:text-sm">
          <ul className="flex items-center gap-5" aria-label={t("topbar.contact")}>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white" data-track="click_call">
                <Icon name="phone" className="h-4 w-4 text-white" />
                {site.phone}
              </a>
            </li>
            {site.email && (
              <li className="hidden md:block">
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-white" data-track="click_email">
                  <Icon name="mail" className="h-4 w-4 text-white" />
                  {site.email}
                </a>
              </li>
            )}
          </ul>

          <a href={site.mapsUrl} className="hidden items-center gap-2 transition-colors hover:text-white lg:flex" target="_blank" rel="noopener" title={t("topbar.address")} data-track="click_directions">
            <Icon name="map-pin" className="h-4 w-4 text-white" />
            {site.address}
            <span className="sr-only">{newTab}</span>
          </a>

          <SocialLinks itemClassName="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
