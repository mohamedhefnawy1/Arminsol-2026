import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useI18n } from '../i18n'
import { useTheme } from '../ThemeContext'
import { Sun, Moon, Globe } from './icons'

function Logo({ flame }) {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img src={flame} alt="" style={{ height: 30, width: 'auto' }} />
      <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '0.01em', textTransform: 'uppercase' }}>
        ARMINSOL <span style={{ fontWeight: 700 }}>Trading</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { theme, toggle } = useTheme()
  const { c, toggleLang } = useI18n()
  const rawProgress = useMotionValue(0)
  const progress = useSpring(rawProgress, { stiffness: 220, damping: 40, restDelta: 0.0005 })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      rawProgress.set(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [rawProgress])
  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        background: scrolled ? 'color-mix(in srgb, var(--bg) 72%, transparent)' : 'transparent',
        transition: 'background .4s var(--ease)',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
        <Logo flame={c.flame} />

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {c.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="nav-link"
              style={({ isActive }) => ({ fontSize: 16, letterSpacing: '-0.025em', color: isActive ? 'var(--text)' : 'var(--muted)', transition: 'color .3s var(--ease)' })}
            >
              {item.label}
            </NavLink>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginInlineStart: 14 }}>
            <button className="pill pill--ghost" onClick={toggle} aria-label="Toggle colour theme">
              {theme === 'dark' ? <Sun /> : <Moon />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            <button className="pill pill--ghost" onClick={toggleLang} aria-label="Switch language"><Globe /> {c.langName}</button>
          </div>
        </div>

        <button
          className="nav-burger"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={{ display: 'none', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, color: 'var(--text)', width: 44, height: 44, cursor: 'pointer' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M3 8h18M3 16h18" /></svg>
        </button>
      </nav>

      {/* nav underline + scroll-progress fill */}
      <div className="navline">
        <div className="navline__base">
          <motion.div className="navline__fill" style={{ scaleX: progress }} />
        </div>
      </div>

      {createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'color-mix(in srgb, var(--bg) 62%, transparent)', backdropFilter: 'blur(26px) saturate(1.3)', WebkitBackdropFilter: 'blur(26px) saturate(1.3)', display: 'flex', flexDirection: 'column' }}
          >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80, flex: '0 0 auto' }}>
              <Logo flame={c.flame} />
              <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 0, color: 'var(--text)', fontSize: 18, cursor: 'pointer' }}>
                close
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
              </button>
            </div>

            <nav className="container" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
              {c.nav.map((item, i) => (
                <motion.div key={item.to}
                  initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink to={item.to} className="mobile-link"
                    style={({ isActive }) => ({ display: 'inline-block', padding: '8px 0', fontSize: 'clamp(2.6rem, 12vw, 3.6rem)', fontWeight: 500, letterSpacing: '-0.03em', color: isActive ? 'var(--text)' : 'var(--muted)' })}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flex: '0 0 auto', paddingTop: 16, paddingBottom: 44 }}>
              <button className="pill pill--ghost" onClick={toggle}>
                {theme === 'dark' ? <Sun /> : <Moon />} {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <button className="pill pill--ghost" onClick={toggleLang}><Globe /> {c.langName}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body)}

      <style>{`
        @media (max-width: 860px) {
          .nav-links { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
        @media (min-width: 861px) { .mobile-overlay { display: none !important; } }
        .nav-link:hover { color: var(--text) !important; }
        .mobile-link:hover { color: var(--text) !important; }
      `}</style>
    </motion.header>
  )
}
