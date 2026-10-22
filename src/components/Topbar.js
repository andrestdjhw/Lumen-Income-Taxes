import React from "react"
import { site, t } from "../lib/data"
import Icon from "./Icon"
import SocialLinks from "./SocialLinks"

// Barra superior del navbar: contacto (izquierda), dirección (centro) y redes sociales (derecha).
// En móvil (<640px) muestra solo correo y ubicación: el teléfono está en la barra fija inferior y las redes en el menú.
// Navbar controla `visible`: al ocultarse, el navbar completo sube su altura (ver --topbar-offset en src/index.css).
function Topbar({ visible }) {
  const newTab = t("topbar.new_tab")

  return (
    <div className="bg-linear-to-r from-ink to-lumen text-celeste" aria-hidden={!visible} inert={visible ? undefined : ""}>
      <div>
        <div className="container-site flex h-10 items-center justify-between gap-4 text-xs sm:text-sm">
          <ul className="flex items-center gap-5" aria-label={t("topbar.contact")}>
            <li className="hidden sm:block">
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white" data-track="click_call">
                <Icon name="phone" className="h-4 w-4 text-white" />
                {site.phone}
              </a>
            </li>
            {site.email && (
              <li className="sm:hidden md:block">
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-white" data-track="click_email">
                  <Icon name="mail" className="h-4 w-4 text-white" />
                  {site.email}
                </a>
              </li>
            )}
          </ul>

          {/* Ubicación corta en móvil; dirección completa desde escritorio. */}
          <a href={site.mapsUrl} className="flex items-center gap-1.5 transition-colors hover:text-white sm:hidden" target="_blank" rel="noopener" title={t("topbar.address")} data-track="click_directions">
            <Icon name="map-pin" className="h-4 w-4 text-white" />
            <span className="whitespace-nowrap">
              {site.addressLine2.replace(/ \d{5}$/, "")}
              <span className="hidden min-[400px]:inline">{site.addressLine2.match(/ \d{5}$/)?.[0]}</span>
            </span>
            <span className="sr-only">{newTab}</span>
          </a>

          <a href={site.mapsUrl} className="hidden items-center gap-2 transition-colors hover:text-white lg:flex" target="_blank" rel="noopener" title={t("topbar.address")} data-track="click_directions">
            <Icon name="map-pin" className="h-4 w-4 text-white" />
            {site.address}
            <span className="sr-only">{newTab}</span>
          </a>

          <div className="hidden sm:block">
            <SocialLinks itemClassName="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
