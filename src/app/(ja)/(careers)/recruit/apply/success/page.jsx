'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';

const VisitApplySuccess = () => {

   const theme = useTheme();
   const router = useRouter();
   
   const handleClick = (e) => {
      (e).preventDefault();

      router.push('/recruit');
   };

   return (
      <Box className='pageContainer' onClick={handleClick} >
         <Box sx={{  width: '100px', mt: 'var(--gap-basic)', aspectRatio: '1/1', position: 'relative' }}>
            <Image src='/images/lgjl/visit/success.jpg' fill sizes='100%' alt='success' />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ fontSize: '1.5rem' }}>
               採用志願書が提出されました。
            </Box>
            <Box sx={{ mb: 'var(--gap-basic)', px: '5px', fontSize: '1.2rem' }}>
               採用申し込み状況で志願結果を確認してください。
            </Box>
         </Box>
      </Box>
   );
};

export default VisitApplySuccess;