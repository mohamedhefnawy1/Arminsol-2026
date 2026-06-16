import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { useI18n } from '../i18n'

export default function Products() {
  const { c } = useI18n()
  return (
    <>
      <section style={{ padding: '80px 0 56px' }}>
        <div className="container">
          <Reveal><h1 className="display">{c.productsTitle}</h1></Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="prodgrid">
            {c.products.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <Link to="/contact" className="prodcard">
                  <img className="prodcard__media" src={p.image} alt={p.title} loading="lazy" />
                  <div className="prodcard__title">{p.title}</div>
                  <div className="prodcard__date">{p.date}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
