import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { siteConfig } from '../config/site'
import styles from './Contact.module.css'

const services = [
  'SEO', 'Local SEO', 'GEO — Generative Engine Optimisation',
  'AEO — Answer Engine Optimisation', 'AI Search Visibility Audit',
  'Website Performance Optimisation', 'Landing Page & Conversion Optimisation',
  'Multiple Services', 'Other / Not sure yet',
]

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  website: string
  service: string
  budget: string
  details: string
}

type FormErrors = Partial<FormData>

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Full name is required.'
  if (!data.email.trim()) {
    errors.email = 'Business email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (data.phone && !/^[+\d\s()-]{7,20}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!data.company.trim()) errors.company = 'Company or business name is required.'
  if (!data.service) errors.service = 'Please select a service you\'re interested in.'
  if (!data.details.trim()) errors.details = 'Please share a brief about your project.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    website: '', service: '', budget: '', details: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const phone = siteConfig.whatsapp.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    // Simulate async submission (frontend only - no real backend)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTag}>Get in Touch</div>
          <h1 className={styles.heroH1}>
            Tell Us About Your<br />
            <span className={styles.heroGrad}>Growth Goals</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Share a little about your business, and let's explore how we can improve your online visibility.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.mainGrid}`}>
          {/* Contact info */}
          <aside className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Contact Details</h2>

            <div className={styles.contactCards}>
              <a href={`mailto:${siteConfig.email}`} className={styles.contactCard}>
                <div className={styles.contactCardIcon} style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                  <Mail size={18} color="#2563eb" />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Email Us</div>
                  <div className={styles.contactCardVal}>{siteConfig.email}</div>
                </div>
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIcon} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                  <Phone size={18} color="#16a34a" />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>WhatsApp</div>
                  <div className={styles.contactCardVal}>{siteConfig.whatsappDisplay}</div>
                </div>
              </a>

              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                <div className={styles.contactCardIcon} style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <div className={styles.contactCardLabel}>LinkedIn</div>
                  <div className={styles.contactCardVal}>Connect with us</div>
                </div>
              </a>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon} style={{ background: '#fdf4ff', border: '1px solid #e9d5ff' }}>
                  <MapPin size={18} color="#7c3aed" />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Location</div>
                  <div className={styles.contactCardVal}>{siteConfig.locationDisplay}</div>
                  <div className={styles.contactCardSub}>{siteConfig.serviceArea}</div>
                </div>
              </div>
            </div>

            <div className={styles.quickActions}>
              <a href={`mailto:${siteConfig.email}`} className={styles.quickAction} style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}>
                <Mail size={15} /> Send an Email
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.quickAction} style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.547 4.1 1.505 5.832L.057 23.16a.75.75 0 0 0 .916.919l5.403-1.416A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.721 9.721 0 0 1-4.962-1.357l-.355-.211-3.685.966.983-3.595-.232-.37A9.721 9.721 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                Chat on WhatsApp
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={styles.quickAction} style={{ background: 'linear-gradient(135deg, #0077b5, #005f8d)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Connect on LinkedIn
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successState}>
                <CheckCircle2 size={48} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Message Received!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. This is a demo submission — in the live version, your enquiry would be sent directly to our team. We typically respond within 24 hours.
                </p>
                <button className={styles.successReset} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', website: '', service: '', budget: '', details: '' }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <h2 className={styles.formTitle}>Send us a Message</h2>
                <p className={styles.formNote}>
                  <AlertCircle size={13} /> This is currently a frontend-only form. Submissions will be connected to a backend when the site goes live.
                </p>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="name" className={styles.label}>Full Name <span className={styles.req}>*</span></label>
                    <input id="name" type="text" className={`${styles.input} ${errors.name ? styles.inputError : ''}`} placeholder="Your full name" value={form.name} onChange={set('name')} autoComplete="name" />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="email" className={styles.label}>Business Email <span className={styles.req}>*</span></label>
                    <input id="email" type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} placeholder="you@company.com" value={form.email} onChange={set('email')} autoComplete="email" />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input id="phone" type="tel" className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                    {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="company" className={styles.label}>Company / Business Name <span className={styles.req}>*</span></label>
                    <input id="company" type="text" className={`${styles.input} ${errors.company ? styles.inputError : ''}`} placeholder="Your business name" value={form.company} onChange={set('company')} autoComplete="organization" />
                    {errors.company && <p className={styles.error}>{errors.company}</p>}
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="website" className={styles.label}>Website URL</label>
                    <input id="website" type="url" className={styles.input} placeholder="https://yourbusiness.com" value={form.website} onChange={set('website')} autoComplete="url" />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="service" className={styles.label}>Service Interested In <span className={styles.req}>*</span></label>
                    <select id="service" className={`${styles.select} ${errors.service ? styles.inputError : ''}`} value={form.service} onChange={set('service')}>
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className={styles.error}>{errors.service}</p>}
                  </div>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="budget" className={styles.label}>Monthly Marketing Budget <span className={styles.optional}>(optional)</span></label>
                  <select id="budget" className={styles.select} value={form.budget} onChange={set('budget')}>
                    <option value="">Prefer not to say / Not sure yet</option>
                    <option value="under-10k">Under ₹10,000/month</option>
                    <option value="10k-25k">₹10,000 – ₹25,000/month</option>
                    <option value="25k-50k">₹25,000 – ₹50,000/month</option>
                    <option value="50k-1l">₹50,000 – ₹1,00,000/month</option>
                    <option value="1l+">Above ₹1,00,000/month</option>
                    <option value="international">International client (USD/GBP)</option>
                  </select>
                </div>

                <div className={styles.formField}>
                  <label htmlFor="details" className={styles.label}>Project Details <span className={styles.req}>*</span></label>
                  <textarea
                    id="details"
                    rows={5}
                    className={`${styles.textarea} ${errors.details ? styles.inputError : ''}`}
                    placeholder="Tell us about your business, your current search visibility situation, and what you're hoping to achieve..."
                    value={form.details}
                    onChange={set('details')}
                  />
                  {errors.details && <p className={styles.error}>{errors.details}</p>}
                </div>

                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  {submitting ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
