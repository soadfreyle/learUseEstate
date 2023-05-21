import React, { useState } from "react";
export const ErrorApp = () => {
  const [error, seterror] = useState("");
  return (
    <div>
      <button onClick={() => seterror("error app")}>btn1</button>
      <button onClick={() => seterror("error dos")}>btn2</button>
      <button onClick={() => seterror("")}>btn1</button>
      {error && <h1>{error}</h1>}
    </div>
  );
};
