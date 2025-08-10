import React from 'react';

const Item = ({ producto }) => {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center">
      <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{producto.nombre}</h3>
      <p className="text-gray-600">{producto.descripcion}</p>
      <span className="text-green-600 font-bold mt-2">${producto.precio}</span>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Agregar al carrito
      </button>
    </div>
  );
};

export default Item;
