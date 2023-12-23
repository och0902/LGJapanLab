'use client';

import React, { useState } from 'react';
import styles from './ModalPledge.module.css';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

const ModalPledge = () => {

   const theme = useTheme();
   
   return (
      <Box sx={{ width: '100%', color: 'var(--color-black)', lineHeight: '150%' }}>
         <Box sx={{ width: '90%', m: 'auto',	[theme.breakpoints.down('lg')]: { width: '100%' } }}>
            <Box sx={{ fontSize: '2rem', textAlign: 'center', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>Visitor Pledge</Box>
            <Box sx={{ mt: '50px', textAlign: 'right' }}>revised: April 1, 2022</Box>
            <Box sx={{ mt: '40px' }}>
               LG Japan Lab Co., Ltd. (hereinafter referred to as &quot;Our Company&quot;) pays close attention to the protection of personal information of all customers, 
               business partners and prospective employees (hereinafter referred to as &quot;Customers&quot;). 
               In accordance with the provisions of the Personal Information Protection Act (hereinafter referred to as the Personal Information Protection Act), 
               our company respects your personal information and protects it according to the following basic policies.
            </Box>
         </Box>
      </Box>
   );
};

export default ModalPledge;
