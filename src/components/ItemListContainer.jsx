import React, { useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const ItemListContainer = ({ mensaje }) => {
  const [inputName, setInputName] = useState('');
  const { handleSetName } = React.useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetName(inputName);
  };

  return (
    <section className="py-12 px-8 bg-gray-100/60 backdrop-blur shadow-md min-h-[300px] flex items-center justify-center text-[22px] text-gray-800 rounded-xl my-8 mx-auto max-w-3xl">
      <div className="flex flex-col items-center justify-center gap-4">
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
      </div>
    </section>
  );
};

export default ItemListContainer;
