const styleColor = "#FF630E";
const inputColor = "#CCCCCC";

export const styledAddButton = { color: styleColor };

export const styledApplyButton = {
  backgroundColor: styleColor,
  border: "1px solid rgba(0, 0, 0, 0.2)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#DB601D",
  },
};

export const styledCancelButton = {
  color: "#333333",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#E8E8E8",
  },
};

export const styledCheckbox = {
  "&.Mui-checked": {
    color: styleColor,
  },
};

export const styledIconButton = { color: "#8f8f8f" };

export const styledTextField = {
  "& label.Mui-focused": {
    color: inputColor,
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: `1px solid ${inputColor}`,
    },
  },
};

export const styledFormControl = {
  ...styledTextField,
};

export const styledSearchForm = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 256,
  height: 40,
  border: `1px solid ${inputColor}`,
  boxShadow: "none",
  background: "#F9F9F9",
};

export const styledTabs = {
  minHeight: "unset",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    padding: "2px",
    backgroundColor: "#E8E8E8",
  },
};

export const styledTab = {
  minHeight: "unset",
  textTransform: "none",
  maxWidth: "unset",
  minWidth: "unset",
  padding: "8px 0",
  flexGrow: 1,
  color: "#8F8F8F",
  borderRadius: "2px",
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: styleColor,
  },
};
