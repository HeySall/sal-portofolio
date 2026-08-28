import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollReveal'
import './SelectedWorks.css'

export default function SelectedWorks() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="works section" id="work">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="works__header"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="works__header-left">
            <motion.span className="label-tag" variants={staggerItemVariants}>
              Selected Works
            </motion.span>
            <motion.h2 className="works__heading heading-lg" variants={staggerItemVariants}>
              Some of the things I've Designed
            </motion.h2>
          </div>
          <motion.p className="works__header-desc text-secondary" variants={staggerItemVariants}>
            A selection of projects where I helped teams translate complex requirements into
            intuitive and impactful digital experiences.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="works__grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.slice(0, 4).map((project) => (
            <motion.div
              key={project.id}
              className={`works__card ${project.status === 'coming-soon' ? 'works__card--coming-soon' : ''}`}
              variants={staggerItemVariants}
            >
              {project.status === 'live' ? (
                <Link
                  to={`/work/${project.id}`}
                  className="works__card-inner"
                  data-cursor="view"
                >
                  <ProjectCardContent project={project} />
                </Link>
              ) : (
                <div className="works__card-inner works__card-inner--disabled">
                  <ProjectCardContent project={project} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          className="works__footer"
          initial={{ opacity: 0, y: 16 }}
          animate={controls}
          variants={
            {
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.5, ease: 'easeOut' },
              },
            } as Variants
          }
        >
          <Link to="/work" className="works__view-all">
            View All Works <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCardContent({ project }: { project: (typeof projects)[0] }) {
  return (
    <>
      {/* Thumbnail */}
      <div className="works__card-thumb">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="works__card-img"
          onError={(e) => {
            const t = e.currentTarget
            t.style.display = 'none'
            t.parentElement!.classList.add('works__card-thumb--placeholder')
          }}
        />
        {project.status === 'coming-soon' && (
          <span className="works__card-badge">Coming Soon</span>
        )}
        {project.status === 'live' && (
          <div className="works__card-arrow">
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="works__card-info">
        <div className="works__card-top">
          <h3 className="works__card-title">{project.title}</h3>
        </div>
        <p className="works__card-subtitle">{project.subtitle}</p>
        <div className="works__card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="works__card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
