import * as React from "react";
import { Button } from "@mui/material";
import styles from "./applyButton.module.less";

export const ApplyButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      className={styles.button}
      variant="contained"
      disableElevation
      sx={{ textTransform: "none" }}
    >
      {text}
    </Button>
  );
};
