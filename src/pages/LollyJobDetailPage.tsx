import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { lollyJobData as d } from '../data/lolly-job'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import type { Variants } from 'framer-motion'
import './LollyJobDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const lollyIndex = projects.findIndex(p => p.id === 'lolly-job')
const nextProject = projects[(lollyIndex + 1) % projects.length]

export default function LollyJobDetailPage() {
  return (
    <motion.main className="lj" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="lj__hero">
        <div className="lj__hero-inner">
          <div className="lj__hero-left">
            <Link to="/work" className="lj__back"><ArrowLeft size={14} /> Back to home</Link>
            <div className="lj__hero-titles">
              <h1 className="lj__hero-title-main">{d.hero.titleMain}</h1>
              <h2 className="lj__hero-title-accent">{d.hero.titleAccent}</h2>
            </div>
            <p className="lj__hero-desc">{d.hero.description}</p>
            <div className="lj__hero-meta">
              {d.hero.meta.map(m => (
                <div key={m.label} className="lj__hero-meta-item">
                  <span className="lj__meta-label">{m.label}</span>
                  <span className="lj__hero-meta-value">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lj__hero-right">
            <img src={d.hero.image} alt="Lolly Job Hero" className="lj__hero-mockup" />
          </div>
        </div>
      </div>

      <div className="lj__wrap">

        {/* ── Product Context ───────────────────────── */}
        <section className="lj__section">
          <span className="lj__label">{d.productContext.label}</span>
          <h2 className="lj__section-title">{d.productContext.title}</h2>

          {/* Job Seeker Card */}
          <div className="lj__context-card">
            <h3 className="lj__context-card-title">{d.productContext.jobSeeker.title}</h3>
            <p className="lj__context-quote">{d.productContext.jobSeeker.quote}</p>
            <div className="lj__features-grid">
              {d.productContext.jobSeeker.features.map((f, i) => (
                <div key={i} className="lj__feature-card">
                  <div className="lj__feature-card-header">
                    <img src={`/assets/projects/lolly-job/lolly-icon-${i + 1}.png`} alt={f.title} className="lj__feature-card-icon" onError={e => { e.currentTarget.style.display='none' }} />
                    <h4 className="lj__feature-title">{f.title}</h4>
                  </div>
                  <p className="lj__feature-desc">{f.desc}</p>
                  <span className="lj__feature-arrow">- - - →</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="lj__connector">
            <div className="lj__connector-side">
              <div className="lj__connector-arrow">- - - - - - - →</div>
              <div className="lj__connector-arrow">- - - - - - - →</div>
            </div>
            <div className="lj__connector-center">
              <img src={d.productContext.logo} alt="LollyJob" className="lj__connector-logo" />
              <p className="lj__connector-text">{d.productContext.connectorText}</p>
            </div>
            <div className="lj__connector-side lj__connector-side--right">
              <div className="lj__connector-arrow">← - - - - - - -</div>
              <div className="lj__connector-arrow">← - - - - - - -</div>
            </div>
          </div>

          {/* Employer Card */}
          <div className="lj__context-card">
            <h3 className="lj__context-card-title">{d.productContext.employer.title}</h3>
            <p className="lj__context-quote">{d.productContext.employer.quote}</p>
            <div className="lj__features-grid">
              {d.productContext.employer.features.map((f, i) => (
                <div key={i} className="lj__feature-card">
                  <div className="lj__feature-card-header">
                    <img src={`/assets/projects/lolly-job/lolly-icon-emp-${i + 1}.png`} alt={f.title} className="lj__feature-card-icon" onError={e => { e.currentTarget.style.display='none' }} />
                    <h4 className="lj__feature-title">{f.title}</h4>
                  </div>
                  <p className="lj__feature-desc">{f.desc}</p>
                  <span className="lj__feature-arrow">- - - →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Video ─────────────────────────────────── */}
        <section className="lj__section lj__section--no-border">
          <div className="lj__video-wrap">
            <iframe
              src="https://www.youtube.com/embed/E1rEIP1IJUA?autoplay=1&mute=1&loop=1&playlist=E1rEIP1IJUA&controls=0&rel=0&modestbranding=1"
              title="Lolly Job Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="lj__video-iframe"
            />
          </div>
        </section>

        {/* ── The Challenge ─────────────────────────── */}
        <section className="lj__section lj__section--surface lj__section--no-border">
          <div className="lj__two-col-header">
            <div>
              <span className="lj__label">{d.challenge.label}</span>
              <h2 className="lj__section-title">{d.challenge.title}</h2>
            </div>
            <p className="lj__p" dangerouslySetInnerHTML={{ __html: d.challenge.desc }} />
          </div>
          <div className="lj__challenge-cards">
            {d.challenge.cards.map((card, i) => (
              <div key={i} className="lj__challenge-card">
                <div className="lj__challenge-icon-wrap">
                  <img src={`/assets/projects/lolly-job/lolly-challenge-icon-${i + 1}.png`} alt={card.label} onError={e => e.currentTarget.style.display='none'} />
                </div>
                <span className="lj__label">{card.label}</span>
                <h3 className="lj__challenge-title">{card.title}</h3>
                <p className="lj__p lj__p--sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Job Seeker Role ───────────────────────── */}
        <section className="lj__section">
          <div className="lj__centered-header">
            <span className="lj__label">{d.jobSeekerRole.label}</span>
            <h2 className="lj__section-title">{d.jobSeekerRole.title}</h2>
            <p className="lj__p lj__p--center">{d.jobSeekerRole.desc}</p>
          </div>

          <div className="lj__features-list">
            {d.jobSeekerRole.features.map((f, i) => (
              <div key={i} className={`lj__feature-item lj__feature-item--${f.align}`}>
                <div className="lj__feature-mockup">
                  <img src={f.mockup} alt={f.label} />
                </div>
                <div className="lj__feature-content">
                  <div className="lj__feature-pill">
                    <img src={`/assets/projects/lolly-job/lolly-icon-${i + 1}.png`} alt={f.label} style={{width:"18px",height:"18px",objectFit:"contain"}} onError={(e) => (e.currentTarget.style.display="none")} />
                    <span>{f.label}</span>
                  </div>
                  {f.paragraphs.map((p, j) => (
                    <p key={j} className="lj__p" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── AI Match Deep Dive ────────────────────── */}
        <section className="lj__section">
          <div className="lj__ai-deep-box lj__ai-deep-box--simple">
            <div className="lj__ai-deep-left">
              <span className="lj__label">{d.aiMatchDeepDive.label}</span>
              <h2 className="lj__section-title">{d.aiMatchDeepDive.title}</h2>
              <p className="lj__p">{d.aiMatchDeepDive.desc}</p>
            </div>
            <div className="lj__ai-deep-mockup">
              <img src="/assets/projects/lolly-job/lolly-ai-matching.png" alt="AI Match Deep Dive" />
            </div>
          </div>
        </section>

        {/* ── Employer Role ─────────────────────────── */}
        <section className="lj__section">
          <div className="lj__centered-header">
            <span className="lj__label">{d.employerRole.label}</span>
            <h2 className="lj__section-title">{d.employerRole.title}</h2>
            <p className="lj__p lj__p--center">{d.employerRole.desc}</p>
          </div>

          <div className="lj__employer-grid">
            <div className="lj__employer-features">
            {d.employerRole.features.map((f, i) => {
              const iconMap = ['lolly-icon-1.png', 'lolly-icon-2.png', 'lolly-icon-4.png']
              return (
                <div key={i} className="lj__employer-feature">
                  <div className="lj__challenge-icon-wrap">
                    <img src={`/assets/projects/lolly-job/${iconMap[i]}`} alt={f.label} onError={e => e.currentTarget.style.display='none'} />
                  </div>
                  <div>
                    <span className="lj__label">{f.label}</span>
                    <p className="lj__p lj__p--sm">{f.desc}</p>
                  </div>
                </div>
              )
            })}
            </div>
            <div className="lj__employer-mockup">
              <img src={d.employerRole.mockup} alt="Employer Role" />
            </div>
          </div>
        </section>

        {/* ── Business Impact ───────────────────────── */}
        <section className="lj__section lj__section--surface lj__section--no-border">
          <div className="lj__two-col-header">
            <div>
              <span className="lj__label">{d.businessImpact.label}</span>
              <h2 className="lj__section-title">{d.businessImpact.title}</h2>
            </div>
            <p className="lj__p">{d.businessImpact.desc}</p>
          </div>
          <div className="lj__challenge-cards">
            {d.businessImpact.cards.map((card, i) => {
              const biIcons = ['lolly-locked.png', 'lolly-point.png', 'lolly-icon-2.png']
              return (
                <div key={i} className="lj__challenge-card">
                  <div className="lj__challenge-icon-wrap">
                    <img src={`/assets/projects/lolly-job/${biIcons[i]}`} alt={card.label} onError={e => e.currentTarget.style.display='none'} />
                  </div>
                  <span className="lj__label">{card.label}</span>
                  <h3 className="lj__challenge-title">{card.title}</h3>
                  <p className="lj__p lj__p--sm">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Reflection ────────────────────────────── */}
        <section className="lj__section lj__reflection">
          <span className="lj__label">{d.reflection.label}</span>
          <div className="lj__reflection-inner">
            <div className="lj__reflection-mockup">
              <img src={d.reflection.mockup} alt="Reflection" />
            </div>
            <div className="lj__reflection-content">
              <blockquote className="lj__reflection-quote">{d.reflection.quote}</blockquote>
              <p className="lj__p">{d.reflection.desc}</p>
            </div>
          </div>
        </section>

        {/* ── Thank You ─────────────────────────────── */}
        <section className="lj__thankyou">
          <div className="lj__thankyou-bg" style={{ backgroundImage: `url(${d.thankYou.bgImage})` }} />
          <div className="lj__thankyou-content">
            <h2 className="lj__thankyou-title">{d.thankYou.title}</h2>
            <p className="lj__thankyou-sub">{d.thankYou.subtitle}</p>
            <a href={d.thankYou.ctaHref} className="lj__thankyou-btn">{d.thankYou.cta}</a>
          </div>
        </section>

        {/* ── Next Project ──────────────────────────── */}
        <div className="lj__next">
          <span className="label-tag">Next Project</span>
          <Link to={`/work/${nextProject.id}`} className="lj__next-link" data-cursor="view">
            <span>{nextProject.title}</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>

      </div>

      <Footer />
    </motion.main>
  )
}
