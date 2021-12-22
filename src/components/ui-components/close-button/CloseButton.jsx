import * as React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styledIconButton } from "../styles";

export const CloseButton = () => {
  return (
    <IconButton>
      <Close sx={styledIconButton} />
    </IconButton>
  );
};
