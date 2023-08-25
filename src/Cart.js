import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            {cartItem.item.name} - Quantity: {cartItem.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;