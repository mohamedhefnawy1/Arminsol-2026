import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import CheckBadge from '../components/CheckBadge'
import CategorySection from '../components/CategorySection'
import { useI18n } from '../i18n'

export default function Products() {
  const { c } = useI18n()
  const p = c.products
  // One continuous list: Arminsol's own categories, then the Normet lines.
  // Normet parts & services are covered by the Spare Parts category, so they are not repeated.
  const categories = [...p.categories, ...c.normet.categories.filter((cat) => cat.id !== 'normet-parts-services')]
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
          <div className="partner-grid">
            {p.distributors.map((d, i) => (
              <Reveal key={d.name} delay={0.05 + i * 0.06}>
                <div className="partner-card partner-card--lg">
                  <div className="partner-card__head">
                    <img className="partner-card__logo" src={d.logo} alt={d.name} loading="lazy" />
                    <span className="partner-card__badge"><CheckBadge /> {d.status}</span>
                  </div>
                  <p className="body" style={{ maxWidth: 'none', marginTop: 18 }}>{d.desc}</p>
                  {d.to && <Link to={d.to} className="ocard__more partner-card__more">{c.ui.learnMore} <Arrow size={16} /></Link>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories — alternating image / text */}
      {categories.map((cat, i) => (
        <CategorySection key={cat.id} cat={{ ...cat, n: String(i + 1).padStart(2, '0') }} imageFirst={i % 2 === 0} />
      ))}

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
