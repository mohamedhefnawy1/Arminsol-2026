import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import CheckBadge from '../components/CheckBadge'
import { useI18n } from '../i18n'

function SpeakerOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L9 9H4z" />
      <path d="M16.5 9.5l5 5M21.5 9.5l-5 5" />
    </svg>
  )
}
function SpeakerOn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L9 9H4z" />
      <path d="M16.5 8.8a5 5 0 0 1 0 6.4M19 6.5a8 8 0 0 1 0 11" />
    </svg>
  )
}

export default function Home() {
  const { c } = useI18n()
  const h = c.home
  const reel = [...h.servingList, ...h.servingList]
  const videoRef = useRef(null)
  const [soundOn, setSoundOn] = useState(false)
  useEffect(() => { if (videoRef.current) videoRef.current.muted = true }, [])
  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    if (!v.muted) v.play().catch(() => {})
    setSoundOn(!v.muted)
  }

  return (
    <>
      {/* ---- Hero ---- */}
      <section style={{ padding: '40px 0 56px' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 72 }}>
              <span className="mono" style={{ fontSize: 14, color: 'var(--muted)' }}>{c.tagline}</span>
              <div className="mono hero-contact" style={{ display: 'flex', gap: 40, fontSize: 14, color: 'var(--muted)' }}>
                <a href={`mailto:${c.email}`} className="contact-link" style={{ direction: 'ltr' }}>{c.email}</a>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="contact-link" style={{ direction: 'ltr' }}>{c.phone}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}><h1 className="display" style={{ maxWidth: 1150 }}>{h.heroTitle}</h1></Reveal>
          <Reveal delay={0.1}><p className="body" style={{ fontSize: '1.15rem', maxWidth: '46ch', marginTop: 34 }}>{h.heroSub}</p></Reveal>
          <Reveal delay={0.15}>
            <div className="hero-cta">
              <Link to="/products" className="btn btn--gold">{h.heroCtaPrimary} <Arrow /></Link>
              <Link to="/contact" className="btn">{h.heroCtaSecondary} <Arrow /></Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ marginTop: 56 }}>
              <div className="hero-video">
                <video
                  ref={videoRef}
                  src="/arminsol-hero.mp4"
                  poster={c.heroPoster}
                  autoPlay loop muted playsInline preload="metadata"
                  aria-label="Arminsol mining operations showreel"
                  style={{ width: '100%', aspectRatio: '21 / 9', objectFit: 'cover', display: 'block', borderRadius: '8px 8px 0 0', background: 'var(--card)' }}
                />
                <button type="button" className="video-sound" onClick={toggleSound} aria-pressed={soundOn} aria-label={soundOn ? 'Mute video' : 'Enable sound'}>
                  {soundOn ? <SpeakerOn /> : <SpeakerOff />}
                  <span>{soundOn ? 'Sound on' : 'Sound off'}</span>
                </button>
              </div>
              <div className="strata"><span /><span /><span /><span /><span /><span /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Official Distributor trust strip ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 22 }}>{h.distributorLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="diststrip">
              {h.distributors.map((d) => (
                <div className="diststrip__item" key={d.name}>
                  <img className="diststrip__logo" src={d.logo} alt={d.name} loading="lazy" />
                  <div>
                    <span className="diststrip__badge"><CheckBadge size={16} /> {d.badge || c.ui.officialDistributor}</span>
                    <div className="diststrip__status">{d.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- What We Offer ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 40 }}>{h.offerLabel}</span></Reveal>
          <div className="offergrid">
            {h.offers.map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) * 0.06} className={o.feature ? 'offergrid__feature' : undefined}>
                <Link to={o.to} className="ocard">
                  <img className="ocard__media" src={o.image} alt={o.title} loading="lazy" />
                  <div className="ocard__body">
                    <div className="ocard__title">{o.title}</div>
                    <p className="ocard__desc">{o.desc}</p>
                    <span className="ocard__more">{c.ui.learnMore} <Arrow size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Industries We Serve ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 34 }}>{h.industriesLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="indgrid">
              {h.industries.map((ind) => (
                <div className="indgrid__item" key={ind}><span className="indgrid__dot" />{ind}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Custom Sourcing CTA ---- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="strata"><span /><span /><span /><span /><span /><span /></div>
              <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 40, alignItems: 'center', padding: 'clamp(32px, 5vw, 52px)' }}>
                <div>
                  <h2 className="s-head">{h.sourcingTitle}</h2>
                  <p className="body" style={{ marginTop: 16 }}>{h.sourcingCopy}</p>
                </div>
                <div className="sourcing-cta">
                  <Link to="/contact" className="btn btn--gold">{h.sourcingCta} <Arrow /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Serving Leading Companies ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 30 }}>{h.servingLabel}</span></Reveal>
        </div>
        <Reveal delay={0.05}>
          <div className="marquee" aria-label={h.servingList.join(', ')}>
            <div className="marquee__track">
              {reel.map((name, i) => <span key={i} className="marquee__item" aria-hidden="true">{name}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---- Final CTA ---- */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="h-cta" style={{ maxWidth: 1000 }}>{h.finalTitle}</h2></Reveal>
          <Reveal delay={0.05}><p className="body" style={{ marginTop: 22, fontSize: '1.1rem' }}>{h.finalCopy}</p></Reveal>
          <Reveal delay={0.1}>
            <div className="hero-cta" style={{ marginTop: 34 }}>
              <Link to="/contact" className="btn btn--gold">{h.finalCtaQuote} <Arrow /></Link>
              <Link to="/contact" className="btn">{h.finalCtaContact} <Arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
