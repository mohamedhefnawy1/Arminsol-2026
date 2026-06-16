import { createContext, useContext, useEffect, useState } from 'react'

const IMG = 'https://framerusercontent.com/images/'

// ---- shared (non-text) assets ----
const assets = {
  flame: IMG + 'GBSIFN1OQOp4q8fgwlTZGwXPRPY.png',
  email: 'info@arminsol.com.sa',
  phone: '+966 56 977 3001',
  socials: [
    { key: 'YouTube', href: 'https://youtube.com' },
    { key: 'Twitter', href: 'https://twitter.com/stfnco' },
    { key: 'Instagram', href: 'https://instagram.com' },
  ],
  productImages: [
    IMG + 'vlnLzekFamjd2yiTHUYWCj90aA.png',
    IMG + 'x1zh9hyHPtdJOX0HHHvuA2kdOfc.png',
    IMG + '6CZde9nwY6EyNbMKJ93Gxi8tKA.png',
    IMG + 'r9UZLHdymrfghrsStLz4j9VMXM.png',
    IMG + '2cFssqV4CVSbhWNwdIE7Lh5N8.png',
  ],
  brandLogos: [
    IMG + 'NpznnLa9gWZEywFxT2dgRZGRMw.png',
    IMG + 'YPIca3bwA9HIXasyOSz5Z0Z1s.png',
    IMG + 'uRudE9VDVxafLkcb7hc0H3EiAKc.png',
    IMG + 'f5jmwdvkkg42wCUCh7nZlVz2k.png',
    IMG + '1lcN9rtlGJfm9u4hqLGCQFupF0c.png',
    IMG + 'vtkvA8FSrJScNBhGOsVIJinbXck.png',
    IMG + 'madyZmSxJDW6g5MSSvrgzueuBjw.png',
    IMG + 'XLOrYjbJ6BcIHi3COX6rexR1m5o.png',
    IMG + 'vPj1CzKD65m521pKqRwAoqkGAwQ.png',
  ],
  aboutImage: IMG + 'RlLwH3R7MGaysWyXzyNtASQwg.png',
  aboutBanner: IMG + 'czJ3frGeHWo35okdsmyIOE0DEyE.png',
  logoImage: IMG + 'kL9z3kkL9we3XO6U3lIAPQChNms.png',
  homeServiceImages: [
    IMG + 'klkGqehQSUr9N4OTaEBiG89xcLU.png',
    IMG + 'Q9J5HZMI2kQVNIFWFypHvgOyFtY.png',
    IMG + '66QNAFzh5QCl7uwcH6BVYIs6Ilw.png',
  ],
  serviceImages: [
    IMG + 'yUIR6H1xxwg9sTqEXsireDEfq8.png',
    IMG + 'arQufLwQnQeVXfr48At8IdbBPyc.png',
    IMG + 'FwpIcYomP4Z6kBvJli8dOezs.png',
  ],
  productPageImages: [
    IMG + 'tXPT901QE1WEtKiv3kznvOIJI.png',
    IMG + 'Zet0R2gJxUPUlL1K3yFFM0YRzs.png',
    IMG + 'a7YQiQOeAoW1tCii7OcFJ60GKDY.png',
    IMG + 'Uv18GONXEVyNyD9ECfTGOw2hr6g.png',
    IMG + 'dOMoF8JMmAiW8IdUgm8NLHZ6Wq8.png',
    IMG + 'bks4QSgG3lgBrrB6Ed0T0spxM.png',
    IMG + 'OAdH3nRfiGWHDAbW8b0pOE6XOTo.png',
    IMG + 'SwxdeDTCFIgIDbc9gn2W8aSwN5E.png',
  ],
  logoSwatch: ['var(--c-gold)', 'var(--c-copper)', 'var(--c-lime)', 'var(--c-bauxite)', 'var(--c-silver)', 'var(--c-phosphates)'],
}

// ---- localized strings ----
const S = {
  en: {
    legalName: 'Arab Mining Solutions Trading EST.',
    tagline: 'Leading Partner In Mining Solutions',
    heroTitle: 'Arab Mining Solutions Trading EST.',
    navLabels: ['products', 'about', 'services', 'contact'],
    langName: 'العربية',
    browseProducts: 'Browse Products',
    getInTouch: 'Get In Touch',
    viewCompanyProfile: 'View Company Profile',
    year: '2026',
    productCategory: 'Product Category',
    label: {
      brands: 'brands we carry', about: 'about', services: 'services',
      start: 'start the conversation', sayHello: 'say hello',
      companyDetails: 'Company Details', solutions: 'solutions we provided',
      ourLogo: 'Our Logo', latestPost: 'latest post', menu: 'Menu', social: 'Social',
    },
    ctaText: 'We are open to new service partners, feel free to email us to see how can we provide for you.',
    aboutText: 'ARMINSOL Est. is a leading partner in providing companies in Saudi Arabia, Egypt and other GCC countries with solutions like tires, parts, tools and technical support.',
    productTitles: ['Blast Hole Drilling', 'Diamond Core Drilling', 'Saftey Items', 'Spare Parts', 'OTR Tire'],
    homeServiceTitles: ['Tire Management', 'Operational Consultancy', 'Stemming Caps'],
    homeServiceDates: ['Apr 8, 2022', 'Mar 15, 2022', 'Feb 28, 2022'],
    productsTitle: 'Products',
    productListTitles: ['OTR Tire', 'TBR TIre', 'Spare Parts', 'Safety Items', 'Blast Hole Drilling', 'Diamond Core Drilling', 'Core Tray - Chip Box', 'Stemming Caps'],
    productListDate: 'Apr 8, 2022',
    aboutTitle: 'About Us',
    stats: [
      { label: 'Founded in', value: '2016' },
      { label: 'Headquarters', value: 'Saudi Arabia' },
      { label: 'Long term partners', value: '50+' },
    ],
    aboutDetails: 'We assist Mining, Quarrying, Construction and Industrial companies with import of spare-parts, tires, rock drilling tools, blasting caps, carbon steel, safety items, uniforms and many more.',
    solutions: [
      { period: '2022 — 2026', client: 'ABC Mining', location: 'Saudi Arabia', detail: 'Oversaw the entire safety item equipment program for the project' },
      { period: '2024 — 2026', client: 'XYZ Industrial Solutions', location: 'Egypt', detail: 'Supplied carbon steel frames for completed and ongoing projects' },
      { period: '2021 — 2026', client: 'ABC Corporation', location: 'Saudi Arabia', detail: 'Collaborated with cross-functional teams to design and develop innovative products.' },
    ],
    logoHeading: 'The colours of our logo represent the broad spectrum of our markets',
    logoColorNames: ['Gold', 'Copper', 'Lime', 'Bauxite', 'Silver', 'Phosphates'],
    servicesTitle: 'Services',
    serviceTitles: ['Tire Management', 'Operational Consultancy', 'Stemming Caps'],
    serviceDates: ['Mar 15, 2022', 'Mar 15, 2022', 'Mar 15, 2022'],
    contact: {
      title: 'Get In Touch',
      subtitle: 'To inquire about a product or service, please fill in the form below',
      sourcing: 'Sourcing Available',
      channels: [
        { label: 'Linked In', handle: '@Arminsol' },
        { label: 'Instagram', handle: '@Arminsol' },
        { label: 'TikTok', handle: '@Arminsol' },
        { label: 'YouTube', handle: '@Arminsol' },
      ],
      form: {
        first: 'First name', last: 'Last name', email: 'Email address', company: 'Company',
        inquiry: 'Inquiry type', product: 'Product', service: 'Service', partnership: 'Sourcing / Partnership',
        message: 'Your message', send: 'Send Message',
      },
      sentTitle: "Thanks — we'll be in touch",
      sentBody: "This demo form isn't wired to a backend yet. Connect it to your email service or form provider to receive messages.",
      sendAnother: 'Send another',
    },
    copyright: 'Recreated in React · originally built in Framer',
  },

  ar: {
    legalName: 'مؤسسة الحلول العربية للتعدين والتجارة',
    tagline: 'الشريك الرائد في حلول التعدين',
    heroTitle: 'مؤسسة الحلول العربية للتعدين والتجارة',
    navLabels: ['المنتجات', 'من نحن', 'الخدمات', 'تواصل معنا'],
    langName: 'English',
    browseProducts: 'تصفّح المنتجات',
    getInTouch: 'تواصل معنا',
    viewCompanyProfile: 'عرض ملف الشركة',
    year: '2026',
    productCategory: 'فئة المنتج',
    label: {
      brands: 'العلامات التجارية التي نوفّرها', about: 'من نحن', services: 'الخدمات',
      start: 'لنبدأ المحادثة', sayHello: 'ألقِ التحية',
      companyDetails: 'تفاصيل الشركة', solutions: 'الحلول التي قدّمناها',
      ourLogo: 'شعارنا', latestPost: 'أحدث المنشورات', menu: 'القائمة', social: 'التواصل',
    },
    ctaText: 'نرحّب بشركاء خدمة جدد، فلا تتردّد في مراسلتنا لتعرف كيف يمكننا أن نقدّم لك.',
    aboutText: 'مؤسسة أرمينسول شريك رائد في تزويد الشركات في المملكة العربية السعودية ومصر وسائر دول الخليج بحلولٍ تشمل الإطارات وقطع الغيار والأدوات والدعم الفني.',
    productTitles: ['حفر ثقوب التفجير', 'الحفر الماسي اللُّبّي', 'معدّات السلامة', 'قطع الغيار', 'إطارات المعدّات الثقيلة'],
    homeServiceTitles: ['إدارة الإطارات', 'الاستشارات التشغيلية', 'سدّادات التفجير'],
    homeServiceDates: ['8 أبريل 2022', '15 مارس 2022', '28 فبراير 2022'],
    productsTitle: 'المنتجات',
    productListTitles: ['إطارات المعدّات الثقيلة', 'إطارات الشاحنات', 'قطع الغيار', 'معدّات السلامة', 'حفر ثقوب التفجير', 'الحفر الماسي اللُّبّي', 'صناديق العيّنات اللُّبّية', 'سدّادات التفجير'],
    productListDate: '8 أبريل 2022',
    aboutTitle: 'من نحن',
    stats: [
      { label: 'تأسّست عام', value: '2016' },
      { label: 'المقر الرئيسي', value: 'المملكة العربية السعودية' },
      { label: 'شركاء طويلو الأمد', value: '+50' },
    ],
    aboutDetails: 'نساعد شركات التعدين والمحاجر والإنشاءات والصناعة في استيراد قطع الغيار والإطارات وأدوات حفر الصخور وكبسولات التفجير والصلب الكربوني ومعدّات السلامة والملابس الموحّدة وغيرها الكثير.',
    solutions: [
      { period: '2022 — 2026', client: 'ABC Mining', location: 'المملكة العربية السعودية', detail: 'أشرفنا على كامل برنامج معدّات السلامة للمشروع.' },
      { period: '2024 — 2026', client: 'XYZ Industrial Solutions', location: 'مصر', detail: 'وفّرنا هياكل الصلب الكربوني للمشاريع المنجزة والجارية.' },
      { period: '2021 — 2026', client: 'ABC Corporation', location: 'المملكة العربية السعودية', detail: 'تعاونّا مع فرقٍ متعدّدة التخصّصات لتصميم وتطوير منتجات مبتكرة.' },
    ],
    logoHeading: 'تمثّل ألوان شعارنا الطيف الواسع لأسواقنا',
    logoColorNames: ['ذهب', 'نحاس', 'جير', 'بوكسيت', 'فضّة', 'فوسفات'],
    servicesTitle: 'الخدمات',
    serviceTitles: ['إدارة الإطارات', 'الاستشارات التشغيلية', 'سدّادات التفجير'],
    serviceDates: ['15 مارس 2022', '15 مارس 2022', '15 مارس 2022'],
    contact: {
      title: 'تواصل معنا',
      subtitle: 'للاستفسار عن منتج أو خدمة، يُرجى تعبئة النموذج أدناه',
      sourcing: 'خدمة التوريد متاحة',
      channels: [
        { label: 'لينكدإن', handle: '@Arminsol' },
        { label: 'انستغرام', handle: '@Arminsol' },
        { label: 'تيك توك', handle: '@Arminsol' },
        { label: 'يوتيوب', handle: '@Arminsol' },
      ],
      form: {
        first: 'الاسم الأول', last: 'اسم العائلة', email: 'البريد الإلكتروني', company: 'الشركة',
        inquiry: 'نوع الاستفسار', product: 'منتج', service: 'خدمة', partnership: 'توريد / شراكة',
        message: 'رسالتك', send: 'إرسال الرسالة',
      },
      sentTitle: 'شكرًا — سنتواصل معك',
      sentBody: 'هذا نموذج تجريبي وغير متّصل بخادمٍ بعد. اربطه بخدمة البريد لديك لاستقبال الرسائل.',
      sendAnother: 'إرسال رسالة أخرى',
    },
    copyright: 'أُعيد بناؤه باستخدام React · صُمّم أصلًا في Framer',
  },
}

const routes = ['/products', '/about', '/contact'] // for product list links etc.

function build(lang) {
  const s = S[lang]
  return {
    ...assets,
    lang,
    legalName: s.legalName,
    tagline: s.tagline,
    heroTitle: s.heroTitle,
    langName: s.langName,
    browseProducts: s.browseProducts,
    getInTouch: s.getInTouch,
    viewCompanyProfile: s.viewCompanyProfile,
    year: s.year,
    productCategory: s.productCategory,
    label: s.label,
    ctaText: s.ctaText,
    aboutText: s.aboutText,
    nav: s.navLabels.map((label, i) => ({ label, to: ['/products', '/about', '/services', '/contact'][i] })),
    productCategories: s.productTitles.map((title, i) => ({ title, image: assets.productImages[i] })),
    homeServices: s.homeServiceTitles.map((title, i) => ({ title, date: s.homeServiceDates[i], image: assets.homeServiceImages[i], to: ['/services/tyre-management', '/services/operational-consultancy', '/services/stemming-caps'][i] })),
    products: s.productListTitles.map((title, i) => ({ title, date: s.productListDate, image: assets.productPageImages[i] })),
    productsTitle: s.productsTitle,
    aboutTitle: s.aboutTitle,
    aboutStats: s.stats,
    aboutDetails: s.aboutDetails,
    solutions: s.solutions,
    logoHeading: s.logoHeading,
    logoColors: s.logoColorNames.map((name, i) => ({ name, color: assets.logoSwatch[i] })),
    servicesTitle: s.servicesTitle,
    services: s.serviceTitles.map((title, i) => ({ title, date: s.serviceDates[i], image: assets.serviceImages[i], to: ['/services/tyre-management', '/services/operational-consultancy', '/services/stemming-caps'][i] })),
    contact: s.contact,
    copyright: s.copyright,
  }
}

const I18nContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem('arminsol-lang') || 'en'
  })
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', dir)
    try { localStorage.setItem('arminsol-lang', lang) } catch (e) {}
  }, [lang, dir])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))
  const c = build(lang)

  return (
    <I18nContext.Provider value={{ lang, dir, setLang, toggleLang, c }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
