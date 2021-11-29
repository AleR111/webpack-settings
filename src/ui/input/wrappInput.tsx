import React from "react";
import { Input } from "antd";
import { WrapFormProps } from "./interface";
import styles from "./wrappInput.module.less";

export const WrappInput: React.FC = () => {
  return (
    <Input className={styles.input}/>
  )
}

