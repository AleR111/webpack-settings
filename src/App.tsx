import React from "react";
import "./app.less";
import { Home } from "./pages";
import { Header } from "./components";

export const App: React.FC = () => {
  return (
    <div className={"container"}>
      <Header />
      <Home />
    </div>
  );
};
