import * as React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const inputColor = "#CCCCCC";

const StyledTextField = styled((props) => <TextField {...props} />)({
  "& label.Mui-focused": {
    color: inputColor,
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: `1px solid ${inputColor}`,
    },
  },
});

export const Input = (props) => {
  return <StyledTextField {...props} fullWidth />;
};
