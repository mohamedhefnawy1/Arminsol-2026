import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import GridLines from './components/GridLines'
import Meta from './components/Meta'
import Home from './pages/Home'
import Products from './pages/Products'
import Normet from './pages/Normet'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // The outgoing page animates out before the target page mounts, so the anchor
      // may not exist yet — keep looking for it for a few seconds, then scroll once.
      const id = decodeURIComponent(hash.slice(1))
      let tries = 0
      let timer
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
        if (++tries < 40) timer = setTimeout(scroll, 100)
      }
      timer = setTimeout(scroll, 60)
      return () => clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Page({ children }) {
  const reduce = useReducedMotion()
  if (reduce) return <main style={{ paddingTop: 80 }}>{children}</main>
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ paddingTop: 80 }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Meta />
      <GridLines />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/products" element={<Page><Products /></Page>} />
          <Route path="/products/normet" element={<Page><Normet /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsApp />
    </>
  )
}
