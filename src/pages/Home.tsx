import { Link } from 'react-router-dom'
import {
  Search, Cpu, MessageSquare, Eye, Zap,
  ChevronRight, ArrowRight, CheckCircle2,
  TrendingUp, Shield, BarChart3, Target,
  Star, Quote
} from 'lucide-react'
import styles from './Home.module.css'

// ── Services data ────────────────────────────────────────────
const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    desc: 'Technical SEO, on-page optimization, keyword research, content strategy, and sustainable organic visibility.',
    href: '/services#seo',
    color: '#3b82f6',
  },
  {
    icon: Cpu,
    title: 'Generative Engine Optimization',
    desc: 'Improve brand discoverability across AI-powered search experiences through useful content and credible online mentions.',
    href: '/services#geo',
    color: '#7c3aed',
  },
  {
    icon: MessageSquare,
    title: 'Answer Engine Optimization',
    desc: 'Structure accurate, useful content to address customer questions and improve eligibility for answer-focused search experiences.',
    href: '/services#aeo',
    color: '#06b6d4',
  },
  {
    icon: Eye,
    title: 'AI Search Visibility',
    desc: 'Evaluate brand visibility across AI search tools, monitor relevant queries, and identify improvement opportunities.',
    href: '/services#ai-visibility',
    color: '#f59e0b',
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    desc: 'Improve site speed, mobile experience, user journeys, landing pages, and lead conversion opportunities.',
    href: '/services#web-optimization',
    color: '#10b981',
  },
]

// ── Process steps ────────────────────────────────────────────
const process = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand your business, audience, competitors, and existing online visibility landscape.',
  },
  {
    num: '02',
    title: 'Audit',
    desc: 'Identify technical, content, search visibility, and conversion improvement opportunities.',
  },
  {
    num: '03',
    title: 'Optimize',
    desc: 'Implement prioritized improvements across your website and digital presence.',
  },
  {
    num: '04',
    title: 'Measure & Improve',
    desc: 'Track meaningful metrics and continuously refine strategy based on real performance data.',
  },
]

// ── Why Us ───────────────────────────────────────────────────
const whyUs = [
  { icon: BarChart3, title: 'Data-Informed Decisions', desc: 'Every recommendation is backed by research, not guesswork.' },
  { icon: Shield, title: 'Transparent Reporting', desc: 'Clear, honest reports on what is working and what needs improvement.' },
  { icon: Target, title: 'Business-Focused Outcomes', desc: 'We focus on metrics that actually matter to your growth.' },
  { icon: Cpu, title: 'Modern Search Strategies', desc: 'Combining traditional SEO with emerging AI search visibility approaches.' },
  { icon: TrendingUp, title: 'Practical Implementation', desc: 'Strategies that are actionable, not just theoretical frameworks.' },
  { icon: CheckCircle2, title: 'No Unrealistic Promises', desc: 'Honest about timelines, expectations, and what\'s realistically achievable.' },
]

// ── Case Studies ─────────────────────────────────────────────
const cases = [
  {
    tag: 'Healthcare',
    title: 'Local Clinic Visibility Improvement',
    desc: 'A multi-specialty clinic wanted to increase appointment bookings from organic search. We identified technical issues, content gaps, and local SEO opportunities.',
    outcome: 'Improved local search presence and structured content for AI-powered answer platforms.',
    badge: 'Demo Concept',
  },
  {
    tag: 'Education',
    title: 'Coaching Institute Organic Growth',
    desc: 'An exam preparation institute struggled to rank for competitive educational keywords despite having quality content and experienced faculty.',
    outcome: 'Developed a content cluster strategy and optimized for student-intent queries across search and AI platforms.',
    badge: 'Demo Concept',
  },
  {
    tag: 'SaaS',
    title: 'SaaS Website Search Optimization',
    desc: 'A B2B SaaS startup had a technically sound product but minimal organic search visibility. Their target buyers were not finding them.',
    outcome: 'Built a topical authority strategy for GEO and AEO, improving discovery across AI-powered search tools.',
    badge: 'Demo Concept',
  },
]

// ── Reviews ──────────────────────────────────────────────────
const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Founder, WellnessFirst Clinics',
    location: 'Mumbai',
    rating: 5,
    text: 'Rankora completely transformed how our clinic shows up online. Their approach to local SEO and content strategy made a real difference. The team is transparent, responsive, and genuinely understands our audience.',
  },
  {
    name: 'Arjun Mehta',
    role: 'CEO, LearnPath Academy',
    location: 'Pune',
    rating: 5,
    text: 'We had tried other agencies before but the results were never clear. With Rankora, we finally understand what is being done and why. The reporting is honest and the strategy actually makes sense for our niche.',
  },
  {
    name: 'Siddharth Rao',
    role: 'Co-Founder, Nexio SaaS',
    location: 'Bangalore',
    rating: 5,
    text: 'What sets Rankora apart is their understanding of AI search visibility — something most SEO agencies are still catching up on. They helped us structure content that gets picked up by AI tools our buyers use.',
  },
  {
    name: 'Divya Nair',
    role: 'Marketing Head, Coastal Dental',
    location: 'Kochi',
    rating: 5,
    text: 'Shobhit and the team are incredibly knowledgeable about both traditional SEO and the new AI-driven search landscape. Our website performance improved significantly and we see more relevant inquiries now.',
  },
  {
    name: 'Marcus Thompson',
    role: 'Director, GrowthBase UK',
    location: 'London',
    rating: 5,
    text: 'Partnering with Rankora from the UK was seamless. Their understanding of international SEO and content optimization is excellent. Professional, communicative, and results-oriented team.',
  },
  {
    name: 'Rohit Jain',
    role: 'Founder, ShopLocal India',
    location: 'Ahmedabad',
    rating: 5,
    text: 'For a growing local business like ours, Rankora\'s practical approach to SEO without making unrealistic promises was refreshing. They set clear expectations and delivered solid, measurable improvements.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
          <div className={styles.grid} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              SEO · GEO · AEO · AI Search Visibility
            </div>
            <h1 className={styles.heroH1}>
              Be Found on Google.<br />
              <span className={styles.heroGrad}>Get Discovered by AI.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We help ambitious businesses grow their online visibility through SEO, AI search
              optimization, and conversion-focused digital experiences.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/contact" className={styles.heroCta1}>
                Get Your Free Audit <ArrowRight size={16} />
              </Link>
              <Link to="/services" className={styles.heroCta2}>
                Explore Our Services
              </Link>
            </div>
            <div className={styles.heroTrust}>
              <span>🇮🇳 Based in Bangalore</span>
              <span>·</span>
              <span>Serving India & International Clients</span>
            </div>
          </div>

          {/* Search visibility dashboard */}
          <div className={styles.heroVisual}>
            <div className={styles.dashboard}>
              <div className={styles.dashHeader}>
                <span className={styles.dashDot} style={{ background: '#ef4444' }} />
                <span className={styles.dashDot} style={{ background: '#f59e0b' }} />
                <span className={styles.dashDot} style={{ background: '#10b981' }} />
                <span className={styles.dashTitle}>Search Visibility Dashboard</span>
                <span className={styles.dashBadge}>Demo</span>
              </div>

              <div className={styles.dashCards}>
                <div className={styles.dashCard}>
                  <div className={styles.dashCardLabel}>Organic Visibility</div>
                  <div className={styles.dashCardVal} style={{ color: '#60a5fa' }}>↑ Growing</div>
                  <div className={styles.dashBar}>
                    <div className={styles.dashBarFill} style={{ width: '72%', background: '#3b82f6' }} />
                  </div>
                </div>
                <div className={styles.dashCard}>
                  <div className={styles.dashCardLabel}>AI Discovery Score</div>
                  <div className={styles.dashCardVal} style={{ color: '#a78bfa' }}>↑ Improving</div>
                  <div className={styles.dashBar}>
                    <div className={styles.dashBarFill} style={{ width: '58%', background: '#7c3aed' }} />
                  </div>
                </div>
                <div className={styles.dashCard}>
                  <div className={styles.dashCardLabel}>Page Performance</div>
                  <div className={styles.dashCardVal} style={{ color: '#34d399' }}>Optimized</div>
                  <div className={styles.dashBar}>
                    <div className={styles.dashBarFill} style={{ width: '85%', background: '#10b981' }} />
                  </div>
                </div>
              </div>

              <div className={styles.queryCards}>
                <div className={styles.queryCard}>
                  <Search size={12} style={{ color: '#60a5fa' }} />
                  <span>"best dental clinic near me"</span>
                  <span className={styles.queryTag} style={{ color: '#34d399' }}>Ranking</span>
                </div>
                <div className={styles.queryCard}>
                  <Cpu size={12} style={{ color: '#a78bfa' }} />
                  <span>"AI suggested coaching in Bangalore"</span>
                  <span className={styles.queryTag} style={{ color: '#a78bfa' }}>AI Visible</span>
                </div>
                <div className={styles.queryCard}>
                  <MessageSquare size={12} style={{ color: '#fb923c' }} />
                  <span>"what is GEO in digital marketing"</span>
                  <span className={styles.queryTag} style={{ color: '#fb923c' }}>Featured</span>
                </div>
              </div>

              {/* Node network */}
              <div className={styles.network}>
                <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="30" y1="40" x2="90" y2="20" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                  <line x1="30" y1="40" x2="90" y2="60" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                  <line x1="90" y1="20" x2="160" y2="15" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
                  <line x1="90" y1="20" x2="160" y2="40" stroke="rgba(124,58,237,0.3)" strokeWidth="1" />
                  <line x1="90" y1="60" x2="160" y2="65" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
                  <line x1="90" y1="60" x2="160" y2="40" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
                  <circle cx="30" cy="40" r="5" fill="#3b82f6" />
                  <circle cx="90" cy="20" r="4" fill="#7c3aed" />
                  <circle cx="90" cy="60" r="4" fill="#06b6d4" />
                  <circle cx="160" cy="15" r="3" fill="rgba(255,255,255,0.4)" />
                  <circle cx="160" cy="40" r="3" fill="rgba(255,255,255,0.4)" />
                  <circle cx="160" cy="65" r="3" fill="rgba(255,255,255,0.4)" />
                  <text x="22" y="55" fill="rgba(255,255,255,0.6)" fontSize="6">SEO</text>
                  <text x="80" y="18" fill="rgba(255,255,255,0.6)" fontSize="6">GEO</text>
                  <text x="80" y="72" fill="rgba(255,255,255,0.6)" fontSize="6">AEO</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────── */}
      <section className={styles.trustStrip}>
        <div className="container">
          <p className={styles.trustText}>Trusted to grow visibility across</p>
          <div className={styles.trustPills}>
            {['Healthcare & Clinics', 'Coaching Institutes', 'SaaS Startups', 'Local Businesses', 'Growing Brands', 'International Clients'].map(t => (
              <span key={t} className={styles.trustPill}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Prop ────────────────────────────────────── */}
      <section className={styles.valueProp}>
        <div className="container">
          <div className={styles.sectionTag}>Why Modern Search Strategy Matters</div>
          <h2 className={styles.sectionH2}>
            Search Is Evolving.<br />
            <span className={styles.grad}>Your Growth Strategy Should Too.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Search has changed fundamentally. AI systems like ChatGPT, Gemini, and Perplexity now influence how people discover businesses. A modern visibility strategy goes beyond traditional rankings.
          </p>

          <div className={styles.valueGrid}>
            {[
              { emoji: '🔍', title: 'Traditional Search Visibility', desc: 'Appear in Google and Bing when your customers are actively searching for your services.' },
              { emoji: '🤖', title: 'AI-Powered Discovery', desc: 'Increase the likelihood your business is surfaced in AI-generated answers and recommendations.' },
              { emoji: '📝', title: 'Useful, Trustworthy Content', desc: 'Create content that genuinely helps your audience and earns credibility with both search engines and AI systems.' },
              { emoji: '⚡', title: 'Technical Website Quality', desc: 'Fast, accessible, and well-structured websites rank better and convert more visitors.' },
              { emoji: '🎯', title: 'Conversion Optimization', desc: 'Turning organic visitors into actual inquiries and customers through better UX and clear calls to action.' },
            ].map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueEmoji}>{v.emoji}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesBg} />
        <div className="container">
          <div className={styles.sectionTagLight}>What We Do</div>
          <h2 className={styles.sectionH2Light}>Our Services</h2>
          <p className={styles.sectionSubtitleLight}>
            A comprehensive suite of search and AI visibility services designed to grow your business.
          </p>

          <div className={styles.servicesGrid}>
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap} style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                    <Icon size={22} style={{ color: s.color }} />
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <Link to={s.href} className={styles.serviceLink}>
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionTag}>How We Work</div>
          <h2 className={styles.sectionH2}>Our Approach</h2>
          <p className={styles.sectionSubtitle}>
            A structured, four-step process that takes you from understanding to measurable results.
          </p>

          <div className={styles.processTimeline}>
            {process.map((step, i) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processNum}>{step.num}</div>
                {i < process.length - 1 && <div className={styles.processLine} />}
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.whyBg} />
        <div className="container">
          <div className={styles.sectionTagLight}>Why Rankora</div>
          <h2 className={styles.sectionH2Light}>What Makes Us Different</h2>
          <div className={styles.whyGrid}>
            {whyUs.map((w) => {
              const Icon = w.icon
              return (
                <div key={w.title} className={styles.whyCard}>
                  <Icon size={20} className={styles.whyIcon} />
                  <div>
                    <h3 className={styles.whyTitle}>{w.title}</h3>
                    <p className={styles.whyDesc}>{w.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Case Studies ──────────────────────────────────── */}
      <section className={styles.casesSection}>
        <div className="container">
          <div className={styles.sectionTag}>Portfolio</div>
          <h2 className={styles.sectionH2}>Our Work</h2>
          <p className={styles.sectionSubtitle}>
            Illustrative examples of the types of projects we work on. Real client projects will be featured here with permission.
          </p>

          <div className={styles.casesGrid}>
            {cases.map((c) => (
              <div key={c.title} className={styles.caseCard}>
                <div className={styles.caseHeader}>
                  <span className={styles.caseTag}>{c.tag}</span>
                  <span className={styles.caseBadge}>{c.badge}</span>
                </div>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <p className={styles.caseDesc}>{c.desc}</p>
                <div className={styles.caseOutcome}>
                  <CheckCircle2 size={14} className={styles.caseCheck} />
                  <p>{c.outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/case-studies" className={styles.outlineBtn}>
              Explore Our Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────── */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsBg} />
        <div className="container">
          <div className={styles.sectionTagLight}>Client Feedback</div>
          <h2 className={styles.sectionH2Light}>What Our Clients Say</h2>
          <div className={styles.reviewsGrid}>
            {reviews.map((r) => (
              <div key={r.name} className={styles.reviewCard}>
                <Quote size={20} className={styles.reviewQuote} />
                <div className={styles.reviewStars}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className={styles.reviewText}>{r.text}</p>
                <div className={styles.reviewAuthor}>
                  <div className={styles.reviewAvatar}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.reviewRole}>{r.role} · {r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaH2}>Ready to Build Your Search Visibility?</h2>
            <p className={styles.ctaSubtitle}>
              Let's identify opportunities to improve how customers discover and engage with your business.
            </p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Get a Free Audit <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/918207665253?text=${encodeURIComponent('Hi Rankora! I\'d like to discuss my project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
