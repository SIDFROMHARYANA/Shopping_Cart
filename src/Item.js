import React, { useState } from 'react';

const Item = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Product: {item.product}</p>
      <p>Price: Rs{item.price}</p>
      <div className="quantity-controls">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={() => addToCart(item, quantity)}>Add to Cart</button>
    </div>
  );
};

export default Item;