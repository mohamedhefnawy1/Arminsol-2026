import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { PriceTag, Truck, Headset, Globe, Heart } from '../components/icons'
import { useI18n } from '../i18n'

const benefitIcons = [PriceTag, Truck, Headset, Globe, Heart]

// line icons for the seven services (brief: service cards with icons)
const ico = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', width: 34, height: 34, viewBox: '0 0 24 24', 'aria-hidden': true }
const ICONS = {
  tire: (
    <svg {...ico}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="M12 3v2.8M12 18.2V21M3 12h2.8M18.2 12H21M5.7 5.7l2 2M16.3 16.3l2 2M18.3 5.7l-2 2M7.7 16.3l-2 2" /></svg>
  ),
  wrench: (
    <svg {...ico}><path d="M14.2 6.3a4.2 4.2 0 0 0-5.6 5.2L3 17.1a2 2 0 1 0 2.9 2.9l5.6-5.6a4.2 4.2 0 0 0 5.2-5.6l-2.6 2.6-2.5-.7-.7-2.5z" /></svg>
  ),
  loader: (
    <svg {...ico}><path d="M3 17h13M3 17v-4h9l2-4h3v8M3 17a2 2 0 1 0 4 0M12 17a2 2 0 1 0 4 0" /><path d="M21 13h-1" /></svg>
  ),
  compass: (
    <svg {...ico}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>
  ),
  headset: (
    <svg {...ico}><path d="M4 13a8 8 0 0 1 16 0" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a3 3 0 0 1-3 3h-3" /></svg>
  ),
  sliders: (
    <svg {...ico}><path d="M4 8h10M18 8h2M4 16h4M12 16h8" /><circle cx="16" cy="8" r="2" /><circle cx="10" cy="16" r="2" /></svg>
  ),
  globe: (
    <svg {...ico}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" /></svg>
  ),
}

export default function Services() {
  const { c } = useI18n()
  const s = c.services
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <Reveal><h1 className="svc-hero-title" style={{ maxWidth: '16ch' }}>{s.title}</h1></Reveal>
          <Reveal delay={0.06}><p className="body" style={{ marginTop: 28, fontSize: '1.15rem' }}>{s.intro}</p></Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ paddingBottom: 20 }}>
        <div className="container grid grid-3">
          {s.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.06}>
              <div className="card svccard">
                <span className="svcico">{ICONS[it.icon]}</span>
                <h3>{it.title}</h3>
                {it.desc && <p>{it.desc}</p>}
                {it.bullets && (
                  <ul>
                    {it.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Partner with Arminsol */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="s-head" style={{ marginBottom: 44 }}>{s.whyLabel}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="whygrid">
              {s.why.map((w, i) => {
                const Icon = benefitIcons[i]
                return (
                  <div className="whyitem" key={w.title}>
                    <span className="whyitem__ico"><Icon /></span>
                    <div className="whyitem__title">{w.title}</div>
                    <p className="whyitem__desc">{w.desc}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Us */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 32 }}>{s.contactLabel}</span></Reveal>
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <Reveal delay={0.05}>
                <div style={{ fontSize: '1.0625rem', lineHeight: 1.9, color: 'var(--muted)' }}>
                  <div style={{ color: 'var(--text)', fontSize: '1.3rem', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10 }}>{s.contactName}</div>
                  <div>{s.contactAddr}</div>
                  <div>{s.contactPhoneLabel} <a href={`tel:${s.contactPhone.replace(/\s/g, '')}`} className="contact-link" style={{ direction: 'ltr', color: 'var(--accent)' }}>{s.contactPhone}</a></div>
                  <div>{s.contactEmailLabel} <a href={`mailto:${s.contactEmail}`} className="contact-link" style={{ color: 'var(--accent)' }}>{s.contactEmail}</a></div>
                  <div>{s.contactWebLabel} <a href={`https://${s.contactWeb}`} target="_blank" rel="noreferrer" className="contact-link" style={{ direction: 'ltr' }}>{s.contactWeb}</a></div>
                </div>
              </Reveal>
              <Reveal delay={0.1}><p className="body" style={{ marginTop: 26 }}>{s.contactClosing}</p></Reveal>
              <Reveal delay={0.14}>
                <Link to="/contact" className="btn btn--gold" style={{ marginTop: 26 }}>{c.ui.contactUs} <Arrow /></Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <iframe
                className="mapframe"
                title="Arminsol — Dammam office"
                src="https://www.google.com/maps?q=7770%20Al%20Faiha%2C%20Dammam%2032442%2C%20Saudi%20Arabia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
