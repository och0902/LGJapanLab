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

      router.push('/en/recruit');
   };

   return (
      <Box className='pageContainer' onClick={handleClick} >
         <Box sx={{  width: '100px', mt: 'var(--gap-basic)', aspectRatio: '1/1', position: 'relative' }}>
            <Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ fontSize: '1.5rem' }}>
               Your recruitment application has been submitted.
            </Box>
            <Box sx={{ mb: 'var(--gap-basic)', px: '5px', fontSize: '1.2rem' }}>
               Please check the results of the application in the inquiry of the results of the recruitment application.
            </Box>
         </Box>
      </Box>
   );
};

export default VisitApplySuccess;