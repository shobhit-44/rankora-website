import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, User } from 'lucide-react'
import { siteConfig } from '../config/site'
import styles from './About.module.css'

const philosophy = [
  { title: 'Clarity Over Complexity', desc: 'We explain what we do and why in plain language. No jargon, no smoke and mirrors.' },
  { title: 'Strategy Before Execution', desc: 'Every action begins with understanding. We research before we recommend.' },
  { title: 'Quality Over Shortcuts', desc: 'We focus on sustainable approaches that build long-term value, not quick fixes that fade.' },
  { title: 'Transparency Over Promises', desc: 'We report honestly — including when things need improvement. No vanity metrics.' },
  { title: 'Measurable Progress', desc: 'Every engagement is anchored to metrics that genuinely matter to your business growth.' },
]

const differentiators = [
  'Combines traditional SEO expertise with emerging AI search visibility strategies',
  'Technical SEO knowledge applied to real business outcomes, not just rankings',
  'Structured content approach designed for both search engines and AI systems',
  'Conversion-focused thinking applied throughout — not just traffic, but results',
  'Transparent reporting with context, not just data dumps',
  'Works with businesses across healthcare, education, SaaS, and professional services',
]

const process = [
  { step: 'Discovery', desc: 'Understanding your business, audience, and goals in depth before making any recommendations.' },
  { step: 'Research', desc: 'Analysing competitors, search landscape, and AI visibility opportunities specific to your niche.' },
  { step: 'Strategy', desc: 'Building a prioritised, realistic plan based on your budget, timeline, and business goals.' },
  { step: 'Implementation', desc: 'Executing the agreed work with clear communication and transparent progress updates.' },
  { step: 'Measurement', desc: 'Tracking meaningful metrics and continuously refining the strategy based on real data.' },
]

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTag}>About Rankora</div>
          <h1 className={styles.heroH1}>
            Building Better Digital Visibility<br />
            <span className={styles.heroGrad}>for Growing Businesses</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Rankora is a modern digital growth agency based in Bangalore, helping businesses across India and internationally improve how they are discovered online — through traditional search engines and AI-powered platforms.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionInner}>
            <div className={styles.missionLeft}>
              <div className={styles.sectionTag}>Our Mission</div>
              <h2 className={styles.sectionH2}>
                Helping Businesses Become Genuinely Discoverable Online
              </h2>
            </div>
            <div className={styles.missionRight}>
              <p className={styles.missionText}>
                We exist to help businesses improve their discoverability through high-quality websites, useful content, and evolving search strategies — combining traditional SEO with modern AI search visibility approaches.
              </p>
              <p className={styles.missionText}>
                Search has changed. AI systems now influence how people find information, businesses, and answers. Rankora helps organisations navigate this landscape with practical, honest, and effective digital growth strategies.
              </p>
              <p className={styles.missionText}>
                We serve small and medium-sized businesses, healthcare providers, clinics, coaching institutes, SaaS companies, and growing brands across India and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyBg} />
        <div className="container">
          <div className={styles.sectionTagLight}>How We Think</div>
          <h2 className={styles.sectionH2Light}>Our Philosophy</h2>
          <div className={styles.philosophyGrid}>
            {philosophy.map((p, i) => (
              <div key={p.title} className={styles.philosophyCard}>
                <div className={styles.philosophyNum}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className={styles.philosophyTitle}>{p.title}</h3>
                <p className={styles.philosophyDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className={styles.different}>
        <div className="container">
          <div className={styles.differentInner}>
            <div className={styles.differentLeft}>
              <div className={styles.sectionTag}>Our Edge</div>
              <h2 className={styles.sectionH2}>What Makes Us Different</h2>
              <p className={styles.differentIntro}>
                Most SEO agencies focus on traditional search alone. Rankora brings together SEO expertise, AI search visibility, technical optimisation, and conversion-focused thinking under one roof.
              </p>
              <ul className={styles.differentList}>
                {differentiators.map(d => (
                  <li key={d} className={styles.differentItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.differentRight}>
              <div className={styles.statGrid}>
                {[
                  { label: 'Service Areas', val: 'SEO, GEO, AEO, AI Visibility, Web Opt.' },
                  { label: 'Location', val: 'Bangalore, India' },
                  { label: 'Clients Served', val: 'India & International' },
                  { label: 'Approach', val: 'Research-first, data-informed' },
                ].map(s => (
                  <div key={s.label} className={styles.statCard}>
                    <div className={styles.statVal}>{s.val}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.processBg} />
        <div className="container">
          <div className={styles.sectionTagLight}>How We Work</div>
          <h2 className={styles.sectionH2Light}>Our Working Process</h2>
          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <div key={p.step} className={styles.processStep}>
                <div className={styles.processStepNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{p.step}</h3>
                  <p className={styles.processStepDesc}>{p.desc}</p>
                </div>
                {i < process.length - 1 && <div className={styles.processArrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className={styles.founderSection}>
        <div className="container">
          <div className={styles.sectionTag}>The Team</div>
          <h2 className={styles.sectionH2}>Meet the Founder</h2>
          <div className={styles.founderCard}>
            <div className={styles.founderPhotoWrap}>
              <div className={styles.founderPhotoPlaceholder}>
                <User size={40} />
                <span>Photo Coming Soon</span>
              </div>
            </div>
            <div className={styles.founderContent}>
              <h3 className={styles.founderName}>{siteConfig.founder.name}</h3>
              <p className={styles.founderTitle}>{siteConfig.founder.title}</p>
              <p className={styles.founderBio}>{siteConfig.founder.bio}</p>
              <a
                href={siteConfig.founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.founderLinkedin}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH2}>Let's Grow Your Digital Presence Together</h2>
            <p className={styles.ctaSubtitle}>
              Whether you're a clinic, coaching institute, SaaS company, or growing brand — let's find the right strategy for your business.
            </p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Get a Free Audit <ArrowRight size={16} />
              </Link>
              <Link to="/services" className={styles.ctaSecondary}>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
