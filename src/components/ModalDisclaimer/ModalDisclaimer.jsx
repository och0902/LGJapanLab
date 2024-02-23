import React from 'react';
import Disclaimer from './Disclaimer';

const ModalDisclaimer = () => {

   const disclaimer = Disclaimer();

   return (
      <div className='w-full'>
         <div className='w-full lg:w-11/12 m-auto mt-24'>
            <div className='text-2xl lg:text-4xl text-center'>{disclaimer.title}</div>
            <div className='mt-12'>{disclaimer.desc}</div>
            { disclaimer.disclaimers.map((item, i) => (
               <div key={i} className='my-10'>
                  <div className='text-xl md:text-2xl'>{item.title}</div>
                  <div className='mt-4'>{item.content}</div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ModalDisclaimer;