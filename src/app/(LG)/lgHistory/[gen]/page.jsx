'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import lgHistory from './lgHistory';
import { ImageListItemBar, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero/PageHero';

const LGHistory = ({ params }) => {

   const { language } = useGlobalContext();
   const { pageHero, LGHistories } = lgHistory( language );

   let { gen } = params;
   if ( gen == '0' ) { gen = Math.floor(Math.random() * LGHistories.length) + 1;  };

   return (
      <div className='pageContainer'>
         <PageHero image='/images/lg/lgHistory/LGHistory.jpg' title={pageHero.title}
            message1={pageHero.message}/>
         
         <div className='w-full mt-[calc(-1*var(--gap-base))] mb-[--gap-base] pl-[2%] flex flex-wrap flex-row justify-around items-center 
            bg-LGgray-light lg:mb-0 lg:pl-[5%]'>
            { LGHistories.map((history, i) => (
               <Link key={i} href={`/lgHistory/${++i}`} className='w-[24%] flex flex-col items-start hover:text-LGred hover:no-underline'>
                  <div className='w-full mt-[20px] h-[45px] sm:h-[60px] lg:h-[90px]'>
                     <div className={`text-[1rem] sm:text-[1.5rem] lg:text-[2rem] ${(history.generation == gen && 'font-bold text-black')}`}>{history.period}</div>
                     <div className={`text-[0.65rem] md:text=[0.75rem] lg:text-[0.85rem] ${(history.generation == gen && 'text-black')}`}>{history.achievement}</div>
                  </div>
                  <div className='w-[75%] md:w-[50%] aspect-[280/350] relative overflow-hidden'>
                     <Image src={history.mainImg} fill sizes='100%' 
                        className='transition ease-in-out duration-1000 hover:scale-[1.5]' alt='LG Generation Thumbnail' />
                  </div>
               </Link>
            ))}
         </div>

         { LGHistories.map((genHistory, i) => 
            ( genHistory.generation == gen && ( 
               <div key={i} className='w-full m-auto'>
                  <div className='w-full lg:w-[80%] m-auto mt-[calc(-1*var(--gap-base))] lg:mt-0 text-center'>
                     <div className='mb-[20px] text-[1.5rem] font-bold flex flex-wrap justify-center'>
                        <div> {genHistory.chairman} : </div>
                        <div className='pl-[10px] text-LGred'>{genHistory.period}</div>
                     </div>
                     <div className='mb-[20px]'>{genHistory.meaning}</div>
                     <div className='mb-[120px] text-[2rem] lg:text-[2.5rem] font-bold flex flex-wrap justify-center'>
                        <div className='text-LGred'>{genHistory.introTitle1}</div>
                        <div className='pl-[10px] text-black'> {genHistory.introTitle2}</div>
                     </div>
                  </div>
                  <div className='w-full m-auto bg-LGgray-light'>
                     <Grid container className='w-full lg:w-[80%] m-auto py-[30px] flex-row items-center text-black'>
                        <Grid item xs={12} md={5} className='px-[20px]'>
                           <Grid container className='pr-[10px] items-center'>
                              {genHistory.imgs.map((img, j) => (
                                 <Grid item key={j} xs={4} sm={2} md={6} lg={6} xl={4} sx={{ p: '1px' }}>
                                    <div className='aspect-square relative'>
                                       <Image src={img.url} fill sizes='width: 100%' className='object-contain' alt={img.name} />
                                       <ImageListItemBar title={img.name} />
                                    </div>
                                 </Grid>
                              ))}
                           </Grid>
                        </Grid>
                        <Grid item xs={12} md={7} className='py-[30px] px-[20px]'>
                           {genHistory.events.map((history, j) => (
                              <div key={j} className={`py-[5px] flex flex-row gap-[5px] text-[0.875rem] ${history.selected && 'text-LGred font-bold'}`}>
                                 <div className='mr-[10px] flex justify-evenly'>
                                    {history.date.split('').map((character, k) => (
                                       <div key={k} className='w-[9px] text-center md:w-[7px]'>{character}</div>
                                    ))}
                                 </div>
                                 <div>{history.history}</div>
                              </div>
                           ))}
                        </Grid>
                     </Grid> 
                  </div>
               </div>
            ))
         )}
      </div>
   );
};

export default LGHistory ;