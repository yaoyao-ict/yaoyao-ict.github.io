import React, { useEffect, useMemo, useState } from "react";
import { Button, Dropdown, Space } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  BookOutlined,
  DownOutlined,
  FolderOutlined,
  GlobalOutlined,
  MenuOutlined,
  MoonOutlined,
  RocketOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const iconMap = {
  book: <BookOutlined />,
  chart: <BarChartOutlined />,
  folder: <FolderOutlined />,
  grid: <AppstoreOutlined />,
  pen: <BookOutlined />,
  rocket: <RocketOutlined />,
  user: <UserOutlined />,
  zap: <ThunderboltOutlined />,
};

const text = {
  en: {
    "button.menu": "Menu",
    "button.search": "Search",
    "button.theme": "Theme",
    "label.language": "Language",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.projects.all": "All Projects",
    "nav.projects.automation": "Automation",
    "nav.projects.data": "Data Dashboards",
    "nav.writing": "Writing",
    "nav.writing.all": "All Writing",
    "nav.writing.career": "Career Growth",
    "nav.writing.deployment": "Deployment Notes",
  },
  zh: {
    "button.menu": "菜单",
    "button.search": "搜索",
    "button.theme": "主题",
    "label.language": "语言",
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.projects.all": "全部项目",
    "nav.projects.automation": "自动化",
    "nav.projects.data": "数据看板",
    "nav.writing": "写作",
    "nav.writing.all": "全部文章",
    "nav.writing.career": "职业成长",
    "nav.writing.deployment": "部署笔记",
  },
};

function storedLanguage() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("language") || "en";
}

export default function SiteHeader({ navigation, home = false, currentPath = "/" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail?.lang || storedLanguage());
    document.addEventListener("site-language-change", syncLanguage);
    return () => document.removeEventListener("site-language-change", syncLanguage);
  }, []);

  const t = (key, fallback) => text[language]?.[key] || text.en[key] || fallback || key;
  const selectedGroup = navigation.find((group) => {
    if (group.href) return currentPath.startsWith(group.href);
    return group.links?.some((link) => currentPath.startsWith(link.href));
  });

  const languageItems = useMemo(() => [
    { key: "en", label: <button className="antd-menu-button" type="button" data-language-option="en">English</button> },
    { key: "zh", label: <button className="antd-menu-button" type="button" data-language-option="zh">中文</button> },
  ], []);

  return (
    <header className={`antd-site-header ${home ? "home" : "compact"}`}>
      <div className="antd-header-inner">
        <a className="antd-brand" href="/" aria-label="Home">
          <span>Yao</span>
          <span className="antd-brand-mark">W</span>
          <span>Yao</span>
        </a>

        <Button
          className="antd-mobile-toggle"
          icon={<MenuOutlined />}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {t("button.menu", "Menu")}
        </Button>

        <nav className={`antd-main-nav ${mobileOpen ? "open" : ""}`} aria-label="Main navigation">
          {navigation.map((group) => {
            if (!group.links) {
              return (
                <a key={group.key} className={`antd-nav-link ${selectedGroup?.key === group.key ? "active" : ""}`} href={group.href}>
                  {iconMap[group.icon]}
                  <span>{t(group.key, group.label)}</span>
                </a>
              );
            }

            const items = group.links.map((link) => ({
              key: link.href,
              icon: iconMap[link.icon],
              label: <a href={link.href}>{t(link.key, link.label)}</a>,
            }));

            return (
              <Dropdown key={group.key} menu={{ items, selectable: true, selectedKeys: [currentPath] }} trigger={["hover", "click"]} placement="bottom" arrow={{ pointAtCenter: true }}>
                <button type="button" className={`antd-nav-trigger ${selectedGroup?.key === group.key ? "active" : ""}`}>
                  <Space size={7}>
                    {iconMap[group.icon]}
                    <span>{t(group.key, group.label)}</span>
                    <DownOutlined className="antd-caret" />
                  </Space>
                </button>
              </Dropdown>
            );
          })}
        </nav>

        <Space className="antd-header-tools" size={8}>
          <Dropdown menu={{ items: languageItems }} trigger={["click"]} placement="bottomRight" arrow={{ pointAtCenter: true }}>
            <Button icon={<GlobalOutlined />} data-language-trigger>
              <span data-language-label>{t("label.language", "Language")}</span>
            </Button>
          </Dropdown>
          <Button icon={<SearchOutlined />} data-open-search aria-label={t("button.search", "Search")}>
            {t("button.search", "Search")}
          </Button>
          <Button icon={<MoonOutlined />} data-theme aria-label={t("button.theme", "Theme")}>
            <span data-theme-label>{t("button.theme", "Theme")}</span>
          </Button>
        </Space>
      </div>
    </header>
  );
}
