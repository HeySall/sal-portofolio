import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <motion.main
      className="not-found"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__desc text-secondary">
          This page doesn't exist or was moved.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Back to Home
        </Link>
      </div>
    </motion.main>
  )
}
