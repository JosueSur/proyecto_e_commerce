import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import ItemList from '../components/ItemList';
import { getProductos, getProductosPorCategoria } from '../data/productos';

const ItemListContainer = ({ mensaje }) => {
  const [inputName, setInputName] = useState('');
  const { handleSetName } = React.useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  
  // Mostrar solo items si hay parámetro de categoría o si estamos en la ruta de productos
  const mostrarSoloItems = Boolean(categoriaId) || window.location.pathname === '/productos';

  useEffect(() => {
    setLoading(true);
    
    const fetchProductos = categoriaId 
      ? getProductosPorCategoria(categoriaId)
      : getProductos();
    
    fetchProductos.then((data) => {
      setProductos(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error cargando productos:', error);
      setLoading(false);
    });
  }, [categoriaId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetName(inputName);
  };

  const getTitulo = () => {
    if (categoriaId) {
      const categorias = {
        panificados: 'Panificados',
        snacks: 'Snacks',
        pastas: 'Pastas',
        postres: 'Postres'
      };
      return `Categoría: ${categorias[categoriaId] || categoriaId}`;
    }
    return mostrarSoloItems ? 'Todos los productos' : mensaje;
  };

  return (
    <section className="py-12 px-8 bg-gray-100/60 backdrop-blur shadow-md min-h-[300px] flex flex-col items-center justify-center text-[22px] text-gray-800 rounded-xl my-8 mx-auto max-w-6xl">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {mostrarSoloItems ? (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">{getTitulo()}</h2>
          </div>
        ) : (
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
          ) : productos.length > 0 ? (
            <ItemList productos={productos} />
          ) : (
            <div className="text-center text-gray-500">No se encontraron productos en esta categoría.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
