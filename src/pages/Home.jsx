import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import CTA from '../components/CTA'
import { useI18n } from '../i18n'

export default function Home() {
  const { c } = useI18n()
  return (
    <>
      {/* ---- Hero ---- */}
      <section style={{ padding: '18px 0 56px' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 96 }}>
              <span className="mono" style={{ fontSize: 14, color: 'var(--muted)' }}>{c.tagline}</span>
              <div className="mono hero-contact" style={{ display: 'flex', gap: 40, fontSize: 14, color: 'var(--muted)' }}>
                <a href={`mailto:${c.email}`} style={{ direction: 'ltr' }}>{c.email}</a>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} style={{ direction: 'ltr' }}>{c.phone}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display" style={{ maxWidth: 1150 }}>{c.heroTitle}</h1>
          </Reveal>

          <Reveal delay={0.15}>
            <Link to="/products" className="btn" style={{ marginTop: 48 }}>
              {c.browseProducts} <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---- Product categories ---- */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <div className="pcards">
            {c.productCategories.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Link to="/products" className="pcard">
                  <div className="pcard__title">{p.title}</div>
                  <img className="pcard__media" src={p.image} alt={p.title} loading="lazy" />
                  <div className="pcard__head" style={{ marginTop: 16, marginBottom: 0 }}>
                    <span className="pcard__status"><span className="pcard__status-dot" aria-hidden="true"></span>in stock</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Brands we carry ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 36 }}>{c.label.brands}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="brands">
              {c.brandLogos.map((src, i) => (
                <div className="brand" key={i}><img src={src} alt="" loading="lazy" /></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- About ---- */}
      <section className="section">
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal><span className="eyebrow">{c.label.about}</span></Reveal>
            <Reveal delay={0.05}><h3 className="h-lede" style={{ marginTop: 28, maxWidth: 640 }}>{c.aboutText}</h3></Reveal>
            <Reveal delay={0.1}>
              <Link to="/about" className="btn" style={{ marginTop: 36 }}>
                {c.getInTouch} <Arrow />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img src={c.aboutImage} alt="ARMINSOL operations" style={{ width: '100%', borderRadius: 8, aspectRatio: '374 / 498', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 24, display: 'inline-block' }}>{c.label.services}</span></Reveal>
          {c.homeServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Link to={s.to} className="srow">
                <div className="srow__title">{s.title}</div>
                <div className="srow__date">{s.date}</div>
                <img className="srow__thumb" src={s.image} alt="" loading="lazy" />
                <span className="srow__arrow"><Arrow size={20} /></span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}>
              <Link to="/services" className="btn btn--center">
                {c.getInTouch} <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
