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
  const addProduct = (newProduct) => {
    newProduct.id = Date.now();
    const changedCart = [...cart, newProduct];
    setcart(changedCart);
  };
  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) => {
      return product.id === editProduct.id ? editProduct : product;
    });
    setcart(changedCart);
  };

  return (
    <div>
      <button
        onClick={() =>
          addProduct({ title: "NEW titulo", description: "NEW descripcion" })
        }
      >
        ADD
      </button>
      ShoopingCart
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <p>ID:{product.id}</p>
            <p>TITLE:{product.title}</p>
            <p>DESCRIPTION:{product.description}</p>
            <button onClick={() => deleteProduct(product.id)}>DELETE</button>
            <button
              onClick={() =>
                updateProduct({
                  id: product.id,
                  title: "EDIT titulo",
                  description: " EDIT new descripcion",
                })
              }
            >
              UPDATE
            </button>
          </div>
        );
      })}
      <br />
      <br />
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default ShoopingCart;
