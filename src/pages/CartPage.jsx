import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, totalAmount, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Link to="/productos" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors no-underline">
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-bold mb-6">Carrito de compras</h2>
      <div className="space-y-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img src={item.image || item.imagen} alt={item.title || item.nombre} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.title || item.nombre}</h3>
                <p className="text-sm text-gray-600">${item.price || item.precio}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 ml-4">Eliminar</button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-2xl text-green-600 font-bold">${totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-end mt-8">
        <Link to="/checkout" className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
