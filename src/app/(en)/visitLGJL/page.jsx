'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';
import styles from './page.module.css';
import { useTheme } from '@emotion/react';
import Link from 'next/link';

const VisitLGJL = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>

         <Box sx={{ width: '80%', m: 'auto', mt: 'var( --margin-basic)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ fontSize: '2rem', [theme.breakpoints.down('md')] : { fontSize: '1.5rem' } }}>
               Visit Application of LG Japan Lab Inc.
            </Box>
         </Box>

         <Grid container sx={{ width: '60%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '80%'} }}>
            <Grid item xs={6} sx={{ p: '3px' }}>
               <Link href='/visitLGJL/signIn' className={styles.linkBox} 
                  style={{ width: '100%', height: '200px', backgroundColor: 'var(--color-LGgray-light)', borderRadius: '20px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     Application for Member Visit
               </Link>
            </Grid>
            <Grid item xs={6} sx={{ p: '3px' }}>
               <Link href='/visitLGJL/applyForm' className={styles.linkBox} 
                  style={{ width: '100%', height: '200px', backgroundColor: 'var(--color-LGgray-light)', borderRadius: '20px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     Application for Guest Visit
               </Link>
            </Grid>
            <Grid item xs={6} sx={{ p: '3px' }}>
               <Link href='/visitLGJL/inquiry' className={styles.linkBox} 
                  style={{ width: '100%', height: '200px', backgroundColor: 'var(--color-LGgray-light)', borderRadius: '20px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     Inquiry of Reservation
               </Link>
            </Grid>
            <Grid item xs={6} sx={{ p: '3px' }}>
               <Link href='/visitLGJL/signUp' className={styles.linkBox} 
                  style={{ width: '100%', height: '200px', backgroundColor: 'var(--color-LGgray-light)', borderRadius: '20px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                     Sign Up
               </Link>
            </Grid>
         </Grid>
      </Box>
   );
};

export default VisitLGJL;
