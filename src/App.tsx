import React from "react";
import styles from "./app.module.less";
import { AddButton, SettingsButton, DeleteButton, CloseButton, ApplyButton, CancelButton } from "./components/ui-components";
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
      {/* <Timetable /> */}
    </div>
  );
};
