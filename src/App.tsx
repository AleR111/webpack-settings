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
  Item,
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
          onePanel={<Item content={"lolololo"} />}
          twoPanel={<Item content={"dfbdf"} />}
        />
      </div>

      {/* <Timetable /> */}
    </div>
  );
};
