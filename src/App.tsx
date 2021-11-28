import React from "react";
import styles from "./app.module.less";
import { Home } from "./pages";
import { Header } from "./components";

import { request} from "./api/request";

export const App: React.FC = () => {

    request.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((data) =>console.log(data))

    fetch('https://jsonplaceholder.typicode.com/todos/1').then(console.log)
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
};
