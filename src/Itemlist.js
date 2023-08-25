import React from 'react';
import Item from './Item';

const ItemList = ({ items, addToCart }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item key={index} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ItemList;