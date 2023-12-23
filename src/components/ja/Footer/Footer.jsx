'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';
import { Box } from '@mui/material';
import Link from 'next/link';
import Modal from 'react-modal';
import { useTheme } from '@emotion/react';
import ModalPrivacyPolicy from '@/components/ja/ModalPrivacyPolicy/ModalPrivacyPolicy';
import ModalDisclaimer from '@/components/ja/ModalDisclaimer/ModalDisclaimer';

Modal.setAppElement('body');

const Footer = () => {

   const theme = useTheme();

   const [ privacyModal, setPrivacyModal ] = useState(false);
   const [ disclaimer, setDisclaimer ] = useState(false);

   const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
      },
   };

   return (
      <Box sx={{ width: '100%', mt: 'var(--margin-page-basic)', p: '10px', backgroundColor: 'var(--color-LGgray-light)' }}>
         <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%' }  }}>
            <Box sx={{ py: '10px', borderBottom: '1px solid var(--color-white)', fontWeight: 'var(--weight-bold)' }}>
               <Link href='/' className={styles.link}>LG Japan Lab Inc</Link>
            </Box>
            <Box sx={{ py: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
               <Box sx={{ display: 'flex', gap: '10px', [theme.breakpoints.down('sm')]: { flexDirection: 'column', gap: '0' } }}>
                  <Box sx={{ my: '3px' }}>Copyright ⓒ 2024 LG Japan Lab Inc.</Box>
                  <Box sx={{ my: '3px' }}>All Rights Reserved.</Box>
               </Box>
               <Box sx={{ display: 'flex', pr: '10px', gap: '20px', [theme.breakpoints.down('sm')]: { flexDirection: 'column', gap: '0' } }}>
                  <Box sx={{ my: '3px' }}>
                     <Box className={styles.link} onClick={() => setPrivacyModal(true)}>プライバシーポリシー</Box>
                  </Box>
                  <Box sx={{ my: '3px' }}>
                     <Box className={styles.link} onClick={() => setDisclaimer(true)}>免責事項について</Box>
                  </Box>
               </Box>
            </Box>
         </Box>

         <Modal isOpen={privacyModal} style={customStyles} contentLabel={'Privacy Policy'} >
            <Box className='pageContainer'>
               <ModalPrivacyPolicy />
               <button className={styles.modalBtn} onClick={() => setPrivacyModal(false)}>
                  プライバシーポリシーを閉じる
               </button>
            </Box>
         </Modal>

         <Modal isOpen={disclaimer} style={customStyles} >
            <Box className='pageContainer'>
               <ModalDisclaimer />
               <button className={styles.modalBtn} onClick={() => setDisclaimer(false)}>
                  免責事項についてを閉じる
               </button>
            </Box>
         </Modal>

      </Box>
   );
};

export default Footer;