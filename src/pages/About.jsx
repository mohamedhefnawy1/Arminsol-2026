import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import CTA from '../components/CTA'
import { useI18n } from '../i18n'

export default function About() {
  const { c } = useI18n()
  return (
    <>
      <section style={{ padding: '80px 0 48px' }}>
        <div className="container">
          <Reveal><h1 className="display">{c.aboutTitle}</h1></Reveal>

          <div className="grid grid-3" style={{ marginTop: 56 }}>
            {c.aboutStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div>
                  <p className="stat__label">{s.label}</p>
                  <div className="stat__num">{s.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company details — image beside the text (as on the live site) */}
      <section className="section">
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 64, alignItems: 'center' }}>
          <Reveal>
            <img src={c.aboutBanner} alt="ARMINSOL team" className="card" style={{ width: '100%', aspectRatio: '712 / 448', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
          <div>
            <Reveal><span className="eyebrow">{c.label.companyDetails}</span></Reveal>
            <Reveal delay={0.05}><h2 className="h-lede" style={{ marginTop: 20 }}>{c.aboutDetails}</h2></Reveal>
            <Reveal delay={0.1}>
              <Link to="/contact" className="btn" style={{ marginTop: 28 }}>
                {c.viewCompanyProfile} <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions we provided */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>{c.label.solutions}</span></Reveal>
          {c.solutions.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="sol">
                <div className="sol__period">{s.period}</div>
                <div>
                  <h3 className="sol__client">{s.client}</h3>
                  <div className="sol__loc">{s.location}</div>
                </div>
                <p className="sol__detail">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our logo */}
      <section className="section">
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal><span className="eyebrow">{c.label.ourLogo}</span></Reveal>
            <Reveal delay={0.05}>
              <h3 className="h-lede" style={{ maxWidth: 540, marginTop: 22 }}>{c.logoHeading}</h3>
            </Reveal>
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
            <img src={c.logoImage} alt="ARMINSOL logo" style={{ width: '100%', maxWidth: 320, margin: '0 auto' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <CTA eyebrow="sayHello" />
    </>
  )
}
