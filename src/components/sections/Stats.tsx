import { motion } from 'framer-motion'
import { Sparkles, Box, Layers } from 'lucide-react'
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollReveal'
import { siteConfig } from '../../data/site'
import './Stats.css'

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={20} strokeWidth={1.5} />,
  box: <Box size={20} strokeWidth={1.5} />,
  layers: <Layers size={20} strokeWidth={1.5} />,
}

export default function Stats() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="stats section" id="about">
      <div className="container">
        <div className="stats__grid">
          {/* Left: heading */}
          <motion.div
            ref={ref}
            className="stats__left"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h2 className="stats__heading heading-lg" variants={staggerItemVariants}>
              A few things I've quietly helped ship.
            </motion.h2>
            <motion.p className="stats__desc text-secondary" variants={staggerItemVariants}>
              I design digital experiences that balance research, systems thinking, and usability—turning
              complex challenges into products that feel clear, intuitive, and scalable.
            </motion.p>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            className="stats__cards"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={controls}
          >
            {siteConfig.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stats__card"
                variants={staggerItemVariants}
              >
                <div className="stats__card-icon">
                  {iconMap[stat.icon]}
                </div>
                <div className="stats__card-body">
                  <div className="stats__card-value">{stat.value}</div>
                  <div className="stats__card-label">{stat.label}</div>
                  <p className="stats__card-desc">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
