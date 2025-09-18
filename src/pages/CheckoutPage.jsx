import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { crearOrdenCompra } from '../firebase';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';


const CheckoutPage = () => {
  const { cartItems, totalAmount, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer: { nombre, email, telefono },
      items: cartItems.map(item => ({ id: item.id, nombre: item.title, cantidad: item.quantity, precio: item.price })),
      total: totalAmount,
      date: new Date().toISOString()
    };
    try {
      const id = await crearOrdenCompra(order);
      // Actualizar stock de cada producto en Firestore (errores solo se loguean)
      const db = getFirestore();
      for (const item of cartItems) {
        try {
          const prodRef = doc(db, 'productos', item.id);
          const prodSnap = await getDoc(prodRef);
          if (prodSnap.exists()) {
            const currentStock = prodSnap.data().stock || 0;
            const newStock = Math.max(0, currentStock - item.quantity);
            await updateDoc(prodRef, { stock: newStock });
          }
        } catch (err) {
          console.error('Error actualizando stock para', item.id, err);
        }
      }
      clearCart();
      setOrderId(id);
    } catch (err) {
      console.error('Error al registrar la compra:', err, err?.message, err?.stack);
      alert('Error al registrar la compra');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur rounded-xl shadow-lg mt-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">¡Gracias por tu compra!</h2>
        <p className="mb-4 text-lg text-gray-700">Tu código de orden es:</p>
        <div className="text-2xl font-mono bg-gray-200 px-6 py-2 rounded mb-8">{orderId}</div>
        <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors no-underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur rounded-xl shadow-lg mt-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <input type="text" required placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="px-4 py-2 border rounded" />
        <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-2 border rounded" />
        <input type="tel" required placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} className="px-4 py-2 border rounded" />
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h3 className="font-semibold mb-2">Resumen de compra</h3>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between text-sm mb-1">
              <span>{item.title} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-2">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <button type="submit" disabled={loading} className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300">
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
