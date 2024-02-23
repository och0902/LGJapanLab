'use client';

import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero/PageHero';
import ciLgWay from './ci&LgWay';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';

const CILGWay = () => {

   const { language } = useGlobalContext();
   const { page, pageHero, LGWay }  = ciLgWay( language );

   return (
      <div className='pageContainer'>

         <div className='w-full my-[calc(var(--gap-base)*0.4)] flex flex-col justify-center items-center gap-[calc(var(--gap-base)*0.3)]'>
            <div className='w-[45%] sm:w-[30%] lg:w-[340px] aspect-[340/149] relative'>
               <Image src='/images/lg/ci&LgWay/LGCI.jpg' fill sizes='100%' alt='LG CI' />
            </div>
            <div className='w-full md:w-[80%] my-0 mx-auto px-0 md:px-[5px] text-center'>
               <div className='my-[calc(var(--gap-base)*0.3)] text-[2.2rem] md:text-[2.5rem] font-bold'>{page.title}</div>
               <div>{page.desc[0]}</div>
               <div className='my-[calc(var(--gap-base)*0.15)] text-[1.5rem] md:text-[1.8rem] font-bold text-black'>{page.desc[1]}</div>
               <div className='text-[0.875rem] leading-6'>{page.desc[2]}</div>
            </div>
         </div>

         <div className='w-full m-auto flex flex-col justify-between items-center gap-[calc(var(--gap-base)*0.5)] md:gap-[var(--gap-base)]'>
            <PageHero image='/images/lg/ci&LgWay/LGWay.jpg' title={pageHero.title}
               message1={pageHero.message[0]} message2={pageHero.message[1]} />
            <div className='w-full my-[calc(var(--gap-base)*0.5)] md:w-[80%] md:my-0 text-center leading-6'>{pageHero.desc}</div>

            <div className='w-full m-auto bg-white text-black md:bg-LGgray-light'>
               <div className='w-full md:w-[80%] m-auto flex flex-col-reverse md:flex-row justify-center'>
                  <div className='w-full md:w-[60%] my-[30px] px-[20px] md:px-0 flex flex-col items-center bg-LGgray-light'>
                     {LGWay.map((way, i) => (
                        <div key={i} className={`w-full h-[95px] lg:h-[106px] xl:h-[118px] flex flex-col justify-center
                           ${ i+1 < LGWay.length && 'border-b-2 border-solid border-white'}`}>
                           <div className='text-[1.7rem] lg:text-[2.3rem] font-bold'>{way.item}</div>
                           <div className='text-[0.8rem] lg:text-[1rem]'>{way.desc}</div>
                        </div>
                     ))}
                  </div>

                  <div className='w-[350px] lg:w-[400px] xl:w-[450px] m-auto aspect-[600/450] relative'>
                     <Image src='/images/lg/ci&LgWay/LGWayDiagramJa.png' fill sizes='100%' alt='LG Way' />
                  </div>
               </div>
            </div>

         </div>         
      </div>
   );
};

export default CILGWay;