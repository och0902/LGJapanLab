import React from 'react';
import Link from 'next/link';

export const BtnRedLink = (props) => {
   return (
      <Link href={props.href} className='w-full py-[15px] bg-LGred text-bold text-white text-center 
         rounded-[26px] shadow-md shadow-LGgray hover:no-underline transtion duration-300 ease-in-out hover:opacity-[0.5]'>
         {props.title}
      </Link>
   );
};

export const BtnRedSubmit =  (props) => {
   return (
      <button type='submit' className='w-full py-[15px] bg-LGred text-bold text-white text-center 
         rounded-[26px] shadow-md shadow-LGgray hover:no-underline transtion duration-300 ease-in-out hover:opacity-[0.5]'>
         {props.title}
      </button>
   );
};