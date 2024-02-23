'use client';

import React from 'react';
import PageHero from '@/components/PageHero/PageHero';
import JLHistories from './jlhistory';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';

const JLHistory = () => {

   const { language } = useGlobalContext();
   const { pageHero, page, affiliated, jlHistories, integrated, lges } = JLHistories( language );

   return (
		<div className='pageContainer'>
         <PageHero image='/images/lgjl/JLHistory.jpg' title={pageHero.title} message1={pageHero.message}/>

         <div className='w-full'>
            <div className='w-full lg:w-[80%] m-auto mb-[2dvh] text-[2rem] lg:text-[2.5rem] font-bold'>{page.title}</div>
            <div className='w-full lg:w-[80%] m-auto mb-[5dvh] px-[5px] lg:px-0 leading-6'>
               {page.desc.map((desc, i) => (
                  <div key={i} className='my-[30px]'>{desc}</div>
               ))}
            </div>
            <div className='w-full lg:w-[80%] m-auto'>
               <div className='w-full mb-[5dvh] flex text-center gap-[2px]'>
                  <div style={{flex: 3}} className='py-[15px] sm:text-[1.25rem] text-white bg-LGgray' >{affiliated[0]}</div>
                  <div style={{flex: 2}} className='py-[15px] sm:text-[1.25rem] text-white bg-LGgray' >{affiliated[1]}</div>
               </div>
               <div className='w-full overflow-hidden'>
                  <table className='w-full border-collapse border-0'>
                     <thead>
                        <tr>
                           { jlHistories.companies.map((company, i) => (
                              <th key={i} style={{ width: '20%' }}>
                                 <div className='h-[80px] text-[0.7rem] sm:text-[1rem] bg-LGgray-light rounded-[40px] text-LGred
                                    flex justify-center items-center'>
                                    <div>{company.name}</div>
                                 </div>
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody>
                        { jlHistories.events.map((row, i) => (
                           <tr key={i}>
                              {row.map((event, j) => (
                                 <td key={j} className='w-[20%] py-[20px] border-l-2 border-dotted border-LGgray-light'>
                                    <div className='text-[0.7rem] sm:text-[1rem] flex flex-col xl:flex-row gap-[5px]'>
                                       <div>{event.date}</div><div>{event.history}</div>
                                    </div>
                                 </td>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className='w-full p-[15px] text-center bg-LGgray-light'>
                  <div className='my-[15px] text-LGred font-bold'>{integrated.history[0]}</div>
                  <div className='my-[15px] text-[1rem] text-black'>{integrated.desc[0]}</div>
               </div>
               <div  className='w-full overflow-hidden'>
                  <table style={{ width: '100%' }}>
                     <tbody>
                        <tr className='border-0'>
                           <td className='w-[20%] py-[20px] border-l-2 border-dotted border-LGgray-light'></td>
                           <td className='w-[20%] py-[20px] border-l-2 border-dotted border-LGgray-light'></td>
                           <td className='w-[20%] py-[20px] border-l-2 border-dotted border-LGgray-light'></td>
                           <td className='w-[20%] py-[20px] border-l-2 border-dotted border-LGgray-light'></td>
                           <td className='w-[20%] py-[20px] border-l-2 border-dotted border-LGgray-light'>
                              <div className='text-[0.7rem] sm:text-[1rem] flex flex-col xl:flex-row gap-[5px]'>
                                 <div>{lges.date}</div><div>{lges.history}</div>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               <div className='w-full p-[15px] text-center bg-LGgray-light'>
                  <div className='my-[15px] text-LGred font-bold'>{integrated.history[1]}</div>
                  <div className='my-[15px] text-[1rem] text-black'>{integrated.desc[1]}</div>
               </div>
            </div>
         </div>      

      </div>
   );
};

export default JLHistory;