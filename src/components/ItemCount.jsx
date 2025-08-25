import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center space-x-4">
        <button 
          onClick={decrement}
          disabled={count <= 1}
          className="w-10 h-10 rounded-full bg-red-500 text-white font-bold text-lg hover:bg-red-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          -
        </button>
        
        <span className="text-2xl font-semibold text-gray-800 min-w-[3rem] text-center">
          {count}
        </span>
        
        <button 
          onClick={increment}
          disabled={count >= stock}
          className="w-10 h-10 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>

      <button 
        onClick={handleAdd}
        disabled={stock === 0}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>

      <p className="text-sm text-gray-500">
        Stock disponible: {stock} unidades
      </p>
    </div>
  );
};

export default ItemCount;
