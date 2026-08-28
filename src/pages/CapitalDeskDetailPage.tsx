import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, X, ZoomIn } from 'lucide-react'
import { capitalDeskData as d } from '../data/capital-desk'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import type { Variants } from 'framer-motion'
import './CapitalDeskDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const cdIndex = projects.findIndex(p => p.id === 'capital-desk')
const nextProject = projects[(cdIndex + 1) % projects.length]

// ── Lightbox ──────────────────────────────────────────
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="cd-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="cd-lightbox__inner"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
        >
          <button className="cd-lightbox__close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
          <img src={src} alt={alt} className="cd-lightbox__img" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Clickable Image ───────────────────────────────────
function ClickableImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`cd-clickable-img ${className ?? ''}`} onClick={() => setOpen(true)}>
        <img src={src} alt={alt} />
        <div className="cd-clickable-img__overlay">
          <ZoomIn size={20} />
        </div>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  )
}

// ── Baseline Carousel ─────────────────────────────────
function BaselineCarousel({ images }: { images: string[] }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const onMouseUp = () => { isDragging.current = false }

  return (
    <>
      <div
        className="cd-carousel"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        data-cursor="drag"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="cd-carousel__item"
            onClick={() => setLightboxSrc(src)}
          >
            <img src={src} alt={`Baseline ${i + 1}`} draggable={false} />
            <div className="cd-carousel__overlay">
              <ZoomIn size={18} />
            </div>
          </div>
        ))}
      </div>
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt="Baseline" onClose={() => setLightboxSrc(null)} />
      )}
    </>
  )
}

export default function CapitalDeskDetailPage() {
  return (
    <motion.main
      className="cd"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="cd__hero">
        <div className="cd__hero-inner">
          <div className="cd__hero-left">
            <Link to="/work" className="cd__back">
              <ArrowLeft size={14} /> Back to home
            </Link>
            <div className="cd__hero-titles">
              <h1 className="cd__hero-title-main">{d.hero.titleMain}</h1>
              <h2 className="cd__hero-title-accent">{d.hero.titleAccent}</h2>
            </div>
            <p className="cd__hero-desc">{d.hero.description}</p>
            <div className="cd__hero-meta">
              {d.hero.meta.map(m => (
                <div key={m.label} className="cd__hero-meta-item">
                  <span className="cd__meta-label">{m.label}</span>
                  <span className="cd__hero-meta-value">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cd__hero-right">
            <img src={d.hero.image} alt="Capital Desk Mockup" className="cd__hero-mockup" />
          </div>
        </div>
      </div>

      <div className="cd__wrap">

        {/* ── Sidebar + Content ─────────────────────── */}
        <div className="cd__body">
          <aside className="cd__meta-sidebar">
            <MetaItem label="Product" value={d.sidebar.product} />
            <MetaItem label="My Role" value={d.sidebar.role} />
            <MetaItem label="Company" value={d.sidebar.company} />
            <MetaItem label="Timeline" value={d.sidebar.timeline} />
            <MetaItem label="Tools" value={d.sidebar.tools} />
          </aside>

          <div className="cd__content">
            <ContentBlock title={d.projectBackground.title} accent>
              <p className="cd__p" dangerouslySetInnerHTML={{ __html: d.projectBackground.body }} />
            </ContentBlock>

            <ContentBlock title={d.theProblem.title} accent>
              {d.theProblem.paragraphs.map((p, i) => (
                <p key={i} className="cd__p" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </ContentBlock>

            <ContentBlock title={d.disclaimer.title} accent>
              <p className="cd__p">{d.disclaimer.body}</p>
            </ContentBlock>

            <ContentBlock title={d.theGoals.title} accent>
              <p className="cd__p">{d.theGoals.body}</p>
            </ContentBlock>
          </div>
        </div>

        {/* ── Overview ──────────────────────────────── */}
        <Section>
          <h2 className="cd__section-title">{d.overview.title}</h2>
          <ClickableImg src={d.overview.image} alt="Overview" className="cd__full-img" />
          {d.overview.paragraphs.map((p, i) => (
            <p key={i} className="cd__p" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </Section>

        {/* ── Research & Analysis ───────────────────── */}
        <Section>
          <h2 className="cd__section-title">{d.research.title}</h2>
          <h3 className="cd__accent-title">{d.research.applicationFlow.subtitle}</h3>
          <div className="cd__two-col">
            <div className="cd__two-col-left">
              <p className="cd__p">{d.research.applicationFlow.description}</p>
              <ol className="cd__ordered-list">
                {d.research.applicationFlow.roles.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ol>
              <p className="cd__footnote">{d.research.applicationFlow.footnote}</p>
            </div>
            <ClickableImg
              src={d.research.applicationFlow.image}
              alt="Application Flow"
              className="cd__two-col-right"
            />
          </div>
        </Section>

        {/* ── Key Challenges ────────────────────────── */}
        <Section>
          <h2 className="cd__section-title">{d.keyChallenges.title}</h2>
          <p className="cd__p">{d.keyChallenges.description}</p>
          <div className="cd__challenges-grid">
            {/* Functional */}
            <div className="cd__challenge-col">
              <div className="cd__challenge-header cd__challenge-header--functional">
                <img src="/assets/projects/capital-desk/cd-icon-functional.png" alt="" className="cd__challenge-icon-img" onError={e => e.currentTarget.style.display='none'} />
                <span>{d.keyChallenges.functional.title}</span>
              </div>
              <ul className="cd__challenge-list">
                {d.keyChallenges.functional.items.map((item, i) => (
                  <li key={i}>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Experiential */}
            <div className="cd__challenge-col">
              <div className="cd__challenge-header cd__challenge-header--experiential">
                <img src="/assets/projects/capital-desk/cd-icon-experiential.png" alt="" className="cd__challenge-icon-img" onError={e => e.currentTarget.style.display='none'} />
                <span>{d.keyChallenges.experiential.title}</span>
              </div>
              <ul className="cd__challenge-list">
                {d.keyChallenges.experiential.items.map((item, i) => (
                  <li key={i}>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── The Solutions ─────────────────────────── */}
        <Section>
          <h2 className="cd__section-title">{d.solutions.title}</h2>
          <p className="cd__p">{d.solutions.description}</p>
          <div className="cd__full-img">
            <img src={d.solutions.heroImage} alt="Solutions Hero" />
          </div>

          {/* The Baseline */}
          <h3 className="cd__section-title cd__section-title--center">{d.solutions.baseline.title}</h3>
          <p className="cd__p cd__p--center">{d.solutions.baseline.description}</p>
          <BaselineCarousel images={d.solutions.baseline.images} />
        </Section>

        {/* ── Transparency ──────────────────────────── */}
        <Section>
          <h2 className="cd__section-title cd__section-title--center">{d.transparency.title}</h2>
          <p className="cd__p cd__p--center">{d.transparency.description}</p>

          {/* Transparency sections */}
          <div className="cd__transparency-sections">
            {d.transparency.sections.map((sec, i) => (
              <div key={i} className={`cd__trans-block ${sec.wide ? 'cd__trans-block--wide' : ''}`}>
                <div className="cd__challenge-header cd__challenge-header--functional">
                  <img src="/assets/projects/capital-desk/cd-icon-functional.png" alt="" className="cd__challenge-icon-img" onError={e => e.currentTarget.style.display='none'} />
                  <span>{sec.title}</span>
                </div>
                <div className={`cd__trans-images cd__trans-images--${sec.images.length}`}>
                  {sec.images.map((src, j) => (
                    <ClickableImg key={j} src={src} alt={`${sec.title} ${j + 1}`} />
                  ))}
                </div>
                {sec.desc.split('\n\n').map((para, j) => (
                  <p key={j} className="cd__p cd__p--sm" dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            ))}
          </div>

          {/* AI Validation */}
          <div className="cd__ai-validation">
            <h3 className="cd__section-title">{d.transparency.aiValidation.title}</h3>
            <div className="cd__two-col cd__two-col--align-start">
              <ClickableImg
                src={d.transparency.aiValidation.image}
                alt="AI Validation"
                className="cd__two-col-left"
              />
              <ul className="cd__bullet-list cd__two-col-right">
                {d.transparency.aiValidation.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Approval Process */}
          <div className="cd__approval">
            <div className="cd__challenge-header cd__challenge-header--functional">
              <img src="/assets/projects/capital-desk/cd-icon-functional.png" alt="" className="cd__challenge-icon-img" onError={e => e.currentTarget.style.display='none'} />
              <span>{d.transparency.approvalProcess.title}</span>
            </div>
            <div className="cd__trans-images cd__trans-images--4">
              {d.transparency.approvalProcess.images.map((src, i) => (
                <ClickableImg key={i} src={src} alt={`Approval ${i + 1}`} />
              ))}
            </div>
            <p className="cd__p cd__p--sm">{d.transparency.approvalProcess.roles.join(' · ')}</p>
            {d.transparency.approvalProcess.notes.map((note, i) => (
              <p key={i} className="cd__p cd__p--sm">{note}</p>
            ))}
          </div>
        </Section>

        {/* ── Impact & Key Learnings ────────────────── */}
        <Section>
          <h2 className="cd__section-title">{d.impact.title}</h2>
          <p className="cd__p">{d.impact.description}</p>
          <div className="cd__impact-grid">
            <div className="cd__impact-col">
              <div className="cd__challenge-header cd__challenge-header--functional">
                <img src="/assets/projects/capital-desk/cd-icon-functional.png" alt="" className="cd__challenge-icon-img" onError={e => e.currentTarget.style.display='none'} />
                <span>{d.impact.quality.title}</span>
              </div>
              <ul className="cd__challenge-list">
                {d.impact.quality.bullets.map((b, i) => (
                  <li key={i}><p>{b}</p></li>
                ))}
              </ul>
            </div>
            <div className="cd__impact-col">
              <div className="cd__challenge-header cd__challenge-header--experiential">
                <img src="/assets/projects/capital-desk/cd-icon-experiential.png" alt="" className="cd__challenge-icon-img" onError={e => e.currentTarget.style.display='none'} />
                <span>{d.impact.identity.title}</span>
              </div>
              <ul className="cd__challenge-list">
                {d.impact.identity.bullets.map((b, i) => (
                  <li key={i}><p>{b}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Final Summary ─────────────────────────── */}
        <Section>
          <h2 className="cd__section-title">{d.finalSummary.title}</h2>
          {d.finalSummary.paragraphs.map((p, i) => (
            <p key={i} className="cd__p">{p}</p>
          ))}
        </Section>

        {/* ── Thank You ─────────────────────────────── */}
        <section className="cd__thankyou">
          <div className="cd__thankyou-bg" style={{ backgroundImage: `url(${d.thankYou.bgImage})` }} />
          <div className="cd__thankyou-content">
            <h2 className="cd__thankyou-title">{d.thankYou.title}</h2>
            <p className="cd__thankyou-sub">{d.thankYou.subtitle}</p>
            <a href={d.thankYou.ctaHref} className="cd__thankyou-btn">{d.thankYou.cta}</a>
          </div>
        </section>

        {/* ── Next Project ──────────────────────────── */}
        <div className="cd__next">
          <span className="label-tag">Next Project</span>
          <Link to={`/work/${nextProject.id}`} className="cd__next-link" data-cursor="view">
            <span>{nextProject.title}</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>

      </div>

      <Footer />
    </motion.main>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="cd__section">{children}</section>
}

function ContentBlock({ title, accent, children }: { title: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <div className="cd__content-block">
      <h3 className={accent ? 'cd__accent-title' : 'cd__content-title'}>{title}</h3>
      {children}
    </div>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="cd__meta-item">
      <span className="cd__meta-label">{label}</span>
      <span className="cd__meta-value">{value}</span>
    </div>
  )
}
