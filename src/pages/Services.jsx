import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { useI18n } from '../i18n'

const ico = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', width: 34, height: 34, viewBox: '0 0 24 24', 'aria-hidden': true }
const ICONS = {
  tire: <svg {...ico}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="M12 3v2.8M12 18.2V21M3 12h2.8M18.2 12H21M5.7 5.7l2 2M16.3 16.3l2 2M18.3 5.7l-2 2M7.7 16.3l-2 2" /></svg>,
  wrench: <svg {...ico}><path d="M14.2 6.3a4.2 4.2 0 0 0-5.6 5.2L3 17.1a2 2 0 1 0 2.9 2.9l5.6-5.6a4.2 4.2 0 0 0 5.2-5.6l-2.6 2.6-2.5-.7-.7-2.5z" /></svg>,
  loader: <svg {...ico}><path d="M3 17h13M3 17v-4h9l2-4h3v8M3 17a2 2 0 1 0 4 0M12 17a2 2 0 1 0 4 0" /><path d="M21 13h-1" /></svg>,
  compass: <svg {...ico}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg>,
  headset: <svg {...ico}><path d="M4 13a8 8 0 0 1 16 0" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a3 3 0 0 1-3 3h-3" /></svg>,
  sliders: <svg {...ico}><path d="M4 8h10M18 8h2M4 16h4M12 16h8" /><circle cx="16" cy="8" r="2" /><circle cx="10" cy="16" r="2" /></svg>,
  globe: <svg {...ico}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" /></svg>,
}

function Card({ it }) {
  return (
    <div className="card svccard">
      <span className="svcico">{ICONS[it.icon]}</span>
      <h3>{it.title}</h3>
      {it.desc && <p>{it.desc}</p>}
      {it.bullets && <ul>{it.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
    </div>
  )
}

export default function Services() {
  const { c } = useI18n()
  const s = c.services
  const priority = s.items.filter((it) => it.priority)
  const rest = s.items.filter((it) => !it.priority)
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '40px 0 56px' }}>
        <div className="container">
          <Reveal><h1 className="svc-hero-title" style={{ maxWidth: '16ch' }}>{s.title}</h1></Reveal>
          <Reveal delay={0.06}><p className="body" style={{ marginTop: 28, fontSize: '1.15rem' }}>{s.intro}</p></Reveal>
        </div>
      </section>

      {/* Priority services */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 34 }}>{s.priorityLabel}</span></Reveal>
          <div className="grid grid-3" style={{ gap: 24 }}>
            {priority.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 0.06}><Card it={it} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* More services — labeled group, one uniform row of four */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 34 }}>{s.moreLabel}</span></Reveal>
          <div className="svcgrid">
            {rest.map((it, i) => (
              <Reveal key={it.title} delay={(i % 4) * 0.06}><Card it={it} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal><h2 className="h-cta" style={{ maxWidth: 900 }}>{s.finalTitle}</h2></Reveal>
          <Reveal delay={0.05}>
            <Link to="/contact" className="btn btn--gold" style={{ marginTop: 32 }}>{s.finalCta} <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
