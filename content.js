/* LBH site content (he/en). Every entity holds independent he/en fields.
   Sources: "חומרים לאתר LBH" deck (Nov 2026), client brief and email (21.11.2026), and public press coverage
   (Globes, Calcalist, Bizportal) for dates and transaction context. Financial figures are shown exactly as stated in the deck.
   To hide any item from the live site set `published: false` (funds, people) or `show: false` (blocks). */
window.LBH = {
  site: { url: 'https://benhorinalexandrovitz.github.io/lbh-site', name: 'LBH', logo: 'assets/lbh-logo.png', ogImage: 'assets/og-image.jpg' },


  /* Illustrative images (generated for the site; not photographs of the group's assets or operations).
     Files: assets/img/v2/<id>-1600.webp and <id>-800.webp */
  images: {
    '01-home-hero-haifa-port': { he: 'מבט על מפרץ חיפה והנמל מהכרמל (הדמיה)', en: 'View over Haifa Bay and the port from Mount Carmel (illustration)' },
    '02-home-about-management': { he: 'צוות הנהלה דן בתוכנית עסקית סביב שולחן ישיבות (הדמיה)', en: 'A management team reviewing a business plan around a table (illustration)' },
    '03-home-investment-dan': { he: 'אוטובוס חשמלי בחניון טעינה עירוני (הדמיה)', en: 'An electric bus at an urban charging depot (illustration)' },
    '04-home-investment-gadot': { he: 'מיכלי אחסון, מכלית כביש ואוניית מטען במסוף ימי (הדמיה)', en: 'Storage tanks, a road tanker and a tanker vessel at a marine terminal (illustration)' },
    '05-home-investment-mankai': { he: 'בדיקת צמחי מים זעירים בבריכת גידול בחממה (הדמיה)', en: 'Inspecting tiny aquatic plants in a greenhouse growing pond (illustration)' },
    '06-home-model-core-business': { he: 'מנהל תפעול בחניון אוטובוסים חשמליים (הדמיה)', en: 'An operations manager at an electric bus depot (illustration)' },
    '07-home-model-operational-efficiency': { he: 'צוות תפעול במרכז לוגיסטי (הדמיה)', en: 'An operations team at a logistics center (illustration)' },
    '08-home-model-innovation': { he: 'מהנדסים במתקן תעשייתי מתקדם (הדמיה)', en: 'Engineers at an advanced industrial facility (illustration)' },
    '09-home-model-acquisitions': { he: 'דיון על עסקה מול מפה, עם נמל ברקע (הדמיה)', en: 'A transaction discussion over a map, with a port in the background (illustration)' },
    '10-about-group': { he: 'צוות השקעות בוחן תוכניות תשתית (הדמיה)', en: 'An investment team reviewing infrastructure plans (illustration)' },
    '11-investments-overview': { he: 'חניון אוטובוסים ונמל מכולות: תחבורה ולוגיסטיקה (הדמיה)', en: 'A bus depot and a container port: transportation and logistics (illustration)' },
    '12-dan-transport-hero': { he: 'נוסעים עולים לאוטובוס עירוני (הדמיה)', en: 'Passengers boarding a city bus (illustration)' },
    '13-dan-light-rail': { he: 'רכבת קלה ברחוב עירוני (הדמיה)', en: 'A light rail train on a city street (illustration)' },
    '14-dan-electric-fleet': { he: 'צי אוטובוסים חשמליים ועמדות טעינה (הדמיה)', en: 'An electric bus fleet and charging points (illustration)' },
    '15-dan-real-estate-separation': { he: 'מתחם עירוני מעורב שימושים לצד מסילה (הדמיה)', en: 'A mixed-use urban development beside a rail line (illustration)' },
    '16-gadot-port-haifa': { he: 'אוניית מכולות במסוף נמל (הדמיה)', en: 'A container ship at a port terminal (illustration)' },
    '17-gadot-supply-chain': { he: 'מסוף מיכלי אחסון ומכלית כביש לחוף הים (הדמיה)', en: 'A coastal tank storage terminal and a road tanker (illustration)' },
    '18-gadot-global-expansion': { he: 'מסוף כימיקלים לאורך תעלה באירופה (הדמיה)', en: 'A chemical terminal along a European canal (illustration)' },
    '19-mankai-greenhouse-beeri': { he: 'גידול צמחי מים בחממה בנגב המערבי (הדמיה)', en: 'Growing aquatic plants in a greenhouse in the western Negev (illustration)' },
    '20-strategy-buy-build': { he: 'צוות דן באסטרטגיית צמיחה מול מודל של מתחם תעשייתי (הדמיה)', en: 'A team discussing a growth strategy over a model of an industrial site (illustration)' }
  },
  pageImages: { hero: '01-home-hero-haifa-port', homeIntro: '02-home-about-management', about: '10-about-group', investments: '11-investments-overview', strategy: '20-strategy-buy-build' },

  ui: {
    he: {
      skip: 'דלג לתוכן', menu: 'תפריט', close: 'סגירה', home: 'ראשי', switchTo: 'English', switchShort: 'EN', switchLang: 'en',
      nav: [['home', 'ראשי'], ['about', 'אודות'], ['investments', 'השקעות'], ['strategy', 'אסטרטגיה'], ['team', 'הצוות'], ['media', 'בתקשורת']],
      viewProfile: 'לפרופיל המלא', allTeam: 'לכל הצוות', readMore: 'להרחבה', toInvestment: 'לעמוד ההשקעה', allInvestments: 'לכל ההשקעות',
      footerTag: 'קבוצת השקעות ישראלית שהקימו שמעון בן חמו ועופר לינצ\'בסקי. מומחיות בהשקעות, ניסיון בביצוע ויכולת מוכחת ליצירת ערך.',
      footerNavH: 'ניווט', footerLegalH: 'מידע משפטי',
      legal: [['privacy', 'מדיניות פרטיות'], ['accessibility', 'הצהרת נגישות'], ['terms', 'תנאי שימוש']],
      copyright: '© 2026 LBH. כל הזכויות שמורות.',
      disclaimer: 'המידע באתר נועד למטרות מידע כללי בלבד ואינו מהווה הצעה, ייעוץ השקעות או שיווק השקעות. ביצועי עבר אינם מבטיחים תוצאות עתידיות. התמונות באתר הן הדמיות להמחשה.',
      leaders: 'הובלה מטעם LBH', illus: 'הדמיה להמחשה', notFoundH: 'הדף לא נמצא', notFoundP: 'ייתכן שהקישור שגוי או שהדף הוסר.', backHome: 'חזרה לדף הבית',
      founder: 'מייסד', fund: 'קרן'
    },
    en: {
      skip: 'Skip to content', menu: 'Menu', close: 'Close', home: 'Home', switchTo: 'עברית', switchShort: 'עב', switchLang: 'he',
      nav: [['home', 'Home'], ['about', 'About'], ['investments', 'Investments'], ['strategy', 'Strategy'], ['team', 'Team'], ['media', 'In the Media']],
      viewProfile: 'View profile', allTeam: 'Meet the team', readMore: 'Learn more', toInvestment: 'View investment', allInvestments: 'All investments',
      footerTag: 'An Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski. Investment expertise, proven execution and long-term value creation.',
      footerNavH: 'Navigate', footerLegalH: 'Legal',
      legal: [['privacy', 'Privacy Policy'], ['accessibility', 'Accessibility'], ['terms', 'Terms of Use']],
      copyright: '© 2026 LBH. All rights reserved.',
      disclaimer: 'The information on this website is for general information only and does not constitute an offer, investment advice or investment marketing. Past performance does not guarantee future results. Images on this website are illustrations.',
      leaders: 'LBH leadership', illus: 'Illustration', notFoundH: 'Page not found', notFoundP: 'The link may be incorrect or the page may have been removed.', backHome: 'Back to home',
      founder: 'Founder', fund: 'Fund'
    }
  },

  meta: {
    home: { he: [`LBH | קבוצת השקעות - תשתיות, תחבורה, לוגיסטיקה והשבחת חברות`, `LBH היא קבוצת השקעות ישראלית שהקימו שמעון בן חמו ועופר לינצ'בסקי. הקבוצה מנהלת את קרנות דן, גדות ומנקאי, ומשלבת ניסיון ניהולי בכיר עם מומחיות בהשקעות והשבחת חברות.`],
            en: [`LBH | Israeli Investment Group - Infrastructure, Transportation & Value Creation`, `LBH is an Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski. It manages the Dan, Gadot and Mankai funds, combining senior executive experience with investment expertise and value creation.`] },
    about: { he: [`אודות LBH | קבוצת השקעות בהובלת שמעון בן חמו ועופר לינצ'בסקי`, `על קבוצת LBH: מייסדים בעלי ניסיון ניהולי בכיר, שלוש קרנות השקעה וגישה אקטיבית להשבחת חברות ובניית פלטפורמות.`],
             en: [`About LBH | Investment Group Led by Shimon Ben Hamo and Ofer Linchevski`, `About LBH: founders with senior executive experience, three investment funds and an active approach to value creation and platform building.`] },
    investments: { he: [`ההשקעות והרקורד שלנו | דן, גדות ומנקאי | LBH`, `שלוש קרנות ההשקעה של LBH - דן תחבורה, גדות ומנקאי: מהלכי השבחה, נתוני צמיחה ותוצאות.`],
                   en: [`Our Investments & Track Record | Dan, Gadot and Mankai | LBH`, `LBH's three investment funds - Dan Transportation, Gadot and Mankai: value creation, growth data and results.`] },
    dan: { he: [`דן תחבורה | השקעת LBH, השבחה ומימוש`, `סיפור ההשקעה של LBH בדן תחבורה: פיתוח פעילות הליבה, התייעלות, השקעות בתשתיות, צמיחה עסקית ומימוש ההשקעה בשנת 2026, ופיצול דן נדל"ן.`],
           en: [`Dan Transportation | LBH Investment & Value Creation`, `Explore LBH's investment in Dan Transportation, including operational improvements, business expansion, infrastructure development, the 2026 exit and the Dan Real Estate separation.`] },
    gadot: { he: [`גדות ונמל חיפה | השקעות קבוצת LBH בלוגיסטיקה ותשתיות`, `ההשקעה של LBH בגדות: שרשרת אספקה לכימיקלים, שמנים ודלקים, רכישת נמל חיפה לצד Adani Ports, התרחבות לאירופה ולארה"ב ורכישות משלימות.`],
             en: [`Gadot & Haifa Port | LBH Logistics & Infrastructure Investment`, `LBH's investment in Gadot: a supply chain for chemicals, oils and fuels, the Haifa Port acquisition with Adani Ports, expansion into Europe and the US, and add-on acquisitions.`] },
    mankai: { he: [`מנקאי והינומן | השקעת פוד-טק של מייסדי LBH`, `רכישת חברת הפוד-טק הינומן, המגדלת את צמח המנקאי בקיבוץ בארי, ב-2022: שיקום הפעילות לאחר 7 באוקטובר ופיתוח שווקים בינלאומיים.`],
              en: [`Mankai & Hinoman | LBH FoodTech Investment`, `The 2022 acquisition of food-tech company Hinoman, grower of the Mankai plant at Kibbutz Be'eri: business recovery after October 7 and international market development.`] },
    media: { he: [`בתקשורת | פרסומים על LBH, דן, גדות ומנקאי`, `פרסומים עיתונאיים ומקצועיים מאומתים על קבוצת LBH, מייסדיה ועסקאותיה: דן תחבורה, דן נדל"ן, גדות ונמל חיפה, והינומן.`],
             en: [`In the Media | Coverage of LBH, Dan, Gadot and Mankai`, `Verified press and professional coverage of LBH, its founders and transactions: Dan Transportation, Dan Real Estate, Gadot and Haifa Port, and Hinoman.`] },
    strategy: { he: [`אסטרטגיית השקעות | Buy & Build | LBH`, `אסטרטגיית ההשקעות של LBH: זיהוי ההזדמנות, בניית תוכנית השבחה, ביצוע והובלת שינוי, הצמחה ומימוש ערך.`],
                en: [`Investment Strategy | Buy & Build | LBH`, `LBH's investment strategy: identifying the opportunity, building a value creation plan, executing change, and growing and realizing value.`] },
    team: { he: [`הצוות | מייסדי LBH וצוות ההשקעות`, `צוות LBH: המייסדים שמעון בן חמו ועופר לינצ'בסקי, ומנהלי ההשקעות דורי גרוסמן ויפעת פייגלין.`],
            en: [`Our Team | LBH Founders and Investment Team`, `The LBH team: founders Shimon Ben Hamo and Ofer Linchevski, and investment professionals Dori Grossman and Yifat Feiglin.`] },
    privacy: { he: [`מדיניות פרטיות | LBH`, `מדיניות הפרטיות של אתר LBH.`], en: [`Privacy Policy | LBH`, `The LBH website privacy policy.`] },
    accessibility: { he: [`הצהרת נגישות | LBH`, `הצהרת הנגישות של אתר LBH.`], en: [`Accessibility Statement | LBH`, `The LBH website accessibility statement.`] },
    terms: { he: [`תנאי שימוש וגילוי נאות | LBH`, `תנאי השימוש באתר LBH וגילוי נאות.`], en: [`Terms of Use & Disclosure | LBH`, `Terms of use and disclosure for the LBH website.`] }
  },

  /* ---------- Home ---------- */
  home: {
    he: {
      eyebrow: 'קבוצת השקעות ישראלית',
      hero: 'מזהים הזדמנויות. בונים פלטפורמות. יוצרים ערך.',
      heroSub: 'קבוצת LBH היא קבוצת השקעות ישראלית, שהוקמה על ידי שמעון בן חמו ועופר לינצ\'בסקי, ומשלבת ניסיון ניהולי בכיר, מומחיות בהשקעות ויכולות ביצוע מוכחות להשבחת חברות ולבניית מנועי צמיחה.',
      positioning: 'מומחיות בהשקעות. ניסיון בביצוע. יכולת מוכחת ליצירת ערך.',
      btnAbout: 'על הקבוצה', btnInv: 'ההשקעות שלנו', heroAlt: 'אוניית מטען ורכבת לאורך קו חוף: תשתיות, שרשראות אספקה ותחבורה',
      introEyebrow: 'על הקבוצה', introH: 'ניסיון ניהולי שהופך להשקעות מצליחות',
      introP: ['קבוצת LBH הוקמה על ידי שמעון בן חמו ועופר לינצ\'בסקי, שני מנהלים בכירים בעלי ניסיון של עשרות שנים בניהול חברות גדולות, בתשתיות, בתחבורה, בלוגיסטיקה ובהשקעות.',
               'הקבוצה פועלת מתוך תפיסה שלפיה יצירת ערך מתחילה בהבנה מעמיקה של העסק עצמו: האנשים, הנכסים, הפעילות התפעולית, השווקים ומנועי הצמיחה.',
               'באמצעות שילוב בין ניסיון ניהולי, מומחיות פיננסית ויכולת ביצוע, LBH מפתחת אסטרטגיות השבחה, בונה פלטפורמות עסקיות ומקדמת צמיחה ארוכת טווח.'],
      aboutLink: 'עוד על הקבוצה',
      kpiH: 'LBH במספרים',
      invEyebrow: 'שלוש קרנות השקעה', invH: 'ההשקעות שלנו', invIntro: 'שלוש קרנות, שלושה מהלכי השבחה: מחברה ותיקה לפלטפורמת צמיחה.',
      apprH: 'מודל ההשבחה', apprIntro: 'מודל Buy & Build שהודגם בפעילות דן וגדות, בארבעה צירים.',
      teamH: 'הצוות', teamIntro: 'מייסדי הקבוצה וצוות ההשקעות.',
      expH: 'ניסיון ניהולי של המייסדים', expNote: 'תפקידים ניהוליים אישיים של המייסדים לפני הקמת LBH ובמקביל לה. אינם השקעות של הקבוצה.',
      expOrgs: ['מקורות', 'רכבת ישראל', 'אגד החזקות', 'קבוצת ממן', 'AFI אירופה', 'אפריקה ישראל', 'רשות החברות הממשלתיות', 'קבוצת גדות']
    },
    en: {
      eyebrow: 'Israeli investment group',
      hero: 'Identifying Opportunities. Building Platforms. Creating Value.',
      heroSub: 'LBH is an Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski, combining senior executive experience, investment expertise and proven execution capabilities to transform businesses and build long-term growth platforms.',
      positioning: 'Investment Expertise. Proven Execution. Long-Term Value Creation.',
      btnAbout: 'About LBH', btnInv: 'Our Investments', heroAlt: 'A cargo ship and a train along a coastline: infrastructure, supply chains and transportation',
      introEyebrow: 'About the group', introH: 'Executive Experience. Investment-Driven Growth.',
      introP: ['LBH was founded by Shimon Ben Hamo and Ofer Linchevski, two senior executives with decades of experience leading major businesses across infrastructure, transportation, logistics and investment.',
               'The group believes that sustainable value creation begins with a deep understanding of the business itself: its people, assets, operations, markets and growth drivers.',
               'Combining executive leadership, financial expertise and hands-on execution, LBH develops value creation strategies, builds business platforms and drives long-term growth.'],
      aboutLink: 'More about LBH',
      kpiH: 'LBH in Numbers',
      invEyebrow: 'Three investment funds', invH: 'Our Investments', invIntro: 'Three funds, three value creation stories: from established companies to growth platforms.',
      apprH: 'Value Creation Model', apprIntro: 'A Buy & Build model, demonstrated at Dan and Gadot, along four axes.',
      teamH: 'Our Team', teamIntro: 'The group\'s founders and investment team.',
      expH: 'Founders\' executive experience', expNote: 'Individual leadership roles held by the founders before and alongside LBH. These are not LBH investments.',
      expOrgs: ['Mekorot', 'Israel Railways', 'Egged Holdings', 'Maman Group', 'AFI Europe', 'Africa Israel', 'Government Companies Authority', 'Gadot Group']
    }
  },

  /* Count-up figures. Source: deck slides 1-4. */
  kpis: [
    { value: 30, dec: 0, he: { pre: '', unit: 'שנות ניסיון', label: 'של כל אחד מהמייסדים, כמנכ"ל, יו"ר, דירקטור ושותף בקרנות' }, en: { pre: '', unit: 'Years of Experience', label: 'Each founder, as CEO, chairman, director and fund partner' } },
    { value: 5.8, dec: 1, he: { pre: '', unit: 'מיליארד ש"ח', label: 'היקף נכסים תחת ניהול (AUM)' }, en: { pre: 'NIS ', unit: 'Billion', label: 'Assets Under Management (AUM)' } },
    { value: 3, dec: 0, he: { pre: '', unit: 'קרנות השקעה', label: 'דן, גדות ומנקאי' }, en: { pre: '', unit: 'Investment Funds', label: 'Dan, Gadot and Mankai' } },
    { value: 2.8, dec: 1, he: { pre: '', unit: 'מיליארד ש"ח', label: 'שווי חברה אפקטיבי של דן תחבורה בעסקת מכירת השליטה, 2026 (לפי פרסומים)' }, en: { pre: 'NIS ', unit: 'Billion', label: 'Effective valuation of Dan Transportation in the 2026 sale of control (as reported)' } }
  ],

  /* Buy & Build axes (order per deck note: core business first, acquisitions last). */
  pillars: [
    { img: '06-home-model-core-business', he: ['פיתוח פעילות הליבה', 'חיזוק העסק הקיים, הרחבת פעילות, שיפור יכולות, פיתוח תשתיות ויצירת מנועי צמיחה.', 'בדן: חישמול כ-1,200 אוטובוסים, כ-600 עמדות טעינה וזכייה במכרזי הרכבת הקלה.'],
      en: ['Core Business Development', 'Strengthening the existing business, expanding activity, upgrading capabilities, developing infrastructure and creating growth engines.', 'At Dan: electrifying some 1,200 buses, about 600 charging points and light rail tender wins.'] },
    { img: '07-home-model-operational-efficiency', he: ['התייעלות תפעולית', 'תהליכי רכש, מבנים ארגוניים, ניהול כוח אדם, פריון ושיפור ביצועים.', 'בדן: הפחתת שיעור אי-הביצוע מ-9% ל-1.5%.'],
      en: ['Operational Excellence', 'Procurement, organizational structure, workforce management, productivity and performance improvement.', 'At Dan: non-performance rate cut from 9% to 1.5%.'] },
    { img: '08-home-model-innovation', he: ['חדשנות ופיתוח עסקי', 'הטמעת טכנולוגיות, הקמת פעילויות חדשות, פיתוח מוצרים וכניסה לשווקים.', 'בגדות: מתקן Blending & Tolling בבלגיה עם יכולות low-flash.'],
      en: ['Innovation & Business Development', 'Adopting technologies, launching new activities, developing products and entering new markets.', 'At Gadot: a blending and tolling facility in Belgium with low-flash capabilities.'] },
    { img: '09-home-model-acquisitions', he: ['רכישות ואינטגרציה', 'רכישות משלימות, הרחבת פלטפורמות ויצירת יתרונות תפעוליים ומסחריים.', 'בגדות: שבע רכישות בין 2021 ל-2026, ובהן נמל חיפה לצד אדאני.'],
      en: ['Mergers & Acquisitions', 'Add-on acquisitions, platform expansion and operational and commercial synergies.', 'At Gadot: seven acquisitions from 2021 to 2026, including Haifa Port alongside Adani.'] }
  ],

  /* ---------- Investment funds ---------- */
  funds: [
    { slug: 'dan', published: true, visual: 'photo', card: '03-home-investment-dan', hero: '12-dan-transport-hero', leaders: ['shimon-ben-hamo', 'ofer-linchevski'],
      he: { name: 'דן תחבורה', eyebrow: 'קרן 1 · 2020', sector: 'תחבורה ותשתיות',
        short: 'מהלך ההשבחה של קבוצת דן: פיתוח פעילות התחבורה, התייעלות, ייזום תשתיות ובניית פלטפורמת צמיחה. השליטה בדן תחבורה נמכרה ב-2026 לפי שווי חברה אפקטיבי של כ-2.8 מיליארד ש"ח.',
        title: 'דן תחבורה - מחברת תחבורה מסורתית לפלטפורמת תשתיות צומחת',
        lead: 'ההשקעה בדן מדגימה את יכולתה של LBH לזהות פוטנציאל בחברה ותיקה, להוביל תהליכי שינוי תפעוליים ועסקיים, לפתח מנועי צמיחה וליצור פלטפורמה רחבה בתחומי התחבורה והתשתיות.',
        visualAlt: 'איור מופשט של קווי תחבורה' },
      en: { name: 'Dan Transportation', eyebrow: 'Fund 1 · 2020', sector: 'Transportation & Infrastructure',
        short: 'The Dan Group value creation plan: growing the transportation business, operational efficiency, infrastructure initiatives and a growth platform. Control of Dan Transportation was sold in 2026 at an effective valuation of about NIS 2.8 billion.',
        title: 'Dan Transportation - From a Legacy Operator to a Growing Infrastructure Platform',
        lead: 'The Dan investment demonstrates LBH\'s ability to identify potential in an established company, lead operational and business change, develop growth engines and build a broad transportation and infrastructure platform.',
        visualAlt: 'Abstract illustration of transit lines' } },
    { slug: 'gadot', published: true, visual: 'photo', card: '04-home-investment-gadot', hero: '17-gadot-supply-chain', leaders: ['ofer-linchevski', 'shimon-ben-hamo'],
      he: { name: 'גדות', eyebrow: 'קרן 2 · 2021', sector: 'לוגיסטיקה ושרשראות אספקה',
        short: 'קבוצה העוסקת בלוגיסטיקה, בהובלה, באחסון ובשרשראות אספקה לכימיקלים, לשמנים ולדלקים, תוך פיתוח פעילות בינלאומית והשבחת יכולות תפעוליות.',
        title: 'גדות - מפלטפורמה משפחתית לקבוצה לוגיסטית גלובלית',
        lead: 'קבוצת גדות מדגימה את אסטרטגיית ההשבחה של LBH באמצעות בניית שרשרת אספקה רחבה לכימיקלים, שמנים ודלקים, שילוב פעילות ימית ויבשתית, הרחבת פריסה בינלאומית, רכישות משלימות ופיתוח תשתיות אסטרטגיות.',
        visualAlt: 'אוניית מטען בים (תמונת אווירה)' },
      en: { name: 'Gadot', eyebrow: 'Fund 2 · 2021', sector: 'Logistics & Supply Chains',
        short: 'A group active in logistics, shipping, storage and supply chains for chemicals, oils and fuels, expanding internationally and upgrading its operational capabilities.',
        title: 'Gadot - From a Family-Owned Platform to a Global Logistics Group',
        lead: 'Gadot demonstrates LBH\'s value creation strategy: building a broad supply chain for chemicals, oils and fuels, combining maritime and land operations, expanding internationally, completing add-on acquisitions and developing strategic infrastructure.',
        visualAlt: 'A cargo ship at sea (illustrative image)' } },
    { slug: 'mankai', published: true, visual: 'photo', card: '05-home-investment-mankai', hero: '19-mankai-greenhouse-beeri', leaders: ['shimon-ben-hamo', 'ofer-linchevski'],
      he: { name: 'מנקאי', eyebrow: 'קרן 3 · 2022', sector: 'פוד-טק',
        short: 'רכישת פעילות חברת הפוד-טק הינומן, המגדלת את צמח המנקאי בחממות קיבוץ בארי, לאחר הליך חדלות פירעון. שיקום הפעילות ופיתוח שווקים בינלאומיים.',
        title: 'מנקאי והינומן: מזיהוי הזדמנות לשיקום ולצמיחה',
        lead: 'ב-2022 רכשה קבוצת משקיעים בראשות שמעון בן חמו ועופר לינצ\'בסקי, יחד עם קיבוץ בארי, את פעילות חברת הפוד-טק הינומן, המגדלת את צמח המנקאי בחממות הקיבוץ, לאחר שהחברה נקלעה להליך חדלות פירעון. לאחר הפגיעה ב-7 באוקטובר 2023 שוקמה הפעילות בבארי, והחברה פועלת לפיתוח שווקים בינלאומיים.',
        visualAlt: 'איור מופשט של צמח מים זעיר' },
      en: { name: 'Mankai', eyebrow: 'Fund 3 · 2022', sector: 'Food tech',
        short: 'Acquisition of the food-tech company Hinoman, which grows the Mankai superfood plant in greenhouses at Kibbutz Be\'eri, following insolvency proceedings. Restored operations and international expansion.',
        title: 'Mankai & Hinoman: From Investment Opportunity to Business Recovery and Growth',
        lead: 'In 2022 an investor group led by Shimon Ben Hamo and Ofer Linchevski, together with Kibbutz Be\'eri, acquired the business of food-tech company Hinoman, which grows the Mankai plant in the kibbutz greenhouses, after the company entered insolvency proceedings. Following the October 7, 2023 attack, operations at Be\'eri were restored and the company is developing international markets.',
        visualAlt: 'Abstract illustration of a tiny aquatic plant' } }
  ],

  /* Public sources (dated). Used by the "Sources" blocks on investment pages and by the In the Media page. */
  sources: [
    { id: 'dan-bizportal-2026-02', topic: 'dan', date: '2026-02-13', outlet: { he: 'ביזפורטל', en: 'Bizportal' }, url: 'https://www.bizportal.co.il/capitalmarket/news/article/20027687',
      he: { title: 'מוסדיים רוכשים את השליטה בדן תחבורה', summary: 'דיווח על מכירת 50% ממניות דן תחבורה בידי Value LBH לפי שווי חברה של כ-2.8 מיליארד ש"ח, הרכב קבוצת הרוכשים, ונתוני הכניסה להשקעה ב-2019 לפי שווי של כ-1.26 מיליארד ש"ח.' },
      en: { title: 'Institutional investors acquire control of Dan Transportation', summary: 'Report on Value LBH\'s sale of 50% of Dan Transportation at a company valuation of about NIS 2.8 billion, the composition of the buyer group, and the 2019 entry at a valuation of about NIS 1.26 billion.' } },
    { id: 'dan-calcalist-2026-02', topic: 'dan', date: '2026-02-19', outlet: { he: 'כלכליסט', en: 'Calcalist' }, url: 'https://www.calcalist.co.il/market/article/s1qfv5q00wg',
      he: { title: 'נחתמה עסקת מכירת השליטה בדן תחבורה', summary: 'פירוט העסקה שנחתמה: קבוצת משקיעים בהובלת מנכ"ל דן וכלל ביטוח רוכשת את השליטה בדן תחבורה לפי שווי אפקטיבי של כ-2.8 מיליארד ש"ח, ופעילות הנדל"ן נותרת בידי המוכרים.' },
      en: { title: 'Agreement signed for the sale of control of Dan Transportation', summary: 'Details of the signed transaction: an investor group led by Dan\'s CEO and Clal Insurance acquires control of Dan Transportation at an effective valuation of about NIS 2.8 billion, while the real estate business remains with the sellers.' } },
    { id: 'dan-calcalist-2026-05', topic: 'dan', date: '2026-05', outlet: { he: 'כלכליסט', en: 'Calcalist' }, url: 'https://www.calcalist.co.il/market/article/hkgalidazx',
      he: { title: 'מגעים ראשוניים למיזוג דן נדל"ן ודוניץ אלעד', summary: 'דיווח ראשון על מגעים בין דן נדל"ן לדוניץ אלעד, כולל רקע על כניסת Value Base וקרן LBH תשתיות לדן ב-2019 ועל פיצול פעילות הנדל"ן מחברת התחבורה.' },
      en: { title: 'Initial talks on a Dan Real Estate – Dunietz Elad merger', summary: 'First report of talks between Dan Real Estate and Dunietz Elad, including background on the 2019 entry of Value Base and the LBH Infrastructure fund into Dan and the separation of the real estate business.' } },
    { id: 'dan-funder-2026-08', topic: 'dan', date: '2026-08-27', outlet: { he: 'פאנדר', en: 'Funder' }, url: 'https://funder.co.il/article/208510',
      he: { title: 'דוניץ אלעד ודן נדל"ן חתמו על מזכר הבנות', summary: 'דוניץ אלעד דיווחה על מזכר הבנות לא מחייב לעסקת מיזוג משולש הופכי עם דן נדל"ן, שתושלם רק אם ייחתם הסכם מפורט ויתקיימו התנאים הנדרשים.' },
      en: { title: 'Dunietz Elad and Dan Real Estate sign an MOU', summary: 'Dunietz Elad reported a non-binding memorandum of understanding for a reverse triangular merger with Dan Real Estate, to be completed only if a definitive agreement is signed and conditions are met.' } },
    { id: 'dan-bizportal-2026-10', topic: 'dan', date: '2026-10-25', outlet: { he: 'ביזפורטל', en: 'Bizportal' }, url: 'https://www.bizportal.co.il/capitalmarket/news/article/20046133',
      he: { title: 'עדכון תנאי המיזוג בין דוניץ אלעד לדן נדל"ן', summary: 'עדכון על המשך המשא ומתן: טרם נחתם הסכם מחייב, תקופת הבלעדיות הוארכה, ותנאי אחד שנקבע במזכר ההבנות התקיים.' },
      en: { title: 'Updated terms in the Dunietz Elad – Dan Real Estate merger talks', summary: 'Update on the negotiations: no binding agreement had been signed, the exclusivity period was extended, and one condition set in the MOU had been met.' } },
    { id: 'dan-calcalist-2026-10', topic: 'dan', date: '2026-10-27', outlet: { he: 'כלכליסט', en: 'Calcalist' }, url: 'https://www.calcalist.co.il/market/article/sjkxf0p2gg',
      he: { title: 'הושלם השלב השני בעסקת דן תחבורה', summary: 'עם השלמת השלב השני מחזיקה קבוצת המשקיעים החדשה בכ-57% מדן תחבורה. השלב הראשון, שבו נרכשו החזקות Value LBH, הושלם בסוף יוני 2026 לאחר אישור רשות התחרות.' },
      en: { title: 'Second stage of the Dan Transportation transaction completed', summary: 'With the second stage completed, the new investor group holds about 57% of Dan Transportation. The first stage, in which Value LBH\'s holdings were acquired, closed at the end of June 2026 after Competition Authority approval.' } },
    { id: 'gadot-gornitzky-2021-09', topic: 'gadot', date: '2021-09-05', outlet: { he: 'גורניצקי ושות\'', en: 'Gornitzky & Co.' }, url: 'https://gornitzky.com/wp-content/uploads/pdf/post/14877_our-firm-r.pdf',
      he: { title: 'קרנות LBH Value רוכשות כ-38% מגדות', summary: 'הודעת משרד עורכי הדין שייצג את קרנות LBH Value, המנוהלות בידי Value Base M&A, שמעון בן חמו ועופר לינצ\'בסקי, ברכישת כ-38% ממניות גדות, כולל אופציות להגדלת ההחזקה.' },
      en: { title: 'LBH Value funds acquire about 38% of Gadot', summary: 'Announcement by the law firm that represented the LBH Value funds, managed by Value Base M&A, Shimon Ben Hamo and Ofer Linchevski, in acquiring about 38% of Gadot, including options to increase the holding.' } },
    { id: 'gadot-globes-2022-07', topic: 'gadot', date: '2022-07-14', outlet: { he: 'גלובס', en: 'Globes' }, url: 'https://en.globes.co.il/en/article-gadot-and-indias-adani-win-haifa-port-privatization-1001418141',
      he: { title: 'גדות ו-Adani זוכות במכרז הפרטת נמל חיפה', summary: 'הקונסורציום של גדות ו-Adani Ports זכה במכרז לרכישת מלוא החזקות המדינה בנמל חיפה, בתמורה של כ-4 מיליארד ש"ח.' },
      en: { title: 'Gadot and Adani win the Haifa Port privatization tender', summary: 'The Gadot and Adani Ports consortium won the tender to acquire the State\'s entire holding in Haifa Port for about NIS 4 billion.' } },
    { id: 'gadot-gornitzky-2023-01', topic: 'gadot', date: '2023-01-17', outlet: { he: 'גורניצקי ושות\'', en: 'Gornitzky & Co.' }, url: 'https://www.gornitzky.com/our-firm-represented-funds-from-the-lbh-value-group-in-a-capital-raise-of-gadot-by-way-of-rights-offering-in-a-total-amount-of-approx-nis-315-million-usd-91-million/',
      he: { title: 'גיוס הון של כ-315 מיליון ש"ח בגדות במסגרת עסקת נמל חיפה', summary: 'הודעת משרד עורכי הדין על ייצוג קרנות LBH Value, שהחזיקו אז בכ-48% מגדות, בהנפקת זכויות של כ-315 מיליון ש"ח שבוצעה במסגרת רכישת נמל חיפה.' },
      en: { title: 'NIS 315 million capital raise at Gadot as part of the Haifa Port deal', summary: 'Law firm announcement on representing the LBH Value funds, which then held about 48% of Gadot, in a rights offering of about NIS 315 million carried out as part of the Haifa Port acquisition.' } },
    { id: 'mankai-calcalist-2025-10', topic: 'mankai', date: '2025-10-05', outlet: { he: 'כלכליסט', en: 'Calcalist' }, url: 'https://www.calcalist.co.il/market/article/sjw5q3a3lx',
      he: { title: 'רכישת הינומן ושיקום פעילות המנקאי בבארי', summary: 'כתבה על רכישת הינומן בהליך בפיקוח בית המשפט תמורת כ-6 מיליון ש"ח, חזרת העובדים לחממות בבארי יומיים אחרי 7 באוקטובר, ותוכניות להתרחבות לשווקים בינלאומיים.' },
      en: { title: 'The Hinoman acquisition and the recovery of Mankai at Be\'eri', summary: 'Feature on the court-supervised acquisition of Hinoman for about NIS 6 million, employees returning to the Be\'eri greenhouses two days after October 7, and plans for international expansion.' } }
  ],

  /* Investment page blocks. Types: text, stats, chart, engines, assets, corridor, returns, callout, timeline, split, deal, stages, faq, sources. */
  pages: {
    dan: {
      he: [
        { type: 'stats', h: 'נתוני מפתח', items: [['כ-2.8', 'מיליארד ש"ח', 'שווי חברה אפקטיבי של דן תחבורה בעסקת מכירת השליטה, 2026 (לפי פרסומים)'], ['3.2x', '', 'צמיחה ב-EBITDA של דן סולו, 2019–2025 (נתוני הקבוצה)'], ['7.9x', '', 'תשואה על ההשקעות בדן תחבורה (נתוני הקבוצה)'], ['כ-1,200', '', 'אוטובוסים שחושמלו בתקופת ההשקעה (נתוני הקבוצה)']] },
        { img: '13-dan-light-rail', type: 'text', h: 'החברה וההשקעה', p: ['דן היא חברת התחבורה הציבורית השנייה בגודלה בישראל. ב-2019 התקשרו בית ההשקעות Value Base וקרן LBH תשתיות, בניהול שמעון בן חמו ועופר לינצ\'בסקי, ברכישת 40% ממניות דן מידי חברי הקואופרטיב לשעבר, לפי שווי חברה של כ-1.26 מיליארד ש"ח. הרכישה הושלמה בתחילת 2020, ושנה לאחר מכן הוגדלה ההחזקה ל-50% לפי אותו שווי.', 'בעת הכניסה להשקעה התבססה דן בעיקר על הפעלת קווי אוטובוס, עם שיעור אי-ביצוע של כ-9%. נציגי הקרן כיהנו בדירקטוריון החברה והובילו, יחד עם ההנהלה, תוכנית רב-שנתית לחיזוק פעילות הליבה, להתייעלות ולכניסה לתחומי תשתית חדשים.'] },
        { type: 'timeline', h: 'ציר הזמן של ההשקעה', note: 'Class A ו-Class B הן מחלקות ההשקעה של הקרן, לפי נתוני הקבוצה.', items: [
          ['2019', 'חתימה על רכישת 40%', 'Value Base וקרן LBH תשתיות התקשרו ברכישת 40% ממניות דן, לפי שווי של כ-1.26 מיליארד ש"ח.', 'done'],
          ['2020', 'השלמת הרכישה (Class A)', 'הקרן הפכה לבעלת השליטה בדן לצד חברי החברה.', 'done'],
          ['2021', 'הגדלת ההחזקה ל-50% (Class B)', 'הגדלת ההחזקה לפי אותו שווי חברה.', 'done'],
          ['2020–2025', 'התייעלות והשבחה', 'מעבר למטה רזה, הסדרי פרישה ל-425 עובדים והפחתת שיעור אי-הביצוע מ-9% ל-1.5%.', 'done'],
          ['2020–2025', 'פיתוח התחבורה והתשתיות', 'זכייה במכרזי הקו הירוק בתל אביב והקו הכחול בירושלים, חישמול כ-1,200 אוטובוסים וכניסה לפעילות בפורטוגל.', 'done'],
          ['לפני המימוש', 'הפרדת הפעילויות', 'פיצול קבוצת דן לפעילות תחבורה ולפעילות נדל"ן נפרדות.', 'done'],
          ['פברואר 2026', 'חתימה על מכירת השליטה בדן תחבורה', 'לפי שווי חברה אפקטיבי של כ-2.8 מיליארד ש"ח.', 'done'],
          ['יוני 2026', 'השלמת מכירת החזקות Value LBH', 'השלב הראשון הושלם לאחר אישור רשות התחרות.', 'done'],
          ['אוגוסט 2026', 'מזכר הבנות דן נדל"ן–דוניץ אלעד', 'מזכר הבנות לא מחייב למיזוג. העסקה טרם הושלמה.', 'pending']] },
        { img: '14-dan-electric-fleet', type: 'engines', h: 'ארבעת מנועי ההשבחה', items: [
          ['פיתוח פעילות הליבה', ['הרחבת פעילות התחבורה והגדלת מפת הנסועה', 'הרחבת יבוא האוטובוסים באמצעות פנדן, מכ-100 ליותר מ-600 כלים בשנה', 'חידוש ההסכמים מול המדינה', 'הכפלת פעילות השאטלים בכביש 1', 'ייזום נתיבים מהירים ברשפון ובראשון לציון', 'זכייה במכרזי הרכבת הקלה: הקו הירוק בתל אביב והקו הכחול בירושלים', 'חישמול כ-1,200 אוטובוסים', 'התקנת כ-600 עמדות טעינה']],
          ['התייעלות תפעולית', ['שיפור וייעול הליכי הרכש', 'מעבר למטה רזה', 'הסדרי פרישה ל-425 עובדים', 'שיפור הסכמי השכר הקיבוציים', 'הפחתת שיעור אי-הביצוע מ-9% ל-1.5%', 'חיזוק השדרה הניהולית', 'הגדלת מצבת הנהגים והרחבת בית הספר לנהיגה']],
          ['חדשנות', ['הקמת קרן מוביליטק בשיתוף סמלת, להשקעה בחברות בתחומי התחבורה החכמה והחשמלית']],
          ['רכישות ואינטגרציה', ['רכישת יולזרי, בתחום ההיסעים הפרטיים', 'רכישת מפעיל תחבורה ציבורית בפורטוגל']]] },
        { type: 'chart', h: 'צמיחה ב-EBITDA', unit: 'מיליון ש"ח', bars: [['2019', 171, '171'], ['2025', 547, '547']], mult: '3.2x', multL: 'מכפיל צמיחה', note: 'EBITDA של פעילות דן סולו (דן גוש דן), במיליוני ש"ח, לפי נתוני הקבוצה: 171 ב-2019, השנה שקדמה להשלמת הכניסה להשקעה, ו-547 ב-2025.' },
        { type: 'split', h: 'אסטרטגיית הפיצול', intro: 'במסגרת אסטרטגיית ההשבחה הופרדו פעילות התחבורה, התשתיות והנדל"ן של קבוצת דן, מתוך תפיסה שלכל תחום מאפיינים עסקיים, אפשרויות צמיחה וצרכים פיננסיים שונים. כך ניתן לממש כל פעילות במסלול המתאים לה.', root: 'קבוצת דן',
          items: [['דן תחבורה', 'הפעלת תחבורה ציבורית, היסעים ורכבות קלות.', 'השליטה נמכרה ב-2026.', 'done'], ['דן נדל"ן', 'קרקעות, פרויקטים ונכסים מניבים.', 'נותרה בהחזקת Value LBH. מזכר הבנות לא מחייב למיזוג עם דוניץ אלעד.', 'pending'], ['דן תשתיות', 'פעילות תשתיות, ובהן תשתיות מים.', 'אינה כלולה במהלך המיזוג עם דוניץ אלעד, לפי הפרסומים.', 'other']] },
        { type: 'callout', h: 'מימוש ההשקעה: מאסטרטגיית השבחה ליצירת ערך', p: ['בפברואר 2026 נחתמה עסקה למכירת השליטה בדן תחבורה לקבוצת משקיעים בהובלת מנכ"ל דן, אופיר קרני, ובהשתתפות כלל ביטוח, לאומי פרטנרס ומזרחי טפחות אינווסט. לפי הפרסומים, העסקה שיקפה לדן תחבורה שווי חברה אפקטיבי של כ-2.8 מיליארד ש"ח, לעומת שווי של כ-1.26 מיליארד ש"ח לכל קבוצת דן בעת הכניסה להשקעה ב-2019.', 'מכירת החזקות Value LBH הושלמה בסוף יוני 2026, לאחר אישור רשות התחרות. באוקטובר 2026 הושלם גם השלב השני של העסקה, שבו רכשה קבוצת המשקיעים מניות נוספות מחברי דן והגיעה להחזקה של כ-57%.'] },
        { img: '15-dan-real-estate-separation', type: 'text', h: 'דן נדל"ן: יצירת ערך באמצעות הפרדת פעילויות', p: ['פעילות הנדל"ן של קבוצת דן הופרדה מחברת התחבורה ונותרה בהחזקת Value LBH לאחר המימוש. דן נדל"ן מחזיקה קרקעות, פרויקטים ונכסים מניבים, ובהמשך למימוש פעילות התחבורה קודמו מהלכים להשבחתה ולבחינת שילובה בפלטפורמת נדל"ן רחבה יותר.', 'ב-26 באוגוסט 2026 דיווחה דוניץ אלעד על חתימת מזכר הבנות לא מחייב עם דן נדל"ן לעסקת מיזוג משולש הופכי. אם ייחתם הסכם מפורט ויתקיימו התנאים, תחזיק דוניץ אלעד במלוא מניות דן נדל"ן, כנגד הקצאת מניות לבעלי המניות של דן נדל"ן. נכון לסוף אוקטובר 2026, טרם נחתם הסכם מחייב והעסקה לא הושלמה.'] },
        { type: 'returns', h: 'תשואות הקרן', rows: ['dan-a', 'dan-b'], extra: [['7.9x', 'תשואה על ההשקעות בדן תחבורה, כפי שהיא מוצגת בנתוני הקבוצה. אינה מכפיל TVPI של אחת המחלקות.']] },
        { type: 'faq', h: 'שאלות ותשובות: דן', items: [
          ['מתי השקיעה LBH בדן?', 'ב-2019 התקשרו Value Base וקרן LBH תשתיות, בניהול שמעון בן חמו ועופר לינצ\'בסקי, ברכישת 40% ממניות דן לפי שווי של כ-1.26 מיליארד ש"ח. הרכישה הושלמה ב-2020, וב-2021 הוגדלה ההחזקה ל-50%. בנתוני הקבוצה שתי ההשקעות מופיעות כמחלקות Class A ו-Class B.'],
          ['כיצד הושבח עסק התחבורה?', 'ההשבחה נשענה על ארבעה צירים: פיתוח פעילות הליבה, ובכלל זה זכייה במכרזי רכבת קלה וחישמול כ-1,200 אוטובוסים; התייעלות, כמו מטה רזה והפחתת אי-הביצוע מ-9% ל-1.5%; חדשנות, באמצעות קרן מוביליטק; ורכישות משלימות, בהן מפעיל תחבורה בפורטוגל. EBITDA של דן סולו צמח לפי נתוני הקבוצה מ-171 ל-547 מיליון ש"ח בין 2019 ל-2025.'],
          ['כיצד מומשה ההשקעה?', 'בפברואר 2026 נחתמה מכירת השליטה בדן תחבורה לקבוצת משקיעים בהובלת מנכ"ל דן ובהשתתפות כלל ביטוח, לאומי פרטנרס ומזרחי טפחות אינווסט, לפי שווי אפקטיבי של כ-2.8 מיליארד ש"ח, לפי הפרסומים. מכירת החזקות Value LBH הושלמה ביוני 2026, לאחר אישור רשות התחרות.'],
          ['מה הקשר בין דן תחבורה לדן נדל"ן?', 'שתיהן היו חלק מקבוצת דן. לפני המימוש הופרדה פעילות הנדל"ן לחברה נפרדת, דן נדל"ן, שנותרה בהחזקת Value LBH לאחר מכירת דן תחבורה. באוגוסט 2026 נחתם מזכר הבנות לא מחייב למיזוגה עם דוניץ אלעד, ונכון לסוף אוקטובר 2026 העסקה טרם הושלמה.']] },
        { type: 'sources', h: 'מקורות', topic: 'dan' }
      ],
      en: [
        { type: 'stats', h: 'Key figures', items: [['~NIS 2.8', 'Billion', 'Effective company valuation of Dan Transportation in the 2026 sale of control (as reported)'], ['3.2x', '', 'EBITDA growth of Dan standalone, 2019–2025 (group data)'], ['7.9x', '', 'Return on the investments in Dan Transportation (group data)'], ['~1,200', '', 'Buses electrified during the investment period (group data)']] },
        { img: '13-dan-light-rail', type: 'text', h: 'The company and the investment', p: ['Dan is Israel\'s second-largest public transport company. In 2019 the investment house Value Base and the LBH Infrastructure fund, managed by Shimon Ben Hamo and Ofer Linchevski, agreed to acquire 40% of Dan from the members of the former cooperative, at a company valuation of about NIS 1.26 billion. The acquisition closed in early 2020, and a year later the holding was increased to 50% at the same valuation.', 'At the time of the investment, Dan relied mainly on operating bus routes, with a non-performance rate of about 9%. Fund representatives served on the board and, together with management, led a multi-year plan to strengthen the core business, improve efficiency and enter new infrastructure segments.'] },
        { type: 'timeline', h: 'Investment timeline', note: 'Class A and Class B are the fund\'s investment classes, per group data.', items: [
          ['2019', 'Agreement to acquire 40%', 'Value Base and the LBH Infrastructure fund agreed to acquire 40% of Dan at a valuation of about NIS 1.26 billion.', 'done'],
          ['2020', 'Acquisition closed (Class A)', 'The fund became Dan\'s controlling shareholder alongside the company\'s members.', 'done'],
          ['2021', 'Holding increased to 50% (Class B)', 'The holding was increased at the same company valuation.', 'done'],
          ['2020–2025', 'Efficiency and value creation', 'A lean headquarters, retirement arrangements for 425 employees and a non-performance rate cut from 9% to 1.5%.', 'done'],
          ['2020–2025', 'Transportation and infrastructure growth', 'Light rail tender wins for the Tel Aviv Green Line and the Jerusalem Blue Line, some 1,200 buses electrified and entry into Portugal.', 'done'],
          ['Pre-exit', 'Separation of businesses', 'The Dan Group was split into separate transportation and real estate businesses.', 'done'],
          ['February 2026', 'Sale of control of Dan Transportation signed', 'At an effective company valuation of about NIS 2.8 billion.', 'done'],
          ['June 2026', 'Sale of Value LBH\'s holdings completed', 'The first stage closed after Competition Authority approval.', 'done'],
          ['August 2026', 'Dan Real Estate – Dunietz Elad MOU', 'A non-binding memorandum of understanding for a merger. The transaction has not been completed.', 'pending']] },
        { img: '14-dan-electric-fleet', type: 'engines', h: 'Four value creation engines', items: [
          ['Core Business Development', ['Expanded transportation operations and the service map', 'Grew bus imports through Pandan from about 100 to more than 600 vehicles a year', 'Renewed agreements with the State', 'Doubled Route 1 shuttle operations', 'Initiated express lanes at Rishpon and Rishon LeZion', 'Won light rail tenders: the Tel Aviv Green Line and the Jerusalem Blue Line', 'Electrified some 1,200 buses', 'Installed about 600 charging points']],
          ['Operational Excellence', ['Improved and streamlined procurement', 'Moved to a lean headquarters', 'Retirement arrangements for 425 employees', 'Improved collective wage agreements', 'Cut the non-performance rate from 9% to 1.5%', 'Strengthened the management team', 'Expanded the driver workforce and the driving school']],
          ['Innovation', ['Established a mobility-tech fund with Samelet, investing in smart and electric transportation companies']],
          ['Mergers & Acquisitions', ['Acquired Yulzari, a private transport company', 'Acquired a public transport operator in Portugal']]] },
        { type: 'chart', h: 'EBITDA growth', unit: 'NIS million', bars: [['2019', 171, '171'], ['2025', 547, '547']], mult: '3.2x', multL: 'Growth multiple', note: 'EBITDA of Dan standalone (Dan Gush Dan), in NIS million, per group data: 171 in 2019, the year before the investment closed, and 547 in 2025.' },
        { type: 'split', h: 'Separation strategy', intro: 'As part of the value creation strategy, the Dan Group\'s transportation, infrastructure and real estate activities were separated, reflecting their different business characteristics, growth options and financing needs. Each business can then be realized along the path that suits it.', root: 'Dan Group',
          items: [['Dan Transportation', 'Public transport, private transport and light rail operations.', 'Control sold in 2026.', 'done'], ['Dan Real Estate', 'Land, development projects and income-producing assets.', 'Retained by Value LBH. Non-binding MOU for a merger with Dunietz Elad.', 'pending'], ['Dan Infrastructure', 'Infrastructure activity, including water infrastructure.', 'Not part of the Dunietz Elad merger, as reported.', 'other']] },
        { type: 'callout', h: 'Investment Exit: From Value Creation Strategy to Realized Value', p: ['In February 2026 an agreement was signed to sell control of Dan Transportation to an investor group led by Dan CEO Ofir Karni, with Clal Insurance, Leumi Partners and Mizrahi-Tefahot Invest. As reported, the transaction reflected an effective company valuation of about NIS 2.8 billion for Dan Transportation, compared with about NIS 1.26 billion for the whole Dan Group at the 2019 entry.', 'The sale of Value LBH\'s holdings closed at the end of June 2026, after Competition Authority approval. In October 2026 the second stage was also completed, with the investor group buying additional shares from Dan\'s members and reaching a holding of about 57%.'] },
        { img: '15-dan-real-estate-separation', type: 'text', h: 'Dan Real Estate: Creating Value by Separating Businesses', p: ['The Dan Group\'s real estate business was separated from the transportation company and remained with Value LBH after the exit. Dan Real Estate holds land, development projects and income-producing assets, and following the transportation exit, steps were taken to enhance it and to explore combining it into a broader real estate platform.', 'On August 26, 2026, Dunietz Elad reported signing a non-binding memorandum of understanding with Dan Real Estate for a reverse triangular merger. If a definitive agreement is signed and conditions are met, Dunietz Elad will hold all of Dan Real Estate\'s shares in exchange for issuing shares to Dan Real Estate\'s shareholders. As of late October 2026, no binding agreement had been signed and the transaction had not been completed.'] },
        { type: 'returns', h: 'Fund returns', rows: ['dan-a', 'dan-b'], extra: [['7.9x', 'Return on the investments in Dan Transportation, as presented in the group\'s data. This is not the TVPI of either class.']] },
        { type: 'faq', h: 'Questions and answers: Dan', items: [
          ['When did LBH invest in Dan?', 'In 2019 Value Base and the LBH Infrastructure fund, managed by Shimon Ben Hamo and Ofer Linchevski, agreed to acquire 40% of Dan at a valuation of about NIS 1.26 billion. The acquisition closed in 2020 and the holding rose to 50% in 2021. In the group\'s data the two investments appear as Class A and Class B.'],
          ['How was the transportation business improved?', 'Along four axes: core business development, including light rail tender wins and electrifying some 1,200 buses; operational efficiency, such as a lean headquarters and cutting non-performance from 9% to 1.5%; innovation through a mobility-tech fund; and add-on acquisitions, including an operator in Portugal. Per group data, Dan standalone EBITDA grew from NIS 171 million to NIS 547 million between 2019 and 2025.'],
          ['How was the investment realized?', 'In February 2026 the sale of control of Dan Transportation was signed with an investor group led by Dan\'s CEO, with Clal Insurance, Leumi Partners and Mizrahi-Tefahot Invest, at an effective valuation of about NIS 2.8 billion, as reported. The sale of Value LBH\'s holdings closed in June 2026, after Competition Authority approval.'],
          ['How are Dan Transportation and Dan Real Estate related?', 'Both were part of the Dan Group. Before the exit, the real estate business was separated into a distinct company, Dan Real Estate, which Value LBH retained after selling Dan Transportation. In August 2026 a non-binding MOU was signed for its merger with Dunietz Elad; as of late October 2026 the transaction had not been completed.']] },
        { type: 'sources', h: 'Sources', topic: 'dan' }
      ]
    },
    gadot: {
      he: [
        { type: 'stats', h: 'נתוני מפתח', items: [['2.5x', '', 'צמיחה ב-EBITDA של קבוצת גדות, 2018–2025 (נתוני הקבוצה)'], ['116', 'מיליון דולר', 'EBITDA של קבוצת גדות בשנת 2025 (נתוני הקבוצה)'], ['30%', '', 'חלקה של גדות בנמל חיפה, לצד Adani Ports (70%)'], ['7', '', 'רכישות של גדות, 2021–2026 (נתוני הקבוצה)']] },
        { type: 'text', h: 'החברה וההשקעה', p: ['גדות היא קבוצה ישראלית הפועלת לאורך שרשרת הערך של כימיקלים, שמנים ודלקים: רכש, הובלה ימית, אחסון במסופים, הפצה ושיווק לתעשייה בישראל ובאירופה. עופר לינצ\'בסקי מכהן כמנכ"ל גדות מאז 2018.', 'בספטמבר 2021 רכשו קרנות LBH Value, המנוהלות בידי Value Base M&A, שמעון בן חמו ועופר לינצ\'בסקי, כ-38% ממניות גדות מידי קרן טנא, עם אופציות להגדלת ההחזקה, והפכו לשותפות בשליטה בחברה. בינואר 2023 החזיקו הקרנות בכ-48% מגדות, לפי הודעת משרד עורכי הדין שייצג אותן.'] },
        { type: 'chart', h: 'צמיחה ב-EBITDA', unit: 'מיליון דולר', bars: [['2018', 48, '48'], ['2025', 116, '116']], mult: '2.5x', multL: 'מכפיל צמיחה', note: 'EBITDA של קבוצת גדות, במיליוני דולר, לפי נתוני הקבוצה: 48 ב-2018, שנת מינויו של עופר לינצ\'בסקי למנכ"ל, ו-116 ב-2025. השקעת הקרנות החלה ב-2021, ולכן אין לייחס לה את מלוא הצמיחה בתקופה.' },
        { img: '16-gadot-port-haifa', type: 'deal', h: 'נמל חיפה: השקעה בתשתית אסטרטגית', intro: 'ביולי 2022 זכה הקונסורציום של גדות ו-Adani Ports במכרז הפרטת נמל חיפה, לרכישת מלוא החזקות המדינה בחברת נמל חיפה בתמורה של כ-4 מיליארד ש"ח. חלוקת ההחזקות בנמל: Adani Ports‏ 70%, גדות 30%.',
          parties: [['Adani Ports', '70%'], ['גדות', '30%']], target: 'חברת נמל חיפה',
          facts: [['יולי 2022', 'זכייה במכרז ההפרטה'], ['כ-4 מיליארד ש"ח', 'תמורת הרכישה של 100% מהנמל'], ['ינואר 2023', 'הנפקת זכויות בגדות של כ-315 מיליון ש"ח, שבה השתתפו קרנות LBH Value, במסגרת מימון העסקה']],
          p: ['מימון וביצוע עסקאות מורכבות: רכישת נמל חיפה חיברה בין השקעת הון, שותפות אסטרטגית עם קבוצה בינלאומית וניהול עסקת תשתית בהיקף משמעותי. במסגרת המהלך גייסה גדות כ-315 מיליון ש"ח בהנפקת זכויות, שבה השתתפו קרנות LBH Value.', 'ההיגיון האסטרטגי: הנמל מחבר בין הפעילות הימית של גדות, המסופים ומערך האחסון וההובלה היבשתית. השילוב בין נכס תשתית פיזי לבין פעילות מסחרית ולוגיסטית מאפשר לגדות לשרת לקוחות לאורך כל שרשרת האספקה, מהאונייה ועד הלקוח.'] },
        { type: 'assets', h: 'נכסים ויכולות לוגיסטיות', items: [['16', 'אוניות מיכליות ייעודיות לכימיקלים'], ['8', 'מרכזים לוגיסטיים לחומרים מסוכנים'], ['260', 'מכליות כביש'], ['768,000', 'מ"ק נפח אחסון במיכלים'], ['12', 'כורים במתקן טולינג לשמנים'], ['6', 'טרמינלים לכימיקלים ומוצרי דלק בישראל ובאירופה'], ['5', 'חיבורים לים'], ['30%', 'החזקה בנמל חיפה']], note: 'נתוני הפעילות של קבוצת גדות כולה, לפי נתוני הקבוצה. אינם משקפים את חלקה של LBH.' },
        { img: '18-gadot-global-expansion', type: 'corridor', h: 'שרשרת אספקה גלובלית', intro: 'גדות בונה שרשרת אספקה עצמאית לכימיקלים, שמנים ודלקים, המשלבת פעילות ימית ויבשתית: אוניות מיכליות, מסופים ומיכלי אחסון, מכליות כביש ומרכזים לוגיסטיים. נמל חיפה משמש שער אסטרטגי, והתרחבות הפעילות לבלגיה ולארצות הברית מחברת בין התשתיות הפיזיות לבין לקוחות ושווקים בינלאומיים.',
          nodes: [['ארה"ב', 'asset', 'סניף ביוסטון (2025)'], ['אירופה', 'asset', 'טרמינל בנמל גנט, בלגיה'], ['יוון', 'trade', ''], ['קפריסין', 'trade', ''], ['נמל חיפה', 'hub', 'שער אסטרטגי'], ['ירדן', 'trade', ''], ['ערב הסעודית', 'trade', ''], ['איחוד האמירויות', 'trade', ''], ['הודו', 'trade', '']],
          legend: [['asset', 'פעילות ונכסים של גדות'], ['hub', 'מרכז הפעילות בישראל'], ['trade', 'מדינות בשרשרת האספקה האזורית']],
          note: 'המדינות מוצגות כפי שהן מופיעות בחומרי הקבוצה. סימון מדינה אינו מעיד על נכס או על פעילות מסחרית של גדות במדינה זו.' },
        { type: 'engines', h: 'ארבעת מנועי ההשבחה', items: [
          ['צמיחה בינלאומית ופיתוח הליבה', ['2022: הקמת חברת בת בבלגיה ורכישת טרמינל כימי בנמל גנט, עם גישה למים עמוקים בים הצפוני', '2023: הרחבת פעילות ההפצה והאחסון באירופה, ופיתוח האתר כמרכז לוגיסטי בשוק הכימיקלים האירופי', '2023: מכירות MEG (חומרי גלם לקידוחים)', '2025: הקמת סניף גדות ביוסטון', '2025: פתיחת נתיב סחר במרכז אמריקה', '2025: יבוא ביטומן עבור נתיבי ישראל']],
          ['התייעלות תפעולית', ['2025: השקת תוכנית התייעלות', 'חיזוק השדרה הניהולית']],
          ['חדשנות', ['הקמת מתקן Blending & Tolling בבלגיה עם יכולות low-flash מתקדמות']],
          ['רכישות ואינטגרציה', ['פי גלילות (2021)', 'ECO Services (2021)', 'Mercury (2022)', 'מינץ (2023): רכישת 51%', 'נמל חיפה (2023): גדות 30%, אדאני 70%', 'Green Oil (2025)', 'חן שמואל (2026)']]] },
        { type: 'returns', h: 'תשואות הקרן', rows: ['gadot', 'gadot-haifa'], extra: [] },
        { type: 'faq', h: 'שאלות ותשובות: גדות', items: [
          ['מה הקשר בין LBH לקבוצת גדות?', 'בספטמבר 2021 רכשו קרנות LBH Value כ-38% ממניות גדות מקרן טנא, והפכו לשותפות בשליטה בחברה. עופר לינצ\'בסקי, ממייסדי LBH, מכהן כמנכ"ל גדות מאז 2018. בינואר 2023 החזיקו הקרנות בכ-48% מגדות.'],
          ['כיצד השתתפה גדות ברכישת נמל חיפה?', 'גדות הובילה, יחד עם Adani Ports, את הקונסורציום שזכה ביולי 2022 במכרז ההפרטה, לרכישת 100% מחברת נמל חיפה בכ-4 מיליארד ש"ח. במסגרת מימון העסקה ביצעה גדות בינואר 2023 הנפקת זכויות של כ-315 מיליון ש"ח, שבה השתתפו קרנות LBH Value.'],
          ['מהי השותפות עם Adani?', 'Adani Ports, מקבוצת Adani ההודית, היא שותפתה של גדות בנמל חיפה. לפי נתוני הקבוצה, Adani Ports מחזיקה ב-70% מהנמל וגדות ב-30%. השותפות משלבת את הניסיון הבינלאומי של Adani בהפעלת נמלים עם הפעילות הלוגיסטית של גדות בישראל.']] },
        { type: 'sources', h: 'מקורות', topic: 'gadot' }
      ],
      en: [
        { type: 'stats', h: 'Key figures', items: [['2.5x', '', 'EBITDA growth of the Gadot Group, 2018–2025 (group data)'], ['$116', 'Million', 'Gadot Group EBITDA in 2025 (group data)'], ['30%', '', 'Gadot\'s share of Haifa Port, alongside Adani Ports (70%)'], ['7', '', 'Gadot acquisitions, 2021–2026 (group data)']] },
        { type: 'text', h: 'The company and the investment', p: ['Gadot is an Israeli group operating across the value chain of chemicals, oils and fuels: procurement, maritime shipping, terminal storage, distribution and marketing to industry in Israel and Europe. Ofer Linchevski has served as CEO of Gadot since 2018.', 'In September 2021 the LBH Value funds, managed by Value Base M&A, Shimon Ben Hamo and Ofer Linchevski, acquired about 38% of Gadot from the Tene fund, with options to increase their holding, becoming partners in control of the company. In January 2023 the funds held about 48% of Gadot, according to the law firm that represented them.'] },
        { type: 'chart', h: 'EBITDA growth', unit: 'USD million', bars: [['2018', 48, '48'], ['2025', 116, '116']], mult: '2.5x', multL: 'Growth multiple', note: 'Gadot Group EBITDA, in USD million, per group data: 48 in 2018, the year Ofer Linchevski became CEO, and 116 in 2025. The funds invested in 2021, so the full growth over the period should not be attributed to the investment.' },
        { img: '16-gadot-port-haifa', type: 'deal', h: 'Haifa Port: Investing in Strategic Infrastructure', intro: 'In July 2022 the Gadot and Adani Ports consortium won the Haifa Port privatization tender to acquire the State\'s entire holding in Haifa Port Company for about NIS 4 billion. The holding is split Adani Ports 70%, Gadot 30%.',
          parties: [['Adani Ports', '70%'], ['Gadot', '30%']], target: 'Haifa Port Company',
          facts: [['July 2022', 'Privatization tender won'], ['~NIS 4 billion', 'Consideration for 100% of the port'], ['January 2023', 'NIS 315 million rights offering at Gadot, with participation of the LBH Value funds, as part of the deal financing']],
          p: ['Financing and executing complex transactions: the Haifa Port acquisition combined equity investment, a strategic partnership with an international group and a large-scale infrastructure transaction. As part of the deal, Gadot raised about NIS 315 million in a rights offering in which the LBH Value funds took part.', 'The strategic logic: the port connects Gadot\'s maritime operations with its terminals, storage and land transport. Combining a physical infrastructure asset with commercial and logistics activity allows Gadot to serve customers across the entire supply chain, from the vessel to the customer.'] },
        { type: 'assets', h: 'Logistics assets and capabilities', items: [['16', 'Dedicated chemical tankers'], ['8', 'Hazardous materials logistics centers'], ['260', 'Road tankers'], ['768,000', 'Cubic meters of tank storage'], ['12', 'Reactors at an oil tolling facility'], ['6', 'Chemical and fuel terminals in Israel and Europe'], ['5', 'Sea connections'], ['30%', 'Holding in Haifa Port']], note: 'Operating figures for the Gadot Group as a whole, per group data. They do not reflect LBH\'s share.' },
        { img: '18-gadot-global-expansion', type: 'corridor', h: 'Global supply chain', intro: 'Gadot is building an independent supply chain for chemicals, oils and fuels that combines maritime and land operations: chemical tankers, terminals and tank storage, road tankers and logistics centers. Haifa Port serves as a strategic gateway, and expansion into Belgium and the United States links physical infrastructure with international customers and markets.',
          nodes: [['United States', 'asset', 'Houston branch (2025)'], ['Europe', 'asset', 'Port of Ghent terminal, Belgium'], ['Greece', 'trade', ''], ['Cyprus', 'trade', ''], ['Haifa Port', 'hub', 'Strategic gateway'], ['Jordan', 'trade', ''], ['Saudi Arabia', 'trade', ''], ['UAE', 'trade', ''], ['India', 'trade', '']],
          legend: [['asset', 'Gadot operations and assets'], ['hub', 'Israeli operating hub'], ['trade', 'Countries in the regional supply chain']],
          note: 'Countries are shown as they appear in the group\'s materials. A marked country does not imply a Gadot asset or commercial activity in that country.' },
        { type: 'engines', h: 'Four value creation engines', items: [
          ['International Growth & Core Development', ['2022: Belgian subsidiary established and a chemical terminal acquired at the Port of Ghent, with deep-water access to the North Sea', '2023: Distribution and storage expanded in Europe, developing the site into a logistics hub for the European chemicals market', '2023: MEG sales, raw materials for drilling', '2025: Gadot branch opened in Houston', '2025: Central America trade route opened', '2025: Bitumen imports for Netivei Israel']],
          ['Operational Excellence', ['2025: Efficiency program launched', 'Strengthened management team']],
          ['Innovation', ['A blending and tolling facility in Belgium with advanced low-flash capabilities']],
          ['Mergers & Acquisitions', ['2021: P. Glilot', '2021: ECO Services', '2022: Mercury', '2023: Mintz (51%)', '2023: Haifa Port (Gadot 30%, Adani 70%)', '2025: Green Oil', '2026: Hen Shmuel']]] },
        { type: 'returns', h: 'Fund returns', rows: ['gadot', 'gadot-haifa'], extra: [] },
        { type: 'faq', h: 'Questions and answers: Gadot', items: [
          ['How is LBH related to the Gadot Group?', 'In September 2021 the LBH Value funds acquired about 38% of Gadot from the Tene fund and became partners in control of the company. Ofer Linchevski, a co-founder of LBH, has been CEO of Gadot since 2018. In January 2023 the funds held about 48% of Gadot.'],
          ['How did Gadot take part in the Haifa Port acquisition?', 'Gadot led, together with Adani Ports, the consortium that won the privatization tender in July 2022 to acquire 100% of Haifa Port Company for about NIS 4 billion. To help finance the deal, Gadot carried out a rights offering of about NIS 315 million in January 2023, in which the LBH Value funds took part.'],
          ['What is the partnership with Adani?', 'Adani Ports, part of India\'s Adani Group, is Gadot\'s partner in Haifa Port. Per group data, Adani Ports holds 70% of the port and Gadot 30%. The partnership combines Adani\'s international port operating experience with Gadot\'s logistics operations in Israel.']] },
        { type: 'sources', h: 'Sources', topic: 'gadot' }
      ]
    },
    mankai: {
      he: [
        { type: 'stats', h: 'נתוני מפתח', items: [['2022', '', 'שנת רכישת פעילות הינומן, בהליך בפיקוח בית המשפט'], ['כ-6', 'מיליון ש"ח', 'תמורת הרכישה'], ['74%', '', 'קבוצת משקיעים בראשות שמעון בן חמו ועופר לינצ\'בסקי'], ['26%', '', 'קיבוץ בארי']] },
        { type: 'text', h: 'החברה והמוצר', p: ['הינומן היא חברת פוד-טק ישראלית המגדלת ומפתחת מוצרים מבוססי מנקאי (Mankai). מנקאי הוא צמח מים זעיר, בגודל גרגיר קוסקוס, שנחשב לאחד הצמחים הקטנים בעולם ומשמש כמרכיב מזון. הגידול מתבצע בחממות בקיבוץ בארי, המשתרעות על כ-70 דונם.', 'לפי פרסומים, הצמח נחשב לסופר-פוד בזכות תכולת החלבון, הברזל, הסיבים וויטמין B12 שבו. הנתונים מתארים את הרכבו התזונתי, ואינם טענה בריאותית או רפואית.'] },
        { type: 'stages', h: 'מזיהוי הזדמנות לשיקום ולצמיחה', items: [
          ['זיהוי ההזדמנות', 'בינואר 2022 נכנסה הינומן להסדר חוב, לאחר שקרסה תחת חובות של כ-170 מיליון ש"ח. מייסדי LBH זיהו את הפוטנציאל העסקי והטכנולוגי של הפעילות, למרות הקשיים הפיננסיים.'],
          ['רכישה ושיקום', 'ב-2022 נרכשה פעילות החברה בהליך בפיקוח בית המשפט תמורת כ-6 מיליון ש"ח. הבעלות: קבוצת משקיעים בראשות שמעון בן חמו ועופר לינצ\'בסקי (74%) וקיבוץ בארי (26%).'],
          ['התמודדות עם משבר אוקטובר 2023', 'ב-7 באוקטובר 2023 נפגעו חלק מהחממות בבארי. יומיים לאחר מכן חזרו עובדי החברה לטפל בגידולים, והפעילות בבארי שוקמה.'],
          ['פיתוח שווקים ומנועי צמיחה', 'שילוב הצמח במגוון מוצרי מזון, פעילות לקבלת אישורים רגולטוריים לשיווק באירופה, ופיתוח שווקים ביפן, בארצות הברית ובאירופה. הנפקה עתידית נבחנת כאפשרות אחת, ואינה מהלך ודאי.']] },
        { type: 'faq', h: 'שאלות ותשובות: מנקאי', items: [
          ['מהו מנקאי?', 'מנקאי (Mankai) הוא צמח מים זעיר, בגודל גרגיר קוסקוס, שנחשב לאחד הצמחים הקטנים בעולם ומשמש כמרכיב מזון. בישראל מגדלת אותו חברת הינומן בחממות בקיבוץ בארי. לפי פרסומים, הצמח נחשב לסופר-פוד בזכות תכולת החלבון, הברזל, הסיבים וויטמין B12 שבו.'],
          ['מהי חברת הינומן?', 'הינומן היא חברת פוד-טק ישראלית המגדלת ומפתחת מוצרים מבוססי מנקאי. החברה נקלעה לקשיים פיננסיים ונכנסה להסדר חוב בינואר 2022, וב-2022 נרכשה פעילותה בהליך בפיקוח בית המשפט. כיום היא פועלת לפיתוח מוצרים ולהתרחבות לשווקים בינלאומיים.'],
          ['מי רכש את פעילות הינומן?', 'קבוצת משקיעים בראשות שמעון בן חמו ועופר לינצ\'בסקי, מייסדי LBH, יחד עם קיבוץ בארי. הפעילות נרכשה ב-2022 תמורת כ-6 מיליון ש"ח. חלוקת הבעלות: 74% לקבוצת המשקיעים ו-26% לקיבוץ בארי.'],
          ['מה הקשר בין הינומן לקיבוץ בארי?', 'חממות הגידול של הינומן נמצאות בקיבוץ בארי, והקיבוץ מחזיק ב-26% מהחברה. לאחר הפגיעה בקיבוץ ב-7 באוקטובר 2023 חזרו עובדי החברה לחממות יומיים לאחר מכן, והפעילות בבארי שוקמה.']] },
        { type: 'sources', h: 'מקורות', topic: 'mankai' }
      ],
      en: [
        { type: 'stats', h: 'Key figures', items: [['2022', '', 'Hinoman business acquired in a court-supervised process'], ['~NIS 6', 'Million', 'Purchase price'], ['74%', '', 'Investor group led by Shimon Ben Hamo and Ofer Linchevski'], ['26%', '', 'Kibbutz Be\'eri']] },
        { type: 'text', h: 'The company and the product', p: ['Hinoman is an Israeli food-tech company that grows and develops products based on Mankai. Mankai is a tiny aquatic plant, about the size of a grain of couscous, regarded as one of the smallest plants in the world and used as a food ingredient. It is grown in greenhouses at Kibbutz Be\'eri covering about 70 dunams (17 acres).', 'As reported, the plant is regarded as a superfood for its protein, iron, fiber and vitamin B12 content. This describes its nutritional composition and is not a health or medical claim.'] },
        { type: 'stages', h: 'From Investment Opportunity to Business Recovery and Growth', items: [
          ['Identifying the opportunity', 'In January 2022 Hinoman entered a debt arrangement after collapsing under about NIS 170 million in debt. LBH\'s founders saw the business and technological potential of the operation despite its financial difficulties.'],
          ['Acquisition and recovery', 'In 2022 the business was acquired in a court-supervised process for about NIS 6 million. Ownership: an investor group led by Shimon Ben Hamo and Ofer Linchevski (74%) and Kibbutz Be\'eri (26%).'],
          ['Through the October 2023 crisis', 'On October 7, 2023, some of the greenhouses at Be\'eri were damaged. Two days later employees returned to tend the crops, and operations at Be\'eri were restored.'],
          ['New markets and growth engines', 'Incorporating the plant into a range of food products, pursuing regulatory approvals to market in Europe, and developing markets in Japan, the United States and Europe. A future IPO is one option under consideration, not a certainty.']] },
        { type: 'faq', h: 'Questions and answers: Mankai', items: [
          ['What is Mankai?', 'Mankai is a tiny aquatic plant, about the size of a grain of couscous, regarded as one of the smallest plants in the world and used as a food ingredient. In Israel it is grown by Hinoman in greenhouses at Kibbutz Be\'eri. As reported, it is regarded as a superfood for its protein, iron, fiber and vitamin B12 content.'],
          ['What is Hinoman?', 'Hinoman is an Israeli food-tech company that grows and develops Mankai-based products. After financial difficulties it entered a debt arrangement in January 2022, and in 2022 its business was acquired in a court-supervised process. It is now developing products and expanding into international markets.'],
          ['Who acquired the Hinoman business?', 'An investor group led by Shimon Ben Hamo and Ofer Linchevski, the founders of LBH, together with Kibbutz Be\'eri. The business was acquired in 2022 for about NIS 6 million. Ownership is 74% for the investor group and 26% for Kibbutz Be\'eri.'],
          ['How is Hinoman connected to Kibbutz Be\'eri?', 'Hinoman\'s greenhouses are at Kibbutz Be\'eri, and the kibbutz holds 26% of the company. After the October 7, 2023 attack on the kibbutz, employees returned to the greenhouses two days later and operations at Be\'eri were restored.']] },
        { type: 'sources', h: 'Sources', topic: 'mankai' }
      ]
    }
  },

  /* Fund returns. Source: deck slide 3 (LBH deals). NR is shown as in the source. */
  returns: {
    cols: { he: ['עסקה', 'שנה', 'Gross IRR', 'Net IRR', 'Gross TVPI', 'Net TVPI', 'DPI'], en: ['Deal', 'Year', 'Gross IRR', 'Net IRR', 'Gross TVPI', 'Net TVPI', 'DPI'] },
    rows: {
      'dan-a': { he: 'דן Class A', en: 'Dan Class A', v: ['2020', '36%', '31%', '4.8x', '3.8x', '3.0x'] },
      'dan-b': { he: 'דן Class B', en: 'Dan Class B', v: ['2021', '50%', '43%', '5.3x', '4.0x', '3.2x'] },
      'gadot': { he: 'גדות', en: 'Gadot', v: ['2021', '13%', '11%', '1.7x', '1.6x', 'NR'] },
      'gadot-haifa': { he: 'גדות - נמל חיפה', en: 'Gadot - Haifa Port', v: ['2023', '–', '–', '–', '–', '–'] }
    },
    defs: {
      he: [['IRR', 'על בסיס חלוקות במזומן ושווי הנכסים נטו בידי השותפים.'], ['TVPI', 'חלוקות בפועל ממכירת מניות ודיבידנדים, ושווי נכסים שטרם מומשו, ביחס לעלות ההשקעה.'], ['DPI', 'מכפיל בין התמורות במזומן שהתקבלו בידי השותפים המוגבלים לבין הסכום שגויס מהם, לא כולל נכסים שטרם מומשו.'], ['NR', 'לא מדווח.'], ['–', 'אין נתוני תשואה לעסקה.']],
      en: [['IRR', 'Based on cash distributions and the net asset value held by the partners.'], ['TVPI', 'Actual distributions from share sales and dividends, plus the value of unrealized assets, relative to investment cost.'], ['DPI', 'Cash proceeds received by limited partners relative to capital raised from them, excluding unrealized assets.'], ['NR', 'Not reported.'], ['–', 'No return data for this transaction.']]
    },
    source: { he: 'מקור: נתוני הקבוצה.', en: 'Source: group data.' }
  },

  /* ---------- People ---------- */
  founders: ['shimon-ben-hamo', 'ofer-linchevski'],
  people: [
    { slug: 'shimon-ben-hamo', published: true, img: 'assets/team/shimon-ben-hamo.webp',
      he: { name: 'שמעון בן חמו', title: 'שותף מייסד', prev: 'מנכ"ל מקורות', seoTitle: 'שמעון בן חמו | שותף מייסד, LBH',
        summary: 'שמעון בן חמו הוא שותף מייסד בקבוצת LBH. בעל כ-30 שנות ניסיון כמנכ"ל, יו"ר, דירקטור ושותף בקרנות השקעה, בהובלת תאגידים ממשלתיים ותשתיות לאומיות בהיקפים גדולים.',
        card: 'מנכ"ל מקורות לשעבר. הוביל רפורמות מבניות בתשתיות ובתעשיות הביטחוניות הממשלתיות.',
        stats: [['30', 'שנות ניסיון כמנכ"ל, יו"ר, דירקטור ושותף בקרנות'], ['5.8', 'מיליארד ש"ח, היקף נכסים תחת ניהול (AUM) ב-LBH'], ['3', 'רפורמות בחברות ביטחוניות ממשלתיות מרכזיות'], ['7.9x', 'תשואה על ההשקעות בדן תחבורה']],
        bio: ['ברשות החברות הממשלתיות, שבה כיהן כסגן וממלא מקום המנהל, הקים בן חמו את היחידה למונופולים ולשינויים מבניים, שקידמה רפורמות בחברת החשמל, בנמלי הים, ברכבת ישראל, במקורות ובתעשיות הביטחוניות. במסגרת זו הוביל את הפיכת רפאל מיחידת סמך ממשלתית, תוכנית התייעלות משמעותית בתע"ש והפרטתה, והנפקת עשות אשקלון, החברה הביטחונית הממשלתית הראשונה שהונפקה בישראל.',
              'בהמשך ניהל את פעילות אפריקה ישראל בדרום-מזרח אירופה, ובשנים 2011–2017 כיהן כמנכ"ל מקורות, חברת המים הלאומית. בתקופתו הובילה מקורות תוכנית חומש לפיתוח משק המים בהיקף של כ-6 מיליארד ש"ח והרחיבה את פעילותה הבינלאומית. כמו כן כיהן כיו"ר שח"מ (התפלת מים) וכדירקטור בתאגידי תשתית ממשלתיים.',
              'ב-LBH הוא מוביל, יחד עם עופר לינצ\'בסקי, את השקעות הקבוצה בדן תחבורה, בגדות ובמנקאי. ניסיונו כולל ניהול חברות עתירות כוח אדם, תהליכי הבראה תפעוליים, ייזום, תכנון ומימון פרויקטים תוך שילוב טכנולוגיות מתקדמות בתעשייה מסורתית, ויישום אסטרטגיות מימוש רב-שלביות תוך שימור ערך.'],
        roles: ['שותף מייסד, LBH Group ו-Value LBH', 'מנכ"ל מקורות, חברת המים הלאומית (2011–2017)', 'יו"ר שח"מ, התפלת מים', 'מנכ"ל אפריקה ישראל, דרום-מזרח אירופה', 'סגן וממלא מקום מנהל רשות החברות הממשלתיות', 'דירקטור בתאגידי תשתית ממשלתיים'],
        expertise: ['תאגידים ממשלתיים ותשתיות לאומיות', 'רפורמות ושינויים מבניים', 'הבראה תפעולית', 'נדל"ן ותשתיות בינלאומיות', 'אסטרטגיות מימוש'],
        milestones: ['הפיכת רפאל מיחידת סמך ממשלתית', 'תוכנית התייעלות בתע"ש והפרטתה', 'הנפקת עשות אשקלון, החברה הביטחונית הממשלתית הראשונה שהונפקה בישראל', 'שינויים מבניים בתשתיות החיוניות: גז, חשמל, מים, נמלים ורכבות'],
        orgs: ['מקורות', 'רשות החברות הממשלתיות', 'שח"מ', 'אפריקה ישראל', 'רפאל', 'תע"ש', 'עשות אשקלון'] },
      en: { name: 'Shimon Ben Hamo', title: 'Founding Partner', prev: 'CEO, Mekorot', seoTitle: 'Shimon Ben Hamo | Founding Partner, LBH',
        summary: 'Shimon Ben Hamo is a Founding Partner of LBH. He has some 30 years of experience as a CEO, chairman, director and investment fund partner, leading government corporations and national infrastructure at scale.',
        card: 'Former CEO of Mekorot. Led structural reforms in infrastructure and government defense companies.',
        stats: [['30', 'Years as CEO, chairman, director and fund partner'], ['NIS 5.8B', 'LBH assets under management (AUM)'], ['3', 'Reforms at major government defense companies'], ['7.9x', 'Return on the investments in Dan Transportation']],
        bio: ['At the Government Companies Authority, where he served as Deputy and Acting Director General, Ben Hamo established the Monopolies and Structural Change unit, which advanced reforms at the Israel Electric Corporation, the seaports, Israel Railways, Mekorot and the defense industries. In this role he led Rafael\'s transition from a government unit, a major efficiency program at Israel Military Industries (IMI) and its privatization, and the IPO of Ashot Ashkelon, the first government defense company listed in Israel.',
              'He went on to manage Africa Israel\'s operations in South-East Europe, and from 2011 to 2017 served as CEO of Mekorot, Israel\'s national water company. During his tenure Mekorot led a five-year water sector development plan of about NIS 6 billion and expanded its international activity. He also chaired SHAHAM (water desalination) and served as a director of government infrastructure corporations.',
              'At LBH he leads, together with Ofer Linchevski, the group\'s investments in Dan Transportation, Gadot and Mankai. His experience spans managing labor-intensive companies, operational turnarounds, initiating, planning and financing projects that bring advanced technologies into traditional industry, and executing multi-stage, value-preserving exit strategies.'],
        roles: ['Founding Partner, LBH Group and Value LBH', 'CEO, Mekorot, Israel\'s national water company (2011–2017)', 'Chairman, SHAHAM (water desalination)', 'CEO, Africa Israel South-East Europe', 'Deputy and Acting Director General, Government Companies Authority', 'Director, government infrastructure corporations'],
        expertise: ['Government corporations & national infrastructure', 'Reform & structural change', 'Operational turnarounds', 'International real estate & infrastructure', 'Exit strategy'],
        milestones: ['Rafael\'s transition from a government unit', 'IMI efficiency program and privatization', 'IPO of Ashot Ashkelon, Israel\'s first listed government defense company', 'Structural change in essential infrastructure: gas, electricity, water, ports and rail'],
        orgs: ['Mekorot', 'Government Companies Authority', 'SHAHAM', 'Africa Israel', 'Rafael', 'Israel Military Industries', 'Ashot Ashkelon'] } },

    { slug: 'ofer-linchevski', published: true, img: 'assets/team/ofer-linchevski.webp',
      he: { name: 'עופר לינצ\'בסקי', title: 'שותף מייסד', prev: 'מנכ"ל רכבת ישראל, אגד החזקות וממן', seoTitle: 'עופר לינצ\'בסקי | שותף מייסד, LBH',
        summary: 'עופר לינצ\'בסקי הוא שותף מייסד בקבוצת LBH ומנכ"ל קבוצת גדות. בעל כ-30 שנות ניסיון, ובהן 22 שנים כמנכ"ל של חברות תשתית, תחבורה ולוגיסטיקה בהיקפים של מיליארדי שקלים.',
        card: 'מנכ"ל קבוצת גדות. לשעבר מנכ"ל רכבת ישראל, אגד החזקות וקבוצת ממן.',
        stats: [['30', 'שנות ניסיון כמנכ"ל, יו"ר, דירקטור ושותף בקרנות'], ['5', 'כהונות כמנכ"ל של חברות גדולות בארץ ובחו"ל'], ['5.8', 'מיליארד ש"ח, היקף נכסים תחת ניהול (AUM) ב-LBH'], ['7.9x', 'תשואה על ההשקעות בדן תחבורה']],
        bio: ['לינצ\'בסקי, בעל תארים בכלכלה ובמשפטים, החל את דרכו באגף התקציבים במשרד האוצר, שבו כיהן כראש תחום התחבורה וטיפל, בין היתר, בפרויקט כביש חוצה ישראל וברפורמות בקואופרטיבים אגד ודן. בהמשך כיהן כסמנכ"ל הכספים של אגד וכמנכ"ל אגד החזקות, ולאחר מכן כמנכ"ל רכבת ישראל.',
              'כמו כן כיהן כמנכ"ל קבוצת ממן וכמנכ"ל AFI אירופה, ומאז 2018 הוא מנכ"ל קבוצת גדות. בתקופה זו התרחבה גדות לאירופה ולארצות הברית, בין היתר ברכישת טרמינל כימי בנמל גנט שבבלגיה ובהקמת סניף ביוסטון, והשתתפה בעסקת נמל חיפה.',
              'ב-LBH הוא מוביל, יחד עם שמעון בן חמו, את השקעות הקבוצה. הוא מתמחה בייזום, הקמה והפעלה של תשתיות ושרשראות אספקה, בהשבחת חברות ובהצפת ערך, ובניהול משברים ותהליכי שינוי בחברות עתירות כוח אדם, ובעל קשרי עבודה ענפים עם משרדי ממשלה וגורמי מפתח במגזר הציבורי והעסקי.'],
        roles: ['שותף מייסד, LBH Group ו-Value LBH', 'מנכ"ל, קבוצת גדות (מאז 2018)', 'מנכ"ל, רכבת ישראל', 'מנכ"ל, אגד החזקות', 'מנכ"ל, AFI אירופה', 'מנכ"ל, קבוצת ממן', 'ראש תחום התחבורה, אגף התקציבים במשרד האוצר'],
        expertise: ['תשתיות ותחבורה', 'לוגיסטיקה ושרשראות אספקה', 'ניהול פעילות בינלאומית', 'השבחה והצפת ערך', 'ניהול משברים ותהליכי שינוי'],
        milestones: ['כהונה כמנכ"ל של חמש חברות גדולות בארץ ובחו"ל', 'הובלת התרחבות גדות לאירופה ולארצות הברית', 'בניית שרשרת אספקה עצמאית לכימיקלים, שמנים ודלקים'],
        orgs: ['קבוצת גדות', 'רכבת ישראל', 'אגד', 'קבוצת ממן', 'AFI אירופה', 'משרד האוצר'] },
      en: { name: 'Ofer Linchevski', title: 'Founding Partner', prev: 'CEO, Israel Railways, Egged Holdings, Maman', seoTitle: 'Ofer Linchevski | Founding Partner, LBH',
        summary: 'Ofer Linchevski is a Founding Partner of LBH and CEO of Gadot Group. He has some 30 years of experience, including 22 years as CEO of infrastructure, transportation and logistics companies operating at a scale of billions of shekels.',
        card: 'CEO of Gadot Group. Former CEO of Israel Railways, Egged Holdings and Maman Group.',
        stats: [['30', 'Years as CEO, chairman, director and fund partner'], ['5', 'CEO roles at major companies in Israel and abroad'], ['NIS 5.8B', 'LBH assets under management (AUM)'], ['7.9x', 'Return on the investments in Dan Transportation']],
        bio: ['Linchevski, who holds degrees in economics and law, began his career at the Ministry of Finance Budget Department, where he headed the transportation desk and worked on, among other things, the Cross-Israel Highway project and reforms at the Egged and Dan cooperatives. He later served as CFO of Egged and CEO of Egged Holdings, and then as CEO of Israel Railways.',
              'He has also served as CEO of Maman Group and AFI Europe, and since 2018 has been CEO of Gadot Group. Over this period Gadot expanded into Europe and the United States, including the acquisition of a chemical terminal at the Port of Ghent in Belgium and a new branch in Houston, and took part in the Haifa Port transaction.',
              'At LBH he leads the group\'s investments together with Shimon Ben Hamo. He specializes in initiating, building and operating infrastructure and supply chains, value creation, and crisis management and change at labor-intensive companies, and has extensive working relationships with government ministries and key public and business stakeholders.'],
        roles: ['Founding Partner, LBH Group and Value LBH', 'CEO, Gadot Group (since 2018)', 'CEO, Israel Railways', 'CEO, Egged Holdings', 'CEO, AFI Europe', 'CEO, Maman Group', 'Head of Transportation, Budget Department, Ministry of Finance'],
        expertise: ['Infrastructure & transportation', 'Logistics & supply chains', 'International operations', 'Value creation', 'Crisis management & change'],
        milestones: ['CEO of five major companies in Israel and abroad', 'Led Gadot\'s expansion into Europe and the United States', 'Built an independent supply chain for chemicals, oils and fuels'],
        orgs: ['Gadot Group', 'Israel Railways', 'Egged', 'Maman Group', 'AFI Europe', 'Ministry of Finance'] } },

    { slug: 'dori-grossman', published: true, img: 'assets/team/dori-grossman.webp',
      he: { name: 'דורי גרוסמן', title: 'מנהל השקעות', prev: 'עו"ד, מיזוגים ורכישות', seoTitle: 'דורי גרוסמן | מנהל השקעות (Principal), LBH',
        summary: 'דורי גרוסמן הוא מנהל השקעות (Principal) בקבוצת LBH. עורך דין בהכשרתו, בעל למעלה מ-20 שנות ניסיון במיזוגים ורכישות, בהשקעות ובפיתוח עסקי בזירה הישראלית והבינלאומית, ובכלל זה בתעשייה הביטחונית.',
        card: 'למעלה מ-20 שנות ניסיון במיזוגים ורכישות, השקעות ופיתוח עסקי בישראל ובשווקים בינלאומיים.',
        stats: [['20+', 'שנות ניסיון במיזוגים ורכישות, השקעות ופיתוח עסקי'], ['כ-1 מיליארד ש"ח', 'היקף עסקאות רכישה שליווה באלביט מערכות'], ['כ-500 מיליון $', 'מחזור שנתי ברשת האנרגיה שהקים בגאורגיה'], ['1,000', 'עובדים ברשת האנרגיה שהקים']],
        bio: ['גרוסמן עובד לצד מייסדי הקבוצה מזה כשש שנים. הוא שימש יועץ ומלווה מקצועי לקבוצת LBH בהליכי ההקמה והגיוס של קרנות 1 (דן) ו-2 (גדות), ובפיתוח, בבחינה ובליווי של מיזמים והשקעות בתחום התשתיות בישראל ובשווקים בינלאומיים.',
              'את דרכו החל כעורך דין במשרד פירון, בליווי עסקאות ופעילות בינלאומית מורכבת, ובהן עסקאות רכישה של אלביט מערכות בהיקף מצטבר של כ-1 מיליארד ש"ח. בהמשך כיהן כמנהל מיזוגים ורכישות בחברה הביטחונית Defensive Shield, וצבר ניסיון מעשי ביצוא ביטחוני, בהתקשרויות עם לקוחות ובפרויקטים בינלאומיים.',
              'בגאורגיה היה מייסד ומנהל בכיר, ושותף להקמה ולאסטרטגיית ה-Buy & Build של רשת האנרגיה הארצית Gulf Georgia, שצמחה באמצעות רכישות לרשת תחנות דלק ואנרגיה משמעותית עם כ-1,000 עובדים ומחזור הכנסות שנתי של כ-500 מיליון דולר. כחבר דירקטוריון פעיל ברשת מוצרי החשמל והאלקטרוניקה ELIT Electronics, הגדולה בגאורגיה, היה שותף לרכישת החברה כשהיא נושאת חוב משמעותי ולהובלת Turnaround שכלל שיקום פיננסי והשבחת הפעילות לשווי מוערך של כ-135 מיליון ש"ח. כמו כן היה שותף להקמת מיזם ביטוח ישיר עם RSA במזרח אירופה.'],
        roles: ['מנהל השקעות (Principal), LBH', 'יועץ ומלווה בהקמה ובגיוס של קרנות 1 (דן) ו-2 (גדות), LBH', 'מייסד ומנהל בכיר, Gulf Georgia', 'חבר דירקטוריון, ELIT Electronics', 'מנהל מיזוגים ורכישות, Defensive Shield', 'עורך דין, משרד פירון'],
        expertise: ['מיזוגים ורכישות', 'השקעות והקמת קרנות', 'Buy & Build ו-Turnaround', 'פיתוח עסקי בינלאומי', 'תעשייה ביטחונית ויצוא ביטחוני'],
        milestones: ['בניית רשת אנרגיה ארצית בגאורגיה באמצעות רכישות', 'Turnaround ב-ELIT Electronics לשווי מוערך של כ-135 מיליון ש"ח', 'ליווי הקמה וגיוס של קרנות דן וגדות'],
        orgs: ['אלביט מערכות', 'Defensive Shield', 'Gulf Georgia', 'ELIT Electronics', 'RSA', 'משרד פירון'] },
      en: { name: 'Dori Grossman', title: 'Principal', prev: 'Attorney, M&A', seoTitle: 'Dori Grossman | Principal, LBH',
        summary: 'Dori Grossman is a Principal at LBH. An attorney by training, he has more than 20 years of experience in mergers and acquisitions, investments and business development in Israel and international markets, including the defense industry.',
        card: 'More than 20 years in M&A, investments and business development in Israel and international markets.',
        stats: [['20+', 'Years in M&A, investments and business development'], ['~NIS 1B', 'Acquisitions supported at Elbit Systems'], ['~$500M', 'Annual revenue of the energy chain he built in Georgia'], ['1,000', 'Employees at the energy chain he built']],
        bio: ['Grossman has worked alongside the group\'s founders for about six years. He served as an advisor to LBH on the establishment and fundraising of Fund 1 (Dan) and Fund 2 (Gadot), and on developing, assessing and supporting infrastructure ventures and investments in Israel and international markets.',
              'He began his career as an attorney at the Piron law firm, advising on complex transactions and international activity, including Elbit Systems acquisitions totaling about NIS 1 billion. He later served as M&A manager at the defense company Defensive Shield, gaining hands-on experience in defense exports, customer engagements and international projects.',
              'In Georgia he was a founder and senior executive, and a partner in establishing and executing the Buy & Build strategy of Gulf Georgia, a national energy network that grew through acquisitions into a significant fuel and energy chain with about 1,000 employees and annual revenue of about $500 million. As an active board member of ELIT Electronics, Georgia\'s largest consumer electronics chain, he was a partner in acquiring the company while it carried significant debt and in leading a turnaround that included financial restructuring and value creation to an estimated valuation of about NIS 135 million. He was also a partner in establishing a direct insurance venture with RSA in Eastern Europe.'],
        roles: ['Principal, LBH', 'Advisor on the establishment and fundraising of Fund 1 (Dan) and Fund 2 (Gadot), LBH', 'Founder and Senior Executive, Gulf Georgia', 'Board Member, ELIT Electronics', 'M&A Manager, Defensive Shield', 'Attorney, Piron law firm'],
        expertise: ['Mergers & acquisitions', 'Investments & fund formation', 'Buy & Build and turnarounds', 'International business development', 'Defense industry & defense exports'],
        milestones: ['Built a national energy network in Georgia through acquisitions', 'ELIT Electronics turnaround to an estimated valuation of about NIS 135 million', 'Supported the establishment and fundraising of the Dan and Gadot funds'],
        orgs: ['Elbit Systems', 'Defensive Shield', 'Gulf Georgia', 'ELIT Electronics', 'RSA', 'Piron law firm'] } },

    { slug: 'yifat-feiglin', published: true, img: 'assets/team/yifat-feiglin.webp',
      he: { name: 'יפעת פייגלין', title: 'מנהלת השקעות', prev: 'אנליסטית ראשית', seoTitle: 'יפעת פייגלין | מנהלת השקעות, LBH',
        summary: 'יפעת פייגלין היא מנהלת השקעות בקבוצת LBH, ועובדת לצד מייסדי הקבוצה מזה כשש שנים. בעלת ניסיון רב באנליזה של מיזוגים, רכישות ומימון פרויקטים, ובליווי עסקאות רכישה מורכבות.',
        card: 'ניסיון באנליזה של מיזוגים, רכישות ומימון פרויקטים, ובליווי עסקאות רכישה מורכבות.',
        stats: [],
        bio: ['בעבר כיהנה פייגלין כאנליסטית ראשית בחברות גדולות ובחברות ייעוץ מובילות בישראל. ניסיונה כולל בחינת עסקאות, ניתוח פיננסי וליווי תהליכי רכישה מורכבים.'],
        roles: ['מנהלת השקעות, LBH', 'אנליסטית ראשית בחברות גדולות ובחברות ייעוץ בישראל (בעבר)'],
        expertise: ['אנליזת השקעות', 'מיזוגים ורכישות', 'מימון פרויקטים', 'עסקאות מורכבות', 'ניתוח פיננסי'],
        milestones: [], orgs: [] },
      en: { name: 'Yifat Feiglin', title: 'Head of Investments', prev: 'Chief analyst', seoTitle: 'Yifat Feiglin | Head of Investments, LBH',
        summary: 'Yifat Feiglin is Head of Investments at LBH and has worked alongside the group\'s founders for about six years. She has extensive experience analyzing mergers, acquisitions and project finance, and supporting complex acquisitions.',
        card: 'Experience analyzing M&A and project finance, and supporting complex acquisitions.',
        stats: [],
        bio: ['She previously served as chief analyst at large companies and leading advisory firms in Israel. Her experience includes transaction assessment, financial analysis and supporting complex acquisition processes.'],
        roles: ['Head of Investments, LBH', 'Chief analyst at large companies and advisory firms in Israel (previously)'],
        expertise: ['Investment analysis', 'Mergers & acquisitions', 'Project finance', 'Complex transactions', 'Financial analysis'],
        milestones: [], orgs: [] } },

    /* Hidden until the client confirms current affiliation and title. Set published: true to show. */
    { slug: 'assaf-reich', published: false, img: 'assets/team/assaf-reich.webp',
      he: { name: 'אסף רייך', title: 'יועץ תפעולי בכיר', prev: 'מנהל ויזם בתעשייה', seoTitle: 'אסף רייך | LBH',
        summary: 'אסף רייך הוא יועץ תפעולי בכיר ב-LBH. מנהל ויזם בעל כעשרים שנות ניסיון בניהול, בתפעול ובפיתוח עסקי של חברות גדולות בתחום הייצור התעשייתי.',
        card: 'מנהל ויזם. ניסיון בניהול, בתפעול ובפיתוח עסקי של חברות ייצור תעשייתי גדולות.', stats: [],
        bio: ['רייך מביא ניסיון ניהולי ויזמי עשיר בתעשייה, עם התמחות בתפעול ובפיתוח עסקי של עסקי ייצור גדולים.'],
        roles: ['יועץ תפעולי בכיר, LBH'], expertise: ['ניהול תעשייתי', 'תפעול', 'יזמות', 'פיתוח עסקי'], milestones: [], orgs: [] },
      en: { name: 'Assaf Reich', title: 'Senior Operating Advisor', prev: 'Industrial executive and entrepreneur', seoTitle: 'Assaf Reich | LBH',
        summary: 'Assaf Reich is Senior Operating Advisor at LBH. An executive and entrepreneur, he has about twenty years of experience in management, operations and business development at large industrial manufacturing companies.',
        card: 'Executive and entrepreneur in industrial manufacturing.', stats: [],
        bio: ['Reich brings extensive executive and entrepreneurial experience in industry, specializing in operations and business development for large manufacturing businesses.'],
        roles: ['Senior Operating Advisor, LBH'], expertise: ['Industrial management', 'Operations', 'Entrepreneurship', 'Business development'], milestones: [], orgs: [] } }
  ],

  /* ---------- About ---------- */
  about: {
    he: { h1: 'קבוצת LBH - ניסיון שמייצר ערך', lead: 'קבוצת השקעות ישראלית שהוקמה על ידי שמעון בן חמו ועופר לינצ\'בסקי.',
      whoH: 'מי אנחנו',
      who: ['LBH היא קבוצת השקעות ישראלית שהוקמה על ידי שמעון בן חמו ועופר לינצ\'בסקי, ומבוססת על שילוב בין ניסיון ניהולי בכיר, מומחיות פיננסית ויכולת מוכחת לפיתוח ולהשבחת חברות.',
            'שותפי הקבוצה הובילו לאורך השנים חברות ותאגידים משמעותיים בישראל ובחו"ל, בתחומי התשתיות, התחבורה, הלוגיסטיקה, התעשייה והפעילות הבינלאומית.',
            'הקבוצה פועלת באמצעות גישה השקעתית אקטיבית, שבה יצירת הערך אינה מסתיימת בביצוע העסקה. היא ממשיכה בפיתוח פעילות הליבה, בשיפור תפעולי, בבניית מערכות ניהול, בקידום חדשנות, בצמיחה אורגנית ובמיזוגים ורכישות.',
            'הפעילות בדן ובגדות ממחישה את יכולתה של הקבוצה לשלב מורכבות השקעתית עם ניסיון ביצועי ולפתח עסקים בהיקפים משמעותיים.'],
      foundersH: 'מייסדי הקבוצה', fundsH: 'שלוש הקרנות', fundsNote: 'הקרנות הן כלי ההשקעה של הקבוצה. חברות הפורטפוליו שבהן הושקעו מוצגות בעמודי ההשקעות.',
      philEyebrow: 'הגישה שמאחורי ההשקעות', philH: 'אנחנו משקיעים בחברות, אבל קודם כול יודעים איך לבנות אותן.',
      philP: ['קבוצת LBH נשענת על הניסיון הניהולי והעסקי של שמעון בן חמו ועופר לינצ\'בסקי, שניהלו בעצמם חברות ותאגידים בתחומי התשתיות, התחבורה, הלוגיסטיקה והפעילות הבינלאומית: חברת המים הלאומית מקורות, רכבת ישראל, אגד, ממן וגדות. הניסיון הזה מאפשר לזהות היכן נמצא הערך בעסק, להבין את המורכבות התפעולית שלו ולהוביל לצד ההנהלה תהליכי שינוי וצמיחה.',
             'הדוגמאות מגוונות: בדן, השבחת פעילות התחבורה והפרדתה מפעילות הנדל"ן עד למכירת השליטה; בגדות, בניית פלטפורמה לוגיסטית בינלאומית והשתתפות ברכישת נמל חיפה; ובהינומן, רכישת חברה במשבר ושיקומה. שתי הראשונות בוצעו באמצעות קרנות Value LBH, והשלישית בידי קבוצת משקיעים בראשות המייסדים.'],
      trackH: 'רקורד ביצוע',
      track: [['דן תחבורה', 'צמיחה ב-EBITDA מ-171 ל-547 מיליון ש"ח בין 2019 ל-2025, ומכירת השליטה בדן תחבורה ב-2026 לפי שווי אפקטיבי של כ-2.8 מיליארד ש"ח.', 'dan'],
              ['גדות', 'צמיחה ב-EBITDA מ-48 ל-116 מיליון דולר בין 2018 ל-2025, התרחבות לאירופה ולארה"ב ושבע רכישות משלימות.', 'gadot']],
      teamH: 'הצוות', teamP: 'מייסדי הקבוצה וצוות ההשקעות, הפועלים יחד מזה כשש שנים.',
      factsH: 'LBH - עובדות מרכזיות',
      facts: [['שם', 'LBH (LBH Group)'], ['תחום', 'קבוצת השקעות ישראלית: השקעות בחברות תפעוליות, השבחה ובניית פלטפורמות'], ['מייסדים', 'שמעון בן חמו ועופר לינצ\'בסקי'], ['תחומי מומחיות', 'תשתיות, תחבורה, לוגיסטיקה ושרשראות אספקה, השבחת חברות, מיזוגים ורכישות'], ['כלי השקעה', 'קרנות Value LBH (LBH Value), בשיתוף בית ההשקעות Value Base'], ['השקעות מרכזיות', 'דן תחבורה ודן נדל"ן (מ-2019), גדות ונמל חיפה (מ-2021), הינומן, מגדלת המנקאי (מ-2022)'], ['אסטרטגיה', 'Buy & Build: פיתוח פעילות הליבה, התייעלות, חדשנות ורכישות משלימות'], ['מיקום', 'ישראל'], ['אתר רשמי', '@site']],
      structH: 'מבנה פעילות ההשקעות',
      struct: ['LBH פועלת באמצעות כמה כלי השקעה. ההשקעות בדן ובגדות בוצעו באמצעות קרנות Value LBH (מכונות גם LBH Value), שהוקמו בשיתוף עם בית ההשקעות Value Base. לפי הפרסומים, הקרנות מנוהלות בידי Value Base M&A יחד עם שמעון בן חמו ועופר לינצ\'בסקי. בדן נכנסה להשקעה ב-2019 קרן LBH תשתיות, יחד עם Value Base.', 'ההשקעה בהינומן, המגדלת את המנקאי, בוצעה ב-2022 על ידי קבוצת משקיעים בראשות שמעון בן חמו ועופר לינצ\'בסקי, יחד עם קיבוץ בארי. תפקידים ניהוליים קודמים של המייסדים, כמו ניהול מקורות או רכבת ישראל, אינם השקעות של הקבוצה.'],
      faqH: 'שאלות ותשובות על LBH',
      faq: [['מי הקים את קבוצת LBH?', 'קבוצת LBH הוקמה על ידי שמעון בן חמו ועופר לינצ\'בסקי. בן חמו כיהן בין היתר כמנכ"ל מקורות וכסגן וממלא מקום מנהל רשות החברות הממשלתיות. לינצ\'בסקי כיהן כמנכ"ל רכבת ישראל, אגד החזקות וקבוצת ממן, ומאז 2018 הוא מנכ"ל קבוצת גדות.'],
            ['במה מתמחה קבוצת LBH?', 'LBH מתמחה בהשקעות בחברות תפעוליות בעלות פוטנציאל צמיחה, בעיקר בתחומי התשתיות, התחבורה והלוגיסטיקה, ובהשבחתן באמצעות מעורבות ניהולית: חיזוק פעילות הליבה, התייעלות, חדשנות ורכישות משלימות. ההשקעות המרכזיות שלה הן דן, גדות והינומן.'],
            ['מה הקשר בין LBH ל-Value LBH?', 'Value LBH (מכונה גם LBH Value) הוא שם קרנות ההשקעה שבאמצעותן השקיעה הקבוצה בדן ובגדות. הקרנות הוקמו בשיתוף עם בית ההשקעות Value Base, ולפי הפרסומים מנוהלות בידי Value Base M&A יחד עם שמעון בן חמו ועופר לינצ\'בסקי.'],
            ['באילו השקעות הייתה מעורבת הקבוצה?', 'דן תחבורה, שבה נכנסה הקבוצה להשקעה ב-2019 ומכרה את השליטה ב-2026; דן נדל"ן, שהופרדה מדן ונותרה בהחזקת Value LBH; גדות, שבה השקיעו הקרנות ב-2021 ושהשתתפה ברכישת נמל חיפה; והינומן, מגדלת המנקאי, שנרכשה ב-2022 בידי קבוצת משקיעים בראשות המייסדים.'],
            ['מהי אסטרטגיית ה-Buy & Build של LBH?', 'Buy & Build היא גישה שבה הקבוצה רוכשת החזקה בחברה בעלת בסיס תפעולי, ובונה אותה לפלטפורמה גדולה יותר. בהשקעות הקבוצה היא יושמה בארבעה צירים: פיתוח פעילות הליבה, התייעלות תפעולית, חדשנות ופיתוח עסקי, ורכישות משלימות. בדן ובגדות היא לוותה בצמיחה ב-EBITDA, לפי נתוני הקבוצה.']],
      disclosure: 'ההשקעות בדן תחבורה ובגדות בוצעו באמצעות קרנות Value LBH. תפקידים ניהוליים קודמים של מייסדי הקבוצה ושל אנשי הצוות מוצגים בפרופילים האישיים, ואינם השקעות של LBH.' },
    en: { h1: 'LBH - Experience That Creates Value', lead: 'An Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski.',
      whoH: 'Who we are',
      who: ['LBH is an Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski, built on a combination of senior executive experience, financial expertise and a proven ability to develop and transform businesses.',
            'The group\'s partners have led major companies and corporations in Israel and abroad, across infrastructure, transportation, logistics, industry and international operations.',
            'The group takes an active investment approach in which value creation does not end at closing. It continues through core business development, operational improvement, management systems, innovation, organic growth and mergers and acquisitions.',
            'The Dan and Gadot investments demonstrate the group\'s ability to combine investment complexity with execution experience and to grow businesses at significant scale.'],
      foundersH: 'Founders', fundsH: 'Three funds', fundsNote: 'The funds are the group\'s investment vehicles. The portfolio companies they invested in are presented on the investment pages.',
      philEyebrow: 'The Investment Philosophy Behind LBH', philH: 'We invest in companies, but first we know how to build them.',
      philP: ['LBH draws on the executive and business experience of Shimon Ben Hamo and Ofer Linchevski, who have themselves run companies and corporations in infrastructure, transportation, logistics and international operations: the national water company Mekorot, Israel Railways, Egged, Maman and Gadot. That experience helps identify where value sits in a business, understand its operational complexity and lead change and growth alongside management.',
             'The examples vary: at Dan, improving the transportation business and separating it from real estate through to the sale of control; at Gadot, building an international logistics platform and taking part in the Haifa Port acquisition; and at Hinoman, acquiring a company in crisis and leading its recovery. The first two were made through the Value LBH funds, the third by an investor group led by the founders.'],
      trackH: 'Track record',
      track: [['Dan Transportation', 'EBITDA growth from NIS 171 million to NIS 547 million between 2019 and 2025, and the 2026 sale of control of Dan Transportation at an effective valuation of about NIS 2.8 billion.', 'dan'],
              ['Gadot', 'EBITDA growth from $48 million to $116 million between 2018 and 2025, expansion into Europe and the US, and seven add-on acquisitions.', 'gadot']],
      teamH: 'Our team', teamP: 'The group\'s founders and investment team, working together for about six years.',
      factsH: 'LBH at a Glance',
      facts: [['Name', 'LBH (LBH Group)'], ['Business', 'Israeli investment group: investing in operating companies, value creation and platform building'], ['Founders', 'Shimon Ben Hamo and Ofer Linchevski'], ['Expertise', 'Infrastructure, transportation, logistics and supply chains, value creation, mergers and acquisitions'], ['Investment vehicles', 'Value LBH funds (LBH Value), in partnership with the investment house Value Base'], ['Key investments', 'Dan Transportation and Dan Real Estate (from 2019), Gadot and Haifa Port (from 2021), Hinoman, grower of Mankai (from 2022)'], ['Strategy', 'Buy & Build: core business development, operational efficiency, innovation and add-on acquisitions'], ['Location', 'Israel'], ['Official website', '@site']],
      structH: 'How LBH invests',
      struct: ['LBH invests through several vehicles. The investments in Dan and Gadot were made through the Value LBH funds (also referred to as LBH Value), established in partnership with the investment house Value Base. As reported, the funds are managed by Value Base M&A together with Shimon Ben Hamo and Ofer Linchevski. In Dan, the LBH Infrastructure fund invested together with Value Base in 2019.', 'The investment in Hinoman, the grower of Mankai, was made in 2022 by an investor group led by Shimon Ben Hamo and Ofer Linchevski, together with Kibbutz Be\'eri. The founders\' prior leadership roles, such as heading Mekorot or Israel Railways, are not investments of the group.'],
      faqH: 'Questions and answers about LBH',
      faq: [['Who founded LBH?', 'LBH was founded by Shimon Ben Hamo and Ofer Linchevski. Ben Hamo\'s roles have included CEO of Mekorot and Deputy and Acting Director General of the Government Companies Authority. Linchevski has served as CEO of Israel Railways, Egged Holdings and Maman Group, and since 2018 as CEO of Gadot Group.'],
            ['What does LBH specialize in?', 'LBH invests in operating companies with growth potential, mainly in infrastructure, transportation and logistics, and creates value through executive involvement: strengthening the core business, operational efficiency, innovation and add-on acquisitions. Its key investments are Dan, Gadot and Hinoman.'],
            ['How is LBH related to Value LBH?', 'Value LBH (also referred to as LBH Value) is the name of the investment funds through which the group invested in Dan and Gadot. The funds were established in partnership with the investment house Value Base and, as reported, are managed by Value Base M&A together with Shimon Ben Hamo and Ofer Linchevski.'],
            ['Which investments has the group been involved in?', 'Dan Transportation, which the group invested in from 2019 and sold control of in 2026; Dan Real Estate, separated from Dan and retained by Value LBH; Gadot, in which the funds invested in 2021 and which took part in the Haifa Port acquisition; and Hinoman, the grower of Mankai, acquired in 2022 by an investor group led by the founders.'],
            ['What is LBH\'s Buy & Build strategy?', 'Buy & Build means acquiring a stake in a company with an operating base and building it into a larger platform. Across the group\'s investments it has been applied along four axes: core business development, operational efficiency, innovation and business development, and add-on acquisitions. At Dan and Gadot it was accompanied by EBITDA growth, per group data.']],
      disclosure: 'The investments in Dan Transportation and Gadot were made through the Value LBH funds. Prior leadership roles of the founders and team members are presented in their individual profiles and are not LBH investments.' }
  },

  /* ---------- Investments overview ---------- */
  investments: {
    he: { h1: 'ההשקעות והרקורד שלנו', lead: 'שלוש קרנות ההשקעה של LBH: דן, גדות ומנקאי. דן וגדות מוצגות כמקרי בוחן מלאים, עם נתוני צמיחה ותוצאות.',
      fundsH: 'הקרנות', returnsH: 'תשואות הקרנות', returnsIntro: 'נתוני התשואה של עסקאות הקבוצה, לפי ההגדרות שלהלן.',
      expH: 'ניסיון ניהולי של המייסדים', expP: 'לצד השקעות הקבוצה, למייסדים ניסיון ניהולי אישי בתאגידים מרכזיים. תפקידים אלה אינם השקעות של LBH, ומפורטים בפרופילים האישיים.',
      exp: [['מקורות', 'מנכ"ל, 2011–2017', 'shimon-ben-hamo'], ['רשות החברות הממשלתיות', 'סגן וממלא מקום המנהל', 'shimon-ben-hamo'], ['אפריקה ישראל, דרום-מזרח אירופה', 'מנכ"ל', 'shimon-ben-hamo'], ['רכבת ישראל', 'מנכ"ל', 'ofer-linchevski'], ['אגד החזקות', 'מנכ"ל', 'ofer-linchevski'], ['קבוצת ממן', 'מנכ"ל', 'ofer-linchevski'], ['AFI אירופה', 'מנכ"ל', 'ofer-linchevski'], ['קבוצת גדות', 'מנכ"ל, מאז 2018', 'ofer-linchevski']] },
    en: { h1: 'Our Investments & Track Record', lead: 'LBH\'s three investment funds: Dan, Gadot and Mankai. Dan and Gadot are presented as full case studies, with growth data and results.',
      fundsH: 'The funds', returnsH: 'Fund returns', returnsIntro: 'Return data for the group\'s transactions, according to the definitions below.',
      expH: 'Founders\' executive experience', expP: 'Alongside the group\'s investments, the founders have personal leadership experience at major corporations. These roles are not LBH investments and are detailed in the individual profiles.',
      exp: [['Mekorot', 'CEO, 2011–2017', 'shimon-ben-hamo'], ['Government Companies Authority', 'Deputy and Acting Director General', 'shimon-ben-hamo'], ['Africa Israel, South-East Europe', 'CEO', 'shimon-ben-hamo'], ['Israel Railways', 'CEO', 'ofer-linchevski'], ['Egged Holdings', 'CEO', 'ofer-linchevski'], ['Maman Group', 'CEO', 'ofer-linchevski'], ['AFI Europe', 'CEO', 'ofer-linchevski'], ['Gadot Group', 'CEO, since 2018', 'ofer-linchevski']] }
  },

  /* Labels shared by investment pages */
  inv: {
    he: { sectorL: 'תחום', leadersH: 'הובלה מטעם LBH', otherH: 'השקעות נוספות', disclosureH: 'גילוי נאות', statusDone: 'הושלם', statusPending: 'טרם הושלם', statusOther: 'סטטוס', updatedL: 'עודכן: נובמבר 2026' },
    en: { sectorL: 'Sector', leadersH: 'LBH leadership', otherH: 'Other investments', disclosureH: 'Disclosure', statusDone: 'Completed', statusPending: 'Not completed', statusOther: 'Status', updatedL: 'Updated: November 2026' }
  },

  /* ---------- Strategy ---------- */
  strategy: {
    he: { h1: 'אסטרטגיית השקעות שמחברת בין הון, ניהול וביצוע', lead: 'ארבעה שלבים, מזיהוי ההזדמנות ועד מימוש הערך, כפי שהודגמו בדן ובגדות.',
      stagesH: 'ארבעת שלבי ההשקעה', exampleL: 'דוגמה',
      stages: [['זיהוי ההזדמנות', 'איתור חברות בעלות נכסים, יכולות, ידע, תשתיות או מעמד עסקי המאפשרים פיתוח והשבחה.', 'דן: חברת תחבורה ותיקה, בעלת נכסים, מעמד בשוק ויכולות תפעוליות, עם פוטנציאל צמיחה לתחומי התשתיות והרכבת הקלה.'],
               ['בניית אסטרטגיית השבחה', 'גיבוש תוכנית הכוללת חיזוק פעילות ליבה, שיפור יעילות, פיתוח עסקי, השקעות הון ורכישות משלימות.', 'גדות: תוכנית לבניית שרשרת אספקה עצמאית לכימיקלים, שמנים ודלקים, הכוללת התרחבות לאירופה ורכישות משלימות.'],
               ['ביצוע והובלת שינוי', 'מעורבות ניהולית, חיזוק הנהלה, ייעול פעילות, בניית תשתיות לצמיחה ויישום התוכנית העסקית.', 'דן: הסדרי פרישה ל-425 עובדים, מעבר למטה רזה והפחתת שיעור אי-הביצוע מ-9% ל-1.5%.'],
               ['הצמחה ומימוש ערך', 'הרחבת הפעילות, בניית פלטפורמה עסקית משמעותית ובחינת אפשרויות מימוש בהתאם לאופי ההשקעה ולתנאי השוק.', 'דן: הפרדת פעילות התחבורה מפעילות הנדל"ן, ומכירת השליטה בדן תחבורה ב-2026 לפי שווי אפקטיבי של כ-2.8 מיליארד ש"ח.']],
      bbH: 'Buy & Build', bbP: 'ארבעת צירי ההשבחה, כפי שיושמו בהשקעות הקבוצה.',
      areasH: 'תחומי ניסיון מרכזיים', areas: ['תשתיות ותחבורה', 'לוגיסטיקה ושרשראות אספקה', 'תעשייה', 'השקעות, מיזוגים ורכישות', 'השבחת חברות ופיתוח עסקי'],
      areasNote: 'לצוות גם ניסיון בתעשייה הביטחונית: רפורמות בחברות ביטחוניות ממשלתיות ועסקאות מיזוג ורכישה בתחום.' },
    en: { h1: 'An Investment Strategy Built on Capital, Leadership and Execution', lead: 'Four stages, from identifying the opportunity to realizing value, as demonstrated at Dan and Gadot.',
      stagesH: 'Four stages of an investment', exampleL: 'Example',
      stages: [['Identifying the opportunity', 'Finding companies with assets, capabilities, know-how, infrastructure or market position that allow development and value creation.', 'Dan: an established transportation company with assets, market position and operating capabilities, and growth potential in infrastructure and light rail.'],
               ['Building a value creation plan', 'A plan covering core business strengthening, efficiency, business development, capital investment and add-on acquisitions.', 'Gadot: a plan to build an independent supply chain for chemicals, oils and fuels, including expansion into Europe and add-on acquisitions.'],
               ['Executing and leading change', 'Executive involvement, a stronger management team, operational efficiency, infrastructure for growth and delivery of the business plan.', 'Dan: retirement arrangements for 425 employees, a lean headquarters and a non-performance rate cut from 9% to 1.5%.'],
               ['Growing and realizing value', 'Expanding the business, building a significant platform and assessing exit options in line with the nature of the investment and market conditions.', 'Dan: separating transportation from real estate, and the 2026 sale of control of Dan Transportation at an effective valuation of about NIS 2.8 billion.']],
      bbH: 'Buy & Build', bbP: 'Four value creation axes, as applied across the group\'s investments.',
      areasH: 'Core areas of experience', areas: ['Infrastructure & Transportation', 'Logistics & Supply Chains', 'Industry', 'Investments, Mergers & Acquisitions', 'Value Creation & Business Development'],
      areasNote: 'The team also has defense-industry experience: reforms at government defense companies and M&A transactions in the sector.' }
  },

  media: {
    he: { h1: 'בתקשורת', lead: 'פרסומים עיתונאיים ומקצועיים מאומתים על LBH, מייסדיה והשקעותיה. התקצירים נכתבו על ידינו; הקישורים מובילים לפרסום המקורי.', readL: 'לפרסום המקורי', topics: { dan: 'דן', gadot: 'גדות', mankai: 'מנקאי', mgmt: 'הנהלה' } },
    en: { h1: 'In the Media', lead: 'Verified press and professional coverage of LBH, its founders and investments. Summaries are our own; links go to the original publication.', readL: 'Read the original', topics: { dan: 'Dan', gadot: 'Gadot', mankai: 'Mankai', mgmt: 'Leadership' } }
  },

  team: {
    he: { h1: 'הצוות', lead: 'מייסדי הקבוצה וצוות ההשקעות.', foundersH: 'המייסדים', teamH: 'צוות ההשקעות', otherH: 'חברי צוות נוספים' },
    en: { h1: 'Our Team', lead: 'The group\'s founders and investment team.', foundersH: 'Founders', teamH: 'Investment team', otherH: 'Other team members' }
  },

  profile: {
    he: { bioH: 'ביוגרפיה', rolesH: 'תפקידים נבחרים', expH: 'תחומי מומחיות', milesH: 'אבני דרך', orgsH: 'ארגונים', relH: 'השקעות שבהן מעורב',
      factRole: 'תפקיד ב-LBH', factAffil: 'שיוך', factPrev: 'ניסיון קודם', milesNote: 'הישגים אישיים, בנפרד מביצועי החברות.', statsNote: 'הנתונים מתייחסים לפעילויות שבהן היה מעורב ואינם היקפי פעילות של LBH, אלא אם צוין אחרת.', toc: 'בעמוד זה' },
    en: { bioH: 'Biography', rolesH: 'Selected roles', expH: 'Areas of expertise', milesH: 'Milestones', orgsH: 'Organizations', relH: 'Investments involved in',
      factRole: 'Role at LBH', factAffil: 'Affiliation', factPrev: 'Previously', milesNote: 'Personal contributions, shown separately from company performance.', statsNote: 'Figures refer to the activities he or she was involved in and are not LBH figures unless stated.', toc: 'On this page' }
  },

  /* Disclosure (draft for legal review) */
  disclosure: {
    he: ['המידע באתר זה נועד למטרות מידע כללי בלבד. אין בו הצעה לרכישת ניירות ערך או יחידות השתתפות בקרן, ייעוץ השקעות, שיווק השקעות או תחליף לייעוץ המתחשב בנתונים ובצרכים המיוחדים של כל אדם.',
         'נתוני הביצוע המוצגים הם נתוני עבר, המבוססים על נתוני הקבוצה ועל ההגדרות המפורטות לצדם. ביצועי עבר אינם מעידים ואינם מבטיחים תוצאות עתידיות. השקעה בקרנות השקעה פרטיות כרוכה בסיכונים, לרבות אובדן ההשקעה כולה.',
         'נתוני IRR ו-TVPI כוללים שווי של נכסים שטרם מומשו, הנקבע על פי הערכות ועשוי להשתנות.',
         'נתוני הפעילות של חברות הפורטפוליו (לרבות EBITDA, נכסים ומספר עובדים) מתייחסים לחברה כולה ואינם משקפים את חלקה של הקבוצה בה. תפקידים ניהוליים אישיים של מייסדי הקבוצה ואנשי הצוות אינם השקעות של LBH.',
         'השתתפות בקרנות הקבוצה, ככל שתוצע, תוצע רק למשקיעים הכשירים לכך על פי דין, ועל פי מסמכי ההצעה הרשמיים בלבד.'],
    en: ['The information on this website is for general information only. It is not an offer to buy securities or fund interests, investment advice, investment marketing or a substitute for advice that takes into account each person\'s particular circumstances and needs.',
         'Performance data shown is historical, based on the group\'s data and the definitions set out alongside it. Past performance is not indicative of, and does not guarantee, future results. Investing in private investment funds involves risk, including the loss of the entire investment.',
         'IRR and TVPI figures include the value of unrealized assets, which is based on valuations and may change.',
         'Portfolio company operating data (including EBITDA, assets and headcount) refers to the company as a whole and does not reflect the group\'s share. Individual leadership roles of the founders and team members are not LBH investments.',
         'Participation in the group\'s funds, if offered, will be offered only to investors eligible under applicable law and solely on the basis of official offering documents.']
  },

  legal: {
    privacy: {
      he: { h1: 'מדיניות פרטיות', updated: 'עדכון אחרון: נובמבר 2026', sections: [['כללי', 'מסמך זה מתאר את השימוש במידע באתר LBH.'], ['איסוף מידע', 'האתר אינו כולל טפסים ואינו אוסף מידע אישי מהגולשים. האתר אינו משתמש בעוגיות לצורכי פרסום או מעקב.'], ['שירותי צד שלישי', 'האתר מאוחסן ב-GitHub Pages ומשתמש בגופנים של Google Fonts. ספקים אלה עשויים לקבל מידע טכני בסיסי, כגון כתובת IP, לצורך הגשת התוכן, בהתאם למדיניות הפרטיות שלהם.'], ['קישורים חיצוניים', 'האתר כולל קישורים לפרסומים באתרים חיצוניים. LBH אינה אחראית למדיניות הפרטיות של אתרים אלה.']] },
      en: { h1: 'Privacy Policy', updated: 'Last updated: November 2026', sections: [['General', 'This document describes the use of information on the LBH website.'], ['Information collection', 'The website has no forms and does not collect personal information from visitors. It does not use cookies for advertising or tracking.'], ['Third-party services', 'The website is hosted on GitHub Pages and uses Google Fonts. These providers may receive basic technical information, such as an IP address, to deliver content, in line with their own privacy policies.'], ['External links', 'The website links to publications on external websites. LBH is not responsible for the privacy practices of those websites.']] } },
    accessibility: {
      he: { h1: 'הצהרת נגישות', updated: 'עדכון אחרון: נובמבר 2026', sections: [['מחויבות לנגישות', 'האתר תוכנן בהתאם להנחיות WCAG 2.2 ברמה AA ולתקן הישראלי 5568.'], ['התאמות באתר', 'ניווט מלא במקלדת, קישור "דלג לתוכן", מבנה כותרות סמנטי, טקסט חלופי לתמונות, תיאור טקסטואלי לגרפים, ניגודיות צבעים מספקת, תמיכה מלאה בכיווניות עברית (RTL), וכיבוד העדפת המשתמש להפחתת תנועה.']] },
      en: { h1: 'Accessibility Statement', updated: 'Last updated: November 2026', sections: [['Our commitment', 'This website is designed in line with WCAG 2.2 Level AA and Israeli Standard 5568.'], ['Accessibility features', 'Full keyboard navigation, a "skip to content" link, semantic heading structure, text alternatives for images, text descriptions for charts, sufficient color contrast, full right-to-left support for Hebrew, and respect for the reduced-motion preference.']] } },
    terms: {
      he: { h1: 'תנאי שימוש וגילוי נאות', updated: 'עדכון אחרון: נובמבר 2026', sections: [['כללי', 'השימוש באתר כפוף לתנאים אלה.'], ['גילוי נאות', '@disclosure'], ['קניין רוחני', 'כל הזכויות בתכני האתר שמורות ל-LBH, למעט סימנים ותכנים של צדדים שלישיים.']] },
      en: { h1: 'Terms of Use & Disclosure', updated: 'Last updated: November 2026', sections: [['General', 'Use of this website is subject to these terms.'], ['Disclosure', '@disclosure'], ['Intellectual property', 'All rights in the website content are reserved to LBH, except for third-party marks and content.']] } }
  }
};
