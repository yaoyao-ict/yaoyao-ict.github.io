import React, { useEffect, useRef, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Space, Tag, Timeline, Typography } from "antd";

const { Paragraph, Text, Title } = Typography;
const INITIAL_VISIBLE_COUNT = 3;
const LOAD_STEP = 3;

function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("language") || "en";
}

function formatDate(date, language) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : "en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(year, month - 1, day));
}

export default function HomeTimeline({ items = [] }) {
  const timelineRef = useRef(null);
  const [language, setLanguage] = useState("en");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail?.lang || getStoredLanguage());
    const showMore = () => {
      setVisibleCount((currentCount) => Math.min(currentCount + LOAD_STEP, items.length));
    };

    setLanguage(getStoredLanguage());
    document.addEventListener("site-language-change", syncLanguage);
    document.addEventListener("site-show-more-timeline", showMore);
    document.dispatchEvent(new CustomEvent("site-set-language", { detail: { lang: getStoredLanguage() } }));
    window.setTimeout(() => {
      const query = new URLSearchParams(window.location.search).get("q") || "";
      document.dispatchEvent(new CustomEvent("site-search-query", { detail: { query } }));
    }, 0);

    return () => {
      document.removeEventListener("site-language-change", syncLanguage);
      document.removeEventListener("site-show-more-timeline", showMore);
    };
  }, [items.length]);

  useEffect(() => {
    document.dispatchEvent(new CustomEvent("site-timeline-status", {
      detail: { hasMore: visibleCount < items.length },
    }));
  }, [items.length, visibleCount]);

  useEffect(() => {
    const root = timelineRef.current;
    const list = root?.matches?.("[data-timeline-list]")
      ? root
      : root?.querySelector?.("[data-timeline-list]");
    if (!list) return undefined;

    const measureLine = () => {
      const listRect = list.getBoundingClientRect();
      const feed = list.closest(".home-feed");
      const firstCard = list.querySelector(".timeline-item:not(.is-hidden):not(.is-search-hidden) .timeline-card");
      if (feed && firstCard) {
        const feedRect = feed.getBoundingClientRect();
        const cardRect = firstCard.getBoundingClientRect();
        feed.style.setProperty("--timeline-card-left", `${cardRect.left - feedRect.left}px`);
      }

      const visibleDots = [...list.querySelectorAll(".timeline-item:not(.is-hidden):not(.is-search-hidden) .ant-timeline-item-icon")]
        .filter((dot) => dot.offsetParent !== null);

      if (visibleDots.length < 2) {
        list.style.setProperty("--timeline-line-top", "0px");
        list.style.setProperty("--timeline-line-bottom", "0px");
        list.classList.add("has-single-dot");
        return;
      }

      list.classList.remove("has-single-dot");
      const firstDot = visibleDots[0].getBoundingClientRect();
      const lastDot = visibleDots[visibleDots.length - 1].getBoundingClientRect();
      const firstCenter = firstDot.top - listRect.top + firstDot.height / 2;
      const lastCenter = lastDot.top - listRect.top + lastDot.height / 2;
      list.style.setProperty("--timeline-line-top", `${firstCenter}px`);
      list.style.setProperty("--timeline-line-bottom", `${lastCenter}px`);
    };

    const frameMeasure = () => window.requestAnimationFrame(measureLine);
    const observer = new MutationObserver(frameMeasure);
    const resizeObserver = new ResizeObserver(frameMeasure);
    observer.observe(list, { attributes: true, attributeFilter: ["class"], subtree: true });
    resizeObserver.observe(list);
    window.addEventListener("resize", frameMeasure);
    frameMeasure();

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("resize", frameMeasure);
    };
  }, [items.length, visibleCount, language]);

  const timelineItems = items.map((item, index) => ({
    className: [
      "timeline-item",
      index >= visibleCount && "is-hidden",
      index === visibleCount - 1 && "is-last-visible",
    ].filter(Boolean).join(" "),
    children: (
      <Card
        className="timeline-card"
        size="small"
        hoverable
        data-search-text={`${item.title} ${item.description} ${item.meta} ${item.date}`}
      >
        <Space className="timeline-card-meta" size={8} wrap>
          <Tag color="blue">{item.category}</Tag>
          <Text type="secondary">
            <time dateTime={item.date}>{formatDate(item.date, language)}</time>
          </Text>
        </Space>
        <Title className="timeline-card-title" level={3}>
          <a href={item.href} data-i18n={item.titleKey}>{item.title}</a>
        </Title>
        <Paragraph className="timeline-card-description" data-i18n={item.descriptionKey}>
          {item.description}
        </Paragraph>
        <Button className="timeline-card-link" href={item.href} type="link" icon={<ArrowRightOutlined />} iconPosition="end">
          <span data-i18n="link.readMore">Read more</span>
        </Button>
      </Card>
    ),
  }));

  return (
    <div ref={timelineRef} className="timeline-measure">
      <Timeline className="timeline-list antd-home-timeline" data-timeline-list items={timelineItems} />
    </div>
  );
}
