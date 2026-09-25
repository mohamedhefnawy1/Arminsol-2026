import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'

// Preferred production domain (canonical). Update if the custom domain changes.
const SITE = 'https://arminsol.com.sa'
const KEY_BY_PATH = { '/': 'home', '/products': 'products', '/about': 'about', '/services': 'services', '/contact': 'contact' }

function upsert(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  return el
}
function meta(attr, name, content) {
  const el = upsert(`meta[${attr}="${name}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, name); return m })
  el.setAttribute('content', content)
}
function link(rel, href, hreflang) {
  const sel = hreflang ? `link[rel="alternate"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`
  const el = upsert(sel, () => { const l = document.createElement('link'); l.setAttribute('rel', rel); if (hreflang) l.setAttribute('hreflang', hreflang); return l })
  el.setAttribute('href', href)
}

export default function Meta() {
  const { pathname } = useLocation()
  const { c, lang } = useI18n()
  useEffect(() => {
    const key = KEY_BY_PATH[pathname] || 'home'
    const m = c.meta[key]
    if (!m) return
    const url = SITE + (pathname === '/' ? '' : pathname)
    document.title = m.title
    meta('name', 'description', m.desc)
    meta('property', 'og:title', m.title)
    meta('property', 'og:description', m.desc)
    meta('property', 'og:url', url)
    meta('property', 'og:type', 'website')
    meta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US')
    meta('name', 'twitter:card', 'summary_large_image')
    link('canonical', url)
    // Both languages share a URL (single-page toggle); declare availability.
    link('alternate', url, 'en')
    link('alternate', url, 'ar')
    link('alternate', url, 'x-default')
  }, [pathname, lang, c])

  // Organization schema — injected once.
  useEffect(() => {
    if (document.getElementById('ld-org')) return
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'ld-org'
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Arabian Mining Solutions Trading Est.',
      alternateName: 'Arminsol',
      url: SITE,
      logo: SITE + '/img/logo-fan.webp',
      email: 'info@arminsol.com.sa',
      telephone: '+966569773001',
      foundingDate: '2016',
      address: { '@type': 'PostalAddress', streetAddress: '2 (B) St., 7770 Al Faiha, Unit 2', addressLocality: 'Dammam', postalCode: '32442-3725', addressCountry: 'SA' },
      areaServed: 'SA',
      sameAs: ['https://www.linkedin.com/company/arabian-mining-solutions-trading-est/'],
    })
    document.head.appendChild(s)
  }, [])

  return null
}
