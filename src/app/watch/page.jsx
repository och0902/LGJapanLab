'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';

const Watch = () => {

   const searchParams = useSearchParams();
   const v = searchParams.get('v');

   return (
      <Box className='pageContainer'>
         <video src={v} width='100%' controls autoPlay />
      </Box>
   );
};

export default Watch;