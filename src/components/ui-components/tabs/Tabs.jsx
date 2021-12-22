import * as React from "react";
import { Box, Tab, Tabs as TabsUI } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { styledTabs, styledTab } from "../styles";

export const Tabs = ({ oneName, twoName, onePanel, twoPanel }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <TabsUI sx={styledTabs} value={value} onChange={handleChange}>
          <Tab sx={styledTab} label={oneName} value="1" />
          <Tab sx={styledTab} label={twoName} value="2" />
        </TabsUI>
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
