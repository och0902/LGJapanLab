'use client';

import React from 'react';
import { redirect, useRouter } from 'next/navigation';

const Delete = ({ params }) => {

   const { id } = params;

   const router = useRouter();

   try {
      const url = `/api/bulletins/${id}`;
      // const url = `/api/bulletins?id=${id}`;
      fetch(url, { method: 'DELETE', })
         .then ((response) => {
            if( !response.ok ) {
               throw new Error('failed to delete an article');
            };
            router.push('/bulletins');
            router.refresh();
         });
   } catch (error) {
      console.log(error);
      router.push('/bulletins');
      router.refresh();
   };

};

export default Delete;