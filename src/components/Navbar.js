import React from 'react';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>E-Commerce</h1>
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span>{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
