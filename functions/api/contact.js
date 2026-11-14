// Cloudflare Pages Function — POST /api/contact
// Receives the inquiry form (multipart, optional file) and emails it via Resend.
//
// Required env vars (set in Cloudflare Pages → Settings → Environment variables):
//   RESEND_API_KEY   your Resend API key
//   CONTACT_FROM     a verified sender, e.g. "Arminsol Website <website@arminsol.com.sa>"
// Optional:
//   CONTACT_TO       recipient (default: info@arminsol.com.sa)

const MAX_FILE = 8 * 1024 * 1024 // 8 MB

const esc = (s = '') => String(s).replace(/[<>&]/g, (m) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[m]))
const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } })

export async function onRequestPost({ request, env }) {
  let form
  try {
    form = await request.formData()
  } catch {
    return json({ ok: false, error: 'invalid_form' }, 400)
  }

  // Honeypot: silently accept (do not email) so bots think they succeeded.
  if (form.get('_hp')) return json({ ok: true })

  const name = (form.get('name') || '').toString().trim()
  const email = (form.get('email') || '').toString().trim()
  const company = (form.get('company') || '').toString().trim()
  const phone = (form.get('phone') || '').toString().trim()
  const inquiry = (form.get('inquiry') || '').toString().trim()
  const product = (form.get('product') || '').toString().trim()
  const message = (form.get('message') || '').toString().trim()

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: 'validation' }, 422)
  }

  // Optional attachment → base64 for Resend
  const attachments = []
  const file = form.get('attachment')
  if (file && typeof file === 'object' && file.size) {
    if (file.size > MAX_FILE) return json({ ok: false, error: 'file_too_large' }, 413)
    const buf = new Uint8Array(await file.arrayBuffer())
    let bin = ''
    for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i])
    attachments.push({ filename: file.name || 'attachment', content: btoa(bin) })
  }

  const to = env.CONTACT_TO || 'info@arminsol.com.sa'
  const from = env.CONTACT_FROM
  const key = env.RESEND_API_KEY
  if (!key || !from) {
    // Not configured yet — report clearly so the deploy owner can set the vars.
    return json({ ok: false, error: 'not_configured' }, 501)
  }

  const rows = [
    ['Name', name], ['Company', company], ['Email', email], ['Phone', phone],
    ['Inquiry type', inquiry], ['Product', product],
  ].filter(([, v]) => v)
  const html = `
    <h2 style="margin:0 0 12px;font-family:Arial,sans-serif">New website inquiry</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${esc(k)}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`).join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website inquiry${inquiry ? ` — ${inquiry}` : ''} — ${name}`,
        html,
        attachments: attachments.length ? attachments : undefined,
      }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      return json({ ok: false, error: 'send_failed', detail: detail.slice(0, 300) }, 502)
    }
    return json({ ok: true })
  } catch (e) {
    return json({ ok: false, error: 'network' }, 502)
  }
}
