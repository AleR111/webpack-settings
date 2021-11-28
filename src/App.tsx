import React from "react";
import styles from "./app.module.less";
import { Home } from "./pages";
import { Header } from "./components";
import { requests } from "./store/api";

export const App: React.FC = () => {
  requests.get('https://jsonplaceholder.typicode.com/todos/1').then(console.log).catch(e => console.log('asdsadsadsad', e))
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
};
