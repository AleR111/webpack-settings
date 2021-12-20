import React from "react";
import styles from "./app.module.less";
import {
  AddButton,
  SettingsButton,
  DeleteButton,
  CloseButton,
  ApplyButton,
  CancelButton,
  Tabs,
} from "./components/ui-components";
// import { Timetable } from "./components";

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <AddButton />
      <SettingsButton />
      <DeleteButton />
      <CloseButton />
      <ApplyButton />
      <CancelButton />
      <div style={{ width: "400px" }}>
        <Tabs
          oneName="one"
          twoName="two"
          onePanel="1 panel"
          twoPanel="2 panel"
        />
      </div>

      {/* <Timetable /> */}
    </div>
  );
};
