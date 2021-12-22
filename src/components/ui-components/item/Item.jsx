import React from "react";
import styles from "./item.module.less";

export const Item = ({ children }) => {
  return <div className={styles.block}>{children}</div>;
};
