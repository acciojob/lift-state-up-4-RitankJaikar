import React, { useState } from "react";
import Child from "./Child";

function App() {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 200 },
    { id: 3, name: "Item 3", price: 300 },
  ]);

  // State to manage form inputs
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  // Function to handle item addition
  const handleAddItem = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!itemName || !itemPrice) {
      alert("Please fill out both fields.");
      return;
    }

    // Add new item to the cart
    const newItem = {
      id: cartItems.length + 1, // Generate a unique ID
      name: itemName,
      price: parseFloat(itemPrice),
    };

    setCartItems([...cartItems, newItem]);

    // Clear input fields
    setItemName("");
    setItemPrice("");
  };

  // Function to handle item removal
  const handleRemove = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="parent">
      <h1>Shopping Cart</h1>
      {/* Form for adding items */}
      <form onSubmit={handleAddItem}>
        <div>
          <label htmlFor="itemName">Item Name: </label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="itemPrice">Item Price: </label>
          <input
            type="number"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      {/* Child component for displaying cart items */}
      <Child cartItems={cartItems} onRemove={handleRemove} />
    </div>
  );
}

export default App;
