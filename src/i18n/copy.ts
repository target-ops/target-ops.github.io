export type Locale = "en" | "he";

export type Copy = {
  nav: {
    home: string;
    about: string;
    solutions: string;
    openSource: string;
    articles: string;
    team: string;
    contact: string;
    tagline: string;
    toggleToEn: string;
    toggleToHe: string;
  };
  hero: {
    h1Line1: string;
    h1Line2: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    services: {
      cloudMigration: { label: string; desc: string };
      iac: { label: string; desc: string };
      cicd: { label: string; desc: string };
      security: { label: string; desc: string };
    };
  };
  whatWeDo: {
    h2Part1: string;
    h2Part2: string;
    intro: string;
    introHighlight: string;
    beforeLabel: string;
    afterLabel: string;
    painPoints: Array<{ service: string; before: string; after: string; metric: string }>;
    resultsH3: string;
    outcomes: string[];
    bottomLine1: string;
    bottomLine2: string;
  };
  services: {
    h2Part1: string;
    h2Part2: string;
    subtitle: string;
    cards: Array<{ title: string; description: string; features: string[] }>;
    learnAbout: string;
    sectionCta: string;
  };
  whyChooseUs: {
    h2Part1: string;
    h2Part2: string;
    subtitle: string;
    reasons: Array<{ title: string; description: string }>;
  };
  openSource: {
    heading: string;
    subtitle: string;
    description: string;
    stats: { projects: string; projectsDesc: string; stars: string; starsDesc: string; downloads: string; downloadsDesc: string };
    ctaPrimary: string;
    ctaGithub: string;
  };
  finalCTA: {
    badge: string;
    h2: string;
    description: string;
    cta: string;
    footnote: string;
    divider: string;
    exploreCta: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    solutions: string;
    privacy: string;
    terms: string;
    copyright: string;
    solutionLinks: { consulting: string; migration: string; automation: string; cicd: string; security: string };
  };
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      solutions: "Solutions",
      openSource: "Open Source",
      articles: "Articles",
      team: "Team",
      contact: "Contact",
      tagline: "DevOps Excellence",
      toggleToEn: "EN",
      toggleToHe: "עב",
    },
    hero: {
      h1Line1: "We Build, Run, and Optimize",
      h1Line2: "Your DevOps Infrastructure",
      subtitle: "Full-service DevOps consulting for startups and enterprises.",
      description:
        "We migrate your cloud infrastructure, automate deployments, build CI/CD pipelines, and optimize costs — so your engineering team can focus on shipping features, not fixing infrastructure.",
      ctaPrimary: "Book a Free 30-Minute Call",
      ctaSecondary: "Explore Solutions",
      services: {
        cloudMigration: { label: "Cloud Migration", desc: "AWS • GCP • Azure" },
        iac: { label: "Infrastructure as Code", desc: "Terraform • Pulumi" },
        cicd: { label: "CI/CD Pipelines", desc: "Fast & Reliable" },
        security: { label: "Security & Compliance", desc: "SOC 2 • HIPAA" },
      },
    },
    whatWeDo: {
      h2Part1: "Before Us ",
      h2Part2: "vs. After Us",
      intro: "Startups don't realize they have an ops problem — they just know things feel broken.",
      introHighlight: "Here's what changes when we step in.",
      beforeLabel: "Before",
      afterLabel: "After",
      painPoints: [
        {
          service: "Deployment Speed",
          before: "Releases take days or weeks. Manual testing. Features are delayed. Customers wait.",
          after: "Deploy multiple times per day. Automated testing. Features ship in hours, not weeks.",
          metric: "Target: ship daily, not weekly",
        },
        {
          service: "Cloud Costs",
          before: "Bills spike unexpectedly. No cost visibility. Over-provisioned resources. Budget overruns.",
          after: "Predictable monthly costs. Real-time monitoring. Right-sized infrastructure.",
          metric: "Typical savings: 30–50%",
        },
        {
          service: "System Reliability",
          before: "Frequent outages. Manual recovery. Incidents at 3am. Customers complain. Engineers burn out.",
          after: "High-availability architecture. Automated monitoring. Self-healing systems. Proactive alerts.",
          metric: "Target: 99.9% uptime",
        },
      ],
      resultsH3: "The Results You Get",
      outcomes: [
        "Deploy 10× faster with automated CI/CD pipelines",
        "Cut cloud costs by 30–50% through optimization",
        "95% fewer manual errors with Infrastructure as Code",
        "Zero-downtime deployments with instant rollbacks",
        "Pass SOC 2, HIPAA, PCI-DSS audits with confidence",
        "Auto-scale infrastructure based on real-time demand",
      ],
      bottomLine1: "We don't just optimize infrastructure —",
      bottomLine2: "we build systems your engineers love maintaining",
    },
    services: {
      h2Part1: "Stop Fighting Fires. ",
      h2Part2: "Start Shipping Features.",
      subtitle:
        "Full-service DevOps consulting — from cloud migrations to CI/CD pipelines. We fix what's broken, automate what's manual, and optimize what's expensive.",
      cards: [
        {
          title: "DevOps Consulting",
          description:
            "Struggling with slow deployments or team silos? We assess your current processes, create a clear roadmap, and guide your team through implementing DevOps practices that actually work—reducing deployment time by up to 80%.",
          features: [
            "We evaluate your current setup and identify bottlenecks",
            "Create a step-by-step plan tailored to your business",
            "Train your team on DevOps best practices",
          ],
        },
        {
          title: "Cloud Migration",
          description:
            "Moving to the cloud but worried about downtime or data loss? We plan and execute your entire migration—from AWS to GCP to Azure—ensuring zero downtime and immediate cost savings of 30-50%.",
          features: [
            "We analyze your infrastructure and plan the migration",
            "Execute the move with zero downtime guarantee",
            "Optimize your cloud costs from day one",
          ],
        },
        {
          title: "Infrastructure Automation",
          description:
            "Tired of manual server setup and configuration? We automate your entire infrastructure—from provisioning to scaling—so your team can deploy in minutes instead of days and eliminate human errors.",
          features: [
            "We automate server provisioning and configuration",
            "Set up auto-scaling to handle traffic spikes",
            "Implement disaster recovery that actually works",
          ],
        },
        {
          title: "CI/CD Pipelines",
          description:
            "Still deploying code manually? We build automated pipelines that test and deploy your code in minutes—enabling your team to release updates 10x faster while catching bugs before they reach production.",
          features: [
            "We design pipelines customized to your tech stack",
            "Automate testing to catch bugs early",
            "Deploy to production with a single click",
          ],
        },
        {
          title: "Security & Compliance",
          description:
            "Need GDPR, HIPAA, or SOC 2 compliance but don't know where to start? We implement security measures and compliance frameworks that pass audits—without slowing down your development team.",
          features: [
            "We audit your security and identify vulnerabilities",
            "Implement security best practices across your stack",
            "Ensure compliance with industry regulations",
          ],
        },
      ],
      learnAbout: "Learn About",
      sectionCta: "Check Our Solutions",
    },
    whyChooseUs: {
      h2Part1: "Why Choose ",
      h2Part2: "Target-Ops",
      subtitle: "We're not here to sell you tools. We're here to fix your DevOps.",
      reasons: [
        {
          title: "Engineers First, Consultants Second",
          description: "We've sat in your chair — real engineers solving production pain. No buzzwords, no fluff.",
        },
        {
          title: "No One-Size-Fits-All Playbook",
          description: "Your stack is unique. We build solutions that fit your team, your tech, and your timeline.",
        },
        {
          title: "Transparency Over Sales",
          description: "No long contracts. No hidden fees. Just honest advice and DevOps that works.",
        },
        {
          title: "Open Work, Public Reputation",
          description:
            "Our tooling is on GitHub. Our technical writing is on target-ops.io. You can read our work before you hire us — most consultancies don't let you.",
        },
      ],
    },
    openSource: {
      heading: "We Give Back",
      subtitle: "Open source is how we solve real DevOps pain for engineers everywhere.",
      description:
        "From VS Code extensions to CLI tools — we build and maintain the utilities that make our own DevOps work faster, and we keep them open so the rest of the community benefits too.",
      stats: {
        projects: "Projects",
        projectsDesc: "Public repos",
        stars: "All public",
        starsDesc: "On GitHub",
        downloads: "Real tools",
        downloadsDesc: "We use daily",
      },
      ctaPrimary: "View All Projects",
      ctaGithub: "GitHub",
    },
    finalCTA: {
      badge: "🚀 Free Consultation Available",
      h2: "Ready to Transform Your DevOps?",
      description: "Book a free 30-minute consultation — no sales pitch, just honest advice about your DevOps challenges.",
      cta: "Schedule Your Free Consultation",
      footnote: "No commitment • 30 minutes • Expert advice",
      divider: "Or explore our solutions:",
      exploreCta: "View All Solutions",
    },
    footer: {
      description:
        "Empowering startups and enterprises to achieve DevOps excellence through tailored solutions, automation, and continuous innovation.",
      quickLinks: "Quick Links",
      solutions: "Solutions",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© 2024 Target-Ops. All rights reserved.",
      solutionLinks: {
        consulting: "DevOps Consulting",
        migration: "Cloud Migration",
        automation: "Infrastructure Automation",
        cicd: "CI/CD Pipelines",
        security: "Security & Compliance",
      },
    },
  },

  he: {
    nav: {
      home: "בית",
      about: "עלינו",
      solutions: "שירותים",
      openSource: "קוד פתוח",
      articles: "מאמרים",
      team: "הצוות",
      contact: "צור קשר",
      tagline: "DevOps Excellence",
      toggleToEn: "EN",
      toggleToHe: "עב",
    },
    hero: {
      h1Line1: "בונים, מפעילים ומייעלים",
      h1Line2: "את תשתית ה-DevOps שלך",
      subtitle: "ייעוץ DevOps מקצה לקצה, לסטארטאפים ולארגונים.",
      description:
        "אנחנו מעבירים את התשתית שלך לענן, בונים CI/CD, עושים אוטומציה לדיפלוימנטים ומייעלים עלויות — כדי שצוות ההנדסה שלך יתעסק בפיצ'רים, לא בתשתית.",
      ctaPrimary: "קבעו שיחה של 30 דקות",
      ctaSecondary: "לשירותים שלנו",
      services: {
        cloudMigration: { label: "הגירה לענן", desc: "AWS • GCP • Azure" },
        iac: { label: "Infrastructure as Code", desc: "Terraform • Pulumi" },
        cicd: { label: "CI/CD Pipelines", desc: "מהיר ואמין" },
        security: { label: "אבטחה ותאימות", desc: "SOC 2 • HIPAA" },
      },
    },
    whatWeDo: {
      h2Part1: "לפני ",
      h2Part2: "ואחרי",
      intro: "סטארטאפים לא תמיד יודעים שיש להם בעיית אופס — הם פשוט מרגישים שמשהו שבור.",
      introHighlight: "הנה מה שמשתנה כשאנחנו נכנסים לתמונה.",
      beforeLabel: "לפני",
      afterLabel: "אחרי",
      painPoints: [
        {
          service: "מהירות דיפלוי",
          before: "ריליס לוקח ימים או שבועות. בדיקות ידניות. פיצ'רים מתעכבים. לקוחות מחכים.",
          after: "דיפלוי כמה פעמים ביום. בדיקות אוטומטיות. פיצ'רים יוצאים בשעות, לא שבועות.",
          metric: "מטרה: דיפלוי יומי, לא שבועי",
        },
        {
          service: "עלויות ענן",
          before: "חשבונות מזנקים ללא התראה. אין שקיפות לעלויות. יתר הקצאה של משאבים. חריגות תקציב.",
          after: "עלויות חודשיות צפויות. מוניטורינג בזמן אמת. תשתית מותאמת בדיוק לגודל.",
          metric: "חיסכון טיפוסי: 30–50%",
        },
        {
          service: "יציבות המערכת",
          before: "נפילות תכופות. התאוששות ידנית. אירועים ב-3 לפנות בוקר. לקוחות מתלוננים. מהנדסים נשרפים.",
          after: "ארכיטקטורת High Availability. מוניטורינג אוטומטי. Self-healing. התראות פרואקטיביות.",
          metric: "מטרה: 99.9% זמינות",
        },
      ],
      resultsH3: "התוצאות שתקבלו",
      outcomes: [
        "דיפלוי פי 10 מהר יותר עם פייפליינים אוטומטיים",
        "חיסכון של 30–50% בעלויות הענן דרך אופטימיזציה",
        "95% פחות שגיאות ידניות עם Infrastructure as Code",
        "דיפלוי ללא Downtime עם Rollback מיידי",
        "עמידה ב-SOC 2, HIPAA, PCI-DSS בביטחון",
        "Auto-scale של התשתית לפי ביקוש בזמן אמת",
      ],
      bottomLine1: "אנחנו לא רק מייעלים תשתית —",
      bottomLine2: "אנחנו בונים מערכות שמהנדסים אוהבים לתחזק",
    },
    services: {
      h2Part1: "מספיק לכבות שריפות. ",
      h2Part2: "תתחילו לשלוח פיצ'רים.",
      subtitle:
        "ייעוץ DevOps מלא — מהגירה לענן ועד CI/CD. מתקנים את מה ששבור, אוטומציה למה שידני, ייעול למה שיקר.",
      cards: [
        {
          title: "DevOps Consulting",
          description:
            "דיפלוים איטיים או סיילוסים בצוות? אנחנו בוחנים את התהליכים הקיימים, בונים תוכנית ברורה, ומלווים את הצוות ביישום DevOps שעובד באמת — עם שיפור זמן דיפלוי של עד 80%.",
          features: [
            "בוחנים את הסטאק הקיים ומזהים צווארי בקבוק",
            "בונים תוכנית צעד-אחר-צעד מותאמת לעסק",
            "מכשירים את הצוות בפרקטיקות DevOps",
          ],
        },
        {
          title: "Cloud Migration",
          description:
            "עוברים לענן אבל מודאגים מ-Downtime או אובדן נתונים? אנחנו מתכננים ומבצעים את ההגירה המלאה — AWS, GCP או Azure — עם אפס Downtime וחיסכון מיידי של 30–50%.",
          features: [
            "מנתחים את התשתית ומתכננים את ההגירה",
            "מבצעים את המעבר בהתחייבות לאפס Downtime",
            "ממטבים את עלויות הענן מהיום הראשון",
          ],
        },
        {
          title: "Infrastructure Automation",
          description:
            "נמאס מהגדרה ידנית של שרתים? אנחנו עושים אוטומציה לכל התשתית — מ-Provisioning ועד Scaling — כדי שהצוות ידפלה בדקות במקום ימים ויפסיק לטעות.",
          features: [
            "אוטומציה של Provisioning וקונפיגורציה",
            "Auto-scaling שיחזיק עליות ביקוש",
            "Disaster Recovery שבאמת עובד",
          ],
        },
        {
          title: "CI/CD Pipelines",
          description:
            "עדיין עושים דיפלוי ידני? אנחנו בונים פייפליינים אוטומטיים שבודקים ומדפלים קוד בדקות — פי 10 יותר ריליסים, עם תפיסת באגים לפני הפרודקשן.",
          features: [
            "מעצבים פייפליינים מותאמים לסטאק שלך",
            "אוטומציה של בדיקות לתפיסת באגים מוקדמת",
            "דיפלוי לפרודקשן בקליק אחד",
          ],
        },
        {
          title: "Security & Compliance",
          description:
            "צריכים GDPR, HIPAA או SOC 2 ולא יודעים מאיפה להתחיל? אנחנו מיישמים מדיניות אבטחה ומסגרות תאימות שעוברות אודיטים — בלי להאט את ההנדסה.",
          features: [
            "אודיט אבטחה ומיפוי חשיפות",
            "יישום Best Practices לאבטחה בכל הסטאק",
            "עמידה ברגולציות של התעשייה",
          ],
        },
      ],
      learnAbout: "קרא עוד על",
      sectionCta: "לכל השירותים",
    },
    whyChooseUs: {
      h2Part1: "למה ",
      h2Part2: "Target-Ops",
      subtitle: "לא באנו למכור כלים. באנו לתקן את ה-DevOps.",
      reasons: [
        {
          title: "מהנדסים לפני יועצים",
          description: "ישבנו בכיסא שלך — מהנדסים אמיתיים שפותרים בעיות פרודקשן. בלי באזוורדס, בלי לוקשים.",
        },
        {
          title: "בלי תבניות מוכנות",
          description: "הסטאק שלך ייחודי. אנחנו בונים פתרונות שמתאימים לצוות, לטכנולוגיה ולטיימליין שלך.",
        },
        {
          title: "שקיפות לפני מכירה",
          description: "בלי חוזים ארוכים. בלי אותיות קטנות. ייעוץ כן ו-DevOps שעובד.",
        },
        {
          title: "עבודה פתוחה, מוניטין פומבי",
          description:
            "הכלים שלנו ב-GitHub. המאמרים הטכניים ב-target-ops.io. אפשר לקרוא את העבודה שלנו לפני שמעסיקים אותנו — לרוב חברות הייעוץ לא מאפשרות את זה.",
        },
      ],
    },
    openSource: {
      heading: "נותנים בחזרה",
      subtitle: "קוד פתוח הוא הדרך שלנו לפתור כאבי DevOps אמיתיים של מהנדסים בכל העולם.",
      description:
        "מתוספים ל-VS Code ועד כלי CLI — אנחנו בונים ומתחזקים את הכלים שמאיצים את עבודת ה-DevOps שלנו, ומשאירים אותם פתוחים כדי שכל הקהילה תרוויח.",
      stats: {
        projects: "פרויקטים",
        projectsDesc: "ריפוזיטוריז פומביים",
        stars: "הכל פומבי",
        starsDesc: "ב-GitHub",
        downloads: "כלים אמיתיים",
        downloadsDesc: "שאנחנו משתמשים בהם יומיומית",
      },
      ctaPrimary: "כל הפרויקטים",
      ctaGithub: "GitHub",
    },
    finalCTA: {
      badge: "🚀 ייעוץ ראשוני בחינם",
      h2: "מוכנים לשדרג את ה-DevOps?",
      description: "קבעו שיחה של 30 דקות — בלי פיץ' מכירות, רק ייעוץ כן על אתגרי ה-DevOps שלכם.",
      cta: "קבעו את השיחה",
      footnote: "בלי התחייבות • 30 דקות • ייעוץ מקצועי",
      divider: "או צפו בשירותים שלנו:",
      exploreCta: "לכל השירותים",
    },
    footer: {
      description:
        "מעצימים סטארטאפים וארגונים להגיע למצוינות DevOps דרך פתרונות מותאמים, אוטומציה וחדשנות מתמשכת.",
      quickLinks: "קישורים מהירים",
      solutions: "שירותים",
      privacy: "מדיניות פרטיות",
      terms: "תנאי שימוש",
      copyright: "© 2024 Target-Ops. כל הזכויות שמורות.",
      solutionLinks: {
        consulting: "ייעוץ DevOps",
        migration: "הגירה לענן",
        automation: "אוטומציה של תשתיות",
        cicd: "פייפליינים CI/CD",
        security: "אבטחה ותאימות",
      },
    },
  },
};
