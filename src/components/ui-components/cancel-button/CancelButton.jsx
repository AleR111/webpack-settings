import * as React from "react";
import { Button } from "@mui/material";
import styles from "./cancelButton.module.less";

export const CancelButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      className={styles.button}
      color="inherit"
      variant="outlined"
      sx={{ textTransform: "none" }}
    >
      {text}
    </Button>
  );
};
