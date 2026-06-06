import React, { useEffect, useState } from "react";
import { Button } from "antd";

function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem("language") || "en";
}

const text = {
  en: {
    more: "Show more",
  },
  zh: {
    more: "查看更多",
  },
};

export default function ShowMoreButton() {
  const [language, setLanguage] = useState("en");
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const syncLanguage = (event) => setLanguage(event.detail?.lang || getStoredLanguage());
    const syncTimeline = (event) => setHasMore(Boolean(event.detail?.hasMore));

    setLanguage(getStoredLanguage());
    document.addEventListener("site-language-change", syncLanguage);
    document.addEventListener("site-timeline-status", syncTimeline);

    return () => {
      document.removeEventListener("site-language-change", syncLanguage);
      document.removeEventListener("site-timeline-status", syncTimeline);
    };
  }, []);

  const showMore = () => {
    document.dispatchEvent(new CustomEvent("site-show-more-timeline"));
  };

  return (
    <Button className="show-more" type="primary" size="large" onClick={showMore} data-show-more hidden={!hasMore}>
      {text[language]?.more || text.en.more}
    </Button>
  );
}
