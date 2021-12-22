import * as React from "react";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { styledAddButton } from "../styles";

export const AddButton = (props) => {
  return (
    <IconButton {...props}>
      <Add sx={styledAddButton} />
    </IconButton>
  );
};
