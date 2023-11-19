'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { termsOfUse } from '../etc';

const TermsOfUse = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>  
			<Box sx={{ width: '100%', lineHeight: '150%' }}>
				<Box sx={{ width: '80%', m: 'auto',	[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ fontSize: '2rem', textAlign: 'center', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>Terms of Use</Box>
               <Box sx={{ mt: '50px' }}>This page may contain notifications from other owners and copyright information.</Box>
               { termsOfUse.map((item, i) => (
                  <Box key={i} sx={{ my: '40px' }}>
                     <Box sx={{ fontSize: '1.5rem', [theme.breakpoints.down('md')] : { fontSize: '1.25rem' }}}>{item.title}</Box>
                     <Box sx={{ mt: '15px' }}>{item.content}</Box>
                  </Box>
               ))}
				</Box>
         </Box>
      </Box>
   );
};

export default TermsOfUse;