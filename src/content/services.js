// Content for all service detail pages (/services/:slug).
// Every service shares the exact same structure so one page renders them all.
// Each entry is bilingual; the page falls back to `en` if a language is missing.

const IMG = 'https://framerusercontent.com/images/'

/* ----------------------------- Tire Management ---------------------------- */
const tire = {
  en: {
    back: 'services', eyebrow: 'tire management', title: 'Tire Management',
    heroImage: IMG + 'yUIR6H1xxwg9sTqEXsireDEfq8.png',
    intro: 'Tires are one of the largest operating costs in mining. ARMINSOL helps you get more from every tire — across OTR and TBR fleets — through expert care, data-driven monitoring, and proactive maintenance that extends life, lifts availability, and lowers cost per hour.',
    manageLabel: 'what we manage',
    manage: ['Inspections & condition assessments', 'Pressure monitoring & optimization', 'Tread wear analysis & tracking', 'Damage & failure analysis', 'Performance reporting', 'Inventory & lifecycle planning', 'Mounting & demounting', 'On-site tire support'],
    duoLabel: 'where we work',
    duo: [
      { title: 'OTR — Heavy Equipment', text: 'Maximizing the performance and lifespan of tires on the most demanding mining equipment.', items: ['Haul trucks', 'Wheel loaders', 'Dump trucks', 'Graders', 'Dozers', 'Excavators'] },
      { title: 'TBR — Transport & Support', text: 'Reliable performance across transport, logistics, and support fleets while reducing cost.', items: ['Transport trucks', 'Water tankers', 'Fuel trucks', 'Service vehicles', 'Logistics fleets'] },
    ],
    howLabel: 'how we work',
    capabilities: [
      { k: '01', title: 'Data-driven monitoring', text: 'We track pressure, temperature, wear and cost-per-kilometre to catch issues before they become failures.' },
      { k: '02', title: 'On-site support', text: 'Field teams handle routine inspections, emergencies and maintenance to keep your operation moving.' },
      { k: '03', title: 'Safety first', text: 'Strict handling, inflation and early hazard-detection standards reduce tire-related risk.' },
    ],
    whyLabel: 'why arminsol',
    why: ['OTR and TBR expertise', 'Dedicated field teams', 'Proactive maintenance', 'Data-driven decisions', 'Safety and compliance', 'Lower cost of ownership'],
    cta: { eyebrow: "let's talk", heading: "Let's optimize your tire performance.", text: "Tell us about your fleet and we'll build a tire management program around it.", button: 'Contact Us' },
  },
  ar: {
    back: 'الخدمات', eyebrow: 'إدارة الإطارات', title: 'إدارة الإطارات',
    heroImage: IMG + 'yUIR6H1xxwg9sTqEXsireDEfq8.png',
    intro: 'تُعدّ الإطارات من أكبر نفقات التشغيل في التعدين. تساعدك أرمينسول على الحصول على أقصى قيمة من كل إطار — عبر أساطيل OTR وTBR — من خلال عنايةٍ متخصّصة ومراقبةٍ معتمدة على البيانات وصيانةٍ استباقية تُطيل العمر وترفع الجاهزية وتخفض التكلفة لكل ساعة.',
    manageLabel: 'ماذا ندير',
    manage: ['الفحوصات وتقييم الحالة', 'مراقبة الضغط وتحسينه', 'تحليل التآكل وتتبّعه', 'تحليل الأضرار والأعطال', 'تقارير الأداء', 'إدارة المخزون ودورة الحياة', 'التركيب والفك', 'الدعم الميداني للإطارات'],
    duoLabel: 'أين نعمل',
    duo: [
      { title: 'OTR — المعدّات الثقيلة', text: 'تعظيم أداء وعمر الإطارات على أكثر معدّات التعدين تطلّبًا.', items: ['شاحنات النقل', 'لوادر العجل', 'القلّابات', 'الممهّدات', 'الجرّافات', 'الحفّارات'] },
      { title: 'TBR — النقل والإسناد', text: 'أداء موثوق عبر أساطيل النقل واللوجستيات والإسناد مع خفض التكلفة.', items: ['شاحنات النقل', 'صهاريج المياه', 'شاحنات الوقود', 'مركبات الخدمة', 'أساطيل اللوجستيات'] },
    ],
    howLabel: 'كيف نعمل',
    capabilities: [
      { k: '01', title: 'مراقبة معتمدة على البيانات', text: 'نتتبّع الضغط والحرارة والتآكل والتكلفة لكل كيلومتر لرصد المشكلات قبل أن تتحوّل إلى أعطال.' },
      { k: '02', title: 'دعم ميداني', text: 'تتولّى الفرق الميدانية الفحوصات الدورية والطوارئ والصيانة لإبقاء عملياتك مستمرّة.' },
      { k: '03', title: 'السلامة أولًا', text: 'معايير صارمة للتعامل والنفخ والكشف المبكر عن المخاطر تقلّل المخاطر المرتبطة بالإطارات.' },
    ],
    whyLabel: 'لماذا أرمينسول',
    why: ['خبرة في OTR وTBR', 'فرق ميدانية مخصّصة', 'صيانة استباقية', 'قرارات معتمدة على البيانات', 'السلامة والامتثال', 'خفض تكلفة الامتلاك'],
    cta: { eyebrow: 'لنتحدّث', heading: 'لنُحسّن أداء إطاراتك.', text: 'أخبرنا عن أسطولك وسنبني برنامج إدارة إطارات مصمّمًا حوله.', button: 'تواصل معنا' },
  },
}

/* -------------------------- Operational Consultancy ----------------------- */
const operational = {
  en: {
    back: 'services', eyebrow: 'operational consultancy', title: 'Operational Consultancy',
    heroImage: IMG + 'arQufLwQnQeVXfr48At8IdbBPyc.png',
    intro: 'Better decisions start with better insight. ARMINSOL works alongside mining and industrial operators to streamline processes, control costs, and lift productivity — turning on-the-ground data into practical, measurable improvements across your operation.',
    manageLabel: 'what we cover',
    manage: ['Operational assessments', 'Cost & efficiency analysis', 'Process optimization', 'Procurement strategy', 'Inventory & supply planning', 'Equipment utilization review', 'Performance benchmarking', 'Implementation support'],
    duoLabel: 'how we engage',
    duo: [
      { title: 'Assess', text: 'We map your current operation, costs and bottlenecks to find where value is being lost.', items: ['Site review', 'Data analysis', 'Cost mapping', 'Benchmarking'] },
      { title: 'Improve', text: 'We design and help implement practical changes that reduce cost and raise output.', items: ['Process redesign', 'Procurement', 'KPIs & reporting', 'On-site rollout'] },
    ],
    howLabel: 'how we work',
    capabilities: [
      { k: '01', title: 'Data-driven', text: 'Recommendations grounded in your operational data, not guesswork.' },
      { k: '02', title: 'Practical', text: 'Changes designed to be implemented on real sites with real constraints.' },
      { k: '03', title: 'Measurable', text: 'Clear KPIs so you can see the impact on cost and productivity.' },
    ],
    whyLabel: 'why arminsol',
    why: ['Regional mining experience', 'Independent perspective', 'Data-driven analysis', 'Practical, on-site focus', 'Cost and productivity gains', 'Tailored to your operation'],
    cta: { eyebrow: "let's talk", heading: "Let's improve your operation.", text: "Tell us where you want to gain ground and we'll map a path to get there.", button: 'Contact Us' },
  },
  ar: {
    back: 'الخدمات', eyebrow: 'الاستشارات التشغيلية', title: 'الاستشارات التشغيلية',
    heroImage: IMG + 'arQufLwQnQeVXfr48At8IdbBPyc.png',
    intro: 'تبدأ القرارات الأفضل برؤيةٍ أوضح. تعمل أرمينسول جنبًا إلى جنب مع مشغّلي التعدين والصناعة لتبسيط العمليات وضبط التكاليف ورفع الإنتاجية — محوّلةً بيانات الموقع إلى تحسيناتٍ عملية وقابلة للقياس عبر عملياتك.',
    manageLabel: 'ما الذي نغطّيه',
    manage: ['تقييم العمليات', 'تحليل التكلفة والكفاءة', 'تحسين العمليات', 'استراتيجية المشتريات', 'تخطيط المخزون والتوريد', 'مراجعة استغلال المعدّات', 'القياس المرجعي للأداء', 'دعم التنفيذ'],
    duoLabel: 'كيف نتعاون',
    duo: [
      { title: 'التقييم', text: 'نرسم خريطة لعملياتك وتكاليفها واختناقاتها لتحديد مواضع فقدان القيمة.', items: ['مراجعة الموقع', 'تحليل البيانات', 'حصر التكاليف', 'القياس المرجعي'] },
      { title: 'التحسين', text: 'نصمّم ونساعد على تنفيذ تغييراتٍ عملية تخفض التكلفة وترفع الإنتاج.', items: ['إعادة تصميم العمليات', 'المشتريات', 'مؤشّرات الأداء', 'التطبيق الميداني'] },
    ],
    howLabel: 'كيف نعمل',
    capabilities: [
      { k: '01', title: 'معتمد على البيانات', text: 'توصيات مبنية على بيانات عملياتك لا على التخمين.' },
      { k: '02', title: 'عملي', text: 'تغييرات مصمّمة للتطبيق في مواقع حقيقية بقيودٍ حقيقية.' },
      { k: '03', title: 'قابل للقياس', text: 'مؤشّرات واضحة لترى الأثر على التكلفة والإنتاجية.' },
    ],
    whyLabel: 'لماذا أرمينسول',
    why: ['خبرة في تعدين المنطقة', 'منظور مستقل', 'تحليل معتمد على البيانات', 'تركيز عملي وميداني', 'مكاسب في التكلفة والإنتاجية', 'مصمّم لعمليتك'],
    cta: { eyebrow: 'لنتحدّث', heading: 'لنُحسّن عملياتك.', text: 'أخبرنا أين تريد التقدّم وسنرسم مسارًا للوصول إليه.', button: 'تواصل معنا' },
  },
}

/* ------------------------------ Stemming Caps ----------------------------- */
const stemming = {
  en: {
    back: 'services', eyebrow: 'stemming caps', title: 'Stemming Caps',
    heroImage: IMG + 'FwpIcYomP4Z6kBvJli8dOezs.png',
    intro: 'Get more energy out of every blast. ARMINSOL supplies and supports stemming caps that confine blast energy more effectively — improving fragmentation, reducing fly-rock and air-blast, and lowering drilling and explosive costs across your operation.',
    manageLabel: 'what they deliver',
    manage: ['Improved fragmentation', 'Better energy confinement', 'Reduced fly-rock', 'Lower air-blast & noise', 'Fewer misfires', 'Reduced explosive use', 'Faster charging', 'Consistent blast results'],
    duoLabel: 'where they fit',
    duo: [
      { title: 'Applications', text: 'Suited to a wide range of blast-hole diameters and bench-blasting conditions.', items: ['Open-pit mining', 'Quarrying', 'Construction', 'Bench blasting'] },
      { title: 'Support', text: 'We help you select the right cap and integrate it into your blasting program.', items: ['Product selection', 'Sizing guidance', 'On-site trials', 'Performance review'] },
    ],
    howLabel: 'why it works',
    capabilities: [
      { k: '01', title: 'Energy confinement', text: 'Caps hold stemming in place so blast energy works on the rock, not out of the hole.' },
      { k: '02', title: 'Safer blasts', text: 'Reduced fly-rock and air-blast for a safer, more controlled result.' },
      { k: '03', title: 'Lower cost', text: 'Better fragmentation means less secondary breakage and lower cost per tonne.' },
    ],
    whyLabel: 'why arminsol',
    why: ['Proven blasting products', 'Application expertise', 'On-site trial support', 'Improved fragmentation', 'Safer blast outcomes', 'Lower cost per tonne'],
    cta: { eyebrow: "let's talk", heading: "Let's improve your blast results.", text: "Tell us about your blasting program and we'll recommend the right stemming solution.", button: 'Contact Us' },
  },
  ar: {
    back: 'الخدمات', eyebrow: 'سدّادات التفجير', title: 'سدّادات التفجير',
    heroImage: IMG + 'FwpIcYomP4Z6kBvJli8dOezs.png',
    intro: 'استخرج طاقةً أكبر من كل عملية تفجير. توفّر أرمينسول وتدعم سدّادات التفجير التي تحتجز طاقة الانفجار بفعالية أكبر — لتحسين التفتيت وتقليل تطاير الصخور والانفجار الهوائي وخفض تكاليف الحفر والمتفجّرات عبر عملياتك.',
    manageLabel: 'ماذا تحقّق',
    manage: ['تفتيت أفضل', 'احتجاز أفضل للطاقة', 'تقليل تطاير الصخور', 'تقليل الانفجار الهوائي والضجيج', 'تقليل حالات الفشل', 'تقليل استهلاك المتفجّرات', 'تعبئة أسرع', 'نتائج تفجير متّسقة'],
    duoLabel: 'أين تُستخدم',
    duo: [
      { title: 'التطبيقات', text: 'مناسبة لمدى واسع من أقطار ثقوب التفجير وظروف التفجير المنصّاتي.', items: ['المناجم المكشوفة', 'المحاجر', 'الإنشاءات', 'التفجير المنصّاتي'] },
      { title: 'الدعم', text: 'نساعدك على اختيار السدّادة المناسبة ودمجها في برنامج التفجير لديك.', items: ['اختيار المنتج', 'إرشادات المقاسات', 'تجارب ميدانية', 'مراجعة الأداء'] },
    ],
    howLabel: 'لماذا تعمل',
    capabilities: [
      { k: '01', title: 'احتجاز الطاقة', text: 'تُبقي السدّادات مادة الحشو في مكانها لتعمل طاقة الانفجار على الصخر لا خارج الثقب.' },
      { k: '02', title: 'تفجير أكثر أمانًا', text: 'تقليل تطاير الصخور والانفجار الهوائي لنتيجة أكثر أمانًا وتحكّمًا.' },
      { k: '03', title: 'تكلفة أقل', text: 'تفتيت أفضل يعني تكسيرًا ثانويًا أقل وتكلفة أقل لكل طن.' },
    ],
    whyLabel: 'لماذا أرمينسول',
    why: ['منتجات تفجير مثبتة', 'خبرة في التطبيق', 'دعم التجارب الميدانية', 'تفتيت محسّن', 'نتائج تفجير أكثر أمانًا', 'تكلفة أقل لكل طن'],
    cta: { eyebrow: 'لنتحدّث', heading: 'لنُحسّن نتائج تفجيرك.', text: 'أخبرنا عن برنامج التفجير لديك وسنوصي بالحل الأنسب من السدّادات.', button: 'تواصل معنا' },
  },
}

const services = {
  'tire-management': tire,
  'operational-consultancy': operational,
  'stemming-caps': stemming,
}

export default services
