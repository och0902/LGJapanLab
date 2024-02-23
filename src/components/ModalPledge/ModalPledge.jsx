'use client';

import React from 'react';
import Pledge from './Pledge';

const ModalPledge = () => {

   const pledge = Pledge();

   return (
      <div  className='w-full text-black leading-6'>
         <div className='w-full lg:w-[90%] m-auto mt-[100px]'>
            <div className='mb-[100px] text-center'>
               <div className='text-[1.75rem] lg:text-[2rem]'>{pledge.title}</div>
               <div>{pledge.desc}</div>
            </div>
            {pledge.pledges.map((pledge, i) => (
               <div key={i} className='mt-[40px]'>{pledge}</div>
            ))}
         </div>
      </div>
   );
};

export default ModalPledge;
