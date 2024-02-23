'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import jobPosting from '../jobPosting';
import { BtnRedLink } from '@/components/BtnRed/BtnRed';

const JobDetail = ({ params }) => {

   const { language } = useGlobalContext();
   const { pageHero, btn, jobPostings } = jobPosting(language);

   const { job } = params;
   const [ type, id ]  = job.split('_');

   return (
      <div className='pageContainer'>
         <div className='w-full'>

            <div className='w-full lg:w-[80%] m-auto flex justify-between items-center'>
               <div className='text-[1.5rem] sm:text-[2.5rem] font-bold text-LGred'>{pageHero.title}</div>
               <div className='w-[250px] flex justify-end'>
                  <BtnRedLink href='/recruitApplication' title={btn} />
               </div>
            </div>

            <div className='w-full mt-[10px] bg-LGgray-light text-black'>
               <div className='w-full lg:w-[80%] m-auto'>
                  { jobPostings.map((jobPosting, i) => ( jobPosting.type === type && (
                     jobPosting.jobs.map((job, j) => ( job.id === id && (
                        job.details.map((detail, k) => (
                           <div key={k} className='p-[20px] lg:px-0 leading-6 border-b-[1px] border-white flex'>
                              <div className='basis-[20%]'>{detail.item}</div>
                              <div className='basis-[80%]'>
                                 {detail.contents && detail.contents.map((content, l) => (
                                    <div key={l}>{content}</div>
                                 ))}
                              </div>
                           </div>
                        ))
                     ))
                  ))
               ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobDetail;