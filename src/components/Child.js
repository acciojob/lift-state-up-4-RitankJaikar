import React from "react";

function Child({ cartItems, onRemove }) {
  return (
    <div className="child">
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span id="itemName">{item.name}</span> -{" "}
            <span id="itemPrice">${item.price}</span>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
