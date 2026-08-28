import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import { staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollReveal'
import type { Variants } from 'framer-motion'
import Footer from '../components/sections/Footer'
import './AllWorksPage.css'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function AllWorksPage() {
  return (
    <motion.main
      className="all-works"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="all-works__wrap">
        {/* Header */}
        <div className="all-works__header">
          <div className="all-works__header-inner">
            <motion.div
              className="all-works__back-row"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
            >
              <Link to="/" className="all-works__back">
                <ArrowLeft size={14} /> Back to home
              </Link>
            </motion.div>
            <motion.span
              className="label-tag"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              All Works
            </motion.span>
            <motion.h1
              className="all-works__title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            >
              Everything I've designed.
            </motion.h1>
            <motion.p
              className="all-works__desc"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              A full collection of products, interfaces, and systems I've helped bring to life.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="all-works__body">
          <motion.div
            className="all-works__grid"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="all-works__card"
                variants={staggerItemVariants}
              >
                {project.status === 'live' ? (
                  <Link
                    to={`/work/${project.id}`}
                    className="all-works__card-link"
                    data-cursor="view"
                  >
                    <CardContent project={project} />
                  </Link>
                ) : (
                  <div className="all-works__card-link all-works__card-link--disabled">
                    <CardContent project={project} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.main>
  )
}

function CardContent({ project }: { project: (typeof projects)[0] }) {
  return (
    <>
      {/* Thumbnail */}
      <div className="all-works__thumb">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="all-works__thumb-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="all-works__thumb-empty">
            <div className="all-works__thumb-empty-dot" />
            <div className="all-works__thumb-empty-line" />
            <div className="all-works__thumb-empty-line all-works__thumb-empty-line--short" />
          </div>
        )}

        {project.status === 'coming-soon' && (
          <span className="all-works__badge">Coming Soon</span>
        )}
        {project.status === 'live' && (
          <div className="all-works__overlay">
            <span className="all-works__overlay-label">
              View Project <ArrowUpRight size={14} />
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="all-works__info">
        <div className="all-works__info-left">
          <span className="all-works__name">{project.title}</span>
          <span className="all-works__subtitle">{project.subtitle}</span>
        </div>
        <div className="all-works__tags">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="all-works__tag">{tag}</span>
          ))}
        </div>
      </div>
    </>
  )
}
