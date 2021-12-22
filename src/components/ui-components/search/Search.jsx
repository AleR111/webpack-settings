import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styledSearchForm } from "../styles";

export const Search = ({ placeholder, onSubmit, value, onChange }) => {
  return (
    <Paper component="form" sx={styledSearchForm} onSubmit={onSubmit}>
      <IconButton disableRipple type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase placeholder={placeholder} value={value} onChange={onChange} />
    </Paper>
  );
};
