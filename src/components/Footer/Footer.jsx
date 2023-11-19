'use client';

import React from 'react';
import styles from './Footer.module.css';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@emotion/react';

const Footer = () => {

   const theme = useTheme();

   return (
      <Box sx={{ width: '100%', mt: '10dvh', p: '10px', backgroundColor: 'var(--color-LGgray-light)' }}>
         <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%' }  }}>
            <Box sx={{ py: '10px', borderBottom: '1px solid var(--color-white)', fontWeight: 'var(--weight-bold)' }}>
               <Link href='/' className={styles.link}>LG Japan Lab Inc</Link>
            </Box>
            <Box sx={{ py: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
               <Box sx={{ display: 'inline-flex', gap: '10px', [theme.breakpoints.down('sm')]: { display: 'block' } }}>
                  <Box sx={{ my: '5px' }}>Copyright ⓒ 2024 LG Japan Lab Inc.</Box>
                  <Box sx={{ my: '5px' }}>All Rights Reserved.</Box>
               </Box>
               <Box sx={{ display: 'inline-flex', pr: '10px', gap: '20px', [theme.breakpoints.down('sm')]: { display: 'block' } }}>
                  <Box sx={{ my: '5px' }}>
                     <Link href='/privacyPolicy' className={styles.link}>Privacy policy</Link>
                  </Box>
                  <Box sx={{ my: '5px' }}>
                     <Link href='/termsOfUse' className={styles.link}>Terms of use</Link>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default Footer;