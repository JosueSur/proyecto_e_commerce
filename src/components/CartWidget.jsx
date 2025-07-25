import React from 'react';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
  const { cartItems, isCartOpen, setIsCartOpen, totalItems } = React.useContext(CartContext);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleCartClick}
        className="bg-transparent border-none cursor-pointer relative p-0"
      >
        <span role="img" aria-label="cart" className="text-[28px]">🛒</span>
        <span className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full px-2 py-[2px] text-xs font-bold">
          {totalItems}
        </span>
      </button>

      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
          {cartItems.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-600 mb-4">Tu carrito está vacío</p>
              <button 
                onClick={handleCartClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 border-b">
                  <div className="flex-1 flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">${totalAmount.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                >
                  Ver carrito completo
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
