import "./App.css";
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { state } from "./hooks/StateTutorial";
import { reduce } from "./hooks/ReduceTutorial";
import { effect } from "./hooks/EffectTutorial";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="S T A T E - T U T O R I A L" value="1" />
            <Tab label="R E D U C E - T U T O R I A L" value="2" />
            <Tab label="E F F E C T - T U T O R I A L" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{state()}</TabPanel>
        <TabPanel value="2">{reduce()}</TabPanel>
        <TabPanel value="3">{effect()}</TabPanel>
      </TabContext>
    </Box>
  );
}
