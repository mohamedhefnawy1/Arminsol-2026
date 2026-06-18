import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { useI18n } from '../i18n'

const field = {
  width: '100%',
  background: 'color-mix(in srgb, var(--text) 4%, transparent)',
  border: '1px solid var(--line-strong)',
  borderRadius: 8,
  color: 'var(--text)',
  padding: '15px 16px',
  fontFamily: 'inherit',
  fontSize: 16,
  outline: 'none',
}

export default function Contact() {
  const { c } = useI18n()
  const f = c.contact.form
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) } // demo only — no backend wired up

  return (
    <section style={{ padding: '80px 0 100px' }}>
      <div className="container">
        {/* header */}
        <Reveal><h1 className="display">{c.contact.title}</h1></Reveal>
        <Reveal delay={0.05}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.2rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.18, marginTop: 24, maxWidth: 1100 }}>
            {c.contact.subtitle}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, border: '1px solid var(--line-strong)', borderRadius: 999, padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
            <span className="live-dot" />
            {c.contact.sourcing}
          </span>
        </Reveal>

        {/* form + channels */}
        <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: 64, marginTop: 64, alignItems: 'start' }}>
          {/* form */}
          <Reveal delay={0.05}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} style={{ border: '1px solid var(--line-strong)', borderRadius: 12, padding: '56px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 40 }}>✓</div>
                <h3 style={{ marginTop: 12, fontWeight: 500 }}>{c.contact.sentTitle}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8, maxWidth: 420, marginInline: 'auto' }}>{c.contact.sentBody}</p>
                <button className="btn btn--center" style={{ marginTop: 20, marginInline: 'auto' }} onClick={() => setSent(false)}>{c.contact.sendAnother}</button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input style={field} placeholder={f.first} required />
                  <input style={field} placeholder={f.last} required />
                </div>
                <input style={field} type="email" placeholder={f.email} required />
                <input style={field} placeholder={f.company} />
                <textarea style={{ ...field, minHeight: 160, resize: 'vertical' }} placeholder={f.message} required />
                <button type="submit" className="btn">{f.send} <Arrow /></button>
              </form>
            )}
          </Reveal>

          {/* channels */}
          <Reveal delay={0.1}>
            <div>
              {c.contact.channels.map((ch) => (
                <div key={ch.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderTop: '1px solid var(--line)' }}>
                  <span style={{ color: 'var(--muted)' }}>{ch.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>{ch.handle}</span>
                </div>
              ))}
              <div style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--muted)' }}>
                <a href={`mailto:${c.email}`} style={{ display: 'block', direction: 'ltr' }}>{c.email}</a>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} style={{ display: 'block', marginTop: 6, direction: 'ltr' }}>{c.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
