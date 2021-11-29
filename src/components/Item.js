import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)


  function handleCart(){
    setInCart((inCart) => !inCart)
  }

  const color = inCart ? "magenta" : "yellow"
  
  const lineThrough = inCart ? "line-through" : ""

  return (
    <li className="" style={{textDecorationLine: lineThrough}} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{background: color}} onClick={handleCart}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
