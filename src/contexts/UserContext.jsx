import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const handleSetName = (name) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, handleSetName }}>
      {children}
    </UserContext.Provider>
  );
};
