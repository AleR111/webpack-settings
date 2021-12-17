import * as React from "react";
import { Button } from "@mui/material";
import styles from "./cancelButton.module.less";

export const CancelButton = () => {
  return (
    <Button className={styles.button} color="inherit" variant="outlined">
      Отменить
    </Button>
  );
};
