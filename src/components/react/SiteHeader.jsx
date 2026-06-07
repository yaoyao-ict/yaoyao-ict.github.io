import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Segmented, Space } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  BookOutlined,
  CloseCircleOutlined,
  DownOutlined,
  FolderOutlined,
  MenuOutlined,
  MoonOutlined,
  RocketOutlined,
  SearchOutlined,
  SunOutlined,
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
    "button.clearSearch": "Clear search",
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
    "search.placeholder": "Search projects, writing, or skills",
  },
  zh: {
    "button.menu": "\u83dc\u5355",
    "button.clearSearch": "\u6e05\u7a7a\u641c\u7d22",
    "button.search": "\u641c\u7d22",
    "button.theme": "\u4e3b\u9898",
    "label.language": "\u8bed\u8a00",
    "nav.about": "\u5173\u4e8e",
    "nav.projects": "\u9879\u76ee",
    "nav.projects.all": "\u5168\u90e8\u9879\u76ee",
    "nav.projects.automation": "\u81ea\u52a8\u5316",
    "nav.projects.data": "\u6570\u636e\u770b\u677f",
    "nav.writing": "\u5199\u4f5c",
    "nav.writing.all": "\u5168\u90e8\u6587\u7ae0",
    "nav.writing.career": "\u804c\u4e1a\u6210\u957f",
    "nav.writing.deployment": "\u90e8\u7f72\u7b14\u8bb0",
    "search.placeholder": "\u641c\u7d22\u9879\u76ee\u3001\u6587\u7ae0\u6216\u6280\u80fd",
  },
};

function storedLanguage() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("language") || "en";
}

function storedTheme() {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("theme") || "light";
}

export default function SiteHeader({ navigation, home = false, currentPath = "/" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail?.lang || storedLanguage());
    const syncTheme = (event) => setTheme(event.detail?.theme || storedTheme());
    const syncSearch = () => setSearchValue(new URLSearchParams(window.location.search).get("q") || "");

    setLanguage(storedLanguage());
    setTheme(storedTheme());
    syncSearch();
    document.addEventListener("site-language-change", syncLanguage);
    document.addEventListener("site-theme-change", syncTheme);
    window.addEventListener("popstate", syncSearch);
    return () => {
      document.removeEventListener("site-language-change", syncLanguage);
      document.removeEventListener("site-theme-change", syncTheme);
      window.removeEventListener("popstate", syncSearch);
    };
  }, []);

  const t = (key, fallback) => text[language]?.[key] || text.en[key] || fallback || key;
  const selectedGroup = navigation.find((group) => {
    if (group.href) return currentPath.startsWith(group.href);
    return group.links?.some((link) => currentPath.startsWith(link.href));
  });

  const setSiteLanguage = (nextLanguage) => {
    document.dispatchEvent(new CustomEvent("site-set-language", { detail: { lang: nextLanguage } }));
  };

  const toggleSiteTheme = () => {
    document.dispatchEvent(new CustomEvent("site-set-theme", { detail: { theme: theme === "dark" ? "light" : "dark" } }));
  };

  const runSearch = (query = searchValue) => {
    const nextQuery = query.trim();
    const params = new URLSearchParams();
    if (nextQuery) params.set("q", nextQuery);
    const target = `/${params.toString() ? `?${params.toString()}` : ""}#latest`;

    if (window.location.pathname === "/") {
      window.history.pushState({}, "", target);
      document.dispatchEvent(new CustomEvent("site-search-query", { detail: { query: nextQuery } }));
      return;
    }

    window.location.assign(target);
  };

  const clearSearch = () => {
    setSearchValue("");

    if (window.location.pathname === "/") {
      window.history.pushState({}, "", "/#latest");
      document.dispatchEvent(new CustomEvent("site-search-query", { detail: { query: "" } }));
      return;
    }

    window.location.assign("/#latest");
  };

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
          htmlType="button"
          icon={<MenuOutlined />}
          aria-expanded={mobileOpen}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setMobileOpen((open) => !open);
          }}
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
          <Segmented
            className="antd-language-toggle"
            aria-label={t("label.language", "Language")}
            value={language}
            options={[
              { label: "EN", value: "en" },
              { label: "\u4e2d", value: "zh" },
            ]}
            onChange={setSiteLanguage}
          />
          <Button
            className="antd-theme-button"
            icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
            aria-label={t("button.theme", "Theme")}
            onClick={toggleSiteTheme}
          />
          <Input.Search
            className="antd-header-search"
            value={searchValue}
            placeholder={t("search.placeholder", "Search projects, writing, or skills")}
            enterButton={<SearchOutlined />}
            onChange={(event) => setSearchValue(event.target.value)}
            onSearch={runSearch}
            aria-label={t("button.search", "Search")}
          />
          <Button
            className="antd-search-clear"
            icon={<CloseCircleOutlined />}
            aria-label={t("button.clearSearch", "Clear search")}
            disabled={!searchValue}
            onClick={clearSearch}
          />
        </Space>
      </div>
    </header>
  );
}
