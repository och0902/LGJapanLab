'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { GlobalContextProvider } from './context/GlobalContext';
import { Toaster } from 'react-hot-toast';

const ContextProvider = ({ children }) => {
   return (
      <GlobalContextProvider>
         <SessionProvider>
            <Toaster toastOptions={{ duration: 5000 }} />
            { children } 
         </SessionProvider>
      </GlobalContextProvider>
   );
};

export default ContextProvider;