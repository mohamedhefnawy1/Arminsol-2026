import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Arrow from './Arrow'
import { useI18n } from '../i18n'

// "Start the conversation" band — large left heading + centered outlined button.
// `eyebrow` is a label key: 'start' (default) or 'sayHello'.
export default function CTA({ eyebrow = 'start' }) {
  const { c } = useI18n()
  return (
    <section className="section">
      <div className="container">
        <Reveal><span className="eyebrow">{c.label[eyebrow]}</span></Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-cta" style={{ maxWidth: 1050, marginTop: 28 }}>{c.ctaText}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Link to="/contact" className="btn btn--center">
              {c.getInTouch} <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
