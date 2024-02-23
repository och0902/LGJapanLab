import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';

const ModalPrivacyPolicy = () => {

   const privacypolicy = PrivacyPolicy();

   return (
      <div className='w-full'>
         <div className='w-full lg:w-11/12 m-auto mt-24'>
            <div className='text-2xl lg:text-4xl text-center'>{privacypolicy.title}</div>
            <div className='mt-12 text-right'>{privacypolicy.revise}</div>
            <div className='mt-10'>{privacypolicy.desc}</div>
            { privacypolicy.privacyPolicy.map((item, i) => (
               <div key={i} className='mt-10'>
                  <div className='text-xl md:text-2xl'>{item.title}</div>
                  <div className='mt-4'>{item.desc1}</div>
                  <div className='mt-4'>{item.desc2}</div>
                  <div className='mt-4 pl-5'>
                     {item.articles.map((article, j) => (
                        <div key={j} className='my-3'>{article}</div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ModalPrivacyPolicy;
