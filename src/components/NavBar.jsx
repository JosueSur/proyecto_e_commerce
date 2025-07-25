import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/sin-tacc2.png';
import { UserContext } from '../contexts/UserContext';

const NavBar = () => {

  const { userName } = React.useContext(UserContext);
  
  return (
    <nav className="flex items-center justify-around py-4 px-8 bg-white/60 shadow-md backdrop-blur">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <h1 className="m-0 text-2xl text-gray-900 font-bold">GlutenFree</h1>
      </div>
      <div className="flex items-center gap-2">
        <a href="#inicio" className="mx-3 text-gray-900 no-underline hover:underline">Inicio</a>
        <div className="relative group">
          <button className="mx-3 text-gray-900 no-underline hover:underline focus:outline-none flex items-center gap-1">
            Productos
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-30 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
            <a href="#panificados" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200">Panificados</a>
            <a href="#snacks" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200">Snacks</a>
            <a href="#pastas" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200">Pastas</a>
            <a href="#postres" className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-200">Postres</a>
          </div>
        </div>
        <a href="#contacto" className="mx-3 text-gray-900 no-underline hover:underline">Contacto</a>
      </div>
      <span className="text-gray-900 font-bold">{userName || 'Invitado'}</span>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
