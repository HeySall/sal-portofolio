import { motion } from 'framer-motion'
import { Navigation, Layers, Wand2, Sparkles, LayoutTemplate, ArrowRight } from 'lucide-react'
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollReveal'
import './Approach.css'

const steps = [
  {
    number: '01',
    icon: <Navigation size={18} strokeWidth={1.5} />,
    title: 'Listen',
    desc: 'Days with users, support tickets, sales calls. The interface lives in their language, not mine.',
  },
  {
    number: '02',
    icon: <Layers size={18} strokeWidth={1.5} />,
    title: 'Frame',
    desc: 'Reduce a messy brief to a single, opinionated problem statement the whole team can rally behind.',
  },
  {
    number: '03',
    icon: <Wand2 size={18} strokeWidth={1.5} />,
    title: 'Sketch',
    desc: 'Many cheap ideas before any expensive ones. Low-fidelity is a competitive advantage.',
  },
  {
    number: '04',
    icon: <Sparkles size={18} strokeWidth={1.5} />,
    title: 'Craft',
    desc: 'Type, spacing, motion, copy — the boring details that decide whether anyone trusts the product.',
  },
  {
    number: '05',
    icon: <LayoutTemplate size={18} strokeWidth={1.5} />,
    title: 'Systemize',
    desc: 'Patterns documented, tokens shipped, handoff that respects engineering time.',
  },
  {
    number: '06',
    icon: <ArrowRight size={18} strokeWidth={1.5} />,
    title: 'Measure',
    desc: 'Ship, instrument, learn. Repeat until the numbers and the gut agree.',
  },
]

export default function Approach() {
  const { ref, controls } = useScrollReveal(0.1)

  return (
    <section className="approach section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="approach__header"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="label-tag" variants={staggerItemVariants}>
            Approach Works
          </motion.span>
          <motion.h2 className="approach__heading heading-lg" variants={staggerItemVariants}>
            How I approach design research{' '}
            <span className="approach__heading-break">
              <strong>first</strong>
              <span className="approach__comma">,</span>{' '}
              <em className="hero__italic approach__italic">refined to clarity</em>
              <span className="approach__dot">.</span>
            </span>
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="approach__grid"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="approach__step"
              variants={staggerItemVariants}
            >
              <div className="approach__step-header">
                <span className="approach__step-icon">{step.icon}</span>
                <span className="approach__step-number">{step.number}</span>
              </div>
              <h3 className="approach__step-title">{step.title}</h3>
              <p className="approach__step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
