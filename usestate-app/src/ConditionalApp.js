import React, { useState } from "react";

export const ConditionalApp = () => {
  const [condition, setcondition] = useState(true);
  return (
    <div>
      ConditionalApp
      <button onClick={() => setcondition(!condition)}>Toggle</button>
      {/* {condition ? (
        <h1>SHOW MESSAGE IS TRUE</h1>
      ) : (
        <h1>ANOTHER MESSAGE IS FALSE</h1>
      )} */}
      {/* {condition && <h1>SHOW MESSAGE IS TRUE</h1>} */}
      <h1>STATE VALUE CONDITION IS {condition.toString()}</h1>
    </div>
  );
};
