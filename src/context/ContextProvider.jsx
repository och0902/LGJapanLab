'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
// import { createTheme, ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const ContextProvider = ({ children }) => {

   const customTheme = createTheme({
      palette: {
         primary: {
            main: '#6B6B6B',
         },
         // secondary: {
         //    main: '',
         // }
      },
      typography: {
         fontFamily: 'LG Smart Font, sans-serif',
      },
   });

   return (
      <SessionProvider>
         <ThemeProvider theme={ customTheme }>
            <Toaster />
            { children } 
         </ThemeProvider>
      </SessionProvider>
   );
};

export default ContextProvider;



