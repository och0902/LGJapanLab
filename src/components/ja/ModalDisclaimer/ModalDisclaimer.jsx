'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { disclaimer } from './Disclaimer';

const ModalDisclaimer = () => {

   const theme = useTheme();

   return (
      <Box sx={{ width: '100%', lineHeight: '150%' }}>
         <Box sx={{ width: '90%', m: 'auto',	mt: '100px', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
            <Box sx={{ fontSize: '2rem', textAlign: 'center', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>免責事項について</Box>
            <Box sx={{ mt: '50px' }}>このページは、他の所有者の通知及び著作権情報を含んでいる可能性があります。</Box>
            { disclaimer.map((item, i) => (
               <Box key={i} sx={{ my: '40px' }}>
                  <Box sx={{ fontSize: '1.5rem', [theme.breakpoints.down('md')] : { fontSize: '1.25rem' }}}>{item.title}</Box>
                  <Box sx={{ mt: '15px' }}>{item.content}</Box>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default ModalDisclaimer;