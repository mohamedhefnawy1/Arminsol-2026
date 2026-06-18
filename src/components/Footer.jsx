import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { YouTube, Twitter, Instagram } from './icons'

const icons = { YouTube, Twitter, Instagram }

export default function Footer() {
  const { c } = useI18n()
  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container footer-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, padding: '40px var(--gutter)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={c.flame} alt="" style={{ height: 26 }} />
          <span style={{ fontWeight: 600, fontSize: 17, color: 'var(--muted)' }}>ARMINSOL Trading</span>
        </Link>

        <nav className="footer-nav" style={{ display: 'flex', gap: 36 }}>
          {c.nav.map((item) => (
            <Link key={item.to} to={item.to} style={{ color: 'var(--muted)', fontSize: 16 }}>{item.label}</Link>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 20, color: 'var(--muted)' }}>
          {c.socials.map((s) => {
            const Icon = icons[s.key]
            return (
              <a key={s.key} href={s.href} target="_blank" rel="noreferrer" aria-label={s.key} style={{ color: 'var(--muted)' }} className="social">
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
      <style>{`
        .social:hover { color: var(--text) !important; }
        @media (max-width: 760px) {
          .footer-row { flex-direction: column; align-items: flex-start !important; gap: 28px; }
          .footer-nav { flex-direction: column; gap: 14px; }
        }
      `}</style>
    </footer>
  )
}
