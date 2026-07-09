const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../src/locales/en.json');
const arPath = path.join(__dirname, '../src/locales/ar.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// Projects
en.projects = {
  label: "Selected Work",
  title: "Work that speaks for itself.",
  subtitle: "We don't just build software. We engineer category-defining products that drive measurable business outcomes.",
  read_case_study: "Read Case Study",
  data: {
    "finova-analytics": { tag: "Fintech · SaaS", title: "Finova Analytics Platform", desc: "Real-time financial analytics serving 12,000+ enterprise users across 18 countries, with sub-200ms query response times and a 99.98% uptime SLA.", metric: "12K+ active users" },
    "shipfast-network": { tag: "Logistics · Mobile", title: "ShipFast Driver Network", desc: "Cross-platform mobile app that reduced dispatch times by 43% across a logistics network operating across 6 regional markets in real-time.", metric: "43% faster dispatch" },
    "loyaltygrid-intelligence": { tag: "AI · Automation", title: "LoyaltyGrid Intelligence", desc: "AI-powered churn prediction engine that automatically personalizes retention campaigns — reducing churn by 31% in its first year of deployment.", metric: "31% churn reduction" }
  }
};

ar.projects = {
  label: "أعمالنا المختارة",
  title: "أعمال تتحدث عن نفسها.",
  subtitle: "نحن لا نبني مجرد برمجيات. نحن نصمم منتجات رائدة تقود إلى نتائج أعمال قابلة للقياس.",
  read_case_study: "اقرأ دراسة الحالة",
  data: {
    "finova-analytics": { tag: "التكنولوجيا المالية · برمجيات كخدمة", title: "منصة فينوڤا للتحليلات", desc: "تحليلات مالية في الوقت الفعلي تخدم أكثر من 12000 مستخدم في 18 دولة، مع أوقات استجابة للاستعلامات أقل من 200 مللي ثانية وضمان وقت تشغيل بنسبة 99.98%.", metric: "+12 ألف مستخدم نشط" },
    "shipfast-network": { tag: "لوجستيات · موبايل", title: "شبكة سائقي شيب فاست", desc: "تطبيق جوال عابر للمنصات ساهم في تقليل أوقات الإرسال بنسبة 43% عبر شبكة لوجستية تعمل في 6 أسواق إقليمية في الوقت الفعلي.", metric: "إرسال أسرع بنسبة 43%" },
    "loyaltygrid-intelligence": { tag: "ذكاء اصطناعي · أتمتة", title: "ذكاء لويالتي جريد", desc: "محرك لتوقع خسارة العملاء مدعوم بالذكاء الاصطناعي يقوم تلقائيًا بتخصيص حملات الاحتفاظ بالعملاء — مما يقلل معدل الخسارة بنسبة 31% في عامه الأول.", metric: "تقليل الخسارة بنسبة 31%" }
  }
};

// Team
en.team = {
  label: "The People",
  title: "Engineered by experts.",
  subtitle: "Our team consists of senior engineers, product designers, and systems architects who treat every project as their own.",
  leadership: "Leadership",
  members: "Team Members",
  view_profile: "View Profile",
  data: {
    "alex-turner": { position: "Founder & Technical Director", bio: "Alex brings 12+ years of enterprise architecture experience. He previously led engineering at top tier SaaS companies before founding KushStack to redefine agency quality." },
    "sarah-chen": { position: "Head of Design", bio: "Sarah is obsessed with pixel-perfection and intuitive UX. Her design systems have been used by millions of users globally." },
    "michael-okeke": { position: "Lead Frontend Engineer", bio: "Michael specializes in high-performance web applications and fluid animations. He ensures every interaction feels native and premium." },
    "emma-watson": { position: "AI Engineer", bio: "Building intelligent automated systems and integrating LLMs for next-gen products." },
    "david-kim": { position: "Backend Engineer", bio: "Scalable APIs and robust database architecture are David's bread and butter." }
  }
};

ar.team = {
  label: "فريقنا",
  title: "صُمم بواسطة خبراء.",
  subtitle: "يتكون فريقنا من كبار المهندسين ومصممي المنتجات ومعماريي الأنظمة الذين يعاملون كل مشروع على أنه مشروعهم الخاص.",
  leadership: "القيادة",
  members: "أعضاء الفريق",
  view_profile: "عرض الملف الشخصي",
  data: {
    "alex-turner": { position: "المؤسس والمدير التقني", bio: "يتمتع أليكس بخبرة تزيد عن 12 عاماً في هندسة الأنظمة المؤسسية. قاد الهندسة في كبرى شركات البرمجيات قبل تأسيس كوش ستاك لإعادة تعريف جودة الوكالات." },
    "sarah-chen": { position: "رئيسة التصميم", bio: "سارة مهووسة بدقة البكسل وتجربة المستخدم البديهية. تم استخدام أنظمة التصميم الخاصة بها من قبل ملايين المستخدمين حول العالم." },
    "michael-okeke": { position: "كبير مهندسي الواجهات الأمامية", bio: "يتخصص مايكل في تطبيقات الويب عالية الأداء والرسوم المتحركة السلسة. يضمن أن كل تفاعل يبدو أصلياً ومميزاً." },
    "emma-watson": { position: "مهندسة ذكاء اصطناعي", bio: "بناء أنظمة آلية ذكية ودمج نماذج اللغات الكبيرة في منتجات الجيل القادم." },
    "david-kim": { position: "مهندس الواجهات الخلفية", bio: "واجهات برمجة التطبيقات القابلة للتوسع وبنية قواعد البيانات القوية هي تخصص ديفيد الأساسي." }
  }
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
console.log('Translations updated.');
