import React, { useState } from "react";
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
  Popover,
} from "./components/ui-components";
import { Button } from "@mui/material";
// import { Timetable } from "./components";

export const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [content, setContent] = useState(null);
  const handleClick = (event) => {
    setContent(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
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
      <Button id="123" variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Button id="12v3" variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Button id="123sd" variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        content={content}
      />
      {/* <Timetable /> */}
    </div>
  );
};
