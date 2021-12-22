import React from "react";
import { Popover as PopoverUI, Typography } from "@mui/material";

export const Popover = ({
  anchorEl,
  setAnchorEl,
  children,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
  },
  anchorPosition = null,
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <PopoverUI
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        anchorPosition={anchorPosition}
        sx={{ mt: "4px" }}
      >
        <Typography sx={{ p: 2 }}>{children}</Typography>
      </PopoverUI>
    </div>
  );
};
