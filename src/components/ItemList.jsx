import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
