import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center transition-transform hover:scale-105">
      <img src={producto.imagen} alt={producto.nombre} className="w-32 h-32 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold text-center">{producto.nombre}</h3>
      <p className="text-gray-600 text-sm text-center mb-2">{producto.descripcion}</p>
      <span className="text-green-600 font-bold mt-2 text-xl">${producto.precio}</span>
      <div className="mt-4 flex flex-col gap-2 w-full">
        <Link 
          to={`/item/${producto.id}`}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-center no-underline"
        >
          Ver detalle
        </Link>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
