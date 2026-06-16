import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { useI18n } from '../i18n'
import services from '../content/services'

function Check() {
  return (
    <svg className="clist__check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 6.5" />
    </svg>
  )
}

export default function ServiceDetail() {
  const { lang } = useI18n()
  const { slug } = useParams()
  const entry = services[slug]
  if (!entry) return <Navigate to="/services" replace />
  const t = entry[lang] || entry.en

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '28px 0 64px' }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{ fontSize: 14, color: 'var(--muted)', display: 'inline-block', marginBottom: 40 }}>
              <Link to="/services" style={{ color: 'var(--muted)' }}>{t.back}</Link>
              <span style={{ color: 'var(--faint)' }}>{'  /  '}{t.eyebrow}</span>
            </span>
          </Reveal>
          <Reveal delay={0.05}><h1 className="svc-hero-title">{t.title}</h1></Reveal>
          <Reveal delay={0.1}><p className="prose" style={{ marginTop: 32 }}>{t.intro}</p></Reveal>
          <Reveal delay={0.15}>
            <img src={t.heroImage} alt={t.title} className="card" style={{ width: '100%', marginTop: 48, aspectRatio: '16 / 6', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* What we manage / cover / deliver */}
      <section className="svc-section">
        <div className="container">
          <Reveal><span className="eyebrow svc-label">{t.manageLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <ul className="flist">
              {t.manage.map((it) => <li className="flist__item" key={it}>{it}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Two-up */}
      <section className="svc-section">
        <div className="container">
          <Reveal><span className="eyebrow svc-label">{t.duoLabel}</span></Reveal>
          <div className="duo">
            {t.duo.map((d, i) => (
              <Reveal key={d.title} delay={0.05 + i * 0.06}>
                <div>
                  <h3 className="duo__title">{d.title}</h3>
                  <p className="duo__text">{d.text}</p>
                  <div className="chips">
                    {d.items.map((it) => <span className="chip" key={it}>{it}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="svc-section">
        <div className="container">
          <Reveal><span className="eyebrow svc-label">{t.howLabel}</span></Reveal>
          <div className="caps">
            {t.capabilities.map((cap, i) => (
              <Reveal key={cap.k} delay={0.05 + i * 0.06}>
                <div>
                  <span className="cap__k">{cap.k}</span>
                  <h3 className="cap__title">{cap.title}</h3>
                  <p className="cap__text">{cap.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="svc-section">
        <div className="container">
          <Reveal><span className="eyebrow svc-label">{t.whyLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="clist">
              {t.why.map((w) => (
                <div className="clist__item" key={w}><Check /> {w}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 0 96px', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal><span className="eyebrow">{t.cta.eyebrow}</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-cta" style={{ maxWidth: 920, marginTop: 24 }}>{t.cta.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}><p className="prose" style={{ marginTop: 22 }}>{t.cta.text}</p></Reveal>
          <Reveal delay={0.15}>
            <Link to="/contact" className="btn" style={{ marginTop: 32 }}>
              {t.cta.button} <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
