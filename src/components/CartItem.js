import React from 'react';

function CartItem({ item, removeFromCart }) {
  // Ensure item data is valid
  if (!item || item.price === undefined || item.subtotal === undefined || item.quantity === undefined) {
    return <p>Invalid item data</p>;
  }

  // Handle cases where price or subtotal might not be a number
  const price = Number(item.price) || 0;
  const subtotal = Number(item.subtotal) || 0;

  return (
    <div>
      <h3>{item.name || 'Unknown Item'}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
