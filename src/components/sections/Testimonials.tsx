import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { useScrollReveal, fadeUpVariants } from '../../hooks/useScrollReveal'
import './Testimonials.css'

const SLIDE_INTERVAL = 5000
const DRAG_THRESHOLD = 60

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { ref, controls } = useScrollReveal(0.2)

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setTimeout(next, SLIDE_INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, isPaused, next])

  // Drag handling
  const dragStartX = useRef(0)

  const handleDragStart = (_: unknown, info: { point: { x: number } }) => {
    dragStartX.current = info.point.x
    setIsPaused(true)
  }

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    setIsPaused(false)
    if (info.offset.x < -DRAG_THRESHOLD) next()
    else if (info.offset.x > DRAG_THRESHOLD) prev()
  }

  const slideVariants: Variants = {
    enter: { x: direction > 0 ? 60 : -60, opacity: 0 },
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
    exit: {
      x: direction > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  }

  const testimonial = testimonials[current]

  return (
    <section
      className="testimonials section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <motion.div
          ref={ref}
          className="testimonials__inner"
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Quote mark */}
          <div className="testimonials__quote-mark">"</div>

          {/* Slide area */}
          <div
            className="testimonials__slide-area"
            data-cursor="drag"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonials__slide"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                {/* Quote text */}
                <blockquote className="testimonials__text">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="testimonials__author">
                  <div className="testimonials__author-photo">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=e8f4f4&color=0d6e6e&size=80`
                      }}
                    />
                  </div>
                  <div className="testimonials__author-info">
                    <div className="testimonials__author-name">{testimonial.name}</div>
                    <div className="testimonials__author-role">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="testimonials__progress">
            <motion.div
              key={current}
              className="testimonials__progress-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? undefined : 1 }}
              transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
