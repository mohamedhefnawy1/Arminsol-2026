import { createContext, useContext, useEffect, useState } from 'react'

// Local, web-optimized assets (WebP). No external CDN dependency in production.
const assets = {
  flame: '/img/logo-fan.webp',
  email: 'info@arminsol.com.sa',
  phone: '+966 56 977 3001',
  whatsapp: 'https://wa.me/966569773001',
  linkedin: 'https://www.linkedin.com/company/arabian-mining-solutions-trading-est/',
  heroPoster: '/img/hero-poster.webp',
  aboutImage: '/img/about.webp',
  logoImage: '/img/logo-fan.webp',
  img: {
    drilling: '/img/drilling.webp',
    spareParts: '/img/spare-parts.webp',
    tires: '/img/tires.webp',
    safety: '/img/safety.webp',
    drilling2: '/img/drilling-2.webp',
  },
  aramineLogo: '/logos/aramine.png',
  technidrillLogo: '/logos/technidrill.png',
  // mineral spectrum from the logo — gold, silver, copper, bauxite, phosphates, lime
  logoSwatch: ['var(--c-gold)', 'var(--c-silver)', 'var(--c-copper)', 'var(--c-bauxite)', 'var(--c-phosphates)', 'var(--c-lime)'],
}

// ============================================================
// Content architecture per the client's Final Review (R2):
//   HOME     = what Arminsol offers + conversion (short, commercial)
//   ABOUT    = company story, mission/vision, identity, journey, partnerships
//   PRODUCTS = what you can buy, with Aramine + Technidrill prominent
//   SERVICES = operational capabilities
//   CONTACT  = reach us / submit an RFQ
// Aramine & Technidrill are the only intentional Home/About overlap.
// Arabic is natural localization (not word-for-word); brand/trademark
// names kept in their approved Latin forms.
// ============================================================
const S = {
  en: {
    dir: 'ltr',
    langName: 'العربية',
    legalName: 'Arabian Mining Solutions Trading Est.',
    tagline: 'Partner In Solutions',
    navLabels: ['Home', 'Products', 'About Us', 'Services', 'Contact Us'],
    ui: {
      learnMore: 'Learn More',
      requestQuote: 'Request a Quote',
      contactTeam: 'Contact Our Team',
      sendRfq: 'Send Us Your RFQ',
      sendRfqShort: 'Send Your RFQ',
      contactUs: 'Contact Us',
      officialDistributor: 'Official Distributor in Saudi Arabia',
      menu: 'menu',
      contactHead: 'contact',
    },
    meta: {
      home: { title: 'ARMINSOL — Mining Solutions, Spare Parts & Drilling Tools in Saudi Arabia', desc: 'Saudi-based supplier of mining and drilling solutions. Official distributor of Aramine and Technidrill in Saudi Arabia — spare parts, tires, safety equipment and custom sourcing.' },
      products: { title: 'Products — Drilling, Spare Parts, Tires & Safety | ARMINSOL', desc: 'Comprehensive product range for mining and industry: drilling & exploration, spare parts & mining equipment, tires, and safety & PPE. Official distributor of Aramine and Technidrill in Saudi Arabia.' },
      about: { title: 'About Arminsol — Partner in Solutions Since 2016', desc: 'Saudi-based mining solutions company established in 2016, headquartered in Dammam. Official distributor of Aramine and Technidrill in Saudi Arabia.' },
      services: { title: 'Services — Maintenance, Rental & Tire Management | ARMINSOL', desc: 'Operational support for mining: heavy equipment maintenance, underground equipment rental, tire management, technical consultancy, after-sales support and import & supply.' },
      contact: { title: 'Contact Arminsol — Request a Quote (RFQ) | Dammam, Saudi Arabia', desc: 'Contact Arminsol for product inquiries, quotations, technical support and mining solutions. Head office in Dammam, Saudi Arabia.' },
    },
    home: {
      heroTitle: 'Your Trusted Partner in Mining Solutions.',
      heroSub: 'A Saudi-based mining solutions partner serving operational requirements across the Kingdom.',
      heroCtaPrimary: 'Explore Our Products',
      heroCtaSecondary: 'Contact Us',
      distributorLabel: 'Official Distributor in Saudi Arabia',
      distributors: [
        { name: 'Aramine', logo: assets.aramineLogo, status: 'Official Distributor of Aramine in Saudi Arabia' },
        { name: 'Technidrill', logo: assets.technidrillLogo, status: 'Official Distributor of Technidrill in Saudi Arabia' },
      ],
      offerLabel: 'What We Offer',
      offers: [
        { title: 'Drilling & Exploration', desc: 'Diamond, RC, DTH and top-hammer drilling tools and consumables.', image: assets.img.drilling, to: '/products#drilling', feature: true },
        { title: 'Spare Parts', desc: 'Genuine and replacement parts for mining and construction fleets.', image: assets.img.spareParts, to: '/products#spare-parts' },
        { title: 'Tires', desc: 'OTR, TBR and crane & port tires for demanding operations.', image: assets.img.tires, to: '/products#tires' },
        { title: 'Safety & PPE', desc: 'Helmets, workwear and a full personal protective equipment range.', image: assets.img.safety, to: '/products#safety' },
      ],
      industriesLabel: 'Industries We Serve',
      industries: ['Mining', 'Mineral Exploration', 'Quarrying', 'Cement', 'Construction', 'Infrastructure'],
      sourcingTitle: "Can't Find What You Need?",
      sourcingCopy: 'Our sourcing team can locate specialized mining equipment, spare parts, and industrial products through our global supplier network.',
      sourcingCta: 'Send Us Your RFQ',
      servingLabel: 'Serving Leading Companies Across Saudi Arabia',
      servingList: ["Ma'aden", 'AMAK', 'Capital', 'Drill Corp Sahara Saudi', 'AGC', 'Saudi Canadian Mining Services (SCMS)', 'Eastern Cement', 'Yamama Cement', 'Saudi Cement'],
      finalTitle: 'Looking for Mining Equipment, Spare Parts or Drilling Tools?',
      finalCopy: 'Send us your requirements and our team will prepare a tailored quotation.',
      finalCtaQuote: 'Request a Quote',
      finalCtaContact: 'Contact Our Team',
    },
    about: {
      heroTitle: 'About Arminsol',
      heroSub: 'Partner in Solutions, Since 2016.',
      whoLabel: 'Who We Are',
      who: [
        'Arabian Mining Solutions Trading Est. (Arminsol) is a Saudi-based company established in 2016 and headquartered in Dammam.',
        'We focus on supporting mining, quarrying, construction and related industrial operations across the Kingdom — combining a strong global supplier network with deep local market knowledge.',
      ],
      sinceMark: '2016',
      missionLabel: 'Our Mission',
      mission: "Our mission is to deliver tailored solutions built on quality, safety and responsive delivery — supported by dependable after-sales service that keeps our clients' operations running.",
      visionLabel: 'Our Vision',
      vision: 'Our vision is to become a leading mining-solutions partner in Saudi Arabia through innovation, sustainability and client satisfaction, in line with Saudi Vision 2030.',
      identityLabel: 'Our Identity',
      identityLine: 'The colours of our logo represent the broad spectrum of our markets — each one a mineral and resource sector we serve.',
      minerals: ['Gold', 'Silver', 'Copper', 'Bauxite', 'Phosphates', 'Lime'],
      journeyLabel: 'Company Profile',
      journey: [
        { v: '2016', l: 'Established' },
        { v: 'Dammam', l: 'Headquarters' },
        { v: 'Saudi-Based', l: 'Operations' },
        { v: 'Global', l: 'Supplier Network' },
      ],
      partnersLabel: 'Official Distribution Partnerships',
      partnersIntro: 'Arminsol holds official distribution rights for two leading manufacturers in Saudi Arabia.',
      partners: [
        { name: 'Aramine', logo: assets.aramineLogo, status: 'Official Distributor in Saudi Arabia', body: 'As the official distributor of Aramine in Saudi Arabia, Arminsol supplies underground mining equipment, genuine spare parts and the SmartParts range — giving local operators direct access to original components and factory-backed support.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, status: 'Official Distributor in Saudi Arabia', body: 'As the official distributor of Technidrill in Saudi Arabia, Arminsol provides premium exploration and drilling products, backed by manufacturer expertise and dependable local supply.' },
      ],
      partnersNote: 'These official relationships strengthen our ability to support mining customers with genuine products, technical backing and reliable lead times.',
      closing: 'Arminsol — Partner in Solutions, Since 2016.',
      closingCta: 'Contact Our Team',
    },
    products: {
      title: 'Comprehensive Product Range for Mining & Industry',
      intro: 'From spare parts to specialized exploration equipment, Arminsol supplies what your operation needs — sourced from certified global manufacturers and backed by technical support.',
      navCategories: [
        { label: 'Drilling & Exploration', to: '#drilling' },
        { label: 'Spare Parts & Mining Equipment', to: '#spare-parts' },
        { label: 'Tires', to: '#tires' },
        { label: 'Safety & PPE', to: '#safety' },
      ],
      distributorsLabel: 'Official Distribution Partners',
      distributors: [
        { name: 'Aramine', logo: assets.aramineLogo, status: 'Official Distributor in Saudi Arabia', desc: 'Underground mining equipment, genuine spare parts and the SmartParts range.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, status: 'Official Distributor in Saudi Arabia', desc: 'Premium exploration and drilling products, backed by manufacturer expertise.' },
      ],
      categories: [
        {
          id: 'drilling', n: '01', title: 'Drilling & Exploration', image: assets.img.drilling,
          para: 'As the official distributor of Technidrill in Saudi Arabia, Arminsol delivers premium exploration and drilling products, alongside trusted solutions from other leading manufacturers.',
          subLabel: 'Categories',
          sub: ['Diamond Drilling', 'Wireline Systems', 'Reverse Circulation (RC)', 'Down-the-Hole (DTH)', 'Top Hammer & Blast Hole', 'Core Storage & Sampling'],
          note: 'Additional drilling brands are available as supplied products.',
        },
        {
          id: 'spare-parts', n: '02', title: 'Spare Parts & Mining Equipment', image: assets.img.spareParts,
          para: 'As the official distributor of Aramine in Saudi Arabia, Arminsol supplies genuine Aramine spare parts and equipment, plus a wide range of parts and filters for mining and construction fleets.',
          subLabel: 'Also supplied',
          sub: ['Caterpillar', 'Epiroc / Atlas Copco', 'Sandvik', 'Hydraulic, undercarriage & wear parts', 'Filters & consumables'],
          note: 'Caterpillar, Epiroc / Atlas Copco and Sandvik are offered as supplied brands.',
        },
        {
          id: 'tires', n: '03', title: 'Tires', image: assets.img.tires,
          subLabel: 'Ranges',
          sub: ['OTR Tires — open-pit & underground mining, construction and port handling', 'TBR Tires — on/off-road and industrial, built for demanding conditions', 'Crane & Port Tires — high wear performance and better heat release'],
        },
        {
          id: 'safety', n: '04', title: 'Safety, PPE & Workwear', image: assets.img.safety,
          subLabel: 'Groups',
          sub: ['Head Protection', 'Workwear', 'Personal Protection', 'Vehicle & Site Safety', 'Heat Stress Solutions'],
        },
      ],
      customLabel: 'Need Something Specific?',
      customCopy: "Tell us what you're looking for and our sourcing team will find it through our global supplier network.",
      customCta: 'Send Your RFQ',
    },
    services: {
      title: 'More Than a Supplier — A Partner In Solutions',
      intro: 'From maintenance and equipment rental to consultancy, technical support and after-sales care, Arminsol supports your operation end-to-end.',
      priorityLabel: 'Priority Services',
      items: [
        { icon: 'wrench', priority: true, title: 'Heavy Equipment Maintenance', desc: 'Preventive maintenance, diagnostics, component replacement, repairs and on-site field support to maximize equipment reliability and minimize downtime.' },
        { icon: 'loader', priority: true, title: 'Underground Mining Equipment Rental', desc: 'Flexible rental solutions for short- and long-term projects — reliable, well-maintained equipment that lifts productivity while reducing capital investment.' },
        { icon: 'tire', priority: true, title: 'Tire Management Solutions', desc: 'Professional OTR tire assessment and monitoring to maximize tire life, reduce operating cost and improve fleet availability.' },
        { icon: 'compass', title: 'Technical Consultancy', desc: 'Expert guidance on product selection, equipment specifications, drilling applications and operational recommendations.' },
        { icon: 'headset', title: 'After-Sales Support', desc: "Our support doesn't end at delivery. Comprehensive after-sales support protects the performance and longevity of every product we supply." },
        { icon: 'sliders', title: 'Custom Solutions', desc: 'Tailored supply arrangements, consignment stock and specialized sourcing — plus branded workwear in your company colours.' },
        { icon: 'globe', title: 'Import & Supply', desc: 'International sourcing through a strong global supplier network — import handling, customs clearance, site delivery, urgent-parts procurement and framework supply.' },
      ],
      moreLabel: 'More Services',
      finalTitle: 'Need Technical Support or a Tailored Mining Solution?',
      finalCta: 'Contact Our Team',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Contact our team for product inquiries, quotations, technical support, and mining solutions.',
      infoLabel: 'Contact Information',
      name: 'Arminsol Trading Est.',
      addr: '2 (B) St., 7770 Al Faiha, Unit 2, 32442-3725 Dammam, Kingdom of Saudi Arabia',
      phoneLabel: 'Phone', emailLabel: 'Email', webLabel: 'Website', web: 'www.arminsol.com.sa',
      whatsappLabel: 'Chat with Us on WhatsApp',
      linkedinLabel: 'LinkedIn',
      formLabel: 'Send an Inquiry',
      form: {
        name: 'Name', company: 'Company name', email: 'Email', phone: 'Phone',
        inquiry: 'Inquiry type', message: 'Message', attach: 'Attach a file (optional)',
        attachHint: 'PDF, image or spreadsheet — up to 8 MB',
        send: 'Send Inquiry', sending: 'Sending…',
        inquiryOptions: ['Product Inquiry', 'Request for Quotation', 'Technical Support', 'Equipment Rental', 'Maintenance Services', 'General Inquiry'],
      },
      sentTitle: 'Thank you — your inquiry has been sent.',
      sentBody: 'Our team will get back to you shortly.',
      sendAnother: 'Send another',
      errorTitle: "Sorry, that didn't go through.",
      errorBody: 'Please try again, or email us directly at info@arminsol.com.sa.',
      mapLabel: 'Head Office — Dammam, Saudi Arabia',
    },
  },

  ar: {
    dir: 'rtl',
    langName: 'English',
    legalName: 'مؤسسة حلول التعدين العربية للتجارة',
    tagline: 'شريك في الحلول',
    navLabels: ['الرئيسية', 'المنتجات', 'من نحن', 'الخدمات', 'تواصل معنا'],
    ui: {
      learnMore: 'اعرف المزيد',
      requestQuote: 'اطلب عرض سعر',
      contactTeam: 'تواصل مع فريقنا',
      sendRfq: 'أرسل طلب عرض السعر',
      sendRfqShort: 'أرسل طلب عرض السعر',
      contactUs: 'تواصل معنا',
      officialDistributor: 'الموزع الرسمي في المملكة العربية السعودية',
      menu: 'القائمة',
      contactHead: 'التواصل',
    },
    meta: {
      home: { title: 'أرمينسول — حلول التعدين وقطع الغيار وأدوات الحفر في السعودية', desc: 'مورّد سعودي لحلول التعدين والحفر. الموزع الرسمي لـ Aramine وTechnidrill في المملكة العربية السعودية — قطع غيار وإطارات ومعدّات سلامة وتوريد مخصّص.' },
      products: { title: 'المنتجات — الحفر وقطع الغيار والإطارات والسلامة | أرمينسول', desc: 'مجموعة متكاملة من المنتجات للتعدين والصناعة: الحفر والاستكشاف، قطع الغيار ومعدّات التعدين، الإطارات، والسلامة ومعدّات الوقاية. الموزع الرسمي لـ Aramine وTechnidrill في السعودية.' },
      about: { title: 'عن أرمينسول — شريككم في الحلول منذ 2016', desc: 'شركة سعودية لحلول التعدين تأسّست عام 2016 ومقرّها الدمّام. الموزع الرسمي لـ Aramine وTechnidrill في المملكة العربية السعودية.' },
      services: { title: 'الخدمات — الصيانة والتأجير وإدارة الإطارات | أرمينسول', desc: 'دعم تشغيلي للتعدين: صيانة المعدّات الثقيلة، تأجير معدّات التعدين تحت الأرض، إدارة الإطارات، الاستشارات الفنية، دعم ما بعد البيع، والاستيراد والتوريد.' },
      contact: { title: 'تواصل مع أرمينسول — اطلب عرض سعر | الدمّام، السعودية', desc: 'تواصل مع أرمينسول للاستفسار عن المنتجات وطلب عروض الأسعار والدعم الفني وحلول التعدين. المكتب الرئيسي في الدمّام، المملكة العربية السعودية.' },
    },
    home: {
      heroTitle: 'شريككم الموثوق في حلول التعدين',
      heroSub: 'شريك سعودي في حلول التعدين يخدم المتطلّبات التشغيلية في أنحاء المملكة.',
      heroCtaPrimary: 'استكشف منتجاتنا',
      heroCtaSecondary: 'تواصل معنا',
      distributorLabel: 'الموزع الرسمي في المملكة العربية السعودية',
      distributors: [
        { name: 'Aramine', logo: assets.aramineLogo, status: 'الموزع الرسمي لشركة Aramine في المملكة العربية السعودية' },
        { name: 'Technidrill', logo: assets.technidrillLogo, status: 'الموزع الرسمي لشركة Technidrill في المملكة العربية السعودية' },
      ],
      offerLabel: 'ما الذي نقدّمه',
      offers: [
        { title: 'الحفر والاستكشاف', desc: 'أدوات ومستهلكات الحفر الماسي وRC وDTH والمطرقة العلوية.', image: assets.img.drilling, to: '/products#drilling', feature: true },
        { title: 'قطع الغيار', desc: 'قطع غيار أصلية وبديلة لأساطيل التعدين والإنشاءات.', image: assets.img.spareParts, to: '/products#spare-parts' },
        { title: 'الإطارات', desc: 'إطارات OTR وTBR والرافعات والموانئ للعمليات الشاقّة.', image: assets.img.tires, to: '/products#tires' },
        { title: 'السلامة ومعدات الوقاية الشخصية', desc: 'خوذ وملابس عمل ومجموعة كاملة من معدّات الوقاية الشخصية.', image: assets.img.safety, to: '/products#safety' },
      ],
      industriesLabel: 'القطاعات التي نخدمها',
      industries: ['التعدين', 'الاستكشاف المعدني', 'المحاجر', 'الأسمنت', 'الإنشاءات', 'البنية التحتية'],
      sourcingTitle: 'لم تجد ما تبحث عنه؟',
      sourcingCopy: 'يستطيع فريق التوريد لدينا إيجاد معدّات التعدين المتخصّصة وقطع الغيار والمنتجات الصناعية عبر شبكة موردينا العالمية.',
      sourcingCta: 'أرسل طلب عرض السعر',
      servingLabel: 'نخدم كبرى الشركات في المملكة العربية السعودية',
      servingList: ["Ma'aden", 'AMAK', 'Capital', 'Drill Corp Sahara Saudi', 'AGC', 'Saudi Canadian Mining Services (SCMS)', 'Eastern Cement', 'Yamama Cement', 'Saudi Cement'],
      finalTitle: 'تبحث عن معدّات تعدين أو قطع غيار أو أدوات حفر؟',
      finalCopy: 'أرسل لنا متطلّباتك وسيقوم فريقنا بإعداد عرض سعر مخصّص.',
      finalCtaQuote: 'اطلب عرض سعر',
      finalCtaContact: 'تواصل مع فريقنا',
    },
    about: {
      heroTitle: 'عن Arminsol',
      heroSub: 'شريككم في الحلول منذ عام 2016.',
      whoLabel: 'من نحن',
      who: [
        'مؤسسة حلول التعدين العربية للتجارة (أرمينسول) شركة سعودية تأسّست عام 2016 ومقرّها الرئيسي في الدمّام.',
        'نركّز على دعم عمليات التعدين والمحاجر والإنشاءات والصناعات ذات الصلة في أنحاء المملكة — جامعين بين شبكة موردين عالمية قوية ومعرفة عميقة بالسوق المحلّي.',
      ],
      sinceMark: '2016',
      missionLabel: 'مهمّتنا',
      mission: 'مهمّتنا تقديم حلول مصمّمة قائمة على الجودة والسلامة وسرعة التوريد — مدعومة بخدمة موثوقة لما بعد البيع تُبقي عمليات عملائنا مستمرّة.',
      visionLabel: 'رؤيتنا',
      vision: 'رؤيتنا أن نصبح الشريك الرائد لحلول التعدين في المملكة العربية السعودية عبر الابتكار والاستدامة ورضا العملاء، بما يتوافق مع رؤية السعودية 2030.',
      identityLabel: 'هويّتنا',
      identityLine: 'تمثّل ألوان شعارنا الطيف الواسع لأسواقنا — كلّ لون قطاع معدني ومورد نخدمه.',
      minerals: ['الذهب', 'الفضة', 'النحاس', 'البوكسيت', 'الفوسفات', 'الجير'],
      journeyLabel: 'ملف الشركة',
      journey: [
        { v: '2016', l: 'التأسيس' },
        { v: 'الدمّام', l: 'المقر الرئيسي' },
        { v: 'سعودية', l: 'العمليات' },
        { v: 'عالمية', l: 'شبكة الموردين' },
      ],
      partnersLabel: 'شراكات التوزيع الرسمية',
      partnersIntro: 'تملك أرمينسول حقوق التوزيع الرسمية لاثنتين من كبرى الشركات المصنّعة في المملكة العربية السعودية.',
      partners: [
        { name: 'Aramine', logo: assets.aramineLogo, status: 'الموزع الرسمي في المملكة العربية السعودية', body: 'بصفتها الموزّع الرسمي لـ Aramine في المملكة العربية السعودية، توفّر أرمينسول معدّات التعدين تحت الأرض وقطع الغيار الأصلية ومجموعة SmartParts — لتمنح المشغّلين المحلّيين وصولًا مباشرًا إلى المكوّنات الأصلية والدعم المعتمد من المصنّع.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, status: 'الموزع الرسمي في المملكة العربية السعودية', body: 'بصفتها الموزّع الرسمي لـ Technidrill في المملكة العربية السعودية، توفّر أرمينسول منتجات حفر واستكشاف متميّزة، مدعومة بخبرة المصنّع وتوريد محلّي موثوق.' },
      ],
      partnersNote: 'تعزّز هذه العلاقات الرسمية قدرتنا على دعم عملاء التعدين بمنتجات أصلية ودعم فني ومهل توريد موثوقة.',
      closing: 'Arminsol — شريككم في الحلول منذ عام 2016.',
      closingCta: 'تواصل مع فريقنا',
    },
    products: {
      title: 'مجموعة متكاملة من المنتجات لقطاع التعدين والصناعة',
      intro: 'من قطع الغيار إلى معدّات الاستكشاف المتخصّصة، توفّر أرمينسول ما تحتاجه عملياتك — من مصنّعين عالميين معتمدين ومدعومًا بالدعم الفني.',
      navCategories: [
        { label: 'الحفر والاستكشاف', to: '#drilling' },
        { label: 'قطع الغيار ومعدات التعدين', to: '#spare-parts' },
        { label: 'الإطارات', to: '#tires' },
        { label: 'السلامة ومعدات الوقاية', to: '#safety' },
      ],
      distributorsLabel: 'شركاء التوزيع الرسميون',
      distributors: [
        { name: 'Aramine', logo: assets.aramineLogo, status: 'الموزع الرسمي في المملكة العربية السعودية', desc: 'معدّات التعدين تحت الأرض وقطع الغيار الأصلية ومجموعة SmartParts.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, status: 'الموزع الرسمي في المملكة العربية السعودية', desc: 'منتجات حفر واستكشاف متميّزة مدعومة بخبرة المصنّع.' },
      ],
      categories: [
        {
          id: 'drilling', n: '01', title: 'الحفر والاستكشاف', image: assets.img.drilling,
          para: 'بصفتها الموزّع الرسمي لـ Technidrill في المملكة العربية السعودية، تقدّم أرمينسول منتجات حفر واستكشاف متميّزة، إلى جانب حلول موثوقة من كبرى الشركات المصنّعة الأخرى.',
          subLabel: 'الفئات',
          sub: ['الحفر الماسي', 'أنظمة الوايرلاين', 'الحفر بالدوران العكسي (RC)', 'الحفر بنظام DTH', 'المطرقة العلوية وثقوب التفجير', 'تخزين وأخذ العيّنات اللُّبّية'],
          note: 'تتوفّر علامات حفر إضافية كمنتجات موردة.',
        },
        {
          id: 'spare-parts', n: '02', title: 'قطع الغيار ومعدات التعدين', image: assets.img.spareParts,
          para: 'بصفتها الموزّع الرسمي لـ Aramine في المملكة العربية السعودية، توفّر أرمينسول قطع غيار ومعدّات Aramine الأصلية، إضافةً إلى مجموعة واسعة من القطع والفلاتر لأساطيل التعدين والإنشاءات.',
          subLabel: 'علامات موردة أيضًا',
          sub: ['Caterpillar', 'Epiroc / Atlas Copco', 'Sandvik', 'المكوّنات الهيدروليكية وأجزاء الجنزير والتآكل', 'الفلاتر والمستهلكات'],
          note: 'تُقدَّم Caterpillar وEpiroc / Atlas Copco وSandvik كعلامات موردة.',
        },
        {
          id: 'tires', n: '03', title: 'الإطارات', image: assets.img.tires,
          subLabel: 'الأنواع',
          sub: ['إطارات OTR — للتعدين المكشوف وتحت الأرض والإنشاءات ومناولة الموانئ', 'إطارات TBR — للطرق الممهّدة والوعرة والصناعية، لظروف شاقّة', 'إطارات الرافعات والموانئ — أداء تآكل عالٍ وتحرير أفضل للحرارة'],
        },
        {
          id: 'safety', n: '04', title: 'السلامة ومعدات الوقاية والملابس', image: assets.img.safety,
          subLabel: 'المجموعات',
          sub: ['حماية الرأس', 'ملابس العمل', 'الوقاية الشخصية', 'سلامة المركبات والموقع', 'حلول الإجهاد الحراري'],
        },
      ],
      customLabel: 'تحتاج منتجاً أو قطعة محددة؟',
      customCopy: 'أخبرنا بما تبحث عنه وسيجده فريق التوريد لدينا عبر شبكة موردينا العالمية.',
      customCta: 'أرسل طلب عرض السعر',
    },
    services: {
      title: 'أكثر من مجرد مورد — شريككم في الحلول',
      intro: 'من الصيانة وتأجير المعدّات إلى الاستشارات والدعم الفني والعناية بما بعد البيع، تدعم أرمينسول عملياتك من البداية إلى النهاية.',
      priorityLabel: 'الخدمات الرئيسية',
      items: [
        { icon: 'wrench', priority: true, title: 'صيانة المعدّات الثقيلة', desc: 'صيانة وقائية وتشخيص واستبدال مكوّنات وإصلاحات ودعم ميداني في الموقع لتعظيم موثوقية المعدّات وتقليل التوقّف.' },
        { icon: 'loader', priority: true, title: 'تأجير معدّات التعدين تحت الأرض', desc: 'حلول تأجير مرنة للمشاريع القصيرة والطويلة الأمد — معدّات موثوقة جيّدة الصيانة ترفع الإنتاجية وتخفض الاستثمار الرأسمالي.' },
        { icon: 'tire', priority: true, title: 'حلول إدارة الإطارات', desc: 'تقييم ومراقبة احترافية لإطارات OTR لتعظيم عمر الإطار وخفض تكلفة التشغيل وتحسين جاهزية الأسطول.' },
        { icon: 'compass', title: 'الاستشارات الفنية', desc: 'إرشاد خبير في اختيار المنتجات ومواصفات المعدّات وتطبيقات الحفر والتوصيات التشغيلية.' },
        { icon: 'headset', title: 'دعم ما بعد البيع', desc: 'دعمنا لا ينتهي عند التسليم. دعم شامل لما بعد البيع يحمي أداء وطول عمر كل منتج نورّده.' },
        { icon: 'sliders', title: 'حلول مخصّصة', desc: 'ترتيبات توريد مصمّمة ومخزون أمانة وتوريد متخصّص — إضافةً إلى ملابس عمل موسومة بألوان شركتك.' },
        { icon: 'globe', title: 'الاستيراد والتوريد', desc: 'توريد دولي عبر شبكة موردين عالمية قوية — مناولة الاستيراد والتخليص الجمركي والتوصيل إلى الموقع والتوريد السريع للقطع العاجلة والتوريد بالاتفاقيات الإطارية.' },
      ],
      moreLabel: 'خدمات إضافية',
      finalTitle: 'تحتاج دعمًا فنيًا أو حلًّا تعدينيًا مخصّصًا؟',
      finalCta: 'تواصل مع فريقنا',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'تواصل مع فريقنا للاستفسار عن المنتجات وطلب عروض الأسعار والدعم الفني وحلول التعدين.',
      infoLabel: 'معلومات التواصل',
      name: 'مؤسسة أرمينسول للتجارة',
      addr: 'شارع 2 (B)، 7770 الفيحاء، وحدة 2، 32442-3725 الدمّام، المملكة العربية السعودية',
      phoneLabel: 'الهاتف', emailLabel: 'البريد الإلكتروني', webLabel: 'الموقع', web: 'www.arminsol.com.sa',
      whatsappLabel: 'تواصل معنا عبر واتساب',
      linkedinLabel: 'لينكدإن',
      formLabel: 'أرسل استفسارًا',
      form: {
        name: 'الاسم', company: 'اسم الشركة', email: 'البريد الإلكتروني', phone: 'الهاتف',
        inquiry: 'نوع الاستفسار', message: 'الرسالة', attach: 'إرفاق ملف (اختياري)',
        attachHint: 'PDF أو صورة أو جدول — حتى 8 ميجابايت',
        send: 'إرسال الاستفسار', sending: 'جارٍ الإرسال…',
        inquiryOptions: ['استفسار عن منتج', 'طلب عرض سعر', 'دعم فني', 'تأجير معدّات', 'خدمات صيانة', 'استفسار عام'],
      },
      sentTitle: 'شكرًا — تم إرسال استفسارك.',
      sentBody: 'سيتواصل معك فريقنا قريبًا.',
      sendAnother: 'إرسال استفسار آخر',
      errorTitle: 'عذرًا، لم يتم الإرسال.',
      errorBody: 'يرجى المحاولة مرة أخرى، أو مراسلتنا مباشرة على info@arminsol.com.sa.',
      mapLabel: 'المكتب الرئيسي — الدمّام، المملكة العربية السعودية',
    },
  },
}

const ROUTES = ['/', '/products', '/about', '/services', '/contact']

function build(lang) {
  const s = S[lang]
  return {
    ...assets,
    lang,
    dir: s.dir,
    langName: s.langName,
    legalName: s.legalName,
    tagline: s.tagline,
    ui: s.ui,
    meta: s.meta,
    nav: s.navLabels.map((label, i) => ({ label, to: ROUTES[i] })),
    home: s.home,
    about: s.about,
    products: s.products,
    services: s.services,
    contact: s.contact,
    logoColors: s.about.minerals.map((name, i) => ({ name, color: assets.logoSwatch[i] })),
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

/** Wraps one exact phrase (e.g. "2016") in an accent span — text unchanged. */
export function Highlight({ text, mark }) {
  const i = mark ? text.indexOf(mark) : -1
  if (i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <span className="hl">{text.slice(i, i + mark.length)}</span>
      {text.slice(i + mark.length)}
    </>
  )
}
