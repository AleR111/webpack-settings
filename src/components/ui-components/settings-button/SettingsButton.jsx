import * as React from "react";
import { IconButton } from "@mui/material";
import { SettingsOutlined } from "@mui/icons-material";
import styles from './settingsButton.module.less'

export const SettingsButton = () => {
  return (
    <IconButton>
      <SettingsOutlined className={styles.button} />
    </IconButton>
  );
}
