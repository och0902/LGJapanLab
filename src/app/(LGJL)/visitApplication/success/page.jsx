'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import visitApplication from '../visitApplication';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const VisitApplySuccess = () => {

   const { language } = useGlobalContext();
	const { success } = visitApplication( language );

   const router = useRouter();

   const handleClick = (e) => {
      (e).preventDefault();
      router.push('/visitApplication');
   };

   return (
      <div className='pageContainer' onClick={handleClick}>
         <div className='w-[100px] aspect-square relative'>
            <Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
         </div>
         <div className='flex flex-col items-center gap-[20px]'>
            <div className='text-[1.5rem]'>{success.title}</div>
            <div className='w-full md:w-[70%] mt-[30px] mx-[5px] md:mx-0 p-[20px] flex flex-col gap-[20px] leading-6
               border-[1px] border-LGgray rounded-[10px]'>
               { success.desc.map((desc, i) => (
                  <div key={i}>{desc}</div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default VisitApplySuccess;