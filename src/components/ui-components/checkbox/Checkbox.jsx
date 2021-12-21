import * as React from "react";
import { Checkbox as CheckboxUI } from "@mui/material";

export const Checkbox = (props) => {
  return (
    <CheckboxUI
      {...props}
      disableRipple
      sx={{
        "&.Mui-checked": {
          color: "#FF630E",
        },
      }}
    />
  );
};
