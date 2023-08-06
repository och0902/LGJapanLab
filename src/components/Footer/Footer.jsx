'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
   return (
      <Box sx={{ margin: '10vh auto', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
         <Typography variant='body1'>Copyright ⓒ 2024 LG Japan Lab Inc. All Rights Reserved.</Typography>
      </Box>
   );
};

export default Footer;