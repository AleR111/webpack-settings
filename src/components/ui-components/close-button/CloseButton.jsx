import * as React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import styles from './closeButton.module.less'

export const CloseButton = () => {
  return (
    <IconButton>
      <Close className={styles.button} />
    </IconButton>
  );
}
