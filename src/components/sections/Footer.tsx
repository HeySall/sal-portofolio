import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { useScrollReveal, staggerContainerVariants, staggerItemVariants } from '../../hooks/useScrollReveal'
import './Footer.css'

export default function Footer() {
  const { ref, controls } = useScrollReveal(0.1)

  return (
    <footer className="footer" id="contact">
      <div className="footer__bg" />
      <div className="container">
        <motion.div
          ref={ref}
          className="footer__inner"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main CTA row */}
          <div className="footer__cta-row">
            {/* Left: headline + desc */}
            <motion.div className="footer__cta-left" variants={staggerItemVariants}>
              <h2 className="footer__headline">
                Have a problem worth{' '}
                <em className="footer__italic">designing</em>{' '}
                for?
              </h2>
              <p className="footer__desc text-secondary">
                {siteConfig.footer.body}
              </p>
            </motion.div>

            {/* Right: contact links */}
            <motion.div className="footer__cta-right" variants={staggerItemVariants}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="footer__email"
              >
                <Mail size={15} strokeWidth={1.5} />
                <span>{siteConfig.email}</span>
                <ArrowUpRight size={14} className="footer__email-arrow" />
              </a>
              <div className="footer__links">
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Resume
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div className="footer__bottom" variants={staggerItemVariants}>
            <span className="footer__copy">
              © {new Date().getFullYear()} Aditya Faisal. All rights reserved.
            </span>
            <span className="footer__made">
              Designed & Built with care
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
