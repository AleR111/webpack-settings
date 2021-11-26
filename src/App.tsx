import React from "react";
import styles from "./app.module.less";
import { Home } from "./pages";
import { Header } from "./components";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
};
