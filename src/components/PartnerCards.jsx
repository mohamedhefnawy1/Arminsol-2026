import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Arrow from './Arrow'
import CheckBadge from './CheckBadge'
import { useI18n } from '../i18n'

/** Official-partner cards (Home, Products, About): logo, badge, one line, "Learn More".
 *  `to` opens a page on this site; `href` opens the manufacturer's website in a new tab. */
export default function PartnerCards({ items, large }) {
  const { c } = useI18n()
  return (
    <div className="partner-grid">
      {items.map((d, i) => (
        <Reveal key={d.name} delay={0.05 + i * 0.06}>
          <div className={large ? 'partner-card partner-card--lg' : 'partner-card'}>
            <div className="partner-card__head">
              <img className="partner-card__logo" src={d.logo} alt={d.name} loading="lazy" />
              <span className="partner-card__badge"><CheckBadge /> {d.status}</span>
            </div>
            <p className="body" style={{ maxWidth: 'none', marginTop: large ? 18 : 20 }}>{d.desc || d.body}</p>
            {d.to && <Link to={d.to} className="ocard__more partner-card__more">{c.ui.learnMore} <Arrow size={16} /></Link>}
            {d.href && (
              <a href={d.href} target="_blank" rel="noopener noreferrer" className="ocard__more partner-card__more" aria-label={`${c.ui.learnMore} — ${d.name}`}>
                {c.ui.learnMore} <Arrow size={16} />
              </a>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
