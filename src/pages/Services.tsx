import { Link } from 'react-router-dom'
import { Search, MapPin, FileText, Cpu, MessageSquare, Eye, Zap, Layout, CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import styles from './Services.module.css'

const services = [
  {
    id: 'seo',
    icon: Search,
    color: '#3b82f6',
    title: 'Technical SEO',
    what: 'Technical SEO is the foundation of search visibility. It involves optimising the infrastructure of your website so search engines can crawl, index, and understand your content efficiently.',
    who: 'Businesses of all sizes that want a solid foundation for their organic search strategy.',
    problems: ['Low search rankings despite good content', 'Slow page load speeds', 'Indexing and crawling issues', 'Poor mobile experience'],
    includes: ['Site architecture audit', 'Core Web Vitals optimisation', 'XML sitemap & robots.txt setup', 'Structured data implementation', 'Canonicalisation review', 'Redirect management'],
    deliverables: ['Technical audit report', 'Prioritised fix recommendations', 'Monthly health monitoring'],
    success: 'Improved crawl coverage, faster page speeds, and healthier Core Web Vitals scores.',
  },
  {
    id: 'on-page-seo',
    icon: FileText,
    color: '#2563eb',
    title: 'On-Page SEO & Content Optimisation',
    what: 'On-page SEO ensures every page on your website is structured to communicate relevance to search engines and useful information to visitors.',
    who: 'Businesses with existing content that is underperforming in organic search.',
    problems: ['Content not ranking for target queries', 'Poor keyword relevance', 'Weak meta information', 'Low click-through rates from search'],
    includes: ['Keyword research & mapping', 'Title tag & meta description optimisation', 'Heading structure review', 'Internal linking strategy', 'Content gap analysis', 'Image optimisation'],
    deliverables: ['On-page audit report', 'Optimised page recommendations', 'Content brief templates'],
    success: 'Higher relevance scores, improved rankings for target keywords, and better click-through rates.',
  },
  {
    id: 'local-seo',
    icon: MapPin,
    color: '#06b6d4',
    title: 'Local SEO',
    what: 'Local SEO helps businesses appear in location-based searches. Essential for clinics, service providers, and any business serving a specific geographic area.',
    who: 'Local businesses, clinics, service providers, coaching institutes, and multi-location brands.',
    problems: ['Not appearing in "near me" searches', 'Incomplete or inaccurate business listings', 'Low local review presence', 'Competitors outranking in map results'],
    includes: ['Google Business Profile optimisation', 'Local citation building', 'NAP consistency audit', 'Local keyword strategy', 'Review strategy', 'Local content development'],
    deliverables: ['GBP setup & optimisation report', 'Citation audit', 'Local ranking report'],
    success: 'Improved visibility in local map packs, more calls and direction requests from organic search.',
  },
  {
    id: 'geo',
    icon: Cpu,
    color: '#7c3aed',
    title: 'Generative Engine Optimisation (GEO)',
    what: 'GEO is the practice of improving a brand\'s discoverability within AI-generated search experiences. When AI systems synthesise answers from multiple sources, we help ensure your business is represented accurately and relevantly.',
    who: 'Brands wanting to stay visible as AI-powered search tools become a primary discovery channel.',
    problems: ['Brand not mentioned in AI-generated summaries', 'Inaccurate information in AI answers', 'Limited brand mentions across credible sources', 'No strategy for AI visibility'],
    includes: ['AI visibility audit across key tools', 'Brand mention & citation strategy', 'Content clarity & authority improvements', 'E-E-A-T signal review', 'Third-party mention development'],
    deliverables: ['GEO readiness report', 'Brand representation audit', 'Content improvement recommendations'],
    success: 'Improved brand representation in AI-generated answers (note: inclusion in AI answers cannot be guaranteed).',
  },
  {
    id: 'aeo',
    icon: MessageSquare,
    color: '#06b6d4',
    title: 'Answer Engine Optimisation (AEO)',
    what: 'AEO focuses on structuring content to address specific questions that your audience is asking — both in traditional search and through AI-powered answer interfaces.',
    who: 'Businesses in expert-driven industries like healthcare, education, finance, and professional services.',
    problems: ['Not appearing in featured snippets', 'Content doesn\'t answer customer questions directly', 'Missing FAQ and structured content', 'Low relevance for question-based queries'],
    includes: ['Question research & mapping', 'FAQ content development', 'Schema markup for Q&A', 'Conversational content strategy', 'Snippet optimisation', 'Voice search readiness'],
    deliverables: ['AEO content strategy', 'FAQ implementation guide', 'Structured data recommendations'],
    success: 'Improved eligibility for featured snippets and answer-focused search placements.',
  },
  {
    id: 'ai-visibility',
    icon: Eye,
    color: '#f59e0b',
    title: 'AI Search Visibility Audits',
    what: 'A structured review of how your brand appears (or doesn\'t appear) across AI-powered search tools such as ChatGPT, Gemini, Perplexity, and similar platforms.',
    who: 'Businesses that want to understand their current AI search presence and identify opportunities.',
    problems: ['Unclear AI visibility status', 'Competitors being recommended by AI tools', 'No baseline for AI brand presence', 'Missing from AI-generated category recommendations'],
    includes: ['Multi-platform AI query testing', 'Brand representation analysis', 'Competitor AI visibility comparison', 'Opportunity identification', 'Improvement recommendations'],
    deliverables: ['AI visibility audit report', 'Competitor comparison', 'Actionable improvement plan'],
    success: 'Clear understanding of AI visibility status and a practical improvement roadmap.',
  },
  {
    id: 'web-optimization',
    icon: Zap,
    color: '#10b981',
    title: 'Website Performance Optimisation',
    what: 'Website speed and technical performance directly impact user experience, search rankings, and conversion rates. We identify and fix what\'s slowing your site down.',
    who: 'Any business with a website that loads slowly or underperforms on mobile.',
    problems: ['Slow page load times', 'Poor Core Web Vitals scores', 'High bounce rates', 'Low mobile usability scores'],
    includes: ['Core Web Vitals audit', 'Image optimisation', 'JavaScript & CSS review', 'Caching strategy', 'Mobile performance review', 'Server response time analysis'],
    deliverables: ['Performance audit report', 'Prioritised fix list', 'Before/after metrics'],
    success: 'Measurably faster page load times and improved Core Web Vitals scores.',
  },
  {
    id: 'landing-pages',
    icon: Layout,
    color: '#ec4899',
    title: 'Landing Page & Conversion Optimisation',
    what: 'Getting traffic to your website is only half the challenge. Landing pages need to be designed and written to convert visitors into enquiries, bookings, or purchases.',
    who: 'Businesses running SEO, paid ads, or any digital campaigns that drive traffic to landing pages.',
    problems: ['High traffic but low conversion rates', 'Unclear calls to action', 'Poor form completion rates', 'Landing pages not matching search intent'],
    includes: ['Landing page audit', 'CTA review and improvement', 'Copy and messaging analysis', 'Form optimisation', 'Trust signal review', 'A/B testing recommendations'],
    deliverables: ['Conversion audit report', 'Optimised page recommendations', 'A/B test plan'],
    success: 'Improved lead-to-visitor conversion rates and better ROI from existing traffic.',
  },
]

const faqs = [
  {
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term investment. In competitive niches, meaningful results typically take 4–6 months. Some improvements, such as technical fixes, can show quicker impact. We will set realistic expectations based on your specific situation during the initial discovery phase.',
  },
  {
    q: 'Do you guarantee Google rankings?',
    a: 'No. No ethical SEO agency can guarantee specific rankings. Search algorithms are controlled by Google and change frequently. What we can guarantee is transparent, quality work using proven strategies and honest reporting on your progress.',
  },
  {
    q: 'Can you guarantee my business will appear in AI-generated answers?',
    a: 'No. AI systems like ChatGPT, Gemini, and Perplexity determine their own outputs based on training data and algorithms outside our control. We can improve your brand\'s authority, clarity, and online presence to increase the likelihood of accurate representation — but inclusion in specific AI outputs cannot be guaranteed.',
  },
  {
    q: 'How does pricing work?',
    a: 'We offer project-based and monthly retainer engagements depending on the scope of work. Every project starts with a free discovery conversation and an audit to understand your current situation. Pricing is shared after we understand your specific needs.',
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes. We serve clients across India and internationally. Our team works remotely and communicates effectively across time zones.',
  },
  {
    q: 'What deliverables can I expect?',
    a: 'Every engagement includes clear deliverables such as audit reports, strategy documents, implementation checklists, and regular performance reports. Exact deliverables vary by service — detailed information is available for each service above.',
  },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  )
}

export default function Services() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTag}>Our Services</div>
          <h1 className={styles.heroH1}>
            Search Visibility Built for<br />
            <span className={styles.heroGrad}>the Next Era of Discovery</span>
          </h1>
          <p className={styles.heroSubtitle}>
            SEO, GEO, AEO, AI visibility monitoring, and website optimisation — working together to build your brand's online presence across search engines and AI-powered discovery platforms.
          </p>
          <Link to="/contact" className={styles.heroCta}>
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services detail */}
      <section className={styles.servicesDetail}>
        <div className="container">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div key={svc.id} id={svc.id} className={`${styles.svcBlock} ${idx % 2 === 1 ? styles.svcAlt : ''}`}>
                <div className={styles.svcLeft}>
                  <div className={styles.svcIconWrap} style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}35` }}>
                    <Icon size={28} style={{ color: svc.color }} />
                  </div>
                  <h2 className={styles.svcTitle}>{svc.title}</h2>
                  <p className={styles.svcWhat}>{svc.what}</p>
                  <div className={styles.svcForLabel}>Who it's for</div>
                  <p className={styles.svcFor}>{svc.who}</p>
                  <div className={styles.svcForLabel}>How success is measured</div>
                  <p className={styles.svcFor}>{svc.success}</p>
                </div>

                <div className={styles.svcRight}>
                  <div className={styles.svcInfoBlock}>
                    <h4 className={styles.svcInfoTitle}>Problems it addresses</h4>
                    <ul className={styles.svcList}>
                      {svc.problems.map(p => (
                        <li key={p} className={styles.svcListItem}>
                          <span className={styles.svcListDot} style={{ background: svc.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.svcInfoBlock}>
                    <h4 className={styles.svcInfoTitle}>What's included</h4>
                    <ul className={styles.svcList}>
                      {svc.includes.map(p => (
                        <li key={p} className={styles.svcListItem}>
                          <CheckCircle2 size={13} style={{ color: svc.color, flexShrink: 0, marginTop: '2px' }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.svcInfoBlock}>
                    <h4 className={styles.svcInfoTitle}>Expected deliverables</h4>
                    <ul className={styles.svcList}>
                      {svc.deliverables.map(p => (
                        <li key={p} className={styles.svcListItem}>
                          <span className={styles.svcArrow}>→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className={styles.processBg} />
        <div className="container">
          <div className={styles.sectionTagLight}>How We Work</div>
          <h2 className={styles.sectionH2Light}>Engagement Process</h2>
          <p className={styles.sectionSubtitleLight}>
            Every project follows a structured process from discovery to ongoing improvement.
          </p>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Discovery', desc: 'Free consultation to understand your business, goals, and current digital presence.' },
              { step: '02', title: 'Audit', desc: 'Comprehensive audit of your technical setup, content, and search visibility.' },
              { step: '03', title: 'Strategy', desc: 'A prioritised plan specific to your business, budget, and goals.' },
              { step: '04', title: 'Implementation', desc: 'Systematic execution of agreed improvements with clear timelines.' },
              { step: '05', title: 'Reporting', desc: 'Regular, transparent reports on progress, metrics, and next steps.' },
            ].map(s => (
              <div key={s.step} className={styles.processCard}>
                <div className={styles.processNum}>{s.step}</div>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionTag}>Common Questions</div>
          <h2 className={styles.sectionH2}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map(f => <FAQ key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className="container">
          <h2 className={styles.ctaH2}>Let's Find the Right Growth Strategy for Your Business</h2>
          <p className={styles.ctaSubtitle}>
            Share a little about your business, and we'll suggest the right combination of services.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
