import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { useI18n, Highlight } from '../i18n'

function CheckBadge() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 6.5" />
    </svg>
  )
}

export default function About() {
  const { c } = useI18n()
  const a = c.about
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '40px 0 32px' }}>
        <div className="container">
          <Reveal><h1 className="display">{a.heroTitle}</h1></Reveal>
          <Reveal delay={0.05}><p className="statement" style={{ marginTop: 22 }}>{a.heroSub}</p></Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal><span className="eyebrow">{a.whoLabel}</span></Reveal>
            {a.who.map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className={i === 0 ? 'statement' : 'body'} style={{ marginTop: i === 0 ? 26 : '1.1em' }}>
                  {i === 0 ? <Highlight text={p} mark={a.sinceMark} /> : p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <img src={c.aboutImage} alt="Arminsol operations in Saudi Arabia" className="card" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <Reveal>
              <div className="card" style={{ padding: '34px 32px', height: '100%' }}>
                <span className="eyebrow" style={{ marginBottom: 20 }}>{a.missionLabel}</span>
                <p className="body" style={{ maxWidth: 'none' }}>{a.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="card" style={{ padding: '34px 32px', height: '100%' }}>
                <span className="eyebrow" style={{ marginBottom: 20 }}>{a.visionLabel}</span>
                <p className="body" style={{ maxWidth: 'none' }}>{a.vision}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Identity */}
      <section className="section">
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal><span className="eyebrow">{a.identityLabel}</span></Reveal>
            <Reveal delay={0.05}><p className="statement" style={{ marginTop: 24 }}>{a.identityLine}</p></Reveal>
            <Reveal delay={0.1}>
              <div className="logogrid">
                {c.logoColors.map((col) => (
                  <div key={col.name} className="logogrid__item">
                    <span className="logogrid__dot" style={{ background: col.color }} />
                    {col.name}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img src={c.logoImage} alt="Arminsol logo" style={{ width: '100%', maxWidth: 280, margin: '0 auto' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Company Profile / Journey */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 36 }}>{a.journeyLabel}</span></Reveal>
          <div className="facts">
            {a.journey.map((f, i) => (
              <Reveal key={f.l} delay={i * 0.05}>
                <div className="facts__item">
                  <div className="facts__v">{f.v}</div>
                  <div className="facts__l">{f.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Official Distribution Partnerships */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 24 }}>{a.partnersLabel}</span></Reveal>
          <Reveal delay={0.05}><p className="statement" style={{ marginBottom: 40 }}>{a.partnersIntro}</p></Reveal>
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {a.partners.map((p, i) => (
              <Reveal key={p.name} delay={0.05 + i * 0.06}>
                <div className="partner-card">
                  <div className="partner-card__head">
                    <img className="partner-card__logo" src={p.logo} alt={p.name} loading="lazy" />
                    <span className="partner-card__badge"><CheckBadge /> {p.status}</span>
                  </div>
                  <p className="body" style={{ maxWidth: 'none', marginTop: 20 }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}><p className="body" style={{ marginTop: 28 }}>{a.partnersNote}</p></Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="h-cta" style={{ maxWidth: 900 }}>{a.closing}</h2></Reveal>
          <Reveal delay={0.05}>
            <Link to="/contact" className="btn btn--gold" style={{ marginTop: 32 }}>{a.closingCta} <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
