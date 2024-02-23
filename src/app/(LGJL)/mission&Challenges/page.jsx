'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import missionChallenges from './mission&Challenges' ;
import PageHero from '@/components/PageHero/PageHero';
import Image from 'next/image';

const MissionChallenges = () => {

   const { language } = useGlobalContext();
   const { pageHero, page, RNDFields, openInnovations } = missionChallenges( language );

   return (
		<div className='pageContainer'>
         <PageHero image='/images/lgjl/mission&Challenges/Mission&Challenges.jpg' title={pageHero.title} />

         <div className='w-full'>
            <div className='w-full lg:w-[80%] m-auto px-[5px] lg:px-0'>
               <div className='w-[80%] sm:w-[60%] lg:w-[700px] mt-[var(--gap-base)] aspect-[918/203] relative'>
                  <Image src='/images/lgjl/mission&Challenges/FutureLifeWithOurTechnology.png' fill sizes='100%' alt='Future Life With Our Technology' />
               </div>
            </div>

            <div className='w-full lg:w-[80%] m-auto mt-[20px] px-[5px] lg:px-0 text-[2rem] lg:text-[2.5rem] font-bold text-LGred'>
               {page.title[0]}
            </div>
            <div className='w-full lg:w-[80%] m-auto mt-[10px] px-[5px] lg:px-0 leading-6'>{page.desc[0]}</div>
         </div>

         <div className='w-full'>
            <div className='w-full lg:w-[80%] m-auto px-[5px] lg:px-0 text-[2rem] lg:text-[2.5rem] font-bold text-LGred'>{page.title[1]}</div>
            <div className='w-full lg:w-[80%] m-auto mt-[10px] px-[5px] lg:px-0 leading-6'>{page.desc[1]}</div>

            <div className='w-full lg:w-[80%] h-full m-auto mt-[30px] px-[5px] lg:px-0 flex flex-col md:flex-row gap-[40px] md:gap-[15px]'>
               {RNDFields.map((field, i) => (
                  <div key={i} className='basis-[50%]'>
                     <div className='flex items-center'>
                        <div className='mt-[20px] px-[20px] text-[1.5rem] font-bold text-black'>{field.field}</div>
                        <Image src={field.icon} width={30} height={30} className='mb-[-10px]' alt='fields icon' />
                     </div>
                     <div className='h-full py-[20px] px-[10px] md:px-[20px] text-black bg-LGgray-light rounded-[40px] shadow-md shadow-LGgray-light'>
                        {field.roles.map((role, j) => (
                           <React.Fragment key={j}>
                              <div className='py-[15px]'>{role.main}</div>
                              {role.sub.map((sub, k) => (
                                 <div key={k} className='pl-[10px] pb-[10px]'>
                                    <div className='pb-[5px]'>{sub.category}</div>
                                    <div className='pl-[10px] text-[0.85rem]'>{sub.desc}</div>
                                 </div>
                              ))}
                           </React.Fragment>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className='w-full'>
            <div className='w-full lg:w-[80%] m-auto px-[5px] lg:px-0 text-[2rem] lg:text-[2.5rem] font-bold text-LGred'>{page.title[2]}</div>
            <div className='w-full lg:w-[80%] m-auto mt-[10px] px-[5px] lg:px-0 leading-6'>{page.desc[2]}</div>

            <div className='w-full lg:w-[80%] m-auto mt-[40px] px-[5px] lg:px-0 text-black'>
               <div className='text-[1.5rem] font-bold'>{page.subTitle}</div>
               <div className='text-[1.2rem]'>{page.subDesc}</div>
            </div>

            <div className='w-full'>
               {openInnovations.map((oi, i) => (
                  <React.Fragment key={i}>
                     <div className='w-full lg:w-[80%] m-auto mt-[40px] px-[5px] lg:px-0'>
                        <div className='text-[1.25rem]'>
                           <div>{oi.title}</div><div>{oi.titleDesc}</div>
                        </div>
                     </div>
                     <div className='w-full py-[20px] px-[5px] bg-LGgray-light'>
                        <div className='w-full lg:w-[80%] m-auto leading-6 text-black '>
                           {oi.roles.map((role, j) => (
                              <div key={j} className='py-[5px]'>{role}</div>
                           ))}
                        </div>
                     </div>
                  </React.Fragment>
               ))}
            </div>
         </div>
      </div>
   );
};

export default MissionChallenges;