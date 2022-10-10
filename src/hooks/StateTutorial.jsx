import React, { useState } from "react";

export const stateTutorial1 = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}> increase counter </button>
    </div>
  );
};

export const stateTutorial2 = () => {
  const [txt, setText] = useState("");

  const setNewText = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div>
      <div>
        <input onChange={setNewText} placeholder="write something" />
        <h3>
          <i>{txt}</i>
        </h3>
      </div>
    </div>
  );
};

export const state = () => {
  return (
    <div>
      {stateTutorial1()} + {stateTutorial2()} + {stateTutorial1()}
    </div>
  );
};
