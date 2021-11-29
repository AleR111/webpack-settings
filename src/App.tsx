import React from "react";
import styles from "./app.module.less";
import { Home } from "./pages";
import { Header } from "./components";
import { WrappForm, FormItem, WrappInput } from "./ui";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WrappForm onFinish={() => console.log(1231)}>
        <FormItem
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <WrappInput />
        </FormItem>
      </WrappForm>
      <Home />
    </div>
  );
};
