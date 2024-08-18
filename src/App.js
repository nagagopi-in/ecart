import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Update quantity and subtotal if item already exists
        return prevItems.map(item =>
          item.id === product.id 
            ? { 
                ...item, 
                quantity: item.quantity + 1, 
                subtotal: (item.quantity + 1) * item.price 
              } 
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { 
          ...product, 
          quantity: 1, 
          subtotal: product.price 
        }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const totalCost = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <Router>
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="cart-icon">
              <Link to="/cart">
                <i className="fas fa-shopping-cart" style={{ color: 'white' }}></i>
                <span id="cart-count">{cartItems.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} totalCost={totalCost} />} />
      </Routes>
    </Router>
  );
}

export default App;
