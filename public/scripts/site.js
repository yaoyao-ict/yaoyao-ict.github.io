const translations = {
  en: {
    "aria.home": "Home",
    "aria.mainNav": "Main navigation",
    "aria.siteTools": "Site tools",
    "article.apiChecklist.approach": "The checklist turns every handoff into a small workflow with clear inputs, confirmations, and review points.",
    "article.apiChecklist.context": "API handoffs often fail because ownership, dependencies, and validation steps are tracked in different places.",
    "article.apiChecklist.description": "A checklist-driven automation pattern for reducing missed handoff steps across systems.",
    "article.apiChecklist.outcome": "The result is a process that is easier to audit and less dependent on memory.",
    "article.apiChecklist.subtitle": "Python / API / Process Design",
    "article.apiChecklist.title": "API Handoff Checklist",
    "article.automationWorkflow.approach": "The automation should start with clear checkpoints, predictable logs, and small scripts that are easy to inspect before connecting larger services.",
    "article.automationWorkflow.context": "This workflow focuses on reducing repetitive handoffs across tools while keeping enough visibility for people to trust the process.",
    "article.automationWorkflow.description": "A workflow automation case study about replacing repetitive manual steps with reliable scripts and service integrations.",
    "article.automationWorkflow.outcome": "The goal is not just speed. It is fewer missed steps, less context switching, and a process that can be maintained after the first version ships.",
    "article.automationWorkflow.subtitle": "Python / Azure / API Integration",
    "article.automationWorkflow.title": "Automation Workflow",
    "article.githubPages.build": "Local changes are built with Astro so the generated HTML, CSS, and assets can be checked before publishing.",
    "article.githubPages.description": "How this site is built locally, committed to GitHub, and published from the gh-pages branch.",
    "article.githubPages.publish": "The published files are pushed to the gh-pages branch, and GitHub Pages serves that branch as the live website.",
    "article.githubPages.source": "The source code lives in the yaoyao-ict.github.io repository, which also gives the site a clean root GitHub Pages URL.",
    "article.githubPages.subtitle": "GitHub Pages / Automation",
    "article.githubPages.title": "Publishing a Static Site with GitHub Pages",
    "article.knowledgeBase.description": "A growing place for notes, links, writing, and reusable material.",
    "article.knowledgeBase.subtitle": "Content System / Search / UX",
    "article.knowledgeBase.title": "Personal Knowledge Base",
    "article.metricsReview.approach": "The system groups metrics by owner, cadence, and action status while keeping raw detail available when needed.",
    "article.metricsReview.context": "Recurring reviews need a consistent structure so changes and follow-ups do not disappear between meetings.",
    "article.metricsReview.description": "A lightweight reporting structure for reviewing recurring metrics, changes, and follow-up actions.",
    "article.metricsReview.outcome": "The page becomes a repeatable review surface rather than a one-off report.",
    "article.metricsReview.subtitle": "Reporting / Operations / Decision Support",
    "article.metricsReview.title": "Metrics Review System",
    "article.portfolioEvidence.capture": "The easiest time to collect useful evidence is while the work is still active and details are not lost.",
    "article.portfolioEvidence.description": "A practical way to capture decisions, constraints, outcomes, and collaboration notes while work is still fresh.",
    "article.portfolioEvidence.reuse": "The same notes can support a portfolio page, resume bullet, interview story, or internal summary.",
    "article.portfolioEvidence.shape": "Raw notes become stronger when they are organized around problem, constraints, decisions, and result.",
    "article.portfolioEvidence.subtitle": "Career / Documentation",
    "article.portfolioEvidence.title": "Turning Daily Work into Portfolio Evidence",
    "article.projectStories.decisions": "The strongest evidence usually comes from constraints, tradeoffs, and the reasoning behind important implementation choices.",
    "article.projectStories.description": "A strong project page explains the problem, decisions, process, and outcome.",
    "article.projectStories.problem": "A useful project story starts with the real problem and the people affected by it, not with a list of tools.",
    "article.projectStories.result": "The page should make the outcome concrete while still showing how the work could continue to improve.",
    "article.projectStories.subtitle": "Career / Portfolio Writing",
    "article.projectStories.title": "Writing Project Stories That Feel Like Real Work",
    "article.section.approach": "Approach",
    "article.section.build": "Build",
    "article.section.capture": "Capture",
    "article.section.context": "Context",
    "article.section.decisions": "Decisions",
    "article.section.maintenance": "Maintenance",
    "article.section.outcome": "Outcome",
    "article.section.problem": "Problem",
    "article.section.publish": "Publish",
    "article.section.publishing": "Publishing",
    "article.section.result": "Result",
    "article.section.reuse": "Reuse",
    "article.section.shape": "Shape",
    "article.section.source": "Source",
    "article.section.structure": "Structure",
    "article.smartDashboard.approach": "I would keep the first screen focused on comparison, trend, and risk signals, then move detailed tables into secondary sections.",
    "article.smartDashboard.context": "The dashboard is designed for recurring business reviews where people need a fast read on performance, exceptions, and next actions.",
    "article.smartDashboard.description": "A practical dashboard project focused on making key metrics easier to scan, compare, and act on.",
    "article.smartDashboard.outcome": "The result is a dashboard structure that helps users scan the same metrics consistently without reading a long report every time.",
    "article.smartDashboard.subtitle": "React / TypeScript / Data Visualization",
    "article.smartDashboard.title": "Smart Dashboard",
    "article.toc": "Table of Contents",
    "article.website.description": "Notes on turning a simple static page into a maintainable Astro site.",
    "article.website.maintenance": "Reusable components and translation keys make it easier to add future sections without rewriting each page by hand.",
    "article.website.publishing": "Astro builds the static files, GitHub stores the source code, and GitHub Pages publishes the generated site.",
    "article.website.structure": "The site is organized around top-level pages, category pages, and focused detail pages so the homepage does not need to carry everything.",
    "article.website.subtitle": "Astro / GitHub Pages / Design Systems",
    "article.website.title": "Building a Maintainable Personal Website",
    "button.close": "Close",
    "button.light": "Light",
    "button.menu": "Menu",
    "button.search": "Search",
    "button.theme": "Theme",
    "card.projects.automation.description": "Scripts, API integrations, process automation, and operational efficiency.",
    "card.projects.automation.title": "Automation Workflows",
    "card.projects.data.description": "Data visualization, reporting, monitoring, and business insights.",
    "card.projects.data.title": "Data Dashboards",
    "card.projects.product.description": "Turning complex requirements into clear product experiences.",
    "card.projects.product.title": "Product Experience",
    "card.writing.career.description": "Project storytelling, portfolio writing, collaboration, and long-term growth.",
    "card.writing.career.title": "Career Growth",
    "card.writing.deployment.description": "GitHub Pages, Azure, automated deployment, and website maintenance.",
    "card.writing.deployment.title": "Deployment Notes",
    "collection.automation.count": "2 Projects",
    "collection.career.count": "2 Essays",
    "collection.data.count": "2 Projects",
    "collection.deployment.count": "2 Notes",
    "detail.about.description": "I like to clarify complex problems, build reliable workflows, and keep improving experiences that users can feel.",
    "detail.about.title": "How I Work",
    "footer.copyright": "Copyright 2026 YaoYao. All rights reserved.",
    "footer.next": "Next",
    "footer.site": "Site",
    "footer.social": "Social",
    "home.about.description": "This section can hold a short introduction: who I am, what I work on, what I am good at, and what opportunities I am open to.",
    "home.about.title": "About Me",
    "home.contact.description": "Replace this with my email, LinkedIn, GitHub, or a form service later.",
    "home.contact.title": "Want to talk about a project, collaboration, or opportunity?",
    "home.cta.contact": "Contact me",
    "home.cta.projects": "View projects",
    "home.featuredProjects": "Featured Projects",
    "home.hero.lead": "I focus on turning complex problems into clear, reliable, and maintainable product experiences. This space can introduce my role, current interests, and the strengths I want people to remember.",
    "home.hero.title": "Hi, I'm YaoYao.",
    "home.project.automation.description": "A project about reducing repetitive work by connecting systems, scripting workflows, and making daily operations more reliable.",
    "home.project.automation.title": "Project Two: Automation Workflow",
    "home.project.data.description": "A concise summary of the problem, my role, and the outcome. This is the place for two or three focused lines rather than a long case study.",
    "home.project.data.title": "Project One: Smart Dashboard",
    "home.project.knowledge.description": "A hub for notes, writing, open-source work, or learning material that can grow over time.",
    "home.project.knowledge.title": "Project Three: Personal Knowledge Base",
    "home.recentWriting": "Recent Writing",
    "home.skills.title": "Skills",
    "home.writing.pages": "Publishing a static site with GitHub Pages",
    "home.writing.portfolio": "Writing project stories that feel like real work",
    "home.writing.website": "Building a maintainable personal website",
    "label.language": "Language",
    "link.readMore": "Read more",
    "nav.about": "About",
    "nav.about.contact": "Contact",
    "nav.about.me": "About Me",
    "nav.projects": "Projects",
    "nav.projects.all": "All Projects",
    "nav.projects.automation": "Automation",
    "nav.projects.data": "Data Dashboards",
    "nav.writing": "Writing",
    "nav.writing.all": "All Writing",
    "nav.writing.career": "Career Growth",
    "nav.writing.deployment": "Deployment Notes",
    "page.about.lead": "A fuller introduction can live here: background, experience, working style, and current focus.",
    "page.about.title": "About YaoYao",
    "page.contact.email": "Replace this with my real email address.",
    "page.contact.github": "View code, projects, and the website repository.",
    "page.contact.lead": "This page can hold email, GitHub, LinkedIn, or a form service later.",
    "page.contact.title": "Contact",
    "page.projects.automation.lead": "Projects related to Python, APIs, Azure, internal tools, and workflow automation.",
    "page.projects.automation.title": "Automation Projects",
    "page.projects.data.lead": "Projects around data visualization, reporting, monitoring, and decision support.",
    "page.projects.data.title": "Data Dashboards",
    "page.projects.lead": "Projects are organized by theme. The homepage highlights selected work, while each category has its own page.",
    "page.projects.title": "Project Index",
    "page.writing.career.lead": "Writing about portfolio work, project storytelling, collaboration, and reflection.",
    "page.writing.career.title": "Career Growth",
    "page.writing.deployment.lead": "Notes about building this site locally and publishing it with GitHub Pages.",
    "page.writing.deployment.title": "Deployment Notes",
    "page.writing.lead": "Notes and essays are grouped by topic. The homepage shows only the most recent pieces.",
    "page.writing.title": "Writing Index",
    "search.label": "Search the site",
    "search.placeholder": "Search projects, writing, or skills",
    "title.about": "About | YaoYao",
    "title.contact": "Contact | YaoYao",
    "title.home": "YaoYao",
    "title.projects": "Projects | YaoYao",
    "title.projects.automation": "Automation Projects | YaoYao",
    "title.projects.data": "Data Projects | YaoYao",
    "title.writing": "Writing | YaoYao",
    "title.writing.career": "Career Growth | YaoYao",
    "title.writing.deployment": "Deployment Notes | YaoYao",
  },
  zh: {
    "aria.home": "首页",
    "aria.mainNav": "主导航",
    "aria.siteTools": "网站工具",
    "article.apiChecklist.approach": "这个清单把每一次交接拆成小工作流，明确输入、确认步骤和复核点。",
    "article.apiChecklist.context": "API 交接经常出问题，是因为负责人、依赖项和验证步骤散落在不同地方。",
    "article.apiChecklist.description": "一个用清单驱动的自动化模式，用来减少跨系统交接时遗漏的步骤。",
    "article.apiChecklist.outcome": "结果是一个更容易审计、也更少依赖记忆的流程。",
    "article.apiChecklist.subtitle": "Python / API / 流程设计",
    "article.apiChecklist.title": "API 交接清单",
    "article.automationWorkflow.approach": "自动化应该从清晰的检查点、可预期的日志，以及容易检查的小脚本开始，再逐步连接更大的服务。",
    "article.automationWorkflow.context": "这个 workflow 关注的是减少工具之间的重复交接，同时保留足够的可见性，让使用者愿意信任它。",
    "article.automationWorkflow.description": "一个 workflow 自动化案例：用稳定的脚本和服务集成替代重复的人工步骤。",
    "article.automationWorkflow.outcome": "目标不只是更快，而是减少遗漏、降低上下文切换，并让流程在第一版之后也能维护。",
    "article.automationWorkflow.subtitle": "Python / Azure / API 集成",
    "article.automationWorkflow.title": "自动化 Workflow",
    "article.githubPages.build": "本地改动会先通过 Astro build 生成静态文件，这样可以在发布前检查 HTML、CSS 和资源。",
    "article.githubPages.description": "这个网站如何在本地构建、提交到 GitHub，并从 gh-pages 分支发布。",
    "article.githubPages.publish": "发布文件会推送到 gh-pages 分支，GitHub Pages 会把这个分支作为线上网站提供服务。",
    "article.githubPages.source": "源码放在 yaoyao-ict.github.io 仓库里，这也让网站拥有干净的 GitHub Pages 根地址。",
    "article.githubPages.subtitle": "GitHub Pages / 自动化",
    "article.githubPages.title": "用 GitHub Pages 发布静态网站",
    "article.knowledgeBase.description": "一个可以持续增长的地方，用来放笔记、链接、文章和可复用材料。",
    "article.knowledgeBase.subtitle": "内容系统 / Search / UX",
    "article.knowledgeBase.title": "个人知识库",
    "article.metricsReview.approach": "这个系统按负责人、节奏和 action 状态组织指标，同时在需要时保留原始细节。",
    "article.metricsReview.context": "周期性 review 需要稳定结构，否则变化和后续行动很容易在会议之间消失。",
    "article.metricsReview.description": "一个轻量的 reporting 结构，用来 review 周期性指标、变化和后续 action。",
    "article.metricsReview.outcome": "这个页面会变成可重复使用的 review 界面，而不是一次性报表。",
    "article.metricsReview.subtitle": "Reporting / 运营 / 决策支持",
    "article.metricsReview.title": "指标 Review 系统",
    "article.portfolioEvidence.capture": "最容易收集有效证据的时间，是工作还在进行、细节还没有丢失的时候。",
    "article.portfolioEvidence.description": "一种实用方法：在工作还新鲜时记录决策、限制、结果和协作信息。",
    "article.portfolioEvidence.reuse": "同一组笔记可以复用到作品集页面、简历 bullet、面试故事或内部总结里。",
    "article.portfolioEvidence.shape": "原始笔记围绕问题、限制、决策和结果重新整理后，会更有说服力。",
    "article.portfolioEvidence.subtitle": "职业发展 / Documentation",
    "article.portfolioEvidence.title": "把日常工作变成作品证据",
    "article.projectStories.decisions": "最有价值的证据通常来自限制条件、取舍，以及关键实现选择背后的理由。",
    "article.projectStories.description": "一个好的项目页面应该说明问题、决策、过程和结果。",
    "article.projectStories.problem": "有用的项目故事应该从真实问题和受影响的人开始，而不是从工具列表开始。",
    "article.projectStories.result": "页面需要把结果讲具体，同时也展示这个工作后续还能如何继续改进。",
    "article.projectStories.subtitle": "职业发展 / 作品集写作",
    "article.projectStories.title": "把项目故事写得像真实工作",
    "article.section.approach": "方法",
    "article.section.build": "构建",
    "article.section.capture": "记录",
    "article.section.context": "背景",
    "article.section.decisions": "决策",
    "article.section.maintenance": "维护",
    "article.section.outcome": "结果",
    "article.section.problem": "问题",
    "article.section.publish": "发布",
    "article.section.publishing": "发布",
    "article.section.result": "结果",
    "article.section.reuse": "复用",
    "article.section.shape": "整理",
    "article.section.source": "源码",
    "article.section.structure": "结构",
    "article.smartDashboard.approach": "我会让首屏聚焦在对比、趋势和风险信号上，把更细的表格放到后续区域。",
    "article.smartDashboard.context": "这个 dashboard 面向周期性的业务 review，需要让使用者快速看到表现、异常和下一步 action。",
    "article.smartDashboard.description": "一个实用的 dashboard 项目，重点是让关键指标更容易浏览、比较和行动。",
    "article.smartDashboard.outcome": "结果是一个稳定的 dashboard 结构，让用户不用每次都阅读长报告，也能持续检查同一组指标。",
    "article.smartDashboard.subtitle": "React / TypeScript / Data Visualization",
    "article.smartDashboard.title": "智能 Dashboard",
    "article.toc": "目录",
    "article.website.description": "把一个简单静态页面改造成可维护 Astro 网站的记录。",
    "article.website.maintenance": "复用组件和 translation key 能让以后新增页面更容易，不需要每页都重新手写。",
    "article.website.publishing": "Astro 负责生成静态文件，GitHub 存源码，GitHub Pages 发布生成后的网站。",
    "article.website.structure": "网站按顶层页面、分类页面和详情页面组织，这样首页不需要承载所有内容。",
    "article.website.subtitle": "Astro / GitHub Pages / Design Systems",
    "article.website.title": "搭建一个可长期维护的个人网站",
    "button.close": "关闭",
    "button.light": "浅色",
    "button.menu": "菜单",
    "button.search": "搜索",
    "button.theme": "主题",
    "card.projects.automation.description": "脚本、API 集成、流程自动化和运营效率。",
    "card.projects.automation.title": "自动化 Workflows",
    "card.projects.data.description": "数据可视化、报表、监控和业务洞察。",
    "card.projects.data.title": "数据 Dashboards",
    "card.projects.product.description": "把复杂需求整理成清晰的产品体验。",
    "card.projects.product.title": "产品体验",
    "card.writing.career.description": "项目表达、作品集、协作沟通和长期成长。",
    "card.writing.career.title": "职业成长",
    "card.writing.deployment.description": "GitHub Pages、Azure、自动部署和个人网站维护。",
    "card.writing.deployment.title": "部署笔记",
    "collection.automation.count": "2 个项目",
    "collection.career.count": "2 篇文章",
    "collection.data.count": "2 个项目",
    "collection.deployment.count": "2 篇笔记",
    "detail.about.description": "我喜欢把复杂问题拆清楚，建立可靠流程，并持续改进用户能真实感受到的体验。",
    "detail.about.title": "我的工作方式",
    "footer.copyright": "Copyright 2026 姚瑶. All rights reserved.",
    "footer.next": "下一步",
    "footer.site": "站点",
    "footer.social": "社交",
    "home.about.description": "这里可以放一段简短介绍：我是谁、在做什么、擅长什么，以及正在寻找什么机会。",
    "home.about.title": "关于我",
    "home.contact.description": "这里之后可以替换成我的邮箱、LinkedIn、GitHub，或者接入表单服务。",
    "home.contact.title": "想聊项目、合作或机会？",
    "home.cta.contact": "联系我",
    "home.cta.projects": "查看项目",
    "home.featuredProjects": "精选项目",
    "home.hero.lead": "我专注于把复杂问题拆成清晰、可靠、易维护的产品体验。这里可以介绍我的职业定位、当前关注方向，以及我希望别人第一眼记住的能力。",
    "home.hero.title": "你好，我是姚瑶。",
    "home.project.automation.description": "一个关于减少重复工作的项目，通过连接系统、编写脚本和优化流程，让日常操作更稳定。",
    "home.project.automation.title": "项目二：自动化 Workflow",
    "home.project.data.description": "用几句话说明这个项目解决了什么问题、我的职责是什么，以及它带来了什么结果。",
    "home.project.data.title": "项目一：智能 Dashboard",
    "home.project.knowledge.description": "一个用于聚合笔记、文章、开源项目或学习材料的入口，可以持续增长。",
    "home.project.knowledge.title": "项目三：个人知识库",
    "home.recentWriting": "最近文章",
    "home.skills.title": "技能",
    "home.writing.pages": "用 GitHub Pages 发布静态网站",
    "home.writing.portfolio": "把项目故事写得像真实工作",
    "home.writing.website": "搭建一个可长期维护的个人网站",
    "label.language": "语言",
    "link.readMore": "继续阅读",
    "nav.about": "关于",
    "nav.about.contact": "联系",
    "nav.about.me": "关于我",
    "nav.projects": "项目",
    "nav.projects.all": "全部项目",
    "nav.projects.automation": "自动化",
    "nav.projects.data": "数据 Dashboards",
    "nav.writing": "文章",
    "nav.writing.all": "全部文章",
    "nav.writing.career": "职业成长",
    "nav.writing.deployment": "部署笔记",
    "page.about.lead": "这里可以写更完整的个人介绍、经历、工作方式和正在关注的方向。",
    "page.about.title": "关于姚瑶",
    "page.contact.email": "替换成我的真实联系邮箱。",
    "page.contact.github": "查看代码、项目和网站仓库。",
    "page.contact.lead": "这里可以放邮箱、GitHub、LinkedIn，或者之后接入表单服务。",
    "page.contact.title": "联系我",
    "page.projects.automation.lead": "和 Python、API、Azure、内部工具和流程自动化相关的项目。",
    "page.projects.automation.title": "自动化项目",
    "page.projects.data.lead": "和数据可视化、报表、监控和决策支持相关的项目。",
    "page.projects.data.title": "数据 Dashboards",
    "page.projects.lead": "项目会按主题管理。首页只展示精选内容，完整内容放在独立页面里。",
    "page.projects.title": "项目索引",
    "page.writing.career.lead": "关于作品集、项目表达、协作沟通和职业复盘的文章。",
    "page.writing.career.title": "职业成长",
    "page.writing.deployment.lead": "记录这个网站从本地项目到 GitHub Pages 的搭建过程。",
    "page.writing.deployment.title": "部署笔记",
    "page.writing.lead": "把笔记和文章按主题归档，首页只显示最近几篇。",
    "page.writing.title": "文章索引",
    "search.label": "搜索站内内容",
    "search.placeholder": "搜索项目、文章或技能",
    "title.about": "关于 | 姚瑶",
    "title.contact": "联系 | 姚瑶",
    "title.home": "姚瑶",
    "title.projects": "项目 | 姚瑶",
    "title.projects.automation": "自动化项目 | 姚瑶",
    "title.projects.data": "数据项目 | 姚瑶",
    "title.writing": "文章 | 姚瑶",
    "title.writing.career": "职业成长 | 姚瑶",
    "title.writing.deployment": "部署笔记 | 姚瑶",
  },
};

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
const searchDialog = document.querySelector("[data-search-dialog]");
const searchButton = document.querySelector("[data-open-search]");
const themeButton = document.querySelector("[data-theme]");
const menuButtons = document.querySelectorAll(".nav-menu-trigger");
const languageTrigger = document.querySelector("[data-language-trigger]");
const languageOptions = document.querySelectorAll("[data-language-option]");

const getLanguage = () => localStorage.getItem("language") || "en";
const getTheme = () => localStorage.getItem("theme") || "light";
const getText = (key, lang = getLanguage()) => translations[lang]?.[key] || translations.en[key] || "";

function closeMenus() {
  document.querySelectorAll(".nav-menu.open").forEach((menu) => {
    menu.classList.remove("open");
    menu.querySelector(".nav-menu-trigger")?.setAttribute("aria-expanded", "false");
  });
}

function updateThemeButton() {
  if (!themeButton) return;
  const key = document.body.classList.contains("dark") ? "button.light" : "button.theme";
  const value = getText(key);
  themeButton.textContent = value;
  themeButton.setAttribute("aria-label", value);
}

function applyTheme(theme, animate = false) {
  if (animate) {
    document.body.classList.add("theme-changing");
    window.setTimeout(() => document.body.classList.remove("theme-changing"), 700);
  }

  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  updateThemeButton();
}

function applyLanguage(lang) {
  const nextLang = translations[lang] ? lang : "en";
  document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
  localStorage.setItem("language", nextLang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getText(element.dataset.i18n, nextLang);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getText(element.dataset.i18nPlaceholder, nextLang);
    if (value) element.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = getText(element.dataset.i18nAria, nextLang);
    if (value) element.setAttribute("aria-label", value);
  });

  const titleKey = document.body.dataset.titleKey;
  if (titleKey) document.title = getText(titleKey, nextLang);

  languageOptions.forEach((button) => {
    button.classList.toggle("active", button.dataset.languageOption === nextLang);
  });

  if (languageTrigger) {
    languageTrigger.textContent = getText("label.language", nextLang);
  }

  updateThemeButton();
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

menuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = button.closest(".nav-menu");
    const isOpen = menu.classList.contains("open");

    closeMenus();

    if (!isOpen) {
      menu.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", closeMenus);

searchButton?.addEventListener("click", () => {
  if (typeof searchDialog.showModal === "function") {
    searchDialog.showModal();
  }
});

themeButton?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme, true);
});

languageOptions.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    applyLanguage(button.dataset.languageOption);
    closeMenus();
  });
});

applyTheme(getTheme());
applyLanguage(getLanguage());
