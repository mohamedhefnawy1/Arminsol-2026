import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
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
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false) }, [location.pathname])

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
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          style={{ display: 'none', background: 'transparent', border: '1px solid var(--pill-border)', borderRadius: 8, color: 'var(--text)', width: 42, height: 42, cursor: 'pointer' }}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* nav underline + scroll-progress fill */}
      <div className="navline">
        <div className="navline__base">
          <motion.div className="navline__fill" style={{ scaleX: progress }} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--line)', background: 'var(--bg)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '12px 0 24px' }}>
              {c.nav.map((item) => (
                <NavLink key={item.to} to={item.to} style={{ padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: 22, fontWeight: 500 }}>{item.label}</NavLink>
              ))}
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <button className="pill pill--solid" onClick={toggle}>
                  {theme === 'dark' ? <Sun /> : <Moon />} {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
                <button className="pill pill--ghost" onClick={toggleLang}><Globe /> {c.langName}</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .nav-links { display: none !important; }
          .nav-burger { display: inline-flex !important; align-items: center; justify-content: center; }
        }
        @media (min-width: 861px) { .mobile-menu { display: none !important; } }
        .nav-link:hover { color: var(--text) !important; }
      `}</style>
    </motion.header>
  )
}
