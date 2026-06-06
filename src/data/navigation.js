export const navigation = [
  {
    label: "Projects",
    key: "nav.projects",
    links: [
      { label: "All Projects", key: "nav.projects.all", href: "/projects/" },
      { label: "Automation", key: "nav.projects.automation", href: "/projects/automation/" },
      { label: "Data Dashboards", key: "nav.projects.data", href: "/projects/data/" },
    ],
  },
  {
    label: "Writing",
    key: "nav.writing",
    links: [
      { label: "All Writing", key: "nav.writing.all", href: "/writing/" },
      { label: "Deployment Notes", key: "nav.writing.deployment", href: "/writing/deployment/" },
      { label: "Career Growth", key: "nav.writing.career", href: "/writing/career/" },
    ],
  },
  {
    label: "About",
    key: "nav.about",
    links: [
      { label: "About Me", key: "nav.about.me", href: "/about/" },
      { label: "Contact", key: "nav.about.contact", href: "/contact/" },
    ],
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

export const projectArticles = [
  {
    title: "Smart Dashboard",
    titleKey: "article.smartDashboard.title",
    subtitle: "React / TypeScript / Data Visualization",
    subtitleKey: "article.smartDashboard.subtitle",
    href: "/projects/data/smart-dashboard/",
    category: "Data",
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
    description: "A practical way to capture decisions, constraints, outcomes, and collaboration notes while work is still fresh.",
    descriptionKey: "article.portfolioEvidence.description",
  },
];
