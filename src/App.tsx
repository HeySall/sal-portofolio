import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import AllWorksPage from './pages/AllWorksPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import DigiRoomDetailPage from './pages/DigiRoomDetailPage'
import AureliaDetailPage from './pages/AureliaDetailPage'
import CapitalDeskDetailPage from './pages/CapitalDeskDetailPage'
import LollyJobDetailPage from './pages/LollyJobDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<AllWorksPage />} />
          <Route path="/work/digiroom-auto2000" element={<DigiRoomDetailPage />} />
          <Route path="/work/aurelia" element={<AureliaDetailPage />} />
          <Route path="/work/capital-desk" element={<CapitalDeskDetailPage />} />
          <Route path="/work/lolly-job" element={<LollyJobDetailPage />} />
          <Route path="/work/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
