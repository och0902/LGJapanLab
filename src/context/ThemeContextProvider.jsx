'use client';

import React, { createContext } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';

const ThemeContext = createContext();

const theme = createTheme({
   palette: {
      primary: {
         main: '#6B6B6B',
      },
   },
   typography: {
      fontFamily: 'LG Smart Font, sans-serif',
   },
});

export const ThemeContextProvider = ({ children }) => {
   return (
      // <ThemeContext.Provider>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
         </ThemeProvider>
      // </ThemeContext.Provider>
   );
};