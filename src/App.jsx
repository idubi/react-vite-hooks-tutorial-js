import react, { useState } from "react";
import { state } from "./hooks/StateTutorial";
import { reduce } from "./hooks/ReduceTutorial";
import "./App.css";
import React from "react";
import.meta.hot;

const App = () => {
  return (
    <div>
      <div>{state()}</div>
      <hr color="red" />
      <div>{reduce()}</div>
    </div>
  );
};
export default App;
