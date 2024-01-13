'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { privacyPolicy } from './privacyPolicy';

const ModalPrivacyPolicy = () => {

   const theme = useTheme();

   return (
      <Box sx={{ width: '100%', lineHeight: '150%' }}>
         <Box sx={{ width: '90%', m: 'auto', mt: '100px', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
            <Box sx={{ fontSize: '2rem', textAlign: 'center', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>Privacy Policy</Box>
            <Box sx={{ mt: '50px', textAlign: 'right' }}>revised: April 1, 2022</Box>
            <Box sx={{ mt: '40px' }}>
               LG Japan Lab Co., Ltd. (hereinafter referred to as &quot;Our Company&quot;) pays close attention to the protection of personal information of all customers, 
               business partners and prospective employees (hereinafter referred to as &quot;Customers&quot;). 
               In accordance with the provisions of the Personal Information Protection Act (hereinafter referred to as the Personal Information Protection Act), 
               our company respects your personal information and protects it according to the following basic policies.
            </Box>
            { privacyPolicy.map((item, i) => (
               <Box key={i} sx={{ my: '40px' }}>
                  <Box sx={{ fontSize: '1.5rem', [theme.breakpoints.down('md')] : { fontSize: '1.25rem' }}}>{item.title}</Box>
                  <Box sx={{ mt: '15px' }}>{item.desc1}</Box>
                  <Box sx={{ mt: '15px' }}>{item.desc2}</Box>
                  <Box sx={{ mt: '15px', pl: '20px' }}>
                     {item.articles.map((article, j) => (
                        <Box key={j} sx={{ my: '10px' }}>{article}</Box>
                     ))}
                  </Box>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default ModalPrivacyPolicy;
