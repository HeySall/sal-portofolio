import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { digiroomReferralData as d } from '../data/digiroomReferral'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import type { Variants } from 'framer-motion'
import './DigiRoomReferralDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const referralIndex = projects.findIndex(p => p.id === 'digiroom-referral')
const nextProject = projects[(referralIndex + 1) % projects.length]

export default function DigiRoomReferralDetailPage() {
  return (
    <motion.main className="dgr" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="dgr__hero">
        <div className="dgr__hero-inner">
          <div className="dgr__hero-left">
            <Link to="/work" className="dgr__back">
              <ArrowLeft size={14} /> Back to home
            </Link>
            <div className="dgr__hero-titles">
              <h1 className="dgr__hero-title-main">{d.hero.titleMain}</h1>
              {d.hero.titleAccent && (
                <h2 className="dgr__hero-title-accent">{d.hero.titleAccent}</h2>
              )}
            </div>
            <p className="dgr__hero-desc">{d.hero.description}</p>
            <div className="dgr__hero-meta">
              {d.hero.meta.map(m => (
                <div key={m.label} className="dgr__hero-meta-item">
                  <span className="dgr__meta-label">{m.label}</span>
                  <span className="dgr__hero-meta-value">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dgr__hero-right">
            <img 
              src={d.hero.image} 
              alt="Digiroom Referral Hero" 
              className="dgr__hero-mockup"
              onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="16"%3EHero Mockup%3C/text%3E%3C/svg%3E' }}
            />
          </div>
        </div>
      </div>

      <div className="dgr__wrap">

        {/* ── Business Context ───────────────────────── */}
        <section className="dgr__section">
          <span className="dgr__label">{d.businessContext.label}</span>
          <h2 className="dgr__section-title">{d.businessContext.title}</h2>
          <p className="dgr__p">{d.businessContext.description}</p>
          {d.businessContext.paragraphs.map((p, i) => (
            <p key={i} className="dgr__p" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <ul className="dgr__list">
            {d.businessContext.opportunities.map((opp, i) => (
              <li key={i} className="dgr__list-item">{opp}</li>
            ))}
          </ul>
          <div className="dgr__diagram">
            <img 
              src={d.businessContext.flowImage} 
              alt="Business Flow" 
              className="dgr__full-img"
              onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="300"%3E%3Crect fill="%23f0f0f0" width="800" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="16"%3EBusiness Flow Diagram%3C/text%3E%3C/svg%3E' }}
            />
          </div>
        </section>

        {/* ── Design Challenge ───────────────────────── */}
        <section className="dgr__section">
          <span className="dgr__label">{d.designChallenge.label}</span>
          <h2 className="dgr__section-title">{d.designChallenge.title}</h2>
          <div className="dgr__quote-box">
            <blockquote className="dgr__quote">{d.designChallenge.quote}</blockquote>
          </div>
          <p className="dgr__p">{d.designChallenge.description}</p>
        </section>

        {/* ── Experience Mapping ─────────────────────── */}
        <section className="dgr__section">
          <span className="dgr__label">{d.experienceMapping.label}</span>
          <h2 className="dgr__section-title">{d.experienceMapping.title}</h2>
          <p className="dgr__p">{d.experienceMapping.description}</p>
          <div className="dgr__diagram">
            <img 
              src={d.experienceMapping.diagramImage} 
              alt="Experience Map" 
              className="dgr__full-img"
              onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23f0f0f0" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="16"%3EDual Journey Visualization%3C/text%3E%3C/svg%3E' }}
            />
          </div>
        </section>

        {/* ── User Journeys ──────────────────────────── */}
        <section className="dgr__section dgr__section--journeys">
          <span className="dgr__label">{d.userJourneys.label}</span>
          <h2 className="dgr__section-title">{d.userJourneys.title}</h2>
          <p className="dgr__p">{d.userJourneys.description}</p>
          
          <div className="dgr__journey-panels">
            {/* Left Panel - Referrer */}
            <div className="dgr__journey-panel dgr__journey-panel--referrer">
              <div className="dgr__journey-panel-header">
                <h3 className="dgr__journey-panel-title">{d.userJourneys.referrer.user}</h3>
              </div>
              <div className="dgr__journey-steps-horizontal">
                {d.userJourneys.referrer.steps.map((step, i) => (
                  <div key={i} className="dgr__journey-step">
                    <div className="dgr__journey-step-badge">{step.number}</div>
                    <h4 className="dgr__journey-step-title">{step.title}</h4>
                    <p className="dgr__journey-step-desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Connection indicator */}
            <div className="dgr__journey-connection" aria-label="Referral link connects both journeys">
              <div className="dgr__journey-connection-line"></div>
              <div className="dgr__journey-connection-label">Referral Link</div>
            </div>
            
            {/* Right Panel - Recipient */}
            <div className="dgr__journey-panel dgr__journey-panel--recipient">
              <div className="dgr__journey-panel-header">
                <h3 className="dgr__journey-panel-title">{d.userJourneys.recipient.user}</h3>
              </div>
              <div className="dgr__journey-steps-horizontal">
                {d.userJourneys.recipient.steps.map((step, i) => (
                  <div key={i} className="dgr__journey-step">
                    <div className="dgr__journey-step-badge">{step.number}</div>
                    <h4 className="dgr__journey-step-title">{step.title}</h4>
                    <p className="dgr__journey-step-desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Design Approach ───────────────────────── */}
        <section className="dgr__section dgr__section--design-approach">
          <span className="dgr__label">{d.designApproach.label}</span>
          <h2 className="dgr__section-title">{d.designApproach.title}</h2>
          <p className="dgr__p">{d.designApproach.description}</p>
          
          <div className="dgr__proposals-grid">
            {d.designApproach.proposals.map((proposal, i) => (
              <div key={i} className="dgr__proposal-card">
                <div className="dgr__proposal-number">{proposal.number}</div>
                <h3 className="dgr__proposal-title">{proposal.title}</h3>
                
                <div className="dgr__proposal-content">
                  <div className="dgr__proposal-field">
                    <h4 className="dgr__proposal-field-label">Business need</h4>
                    <p className="dgr__proposal-field-text">{proposal.businessNeed}</p>
                  </div>
                  
                  <div className="dgr__proposal-field">
                    <h4 className="dgr__proposal-field-label">Our proposal</h4>
                    <p className="dgr__proposal-field-text">{proposal.proposal}</p>
                  </div>
                  
                  <div className="dgr__proposal-field">
                    <h4 className="dgr__proposal-field-label">Why this approach</h4>
                    <p className="dgr__proposal-field-text">{proposal.rationale}</p>
                  </div>
                </div>
                
                <div className="dgr__proposal-mockup">
                  <img 
                    src={proposal.image} 
                    alt={proposal.title} 
                    className="dgr__full-img"
                    onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23f0f0f0" width="600" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="14"%3EProposal ' + (i+1) + ' Screenshot%3C/text%3E%3C/svg%3E' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Visual Showcase ────────────────────────── */}
        <section className="dgr__section">
          <span className="dgr__label">{d.visualShowcase.label}</span>
          <h2 className="dgr__section-title">{d.visualShowcase.title}</h2>
          <div className="dgr__showcase-grid">
            {d.visualShowcase.mockups.map((mockup, i) => (
              <div key={i} className="dgr__showcase-item">
                <img 
                  src={mockup.image} 
                  alt={mockup.label} 
                  className="dgr__full-img"
                  onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23f0f0f0" width="400" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="14"%3E' + mockup.label + '%3C/text%3E%3C/svg%3E' }}
                />
                <span className="dgr__showcase-label">{mockup.label}</span>
                <p className="dgr__p dgr__p--sm">{mockup.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Reflection ─────────────────────────────── */}
        <section className="dgr__section dgr__section--reflection">
          <span className="dgr__label">{d.reflection.label}</span>
          <div className="dgr__reflection-inner">
            <div className="dgr__reflection-mockup">
              <img 
                src={d.reflection.mockup} 
                alt="Reflection" 
                className="dgr__full-img"
                onError={e => { e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23f0f0f0" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-family="sans-serif" font-size="14"%3EReflection Mockup%3C/text%3E%3C/svg%3E' }}
              />
            </div>
            <div className="dgr__reflection-content">
              <h3 className="dgr__reflection-title">{d.reflection.title}</h3>
              <p className="dgr__p">{d.reflection.description}</p>
              <ul className="dgr__metrics-list">
                {d.reflection.proposedMetrics.map((metric, i) => (
                  <li key={i} className="dgr__metric-item">{metric}</li>
                ))}
              </ul>
              <p className="dgr__p dgr__p--note">{d.reflection.designNote}</p>
            </div>
          </div>
        </section>

        {/* ── Thank You ──────────────────────────────── */}
        <section className="dgr__thankyou">
          <div className="dgr__thankyou-bg" style={{ backgroundImage: `url(${d.thankYou.bgImage})` }} />
          <div className="dgr__thankyou-content">
            <h2 className="dgr__thankyou-title">{d.thankYou.title}</h2>
            <p className="dgr__thankyou-sub">{d.thankYou.subtitle}</p>
            <a href={d.thankYou.ctaHref} className="dgr__thankyou-btn">{d.thankYou.cta}</a>
          </div>
        </section>

        {/* ── Next Project ───────────────────────────── */}
        <div className="dgr__next">
          <span className="label-tag">Next Project</span>
          <Link to={`/work/${nextProject.id}`} className="dgr__next-link" data-cursor="view">
            <span>{nextProject.title}</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>

      </div>

      <Footer />
    </motion.main>
  )
}
