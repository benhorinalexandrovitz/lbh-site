/* LBH site content (he/en). Every entity holds independent he/en fields.
   Sources: "חומרים לאתר LBH" deck (Nov 2026), client brief and email (21.11.2026), and public press coverage
   (Globes, Calcalist, Bizportal) for dates and transaction context. Financial figures are shown exactly as stated in the deck.
   To hide any item from the live site set `published: false` (funds, people) or `show: false` (blocks). */
window.LBH = {
  site: { url: 'https://benhorinalexandrovitz.github.io/lbh-site', name: 'LBH', logo: 'assets/lbh-logo.png', ogImage: 'assets/og-image.jpg' },

  ui: {
    he: {
      skip: 'דלג לתוכן', menu: 'תפריט', close: 'סגירה', home: 'ראשי', switchTo: 'English', switchShort: 'EN', switchLang: 'en',
      nav: [['home', 'ראשי'], ['about', 'אודות'], ['investments', 'השקעות'], ['strategy', 'אסטרטגיה'], ['team', 'הצוות'], ['contact', 'יצירת קשר']],
      viewProfile: 'לפרופיל המלא', allTeam: 'לכל הצוות', readMore: 'להרחבה', contactCta: 'צרו קשר', toInvestment: 'לעמוד ההשקעה', allInvestments: 'לכל ההשקעות',
      footerTag: 'קבוצת השקעות ישראלית שהקימו שמעון בן חמו ועופר לינצ\'בסקי. מומחיות בהשקעות, ניסיון בביצוע ויכולת מוכחת ליצירת ערך.',
      footerNavH: 'ניווט', footerLegalH: 'מידע משפטי',
      legal: [['privacy', 'מדיניות פרטיות'], ['accessibility', 'הצהרת נגישות'], ['terms', 'תנאי שימוש']],
      copyright: '© 2026 LBH. כל הזכויות שמורות.',
      disclaimer: 'המידע באתר נועד למטרות מידע כללי בלבד ואינו מהווה הצעה, ייעוץ השקעות או שיווק השקעות. ביצועי עבר אינם מבטיחים תוצאות עתידיות.',
      leaders: 'הובלה מטעם LBH', notFoundH: 'הדף לא נמצא', notFoundP: 'ייתכן שהקישור שגוי או שהדף הוסר.', backHome: 'חזרה לדף הבית',
      founder: 'מייסד', fund: 'קרן'
    },
    en: {
      skip: 'Skip to content', menu: 'Menu', close: 'Close', home: 'Home', switchTo: 'עברית', switchShort: 'עב', switchLang: 'he',
      nav: [['home', 'Home'], ['about', 'About'], ['investments', 'Investments'], ['strategy', 'Strategy'], ['team', 'Team'], ['contact', 'Contact']],
      viewProfile: 'View profile', allTeam: 'Meet the team', readMore: 'Learn more', contactCta: 'Contact us', toInvestment: 'View investment', allInvestments: 'All investments',
      footerTag: 'An Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski. Investment expertise, proven execution and long-term value creation.',
      footerNavH: 'Navigate', footerLegalH: 'Legal',
      legal: [['privacy', 'Privacy Policy'], ['accessibility', 'Accessibility'], ['terms', 'Terms of Use']],
      copyright: '© 2026 LBH. All rights reserved.',
      disclaimer: 'The information on this website is for general information only and does not constitute an offer, investment advice or investment marketing. Past performance does not guarantee future results.',
      leaders: 'LBH leadership', notFoundH: 'Page not found', notFoundP: 'The link may be incorrect or the page may have been removed.', backHome: 'Back to home',
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
    dan: { he: [`דן תחבורה | מקרה בוחן | LBH`, `ההשקעה של LBH בדן תחבורה: צמיחה ב-EBITDA מ-171 ל-547 מיליון ש"ח ומימוש בשווי של 2.9 מיליארד ש"ח.`],
           en: [`Dan Transportation | Case Study | LBH`, `LBH's investment in Dan Transportation: EBITDA growth from NIS 171 million to NIS 547 million and an exit at a NIS 2.9 billion valuation.`] },
    gadot: { he: [`גדות | מקרה בוחן | LBH`, `ההשקעה של LBH בגדות: בניית שרשרת אספקה גלובלית לכימיקלים, שמנים ודלקים, התרחבות לאירופה ולארה"ב ורכישות משלימות.`],
             en: [`Gadot | Case Study | LBH`, `LBH's investment in Gadot: building a global supply chain for chemicals, oils and fuels, expansion into Europe and the US, and add-on acquisitions.`] },
    mankai: { he: [`מנקאי (הינומן) | LBH`, `ההשקעה של LBH בהינומן, המגדלת את ירק-העל מנקאי בקיבוץ בארי: שיקום הפעילות והתרחבות בינלאומית.`],
              en: [`Mankai (Hinoman) | LBH`, `LBH's investment in Hinoman, grower of the Mankai superfood plant at Kibbutz Be'eri: restoring operations and international expansion.`] },
    strategy: { he: [`אסטרטגיית השקעות | Buy & Build | LBH`, `אסטרטגיית ההשקעות של LBH: זיהוי ההזדמנות, בניית תוכנית השבחה, ביצוע והובלת שינוי, הצמחה ומימוש ערך.`],
                en: [`Investment Strategy | Buy & Build | LBH`, `LBH's investment strategy: identifying the opportunity, building a value creation plan, executing change, and growing and realizing value.`] },
    team: { he: [`הצוות | LBH`, `צוות LBH: המייסדים שמעון בן חמו ועופר לינצ'בסקי, דורי גרוסמן ויפעת פייגלין.`],
            en: [`Our Team | LBH`, `The LBH team: founders Shimon Ben Hamo and Ofer Linchevski, Dori Grossman and Yifat Feiglin.`] },
    contact: { he: [`יצירת קשר | LBH`, `יצירת קשר עם LBH לפניות משקיעים, שותפים עסקיים ותקשורת.`], en: [`Contact | LBH`, `Contact LBH for investor, partnership and media inquiries.`] },
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
      expOrgs: ['מקורות', 'רכבת ישראל', 'אגד החזקות', 'קבוצת ממן', 'AFI אירופה', 'אפריקה ישראל', 'רשות החברות הממשלתיות', 'קבוצת גדות'],
      ctaH: 'לשיחה עם LBH', ctaP: 'לפניות משקיעים, שותפים עסקיים ותקשורת.'
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
      expOrgs: ['Mekorot', 'Israel Railways', 'Egged Holdings', 'Maman Group', 'AFI Europe', 'Africa Israel', 'Government Companies Authority', 'Gadot Group'],
      ctaH: 'Speak with LBH', ctaP: 'For investor, partnership and media inquiries.'
    }
  },

  /* Count-up figures. Source: deck slides 1-4. */
  kpis: [
    { value: 30, dec: 0, he: { pre: '', unit: 'שנות ניסיון', label: 'של כל אחד מהמייסדים, כמנכ"ל, יו"ר, דירקטור ושותף בקרנות' }, en: { pre: '', unit: 'Years of Experience', label: 'Each founder, as CEO, chairman, director and fund partner' } },
    { value: 5.8, dec: 1, he: { pre: '', unit: 'מיליארד ש"ח', label: 'היקף נכסים תחת ניהול (AUM)' }, en: { pre: 'NIS ', unit: 'Billion', label: 'Assets Under Management (AUM)' } },
    { value: 3, dec: 0, he: { pre: '', unit: 'קרנות השקעה', label: 'דן, גדות ומנקאי' }, en: { pre: '', unit: 'Investment Funds', label: 'Dan, Gadot and Mankai' } },
    { value: 2.9, dec: 1, he: { pre: '', unit: 'מיליארד ש"ח', label: 'שווי מימוש דן תחבורה' }, en: { pre: 'NIS ', unit: 'Billion', label: 'Dan Transportation exit valuation' } }
  ],

  /* Buy & Build axes (order per deck note: core business first, acquisitions last). */
  pillars: [
    { he: ['פיתוח פעילות הליבה', 'חיזוק העסק הקיים, הרחבת פעילות, שיפור יכולות, פיתוח תשתיות ויצירת מנועי צמיחה.', 'בדן: חישמול כ-1,200 אוטובוסים, כ-600 עמדות טעינה וזכייה במכרזי הרכבת הקלה.'],
      en: ['Core Business Development', 'Strengthening the existing business, expanding activity, upgrading capabilities, developing infrastructure and creating growth engines.', 'At Dan: electrifying some 1,200 buses, about 600 charging points and light rail tender wins.'] },
    { he: ['התייעלות תפעולית', 'תהליכי רכש, מבנים ארגוניים, ניהול כוח אדם, פריון ושיפור ביצועים.', 'בדן: הפחתת שיעור אי-הביצוע מ-9% ל-1.5%.'],
      en: ['Operational Excellence', 'Procurement, organizational structure, workforce management, productivity and performance improvement.', 'At Dan: non-performance rate cut from 9% to 1.5%.'] },
    { he: ['חדשנות ופיתוח עסקי', 'הטמעת טכנולוגיות, הקמת פעילויות חדשות, פיתוח מוצרים וכניסה לשווקים.', 'בגדות: מתקן Blending & Tolling בבלגיה עם יכולות low-flash.'],
      en: ['Innovation & Business Development', 'Adopting technologies, launching new activities, developing products and entering new markets.', 'At Gadot: a blending and tolling facility in Belgium with low-flash capabilities.'] },
    { he: ['רכישות ואינטגרציה', 'רכישות משלימות, הרחבת פלטפורמות ויצירת יתרונות תפעוליים ומסחריים.', 'בגדות: שבע רכישות בין 2021 ל-2026, ובהן נמל חיפה לצד אדאני.'],
      en: ['Mergers & Acquisitions', 'Add-on acquisitions, platform expansion and operational and commercial synergies.', 'At Gadot: seven acquisitions from 2021 to 2026, including Haifa Port alongside Adani.'] }
  ],

  /* ---------- Investment funds ---------- */
  funds: [
    { slug: 'dan', published: true, visual: 'dan', image: '', leaders: ['shimon-ben-hamo', 'ofer-linchevski'],
      he: { name: 'דן תחבורה', eyebrow: 'קרן 1 · 2020', sector: 'תחבורה ותשתיות',
        short: 'מהלך ההשבחה של קבוצת דן: פיתוח פעילות התחבורה, התייעלות, ייזום תשתיות ובניית פלטפורמת צמיחה. דן תחבורה מומשה בשווי של 2.9 מיליארד ש"ח.',
        title: 'דן תחבורה - מחברת תחבורה מסורתית לפלטפורמת תשתיות צומחת',
        lead: 'ההשקעה בדן מדגימה את יכולתה של LBH לזהות פוטנציאל בחברה ותיקה, להוביל תהליכי שינוי תפעוליים ועסקיים, לפתח מנועי צמיחה וליצור פלטפורמה רחבה בתחומי התחבורה והתשתיות.',
        visualAlt: 'איור מופשט של קווי תחבורה' },
      en: { name: 'Dan Transportation', eyebrow: 'Fund 1 · 2020', sector: 'Transportation & Infrastructure',
        short: 'The Dan Group value creation plan: growing the transportation business, operational efficiency, infrastructure initiatives and a growth platform. Dan Transportation was exited at a NIS 2.9 billion valuation.',
        title: 'Dan Transportation - From a Legacy Operator to a Growing Infrastructure Platform',
        lead: 'The Dan investment demonstrates LBH\'s ability to identify potential in an established company, lead operational and business change, develop growth engines and build a broad transportation and infrastructure platform.',
        visualAlt: 'Abstract illustration of transit lines' } },
    { slug: 'gadot', published: true, visual: 'photo', image: 'assets/img/gadot-sea.jpg', leaders: ['ofer-linchevski', 'shimon-ben-hamo'],
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
    { slug: 'mankai', published: true, visual: 'mankai', image: '', leaders: ['shimon-ben-hamo', 'ofer-linchevski'],
      he: { name: 'מנקאי', eyebrow: 'קרן 3 · 2022', sector: 'פוד-טק',
        short: 'רכישת פעילות חברת הפוד-טק הינומן, המגדלת את ירק-העל מנקאי בחממות קיבוץ בארי, לאחר הליך חדלות פירעון. שיקום הפעילות והתרחבות בינלאומית.',
        title: 'מנקאי - שיקום והתרחבות גלובלית לחברת פוד-טק ישראלית',
        lead: 'ב-2022 רכשו שמעון בן חמו ועופר לינצ\'בסקי, יחד עם קיבוץ בארי, את פעילות חברת הינומן, המגדלת את ירק-העל מנקאי בחממות הקיבוץ, לאחר הליך חדלות פירעון. לאחר הפגיעה ב-7 באוקטובר שוקמה הפעילות בבארי, והחברה פועלת להתרחבות בינלאומית.',
        visualAlt: 'איור מופשט של צמח מים זעיר' },
      en: { name: 'Mankai', eyebrow: 'Fund 3 · 2022', sector: 'Food tech',
        short: 'Acquisition of the food-tech company Hinoman, which grows the Mankai superfood plant in greenhouses at Kibbutz Be\'eri, following insolvency proceedings. Restored operations and international expansion.',
        title: 'Mankai - Rebuilding and Globally Expanding an Israeli Food-Tech Company',
        lead: 'In 2022, Shimon Ben Hamo and Ofer Linchevski, together with Kibbutz Be\'eri, acquired the business of Hinoman, which grows the Mankai superfood plant in the kibbutz greenhouses, following insolvency proceedings. After the October 7 attack, operations at Be\'eri were restored and the company is pursuing international expansion.',
        visualAlt: 'Abstract illustration of a tiny aquatic plant' } }
  ],

  /* Investment page blocks. Types: text, stats, chart, engines, assets, corridor, returns, callout. */
  pages: {
    dan: {
      he: [
        { type: 'stats', h: 'נתוני מפתח', items: [['2.9', 'מיליארד ש"ח', 'שווי מימוש דן תחבורה'], ['3.2x', '', 'צמיחה ב-EBITDA, 2019–2025'], ['7.9x', '', 'תשואה על ההשקעות בדן תחבורה'], ['1,200', '', 'אוטובוסים חשמליים, בקירוב']] },
        { type: 'text', h: 'ההשקעה', p: ['דן היא חברת התחבורה הציבורית השנייה בגודלה בישראל. בשנת 2020 נכנסה LBH, באמצעות קרן Value LBH, להשקעה בקבוצת דן, ובשנת 2021 הגדילה את החזקתה. נציגי הקרן כיהנו בדירקטוריון החברה והובילו, יחד עם ההנהלה, תוכנית עסקית רב-שנתית.'] },
        { type: 'chart', h: 'צמיחה ב-EBITDA', unit: 'מיליון ש"ח', bars: [['2019', 171, '171'], ['2025', 547, '547']], mult: '3.2x', multL: 'מכפיל צמיחה', note: '* נתוני EBITDA של דן סולו (דן גוש דן), כפי שמופיעים בנתוני הקבוצה. 2019 היא השנה שקדמה לכניסת הקרן להשקעה.' },
        { type: 'engines', h: 'ארבעת מנועי ההשבחה', items: [
          ['פיתוח פעילות הליבה', ['הרחבת פעילות התחבורה והגדלת מפת הנסועה', 'הרחבת יבוא האוטובוסים באמצעות פנדן, מכ-100 ליותר מ-600 כלים בשנה', 'חידוש ההסכמים מול המדינה', 'הכפלת פעילות השאטלים בכביש 1', 'ייזום נתיבים מהירים ברשפון ובראשון לציון', 'זכייה במכרזי הרכבת הקלה: הקו הירוק בתל אביב והקו הכחול בירושלים', 'חישמול כ-1,200 אוטובוסים', 'התקנת כ-600 עמדות טעינה']],
          ['התייעלות תפעולית', ['שיפור וייעול הליכי הרכש', 'מעבר למטה רזה', 'הסדרי פרישה ל-425 עובדים', 'שיפור הסכמי השכר הקיבוציים', 'הפחתת שיעור אי-הביצוע מ-9% ל-1.5%', 'חיזוק השדרה הניהולית', 'הגדלת מצבת הנהגים והרחבת בית הספר לנהיגה']],
          ['חדשנות', ['הקמת קרן מוביליטק בשיתוף סמלת, להשקעה בחברות בתחומי התחבורה החכמה והחשמלית']],
          ['רכישות ואינטגרציה', ['רכישת יולזרי, בתחום ההיסעים הפרטיים', 'רכישת מפעיל תחבורה ציבורית בפורטוגל']]] },
        { type: 'callout', h: 'מימוש ההשקעה', p: ['ההשקעה מומשה באסטרטגיה רב-שלבית שנועדה לשמר ערך: פיצול הקבוצה לשלוש פעילויות נפרדות לצורך מכירה בחלקים: דן נדל"ן, דן תשתיות ודן תחבורה.', 'דן תחבורה מומשה בשווי של 2.9 מיליארד ש"ח, במכירה לקבוצת משקיעים בהובלת הנהלת החברה ובהשתתפות גופים מוסדיים.'] },
        { type: 'returns', h: 'תשואות הקרן', rows: ['dan-a', 'dan-b'], extra: [['7.9x', 'תשואה על ההשקעות בדן תחבורה, כפי שהיא מוצגת בנתוני הקבוצה. אינה מכפיל TVPI של אחת המחלקות.']] }
      ],
      en: [
        { type: 'stats', h: 'Key figures', items: [['NIS 2.9', 'Billion', 'Dan Transportation exit valuation'], ['3.2x', '', 'EBITDA growth, 2019–2025'], ['7.9x', '', 'Return on the investments in Dan Transportation'], ['1,200', '', 'Electric buses, approximately']] },
        { type: 'text', h: 'The investment', p: ['Dan is Israel\'s second-largest public transport company. In 2020 LBH invested in the Dan Group through the Value LBH fund, and increased its holding in 2021. Fund representatives served on the company\'s board and, together with management, led a multi-year business plan.'] },
        { type: 'chart', h: 'EBITDA growth', unit: 'NIS million', bars: [['2019', 171, '171'], ['2025', 547, '547']], mult: '3.2x', multL: 'Growth multiple', note: '* EBITDA of Dan standalone (Dan Gush Dan), as stated in the group\'s data. 2019 is the year before the fund\'s investment.' },
        { type: 'engines', h: 'Four value creation engines', items: [
          ['Core Business Development', ['Expanded transportation operations and the service map', 'Grew bus imports through Pandan from about 100 to more than 600 vehicles a year', 'Renewed agreements with the State', 'Doubled Route 1 shuttle operations', 'Initiated express lanes at Rishpon and Rishon LeZion', 'Won light rail tenders: the Tel Aviv Green Line and the Jerusalem Blue Line', 'Electrified some 1,200 buses', 'Installed about 600 charging points']],
          ['Operational Excellence', ['Improved and streamlined procurement', 'Moved to a lean headquarters', 'Retirement arrangements for 425 employees', 'Improved collective wage agreements', 'Cut the non-performance rate from 9% to 1.5%', 'Strengthened the management team', 'Expanded the driver workforce and the driving school']],
          ['Innovation', ['Established a mobility-tech fund with Samelet, investing in smart and electric transportation companies']],
          ['Mergers & Acquisitions', ['Acquired Yulzari, a private transport company', 'Acquired a public transport operator in Portugal']]] },
        { type: 'callout', h: 'Exit', p: ['The investment was realized through a multi-stage, value-preserving strategy: separating the group into three distinct businesses for sale in parts - Dan Real Estate, Dan Infrastructure and Dan Transportation.', 'Dan Transportation was sold at a NIS 2.9 billion valuation to an investor group led by the company\'s management with institutional investors.'] },
        { type: 'returns', h: 'Fund returns', rows: ['dan-a', 'dan-b'], extra: [['7.9x', 'Return on the investments in Dan Transportation, as presented in the group\'s data. This is not the TVPI of either class.']] }
      ]
    },
    gadot: {
      he: [
        { type: 'stats', h: 'נתוני מפתח', items: [['2.5x', '', 'צמיחה ב-EBITDA, 2018–2025'], ['116', 'מיליון דולר', 'EBITDA בשנת 2025'], ['7', '', 'רכישות, 2021–2026'], ['6', '', 'טרמינלים בישראל ובאירופה']] },
        { type: 'text', h: 'ההשקעה', p: ['בשנת 2021 רכשה LBH, באמצעות קרן Value LBH, החזקה משמעותית בקבוצת גדות, ובשנת 2023 השתתפה בעסקת נמל חיפה. עופר לינצ\'בסקי מכהן כמנכ"ל גדות מאז 2018.'] },
        { type: 'chart', h: 'צמיחה ב-EBITDA', unit: 'מיליון דולר', bars: [['2018', 48, '48'], ['2025', 116, '116']], mult: '2.5x', multL: 'מכפיל צמיחה', note: '* 2018 היא שנת מינויו של עופר לינצ\'בסקי למנכ"ל גדות, כפי שמוצג בנתוני הקבוצה. השקעת הקרן החלה ב-2021, ולכן אין לייחס לה את מלוא הצמיחה בתקופה.' },
        { type: 'assets', h: 'נכסים ויכולות לוגיסטיות', items: [['16', 'אוניות מיכליות ייעודיות לכימיקלים'], ['8', 'מרכזים לוגיסטיים לחומרים מסוכנים'], ['260', 'מכליות כביש'], ['768,000', 'מ"ק נפח אחסון במיכלים'], ['12', 'כורים במתקן טולינג לשמנים'], ['6', 'טרמינלים לכימיקלים ומוצרי דלק בישראל ובאירופה'], ['5', 'חיבורים לים'], ['1', 'נמל: נמל חיפה']], note: 'נתוני הפעילות מתייחסים לקבוצת גדות כולה ולא לחלקה של LBH בה.' },
        { type: 'corridor', h: 'שרשרת אספקה גלובלית', intro: 'יצירת שרשרת אספקה עצמאית וגלובלית לכימיקלים, שמנים ודלקים, עם נמל חיפה כשער אסטרטגי. קו הובלה ימי סדיר מארה"ב ואירופה למזרח הים התיכון.',
          nodes: [['ארה"ב', 'asset', 'סניף ביוסטון (2025)'], ['אירופה', 'asset', 'טרמינל בנמל גנט, בלגיה'], ['יוון', 'trade', ''], ['קפריסין', 'trade', ''], ['נמל חיפה', 'hub', 'שער אסטרטגי'], ['ירדן', 'trade', ''], ['ערב הסעודית', 'trade', ''], ['איחוד האמירויות', 'trade', ''], ['הודו', 'trade', '']],
          legend: [['asset', 'פעילות ונכסים של גדות'], ['hub', 'מרכז הפעילות בישראל'], ['trade', 'מדינות בשרשרת האספקה האזורית']],
          note: 'המדינות מוצגות כפי שהן מופיעות בחומרי הקבוצה. סימון מדינה אינו מעיד על נכס בבעלות גדות במדינה זו.' },
        { type: 'engines', h: 'ארבעת מנועי ההשבחה', items: [
          ['צמיחה בינלאומית ופיתוח הליבה', ['2022: הקמת חברת בת בבלגיה ורכישת טרמינל כימי בנמל גנט, עם גישה למים עמוקים בים הצפוני', '2023: הרחבת פעילות ההפצה והאחסון באירופה, ופיתוח האתר כמרכז לוגיסטי בשוק הכימיקלים האירופי', '2023: מכירות MEG (חומרי גלם לקידוחים)', '2025: הקמת סניף גדות ביוסטון', '2025: פתיחת נתיב סחר במרכז אמריקה', '2025: יבוא ביטומן עבור נתיבי ישראל']],
          ['התייעלות תפעולית', ['2025: השקת תוכנית התייעלות', 'חיזוק השדרה הניהולית']],
          ['חדשנות', ['הקמת מתקן Blending & Tolling בבלגיה עם יכולות low-flash מתקדמות']],
          ['רכישות ואינטגרציה', ['פי גלילות (2021)', 'ECO Services (2021)', 'Mercury (2022)', 'מינץ (2023): רכישת 51%', 'נמל חיפה (2023): גדות 30%, אדאני 70%', 'Green Oil (2025)', 'חן שמואל (2026)']]] },
        { type: 'returns', h: 'תשואות הקרן', rows: ['gadot', 'gadot-haifa'], extra: [] }
      ],
      en: [
        { type: 'stats', h: 'Key figures', items: [['2.5x', '', 'EBITDA growth, 2018–2025'], ['$116', 'Million', 'EBITDA in 2025'], ['7', '', 'Acquisitions, 2021–2026'], ['6', '', 'Terminals in Israel and Europe']] },
        { type: 'text', h: 'The investment', p: ['In 2021 LBH acquired a significant stake in the Gadot Group through the Value LBH fund, and in 2023 it took part in the Haifa Port transaction. Ofer Linchevski has served as CEO of Gadot since 2018.'] },
        { type: 'chart', h: 'EBITDA growth', unit: 'USD million', bars: [['2018', 48, '48'], ['2025', 116, '116']], mult: '2.5x', multL: 'Growth multiple', note: '* 2018 marks Ofer Linchevski\'s appointment as CEO of Gadot, as presented in the group\'s data. The fund invested in 2021, so the full growth over the period should not be attributed to the investment.' },
        { type: 'assets', h: 'Logistics assets and capabilities', items: [['16', 'Dedicated chemical tankers'], ['8', 'Hazardous materials logistics centers'], ['260', 'Road tankers'], ['768,000', 'Cubic meters of tank storage'], ['12', 'Reactors at an oil tolling facility'], ['6', 'Chemical and fuel terminals in Israel and Europe'], ['5', 'Sea connections'], ['1', 'Port: Haifa Port']], note: 'Operating figures refer to the Gadot Group as a whole, not to LBH\'s share.' },
        { type: 'corridor', h: 'Global supply chain', intro: 'Building an independent, global supply chain for chemicals, oils and fuels, with Haifa Port as a strategic gateway. A regular shipping line from the US and Europe to the Eastern Mediterranean.',
          nodes: [['United States', 'asset', 'Houston branch (2025)'], ['Europe', 'asset', 'Port of Ghent terminal, Belgium'], ['Greece', 'trade', ''], ['Cyprus', 'trade', ''], ['Haifa Port', 'hub', 'Strategic gateway'], ['Jordan', 'trade', ''], ['Saudi Arabia', 'trade', ''], ['UAE', 'trade', ''], ['India', 'trade', '']],
          legend: [['asset', 'Gadot operations and assets'], ['hub', 'Israeli operating hub'], ['trade', 'Countries in the regional supply chain']],
          note: 'Countries are shown as they appear in the group\'s materials. A marked country does not imply a Gadot-owned asset in that country.' },
        { type: 'engines', h: 'Four value creation engines', items: [
          ['International Growth & Core Development', ['2022: Belgian subsidiary established and a chemical terminal acquired at the Port of Ghent, with deep-water access to the North Sea', '2023: Distribution and storage expanded in Europe, developing the site into a logistics hub for the European chemicals market', '2023: MEG sales, raw materials for drilling', '2025: Gadot branch opened in Houston', '2025: Central America trade route opened', '2025: Bitumen imports for Netivei Israel']],
          ['Operational Excellence', ['2025: Efficiency program launched', 'Strengthened management team']],
          ['Innovation', ['A blending and tolling facility in Belgium with advanced low-flash capabilities']],
          ['Mergers & Acquisitions', ['2021: P. Glilot', '2021: ECO Services', '2022: Mercury', '2023: Mintz (51%)', '2023: Haifa Port (Gadot 30%, Adani 70%)', '2025: Green Oil', '2026: Hen Shmuel']]] },
        { type: 'returns', h: 'Fund returns', rows: ['gadot', 'gadot-haifa'], extra: [] }
      ]
    },
    mankai: {
      he: [
        { type: 'stats', h: 'נתוני מפתח', items: [['2022', '', 'רכישת הפעילות, לאחר הליך חדלות פירעון'], ['6', 'מיליון ש"ח', 'תמורת הרכישה, בקירוב'], ['74%', '', 'שמעון בן חמו ועופר לינצ\'בסקי'], ['26%', '', 'קיבוץ בארי']] },
        { type: 'text', h: 'החברה', p: ['הינומן היא חברת פוד-טק ישראלית המגדלת בחממות בקיבוץ בארי את מנקאי (Mankai): צמח מים זעיר, הנחשב לסופר-פוד בזכות רמות גבוהות של חלבון, ברזל, סיבים וויטמין B12.'] },
        { type: 'text', h: 'ההשקעה', p: ['ב-2022, לאחר הליך חדלות פירעון, נרכשה פעילות הינומן תמורת כ-6 מיליון ש"ח. הבעלות משותפת לשמעון בן חמו ועופר לינצ\'בסקי (74%) ולקיבוץ בארי (26%).'] },
        { type: 'text', h: 'שיקום והתרחבות גלובלית', p: ['לאחר הפגיעה בקיבוץ בארי ב-7 באוקטובר שוקמה הפעילות בבארי. החברה פועלת להשגת אישורים רגולטוריים באירופה ולהרחבת השיווק הבינלאומי, לקראת הנפקה עתידית.'] }
      ],
      en: [
        { type: 'stats', h: 'Key figures', items: [['2022', '', 'Business acquired, following insolvency proceedings'], ['NIS 6', 'Million', 'Approximate purchase price'], ['74%', '', 'Shimon Ben Hamo and Ofer Linchevski'], ['26%', '', 'Kibbutz Be\'eri']] },
        { type: 'text', h: 'The company', p: ['Hinoman is an Israeli food-tech company that grows Mankai in greenhouses at Kibbutz Be\'eri: a tiny aquatic plant regarded as a superfood for its high levels of protein, iron, fiber and vitamin B12.'] },
        { type: 'text', h: 'The investment', p: ['In 2022, following insolvency proceedings, the Hinoman business was acquired for about NIS 6 million. It is jointly owned by Shimon Ben Hamo and Ofer Linchevski (74%) and Kibbutz Be\'eri (26%).'] },
        { type: 'text', h: 'Recovery and global expansion', p: ['After the October 7 attack on Kibbutz Be\'eri, operations at Be\'eri were restored. The company is pursuing regulatory approvals in Europe and expanding international marketing ahead of a future IPO.'] }
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
    { slug: 'shimon-ben-hamo', published: true, img: 'assets/team/shimon-ben-hamo.png',
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

    { slug: 'ofer-linchevski', published: true, img: 'assets/team/ofer-linchevski.png',
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

    { slug: 'dori-grossman', published: true, img: 'assets/team/dori-grossman.png',
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

    { slug: 'yifat-feiglin', published: true, img: 'assets/team/yifat-feiglin.png',
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
    { slug: 'assaf-reich', published: false, img: 'assets/team/assaf-reich.png',
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
      philEyebrow: 'תפיסת ההשקעות', philH: 'אנחנו משקיעים בחברות, אבל קודם כול יודעים איך לבנות אותן.',
      philP: ['שני המייסדים ניהלו בעצמם חברות תפעוליות גדולות: חברת המים הלאומית, רכבת ישראל, אגד, ממן וגדות. הניסיון הזה מאפשר לקבוצה לזהות היכן נמצא הערך בעסק, לבנות תוכנית השבחה מעשית וללוות את ביצועה לצד ההנהלה.',
             'האסטרטגיה, ההון והמעורבות הניהולית פועלים יחד: חיזוק פעילות הליבה, שיפור תפעולי, חדשנות ורכישות משלימות, עד לבניית פלטפורמה ומימוש הערך.'],
      trackH: 'רקורד ביצוע',
      track: [['דן תחבורה', 'צמיחה ב-EBITDA מ-171 ל-547 מיליון ש"ח בין 2019 ל-2025, ומימוש דן תחבורה בשווי של 2.9 מיליארד ש"ח.', 'dan'],
              ['גדות', 'צמיחה ב-EBITDA מ-48 ל-116 מיליון דולר בין 2018 ל-2025, התרחבות לאירופה ולארה"ב ושבע רכישות משלימות.', 'gadot']],
      teamH: 'הצוות', teamP: 'מייסדי הקבוצה וצוות ההשקעות, הפועלים יחד מזה כשש שנים.',
      disclosure: 'ההשקעות בדן תחבורה ובגדות בוצעו באמצעות קרנות Value LBH. תפקידים ניהוליים קודמים של מייסדי הקבוצה ושל אנשי הצוות מוצגים בפרופילים האישיים, ואינם השקעות של LBH.' },
    en: { h1: 'LBH - Experience That Creates Value', lead: 'An Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski.',
      whoH: 'Who we are',
      who: ['LBH is an Israeli investment group founded by Shimon Ben Hamo and Ofer Linchevski, built on a combination of senior executive experience, financial expertise and a proven ability to develop and transform businesses.',
            'The group\'s partners have led major companies and corporations in Israel and abroad, across infrastructure, transportation, logistics, industry and international operations.',
            'The group takes an active investment approach in which value creation does not end at closing. It continues through core business development, operational improvement, management systems, innovation, organic growth and mergers and acquisitions.',
            'The Dan and Gadot investments demonstrate the group\'s ability to combine investment complexity with execution experience and to grow businesses at significant scale.'],
      foundersH: 'Founders', fundsH: 'Three funds', fundsNote: 'The funds are the group\'s investment vehicles. The portfolio companies they invested in are presented on the investment pages.',
      philEyebrow: 'Investment approach', philH: 'We invest in companies, but first we know how to build them.',
      philP: ['Both founders have run large operating companies themselves: Israel\'s national water company, Israel Railways, Egged, Maman and Gadot. That experience lets the group see where value sits in a business, build a practical value creation plan and support its execution alongside management.',
             'Strategy, capital and executive involvement work together: strengthening the core business, operational improvement, innovation and add-on acquisitions, through to building a platform and realizing value.'],
      trackH: 'Track record',
      track: [['Dan Transportation', 'EBITDA growth from NIS 171 million to NIS 547 million between 2019 and 2025, and an exit of Dan Transportation at a NIS 2.9 billion valuation.', 'dan'],
              ['Gadot', 'EBITDA growth from $48 million to $116 million between 2018 and 2025, expansion into Europe and the US, and seven add-on acquisitions.', 'gadot']],
      teamH: 'Our team', teamP: 'The group\'s founders and investment team, working together for about six years.',
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
    he: { sectorL: 'תחום', leadersH: 'הובלה מטעם LBH', otherH: 'השקעות נוספות', disclosureH: 'גילוי נאות' },
    en: { sectorL: 'Sector', leadersH: 'LBH leadership', otherH: 'Other investments', disclosureH: 'Disclosure' }
  },

  /* ---------- Strategy ---------- */
  strategy: {
    he: { h1: 'אסטרטגיית השקעות שמחברת בין הון, ניהול וביצוע', lead: 'ארבעה שלבים, מזיהוי ההזדמנות ועד מימוש הערך, כפי שהודגמו בדן ובגדות.',
      stagesH: 'ארבעת שלבי ההשקעה', exampleL: 'דוגמה',
      stages: [['זיהוי ההזדמנות', 'איתור חברות בעלות נכסים, יכולות, ידע, תשתיות או מעמד עסקי המאפשרים פיתוח והשבחה.', 'דן: חברת תחבורה ותיקה, בעלת נכסים, מעמד בשוק ויכולות תפעוליות, עם פוטנציאל צמיחה לתחומי התשתיות והרכבת הקלה.'],
               ['בניית אסטרטגיית השבחה', 'גיבוש תוכנית הכוללת חיזוק פעילות ליבה, שיפור יעילות, פיתוח עסקי, השקעות הון ורכישות משלימות.', 'גדות: תוכנית לבניית שרשרת אספקה עצמאית לכימיקלים, שמנים ודלקים, הכוללת התרחבות לאירופה ורכישות משלימות.'],
               ['ביצוע והובלת שינוי', 'מעורבות ניהולית, חיזוק הנהלה, ייעול פעילות, בניית תשתיות לצמיחה ויישום התוכנית העסקית.', 'דן: הסדרי פרישה ל-425 עובדים, מעבר למטה רזה והפחתת שיעור אי-הביצוע מ-9% ל-1.5%.'],
               ['הצמחה ומימוש ערך', 'הרחבת הפעילות, בניית פלטפורמה עסקית משמעותית ובחינת אפשרויות מימוש בהתאם לאופי ההשקעה ולתנאי השוק.', 'דן: פיצול לדן נדל"ן, דן תשתיות ודן תחבורה, ומימוש דן תחבורה בשווי של 2.9 מיליארד ש"ח.']],
      bbH: 'Buy & Build', bbP: 'ארבעת צירי ההשבחה, כפי שיושמו בהשקעות הקבוצה.',
      areasH: 'תחומי ניסיון מרכזיים', areas: ['תשתיות ותחבורה', 'לוגיסטיקה ושרשראות אספקה', 'תעשייה', 'השקעות, מיזוגים ורכישות', 'השבחת חברות ופיתוח עסקי'],
      areasNote: 'לצוות גם ניסיון בתעשייה הביטחונית: רפורמות בחברות ביטחוניות ממשלתיות ועסקאות מיזוג ורכישה בתחום.' },
    en: { h1: 'An Investment Strategy Built on Capital, Leadership and Execution', lead: 'Four stages, from identifying the opportunity to realizing value, as demonstrated at Dan and Gadot.',
      stagesH: 'Four stages of an investment', exampleL: 'Example',
      stages: [['Identifying the opportunity', 'Finding companies with assets, capabilities, know-how, infrastructure or market position that allow development and value creation.', 'Dan: an established transportation company with assets, market position and operating capabilities, and growth potential in infrastructure and light rail.'],
               ['Building a value creation plan', 'A plan covering core business strengthening, efficiency, business development, capital investment and add-on acquisitions.', 'Gadot: a plan to build an independent supply chain for chemicals, oils and fuels, including expansion into Europe and add-on acquisitions.'],
               ['Executing and leading change', 'Executive involvement, a stronger management team, operational efficiency, infrastructure for growth and delivery of the business plan.', 'Dan: retirement arrangements for 425 employees, a lean headquarters and a non-performance rate cut from 9% to 1.5%.'],
               ['Growing and realizing value', 'Expanding the business, building a significant platform and assessing exit options in line with the nature of the investment and market conditions.', 'Dan: separation into Dan Real Estate, Dan Infrastructure and Dan Transportation, and an exit of Dan Transportation at a NIS 2.9 billion valuation.']],
      bbH: 'Buy & Build', bbP: 'Four value creation axes, as applied across the group\'s investments.',
      areasH: 'Core areas of experience', areas: ['Infrastructure & Transportation', 'Logistics & Supply Chains', 'Industry', 'Investments, Mergers & Acquisitions', 'Value Creation & Business Development'],
      areasNote: 'The team also has defense-industry experience: reforms at government defense companies and M&A transactions in the sector.' }
  },

  team: {
    he: { h1: 'הצוות', lead: 'מייסדי הקבוצה וצוות ההשקעות.', foundersH: 'המייסדים', teamH: 'צוות ההשקעות', otherH: 'חברי צוות נוספים' },
    en: { h1: 'Our Team', lead: 'The group\'s founders and investment team.', foundersH: 'Founders', teamH: 'Investment team', otherH: 'Other team members' }
  },

  profile: {
    he: { bioH: 'ביוגרפיה', rolesH: 'תפקידים נבחרים', expH: 'תחומי מומחיות', milesH: 'אבני דרך', orgsH: 'ארגונים', relH: 'השקעות שבהן מעורב', ctaH: 'ליצירת קשר עם LBH', ctaP: 'לפניות בנושאי השקעות, שותפויות ותקשורת.',
      factRole: 'תפקיד ב-LBH', factAffil: 'שיוך', factPrev: 'ניסיון קודם', milesNote: 'הישגים אישיים, בנפרד מביצועי החברות.', statsNote: 'הנתונים מתייחסים לפעילויות שבהן היה מעורב ואינם היקפי פעילות של LBH, אלא אם צוין אחרת.', toc: 'בעמוד זה' },
    en: { bioH: 'Biography', rolesH: 'Selected roles', expH: 'Areas of expertise', milesH: 'Milestones', orgsH: 'Organizations', relH: 'Investments involved in', ctaH: 'Contact LBH', ctaP: 'For investment, partnership and media inquiries.',
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

  contact: {
    he: { h1: 'יצירת קשר', lead: 'לפניות משקיעים, שותפים עסקיים ותקשורת. נשמח לשמוע מכם.',
      name: 'שם מלא', org: 'ארגון', email: 'דוא"ל', phone: 'טלפון (לא חובה)', subject: 'נושא הפנייה', subjects: ['השקעות', 'שותפות עסקית', 'תקשורת', 'אחר'], message: 'הודעה',
      consent: 'קראתי את מדיניות הפרטיות ואני מסכים/ה לשימוש במידע לצורך טיפול בפנייה', submit: 'שליחת הפנייה', sending: 'שולח…',
      req: 'שדה חובה', badEmail: 'כתובת הדוא"ל אינה תקינה', needConsent: 'יש לאשר את מדיניות הפרטיות', errSummary: 'יש לתקן את השדות המסומנים.',
      successH: 'תודה, פנייתך התקבלה', successP: 'נחזור אליך בהקדם.', again: 'שליחת פנייה נוספת',
      privacyNote: 'המידע שתמסרו ישמש לטיפול בפנייה בלבד, בהתאם למדיניות הפרטיות.' },
    en: { h1: 'Contact', lead: 'For investor, partnership and media inquiries. We look forward to hearing from you.',
      name: 'Full name', org: 'Organization', email: 'Email', phone: 'Phone (optional)', subject: 'Subject', subjects: ['Investments', 'Business partnership', 'Media', 'Other'], message: 'Message',
      consent: 'I have read the Privacy Policy and agree to the use of my information to handle this inquiry', submit: 'Send inquiry', sending: 'Sending…',
      req: 'Required', badEmail: 'Please enter a valid email address', needConsent: 'Please accept the Privacy Policy', errSummary: 'Please correct the highlighted fields.',
      successH: 'Thank you, your inquiry was received', successP: 'We will be in touch shortly.', again: 'Send another inquiry',
      privacyNote: 'The information you provide will be used only to handle your inquiry, in line with our Privacy Policy.' }
  },

  legal: {
    privacy: {
      he: { h1: 'מדיניות פרטיות', updated: 'עדכון אחרון: נובמבר 2026', sections: [['כללי', 'מסמך זה מתאר כיצד LBH אוספת ומשתמשת במידע הנמסר באמצעות האתר.'], ['מידע שנאסף', 'מידע שנמסר בטופס יצירת הקשר: שם, ארגון, דוא"ל, טלפון ותוכן הפנייה.'], ['שימוש במידע', 'המידע משמש לטיפול בפנייה בלבד, ואינו מועבר לצדדים שלישיים אלא אם הדבר נדרש על פי דין.'], ['זכויות המשתמש', 'ניתן לפנות אלינו בבקשה לעיין במידע שנמסר, לתקנו או למחוק אותו, בהתאם לחוק הגנת הפרטיות.']] },
      en: { h1: 'Privacy Policy', updated: 'Last updated: November 2026', sections: [['General', 'This document describes how LBH collects and uses information submitted through this website.'], ['Information collected', 'Information submitted through the contact form: name, organization, email, phone and the content of the inquiry.'], ['Use of information', 'Information is used only to handle the inquiry and is not shared with third parties unless required by law.'], ['Your rights', 'You may contact us to review, correct or delete information you have submitted, in line with the Israeli Privacy Protection Law.']] } },
    accessibility: {
      he: { h1: 'הצהרת נגישות', updated: 'עדכון אחרון: נובמבר 2026', sections: [['מחויבות לנגישות', 'האתר תוכנן בהתאם להנחיות WCAG 2.2 ברמה AA ולתקן הישראלי 5568.'], ['התאמות באתר', 'ניווט מלא במקלדת, קישור "דלג לתוכן", מבנה כותרות סמנטי, טקסט חלופי לתמונות, ניגודיות צבעים מספקת, תמיכה מלאה בכיווניות עברית (RTL), תוויות לשדות טפסים, וכיבוד העדפת המשתמש להפחתת תנועה.'], ['פניות בנושא נגישות', 'נתקלתם בקושי? ניתן לפנות אלינו באמצעות עמוד יצירת הקשר.']] },
      en: { h1: 'Accessibility Statement', updated: 'Last updated: November 2026', sections: [['Our commitment', 'This website is designed in line with WCAG 2.2 Level AA and Israeli Standard 5568.'], ['Accessibility features', 'Full keyboard navigation, a "skip to content" link, semantic heading structure, text alternatives for images, sufficient color contrast, full right-to-left support for Hebrew, labeled form fields, and respect for the reduced-motion preference.'], ['Accessibility inquiries', 'Encountered a difficulty? Please reach us through the contact page.']] } },
    terms: {
      he: { h1: 'תנאי שימוש וגילוי נאות', updated: 'עדכון אחרון: נובמבר 2026', sections: [['כללי', 'השימוש באתר כפוף לתנאים אלה.'], ['גילוי נאות', '@disclosure'], ['קניין רוחני', 'כל הזכויות בתכני האתר שמורות ל-LBH, למעט סימנים ותכנים של צדדים שלישיים.']] },
      en: { h1: 'Terms of Use & Disclosure', updated: 'Last updated: November 2026', sections: [['General', 'Use of this website is subject to these terms.'], ['Disclosure', '@disclosure'], ['Intellectual property', 'All rights in the website content are reserved to LBH, except for third-party marks and content.']] } }
  }
};
