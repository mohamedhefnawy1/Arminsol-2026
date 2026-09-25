import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { useI18n } from '../i18n'

function CheckBadge() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 6.5" />
    </svg>
  )
}

export default function Products() {
  const { c } = useI18n()
  const p = c.products
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '40px 0 56px' }}>
        <div className="container">
          <Reveal><h1 className="svc-hero-title" style={{ maxWidth: '18ch' }}>{p.title}</h1></Reveal>
          <Reveal delay={0.06}><p className="body" style={{ marginTop: 28, fontSize: '1.15rem' }}>{p.intro}</p></Reveal>
        </div>
      </section>

      {/* Sticky category rail */}
      <nav className="catnav" aria-label="Product categories">
        <div className="container catnav__inner">
          {p.navCategories.map((cat) => (
            <a key={cat.to} href={cat.to}>{cat.label}</a>
          ))}
        </div>
      </nav>

      {/* Official Distribution Partners */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 26 }}>{p.distributorsLabel}</span></Reveal>
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {p.distributors.map((d, i) => (
              <Reveal key={d.name} delay={0.05 + i * 0.06}>
                <div className="partner-card partner-card--lg">
                  <div className="partner-card__head">
                    <img className="partner-card__logo" src={d.logo} alt={d.name} loading="lazy" />
                    <span className="partner-card__badge"><CheckBadge /> {d.status}</span>
                  </div>
                  <p className="body" style={{ maxWidth: 'none', marginTop: 18 }}>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories — alternating image / text */}
      {p.categories.map((cat, i) => {
        const imageFirst = i % 2 === 0
        const image = (
          <Reveal delay={0.05}>
            <img src={cat.image} alt={cat.title} className="card" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
        )
        const useChips = cat.id !== 'tires'
        const text = (
          <div>
            <Reveal><span className="mono" style={{ fontSize: 13, color: 'var(--faint)' }}>{cat.n}</span></Reveal>
            <Reveal delay={0.04}><h2 className="s-head" style={{ marginTop: 10 }}>{cat.title}</h2></Reveal>
            {cat.para && <Reveal delay={0.08}><p className="body" style={{ marginTop: 18 }}>{cat.para}</p></Reveal>}
            {cat.subLabel && <Reveal delay={0.1}><p className="mono" style={{ marginTop: 22, marginBottom: 0, fontSize: 13, color: 'var(--faint)' }}>{cat.subLabel}</p></Reveal>}
            <Reveal delay={0.12}>
              {useChips ? (
                <div className="chips" style={{ marginTop: 14 }}>
                  {cat.sub.map((s) => <span className="chip" key={s} style={{ fontSize: 14, padding: '9px 16px' }}>{s}</span>)}
                </div>
              ) : (
                <ul className="flist" style={{ marginTop: 14 }}>
                  {cat.sub.map((s) => <li className="flist__item" key={s}>{s}</li>)}
                </ul>
              )}
            </Reveal>
            {cat.note && <Reveal delay={0.14}><p className="mono" style={{ marginTop: 20, fontSize: 12.5, color: 'var(--faint)' }}>{cat.note}</p></Reveal>}
          </div>
        )
        return (
          <section className="svc-section cat-anchor" id={cat.id} key={cat.id}>
            <div className="container split" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'center' }}>
              {imageFirst ? <>{image}{text}</> : <>{text}{image}</>}
            </div>
          </section>
        )
      })}

      {/* Custom Sourcing CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="strata"><span /><span /><span /><span /><span /><span /></div>
              <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
                <h2 className="s-head">{p.customLabel}</h2>
                <p className="body" style={{ marginTop: 18 }}>{p.customCopy}</p>
                <Link to="/contact" className="btn btn--gold" style={{ marginTop: 28 }}>{p.customCta} <Arrow /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
