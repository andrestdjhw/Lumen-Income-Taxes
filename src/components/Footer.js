import React from "react"
import data, { site, t } from "../lib/data"
import Icon from "./Icon"
import Logo from "./Logo"

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-2 text-sm">{children}</div>
    </div>
  )
}

function LinkList({ links = [] }) {
  return (
    <ul className="space-y-2">
      {links
        .filter(link => link.url)
        .map(link => (
          <li key={link.url}>
            <a href={link.url} className="hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
    </ul>
  )
}

function Footer() {
  const footer = data.footer || {}

  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href={data.homeUrl} className="text-white" aria-label={site.name}>
            <Logo />
          </a>
          <p className="mt-4 max-w-xs text-sm">{t("footer.tagline")}</p>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn title={t("footer.services")}>
            <LinkList links={footer.services} />
          </FooterColumn>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn title={t("footer.company")}>
            <LinkList links={footer.company} />
          </FooterColumn>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn title={t("footer.visit")}>
            <address className="not-italic">
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </address>
            <a href={site.directionsUrl} className="inline-block text-brand-200 hover:text-white" target="_blank" rel="noopener" data-track="click_directions">
              {t("cta.directions")}
            </a>
          </FooterColumn>
        </div>

        <div className="lg:col-span-2">
          <FooterColumn title={t("footer.contact")}>
            <ul className="space-y-2">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white" data-track="click_call">
                  <Icon name="phone" className="h-4 w-4" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.facebook} className="flex items-center gap-2 hover:text-white" target="_blank" rel="noopener">
                  <Icon name="facebook" className="h-4 w-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.bookingUrl} className="flex items-center gap-2 hover:text-white" target="_blank" rel="noopener" data-track="click_book">
                  <Icon name="calendar" className="h-4 w-4" />
                  {t("cta.book")}
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 pb-20 text-xs sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>
            © {data.year} {site.name}. {t("footer.rights")}
          </p>
          {footer.legal && footer.legal.length > 0 && (
            <nav aria-label={t("footer.legal")}>
              <ul className="flex flex-wrap gap-4">
                {footer.legal.map(link => (
                  <li key={link.url}>
                    <a href={link.url} className="hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
