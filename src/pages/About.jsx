import Reveal from '../components/Reveal'
import { useI18n, Highlight } from '../i18n'

export default function About() {
  const { c } = useI18n()
  const a = c.about
  return (
    <>
      {/* Page hero */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <Reveal><h1 className="display">{a.title}</h1></Reveal>
        </div>
      </section>

      {/* Who We Are — text beside image */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal><span className="eyebrow">{a.whoLabel}</span></Reveal>
            <Reveal delay={0.05}><p className="statement" style={{ marginTop: 26 }}>{a.whoLede}</p></Reveal>
            <Reveal delay={0.1}>
              <p className="body" style={{ marginTop: 26 }}>
                <Highlight text={a.whoSince} mark={a.sinceMark} />
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body" style={{ marginTop: '1.1em' }}>{a.who2a} {a.who2b}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img src={c.aboutImage} alt="ARMINSOL operations" className="card" style={{ width: '100%', aspectRatio: '374 / 420', objectFit: 'cover' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision — two side-by-side cards */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <Reveal>
              <div className="card" style={{ padding: '34px 32px', height: '100%' }}>
                <span className="eyebrow" style={{ marginBottom: 20 }}>{a.missionLabel}</span>
                <p className="body" style={{ maxWidth: 'none' }}>{a.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="card" style={{ padding: '34px 32px', height: '100%' }}>
                <span className="eyebrow" style={{ marginBottom: 20 }}>{a.visionLabel}</span>
                <p className="body" style={{ maxWidth: 'none' }}>{a.vision}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Identity — mineral spectrum */}
      <section className="section">
        <div className="container split" style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Reveal><span className="eyebrow">{a.identityLabel}</span></Reveal>
            <Reveal delay={0.05}>
              <p className="statement" style={{ marginTop: 24 }}>{a.identityLine}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="logogrid">
                {c.logoColors.map((col) => (
                  <div key={col.name} className="logogrid__item">
                    <span className="logogrid__dot" style={{ background: col.color }} />
                    {col.name}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img src={c.logoImage} alt="ARMINSOL logo" style={{ width: '100%', maxWidth: 300, margin: '0 auto' }} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Brands We Carry */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 26 }}>{a.brandsLabel}</span></Reveal>
          <Reveal delay={0.05}><p className="body" style={{ marginBottom: 32 }}>{a.brandsLine}</p></Reveal>
          <Reveal delay={0.1}>
            <div className="brandwall">
              {a.brands.map((b) => {
                const logo = c.brandLogoByName[b]
                return (
                  <div className="brandwall__cell" key={b}>
                    {logo
                      ? <img src={logo} alt={b} loading="lazy" />
                      : <span className="brandwall__name">{b}</span>}
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Clients */}
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow" style={{ marginBottom: 26 }}>{a.clientsLabel}</span></Reveal>
          <Reveal delay={0.05}><p className="statement">{a.clientsLine}</p></Reveal>
          <Reveal delay={0.1}>
            <div className="chips" style={{ marginTop: 32 }}>
              {c.home.trustedList.map((n) => <span className="chip" key={n} style={{ fontSize: 15, padding: '10px 20px' }}>{n}</span>)}
              <span className="chip" style={{ fontSize: 15, padding: '10px 20px', color: 'var(--faint)', borderStyle: 'dashed' }}>{c.home.trustedNote}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="section">
        <div className="container">
          <Reveal><h2 className="h-cta" style={{ maxWidth: 900 }}>{a.closing}</h2></Reveal>
        </div>
      </section>
    </>
  )
}
