// Content + asset URLs extracted from the live Framer site.
// Images are served from Framer's CDN (framerusercontent.com).

const IMG = 'https://framerusercontent.com/images/'

export const site = {
  name: 'ARMINSOL Trading',
  legalName: 'Arab Mining Solutions Trading EST.',
  tagline: 'Leading Partner In Mining Solutions',
  email: 'info@arminsol.com.sa',
  phone: '+966 56 977 3001',
  flame: IMG + 'GBSIFN1OQOp4q8fgwlTZGwXPRPY.png',
  socials: [
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'Twitter', href: 'https://twitter.com/stfnco' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
}

export const nav = [
  { label: 'products', to: '/products' },
  { label: 'about', to: '/about' },
  { label: 'services', to: '/services' },
  { label: 'contact', to: '/contact' },
]

// Home product-category cards (row of photo cards)
export const productCategories = [
  { title: 'Blast Hole Drilling', image: IMG + 'vlnLzekFamjd2yiTHUYWCj90aA.png' },
  { title: 'Diamond Core Drilling', image: IMG + 'x1zh9hyHPtdJOX0HHHvuA2kdOfc.png' },
  { title: 'Saftey Items', image: IMG + '6CZde9nwY6EyNbMKJ93Gxi8tKA.png' },
  { title: 'Spare Parts', image: IMG + 'r9UZLHdymrfghrsStLz4j9VMXM.png' },
  { title: 'OTR Tire', image: IMG + '2cFssqV4CVSbhWNwdIE7Lh5N8.png' },
]

// Brand logos — static grid ("brands we carry")
export const brands = [
  IMG + 'NpznnLa9gWZEywFxT2dgRZGRMw.png',
  IMG + 'YPIca3bwA9HIXasyOSz5Z0Z1s.png',
  IMG + 'uRudE9VDVxafLkcb7hc0H3EiAKc.png',
  IMG + 'f5jmwdvkkg42wCUCh7nZlVz2k.png',
  IMG + '1lcN9rtlGJfm9u4hqLGCQFupF0c.png',
  IMG + 'vtkvA8FSrJScNBhGOsVIJinbXck.png',
  IMG + 'madyZmSxJDW6g5MSSvrgzueuBjw.png',
  IMG + 'XLOrYjbJ6BcIHi3COX6rexR1m5o.png',
  IMG + 'vPj1CzKD65m521pKqRwAoqkGAwQ.png',
]

export const aboutImage = IMG + 'RlLwH3R7MGaysWyXzyNtASQwg.png'

export const aboutText =
  'ARMINSOL Est. is a leading partner in providing companies in Saudi Arabia, Egypt and other GCC countries with solutions like tires, parts, tools and technical support.'

// Home services rows (thumbnail revealed on hover)
export const homeServices = [
  { title: 'Tire Management', date: 'Apr 8, 2022', image: IMG + 'klkGqehQSUr9N4OTaEBiG89xcLU.png' },
  { title: 'Operational Consultancy', date: 'Mar 15, 2022', image: IMG + 'Q9J5HZMI2kQVNIFWFypHvgOyFtY.png' },
  { title: 'Stemming Caps', date: 'Feb 28, 2022', image: IMG + '66QNAFzh5QCl7uwcH6BVYIs6Ilw.png' },
]

export const ctaText =
  'We are open to new service partners, feel free to email us to see how can we provide for you.'

// ---- Products page ----
export const products = [
  { title: 'OTR Tire', date: 'Apr 8, 2022' },
  { title: 'TBR TIre', date: 'Apr 8, 2022' },
  { title: 'Spare Parts', date: 'Apr 8, 2022' },
  { title: 'Safety Items', date: 'Apr 8, 2022' },
  { title: 'Blast Hole Drilling', date: 'Apr 8, 2022' },
  { title: 'Diamond Core Drilling', date: 'Apr 8, 2022' },
  { title: 'Core Tray - Chip Box', date: 'Apr 8, 2022' },
  { title: 'Stemming Caps', date: 'Apr 8, 2022' },
]

// ---- About page ----
export const aboutStats = [
  { label: 'Founded in', value: '2016' },
  { label: 'Headquarters', value: 'Saudi Arabia' },
  { label: 'Long term partners', value: '50+' },
]
export const aboutBanner = IMG + 'czJ3frGeHWo35okdsmyIOE0DEyE.png'
export const aboutDetails =
  'We assist Mining, Quarrying, Construction and Industrial companies with import of spare-parts, tires, rock drilling tools, blasting caps, carbon steel, safety items, uniforms and many more.'
export const solutions = [
  { period: '2022 — 2026', client: 'ABC Mining', location: 'Saudi Arabia', detail: 'Oversaw the entire safety item equipment program for the project' },
  { period: '2024 — 2026', client: 'XYZ Industrial Solutions', location: 'Egypt', detail: 'Supplied carbon steel frames for completed and ongoing projects' },
  { period: '2021 — 2026', client: 'ABC Corporation', location: 'Saudi Arabia', detail: 'Collaborated with cross-functional teams to design and develop innovative products.' },
]
export const logoColors = [
  { name: 'Gold', color: 'var(--c-gold)' },
  { name: 'Copper', color: 'var(--c-copper)' },
  { name: 'Lime', color: 'var(--c-lime)' },
  { name: 'Bauxite', color: 'var(--c-bauxite)' },
  { name: 'Silver', color: 'var(--c-silver)' },
  { name: 'Phosphates', color: 'var(--c-phosphates)' },
]
export const logoImage = IMG + 'kL9z3kkL9we3XO6U3lIAPQChNms.png'

// ---- Services page ----
export const services = [
  { title: 'Tire Management', date: 'Mar 15, 2022', image: IMG + 'yUIR6H1xxwg9sTqEXsireDEfq8.png' },
  { title: 'Operational Consultancy', date: 'Mar 15, 2022', image: IMG + 'arQufLwQnQeVXfr48At8IdbBPyc.png' },
  { title: 'Stemming Caps', date: 'Mar 15, 2022', image: IMG + 'FwpIcYomP4Z6kBvJli8dOezs.png' },
]

// ---- Contact page ----
export const contactChannels = [
  { label: 'Linked In', handle: '@Arminsol' },
  { label: 'instagram', handle: '@Arminsol' },
  { label: 'tiktok', handle: '@Arminsol' },
  { label: 'youtube', handle: '@Arminsol' },
]
