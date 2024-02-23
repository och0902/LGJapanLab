'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';

const VisitApplySuccess = () => {

   let message;
   const { language } = useGlobalContext();
   switch ( language ) {
      case 'Jpn' : message = '採用志願書が提出されました。';
      case 'Eng' : message = 'Your recruitment application has been submitted.';
   };

   const router = useRouter();
   
   const handleClick = (e) => {
      (e).preventDefault();
      router.push('/recruitApplication');
   };

   return (
      <div className='pageContainer cursor-pointer' onClick={handleClick} >
         <div className='w-[100px] mt-[var(--gap-base)] aspect-square relative' >
            <Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
         </div>
         <div className='flex flex-col items-center gap-[20px]'>
            <div className='text-[1.5rem]'>{message}</div>
         </div>
      </div>
   );
};

export default VisitApplySuccess;