import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select as SelectUI,
} from "@mui/material";
import { styledFormControl } from "../styles";

export const Select = ({ itemList, label, value, onChange }) => {
  return (
    <FormControl sx={styledFormControl} fullWidth>
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
    </FormControl>
  );
};
