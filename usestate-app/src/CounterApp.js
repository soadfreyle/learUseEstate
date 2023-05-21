import React, { useState } from "react";

const CounterApp = () => {
  let [counter, setCounter] = useState(0);
  function incrementarCounter() {
    //setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  return (
    <div>
      <button onClick={incrementarCounter}>INCREMENTAR</button>
      <h1>CLICKS: {counter}</h1>
    </div>
  );
};

export default CounterApp;
