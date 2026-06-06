import React from "react";
import { Breadcrumb, Typography } from "antd";

const { Paragraph, Title } = Typography;

function crumbTitle(crumb) {
  const label = <span data-i18n={crumb.titleKey}>{crumb.title}</span>;
  return crumb.href ? <a href={crumb.href}>{label}</a> : label;
}

export default function AntPageHeader({ eyebrow, title, lead, titleKey, leadKey, breadcrumbs = [] }) {
  const items = breadcrumbs.map((crumb) => ({
    key: `${crumb.href || ""}${crumb.titleKey}`,
    title: crumbTitle(crumb),
  }));

  return (
    <header className="antd-page-header">
      {items.length > 1 && <Breadcrumb className="antd-breadcrumb" items={items} />}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Title className="antd-page-title" level={1} data-i18n={titleKey}>{title}</Title>
      {lead && <Paragraph className="antd-page-lead" data-i18n={leadKey}>{lead}</Paragraph>}
    </header>
  );
}
