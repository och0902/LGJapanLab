'use client';

import React from 'react';
import { Box } from '@mui/material';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading/Loading';

export default function UsersLayout({ children }) {

   const session = useSession();

   switch ( session.status ) {

      case 'loading':
         return (
            <Loading />
         );
         break;

      case 'unauthenticated': 
         return (
            <Box className='pageContainer'>
               { children }
            </Box>
         );
         break;
         
      case 'authenticated':
         redirect('/bulletins');
         break;

   };
};