import { motion } from 'framer-motion'
import { experiences } from '../../data/experience'
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollReveal'
import './Experience.css'

export default function Experience() {
  const { ref, controls } = useScrollReveal(0.1)

  return (
    <section className="experience section" id="about">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="experience__header"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="label-tag" variants={staggerItemVariants}>
            Experience
          </motion.span>
          <motion.h2 className="experience__heading heading-lg" variants={staggerItemVariants}>
            Four years across teams,<br />industries, and surfaces.
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="experience__list"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className="experience__item"
              variants={staggerItemVariants}
              custom={index}
            >
              <div className="experience__period">{item.period}</div>
              <div className="experience__role">{item.role}</div>
              <div className="experience__desc">{item.description}</div>
              <div className="experience__location">
                <span>{item.location}</span>
                <span className="experience__location-type">{item.locationType}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
