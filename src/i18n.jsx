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
    normetFleet: '/img/normet-fleet.webp',
    normetEquipment: '/img/normet-equipment.webp',
    normetXrock: '/img/normet-xrock.webp',
    normetAliva: '/img/normet-aliva.webp',
    normetGround: '/img/normet-ground-support.webp',
    normetChemicals: '/img/normet-chemicals.webp',
    normetServices: '/img/normet-services.webp',
  },
  aramineLogo: '/logos/aramine.png',
  technidrillLogo: '/logos/technidrill.png',
  normetLogo: '/logos/normet.svg',
  aramineUrl: 'https://aramine.com/',
  technidrillUrl: 'https://technidrill.com/',
  // mineral spectrum from the logo — gold, silver, copper, bauxite, phosphates, lime
  logoSwatch: ['var(--c-gold)', 'var(--c-silver)', 'var(--c-copper)', 'var(--c-bauxite)', 'var(--c-phosphates)', 'var(--c-lime)'],
}

// ============================================================
// Content architecture per the client's Final Review (R2):
//   HOME     = what Arminsol offers + conversion (short, commercial)
//   ABOUT    = company story, mission/vision, identity, journey, partnerships
//   PRODUCTS = what you can buy, with Aramine + Technidrill + Normet prominent
//   NORMET   = dedicated partner page (/products/normet) — full Normet offering
//   SERVICES = operational capabilities
//   CONTACT  = reach us / submit an RFQ
// Aramine, Technidrill & Normet are the only intentional Home/About overlap.
// Arabic is natural localization (not word-for-word); brand/trademark
// names kept in their approved Latin forms.
// ============================================================
const S = {
  en: {
    dir: 'ltr',
    langName: 'العربية',
    legalName: 'Arabian Mining Solutions Trading Est.',
    tagline: 'Partner In Solutions',
    navLabels: ['Home', 'Products', 'Services', 'About Us', 'Contact Us'],
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
      home: { title: 'ARMINSOL — Mining Solutions, Spare Parts & Drilling Tools in Saudi Arabia', desc: 'Saudi-based supplier of mining and drilling solutions. Official partner of Aramine, Technidrill and Normet in Saudi Arabia — underground equipment, spare parts, tires, safety equipment and custom sourcing.' },
      products: { title: 'Products — Drilling, Spare Parts, Tires & Safety | ARMINSOL', desc: 'Comprehensive product range for mining and industry: drilling & exploration, spare parts & mining equipment, tires, and safety & PPE. Official partner of Aramine, Technidrill and Normet in Saudi Arabia.' },
      normet: { title: 'Normet in Saudi Arabia — Equipment, Xrock Breakers, Aliva & Spare Parts | ARMINSOL', desc: 'Arminsol is the official agent and distributor of Normet in Saudi Arabia: underground mining and tunnelling equipment, Normet Xrock hydraulic breakers and rock-breaking systems, Aliva sprayed-concrete equipment, genuine spare parts and services.' },
      about: { title: 'About Arminsol — Partner in Solutions Since 2016', desc: 'Saudi-based mining solutions company established in 2016, headquartered in Dammam. Official partner of Aramine, Technidrill and Normet in Saudi Arabia.' },
      services: { title: 'Services — Maintenance, Rental & Tire Management | ARMINSOL', desc: 'Operational support for mining: heavy equipment maintenance, underground equipment rental, tire management, technical consultancy, after-sales support and import & supply.' },
      contact: { title: 'Contact Arminsol — Request a Quote (RFQ) | Dammam, Saudi Arabia', desc: 'Contact Arminsol for product inquiries, quotations, technical support and mining solutions. Head office in Dammam, Saudi Arabia.' },
    },
    home: {
      heroTitle: 'Your Trusted Partner in Mining Solutions.',
      heroSub: 'A Saudi-based mining solutions partner serving operational requirements across the Kingdom.',
      heroCtaPrimary: 'Explore Our Products',
      heroCtaSecondary: 'Contact Us',
      distributorLabel: 'Official Distributor in Saudi Arabia',
      offerLabel: 'What We Offer',
      offers: [
        { title: 'Drilling & Exploration', desc: 'Diamond, RC, DTH and top-hammer drilling tools and consumables.', image: assets.img.drilling, to: '/products#drilling', feature: true },
        { title: 'Spare Parts', desc: 'Genuine and replacement parts for mining and construction fleets, including genuine Normet, Xrock and Aliva parts and service support.', image: assets.img.spareParts, to: '/products#spare-parts' },
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
      partnersIntro: 'Arminsol is the official partner in Saudi Arabia for three leading manufacturers.',
      partners: [
        { name: 'Aramine', logo: assets.aramineLogo, href: assets.aramineUrl, status: 'Official Distributor in Saudi Arabia', body: 'As the official distributor of Aramine in Saudi Arabia, Arminsol supplies underground mining equipment, genuine spare parts and the SmartParts range — giving local operators direct access to original components and factory-backed support.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, href: assets.technidrillUrl, status: 'Official Distributor in Saudi Arabia', body: 'As the official distributor of Technidrill in Saudi Arabia, Arminsol provides premium exploration and drilling products, backed by manufacturer expertise and dependable local supply.' },
        { name: 'Normet', logo: assets.normetLogo, status: 'Official Agent & Distributor in Saudi Arabia', to: '/products/normet', body: 'Under our Agency and Distributor Agreements with Normet, Arminsol supplies the full Normet range in Saudi Arabia — underground mining and tunnelling equipment, Normet Xrock hydraulic breakers and rock-breaking solutions, Aliva equipment, genuine spare parts and related services.' },
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
        { label: 'Spare Parts', to: '#spare-parts' },
        { label: 'Tires', to: '#tires' },
        { label: 'Safety & PPE', to: '#safety' },
        { label: 'Underground Equipment', to: '#normet-equipment' },
        { label: 'Rock Breaking', to: '#normet-rock-breaking' },
        { label: 'Aliva', to: '#normet-aliva' },
        { label: 'Rock Reinforcement', to: '#normet-rock-reinforcement' },
        { label: 'Chemicals', to: '#normet-construction-chemicals' },
      ],
      distributorsLabel: 'Official Distribution Partners',
      distributors: [
        { name: 'Aramine', logo: assets.aramineLogo, href: assets.aramineUrl, status: 'Official Distributor in Saudi Arabia', desc: 'Underground mining equipment, genuine spare parts and the SmartParts range.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, href: assets.technidrillUrl, status: 'Official Distributor in Saudi Arabia', desc: 'Premium exploration and drilling products, backed by manufacturer expertise.' },
        { name: 'Normet', logo: assets.normetLogo, status: 'Official Agent & Distributor in Saudi Arabia', desc: 'Underground equipment, Xrock rock-breaking solutions, Aliva equipment, spare parts and services.', to: '/products/normet' },
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
          para: 'As the official distributor of Aramine in Saudi Arabia, Arminsol supplies genuine Aramine spare parts and equipment, plus a wide range of parts and filters for mining and construction fleets. As the official agent and distributor of Normet, we also supply genuine Normet, Xrock and Aliva spare parts and service support.',
          subLabel: 'Also supplied',
          sub: ['Caterpillar', 'Epiroc / Atlas Copco', 'Sandvik', 'Hydraulic, undercarriage & wear parts', 'Filters & consumables'],
          note: 'Caterpillar, Epiroc / Atlas Copco and Sandvik are offered as supplied brands.',
        },
        {
          id: 'tires', n: '03', title: 'Tires', image: assets.img.tires, list: true,
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
    normet: {
      status: 'Official Agent & Distributor in Saudi Arabia',
      title: 'Normet Equipment & Solutions in Saudi Arabia',
      intro: 'Under our Agency and Distributor Agreements, Arminsol supplies Normet’s full range of products and services in the Kingdom — machinery, hydraulic breakers and rock-breaking solutions, Aliva equipment, spare parts and related solutions.',
      allProducts: 'All Products',
      heroAlt: 'Normet underground equipment',
      railLabel: 'Normet product categories',
      aboutLabel: 'About Normet',
      about: 'Normet is a Finnish technology company that has spent more than 60 years making underground mining and tunnelling safer and more productive — with equipment, rock-breaking systems, ground-support materials and lifecycle services.',
      facts: [
        { v: '60+', l: 'Years of experience' },
        { v: '15,000+', l: 'Machines delivered' },
        { v: '50+', l: 'Locations worldwide' },
        { v: '30', l: 'Countries' },
      ],
      categories: [
        {
          id: 'normet-equipment', n: '01', short: 'Underground Equipment', card: 'Normet machines for concrete spraying and transport, explosives charging, scaling, lifting and logistics.', title: 'Underground Mining & Tunnelling Equipment', image: assets.img.normetEquipment, list: true,
          para: 'Purpose-built Normet machines for every stage of the underground process, available with diesel or Normet SmartDrive battery-electric drivelines.',
          subLabel: 'Equipment range',
          sub: [
            'Concrete Spraying — Spraymec sprayers',
            'Concrete Transport — Utimec transmixers',
            'Explosives Charging — Charmec chargers for emulsion and ANFO',
            'Scaling — Scamec mechanized scalers',
            'Lifting & Installation — Himec and Utilift scissor and basket lifts',
            'Underground Logistics — Variomec and Multimec personnel, material and service carriers',
          ],
          note: 'Models and configurations are specified to your application on request.',
        },
        {
          id: 'normet-rock-breaking', n: '02', short: 'Hydraulic Breakers & Rock Breaking', card: 'Normet Xrock hydraulic breakers, breaker boom systems, pedestal booms and automation.', title: 'Hydraulic Breakers & Rock-Breaking Solutions', image: assets.img.normetXrock,
          para: 'Normet Xrock brings more than 30 years of rock-breaking design and manufacturing to mines, quarries, aggregate plants and construction sites — complete systems that clear oversize and keep crushers and grizzlies running.',
          subLabel: 'Normet Xrock range',
          sub: ['Hydraulic Breakers', 'Breaker Boom Systems', 'Pedestal Booms', 'Boom Attachments', 'Xrock Automation & Remote Operation', 'Genuine Xrock Spare Parts'],
        },
        {
          id: 'normet-aliva', n: '03', short: 'Aliva Equipment', card: 'Aliva rotor spraying machines, manipulators, dosing units and mortar machines.', title: 'Aliva Sprayed-Concrete Equipment', image: assets.img.normetAliva,
          para: 'Aliva is Normet’s sprayed-concrete equipment line, with more than 75 years in the shotcrete business. The machines are robust and easy to set up, operate and clean — for tunnelling, mining, slope stabilization, concrete repair and construction.',
          subLabel: 'Product families',
          sub: ['Rotor Spraying Machines', 'Spraying Manipulators', 'Dosing Units', 'Mortar Machines'],
        },
        {
          id: 'normet-rock-reinforcement', n: '04', short: 'Rock Reinforcement', card: 'Normet dynamic and static rock bolts, ground-control resins and fissure grouting.', title: 'Rock Reinforcement & Ground Support', image: assets.img.normetGround,
          para: 'Normet rock reinforcement for ground control in mining and tunnelling — static support for conventional conditions, dynamic support for seismic and squeezing ground, and civil support for infrastructure projects.',
          subLabel: 'Solutions',
          sub: ['Dynamic Rock Bolts', 'Static Rock Bolts', 'Civil Support', 'Ground-Control Injection Resins', 'Rock Fissure Grouting'],
        },
        {
          id: 'normet-construction-chemicals', n: '05', short: 'Construction Chemicals', card: 'Normet sprayed-concrete admixtures, injection resins, waterproofing and repair mortars.', title: 'Construction Chemicals', image: assets.img.normetChemicals,
          para: 'Normet construction chemicals for mining, tunnelling and civil construction — from sprayed-concrete admixtures to water control, waterproofing and repair.',
          subLabel: 'Product groups',
          sub: ['Sprayed-Concrete Admixtures', 'Readymix & Precast Admixtures', 'TBM Additives & Soil Conditioners', 'Injection & Water-Control Resins', 'Spray-Applied Waterproofing Membranes', 'Repair Mortars'],
        },
        {
          id: 'normet-parts-services', n: '06', short: 'Spare Parts & Services', card: 'Genuine Normet, Xrock and Aliva spare parts, maintenance support and training.', title: 'Genuine Spare Parts & Services', image: assets.img.normetServices, list: true,
          para: 'Arminsol supplies genuine Normet, Xrock and Aliva spare parts in Saudi Arabia and coordinates Normet lifecycle services, so your equipment stays productive throughout its working life.',
          subLabel: 'Support',
          sub: [
            'Genuine spare parts, wear parts and consumables',
            'Service and maintenance kits',
            'Maintenance, inspection and field-service support',
            'Operator and maintenance training',
            'Equipment upgrades and modernization',
            'Remote monitoring and digital fleet solutions',
          ],
        },
      ],
      industriesLabel: 'Where Normet Solutions Work',
      industries: ['Underground Mining', 'Tunnelling', 'Civil Construction', 'Quarrying & Aggregates', 'Slope Stabilization', 'Concrete Repair'],
      ctaTitle: 'Need a Normet Machine, Breaker or Spare Part?',
      ctaCopy: 'Send us the model, part number or application and our team will prepare a tailored quotation.',
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
    navLabels: ['الرئيسية', 'المنتجات', 'الخدمات', 'من نحن', 'تواصل معنا'],
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
      home: { title: 'أرمينسول — حلول التعدين وقطع الغيار وأدوات الحفر في السعودية', desc: 'مورّد سعودي لحلول التعدين والحفر. الشريك الرسمي لـ Aramine وTechnidrill وNormet في المملكة العربية السعودية — معدّات تحت الأرض وقطع غيار وإطارات ومعدّات سلامة وتوريد مخصّص.' },
      products: { title: 'المنتجات — الحفر وقطع الغيار والإطارات والسلامة | أرمينسول', desc: 'مجموعة متكاملة من المنتجات للتعدين والصناعة: الحفر والاستكشاف، قطع الغيار ومعدّات التعدين، الإطارات، والسلامة ومعدّات الوقاية. الشريك الرسمي لـ Aramine وTechnidrill وNormet في السعودية.' },
      normet: { title: 'Normet في السعودية — المعدّات ومطارق Xrock ومعدّات Aliva وقطع الغيار | أرمينسول', desc: 'أرمينسول هي الوكيل والموزع الرسمي لشركة Normet في المملكة العربية السعودية: معدّات التعدين والأنفاق تحت الأرض، المطارق الهيدروليكية وأنظمة تكسير الصخور Normet Xrock، معدّات الخرسانة المرشوشة Aliva، وقطع الغيار الأصلية والخدمات.' },
      about: { title: 'عن أرمينسول — شريككم في الحلول منذ 2016', desc: 'شركة سعودية لحلول التعدين تأسّست عام 2016 ومقرّها الدمّام. الشريك الرسمي لـ Aramine وTechnidrill وNormet في المملكة العربية السعودية.' },
      services: { title: 'الخدمات — الصيانة والتأجير وإدارة الإطارات | أرمينسول', desc: 'دعم تشغيلي للتعدين: صيانة المعدّات الثقيلة، تأجير معدّات التعدين تحت الأرض، إدارة الإطارات، الاستشارات الفنية، دعم ما بعد البيع، والاستيراد والتوريد.' },
      contact: { title: 'تواصل مع أرمينسول — اطلب عرض سعر | الدمّام، السعودية', desc: 'تواصل مع أرمينسول للاستفسار عن المنتجات وطلب عروض الأسعار والدعم الفني وحلول التعدين. المكتب الرئيسي في الدمّام، المملكة العربية السعودية.' },
    },
    home: {
      heroTitle: 'شريككم الموثوق في حلول التعدين',
      heroSub: 'شريك سعودي في حلول التعدين يخدم المتطلّبات التشغيلية في أنحاء المملكة.',
      heroCtaPrimary: 'استكشف منتجاتنا',
      heroCtaSecondary: 'تواصل معنا',
      distributorLabel: 'الموزع الرسمي في المملكة العربية السعودية',
      offerLabel: 'ما الذي نقدّمه',
      offers: [
        { title: 'الحفر والاستكشاف', desc: 'أدوات ومستهلكات الحفر الماسي وRC وDTH والمطرقة العلوية.', image: assets.img.drilling, to: '/products#drilling', feature: true },
        { title: 'قطع الغيار', desc: 'قطع غيار أصلية وبديلة لأساطيل التعدين والإنشاءات، تشمل قطع غيار Normet وXrock وAliva الأصلية ودعم الخدمة.', image: assets.img.spareParts, to: '/products#spare-parts' },
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
      partnersIntro: 'أرمينسول هي الشريك الرسمي في المملكة العربية السعودية لثلاث من كبرى الشركات المصنّعة.',
      partners: [
        { name: 'Aramine', logo: assets.aramineLogo, href: assets.aramineUrl, status: 'الموزع الرسمي في المملكة العربية السعودية', body: 'بصفتها الموزّع الرسمي لـ Aramine في المملكة العربية السعودية، توفّر أرمينسول معدّات التعدين تحت الأرض وقطع الغيار الأصلية ومجموعة SmartParts — لتمنح المشغّلين المحلّيين وصولًا مباشرًا إلى المكوّنات الأصلية والدعم المعتمد من المصنّع.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, href: assets.technidrillUrl, status: 'الموزع الرسمي في المملكة العربية السعودية', body: 'بصفتها الموزّع الرسمي لـ Technidrill في المملكة العربية السعودية، توفّر أرمينسول منتجات حفر واستكشاف متميّزة، مدعومة بخبرة المصنّع وتوريد محلّي موثوق.' },
        { name: 'Normet', logo: assets.normetLogo, status: 'الوكيل والموزع الرسمي في المملكة العربية السعودية', to: '/products/normet', body: 'بموجب اتفاقيتَي الوكالة والتوزيع مع Normet، توفّر أرمينسول المجموعة الكاملة من منتجات Normet في المملكة العربية السعودية — معدّات التعدين والأنفاق تحت الأرض، المطارق الهيدروليكية وحلول تكسير الصخور Normet Xrock، معدّات Aliva، وقطع الغيار الأصلية والخدمات المرتبطة بها.' },
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
        { label: 'قطع الغيار', to: '#spare-parts' },
        { label: 'الإطارات', to: '#tires' },
        { label: 'السلامة ومعدات الوقاية', to: '#safety' },
        { label: 'المعدّات تحت الأرض', to: '#normet-equipment' },
        { label: 'تكسير الصخور', to: '#normet-rock-breaking' },
        { label: 'Aliva', to: '#normet-aliva' },
        { label: 'تدعيم الصخور', to: '#normet-rock-reinforcement' },
        { label: 'كيماويات البناء', to: '#normet-construction-chemicals' },
      ],
      distributorsLabel: 'شركاء التوزيع الرسميون',
      distributors: [
        { name: 'Aramine', logo: assets.aramineLogo, href: assets.aramineUrl, status: 'الموزع الرسمي في المملكة العربية السعودية', desc: 'معدّات التعدين تحت الأرض وقطع الغيار الأصلية ومجموعة SmartParts.' },
        { name: 'Technidrill', logo: assets.technidrillLogo, href: assets.technidrillUrl, status: 'الموزع الرسمي في المملكة العربية السعودية', desc: 'منتجات حفر واستكشاف متميّزة مدعومة بخبرة المصنّع.' },
        { name: 'Normet', logo: assets.normetLogo, status: 'الوكيل والموزع الرسمي في المملكة العربية السعودية', desc: 'معدّات تحت الأرض وحلول تكسير الصخور Xrock ومعدّات Aliva وقطع الغيار والخدمات.', to: '/products/normet' },
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
          para: 'بصفتها الموزّع الرسمي لـ Aramine في المملكة العربية السعودية، توفّر أرمينسول قطع غيار ومعدّات Aramine الأصلية، إضافةً إلى مجموعة واسعة من القطع والفلاتر لأساطيل التعدين والإنشاءات. وبصفتنا الوكيل والموزع الرسمي لشركة Normet، نوفّر أيضًا قطع غيار Normet وXrock وAliva الأصلية ودعم الخدمة.',
          subLabel: 'علامات موردة أيضًا',
          sub: ['Caterpillar', 'Epiroc / Atlas Copco', 'Sandvik', 'المكوّنات الهيدروليكية وأجزاء الجنزير والتآكل', 'الفلاتر والمستهلكات'],
          note: 'تُقدَّم Caterpillar وEpiroc / Atlas Copco وSandvik كعلامات موردة.',
        },
        {
          id: 'tires', n: '03', title: 'الإطارات', image: assets.img.tires, list: true,
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
    normet: {
      status: 'الوكيل والموزع الرسمي في المملكة العربية السعودية',
      title: 'معدّات وحلول Normet في المملكة العربية السعودية',
      intro: 'بموجب اتفاقيتَي الوكالة والتوزيع، توفّر أرمينسول المجموعة الكاملة من منتجات وخدمات Normet في المملكة — الآليات، والمطارق الهيدروليكية وحلول تكسير الصخور، ومعدّات Aliva، وقطع الغيار والحلول المرتبطة بها.',
      allProducts: 'جميع المنتجات',
      heroAlt: 'معدّات Normet للعمل تحت الأرض',
      railLabel: 'فئات منتجات Normet',
      aboutLabel: 'عن Normet',
      about: 'Normet شركة تقنية فنلندية تعمل منذ أكثر من 60 عامًا على جعل التعدين تحت الأرض وحفر الأنفاق أكثر أمانًا وإنتاجية — عبر المعدّات وأنظمة تكسير الصخور ومواد تدعيم الصخور وخدمات دورة حياة المعدّات.',
      facts: [
        { v: '+60', l: 'عامًا من الخبرة' },
        { v: '+15,000', l: 'آلية تم توريدها' },
        { v: '+50', l: 'موقعًا حول العالم' },
        { v: '30', l: 'دولة' },
      ],
      categories: [
        {
          id: 'normet-equipment', n: '01', short: 'المعدّات تحت الأرض', card: 'آليات Normet لرشّ الخرسانة ونقلها وشحن المتفجّرات وإزالة الصخور المفكّكة والرفع والنقل.', title: 'معدّات التعدين والأنفاق تحت الأرض', image: assets.img.normetEquipment, list: true,
          para: 'آليات Normet مصمّمة خصيصًا لكل مرحلة من مراحل العمل تحت الأرض، متوفّرة بمحرّكات ديزل أو بمنظومة الدفع الكهربائية بالبطاريات Normet SmartDrive.',
          subLabel: 'مجموعة المعدّات',
          sub: [
            'رشّ الخرسانة — آليات الرشّ Spraymec',
            'نقل الخرسانة — خلّاطات النقل Utimec',
            'شحن المتفجّرات — آليات Charmec للمستحلبات وANFO',
            'إزالة الصخور المفكّكة — آليات Scamec',
            'الرفع والتركيب — منصّات Himec وUtilift المقصّية والسلّية',
            'النقل والإمداد تحت الأرض — ناقلات Variomec وMultimec للأفراد والمواد والخدمات',
          ],
          note: 'تُحدَّد الموديلات والتجهيزات بحسب تطبيقك عند الطلب.',
        },
        {
          id: 'normet-rock-breaking', n: '02', short: 'المطارق الهيدروليكية وتكسير الصخور', card: 'المطارق الهيدروليكية Normet Xrock وأنظمة أذرع التكسير والأذرع الثابتة وحلول الأتمتة.', title: 'المطارق الهيدروليكية وحلول تكسير الصخور', image: assets.img.normetXrock,
          para: 'تقدّم Normet Xrock خبرة تتجاوز 30 عامًا في تصميم وتصنيع أنظمة تكسير الصخور للمناجم والمحاجر ومصانع الركام ومواقع الإنشاءات — أنظمة متكاملة تتخلّص من الصخور كبيرة الحجم وتُبقي الكسّارات والغرابيل في حالة تشغيل.',
          subLabel: 'مجموعة Normet Xrock',
          sub: ['المطارق الهيدروليكية', 'أنظمة أذرع التكسير', 'الأذرع الثابتة (Pedestal Booms)', 'ملحقات الأذرع', 'الأتمتة والتشغيل عن بُعد Xrock Automation', 'قطع غيار Xrock الأصلية'],
        },
        {
          id: 'normet-aliva', n: '03', short: 'معدّات Aliva', card: 'آلات الرشّ الدوّارة وأذرع الرشّ ووحدات الجرعات وآلات المونة من Aliva.', title: 'معدّات الخرسانة المرشوشة Aliva', image: assets.img.normetAliva,
          para: 'Aliva هي علامة Normet لمعدّات الخرسانة المرشوشة، بخبرة تزيد على 75 عامًا في هذا المجال. آليات متينة سهلة التجهيز والتشغيل والتنظيف — للأنفاق والتعدين وتثبيت المنحدرات وترميم الخرسانة وأعمال الإنشاءات.',
          subLabel: 'فئات المنتجات',
          sub: ['آلات الرشّ الدوّارة (Rotor)', 'أذرع الرشّ (Manipulators)', 'وحدات الجرعات', 'آلات المونة'],
        },
        {
          id: 'normet-rock-reinforcement', n: '04', short: 'تدعيم الصخور', card: 'براغي الصخور الديناميكية والساكنة وراتنجات التحكّم بالتربة وحقن الشقوق من Normet.', title: 'تدعيم الصخور ودعم التربة', image: assets.img.normetGround,
          para: 'أنظمة تدعيم الصخور من Normet للتحكّم بالتربة في التعدين وحفر الأنفاق — دعم ساكن للظروف الاعتيادية، ودعم ديناميكي للصخور الزلزالية والمنضغطة، ودعم مدني لمشاريع البنية التحتية.',
          subLabel: 'الحلول',
          sub: ['براغي الصخور الديناميكية', 'براغي الصخور الساكنة', 'الدعم المدني', 'راتنجات الحقن للتحكّم بالتربة', 'حقن شقوق الصخور'],
        },
        {
          id: 'normet-construction-chemicals', n: '05', short: 'كيماويات البناء', card: 'إضافات الخرسانة المرشوشة وراتنجات الحقن والعزل المائي ومونة الترميم من Normet.', title: 'كيماويات البناء', image: assets.img.normetChemicals,
          para: 'كيماويات بناء من Normet للتعدين وحفر الأنفاق والإنشاءات المدنية — من إضافات الخرسانة المرشوشة إلى التحكّم بالمياه والعزل المائي والترميم.',
          subLabel: 'مجموعات المنتجات',
          sub: ['إضافات الخرسانة المرشوشة', 'إضافات الخرسانة الجاهزة ومسبقة الصبّ', 'إضافات آلات حفر الأنفاق (TBM) ومحسّنات التربة', 'راتنجات الحقن والتحكّم بالمياه', 'أغشية العزل المائي المرشوشة', 'مونة الترميم'],
        },
        {
          id: 'normet-parts-services', n: '06', short: 'قطع الغيار والخدمات', card: 'قطع غيار Normet وXrock وAliva الأصلية ودعم الصيانة والتدريب.', title: 'قطع الغيار الأصلية والخدمات', image: assets.img.normetServices, list: true,
          para: 'توفّر أرمينسول قطع غيار Normet وXrock وAliva الأصلية في المملكة العربية السعودية وتنسّق خدمات Normet لدورة حياة المعدّات، لتبقى معدّاتك منتجة طوال عمرها التشغيلي.',
          subLabel: 'الدعم',
          sub: [
            'قطع الغيار الأصلية وقطع التآكل والمستهلكات',
            'أطقم الخدمة والصيانة',
            'دعم الصيانة والفحص والخدمة الميدانية',
            'تدريب المشغّلين وفنّيي الصيانة',
            'ترقية المعدّات وتحديثها',
            'المراقبة عن بُعد والحلول الرقمية لإدارة الأسطول',
          ],
        },
      ],
      industriesLabel: 'مجالات استخدام حلول Normet',
      industries: ['التعدين تحت الأرض', 'حفر الأنفاق', 'الإنشاءات المدنية', 'المحاجر والركام', 'تثبيت المنحدرات', 'ترميم الخرسانة'],
      ctaTitle: 'تحتاج آلية أو مطرقة أو قطعة غيار من Normet؟',
      ctaCopy: 'أرسل لنا الموديل أو رقم القطعة أو طبيعة التطبيق وسيقوم فريقنا بإعداد عرض سعر مخصّص.',
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

const ROUTES = ['/', '/products', '/services', '/about', '/contact']

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
    normet: s.normet,
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
