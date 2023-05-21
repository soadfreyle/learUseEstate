import React, { useState } from "react";
const initialCart = [
  { id: 1, title: "libro#1", description: "novela fabulosa" },
  { id: 2, title: "libro#2", description: "novela drama" },
  { id: 3, title: "libro#3", description: "cuento" },
];

const ShoopingCart = () => {
  const [cart, setcart] = useState(initialCart);
  const deleteProduct = (productID) => {
    const changedCart = cart.filter((product) => product.id !== productID);
    setcart(changedCart);
  };

  return (
    <div>
      ShoopingCart
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <p>ID:{product.id}</p>
            <p>TITLE:{product.title}</p>
            <p>DESCRIPTION:{product.description}</p>
            <button onClick={() => deleteProduct(product.id)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShoopingCart;
