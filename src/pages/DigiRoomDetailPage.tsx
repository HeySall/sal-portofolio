import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { digiroomData as d } from '../data/digiroom'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import type { Variants } from 'framer-motion'
import './DigiRoomDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

// Next project after digiroom
const nextProject = projects[1] // Capital Desk

export default function DigiRoomDetailPage() {
  return (
    <motion.main
      className="dg"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Hero Header ───────────────────────────────── */}
      <div className="dg__hero-header">
        <div className="dg__hero-header-inner">
          <div className="dg__hero-left">
          <Link to="/work" className="dg__back-text">
            <ArrowLeft size={14} /> Back to home
          </Link>

          <div className="dg__hero-titles">
            <h1 className="dg__hero-title-main">Digiroom by Auto2000</h1>
            <h2 className="dg__hero-title-accent">Simulasi Kredit Feature</h2>
          </div>

          <p className="dg__title-desc">{d.hero.description}</p>

          <div className="dg__hero-meta">
            <div className="dg__hero-meta-item">
              <span className="dg__meta-label">My Role</span>
              <span className="dg__hero-meta-value">UI/UX Designer</span>
            </div>
            <div className="dg__hero-meta-item">
              <span className="dg__meta-label">Timeline</span>
              <span className="dg__hero-meta-value">2 Weeks</span>
            </div>
            <div className="dg__hero-meta-item">
              <span className="dg__meta-label">Scope</span>
              <span className="dg__hero-meta-value">Research, Hifi Design, Prototyping</span>
            </div>
          </div>

          <div className="dg__hero-stores">
            <a href={d.meta.playstore} target="_blank" rel="noopener noreferrer" className="dg__store-badge dg__store-badge--play">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z"/></svg>
              <span><small>GET IT ON</small><strong>Google Play</strong></span>
            </a>
            <a href={d.meta.appstore} target="_blank" rel="noopener noreferrer" className="dg__store-badge dg__store-badge--apple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span><small>Download on the</small><strong>App Store</strong></span>
            </a>
          </div>
          </div>{/* end hero-left */}

        <div className="dg__hero-right">
          <img src={d.hero.image} alt="Digiroom Hero Mockup" className="dg__hero-mockup" />
        </div>
        </div>{/* end hero-header-inner */}
      </div>{/* end hero-header */}

      <div className="dg__wrap">
        {/* ── Meta + Content ────────────────────────── */}
        <div className="dg__body">

          {/* Left meta column */}
          <aside className="dg__meta">
            <MetaItem label="Product" value={d.meta.product} />
            <MetaItem label="Company" value={d.meta.company} />
            <MetaItem label="Tools" value={d.meta.tools} />
            <MetaItem label="Team Collaboration" value={d.meta.team} />
          </aside>

          {/* Right content column */}
          <div className="dg__content">

            {/* Project Background */}
            <ContentSection title={d.projectBackground.title}>
              {d.projectBackground.paragraphs.map((p, i) => (
                <p key={i} className="dg__p" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </ContentSection>

            {/* The Problem */}
            <ContentSection title={d.projectBackground.theProblem.title} accent>
              <p className="dg__p" dangerouslySetInnerHTML={{ __html: d.projectBackground.theProblem.body }} />
            </ContentSection>

            {/* The Goals */}
            <ContentSection title={d.projectBackground.theGoals.title} accent>
              <p className="dg__p" dangerouslySetInnerHTML={{ __html: d.projectBackground.theGoals.body }} />
            </ContentSection>

          </div>
        </div>

        {/* ── Problem Definition ───────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.problemDefinition.title}</h2>
          <div className="dg__full-img">
            <img src={d.problemDefinition.image} alt="Problem Definition" />
          </div>
          {d.problemDefinition.paragraphs.map((p, i) => (
            <p key={i} className="dg__p" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <ul className="dg__bullets">
            {d.problemDefinition.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="dg__p">{d.problemDefinition.footer}</p>
        </Section>

        {/* ── Research & Analysis ──────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.research.title}</h2>
          <div className="dg__two-col">
            <div>
              <h3 className="dg__col-title dg__col-title--accent">{d.research.userInsight.title}</h3>
              <ul className="dg__bullets">
                {d.research.userInsight.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="dg__col-title dg__col-title--accent">{d.research.businessInsight.title}</h3>
              <ul className="dg__bullets">
                {d.research.businessInsight.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
          <div className="dg__quote-box">
            <span className="dg__quote-icon">✦</span>
            <p>{d.research.quote}</p>
          </div>
        </Section>

        {/* ── Benchmarking ─────────────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.benchmarking.title}</h2>
          <div className="dg__logo-center">
            <img src={d.benchmarking.logo} alt="SEVA" onError={e => {
              const el = e.currentTarget.parentElement!
              el.innerHTML = '<div class="dg__logo-placeholder">SEVA</div>'
            }} />
          </div>
          <p className="dg__p">{d.benchmarking.intro}</p>
          <ul className="dg__bullets">
            {d.benchmarking.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </Section>

        {/* ── Heuristic Evaluation ─────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.heuristic.title}</h2>
          <h3 className="dg__accent-title">{d.heuristic.subtitle}</h3>
          <p className="dg__p">{d.heuristic.subtitleDesc}</p>

          <div className="dg__heuristic-grid">
            {/* Left: mockup */}
            <div className="dg__heuristic-mockup dg__zoomable">
              <img src={d.heuristic.mockupImage} alt="Heuristic Mockup" />
            </div>
            {/* Right: cards */}
            <div className="dg__heuristic-cards">
              {d.heuristic.cards.map((card, i) => (
                <div key={i} className="dg__heuristic-card">
                  <div className="dg__heuristic-card-title">
                    <span className="dg__accent-icon">{card.icon}</span>
                    <h4>{card.title}</h4>
                  </div>
                  {card.body.split('\n\n').map((para, j) => (
                    <p key={j} className="dg__p dg__p--sm">{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="dg__p">{d.heuristic.summary}</p>

          <h3 className="dg__accent-title" style={{ marginTop: '2rem' }}>{d.heuristic.flowTitle}</h3>
          <p className="dg__p">{d.heuristic.flowDesc}</p>
          <div className="dg__full-img dg__zoomable">
            <img src={d.heuristic.flowImage} alt="Information Architecture" />
          </div>
        </Section>

        {/* ── Solution ─────────────────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.solution.title}</h2>
          <div className="dg__full-img dg__full-img--rounded">
            <img src={d.solution.heroImage} alt="Solution Hero" />
          </div>
          <p className="dg__p">{d.solution.intro}</p>

          <div className="dg__solutions">
            {d.solution.items.map((item, i) => (
              <div key={i} className="dg__solution-item-img">
                <img src={item.mockup} alt={item.label} />
              </div>
            ))}
          </div>
        </Section>

        {/* ── Other Details ─────────────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.otherDetails.title}</h2>

          <h3 className="dg__bullet-title">• {d.otherDetails.indicatorTitle}</h3>
          <div className="dg__full-img dg__full-img--dashed dg__zoomable">
            <img src={d.otherDetails.indicatorImage} alt="Indicator Status" />
          </div>
          {d.otherDetails.indicatorDesc.map((p, i) => (
            <p key={i} className="dg__p dg__p--sm">{p}</p>
          ))}

          <h3 className="dg__bullet-title" style={{ marginTop: '2.5rem' }}>
            • {d.otherDetails.helperTitle}
          </h3>
          <div className="dg__full-img dg__zoomable">
            <img src={d.otherDetails.helperImage} alt="Helper information" />
          </div>
          <p className="dg__p dg__p--sm">{d.otherDetails.helperDesc}</p>
        </Section>

        {/* ── Estimated Impact ─────────────────────── */}
        <Section>
          <h2 className="dg__section-title">{d.impact.title}</h2>
          <div className="dg__logo-center">
            <img src={d.impact.logo} alt="Digiroom Logo" onError={e => {
              const el = e.currentTarget.parentElement!
              el.innerHTML = '<div class="dg__logo-placeholder">digiroom</div>'
            }} />
          </div>
          <p className="dg__p">{d.impact.intro}</p>
          <p className="dg__p">{d.impact.body}</p>
          <ul className="dg__bullets">
            {d.impact.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </Section>

        {/* ── Thank You ─────────────────────────────── */}
        <section className="dg__thankyou">
          <div
            className="dg__thankyou-bg"
            style={{ backgroundImage: `url('/assets/projects/digiroom/digiroom-thankyou-bg.png')` }}
          />
          <div className="dg__thankyou-content">
            <h2 className="dg__thankyou-title">Thank You For Reading So Far!</h2>
            <p className="dg__thankyou-sub">Ready for Your Next Favourite Collaboration?</p>
            <a href="mailto:adityafaisal65@gmail.com" className="dg__thankyou-btn">
              GET IN TOUCH NOW!
            </a>
          </div>
        </section>

        {/* ── Next Project ──────────────────────────── */}
        <div className="dg__next">
          <span className="label-tag">Next Project</span>
          <Link to={`/work/${nextProject.id}`} className="dg__next-link" data-cursor="view">
            <span>{nextProject.title}</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </motion.main>
  )
}

// ── Reusable sub-components ───────────────────────────
function Section({ children }: { children: React.ReactNode }) {
  return <section className="dg__section">{children}</section>
}

function ContentSection({
  title,
  accent,
  children,
}: {
  title: string
  accent?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="dg__content-section">
      <h3 className={accent ? 'dg__accent-title' : 'dg__content-title'}>{title}</h3>
      {children}
    </div>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="dg__meta-item">
      <span className="dg__meta-label">{label}</span>
      <span className="dg__meta-value">{value}</span>
    </div>
  )
}
