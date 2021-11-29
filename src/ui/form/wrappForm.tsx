import React from "react";
import "antd/dist/antd.css";
import { Form } from "antd";
import { ColProps } from "antd/lib/grid";
import styles from "./wrappForm.module.less";

export type FinishCallback = (values: any) => void;

export interface WrapFormProps {
  name?: string;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  initialValues?: Record<string, any>;
  onFinish?: FinishCallback;
  onFinishFailed?: FinishCallback;
  autoComplete?: string | undefined;
  children: React.ReactNode;
}

export const WrappForm: React.FC<WrapFormProps> = ({
  name,
  labelCol,
  wrapperCol,
  initialValues,
  onFinish,
  onFinishFailed,
  autoComplete,
  children,
}) => {
  return (
    <Form
      className={styles.form}
      name={name}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete={autoComplete}
    >
      {children}
    </Form>
  );
};
