import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { useI18n } from '../i18n'

export default function Services() {
  const { c } = useI18n()
  return (
    <>
      <section style={{ padding: '80px 0 48px' }}>
        <div className="container">
          <Reveal><h1 className="display">{c.servicesTitle}</h1></Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: 32 }}>
        <div className="container grid grid-3">
          {c.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link to={s.to}>
                <motion.article className="card" whileHover={{ y: -6 }}>
                  <img src={s.image} alt={s.title} className="media" style={{ borderRadius: 0 }} loading="lazy" />
                  <div style={{ padding: '22px 22px 26px' }}>
                    <p className="eyebrow" style={{ margin: 0 }}>{c.label.latestPost}</p>
                    <h3 style={{ fontSize: '1.5rem', margin: '12px 0 6px', fontWeight: 500 }}>{s.title}</h3>
                    <p className="row__meta">{s.date}</p>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
