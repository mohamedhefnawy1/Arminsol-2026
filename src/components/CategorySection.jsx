import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Arrow from './Arrow'

/** Alternating image / text block used for product categories (Products, Normet). */
export default function CategorySection({ cat, imageFirst }) {
  const image = (
    <Reveal delay={0.05} className="catsplit__media">
      <img src={cat.image} alt={cat.title} className="card" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }} loading="lazy" />
    </Reveal>
  )
  const text = (
    <div>
      <Reveal><span className="mono" style={{ fontSize: 13, color: 'var(--faint)' }}>{cat.n}</span></Reveal>
      <Reveal delay={0.04}><h2 className="s-head" style={{ marginTop: 10 }}>{cat.title}</h2></Reveal>
      {cat.para && <Reveal delay={0.08}><p className="body" style={{ marginTop: 18 }}>{cat.para}</p></Reveal>}
      {cat.subLabel && <Reveal delay={0.1}><p className="mono" style={{ marginTop: 22, marginBottom: 0, fontSize: 13, color: 'var(--faint)' }}>{cat.subLabel}</p></Reveal>}
      <Reveal delay={0.12}>
        {cat.list ? (
          <ul className="flist" style={{ marginTop: 14 }}>
            {cat.sub.map((s) => <li className="flist__item" key={s}>{s}</li>)}
          </ul>
        ) : (
          <div className="chips" style={{ marginTop: 14 }}>
            {cat.sub.map((s) => <span className="chip" key={s} style={{ fontSize: 14, padding: '9px 16px' }}>{s}</span>)}
          </div>
        )}
      </Reveal>
      {cat.note && <Reveal delay={0.14}><p className="mono" style={{ marginTop: 20, fontSize: 12.5, color: 'var(--faint)' }}>{cat.note}</p></Reveal>}
      {cat.cta && (
        <Reveal delay={0.16}>
          <Link to={cat.cta.to} className="btn" style={{ marginTop: 26 }}>{cat.cta.label} <Arrow /></Link>
        </Reveal>
      )}
    </div>
  )
  return (
    <section className="svc-section cat-anchor" id={cat.id}>
      <div className="container split catsplit" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 56, alignItems: 'center' }}>
        {imageFirst ? <>{image}{text}</> : <>{text}{image}</>}
      </div>
    </section>
  )
}
