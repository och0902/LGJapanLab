'use client';

import React from 'react';
import { Box, } from '@mui/material';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading/Loading';
import styles from './page.module.css';

export default function BulletinsLayout({ children }) {

   const session = useSession();

   switch ( session.status ) {
      
      case 'loading':
         return (
            <Loading />
         );
         break;

      case 'unauthenticated': 
         redirect('/signIn');
         break;
         
      case 'authenticated':
         return (
            <Box className='pageContainer'>
               { children }
            </Box>
         );
         break;
   };
};