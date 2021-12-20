import * as React from "react";
import { Box, Tab, Tabs as TabsUI, styled } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import styles from "./tabs.module.less";

const StyledTabs = styled((props) => <TabsUI {...props} />)({
  minHeight: "unset",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    padding: "2px",
    backgroundColor: "#E8E8E8",
  },
});

const StyledTab = styled((props) => <Tab {...props} />)({
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
    backgroundColor: "#FF630E",
  },
});

export const Tabs = ({ oneName, twoName, onePanel, twoPanel }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label={oneName} value="1" />
          <StyledTab label={twoName} value="2" />
        </StyledTabs>
      </Box>
      <TabPanel sx={{ padding: "16px 0" }} value="1">
        {onePanel}
      </TabPanel>
      <TabPanel sx={{ padding: "16px 0" }} value="2">
        {twoPanel}
      </TabPanel>
    </TabContext>
  );
};
