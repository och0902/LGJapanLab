'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import aboutUs from './aboutUs';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import PageHero from '@/components/PageHero/PageHero';

const AboutUs = () => {

   const { language } = useGlobalContext();
   const { pageHero, page, companyInfos, locations } = aboutUs(language);

   return (
		<div className='pageContainer'>
         <PageHero image='/images/lgjl/aboutUs.jpg' title={pageHero.title} />
         
         <div className='w-full md:w-[80%] m-auto mt-[calc(var(--gap-base)/2 )] px-[10px] md:px-0'>
            <div className='text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[0]}</div>
            { companyInfos.map((info, i) => (
               <div key={i} className='py-[10px] px-[5px] leading-6 flex items-center border-b-[1px] border-LGgray-light'>
                  <div className='basis-[25%]'>{info.item}</div>
                  <div className='basis-[75%] pl-[10px] text-black'>
                     { info.contents.map((content, j) => (
                        <div key={j}>{content}</div>
                     ))}
                  </div>
               </div>
            ))}
         </div>

         <div className='w-full'>
            <div className='w-full md:w-[80%] m-auto mb-[10px] px-[10px] md:px-0'>
               <div className='text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[1]}</div>
            </div>
            <div  className='flex flex-col gap-[50px]'>
               {  locations.map((location, i) => (
                  <div key={i} className='w-full py-[20px] lg:py-0 bg-LGgray-light'>
                     <div className='w-full md:w-[80%] m-auto px-[10px] md:px-0 flex flex-wrap flex-col md:flex-row justify-between items-start md:items-center gap-[30px]'>
                        <div className='w-full md:w-[450px] text-black'>
                           <div className='text-[1.5rem] text-LGred'>{location.office}</div>
                           <div className='pb-[20px] text-[1.5rem] text-LGred'>{location.officeDesc}</div>
                           <div className='py-[5px]'>{location.postalCode}</div>
                           <div className='py-[5px]'>{location.address1}</div>
                           <div className='py-[5px]'>{location.address2}</div>
                           <div className='py-[5px]'>{location.tel}</div>      
                           <Link target='_blank' href={location.buildingUrl} className='hover:text-LGred' >
                              <div className='pt-[20px]'>{location.buildingName} <ArrowForwardIcon fontSize='small' className='mb-[3px]' /></div>
                           </Link> 
                        </div>
                        <div className='w-full lg:w-[450px] xl:w-[700px] h-[450px]'>
                           <iframe src={location.map} width='100%' height='100%' className=' border-none' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>
   );
};

export default AboutUs;