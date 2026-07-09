const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '../src/locales/en.json');
const arPath = path.join(__dirname, '../src/locales/ar.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const ar = JSON.parse(fs.readFileSync(arPath, 'utf8'));

en.testimonials = {
  label: "Client Feedback",
  title: "Trusted by Innovators",
  data: {
    "t1": { quote: "KushStack delivered a product that exceeded every specification we gave them. The engineering and design quality was extraordinary — unlike any agency experience I have had before.", name: "Marcus Chen", role: "CEO, Finova Analytics" },
    "t2": { quote: "Working with KushStack felt like having a world-class product team in-house. They understood our users better than most of our own internal team — and they moved remarkably fast.", name: "Priya Nair", role: "CPO, LoyaltyGrid" },
    "t3": { quote: "Our platform went from concept to 10,000 active users in under six months. The quality, speed, and communication were unlike anything I had experienced from an agency before.", name: "James Okonkwo", role: "Founder, ShipFast Logistics" }
  }
};

ar.testimonials = {
  label: "آراء العملاء",
  title: "موثوقون من قبل المبتكرين",
  data: {
    "t1": { quote: "قدمت كوش ستاك منتجًا فاق كل التوقعات التي حددناها لهم. جودة الهندسة والتصميم كانت استثنائية — على عكس أي تجربة مع وكالة برمجيات من قبل.", name: "ماركوس تشن", role: "الرئيس التنفيذي، فينوڤا للتحليلات" },
    "t2": { quote: "العمل مع كوش ستاك كان بمثابة امتلاك فريق منتجات عالمي المستوى داخل شركتنا. لقد فهموا مستخدمينا أفضل من معظم فريقنا الداخلي — وتحركوا بسرعة ملحوظة.", name: "بريا ناير", role: "مدير المنتج، لويالتي جريد" },
    "t3": { quote: "انتقلت منصتنا من مجرد فكرة إلى 10000 مستخدم نشط في أقل من ستة أشهر. الجودة والسرعة والتواصل كانت لا مثيل لها.", name: "جيمس أوكونكو", role: "المؤسس، شيب فاست لوجستيكس" }
  }
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(arPath, JSON.stringify(ar, null, 2));
console.log('Testimonials translations updated.');
