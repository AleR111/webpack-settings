import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select as SelectUI,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const inputColor = "#CCCCCC";

const StyledFormControl = styled((props) => <FormControl {...props} />)({
  "& label.Mui-focused": {
    color: inputColor,
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: `1px solid ${inputColor}`,
    },
  },
});

export const Select = ({ itemList, label, value, onChange }) => {
  return (
    <StyledFormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <SelectUI
        labelId="select-label"
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>не выбрано</em>
        </MenuItem>
        {itemList.map((el, index) => {
          return (
            <MenuItem key={index} value={el}>
              {el}
            </MenuItem>
          );
        })}
      </SelectUI>
    </StyledFormControl>
  );
};
