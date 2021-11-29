import React from "react";
import styles from "./app.module.less";
import { Home } from "./pages";
import { Header } from "./components";
import { WrappForm } from "./ui/form/wrappForm";
import { Form, Input, Button, Checkbox } from "antd";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WrappForm onFinish={() => console.log(1231)}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </WrappForm>
      <Home />
    </div>
  );
};
