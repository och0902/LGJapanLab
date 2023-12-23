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

      router.push('/visit');
   };

   return (
      <Box className='pageContainer' onClick={handleClick}>
         <Box sx={{  width: '100px', aspectRatio: '1/1', position: 'relative' }}>
            <Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ fontSize: '1.5rem' }}>
               Your visit application has been submitted.
            </Box>
            <Box sx={{ px: '5px', fontSize: '1.2rem' }}>
               Please check the results of the application in the inquiry of the results of the visit application.
            </Box>
            <Box sx={{ width: '70%', mt: '30px', p: '20px', display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '150%',
               border: '1px solid var(--color-LGgray)', borderRadius: '10px',
               [theme.breakpoints.down('md')] : { width: '100%', mx: '5px' } }}>
               <Box>
                  On the day of your visit, please submit an employee card or business card that can be identified at the reception desk on the second floor of the Yokohama building.
               </Box>
               <Box>
                  Seal your smartphone camera, laptop port and get your pass.
               </Box>
               <Box>
               If you visit for more than 2 days in a row, please return the pass to the reception desk on the 2nd floor when you check out and receive it again when you check in the next day. (Do not take out the immigration card.)
               </Box>
            </Box>
         </Box>


      </Box>
   );
};

export default VisitApplySuccess;