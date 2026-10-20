import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { siteConfig, navLinks } from '../config/site'
import styles from './Footer.module.css'

const services = [
  { label: 'Search Engine Optimization', href: '/services#seo' },
  { label: 'Generative Engine Optimization', href: '/services#geo' },
  { label: 'Answer Engine Optimization', href: '/services#aeo' },
  { label: 'AI Search Visibility', href: '/services#ai-visibility' },
  { label: 'Website Optimization', href: '/services#web-optimization' },
  { label: 'Local SEO', href: '/services#local-seo' },
]

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <footer className={styles.footer}>
      {/* Top gradient divider */}
      <div className={styles.topDivider} />

      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <img src={siteConfig.logoPath} alt={siteConfig.name} className={styles.logo} />
          <p className={styles.brandDesc}>
            Helping ambitious businesses grow their online visibility through SEO, AI search
            optimization, and conversion-focused digital experiences.
          </p>
          <p className={styles.serviceArea}>{siteConfig.serviceArea}</p>

          {/* Social icons */}
          <div className={styles.socials}>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.socialIcon}
              aria-label="Email Rankora"
              title="Email us"
            >
              <Mail size={18} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.547 4.1 1.505 5.832L.057 23.16a.75.75 0 0 0 .916.919l5.403-1.416A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.721 9.721 0 0 1-4.962-1.357l-.355-.211-3.685.966.983-3.595-.232-.37A9.721 9.721 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Rankora on LinkedIn"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.linkList}>
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href} className={styles.footerLink}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Get in Touch</h3>
          <ul className={styles.contactList}>
            <li>
              <a href={`mailto:${siteConfig.email}`} className={styles.contactItem}>
                <Mail size={15} />
                <span>{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <Phone size={15} />
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
            </li>
            <li>
              <span className={styles.contactItem}>
                <MapPin size={15} />
                <span>{siteConfig.locationDisplay}</span>
              </span>
            </li>
          </ul>

          <Link to="/contact" className={styles.auditBtn}>
            Get a Free Audit <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className={styles.legal}>
              <Link to="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.dot}>·</span>
              <Link to="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
