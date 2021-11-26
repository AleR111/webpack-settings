import React from "react";
import styles from "./header.module.less";
import { PageHeader, Button } from "antd";

export const Header: React.FC = () => {
  const headerButtons: string[] = ["home", "about"];

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        className={styles.header}
        title="name page"
        extra={headerButtons.map((el) => (
          <Button key={el}>{el}</Button>
        ))}
      />
    </div>
  );
};
