'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading/Loading';
import { usePathname } from 'next/navigation';

export default function UsersLayout({ children }) {

   const session = useSession();
   const pathname = usePathname();
   const router = useRouter();

   switch ( session.status ) {

      case 'loading':
         return (
            <Loading />
         );
         break;

      case 'unauthenticated': 
         if ( pathname === '/signIn' || pathname === '/signUp' ) {
            return (
               <Box className='pageContainer'>
                  { children }
               </Box>
            );
         } else {
            router.push('/signIn');
         };
         break;
         
      case 'authenticated':
         switch ( pathname ) {
            case '/signIn' :
               router.push('/bulletins');
               break;
            case '/signUp' :
               router.push('/bulletins');
               break;
            case '/changePassword' :
               return (
                  <Box className='pageContainer'>
                     { children }
                  </Box>
               );
               break;
         };
         break;

   };
};