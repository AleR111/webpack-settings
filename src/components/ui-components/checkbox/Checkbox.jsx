import * as React from "react";
import { Checkbox as CheckboxUI } from "@mui/material";
import { styledCheckbox } from "../styles";

export const Checkbox = (props) => {
  return <CheckboxUI {...props} disableRipple sx={styledCheckbox} />;
};
