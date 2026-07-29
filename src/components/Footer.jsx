import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { LinkedIn } from './icons'

export default function Footer() {
  const { c } = useI18n()
  const s = c.services
  return (
    <footer>
      <div className="strata"><span /><span /><span /><span /><span /><span /></div>
      <div className="container">
        <div className="footer-grid">
          {/* brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={c.flame} alt="" style={{ height: 28 }} />
              <span style={{ fontWeight: 700, fontSize: 17, textTransform: 'uppercase' }}>ARMINSOL Trading</span>
            </Link>
            <p className="footer-line" style={{ marginTop: 18, maxWidth: 360 }}>{c.legalName}</p>
            <p className="mono" style={{ fontSize: 13, color: 'var(--faint)', marginTop: 6 }}>{c.home.tagline}</p>
          </div>

          {/* quick links */}
          <div>
            <div className="footer-head">{c.ui.menu}</div>
            {c.nav.map((item) => (
              <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
            ))}
          </div>

          {/* contact */}
          <div>
            <div className="footer-head">{c.ui.contactHead}</div>
            <p className="footer-line" style={{ margin: '0 0 10px' }}>{s.contactAddr}</p>
            <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="footer-link" style={{ direction: 'ltr', display: 'inline-block' }}>{c.phone}</a>
            <br />
            <a href={`mailto:${c.email}`} className="footer-link" style={{ direction: 'ltr', display: 'inline-block' }}>{c.email}</a>
            <div style={{ marginTop: 14 }}>
              <a href={c.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social" style={{ color: 'var(--muted)', display: 'inline-flex' }}>
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {c.legalName}</span>
          <span style={{ direction: 'ltr' }}>www.arminsol.com.sa</span>
        </div>
      </div>
      <style>{`.social:hover { color: var(--text) !important; }`}</style>
    </footer>
  )
}
