import Reveal from './Reveal'

/** Call-to-action banner: a photo with the heading, copy and buttons on a liquid-glass panel. */
export default function GlassCTA({ image, title, copy, children }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="sourcing">
            <div className="strata"><span /><span /><span /><span /><span /><span /></div>
            <div className="sourcing__stage">
              <img className="sourcing__img" src={image} alt="" loading="lazy" />
              <div className="sourcing__glass">
                <h2 className="s-head">{title}</h2>
                {copy && <p className="sourcing__copy">{copy}</p>}
                <div className="sourcing__actions">{children}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
