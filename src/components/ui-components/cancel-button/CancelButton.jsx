import * as React from "react";
import { Button } from "@mui/material";
import { styledCancelButton } from "../styles";

export const CancelButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} sx={styledCancelButton}>
      {children}
    </Button>
  );
};
