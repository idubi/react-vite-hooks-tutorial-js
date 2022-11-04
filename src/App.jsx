import * as React from "react";
import "./App.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";

import { state } from "./hooks/StateTutorial";
import { reduce } from "./hooks/ReduceTutorial";
import { effect } from "./hooks/EffectTutorial";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BOX sx={{ width: "100%", typography: "body1" }}>
      <TABCONTEXT value={value}>
        <BOX sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TABLIST onChange={handleChange} aria-label="lab API tabs example">
            <TAB label="S T A T E - T U T O R I A L" value="1" />
            <TAB label="R E D U C E - T U T O R I A L" value="2" />
            <TAB label="E F F E C T - T U T O R I A L" value="3" />
          </TABLIST>
        </BOX>
        <TABPANEL value="1">{state()}</TABPANEL>
        <TABPANEL value="2">{reduce()}</TABPANEL>
        <TABPANEL value="3">{effect()}</TABPANEL>
      </TABCONTEXT>
    </BOX>
  );
}

const BOX = styled.Box``;
const TABCONTEXT = styled.TabContext``;
const TAB = styled.Tab``;
const TABPANEL = styled.TabPanel``;
const TABLIST = styled.TabList``;
