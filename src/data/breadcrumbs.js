const home = { title: "Home", titleKey: "aria.home", href: "/" };

const crumbs = {
  "/about/": [{ title: "About", titleKey: "nav.about" }],
  "/contact/": [{ title: "About", titleKey: "nav.about", href: "/about/" }, { title: "Contact", titleKey: "article.contact.title" }],
  "/projects/": [{ title: "Projects", titleKey: "nav.projects" }],
  "/projects/automation/": [
    { title: "Projects", titleKey: "nav.projects", href: "/projects/" },
    { title: "Automation", titleKey: "nav.projects.automation" },
  ],
  "/projects/automation/api-handoff-checklist/": [
    { title: "Projects", titleKey: "nav.projects", href: "/projects/" },
    { title: "Automation", titleKey: "nav.projects.automation", href: "/projects/automation/" },
    { title: "API Handoff Checklist", titleKey: "article.apiChecklist.title" },
  ],
  "/projects/automation/workflow-automation/": [
    { title: "Projects", titleKey: "nav.projects", href: "/projects/" },
    { title: "Automation", titleKey: "nav.projects.automation", href: "/projects/automation/" },
    { title: "Automation Workflow", titleKey: "article.automationWorkflow.title" },
  ],
  "/projects/data/": [
    { title: "Projects", titleKey: "nav.projects", href: "/projects/" },
    { title: "Data Dashboards", titleKey: "nav.projects.data" },
  ],
  "/projects/data/metrics-review/": [
    { title: "Projects", titleKey: "nav.projects", href: "/projects/" },
    { title: "Data Dashboards", titleKey: "nav.projects.data", href: "/projects/data/" },
    { title: "Metrics Review System", titleKey: "article.metricsReview.title" },
  ],
  "/projects/data/smart-dashboard/": [
    { title: "Projects", titleKey: "nav.projects", href: "/projects/" },
    { title: "Data Dashboards", titleKey: "nav.projects.data", href: "/projects/data/" },
    { title: "Smart Dashboard", titleKey: "article.smartDashboard.title" },
  ],
  "/writing/": [{ title: "Writing", titleKey: "nav.writing" }],
  "/writing/career/": [
    { title: "Writing", titleKey: "nav.writing", href: "/writing/" },
    { title: "Career Growth", titleKey: "nav.writing.career" },
  ],
  "/writing/career/portfolio-evidence/": [
    { title: "Writing", titleKey: "nav.writing", href: "/writing/" },
    { title: "Career Growth", titleKey: "nav.writing.career", href: "/writing/career/" },
    { title: "Turning Daily Work into Portfolio Evidence", titleKey: "article.portfolioEvidence.title" },
  ],
  "/writing/career/project-stories/": [
    { title: "Writing", titleKey: "nav.writing", href: "/writing/" },
    { title: "Career Growth", titleKey: "nav.writing.career", href: "/writing/career/" },
    { title: "Writing Project Stories That Feel Like Real Work", titleKey: "article.projectStories.title" },
  ],
  "/writing/deployment/": [
    { title: "Writing", titleKey: "nav.writing", href: "/writing/" },
    { title: "Deployment Notes", titleKey: "nav.writing.deployment" },
  ],
  "/writing/deployment/github-pages/": [
    { title: "Writing", titleKey: "nav.writing", href: "/writing/" },
    { title: "Deployment Notes", titleKey: "nav.writing.deployment", href: "/writing/deployment/" },
    { title: "Publishing a Static Site with GitHub Pages", titleKey: "article.githubPages.title" },
  ],
  "/writing/deployment/personal-website/": [
    { title: "Writing", titleKey: "nav.writing", href: "/writing/" },
    { title: "Deployment Notes", titleKey: "nav.writing.deployment", href: "/writing/deployment/" },
    { title: "Building a Maintainable Personal Website", titleKey: "article.website.title" },
  ],
};

export function getBreadcrumbs(pathname) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return [home, ...(crumbs[normalized] || [])];
}
