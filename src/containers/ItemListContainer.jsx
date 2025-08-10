import React, { useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ mensaje }) => {
  const [inputName, setInputName] = useState('');
  const { handleSetName } = React.useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarSoloItems, setMostrarSoloItems] = useState(window.location.hash === '#todos');

  useEffect(() => {
    // Simula un fetch con retraso de 2 segundos
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: 'Pan sin TACC',
            descripcion: 'Pan apto para celíacos, fresco y delicioso.',
            precio: 1200,
            imagen: '/src/assets/pan-sin-gluten-rodajas.jpg',
          },
          {
            id: 2,
            nombre: 'Galletas de arroz',
            descripcion: 'Galletas crocantes, libres de gluten.',
            precio: 800,
            imagen: '/src/assets/galleta-de-arroz.jpg',
          },
          {
            id: 3,
            nombre: 'Fideos de maíz',
            descripcion: 'Fideos sin gluten, ideales para pastas.',
            precio: 950,
            imagen: '/src/assets/fideos-de-maiz.jpg',
          },
        ]);
      }, 2000);
    });
    fetchProductos.then((data) => {
      setProductos(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setMostrarSoloItems(window.location.hash === '#todos');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetName(inputName);
  };

  return (
    <section className="py-12 px-8 bg-gray-100/60 backdrop-blur shadow-md min-h-[300px] flex flex-col items-center justify-center text-[22px] text-gray-800 rounded-xl my-8 mx-auto max-w-3xl">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {mostrarSoloItems ? null : (
          <>
            <div className="text-center">{mensaje}</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-gray-800 text-[16px]">Ingresa tu nombre</label>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px]"
                placeholder="Tu nombre"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-[16px]"
              >
                Ok
              </button>
            </form>
          </>
        )}
        <div className="w-full mt-8">
          {loading ? (
            <div className="text-center text-gray-500">Cargando productos...</div>
          ) : (
            <ItemList productos={productos} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
