'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';

const VisitApplySubmit = () => {

   const theme = useTheme();
   const router = useRouter();

   const handleClick = (e) => {
      (e).preventDefault();

      router.push('/visit');
   };

   return (
      <Box className='pageContainer' onClick={handleClick} sx={{ height: '60dvh' }} >
         <Box sx={{ width: '100px', aspectRatio: '1/1', position: 'relative' }}>
            <Image src='/images/lgjl/visit/underReview.png' fill sizes='100%' alt='success' />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ fontSize: '1.5rem' }}>
               訪問申請書が提出されました。
            </Box>
            <Box sx={{ px: '5px', fontSize: '1.2rem' }}>
               訪問申請状況で結果を確認してください。
            </Box>
         </Box>
      </Box>
   );
};

export default VisitApplySubmit;