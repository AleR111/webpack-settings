import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 256,
  height: 40,
  border: "1px solid #CCCCCC",
  boxShadow: "none",
  background: "#F9F9F9",
};

export const Search = ({ placeholder, onSubmit, value, onChange }) => {
  return (
    <Paper component="form" sx={style} onSubmit={onSubmit}>
      <IconButton disableRipple type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase placeholder={placeholder} value={value} onChange={onChange} />
    </Paper>
  );
};
