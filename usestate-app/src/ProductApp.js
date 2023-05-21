import React, { useState } from "react";
const info = {
  name: "soad",
  apellido: "freyle",
};

const ProductApp = () => {
  // no sobreescribe las propiedades del objeto
  // updateButton hereda las propiedades de la var person
  // imprimo el objeto info
  const [person, sertperson] = useState(info);
  const updateButton = (property, value) => {
    sertperson({
      ...person,
      [property]: value,
    });
  };
  return (
    <div>
      ProductApp
      <button onClick={() => updateButton("pais:", "Colombia")}>UPDATE</button>
      <h1>name: {info.name}</h1>
      <h1>apellido: {info.apellido}</h1>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default ProductApp;
