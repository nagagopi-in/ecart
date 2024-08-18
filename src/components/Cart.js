import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, removeFromCart, totalCost }) {
  if (!cartItems.length) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
