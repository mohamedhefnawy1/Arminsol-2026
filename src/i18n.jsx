import { createContext, useContext, useEffect, useState } from 'react'

const IMG = 'https://framerusercontent.com/images/'

// ---- shared (non-text) assets — real photography from the approved live site ----
const assets = {
  flame: IMG + 'GBSIFN1OQOp4q8fgwlTZGwXPRPY.png',
  email: 'info@arminsol.com.sa',
  phone: '+966 56 977 3001',
  whatsapp: 'https://wa.me/966569773001',
  linkedin: 'https://www.linkedin.com/company/arabian-mining-solutions-trading-est/',
  heroBanner: IMG + 'czJ3frGeHWo35okdsmyIOE0DEyE.png',
  aboutImage: IMG + 'RlLwH3R7MGaysWyXzyNtASQwg.png',
  logoImage: IMG + 'kL9z3kkL9we3XO6U3lIAPQChNms.png',
  // what-we-offer card photos (order matches home.offers)
  offerImages: [
    IMG + 'vlnLzekFamjd2yiTHUYWCj90aA.png',   // drilling & exploration
    IMG + 'r9UZLHdymrfghrsStLz4j9VMXM.png',   // spare parts
    IMG + '2cFssqV4CVSbhWNwdIE7Lh5N8.png',    // tires
    IMG + '6CZde9nwY6EyNbMKJ93Gxi8tKA.png',   // safety items
    IMG + 'SwxdeDTCFIgIDbc9gn2W8aSwN5E.png',  // other products (stemming)
    IMG + 'RlLwH3R7MGaysWyXzyNtASQwg.png',    // custom sourcing
  ],
  // product category photos (order matches products.categories)
  categoryImages: [
    IMG + 'bks4QSgG3lgBrrB6Ed0T0spxM.png',    // drilling & exploration
    IMG + 'a7YQiQOeAoW1tCii7OcFJ60GKDY.png',  // spare parts
    IMG + 'tXPT901QE1WEtKiv3kznvOIJI.png',    // tires
    IMG + 'Uv18GONXEVyNyD9ECfTGOw2hr6g.png',  // safety items & uniforms
    IMG + 'SwxdeDTCFIgIDbc9gn2W8aSwN5E.png',  // other products
  ],
  // official brand marks (client-supplied), keyed by the exact brand name
  // in about.brands. Names without a mark render as text.
  brandLogoByName: {
    'Aramine': '/logos/aramine.png',
    'Technidrill (Euroforgroup)': '/logos/technidrill.png',
    'ITR': '/logos/itr.png',
    'JINQUAN Rock Drilling Tools': '/logos/jinquan.png',
    'Vari-Stem Stemming Plugs': '/logos/varistem.png',
    'Hole Products': '/logos/holeproducts.png',
    'IndoTray': '/logos/indotray.png',
    'Wisdom': '/logos/wisdom.png',
  },
  // mineral spectrum from the logo — gold, silver, copper, bauxite, phosphates, lime
  logoSwatch: ['var(--c-gold)', 'var(--c-silver)', 'var(--c-copper)', 'var(--c-bauxite)', 'var(--c-phosphates)', 'var(--c-lime)'],
}

// ============================================================
// All page copy is VERBATIM from ARMINSOL_Website.docx.
// Long paragraphs are pre-split at sentence boundaries only —
// joined back together they reproduce the source text exactly.
// Arabic is a faithful translation (docx has no Arabic body copy)
// and should be reviewed by a native speaker.
// ============================================================
const S = {
  en: {
    langName: 'العربية',
    legalName: 'Arabian Mining Solutions Trading Est.',
    navLabels: ['products', 'about', 'services', 'contact'],
    ui: { explore: 'Explore Our Products', contactUs: 'Contact Us', requestQuote: 'Request a Quotation', menu: 'menu', contactHead: 'contact' },
    home: {
      tagline: 'Partner In Solutions',
      heroTitle: 'Your Trusted Partner in Mining Solutions.',
      heroSub: 'A Saudi-based mining solutions partner delivering reliable equipment, spare parts, and exploration tools — in line with Saudi Vision 2030.',
      introLabel: 'Introduction',
      introLede: 'Arabian Mining Solutions Trading Est. (Arminsol) is a trusted partner serving the mining, quarrying, construction, and industrial sectors across Saudi Arabia.',
      introSince: 'Since 2016, we have been providing top-tier solutions, including drilling and exploration tools, spare parts, OTR tires, safety equipment, technical consultancy, and more.',
      introCustom: 'At Arminsol, we pride ourselves on delivering customized solutions tailored to meet the unique needs of our clients.',
      sinceMark: 'Since 2016',
      intro2: 'The colours of our logo represent the broad spectrum of our markets: gold, lime, silver, copper, bauxite, and phosphates.',
      offerLabel: 'What We Offer',
      offers: [
        { title: 'Drilling & Exploration', desc: 'Wireline tools, Reverse Circulation Drilling, Down-the-Hole (DTH) Drilling , Rotary Blast Hole Drilling, Top Hammer Drilling', to: '/products' },
        { title: 'Spare Parts', desc: 'Caterpillar, Aramine, Epiroc, Sandvik & more', to: '/products' },
        { title: 'Tires', desc: 'OTR, TBR, Crane & Port applications', to: '/products' },
        { title: 'Safety Items', desc: 'Helmets, uniforms, lights, and full PPE range', to: '/products' },
        { title: 'Other Products', desc: 'Stemming plugs, carbon steel, grease', to: '/products' },
        { title: 'Custom Sourcing', desc: 'Tailored procurement of mining equipment, specialized components, and industrial products to meet your exact requirements.', to: '/contact' },
      ],
      whyLabel: 'Why Choose Arminsol?',
      why: ['Competitive Pricing', 'Fast Delivery', 'Technical Support', 'Strong Global Supplier Network', 'Customer-Focused Service'],
      industriesLabel: 'Industries We Serve',
      industries: ['Mining', 'Mineral Exploration', 'Quarrying', 'Construction', 'Cement Plants', 'Infrastructure Projects'],
      trustedLabel: 'Trusted By',
      trustedList: ["Ma'aden", 'AMAK', 'Capital', 'Drill Corp Sahara Saudi', 'AGC', 'Saudi Canadian Mining Services (SCMS)', 'Eastern Cement', 'Yamama Cement', 'Saudi Cement'],
      trustedNote: 'and many more.',
      closing: 'Get in touch with Arminsol for mining solutions:',
    },
    about: {
      title: 'About Us',
      whoLabel: 'Who We Are',
      whoLede: 'Arabian Mining Solutions Trading Est. (Arminsol) is a trusted partner serving the mining, quarrying, construction, and industrial sectors across Saudi Arabia.',
      whoSince: 'Since 2016, we have been providing top-tier solutions, including drilling and exploration tools, spare parts, OTR tires, safety equipment, technical consultancy, and more.',
      who2a: 'At Arminsol, we pride ourselves on delivering customized solutions tailored to meet the unique needs of our clients.',
      who2b: 'Headquartered in Dammam, we combine a strong global supplier network with deep local market knowledge, serving clients across Saudi Arabia, Egypt, and other GCC countries.',
      sinceMark: 'Since 2016',
      missionLabel: 'Our Mission',
      mission: "Our mission is to provide products and services tailored to our clients' specific needs, emphasizing excellence, safety, and fast delivery. We are committed to ensuring their success and satisfaction through reliable after-sales support.",
      visionLabel: 'Our Vision',
      vision: "Our vision is to be the foremost partner for mining solutions in Saudi Arabia, leading the way in innovation, sustainability, and client satisfaction. Arminsol aims to align with Saudi Arabia's Vision 2030 by fostering economic diversification and growth in the mining industry.",
      identityLabel: 'Our Identity',
      identityLine: 'The colours of our logo represent the broad spectrum of our markets — the diverse mineral sectors we serve:',
      minerals: ['Gold', 'Silver', 'Copper', 'Bauxite', 'Phosphates', 'Lime'],
      brandsLabel: 'Brands We Carry',
      brandsLine: 'Arminsol represents and supplies internationally recognized brands, including:',
      brands: ['Caterpillar (CAT)', 'Epiroc / Atlas Copco', 'Sandvik', 'Boart Longyear', 'Aramine', 'Technidrill (Euroforgroup)', 'ITR', 'JINQUAN Rock Drilling Tools', 'ATOM Bits Canada', 'Vari-Stem Stemming Plugs', 'Hole Products', 'Sundril', 'Core Case', 'IndoTray', 'JSP', 'Wisdom'],
      clientsLabel: 'Our Clients',
      clientsLine: 'Arminsol is proud to serve leading mining, cement, and industrial companies across the Kingdom:',
      closing: 'Arminsol — Partner In Solutions, since 2016.',
    },
    products: {
      title: 'Comprehensive Product Range for Mining & Industry',
      intro: 'From spare parts to specialized exploration equipment, Arminsol supplies everything your operation needs — sourced from certified global manufacturers and backed by technical support.',
      categories: [
        {
          n: '01', title: 'Drilling & Exploration',
          para: 'As the Official Distributor of Technidrill, Arminsol delivers premium drilling products alongside trusted solutions from Dimatec (Canada) Sundril and Hole Products.',
          para2: 'Our portfolio includes more than 300 products supporting exploration drilling, mining, and geotechnical applications.',
          bullets: ['Diamond drill bits, core barrels, head assemblies & Accessories', 'Wireline core retrieval tools', 'Reverse Circulation (RC) drilling — DTH hammers, rods & subs, accessories', 'Blast hole tools — OEM Top Hammer bits, rods, and shank adapters', 'Core trays & RC chip boxes'],
        },
        {
          n: '02', title: 'Spare Parts',
          para: 'Arminsol is the Official Distributor of Aramine in Saudi Arabia and an independent supplier of high-quality spare parts and filters for a wide range of mining and construction equipment.',
          para2: 'We are also a Purchase Agent of Caterpillar® and specialize in replacement parts and service kits for Epiroc® / Atlas Copco® and Sandvik® equipment.',
          note: 'Our spare parts portfolio includes:',
          bullets: ['Official Aramine spare parts', 'Caterpillar® (CAT) spare parts', 'Epiroc® / Atlas Copco® parts and service kits', 'Sandvik® spare parts', 'Hydraulic components, undercarriage & wear parts', 'Filters and consumables'],
        },
        {
          n: '03', title: 'Tires',
          bullets: ['OTR Tires — for open pit and underground mining, construction, port handling and industrial applications.', 'TBR Tires — on/off road and industrial range, designed for complex road conditions and maximum load capacity.', 'Crane & Port Tires — superior wear performance, improved heat release, and better control due to pattern design.'],
        },
        {
          n: '04', title: 'Safety Items & Uniforms',
          bullets: ['Safety helmets', 'Own-brand uniforms with 3M® reflective striping — customizable with your company colours and logo', 'Coveralls and fire-resistant coveralls', 'Working lights, LED strobe lights, buggy whips, safety cones', 'Face, hand, and ear protection; safety footwear', 'Heat stress management and PPE for open pit and underground mining'],
        },
        {
          n: '05', title: 'Other Products',
          bullets: ['Vari-Stem® stemming plugs — optimized fragmentation, faster truck loading, and higher crusher yield', 'Carbon steel products', 'Soil Solutions® — dust suppression and soil stabilization', 'DN1® environmentally friendly degreaser (sole distributor)'],
        },
      ],
      customLabel: 'Custom Sourcing',
      custom1: "Don't see what you need? Arminsol can source specialized products to meet your specific requirements.",
      custom2: 'Contact our team with your specifications for a tailored quotation.',
    },
    services: {
      title: 'More Than a Supplier — A Partner In Solutions',
      intro: 'Arminsol supports your operations end-to-end: from sourcing and supply to technical consultancy and after-sales care.',
      items: [
        { icon: 'tire', title: 'Tire Management Solutions', desc: 'Focused technical assessment of OTR tires — helping you maximize tire life, reduce operating costs, and improve fleet availability through professional monitoring and expert recommendations.' },
        { icon: 'wrench', title: 'Heavy Equipment Maintenance', desc: 'Professional maintenance and repair services for mining and heavy equipment, including preventive maintenance, diagnostics, component replacement, and field support to maximize equipment reliability and minimize downtime.' },
        { icon: 'loader', title: 'Underground Mining Equipment Rental', desc: 'Flexible rental solutions for underground mining equipment, providing well-maintained machines for short- and long-term projects. Our rental fleet helps customers increase productivity while reducing capital investment.' },
        { icon: 'compass', title: 'Technical Consultancy', desc: 'Expert advice and support for mining operations, including product selection, equipment specifications, drilling program support, and blast optimization through Vari-Stem® stemming solutions.' },
        { icon: 'headset', title: 'After-Sales Support', desc: "Comprehensive support to ensure the performance and longevity of our products — because our partnership doesn't end at delivery." },
        { icon: 'sliders', title: 'Custom Solutions', desc: 'Custom solutions designed to meet specific client needs, ensuring optimal performance. From branded uniforms in your company colours to tailored supply arrangements and consignment stock.' },
        { icon: 'globe', title: 'Import & Supply', bullets: ['International sourcing through a strong global supplier network (Canada, Europe, Sweden, and Asia)', 'Import handling, customs clearance, and delivery to your site', 'Fast-track procurement for urgent spare parts and consumables', 'Competitive pricing on bulk and framework orders'] },
      ],
      whyLabel: 'Why Partner with Arminsol?',
      why: [
        { title: 'Competitive Pricing', desc: 'direct manufacturer relationships keep costs down' },
        { title: 'Fast Delivery', desc: 'efficient logistics from global sources to your site' },
        { title: 'Technical Support', desc: 'knowledgeable team backing every product we supply' },
        { title: 'Strong Global Supplier Network', desc: 'certified brands and OEM-quality products' },
        { title: 'Customer-Focused Service', desc: 'responsive, flexible, and committed to your success' },
      ],
      contactLabel: 'Contact Us',
      contactName: 'Arminsol Trading Est.',
      contactAddr: '2 (B) St., 7770-Al Faiha, Unit 2, 32442-3725 Dammam, Kingdom of Saudi Arabia',
      contactPhoneLabel: 'Phone:', contactPhone: '+966 56 977 3001',
      contactEmailLabel: 'Email:', contactEmail: 'info@arminsol.com.sa',
      contactWebLabel: 'Website:', contactWeb: 'www.arminsol.com.sa',
      contactClosing: 'Get in touch with Arminsol for mining solutions. We look forward to your favorable response.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'To inquire about a product or service, please fill in the form below',
      sourcing: 'Sourcing Available',
      channels: [
        { label: 'LinkedIn', value: 'Arabian Mining Solutions', href: 'https://www.linkedin.com/company/arabian-mining-solutions-trading-est/' },
        { label: 'Email', value: 'info@arminsol.com.sa', href: 'mailto:info@arminsol.com.sa' },
        { label: 'Phone', value: '+966 56 977 3001', href: 'tel:+966569773001' },
        { label: 'Location', value: '2 (B) St., 7770-Al Faiha, Unit 2, 32442-3725 Dammam, Kingdom of Saudi Arabia' },
      ],
      form: {
        first: 'First name', last: 'Last name', email: 'Email address', company: 'Company', phone: 'Phone',
        message: 'Your message', send: 'Send Message',
      },
      sentTitle: "Thanks — we'll be in touch",
      sentBody: "This demo form isn't wired to a backend yet. Connect it to your email service or form provider to receive messages.",
      sendAnother: 'Send another',
    },
  },

  ar: {
    langName: 'English',
    legalName: 'مؤسسة حلول التعدين العربية للتجارة',
    navLabels: ['المنتجات', 'من نحن', 'الخدمات', 'تواصل معنا'],
    ui: { explore: 'استكشف منتجاتنا', contactUs: 'تواصل معنا', requestQuote: 'اطلب عرض سعر', menu: 'القائمة', contactHead: 'التواصل' },
    home: {
      tagline: 'شريك في الحلول',
      heroTitle: 'شريكك الموثوق في حلول التعدين.',
      heroSub: 'شريك سعودي في حلول التعدين يوفّر معدّات موثوقة وقطع غيار وأدوات استكشاف — بما يتوافق مع رؤية السعودية 2030.',
      introLabel: 'مقدمة',
      introLede: 'مؤسسة حلول التعدين العربية للتجارة (أرمينسول) شريك موثوق يخدم قطاعات التعدين والمحاجر والإنشاءات والصناعة في المملكة العربية السعودية.',
      introSince: 'منذ عام 2016 ونحن نقدّم حلولًا رفيعة المستوى تشمل أدوات الحفر والاستكشاف وقطع الغيار وإطارات المعدّات الثقيلة ومعدّات السلامة والاستشارات الفنية والمزيد.',
      introCustom: 'نفخر في أرمينسول بتقديم حلول مخصّصة مصمّمة لتلبية الاحتياجات الفريدة لعملائنا.',
      sinceMark: 'منذ عام 2016',
      intro2: 'تمثّل ألوان شعارنا الطيف الواسع لأسواقنا: الذهب، والجير، والفضّة، والنحاس، والبوكسيت، والفوسفات.',
      offerLabel: 'ما الذي نقدّمه',
      offers: [
        { title: 'الحفر والاستكشاف', desc: 'أدوات الوايرلاين، والحفر بالدوران العكسي، والحفر بنظام DTH، وحفر ثقوب التفجير الدوّار، والحفر بالمطرقة العلوية', to: '/products' },
        { title: 'قطع الغيار', desc: 'كاتربيلر، وأرامين، وإيبيروك، وساندفيك والمزيد', to: '/products' },
        { title: 'الإطارات', desc: 'تطبيقات OTR وTBR والرافعات والموانئ', to: '/products' },
        { title: 'معدّات السلامة', desc: 'الخوذ، والملابس الموحّدة، والأضواء، ومجموعة معدّات الوقاية الشخصية الكاملة', to: '/products' },
        { title: 'منتجات أخرى', desc: 'سدّادات التفجير، والصلب الكربوني، والشحوم', to: '/products' },
        { title: 'التوريد المخصّص', desc: 'توريد مصمّم لمعدّات التعدين والمكوّنات المتخصّصة والمنتجات الصناعية لتلبية متطلّباتك بدقّة.', to: '/contact' },
      ],
      whyLabel: 'لماذا تختار أرمينسول',
      why: ['أسعار تنافسية', 'توريد سريع', 'دعم فني', 'شبكة موردين عالمية قوية', 'خدمة تركّز على العميل'],
      industriesLabel: 'القطاعات التي نخدمها',
      industries: ['التعدين', 'استكشاف المعادن', 'المحاجر', 'الإنشاءات', 'مصانع الأسمنت', 'مشاريع البنية التحتية'],
      trustedLabel: 'موضع ثقة',
      trustedList: ["Ma'aden", 'AMAK', 'Capital', 'Drill Corp Sahara Saudi', 'AGC', 'Saudi Canadian Mining Services (SCMS)', 'Eastern Cement', 'Yamama Cement', 'Saudi Cement'],
      trustedNote: 'وغيرهم الكثير.',
      closing: 'تواصل مع أرمينسول لحلول التعدين:',
    },
    about: {
      title: 'من نحن',
      whoLabel: 'من نحن',
      whoLede: 'مؤسسة حلول التعدين العربية للتجارة (أرمينسول) شريك موثوق يخدم قطاعات التعدين والمحاجر والإنشاءات والصناعة في المملكة العربية السعودية.',
      whoSince: 'منذ عام 2016 ونحن نقدّم حلولًا رفيعة المستوى تشمل أدوات الحفر والاستكشاف وقطع الغيار وإطارات المعدّات الثقيلة ومعدّات السلامة والاستشارات الفنية والمزيد.',
      who2a: 'نفخر في أرمينسول بتقديم حلول مخصّصة مصمّمة لتلبية الاحتياجات الفريدة لعملائنا.',
      who2b: 'ومن مقرّنا في الدمّام، نجمع بين شبكة موردين عالمية قوية ومعرفة عميقة بالسوق المحلّي، لنخدم عملاءنا في المملكة العربية السعودية ومصر وسائر دول الخليج.',
      sinceMark: 'منذ عام 2016',
      missionLabel: 'مهمّتنا',
      mission: 'مهمّتنا هي تقديم منتجات وخدمات مصمّمة وفق الاحتياجات المحدّدة لعملائنا، مع التركيز على التميّز والسلامة وسرعة التوريد. ونحن ملتزمون بضمان نجاحهم ورضاهم من خلال دعمٍ موثوق لما بعد البيع.',
      visionLabel: 'رؤيتنا',
      vision: 'رؤيتنا أن نكون الشريك الأول لحلول التعدين في المملكة العربية السعودية، رائدين في الابتكار والاستدامة ورضا العملاء. وتسعى أرمينسول إلى مواءمة رؤية السعودية 2030 عبر تعزيز التنويع الاقتصادي والنمو في قطاع التعدين.',
      identityLabel: 'هويّتنا',
      identityLine: 'تمثّل ألوان شعارنا الطيف الواسع لأسواقنا — القطاعات المعدنية المتنوّعة التي نخدمها:',
      minerals: ['ذهب', 'فضّة', 'نحاس', 'بوكسيت', 'فوسفات', 'جير'],
      brandsLabel: 'العلامات التجارية التي نوفّرها',
      brandsLine: 'تمثّل أرمينسول وتورّد علاماتٍ تجارية عالمية معروفة، من بينها:',
      brands: ['Caterpillar (CAT)', 'Epiroc / Atlas Copco', 'Sandvik', 'Boart Longyear', 'Aramine', 'Technidrill (Euroforgroup)', 'ITR', 'JINQUAN Rock Drilling Tools', 'ATOM Bits Canada', 'Vari-Stem Stemming Plugs', 'Hole Products', 'Sundril', 'Core Case', 'IndoTray', 'JSP', 'Wisdom'],
      clientsLabel: 'عملاؤنا',
      clientsLine: 'تفخر أرمينسول بخدمة كبرى شركات التعدين والأسمنت والصناعة في أنحاء المملكة:',
      closing: 'أرمينسول — شريك في الحلول، منذ 2016.',
    },
    products: {
      title: 'مجموعة منتجات شاملة للتعدين والصناعة',
      intro: 'من قطع الغيار إلى معدّات الاستكشاف المتخصّصة، توفّر أرمينسول كل ما تحتاجه عملياتك — من مصنّعين عالميين معتمدين ومدعومًا بالدعم الفني.',
      categories: [
        {
          n: '01', title: 'الحفر والاستكشاف',
          para: 'بصفتنا الموزّع الرسمي لـ Technidrill، تقدّم أرمينسول منتجات حفر متميّزة إلى جانب حلول موثوقة من Dimatec (كندا) وSundril وHole Products.',
          para2: 'تضمّ محفظتنا أكثر من 300 منتج تدعم حفر الاستكشاف والتعدين والتطبيقات الجيوتقنية.',
          bullets: ['تيجان الحفر الماسية، والأنابيب اللُّبّية، ومجموعات الرؤوس وملحقاتها', 'أدوات استرجاع العيّنات اللُّبّية بالوايرلاين', 'الحفر بالدوران العكسي (RC) — مطارق DTH، والقضبان والوصلات، والملحقات', 'أدوات ثقوب التفجير — تيجان علوية أصلية، وقضبان، ومحوّلات صدمة', 'صواني العيّنات اللُّبّية وصناديق رقائق RC'],
        },
        {
          n: '02', title: 'قطع الغيار',
          para: 'أرمينسول هي الموزّع الرسمي لـ Aramine في المملكة العربية السعودية، ومورّد مستقل لقطع غيار وفلاتر عالية الجودة لمجموعة واسعة من معدّات التعدين والإنشاءات.',
          para2: 'كما أننا وكيل شراء لـ Caterpillar® ومتخصّصون في قطع الغيار البديلة ومجموعات الخدمة لمعدّات Epiroc® / Atlas Copco® وSandvik®.',
          note: 'تشمل محفظة قطع الغيار لدينا:',
          bullets: ['قطع غيار Aramine الأصلية', 'قطع غيار Caterpillar® (CAT)', 'قطع ومجموعات خدمة Epiroc® / Atlas Copco®', 'قطع غيار Sandvik®', 'المكوّنات الهيدروليكية، وأجزاء الجنزير والتآكل', 'الفلاتر والمستهلكات'],
        },
        {
          n: '03', title: 'الإطارات',
          bullets: ['إطارات OTR — للتعدين المكشوف وتحت الأرض، والإنشاءات، ومناولة الموانئ، والتطبيقات الصناعية.', 'إطارات TBR — للطرق الممهّدة والوعرة والمدى الصناعي، مصمّمة لظروف الطرق المعقّدة وأقصى قدرة تحميل.', 'إطارات الرافعات والموانئ — أداء تآكل متفوّق، وتحرير حرارة أفضل، وتحكّم أفضل بفضل تصميم النقشة.'],
        },
        {
          n: '04', title: 'معدّات السلامة والملابس الموحّدة',
          bullets: ['خوذ السلامة', 'ملابس موحّدة بعلامتنا الخاصة بشرائط عاكسة 3M® — قابلة للتخصيص بألوان شركتك وشعارها', 'أفرولات وأفرولات مقاومة للحريق', 'أضواء عمل، وأضواء وميض LED، وقضبان تحذير، ومخاريط سلامة', 'حماية للوجه واليدين والأذن؛ وأحذية سلامة', 'إدارة الإجهاد الحراري ومعدّات الوقاية للتعدين المكشوف وتحت الأرض'],
        },
        {
          n: '05', title: 'منتجات أخرى',
          bullets: ['سدّادات التفجير Vari-Stem® — تفتيت محسّن، وتحميل أسرع للشاحنات، وإنتاجية أعلى للكسّارة', 'منتجات الصلب الكربوني', 'Soil Solutions® — كبح الغبار وتثبيت التربة', 'DN1® مزيل شحوم صديق للبيئة (الموزّع الحصري)'],
        },
      ],
      customLabel: 'التوريد المخصّص',
      custom1: 'لا تجد ما تحتاجه؟ يمكن لأرمينسول توريد منتجات متخصّصة لتلبية متطلّباتك المحدّدة.',
      custom2: 'تواصل مع فريقنا مع مواصفاتك للحصول على عرض سعر مخصّص.',
    },
    services: {
      title: 'أكثر من مورّد — شريك في الحلول',
      intro: 'تدعم أرمينسول عملياتك من البداية إلى النهاية: من التوريد والإمداد إلى الاستشارات الفنية والعناية بما بعد البيع.',
      items: [
        { icon: 'tire', title: 'حلول إدارة الإطارات', desc: 'تقييم فني مركّز لإطارات OTR — يساعدك على تعظيم عمر الإطار، وخفض تكاليف التشغيل، وتحسين جاهزية الأسطول عبر المراقبة الاحترافية والتوصيات الخبيرة.' },
        { icon: 'wrench', title: 'صيانة المعدّات الثقيلة', desc: 'خدمات صيانة وإصلاح احترافية لمعدّات التعدين والمعدّات الثقيلة، تشمل الصيانة الوقائية والتشخيص واستبدال المكوّنات والدعم الميداني لتعظيم موثوقية المعدّات وتقليل التوقّف.' },
        { icon: 'loader', title: 'تأجير معدّات التعدين تحت الأرض', desc: 'حلول تأجير مرنة لمعدّات التعدين تحت الأرض، توفّر آلاتٍ جيّدة الصيانة للمشاريع القصيرة والطويلة الأمد. يساعد أسطول التأجير لدينا العملاء على زيادة الإنتاجية مع خفض الاستثمار الرأسمالي.' },
        { icon: 'compass', title: 'الاستشارات الفنية', desc: 'مشورة ودعم خبير لعمليات التعدين، تشمل اختيار المنتجات، ومواصفات المعدّات، ودعم برامج الحفر، وتحسين التفجير عبر حلول سدّادات Vari-Stem®.' },
        { icon: 'headset', title: 'دعم ما بعد البيع', desc: 'دعم شامل لضمان أداء منتجاتنا وطول عمرها — لأن شراكتنا لا تنتهي عند التسليم.' },
        { icon: 'sliders', title: 'حلول مخصّصة', desc: 'حلول مخصّصة مصمّمة لتلبية احتياجات العملاء المحدّدة وضمان الأداء الأمثل. من الملابس الموحّدة بألوان شركتك إلى ترتيبات التوريد المصمّمة ومخزون الأمانة.' },
        { icon: 'globe', title: 'الاستيراد والتوريد', bullets: ['التوريد الدولي عبر شبكة موردين عالمية قوية (كندا، وأوروبا، والسويد، وآسيا)', 'مناولة الاستيراد، والتخليص الجمركي، والتوصيل إلى موقعك', 'توريد سريع لقطع الغيار والمستهلكات العاجلة', 'أسعار تنافسية على الطلبات بالجملة والاتفاقيات الإطارية'] },
      ],
      whyLabel: 'لماذا الشراكة مع أرمينسول؟',
      why: [
        { title: 'أسعار تنافسية', desc: 'علاقات مباشرة مع المصنّعين تُبقي التكاليف منخفضة' },
        { title: 'توريد سريع', desc: 'لوجستيات فعّالة من مصادر عالمية إلى موقعك' },
        { title: 'دعم فني', desc: 'فريق متمرّس يدعم كل منتج نورّده' },
        { title: 'شبكة موردين عالمية قوية', desc: 'علامات معتمدة ومنتجات بجودة المصنّع الأصلي' },
        { title: 'خدمة تركّز على العميل', desc: 'استجابة ومرونة والتزام بنجاحك' },
      ],
      contactLabel: 'تواصل معنا',
      contactName: 'مؤسسة أرمينسول للتجارة',
      contactAddr: 'شارع 2 (B)، 7770 الفيحاء، وحدة 2، 32442-3725 الدمّام، المملكة العربية السعودية',
      contactPhoneLabel: 'الهاتف:', contactPhone: '+966 56 977 3001',
      contactEmailLabel: 'البريد الإلكتروني:', contactEmail: 'info@arminsol.com.sa',
      contactWebLabel: 'الموقع:', contactWeb: 'www.arminsol.com.sa',
      contactClosing: 'تواصل مع أرمينسول لحلول التعدين. نتطلّع إلى ردّكم الكريم.',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'للاستفسار عن منتج أو خدمة، يُرجى تعبئة النموذج أدناه',
      sourcing: 'خدمة التوريد متاحة',
      channels: [
        { label: 'لينكدإن', value: 'Arabian Mining Solutions', href: 'https://www.linkedin.com/company/arabian-mining-solutions-trading-est/' },
        { label: 'البريد الإلكتروني', value: 'info@arminsol.com.sa', href: 'mailto:info@arminsol.com.sa' },
        { label: 'الهاتف', value: '+966 56 977 3001', href: 'tel:+966569773001' },
        { label: 'الموقع', value: 'شارع 2 (B)، 7770 الفيحاء، وحدة 2، 32442-3725 الدمّام، المملكة العربية السعودية' },
      ],
      form: {
        first: 'الاسم الأول', last: 'اسم العائلة', email: 'البريد الإلكتروني', company: 'الشركة', phone: 'الهاتف',
        message: 'رسالتك', send: 'إرسال الرسالة',
      },
      sentTitle: 'شكرًا — سنتواصل معك',
      sentBody: 'هذا نموذج تجريبي وغير متّصل بخادمٍ بعد. اربطه بخدمة البريد لديك لاستقبال الرسائل.',
      sendAnother: 'إرسال رسالة أخرى',
    },
  },
}

function build(lang) {
  const s = S[lang]
  return {
    ...assets,
    lang,
    langName: s.langName,
    legalName: s.legalName,
    ui: s.ui,
    nav: s.navLabels.map((label, i) => ({ label, to: ['/products', '/about', '/services', '/contact'][i] })),
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

/** Wraps one exact phrase (e.g. "Since 2016") in an accent span — text unchanged. */
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
