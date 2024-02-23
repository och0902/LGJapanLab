'use client';

import React, { useState } from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import FooterMenu from './FooterMenu';
import Link from 'next/link';
import Modal from 'react-modal';
import ModalPrivacyPolicy from '@/components/ModalPrivacyPolicy/ModalPrivacyPolicy';
import ModalDisclaimer from '@/components/ModalDisclaimer/ModalDisclaimer';

Modal.setAppElement('body');

const Footer = () => {

   const { language } = useGlobalContext();
   const { logo, copyright, menu, modalBtn } = FooterMenu( language );

   const [ privacyModal, setPrivacyModal ] = useState(false);
   const [ disclaimer, setDisclaimer ] = useState(false);

   const customStyles = {
      content: { width: '86%', margin: 'auto', backgroundColor: '#EBEBEB' },
   };

   return (
      <div className='w-full p-2.5 bg-LGgray-light'>
         <div className='w-full lg:w-10/12 m-auto'>
            <div className='py-3 border-b-2 border-solid border-white font-bold'>
               <Link href='/' className='hover:cursor-pointer hover:text-LGred hover:underline'>{logo}</Link>
            </div>
            <div className=' py-3 flex justify-between items-center text-xs'>
               <div className='flex flex-col gap-0 sm:flex-row sm:gap-2.5'>
                  <div className='my-1'>{copyright[0]}</div>
                  <div className='my-1'>{copyright[1]}</div>
               </div>
               <div className='pr-2.5 flex flex-col gap-0 sm:flex-row sm:gap-5'>
                  <div className='my-1'>
                     <div className='hover:cursor-pointer hover:text-LGred hover:underline' onClick={() => setPrivacyModal(true)}>
                        {menu[0]}
                     </div>
                  </div>
                  <div className='my-1'>
                     <div className='hover:cursor-pointer hover:text-LGred hover:underline' onClick={() => setDisclaimer(true)}>
                        {menu[1]}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Modal isOpen={privacyModal} style={customStyles} contentLabel={'Privacy Policy'} >
            <div className='pageContainer'>
               <ModalPrivacyPolicy />
               <button onClick={() => setPrivacyModal(false)}
                  className='px-6 py-6 text-xl font-bold border border-solid border-LGgray hover:no-underline
                     rounded-md transition ease-in-out duration-500
                     hover:cursor-pointer hover:text-LGred hover:border-LGred '>
                  {modalBtn[0]}
               </button>
            </div>
         </Modal>

         <Modal isOpen={disclaimer} style={customStyles} >
            <div className='pageContainer'>
               <ModalDisclaimer />
               <button onClick={() => setDisclaimer(false)}
                  className='px-6 py-6 text-xl font-bold border border-solid border-LGgray 
                     rounded-md transition ease-in-out duration-500
                     hover:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred'>
                  {modalBtn[1]}
               </button>
            </div>
         </Modal>
      </div>
   );
};

export default Footer;