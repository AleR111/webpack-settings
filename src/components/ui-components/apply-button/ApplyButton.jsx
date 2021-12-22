import * as React from "react";
import { Button } from "@mui/material";
import { styledApplyButton } from "../styles";

export const ApplyButton = ({ onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      disableElevation
      sx={styledApplyButton}
    >
      {children}
    </Button>
  );
};
