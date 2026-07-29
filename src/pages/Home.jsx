import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { PriceTag, Truck, Headset, Globe, Heart } from '../components/icons'
import { useI18n, Highlight } from '../i18n'

const benefitIcons = [PriceTag, Truck, Headset, Globe, Heart]

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
  const reel = [...h.trustedList, ...h.trustedList]
  const videoRef = useRef(null)
  const [soundOn, setSoundOn] = useState(false)
  // React can drop the `muted` attribute on hydration; force it so autoplay is allowed
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
      <section style={{ padding: '18px 0 0' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 72 }}>
              <span className="mono" style={{ fontSize: 14, color: 'var(--muted)' }}>{h.tagline}</span>
              <div className="mono hero-contact" style={{ display: 'flex', gap: 40, fontSize: 14, color: 'var(--muted)' }}>
                <a href={`mailto:${c.email}`} className="contact-link" style={{ direction: 'ltr' }}>{c.email}</a>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="contact-link" style={{ direction: 'ltr' }}>{c.phone}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display" style={{ maxWidth: 1150 }}>{h.heroTitle}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="body" style={{ fontSize: '1.15rem', maxWidth: '46ch', marginTop: 34 }}>{h.heroSub}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="hero-cta">
              <Link to="/products" className="btn btn--gold">{c.ui.explore} <Arrow /></Link>
              <Link to="/contact" className="btn">{c.ui.contactUs} <Arrow /></Link>
            </div>
          </Reveal>

          {/* Hero video — autoplays muted & looping, with a sound toggle. Edges align with the site grid */}
          <Reveal delay={0.2}>
            <div style={{ marginTop: 56 }}>
              <div className="hero-video">
                <video
                  ref={videoRef}
                  src="/arminsol-hero.mp4"
                  poster={c.heroBanner}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Arminsol mining operations showreel"
                  style={{ width: '100%', aspectRatio: '21 / 9', objectFit: 'cover', display: 'block', borderRadius: '8px 8px 0 0', background: 'var(--card)' }}
                />
                <button
                  type="button"
                  className="video-sound"
                  onClick={toggleSound}
                  aria-pressed={soundOn}
                  aria-label={soundOn ? 'Mute video' : 'Enable sound'}
                >
                  {soundOn ? <SpeakerOn /> : <SpeakerOff />}
                  <span>{soundOn ? 'Sound on' : 'Sound off'}</span>
                </button>
              </div>
              <div className="strata"><span /><span /><span /><span /><span /><span /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Introduction ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 32 }}>{h.introLabel}</span></Reveal>
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <Reveal delay={0.05}><p className="statement">{h.introLede}</p></Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="body"><Highlight text={h.introSince} mark={h.sinceMark} /></p>
                <p className="body" style={{ marginTop: '1.1em' }}>{h.introCustom}</p>
              </div>
            </Reveal>
          </div>

          {/* Colours of our logo — same swatch + logo treatment as the About page */}
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: 64, alignItems: 'center', marginTop: 100 }}>
            <div>
              <Reveal><p className="statement">{h.intro2}</p></Reveal>
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
              <img src={c.logoImage} alt="ARMINSOL logo" style={{ width: '100%', maxWidth: 280, margin: '0 auto' }} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- What We Offer ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 40 }}>{h.offerLabel}</span></Reveal>
          <div className="grid grid-3" style={{ gap: '52px 32px', alignItems: 'start' }}>
            {h.offers.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.06}>
                <Link to={o.to} className="ocard">
                  <img className="ocard__media" src={c.offerImages[i]} alt={o.title} loading="lazy" />
                  <div className="ocard__title">{o.title}</div>
                  <p className="ocard__desc">{o.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why Choose Arminsol ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 40 }}>{h.whyLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="whygrid">
              {h.why.map((w, i) => {
                const Icon = benefitIcons[i]
                return (
                  <div className="whyitem" key={w}>
                    <span className="whyitem__ico"><Icon /></span>
                    <div className="whyitem__title">{w}</div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Industries We Serve ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 34 }}>{h.industriesLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="chips">
              {h.industries.map((ind) => <span className="chip" key={ind} style={{ fontSize: 15, padding: '10px 20px' }}>{ind}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Trusted By ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 34 }}>{h.trustedLabel}</span></Reveal>
        </div>
        <Reveal delay={0.05}>
          <div className="marquee" aria-label={h.trustedList.join(', ')}>
            <div className="marquee__track">
              {reel.map((name, i) => (
                <span key={i} className="marquee__item" aria-hidden="true">{name}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---- Closing CTA band ---- */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="h-cta" style={{ maxWidth: 900 }}>{h.closing}</h2></Reveal>
          <Reveal delay={0.05}>
            <div className="mono" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 26, fontSize: 15 }}>
              <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="contact-link" style={{ direction: 'ltr', color: 'var(--accent)' }}>{c.phone}</a>
              <a href={`mailto:${c.email}`} className="contact-link" style={{ direction: 'ltr', color: 'var(--accent)' }}>{c.email}</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn--gold" style={{ marginTop: 40 }}>{c.ui.contactUs} <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
