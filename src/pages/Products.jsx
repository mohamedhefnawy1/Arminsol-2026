import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { useI18n } from '../i18n'

const slug = (n) => `cat-${n}`

export default function Products() {
  const { c } = useI18n()
  const p = c.products
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0 44px' }}>
        <div className="container">
          <Reveal><h1 className="svc-hero-title" style={{ maxWidth: '18ch' }}>{p.title}</h1></Reveal>
          <Reveal delay={0.06}><p className="body" style={{ marginTop: 28, fontSize: '1.15rem' }}>{p.intro}</p></Reveal>
        </div>
      </section>

      {/* Sticky category rail — five long sections need a way to jump */}
      <nav className="catnav" aria-label="Product categories">
        <div className="container catnav__inner">
          {p.categories.map((cat) => (
            <a key={cat.n} href={`#${slug(cat.n)}`}>
              <span className="catnav__n">{cat.n}</span>{cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Categories — alternating image / text */}
      {p.categories.map((cat, i) => {
        const imageFirst = i % 2 === 0
        const image = (
          <Reveal delay={0.05}>
            <img src={c.categoryImages[i]} alt={cat.title} className="card" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
        )
        const text = (
          <div>
            <Reveal><span className="mono" style={{ fontSize: 13, color: 'var(--faint)' }}>{cat.n}</span></Reveal>
            <Reveal delay={0.04}><h2 className="s-head" style={{ marginTop: 10 }}>{cat.title}</h2></Reveal>
            {cat.para && <Reveal delay={0.08}><p className="body" style={{ marginTop: 20 }}>{cat.para}</p></Reveal>}
            {cat.para2 && <Reveal delay={0.1}><p className="callout" style={{ marginTop: 20 }}>{cat.para2}</p></Reveal>}
            {cat.note && <Reveal delay={0.11}><p className="mono" style={{ marginTop: 24, marginBottom: 0, fontSize: 13, color: 'var(--faint)' }}>{cat.note}</p></Reveal>}
            <Reveal delay={0.12}>
              <ul className="flist" style={{ marginTop: cat.note ? 12 : 24 }}>
                {cat.bullets.map((b) => <li className="flist__item" key={b}>{b}</li>)}
              </ul>
            </Reveal>
          </div>
        )
        return (
          <section className="svc-section cat-anchor" id={slug(cat.n)} key={cat.title}>
            <div className="container split" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'center' }}>
              {imageFirst ? <>{image}{text}</> : <>{text}{image}</>}
            </div>
          </section>
        )
      })}

      {/* Custom Sourcing call-out */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="strata"><span /><span /><span /><span /><span /><span /></div>
              <div style={{ padding: 'clamp(32px, 5vw, 56px)' }}>
                <h2 className="s-head">{p.customLabel}</h2>
                <p className="body" style={{ marginTop: 18 }}>{p.custom1}</p>
                <p className="body" style={{ marginTop: 8 }}>{p.custom2}</p>
                <Link to="/contact" className="btn btn--gold" style={{ marginTop: 30 }}>{c.ui.requestQuote} <Arrow /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
