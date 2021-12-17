import * as React from "react";
import { IconButton } from "@mui/material";
import { DeleteForeverOutlined } from "@mui/icons-material";
import styles from './deleteButton.module.less'

export const DeleteButton = () => {
  return (
    <IconButton>
      <DeleteForeverOutlined className={styles.button} />
    </IconButton>
  );
}
