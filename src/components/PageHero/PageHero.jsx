import Image from 'next/image';
import React from 'react';
import { useTheme } from '@emotion/react';

const PageHero = ({ image, aspectRatio='1920/400', title, color='white', message1, message2 }) => {

   const theme = useTheme();
   
   return (
      <div className='w-[175%] relative md:w-full' style={{ aspectRatio }}>
         <Image src={image} fill sizes='100%' alt='PageHero' />
         <div className='absolute w-full h-full flex items-center px-[25%] md:px-[10%]'>
            <div style={{ color }}>
               <div className='text-[2.5rem] weight:font-[--weight-bold] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]'
                  style={{ textShadow: '5px 5px 5px var(--color-LGgray)' }}>
                     {title}
               </div>
               <div className='text-[0.75rem] md:text-[1rem]'>{message1}</div>
               <div className='text-[0.75rem] md:text-[1rem]'>{message2}</div>
            </div>
         </div>
      </div>
   );
}

export default PageHero;