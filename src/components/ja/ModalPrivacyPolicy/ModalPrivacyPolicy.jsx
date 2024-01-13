'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { privacyPolicy } from './privacyPolicy';

const ModalPrivacyPolicy = () => {

   const theme = useTheme();

   return (
      <Box sx={{ width: '100%', lineHeight: '150%' }}>
         <Box sx={{ width: '90%', m: 'auto', mt: '100px', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
            <Box sx={{ fontSize: '2rem', textAlign: 'center', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>プライバシーポリシー</Box>
            <Box sx={{ mt: '50px', textAlign: 'right' }}>改定：2022年4月1日</Box>
            <Box sx={{ mt: '40px' }}>
               LG Japan Lab株式会社（以下「当社」といいます。）はすべてのお客様、お取引先および採用候補者等（以下、「お客様」といいます。）の個人情報保護に細心の注意を払っております。 
               当社は、「個人情報の保護に関する法律」（以下「個人情報保護法」といいます。）の定めに基づき、お客様の個人情報を尊重し、以下の基本方針にしたがって個人情報の保護を行います。
            </Box>
            { privacyPolicy.map((item, i) => (
               <Box key={i} sx={{ my: '40px' }}>
                  <Box sx={{ fontSize: '1.5rem', [theme.breakpoints.down('md')] : { fontSize: '1.25rem' }}}>{item.title}</Box>
                  <Box sx={{ mt: '15px' }}>{item.desc1}</Box>
                  <Box sx={{ mt: '15px' }}>{item.desc2}</Box>
                  <Box sx={{ mt: '15px', pl: '20px' }}>
                     {item.articles.map((article, j) => (
                        <Box key={j} sx={{ my: '10px' }}>{article}</Box>
                     ))}
                  </Box>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default ModalPrivacyPolicy;
