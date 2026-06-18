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
    stats: {
      projects: string;
      projectsDesc: string;
      stars: string;
      starsDesc: string;
      downloads: string;
      downloadsDesc: string;
    };
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
    solutionLinks: {
      consulting: string;
      migration: string;
      automation: string;
      cicd: string;
      security: string;
    };
  };
};
