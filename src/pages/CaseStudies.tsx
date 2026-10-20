import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Search, Cpu, MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react'
import styles from './CaseStudies.module.css'

const categories = ['All', 'Healthcare', 'Education', 'SaaS']

const projects = [
  {
    id: 'clinic-visibility',
    category: 'Healthcare',
    icon: Search,
    iconColor: '#3b82f6',
    badge: 'Illustrative Example',
    title: 'Local Clinic Visibility Improvement',
    subtitle: 'Multi-specialty clinic · Bangalore, India',
    intro: 'A multi-specialty clinic was struggling to attract new patients through organic search despite offering quality services and having a well-regarded reputation in their local area.',
    challenge: 'The clinic\'s website had significant technical issues that prevented proper indexing. Their content did not address the specific health questions their patients were searching for online. Local search presence was incomplete, and the practice did not appear for key "near me" searches.',
    strategy: 'We conducted a full technical SEO audit, identified critical crawl errors, and rebuilt the content architecture around patient-intent keywords. Local SEO improvements focused on Google Business Profile completion and citation consistency. Content was restructured to address common patient questions — improving eligibility for answer-based search placements.',
    work: [
      'Complete technical SEO audit and fix implementation',
      'Google Business Profile optimisation',
      'Local citation audit and cleanup',
      'Patient-intent keyword mapping and content restructuring',
      'FAQ and structured content development',
      'Schema markup for healthcare provider information',
    ],
    results: [
      'Improved local search presence for key clinic-related queries',
      'More complete and accurate Google Business Profile',
      'Better content relevance for patient questions',
      'Foundation established for AI-powered answer eligibility',
    ],
    lessons: 'Healthcare websites benefit significantly from question-focused content. Patients use both traditional search and AI tools to research symptoms, treatments, and providers — both need to be addressed in the content strategy.',
  },
  {
    id: 'coaching-organic',
    category: 'Education',
    icon: TrendingUp,
    iconColor: '#7c3aed',
    badge: 'Illustrative Example',
    title: 'Coaching Institute Organic Growth',
    subtitle: 'Exam preparation institute · Pune, India',
    intro: 'An established exam preparation coaching institute had strong offline reputation but minimal online visibility. They relied entirely on word-of-mouth and offline advertising.',
    challenge: 'The institute\'s website was thin on content, lacked topic authority, and did not address the exam-preparation questions students were actively searching for. Their competitors had established content presence in the same keyword space.',
    strategy: 'Built a topical authority strategy centred on comprehensive, useful exam preparation content. Developed a content cluster model targeting high-intent student queries. Structured content to address common exam questions — improving eligibility for featured snippets and AI-generated educational answers.',
    work: [
      'Keyword research focused on student-intent search queries',
      'Content cluster architecture development',
      'Pillar page and supporting content creation strategy',
      'Internal linking structure improvement',
      'AEO optimisation for exam-related questions',
      'GEO preparation through credible content and citations',
    ],
    results: [
      'Established topical authority in core exam preparation content areas',
      'Improved organic search relevance for student search queries',
      'Content structured for AI-powered educational answer eligibility',
      'Clear content roadmap for ongoing growth',
    ],
    lessons: 'Education businesses have naturally high question-intent audiences. Structuring content to answer specific exam queries creates dual benefits — traditional search rankings and AI answer eligibility.',
  },
  {
    id: 'saas-seo',
    category: 'SaaS',
    icon: Cpu,
    iconColor: '#06b6d4',
    badge: 'Illustrative Example',
    title: 'SaaS Website Search Optimisation',
    subtitle: 'B2B SaaS startup · Bangalore, India',
    intro: 'A B2B SaaS startup had built a technically strong product but had almost no organic search visibility. Their target buyers were using search and AI tools to research solutions — but the startup wasn\'t appearing.',
    challenge: 'The website was technically adequate but lacked the content depth needed to compete in a crowded SaaS category. The product had no brand presence in AI-generated recommendations in their niche. Landing pages were conversion-weak and not aligned with buyer search intent.',
    strategy: 'Developed a combined SEO, GEO, and AEO strategy. Built topical authority through comparison content, use-case pages, and solution-focused blog content. Improved landing pages for conversion. Worked on brand mentions and citations to improve AI-platform representation.',
    work: [
      'SaaS-specific technical SEO audit',
      'Buyer-intent keyword research and page mapping',
      'Landing page optimisation for conversion',
      'Comparison and alternative content development',
      'GEO strategy — brand mention and citation building',
      'AI visibility audit across key SaaS recommendation queries',
    ],
    results: [
      'Improved search visibility for target buyer-intent queries',
      'Better AI platform representation for category-relevant searches',
      'Higher-converting landing pages with clearer CTAs',
      'Established content foundation for ongoing organic growth',
    ],
    lessons: 'SaaS companies often underestimate the value of content that addresses the research phase of the buyer journey. Buyers increasingly use AI tools to research and compare solutions — brand visibility in these tools is becoming as important as search rankings.',
  },
]

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTag}>Our Work</div>
          <h1 className={styles.heroH1}>
            Projects, Strategies &<br />
            <span className={styles.heroGrad}>Search Visibility Work</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Illustrative examples of the types of search visibility projects we work on. These are conceptual demonstrations. Genuine client projects will be featured here with permission.
          </p>
          <div className={styles.disclaimer}>
            <AlertTriangle size={14} />
            <span>All projects on this page are illustrative examples. They do not represent actual client engagements or real performance metrics.</span>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {filtered.map(project => {
              const Icon = project.icon
              return (
                <article key={project.id} className={styles.projectCard} id={project.id}>
                  <div className={styles.projectCardHeader}>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectCat}>{project.category}</span>
                      <span className={styles.projectBadge}>{project.badge}</span>
                    </div>
                    <div className={styles.projectIconWrap} style={{ background: `${project.iconColor}15`, border: `1px solid ${project.iconColor}30` }}>
                      <Icon size={24} style={{ color: project.iconColor }} />
                    </div>
                  </div>

                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  <p className={styles.projectIntro}>{project.intro}</p>

                  <div className={styles.projectSection}>
                    <h3 className={styles.projectSectionTitle}>The Challenge</h3>
                    <p className={styles.projectText}>{project.challenge}</p>
                  </div>

                  <div className={styles.projectSection}>
                    <h3 className={styles.projectSectionTitle}>Strategy Overview</h3>
                    <p className={styles.projectText}>{project.strategy}</p>
                  </div>

                  <div className={styles.projectSection}>
                    <h3 className={styles.projectSectionTitle}>Work Completed</h3>
                    <ul className={styles.workList}>
                      {project.work.map(w => (
                        <li key={w} className={styles.workItem}>
                          <CheckCircle2 size={13} style={{ color: project.iconColor, flexShrink: 0, marginTop: '2px' }} />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.projectResults}>
                    <h3 className={styles.projectSectionTitle}>Outcomes</h3>
                    <ul className={styles.resultsList}>
                      {project.results.map(r => (
                        <li key={r} className={styles.resultItem}>
                          <span className={styles.resultDot} style={{ background: project.iconColor }} />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.projectLessons}>
                    <MessageSquare size={14} style={{ color: project.iconColor, flexShrink: 0, marginTop: '2px' }} />
                    <p><strong>Key Insight:</strong> {project.lessons}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH2}>Ready to Start Your Own Growth Project?</h2>
            <p className={styles.ctaSubtitle}>
              Let's explore what's possible for your business and build a search visibility strategy that works.
            </p>
            <Link to="/contact" className={styles.ctaBtn}>
              Get a Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
