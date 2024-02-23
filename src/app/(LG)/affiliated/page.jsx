'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import affiliated from './affiliated';
import PageHero from '@/components/PageHero/PageHero';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const Affiliated = () => {

   const { language } = useGlobalContext();
   const { pageHero, page, affiliatedCompanies } = affiliated( language );

   return (
      <div className='pageContainer'>
         <PageHero image='/images/lg/affiliated/affiliated.jpg' title={pageHero.title}
            message1={pageHero.desc} />

         <div className='w-full lg:w-[80%] m-auto px-[5px] lg:px-0'>
            <div className='text-[2rem] lg:text-[2.5rem] font-bold md-[20px]'>{page.title}</div>
            <div className='text-[1rem] leading-6'>{page.desc}</div>
         </div>

         <div className='w-full lg:w-[80%] m-auto px-[5px] flex flex-col md:flex-row flex-wrap md:justify-start gap-[calc(var(--gap-base)*0.8)]'>
            { affiliatedCompanies.map((field, i) => (
               <div key={i}>
                  <div className='mb-[5px] flex items-center gap-[20px]'>
                     <div className='text-[1.5rem] font-bold text-LGred'>{field.fields}</div>
                     <Image src={field.icon} width={30} height={30} alt='icon' />
                  </div>
                  <div className='w-full flex flex-wrap gap-[10px]'>
                     { field.companies.map((company, j) => (
                        <Link key={j} href={'/affiliated/company?name='+encodeURIComponent(company.name)} 
                           className='w-[110px] sm:w-[150px] h-[100px] sm:h-[120px] py-0 px-[5px] sm:px-[10px] flex justify-between items-center 
                              border-2 border-solid border-LGgray-light rounded shadow-md 
                              hover:no-underline hover:text-LGred hover:border-LGred transition duration-300 ease-in-out transform'>
                           <div className='mb-[5px]'>{company.name}</div>
                           <ArrowForwardIosIcon className='text-[1.5rem]' />
                        </Link>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Affiliated;