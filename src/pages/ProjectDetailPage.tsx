import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import Footer from '../components/sections/Footer'
import './ProjectDetailPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <motion.div className="project-detail project-detail--not-found" variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/" className="btn btn-outline">← Back to Home</Link>
        </div>
      </motion.div>
    )
  }

  // Determine next project
  const currentIndex = projects.findIndex((p) => p.id === id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <motion.main
      className="project-detail"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Back button */}
      <div className="project-detail__back-row container">
        <button className="project-detail__back" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Hero */}
      <div className="project-detail__hero container">
        <div className="project-detail__meta">
          <div className="project-detail__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="works__card-tag">{tag}</span>
            ))}
          </div>
          {project.status === 'coming-soon' && (
            <span className="project-detail__soon">Coming Soon</span>
          )}
        </div>

        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__subtitle">{project.subtitle}</p>

        {/* Overview row */}
        <div className="project-detail__overview-row">
          {project.overview && (
            <div className="project-detail__overview">
              <span className="label-tag">Overview</span>
              <p>{project.overview}</p>
            </div>
          )}
          <div className="project-detail__info-grid">
            {project.role && (
              <div className="project-detail__info-item">
                <span className="label-tag">Role</span>
                <p>{project.role}</p>
              </div>
            )}
            {project.year && (
              <div className="project-detail__info-item">
                <span className="label-tag">Year</span>
                <p>{project.year}</p>
              </div>
            )}
            {project.duration && (
              <div className="project-detail__info-item">
                <span className="label-tag">Duration</span>
                <p>{project.duration}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="project-detail__thumb-wrap container">
          <div className="project-detail__thumb">
            <img src={project.thumbnail} alt={project.title} />
          </div>
        </div>
      )}

      {/* Dynamic sections */}
      {project.sections && project.sections.length > 0 && (
        <div className="project-detail__sections container">
          {project.sections.map((section, i) => {
            if (section.type === 'image') {
              return (
                <div key={i} className="project-detail__section-image">
                  <img src={section.src} alt={section.alt ?? ''} />
                </div>
              )
            }
            if (section.type === 'text') {
              return (
                <div key={i} className="project-detail__section-text">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              )
            }
            if (section.type === 'two-col') {
              return (
                <div key={i} className="project-detail__section-two-col">
                  <p>{section.left}</p>
                  <p>{section.right}</p>
                </div>
              )
            }
            return null
          })}
        </div>
      )}

      {/* Coming soon state */}
      {project.status === 'coming-soon' && (
        <div className="project-detail__coming-soon container">
          <div className="project-detail__coming-soon-inner">
            <h2>Case study coming soon</h2>
            <p>This project is currently being documented. Check back soon for the full breakdown.</p>
            <Link to="/" className="btn btn-outline">
              ← Back to Work
            </Link>
          </div>
        </div>
      )}

      {/* Next project */}
      <div className="project-detail__next container">
        <span className="label-tag">Next Project</span>
        <Link
          to={`/work/${nextProject.id}`}
          className="project-detail__next-link"
          data-cursor="view"
        >
          <span>{nextProject.title}</span>
          <ArrowUpRight size={20} />
        </Link>
      </div>

      <Footer />
    </motion.main>
  )
}
