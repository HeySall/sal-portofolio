import { motion, type Variants } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import SelectedWorks from '../components/sections/SelectedWorks'
import Approach from '../components/sections/Approach'
import Experience from '../components/sections/Experience'
import Testimonials from '../components/sections/Testimonials'
import Footer from '../components/sections/Footer'

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function HomePage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Stats />
      <SelectedWorks />
      <Approach />
      <Experience />
      <Testimonials />
      <Footer />
    </motion.main>
  )
}
