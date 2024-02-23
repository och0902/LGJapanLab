'use client';

import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export const useGlobalContext = () => {
   return useContext(GlobalContext);
};

export const GlobalContextProvider = ({ children }) => {
   const [ language, setLanguage ] = useState('Jpn');

   return (
      <GlobalContext.Provider value={{ language, setLanguage }}>
         {children}
      </GlobalContext.Provider>
   );
};