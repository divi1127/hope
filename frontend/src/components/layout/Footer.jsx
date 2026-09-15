import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import {
  footerProgramLinks,
  footerQuickLinks,
  footerResourceLinks,
} from '../../data/programs'
import { siteConfig } from '../../utils/seo'

const socials = [
  {
    name: 'Facebook',
    to: '#',
  },
  {
    name: 'Instagram',
    to: '#',
  },
  {
    name: 'LinkedIn',
    to: '#',
  },
]

const columns = [
  { title: 'Quick Links', links: footerQuickLinks },
  { title: 'Programs', links: footerProgramLinks },
  { title: 'Resources', links: footerResourceLinks },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white font-heading text-xl font-bold">
                H
              </span>
              <span>
                <span className="block font-heading text-2xl font-bold tracking-tight">
                  HOPE
                </span>
                <span className="block text-[11px] text-white/60 tracking-wide uppercase">
                  De-Addiction &amp; Rehabilitation Centre
                </span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Recovery begins with hope. A compassionate, confidential and
              structured environment supporting individuals and families on
              their journey toward a healthier, more balanced life.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.to}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
                >
                  <span className="text-xs font-semibold">
                    {social.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-lg mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label + link.to}>
                    <Link
                      to={link.to}
                      className="text-white/70 text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-lg mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.phone}
                  <span className="block text-xs text-white/50">
                    Emergency: {siteConfig.emergencyPhone}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© 2026 Hope De-Addiction Centre. All rights reserved.</p>
          <p className="text-xs">
            {siteConfig.hours} &middot; Confidential &amp; discreet support
          </p>
        </div>
      </div>
    </footer>
  )
}