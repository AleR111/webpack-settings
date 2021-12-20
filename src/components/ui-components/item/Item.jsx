import React from "react";
import styles from "./item.module.less";

export const Item = ({ content }) => {
  return <div className={styles.block}>{content}</div>;
};
