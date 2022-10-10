import React, { useReducer, useState } from "react";

const reduceTutorial = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1> {count} </h1>
      {showText && <p> this is the text to be toggled </p>}
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        click here
      </button>
    </div>
  );
};

const reduceTutorial1 = () => {
  const reducer = (state, action) => {
    const actions = {
      INCREMENT: { count: state.count + 1, show_text: state.show_text },
      TOGGLE_SHOW: { count: state.count, show_text: !state.show_text },
    };

    return actions[action.type] || state;
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    show_text: true,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      {state.show_text && <p>toggle text here</p>}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE_SHOW" });
        }}
      >
        {" "}
        click me{" "}
      </button>
    </div>
  );
};

export const reduce = () => {
  return <div>{reduceTutorial1()}</div>;
};
