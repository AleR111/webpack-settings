import * as React from "react";
import { TextField } from "@mui/material";
import { styledTextField } from "../styles";

export const Input = (props) => {
  return <TextField sx={styledTextField} fullWidth {...props} />;
};
