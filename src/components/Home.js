import React, { useState } from 'react';
import Product from '../components/product'; // Ensure the path is correct

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

function Home({ addToCart }) {
  const products = [
    { id: 1, name: 'Smart TV', price: 499.99, category: 'Electronics' },
    { id: 4, name: 'Headphones', price: 149.99, category: 'Electronics' },
    { id: 2, name: 'Laptop', price: 799.99, category: 'Electronics' },
    { id: 3, name: 'Smartphone', price: 299.99, category: 'Electronics' },
    { id: 5, name: 'Sunglasses', price: 49.99, category: 'Fashion' },
    { id: 6, name: 'Jacket', price: 99.99, category: 'Fashion' },
    { id: 7, name: 'Dress', price: 89.99, category: 'Fashion' },
    { id: 8, name: 'Shoes', price: 79.99, category: 'Fashion' },
    { id: 9, name: 'Refrigerator', price: 899.99, category: 'Home Appliances' },
    { id: 10, name: 'Washing Machine', price: 699.99, category: 'Home Appliances' },
    { id: 11, name: 'Microwave Oven', price: 199.99, category: 'Home Appliances' },
    { id: 12, name: 'Air Conditioner', price: 499.99, category: 'Home Appliances' },
    { id: 13, name: 'Face Cream', price: 29.99, category: 'Skincare' },
    { id: 14, name: 'Sunscreen', price: 19.99, category: 'Skincare' },
    { id: 15, name: 'Moisturizer', price: 24.99, category: 'Skincare' },
    { id: 16, name: 'Serum', price: 34.99, category: 'Skincare' }
  ];

  return (
    <div className="products">
      <h2 className="products-title">Products</h2>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <Product
            key={product.id}
            {...product}
            image={images[index]}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
