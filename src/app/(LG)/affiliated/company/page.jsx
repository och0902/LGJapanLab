'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import affiliated from '../affiliated';
import { Grid } from '@mui/material';
import Link from 'next/link';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';

const Company = () => {

   const searchParams = useSearchParams();
   const companyName = searchParams.get('name');

   const { language } = useGlobalContext();
   const { page, affiliatedCompanies } = affiliated( language );

   return (
      <div className='pageContainer'>
         { affiliatedCompanies.map((field, i) =>             
            ( field.companies.map((company, j) => 
               ( company.name === companyName && (
                  <React.Fragment key={j}>
                     <Link target='_blank' href={company.url} className='w-full hover:no-underline hover:text-LGred transition ease-in-out'>
                        <div className='w-full lg:w-[80%] m-auto my-[calc(var(--gap-base)/2)] px-[10px] lg:px-0 flex items-end gap-[20px]'>
                           <div className='text-[2.5rem] font-bold'>{company.name}</div>
                           <div><KeyboardDoubleArrowRightIcon />{page.toHome}</div>
                        </div>
                        <div className='w-full bg-LGgray-light'>
                           <div className='w-full lg:w-[80%] m-auto py-[30px] px-[10px] lg:px-0 leading-6 '>{company.desc}</div>
                        </div>
                     </Link>
                     <Grid container className='w-full lg:w-[80%] m-auto mt-[calc(-1*var(--gap-base)/2)]'>
                        { company.videoclips && company.videoclips.map((videoclip, k) => (
                           <Grid key={k} item xs={6} sm={6} md={3} sx={{ p: '3px' }}>
                              <div className='flex flex-wrap'>
                                 <Link target='_blank' href={videoclip.url} className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
                                    <Image src={videoclip.thumbnail} fill sizes='width: 100%' className=' object-containt transition ease-in-out' alt='Affiliated' />
                                    <div className='absolute top-[65%] left-[7%] text-[1rem] text-white font-bold'>{videoclip.title}</div>
                                 </Link>
                              </div>
                           </Grid>
                        ))} 
                     </Grid>
                  </React.Fragment>
               ))
            ))
         )}
      </div>   
   );
};

export default Company;