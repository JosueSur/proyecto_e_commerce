import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAgregarAlCarrito = (cantidad) => {
    addToCart({
      ...producto,
      quantity: cantidad,
      price: producto.precio, // para compatibilidad con CartPage
      image: producto.imagen, // para compatibilidad con CartWidget
      title: producto.nombre, // para compatibilidad con CartWidget
    });
    setAgregado(true);
  };

  if (!producto) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Producto no encontrado</h2>
          <Link 
            to="/productos"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors no-underline"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white/80 backdrop-blur rounded-xl shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="flex justify-center">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="w-full max-w-md h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Información del producto */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{producto.nombre}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{producto.descripcion}</p>
          </div>

          {/* Detalles adicionales */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Detalles del producto</h3>
            <p className="text-gray-600">{producto.detalles}</p>
            <p className="text-sm text-gray-500 mt-2">Stock disponible: {producto.stock} unidades</p>
          </div>

          {/* Precio */}
          <div className="text-4xl font-bold text-green-600">
            ${producto.precio}
          </div>

          {/* Contador y botón agregar */}
          {!agregado ? (
            <div className="space-y-4">
              <ItemCount 
                stock={producto.stock}
                initial={1}
                onAdd={handleAgregarAlCarrito}
              />
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <div className="text-green-700 font-semibold text-lg">¡Producto agregado al carrito!</div>
              <Link 
                to="/productos"
                className="inline-block px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors no-underline"
              >
                ← Volver al catálogo
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
