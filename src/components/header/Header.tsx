import React from "react";
import "antd/dist/antd.css";
import "./header.less";
import { PageHeader, Button } from "antd";

export const Header = () => {
  const headerButtons = ["home", "about"];

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        className={"header"}
        title="name page"
        extra={headerButtons.map((el) => (
          <Button key={el}>{el}</Button>
        ))}
      />
    </div>
  );
};
