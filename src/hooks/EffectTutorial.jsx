import React, { useState, useEffect } from "react";
import axios from "axios";
const effectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("before fetch ");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[34].email);
        console.log("fetched response.data");
      });
    console.log("after fetch ");
  }, []);

  return (
    <div>
      hello world {data}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click {count}
      </button>
    </div>
  );
};

export const effect = () => {
  return (
    <div>
      <br />
      <p>E F F E C T - T U T O R I A L</p>
      {effectTutorial()}
      <br />
    </div>
  );
};
