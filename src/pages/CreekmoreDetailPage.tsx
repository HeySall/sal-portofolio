import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { creekmoreData as c } from '../data/creekmore'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import type { Variants } from 'framer-motion'
import './CreekmoreDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const nextProject = projects[1] // Digiroom (setelah Creekmore)

export default function CreekmoreDetailPage() {
  return (
    <motion.main
      className="cr"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Header */}
      <div className="cr__hero">
        <div className="cr__hero-inner">
          <div className="cr__hero-left">
            <Link to="/work" className="cr__back">
              <ArrowLeft size={14} />
              <span>Back to home</span>
            </Link>

            <h1 className="cr__title">
              {c.hero.title}{' '}
              <span className="cr__highlight">{c.hero.titleHighlight}</span>{' '}
              {c.hero.titleEnd}
            </h1>

            <p className="cr__description">{c.hero.description}</p>

            <div className="cr__meta">
              <div className="cr__meta-item">
                <span className="cr__meta-label">My Role</span>
                <span className="cr__meta-value">{c.meta.role}</span>
              </div>
              <div className="cr__meta-item">
                <span className="cr__meta-label">Scope</span>
                <span className="cr__meta-value">{c.meta.scope}</span>
              </div>
              <div className="cr__meta-item">
                <span className="cr__meta-label">Industry</span>
                <span className="cr__meta-value">{c.meta.industry}</span>
              </div>
            </div>
          </div>

          <div className="cr__hero-right">
            <img src={c.hero.image} alt="Creekmore homepage redesign" className="cr__hero-img" />
          </div>
        </div>
      </div>

      <div className="cr__wrap">
        {/* At a Glance */}
        <Section>
          <SectionLabel>{c.atAGlance.title}</SectionLabel>
          <div className="cr__glance-grid">
            <div className="cr__glance-item">
              <h3 className="cr__glance-title">Problem</h3>
              <p className="cr__glance-text">{c.atAGlance.problem}</p>
            </div>
            <div className="cr__glance-item">
              <h3 className="cr__glance-title">Approach</h3>
              <p className="cr__glance-text">{c.atAGlance.approach}</p>
            </div>
            <div className="cr__glance-item">
              <h3 className="cr__glance-title">Output</h3>
              <p className="cr__glance-text">{c.atAGlance.output}</p>
            </div>
          </div>
        </Section>

        {/* The Challenge */}
        <Section>
          {/* Top: label+heading left, body text right */}
          <div className="cr__challenge-top">
            <div className="cr__challenge-left">
              <div className="cr__label">
                <span className="cr__label-line" />
                <span className="cr__label-text">{c.challenge.title}</span>
              </div>
              <h2 className="cr__challenge-heading">
                Small business owners don't shop for marketing.{' '}
                They shop for <span className="cr__highlight">more customers.</span>
              </h2>
            </div>
            <div className="cr__challenge-right">
              {c.challenge.body.map((para, i) => (
                <p key={i} className="cr__text">{para}</p>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="cr__principles-cards">
            {c.challenge.principles.map((principle, i) => (
              <div
                key={i}
                className={`cr__principle-card${i === 3 ? ' cr__principle-card--accent' : ''}`}
              >
                <div className="cr__principle-card-top">
                  <div className="cr__principle-card-icon">
                    {i === 0 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    )}
                    {i === 1 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                      </svg>
                    )}
                    {i === 2 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    )}
                    {i === 3 && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
                      </svg>
                    )}
                  </div>
                  <span className="cr__principle-card-num">{principle.number}</span>
                </div>
                <h3 className="cr__principle-card-title">{principle.title}</h3>
                <p className="cr__principle-card-desc">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="cr__quote-large">
            <span className="cr__quote-mark">"</span>
            <div className="cr__quote-body">
              <p className="cr__quote-text">
                Make it feel human, prove it works, and make calling us the{' '}
                <span className="cr__highlight">easiest next step.</span>
              </p>
              <p className="cr__quote-citation">— Project brief</p>
            </div>
          </div>
        </Section>

      </div>{/* end cr__wrap */}

      {/* Design Direction — full bleed */}
      <div className="cr__dir-wrap">
        <div className="cr__dir-inner">
          <Section className="cr__section--surface">
          <SectionLabel>{c.designDirection.title}</SectionLabel>
          <h2 className="cr__heading">{c.designDirection.heading}</h2>
          <p className="cr__text">{c.designDirection.body}</p>

          {/* Flow pills */}
          <div className="cr__flow">
            {c.designDirection.flow.map((step, i) => (
              <div key={i} className="cr__flow-item">
                <span className={`cr__flow-pill${i === c.designDirection.flow.length - 1 ? ' cr__flow-pill--active' : ''}`}>
                  {step}
                </span>
                {i < c.designDirection.flow.length - 1 && (
                  <span className="cr__flow-arrow">→</span>
                )}
              </div>
            ))}
          </div>

          {/* 3-col principles */}
          <div className="cr__dir-principles">
            {c.designDirection.designPrinciples.map((p, i) => (
              <div key={i} className="cr__dir-principle">
                <h3 className="cr__dir-principle-title">{p.title}</h3>
                <p className="cr__dir-principle-desc">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Color palette + Typography */}
          <div className="cr__palette-wrap">
            <div className="cr__palette-grid">
              {/* Navy large */}
              <div className="cr__swatch cr__swatch--navy cr__swatch--large">
                <span className="cr__swatch-name">Navy</span>
                <span className="cr__swatch-hex">#0F233B</span>
                <span className="cr__swatch-role">Foundation · text · inverse surfaces</span>
              </div>
              {/* Right 2x2 */}
              <div className="cr__palette-right">
                <div className="cr__swatch cr__swatch--cyan">
                  <span className="cr__swatch-name">Cyan</span>
                  <span className="cr__swatch-hex">#2FD7F7</span>
                  <span className="cr__swatch-role">Accent on navy · primary CTA</span>
                </div>
                <div className="cr__swatch cr__swatch--blue">
                  <span className="cr__swatch-name">Bright Blue</span>
                  <span className="cr__swatch-hex">#087CF0</span>
                  <span className="cr__swatch-role">Accent on white & ice</span>
                </div>
                <div className="cr__swatch cr__swatch--ice">
                  <span className="cr__swatch-name">Ice</span>
                  <span className="cr__swatch-hex">#EAF4FF</span>
                  <span className="cr__swatch-role">Soft surfaces</span>
                </div>
                <div className="cr__swatch cr__swatch--slate">
                  <span className="cr__swatch-name">Slate</span>
                  <span className="cr__swatch-hex">#3A4D66</span>
                  <span className="cr__swatch-role">Secondary text</span>
                </div>
              </div>
            </div>

            {/* Typography card */}
            <div className="cr__type-card">
              <span className="cr__type-label">TYPOGRAPHY</span>
              <div className="cr__type-display">A<span>a</span></div>
              <p className="cr__type-desc">Plus Jakarta Sans; one family for everything. ExtraBold for display, Regular to Bold for UI and body.</p>
              <div className="cr__type-weights">
                <span>Regular</span>
                <span>SemiBold</span>
                <span>Bold</span>
                <span>ExtraBold</span>
              </div>
            </div>
          </div>

          {/* Accent rule */}
          <div className="cr__accent-rule">
            <span className="cr__accent-rule-label">Accent rule</span>
            <span className="cr__accent-rule-text">{c.designDirection.accentRule}</span>
          </div>

          {/* Component mockup grid */}
          <div className="cr__comp-grid">
            {c.designDirection.componentImages.map((src, i) => (
              <div key={i} className="cr__comp-card">
                <img
                  src={src}
                  alt={`Component ${i + 1}`}
                  onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    el.parentElement!.classList.add('cr__comp-card--placeholder')
                  }}
                />
              </div>
            ))}
          </div>
        </Section>
        </div>
      </div>{/* end cr__dir-wrap */}

      {/* Full bleed showcase image */}
      <div className="cr__showcase-image">
        <img src="/assets/projects/creekmore/section-gambar.png" alt="Creekmore design showcase" />
      </div>

      <div className="cr__wrap">
        {/* Building the Story */}
        <Section>
          <SectionLabel>{c.buildingTheStory.title}</SectionLabel>
          <h2 className="cr__heading">{c.buildingTheStory.heading}</h2>
          <p className="cr__text">{c.buildingTheStory.body}</p>

          <div className="cr__story-grid">
            {c.buildingTheStory.cards.map((card, i) => (
              <div key={i} className="cr__story-card">
                <div className="cr__story-card-img">
                  <span className="cr__story-badge">{card.badge}</span>
                  <img
                    src={card.image}
                    alt={card.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.classList.add('cr__story-card-img--empty')
                    }}
                  />
                </div>
                <div className="cr__story-card-body">
                  <span className="cr__story-tag">
                    <span className="cr__story-dot" />
                    {card.tag}
                  </span>
                  <h3 className="cr__story-title">{card.title}</h3>
                  <p className="cr__story-desc">{card.description}</p>
                  <span className="cr__story-line" />
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>{/* end cr__wrap */}

      {/* Why It Looks — full bleed #F9F9FC */}
      <div className="cr__why-wrap">
        <div className="cr__why-inner">
          <div className="cr__why-header">
            <SectionLabel>{c.whyItLooks.title}</SectionLabel>
            <h2 className="cr__heading">{c.whyItLooks.heading}</h2>
            <p className="cr__text">{c.whyItLooks.body}</p>
          </div>

          <div className="cr__why-list">
            {c.whyItLooks.items.map((item, i) => (
              <div key={i} className={`cr__why-item${item.imageLeft ? ' cr__why-item--flip' : ''}`}>
                <div className="cr__why-text">
                  <span className="cr__why-tag">
                    <span className="cr__story-dot" />
                    {item.tag}
                  </span>
                  <h3 className="cr__why-title">{item.title}</h3>
                  <p className="cr__why-label">The Problem</p>
                  <p className="cr__why-body">{item.problem}</p>
                  <p className="cr__why-label">The Decision</p>
                  <ul className="cr__why-ul">
                    {item.solution.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="cr__why-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.classList.add('cr__why-img--empty')
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design System */}
      <div className="cr__wrap">
        <Section>
          <SectionLabel>{c.designSystem.title}</SectionLabel>
          <h2 className="cr__heading">{c.designSystem.heading}</h2>
          <p className="cr__text" style={{maxWidth: '520px'}}>{c.designSystem.body}</p>

          {/* Stats row */}
          <div className="cr__ds-stats">
            {c.designSystem.stats.map((s, i) => (
              <div key={i} className="cr__ds-stat">
                <span className="cr__ds-stat-value">{s.value}</span>
                <span className="cr__ds-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Color tokens + Type scale */}
          <div className="cr__ds-bottom">
            <div className="cr__ds-tokens">
              <p className="cr__ds-panel-label">Semantic Color Tokens</p>
              <div className="cr__ds-token-grid">
                {c.designSystem.colorTokens.map((t, i) => (
                  <div key={i} className="cr__ds-token">
                    <div className="cr__ds-token-swatch" style={{background: t.value}} />
                    <div className="cr__ds-token-info">
                      <span className="cr__ds-token-name">{t.name}</span>
                      <span className="cr__ds-token-val">{t.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cr__ds-typescale">
              <p className="cr__ds-panel-label">Type Scale</p>
              <div className="cr__ds-type-rows">
                {c.designSystem.typeScale.map((t, i) => (
                  <div key={i} className="cr__ds-type-row">
                    <div className="cr__ds-type-meta">
                      <span className="cr__ds-type-name">{t.name}</span>
                      <span className="cr__ds-type-spec">{t.spec}</span>
                    </div>
                    <span className="cr__ds-type-preview" style={{fontSize: t.size}}>{t.preview}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Mobile Experience — full bleed navy */}
      <div className="cr__mobile-wrap">
        <div className="cr__mobile-inner">
          <div className="cr__mobile-header">
            <div className="cr__mobile-header-left">
              <div className="cr__label cr__label--light">
                <span className="cr__label-line cr__label-line--light" />
                <span className="cr__label-text cr__label-text--light">{c.mobileExperience.title}</span>
              </div>
              <h2 className="cr__mobile-heading">{c.mobileExperience.heading}</h2>
            </div>
            <p className="cr__mobile-desc">{c.mobileExperience.body}</p>
          </div>

          <div className="cr__mobile-screens">
            {c.mobileExperience.screens.map((s, i) => (
              <div key={i} className="cr__mobile-screen">
                <div className="cr__mobile-screen-img">
                  <img
                    src={s.image}
                    alt={s.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.classList.add('cr__mobile-screen-img--empty')
                    }}
                  />
                </div>
                <div className="cr__mobile-screen-meta">
                  <span className="cr__mobile-screen-num">{s.number}</span>
                  <span className="cr__mobile-screen-title">{s.title}</span>
                  <span className="cr__mobile-screen-desc">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Experience */}
      <div className="cr__wrap">
        <Section>
          <SectionLabel>{c.finalExperience.title}</SectionLabel>
          <h2 className="cr__heading">{c.finalExperience.heading}</h2>
          <p className="cr__text">{c.finalExperience.body}</p>

          <div className="cr__final-grid">
            {c.finalExperience.images.map((src, i) => (
              <div key={i} className="cr__final-img">
                <img src={src} alt={`Final ${i + 1}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.classList.add('cr__final-img--empty')
                  }}
                />
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Reflection — full bleed #F9F9FC */}
      <div className="cr__reflection-wrap">
        <div className="cr__reflection-inner">
          <SectionLabel>{c.reflection.title}</SectionLabel>
          <h2 className="cr__heading" style={{marginTop: '12px'}}>{c.reflection.heading}</h2>

          <div className="cr__reflection-list">
            {c.reflection.items.map((item, i) => (
              <div key={i} className="cr__reflection-row">
                <span className="cr__reflection-num">{item.number}</span>
                <h3 className="cr__reflection-title">{item.title}</h3>
                <p className="cr__reflection-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="cr__reflection-disclaimer">{c.reflection.disclaimer}</p>
        </div>
      </div>

      <div className="cr__wrap">
        {/* Thank You */}
        <section className="cr__thankyou">
          <div
            className="cr__thankyou-bg"
            style={{ backgroundImage: `url('/assets/projects/digiroom/digiroom-thankyou-bg.png')` }}
          />
          <div className="cr__thankyou-content">
            <h2 className="cr__thankyou-title">Thank You For Reading!</h2>
            <p className="cr__thankyou-sub">Ready for Your Next Favourite Collaboration?</p>
            <a href="mailto:adityafaisal65@gmail.com" className="cr__thankyou-btn">
              GET IN TOUCH NOW!
            </a>
          </div>
        </section>

        {/* Next Project */}
        <div className="cr__next">
          <span className="label-tag">Next Project</span>
          <Link to={`/work/${nextProject.id}`} className="cr__next-link" data-cursor="view">
            <span>{nextProject.title}</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
    </motion.main>
  )
}

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={`cr__section${className ? ` ${className}` : ''}`}>{children}</section>
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="cr__label">
      <span className="cr__label-line" />
      <span className="cr__label-text">{children}</span>
    </div>
  )
}
