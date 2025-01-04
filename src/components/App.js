import React, { useState } from "react";
import Child from "./Child";

function App() {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 200 },
    { id: 3, name: "Item 3", price: 300 },
  ]);

  // Function to handle item removal
  const handleRemove = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="parent">
      <h1>Shopping Cart</h1>
      <Child cartItems={cartItems} onRemove={handleRemove} />
    </div>
  );
}

export default App;
