import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '@emotion/react';

const PageHero = ({ image, aspectRatio, title, color='var(--color-white)', message1, message2 }) => {

   const theme = useTheme();
   
   return (
      <Box sx={{ width: '100%', aspectRatio, position: 'relative',
         [theme.breakpoints.down('md')] : { width: '175%' } }}>
         <Image src={image} fill sizes='100%' alt='PageHero' />
         <Box sx={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', px: '10%',
            [theme.breakpoints.down('md')] : { px: '25%' }}}>
            <Box sx={{ color }}>
               <Box sx={{ fontSize: '4rem', fontWeight: 'var(--weight-bold)', textShadow: '5px 5px 5px var(--color-LGgray)',
                  [theme.breakpoints.down('lg')] : { fontSize: '3.5rem' },
                  [theme.breakpoints.down('md')] : { fontSize: '3rem' },
                  [theme.breakpoints.down('sm')] : { fontSize: '2.5rem' } }}>{title}</Box>
               <Box sx={{ [theme.breakpoints.down('md')] : { fontSize: '0.75rem' } }}>{message1}</Box>
               <Box sx={{ [theme.breakpoints.down('md')] : { fontSize: '0.75rem' } }}>{message2}</Box>
            </Box>
         </Box>
      </Box>
   );
};

export default PageHero;