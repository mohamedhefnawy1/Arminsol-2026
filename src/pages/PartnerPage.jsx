import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import GlassCTA from '../components/GlassCTA'
import CheckBadge from '../components/CheckBadge'
import CategorySection from '../components/CategorySection'
import { useI18n } from '../i18n'

/** Dedicated page for an official partner (Normet, Aramine, Technidrill).
 *  `id` is the partner's key in the i18n content. */
export default function PartnerPage({ id }) {
  const { c } = useI18n()
  const n = c[id]
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '40px 0 56px' }}>
        <div className="container">
          <Reveal>
            <div className="partner-card__head" style={{ marginBottom: 34 }}>
              <img className="partner-card__logo" src={n.logo} alt={n.name} />
              <span className="partner-card__badge"><CheckBadge /> {n.status}</span>
            </div>
          </Reveal>
          <Reveal delay={0.04}><h1 className="svc-hero-title" style={{ maxWidth: '18ch' }}>{n.title}</h1></Reveal>
          <Reveal delay={0.08}><p className="body" style={{ marginTop: 28, fontSize: '1.15rem' }}>{n.intro}</p></Reveal>
          <Reveal delay={0.12}>
            <div className="hero-cta">
              <Link to="/contact?inquiry=rfq" className="btn btn--gold">{c.ui.requestQuote} <Arrow /></Link>
              <Link to="/products" className="btn">{n.allProducts} <Arrow /></Link>
              {n.website && <a href={n.website} target="_blank" rel="noopener noreferrer" className="btn">{n.websiteLabel} <Arrow /></a>}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div style={{ marginTop: 56 }}>
              <img
                src={n.heroImage}
                alt={n.heroAlt}
                style={{ width: '100%', aspectRatio: '21 / 9', objectFit: 'cover', display: 'block', borderRadius: '8px 8px 0 0', background: 'var(--card)' }}
              />
              <div className="strata"><span /><span /><span /><span /><span /><span /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky category rail */}
      <nav className="catnav" aria-label={n.railLabel}>
        <div className="container catnav__inner">
          {n.categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`}>{cat.short}</a>
          ))}
        </div>
      </nav>

      {/* Normet at a glance */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 24 }}>{n.aboutLabel}</span></Reveal>
          <Reveal delay={0.05}><p className="statement" style={{ marginBottom: 44 }}>{n.about}</p></Reveal>
          <div className="facts">
            {n.facts.map((f, i) => (
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

      {/* Offering — alternating image / text */}
      {n.categories.map((cat, i) => (
        <CategorySection key={cat.id} cat={cat} imageFirst={i % 2 === 0} quoteLabel={c.ui.requestQuote} />
      ))}

      {/* Applications */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 34 }}>{n.industriesLabel}</span></Reveal>
          <Reveal delay={0.05}>
            <div className="indgrid">
              {n.industries.map((ind) => (
                <div className="indgrid__item" key={ind}><span className="indgrid__dot" />{ind}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RFQ CTA */}
      <GlassCTA image={n.ctaImage} title={n.ctaTitle} copy={n.ctaCopy}>
        <Link to="/contact?inquiry=rfq" className="btn btn--gold">{c.ui.sendRfqShort} <Arrow /></Link>
      </GlassCTA>
    </>
  )
}
