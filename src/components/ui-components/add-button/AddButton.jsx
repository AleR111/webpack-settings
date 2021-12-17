import * as React from "react";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import styles from './addButton.module.less'

export const AddButton = () => {
  return (
    <IconButton>
      <Add className={styles.button} />
    </IconButton>
  );
}
