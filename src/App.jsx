import react, { useState } from "react";


import styled from "styled-components";
import { state } from "./hooks/StateTutorial";
import { reduce } from "./hooks/ReduceTutorial";
import { effect } from "./hooks/EffectTutorial";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import "./App.css";
import React from "react";
import.meta.hot;

const App = () => {
  return (
    <SDiv>
      <STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <STabList>
          <STab>S T A T E - T U T O R I A L</STab>
          <STab>R E D U C E - T U T O R I A L</STab>
          <STab>E F F E C T - T U T O R I A L</STab>
        </STabList>
        <STabPanel>
          <div>{state()}</div>
        </STabPanel>
        <STabPanel>
          <div>{reduce()}</div>
        </STabPanel>
        <STabPanel>
          <div>{effect()}</div>
        </STabPanel>
      </STabs>
    </SDiv>
  );
};

const SDiv = styled.div`
  width: 100%;
`;

const STabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: 100%;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  margin-right: 4px;
  border: 1px solid black;
  padding: 4px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    // color: white;
    // background: black;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
`;
STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  border: 1px solid black;
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = "TabPanel";


export default App;
