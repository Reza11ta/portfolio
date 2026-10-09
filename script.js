/* =========================================================
   رضا توکلی — پورتفولیو
   ماژول‌ها: i18n / theme / nav / reveal / counters / skills
             tabs / spotlight / magnetic / parallax / footer
   ========================================================= */
"use strict";

/* =========================================================
   1) i18n — تمام متن‌های قابل‌نمایش در همین شیء است
   ========================================================= */
const translations = {
  fa: {
    pageTitle: "رضا توکلی | پورتفولیو",
    skip: "پرش به محتوای اصلی",

    nav: {
      logoAria: "رضا توکلی — صفحه اصلی",
      aria: "ناوبری اصلی",
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "مسیر من",
      projects: "پروژه‌ها",
      teaching: "تدریس",
      contact: "تماس",
      themeAria: "تغییر حالت روشن و تاریک",
      menuAria: "باز و بسته کردن منو",
      languageToEnglish: "تغییر زبان به انگلیسی",
      languageToPersian: "تغییر زبان به فارسی",
    },

    hero: {
      kicker: "// full-stack dev · security · mentor",
      name: "رضا توکلی",
      role: "توسعه‌دهنده‌ی فول‌استک، عاشق امنیت، و منتور تیم‌های فنی",
      intro:
        "۱۹ سالمه، دانشجوی مهندسی کامپیوتر پیام‌نور اصفهان (همون دانشجوی درس‌نخون معروف!) و بنیان‌گذار جامبرس. بیشتر وقتم را صرف ساخت محصول، حل مسئله و کمک به رشد تیم‌ها می‌کنم.",
      ctaProjects: "ببین چیکار کردم",
      ctaContact: "بیا حرف بزنیم",
      imgAlt: "عکس پرتره رضا توکلی",
      badge1: "PHP",
      badge2: "Security",
      badge3: "Mentor",
      termAria: "کارت ترمینال با معرفی کوتاه",
      termTitle: "reza@jambrs — zsh",
      t1: "$ whoami",
      t2: "reza — full-stack dev & mentor",
      t3: "$ cat stack.txt",
      t4: "php · laravel · js · security",
      t5: "$ status",
      t6: "open to new ideas_",
    },

    counters: {
      aria: "آمار کلی",
      projects: "پروژه‌ی موفق",
      years: "سال برنامه‌نویسی",
      team: "نفر تیم",
      teaching: "حوزه‌ی تدریس",
    },

    about: {
      kicker: "// about",
      title: "درباره‌ی آدم پشت کد",
      p1: "من رضا هستم؛ دانشجوی مهندسی کامپیوتر و توسعه‌دهنده‌ای که از ساختن چیزهای کاربردی و تبدیل ایده‌ها به محصول لذت می‌بره. مسیرم با یادگیری و پروژه‌های واقعی شکل گرفته و هنوز هم هر پروژه چیز تازه‌ای یادم می‌ده.",
      p2: "امروز بنیان‌گذار و مدیر جامبرس (رایان تدبیر نقش جهان) هستم؛ کنار یک تیم ۱۵+ نفره روی محصول‌های واقعی کار می‌کنیم و از ایده‌پردازی تا انتشار و پشتیبانی، قدم‌به‌قدم جلو می‌ریم.",
      p3: "به کد تمیز، ارتباط شفاف و تیمی که با هم رشد می‌کنه اهمیت می‌دم. چالش فنی تازه؟ معمولاً جوابم «بزن بریمه».",
      jambrsLink: "سایت شرکت جامبرس",
      factsTitle: "spec.json",
      facts: [
        "age ......... 19",
        "city ........ Isfahan",
        "role ........ Founder @ Jambrs",
        "focus ....... Full-stack / Security",
      ],
    },

    skills: {
      kicker: "// skills",
      title: "با چی‌ها سر و کار دارم؟",
      sub: "این‌ها ابزارها و حوزه‌هایی‌اند که در پروژه‌های واقعی باهاشون کار می‌کنم؛ درصدها هم تخمینی از تجربه‌ی فعلی من هستند.",
      listAria: "فهرست مهارت‌های این دسته",
      catsAria: "دسته‌بندی مهارت‌ها",
      cats: {
        frontend: "فرانت‌اند",
        backend: "بک‌اند",
        infra: "امنیت و زیرساخت",
        soft: "رهبری و مهارت نرم",
      },
      max: "MAX",
      items: {
        html: { name: "HTML5", desc: "" },
        css: { name: "CSS3", desc: "" },
        js: { name: "JavaScript", desc: "" },
        bootstrap: { name: "Bootstrap", desc: "" },
        tailwind: { name: "Tailwind CSS", desc: "" },
        react: { name: "React.js", desc: "" },
        pwa: { name: "PWA", desc: "" },
        twa: { name: "TWA", desc: "" },
        php: { name: "PHP", desc: "" },
        laravel: { name: "Laravel", desc: "" },
        sql: { name: "SQL / MySQL", desc: "" },
        cyber: {
          name: "امنیت و تست نفوذ",
          desc: "شناسایی آسیب‌پذیری، تست نفوذ و امن‌سازی وب‌اپ‌ها",
        },
        hosting: {
          name: "هاستینگ و دیپلوی",
          desc: "سرویس کامل هاست، راه‌اندازی سرور، دیپلوی، دامنه، SSL و مانیتورینگ",
        },
        mentorBe: { name: "منتور بک‌اند", desc: "" },
        mentorFe: { name: "منتور فرانت‌اند", desc: "" },
        lead: { name: "تک‌لید", desc: "" },
        seo: { name: "SEO و تولید محتوا", desc: "" },
        uiux: { name: "UI Design و UX", desc: "" },
        english: { name: "زبان انگلیسی", desc: "" },
      },
    },

    experience: {
      kicker: "// journey",
      title: "مسیر من، خط‌به‌خط",
      sub: "چند قدم مهم از شروع مسیر برنامه‌نویسی تا ساخت محصول و همراهی یک تیم فنی.",
      items: {
        e1: {
          date: "قبل از مهر 1403",
          title: "سال‌های فوندیشن",
          org: "خودآموزی جدی",
          bullets: [
            "یادگیری جدی برنامه‌نویسی",
            "تمرین روزانه و پروژه‌های تمرینی",
            "شکستن و از نو بستن پروژه‌ها تا واقعاً جا بیفتد",
          ],
        },
        e2: {
          date: "مهر 1403 تا مهر 1404",
          title: "توسعه‌دهنده‌ی بک‌اند",
          org: "شرکت رضالی‌تک",
          bullets: [
            "کد بک‌اند برای پروژه‌های واقعی",
            "تک‌لید روی بعضی از پروژه‌ها",
            "منتور بک‌اند برای اعضای تیم",
          ],
        },
        e3: {
          date: "تیر 1405 تا امروز",
          title: "بنیان‌گذار و مدیر",
          org: "شرکت جامبرس — رایان تدبیر نقش جهان",
          link: "https://jambrs.ir",
          linkLabel: "jambrs.ir",
          bullets: [
            "توسعه‌ی فول‌استک پروژه‌ها",
            "تک‌لید تیم 15+ نفره",
            "منتور فرانت‌اند و بک‌اند",
          ],
        },
      },
    },

    projects: {
      kicker: "// projects",
      title: "چی ساختم؟",
      sub: "چند نمونه از محصول‌ها و وب‌سایت‌هایی که در طراحی، توسعه یا راه‌اندازی‌شان نقش داشته‌ام؛ لینک هرکدام را می‌توانی ببینی.",
      featuredFlag: "ویژه",
      view: "مشاهده پروژه",
      opensNew: "(در تب جدید باز می‌شود)",
      groupA: "طراحی و توسعه کامل (از 0 تا 100، به‌همراه هاستینگ و دیپلوی)",
      groupB: "توسعه بک‌اند + هاستینگ و دیپلوی",
      items: {
        persianmenu: {
          title: "PersianMenu",
          desc: "یه سرویس SaaS برای کافه، رستوران و چای‌خونه: یه پلن ارزون بخر، منوی آنلاینت رو با QR Code بساز و سفارش‌ها رو آنلاین بگیر. طراحی، کد و هاستینگش همه از صفر تا صد دست خودم بود.",
          tags: "HTML · CSS · JavaScript · PHP",
        },
        jambrs: {
          title: "Jambrs",
          desc: "وب‌سایت معرفی جامبرس؛ جایی برای آشنایی با تیم، خدمات و پروژه‌هایی که با همکاری اعضای همین تیم اجرا می‌شوند.",
          tags: "HTML · CSS · JavaScript · PHP",
        },
        mzclinic: {
          title: "MZ Clinic",
          desc: "سایت معرفی و خدماتی یه کلینیک خودرو (مکانیکی) در اصفهان؛ خدمات، تعرفه‌ها و راه‌های ارتباطی، سبک و سریع.",
          tags: "PHP",
        },
        sepahantak: {
          title: "Sepahan Tak",
          desc: "فروشگاه آنلاین نبات و محصولات زعفرانی اصفهان؛ معرفی محصولات و فراهم‌کردن راهی ساده برای ثبت سفارش.",
          tags: "PHP",
        },
        elham: {
          title: "Elham Davari Hair",
          desc: "سایت معرفی و خدماتی سالن تخصصی مو در اصفهان؛ خدمات، نمونه‌کارها و ارتباط سریع با مشتری.",
          tags: "PHP",
        },
      },
    },

    teaching: {
      kicker: "// teaching",
      title: "تدریس و همراهی در مسیر یادگیری",
      sub: "در کنار توسعه‌ی نرم‌افزار، خودم هم کلاس برگزار می‌کنم و هنرجوها را با تمرین و پروژه جلو می‌برم.",
      cards: {
        t1: {
          title: "زبان انگلیسی",
          meta: "۱.۵+ سال تدریس",
          desc: "خودم کلاس زبان برگزار می‌کنم و به نوجوانان و جوانان، از سطح پایه تا مکالمه، آموزش می‌دهم.",
        },
        t2: {
          title: "بک‌اند با PHP و MySQL",
          meta: "۱+ سال تدریس",
          desc: "به هنرجوها بک‌اند آموزش می‌دهم؛ از مبانی PHP و طراحی دیتابیس تا ساخت API و اجرای یک پروژه‌ی واقعی.",
        },
        t3: {
          title: "فرانت‌اند با HTML، CSS و JavaScript",
          meta: "۱+ سال تدریس",
          desc: "خودم مبانی فرانت‌اند را درس می‌دهم؛ هر مبحث را با تمرین عملی و ساخت رابط کاربری جا می‌اندازیم.",
        },
      },
      note: "در جامبرس هم به‌عنوان منتور کنار اعضای تیم هستم و در مسیر یادگیری فرانت‌اند و بک‌اند، مرحله‌به‌مرحله همراهی‌شان می‌کنم.",
    },

    contact: {
      kicker: "// contact",
      title: "بیا حرف بزنیم",
      sub: "برای همکاری، پرسش یا گپ فنی، از هرکدام از راه‌های زیر پیام بده؛ خوشحال می‌شوم صحبت کنیم.",
      email: "ایمیل",
      emailSub: "reza1110ta@gmail.com",
      telegram: "تلگرام",
      telegramSub: "@eareza11",
      instagram: "اینستاگرام",
      instagramSub: "@eareza11",
      jambrs: "سایت جامبرس",
      jambrsSub: "jambrs.ir",
      jambrsIg: "اینستاگرام جامبرس",
      jambrsIgSub: "@jambrs.ir",
      githubAria: "گیت‌هاب رضا توکلی",
      cta: "ایده‌ای برای ساختن یا بهترکردن یک محصول داری؟ برام بنویس تا درباره‌اش گپ بزنیم.",
    },

    footer: {
      creditBefore: "ساخته‌شده با",
      creditAfter: "توسط رضا توکلی",
      topAria: "بازگشت به بالای صفحه",
    },
  },
  en: {
    pageTitle: "Reza Tavakoli | Portfolio",
    skip: "Skip to main content",
    nav: {
      logoAria: "Reza Tavakoli — Home",
      aria: "Main navigation",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      teaching: "Teaching",
      contact: "Contact",
      themeAria: "Toggle light and dark theme",
      menuAria: "Open or close the menu",
      languageToEnglish: "Switch language to English",
      languageToPersian: "تغییر زبان به فارسی",
    },
    hero: {
      kicker: "// full-stack dev · security · mentor",
      name: "Reza Tavakoli",
      role: "Full-stack developer, security enthusiast, and mentor to technical teams",
      intro:
        "I’m 19, a computer engineering student at Payame Noor University in Isfahan (yes, the famously laid-back student!) and the founder of Jambrs. Most of my time goes into building products, solving problems, and helping teams grow.",
      ctaProjects: "See what I’ve built",
      ctaContact: "Let’s talk",
      imgAlt: "Portrait of Reza Tavakoli",
      badge1: "PHP",
      badge2: "Security",
      badge3: "Mentor",
      termAria: "Terminal card with a short introduction",
      termTitle: "reza@jambrs — zsh",
      t1: "$ whoami",
      t2: "reza — full-stack dev & mentor",
      t3: "$ cat stack.txt",
      t4: "php · laravel · js · security",
      t5: "$ status",
      t6: "open to new ideas_",
    },
    counters: {
      aria: "At a glance",
      projects: "successful projects",
      years: "years coding",
      team: "team members",
      teaching: "teaching subjects",
    },
    about: {
      kicker: "// about",
      title: "A little about the person behind the code",
      p1: "I’m Reza, a computer engineering student and developer who enjoys building useful things and turning ideas into products. Real-world projects have shaped my learning so far, and every new one still teaches me something.",
      p2: "I’m currently the founder and CEO of Jambrs (Rayan Tadbir Naghsh Jahan). Alongside a team of 15+, we build real products and take them from the first idea through launch and ongoing support.",
      p3: "I care about clean code, clear communication, and teams that grow together. A new technical challenge? My usual answer is, “Let’s do it.”",
      jambrsLink: "Visit Jambrs",
      factsTitle: "spec.json",
      facts: [
        "age ......... 19",
        "city ........ Isfahan",
        "role ........ Founder @ Jambrs",
        "focus ....... Full-stack / Security",
      ],
    },
    skills: {
      kicker: "// skills",
      title: "What do I work with?",
      sub: "These are the tools and areas I use on real projects. The percentages are my own rough estimate of where I am today.",
      listAria: "Skills in this category",
      catsAria: "Skill categories",
      cats: {
        frontend: "Frontend",
        backend: "Backend",
        infra: "Security & Infrastructure",
        soft: "Leadership & People Skills",
      },
      max: "MAX",
      items: {
        html: { name: "HTML5", desc: "" },
        css: { name: "CSS3", desc: "" },
        js: { name: "JavaScript", desc: "" },
        bootstrap: { name: "Bootstrap", desc: "" },
        tailwind: { name: "Tailwind CSS", desc: "" },
        react: { name: "React.js", desc: "" },
        pwa: { name: "PWA", desc: "" },
        twa: { name: "TWA", desc: "" },
        php: { name: "PHP", desc: "" },
        laravel: { name: "Laravel", desc: "" },
        sql: { name: "SQL / MySQL", desc: "" },
        cyber: {
          name: "Security & Penetration Testing",
          desc: "Finding vulnerabilities, penetration testing, and securing web apps",
        },
        hosting: {
          name: "Hosting & Deployment",
          desc: "End-to-end hosting: server setup, deployment, domains, SSL, and monitoring",
        },
        mentorBe: { name: "Backend Mentoring", desc: "" },
        mentorFe: { name: "Frontend Mentoring", desc: "" },
        lead: { name: "Technical Leadership", desc: "" },
        seo: { name: "SEO & Content", desc: "" },
        uiux: { name: "UI & UX Design", desc: "" },
        english: { name: "English", desc: "" },
      },
    },
    experience: {
      kicker: "// journey",
      title: "My journey, one line at a time",
      sub: "A few key steps from learning to code to building products and helping a technical team grow.",
      items: {
        e1: {
          date: "Before Sep 2024",
          title: "The foundations",
          org: "Independent learning",
          bullets: [
            "A serious start in programming",
            "Daily practice and hands-on projects",
            "Taking projects apart and rebuilding them until the ideas really clicked",
          ],
        },
        e2: {
          date: "Sep 2024 – Sep 2025",
          title: "Backend Developer",
          org: "RezaliTech",
          bullets: [
            "Backend development for real-world projects",
            "Tech lead on selected projects",
            "Backend mentor for teammates",
          ],
        },
        e3: {
          date: "Jul 2026 – Present",
          title: "Founder & CEO",
          org: "Jambrs — Rayan Tadbir Naghsh Jahan",
          link: "https://jambrs.ir",
          linkLabel: "jambrs.ir",
          bullets: [
            "Full-stack development across projects",
            "Leading a team of 15+",
            "Mentoring teammates in frontend and backend development",
          ],
        },
      },
    },
    projects: {
      kicker: "// projects",
      title: "What have I built?",
      sub: "A few products and websites I helped design, develop, or launch. Take a look at any of them.",
      featuredFlag: "Featured",
      view: "View project",
      opensNew: "(opens in a new tab)",
      groupA:
        "End-to-end design & development (including hosting and deployment)",
      groupB: "Backend development + hosting and deployment",
      items: {
        persianmenu: {
          title: "PersianMenu",
          desc: "A SaaS service for cafés, restaurants, and teahouses. Pick an affordable plan, build an online menu with a QR code, and take orders online. I handled the design, development, and hosting from start to finish.",
          tags: "HTML · CSS · JavaScript · PHP",
        },
        jambrs: {
          title: "Jambrs",
          desc: "The Jambrs company website: meet the team, explore our services, and see projects delivered together by the people behind them.",
          tags: "HTML · CSS · JavaScript · PHP",
        },
        mzclinic: {
          title: "MZ Clinic",
          desc: "A website for an auto repair clinic in Isfahan, with a quick overview of services, pricing, and ways to get in touch.",
          tags: "PHP",
        },
        sepahantak: {
          title: "Sepahan Tak",
          desc: "An online shop for Isfahan rock candy and saffron products, showcasing the products and making it easy to place an order.",
          tags: "PHP",
        },
        elham: {
          title: "Elham Davari Hair",
          desc: "A website for a specialist hair salon in Isfahan, featuring its services, portfolio, and an easy way for clients to get in touch.",
          tags: "PHP",
        },
      },
    },
    teaching: {
      kicker: "// teaching",
      title: "Teaching and learning together",
      sub: "Alongside software development, I teach classes and help students make progress through practice and real projects.",
      cards: {
        t1: {
          title: "English",
          meta: "1.5+ years teaching",
          desc: "I teach English to teens and young adults, from the basics through to conversational skills.",
        },
        t2: {
          title: "Backend with PHP & MySQL",
          meta: "1+ year teaching",
          desc: "I teach backend development, from PHP fundamentals and database design to building APIs and shipping a real project.",
        },
        t3: {
          title: "Frontend with HTML, CSS & JavaScript",
          meta: "1+ year teaching",
          desc: "I teach frontend fundamentals, turning each topic into a hands-on exercise and a working interface.",
        },
      },
      note: "At Jambrs, I also mentor teammates as they learn frontend and backend development, supporting them step by step along the way.",
    },
    contact: {
      kicker: "// contact",
      title: "Let’s talk",
      sub: "For a collaboration, a question, or a bit of tech talk, reach out through any of these channels. I’d love to hear from you.",
      email: "Email",
      emailSub: "reza1110ta@gmail.com",
      telegram: "Telegram",
      telegramSub: "@eareza11",
      instagram: "Instagram",
      instagramSub: "@eareza11",
      jambrs: "Jambrs website",
      jambrsSub: "jambrs.ir",
      jambrsIg: "Jambrs on Instagram",
      jambrsIgSub: "@jambrs.ir",
      githubAria: "Reza Tavakoli on GitHub",
      cta: "Have an idea for building or improving a product? Drop me a message and let’s chat about it.",
    },
    footer: {
      creditBefore: "Made with",
      creditAfter: "by Reza Tavakoli",
      topAria: "Back to top",
    },
  },
};

/* =========================================================
   2) هسته‌ی i18n
   ========================================================= */
let currentLang = "fa";
const langBtn = document.getElementById("langBtn");

/* خواندن متن از شیء ترجمه‌ها با مسیر نقطه‌چین */
function t(key) {
  const val = key
    .split(".")
    .reduce((o, k) => (o ? o[k] : undefined), translations[currentLang]);
  return val === undefined ? key : val;
}

/* یکدست‌سازی ارقام قابل‌نمایش با ارقام لاتین */
function normalizeDigits() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest("script, style")) continue;
    node.nodeValue = node.nodeValue.replace(/[۰-۹٠-٩]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩".indexOf(digit) % 10),
    );
  }
}

/* اعمال یک زبان روی کل سند — برای افزودن زبان جدید فقط شیء جدید لازم است */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t(el.getAttribute("data-i18n"));
    if (typeof val === "string") el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr")
      .split(",")
      .forEach((pair) => {
        const idx = pair.indexOf(":");
        if (idx < 0) return;
        const attr = pair.slice(0, idx).trim();
        const val = t(pair.slice(idx + 1).trim());
        if (attr && typeof val === "string") el.setAttribute(attr, val);
      });
  });

  renderSkills(); // نام و توضیح مهارت‌ها هم از ترجمه می‌آیند
  document.title = t("pageTitle");
  if (langBtn) {
    const nextLang = lang === "fa" ? "en" : "fa";
    langBtn.textContent = nextLang === "en" ? "EN" : "فا";
    langBtn.setAttribute(
      "aria-label",
      t(nextLang === "en" ? "nav.languageToEnglish" : "nav.languageToPersian"),
    );
    langBtn.setAttribute(
      "title",
      t(nextLang === "en" ? "nav.languageToEnglish" : "nav.languageToPersian"),
    );
  }
  normalizeDigits();
  refreshIcons();
}

/* =========================================================
   3) مهارت‌ها — داده، رندر کاشی‌ها و حلقه‌ها
   ========================================================= */
const SKILL_CATS = ["frontend", "backend", "infra", "soft"];

const SKILLS = [
  // فرانت‌اند
  {
    cat: "frontend",
    id: "html",
    level: 100,
    icon: "devicon",
    cls: "devicon-html5-plain",
  },
  {
    cat: "frontend",
    id: "css",
    level: 100,
    icon: "devicon",
    cls: "devicon-css3-plain",
  },
  {
    cat: "frontend",
    id: "js",
    level: 100,
    icon: "devicon",
    cls: "devicon-javascript-plain",
  },
  {
    cat: "frontend",
    id: "bootstrap",
    level: 100,
    icon: "devicon",
    cls: "devicon-bootstrap-plain",
  },
  {
    cat: "frontend",
    id: "tailwind",
    level: 100,
    icon: "devicon",
    cls: "devicon-tailwindcss-plain",
  },
  {
    cat: "frontend",
    id: "react",
    level: 10,
    icon: "devicon",
    cls: "devicon-react-original",
  },
  { cat: "frontend", id: "pwa", level: 100, icon: "lucide", cls: "smartphone" },
  { cat: "frontend", id: "twa", level: 100, icon: "lucide", cls: "app-window" },
  // بک‌اند
  {
    cat: "backend",
    id: "php",
    level: 100,
    icon: "devicon",
    cls: "devicon-php-plain",
  },
  {
    cat: "backend",
    id: "laravel",
    level: 60,
    icon: "devicon",
    cls: "devicon-laravel-plain",
  },
  {
    cat: "backend",
    id: "sql",
    level: 100,
    icon: "devicon",
    cls: "devicon-mysql-plain",
  },
  // امنیت و زیرساخت
  { cat: "infra", id: "cyber", level: 90, icon: "lucide", cls: "shield-check" },
  { cat: "infra", id: "hosting", level: 100, icon: "lucide", cls: "server" },
  // رهبری و مهارت نرم
  {
    cat: "soft",
    id: "mentorBe",
    level: 100,
    icon: "lucide",
    cls: "graduation-cap",
  },
  { cat: "soft", id: "mentorFe", level: 100, icon: "lucide", cls: "book-open" },
  { cat: "soft", id: "lead", level: 90, icon: "lucide", cls: "users" },
  { cat: "soft", id: "seo", level: 70, icon: "lucide", cls: "search" },
  { cat: "soft", id: "uiux", level: 50, icon: "lucide", cls: "palette" },
  { cat: "soft", id: "english", level: 90, icon: "lucide", cls: "languages" },
];

const RING_R = 52;
const RING_C = 2 * Math.PI * RING_R; // محیط دایره
let skillObserver = null;

function skillIconHtml(sk) {
  return sk.icon === "devicon"
    ? `<i class="${sk.cls}" aria-hidden="true"></i>`
    : `<i data-lucide="${sk.cls}" aria-hidden="true"></i>`;
}

/* رندر کاشی‌های مهارت داخل پنل‌های دسته‌ها */
function renderSkills() {
  SKILL_CATS.forEach((cat) => {
    const panel = document.getElementById("panel-" + cat);
    if (!panel) return;

    panel.innerHTML = SKILLS.filter((sk) => sk.cat === cat)
      .map((sk) => {
        const meta = t("skills.items." + sk.id) || {};
        const isMax = sk.level >= 100;
        const desc = meta.desc ? `<p class="skill-desc">${meta.desc}</p>` : "";
        const maxFlag = isMax
          ? `<span class="max-flag mono">${t("skills.max")}</span>`
          : "";
        return `
        <article class="skill${isMax ? " is-max" : ""}" data-level="${sk.level}"
                 aria-label="${(meta && meta.name) || sk.id} — ${sk.level}%">
          <span class="skill-badge mono" aria-hidden="true"><span class="sb-num">0</span>${isMax ? "+" : ""}</span>
          <div class="skill-visual">
            <svg class="skill-ring" viewBox="0 0 120 120" aria-hidden="true">
              <circle class="ring-track" cx="60" cy="60" r="${RING_R}"></circle>
              <circle class="ring-progress" cx="60" cy="60" r="${RING_R}"
                      stroke-dasharray="${RING_C.toFixed(1)}"
                      stroke-dashoffset="${RING_C.toFixed(1)}"></circle>
            </svg>
            <div class="skill-logo">${skillIconHtml(sk)}</div>
          </div>
          <h4 class="skill-name">${(meta && meta.name) || sk.id}</h4>
          ${desc}
          ${maxFlag}
        </article>`;
      })
      .join("");
  });
}

/* =========================================================
   4) تشخیص «کاهش حرکت» سیستم
   ========================================================= */
const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* =========================================================
   5) تم: روشن/تاریک + localStorage + احترام به تنظیم سیستم
   ========================================================= */
const rootEl = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
let themeTimer = 0;

function applyTheme(theme, save) {
  rootEl.classList.add("theme-anim");
  rootEl.setAttribute("data-theme", theme);
  if (save) {
    try {
      localStorage.setItem("rt-theme", theme);
    } catch (e) {
      /* حالت خصوصی */
    }
  }
  window.clearTimeout(themeTimer);
  themeTimer = window.setTimeout(
    () => rootEl.classList.remove("theme-anim"),
    450,
  );
}

function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("rt-theme");
  } catch (e) {
    /* نادیده */
  }
  const theme = saved === "dark" ? "dark" : "light";
  rootEl.setAttribute("data-theme", theme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(
        rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark",
        true,
      );
    });
  }
}

/* =========================================================
   6) ناوبری: حالت اسکرول، منوی موبایل، لینک فعال
   ========================================================= */
const navEl = document.querySelector(".nav");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function initNav() {
  const onScroll = () =>
    navEl.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  navLinks
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", closeMenu));

  const links = [...navLinks.querySelectorAll("a")];
  const secIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle(
            "active",
            l.getAttribute("href") === "#" + en.target.id,
          ),
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  ["about", "skills", "experience", "projects", "teaching", "contact"].forEach(
    (id) => {
      const sec = document.getElementById(id);
      if (sec) secIo.observe(sec);
    },
  );
}

/* =========================================================
   7) reveal هنگام ورود به دید (با تأخیر پلکانی)
   ========================================================= */
function initReveal() {
  const els = [...document.querySelectorAll("[data-reveal]")];

  els.forEach((el) => {
    const sibs = [...el.parentElement.children].filter((c) =>
      c.hasAttribute("data-reveal"),
    );
    const idx = Math.max(sibs.indexOf(el), 0);
    el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
  });

  if (prefersReduced) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  els.forEach((el) => io.observe(el));
}

/* =========================================================
   8) شمارنده‌ها: یک بار، فقط هنگام دیده شدن
   ========================================================= */
function initCounters() {
  const run = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }

    const dur = 1500;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          run(en.target);
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.6 },
  );

  document.querySelectorAll(".counter-num").forEach((el) => io.observe(el));
}

/* =========================================================
   9) حلقه‌های مهارت: فعال‌سازی هنگام دیده شدن
   ========================================================= */
function animateSkill(tile) {
  if (tile.dataset.animated === "1") return;
  tile.dataset.animated = "1";

  const level = parseInt(tile.dataset.level, 10) || 0;
  const circle = tile.querySelector(".ring-progress");
  const numEl = tile.querySelector(".sb-num");

  if (circle) {
    circle.style.strokeDashoffset = String(RING_C * (1 - level / 100));
  }

  if (numEl) {
    if (prefersReduced) {
      numEl.textContent = String(level);
    } else {
      const dur = 1500;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        numEl.textContent = String(Math.round(level * eased));
        if (p < 1) requestAnimationFrame(step);
        else numEl.textContent = String(level);
      };
      requestAnimationFrame(step);
    }
  }

  tile.classList.add("in");
  // حذف تأخیر پلکانی تا هاورها بی‌تأخیر بمانند
  window.setTimeout(() => {
    tile.style.transitionDelay = "";
  }, 950);
}

function initSkillRings() {
  skillObserver?.disconnect();
  skillObserver = null;

  const tiles = [...document.querySelectorAll(".skill")];

  if (prefersReduced) {
    tiles.forEach(animateSkill);
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          animateSkill(en.target);
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  skillObserver = io;

  tiles.forEach((tile, i) => {
    tile.style.transitionDelay = Math.min(i, 7) * 60 + "ms";
    io.observe(tile);
  });
}

/* =========================================================
   10) تب‌های دسته‌بندی مهارت‌ها (با کیبورد)
   ========================================================= */
function initTabs() {
  const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
  if (!tabs.length) return;

  const select = (tab) => {
    tabs.forEach((tb) => {
      const on = tb === tab;
      tb.setAttribute("aria-selected", String(on));
      tb.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(tb.getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      let next = null;
      if (e.key === "ArrowLeft") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowRight")
        next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") next = tabs[0];
      if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        select(next);
        next.focus();
      }
    });
  });
}

/* =========================================================
   11) افکت‌ها: اسپات‌لایت، دکمه‌ی مغناطیسی، پارالاکس هیرو
   ========================================================= */
function initEffects() {
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  if (!canHover || prefersReduced) return;

  // هاله‌ی نور دنبال‌کننده‌ی موس روی کارت‌ها
  document.querySelectorAll(".spot, .skill").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", x.toFixed(2) + "%");
      card.style.setProperty("--my", y.toFixed(2) + "%");
    });
  });

  // دکمه‌های مغناطیسی (فقط transform)
  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.22;
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      btn.style.transform =
        "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px)";
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });

  // پارالاکس ملایم عکس هیرو هنگام اسکرول
  const photo = document.getElementById("photoWrap");
  if (photo) {
    let ticking = false;
    const update = () => {
      const y = Math.min(window.scrollY, 700);
      photo.style.transform =
        "translate3d(0," + (y * 0.06).toFixed(1) + "px,0)";
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
  }
}

/* =========================================================
   12) آیکون‌های Lucide + سال فوتر
   ========================================================= */
function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

/* =========================================================
   13) راه‌اندازی
   ========================================================= */
function init() {
  initTheme();
  let savedLang = "fa";
  try {
    savedLang = localStorage.getItem("rt-lang") || "fa";
  } catch (e) {
    /* استفاده از فارسی به‌عنوان پیش‌فرض */
  }
  setLanguage(translations[savedLang] ? savedLang : "fa");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const lang = currentLang === "fa" ? "en" : "fa";
      setLanguage(lang);
      try {
        localStorage.setItem("rt-lang", lang);
      } catch (e) {
        /* تغییر زبان تا پایان این بازدید فعال می‌ماند */
      }
      initSkillRings();
    });
  }
  initNav();
  initReveal();
  initCounters();
  initTabs();
  initSkillRings();
  initEffects();
  refreshIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
