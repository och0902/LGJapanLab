'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { pledges } from './pledge';

const ModalPledge = () => {

   const theme = useTheme();
   
   return (
      <Box sx={{ width: '100%', color: 'var(--color-black)', lineHeight: '150%' }}>
         <Box sx={{ width: '90%', m: 'auto',	 mt: '100px', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
            <Box sx={{ mb: '100px', textAlign: 'center' }}>
               <Box sx={{ mb: '10px', fontSize: '2rem', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>訪問者の誓約</Box>
               <Box>(入/退室同意書兼秘密保持誓約)</Box>
            </Box>
            {pledges.map((pledge, i) => (
               <Box key={i} sx={{ mt: '40px' }}>{pledge}</Box>
            ))}
         </Box>
      </Box>
   );
};

export default ModalPledge;
