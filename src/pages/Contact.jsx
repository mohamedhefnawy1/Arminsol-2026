import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { LinkedIn } from '../components/icons'
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
}

const MAX_FILE = 8 * 1024 * 1024 // 8 MB

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.5-.6c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z" />
    </svg>
  )
}

export default function Contact() {
  const { c } = useI18n()
  const t = c.contact
  const f = t.form
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [fileName, setFileName] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    // honeypot — if filled, silently succeed (bot)
    if (form.elements._hp && form.elements._hp.value) { setStatus('sent'); return }
    const file = form.elements.attachment?.files?.[0]
    if (file && file.size > MAX_FILE) { setStatus('error'); return }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) })
      if (!res.ok) throw new Error('bad status ' + res.status)
      setStatus('sent')
      form.reset()
      setFileName('')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section style={{ padding: '40px 0 56px' }}>
      <div className="container">
        <Reveal><h1 className="display">{t.title}</h1></Reveal>
        <Reveal delay={0.05}><p className="body" style={{ marginTop: 22, fontSize: '1.15rem' }}>{t.subtitle}</p></Reveal>

        <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.9fr', gap: 64, marginTop: 56, alignItems: 'start' }}>
          {/* form */}
          <Reveal delay={0.05}>
            {status === 'sent' ? (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="card" style={{ border: '1px solid var(--line-strong)', borderRadius: 12, padding: '56px 24px', textAlign: 'center' }}>
                <div style={{ color: 'var(--accent)', fontSize: 40, lineHeight: 1 }}>✓</div>
                <h3 style={{ marginTop: 14, fontWeight: 500 }}>{t.sentTitle}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8, maxWidth: 420, marginInline: 'auto' }}>{t.sentBody}</p>
                <button className="btn btn--center" style={{ marginTop: 22, marginInline: 'auto' }} onClick={() => setStatus('idle')}>{t.sendAnother}</button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="split">
                  <input name="name" style={field} placeholder={f.name} aria-label={f.name} required autoComplete="name" />
                  <input name="company" style={field} placeholder={f.company} aria-label={f.company} autoComplete="organization" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="split">
                  <input name="email" style={field} type="email" placeholder={f.email} aria-label={f.email} required autoComplete="email" />
                  <input name="phone" style={field} type="tel" placeholder={f.phone} aria-label={f.phone} autoComplete="tel" />
                </div>
                <select name="inquiry" style={{ ...field, appearance: 'none', cursor: 'pointer' }} aria-label={f.inquiry} defaultValue="" required>
                  <option value="" disabled>{f.inquiry}</option>
                  {f.inquiryOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <textarea name="message" style={{ ...field, minHeight: 150, resize: 'vertical' }} placeholder={f.message} aria-label={f.message} required />

                <label className="filefield">
                  <input name="attachment" type="file" aria-label={f.attach} accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg,.webp" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
                  <span className="filefield__btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.5l-8.5 8.5a5 5 0 0 1-7-7L14 5.5a3.3 3.3 0 0 1 4.7 4.7l-9 9a1.7 1.7 0 0 1-2.4-2.4l8-8" /></svg>
                    {fileName || f.attach}
                  </span>
                  <span className="filefield__hint">{f.attachHint}</span>
                </label>

                {/* honeypot (hidden from users) — visually-hidden clip technique so it
                    doesn't extend the scroll area (left:-9999px breaks RTL horizontal layout) */}
                <input name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)', border: 0, whiteSpace: 'nowrap' }} />

                {status === 'error' && (
                  <div role="alert" style={{ border: '1px solid var(--line-strong)', borderInlineStart: '3px solid var(--accent)', borderRadius: 8, padding: '14px 16px' }}>
                    <strong style={{ display: 'block', fontWeight: 600 }}>{t.errorTitle}</strong>
                    <span style={{ color: 'var(--muted)', fontSize: 15 }}>{t.errorBody}</span>
                  </div>
                )}

                <button type="submit" className="btn btn--gold" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? f.sending : f.send} <Arrow />
                </button>
              </form>
            )}
          </Reveal>

          {/* info */}
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 20 }}>{t.infoLabel}</span>
              <div style={{ color: 'var(--text)', fontSize: '1.2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>{t.name}</div>
              <p className="body" style={{ marginTop: 10, fontSize: 15 }}>{t.addr}</p>
              <div className="contact-rows">
                <div><span>{t.phoneLabel}</span><a href={`tel:${t.phone?.replace?.(/\s/g, '') || '+966569773001'}`} className="contact-link" style={{ direction: 'ltr', color: 'var(--accent)' }}>{c.phone}</a></div>
                <div><span>{t.emailLabel}</span><a href={`mailto:${c.email}`} className="contact-link" style={{ color: 'var(--accent)' }}>{c.email}</a></div>
                <div><span>{t.webLabel}</span><a href={`https://${t.web}`} target="_blank" rel="noreferrer" className="contact-link" style={{ direction: 'ltr' }}>{t.web}</a></div>
              </div>
              <a href={c.whatsapp} target="_blank" rel="noreferrer" className="btn btn--whatsapp" style={{ marginTop: 24 }}>
                <WhatsAppIcon /> {t.whatsappLabel}
              </a>
              <div style={{ marginTop: 20 }}>
                <a href={c.linkedin} target="_blank" rel="noreferrer" aria-label={t.linkedinLabel} className="social" style={{ color: 'var(--muted)', display: 'inline-flex' }}><LinkedIn /></a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* map */}
        <Reveal delay={0.1}>
          <div style={{ marginTop: 56 }}>
            <span className="eyebrow" style={{ marginBottom: 18 }}>{t.mapLabel}</span>
            <iframe
              className="mapframe"
              title={t.mapLabel}
              src="https://www.google.com/maps?q=Al%20Faiha%2C%20Dammam%2032442%2C%20Saudi%20Arabia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
