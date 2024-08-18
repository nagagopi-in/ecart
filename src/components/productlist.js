import React, { useState } from 'react';
import Product from './product';
import { FaChevronDown } from 'react-icons/fa'; // Importing a dropdown icon

function ProductList({ products, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ['All', 'Electronics', 'Fashion', 'Home Appliances', 'Skincare'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
          {selectedCategory} <FaChevronDown />
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {categories.map(category => (
              <button
                key={category}
                className="dropdown-item"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {selectedCategory !== 'All' && (
        <h2 className="category-title">{selectedCategory}</h2>
      )}
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
