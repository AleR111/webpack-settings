import React from "react";
import { Form } from "antd";
import { WrapFormProps } from "./interface";
import {FormItemProps} from "antd/lib/form";
import styles from "./wrappForm.module.less";

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

export const FormItem: React.FC<FormItemProps> = ({label, name, rules, children}) => {
  return (
    <Form.Item
    className={styles.formItem}
      label={label}
      name={name}
      rules={rules}
    >
      {children}
    </Form.Item>
  );
};
