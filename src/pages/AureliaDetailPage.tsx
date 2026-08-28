import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { aureliaData as d } from '../data/aurelia'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import type { Variants } from 'framer-motion'
import './AureliaDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const aureliaIndex = projects.findIndex(p => p.id === 'aurelia')
const nextProject = projects[(aureliaIndex + 1) % projects.length]

export default function AureliaDetailPage() {
  return (
    <motion.main
      className="au"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="au__hero">
        <div className="au__hero-inner">
          <div className="au__hero-left">
            <Link to="/work" className="au__back">
              <ArrowLeft size={14} /> Back to home
            </Link>
            <h1 className="au__hero-title">{d.hero.title}</h1>
            <p className="au__hero-desc">{d.hero.description}</p>
            <div className="au__hero-meta">
              {d.hero.meta.map((m) => (
                <div key={m.label} className="au__hero-meta-item">
                  <span className="au__meta-label">{m.label}</span>
                  <span className="au__hero-meta-value">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="au__hero-right">
            <img src={d.hero.image} alt="Aurelia Mockup" className="au__hero-mockup" />
          </div>
        </div>
      </div>

      <div className="au__wrap">

        {/* ── The Challenge ─────────────────────────── */}
        <section className="au__section">
          <span className="au__label">{d.challenge.label}</span>
          <h2 className="au__section-title">{d.challenge.title}</h2>
          {d.challenge.paragraphs.map((p, i) => (
            <p key={i} className="au__p">{p}</p>
          ))}
          <div className="au__cards-grid">
            {d.challenge.cards.map((card, i) => (
              <div key={i} className="au__card">
                <div className="au__card-icon">{card.icon}</div>
                <h3 className="au__card-title">{card.title}</h3>
                <p className="au__card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Design Direction ──────────────────────── */}
        <section className="au__section">
          <span className="au__label">{d.designDirection.label}</span>
          <div className="au__dd-grid">
            {/* Left */}
            <div className="au__dd-left">
              <h2 className="au__section-title">{d.designDirection.title}</h2>
              {d.designDirection.paragraphs.map((p, i) => (
                <p key={i} className="au__p">{p}</p>
              ))}
            </div>
            {/* Right */}
            <div className="au__dd-right">
              {/* Row 1: Color Palette full width */}
              <div className="au__dd-block">
                <span className="au__label">Color Palette</span>
                <div className="au__colors">
                  {d.designDirection.colorPalette.map((c) => (
                    <div
                      key={c.hex}
                      className={`au__color-swatch ${c.dark ? 'au__color-swatch--dark' : ''}`}
                      style={{ background: c.hex }}
                    >
                      {c.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Typography + Mood Grid side by side */}
              <div className="au__dd-row2">
                <div className="au__dd-block">
                  <span className="au__label">Typography</span>
                  <div className="au__typography">
                    <div className="au__type-sample">{d.designDirection.typography.sample}</div>
                    <div className="au__type-name">{d.designDirection.typography.name}</div>
                    <div className="au__type-chars">{d.designDirection.typography.chars}</div>
                  </div>
                </div>

                <div className="au__dd-block">
                  <span className="au__label">Illustration</span>
                  <div className="au__mood-grid">
                    {d.designDirection.moodImages.map((src, i) => (
                      <div key={i} className="au__mood-img">
                        <img src={src} alt={`Mood ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story Strip ──────────────────────────── */}
        <section className="au__strip-section">
          <div className="au__strip">
            <img src={d.storyStrip.image} alt="Aurelia Story Strip" className="au__strip-single" />
          </div>
        </section>

        {/* ── Building The Story ────────────────────── */}
        <section className="au__section">
          <div className="au__bs-header">
            <div className="au__bs-header-left">
              <span className="au__label">{d.buildingStory.label}</span>
              <h2 className="au__section-title">{d.buildingStory.title}</h2>
            </div>
            <p className="au__bs-desc">{d.buildingStory.desc}</p>
          </div>

          <div className="au__steps-grid">
            {d.buildingStory.steps.map((step, i) => (
              <div key={i} className="au__step">
                <div className="au__step-header">
                  <span className="au__step-icon">{step.icon}</span>
                  <span className="au__step-number">{step.number}</span>
                </div>
                <h3 className="au__step-title">{step.title}</h3>
                <p className="au__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Flow Images */}
          <div className="au__flow">
            {d.buildingStory.flowImages.map((item, i) => (
              <div key={i} className="au__flow-item">
                <div className="au__flow-img">
                  <img src={item.image} alt={item.title} />
                  <div className="au__flow-overlay">
                    <span className="au__flow-number">{item.number}</span>
                    <span className="au__flow-title">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Final Experience ──────────────────── */}
        <section className="au__section">
          <span className="au__label">{d.finalExperience.label}</span>
          <h2 className="au__section-title au__section-title--center">
            {d.finalExperience.title}
          </h2>
          <div className="au__final-single">
            <img src={d.finalExperience.image} alt="The Final Experience" />
          </div>
        </section>

        {/* ── Thank You ─────────────────────────────── */}
        <section className="au__thankyou">
          <div
            className="au__thankyou-bg"
            style={{ backgroundImage: `url(${d.thankYou.bgImage})` }}
          />
          <div className="au__thankyou-content">
            <h2 className="au__thankyou-title">{d.thankYou.title}</h2>
            <p className="au__thankyou-sub">{d.thankYou.subtitle}</p>
            <a href={d.thankYou.ctaHref} className="au__thankyou-btn">
              {d.thankYou.cta}
            </a>
          </div>
        </section>

        {/* ── Next Project ──────────────────────────── */}
        <div className="au__next">
          <span className="label-tag">Next Project</span>
          <Link to={`/work/${nextProject.id}`} className="au__next-link" data-cursor="view">
            <span>{nextProject.title}</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>

      </div>

      <Footer />
    </motion.main>
  )
}
