import { motion, type Variants } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'
import { siteConfig } from '../../data/site'
import './Hero.css'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Hero() {
  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__container container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Location badge */}
          <motion.div className="hero__location" variants={itemVariants}>
            <MapPin size={13} strokeWidth={2} />
            <span>{siteConfig.location}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero__headline heading-xl" variants={itemVariants}>
            <span className="hero__headline-line">
              Designing{' '}
              <em className="hero__italic">quiet</em>{' '}
              products that move the
            </span>
            <br />
            <span className="hero__headline-line">
              <em className="hero__italic">loud</em>{' '}
              numbers.
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p className="hero__bio" variants={itemVariants}>
            {siteConfig.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={itemVariants}>
            <a
              href="#work"
              className="btn btn-primary"
              onClick={handleWorkClick}
            >
              View Selected Work
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={handleContactClick}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} color="var(--color-text-muted)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
