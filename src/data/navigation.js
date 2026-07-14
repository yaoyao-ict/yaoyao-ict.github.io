export const navigation = [
  {
    label: "Projects",
    key: "nav.projects",
    icon: "folder",
    links: [
      { label: "All Projects", key: "nav.projects.all", href: "/projects/", icon: "grid" },
      { label: "Automation", key: "nav.projects.automation", href: "/projects/automation/", icon: "zap" },
      { label: "Data Dashboards", key: "nav.projects.data", href: "/projects/data/", icon: "chart" },
    ],
  },
  {
    label: "Writing",
    key: "nav.writing",
    icon: "pen",
    links: [
      { label: "All Writing", key: "nav.writing.all", href: "/writing/", icon: "book" },
      { label: "Deployment Notes", key: "nav.writing.deployment", href: "/writing/deployment/", icon: "rocket" },
      { label: "Career Growth", key: "nav.writing.career", href: "/writing/career/", icon: "growth" },
    ],
  },
  {
    label: "Poker",
    key: "nav.poker",
    icon: "poker",
    links: [
      { label: "Poker Overview", key: "nav.poker.overview", href: "/poker/", icon: "chart" },
      { label: "Session Log", key: "nav.poker.sessions", href: "/poker/#sessions", icon: "grid" },
      { label: "Strategy Notes", key: "nav.poker.notes", href: "/poker/#notes", icon: "book" },
    ],
  },
  {
    label: "About",
    key: "nav.about",
    icon: "user",
    href: "/about/",
  },
];

export const projectCards = [
  {
    eyebrow: "Automation",
    title: "Automation Workflows",
    titleKey: "card.projects.automation.title",
    href: "/projects/automation/workflow-automation/",
    description: "Scripts, API integrations, process automation, and operational efficiency.",
    descriptionKey: "card.projects.automation.description",
  },
  {
    eyebrow: "Data",
    title: "Data Dashboards",
    titleKey: "card.projects.data.title",
    href: "/projects/data/smart-dashboard/",
    description: "Data visualization, reporting, monitoring, and business insights.",
    descriptionKey: "card.projects.data.description",
  },
  {
    eyebrow: "Product",
    title: "Product Experience",
    titleKey: "card.projects.product.title",
    href: "/about/",
    description: "Turning complex requirements into clear product experiences.",
    descriptionKey: "card.projects.product.description",
  },
];

export const writingCards = [
  {
    eyebrow: "Deployment",
    title: "Deployment Notes",
    titleKey: "card.writing.deployment.title",
    href: "/writing/deployment/",
    description: "GitHub Pages, Azure, automated deployment, and website maintenance.",
    descriptionKey: "card.writing.deployment.description",
  },
  {
    eyebrow: "Career",
    title: "Career Growth",
    titleKey: "card.writing.career.title",
    href: "/writing/career/",
    description: "Project storytelling, portfolio writing, collaboration, and long-term growth.",
    descriptionKey: "card.writing.career.description",
  },
];

export const pokerSessions = [
  {
    date: "2026-07-02",
    game: "NLH 1/3",
    location: "Live",
    durationHours: 4.5,
    buyIn: 300,
    cashOut: 615,
    notes: "Good table selection and patient river decisions.",
    notesKey: "poker.session.20260702.notes",
  },
  {
    date: "2026-07-05",
    game: "NLH 1/3",
    location: "Live",
    durationHours: 3.25,
    buyIn: 400,
    cashOut: 260,
    notes: "Lost two medium pots after defending too wide out of position.",
    notesKey: "poker.session.20260705.notes",
  },
  {
    date: "2026-07-09",
    game: "NLH 2/5",
    location: "Live",
    durationHours: 5,
    buyIn: 700,
    cashOut: 1180,
    notes: "Value betting thinner worked well against passive callers.",
    notesKey: "poker.session.20260709.notes",
  },
  {
    date: "2026-07-12",
    game: "NLH 1/3",
    location: "Live",
    durationHours: 2.75,
    buyIn: 300,
    cashOut: 210,
    notes: "Short session; quit early after noticing focus dropping.",
    notesKey: "poker.session.20260712.notes",
  },
];

export const pokerNotes = [
  {
    title: "Session Review Checklist",
    titleKey: "poker.note.review.title",
    description: "A repeatable structure for reviewing big pots, mental state, table selection, and bankroll movement.",
    descriptionKey: "poker.note.review.description",
    href: "/poker/#notes",
  },
  {
    title: "Preflop Discipline",
    titleKey: "poker.note.preflop.title",
    description: "Notes on avoiding loose calls from bad positions and keeping ranges clear before the flop.",
    descriptionKey: "poker.note.preflop.description",
    href: "/poker/#notes",
  },
];

export const projectArticles = [
  {
    title: "Smart Dashboard",
    titleKey: "article.smartDashboard.title",
    subtitle: "React / TypeScript / Data Visualization",
    subtitleKey: "article.smartDashboard.subtitle",
    href: "/projects/data/smart-dashboard/",
    category: "Data",
    date: "2026-06-03",
    description: "A practical dashboard project focused on making key metrics easier to scan, compare, and act on.",
    descriptionKey: "article.smartDashboard.description",
  },
  {
    title: "Automation Workflow",
    titleKey: "article.automationWorkflow.title",
    subtitle: "Python / Azure / API Integration",
    subtitleKey: "article.automationWorkflow.subtitle",
    href: "/projects/automation/workflow-automation/",
    category: "Automation",
    date: "2026-06-02",
    description: "A workflow automation case study about replacing repetitive manual steps with reliable scripts and service integrations.",
    descriptionKey: "article.automationWorkflow.description",
  },
  {
    title: "Personal Knowledge Base",
    titleKey: "article.knowledgeBase.title",
    subtitle: "Content System / Search / UX",
    subtitleKey: "article.knowledgeBase.subtitle",
    href: "/projects/knowledge-base/",
    category: "Product",
    date: "2026-05-28",
    description: "A growing place for notes, links, writing, and reusable material.",
    descriptionKey: "article.knowledgeBase.description",
  },
];

export const writingArticles = [
  {
    title: "Building a Maintainable Personal Website",
    titleKey: "article.website.title",
    subtitle: "Astro / GitHub Pages / Design Systems",
    subtitleKey: "article.website.subtitle",
    href: "/writing/deployment/personal-website/",
    category: "Deployment",
    date: "2026-06-06",
    description: "Notes on turning a simple static page into a maintainable Astro site.",
    descriptionKey: "article.website.description",
  },
  {
    title: "Publishing a Static Site with GitHub Pages",
    titleKey: "article.githubPages.title",
    subtitle: "GitHub Pages / Automation",
    subtitleKey: "article.githubPages.subtitle",
    href: "/writing/deployment/github-pages/",
    category: "Deployment",
    date: "2026-06-05",
    description: "How this site is built locally, committed to GitHub, and published from the gh-pages branch.",
    descriptionKey: "article.githubPages.description",
  },
  {
    title: "Writing Project Stories That Feel Like Real Work",
    titleKey: "article.projectStories.title",
    subtitle: "Career / Portfolio Writing",
    subtitleKey: "article.projectStories.subtitle",
    href: "/writing/career/project-stories/",
    category: "Career",
    date: "2026-06-01",
    description: "A strong project page explains the problem, decisions, process, and outcome.",
    descriptionKey: "article.projectStories.description",
  },
];

export const dataArticles = [
  projectArticles[0],
  {
    title: "Metrics Review System",
    titleKey: "article.metricsReview.title",
    subtitle: "Reporting / Operations / Decision Support",
    subtitleKey: "article.metricsReview.subtitle",
    href: "/projects/data/metrics-review/",
    category: "Data",
    date: "2026-05-30",
    description: "A lightweight reporting structure for reviewing recurring metrics, changes, and follow-up actions.",
    descriptionKey: "article.metricsReview.description",
  },
];

export const automationArticles = [
  projectArticles[1],
  {
    title: "API Handoff Checklist",
    titleKey: "article.apiChecklist.title",
    subtitle: "Python / API / Process Design",
    subtitleKey: "article.apiChecklist.subtitle",
    href: "/projects/automation/api-handoff-checklist/",
    category: "Automation",
    date: "2026-05-29",
    description: "A checklist-driven automation pattern for reducing missed handoff steps across systems.",
    descriptionKey: "article.apiChecklist.description",
  },
];

export const deploymentArticles = [
  writingArticles[0],
  writingArticles[1],
];

export const careerArticles = [
  writingArticles[2],
  {
    title: "Turning Daily Work into Portfolio Evidence",
    titleKey: "article.portfolioEvidence.title",
    subtitle: "Career / Documentation",
    subtitleKey: "article.portfolioEvidence.subtitle",
    href: "/writing/career/portfolio-evidence/",
    category: "Career",
    date: "2026-05-31",
    description: "A practical way to capture decisions, constraints, outcomes, and collaboration notes while work is still fresh.",
    descriptionKey: "article.portfolioEvidence.description",
  },
];

export const aboutArticles = [
  {
    title: "Contact",
    titleKey: "article.contact.title",
    subtitle: "GitHub / Projects / Writing",
    subtitleKey: "article.contact.subtitle",
    href: "/contact/",
    category: "About",
    date: "2026-05-27",
    description: "A simple place for contact links and future collaboration details.",
    descriptionKey: "article.contact.description",
  },
];

export const datedArticles = [
  ...writingArticles,
  projectArticles[0],
  projectArticles[1],
  dataArticles[1],
  automationArticles[1],
  careerArticles[1],
].filter((item) => item.date);

export const homeTimeline = datedArticles
  .toSorted((a, b) => new Date(b.date) - new Date(a.date))
  .map((item, index) => ({
    ...item,
    meta: `${item.category} / ${item.subtitle}`,
    visible: index < 3,
  }));
