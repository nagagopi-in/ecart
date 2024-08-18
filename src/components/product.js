import React from 'react';

function Product({ id, name, price, image, addToCart }) {
  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => addToCart({ id, name, price, image })}>Add to Cart</button>
    </div>
  );
}

export default Product;
