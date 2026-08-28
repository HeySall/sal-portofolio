import { useEffect, useRef } from 'react'
import { useAnimation, useInView, type Variants } from 'framer-motion'

type AnimationControls = ReturnType<typeof useAnimation>

export function useScrollReveal(threshold = 0.15): {
  ref: React.RefObject<HTMLDivElement>
  controls: AnimationControls
} {
  const ref = useRef<HTMLDivElement>(null!)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return { ref, controls }
}

// Custom easing as a named string Framer Motion accepts
// We pass the cubic-bezier via transition directly in each variant
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}
