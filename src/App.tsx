import React from "react";
import styles from "./app.module.less";
import { Home } from "./pages";
import { Header } from "./components";
import { requests } from "./store/api";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
};
