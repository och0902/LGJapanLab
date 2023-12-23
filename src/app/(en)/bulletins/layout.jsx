'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading/Loading';

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
            <React.Fragment>
               { children }
            </React.Fragment>
         );
         break;
   };
};