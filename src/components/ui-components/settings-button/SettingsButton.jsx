import * as React from "react";
import { IconButton } from "@mui/material";
import { SettingsOutlined } from "@mui/icons-material";
import { styledIconButton } from "../styles";

export const SettingsButton = () => {
  return (
    <IconButton>
      <SettingsOutlined sx={styledIconButton} />
    </IconButton>
  );
};
