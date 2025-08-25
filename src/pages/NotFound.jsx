import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] px-8">
      <div className="text-center bg-white/80 backdrop-blur rounded-xl p-12 shadow-lg max-w-md">
        <div className="text-8xl font-bold text-gray-300 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors no-underline font-semibold"
          >
            Ir al inicio
          </Link>
          <br />
          <Link 
            to="/productos"
            className="inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors no-underline"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
