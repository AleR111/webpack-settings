import * as React from "react";
import { IconButton } from "@mui/material";
import { DeleteForeverOutlined } from "@mui/icons-material";
import { styledIconButton } from "../styles";

export const DeleteButton = () => {
  return (
    <IconButton>
      <DeleteForeverOutlined sx={styledIconButton} />
    </IconButton>
  );
};
